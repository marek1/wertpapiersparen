import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AmountOfItem } from '../../reducers/basket.reducer';
import { PriceService } from '../../services/price.service';
import { BasketActions } from '../../actions';
import { Etf } from '../../interfaces/etf';
import { Company } from '../../interfaces/company';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-get-percentage',
  templateUrl: './get-percentage.component.html',
  styleUrls: ['./get-percentage.component.scss']
})
export class GetPercentageComponent implements OnInit, OnChanges {

  @Input() fav: AmountOfItem;
  @Input() totalPrice: number;
  @Input() sparplanSum: number;

  public percentage: number;
  public calculatedAmount: number;
  public suggestedPercentage: number;
  public share: number;

  constructor(private priceService: PriceService,
              private store: Store<fromRoot.AppState>) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ((changes.totalPrice  && changes.totalPrice.currentValue) ||
    (changes.sparplanSum && changes.sparplanSum.currentValue)) {
      this.getPercentage();
    }
  }

  getPercentage() {
    this.suggestedPercentage = Math.round((this.priceService.getLatestTotalPrice(this.fav) * 100) / this.totalPrice);
    if (!this.fav.percentage) {
      this.percentage = this.suggestedPercentage;
      this.updateStore(this.percentage, this.fav.item);
    } else {
      this.percentage = this.fav.percentage;
    }
    this.calculatedAmount = (this.sparplanSum * this.percentage) / 100;
    this.share = this.calculatedAmount / this.priceService.getLatestPrice(this.fav);
  }

  updatePercentage(percentage: number) {
    this.updateStore(percentage, this.fav.item);
  }

  updateStore(percentage: number, item: Etf|Company) {
    this.store.dispatch(BasketActions.updateFavourites({amount: null, percentage, item}));
  }
}
