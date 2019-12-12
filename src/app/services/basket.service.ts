import { of } from 'rxjs';
import { CompanyStocks } from '../reducers/basket.reducer';

export class BasketService {
  constructor() {}

  getBasket() {
    const basket: CompanyStocks[] = JSON.parse(localStorage.getItem('stockpicking_basket'));

    if (basket != null) {
      return of(basket);
    }
    return of([]);
  }

  setBasket(items: CompanyStocks[]) {
    localStorage.setItem('stockpicking_basket', JSON.stringify(items));
    return of(items);
  }

}
