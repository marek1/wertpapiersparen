import { Injectable } from '@angular/core';
import { EnumValue } from '@angular/compiler-cli/src/ngtsc/partial_evaluator';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() {
  }

  EnumToArray(enumV: any) {
    return Object.keys(enumV)
      .filter(this.StringIsNumber)
      .map(key => enumV[key]);
  }

  StringIsNumber(value) {
    return isNaN(Number(value)) === false;
  }

}
