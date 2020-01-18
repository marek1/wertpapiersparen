import { Component, OnInit } from '@angular/core';
import { SavingplanBroker } from '../../data/savingplanBroker';

@Component({
  selector: 'app-sparplan-kosten',
  templateUrl: './sparplan-kosten.component.html',
  styleUrls: ['./sparplan-kosten.component.scss']
})
export class SparplanKostenComponent implements OnInit {

  public sparplanBroker = SavingplanBroker;
  constructor() { }

  ngOnInit() {
  }

}
