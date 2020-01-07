import { Injectable } from '@angular/core';
import { EnumValue } from '@angular/compiler-cli/src/ngtsc/partial_evaluator';


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() {
  }

  enumToArray(enumV: any) {
    return Object.keys(enumV)
      .filter(this.stringIsNumber)
      .map(key => enumV[key]);
  }

  stringIsNumber(value) {
    return isNaN(Number(value)) === false;
  }

  enumGetValues(enumV: any): string[] {
    return Object.entries(enumV).map((val: [string, string], i: number) => {
      if (val[1] !== undefined && val[1]) {
         return val[1];
      }
      return '';
    });
  }

}
