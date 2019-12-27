import { Currency } from '../enums/currencies';
import { Country } from '../enums/country';

interface ShareRatio {
  companyId: number;
  ratio: number;
}

export interface Etf {
  name: string;
  isin: string;
  currency: Currency;
  manager: string;
  issuer: string;
  country: Country;
  gewinn: 'thesaurierend' | 'ausschüttend';
  ter: number;
  shares: ShareRatio[];
}
