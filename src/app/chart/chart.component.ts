import { Component, OnInit } from '@angular/core';
import { Treemap } from '../../highcharts/treemap';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log(Treemap);

  }
  treemap = new Treemap({
    chart: {
      type: 'treemap'
    },
    title: {
      text: 'Treemap'
    },
    credits: {
      enabled: false
    },
    
    series: [{
      
      data: [{
        name: 'A',
        value: 6
      }, {
        name: 'B',
        value: 6
      }, {
        name: 'C',
        value: 4
      }, {
        name: 'D',
        value: 3
      }, {
        name: 'E',
        value: 2
      }, {
        name: 'F',
        value: 2
      }, {
        name: 'G',
        value: 1
      }]
    }]
  });
  // add point to chart serie
  add() {
    this.treemap.addPoint(Math.floor(Math.random() * 10));
    console.log("test ==== ", this.treemap);
  }

}
