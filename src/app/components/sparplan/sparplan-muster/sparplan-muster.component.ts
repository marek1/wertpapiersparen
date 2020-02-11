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
import { ROUTES_SAVING_PLAN_COSTS } from '../../../routes';

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
  public ROUTES_SAVING_PLAN_COSTS = ROUTES_SAVING_PLAN_COSTS;
  public showSlider: boolean;
  public Currency = Currency;
  private changedSparplanManually: boolean;

  constructor(public sparplanService: SparplanService,
              public priceService: PriceService,
              private store: Store<fromRoot.AppState>) {
    this.value = -1;
    this.options = {
      showTicksValues: false,
      showTicks: true,
      hideLimitLabels: true,
      hidePointerLabels: true,
      stepsArray: [
        {value: 0, legend: 'Keine Risikobereitschaft'},
        {value: 25, legend: 'Geringe Risikobereitschaft'},
        {value: 50, legend: 'Mittlere Risikobereitschaft'},
        {value: 75, legend: 'Hohe Risikobereitschaft'}
      ]
    };
    this.etfs = [];
    this.sparplanMuster = [];
    this.showSlider = false;
    this.changedSparplanManually = false;
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

  setOption(x: number) {
    this.value = x;
    this.reset();
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
          || etf.name.toLowerCase().indexOf(' dax') > -1
          || etf.name.toLowerCase().indexOf('euro stoxx 50') > -1);
        break;
      case 75:
        this.etfs = Etfs.filter((etf: Etf) => etf.name.toLowerCase().indexOf('euro stoxx 50') > -1
          || etf.name.toLowerCase().indexOf('dax') > -1);
        break;
      default:
        break;
    }
  }

  setSparplan() {
    this.sparplanSum$.subscribe((sum: number) => {
      if (!this.changedSparplanManually) {
        this.sparplanMuster = [];
        this.etfs.map((etf: Etf) => {
          this.sparplanMuster.push({
            amount: 1,
            savingRate: sum / this.etfs.length,
            item: etf
          });
        });
      }
    });
  }

  updateSparplanTotal(x) {
    this.store.dispatch(BasketActions.updateSparplanSum({sum: x}));
  }

  updateSavingrate(savingRate: number, etf: AmountOfItem) {
    this.changedSparplanManually = true;
    let newSum = 0;
    this.sparplanMuster.map((x: AmountOfItem) => {
      if (x.item.id === etf.item.id) {
        x.savingRate = savingRate;
      }
      newSum += x.savingRate;
    });
    if (window.confirm('Willst du die Sparplansumme ändern?')) {
      this.store.dispatch(BasketActions.updateSparplanSum({sum: newSum}));
    }
  }

  saveAll() {
    if (window.confirm('Willst du wirklich alles übernehmen?')) {
      this.sparplanMuster.map((amountOfItem: AmountOfItem) => {
        this.store.dispatch(BasketActions.addToFavourites({item: amountOfItem.item}));
        this.store.dispatch(BasketActions.updateFavourites({amount: amountOfItem.amount, savingRate: amountOfItem.savingRate, item: amountOfItem.item}));
      });
    }
  }
}
