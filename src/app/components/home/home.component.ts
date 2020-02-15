import { Component, OnInit } from '@angular/core';
import { SearchMethods } from '../../enums/searchMethods';
import { CompaniesActions, EtfsActions } from '../../actions';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { Router } from '@angular/router';
import { ROUTE_COMPANIES, ROUTE_ETFS, ROUTE_SAVING_PLAN_HOME, ROUTE_SAVING_PLAN_KONFIGURATOR, ROUTES_RICHTIG_SPAREN } from '../../routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public ROUTES_RICHTIG_SPAREN = ROUTES_RICHTIG_SPAREN;
  public ROUTE_SAVING_PLAN_KONFIGURATOR = ROUTE_SAVING_PLAN_KONFIGURATOR;
  public ROUTE_SAVING_PLAN_HOME = ROUTE_SAVING_PLAN_HOME;

  constructor() { }


  ngOnInit() {
  }


}


