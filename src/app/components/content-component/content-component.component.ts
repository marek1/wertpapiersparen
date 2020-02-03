import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ROUTES_INVESTMENTFONDS, ROUTES_RICHTIG_AN_DER_BOERSE_AGIEREN, ROUTES_RISIKO_INVESTITION, ROUTES_WAS_SIND_AKTIEN } from '../../routes';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.scss']
})
export class ContentComponentComponent implements OnInit {

  public currentRoute: string;
  public ROUTES_RISIKO_INVESTITION = ROUTES_RISIKO_INVESTITION;
  public ROUTES_RICHTIG_AN_DER_BOERSE_AGIEREN = ROUTES_RICHTIG_AN_DER_BOERSE_AGIEREN;
  public ROUTES_INVESTMENTFONDS = ROUTES_INVESTMENTFONDS;
  public ROUTES_WAS_SIND_AKTIEN = ROUTES_WAS_SIND_AKTIEN;

  constructor(private router: ActivatedRoute) {
    this.currentRoute = this.router.snapshot.url[0].path;
  }

  ngOnInit() {
  }

}
