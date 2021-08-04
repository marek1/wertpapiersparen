import { Component } from '@angular/core';
import { ROUTE_SAVING_PLAN_HOME, ROUTE_SAVING_PLAN_KONFIGURATOR, ROUTES_RICHTIG_SPAREN } from '../../routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public ROUTES_RICHTIG_SPAREN = ROUTES_RICHTIG_SPAREN;
  public ROUTE_SAVING_PLAN_KONFIGURATOR = ROUTE_SAVING_PLAN_KONFIGURATOR;
  public ROUTE_SAVING_PLAN_HOME = ROUTE_SAVING_PLAN_HOME;

  constructor() { }

}