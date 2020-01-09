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

@Component({
  selector: 'app-sparplan',
  templateUrl: './sparplan.component.html',
  styleUrls: ['./sparplan.component.scss']
})
export class SparplanComponent implements OnInit {

  public favouredSecurities$: Observable<AmountOfItem[]>;
  public showMore: number;
  public performanceYears: number[];
  public totalPrice: number;
  public totalPastPrices: number[];
  public tabs: string[];
  public selectedTab$: Observable<number>;
  public SecurityType = SecurityType;

  constructor(
    private priceService: PriceService,
    private helperService: HelperService,
    private industryService: IndustryService,
    private store: Store<fromRoot.AppState>
  ) {
    this.tabs = [];
    this.performanceYears = this.helperService.enumToArray(Performances);
  }

  ngOnInit() {
    this.showMore = 1;
    this.favouredSecurities$ = this.store.pipe(select(fromRoot.getFavouredSecurities));
    this.favouredSecurities$.subscribe((items: AmountOfItem[]) => {
      this.totalPrice = this.getNetSum(items, 'EUR');
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
        } else {
          this.totalPastPrices.push(results.reduce((a, b) => a + b, 0));
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
  }

  updateStore(anzahl: number, firma: Company): void {
    this.store.dispatch(BasketActions.updateFavourites({amount: anzahl, item: firma}));
  }

  getIndustryName(industryId: number) {
    return this.industryService.getIndustryName(industryId);
  }

  getNetSum(items: AmountOfItem[], currency: string) {
    let returnValue = 0;
    items.map((item) => {
      if (item.item.currency === currency) {
        returnValue += this.priceService.getLatestTotalPrice(item);
      }
    });
    return returnValue;
  }

  getPerformance(amount: number) {
    return !isNaN(amount) ? ((this.totalPrice - amount) / amount) * 100 : 0;
    // return !isNaN(amount) ? ((this.totalPrice * 100 / amount) - 100) : 0;
  }

  setTab(which: number): void {
    this.store.dispatch(BasketActions.setSelectedTab({selectedTab: which}));
  }

}