import { Component } from '@angular/core';
import { Highcharts } from "../highcharts/highcharts";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){
    console.log(Highcharts);
  }
}
