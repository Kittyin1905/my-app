import { Component, OnInit } from '@angular/core';
import { StatsStateBar,StateCategoryInfo }from '../dataInterface';
import { ChartDrawingService} from '../chart-drawing.service';
import * as d3Select from 'd3-selection';

@Component({
  selector: 'app-chart-national',
  templateUrl: './chart-national.component.html',
  styleUrls: ['./chart-national.component.css']
})
export class ChartNationalComponent implements OnInit {
  margin = { top: 60, right: 50, bottom: 100, left: 50 };
  width = 700 - this.margin.left - this.margin.right;
  height = 500 - this.margin.top - this.margin.bottom;
  svgSetting = { width: this.width, height: this.height, margin: this.margin };
  svg: any;
  g: any;

  constructor(private chartDrawingService: ChartDrawingService) { }

  ngOnInit(): void {

    this.initSvg();
    this.chartDrawingService.initAxis(StatsStateBar,this.svgSetting);
    this.chartDrawingService.drawXCategory(StateCategoryInfo,this.svgSetting,this.g); 
    this.chartDrawingService.drawXGroup(StatsStateBar,this.svgSetting,this.g);
    this.chartDrawingService.drawY('Frequence',this.g);
    this.chartDrawingService.drawTitle("Temporay Comparison",this.svg,this.svgSetting);
    this.chartDrawingService.drawBackground(StateCategoryInfo,4,this.svgSetting,this.g);
    this.chartDrawingService.drawLegend(['Capital','Reginal'], this.svgSetting,this.g);
    this.chartDrawingService.drawBars(StatsStateBar,this.svgSetting,this.g,this.svg); 
  }

  initSvg() {
    this.svg = d3Select.select('#chart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 900 500');
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')
  }
}