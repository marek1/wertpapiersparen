import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Options } from 'ng5-slider';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { Etf } from '../../../interfaces/etf';
import { Etfs } from '../../../data/etfs';
import { SecurityType } from '../../../enums/securityType';
import { Observable } from 'rxjs';
import { SparplanService } from '../../../services/sparplan.service';
import { AmountOfItem } from '../../../reducers/basket.reducer';
import { PriceService } from '../../../services/price.service';
import { Currency } from '../../../enums/currencies';
import { BasketActions } from '../../../actions';

@Component({
  selector: 'app-sparplan-muster',
  templateUrl: './sparplan-muster.component.html',
  styleUrls: ['./sparplan-muster.component.scss']
})
export class SparplanMusterComponent implements OnInit, OnChanges {

  public value: number;
  public options: Options;
  public etfs: Etf[];
  public sparplanMuster: AmountOfItem[];
  public sparplanSum$: Observable<number>;
  private currentSparplanSum: number;

  public Currency = Currency;

  constructor(public sparplanService: SparplanService,
              public priceService: PriceService,
              private store: Store<fromRoot.AppState>) {
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
    this.sparplanMuster = [];
  }

  ngOnInit() {
    this.sparplanSum$ = this.store.pipe(select(fromRoot.getSparplanSum));
    this.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sparplanSum && changes.sparplanSum.currentValue) {
      this.setSparplan();
    }
  }

  reset() {
    this.setPortfolio();
    this.setSparplan();
  }

  setPortfolio() {
    switch (this.value) {
      case 0:
        this.etfs = Etfs.filter((etf: Etf) => etf.contains === SecurityType.GovtBond);
        break;
      case 25:
        this.etfs = Etfs.filter((etf: Etf) => etf.contains === SecurityType.GovtBond
          || etf.contains === SecurityType.CorpBond);
        break;
      case 50:
        this.etfs = Etfs.filter((etf: Etf) => etf.contains === SecurityType.GovtBond
          || etf.contains === SecurityType.CorpBond
          || etf.name.toLowerCase().indexOf('msci world') > -1
          || etf.name.toLowerCase().indexOf('euro stoxx 50') > -1);
        break;
      case 75:
        this.etfs = Etfs.filter((etf: Etf) => etf.contains === SecurityType.CorpBond
          || etf.name.toLowerCase().indexOf('msci world') > -1
          || etf.name.toLowerCase().indexOf('euro stoxx 50') > -1
          || etf.name.toLowerCase().indexOf('mdax') > -1);
        break;
      case 100:
        this.etfs = Etfs.filter((etf: Etf) => etf.name.toLowerCase().indexOf('msci world') > -1
          || etf.name.toLowerCase().indexOf('euro stoxx 50') > -1
          || etf.name.toLowerCase().indexOf('mdax') > -1
          || etf.name.toLowerCase().indexOf('tecdax') > -1);
        break;
      default:
        break;
    }
  }

  setSparplan() {
    this.sparplanSum$.subscribe((sum: number) => {
      this.sparplanMuster = [];
      this.etfs.map((etf: Etf) => {
        this.sparplanMuster.push({
          amount: 1,
          savingRate: sum / this.etfs.length,
          item: etf
        });
      });
    });
  }

  updateSparplanTotal(x) {
    this.store.dispatch(BasketActions.updateSparplanSum({sum: x}));
  }

  saveAll() {
    this.sparplanMuster.map((amountOfItem: AmountOfItem) => {
      this.store.dispatch(BasketActions.addToFavourites({item: amountOfItem.item}));
      this.store.dispatch(BasketActions.updateFavourites({amount: amountOfItem.amount, savingRate: amountOfItem.savingRate, item: amountOfItem.item}));
    });
  }
}
