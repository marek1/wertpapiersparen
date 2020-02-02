import { of } from 'rxjs';
import { AmountOfItem } from '../reducers/basket.reducer';
import { standardSparplanSum } from '../data/etfs';

export class BasketService {
  constructor() {}

  getBasket() {
    const basket: AmountOfItem[] = JSON.parse(localStorage.getItem('wertpapiersparen_basket'));
    if (basket !== null) {
      return of(basket);
    }
    return of([]);
  }

  setBasket(items: AmountOfItem[]) {
    localStorage.setItem('wertpapiersparen_basket', JSON.stringify(items));
    return of(items);
  }

  getSparplanSum() {
    const sum: string = localStorage.getItem('wertpapiersparen_sparplansum');
    if (sum !== null ) {
      return of(parseInt(sum, 10));
    }
    return of(standardSparplanSum);
  }

  setSparplanSum(sum: number) {
    localStorage.setItem('wertpapiersparen_sparplansum', sum.toString());
    return of(sum);
  }

}
