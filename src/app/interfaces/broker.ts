import { SecurityType } from '../enums/securityType';
import { Currency } from '../enums/currencies';
import { SavingFrequency } from '../enums/savingFrequency';

export interface SavingPlanBroker {
  name: string;
  url: string;
  logo: string;
  securityTypesIncluded: SecurityType[];
  maxNumberOfSecuritiesPerSavingPlan: number;
  minAmountPerSavingPlan: number;
  currencyOfSavingPlan: Currency;
  frequencies: SavingFrequency[];
  executionDays: number[];
  costs: number;
  fixAmountOrPercent: '%' | Currency.EUR;
  discountedEtfs: boolean;
  discountedEtfsCosts: number;
}
