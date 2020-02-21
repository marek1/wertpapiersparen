import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { Etf } from '../../../interfaces/etf';
import { Etfs } from '../../../data/etfs';
import { SecurityType } from '../../../enums/securityType';
import { Observable } from 'rxjs';
import { SparplanService } from '../../../services/sparplan.service';
import { AmountOfItem } from '../../../reducers/basket.reducer';
import { PriceService } from '../../../services/price.service';
import { Currency } from '../../../enums/currencies';
import { BasketActions } from '../../../actions';
import { ROUTES_SAVING_PLAN_COSTS } from '../../../routes';
import { InvestmentOptions } from '../../../enums/investmentOptions';
import { Indices } from '../../../enums/indices';
import { RiskDefinition, RiskDefinitions } from '../../../data/riskDefinitions';
import { RiskClasses } from '../../../enums/riskClasses';

interface TextForStepArraySmall {
  value: string|number;
  header: string;
  text: string;
}

interface TextForStepArray extends TextForStepArraySmall {
  value: number;
  yield: string;
}
@Component({
  selector: 'app-sparplan-muster',
  templateUrl: './sparplan-muster.component.html',
  styleUrls: ['./sparplan-muster.component.scss']
})
export class SparplanMusterComponent implements OnInit, OnChanges {

  public InvestmentOptions = InvestmentOptions;
  public selectedInvestmentOption: string|null;
  public investmentOptions: TextForStepArraySmall[] = [
    {
      value: InvestmentOptions.CLEAN,
      header: 'Nachhaltigkeites Investment',
      text: 'Ich möchte ETFs kaufen, die in nachhaltige Unternehmen investieren',
    },
    {
      value: InvestmentOptions.CLASSIC,
      header: 'Klassiches Investment',
      text: 'Ich möchte ETFS kaufen, die in Unternehmen (oder Staaten) ' +
        'investieren ohne dabei unbedingt auf die Nachhaltigkeit zu achten.',
    }
  ];
  public value: number;
  public etfs: Etf[];
  public sparplanMuster: AmountOfItem[];
  public sparplanSum$: Observable<number>;
  public ROUTES_SAVING_PLAN_COSTS = ROUTES_SAVING_PLAN_COSTS;
  public showSlider: boolean;
  public Currency = Currency;
  public textForStepArray: TextForStepArray[] = [
    {
      ...RiskDefinitions.filter((x: RiskDefinition) => x.value === 0)[0],
      text: 'Ich vertrage nur das geringstmöglichste Risiko',
      yield: 'Dich erwarten vielleicht 1-2 % Rendite pro Jahr.'
    },
    {
      ...RiskDefinitions.filter((x: RiskDefinition) => x.value === 25)[0],
      text: 'Ich vertrage nur ein klein wenig Risiko',
      yield: 'Dich erwarten 2-3 % Rendite pro Jahr.'
    },
    {
      ...RiskDefinitions.filter((x: RiskDefinition) => x.value === 50)[0],
      text: 'Ich kann Risiko ertragen.',
      yield: 'Dich könnte eine Rendite von 3-5 % pro Jahr erwarten.'
    },
    {
      ...RiskDefinitions.filter((x: RiskDefinition) => x.value === 75)[0],
      text: 'Ich bin keineswegs risikoscheu.',
      yield: 'Dich könnte eine Rendite über 5 % pro Jahr erwarten.'
    }
  ];
  private changedSparplanManually: boolean;
  constructor(public sparplanService: SparplanService,
              public priceService: PriceService,
              private store: Store<fromRoot.AppState>) {
    this.restart();
    this.etfs = [];
    this.sparplanMuster = [];
    this.changedSparplanManually = false;
  }

  ngOnInit() {
    this.sparplanSum$ = this.store.pipe(select(fromRoot.getSparplanSum));
    this.sparplanSum$.subscribe((x:any) => console.log('OOOOOO ; ', x));
    this.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sparplanSum && changes.sparplanSum.currentValue) {
      this.setSparplan();
    }
  }

  restart() {
    this.selectedInvestmentOption = null;
    this.value = -1;
    this.showSlider = false;
  }

  reset() {
    this.setPortfolio();
    this.setSparplan();
  }

  setInvestmentOption(x: string) {
    this.showSlider = false;
    this.selectedInvestmentOption = x;
    this.reset();
  }

  setRiskAppetite(x: number) {
    this.showSlider = false;
    this.value = x;
    this.reset();
  }

  setPortfolio() {
    if (this.selectedInvestmentOption === InvestmentOptions.CLEAN) {
      this.etfs = Etfs.filter((etf: Etf) => etf.tracks === Indices.DowJonesSustainabilityEurozone);
      return;
    }
    switch (this.value) {
      case 0:
        this.etfs = Etfs.filter((etf: Etf) => etf.contains === SecurityType.GovtBond);
        break;
      case 25:
        this.etfs = Etfs.filter((etf: Etf) => etf.contains === SecurityType.GovtBond
          || etf.contains === SecurityType.CorpBond);
        break;
      case 50:
        this.etfs = Etfs.filter((etf: Etf) => etf.contains === SecurityType.CorpBond
          || etf.name.toLowerCase().indexOf('euro stoxx 50') > -1);
        break;
      case 75:
        this.etfs = Etfs.filter((etf: Etf) => etf.name.toLowerCase().indexOf('euro stoxx 50') > -1
          || etf.name.toLowerCase().indexOf('mdax') > -1);
        break;
      default:
        break;
    }
  }

  setSparplan() {
    this.sparplanSum$.subscribe((sum: number) => {
      if (!this.changedSparplanManually) {
        this.sparplanMuster = [];
        this.etfs.map((etf: Etf) => {
          this.sparplanMuster.push({
            amount: 1,
            savingRate: sum / this.etfs.length,
            item: etf
          });
        });
      }
    });
  }

  updateSparplanTotal(x) {
    this.changedSparplanManually = false;
    this.store.dispatch(BasketActions.updateSparplanSum({sum: x}));
  }

  updateSavingrate(savingRate: number, etf: AmountOfItem) {
    console.log('savingRate: ', savingRate);
    if (isNaN(savingRate)) {
      return;
    }
    this.changedSparplanManually = true;
    let newSum = 0;
    this.sparplanMuster.map((x: AmountOfItem) => {
      if (x.item.id === etf.item.id) {
        x.savingRate = savingRate;
      }
      newSum += x.savingRate;
    });
    if (window.confirm('Willst du die Sparplansumme ändern?')) {
      this.store.dispatch(BasketActions.updateSparplanSum({sum: newSum}));
    }
  }

  saveAll() {
    if (window.confirm('Willst du wirklich alles übernehmen?')) {
      this.sparplanMuster.map((amountOfItem: AmountOfItem) => {
        this.store.dispatch(BasketActions.addToFavourites({item: amountOfItem.item}));
        this.store.dispatch(BasketActions.updateFavourites({amount: amountOfItem.amount, savingRate: amountOfItem.savingRate, item: amountOfItem.item}));
      });
    }
  }

  getHeaderRisk() {
    return this.textForStepArray.filter((x: TextForStepArray) => x.value === this.value)[0].header;
  }
}
