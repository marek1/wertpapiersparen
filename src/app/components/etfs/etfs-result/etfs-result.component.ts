import { Component, Input, OnInit } from '@angular/core';
import { Etfs } from '../../../data/etfs';
import { Etf, Portion } from '../../../interfaces/etf';

@Component({
  selector: 'app-etfs-result',
  templateUrl: './etfs-result.component.html',
  styleUrls: ['./etfs-result.component.scss']
})
export class EtfsResultComponent implements OnInit {

  @Input() region: string;
  public results: Etf[];
  public showMore: boolean;

  constructor() {
    this.results = [];
    this.showMore = false;
  }

  ngOnInit() {
    this.results = Etfs.filter((etf: Etf) => {
      return etf.countries.filter((country: Portion) => country.name === this.region).length > 0;
    });
  }

}
