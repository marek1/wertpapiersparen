import { Component, OnInit } from '@angular/core';
import { ROUTES_INVESTMENTFONDS, ROUTES_IN_AKTIEN_INVESTIEREN, ROUTES_RISIKO_INVESTITION, ROUTES_WAS_SIND_AKTIEN, ROUTE_SAVING_PLAN, ROUTES_WAS_SIND_ETFS } from '../../routes';

@Component({
  selector: 'app-richtig-sparen',
  templateUrl: './richtig-sparen.component.html',
  styleUrls: ['./richtig-sparen.component.scss']
})
export class RichtigSparenComponent implements OnInit {

  public show1: boolean;
  public show2: boolean;
  public ROUTES_RISIKO_INVESTITION = ROUTES_RISIKO_INVESTITION;
  public ROUTES_IN_AKTIEN_INVESTIEREN = ROUTES_IN_AKTIEN_INVESTIEREN;
  public ROUTES_INVESTMENTFONDS = ROUTES_INVESTMENTFONDS;
  public ROUTES_WAS_SIND_AKTIEN = ROUTES_WAS_SIND_AKTIEN;
  public ROUTES_WAS_SIND_ETFS = ROUTES_WAS_SIND_ETFS;
  public ROUTE_SAVING_PLAN = ROUTE_SAVING_PLAN;

  constructor() {
    this.show1 = false;
    this.show2 = false;
  }

  ngOnInit() {
  }

}
