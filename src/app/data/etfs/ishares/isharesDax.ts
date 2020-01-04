import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { Country } from '../../../enums/country';
import { findCompaniesInIndex } from '../../companies';
import { Indices } from '../../../enums/indices';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';
import { SecurityType } from '../../../enums/securityType';

// tslint:disable:max-line-length
export const isharesDax: Etf = {
  name: 'iShares Core DAX® UCITS ETF (DE)',
  description: 'Der Fonds strebt die Nachbildung der Wertentwicklung eines Index an, der aus den 30 größten und am häufigsten gehandelten deutschen Unternehmen besteht, die im Prime-Standard-Segment der Frankfurter Börse notiert sind.',
  tracks: Indices.DAX,
  securityType: SecurityType.Aktie,
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
  shares: findCompaniesInIndex(Indices.DAX),
  countries: [
    { name: Country[Country.Deutschland], portion: 90.41 },
    { name: Country[Country.USA], portion: 9.59 }
  ],
  industries: [
    { name: IsharesIndustryNames.Materialien, portion: 17.05 },
    { name: IsharesIndustryNames.Financials, portion: 16.11 },
    { name: IsharesIndustryNames.ZyklischeKonsumgueter, portion: 15.44},
    { name: IsharesIndustryNames.Industrie, portion: 13.72 },
    { name: IsharesIndustryNames.IT, portion: 13.68 },
    { name: IsharesIndustryNames.Gesundheitsversorgung, portion: 11.3},
    { name: IsharesIndustryNames.Kommunikation, portion: 4.44},
    { name: IsharesIndustryNames.Versorger, portion: 3.47},
    { name: IsharesIndustryNames.NichtzyklischeKonsumgueter, portion: 2.48},
    { name: IsharesIndustryNames.Immobilien, portion: 2.31},
  ]
};
// tslint:enable:max-line-length

