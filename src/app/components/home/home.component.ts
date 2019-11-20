import { Component, OnInit } from '@angular/core';
import { SearchMethods } from '../../enums/searchMethods';
import { HelperService } from '../../services/helpers';
import { AllCompanies } from '../../data/companies';
import { industries } from '../../data/industries';
import { Industry } from '../../interfaces/industry';
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

  // public selectedSearchMethod: string;
  public selectedSearchMethod$: Observable<string>;
  public searchMethods: string[];
  public SearchMethods = SearchMethods;

  constructor(private store: Store<fromRoot.AppState>, private helperService: HelperService) {
    this.searchMethods = this.helperService.EnumToArray(SearchMethods);

  }

  ngOnInit() {
  }

  setMethod(which: SearchMethods) {
    // this.selectedSearchMethod = SearchMethods[which];
    this.selectedSearchMethod$ = this.store.pipe(select(fromRoot.getSelectedSearchMethod));
    this.store.dispatch(SearchActions.setSelectedSearchMethodAction({selectedSearchMethod: SearchMethods[which]}));
  }



}
