import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 1.17, yield: 1.92}, {year: 2017, rate: 1.14}, {year: 2016, rate: 0.94}, {
    year: 2015,
    rate: 0.78,
    yield: 1.90
  }, {year: 2014, rate: 0.70, yield: 2.12}, {year: 2013, rate: 0.63, yield: 2.03}, {year: 2012, rate: 0.50, yield: 2.62}, {
    year: 2011,
    rate: 0.37,
    yield: 2.95
  }, {year: 2010, rate: 0.30, yield: 1.91}
];
const prices = {};

// tslint:disable:max-line-length
export const amadeusItCompany: Company = {
  id: 1173,
  name: 'Amadeus IT Group SA',
  country: Country.Spanien,
  city: 'Madrid',
  url: 'https://corporate.amadeus.com/',
  description: 'Amadeus ist ein europäisches Softwareunternehmen, das das gleichnamige Computerreservierungssystem (CRS) vertreibt.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Amadeus_IT_Group',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Amadeus_%28CRS%29_Logo.svg/500px-Amadeus_%28CRS%29_Logo.svg.png',
  products: [],
  industries: [1810],
  securityType: SecurityType.AccionesPort,
  currency: Currency.EUR,
  isin: 'ES0109067019',
  wkn: 'A1CXN0',
  symbol: 'AMADF',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50],
  end_of_month_prices: prices,
  dividends,
  tags: ['Software', 'Buchungssystem', 'Tourismus', 'Reisen', 'Flugbuchung']
};
// tslint:enable:max-line-length

