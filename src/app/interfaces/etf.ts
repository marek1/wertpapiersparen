import { Currency } from '../enums/currencies';
import { Country } from '../enums/country';

interface CompanyShort {
  id: number;
  name: string;
}

export interface Etf {
  name: string;
  description: string;
  url: string;
  isin: string;
  currency: Currency;
  manager: string;
  issuer: string;
  logo: string;
  country: Country;
  gewinn: 'thesaurierend' | 'ausschüttend';
  ter: number;
  yields: number[]; // 1, 3, 5, 10, 15, 20 Jahre
  lastUpdate: string;
  shares: CompanyShort[];
}
