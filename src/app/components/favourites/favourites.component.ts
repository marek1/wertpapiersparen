import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { Company } from '../../interfaces/company';
import { CompanyStocks } from '../../reducers/basket.reducer';
import { BasketActions, SearchActions } from '../../actions';
import { PriceService } from '../../services/price.service';
import { IndustryService } from '../../services/industry.service';
import { Performances } from '../../enums/performances';
import { HelperService } from '../../services/helpers';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  public favouredSecurities$: Observable<CompanyStocks[]>;
  public showMore: number;
  public performanceYears: number[];
  public totalPrice: number;
  public totalPastPrices: number[];
  public tabs: string[];
  public selectedTab$: Observable<number>;

  constructor(
    private priceService: PriceService,
    private helperService: HelperService,
    private industryService: IndustryService,
    private store: Store<fromRoot.AppState>
  ) {
    this.tabs = ['Übersicht', 'Chart', 'ETFs'];
    this.performanceYears = this.helperService.EnumToArray(Performances);
  }

  ngOnInit() {
    this.showMore = 1;
    this.favouredSecurities$ = this.store.pipe(select(fromRoot.getFavouredSecurities));
    this.favouredSecurities$.subscribe((items: CompanyStocks[]) => {
      this.totalPrice = this.getNetSum(items, 'EUR');
      this.totalPastPrices = [];
      this.performanceYears.map((x) => {
        // i.e. x = 1 Jahr, Performances[x] = 1
        // TODO: if 1 returns a 0 -> then the whole result is to be 0 !!!
        const results = [];
        items.map((item: CompanyStocks) => {
          results.push(item.amount * this.priceService.getPriceAt(item.company.end_of_month_prices, parseInt(Performances[x], 10))[1]);
        });
        if (results.includes(0)) {
          this.totalPastPrices.push(0);
        } else {
          this.totalPastPrices.push(results.reduce((a, b) => a + b, 0));
        }
      });
    });
    this.selectedTab$ = this.store.pipe(select(fromRoot.getSelectedTab));
  }

  updateStore(anzahl: number, firma: Company): void {
    this.store.dispatch(BasketActions.updateFavourites({amount: anzahl, company: firma}));
  }

  getIndustryName(industryId: number) {
    return this.industryService.getIndustryName(industryId);
  }

  getNetSum(items: CompanyStocks[], currency: string) {
    let returnValue = 0;
    items.map((item) => {
      if (item.company.currency === currency) {
        returnValue += this.priceService.getLatestPrice(item);
      }
    });
    return returnValue;
  }

  getPerformance(amount: number) {
    return !isNaN(amount) ? ((this.totalPrice * 100 / amount) - 100) : 0;
  }

  setTab(which: number): void {
    this.store.dispatch(BasketActions.setSelectedTabAction({selectedTab: which}));
  }

  findEtfs() {

  }
}
