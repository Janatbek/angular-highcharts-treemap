import { Component, OnInit } from '@angular/core';
import { Chart } from '../../highcharts/chart';
import { Treemap } from '../../highcharts/treemap';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log(Chart);
    console.log(Treemap);
    
  }
  treemap = new Treemap({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Line 1',
      data: [1, 2, 3]
    }],

  });
  
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Line 1',
      data: [1, 2, 3]
    }]
  });

  // add point to chart serie
  add() {
    this.treemap.addPoint(Math.floor(Math.random() * 10));
    console.log("test ==== ", this.treemap);
  }

}
