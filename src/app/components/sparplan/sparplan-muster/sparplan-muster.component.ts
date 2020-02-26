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
import { BasketActions, MusterActions } from '../../../actions';
import { ROUTES_SAVING_PLAN_COSTS } from '../../../routes';
import { InvestmentOptions } from '../../../enums/investmentOptions';
import { Indices } from '../../../enums/indices';
import { RiskDefinition, RiskDefinitions } from '../../../data/riskDefinitions';
import { combineAll, concatMap } from 'rxjs/operators';

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
  public selectedInvestmentOption$: Observable<string|null>;
  public investmentOptions: TextForStepArraySmall[] = [
    {
      value: InvestmentOptions.CLEAN,
      header: 'ETFs mit Fokus auf ESR (Nachhaltigkeit und sozialer Verantwortung) ',
      text: 'Ich möchte ETFs kaufen, die in nachhaltige Unternehmen investieren',
    },
    {
      value: InvestmentOptions.CLASSIC,
      header: 'Klassische ETFs - ohne Fokus auf ESR Kriterien',
      text: 'Ich möchte ETFS kaufen, die in Unternehmen (oder Staaten) ' +
        'investieren ohne dabei unbedingt auf die Nachhaltigkeit zu achten.',
    }
  ];
  public selectedRiskProfile$: Observable<number>;
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
    // this.restart();
    this.etfs = [];
    this.sparplanMuster = [];
    this.changedSparplanManually = false;
  }

  ngOnInit() {
    this.selectedInvestmentOption$ = this.store.pipe((select(fromRoot.getSelectedInvestmentOption)));
    this.selectedRiskProfile$ = this.store.pipe(select(fromRoot.getSelectedRiskProfile));
    this.sparplanSum$ = this.store.pipe(select(fromRoot.getSparplanSum));
    this.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sparplanSum && changes.sparplanSum.currentValue) {
      this.setSparplan();
    }
  }

  restart() {
    this.store.dispatch(MusterActions.setSelectedInvestmentOption({selectedInvestmentOption: null}));
    this.showSlider = false;
  }

  reset() {
    this.setPortfolio();
    this.setSparplan();
  }

  setInvestmentOption(x: string|null) {
    this.showSlider = false;
    this.store.dispatch(MusterActions.setSelectedInvestmentOption({selectedInvestmentOption: x}));
    this.reset();
  }

  setRiskAppetite(x: number) {
    this.showSlider = false;
    this.store.dispatch(MusterActions.setSelectedRiskProfile({selectedRiskProfile: x}));
    this.reset();
  }

  setPortfolio() {
    this.selectedInvestmentOption$.subscribe((selectedInvestmentOption: string|null) => {
      console.log('selectedInvestmentOption : ', selectedInvestmentOption);
      if (selectedInvestmentOption === InvestmentOptions.CLEAN) {
        this.etfs = Etfs.filter((etf: Etf) => etf.tracks === Indices.DowJonesSustainabilityEurozone);
      } else {
        this.selectedRiskProfile$.subscribe((selectedRiskProfile: number | null) => {
          console.log('selectedRiskProfile : ', selectedRiskProfile);
          switch (selectedRiskProfile) {
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
        });
      }
    });
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
    return ''; // this.textForStepArray.filter((x: TextForStepArray) => x.value === this.selectedRiskProfile)[0].header;
  }
}
