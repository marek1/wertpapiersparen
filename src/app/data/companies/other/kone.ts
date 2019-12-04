import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';

const dividends = [
  {year: 2018, rate: 1.65, yield: 3.95}, {year: 2017, rate: 1.65}, {year: 2016, rate: 1.55}, {
    year: 2015,
    rate: 1.40,
    yield: 3.57
  }, {year: 2014, rate: 1.20, yield: 3.17}, {year: 2013, rate: 1.00, yield: 3.05}, {year: 2012, rate: 0.88, yield: 3.14}, {
    year: 2011,
    rate: 0.70,
    yield: 3.49
  }, {year: 2010, rate: 0.45, yield: 2.16}, {year: 2009, rate: 0.65, yield: 4.33}
];
const prices = {
  '2019-12-30': {'1. open': '42.09', '4. close': '56.32'},
  '2018-12-30': {'1. open': '44.66', '4. close': '41.75'},
  '2017-12-30': {'1. open': '42.22', '4. close': '44.70'},
  '2016-12-30': {'1. open': '38.33', '4. close': '42.50'},
  '2015-12-30': {'1. open': '37.95', '4. close': '39.20'},
  '2014-12-30': {'1. open': '32.78', '4. close': '37.69'},
  '2013-12-30': {'1. open': '28.21', '4. close': '33.05'},
  '2012-12-30': {'1. open': '20.11', '4. close': '27.81'},
  '2011-12-30': {'1. open': '20.96', '4. close': '19.94'},
  '2010-12-30': {'1. open': '14.90', '4. close': '20.95'},
  '2009-12-30': {'1. open': '7.26', '4. close': '14.90'},
  '2008-12-30': {'1. open': '11.62', '4. close': '7.26'},
  '2007-12-30': {'1. open': '13.13', '4. close': '11.62'}
};

// tslint:disable:max-line-length
export const koneCompany: Company = {
  id: 1228,
  name: 'KONE OYJ',
  country: Country.Finnland,
  city: 'Espoo',
  url: 'https://www.kone.com/en/',
  description: 'Die Kone Corporation (Eigenschreibweise KONE) ist ein finnisches, an der Börse Helsinki notiertes Industrieunternehmen sowie einer der vier größten Aufzugsanlagen- und Fahrtreppenproduzenten der Welt mit Hauptsitz in Espoo.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Kone_(Unternehmen)',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Kone.svg/494px-Kone.svg.png',
  products: [],
  industries: [111114, 111014],
  securityType: SecurityType.RegisteredShares,
  currency: Currency.EUR,
  isin: 'FI0009013403',
  wkn: 'A0ET4X',
  symbol: 'KC4.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [],
  end_of_month_prices: prices,
  dividends,
  tags: ['Aufzüge', 'Aufzugstechnik', 'Rolltreppen']
};
// tslint:enable:max-line-length

