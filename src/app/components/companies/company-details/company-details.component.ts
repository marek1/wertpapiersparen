import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Ranking, ShareRank } from '../../../interfaces/ranking';
import { AllRankings } from '../../../data/rankings';
import { ChartOptions } from 'chart.js';
import { IndustryService } from '../../../services/industry.service';
import { Industries } from '../../../data/industries';
import { Etfs } from '../../../data/etfs';
import { Etf } from '../../../interfaces/etf';

interface ShowMore {
  noIndustries: number;
  noBadges: number;
  etfs: number;
  description: boolean;
  products: boolean;
}

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  @Input() company: Company;

  public Countries: typeof Country;
  public chartLabels: string[];
  public chartData: number[];
  public chartType: string;
  public chartLegend: boolean;
  public chartOptions: ChartOptions;
  public showMore: ShowMore;
  public batchOfProductsToBeShown: number;
  public endNo: number;
  public selectedTab: number;

  constructor(private industryService: IndustryService) {
    this.Countries = Country;
    this.chartLabels = [];
    this.chartData = [];
    this.chartType = 'line';
    this.chartLegend = false;
    this.chartOptions = {
      legend: {
        display: false
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            return null;
          },
        },
      }
    };
    this.showMore = {
      noIndustries: 1,
      noBadges: 1,
      etfs: 1,
      description: false,
      products: false
    };
    this.batchOfProductsToBeShown = 3;
    this.endNo = 0;
    this.selectedTab = 1;
  }

  ngOnInit() {
    this.fillChartData();
    this.setNumberOfProducts();
  }

  fillChartData() {
    // tslint:disable-next-line:forin
    for (const date in this.company.end_of_month_prices) {
      if (this.company.end_of_month_prices.hasOwnProperty(date)) {
        this.chartData.unshift(parseFloat(this.company.end_of_month_prices[date]['4. close']));
        this.chartLabels.unshift(date.toString().substr(0, 4));
      }
    }
  }

  setNumberOfProducts() {
    if (this.endNo === this.batchOfProductsToBeShown) {
      this.endNo = this.company.products.length;
      this.showMore.products = true;
    } else {
      this.endNo = this.company.products.length > this.batchOfProductsToBeShown ? this.batchOfProductsToBeShown : this.company.products.length;
      this.showMore.products = false;
    }
  }

  getRankingsForCompany(): Ranking[] {
    return AllRankings
      .filter((x) => x.results.filter((res) => res.id === this.company.id).length > 0 ? true : false)
      .sort((x, y) => {
        const _x = this.getPercentage(this.getPointsInRanking(x).points, x.maxResult);
        const _y = this.getPercentage(this.getPointsInRanking(y).points, y.maxResult);
        if (_x > _y) {
          return -1;
        } else {
          return 1;
        }
        return 0;
      });
  }

  getPointsInRanking(ranking: Ranking): ShareRank {
    return ranking.results.filter((res) => res.id === this.company.id)[0];
  }

  getPercentage(x: number, of: number) {
    return (x * 100) / of;
  }

  getIndustryName(industryId: number) {
    return this.industryService.iterateThroughChildren(Industries, industryId).description;
  }

  findInEtfs(): Etf[] {
    return Etfs.filter((etf) => etf.shares.filter((comp) => comp.id === this.company.id));
  }
}
