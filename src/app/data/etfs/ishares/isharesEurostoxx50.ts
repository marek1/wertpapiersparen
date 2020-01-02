import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { Country } from '../../../enums/country';
import { findCompaniesInIndex } from '../../companies';
import { Indices } from '../../../enums/indices';

// tslint:disable:max-line-length
export const isharesEurostoxx50: Etf = {
  name: 'iShares Core EURO STOXX 50 UCITS ETF (DE)',
  description: 'Der Fonds strebt die Nachbildung der Wertentwicklung eines Index an, der aus den 50 größten Unternehmen in der Eurozone besteht.',
  tracks: Indices.EuroStoxx50,
  url: 'https://www.ishares.com/de/privatanleger/de/produkte/251783/',
  isin: 'DE0005933956',
  currency: Currency.EUR,
  manager: 'BlackRock Asset Management Deutschland AG',
  issuer: 'BlackRock Asset Management Deutschland AG',
  logo: 'https://www.ishares.com/uk-retail-assets/cache-1564149267000/images/media-bin/web/global/logos/logo-ishares.svg',
  country: Country.Deutschland,
  gewinn: 'ausschüttend',
  ter: 0.11,
  yields: [ // kumulativ
    29.51, 25.05, 40.43, 80.71
  ],
  lastUpdate: '2019-12-26',
  shares: findCompaniesInIndex(Indices.EuroStoxx50)
};
// tslint:enable:max-line-length
