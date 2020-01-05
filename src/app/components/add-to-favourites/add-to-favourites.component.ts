import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Company } from '../../interfaces/company';
import { BasketActions } from '../../actions';
import { Etf } from '../../interfaces/etf';

@Component({
  selector: 'app-add-to-favourites',
  templateUrl: './add-to-favourites.component.html',
  styleUrls: ['./add-to-favourites.component.scss']
})
export class AddToFavouritesComponent implements OnInit {

  @Input() version: 'long'|'short';
  @Input() company: Company;

  public favouredSecuritiesIdList$: Observable<number[]>;

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.favouredSecuritiesIdList$ = this.store.pipe(select(fromRoot.getFavouredSecuritiesAsList));
  }

  addToFavourites(item: Company|Etf) {
    this.store.dispatch(BasketActions.addToFavourites({item}));
  }

  removeFromFavourites(item: Company|Etf) {
    this.store.dispatch(BasketActions.removeFromFavourites({item}));
  }
}
