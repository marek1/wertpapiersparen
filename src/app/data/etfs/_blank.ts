import { Etf } from '../../interfaces/etf';
import { Currency } from '../../enums/currencies';
import { Country } from '../../enums/country';

// tslint:disable:max-line-length
export const _blank: Etf = {
  name: '',
  description: '',
  tracks: '',
  url: '',
  isin: '',
  currency: Currency.EUR,
  manager: '',
  issuer: '',
  logo: '',
  country: Country.Irland,
  gewinn: 'thesaurierend',
  ter: 0,
  yields: [],
  lastUpdate: '2019-12-26',
  shares: []
};
// tslint:enable:max-line-length
