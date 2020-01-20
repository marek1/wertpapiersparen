import { Component, OnInit } from '@angular/core';
import { FinalListItem } from '../../companies/companies-by-popularity/companies-by-popularity.component';
import { Etfs } from '../../../data/etfs';
import { Etf } from '../../../interfaces/etf';

@Component({
  selector: 'app-etfs-by-popularity',
  templateUrl: './etfs-by-popularity.component.html',
  styleUrls: ['./etfs-by-popularity.component.scss']
})
export class EtfsByPopularityComponent implements OnInit {

  public finalList: FinalListItem[];

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
