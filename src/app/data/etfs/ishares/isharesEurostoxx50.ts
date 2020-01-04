import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { Country } from '../../../enums/country';
import { findCompaniesInIndex } from '../../companies';
import { Indices } from '../../../enums/indices';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';
import { SecurityType } from '../../../enums/securityType';

// tslint:disable:max-line-length
export const isharesEurostoxx50: Etf = {
  name: 'iShares Core EURO STOXX 50 UCITS ETF (DE)',
  description: 'Der Fonds strebt die Nachbildung der Wertentwicklung eines Index an, der aus den 50 größten Unternehmen in der Eurozone besteht.',
  tracks: Indices.EuroStoxx50,
  securityType: SecurityType.Aktie,
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
  shares: findCompaniesInIndex(Indices.EuroStoxx50),
  countries: [
    { name: Country[Country.Frankreich], portion: 38.8 },
    { name: Country[Country.Deutschland], portion: 28.29 },
    { name: Country[Country.Niederlande], portion: 10.91 },
    { name: Country[Country.Spanien], portion: 9.11 },
    { name: Country[Country.Italien], portion: 4.79 },
    { name: Country[Country.USA], portion: 3.85 },
    { name: Country[Country.Belgien], portion: 2.3 },
    { name: Country[Country.Irland], portion: 1.06 }
  ],
  industries: [
    {name: IsharesIndustryNames.Financials, portion: 17.59},
    {name: IsharesIndustryNames.ZyklischeKonsumgueter, portion: 14.14},
    {name: IsharesIndustryNames.Industrie, portion: 13.28},
    {name: IsharesIndustryNames.IT, portion: 10.96},
    {name: IsharesIndustryNames.NichtzyklischeKonsumgueter, portion: 10.08},
    {name: IsharesIndustryNames.Materialien, portion: 9.41},
    {name: IsharesIndustryNames.Gesundheitsversorgung, portion: 8.49},
    {name: IsharesIndustryNames.Energie, portion: 6.18},
    {name: IsharesIndustryNames.Versorger, portion: 5.03},
    {name: IsharesIndustryNames.Kommunikation, portion: 4.68},
  ],
};
// tslint:enable:max-line-length
