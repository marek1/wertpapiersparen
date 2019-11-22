import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {  year: 2018, rate: 1.32, yield: 3.57 }
];
const prices = {
  '2019-11-22': {
    '1. open': '33.6000',
    '2. high': '36.5500',
    '3. low': '32.1500',
    '4. close': '36.0000',
    '5. volume': '702039'
  },
  '2019-10-31': {
    '1. open': '32.4500',
    '2. high': '34.3500',
    '3. low': '30.5500',
    '4. close': '33.2000',
    '5. volume': '826249'
  },
  '2019-09-30': {
    '1. open': '30.6500',
    '2. high': '34.3500',
    '3. low': '30.5500',
    '4. close': '32.8000',
    '5. volume': '1304200'
  },
  '2019-08-30': {
    '1. open': '32.7500',
    '2. high': '32.9000',
    '3. low': '26.7500',
    '4. close': '31.0000',
    '5. volume': '1502420'
  },
  '2019-07-31': {
    '1. open': '35.4500',
    '2. high': '36.1500',
    '3. low': '30.6000',
    '4. close': '32.6000',
    '5. volume': '1771706'
  },
  '2019-06-28': {
    '1. open': '36.8500',
    '2. high': '37.3000',
    '3. low': '32.7000',
    '4. close': '35.0000',
    '5. volume': '2042494'
  },
  '2019-05-31': {
    '1. open': '38.6000',
    '2. high': '39.0500',
    '3. low': '35.5500',
    '4. close': '36.7500',
    '5. volume': '1431880'
  },
  '2019-04-30': {
    '1. open': '38.4000',
    '2. high': '40.7000',
    '3. low': '37.2000',
    '4. close': '39.0500',
    '5. volume': '1576277'
  },
  '2019-03-29': {
    '1. open': '39.8000',
    '2. high': '40.1000',
    '3. low': '37.4500',
    '4. close': '38.8500',
    '5. volume': '621384'
  },
  '2019-02-28': {
    '1. open': '38.5000',
    '2. high': '41.6500',
    '3. low': '37.8500',
    '4. close': '40.0000',
    '5. volume': '832115'
  },
  '2019-01-31': {
    '1. open': '37.9500',
    '2. high': '39.7000',
    '3. low': '35.2500',
    '4. close': '38.2000',
    '5. volume': '1084617'
  },
  '2018-12-28': {
    '1. open': '35.7500',
    '2. high': '38.8000',
    '3. low': '34.3500',
    '4. close': '37.5000',
    '5. volume': '304840'
  },
  '2018-11-30': {
    '1. open': '39.2000',
    '2. high': '41.2000',
    '3. low': '35.4500',
    '4. close': '35.5000',
    '5. volume': '444075'
  },
  '2018-10-31': {
    '1. open': '44.5000',
    '2. high': '45.0000',
    '3. low': '36.3000',
    '4. close': '39.2500',
    '5. volume': '669864'
  },
  '2018-09-28': {
    '1. open': '38.0000',
    '2. high': '44.8000',
    '3. low': '35.1500',
    '4. close': '44.6500',
    '5. volume': '808216'
  },
  '2018-08-31': {
    '1. open': '44.6000',
    '2. high': '46.3500',
    '3. low': '37.5000',
    '4. close': '37.7500',
    '5. volume': '489552'
  },
  '2018-07-31': {
    '1. open': '46.6500',
    '2. high': '46.6500',
    '3. low': '41.3500',
    '4. close': '44.4500',
    '5. volume': '453073'
  },
  '2018-06-29': {
    '1. open': '41.3000',
    '2. high': '46.1000',
    '3. low': '40.9500',
    '4. close': '46.1000',
    '5. volume': '911390'
  },
  '2018-05-31': {
    '1. open': '41.7000',
    '2. high': '43.7500',
    '3. low': '39.5500',
    '4. close': '41.2000',
    '5. volume': '464928'
  },
  '2018-04-30': {
    '1. open': '41.8000',
    '2. high': '42.7500',
    '3. low': '40.1500',
    '4. close': '41.8500',
    '5. volume': '256050'
  },
  '2018-03-29': {
    '1. open': '42.0000',
    '2. high': '42.8000',
    '3. low': '39.0000',
    '4. close': '42.0000',
    '5. volume': '817417'
  },
  '2018-02-28': {
    '1. open': '39.9000',
    '2. high': '42.2500',
    '3. low': '35.8500',
    '4. close': '41.5000',
    '5. volume': '451583'
  },
  '2018-01-31': {
    '1. open': '40.9500',
    '2. high': '42.9000',
    '3. low': '38.1500',
    '4. close': '40.0000',
    '5. volume': '376616'
  }
};

// tslint:disable:max-line-length
export const befesaCompany: Company = {
  id: 1114,
  name: 'Befesa SA',
  country: Country.Luxemburg,
  city: 'Luxemburg',
  url: 'https://www.befesa.com/web/de/',
  description: 'Bis zum Jahr 2013 gehörte zu Abengoa auch die Unternehmensgruppe Befesa, die im Bereich industrielle Entsorgung sowie Gewinnung und Vermarktung von Wasser tätig ist. Zu der Gruppe gehören u. a. die Befesa Steel Services GmbH in Duisburg, die Befesa Zinc GmbH in Duisburg und die Befesa Salzschlacke GmbH in Hannover. Im Jahr 2013 wurde die Befesa an den Investmentfonds Triton Partners verkauft.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Abengoa#Befesa',
  logo: 'https://www.befesa.com/export/sites/befesa2014/resources/img/logo.png',
  products: [],
  industries: [1721],
  currency: Currency.EUR,
  isin: 'LU1704650164',
  wkn: 'A2H5Z1',
  symbol: 'BFSA.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Recycling', 'Recyclingdienste', 'industrielle Reststoffe']
};
// tslint:enable:max-line-length

