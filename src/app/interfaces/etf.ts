import { Currency } from '../enums/currencies';
import { Country } from '../enums/country';
import { SecurityType } from '../enums/securityType';
import { RiskClasses } from '../enums/riskClasses';

export interface CompanyShort {
  id: number;
  name: string;
}

export interface Portion {
  name: string;
  portion: number;
}

export interface SavingPlan {
  broker: string;
  minInvestment: number;
  costs: number;
}

export interface Etf {
  id: number;
  name: string;
  description: string;
  tracks: string|null;
  securityType: SecurityType;
  url: string;
  isin: string;
  symbol: string;
  riskClass: RiskClasses;
  isGreen: boolean;
  smallestTradeableUnit: number;
  currency: Currency;
  manager: string;
  issuer: string;
  logo: string;
  country: Country;
  gewinn: 'thesaurierend' | 'ausschüttend';
  ter: number;
  end_of_month_prices: any;
  yields: number[]; // 1, 3, 5, 10, 15, 20 Jahre
  lastUpdate: string;
  contains: SecurityType;
  shares: CompanyShort[];
  countries?: Portion[];
  sectors?: Portion[];
  industries: number[];
  tags?: string[];
  savingPlans: SavingPlan[];
}
