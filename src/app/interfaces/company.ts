import { Product } from './product';
import { Currency } from '../enums/currencies';
import { Indices } from '../enums/indices';
import { Country } from '../enums/country';
import { ResponsibilityType } from '../enums/responsibility';

export interface Dividends {
  year: number;
  rate: number;
  yield?: number;
}

export interface TradeableProduct {
  name: string;
  isin: string;
}

export interface ResponsibilityAttribute {
  result: string;
  responsibilityType: ResponsibilityType;
  issuer: string;
  ranking: string;
  link?: string;
  isTopTwentyPercent: boolean;
  isBottomTwentyPercent: boolean;
}

export interface Company {
  id: number;
  name: string;
  country: Country;
  city?: string;
  url?: string;
  description: string;
  link_wikipedia: string;
  link_video?: string;
  logo: string;
  products: Product[];
  industries: number[];
  currency: Currency;
  isin: string;
  wkn: string;
  symbol: string;
  smallestTradeableUnit: number;
  otherTradeableProducts: TradeableProduct[];
  current_indices: Indices[];
  end_of_month_prices: any;
  dividends: Dividends[];
  tags: string[];
}
