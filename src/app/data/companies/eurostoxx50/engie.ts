import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.75, yield: 6.12}, {year: 2017, rate: 0.70}, {year: 2016, rate: 1.00}, {
    year: 2015,
    rate: 1.00,
    yield: 6.09
  }, {year: 2014, rate: 1.00, yield: 5.15}, {year: 2013, rate: 1.50, yield: 8.78}, {year: 2012, rate: 1.50, yield: 9.63}, {
    year: 2011,
    rate: 1.50,
    yield: 7.10
  }, {year: 2010, rate: 1.50, yield: 5.59}, {year: 2009, rate: 1.47, yield: 4.85}, {year: 2008, rate: 2.20, yield: 6.36}, {
    year: 2007,
    rate: 1.36,
    yield: 2.92
  }, {year: 2006, rate: 1.20, yield: 3.06}, {year: 2005, rate: 1.00, yield: 3.80}, {year: 2004, rate: 0.80, yield: 4.08}, {
    year: 2003,
    rate: 0.71,
    yield: 4.46
  }, {year: 2002, rate: 0.71, yield: 4.29}, {year: 2001, rate: 0.71, yield: 2.09}, {year: 2000, rate: 0.66, yield: 1.70}, {
    year: 1999,
    rate: 0.60,
    yield: 1.89
  }
];
const prices = {
  '2019-11-29': {
    '1. open': '14.9700',
    '2. high': '14.9700',
    '3. low': '13.9900',
    '4. close': '14.3600',
    '5. volume': '332407'
  },
  '2019-10-31': {
    '1. open': '15.0200',
    '2. high': '15.2050',
    '3. low': '14.4400',
    '4. close': '14.9950',
    '5. volume': '316494'
  },
  '2019-09-30': {
    '1. open': '13.8300',
    '2. high': '14.9550',
    '3. low': '13.3100',
    '4. close': '14.9550',
    '5. volume': '219579'
  },
  '2019-08-30': {
    '1. open': '13.9350',
    '2. high': '13.9350',
    '3. low': '13.2400',
    '4. close': '13.8250',
    '5. volume': '150978'
  },
  '2019-07-31': {
    '1. open': '13.4100',
    '2. high': '14.3450',
    '3. low': '13.3250',
    '4. close': '13.9250',
    '5. volume': '270941'
  },
  '2019-06-28': {
    '1. open': '12.4000',
    '2. high': '13.5950',
    '3. low': '12.3350',
    '4. close': '13.3450',
    '5. volume': '198392'
  },
  '2019-05-31': {
    '1. open': '13.1800',
    '2. high': '13.8250',
    '3. low': '12.3300',
    '4. close': '12.4500',
    '5. volume': '405495'
  },
  '2019-04-30': {
    '1. open': '13.3150',
    '2. high': '13.6300',
    '3. low': '12.9600',
    '4. close': '13.2050',
    '5. volume': '230489'
  },
  '2019-03-29': {
    '1. open': '13.2850',
    '2. high': '13.5500',
    '3. low': '13.0700',
    '4. close': '13.2800',
    '5. volume': '175947'
  },
  '2019-02-28': {
    '1. open': '13.9950',
    '2. high': '14.2000',
    '3. low': '13.2050',
    '4. close': '13.2750',
    '5. volume': '228530'
  },
  '2019-01-31': {
    '1. open': '12.2900',
    '2. high': '14.0700',
    '3. low': '12.2900',
    '4. close': '13.9850',
    '5. volume': '291741'
  },
  '2018-12-28': {
    '1. open': '12.5650',
    '2. high': '13.0300',
    '3. low': '11.9600',
    '4. close': '12.2550',
    '5. volume': '266267'
  },
  '2018-11-30': {
    '1. open': '11.7650',
    '2. high': '12.7250',
    '3. low': '11.7450',
    '4. close': '12.4250',
    '5. volume': '184760'
  },
  '2018-10-31': {
    '1. open': '12.6300',
    '2. high': '12.8450',
    '3. low': '11.2850',
    '4. close': '11.7800',
    '5. volume': '782038'
  },
  '2018-09-28': {
    '1. open': '12.6350',
    '2. high': '12.6950',
    '3. low': '12.0700',
    '4. close': '12.6700',
    '5. volume': '167206'
  },
  '2018-08-31': {
    '1. open': '13.7200',
    '2. high': '13.7200',
    '3. low': '12.6150',
    '4. close': '12.6300',
    '5. volume': '152827'
  },
  '2018-07-31': {
    '1. open': '13.1100',
    '2. high': '14.2600',
    '3. low': '12.9900',
    '4. close': '13.8200',
    '5. volume': '154003'
  }
};

// tslint:disable:max-line-length
export const engieCompany: Company = {
  id: 1181,
  name: 'Engie S.A.',
  country: Country.Frankreich,
  city: 'Courbevoie',
  url: 'http://www.engie.com/',
  description: 'Die Engie SA [ˈɛndʒi] (bis 2015: GDF Suez) mit Sitz im Geschäftsviertel La Défense bei Paris ist ein international tätiger Energieversorgungskonzern, ursprünglich hervorgegangen aus der Fusion des mehrheitlich in staatlicher Hand befindlichen Gasversorgers Gaz de France (GDF) und des Mischkonzerns Suez im Juli 2008 unter dem Namen GDF Suez. Die Engie-Aktie ist Bestandteil des französischen Leitindexes CAC 40. Der französische Staat hält 24,1 Prozent der Anteile an Engie.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Engie',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/LOGO_ENGIE.jpg/500px-LOGO_ENGIE.jpg',
  products: [],
  industries: [111309, 111310],
  securityType: SecurityType.ActionsPort,
  currency: Currency.EUR,
  isin: 'FR0010208488',
  wkn: 'A0ER6Q',
  symbol: 'GZF.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50],
  end_of_month_prices: prices,
  dividends,
  tags: ['Energieversorgung', 'Erdgas', 'Strom', 'Energiebeschaffung', 'Energiehandel']
};
// tslint:enable:max-line-length

