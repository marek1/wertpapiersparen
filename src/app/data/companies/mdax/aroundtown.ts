import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {year: 2018, rate: 0.25, yield: 3.50}, {year: 2018, rate: 0.25, yield: 3.50}, {year: 2017, rate: 0.23}, {
    year: 2016,
    rate: 0.16,
  }, {year: 2015, rate: 0.05, yield: 1.17}
];
const prices = {
  '2019-11-12': {
    '1. open': '7.5400',
    '2. high': '7.7740',
    '3. low': '7.5120',
    '4. close': '7.6100',
    '5. volume': '19797760'
  },
  '2019-10-31': {
    '1. open': '7.5220',
    '2. high': '7.5740',
    '3. low': '7.2940',
    '4. close': '7.5660',
    '5. volume': '50939550'
  },
  '2019-09-30': {
    '1. open': '7.9200',
    '2. high': '7.9500',
    '3. low': '6.8540',
    '4. close': '7.5040',
    '5. volume': '85023237'
  },
  '2019-08-30': {
    '1. open': '7.2040',
    '2. high': '7.6160',
    '3. low': '7.0260',
    '4. close': '7.5660',
    '5. volume': '53737291'
  },
  '2019-07-31': {
    '1. open': '7.2680',
    '2. high': '7.7840',
    '3. low': '7.1820',
    '4. close': '7.2320',
    '5. volume': '70770776'
  },
  '2019-06-28': {
    '1. open': '7.6400',
    '2. high': '7.7920',
    '3. low': '7.1520',
    '4. close': '7.2460',
    '5. volume': '50191820'
  },
  '2019-05-31': {
    '1. open': '7.2380',
    '2. high': '7.7420',
    '3. low': '7.1160',
    '4. close': '7.6020',
    '5. volume': '47476166'
  },
  '2019-04-30': {
    '1. open': '7.3980',
    '2. high': '7.5000',
    '3. low': '6.9800',
    '4. close': '7.2260',
    '5. volume': '57875116'
  },
  '2019-03-29': {
    '1. open': '7.4200',
    '2. high': '7.9150',
    '3. low': '7.2500',
    '4. close': '7.3500',
    '5. volume': '79692706'
  },
  '2019-02-28': {
    '1. open': '7.7200',
    '2. high': '7.8050',
    '3. low': '7.4000',
    '4. close': '7.4000',
    '5. volume': '41421465'
  },
  '2019-01-31': {
    '1. open': '7.2400',
    '2. high': '7.8500',
    '3. low': '7.1450',
    '4. close': '7.7200',
    '5. volume': '58387630'
  },
  '2018-12-28': {
    '1. open': '7.6300',
    '2. high': '7.7700',
    '3. low': '7.0850',
    '4. close': '7.2200',
    '5. volume': '72812116'
  },
  '2018-11-30': {
    '1. open': '7.3100',
    '2. high': '7.8350',
    '3. low': '7.0750',
    '4. close': '7.5550',
    '5. volume': '172677108'
  },
  '2018-10-31': {
    '1. open': '7.6750',
    '2. high': '7.7750',
    '3. low': '7.0400',
    '4. close': '7.3300',
    '5. volume': '76885715'
  },
  '2018-09-28': {
    '1. open': '7.6900',
    '2. high': '7.9100',
    '3. low': '7.5300',
    '4. close': '7.6600',
    '5. volume': '92992243'
  },
  '2018-08-31': {
    '1. open': '7.1500',
    '2. high': '7.7600',
    '3. low': '6.8550',
    '4. close': '7.6850',
    '5. volume': '51937603'
  },
  '2018-07-31': {
    '1. open': '7.0050',
    '2. high': '7.2650',
    '3. low': '6.9650',
    '4. close': '7.1400',
    '5. volume': '44546557'
  },
  '2018-06-29': {
    '1. open': '7.1500',
    '2. high': '7.4700',
    '3. low': '6.8900',
    '4. close': '7.0350',
    '5. volume': '66824230'
  },
  '2018-05-31': {
    '1. open': '6.6350',
    '2. high': '7.1550',
    '3. low': '6.5950',
    '4. close': '7.1150',
    '5. volume': '60130571'
  },
  '2018-04-30': {
    '1. open': '6.3100',
    '2. high': '6.7050',
    '3. low': '6.1900',
    '4. close': '6.6200',
    '5. volume': '56343134'
  },
  '2018-03-29': {
    '1. open': '6.2500',
    '2. high': '6.6400',
    '3. low': '6.0050',
    '4. close': '6.3000',
    '5. volume': '137069825'
  },
  '2018-02-28': {
    '1. open': '6.5100',
    '2. high': '6.5150',
    '3. low': '5.8350',
    '4. close': '6.2550',
    '5. volume': '44035641'
  },
  '2018-01-31': {
    '1. open': '6.4150',
    '2. high': '6.7500',
    '3. low': '6.3200',
    '4. close': '6.4850',
    '5. volume': '42248032'
  },
  '2017-12-29': {
    '1. open': '6.3500',
    '2. high': '6.6200',
    '3. low': '6.1000',
    '4. close': '6.4160',
    '5. volume': '24354943'
  },
  '2017-11-30': {
    '1. open': '6.0410',
    '2. high': '6.3740',
    '3. low': '5.9600',
    '4. close': '6.3400',
    '5. volume': '12988546'
  },
  '2017-10-31': {
    '1. open': '6.0400',
    '2. high': '6.4850',
    '3. low': '5.9710',
    '4. close': '6.0420',
    '5. volume': '17014213'
  },
  '2017-09-29': {
    '1. open': '5.6280',
    '2. high': '6.1340',
    '3. low': '5.5340',
    '4. close': '6.0600',
    '5. volume': '8988848'
  },
  '2017-08-31': {
    '1. open': '5.0250',
    '2. high': '5.6300',
    '3. low': '5.0200',
    '4. close': '5.6200',
    '5. volume': '10190855'
  },
  '2017-07-31': {
    '1. open': '4.7400',
    '2. high': '5.0400',
    '3. low': '4.7400',
    '4. close': '5.0150',
    '5. volume': '4014950'
  },
  '2017-06-30': {
    '1. open': '4.6400',
    '2. high': '4.9900',
    '3. low': '4.5800',
    '4. close': '4.7300',
    '5. volume': '606564'
  },
  '2017-05-31': {
    '1. open': '4.8000',
    '2. high': '4.8990',
    '3. low': '4.4810',
    '4. close': '4.6800',
    '5. volume': '156220'
  },
  '2017-04-28': {
    '1. open': '4.5300',
    '2. high': '4.8390',
    '3. low': '4.4600',
    '4. close': '4.7990',
    '5. volume': '106004'
  },
  '2017-03-31': {
    '1. open': '4.4000',
    '2. high': '4.5300',
    '3. low': '4.0010',
    '4. close': '4.5300',
    '5. volume': '29252'
  },
  '2017-02-28': {
    '1. open': '4.0000',
    '2. high': '4.4000',
    '3. low': '3.9010',
    '4. close': '4.4000',
    '5. volume': '75744'
  },
  '2017-01-31': {
    '1. open': '4.2220',
    '2. high': '4.2990',
    '3. low': '4.0010',
    '4. close': '4.1400',
    '5. volume': '29313'
  },
  '2016-12-30': {
    '1. open': '4.1800',
    '2. high': '4.2400',
    '3. low': '3.9500',
    '4. close': '4.2220',
    '5. volume': '99787'
  },
  '2016-11-30': {
    '1. open': '4.3000',
    '2. high': '4.3000',
    '3. low': '4.0000',
    '4. close': '4.1800',
    '5. volume': '42846'
  },
  '2016-10-31': {
    '1. open': '4.4150',
    '2. high': '4.5750',
    '3. low': '4.2700',
    '4. close': '4.2710',
    '5. volume': '77234'
  },
  '2016-09-30': {
    '1. open': '4.8330',
    '2. high': '4.9540',
    '3. low': '4.4000',
    '4. close': '4.4000',
    '5. volume': '147169'
  },
  '2016-08-31': {
    '1. open': '4.6300',
    '2. high': '4.8500',
    '3. low': '4.4500',
    '4. close': '4.8500',
    '5. volume': '50913'
  },
  '2016-07-29': {
    '1. open': '4.5640',
    '2. high': '4.8300',
    '3. low': '4.4850',
    '4. close': '4.6000',
    '5. volume': '34672'
  },
  '2016-06-30': {
    '1. open': '4.5000',
    '2. high': '4.7200',
    '3. low': '4.3500',
    '4. close': '4.5800',
    '5. volume': '31550'
  }
};
// tslint:disable:max-line-length
export const aroundTownCompany: Company = {
  id: 1035,
  name: 'Aroundtown SA',
  country: Country.Luxemburg,
  city: 'Luxemburg',
  url: 'http://www.aroundtown.de/',
  description: 'Die Aroundtown SA ist ein in Luxemburg ansässiges Unternehmen, das Anteile an Gewerbeimmobilien insbesondere in Deutschland und den Niederlanden hält. Der Schwerpunkt liegt auf Büro-, Hotel- und Gewerbeimmobilien.[2] Über eine Beteiligung an der Grand City Properties S.A. ist das Unternehmen im Wohnimmobiliensektor aktiv.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Aroundtown_SA',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/d/d9/Aroundtown_SA_logo.svg/500px-Aroundtown_SA_logo.svg.png',
  products: [],
  industries: [1910, 111011],
  currency: Currency.EUR,
  securityType: SecurityType.BearerShares,
  isin: 'LU1673108939',
  wkn: 'A2DW8Z',
  symbol: 'AT1.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Immobilienunternehmen', 'Gewerbeimmobilien', 'Wohnimmobilien']
};
// tslint:enable:max-line-length

