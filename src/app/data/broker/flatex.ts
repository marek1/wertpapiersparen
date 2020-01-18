import { SecurityType } from '../../enums/securityType';
import { SavingPlanBroker } from '../../interfaces/broker';
import { SavingFrequency } from '../../enums/savingFrequency';
import { Currency } from '../../enums/currencies';

export const Flatex: SavingPlanBroker = {
  name: 'Flatex',
  url: 'https://www.flatex.de/',
  logo: 'https://www.flatex.de/typo3conf/ext/bgm_theme_flatex/Resources/Public/Images/assets/logo/flatex-logo.svg',
  securityTypesIncluded: [SecurityType.ETF],
  maxNumberOfSecuritiesPerSavingPlan: 1,
  minAmountPerSavingPlan: 25,
  currencyOfSavingPlan: Currency.EUR,
  frequencies: [SavingFrequency.monatlich, SavingFrequency.vierteljaehrlich, SavingFrequency.halbjaehrlich, SavingFrequency.jaehrlich],
  executionDays: [1, 7, 15, 23],
  costs: 1.5,
  fixAmountOrPercent: Currency.EUR,
  discountedEtfs: true,
  discountedEtfsCosts: 0
};
