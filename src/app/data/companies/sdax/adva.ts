import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {year: 2018, rate: 0.00, yield: 0.00}, {year: 2016, rate: 0.00, yield: 0.00}, {year: 2015, rate: 0.00, yield: 0.00}, {
    year: 2014,
    rate: 0.00,
    yield: 0.00
  }, {year: 2013, rate: 0.00, yield: 0.00}, {year: 2012, rate: 0.00, yield: 0.00}, {year: 2011, rate: 0.00, yield: 0.00}, {
    year: 2010,
    rate: 0.00,
    yield: 0.00
  }, {year: 2009, rate: 0.00, yield: 0.00}, {year: 2008, rate: 0.00, yield: 0.00}, {year: 2007, rate: 0.00, yield: 0.00}, {
    year: 2006,
    rate: 0.00,
    yield: 0.00
  }, {year: 2005, rate: 0.00, yield: 0.00}, {year: 2004, rate: 0.00, yield: 0.00}, {year: 2003, rate: 0.00, yield: 0.00}
];
const prices = {
  '2019-11-22': {
    '1. open': '6.3900',
    '2. high': '8.1000',
    '3. low': '6.2800',
    '4. close': '7.7300',
    '5. volume': '2203634'
  },
  '2019-10-31': {
    '1. open': '6.4800',
    '2. high': '6.7500',
    '3. low': '5.8100',
    '4. close': '6.3200',
    '5. volume': '1761464'
  },
  '2019-09-30': {
    '1. open': '5.7700',
    '2. high': '6.8300',
    '3. low': '5.7500',
    '4. close': '6.3800',
    '5. volume': '1507443'
  },
  '2019-08-30': {
    '1. open': '6.9800',
    '2. high': '7.1300',
    '3. low': '5.5700',
    '4. close': '5.8300',
    '5. volume': '2728738'
  },
  '2019-07-31': {
    '1. open': '6.6000',
    '2. high': '7.3100',
    '3. low': '6.4700',
    '4. close': '7.0400',
    '5. volume': '2896339'
  },
  '2019-06-28': {
    '1. open': '6.4600',
    '2. high': '7.1900',
    '3. low': '6.2900',
    '4. close': '6.4300',
    '5. volume': '1938332'
  },
  '2019-05-31': {
    '1. open': '7.7000',
    '2. high': '7.8000',
    '3. low': '6.5800',
    '4. close': '6.8100',
    '5. volume': '3202002'
  },
  '2019-04-30': {
    '1. open': '9.3000',
    '2. high': '9.8200',
    '3. low': '7.4100',
    '4. close': '7.6200',
    '5. volume': '5409259'
  },
  '2019-03-29': {
    '1. open': '8.4750',
    '2. high': '9.2750',
    '3. low': '8.4750',
    '4. close': '8.9350',
    '5. volume': '3736992'
  },
  '2019-02-28': {
    '1. open': '7.4550',
    '2. high': '8.5100',
    '3. low': '6.5550',
    '4. close': '8.4500',
    '5. volume': '4406280'
  },
  '2019-01-31': {
    '1. open': '6.2800',
    '2. high': '7.9250',
    '3. low': '6.1300',
    '4. close': '7.4550',
    '5. volume': '3130274'
  },
  '2018-12-28': {
    '1. open': '7.5650',
    '2. high': '7.6950',
    '3. low': '6.0500',
    '4. close': '6.2550',
    '5. volume': '2502140'
  },
  '2018-11-30': {
    '1. open': '7.2600',
    '2. high': '8.2300',
    '3. low': '7.1450',
    '4. close': '7.4500',
    '5. volume': '5058007'
  },
  '2018-10-31': {
    '1. open': '6.6600',
    '2. high': '7.2500',
    '3. low': '6.2050',
    '4. close': '7.2250',
    '5. volume': '3760490'
  },
  '2018-09-28': {
    '1. open': '6.9500',
    '2. high': '7.0100',
    '3. low': '6.0650',
    '4. close': '6.7500',
    '5. volume': '2342143'
  },
  '2018-08-31': {
    '1. open': '7.2100',
    '2. high': '7.2600',
    '3. low': '6.1600',
    '4. close': '6.8950',
    '5. volume': '3021933'
  },
  '2018-07-31': {
    '1. open': '6.1400',
    '2. high': '7.4800',
    '3. low': '6.1150',
    '4. close': '7.1950',
    '5. volume': '4391384'
  },
  '2018-06-29': {
    '1. open': '6.2050',
    '2. high': '6.4950',
    '3. low': '5.8700',
    '4. close': '6.1200',
    '5. volume': '2244103'
  },
  '2018-05-31': {
    '1. open': '5.7200',
    '2. high': '6.5000',
    '3. low': '5.5100',
    '4. close': '6.1500',
    '5. volume': '2835762'
  }
};

// tslint:disable:max-line-length
export const advaCompany: Company = {
  id: 1111,
  name: 'ADVA Optical Networking SE',
  country: Country.Deutschland,
  city: 'Meiningen',
  url: 'http://www.advaoptical.com/',
  description: 'Die ADVA Optical Networking SE mit rechtlichem Sitz in Meiningen und Verwaltungssitz im bayerischen Martinsried bei München ist ein multinationaler Anbieter von Telekommunikationsausrüstung, insbesondere für glasfaserbasierter Übertragungstechnik.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/ADVA_Optical_Networking',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/ADVA_Optical_Networking_Logo.svg/500px-ADVA_Optical_Networking_Logo.svg.png',
  products: [],
  industries: [131011],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE0005103006',
  wkn: '510300',
  symbol: 'ADV.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Telekommunikationsinfrastrukturlösungen', 'Telekommunikationsausrüstung', 'Netzwerken', 'Hochgeschwindigkeitsdienste', 'Optische Netze']
};
// tslint:enable:max-line-length

