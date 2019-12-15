import { Component, OnInit } from '@angular/core';
import { SearchMethods } from '../../enums/searchMethods';
import { HelperService } from '../../services/helpers';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers/';
import { SearchActions } from '../../actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public selectedSearchMethod$: Observable<number>;
  public SearchMethods: typeof SearchMethods;
  public searchMethods: string[];

  constructor(private store: Store<fromRoot.AppState>, private helperService: HelperService) {
    this.SearchMethods = SearchMethods;
    this.searchMethods = this.helperService.EnumToArray(SearchMethods);
  }

  ngOnInit(): void {
    this.selectedSearchMethod$ = this.store.pipe(select(fromRoot.getSelectedSearchMethod));
  }

  setMethod(which: SearchMethods): void {
    this.store.dispatch(SearchActions.setSelectedSearchMethodAction({selectedSearchMethod: which}));
  }

}
