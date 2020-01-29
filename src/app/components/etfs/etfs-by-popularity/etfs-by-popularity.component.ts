import { Component, OnInit } from '@angular/core';
import { Etfs } from '../../../data/etfs';
import { Etf } from '../../../interfaces/etf';
import { Top10ListItem } from '../../companies/companies-by-popularity/companies-by-popularity.component';
import { isharesDax } from '../../../data/etfs/ishares/isharesDax';
import { isharesCOREMsciWorldUSDThesaurierend } from '../../../data/etfs/ishares/isharesCOREMsciWorldUSDThesaurierend';
import { isharesEurostoxx50 } from '../../../data/etfs/ishares/isharesEurostoxx50';
import { Companies } from '../../../data/companies';
import { Company } from '../../../interfaces/company';

@Component({
  selector: 'app-etfs-by-popularity',
  templateUrl: './etfs-by-popularity.component.html',
  styleUrls: ['./etfs-by-popularity.component.scss']
})
export class EtfsByPopularityComponent implements OnInit {

  public top10Priced: Top10ListItem[];
  public top10Traded: Top10ListItem[];
  public show: {
    top10Priced: boolean;
    top10Traded: boolean;
  };

  constructor() {
    this.top10Priced = [];
    this.top10Traded = [];
    this.show = {
      top10Priced: false,
      top10Traded: false
    };
  }

  ngOnInit() {
    this.createTop10PricedList();
    this.createTop10DemandedList();
  }

  createTop10PricedList() {
    /*
     * simply consider those that contain the word sustainability
     */
    Etfs
      .sort((a: Etf, b: Etf) => {
        if (a.ter > b.ter) {
          return 1;
        } else {
          return -1;
        }
        return 0;
      })
      .slice(0, 2)
      .map((etf: Etf) => {
        this.top10Priced.push({
          id: etf.id,
          name: etf.name,
          isin: etf.isin,
          logo: etf.logo
        });
      });
  }

  createTop10DemandedList() {
    // Source : https://www.boerse-frankfurt.de/etfs (2020-01-29)
    const topDemanded = [
      isharesEurostoxx50.id,
      isharesDax.id,
      isharesCOREMsciWorldUSDThesaurierend.id
    ];
    topDemanded.map((id: number) => {
      Etfs.map((result: Etf) => {
        if (result.id === id) {
          this.top10Traded.push({
            id: result.id,
            name: result.name,
            isin: result.isin,
            logo: this.getLogoFor(result.id),
          });
        }
      });
    });
  }

  getLogoFor(id: number) {
    return Etfs.filter((etf: Etf) => etf.id === id)[0].logo;
  }
}
