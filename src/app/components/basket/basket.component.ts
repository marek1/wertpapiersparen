import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { Company } from '../../interfaces/company';
import { AmountOfItem } from '../../reducers/basket.reducer';
import { BasketActions } from '../../actions';
import { PriceService } from '../../services/price.service';
import { IndustryService } from '../../services/industry.service';
import { Performances } from '../../enums/performances';
import { HelperService } from '../../services/helpers';
import { SecurityType } from '../../enums/securityType';
import { Etf } from '../../interfaces/etf';
import { SavingplanBroker } from '../../data/savingplanBroker';
import { Currency } from '../../enums/currencies';
import { SparplanService } from '../../services/sparplan.service';
import { ROUTES_SAVING_PLAN_COSTS } from '../../routes';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  public favouredSecurities$: Observable<AmountOfItem[]>;
  public showMore: number;
  public performanceYears: number[];
  public yieldYears: number[];
  public totalPrice: number;
  public totalPastPrices: number[];
  public numberOfYearsWithPerformance: string|number;
  public tabs: string[];
  public selectedTab$: Observable<number>;
  public SecurityType = SecurityType;
  public sparplanSum$: Observable<number>;
  public chartExpanded: boolean;
  public showCosts: boolean;

  public Currency = Currency;
  public ROUTES_SAVING_PLAN_COSTS = ROUTES_SAVING_PLAN_COSTS;

  constructor(
    public sparplanService: SparplanService,
    private priceService: PriceService,
    private helperService: HelperService,
    private industryService: IndustryService,
    private store: Store<fromRoot.AppState>
  ) {
    this.tabs = [];
    this.performanceYears = this.helperService.enumToArray(Performances);
    this.yieldYears = [];
    this.chartExpanded = false;
    this.showCosts = false;
  }

  ngOnInit() {
    this.showMore = 1;
    this.favouredSecurities$ = this.store.pipe(select(fromRoot.getFavouredSecurities));
    this.favouredSecurities$.subscribe((items: AmountOfItem[]) => {
      this.totalPrice = this.priceService.getNetSum(items, 'EUR');
      this.totalPastPrices = [];
      this.performanceYears.map((x) => {
        // i.e. x = 1 Jahr, Performances[x] = 1
        // TODO: if 1 returns a 0 -> then the whole result is to be 0 !!!
        const results = [];
        items.map((item: AmountOfItem) => {
          results.push(item.amount * this.priceService.getPriceAt(item.item.end_of_month_prices, parseInt(Performances[x], 10))[1]);
        });
        if (results.includes(0)) {
          this.totalPastPrices.push(0);
          this.yieldYears.push(0);
        } else {
          const pastPrice = results.reduce((a, b) => a + b, 0);
          this.totalPastPrices.push(pastPrice);
          this.yieldYears.push(Math.pow((this.totalPrice / pastPrice), 1 / parseInt(Performances[x], 10)));
          this.numberOfYearsWithPerformance = parseInt(Performances[x], 10);
        }
      });
      // if there are items in favourites which arent ETFs
      if (items.filter((amountOfItem: AmountOfItem) => amountOfItem.item.securityType !== SecurityType.ETF).length > 0) {
        this.tabs = ['Übersicht', 'Zusammensetzung', 'ETFs']; // add 'ETFs' if Stocks are within favourites
      } else if (this.tabs.indexOf('ETFs') > -1) {
        this.tabs = ['Übersicht', 'Zusammensetzung']; // add 'ETFs' if Stocks are within favourites
      }
    });
    this.selectedTab$ = this.store.pipe(select(fromRoot.getSelectedTab));
    this.sparplanSum$ = this.store.pipe(select(fromRoot.getSparplanSum));
  }

  getIndustryName(industryId: number) {
    return this.industryService.getIndustryName(industryId);
  }

  getPerformance(amount: number) {
    return !isNaN(amount) ? ((this.totalPrice - amount) / amount) * 100 : 0;
  }

  setTab(which: number): void {
    this.store.dispatch(BasketActions.setSelectedTab({selectedTab: which}));
  }

  updateSparplanTotal(x) {
    this.store.dispatch(BasketActions.updateSparplanSum({sum: x}));
  }



}
