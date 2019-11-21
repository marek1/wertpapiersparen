import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.00, yield: 0.00}, {year: 2017, rate: 0.00}, {year: 2016, rate: 0.00}, {
    year: 2015,
    rate: 0.00,
    yield: 0.00
  }, {year: 2014, rate: 0.00, yield: 0.00}, {year: 2013, rate: 0.00, yield: 0.00}, {year: 2012, rate: 0.00, yield: 0.00}, {
    year: 2011,
    rate: 0.00,
    yield: 0.00
  }, {year: 2010, rate: 0.00, yield: 0.00}, {year: 2009, rate: 0.00, yield: 0.00}, {year: 2008, rate: 0.00, yield: 0.00}, {
    year: 2007,
    rate: 0.00,
    yield: 0.00
  }, {year: 2006, rate: 0.00, yield: 0.00}, {year: 2005, rate: 0.00, yield: 0.00}, {year: 2004, rate: 0.00, yield: 0.00}, {
    year: 2003,
    rate: 0.00,
    yield: 0.00
  }
];
const prices = {
  '2019-11-21': {
    '1. open': '40.2000',
    '2. high': '46.5200',
    '3. low': '39.7600',
    '4. close': '45.7100',
    '5. volume': '8618027'
  },
  '2019-10-31': {
    '1. open': '43.7200',
    '2. high': '44.7900',
    '3. low': '39.7700',
    '4. close': '40.2100',
    '5. volume': '8116440'
  },
  '2019-09-30': {
    '1. open': '43.2500',
    '2. high': '44.9800',
    '3. low': '41.0300',
    '4. close': '43.4300',
    '5. volume': '8053723'
  },
  '2019-08-30': {
    '1. open': '40.8500',
    '2. high': '43.9300',
    '3. low': '38.6500',
    '4. close': '42.9600',
    '5. volume': '9892317'
  },
  '2019-07-31': {
    '1. open': '36.0300',
    '2. high': '41.7700',
    '3. low': '34.9200',
    '4. close': '41.2300',
    '5. volume': '8369984'
  },
  '2019-06-28': {
    '1. open': '28.0000',
    '2. high': '35.9600',
    '3. low': '27.4400',
    '4. close': '35.4600',
    '5. volume': '7200212'
  },
  '2019-05-31': {
    '1. open': '34.5300',
    '2. high': '35.3700',
    '3. low': '28.1100',
    '4. close': '28.5000',
    '5. volume': '8955473'
  },
  '2019-04-30': {
    '1. open': '27.4300',
    '2. high': '34.9800',
    '3. low': '27.4300',
    '4. close': '34.5000',
    '5. volume': '8812871'
  },
  '2019-03-29': {
    '1. open': '27.0000',
    '2. high': '28.6800',
    '3. low': '25.6600',
    '4. close': '27.1400',
    '5. volume': '11984329'
  },
  '2019-02-28': {
    '1. open': '25.4000',
    '2. high': '27.4700',
    '3. low': '24.4300',
    '4. close': '26.8100',
    '5. volume': '10249461'
  },
  '2019-01-31': {
    '1. open': '22.3200',
    '2. high': '25.5300',
    '3. low': '19.1200',
    '4. close': '25.5300',
    '5. volume': '13275703'
  },
  '2018-12-28': {
    '1. open': '23.7400',
    '2. high': '24.5000',
    '3. low': '21.3600',
    '4. close': '22.5400',
    '5. volume': '9122967'
  },
  '2018-11-30': {
    '1. open': '24.1000',
    '2. high': '25.4400',
    '3. low': '21.1600',
    '4. close': '22.9400',
    '5. volume': '15408056'
  },
  '2018-10-31': {
    '1. open': '18.8850',
    '2. high': '24.0000',
    '3. low': '16.5400',
    '4. close': '23.3000',
    '5. volume': '21145741'
  },
  '2018-09-28': {
    '1. open': '20.1900',
    '2. high': '20.9300',
    '3. low': '18.5150',
    '4. close': '18.8150',
    '5. volume': '9814167'
  },
  '2018-08-31': {
    '1. open': '15.2500',
    '2. high': '20.7800',
    '3. low': '14.9700',
    '4. close': '20.1800',
    '5. volume': '18266746'
  },
  '2018-07-31': {
    '1. open': '12.8900',
    '2. high': '15.8500',
    '3. low': '12.7850',
    '4. close': '14.8350',
    '5. volume': '12319664'
  },
  '2018-06-29': {
    '1. open': '16.5000',
    '2. high': '16.5000',
    '3. low': '12.4400',
    '4. close': '13.0600',
    '5. volume': '24255832'
  },
  '2018-05-31': {
    '1. open': '18.1000',
    '2. high': '21.4800',
    '3. low': '18.1000',
    '4. close': '18.7300',
    '5. volume': '15780065'
  }
};

// tslint:disable:max-line-length
export const dialogSemiconductorCompany: Company = {
  id: 1046,
  name: 'Dialog Semiconductor plc',
  country: Country.UK,
  city: 'London',
  url: 'http://www.dialog-semiconductor.com/',
  description: 'Die Dialog Semiconductor plc. ist ein Fabless-Hersteller von anwendungsspezifischen integrierten Mixed-Signal-Schaltungen mit operativem Sitz im britischen Reading und Verwaltungszentrale in Kirchheim unter Teck. Verwendung finden die Produkte des Unternehmens vor allem im Multimedia- und Hörfunkbereich. Dabei hat sich das Unternehmen in den letzten Jahren auf die Geschäftsfelder Mobilfunk und Automobil spezialisiert.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Dialog_Semiconductor',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/9/92/Dialog-Semiconductor-Logo.svg/500px-Dialog-Semiconductor-Logo.svg.png',
  products: [],
  industries: [1811],
  currency: Currency.EUR,
  isin: 'GB0059822006',
  wkn: '927200',
  symbol: 'DLG.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX, Indices.TecDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Halbleiterlösungen']
};
// tslint:enable:max-line-length

