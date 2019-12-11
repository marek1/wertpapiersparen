import { Component, Input, OnInit } from '@angular/core';
import { CompanyStocks } from '../../reducers/basket.reducer';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss']
})
export class PriceDisplayComponent implements OnInit {

  @Input() fav: CompanyStocks;
  constructor() { }

  ngOnInit() {
  }

  getLatestPrice(): number {
    const latestPriceEntry = this.getLatestPriceEntry();
    if (!latestPriceEntry || latestPriceEntry.length < 2 || latestPriceEntry[1]['4. close'] === undefined) {
      return 0;
    }
    const closePrice = latestPriceEntry[1]['4. close'];
    if (isNaN(parseFloat(closePrice))) {
      return 0;
    }
    return parseFloat(closePrice) * this.fav.amount;
  }

  getLatestPriceEntry(): any[] {
    if (Object.entries(this.fav.company.end_of_month_prices).length === 0) {
      return [];
    }
    return Object.entries(this.fav.company.end_of_month_prices)[0];
  }

  getDateOfLastPriceEntry() {
    const latestPriceEntry = this.getLatestPriceEntry();
    if (!latestPriceEntry || latestPriceEntry.length < 2) {
      return 'nicht bekannt';
    }
    return latestPriceEntry[0];
  }

}
