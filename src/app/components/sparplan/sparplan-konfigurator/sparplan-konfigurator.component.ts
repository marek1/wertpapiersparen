import { Component, OnInit } from '@angular/core';
import { ROUTE_COMPANIES, ROUTE_ETFS, ROUTE_MY_SAVING_PLAN_HOME, ROUTE_SAVING_PLAN_MUSTER } from '../../../routes';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { AmountOfItem } from '../../../reducers/basket.reducer';

@Component({
  selector: 'app-sparplan-konfigurator',
  templateUrl: './sparplan-konfigurator.component.html',
  styleUrls: ['./sparplan-konfigurator.component.scss']
})
export class SparplanKonfiguratorComponent implements OnInit {

  public favouredSecurities$: Observable<AmountOfItem[]>;
  public sparplanSum$: Observable<number>;
  public started: boolean;

  public ROUTE_MY_SAVING_PLAN_HOME = ROUTE_MY_SAVING_PLAN_HOME;
  public ROUTE_SAVING_PLAN_MUSTER = ROUTE_SAVING_PLAN_MUSTER;
  public ROUTE_ETFS = ROUTE_ETFS;
  public ROUTE_COMPANIES = ROUTE_COMPANIES;

  constructor(private store: Store<fromRoot.AppState>) {
    this.started = false;
  }

  ngOnInit() {
    this.favouredSecurities$ = this.store.pipe(select(fromRoot.getFavouredSecurities));
    this.sparplanSum$ = this.store.pipe(select(fromRoot.getSparplanSum));
  }

}
