import { Product } from './product';
import { Currency } from '../enums/currencies';
import { Indices } from '../enums/indices';
import { Country } from '../enums/country';

export interface Dividends {
  year: number;
  rate: number;
  yield?: number;
}

export interface Company {
  id: number;
  name: string;
  country: Country;
  city?: string;
  description: string;
  link_wikipedia: string;
  logo: string;
  products: Product[];
  industries: number[];
  currency: Currency;
  isin: string;
  wkn: string;
  symbol: string;
  current_indices: Indices[];
  end_of_month_prices: any;
  dividends: Dividends[];
  tags: string[];
}
