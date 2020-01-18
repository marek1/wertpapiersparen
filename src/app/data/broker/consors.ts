import { SecurityType } from '../../enums/securityType';
import { SavingPlanBroker } from '../../interfaces/broker';
import { SavingFrequency } from '../../enums/savingFrequency';
import { Currency } from '../../enums/currencies';

export const Consors: SavingPlanBroker = {
  name: 'Consorsbank',
  url: 'https://www.consorsbank.de/home',
  logo: 'https://www.consorsbank.de/ev/images/evr/assets/logos-2x/logo-94x94-wh.png',
  securityTypesIncluded: [SecurityType.ETF, SecurityType.Aktie],
  maxNumberOfSecuritiesPerSavingPlan: 1,
  minAmountPerSavingPlan: 25,
  currencyOfSavingPlan: Currency.EUR,
  frequencies: [SavingFrequency.monatlich, SavingFrequency.zweimonatlich, SavingFrequency.vierteljaehrlich, SavingFrequency.halbjaehrlich],
  executionDays: [1, 15],
  costs: 1.5,
  fixAmountOrPercent: '%',
  discountedEtfs: true,
  discountedEtfsCosts: 0
};
