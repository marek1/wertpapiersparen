import { Component, OnInit } from '@angular/core';
import { Etfs } from '../../../data/etfs';
import { Etf } from '../../../interfaces/etf';
import { Top10GoodListItem, Top10ListItem } from '../../companies/companies-by-popularity/companies-by-popularity.component';

@Component({
  selector: 'app-etfs-by-popularity',
  templateUrl: './etfs-by-popularity.component.html',
  styleUrls: ['./etfs-by-popularity.component.scss']
})
export class EtfsByPopularityComponent implements OnInit {

  public finalList: Top10GoodListItem[];

  constructor() {
    this.finalList = [];
  }

  ngOnInit() {
    /*
     * simply consider those that contain the word sustainability
     */
    Etfs.filter((etf: Etf) => {
      if (etf.name.toLowerCase().indexOf('sustainability') > -1) {
        this.finalList.push({
          id: etf.id,
          name: etf.name,
          isin: etf.isin,
          counter: 1,
          points: 100
        });
      }
    });
  }

}
