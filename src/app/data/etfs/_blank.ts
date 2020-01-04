import { Etf } from '../../interfaces/etf';
import { Currency } from '../../enums/currencies';
import { Country } from '../../enums/country';
import { SecurityType } from '../../enums/securityType';

// tslint:disable:max-line-length
export const _blank: Etf = {
  name: '',
  description: '',
  tracks: '',
  securityType: SecurityType.Aktie,
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
  shares: [],
  industries: [],
  countries: [],
  tags: []
};
// tslint:enable:max-line-length
