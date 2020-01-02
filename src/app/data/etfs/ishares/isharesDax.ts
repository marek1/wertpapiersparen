import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { Country } from '../../../enums/country';
import { findCompaniesInIndex } from '../../companies';
import { Indices } from '../../../enums/indices';

// tslint:disable:max-line-length
export const isharesDax: Etf = {
  name: 'iShares Core DAX® UCITS ETF (DE)',
  description: 'Der Fonds strebt die Nachbildung der Wertentwicklung eines Index an, der aus den 30 größten und am häufigsten gehandelten deutschen Unternehmen besteht, die im Prime-Standard-Segment der Frankfurter Börse notiert sind.',
  tracks: Indices.DAX,
  url: 'https://www.ishares.com/de/privatanleger/de/produkte/251464/',
  isin: 'DE0005933931',
  currency: Currency.EUR,
  manager: 'BlackRock Asset Management Deutschland AG',
  issuer: 'BlackRock Asset Management Deutschland AG',
  logo: 'https://www.ishares.com/uk-retail-assets/cache-1564149267000/images/media-bin/web/global/logos/logo-ishares.svg',
  country: Country.Deutschland,
  gewinn: 'thesaurierend',
  ter: 0.16,
  yields: [ // kumulativ
    24.79, 13.97, 33.08, 117.09
  ],
  lastUpdate: '2019-12-31',
  shares: findCompaniesInIndex(Indices.DAX)
};
// tslint:enable:max-line-length

