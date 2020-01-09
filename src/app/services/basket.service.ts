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

  getSparplanSum() {
    const sum: number = parseInt(localStorage.getItem('stockpicking_sparplansum'), 10);

    if (sum != null) {
      return of(sum);
    }
    return of(0);
  }

  setSparplanSum(sum: number) {
    localStorage.setItem('stockpicking_sparplansum', sum.toString());
    return of(sum);
  }

}
