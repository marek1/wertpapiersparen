import { Currency } from '../enums/currencies';
import { Country } from '../enums/country';

interface ShareRatio {
  companyId: number;
  ratio: number;
}

export interface Etf {
  name: string;
  url: string;
  isin: string;
  currency: Currency;
  manager: string;
  issuer: string;
  country: Country;
  gewinn: 'thesaurierend' | 'ausschüttend';
  ter: number;
  yields: number[]; // 1, 3, 5, 10, 15, 20 Jahre
  lastUpdate: string;
  shares: number[];
}
