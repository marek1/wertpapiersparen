import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Etf } from '../../interfaces/etf';
import { Etfs } from '../../data/etfs';
import { SecurityType } from '../../enums/securityType';

@Component({
  selector: 'app-sparplan-muster',
  templateUrl: './sparplan-muster.component.html',
  styleUrls: ['./sparplan-muster.component.scss']
})
export class SparplanMusterComponent implements OnInit {

  public value: number;
  public options: Options;
  public etfs: Etf[];

  constructor(private store: Store<fromRoot.AppState>) {
    this.value = 50;
    this.options = {
      showTicksValues: true,
      stepsArray: [
        {value: 0, legend: 'Keine'},
        {value: 25},
        {value: 50, legend: 'Mittlere'},
        {value: 75},
        {value: 100, legend: 'Hohe'}
      ]
    };
    this.etfs = [];
  }
  ngOnInit() {
    this.setPortfolio();
  }

  setPortfolio() {
    console.log('set port with ', this.value);
    switch (this.value) {
      case 0:
        this.etfs = Etfs.filter((etf: Etf) => etf.securityType === SecurityType.GovtBond);
        break;
      case 25:
        this.etfs = Etfs.filter((etf: Etf) => etf.securityType === SecurityType.GovtBond
          || etf.securityType === SecurityType.CorpBond);
        break;
      case 50:
        this.etfs = Etfs.filter((etf: Etf) => etf.securityType === SecurityType.GovtBond
          || etf.securityType === SecurityType.CorpBond
          || etf.name.toLowerCase().indexOf('msci world') > -1
          || etf.name.toLowerCase().indexOf('euro stoxx 50') > -1);
        break;
      case 75:
        this.etfs = Etfs.filter((etf: Etf) => etf.securityType === SecurityType.GovtBond
          || etf.securityType === SecurityType.CorpBond
          || etf.name.toLowerCase().indexOf('msci world') > -1
          || etf.name.toLowerCase().indexOf('euro stoxx 50') > -1
          || etf.name.toLowerCase().indexOf('dax') > -1);
        break;
      case 100:
        this.etfs = Etfs.filter((etf: Etf) => etf.name.toLowerCase().indexOf('msci world') > -1
          || etf.name.toLowerCase().indexOf('euro stoxx 50') > -1
          || etf.name.toLowerCase().indexOf('dax') > -1);
        break;
      default:
        break;
    }
  }
}
