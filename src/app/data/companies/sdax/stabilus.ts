import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 1.00, yield: 1.40}, {year: 2017, rate: 0.80}, {
    year: 2016,
    rate: 0.50
  }, {year: 2015, rate: 0.00, yield: 0.00}, {year: 2014, rate: 0.00, yield: 0.00}
];
const prices = {
  '2019-11-27': {
    '1. open': '50.4500',
    '2. high': '62.8000',
    '3. low': '50.2000',
    '4. close': '57.6000',
    '5. volume': '1104839'
  },
  '2019-10-31': {
    '1. open': '44.6200',
    '2. high': '52.7000',
    '3. low': '41.3800',
    '4. close': '50.4500',
    '5. volume': '1040331'
  },
  '2019-09-30': {
    '1. open': '41.1200',
    '2. high': '47.2200',
    '3. low': '39.7000',
    '4. close': '44.9000',
    '5. volume': '911096'
  },
  '2019-08-30': {
    '1. open': '41.5400',
    '2. high': '44.1800',
    '3. low': '39.3200',
    '4. close': '40.8600',
    '5. volume': '898990'
  },
  '2019-07-31': {
    '1. open': '41.0600',
    '2. high': '44.0000',
    '3. low': '35.8400',
    '4. close': '41.5600',
    '5. volume': '1275876'
  },
  '2019-06-28': {
    '1. open': '37.4000',
    '2. high': '40.8400',
    '3. low': '35.5800',
    '4. close': '40.8000',
    '5. volume': '1062357'
  },
  '2019-05-31': {
    '1. open': '49.5000',
    '2. high': '49.8600',
    '3. low': '37.0200',
    '4. close': '37.9000',
    '5. volume': '1562012'
  },
  '2019-04-30': {
    '1. open': '43.4400',
    '2. high': '53.0000',
    '3. low': '43.3400',
    '4. close': '49.6600',
    '5. volume': '1140235'
  },
  '2019-03-29': {
    '1. open': '51.4000',
    '2. high': '53.2000',
    '3. low': '41.1800',
    '4. close': '43.0000',
    '5. volume': '1175990'
  },
  '2019-02-28': {
    '1. open': '54.9500',
    '2. high': '55.3500',
    '3. low': '44.9800',
    '4. close': '50.8000',
    '5. volume': '1915799'
  },
  '2019-01-31': {
    '1. open': '54.9000',
    '2. high': '64.2000',
    '3. low': '53.1000',
    '4. close': '54.5000',
    '5. volume': '1072391'
  },
  '2018-12-28': {
    '1. open': '64.1500',
    '2. high': '66.5500',
    '3. low': '52.2000',
    '4. close': '54.8500',
    '5. volume': '696812'
  },
  '2018-11-30': {
    '1. open': '59.4500',
    '2. high': '69.1500',
    '3. low': '58.7500',
    '4. close': '63.5000',
    '5. volume': '719134'
  },
  '2018-10-31': {
    '1. open': '71.6000',
    '2. high': '72.8000',
    '3. low': '53.1000',
    '4. close': '59.2500',
    '5. volume': '894619'
  },
  '2018-09-28': {
    '1. open': '75.5500',
    '2. high': '76.8500',
    '3. low': '70.4000',
    '4. close': '71.1000',
    '5. volume': '446907'
  },
  '2018-08-31': {
    '1. open': '73.0500',
    '2. high': '77.8500',
    '3. low': '71.6000',
    '4. close': '75.7000',
    '5. volume': '592739'
  },
  '2018-07-31': {
    '1. open': '76.1000',
    '2. high': '77.3000',
    '3. low': '69.0000',
    '4. close': '72.8000',
    '5. volume': '1064754'
  },
  '2018-06-29': {
    '1. open': '86.1000',
    '2. high': '89.3500',
    '3. low': '76.2000',
    '4. close': '77.0500',
    '5. volume': '913054'
  },
  '2018-05-31': {
    '1. open': '74.4500',
    '2. high': '86.3000',
    '3. low': '74.4500',
    '4. close': '86.3000',
    '5. volume': '1460347'
  },
  '2018-04-30': {
    '1. open': '77.3000',
    '2. high': '80.1500',
    '3. low': '73.1500',
    '4. close': '74.6000',
    '5. volume': '550357'
  },
  '2018-03-29': {
    '1. open': '78.5000',
    '2. high': '80.3000',
    '3. low': '72.8500',
    '4. close': '77.5500',
    '5. volume': '674126'
  },
  '2018-02-28': {
    '1. open': '78.7500',
    '2. high': '83.1000',
    '3. low': '74.6000',
    '4. close': '78.3500',
    '5. volume': '775403'
  },
  '2018-01-31': {
    '1. open': '75.5000',
    '2. high': '82.8000',
    '3. low': '74.0000',
    '4. close': '78.1000',
    '5. volume': '551616'
  },
  '2017-12-29': {
    '1. open': '73.0600',
    '2. high': '77.2700',
    '3. low': '68.8100',
    '4. close': '74.9500',
    '5. volume': '729936'
  },
  '2017-11-30': {
    '1. open': '78.0000',
    '2. high': '79.4700',
    '3. low': '68.1000',
    '4. close': '72.4000',
    '5. volume': '712149'
  },
  '2017-10-31': {
    '1. open': '77.2400',
    '2. high': '81.1900',
    '3. low': '74.6800',
    '4. close': '77.9800',
    '5. volume': '524186'
  },
  '2017-09-29': {
    '1. open': '72.0900',
    '2. high': '78.9400',
    '3. low': '70.6500',
    '4. close': '76.7900',
    '5. volume': '749018'
  },
  '2017-08-31': {
    '1. open': '70.9300',
    '2. high': '72.7400',
    '3. low': '66.6800',
    '4. close': '71.9900',
    '5. volume': '868741'
  },
  '2017-07-31': {
    '1. open': '68.7100',
    '2. high': '73.0300',
    '3. low': '66.5100',
    '4. close': '70.2800',
    '5. volume': '710043'
  },
  '2017-06-30': {
    '1. open': '72.2000',
    '2. high': '74.0700',
    '3. low': '67.2300',
    '4. close': '67.9900',
    '5. volume': '691904'
  },
  '2017-05-31': {
    '1. open': '66.5600',
    '2. high': '72.4300',
    '3. low': '62.2700',
    '4. close': '72.1600',
    '5. volume': '840349'
  },
  '2017-04-28': {
    '1. open': '60.9400',
    '2. high': '66.4900',
    '3. low': '59.1300',
    '4. close': '66.4900',
    '5. volume': '604964'
  },
  '2017-03-31': {
    '1. open': '54.4900',
    '2. high': '60.5700',
    '3. low': '53.9200',
    '4. close': '60.4000',
    '5. volume': '1243614'
  },
  '2017-02-28': {
    '1. open': '56.6500',
    '2. high': '57.3000',
    '3. low': '51.7200',
    '4. close': '54.2100',
    '5. volume': '798128'
  },
  '2017-01-31': {
    '1. open': '50.6500',
    '2. high': '58.3000',
    '3. low': '50.6500',
    '4. close': '56.0000',
    '5. volume': '569124'
  },
  '2016-12-30': {
    '1. open': '47.0800',
    '2. high': '52.4600',
    '3. low': '47.0250',
    '4. close': '51.0400',
    '5. volume': '372114'
  },
  '2016-11-30': {
    '1. open': '47.8250',
    '2. high': '48.5500',
    '3. low': '42.9500',
    '4. close': '46.8000',
    '5. volume': '544864'
  },
  '2016-10-31': {
    '1. open': '51.7000',
    '2. high': '53.7700',
    '3. low': '47.2600',
    '4. close': '47.4600',
    '5. volume': '390239'
  },
  '2016-09-30': {
    '1. open': '47.9500',
    '2. high': '50.3300',
    '3. low': '47.1000',
    '4. close': '50.1000',
    '5. volume': '325567'
  },
  '2016-08-31': {
    '1. open': '46.8100',
    '2. high': '52.2500',
    '3. low': '45.3200',
    '4. close': '48.1650',
    '5. volume': '346355'
  },
  '2016-07-29': {
    '1. open': '42.3000',
    '2. high': '47.0000',
    '3. low': '40.3000',
    '4. close': '46.8100',
    '5. volume': '434094'
  },
  '2016-06-30': {
    '1. open': '49.5000',
    '2. high': '49.8500',
    '3. low': '41.6050',
    '4. close': '42.7000',
    '5. volume': '352120'
  }
};

// tslint:disable:max-line-length
export const stabilusCompany: Company = {
  id: 1156,
  name: 'Stabilus S.A.',
  country: Country.Luxemburg,
  city: 'Luxemburg',
  url: 'http://www.stabilus.com/',
  description: 'Die Stabilus S.A. ist ein börsennotierter Hersteller von Gasdruckfedern (kurz: Gasfedern), hydraulischen Dämpfern und elektromechanischen Antrieben (auch Klappenantrieben) mit Sitz in Luxemburg und Hauptverwaltung in Koblenz. Das Unternehmen wurde 1934 gegründet und beschäftigt weltweit 6.200 Mitarbeiter. Die 17 Produktionsstandorte sind auf neun Länder weltweit verteilt.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Stabilus',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stabilus_logo.svg/500px-Stabilus_logo.svg.png',
  products: [],
  industries: [121110],
  securityType: SecurityType.ActionsAuPorteur,
  currency: Currency.EUR,
  isin: 'LU1066226637',
  wkn: 'A113Q5',
  symbol: 'STM.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Gasdruckfedern', 'hydraulische Dämpfer']
};
// tslint:enable:max-line-length

