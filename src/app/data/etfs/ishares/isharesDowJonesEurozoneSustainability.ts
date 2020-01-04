import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { Country } from '../../../enums/country';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';

// tslint:disable:max-line-length
export const isharesDowJonesEurozoneSustainability: Etf = {
  name: 'iShares Dow Jones Eurozone Sustainability Screened UCITS ETF (DE)',
  description: 'Der Fonds strebt die Nachbildung der Wertentwicklung eines Index an, der aus Unternehmen in der Eurozone besteht, die im Bereich der Nachhaltigkeit führend sind.',
  tracks: Indices.DowJonesSustainabilityEurozone,
  securityType: SecurityType.Aktie,
  url: 'https://www.ishares.com/de/privatanleger/de/produkte/251706/ishares-dow-jones-eurozone-sustainability-screened-ucits-etf-de-fund',
  isin: 'DE000A0F5UG3',
  currency: Currency.EUR,
  manager: 'BlackRock Asset Management Deutschland AG',
  issuer: 'BlackRock Asset Management Deutschland AG',
  logo: 'https://www.ishares.com/uk-retail-assets/cache-1564149267000/images/media-bin/web/global/logos/logo-ishares.svg',
  country: Country.Irland,
  gewinn: 'ausschüttend',
  ter: 0.41,
  yields: [
    29.63
  ],
  lastUpdate: '2019-12-31',
  shares: [],
  industries: [
    { name: IsharesIndustryNames.Financials, portion: 18.88},
    { name: IsharesIndustryNames.Industrie, portion: 13.21 },
    { name: IsharesIndustryNames.IT, portion: 12.08 },
    { name: IsharesIndustryNames.ZyklischeKonsumgueter, portion: 11.92 },
    { name: IsharesIndustryNames.Gesundheitsversorgung, portion: 10.25 },
    { name: IsharesIndustryNames.Energie, portion: 9.51 },
    { name: IsharesIndustryNames.NichtzyklischeKonsumgueter, portion: 8.89 },
    { name: IsharesIndustryNames.Versorger, portion: 8.08 },
    { name: IsharesIndustryNames.Materialien, portion: 6.09 },
    { name: IsharesIndustryNames.Immobilien, portion: 0.89 },
  ],
  countries: [
    { name: Country[Country.Frankreich], portion: 39.74 },
    { name: Country[Country.Deutschland], portion: 25.37 },
    { name: Country[Country.Spanien], portion: 12.41 },
    { name: Country[Country.Niederlande], portion: 12.13 },
    { name: Country[Country.Italien], portion: 4.57 },
    { name: Country[Country.Finnland], portion: 2.86 },
    { name: Country[Country.Irland], portion: 1.81 },
  ],
  tags: ['Nachhaltigkeit', 'Sustainability']
};
// tslint:enable:max-line-length
