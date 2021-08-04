import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { AmountOfItem } from '../../../reducers/basket.reducer';
import { Currency } from '../../../enums/currencies';

@Component({
  selector: 'app-sparplan-chart',
  templateUrl: './sparplan-chart.component.html',
  styleUrls: ['./sparplan-chart.component.scss']
})
export class SparplanChartComponent implements OnChanges {

  @Input() sparplanSum: number;
  @Input() numberOfYearsWithPerformance: number;
  @Input() yieldYears: number[];
  // IMPORTANT : favouredSecurities is an input, so changes in them can be detected in ngonchanges!
  @Input() favouredSecurities: AmountOfItem[];

  public chartLabels: Label[] = [];
  public chartData: any[] = [];
  public chartType: ChartType = 'line';
  public chartLegend = true;
  public chartPlugins = [pluginDataLabels];
  public chartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: true
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ''; // ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public Currency = Currency;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes.sparplanSum  && changes.sparplanSum.currentValue) ||
      (changes.numberOfYearsWithPerformance && changes.numberOfYearsWithPerformance.currentValue) ||
      (changes.yieldYears && changes.yieldYears.currentValue) ||
      changes.favouredSecurities && changes.favouredSecurities.currentValue) {
      this.fillData();
    }
  }

  fillData() {
    this.chartData = [];
    this.chartLabels = [];
    const line1 = { data: [], label: 'Nur Einzahlung' };
    const line2 = { data: [], label: 'Einzahlung + Performance' };
    let accruedSumLine1 = 0;
    let accruedSumLine2 = 0;
    // 20 years , 12 months
    const yieldForNumberOfYearsWithPerformance = this.yieldYears[this.yieldYears.map((yld: number) => yld > 0).lastIndexOf(true)];
    // go through each year
    for (let i = 0; i < this.numberOfYearsWithPerformance; i++) {
      accruedSumLine1 += (this.sparplanSum * 12);
      // and the end of the year > calculate interest for accrued amount for remaining years
      // accruedSumLine2 += this.returnInterest(accruedSumLine2, i, this.numberOfYearsWithPerformance, yieldForNumberOfYearsWithPerformance);
      if (i === 0) {
        accruedSumLine2 = Math.round(accruedSumLine1 * yieldForNumberOfYearsWithPerformance);
      } else {
        accruedSumLine2 += Math.round(((accruedSumLine2 * yieldForNumberOfYearsWithPerformance) - accruedSumLine2));
        accruedSumLine2 += (this.sparplanSum * 12);
      }
      line1.data.push(accruedSumLine1);
      // other way around
      line2.data.push(accruedSumLine2);
      this.chartLabels.push((i + 1).toString() + 'Jahre');
    }
    this.chartData.push(line1);
    this.chartData.push(line2);
  }

  getPayins() {
    return this.chartData[0].data[this.chartData[0].data.length - 1];
  }

  getPayinsAndPerformance() {
    return this.chartData[1].data[this.chartData[1].data.length - 1];
  }
}
