import { DataPoint, SeriesOptions, ChartObject, Options } from 'highcharts';

export type Point = number | [number, number] | [string, number] | DataPoint;
export type ChartSerie = SeriesOptions;
import * as _ from 'lodash';

export class Treemap {
  treemapContainer: ChartObject;

  constructor(public options: Options) {
    // init series array if not set
    
    if (!this.options.series) {
      this.options.series = [];
    }
  }

  CreateTreemapData(dataset: any, groupColumns: string[], targetValueColumn: string) {

    // call with (dataset, ['Chamber', "Tool"]j, 'ValueA')
    const pointCollection: any[];
    let  GrandTotal: number = 0;

    GrandTotal += this.RecurseGroup(dataset.columns, dataset.data, groupColumns, 0, targetValueColumn, pointCollection, '');

    // Chamber.A -> aggregate value 
    // Chamber.A.Tool.1 -> aggregate value, parent = Chamber.A 
  }

  RecurseGroup(columns: string[], rows: string[][], groupColumns: string[],  currentGIdx: number, targetValueColumn: string, pointCollection: any[], parentId: string): number {
    const gcIndex = columns.indexOf(groupColumns[currentGIdx]);
    const dictionary = _.groupBy(rows, x => { return x[gcIndex] });
    
    let total: number = 0;

    Object.keys(dictionary).forEach(k => {
      const rowSubset = dictionary[k];
      let groupTotal: number = 0;
      const newParentId = `parentId.${groupColumns[currentGIdx]}.${k}`

      if (currentGIdx = groupColumns.length - 1) {
        // last group
        groupTotal = rows.reduce<number>( (p, c) => { return p + Number(c[columns.indexOf(targetValueColumn)]); }, 0);
          
      } else {        
        groupTotal = this.RecurseGroup (columns, rowSubset, groupColumns, currentGIdx+1, targetValueColumn, pointCollection, newParentId);
      }

      // pointCollection.add(...) // name = newParentId, value = groupTotal, parent = parentId if not empty  
      total += groupTotal;
    });
    return total
  }

  addPoint(
    point: Point, 
    serieIndex = 0, 
    redraw = true, 
    shift = false): void {
    (<Point[]>this.options.series[serieIndex].data).push(point);
  
    if (this.treemapContainer) {
      this.treemapContainer.series[serieIndex].addPoint(point, redraw, shift);
    }
  }

//   removePoint(pointIndex: number, serieIndex = 0): void {
//     // TODO add try catch (empty)
//     (<Point[]>this.options.series[serieIndex].data).splice(pointIndex, 1);
//     if (this.ref) {
//       this.ref.series[serieIndex].removePoint(pointIndex, true);
//     }
//   }

//   addSerie(serie: ChartSerie): void {
//     // init data array if not set
//     if (!serie.data) {
//       serie.data = [];
//     }

//     this.options.series.push(serie);

//     if (this.ref) {
//       this.ref.addSeries(serie);
//     }
//   }

//   removeSerie(serieIndex: number): void {
//     // TODO add try catch (empty)
//     this.options.series.splice(serieIndex, 1);
//     if (this.ref) {
//       this.ref.series[serieIndex].remove(true);
//     }
//   }
}
