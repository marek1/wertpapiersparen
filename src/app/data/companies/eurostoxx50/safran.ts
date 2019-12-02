import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 1.82, yield: 1.78}, {year: 2017, rate: 1.60}, {year: 2016, rate: 1.52}, {
    year: 2015,
    rate: 1.38,
    yield: 2.16
  }, {year: 2014, rate: 1.20, yield: 2.34}, {year: 2013, rate: 1.12, yield: 2.22}, {year: 2012, rate: 0.96, yield: 2.94}, {
    year: 2011,
    rate: 0.62,
    yield: 2.67
  }, {year: 2010, rate: 0.50, yield: 1.89}, {year: 2009, rate: 0.38, yield: 2.78}, {year: 2008, rate: 0.25}
];
const prices = {
  '2019-11-29': {
    '1. open': '147.70',
    '2. high': '148.80',
    '3. low': '147.70',
    '4. close': '148.50',
    '5. volume': ''
  },
  '2019-10-31': {
    '1. open': '143.25',
    '2. high': '144.75',
    '3. low': '142.20',
    '4. close': '142.20',
    '5. volume': ''
  },
  '2018-12-28': {
    '1. open': '101.60',
    '2. high': '102.85',
    '3. low': '101.60',
    '4. close': '102.50',
    '5. volume': ''
  },
  '2017-12-29': {
    '1. open': '86.24',
    '2. high': '86.24',
    '3. low': '86.24',
    '4. close': '86.24',
    '5. volume': ''
  },
  '2016-12-30': {
    '1. open': '68.05',
    '2. high': '68.05',
    '3. low': '68.05',
    '4. close': '68.05',
    '5. volume': ''
  },
  '2015-12-30': {
    '1. open': '63.68',
    '2. high': '63.79',
    '3. low': '63.68',
    '4. close': '63.79',
    '5. volume': ''
  },
  '2014-12-30': {
    '1. open': '50.78',
    '2. high': '50.78',
    '3. low': '50.65',
    '4. close': '50.65',
    '5. volume': ''
  },
};

// tslint:disable:max-line-length
export const safranCompany: Company = {
  id: 1194,
  name: 'Safran S.A.',
  country: Country.Frankreich,
  city: 'Paris',
  url: 'https://www.safran-group.com/',
  description: 'Die Safran S.A. ist ein börsennotierter Technologiekonzern mit Sitz in Paris. Er entstand im Jahr 2005 aus der Fusion des vorher weitestgehend im Besitz des französischen Staates befindlichen Aeronautik-Konzerns Snecma und des in Elektronik, Kommunikationstechnik und Rüstungstechnik tätigen Unternehmens Sagem. Seit 2018 ist Safran das drittgrößte Luftfahrtunternehmen der Welt (ausgenommen Flugzeugbauer).',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Safran_S.A.',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_Safran.svg/500px-Logo_Safran.svg.png',
  products: [],
  industries: [121013, 2210, 1222],
  securityType: SecurityType.ActionsPort,
  currency: Currency.EUR,
  isin: 'FR0000073272',
  wkn: '924781',
  symbol: 'SEJ1.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50],
  end_of_month_prices: prices,
  dividends,
  tags: ['Luftfahrt', 'Raumfahrt', 'Weltraum', 'Antriebssysteme']
};
// tslint:enable:max-line-length

