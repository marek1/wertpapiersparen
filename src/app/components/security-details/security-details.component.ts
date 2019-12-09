import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllCompanies } from '../../data/companies';
import { Company } from '../../interfaces/company';
import { Country } from '../../enums/country';
import { Ranking, ShareRank } from '../../interfaces/ranking';
import { AllRankings } from '../../data/rankings';

interface Legend {
  legend: string;
}

interface ShowMore {
  info: boolean;
  description: boolean;
  products: boolean;
}

@Component({
  selector: 'app-security-details',
  templateUrl: './security-details.component.html',
  styleUrls: ['./security-details.component.scss']
})
export class SecurityDetailsComponent implements OnInit {

  public allRankings: Ranking[];
  public company: Company;
  public Countries: typeof Country;
  public chartLabels: string[];
  public chartData: number[];
  public chartType: string;
  public chartLegend: boolean;
  public chartOptions: Legend;
  public showMore: ShowMore;
  public endNo: number;
  public selectedTab: number;

  constructor(public route: ActivatedRoute) {
    this.allRankings = AllRankings;
    this.Countries = Country;
    this.chartLabels = [];
    this.chartData = [];
    this.chartType = 'line';
    this.chartLegend = false;
    this.chartOptions = {
      legend: ''
    };
    this.showMore = {
      info: false,
      description: false,
      products: false
    };
    this.endNo = 0;
    this.selectedTab = 1;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && !isNaN(parseInt(id, 10))) {
      this.company = AllCompanies.filter((company: Company) => company.id === parseInt(id, 10))[0];
      this.fillChartData();
      this.setNumberOfProducts();
    }
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
    if (this.endNo === 3) {
      this.endNo = this.company.products.length;
      this.showMore.products = true;
    } else {
      this.endNo = this.company.products.length > 3 ? 3 : this.company.products.length;
      this.showMore.products = false;
    }
    console.log('this.showMore.products : ', this.showMore.products);
  }

  getRankingsForCompany(): Ranking[] {
    return AllRankings.filter((x) => x.results.filter((res) => res.id === this.company.id).length > 0 ? true : false);
  }

  getPointsInRanking(ranking: Ranking): ShareRank {
    return ranking.results.filter((res) => res.id === this.company.id)[0];
  }

  getPercentage(x: number, of: number) {
    return (x * 100) / of;
  }
}
