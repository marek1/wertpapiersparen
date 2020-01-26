import { Component, Input, OnInit } from '@angular/core';
import { AmountOfItem } from '../../reducers/basket.reducer';
import { SecurityType } from '../../enums/securityType';
import { Etf } from '../../interfaces/etf';
import { Company } from '../../interfaces/company';
import { BasketActions } from '../../actions';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { SavingplanBroker } from '../../data/savingplanBroker';
import { Observable } from 'rxjs';
import { Currency } from '../../enums/currencies';

@Component({
  selector: 'app-security-list-item',
  templateUrl: './security-list-item.component.html',
  styleUrls: ['./security-list-item.component.scss']
})
export class SecurityListItemComponent implements OnInit {

  @Input() fav: AmountOfItem;
  @Input() totalPrice: number;
  @Input() sparplanSum: number;
  @Input() percentagesAreCorrect: boolean;
  @Input() showCosts: boolean;
  @Input() listItemCounter: number;
  @Input() isTemplate: boolean;

  public favouredSecuritiesIdList$: Observable<number[]>;
  public SecurityType = SecurityType;
  public Currency = Currency;
  public sparplanBroker = SavingplanBroker;
  
  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.favouredSecuritiesIdList$ = this.store.pipe(select(fromRoot.getFavouredSecuritiesAsList));
  }

  updateAmount(amount: number, item: Etf|Company): void {
    if (!this.isTemplate) {
      this.store.dispatch(BasketActions.updateFavourites({amount, savingRate: null, item}));
    }
  }

  updateSavingRate(savingRate: number, item: Etf|Company ) {
    if (!this.isTemplate) {
      this.store.dispatch(BasketActions.updateFavourites({amount: null, savingRate, item}));
    }
  }

}
