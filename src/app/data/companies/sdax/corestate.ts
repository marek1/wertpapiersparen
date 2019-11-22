import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 2.50, yield: 8.20}, {year: 2017, rate: 2.00}, {year: 2016, rate: 1.00}
];
const prices = {
  '2019-11-22': {
    '1. open': '33.5000',
    '2. high': '34.8500',
    '3. low': '31.2500',
    '4. close': '32.4500',
    '5. volume': '987657'
  },
  '2019-10-31': {
    '1. open': '34.1000',
    '2. high': '36.7500',
    '3. low': '25.6500',
    '4. close': '33.4000',
    '5. volume': '2874831'
  },
  '2019-09-30': {
    '1. open': '28.8500',
    '2. high': '34.1500',
    '3. low': '28.2500',
    '4. close': '33.8000',
    '5. volume': '1002135'
  },
  '2019-08-30': {
    '1. open': '33.2500',
    '2. high': '35.4000',
    '3. low': '27.6000',
    '4. close': '28.6500',
    '5. volume': '1333068'
  },
  '2019-07-31': {
    '1. open': '30.4000',
    '2. high': '34.0000',
    '3. low': '29.6000',
    '4. close': '33.0500',
    '5. volume': '1084617'
  },
  '2019-06-28': {
    '1. open': '29.2000',
    '2. high': '30.1500',
    '3. low': '25.4500',
    '4. close': '30.0500',
    '5. volume': '1774166'
  },
  '2019-05-31': {
    '1. open': '35.6000',
    '2. high': '35.9500',
    '3. low': '28.3000',
    '4. close': '29.0000',
    '5. volume': '2273248'
  },
  '2019-04-30': {
    '1. open': '35.8000',
    '2. high': '39.6000',
    '3. low': '35.2000',
    '4. close': '35.7500',
    '5. volume': '2417671'
  },
  '2019-03-29': {
    '1. open': '30.4000',
    '2. high': '35.5000',
    '3. low': '28.6000',
    '4. close': '35.2500',
    '5. volume': '2430651'
  },
  '2019-02-28': {
    '1. open': '32.2500',
    '2. high': '34.4500',
    '3. low': '29.3000',
    '4. close': '30.2000',
    '5. volume': '1084957'
  },
  '2019-01-31': {
    '1. open': '30.1000',
    '2. high': '34.1000',
    '3. low': '28.0000',
    '4. close': '32.0000',
    '5. volume': '938631'
  },
  '2018-12-28': {
    '1. open': '37.0500',
    '2. high': '37.1000',
    '3. low': '28.1500',
    '4. close': '30.3000',
    '5. volume': '1054524'
  },
  '2018-11-30': {
    '1. open': '38.2500',
    '2. high': '41.7500',
    '3. low': '36.2000',
    '4. close': '36.4500',
    '5. volume': '1028727'
  },
  '2018-10-31': {
    '1. open': '40.3000',
    '2. high': '40.9000',
    '3. low': '34.0500',
    '4. close': '38.1000',
    '5. volume': '963966'
  },
  '2018-09-28': {
    '1. open': '43.0000',
    '2. high': '43.6500',
    '3. low': '39.2500',
    '4. close': '40.0000',
    '5. volume': '981033'
  },
  '2018-08-31': {
    '1. open': '46.6000',
    '2. high': '48.2000',
    '3. low': '40.6000',
    '4. close': '43.0000',
    '5. volume': '1122317'
  },
  '2018-07-31': {
    '1. open': '45.9000',
    '2. high': '46.8500',
    '3. low': '41.8500',
    '4. close': '46.4500',
    '5. volume': '662915'
  },
  '2018-06-29': {
    '1. open': '48.2500',
    '2. high': '48.8000',
    '3. low': '44.2000',
    '4. close': '45.7500',
    '5. volume': '574487'
  },
  '2018-05-31': {
    '1. open': '46.3000',
    '2. high': '50.0000',
    '3. low': '45.5500',
    '4. close': '48.1000',
    '5. volume': '851364'
  },
  '2018-04-30': {
    '1. open': '46.4000',
    '2. high': '49.3000',
    '3. low': '44.1500',
    '4. close': '45.9000',
    '5. volume': '404049'
  },
  '2018-03-29': {
    '1. open': '51.9000',
    '2. high': '52.1000',
    '3. low': '44.9500',
    '4. close': '46.2500',
    '5. volume': '599168'
  },
  '2018-02-28': {
    '1. open': '49.5500',
    '2. high': '53.5000',
    '3. low': '46.9500',
    '4. close': '52.0000',
    '5. volume': '870099'
  },
  '2018-01-31': {
    '1. open': '53.6000',
    '2. high': '55.7000',
    '3. low': '49.1500',
    '4. close': '49.7000',
    '5. volume': '472980'
  },
  '2017-12-29': {
    '1. open': '46.7250',
    '2. high': '54.5500',
    '3. low': '45.2250',
    '4. close': '53.4300',
    '5. volume': '824749'
  },
  '2017-11-30': {
    '1. open': '52.0400',
    '2. high': '52.0400',
    '3. low': '46.1900',
    '4. close': '46.4950',
    '5. volume': '649351'
  },
  '2017-10-31': {
    '1. open': '50.4300',
    '2. high': '53.7100',
    '3. low': '50.4300',
    '4. close': '51.4400',
    '5. volume': '403941'
  },
  '2017-09-29': {
    '1. open': '54.3600',
    '2. high': '57.0200',
    '3. low': '49.4050',
    '4. close': '50.0000',
    '5. volume': '702019'
  },
  '2017-08-31': {
    '1. open': '53.3000',
    '2. high': '55.5000',
    '3. low': '52.0000',
    '4. close': '54.2000',
    '5. volume': '242150'
  },
  '2017-07-31': {
    '1. open': '52.0000',
    '2. high': '56.4400',
    '3. low': '49.9000',
    '4. close': '53.0000',
    '5. volume': '494462'
  },
  '2017-06-30': {
    '1. open': '39.5700',
    '2. high': '48.4550',
    '3. low': '37.5500',
    '4. close': '47.0000',
    '5. volume': '272138'
  },
  '2017-05-31': {
    '1. open': '36.0000',
    '2. high': '41.6300',
    '3. low': '31.6800',
    '4. close': '39.6000',
    '5. volume': '177018'
  },
  '2017-04-28': {
    '1. open': '28.1500',
    '2. high': '35.2500',
    '3. low': '27.3000',
    '4. close': '35.2000',
    '5. volume': '156657'
  },
  '2017-03-31': {
    '1. open': '25.2000',
    '2. high': '28.2000',
    '3. low': '25.2000',
    '4. close': '28.0000',
    '5. volume': '204906'
  },
  '2017-02-28': {
    '1. open': '23.7000',
    '2. high': '27.0000',
    '3. low': '23.2500',
    '4. close': '25.2000',
    '5. volume': '168266'
  },
  '2017-01-31': {
    '1. open': '23.2000',
    '2. high': '23.7000',
    '3. low': '23.2000',
    '4. close': '23.7000',
    '5. volume': '30928'
  },
  '2016-12-30': {
    '1. open': '21.9000',
    '2. high': '23.2000',
    '3. low': '21.9000',
    '4. close': '23.2000',
    '5. volume': '47860'
  },
  '2016-11-30': {
    '1. open': '18.2000',
    '2. high': '21.7000',
    '3. low': '18.2000',
    '4. close': '21.7000',
    '5. volume': '19118'
  }
};

// tslint:disable:max-line-length
export const coreStateCompany: Company = {
  id: 1120,
  name: 'Corestate Capital Holding S.A.',
  country: Country.Luxemburg,
  city: 'Luxemburg',
  url: 'http://www.corestate-capital.com/',
  description: 'Die Corestate Capital Holding S.A. ist ein börsennotierter Immobilien-Investmentmanager mit Sitz in Luxemburg.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Corestate',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Corestate_Capital_Group_Logo_Sep_2015_CMYK_klein.jpg',
  products: [],
  industries: [111016],
  currency: Currency.EUR,
  isin: 'LU1296758029',
  wkn: 'A141J3',
  symbol: 'CCAP.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Immobilien', 'Investmentmanager', 'Co-Investor']
};
// tslint:enable:max-line-length

