import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etfs } from '../../data/etfs';
import { Etf } from '../../interfaces/etf';

@Component({
  selector: 'app-etf-page',
  templateUrl: './etf-page.component.html',
  styleUrls: ['./etf-page.component.scss']
})
export class EtfPageComponent implements OnInit {

  public etf: Etf;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id.length > 0) {
      this.etf = Etfs.filter((etf: Etf) => etf.isin === id)[0];
    }
  }

}
