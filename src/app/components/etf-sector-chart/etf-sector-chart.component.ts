import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AmountOfItem } from '../../reducers/basket.reducer';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Portion } from '../../interfaces/etf';
import { PriceService } from '../../services/price.service';
import { IndustryService } from '../../services/industry.service';

@Component({
  selector: 'app-etf-sector-chart',
  templateUrl: './etf-sector-chart.component.html',
  styleUrls: ['./etf-sector-chart.component.scss']
})
export class EtfSectorChartComponent implements OnChanges {

  @Input() etfs: AmountOfItem[];
  // produce an array where you can see a
  public AmountsByIndustry: Portion[];

  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartOptions: ChartOptions = {
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
  public pieChartColors = [];

  constructor() { }

  ngOnChanges(): void {
    this.AmountsByIndustry = [];
    this.pieChartData = [];
    this.pieChartLabels = [];
    this.goThroughData();
  }

  goThroughData() {
    this.etfs.map((amountOfItem: AmountOfItem) => {
      if (amountOfItem.item.sectors !== undefined &&
        amountOfItem.item.sectors.length !== undefined &&
        amountOfItem.item.sectors.length > 0) {
        amountOfItem.item.sectors.map((sectorPortion: Portion) => {
          const foundIndex = this.AmountsByIndustry.findIndex((a) => a.name === sectorPortion.name);
          let addedValue = 0;
          if (foundIndex > -1) {
            addedValue = this.AmountsByIndustry[foundIndex].portion;
            this.AmountsByIndustry.splice(foundIndex, 1);
          }
          this.AmountsByIndustry.push({
            name: sectorPortion.name,
            portion: sectorPortion.portion + addedValue
          });
        });
      }
    });
    // now fill the chart data
    this.AmountsByIndustry.map((foundItem: Portion) => {
      this.pieChartLabels.push(foundItem.name);
      this.pieChartData.push(foundItem.portion);
    });
  }

}
