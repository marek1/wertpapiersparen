import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { Country } from '../../../enums/country';
import { Indices } from '../../../enums/indices';
import { findCompaniesInIndex } from '../../companies';

// tslint:disable:max-line-length
export const isharesMdax: Etf = {
  name: 'iShares MDAX® UCITS ETF (DE)',
  description: 'Der Fonds strebt die Nachbildung der Wertentwicklung eines Index an, der aus 60 deutschen Unternehmen mit mittlerer Marktkapitalisierung besteht, die im Prime-Standard-Segment der Frankfurter Börse notiert oder vorwiegend in Deutschland tätig sind.',
  tracks: Indices.MDAX,
  url: 'https://www.ishares.com/de/privatanleger/de/produkte/251845/',
  isin: 'DE0005933923',
  currency: Currency.EUR,
  manager: 'BlackRock Asset Management Deutschland AG',
  issuer: 'BlackRock Asset Management Deutschland AG',
  logo: 'https://www.ishares.com/uk-retail-assets/cache-1564149267000/images/media-bin/web/global/logos/logo-ishares.svg',
  country: Country.Deutschland,
  gewinn: 'thesaurierend',
  ter: 0.51,
  yields: [
    30.23, 24.72, 61.81, 256.71
  ],
  lastUpdate: '2019-12-31',
  shares: findCompaniesInIndex(Indices.MDAX)
};
// tslint:enable:max-line-length
