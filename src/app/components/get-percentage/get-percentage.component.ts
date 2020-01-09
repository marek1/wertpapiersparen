import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AmountOfItem } from '../../reducers/basket.reducer';
import { PriceService } from '../../services/price.service';

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
  public share: number;

  constructor(private priceService: PriceService) {
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
    this.percentage = Math.round((this.priceService.getLatestTotalPrice(this.fav) * 100) / this.totalPrice);
    this.calculatedAmount = (this.sparplanSum * this.percentage) / 100;
    this.share = this.calculatedAmount / this.priceService.getLatestPrice(this.fav);
  }

  updateStore(x, y) {
    console.log('x : ', x, ' y : ', y);
  }
}
