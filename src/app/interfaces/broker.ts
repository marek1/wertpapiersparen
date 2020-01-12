import { SecurityType } from '../enums/securityType';
import { Currency } from '../enums/currencies';
import { SavingFrequency } from '../enums/savingFrequency';

export interface Broker {
  name: string;
  url: string;
  logo: string;
  securityTypesIncluded: SecurityType[];
  maxNumberPerSavingPlan: number;
  minAmountToBeSaved: number;
  frequencies: SavingFrequency[];
  costs: number;
  fixAmountOrPercent: '%' | Currency.EUR;
}
