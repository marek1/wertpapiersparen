import { SecurityType } from '../../enums/securityType';
import { SavingPlanBroker } from '../../interfaces/broker';
import { SavingFrequency } from '../../enums/savingFrequency';
import { Currency } from '../../enums/currencies';

export const Comdirect: SavingPlanBroker = {
  name: 'Comdirect',
  url: 'https://www.comdirect.de/geldanlage/wertpapier-sparplan.html',
  logo: 'https://www.comdirect.de/cms/img/comdirect-logo-lg-2x.jpg',
  securityTypesIncluded: [SecurityType.ETF, SecurityType.Aktie],
  maxNumberOfSecuritiesPerSavingPlan: 1,
  minAmountPerSavingPlan: 25,
  currencyOfSavingPlan: Currency.EUR,
  frequencies: [SavingFrequency.monatlich, SavingFrequency.zweimonatlich, SavingFrequency.vierteljaehrlich],
  executionDays: [1, 7, 15, 23],
  costs: 1.5,
  fixAmountOrPercent: '%',
  discountedEtfs: true,
  discountedEtfsCosts: 0
};
