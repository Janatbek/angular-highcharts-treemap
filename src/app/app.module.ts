import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from "../highcharts/chart.module";  
import { TreemapModule } from "../highcharts/treemap.module";  

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    TreemapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
