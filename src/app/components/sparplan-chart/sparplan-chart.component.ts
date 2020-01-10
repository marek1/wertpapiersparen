import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-sparplan-chart',
  templateUrl: './sparplan-chart.component.html',
  styleUrls: ['./sparplan-chart.component.scss']
})
export class SparplanChartComponent implements OnInit, OnChanges {

  @Input() sparplanSum: number;
  @Input() years: number;

  public chartLabels: Label[] = [];
  public chartData: number[] = [];
  public chartType: ChartType = 'line';
  public chartLegend = false;
  public chartPlugins = [pluginDataLabels];
  public chartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sparplanSum  && changes.sparplanSum.currentValue) {
      this.fillData();
    }
  }

  fillData() {
    this.chartData = [];
    this.chartLabels = [];
    // 20 years , 12 months
    let accruedSum = this.sparplanSum;
    for (let i = 0; i < this.years; i++) {
      accruedSum += this.sparplanSum * 12; // months
      this.chartData.push(accruedSum);
      this.chartLabels.push((i + 1).toString() + 'Jahre');
    }
  }
}
