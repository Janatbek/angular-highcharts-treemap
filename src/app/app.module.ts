import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    TreemapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
