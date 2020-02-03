import { Component, Input, OnInit } from '@angular/core';
import { SavingPlanBroker } from '../../../interfaces/broker';
import { Currency } from '../../../enums/currencies';

@Component({
  selector: 'app-sparplan-kosten-details',
  templateUrl: './sparplan-kosten-details.component.html',
  styleUrls: ['./sparplan-kosten-details.component.scss']
})
export class SparplanKostenDetailsComponent implements OnInit {

  @Input() broker: SavingPlanBroker;
  @Input() savingRate: number;
  public showMore: boolean;

  public Currency = Currency;

  constructor() {
    this.showMore = false;
  }

  ngOnInit() {
  }
}
