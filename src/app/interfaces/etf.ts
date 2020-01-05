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
  name: string;
  description: string;
  tracks: string;
  securityType: SecurityType;
  url: string;
  isin: string;
  symbol: string;
  currency: Currency;
  manager: string;
  issuer: string;
  logo: string;
  country: Country;
  gewinn: 'thesaurierend' | 'ausschüttend';
  ter: number;
  prices: any;
  yields: number[]; // 1, 3, 5, 10, 15, 20 Jahre
  lastUpdate: string;
  shares: CompanyShort[];
  countries?: Portion[];
  industries?: Portion[];
  tags?: string[];
}
