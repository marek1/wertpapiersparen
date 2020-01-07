import { Component, Input, OnInit } from '@angular/core';
import { Etf, Portion } from '../../../interfaces/etf';
import { Country } from '../../../enums/country';
import { HelperService } from '../../../services/helpers';
import { Performances } from '../../../enums/performances';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-etf-detail',
  templateUrl: './etf-detail.component.html',
  styleUrls: ['./etf-detail.component.scss']
})
export class EtfDetailComponent implements OnInit {

  @Input() etf: Etf;

  public Countries: typeof Country;
  public performanceYears: number[];
  public tabs: string[];
  public selectedTab: number;
  public regionChartLabels: string[];
  public regionChartData: number[];
  public industryChartLabels: string[];
  public industryChartData: number[];
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

  constructor(
    private helperService: HelperService
  ) {
    this.Countries = Country;
    this.performanceYears = this.helperService.enumToArray(Performances);
    this.tabs = ['Übersicht', 'Zusammensetzung'];
    this.regionChartLabels = [];
    this.regionChartData = [];
    this.industryChartLabels = [];
    this.industryChartData = [];
  }

  ngOnInit() {
    this.selectedTab = 0;
    this.fillChartData();
  }

  fillChartData() {
    if (this.etf.countries !== undefined) {
      this.etf.countries.map((portion: Portion) => {
        this.regionChartData.unshift(portion.portion);
        this.regionChartLabels.unshift(portion.name);
      });
    }
    if (this.etf.sectors !== undefined) {
      this.etf.sectors.map((portion: Portion) => {
        this.industryChartData.unshift(portion.portion);
        this.industryChartLabels.unshift(portion.name);
      });
    }
  }
}
