import { Component, OnInit } from '@angular/core';
import { findCompaniesInIndex } from '../../../data/companies';
import { Indices } from '../../../enums/indices';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { HelperService } from '../../../services/helpers';
import { SearchMethods } from '../../../enums/searchMethods';
import { CompaniesActions, EtfsActions } from '../../../actions';

@Component({
  selector: 'app-etfs-home',
  templateUrl: './etfs-home.component.html',
  styleUrls: ['./etfs-home.component.scss']
})
export class EtfsHomeComponent implements OnInit {

  public selectedSearchMethod$: Observable<number>;
  public SearchMethods: typeof SearchMethods;
  public searchMethods: string[];

  constructor(private store: Store<fromRoot.AppState>, private helperService: HelperService) {
    this.SearchMethods = SearchMethods;
    this.searchMethods = [
      SearchMethods[SearchMethods.Suchbegriff],
      SearchMethods[SearchMethods['Industrie(n)']],
      SearchMethods[SearchMethods['Region(en)']],
    ];
  }

  ngOnInit(): void {
    this.selectedSearchMethod$ = this.store.pipe(select(fromRoot.getEtfsSelectedSearchMethod));
  }

  setMethod(which: SearchMethods): void {
    this.store.dispatch(EtfsActions.setSelectedSearchMethod({selectedSearchMethod: which}));
  }
}
