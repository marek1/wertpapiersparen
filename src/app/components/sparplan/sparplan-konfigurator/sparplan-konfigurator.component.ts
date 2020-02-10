import { Component, OnInit } from '@angular/core';
import { ROUTE_COMPANIES, ROUTE_ETFS, ROUTE_MY_SAVING_PLAN_HOME, ROUTE_SAVING_PLAN_MUSTER, ROUTE_SAVING_PLAN_STARTER } from '../../../routes';

@Component({
  selector: 'app-sparplan-konfigurator',
  templateUrl: './sparplan-konfigurator.component.html',
  styleUrls: ['./sparplan-konfigurator.component.scss']
})
export class SparplanKonfiguratorComponent implements OnInit {

  public ROUTE_SAVING_PLAN_STARTER = ROUTE_SAVING_PLAN_STARTER;
  public ROUTE_MY_SAVING_PLAN_HOME = ROUTE_MY_SAVING_PLAN_HOME;
  public ROUTE_SAVING_PLAN_MUSTER = ROUTE_SAVING_PLAN_MUSTER;
  public ROUTE_ETFS = ROUTE_ETFS;
  public ROUTE_COMPANIES = ROUTE_COMPANIES;

  constructor() { }

  ngOnInit() {
  }

}
