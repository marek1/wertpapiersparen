import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Company } from '../../interfaces/company';
import { BasketActions } from '../../actions';
import { Etf } from '../../interfaces/etf';

@Component({
  selector: 'app-add-to-sparplan',
  templateUrl: './add-to-sparplan.component.html',
  styleUrls: ['./add-to-sparplan.component.scss']
})
export class AddToSparplanComponent implements OnInit {

  @Input() version: 'long'|'short';
  @Input() company: Company;

  public favouredSecuritiesIdList$: Observable<number[]>;

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.favouredSecuritiesIdList$ = this.store.pipe(select(fromRoot.getFavouredSecuritiesAsList));
  }

  addToFavourites(item: Company|Etf) {
    if (window.confirm('Dieses Wertpapier zum Sparplan hinzufügen?.')) {
      this.store.dispatch(BasketActions.addToFavourites({item}));
    }
  }

  removeFromFavourites(item: Company|Etf) {
    if (window.confirm('Dieses Wertpapier aus dem Sparplan entfernen.')) {
      this.store.dispatch(BasketActions.removeFromFavourites({item}));
    }
  }
}
