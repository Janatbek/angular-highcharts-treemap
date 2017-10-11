import { Highcharts } from './highcharts';

import {
  Directive,
  Input,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  SimpleChange
} from '@angular/core';

import { Treemap } from './treemap';

@Directive({
  selector: '[treemap]'
})
export class TreemapDirective implements AfterViewInit, OnDestroy, OnChanges {
  @Input() treemap: Treemap;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.init();
  }

  ngOnDestroy() {
    this.destroy();
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    if (!changes['treemap'].isFirstChange()) {
      this.destroy();
      this.init();
    }
  }

  private init() {
    if (this.treemap instanceof Treemap) {
      this.treemap.treemapContainer = Highcharts.chart(this.el.nativeElement, this.treemap.options);
    }
  }

  private destroy() {
    if (this.treemap && this.treemap.treemapContainer) {
      this.treemap.treemapContainer.destroy();
      delete this.treemap.treemapContainer;
    }
  }
}
