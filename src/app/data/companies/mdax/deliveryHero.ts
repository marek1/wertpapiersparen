import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {  year: 2018, rate: 0.00 }, {  year: 2017, rate: 0.00 }
];

const prices = {
  '2019-11-14': {
    '1. open': '41.7300',
    '2. high': '44.6200',
    '3. low': '40.4700',
    '4. close': '43.6700',
    '5. volume': '3935366'
  },
  '2019-10-31': {
    '1. open': '40.7400',
    '2. high': '46.0000',
    '3. low': '38.5900',
    '4. close': '42.0300',
    '5. volume': '9270326'
  },
  '2019-09-30': {
    '1. open': '46.2000',
    '2. high': '48.7900',
    '3. low': '40.5100',
    '4. close': '40.7600',
    '5. volume': '7720201'
  },
  '2019-08-30': {
    '1. open': '43.8000',
    '2. high': '47.0500',
    '3. low': '41.7600',
    '4. close': '45.9600',
    '5. volume': '8322155'
  },
  '2019-07-31': {
    '1. open': '40.4300',
    '2. high': '44.3400',
    '3. low': '38.4500',
    '4. close': '43.5800',
    '5. volume': '8828979'
  },
  '2019-06-28': {
    '1. open': '38.4500',
    '2. high': '43.2800',
    '3. low': '36.8900',
    '4. close': '39.8900',
    '5. volume': '8093269'
  },
  '2019-05-31': {
    '1. open': '41.2900',
    '2. high': '43.0000',
    '3. low': '37.6400',
    '4. close': '38.5500',
    '5. volume': '10181834'
  },
  '2019-04-30': {
    '1. open': '32.4900',
    '2. high': '41.2800',
    '3. low': '32.3700',
    '4. close': '41.0900',
    '5. volume': '9315017'
  },
  '2019-03-29': {
    '1. open': '34.3000',
    '2. high': '35.9000',
    '3. low': '31.5000',
    '4. close': '32.2000',
    '5. volume': '6714007'
  },
  '2019-02-28': {
    '1. open': '32.3000',
    '2. high': '36.9400',
    '3. low': '31.2600',
    '4. close': '34.0800',
    '5. volume': '6907445'
  },
  '2019-01-31': {
    '1. open': '32.5600',
    '2. high': '34.0000',
    '3. low': '29.0000',
    '4. close': '32.2000',
    '5. volume': '7050238'
  },
  '2018-12-28': {
    '1. open': '33.3800',
    '2. high': '34.6000',
    '3. low': '27.4800',
    '4. close': '32.5000',
    '5. volume': '6852785'
  },
  '2018-11-30': {
    '1. open': '35.3800',
    '2. high': '39.6400',
    '3. low': '30.2400',
    '4. close': '32.1400',
    '5. volume': '7799862'
  },
  '2018-10-31': {
    '1. open': '41.2200',
    '2. high': '41.8600',
    '3. low': '32.8400',
    '4. close': '35.6400',
    '5. volume': '8848554'
  },
  '2018-09-28': {
    '1. open': '47.5000',
    '2. high': '47.6800',
    '3. low': '41.1600',
    '4. close': '41.4200',
    '5. volume': '7242977'
  },
  '2018-08-31': {
    '1. open': '48.6200',
    '2. high': '49.8800',
    '3. low': '44.4800',
    '4. close': '47.4600',
    '5. volume': '7985225'
  },
  '2018-07-31': {
    '1. open': '45.4800',
    '2. high': '52.3500',
    '3. low': '45.3000',
    '4. close': '48.5800',
    '5. volume': '7538294'
  },
  '2018-06-29': {
    '1. open': '38.7200',
    '2. high': '46.0000',
    '3. low': '38.7200',
    '4. close': '45.5800',
    '5. volume': '11851069'
  },
  '2018-05-31': {
    '1. open': '39.8600',
    '2. high': '40.9600',
    '3. low': '37.7800',
    '4. close': '39.3200',
    '5. volume': '16054415'
  },
  '2018-04-30': {
    '1. open': '39.0800',
    '2. high': '41.2000',
    '3. low': '37.2800',
    '4. close': '39.6000',
    '5. volume': '5644160'
  },
  '2018-03-29': {
    '1. open': '35.8800',
    '2. high': '40.4600',
    '3. low': '35.3000',
    '4. close': '39.3000',
    '5. volume': '8319206'
  },
  '2018-02-28': {
    '1. open': '34.8400',
    '2. high': '36.6800',
    '3. low': '30.4000',
    '4. close': '36.0000',
    '5. volume': '5384916'
  },
  '2018-01-31': {
    '1. open': '33.1000',
    '2. high': '35.3200',
    '3. low': '31.4000',
    '4. close': '34.5600',
    '5. volume': '5801286'
  },
  '2017-12-29': {
    '1. open': '39.3750',
    '2. high': '39.9500',
    '3. low': '32.2200',
    '4. close': '33.0000',
    '5. volume': '4389578'
  },
  '2017-11-30': {
    '1. open': '37.4850',
    '2. high': '39.7500',
    '3. low': '36.3250',
    '4. close': '38.9000',
    '5. volume': '1097242'
  },
  '2017-10-31': {
    '1. open': '33.7800',
    '2. high': '38.3950',
    '3. low': '32.2900',
    '4. close': '36.6350',
    '5. volume': '937821'
  },
  '2017-09-29': {
    '1. open': '30.3000',
    '2. high': '37.0000',
    '3. low': '29.8350',
    '4. close': '33.5000',
    '5. volume': '1266841'
  },
  '2017-08-31': {
    '1. open': '28.2000',
    '2. high': '30.7900',
    '3. low': '26.5400',
    '4. close': '30.1000',
    '5. volume': '1119287'
  },
  '2017-07-31': {
    '1. open': '28.2500',
    '2. high': '29.8000',
    '3. low': '25.4250',
    '4. close': '27.7000',
    '5. volume': '2236473'
  }
};

// tslint:disable:max-line-length
export const deliveryHeroCompany: Company = {
  id: 1044,
  name: 'Delivery Hero SE',
  country: Country.Deutschland,
  city: 'Berlin',
  url: 'http://www.deliveryhero.com/',
  description: 'Die Delivery Hero SE ist ein börsennotiertes Unternehmen mit Sitz in Berlin. Es betreibt weltweit Online-Bestellplattformen für Essen.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Delivery_Hero',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Delivery_Hero_logo.svg/500px-Delivery_Hero_logo.svg.png',
  products: [
    {
      id: 104410,
      name: 'foodora',
      logo: 'https://www.deliveryhero.com/wp-content/uploads/2017/08/foodora_logo-1-1.png'
    },
    {
      id: 104411,
      name: 'foodpanda',
      logo: 'https://www.deliveryhero.com/wp-content/uploads/2017/08/foodpanda-1-1-1.png'
    },
    {
      id: 104412,
      name: 'onlinepizza',
      logo: 'https://www.deliveryhero.com/wp-content/uploads/2017/08/logo-sweden-onlinepizzase-2.png'
    }
  ],
  industries: [2410],
  securityType: SecurityType.Namensaktie,
  currency: Currency.EUR,
  isin: 'DE000A2E4K43',
  wkn: 'A2E4K4',
  symbol: 'DHER.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Essen', 'Online', 'Plattform']
};
// tslint:enable:max-line-length

