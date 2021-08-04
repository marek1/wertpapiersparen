import { Component, Input } from '@angular/core';
import { AmountOfItem } from '../../../reducers/basket.reducer';
import { SavingplanBroker } from '../../../data/savingplanBroker';
import { SavingPlanBroker } from '../../../interfaces/broker';

@Component({
  selector: 'app-sparplan-kosten-per-item',
  templateUrl: './sparplan-kosten-per-item.component.html',
  styleUrls: ['./sparplan-kosten-per-item.component.scss']
})
export class SparplanKostenPerItemComponent {

  @Input() fav: AmountOfItem;
  public showCosts: boolean;
  public chosenBroker: SavingPlanBroker|null;
  public sparplanBroker = SavingplanBroker;

  constructor() {
    this.chosenBroker = null;
  }

  getYearlyCosts() {
    return this.fav.savingRate * this.fav.item.ter;
  }

  selectBroker(broker: SavingPlanBroker) {
    if (broker.minAmountPerSavingPlan > this.fav.savingRate) {
      window.alert('Die minimum Sparrate beträgt ' + broker.minAmountPerSavingPlan + ' ' + broker.currencyOfSavingPlan);
      return;
    }
    this.chosenBroker = broker;
    if (window.confirm('Möchtest du zum Angebot des Brokers / der Bank weitergeleitet werden ?')) {
      if (window.ga !== undefined) {
        window.ga('send', 'event', 'sparplan', 'sparplan_created_and_broker_chosen', broker.name, this.fav.savingRate);
      }
      window.location.href = broker.url;
    }
  }
}
