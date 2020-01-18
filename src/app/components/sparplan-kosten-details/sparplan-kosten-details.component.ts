import { Component, Input, OnInit } from '@angular/core';
import { SavingPlanBroker } from '../../interfaces/broker';

@Component({
  selector: 'app-sparplan-kosten-details',
  templateUrl: './sparplan-kosten-details.component.html',
  styleUrls: ['./sparplan-kosten-details.component.scss']
})
export class SparplanKostenDetailsComponent implements OnInit {

  @Input() broker: SavingPlanBroker;
  public showMore: boolean;

  constructor() {
    this.showMore = false;
  }

  ngOnInit() {
  }

}
