import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { Country } from '../../../enums/country';
import { Indices } from '../../../enums/indices';
import { findCompaniesInIndex } from '../../companies';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';
import { SecurityType } from '../../../enums/securityType';

// tslint:disable:max-line-length
export const isharesMsciWorldUsd: Etf = {
  name: 'iShares MSCI World UCITS ETF',
  description: 'Der Fonds strebt die Nachbildung der Wertentwicklung eines Index an, der aus Unternehmen aus Industrieländern besteht.',
  tracks: Indices.MSCIWorld,
  securityType: SecurityType.Aktie,
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
  shares: findCompaniesInIndex(Indices.MSCIWorld), // ignores shares with weight <= 0.3 %
  countries: [
    {name: Country[Country.USA], portion: 63.2},
    {name: Country[Country.Japan], portion: 8.09},
    {name: Country[Country.UK], portion: 5.43},
    {name: Country[Country.Frankreich], portion: 3.77},
    {name: Country[Country.Kanada], portion: 3.36},
    {name: Country[Country.Schweiz], portion: 3.07},
    {name: Country[Country.Deutschland], portion: 2.88},
    {name: Country[Country.Australien], portion: 2.24},
    {name: Country[Country.Niederlande], portion: 1.33},
    {name: Country[Country.Hongkong], portion: 1.15}
  ],
  industries: [
    {name: IsharesIndustryNames.IT, portion: 17.44},
    {name: IsharesIndustryNames.Financials, portion: 15.68},
    {name: IsharesIndustryNames.Gesundheitsversorgung, portion: 12.89},
    {name: IsharesIndustryNames.Industrie, portion: 10.99},
    {name: IsharesIndustryNames.ZyklischeKonsumgueter, portion: 10.27},
    {name: IsharesIndustryNames.Kommunikation, portion: 8.4},
    {name: IsharesIndustryNames.NichtzyklischeKonsumgueter, portion: 8.17},
    {name: IsharesIndustryNames.Energie, portion: 4.91},
    {name: IsharesIndustryNames.Materialien, portion: 4.34},
    {name: IsharesIndustryNames.Versorger, portion: 3.37},
  ]
};
// tslint:enable:max-line-length
