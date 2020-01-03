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
const prices = {
  '2019-12-30': {'1. open': '60.70', '4. close': '71.34'},
  '2018-12-30': {'1. open': '60.10', '4. close': '60.96'},
  '2017-12-30': {'1. open': '42.97', '4. close': '60.22'},
  '2016-12-30': {'1. open': '39.84', '4. close': '43.13'},
  '2015-12-30': {'1. open': '32.93', '4. close': '40.93'},
  '2014-12-30': {'1. open': '31.01', '4. close': '32.60'},
  '2013-12-30': {'1. open': '19.21', '4. close': '30.82'},
  '2012-12-30': {'1. open': '12.55', '4. close': '19.05'},
  '2011-12-30': {'1. open': '15.48', '4. close': '12.31'},
  '2010-12-30': {'1. open': '11.80', '4. close': '15.51'}
};

// tslint:disable:max-line-length
export const amadeusItCompany: Company = {
  id: 1173,
  name: 'Amadeus IT Group SA',
  country: Country.Spanien,
  city: 'Madrid',
  url: 'https://corporate.amadeus.com/',
  description: 'Amadeus ist ein europäisches Softwareunternehmen, das das gleichnamige Computerreservierungssystem (CRS) vertreibt.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Amadeus_IT_Group',
  link_stockPrices: 'https://www.boerse.de/historische-kurse/Amadeus-IT-Group-Aktie/ES0109067019',
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
  current_indices: [Indices.EuroStoxx50, Indices.MSCIWorld],
  end_of_month_prices: prices,
  dividends,
  tags: ['Software', 'Buchungssystem', 'Tourismus', 'Reisen', 'Flugbuchung']
};
// tslint:enable:max-line-length

