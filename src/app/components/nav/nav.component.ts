import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { ROUTE_MY_SAVING_PLAN_HOME, ROUTE_SAVING_PLAN_KONFIGURATOR } from '../../routes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public favouredSecuritiesIdList$: Observable<number[]>;
  public ROUTE_MY_SAVING_PLAN_HOME = ROUTE_MY_SAVING_PLAN_HOME;
  public ROUTE_SAVING_PLAN_KONFIGURATOR = ROUTE_SAVING_PLAN_KONFIGURATOR;
  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.favouredSecuritiesIdList$ = this.store.pipe(select(fromRoot.getFavouredSecuritiesAsList));
  }

}
