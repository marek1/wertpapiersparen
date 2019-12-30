import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { HelperService } from '../../../services/helpers';
import { SearchActions } from '../../../actions';
import { SearchMethods } from '../../../enums/searchMethods';

@Component({
  selector: 'app-companies-home',
  templateUrl: './companies-home.component.html',
  styleUrls: ['./companies-home.component.scss']
})
export class CompaniesHomeComponent implements OnInit {

  public selectedSearchMethod$: Observable<number>;
  public SearchMethods: typeof SearchMethods;
  public searchMethods: string[];

  constructor(private store: Store<fromRoot.AppState>, private helperService: HelperService) {
    this.SearchMethods = SearchMethods;
    this.searchMethods = this.helperService.EnumToArray(SearchMethods);
  }

  ngOnInit(): void {
    this.selectedSearchMethod$ = this.store.pipe(select(fromRoot.getCompaniesSelectedSearchMethod));
  }

  setMethod(which: SearchMethods): void {
    this.store.dispatch(SearchActions.setSelectedSearchMethodAction({selectedSearchMethod: which}));
  }

}
