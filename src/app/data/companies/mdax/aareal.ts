import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {year: 2018, rate: 2.10, yield: 7.82}, {year: 2017, rate: 2.50}, {year: 2016, rate: 2.00}, {
    year: 2015,
    rate: 1.65,
    yield: 4.76
  }, {year: 2014, rate: 1.20, yield: 3.60}, {year: 2013, rate: 0.75, yield: 2.61}, {year: 2012, rate: 0.00, yield: 0.00}, {
    year: 2011,
    rate: 0.00,
    yield: 0.00
  }, {year: 2010, rate: 0.00, yield: 0.00}, {year: 2009, rate: 0.00, yield: 0.00}, {year: 2008, rate: 0.00, yield: 0.00}, {
    year: 2007,
    rate: 0.50,
    yield: 1.60
  }, {year: 2006, rate: 0.50, yield: 1.42}, {year: 2005, rate: 0.00, yield: 0.00}, {year: 2004, rate: 0.00, yield: 0.00}, {
    year: 2003,
    rate: 0.60,
    yield: 2.42
  }, {year: 2002, rate: 0.50, yield: 4.10}
];

const prices = {
  '2019-11-12': {
    '1. open': '30.3000',
    '2. high': '30.8400',
    '3. low': '27.9300',
    '4. close': '28.0100',
    '5. volume': '1942183'
  },
  '2019-10-31': {
    '1. open': '28.0900',
    '2. high': '30.6800',
    '3. low': '25.6900',
    '4. close': '30.1200',
    '5. volume': '4249246'
  },
  '2019-09-30': {
    '1. open': '25.7500',
    '2. high': '28.0100',
    '3. low': '25.2000',
    '4. close': '27.8900',
    '5. volume': '4609317'
  },
  '2019-08-30': {
    '1. open': '25.6600',
    '2. high': '26.6100',
    '3. low': '24.8000',
    '4. close': '25.8200',
    '5. volume': '5683140'
  },
  '2019-07-31': {
    '1. open': '23.5200',
    '2. high': '25.9800',
    '3. low': '22.8200',
    '4. close': '25.8800',
    '5. volume': '5735499'
  },
  '2019-06-28': {
    '1. open': '26.1500',
    '2. high': '26.1500',
    '3. low': '22.4400',
    '4. close': '23.1700',
    '5. volume': '6864462'
  },
  '2019-05-31': {
    '1. open': '31.2400',
    '2. high': '31.5000',
    '3. low': '25.9400',
    '4. close': '26.2400',
    '5. volume': '6640022'
  },
  '2019-04-30': {
    '1. open': '27.7500',
    '2. high': '31.2400',
    '3. low': '27.5800',
    '4. close': '31.1100',
    '5. volume': '6569413'
  },
  '2019-03-29': {
    '1. open': '28.8500',
    '2. high': '29.8300',
    '3. low': '26.6400',
    '4. close': '27.4800',
    '5. volume': '12241808'
  },
  '2019-02-28': {
    '1. open': '28.4000',
    '2. high': '28.8700',
    '3. low': '26.0600',
    '4. close': '28.7900',
    '5. volume': '6419954'
  },
  '2019-01-31': {
    '1. open': '26.9400',
    '2. high': '29.4400',
    '3. low': '26.0200',
    '4. close': '28.2000',
    '5. volume': '5743261'
  },
  '2018-12-28': {
    '1. open': '29.6000',
    '2. high': '29.8000',
    '3. low': '25.8200',
    '4. close': '26.9900',
    '5. volume': '5150806'
  },
  '2018-11-30': {
    '1. open': '32.9400',
    '2. high': '33.5500',
    '3. low': '28.6600',
    '4. close': '29.0100',
    '5. volume': '7230524'
  },
  '2018-10-31': {
    '1. open': '35.8000',
    '2. high': '36.6900',
    '3. low': '31.6000',
    '4. close': '32.9100',
    '5. volume': '4891841'
  },
  '2018-09-28': {
    '1. open': '35.0300',
    '2. high': '37.1800',
    '3. low': '34.3500',
    '4. close': '36.0200',
    '5. volume': '5705222'
  },
  '2018-08-31': {
    '1. open': '39.2500',
    '2. high': '39.5800',
    '3. low': '35.0100',
    '4. close': '35.0300',
    '5. volume': '7001451'
  },
  '2018-07-31': {
    '1. open': '37.2300',
    '2. high': '40.1500',
    '3. low': '37.0000',
    '4. close': '39.3000',
    '5. volume': '5380033'
  },
  '2018-06-29': {
    '1. open': '36.9000',
    '2. high': '38.7500',
    '3. low': '36.5700',
    '4. close': '37.6700',
    '5. volume': '6336350'
  },
  '2018-05-31': {
    '1. open': '41.4700',
    '2. high': '42.5000',
    '3. low': '36.4500',
    '4. close': '36.6800',
    '5. volume': '9790525'
  }
};

// tslint:disable:max-line-length
export const aarealCompany: Company = {
  id: 1031,
  name: 'Aareal Bank AG',
  country: Country.Deutschland,
  city: 'Wiesbaden',
  url: 'https://www.aareal-bank.com/',
  description: 'Die Aareal Bank AG ist ein im MDAX gelistetes internationales Unternehmen mit Hauptsitz in Wiesbaden, das bis 2002 als DePfa Deutsche Bau- und Boden Bank AG und Teil der DePfa-Gruppe firmierte.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Aareal_Bank',
  logo: 'https://www.aareal-bank.com/typo3conf/ext/sitepackage/Resources/Public/Images/logo_arl.png',
  products: [],
  industries: [141011],
  currency: Currency.EUR,
  securityType: SecurityType.Inhaberaktie,
  isin: 'DE0005408116',
  wkn: '540811',
  symbol: 'ARL',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Immobilienfinanzierungen', 'Beratung']
};
// tslint:enable:max-line-length

