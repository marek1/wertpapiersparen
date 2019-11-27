import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 1.40, yield: 3.46}, {year: 2017, rate: 1.60}, {year: 2016, rate: 1.60}
];
const prices = {
  '2019-11-27': {
    '1. open': '44.6900',
    '2. high': '44.7900',
    '3. low': '44.4400',
    '4. close': '44.6600',
    '5. volume': '1275091'
  },
  '2019-10-31': {
    '1. open': '44.6900',
    '2. high': '44.8300',
    '3. low': '44.3000',
    '4. close': '44.6600',
    '5. volume': '4143868'
  },
  '2019-09-30': {
    '1. open': '45.3000',
    '2. high': '45.9800',
    '3. low': '44.3200',
    '4. close': '44.6600',
    '5. volume': '18830306'
  },
  '2019-08-30': {
    '1. open': '43.1800',
    '2. high': '45.2900',
    '3. low': '42.8800',
    '4. close': '45.2900',
    '5. volume': '5343235'
  },
  '2019-07-31': {
    '1. open': '41.7800',
    '2. high': '43.8800',
    '3. low': '41.7200',
    '4. close': '43.5100',
    '5. volume': '5380314'
  },
  '2019-06-28': {
    '1. open': '40.5600',
    '2. high': '42.9000',
    '3. low': '40.4600',
    '4. close': '41.7000',
    '5. volume': '6354085'
  },
  '2019-05-31': {
    '1. open': '40.0800',
    '2. high': '40.8300',
    '3. low': '39.7200',
    '4. close': '40.5800',
    '5. volume': '6019135'
  },
  '2019-04-30': {
    '1. open': '41.1900',
    '2. high': '41.8000',
    '3. low': '41.0100',
    '4. close': '41.3900',
    '5. volume': '3580622'
  },
  '2019-03-29': {
    '1. open': '40.5500',
    '2. high': '41.3500',
    '3. low': '39.8400',
    '4. close': '41.2200',
    '5. volume': '4730239'
  },
  '2019-02-28': {
    '1. open': '41.2100',
    '2. high': '41.5800',
    '3. low': '40.1600',
    '4. close': '40.6400',
    '5. volume': '2552662'
  },
  '2019-01-31': {
    '1. open': '40.5200',
    '2. high': '41.4800',
    '3. low': '39.9800',
    '4. close': '41.4000',
    '5. volume': '5698277'
  },
  '2018-12-28': {
    '1. open': '40.5000',
    '2. high': '41.2400',
    '3. low': '39.5100',
    '4. close': '40.7300',
    '5. volume': '8479568'
  },
  '2018-11-30': {
    '1. open': '39.0000',
    '2. high': '40.3800',
    '3. low': '38.9400',
    '4. close': '40.3800',
    '5. volume': '9418966'
  },
  '2018-10-31': {
    '1. open': '38.5100',
    '2. high': '39.0000',
    '3. low': '38.1900',
    '4. close': '39.0000',
    '5. volume': '7074732'
  },
  '2018-09-28': {
    '1. open': '37.5000',
    '2. high': '38.5600',
    '3. low': '37.3800',
    '4. close': '38.4900',
    '5. volume': '11250781'
  },
  '2018-08-31': {
    '1. open': '38.1000',
    '2. high': '38.1000',
    '3. low': '37.0800',
    '4. close': '37.4100',
    '5. volume': '8184695'
  },
  '2018-07-31': {
    '1. open': '36.6300',
    '2. high': '38.1100',
    '3. low': '36.5000',
    '4. close': '38.0000',
    '5. volume': '10322467'
  },
  '2018-06-29': {
    '1. open': '36.1100',
    '2. high': '36.9300',
    '3. low': '35.8600',
    '4. close': '36.6900',
    '5. volume': '8349405'
  },
  '2018-05-31': {
    '1. open': '36.6100',
    '2. high': '36.9800',
    '3. low': '35.7000',
    '4. close': '36.1100',
    '5. volume': '11446916'
  },
  '2018-04-30': {
    '1. open': '38.3400',
    '2. high': '38.5600',
    '3. low': '35.8000',
    '4. close': '36.5300',
    '5. volume': '14802677'
  },
  '2018-03-29': {
    '1. open': '32.8400',
    '2. high': '40.0300',
    '3. low': '31.9300',
    '4. close': '38.4700',
    '5. volume': '43012240'
  },
  '2018-02-28': {
    '1. open': '30.7300',
    '2. high': '33.3300',
    '3. low': '28.8600',
    '4. close': '32.8100',
    '5. volume': '17952711'
  },
  '2018-01-31': {
    '1. open': '32.7700',
    '2. high': '34.0600',
    '3. low': '30.5200',
    '4. close': '30.7000',
    '5. volume': '15624639'
  },
  '2017-12-29': {
    '1. open': '38.7800',
    '2. high': '39.8900',
    '3. low': '31.5100',
    '4. close': '32.6750',
    '5. volume': '17992356'
  },
  '2017-11-30': {
    '1. open': '39.9800',
    '2. high': '42.6800',
    '3. low': '38.4750',
    '4. close': '38.8350',
    '5. volume': '11531415'
  },
  '2017-10-31': {
    '1. open': '37.6500',
    '2. high': '40.8650',
    '3. low': '36.7900',
    '4. close': '39.9500',
    '5. volume': '6774278'
  },
  '2017-09-29': {
    '1. open': '37.0800',
    '2. high': '38.5450',
    '3. low': '36.2100',
    '4. close': '37.6550',
    '5. volume': '8185080'
  },
  '2017-08-31': {
    '1. open': '35.6250',
    '2. high': '38.2550',
    '3. low': '35.4900',
    '4. close': '37.0250',
    '5. volume': '7724169'
  },
  '2017-07-31': {
    '1. open': '34.4200',
    '2. high': '36.4400',
    '3. low': '34.0600',
    '4. close': '35.4850',
    '5. volume': '6500191'
  },
  '2017-06-30': {
    '1. open': '36.6950',
    '2. high': '37.4650',
    '3. low': '34.2100',
    '4. close': '34.4650',
    '5. volume': '10681950'
  },
  '2017-05-31': {
    '1. open': '33.8600',
    '2. high': '36.7950',
    '3. low': '32.7800',
    '4. close': '36.5300',
    '5. volume': '14643699'
  },
  '2017-04-28': {
    '1. open': '35.7700',
    '2. high': '36.5900',
    '3. low': '33.1500',
    '4. close': '33.7500',
    '5. volume': '8165792'
  },
  '2017-03-31': {
    '1. open': '34.0350',
    '2. high': '36.1800',
    '3. low': '32.2000',
    '4. close': '35.3850',
    '5. volume': '12050114'
  },
  '2017-02-28': {
    '1. open': '31.9150',
    '2. high': '34.2300',
    '3. low': '31.3100',
    '4. close': '33.9000',
    '5. volume': '8041784'
  },
  '2017-01-31': {
    '1. open': '33.3050',
    '2. high': '33.5300',
    '3. low': '30.8200',
    '4. close': '31.6850',
    '5. volume': '11061064'
  },
  '2016-12-30': {
    '1. open': '33.2450',
    '2. high': '33.4000',
    '3. low': '30.5500',
    '4. close': '33.0100',
    '5. volume': '10491256'
  },
  '2016-11-30': {
    '1. open': '36.3300',
    '2. high': '36.4300',
    '3. low': '30.1200',
    '4. close': '33.3150',
    '5. volume': '9356002'
  }
};

// tslint:disable:max-line-length
export const innogyCompany: Company = {
  id: 1138,
  name: 'Innogy SE',
  country: Country.Deutschland,
  city: 'Essen',
  url: 'https://www.innogy.com/',
  description: 'Die Innogy SE (Eigenschreibweise innogy; Kofferwort aus engl. innovation „Neuerung“ und energy „Energie“) ist eine börsennotierte, ursprünglich von RWE 2016 gegründete Tochtergesellschaft der E.ON. Innogy betreibt Verteilnetze, vertreibt Energie und erzeugt elektrischen Strom zum größten Teil aus erneuerbaren Energien.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Innogy',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Innogy_Logo.svg/166px-Innogy_Logo.svg.png',
  products: [],
  industries: [111310],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE000A2AADD2',
  wkn: 'A2AADD',
  symbol: 'IGY.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Energieunternehmen', 'Deutschland', 'Großbritannien', 'Niederlande', 'Belgien', 'Erneuerbare Energien', 'Netz', 'Infrastruktur']
};
// tslint:enable:max-line-length

