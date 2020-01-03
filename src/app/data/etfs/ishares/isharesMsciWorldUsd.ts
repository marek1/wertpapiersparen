import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { Country } from '../../../enums/country';
import { Indices } from '../../../enums/indices';
import { findCompaniesInIndex } from '../../companies';

// tslint:disable:max-line-length
export const isharesMsciWorldUsd: Etf = {
  name: 'iShares MSCI World UCITS ETF',
  description: 'Der Fonds strebt die Nachbildung der Wertentwicklung eines Index an, der aus Unternehmen aus Industrieländern besteht.',
  tracks: Indices.MSCIWorld,
  url: 'https://www.ishares.com/de/privatanleger/de/produkte/251881/',
  isin: 'IE00B0M62Q58',
  currency: Currency.USD,
  manager: 'BlackRock Asset Management Ireland Limited',
  issuer: 'iShares plc',
  logo: 'https://www.ishares.com/uk-retail-assets/cache-1564149267000/images/media-bin/web/global/logos/logo-ishares.svg',
  country: Country.Irland,
  gewinn: 'ausschüttend',
  ter: 0.5,
  yields: [
    27.35, 41.85, 50.94, 140.02
  ],
  lastUpdate: '2019-12-31',
  shares: findCompaniesInIndex(Indices.MSCIWorld)
};
// tslint:enable:max-line-length
