import { Component, OnInit } from '@angular/core';
import * as d3Select from 'd3-selection';
import { StatsBoxChart}from '../dataInterface';
import { ChartDrawingService} from '../chart-drawing.service'
@Component({
  selector: 'app-chart-drugs',
  templateUrl: './chart-drugs.component.html',
  styleUrls: ['./chart-drugs.component.css']
})
export class ChartDrugsComponent implements OnInit {

  margin = { top: 60, right: 50, bottom: 50, left: 50 };
  width = 700 - this.margin.left - this.margin.right;
  height = 500 - this.margin.top - this.margin.bottom;
  svgSetting={width:this.width,height:this.height,margin:this.margin}; 
  svg: any;
  g: any;

  constructor(private chartDrawingService:ChartDrawingService) { }

  ngOnInit(): void {

     this.initSvg();
     this.chartDrawingService.initAxis(StatsBoxChart,this.svgSetting);
     this.chartDrawingService.drawX(this.svgSetting,this.g); 
     this.chartDrawingService.drawY('Frequence',this.g);
     this.chartDrawingService.drawTitle("Individule Site Temporal Comparison",this.svg,this.svgSetting);
     this.chartDrawingService.drawLegend(['T'], this.svgSetting,this.g);
     this.chartDrawingService.drawPlainBground(this.svgSetting,this.g);
     this.chartDrawingService.drawBox(StatsBoxChart,this.svgSetting,this.g,this.svg); 
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
