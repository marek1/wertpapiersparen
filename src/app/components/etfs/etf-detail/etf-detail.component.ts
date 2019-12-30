import { Component, Input, OnInit } from '@angular/core';
import { Etf } from '../../../interfaces/etf';
import { Country } from '../../../enums/country';
import { HelperService } from '../../../services/helpers';
import { Performances } from '../../../enums/performances';

@Component({
  selector: 'app-etf-detail',
  templateUrl: './etf-detail.component.html',
  styleUrls: ['./etf-detail.component.scss']
})
export class EtfDetailComponent implements OnInit {

  @Input() etf: Etf;

  public Countries: typeof Country;
  public performanceYears: number[];

  constructor(private helperService: HelperService) {
    this.Countries = Country;
    this.performanceYears = this.helperService.EnumToArray(Performances);
  }

  ngOnInit() {
  }

}
