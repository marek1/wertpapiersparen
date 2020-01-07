import { Component, Input, OnInit } from '@angular/core';
import { Etfs } from '../../../data/etfs';
import { Etf, Portion } from '../../../interfaces/etf';

@Component({
  selector: 'app-etfs-result',
  templateUrl: './etfs-result.component.html',
  styleUrls: ['./etfs-result.component.scss']
})
export class EtfsResultComponent implements OnInit {

  @Input() valueName: string;
  @Input() filterBy: null|'region'|'industry';

  public results: Etf[];
  public showMore: boolean;

  constructor() {
    this.results = [];
    this.showMore = false;
    this.filterBy = null;
  }

  ngOnInit() {
    if (this.filterBy === 'region') {
      this.results = Etfs.filter((etf: Etf) => {
        return etf.countries.filter((portion: Portion) => portion.name === this.valueName).length > 0;
      });
    }
    if (this.filterBy === 'industry') {
      this.results = Etfs.filter((etf: Etf) => {
        return etf.sectors.filter((portion: Portion) => portion.name === this.valueName).length > 0;
      });
    }
  }

}
