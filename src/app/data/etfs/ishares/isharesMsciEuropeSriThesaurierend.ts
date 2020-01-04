import { Country } from '../../../enums/country';
import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { findCompaniesInIndex } from '../../companies';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';
import { SecurityType } from '../../../enums/securityType';

// tslint:disable:max-line-length
export const isharesMsciEuropeSriThesaurierend: Etf = {
  name: 'iShares MSCI Europe SRI UCITS (thesaurierend)',
  description: 'Der Fonds ist bestrebt, die Performance eines Index nachzubilden, der sich aus europäischen ESG (umweltverträglich, sozial und staatlich)-überprüften Unternehmensanleihen zusammensetzt.',
  tracks: Indices.MSCIEuropeSRI,
  securityType: SecurityType.Aktie,
  url: 'https://www.ishares.com/de/privatanleger/de/produkte/251767/',
  isin: 'IE00B52VJ196',
  currency: Currency.EUR,
  manager: 'BlackRock Asset Management Ireland Limited',
  issuer: 'iShares II plc',
  logo: 'https://www.ishares.com/uk-retail-assets/cache-1564149267000/images/media-bin/web/global/logos/logo-ishares.svg',
  country: Country.Irland,
  gewinn: 'thesaurierend',
  ter: 0.3,
  yields: [ // kumulativ
    20.57, 38.18, 40.19
  ],
  lastUpdate: '2019-12-26',
  shares: findCompaniesInIndex(Indices.MSCIEuropeSRI),
  industries: [
    { name: IsharesIndustryNames.Financials, portion: 19.41},
    { name: IsharesIndustryNames.NichtzyklischeKonsumgueter, portion: 15.37 },
    { name: IsharesIndustryNames.Industrie, portion: 14.87 },
    { name: IsharesIndustryNames.Gesundheitsversorgung, portion: 13.41 },
    { name: IsharesIndustryNames.ZyklischeKonsumgueter, portion: 10.12 },
    { name: IsharesIndustryNames.IT, portion: 9.17 },
    { name: IsharesIndustryNames.Materialien, portion: 8 },
    { name: IsharesIndustryNames.Kommunikation, portion: 4.47 },
    { name: IsharesIndustryNames.Versorger, portion: 2.06 },
    { name: IsharesIndustryNames.Immobilien, portion: 1.87 },
  ],
  countries: [
    { name: Country[Country.Deutschland], portion: 23.45},
    { name: Country[Country.Frankreich], portion: 16.63},
    { name: Country[Country.UK], portion: 13.91},
    { name: Country[Country.Niederlande], portion: 11.2},
    { name: Country[Country.Schweiz], portion: 10.9},
    { name: Country[Country.Dänemark], portion: 6.8},
    { name: Country[Country.Spanien], portion: 3.71},
    { name: Country[Country.Schweden], portion: 3.29},
    { name: Country[Country.Italien], portion: 2.62},
    { name: Country[Country.Irland], portion: 2.28}
  ],
  tags: ['Anleihen', 'ESG', 'geprüft', 'umweltverträglich', 'sozial', 'staatlich']
};
// tslint:enable:max-line-length

