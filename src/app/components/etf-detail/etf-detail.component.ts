import { Component, Input, OnInit } from '@angular/core';
import { Etf } from '../../interfaces/etf';

@Component({
  selector: 'app-etf-detail',
  templateUrl: './etf-detail.component.html',
  styleUrls: ['./etf-detail.component.scss']
})
export class EtfDetailComponent implements OnInit {

  @Input() etf: Etf;
  public showMore: boolean;
  constructor() { }

  ngOnInit() {
    console.log('this.etf : ', this.etf);
  }

}
