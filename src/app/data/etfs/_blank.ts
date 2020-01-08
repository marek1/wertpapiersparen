import { Etf } from '../../interfaces/etf';
import { Currency } from '../../enums/currencies';
import { Country } from '../../enums/country';
import { SecurityType } from '../../enums/securityType';

// tslint:disable:max-line-length
export const _blank: Etf = {
  id: 5000,
  name: '',
  description: '',
  tracks: '',
  securityType: SecurityType.ETF,
  url: '',
  isin: '',
  symbol: '',
  smallestTradeableUnit: 1,
  currency: Currency.EUR,
  manager: '',
  issuer: '',
  logo: '',
  country: Country.Irland,
  gewinn: 'thesaurierend',
  ter: 0,
  end_of_month_prices: null,
  yields: [],
  lastUpdate: '2019-12-26',
  shares: [],
  sectors: [],
  industries: [],
  countries: [],
  tags: [],
  savingPlans: []
};
// tslint:enable:max-line-length
