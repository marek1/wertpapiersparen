import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CompanyStocks } from '../../reducers/basket.reducer';
import { PriceService } from '../../services/price.service';
import { IndustryService } from '../../services/industry.service';
import { industries } from '../../data/industries';
import { Label } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

interface AmountByIndustry {
  amount: number;
  industryIds: number[];
  industryNames: string[];
}

@Component({
  selector: 'app-industry-chart',
  templateUrl: './industry-chart.component.html',
  styleUrls: ['./industry-chart.component.scss']
})
export class IndustryChartComponent implements OnInit, OnChanges {

  @Input() companyStocks: CompanyStocks[];
  // produce an array where you can see a
  public amountByIndustry: AmountByIndustry[];
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
    this.amountByIndustry = [];
    this.pieChartData = [];
    this.pieChartLabels = [];
    this.goThroughData();
  }

  goThroughData() {
    this.companyStocks.map((companyStock: CompanyStocks) => {
      this.manageData(companyStock);
    });
    // now fill the chart data
    this.amountByIndustry.map((foundItem: AmountByIndustry) => {
      this.pieChartLabels.push(foundItem.industryNames);
      this.pieChartData.push(foundItem.amount);
    });
  }

  manageData(companyStock: CompanyStocks) {
    // go through array and check if industry already exists
    // if yes, add amount
    // if not, then add the object
    const industryIds = this.industryService.getTopLevelIndustry(companyStock.company.industries, 2);
    const foundItems: AmountByIndustry[] = this.amountByIndustry.filter(x => {
      return this.checkArrays(industryIds, x.industryIds);
    });
    if (foundItems.length === 0) {
      const industryNames = industryIds.map(industryId => this.industryService.iterateThroughChildren(industries, industryId).description);
      this.amountByIndustry.push({
        amount: this.priceService.getLatestPrice(companyStock),
        industryIds,
        industryNames: industryNames.length > 1 ? [ this.returnShortIndustryName(industryNames[0]) + ' und weitere Branchen (Mischkonzern)'] : [this.returnShortIndustryName(industryNames[0])]
      });
    } else {
      foundItems[0].amount += this.priceService.getLatestPrice(companyStock);
    }
  }

  checkArrays( arrA, arrB ) {
    return arrA.sort().toString() === arrB.sort().toString();
  }

  private returnShortIndustryName(name: string) {
    return name.length > 20 ? name.toString().substr(0, 15) + '...' : name;
  }
}
