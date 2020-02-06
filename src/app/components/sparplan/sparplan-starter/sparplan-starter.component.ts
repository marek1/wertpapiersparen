import { Component, OnInit } from '@angular/core';
import { CompaniesActions, EtfsActions } from '../../../actions';
import { SearchMethods } from '../../../enums/searchMethods';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { Router } from '@angular/router';
import { ROUTE_COMPANIES, ROUTE_ETFS, ROUTES_WAS_SIND_AKTIEN, ROUTES_WAS_SIND_ETFS } from '../../../routes';

@Component({
  selector: 'app-sparplan-starter',
  templateUrl: './sparplan-starter.component.html',
  styleUrls: ['./sparplan-starter.component.scss']
})
export class SparplanStarterComponent implements OnInit {

  public show: {
    whatIsASavingPlan: boolean;
    whatIsAStock: boolean;
    whatIsAnEtf: boolean;
  };
  public companyButtons: string[];
  public etfButtons: string[];

  public ROUTE_COMPANIES = ROUTE_COMPANIES;
  public ROUTE_ETFS = ROUTE_ETFS;
  public ROUTES_WAS_SIND_AKTIEN = ROUTES_WAS_SIND_AKTIEN;
  public ROUTES_WAS_SIND_ETFS = ROUTES_WAS_SIND_ETFS;

  constructor(private store: Store<fromRoot.AppState>,
              private router: Router) {
    this.show = {
      whatIsASavingPlan: false,
      whatIsAStock: false,
      whatIsAnEtf: false
    };
    this.companyButtons = [
      SearchMethods[SearchMethods.Top10],
      SearchMethods[SearchMethods.Suchbegriff],
      SearchMethods[SearchMethods['Industrie(n)']],
      SearchMethods[SearchMethods['Produkt(e)']]
    ];
    this.etfButtons = [
      SearchMethods[SearchMethods.Top10],
      SearchMethods[SearchMethods.Suchbegriff],
      SearchMethods[SearchMethods['Industrie(n)']],
      SearchMethods[SearchMethods['Region(en)']]
    ];
  }

  ngOnInit() {
  }

  goToCompanySearch(companyButton: string) {
    this.store.dispatch(CompaniesActions.setSelectedSearchMethod({selectedSearchMethod: SearchMethods[companyButton]}));
    this.router.navigate(['/' + ROUTE_COMPANIES]);
  }

  goToEtfSearch(etfButton: string) {
    this.store.dispatch(EtfsActions.setSelectedSearchMethod({selectedSearchMethod: SearchMethods[etfButton]}));
    this.router.navigate(['/' + ROUTE_ETFS]);
  }

}
