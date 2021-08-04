import { Component, Input, OnInit } from '@angular/core';
import { AmountOfItem } from '../../../reducers/basket.reducer';
import { Etfs } from '../../../data/etfs';
import { CompanyShort, Etf } from '../../../interfaces/etf';
import { SecurityType } from '../../../enums/securityType';

@Component({
  selector: 'app-etfs-matcher',
  templateUrl: './etfs-matcher.component.html',
  styleUrls: ['./etfs-matcher.component.scss']
})
export class EtfsMatcherComponent implements OnInit {

  @Input() favourites: AmountOfItem[];
  public results: Etf[];
  public quotient: number;
  private favouriteStocks: AmountOfItem[];

  constructor() {
  }

  ngOnInit() {
    this.favouriteStocks = this.favourites
      .filter((amountOfItem: AmountOfItem) => {
        // filters out ETFs from favourites
        return amountOfItem.item.securityType !== SecurityType.ETF;
      });
    /***
     * LOGIC
     * if within favourites is at least one stock, then find ETFs which
     * - contain at least 33% of the stocks
     */
    this.quotient = this.favouriteStocks.length > 3 ? 3.33 : 1;
    this.doSearch();
  }

  doSearch() {
    this.results = Etfs.filter((etf: Etf) => {
      const noOfFoundShares = etf.shares.filter((companyShort: CompanyShort) => {
        // console.log('companyShort : ', companyShort.id);
        // go through favourites and see how many times the id if found
        const foundAppearances = this.favourites
          .filter((amountOfItem: AmountOfItem) => {
            return amountOfItem.item.id === companyShort.id;
          }).length;
        // console.log('foundAppearances : ', foundAppearances);
        return foundAppearances > 0;
      });
      return noOfFoundShares.length >= Math.round(this.favouriteStocks.length / this.quotient);
    });
  }

}
