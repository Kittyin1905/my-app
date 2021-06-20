import { Component, OnInit } from '@angular/core';
import * as d3Select from 'd3-selection';
import { StatsSitesBox,SitesCategoryInfo}from '../dataInterface';
import { ChartDrawingService} from '../chart-drawing.service'
@Component({
  selector: 'app-chart-sites',
  templateUrl: './chart-sites.component.html',
  styleUrls: ['./chart-sites.component.css']
})
export class ChartSitesComponent implements OnInit {
  margin = { top: 60, right: 50, bottom: 50, left: 50 };
  width = 700 - this.margin.left - this.margin.right;
  height = 500 - this.margin.top - this.margin.bottom;
  svgSetting={width:this.width,height:this.height,margin:this.margin}; 
  svg: any;
  g: any;
  constructor(private chartDrawingService: ChartDrawingService) { }

  ngOnInit(): void {

    this.initSvg();
    this.chartDrawingService.initAxis(StatsSitesBox,this.svgSetting);
    this.chartDrawingService.drawX(this.svgSetting,this.g); 
    this.chartDrawingService.drawY('Frequence',this.g);
    this.chartDrawingService.drawTitle("Nicotine",this.svg,this.svgSetting);
    this.chartDrawingService.drawBackground(SitesCategoryInfo, 4, this.svgSetting, this.g);
    this.chartDrawingService.drawLegend(['T','C'], this.svgSetting,this.g);
    this.chartDrawingService.drawPath(20,'red','0,0',this.g,this.svgSetting);
    this.chartDrawingService.drawPath(50,'blue','5,5',this.g,this.svgSetting);
    this.chartDrawingService.drawPath(10,'black','0,0',this.g,this.svgSetting);
    this.chartDrawingService.drawBox(StatsSitesBox,this.svgSetting,this.g,this.svg); 
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
