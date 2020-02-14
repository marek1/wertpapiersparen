import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AmountOfItem } from '../../reducers/basket.reducer';
import { PriceService } from '../../services/price.service';
import { IndustryService } from '../../services/industry.service';
import { Industries } from '../../data/industries';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

interface StockAmountsByIndustry {
  amount: number;
  industryIds: number[];
  industryNames: string[];
}

@Component({
  selector: 'app-stocks-industry-chart',
  templateUrl: './stocks-industry-chart.component.html',
  styleUrls: ['./stocks-industry-chart.component.scss']
})
export class StocksIndustryChartComponent implements OnInit, OnChanges {

  @Input() stocks: AmountOfItem[];
  // produce an array where you can see a
  public StockAmountsByIndustry: StockAmountsByIndustry[];
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

  constructor(private priceService: PriceService, private industryService: IndustryService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.StockAmountsByIndustry = [];
    this.pieChartData = [];
    this.pieChartLabels = [];
    this.goThroughData();
  }

  goThroughData() {
    this.stocks.map((amountOfItem: AmountOfItem) => {
      if (amountOfItem.item.industries && amountOfItem.item.industries.length > 0) {
        this.manageData(amountOfItem);
      }
    });
    // now fill the chart data
    this.StockAmountsByIndustry.map((foundItem: StockAmountsByIndustry) => {
      this.pieChartLabels.push(foundItem.industryNames);
      this.pieChartData.push(foundItem.amount);
    });
  }

  manageData(companyStock: AmountOfItem) {
    // go through array and check if industry already exists
    // if yes, add amount
    // if not, then add the object
    const industryIds = this.industryService.getTopLevelIndustry(companyStock.item.industries, 2);
    const foundItems: StockAmountsByIndustry[] = this.StockAmountsByIndustry.filter(x => {
      return this.checkArrays(industryIds, x.industryIds);
    });
    if (foundItems.length === 0) {
      const industryNames = industryIds.map(industryId => this.industryService.iterateThroughChildren(Industries, industryId).description);
      this.StockAmountsByIndustry.push({
        amount: companyStock.savingRate,
        industryIds,
        industryNames: industryNames.length > 1 ? [ this.returnShortIndustryName(industryNames[0]) + ' & weitere Branchen (Mischkonzern)'] : [this.returnShortIndustryName(industryNames[0])]
      });
    } else {
      foundItems[0].amount += companyStock.savingRate;
    }
  }

  checkArrays( arrA, arrB ) {
    return arrA.sort().toString() === arrB.sort().toString();
  }

  private returnShortIndustryName(name: string) {
    return name.length > 15 ? name.toString().substr(0, 15) + '...' : name;
  }
}
