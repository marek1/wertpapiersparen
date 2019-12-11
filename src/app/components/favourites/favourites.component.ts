import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { Company } from '../../interfaces/company';
import { CompanyStocks } from '../../reducers/basket.reducer';
import { BasketActions } from '../../actions';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favouredSecurities$: Observable<CompanyStocks[]>;

  constructor(private store: Store<fromRoot.AppState>) {
  }

  ngOnInit() {
    this.favouredSecurities$ = this.store.pipe(select(fromRoot.getFavouredSecurities));
  }

  updateStore(anzahl: number, firma: Company): void {
    this.store.dispatch(BasketActions.updateFavourites({amount: anzahl, company: firma}));
  }


}
