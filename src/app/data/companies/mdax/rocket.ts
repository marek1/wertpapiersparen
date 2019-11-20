import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.00}, {year: 2017, rate: 0.00}, {year: 2016, rate: 0.00}, {year: 2015, rate: 0.00, yield: 0.00}, {
    year: 2014,
    rate: 0.00,
    yield: 0.00
  }
];
const prices = {
  '2019-11-20': {
    '1. open': '23.9600',
    '2. high': '24.1400',
    '3. low': '22.8400',
    '4. close': '23.0200',
    '5. volume': '1365607'
  },
  '2019-10-31': {
    '1. open': '23.6200',
    '2. high': '24.9400',
    '3. low': '23.1800',
    '4. close': '23.8200',
    '5. volume': '3899066'
  },
  '2019-09-30': {
    '1. open': '25.3000',
    '2. high': '25.7000',
    '3. low': '22.5200',
    '4. close': '23.7000',
    '5. volume': '5774904'
  },
  '2019-08-30': {
    '1. open': '25.5200',
    '2. high': '25.8000',
    '3. low': '24.4800',
    '4. close': '25.3400',
    '5. volume': '4674045'
  },
  '2019-07-31': {
    '1. open': '25.6800',
    '2. high': '25.9400',
    '3. low': '24.3400',
    '4. close': '25.5200',
    '5. volume': '4171154'
  },
  '2019-06-28': {
    '1. open': '23.9000',
    '2. high': '26.4000',
    '3. low': '23.6000',
    '4. close': '25.3600',
    '5. volume': '5545883'
  },
  '2019-05-31': {
    '1. open': '23.6200',
    '2. high': '24.6200',
    '3. low': '22.0400',
    '4. close': '23.9200',
    '5. volume': '5189760'
  },
  '2019-04-30': {
    '1. open': '22.7600',
    '2. high': '23.7600',
    '3. low': '21.9000',
    '4. close': '23.5000',
    '5. volume': '4663557'
  },
  '2019-03-29': {
    '1. open': '20.7800',
    '2. high': '23.4600',
    '3. low': '20.7400',
    '4. close': '22.6000',
    '5. volume': '3190083'
  },
  '2019-02-28': {
    '1. open': '21.9000',
    '2. high': '22.4800',
    '3. low': '20.5800',
    '4. close': '20.6800',
    '5. volume': '3014014'
  },
  '2019-01-31': {
    '1. open': '20.2000',
    '2. high': '22.7000',
    '3. low': '19.6700',
    '4. close': '22.0200',
    '5. volume': '3123557'
  },
  '2018-12-28': {
    '1. open': '22.9400',
    '2. high': '23.5600',
    '3. low': '19.6200',
    '4. close': '20.1800',
    '5. volume': '6803035'
  },
  '2018-11-30': {
    '1. open': '25.6000',
    '2. high': '26.0600',
    '3. low': '22.3600',
    '4. close': '22.5800',
    '5. volume': '6680881'
  },
  '2018-10-31': {
    '1. open': '27.0600',
    '2. high': '27.9000',
    '3. low': '24.1800',
    '4. close': '25.5200',
    '5. volume': '8137559'
  },
  '2018-09-28': {
    '1. open': '29.6800',
    '2. high': '30.2600',
    '3. low': '25.5000',
    '4. close': '26.9600',
    '5. volume': '7440333'
  },
  '2018-08-31': {
    '1. open': '29.8000',
    '2. high': '31.2800',
    '3. low': '28.4200',
    '4. close': '29.7800',
    '5. volume': '7596498'
  },
  '2018-07-31': {
    '1. open': '27.4000',
    '2. high': '31.3400',
    '3. low': '27.1800',
    '4. close': '29.7200',
    '5. volume': '10408653'
  },
  '2018-06-29': {
    '1. open': '24.3600',
    '2. high': '27.7400',
    '3. low': '24.1000',
    '4. close': '27.5000',
    '5. volume': '8310919'
  },
  '2018-05-31': {
    '1. open': '24.3600',
    '2. high': '25.3600',
    '3. low': '22.6200',
    '4. close': '24.3600',
    '5. volume': '8465832'
  }
};

// tslint:disable:max-line-length
export const rocketCompany: Company = {
  id: 1078,
  name: 'Rocket Internet SE',
  country: Country.Deutschland,
  city: 'Berlin',
  url: 'http://www.rocket-internet.com/',
  description: 'Die Rocket Internet SE ist ein börsennotiertes Beteiligungsunternehmen und Startup-Inkubator mit Sitz in Berlin. Das Unternehmen hält Beteiligungen an unterschiedlichen Internet-Startups, darunter Delivery Hero, HelloFresh, Lendico oder Westwing. Rocket Internet gründet und investiert in junge Unternehmen und setzt dabei vor allem auf Neugründungen von Unternehmen, die bereits ein erfolgreiches, internationales Vorbild aufweisen können. Das Unternehmen wurde im Jahr 2007 von den Brüdern Marc, Oliver und Alexander Samwer in Berlin gegründet.[2] Aushängeschild von Rocket Internet ist das Online-Versandhaus Zalando.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Rocket_Internet',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/RocketInternetNewLogo.png/500px-RocketInternetNewLogo.png',
  products: [],
  industries: [1816],
  currency: Currency.EUR,
  isin: 'DE000A12UKK6',
  wkn: 'A12UKK',
  symbol: 'RKET.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Inkubator', 'Internet', 'Startups', 'Beteiligungen']
};
// tslint:enable:max-line-length

