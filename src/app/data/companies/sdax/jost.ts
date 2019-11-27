import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 1.10, yield: 4.40}, {year: 2017, rate: 0.50}
];
const prices = {
  '2019-11-27': {
    '1. open': '25.4500',
    '2. high': '33.2000',
    '3. low': '25.2500',
    '4. close': '31.9500',
    '5. volume': '1110707'
  },
  '2019-10-31': {
    '1. open': '26.3000',
    '2. high': '26.6000',
    '3. low': '23.5500',
    '4. close': '25.2000',
    '5. volume': '787357'
  },
  '2019-09-30': {
    '1. open': '26.9000',
    '2. high': '29.8000',
    '3. low': '24.6000',
    '4. close': '26.3500',
    '5. volume': '762701'
  },
  '2019-08-30': {
    '1. open': '29.5000',
    '2. high': '29.6500',
    '3. low': '24.1500',
    '4. close': '26.7500',
    '5. volume': '751037'
  },
  '2019-07-31': {
    '1. open': '30.9500',
    '2. high': '31.4000',
    '3. low': '27.6500',
    '4. close': '29.5500',
    '5. volume': '1150016'
  },
  '2019-06-28': {
    '1. open': '29.7000',
    '2. high': '34.4500',
    '3. low': '29.2500',
    '4. close': '30.8000',
    '5. volume': '890593'
  },
  '2019-05-31': {
    '1. open': '33.0500',
    '2. high': '33.7500',
    '3. low': '28.7000',
    '4. close': '29.6500',
    '5. volume': '675704'
  },
  '2019-04-30': {
    '1. open': '30.5500',
    '2. high': '36.2500',
    '3. low': '30.4000',
    '4. close': '32.8500',
    '5. volume': '575199'
  },
  '2019-03-29': {
    '1. open': '29.1000',
    '2. high': '32.4000',
    '3. low': '28.2000',
    '4. close': '30.6000',
    '5. volume': '618202'
  },
  '2019-02-28': {
    '1. open': '31.0000',
    '2. high': '31.1500',
    '3. low': '28.3500',
    '4. close': '29.1000',
    '5. volume': '416831'
  },
  '2019-01-31': {
    '1. open': '26.4000',
    '2. high': '31.6500',
    '3. low': '25.4500',
    '4. close': '30.7000',
    '5. volume': '285133'
  },
  '2018-12-28': {
    '1. open': '30.2000',
    '2. high': '31.0000',
    '3. low': '25.0000',
    '4. close': '26.4000',
    '5. volume': '489940'
  },
  '2018-11-30': {
    '1. open': '30.5000',
    '2. high': '33.7000',
    '3. low': '29.0500',
    '4. close': '29.8500',
    '5. volume': '481922'
  },
  '2018-10-31': {
    '1. open': '32.6500',
    '2. high': '33.1500',
    '3. low': '27.4000',
    '4. close': '30.8000',
    '5. volume': '892693'
  },
  '2018-09-28': {
    '1. open': '38.0500',
    '2. high': '38.4000',
    '3. low': '31.9500',
    '4. close': '32.3500',
    '5. volume': '396327'
  },
  '2018-08-31': {
    '1. open': '37.2500',
    '2. high': '39.0500',
    '3. low': '35.0500',
    '4. close': '37.7000',
    '5. volume': '358143'
  },
  '2018-07-31': {
    '1. open': '32.6000',
    '2. high': '37.0000',
    '3. low': '30.0000',
    '4. close': '37.0000',
    '5. volume': '573378'
  },
  '2018-06-29': {
    '1. open': '36.2500',
    '2. high': '37.3000',
    '3. low': '29.9000',
    '4. close': '32.7000',
    '5. volume': '412407'
  },
  '2018-05-31': {
    '1. open': '34.8500',
    '2. high': '39.1500',
    '3. low': '34.8500',
    '4. close': '35.9000',
    '5. volume': '442999'
  },
  '2018-04-30': {
    '1. open': '35.8500',
    '2. high': '37.6500',
    '3. low': '33.8000',
    '4. close': '34.9500',
    '5. volume': '554560'
  },
  '2018-03-29': {
    '1. open': '42.5500',
    '2. high': '45.1500',
    '3. low': '34.3000',
    '4. close': '36.6500',
    '5. volume': '812956'
  },
  '2018-02-28': {
    '1. open': '41.0000',
    '2. high': '43.3500',
    '3. low': '37.2000',
    '4. close': '42.3000',
    '5. volume': '857704'
  },
  '2018-01-31': {
    '1. open': '42.3000',
    '2. high': '45.1000',
    '3. low': '40.0500',
    '4. close': '40.6500',
    '5. volume': '871684'
  },
  '2017-12-29': {
    '1. open': '42.1050',
    '2. high': '43.5700',
    '3. low': '38.2650',
    '4. close': '42.2000',
    '5. volume': '241223'
  },
  '2017-11-30': {
    '1. open': '39.8050',
    '2. high': '49.5000',
    '3. low': '38.8050',
    '4. close': '42.0350',
    '5. volume': '753442'
  },
  '2017-10-31': {
    '1. open': '38.1000',
    '2. high': '41.0300',
    '3. low': '36.5000',
    '4. close': '39.2650',
    '5. volume': '352666'
  },
  '2017-09-29': {
    '1. open': '33.4000',
    '2. high': '39.0900',
    '3. low': '32.2200',
    '4. close': '38.0500',
    '5. volume': '345320'
  },
  '2017-08-31': {
    '1. open': '28.5050',
    '2. high': '34.1100',
    '3. low': '27.0100',
    '4. close': '32.9900',
    '5. volume': '534517'
  }
};

// tslint:disable:max-line-length
export const jostWerkeCompany: Company = {
  id: 1140,
  name: 'JOST Werke AG',
  country: Country.Deutschland,
  city: 'Neu-Isenburg',
  url: 'http://www.jost-world.com/',
  description: 'Die Jost Werke sind ein börsennotierter Zulieferer für Nutzfahrzeuge. Produziert werden vor allem sicherheitsrelevante Systeme und Kupplungen für Anhänger und Auflieger.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Jost_Werke',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Logo_Jost.svg/500px-Logo_Jost.svg.png',
  products: [],
  industries: [121211, 121212],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE000JST4000',
  wkn: 'JST400',
  symbol: 'JST.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['LKWs', 'LKW-Teile', 'Traktoren', 'Traktorenteile']
};
// tslint:enable:max-line-length

