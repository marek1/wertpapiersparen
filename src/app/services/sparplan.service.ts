import { AmountOfItem } from '../reducers/basket.reducer';
import { Injectable } from "@angular/core";

@Injectable()
export class SparplanService {

  constructor() {
  }

  addsUptoSparplanSum(favs: AmountOfItem[], sparplanSum: number) {
    let x = 0;
    favs.map((amountOfItem: AmountOfItem) => {
      x += amountOfItem.savingRate;
    });
    return x === sparplanSum;
  }

}
