import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import * as d3Select from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChartDrawingService {
  backColor = d3Scale.scaleOrdinal()
    .range(["red", "blue", "green", "grey", "orange", "yellow"]);
  color = d3Scale.scaleOrdinal()
    .range(["#ca0020", "#92c5de", "#f4a582", "#d5d5d5", "#0571b0"]);
  x: any;
  y: any;
  constructor() { }
  /**initiate axis */
  initAxis(Stats: any, svgSetting: any) {
    this.x = d3Scale.scaleBand().rangeRound([0, svgSetting.width]).padding(0.1);
    this.x.domain(Stats.map((d: any) => d.id));
    this.y = d3Scale.scaleLinear().rangeRound([svgSetting.height, svgSetting.margin.top / 2]);
    this.y.domain([0, d3Array.max(Stats, (d: any) => d.yValue)]);
  }
  /**Draw X. input,svgSetting{hight,width}*/
  drawX(svgSetting: any, g: any) {
    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + svgSetting.height + ')')
      .call(d3Axis.axisBottom(this.x));
  }
  /**Draw XGroup. input,svgSetting{hight,width}*/
  drawXGroup(Stats: any, svgSetting: any, g: any) {
    let xType = d3Scale.scaleOrdinal()
      .range(Stats.map((d: any) => d.xValue));
    let xText = g.selectAll('.xText')
      .data(Stats)
      .enter().append("g")
    xText.append("text")
      .attr('class', 'axis-title')
      .attr("x", 0)
      .attr('y', (d: any, i: any) => this.x(d.id))
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text((d: any) => xType(d.id))
      .attr('transform', (d: any) =>
        'translate(' + this.x.bandwidth() / 2 + ', ' + (svgSetting.height + 10) + '), rotate(-90)')
  }
  /**Draw X with category. input,svgSetting{hight,width}*/
  drawXCategory(Stats: any, svgSetting: any, g: any) {
    let xScale = d3Scale.scaleBand().rangeRound([0, svgSetting.width])
      .padding(0.1);
    xScale.domain(Stats.map((d: any) => d.category));

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + (svgSetting.height + 60) + ')')
      .call(d3Axis.axisBottom(xScale));
  }
  /**Draw Y */
  drawY(Lable: string, g: any) {
    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      //  .attr('y', 6)
      // .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text(Lable);
  }
  /**draw title */
  drawTitle(title: string, svg: any, svgSetting: any) {
    svg.append("text")
      .attr("x", (svgSetting.width / 2))
      .attr("y", (svgSetting.margin.top / 2))
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("text-decoration", "underline")
      .text(title);
  }
  /**draw legend */
  drawLegend(Category: any, svgSetting: any, g: any) {
    let color: any;
    color = d3Scale.scaleOrdinal()
      .range(["#ca0020", "#92c5de", "#f4a582", "#d5d5d5", "#0571b0"]);
    let legend = g.selectAll('.legend')
      .data(Category)
      .enter().append("g")
      .attr("class", "legend")
      .style("opacity", "0");
    legend.append("rect")
      .attr("x", svgSetting.width - 20)
      .attr('y', (d: any, i: any) => (i * 20))
      .attr("width", 20)
      .attr("height", 20)
      .style("fill", (d: any) => color(d));
    legend.append("text")
      .attr("x", svgSetting.width - 20)
      .attr('y', (d: any, i: any) => (10 + i * 20))
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text((d: any) => d);
    legend.style("opacity", "1");
  }
  /**draw plain background  CategoryInfo: Category[]*/
  drawPlainBground(svgSetting: any, g: any) {
    g.append("rect")
      .attr("width", svgSetting.width)
      .attr("height", svgSetting.height)
      .attr("fill", "#d5d5d5")
      .attr("opacity", 0.2);
  }
  /**draw categories background  CategoryInfo: Category[]*/
  drawBackground(CategoryInfo: any, Total: number, svgSetting: any, g: any) {
    let backColor = d3Scale.scaleOrdinal()
      .range(["red", "blue", "green", "yellow", "orange", "purple"]);
    let xScale = d3Scale.scaleBand().rangeRound([0, svgSetting.width]).padding(0);
    xScale.domain(CategoryInfo.map((d: any) => d.category));

    g.selectAll('.slice')
      .data(CategoryInfo)
      .enter().append('rect')
      .attr('x', (d: any) => xScale(d.category))
      .attr('y', (d: any) => 0)
      .attr('width', (d: any) => svgSetting.width / Total)
      .attr('fill', (d: any) => backColor(d.category))
      .attr('height', svgSetting.height)
      .attr("opacity", 0.3);
  }
  /**draw path line */
  drawPath(yValue: any, color: any, dasharray: any, g: any, svgSetting: any) {
    //path line
    //  svg.append("g")
    g.append("line")
      .attr("x1", (d: any) => 0)
      .attr("y1", (d: any) => this.y(yValue))
      .attr("x2", (d: any) => svgSetting.width)
      .attr("y2", (d: any) => this.y(yValue))
      .attr("stroke-width", 1)
      .style("stroke-dasharray", dasharray)//dashed array for line eg:"5,5"
      .attr("stroke", color);
  }
  /**Draw color bar*/
  drawBars(Stats: any, svgSetting: any, g: any, svg: any) {
    let color = d3Scale.scaleOrdinal()
      .range(["#ca0020", "#92c5de", "#f4a582", "#d5d5d5", "#0571b0"]);
    g.selectAll('.bar')
      .data(Stats)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d: any) => this.x(d.id))
      .attr('y', (d: any) => this.y(d.yValue))
      .attr('width', this.x.bandwidth())
      .attr('fill', (d: any) => color(d.category))
      .attr('height', (d: any) => svgSetting.height - this.y(d.yValue))
      .attr("stroke", "black");
  }
  /**Draw box*/
  drawBox(Stats: any, svgSetting: any, g: any, svg: any) {
    let color = d3Scale.scaleOrdinal()
      .range(["#ca0020", "#92c5de", "#f4a582", "#d5d5d5", "#0571b0"]);
    let xScale: any;
    xScale = d3Scale.scaleBand().rangeRound([0, svgSetting.width]).padding(0.5);
    xScale.domain(Stats.map((d: any) => d.id));
    g.selectAll('.bar')
      .data(Stats)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d: any) => xScale(d.id))
      .attr('y', (d: any) => this.y(d.yValue))
      .attr('width', xScale.bandwidth())
      .attr('fill', (d: any) => color(d.category))
      .attr('height', (d: any) => svgSetting.height - this.y(d.yValue - d.min))
      .attr("stroke", "black")
    g.selectAll(".whiskers")
      .data(Stats)
      .enter()
      .append("line")
      .attr("x1", (d: any) => xScale(d.id))
      .attr("y1", (d: any) => this.y(d.avg))
      .attr("x2", (d: any) => xScale(d.id) + xScale.bandwidth())
      .attr("y2", (d: any) => this.y(d.avg))
      .attr("stroke", "#000")
      .attr("stroke-width", 1)
      .attr("fill", "none");
  }
  //Draw classed bars
  drawClassBars(Stats: any, CategoryInfo: any, Total: any, svgSetting: any, g: any) {
    let xTypeScale: any;
    xTypeScale = d3Scale.scaleBand().rangeRound([0, svgSetting.width]).padding(0.1);
    xTypeScale.domain(CategoryInfo.map((d: any) => d.category));

    let xSliceScale: any;
    xSliceScale = d3Scale.scaleBand().rangeRound([0, xTypeScale.bandwidth()]).padding(0.1);
    xSliceScale.domain(Stats.map((d: any) => d.xValue));

    console.log(xTypeScale.bandwidth());
    //let x1 = d3Scale.scaleOrdinal()
    //.range([0, svgSetting.width]);


    //x1.domain(CategoryInfo.map((d:any) => d.category)).range([0, x0.length]);
    for (let singleStats of Stats) {
      g.selectAll('.bar')
        .data(singleStats)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', (d: any) => xSliceScale(d.xValue))
        .attr('y', (d: any) => this.y(d.yValue))
        .attr('width', xSliceScale.bandwidth())
        .attr('fill', (d: any) => this.color(d.category))
        .attr('height', (d: any) => svgSetting.height - this.y(d.yValue))
        .attr("stroke", "black");
    }
    // g.selectAll('.bar')
    // .data(Stats)
    // .enter().append('rect')
    // .attr('class', 'bar')
    // .attr('x', (d: any) => xSliceScale(d.xValue))
    // .attr('y', (d: any) => this.y(d.yValue))
    // .attr('width', xSliceScale.bandwidth())
    // .attr('fill', (d: any) => this.color(d.category))
    // .attr('height', (d: any) => svgSetting.height - this.y(d.yValue))
    // .attr("stroke", "black");
  }

  /**可伸缩型背景，白写了没用上 */
  /**draw categories background  */
  UnusedrawBackground(CategoryInfo: any, TotalNum: number, svgSetting: any, g: any, svg: any) {

    let xScale = d3.scaleLinear()
      .domain([0, TotalNum])
      .range([0, svgSetting.width]);

    g.selectAll('.slice')
      .data(CategoryInfo)
      .enter().append('rect')
      .attr('x', (d: any) => xScale(d.accum))
      .attr('y', (d: any) => 0)
      .attr('width', (d: any) => xScale(d.number))
      .attr('fill', (d: any) => this.backColor(d.category))
      .attr('height', svgSetting.height)
      .attr("opacity", 0.5);
  }


}
