import { Component, OnInit } from '@angular/core';
import { ROUTES_FONDS, ROUTES_RICHTIG_AN_DER_BOERSE_AGIEREN, ROUTES_RISIKO_INVESTITION } from '../../../routes';

@Component({
  selector: 'app-richtig-sparen',
  templateUrl: './richtig-sparen.component.html',
  styleUrls: ['./richtig-sparen.component.scss']
})
export class RichtigSparenComponent implements OnInit {

  public show1: boolean;
  public show2: boolean;
  public ROUTES_RISIKO_INVESTITION = ROUTES_RISIKO_INVESTITION;
  public ROUTES_RICHTIG_AN_DER_BOERSE_AGIEREN = ROUTES_RICHTIG_AN_DER_BOERSE_AGIEREN;
  public ROUTES_FONDS = ROUTES_FONDS;

  constructor() {
    this.show1 = true;
    this.show2 = false;
  }

  ngOnInit() {
  }

}
