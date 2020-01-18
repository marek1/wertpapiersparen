import { SecurityType } from '../../enums/securityType';
import { SavingPlanBroker } from '../../interfaces/broker';
import { SavingFrequency } from '../../enums/savingFrequency';
import { Currency } from '../../enums/currencies';

export const Dkb: SavingPlanBroker = {
  name: 'DKB',
  url: 'https://www.dkb.de/',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Deutsche_Kreditbank_AG_Logo_2016.svg/491px-Deutsche_Kreditbank_AG_Logo_2016.svg.png',
  securityTypesIncluded: [SecurityType.ETF],
  maxNumberOfSecuritiesPerSavingPlan: 1,
  minAmountPerSavingPlan: 50,
  currencyOfSavingPlan: Currency.EUR,
  frequencies: [SavingFrequency.monatlich, SavingFrequency.zweimonatlich, SavingFrequency.vierteljaehrlich],
  executionDays: [1, 7, 15, 23],
  costs: 1.5,
  fixAmountOrPercent: Currency.EUR,
  discountedEtfs: true,
  discountedEtfsCosts: 0.49
};
