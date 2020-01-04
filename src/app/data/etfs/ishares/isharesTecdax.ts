import { findCompaniesInIndex } from '../../companies';
import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { Country } from '../../../enums/country';
import { Indices } from '../../../enums/indices';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';
import { SecurityType } from '../../../enums/securityType';

export const isharesTecdax: Etf = {
  name: 'iShares TecDAX® UCITS (DE)',
  description: 'Der Fonds strebt die Nachbildung der Wertentwicklung eines Index an, der aus den 30 größten an der Frankfurter Wertpapierbörse notierten Technologieunternehmen besteht',
  tracks: Indices.TecDAX,
  securityType: SecurityType.Aktie,
  url: 'https://www.ishares.com/de/privatanleger/de/produkte/251975/',
  isin: 'DE0005933972',
  currency: Currency.EUR,
  manager: 'BlackRock Asset Management Deutschland AG',
  issuer: 'BlackRock Asset Management Deutschland AG',
  logo: 'https://www.ishares.com/uk-retail-assets/cache-1564149267000/images/media-bin/web/global/logos/logo-ishares.svg',
  country: Country.Deutschland,
  gewinn: 'thesaurierend',
  ter: 0.51,
  yields: [ // kumulativ
    22.36, 64.16, 115.74, 257.68
  ],
  lastUpdate: '2019-12-31',
  shares: findCompaniesInIndex(Indices.TecDAX),
  countries: [
    { name: Country[Country.Deutschland], portion: 99.98 }
  ],
  industries: [
    { name: IsharesIndustryNames.Technologie, portion: 41.95 },
    { name: IsharesIndustryNames.Gesundheitsversorgung, portion: 21.22},
    { name: IsharesIndustryNames.IndustrieDienstleistungen, portion: 18.25 },
    { name: IsharesIndustryNames.Telekommunikation, portion: 15.10 },
    { name: IsharesIndustryNames.HaushaltsKonsumgüter, portion: 1.81},
    { name: IsharesIndustryNames.Einzelhandel, portion: 0.91 },
    { name: IsharesIndustryNames.ÖlGas, portion: 0.73 }
  ]
};

