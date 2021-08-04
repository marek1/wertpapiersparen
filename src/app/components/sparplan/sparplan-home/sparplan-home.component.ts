import { Component } from '@angular/core';
import { ROUTE_SAVING_PLAN_KONFIGURATOR, ROUTES_SAVING_PLAN_COSTS } from '../../../routes';

@Component({
  selector: 'app-sparplan-home',
  templateUrl: './sparplan-home.component.html',
  styleUrls: ['./sparplan-home.component.scss']
})
export class SparplanHomeComponent {

  public ROUTES_SAVING_PLAN_COSTS = ROUTES_SAVING_PLAN_COSTS;
  public ROUTE_SAVING_PLAN_KONFIGURATOR = ROUTE_SAVING_PLAN_KONFIGURATOR;

  constructor() { }

}
