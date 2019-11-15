import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.25, yield: 1.57}, {year: 2017, rate: 0.35}, {year: 2016, rate: 0.30}, {
    year: 2015,
    rate: 1.15,
    yield: 4.87
  }, {year: 2014, rate: 0.90, yield: 3.93}, {year: 2013, rate: 0.25, yield: 1.12}, {year: 2012, rate: 1.40, yield: 4.00}, {
    year: 2011,
    rate: 1.30,
    yield: 3.72
  }, {year: 2010, rate: 1.00, yield: 1.77}, {year: 2009, rate: 0.20, yield: 0.50}, {year: 2008, rate: 2.40, yield: 6.00}, {
    year: 2007,
    rate: 0.50,
    yield: 1.23
  }, {year: 2006, rate: 0.50, yield: 2.43}, {year: 2005, rate: 0.45, yield: 3.53}, {year: 2004, rate: 0.33, yield: 3.37}, {
    year: 2003,
    rate: 0.25,
    yield: 4.60
  }, {year: 2002, rate: 0.25, yield: 5.76}, {year: 2001, rate: 0.25, yield: 4.56}, {year: 2000, rate: 0.21, yield: 4.67}, {
    year: 1999,
    rate: 0.14,
    yield: 4.00
  }
];
const prices = {
  '2019-11-15': {
    '1. open': '12.8700',
    '2. high': '13.6000',
    '3. low': '11.4950',
    '4. close': '11.6400',
    '5. volume': '22475360'
  },
  '2019-10-31': {
    '1. open': '12.6900',
    '2. high': '13.4050',
    '3. low': '11.8850',
    '4. close': '12.7600',
    '5. volume': '30152630'
  },
  '2019-09-30': {
    '1. open': '14.3750',
    '2. high': '15.5650',
    '3. low': '11.9800',
    '4. close': '12.7150',
    '5. volume': '38345811'
  },
  '2019-08-30': {
    '1. open': '14.7050',
    '2. high': '14.8650',
    '3. low': '13.1500',
    '4. close': '14.3650',
    '5. volume': '26923348'
  },
  '2019-07-31': {
    '1. open': '16.5050',
    '2. high': '16.7950',
    '3. low': '14.1150',
    '4. close': '14.7300',
    '5. volume': '24411379'
  },
  '2019-06-28': {
    '1. open': '15.1500',
    '2. high': '16.5200',
    '3. low': '14.8400',
    '4. close': '16.3800',
    '5. volume': '18418535'
  },
  '2019-05-31': {
    '1. open': '18.1400',
    '2. high': '18.4000',
    '3. low': '14.8550',
    '4. close': '15.1950',
    '5. volume': '28405106'
  },
  '2019-04-30': {
    '1. open': '16.5000',
    '2. high': '18.6100',
    '3. low': '16.5000',
    '4. close': '18.0800',
    '5. volume': '15882941'
  },
  '2019-03-29': {
    '1. open': '16.8750',
    '2. high': '17.7500',
    '3. low': '15.0250',
    '4. close': '16.3400',
    '5. volume': '31895518'
  },
  '2019-02-28': {
    '1. open': '17.0100',
    '2. high': '17.3550',
    '3. low': '15.9800',
    '4. close': '16.7550',
    '5. volume': '17206042'
  },
  '2019-01-31': {
    '1. open': '15.6800',
    '2. high': '17.7450',
    '3. low': '15.2850',
    '4. close': '16.9800',
    '5. volume': '26892876'
  },
  '2018-12-28': {
    '1. open': '16.2500',
    '2. high': '16.8650',
    '3. low': '14.9650',
    '4. close': '15.7200',
    '5. volume': '27788601'
  },
  '2018-11-30': {
    '1. open': '16.5000',
    '2. high': '17.8700',
    '3. low': '14.6050',
    '4. close': '15.5050',
    '5. volume': '52567664'
  },
  '2018-10-31': {
    '1. open': '18.0750',
    '2. high': '18.6400',
    '3. low': '15.3150',
    '4. close': '16.4700',
    '5. volume': '35469569'
  },
  '2018-09-28': {
    '1. open': '19.6050',
    '2. high': '19.6400',
    '3. low': '17.5350',
    '4. close': '18.0800',
    '5. volume': '28068946'
  },
  '2018-08-31': {
    '1. open': '22.6200',
    '2. high': '22.9900',
    '3. low': '18.7800',
    '4. close': '19.5950',
    '5. volume': '36704095'
  },
  '2018-07-31': {
    '1. open': '20.9000',
    '2. high': '22.6800',
    '3. low': '20.4800',
    '4. close': '22.5900',
    '5. volume': '17551355'
  },
  '2018-06-29': {
    '1. open': '23.0100',
    '2. high': '23.6500',
    '3. low': '20.4600',
    '4. close': '21.1500',
    '5. volume': '22013973'
  },
  '2018-05-31': {
    '1. open': '24.5000',
    '2. high': '25.8600',
    '3. low': '22.8200',
    '4. close': '22.9000',
    '5. volume': '23764626'
  }
};

// tslint:disable:max-line-length
export const ksCompany: Company = {
  id: 1062,
  name: 'K+S AG',
  country: Country.Deutschland,
  city: 'Kassel',
  url: 'http://www.k-plus-s.com/',
  description: 'Die K+S AG, früher Kali und Salz AG, mit Sitz in Kassel ist ein börsennotiertes deutsches Bergbauunternehmen mit den Schwerpunkten Kali- und Salzförderung. K+S ist der größte Salzproduzent der Welt[2] und gehört zur Spitzengruppe der internationalen Anbieter[3] von kali- und magnesiumhaltigen Produkten für landwirtschaftliche und industrielle Anwendungen. K+S ist vorwiegend in Europa, Nord- und Südamerika tätig und beschäftigt weltweit mehr als 14.900 Mitarbeiter (2018)',
  link_wikipedia: 'https://de.wikipedia.org/wiki/K%2BS',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ks_logo.svg/500px-Ks_logo.svg.png',
  products: [],
  industries: [1514],
  currency: Currency.EUR,
  isin: 'DE000KSAG888',
  wkn: 'KSAG88',
  symbol: 'SDF.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['kali', 'salz', 'magnesiumhaltige Produkte', 'Spezialdüngemittel', 'Standarddüngemittel']
};
// tslint:enable:max-line-length

