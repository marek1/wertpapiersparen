import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';

const dividends = [];
const prices = {};

// tslint:disable:max-line-length
export const dialogSemiconductorCompany: Company = {
  id: 0,
  name: '',
  country: Country.Deutschland,
  city: '',
  url: '',
  description: '',
  link_wikipedia: '',
  logo: '',
  products: [],
  industries: [],
  currency: Currency.EUR,
  isin: '',
  wkn: '',
  symbol: '',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [],
  end_of_month_prices: prices,
  dividends,
  tags: []
};
// tslint:enable:max-line-length

