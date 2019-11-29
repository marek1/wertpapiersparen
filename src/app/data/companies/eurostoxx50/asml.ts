import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 1.51, yield: 1.11}, {year: 2017, rate: 1.40}, {year: 2016, rate: 1.20}, {
    year: 2015,
    rate: 1.05,
    yield: 1.27
  }, {year: 2014, rate: 0.70, yield: 0.78}, {year: 2013, rate: 0.61, yield: 0.90}, {year: 2012, rate: 0.53, yield: 1.10}, {
    year: 2011,
    rate: 0.46,
    yield: 1.09
  }, {year: 2010, rate: 0.40, yield: 1.07}, {year: 2009, rate: 0.20, yield: 0.64}, {year: 2008, rate: 0.20, yield: 1.21}, {
    year: 2007,
    rate: 0.25,
    yield: 0.89
  }
];
const prices = {
  '2019-11-29': {
    '1. open': '236.4000',
    '2. high': '249.3000',
    '3. low': '236.4000',
    '4. close': '245.1500',
    '5. volume': '26336'
  },
  '2019-10-31': {
    '1. open': '230.2000',
    '2. high': '243.2500',
    '3. low': '218.8500',
    '4. close': '235.5000',
    '5. volume': '28749'
  },
  '2019-09-30': {
    '1. open': '203.2000',
    '2. high': '228.2000',
    '3. low': '199.6000',
    '4. close': '226.9500',
    '5. volume': '12262'
  },
  '2019-08-30': {
    '1. open': '201.9000',
    '2. high': '207.7000',
    '3. low': '186.1000',
    '4. close': '202.2000',
    '5. volume': '19487'
  },
  '2019-07-31': {
    '1. open': '190.3200',
    '2. high': '210.0000',
    '3. low': '182.1800',
    '4. close': '202.9500',
    '5. volume': '32877'
  },
  '2019-06-28': {
    '1. open': '167.5800',
    '2. high': '184.1800',
    '3. low': '165.7000',
    '4. close': '183.7200',
    '5. volume': '23026'
  },
  '2019-05-31': {
    '1. open': '185.1400',
    '2. high': '185.4000',
    '3. low': '168.5200',
    '4. close': '172.5200',
    '5. volume': '101636'
  },
  '2019-04-30': {
    '1. open': '169.4400',
    '2. high': '186.2600',
    '3. low': '166.8000',
    '4. close': '183.0000',
    '5. volume': '13282'
  },
  '2019-03-29': {
    '1. open': '161.6500',
    '2. high': '171.5000',
    '3. low': '155.5500',
    '4. close': '168.0000',
    '5. volume': '22285'
  },
  '2019-02-28': {
    '1. open': '154.7500',
    '2. high': '165.6500',
    '3. low': '153.9000',
    '4. close': '161.5000',
    '5. volume': '26616'
  },
  '2019-01-31': {
    '1. open': '134.4800',
    '2. high': '155.2500',
    '3. low': '130.3000',
    '4. close': '155.2500',
    '5. volume': '29859'
  },
  '2018-12-28': {
    '1. open': '154.5600',
    '2. high': '165.0000',
    '3. low': '131.4400',
    '4. close': '136.7200',
    '5. volume': '28026'
  },
  '2018-11-30': {
    '1. open': '151.4800',
    '2. high': '160.0000',
    '3. low': '136.6000',
    '4. close': '159.0000',
    '5. volume': '56052'
  },
  '2018-10-31': {
    '1. open': '162.4600',
    '2. high': '167.5000',
    '3. low': '139.0000',
    '4. close': '149.5000',
    '5. volume': '73751'
  },
  '2018-09-28': {
    '1. open': '176.7200',
    '2. high': '178.1000',
    '3. low': '149.2600',
    '4. close': '160.9600',
    '5. volume': '47726'
  },
  '2018-08-31': {
    '1. open': '184.9500',
    '2. high': '187.3000',
    '3. low': '170.0000',
    '4. close': '177.1600',
    '5. volume': '19258'
  },
  '2018-07-31': {
    '1. open': '165.6000',
    '2. high': '189.5500',
    '3. low': '164.3500',
    '4. close': '183.6500',
    '5. volume': '121843'
  }
};

// tslint:disable:max-line-length
export const asmlCompany: Company = {
  id: 1174,
  name: 'ASML N.V.',
  country: Country.Niederlande,
  city: 'Veldhoven',
  url: 'http://www.asml.com/',
  description: 'Das niederländische Unternehmen ASML ist der weltweit größte Anbieter von Lithographiesystemen für die Halbleiterindustrie. Die überaus komplexen Maschinen spielen eine wichtige Rolle bei der Herstellung von integrierten Schaltkreisen (Mikrochips). 80 % aller Chiphersteller (Foundries und IDMs) weltweit sind Kunden von ASML und der weltweite Marktanteil beträgt 65 %. ASML bietet weltweiten Kundendienst an über 50 Servicestellen in 14 Ländern.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/ASML',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ASML_Logo.svg/500px-ASML_Logo.svg.png',
  products: [],
  industries: [1811],
  securityType: SecurityType.AandelenOopNaam,
  currency: Currency.EUR,
  isin: 'NL0010273215',
  wkn: 'A1J4U4',
  symbol: 'ASME.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50],
  end_of_month_prices: prices,
  dividends,
  tags: ['Halbleiterindustrie', 'Lithographie-Systeme']
};
// tslint:enable:max-line-length

