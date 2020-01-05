import { Currency } from '../enums/currencies';
import { Country } from '../enums/country';
import { SecurityType } from '../enums/securityType';

export interface CompanyShort {
  id: number;
  name: string;
}

export interface Portion {
  name: string;
  portion: number;
}

export interface Etf {
  id: number;
  name: string;
  description: string;
  tracks: string;
  securityType: SecurityType;
  url: string;
  isin: string;
  symbol: string;
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
  shares: CompanyShort[];
  countries?: Portion[];
  sectors?: Portion[];
  industries: number[];
  tags?: string[];
}
