import { of } from 'rxjs';
import { AmountOfItem } from '../reducers/basket.reducer';

export class BasketService {
  constructor() {}

  getBasket() {
    const basket: AmountOfItem[] = JSON.parse(localStorage.getItem('stockpicking_basket'));

    if (basket != null) {
      return of(basket);
    }
    return of([]);
  }

  setBasket(items: AmountOfItem[]) {
    localStorage.setItem('stockpicking_basket', JSON.stringify(items));
    return of(items);
  }

}
