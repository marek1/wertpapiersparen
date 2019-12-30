import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { Company } from '../../interfaces/company';
import { CompanyStocks } from '../../reducers/basket.reducer';
import { BasketActions } from '../../actions';
import { PriceService } from '../../services/price.service';
import { Country } from '../../enums/country';
import { Industries } from '../../data/industries';
import { IndustryService } from '../../services/industry.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  public favouredSecurities$: Observable<CompanyStocks[]>;
  public showMore: number;

  constructor(
    private priceService: PriceService,
    private industryService: IndustryService,
    private store: Store<fromRoot.AppState>) {
  }

  ngOnInit() {
    this.showMore = 1;
    this.favouredSecurities$ = this.store.pipe(select(fromRoot.getFavouredSecurities));
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


}
