import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [{year: 2018, rate: 1.75, yield: 2.24}];
const prices = {
  '2019-11-15': {
    '1. open': '90.4900',
    '2. high': '93.9800',
    '3. low': '85.2500',
    '4. close': '86.9800',
    '5. volume': '1274582'
  },
  '2019-10-31': {
    '1. open': '86.2000',
    '2. high': '94.6400',
    '3. low': '83.8500',
    '4. close': '90.4900',
    '5. volume': '2523305'
  },
  '2019-09-30': {
    '1. open': '84.6100',
    '2. high': '93.3700',
    '3. low': '82.9800',
    '4. close': '86.2400',
    '5. volume': '2732146'
  },
  '2019-08-30': {
    '1. open': '91.8400',
    '2. high': '93.3000',
    '3. low': '82.5700',
    '4. close': '84.9900',
    '5. volume': '2535934'
  },
  '2019-07-31': {
    '1. open': '99.4000',
    '2. high': '99.6500',
    '3. low': '90.5600',
    '4. close': '91.7000',
    '5. volume': '2911863'
  },
  '2019-06-28': {
    '1. open': '98.2500',
    '2. high': '100.6000',
    '3. low': '94.8000',
    '4. close': '98.0000',
    '5. volume': '3081552'
  },
  '2019-05-31': {
    '1. open': '97.5500',
    '2. high': '101.2000',
    '3. low': '90.6000',
    '4. close': '98.5500',
    '5. volume': '9395586'
  },
  '2019-04-30': {
    '1. open': '89.0000',
    '2. high': '103.7000',
    '3. low': '89.0000',
    '4. close': '96.6500',
    '5. volume': '2336596'
  },
  '2019-03-29': {
    '1. open': '89.4300',
    '2. high': '90.2600',
    '3. low': '80.1000',
    '4. close': '88.5300',
    '5. volume': '3840501'
  },
  '2019-02-28': {
    '1. open': '86.6400',
    '2. high': '92.3000',
    '3. low': '85.2700',
    '4. close': '88.3400',
    '5. volume': '2566400'
  },
  '2019-01-31': {
    '1. open': '78.7100',
    '2. high': '87.2300',
    '3. low': '77.0000',
    '4. close': '86.3100',
    '5. volume': '2911422'
  },
  '2018-12-28': {
    '1. open': '83.4300',
    '2. high': '84.9000',
    '3. low': '75.5800',
    '4. close': '78.6200',
    '5. volume': '2213207'
  },
  '2018-11-30': {
    '1. open': '80.6800',
    '2. high': '84.9000',
    '3. low': '73.9300',
    '4. close': '82.4900',
    '5. volume': '1158262'
  }
};

// tslint:disable:max-line-length
export const knorrCompany: Company = {
  id: 1064,
  name: 'Knorr-Bremse AG',
  country: Country.Deutschland,
  city: 'München',
  url: 'http://www.knorr-bremse.com/',
  description: 'Die Knorr-Bremse Aktiengesellschaft mit Firmenhauptsitz in München ist die Dachgesellschaft des Knorr-Bremse-Konzerns. Das Unternehmen ist der weltweit führende Hersteller von Bremssystemen für Schienen- und Nutzfahrzeuge. Knorr-Bremse ist an über 100 Standorten in 30 Ländern vertreten. Knorr-Bremse ging Mitte Oktober 2018 an die Börse.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Knorr-Bremse',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/1/1c/Knorr-Bremse_logo.svg/500px-Knorr-Bremse_logo.svg.png',
  products: [],
  industries: [121110],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE000KBX1006',
  wkn: 'KBX100',
  symbol: 'KBX.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Bremssysteme']
};
// tslint:enable:max-line-length

