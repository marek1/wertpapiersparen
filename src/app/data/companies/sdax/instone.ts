import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {  year: 2018, rate: 0.00 }, {  year: 2017, rate: 0.00 }
];
const prices = {
  '2019-11-27': {
    '1. open': '42.5800',
    '2. high': '43.2900',
    '3. low': '19.7000',
    '4. close': '19.8400',
    '5. volume': '23400'
  },
  '2019-10-31': {
    '1. open': '41.2350',
    '2. high': '42.8350',
    '3. low': '39.5300',
    '4. close': '42.5800',
    '5. volume': '2868'
  },
  '2019-09-30': {
    '1. open': '37.9650',
    '2. high': '41.0950',
    '3. low': '37.9650',
    '4. close': '40.4800',
    '5. volume': '10922'
  },
  '2019-08-30': {
    '1. open': '40.2050',
    '2. high': '40.5150',
    '3. low': '17.2800',
    '4. close': '37.9650',
    '5. volume': '26942'
  },
  '2019-07-31': {
    '1. open': '41.4100',
    '2. high': '41.7850',
    '3. low': '40.7750',
    '4. close': '40.8850',
    '5. volume': '3300'
  },
  '2019-06-28': {
    '1. open': '38.6700',
    '2. high': '40.9650',
    '3. low': '38.6100',
    '4. close': '40.9100',
    '5. volume': '9887'
  },
  '2019-05-31': {
    '1. open': '40.6850',
    '2. high': '40.6950',
    '3. low': '38.7050',
    '4. close': '38.9650',
    '5. volume': '49248'
  },
  '2019-04-30': {
    '1. open': '38.3950',
    '2. high': '40.7300',
    '3. low': '38.3950',
    '4. close': '40.7000',
    '5. volume': '34050'
  },
  '2019-03-29': {
    '1. open': '38.0500',
    '2. high': '39.3000',
    '3. low': '37.8950',
    '4. close': '39.1400',
    '5. volume': '3990'
  },
  '2019-02-28': {
    '1. open': '18.7000',
    '2. high': '38.1300',
    '3. low': '18.7000',
    '4. close': '38.0500',
    '5. volume': '36080'
  },
  '2019-01-31': {
    '1. open': '16.5000',
    '2. high': '19.6320',
    '3. low': '15.5540',
    '4. close': '18.8500',
    '5. volume': '409914'
  },
  '2018-12-28': {
    '1. open': '19.0000',
    '2. high': '19.8580',
    '3. low': '15.8040',
    '4. close': '16.6000',
    '5. volume': '607085'
  },
  '2018-11-30': {
    '1. open': '20.8000',
    '2. high': '21.3900',
    '3. low': '18.0040',
    '4. close': '18.6000',
    '5. volume': '1151510'
  },
  '2018-10-31': {
    '1. open': '24.8000',
    '2. high': '24.8000',
    '3. low': '20.4000',
    '4. close': '20.7100',
    '5. volume': '724172'
  }
};

// tslint:disable:max-line-length
export const instoneCompany: Company = {
  id: 1139,
  name: 'Instone Real Estate AG',
  country: Country.Deutschland,
  city: 'Essen',
  url: 'http://www.instone.de/',
  description: 'Instone Real Estate ist ein börsennotierter deutscher Projektentwickler für Wohnimmobilien mit Sitz in Essen.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Instone_Real_Estate',
  logo: 'https://www.instone.de/fileadmin/user_upload/instone_logos.svg',
  products: [],
  industries: [111014],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE000A2NBX80',
  wkn: 'A2NBX8',
  symbol: 'INS.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Immobilienunternehmen', 'Entwicklung von Wohnraum', 'Entwicklung von Apartmenthäusern', 'Entwicklung von innerstädtischen Wohnquartieren']
};
// tslint:enable:max-line-length

