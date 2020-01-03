import { Component, Input, OnInit } from '@angular/core';
import { CompanyStocks } from '../../reducers/basket.reducer';
import { PriceService } from '../../services/price.service';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss']
})
export class PriceDisplayComponent {

  @Input() fav: CompanyStocks;
  constructor(private priceService: PriceService) { }

  // getLatestPrice(): number {
  //   return this.priceService.getLatestPrice(this.fav);
  // }
  //
  // getLatestTotalPrice(): number {
  //   return this.priceService.getLatestTotalPrice(this.fav);
  // }

  // getDateOfLastPriceEntry() {
  //   return this.priceService.getDateOfLastPriceEntry(this.fav);
  // }

}
