import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.20, yield: 10.23}, {year: 2017, rate: 0.20}, {year: 2016, rate: 0.18}, {
    year: 2015,
    rate: 0.14,
    yield: 4.53
  }, {year: 2014, rate: 0.07, yield: 2.89}, {year: 2013, rate: 0.05, yield: 2.79}, {year: 2012, rate: 0.05, yield: 3.85}, {
    year: 2011,
    rate: 0.05,
    yield: 3.88
  }, {year: 2010, rate: 0.08, yield: 3.94}, {year: 2009, rate: 0.08, yield: 2.56}, {year: 2008, rate: 0.00, yield: 0.00}, {
    year: 2007,
    rate: 0.38,
    yield: 7.02
  }, {year: 2006, rate: 0.38, yield: 6.50}, {year: 2005, rate: 0.57, yield: 4.31}, {year: 2004, rate: 0.47, yield: 4.43}, {
    year: 2003,
    rate: 0.39,
    yield: 3.77
  }, {year: 2002, rate: 0.30, yield: 4.84}, {year: 2001, rate: 0.57, yield: 4.73}, {year: 2000, rate: 0.57, yield: 3.30}
];
const prices = {
  '2019-11-29': {
    '1. open': '2.2490',
    '2. high': '2.3800',
    '3. low': '2.2385',
    '4. close': '2.2980',
    '5. volume': '939250'
  },
  '2019-10-31': {
    '1. open': '2.1855',
    '2. high': '2.2820',
    '3. low': '2.0710',
    '4. close': '2.2520',
    '5. volume': '892103'
  },
  '2019-09-30': {
    '1. open': '2.0080',
    '2. high': '2.1835',
    '3. low': '1.9800',
    '4. close': '2.1760',
    '5. volume': '792640'
  },
  '2019-08-30': {
    '1. open': '1.9734',
    '2. high': '2.0300',
    '3. low': '1.8138',
    '4. close': '1.9932',
    '5. volume': '1165892'
  },
  '2019-07-31': {
    '1. open': '1.9000',
    '2. high': '2.0760',
    '3. low': '1.8400',
    '4. close': '1.9602',
    '5. volume': '1142723'
  },
  '2019-06-28': {
    '1. open': '1.8124',
    '2. high': '1.9298',
    '3. low': '1.8100',
    '4. close': '1.8820',
    '5. volume': '673999'
  },
  '2019-05-31': {
    '1. open': '2.3350',
    '2. high': '2.3525',
    '3. low': '1.8090',
    '4. close': '1.8336',
    '5. volume': '1574626'
  },
  '2019-04-30': {
    '1. open': '2.1855',
    '2. high': '2.3540',
    '3. low': '2.1800',
    '4. close': '2.3415',
    '5. volume': '743020'
  },
  '2019-03-29': {
    '1. open': '2.1875',
    '2. high': '2.2555',
    '3. low': '2.1105',
    '4. close': '2.1650',
    '5. volume': '1069830'
  },
  '2019-02-28': {
    '1. open': '1.9886',
    '2. high': '2.1840',
    '3. low': '1.9386',
    '4. close': '2.1690',
    '5. volume': '1592804'
  },
  '2019-01-31': {
    '1. open': '1.9232',
    '2. high': '2.0670',
    '3. low': '1.8876',
    '4. close': '1.9990',
    '5. volume': '1220853'
  },
  '2018-12-28': {
    '1. open': '2.0950',
    '2. high': '2.1220',
    '3. low': '1.8854',
    '4. close': '1.9532',
    '5. volume': '1349965'
  },
  '2018-11-30': {
    '1. open': '1.9478',
    '2. high': '2.1000',
    '3. low': '1.8714',
    '4. close': '2.0800',
    '5. volume': '2031900'
  },
  '2018-10-31': {
    '1. open': '2.1980',
    '2. high': '2.2405',
    '3. low': '1.8892',
    '4. close': '2.0290',
    '5. volume': '3556615'
  },
  '2018-09-28': {
    '1. open': '2.1370',
    '2. high': '2.4690',
    '3. low': '2.1370',
    '4. close': '2.2550',
    '5. volume': '2186432'
  },
  '2018-08-31': {
    '1. open': '2.6425',
    '2. high': '2.6450',
    '3. low': '2.1000',
    '4. close': '2.1100',
    '5. volume': '3782354'
  },
  '2018-07-31': {
    '1. open': '2.4440',
    '2. high': '2.6230',
    '3. low': '2.3945',
    '4. close': '2.5600',
    '5. volume': '1229890'
  },
  '2018-06-29': {
    '1. open': '2.6150',
    '2. high': '2.6575',
    '3. low': '2.3980',
    '4. close': '2.4880',
    '5. volume': '1836967'
  },
  '2018-05-31': {
    '1. open': '3.1760',
    '2. high': '3.2400',
    '3. low': '2.4000',
    '4. close': '2.5750',
    '5. volume': '4799803'
  }
};

// tslint:disable:max-line-length
export const intesaCompany: Company = {
  id: 1187,
  name: 'Intesa Sanpaolo S.p.A.',
  country: Country.Italien,
  city: 'Turin',
  url: 'https://www.intesasanpaolo.com/',
  description: 'Die Intesa Sanpaolo S.p.A. ist eines der größten italienischen Kreditinstitute. Das Unternehmen mit Sitz in Turin ist an der Borsa Italiana im Leitindex FTSE MIB gelistet.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Intesa_Sanpaolo',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/5/51/Intesa_Sanpaolo_logo.svg/500px-Intesa_Sanpaolo_logo.svg.png',
  products: [],
  industries: [141010],
  securityType: SecurityType.AzioniNom,
  currency: Currency.EUR,
  isin: 'IT0000072618',
  wkn: '850605',
  symbol: 'IES.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50],
  end_of_month_prices: prices,
  dividends,
  tags: ['Bank', 'Finanzunternehmen', 'Filialen', 'Finanzierungsprodukte', 'Kapitalanlageprodukte']
};
// tslint:enable:max-line-length

