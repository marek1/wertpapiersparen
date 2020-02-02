import { Component, Input } from '@angular/core';
import { AmountOfItem } from '../../reducers/basket.reducer';
import { PriceService } from '../../services/price.service';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss']
})
export class PriceDisplayComponent {

  @Input() fav: AmountOfItem;
  constructor(public priceService: PriceService) { }

}
