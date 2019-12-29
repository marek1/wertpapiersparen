import { Component, Input, OnInit } from '@angular/core';
import { Etf } from '../../interfaces/etf';
import { Country } from '../../enums/country';

@Component({
  selector: 'app-etf-detail',
  templateUrl: './etf-detail.component.html',
  styleUrls: ['./etf-detail.component.scss']
})
export class EtfDetailComponent implements OnInit {

  @Input() etf: Etf;

  public Countries: typeof Country;

  constructor() {
    this.Countries = Country;
  }

  ngOnInit() {
    console.log('this.etf : ', this.etf);
  }

}
