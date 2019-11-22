import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.75, yield: 1.66}, {year: 2017, rate: 0.60}, {year: 2016, rate: 0.45}, {
    year: 2015,
    rate: 0.35,
    yield: 1.32
  }, {year: 2014, rate: 0.00}, {year: 2013, rate: 0.00}
];
const prices = {
  '2019-11-22': {
    '1. open': '36.8400',
    '2. high': '37.6000',
    '3. low': '33.9400',
    '4. close': '34.6400',
    '5. volume': '1430748'
  },
  '2019-10-31': {
    '1. open': '38.1200',
    '2. high': '40.0000',
    '3. low': '36.5000',
    '4. close': '36.5000',
    '5. volume': '2355355'
  },
  '2019-09-30': {
    '1. open': '37.3200',
    '2. high': '41.8000',
    '3. low': '34.0000',
    '4. close': '37.8000',
    '5. volume': '3052583'
  },
  '2019-08-30': {
    '1. open': '38.8400',
    '2. high': '39.7200',
    '3. low': '33.9800',
    '4. close': '37.3200',
    '5. volume': '1716337'
  },
  '2019-07-31': {
    '1. open': '37.1800',
    '2. high': '41.2600',
    '3. low': '36.3800',
    '4. close': '38.9400',
    '5. volume': '1734274'
  },
  '2019-06-28': {
    '1. open': '47.9600',
    '2. high': '49.3200',
    '3. low': '34.8800',
    '4. close': '36.3800',
    '5. volume': '2711333'
  },
  '2019-05-31': {
    '1. open': '46.9000',
    '2. high': '49.8400',
    '3. low': '46.3400',
    '4. close': '48.2200',
    '5. volume': '944108'
  },
  '2019-04-30': {
    '1. open': '50.4500',
    '2. high': '50.4500',
    '3. low': '45.2200',
    '4. close': '46.8000',
    '5. volume': '1459262'
  },
  '2019-03-29': {
    '1. open': '50.6000',
    '2. high': '54.3000',
    '3. low': '49.6400',
    '4. close': '50.6500',
    '5. volume': '1059592'
  },
  '2019-02-28': {
    '1. open': '51.2000',
    '2. high': '53.0000',
    '3. low': '50.3500',
    '4. close': '50.4500',
    '5. volume': '777030'
  },
  '2019-01-31': {
    '1. open': '45.1000',
    '2. high': '52.6500',
    '3. low': '44.8600',
    '4. close': '52.3500',
    '5. volume': '1335392'
  },
  '2018-12-28': {
    '1. open': '48.6400',
    '2. high': '49.0000',
    '3. low': '44.5800',
    '4. close': '45.5200',
    '5. volume': '988101'
  },
  '2018-11-30': {
    '1. open': '51.8000',
    '2. high': '53.0000',
    '3. low': '46.8400',
    '4. close': '47.9800',
    '5. volume': '1629493'
  },
  '2018-10-31': {
    '1. open': '51.7500',
    '2. high': '52.7500',
    '3. low': '46.8200',
    '4. close': '52.1500',
    '5. volume': '1442668'
  },
  '2018-09-28': {
    '1. open': '55.4000',
    '2. high': '55.7000',
    '3. low': '49.5200',
    '4. close': '51.6000',
    '5. volume': '1140108'
  },
  '2018-08-31': {
    '1. open': '48.8200',
    '2. high': '55.7500',
    '3. low': '48.6400',
    '4. close': '55.3500',
    '5. volume': '961913'
  },
  '2018-07-31': {
    '1. open': '46.1800',
    '2. high': '49.1600',
    '3. low': '46.1400',
    '4. close': '48.8000',
    '5. volume': '662692'
  },
  '2018-06-29': {
    '1. open': '44.9800',
    '2. high': '47.8200',
    '3. low': '44.6800',
    '4. close': '46.5600',
    '5. volume': '1171398'
  },
  '2018-05-31': {
    '1. open': '45.1600',
    '2. high': '47.1600',
    '3. low': '43.9000',
    '4. close': '44.8600',
    '5. volume': '1192154'
  },
  '2018-04-30': {
    '1. open': '45.5600',
    '2. high': '46.2000',
    '3. low': '43.2200',
    '4. close': '45.5600',
    '5. volume': '1232973'
  },
  '2018-03-29': {
    '1. open': '42.7400',
    '2. high': '47.4600',
    '3. low': '42.2800',
    '4. close': '45.7200',
    '5. volume': '1309296'
  },
  '2018-02-28': {
    '1. open': '43.6400',
    '2. high': '43.9400',
    '3. low': '40.0000',
    '4. close': '42.7800',
    '5. volume': '1155084'
  },
  '2018-01-31': {
    '1. open': '42.3200',
    '2. high': '46.4200',
    '3. low': '42.0400',
    '4. close': '43.4000',
    '5. volume': '1103405'
  },
  '2017-12-29': {
    '1. open': '43.4050',
    '2. high': '45.1100',
    '3. low': '41.4500',
    '4. close': '42.2800',
    '5. volume': '951557'
  },
  '2017-11-30': {
    '1. open': '42.2100',
    '2. high': '44.3150',
    '3. low': '42.1950',
    '4. close': '43.3900',
    '5. volume': '1199161'
  },
  '2017-10-31': {
    '1. open': '41.8000',
    '2. high': '43.4150',
    '3. low': '40.4800',
    '4. close': '42.2100',
    '5. volume': '780628'
  },
  '2017-09-29': {
    '1. open': '40.9900',
    '2. high': '42.3000',
    '3. low': '40.3800',
    '4. close': '41.8150',
    '5. volume': '789725'
  },
  '2017-08-31': {
    '1. open': '38.4750',
    '2. high': '41.2350',
    '3. low': '37.3100',
    '4. close': '40.9450',
    '5. volume': '1364120'
  },
  '2017-07-31': {
    '1. open': '37.0350',
    '2. high': '39.1000',
    '3. low': '35.6500',
    '4. close': '38.1550',
    '5. volume': '829715'
  },
  '2017-06-30': {
    '1. open': '38.3900',
    '2. high': '39.2000',
    '3. low': '36.3550',
    '4. close': '37.0350',
    '5. volume': '1276285'
  },
  '2017-05-31': {
    '1. open': '33.7550',
    '2. high': '38.4000',
    '3. low': '33.2100',
    '4. close': '38.2750',
    '5. volume': '1579357'
  },
  '2017-04-28': {
    '1. open': '34.0250',
    '2. high': '34.8700',
    '3. low': '33.1500',
    '4. close': '33.6000',
    '5. volume': '659273'
  },
  '2017-03-31': {
    '1. open': '34.6500',
    '2. high': '34.9100',
    '3. low': '32.3900',
    '4. close': '33.6200',
    '5. volume': '953741'
  },
  '2017-02-28': {
    '1. open': '33.1000',
    '2. high': '35.4750',
    '3. low': '32.4450',
    '4. close': '34.8550',
    '5. volume': '765737'
  },
  '2017-01-31': {
    '1. open': '32.0850',
    '2. high': '33.5500',
    '3. low': '31.5050',
    '4. close': '33.0950',
    '5. volume': '934813'
  },
  '2016-12-30': {
    '1. open': '31.9100',
    '2. high': '32.5000',
    '3. low': '29.4500',
    '4. close': '32.0100',
    '5. volume': '1451594'
  },
  '2016-11-30': {
    '1. open': '33.0550',
    '2. high': '33.5650',
    '3. low': '29.5200',
    '4. close': '32.0000',
    '5. volume': '1835588'
  },
  '2016-10-31': {
    '1. open': '35.1000',
    '2. high': '36.0750',
    '3. low': '31.5000',
    '4. close': '33.1950',
    '5. volume': '1382729'
  },
  '2016-09-30': {
    '1. open': '39.2600',
    '2. high': '39.4950',
    '3. low': '34.8600',
    '4. close': '35.6000',
    '5. volume': '1562269'
  },
  '2016-08-31': {
    '1. open': '36.6650',
    '2. high': '40.1900',
    '3. low': '35.6350',
    '4. close': '39.3300',
    '5. volume': '857863'
  },
  '2016-07-29': {
    '1. open': '34.9050',
    '2. high': '37.6050',
    '3. low': '34.5400',
    '4. close': '36.4250',
    '5. volume': '755141'
  },
  '2016-06-30': {
    '1. open': '32.7000',
    '2. high': '35.2150',
    '3. low': '31.5000',
    '4. close': '34.5700',
    '5. volume': '1091525'
  }
};

// tslint:disable:max-line-length
export const adoCompany: Company = {
  id: 1110,
  name: 'ADO Properties SE',
  country: Country.Luxemburg,
  city: 'Luxemburg',
  url: 'http://www.ado.properties/',
  description: 'ADO Properties ist ein luxemburgisches, ausschließlich in Berlin tätiges Immobilienunternehmen. Es besitzt rund 24.000 Wohn- und Gewerbeeinheiten mit einem Portfoliowert von 4,09 Milliarden Euro',
  link_wikipedia: 'https://de.wikipedia.org/wiki/ADO_Properties',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/f/f7/ADO_Properties_logo.svg/500px-ADO_Properties_logo.svg.png',
  products: [],
  industries: [111010, 111011],
  currency: Currency.EUR,
  isin: 'LU1250154413',
  wkn: 'A14U78',
  symbol: 'ADJ.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Immobilienunternehmen', 'Wohnimmobilien']
};
// tslint:enable:max-line-length

