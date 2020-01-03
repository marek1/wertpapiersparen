import { Country } from '../../../enums/country';
import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { findCompaniesInIndex } from '../../companies';

// tslint:disable:max-line-length
export const isharesMsciEuropeSriThesaurierend: Etf = {
  name: 'iShares MSCI Europe SRI UCITS (thesaurierend)',
  description: 'Der Fonds ist bestrebt, die Performance eines Index nachzubilden, der sich aus europäischen ESG (umweltverträglich, sozial und staatlich)-überprüften Unternehmensanleihen zusammensetzt.',
  tracks: Indices.MSCIEuropeSRI,
  url: 'https://www.ishares.com/de/privatanleger/de/produkte/251767/ishares-dow-jones-europe-sustainability-screened-ucits-etf#/',
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
};
// tslint:enable:max-line-length

