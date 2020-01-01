import { Component, Input, OnInit } from '@angular/core';
import { CompanyStocks } from '../../../reducers/basket.reducer';

@Component({
  selector: 'app-etfs-matcher',
  templateUrl: './etfs-matcher.component.html',
  styleUrls: ['./etfs-matcher.component.scss']
})
export class EtfsMatcherComponent implements OnInit {

  @Input() favourites: CompanyStocks[];
  constructor() { }

  ngOnInit() {
    console.log('start with favs : ', this.favourites);
  }

}
