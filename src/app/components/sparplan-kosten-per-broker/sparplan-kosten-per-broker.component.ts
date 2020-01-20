import { Component, Input, OnInit } from '@angular/core';
import { SavingPlanBroker } from '../../interfaces/broker';
import { Currency } from '../../enums/currencies';

@Component({
  selector: 'app-sparplan-kosten-per-broker',
  templateUrl: './sparplan-kosten-per-broker.component.html',
  styleUrls: ['./sparplan-kosten-per-broker.component.scss']
})
export class SparplanKostenPerBrokerComponent implements OnInit {

  @Input() broker: SavingPlanBroker;
  @Input() savingRate: number;
  public Currency = Currency;

  constructor() { }

  ngOnInit() {
  }

  getCosts(): number {
    if (this.broker.fixAmountOrPercent === '%') {
      return this.savingRate * (this.broker.costs / 100);
    }
    return this.broker.costs;
  }

  getFinalAmount(): number {
    return this.savingRate - this.getCosts();
  }

}
