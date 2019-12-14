import { Product } from './product';
import { Currency } from '../enums/currencies';
import { Indices } from '../enums/indices';
import { Country } from '../enums/country';
import { ResponsibilityType } from '../enums/responsibility';
import { SecurityType } from '../enums/securityType';
import { Industry } from './industry';
import { IndustryGroup } from '../enums/industryGroup';

export interface Dividends {
  year: number;
  rate: number;
  yield?: number;
}

export interface TradeableProduct {
  name: string;
  isin: string;
  securityType?: SecurityType;
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
  link_stockPrices?: string;
  logo: string;
  products: Product[];
  industries: number[];
  securityType?: SecurityType;
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
