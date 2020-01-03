import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [];
const prices = {
  '2019-12-03': {
    '1. open': '98.8000',
    '2. high': '99.1400',
    '3. low': '97.0000',
    '4. close': '97.2600',
    '5. volume': '2237'
  },
  '2019-11-29': {
    '1. open': '100.9500',
    '2. high': '102.4500',
    '3. low': '98.9000',
    '4. close': '98.9800',
    '5. volume': '45961'
  },
  '2019-10-31': {
    '1. open': '99.3600',
    '2. high': '101.1500',
    '3. low': '94.8600',
    '4. close': '100.8000',
    '5. volume': '28287'
  },
  '2019-09-30': {
    '1. open': '99.6600',
    '2. high': '101.4000',
    '3. low': '96.4200',
    '4. close': '98.8400',
    '5. volume': '61289'
  },
  '2019-08-30': {
    '1. open': '92.8600',
    '2. high': '99.4800',
    '3. low': '88.7600',
    '4. close': '99.4800',
    '5. volume': '37686'
  },
  '2019-07-31': {
    '1. open': '90.5200',
    '2. high': '94.5000',
    '3. low': '89.7000',
    '4. close': '93.2600',
    '5. volume': '24480'
  },
  '2018-12-28': {
    '1. open': '71.16',
    '2. high': '71.64',
    '3. low': '71.12',
    '4. close': '71.62',
    '5. volume': ''
  },
  '2017-12-29': {
    '1. open': '85.53',
    '2. high': '85.53',
    '3. low': '85.53',
    '4. close': '86.24',
    '5. volume': ''
  },
  '2016-12-30': {
    '1. open': '64.15',
    '2. high': '64.15',
    '3. low': '64.15',
    '4. close': '64.15',
    '5. volume': ''
  },
  '2015-12-30': {
    '1. open': '59.42',
    '2. high': '59.42',
    '3. low': '59.42',
    '4. close': '59.42',
    '5. volume': ''
  },
  '2014-12-30': {
    '1. open': '45.70',
    '2. high': '45.70',
    '3. low': '45.70',
    '4. close': '45.70',
    '5. volume': ''
  },
};

// tslint:disable:max-line-length
export const vinciCompany: Company = {
  id: 1202,
  name: 'Vinci S.A.',
  country: Country.Frankreich,
  city: 'Rueil-Malmaison',
  url: 'https://www.vinci.com/vinci.nsf/de/index.htm',
  description: 'Vinci, S.A. (Eigenschreibweise generell VINCI) ist ein börsennotierter französischer Konzessions- und Baukonzern mit Mitarbeitern in 117 Ländern. Zum Leistungsspektrum gehören Planung, Finanzierung, Bau und Betrieb von Infrastrukturen und baulichen Einrichtungen.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Vinci_(Unternehmen)',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Vinci_%28Unternehmen%29_logo.svg/500px-Vinci_%28Unternehmen%29_logo.svg.png',
  products: [],
  industries: [111110, 1219],
  securityType: SecurityType.ActionsPort,
  currency: Currency.EUR,
  isin: 'FR0000125486',
  wkn: '867475',
  symbol: 'SQU.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.MSCIWorld],
  end_of_month_prices: prices,
  dividends,
  tags: ['Baukonzern', 'Baudienstleistungen', 'Autobahnkonzessionen', 'Verkehrsinfrastruktur', 'Straßen', 'Schienenwege', 'Parkhäuser']
};
// tslint:enable:max-line-length

