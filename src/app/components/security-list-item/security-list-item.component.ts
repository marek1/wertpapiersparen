import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { ROUTE_COMPANIES } from '../../routes';
import { Etfs } from '../../data/etfs';
import { RiskDefinition, RiskDefinitions } from '../../data/riskDefinitions';
import { RiskClasses } from '../../enums/riskClasses';

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
  @Input() listItemCounter: number;
  @Input() isTemplate: boolean;
  @Input() whichVersion: 'short'|'long';
  @Output() savingRateChanged = new EventEmitter<number>();

  public favouredSecuritiesIdList$: Observable<number[]>;
  public SecurityType = SecurityType;
  public Currency = Currency;
  public ROUTE_COMPANIES = ROUTE_COMPANIES;
  public RiskClasses = RiskClasses;

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
    if (isNaN(savingRate)) {
      return;
    }
    if (!this.isTemplate) {
      this.store.dispatch(BasketActions.updateFavourites({amount: null, savingRate, item}));
    }
    this.savingRateChanged.emit(savingRate);
  }

  getRiskClass(x: number) {
    if (x === undefined) {
      return;
    }
    return RiskDefinitions.filter((rD: RiskDefinition) => rD.value === x)[0].text;
  }

}
