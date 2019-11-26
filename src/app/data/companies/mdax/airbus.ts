
import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {year: 2018, rate: 1.65, yield: 1.98}, {year: 2017, rate: 1.50}, {year: 2016, rate: 1.35}, {
    year: 2015,
    rate: 1.30,
    yield: 2.08
  }, {year: 2014, rate: 1.20, yield: 2.90}, {year: 2013, rate: 0.75, yield: 1.34}, {year: 2012, rate: 0.60, yield: 2.04}, {
    year: 2011,
    rate: 0.45,
    yield: 1.86
  }, {year: 2010, rate: 0.22, yield: 1.22}, {year: 2009, rate: 0.00, yield: 0.00}, {year: 2008, rate: 0.20, yield: 1.72}, {
    year: 2007,
    rate: 0.12,
    yield: 0.55
  }, {year: 2006, rate: 0.12, yield: 0.46}, {year: 2005, rate: 0.65, yield: 2.03}, {year: 2004, rate: 0.50, yield: 2.33}, {
    year: 2003,
    rate: 0.40,
    yield: 2.09
  }, {year: 2002, rate: 0.30, yield: 3.05}, {year: 2001, rate: 0.50, yield: 3.77}, {year: 2000, rate: 0.50, yield: 2.17}
];

const prices = {
  '2019-11-12': {
    '1. open': '129.3400',
    '2. high': '135.2000',
    '3. low': '128.1600',
    '4. close': '134.8800',
    '5. volume': '654755'
  },
  '2019-10-31': {
    '1. open': '120.3000',
    '2. high': '130.6200',
    '3. low': '114.4000',
    '4. close': '128.5200',
    '5. volume': '1511218'
  },
  '2019-09-30': {
    '1. open': '126.1000',
    '2. high': '128.6800',
    '3. low': '117.6200',
    '4. close': '119.2000',
    '5. volume': '1278149'
  },
  '2019-08-30': {
    '1. open': '128.2000',
    '2. high': '129.8400',
    '3. low': '120.0000',
    '4. close': '125.3000',
    '5. volume': '1358087'
  },
  '2019-07-31': {
    '1. open': '125.3000',
    '2. high': '133.8200',
    '3. low': '122.9400',
    '4. close': '128.1800',
    '5. volume': '1192513'
  },
  '2019-06-28': {
    '1. open': '113.6200',
    '2. high': '126.4800',
    '3. low': '112.9600',
    '4. close': '124.7800',
    '5. volume': '1595326'
  },
  '2019-05-31': {
    '1. open': '121.6000',
    '2. high': '122.7600',
    '3. low': '112.6000',
    '4. close': '114.7200',
    '5. volume': '1439685'
  },
  '2019-04-30': {
    '1. open': '119.1000',
    '2. high': '123.7800',
    '3. low': '116.5200',
    '4. close': '121.9400',
    '5. volume': '1229073'
  },
  '2019-03-29': {
    '1. open': '114.7600',
    '2. high': '119.2600',
    '3. low': '110.5400',
    '4. close': '117.8400',
    '5. volume': '2061701'
  },
  '2019-02-28': {
    '1. open': '101.0600',
    '2. high': '114.0000',
    '3. low': '99.4100',
    '4. close': '113.5400',
    '5. volume': '1571414'
  },
  '2019-01-31': {
    '1. open': '83.9000',
    '2. high': '100.4400',
    '3. low': '78.9300',
    '4. close': '100.2000',
    '5. volume': '1753425'
  },
  '2018-12-28': {
    '1. open': '96.7000',
    '2. high': '96.9900',
    '3. low': '78.9500',
    '4. close': '83.5100',
    '5. volume': '2335091'
  },
  '2018-11-30': {
    '1. open': '97.7900',
    '2. high': '98.7100',
    '3. low': '89.9200',
    '4. close': '94.5400',
    '5. volume': '1629559'
  },
  '2018-10-31': {
    '1. open': '108.6200',
    '2. high': '108.6200',
    '3. low': '91.8700',
    '4. close': '97.7500',
    '5. volume': '2711854'
  },
  '2018-09-28': {
    '1. open': '106.1200',
    '2. high': '109.1400',
    '3. low': '103.1000',
    '4. close': '108.3000',
    '5. volume': '1410101'
  },
  '2018-08-31': {
    '1. open': '106.0400',
    '2. high': '110.8600',
    '3. low': '105.0000',
    '4. close': '106.2800',
    '5. volume': '1066518'
  },
  '2018-07-31': {
    '1. open': '97.0700',
    '2. high': '111.1200',
    '3. low': '97.0400',
    '4. close': '106.0600',
    '5. volume': '1568439'
  },
  '2018-06-29': {
    '1. open': '98.3900',
    '2. high': '106.4200',
    '3. low': '94.5500',
    '4. close': '100.0400',
    '5. volume': '1891146'
  },
  '2018-05-31': {
    '1. open': '96.9300',
    '2. high': '101.0800',
    '3. low': '95.4300',
    '4. close': '97.3700',
    '5. volume': '1637138'
  }
};

// tslint:disable:max-line-length
export const airbusCompany: Company = {
  id: 1032,
  name: 'Airbus SE',
  country: Country.Niederlande,
  city: 'Leiden',
  url: 'https://www.airbus.com/',
  description: 'Die Airbus SE, von 2000 bis 2013 EADS (European Aeronautic Defence and Space), ist Europas größter Luft- und Raumfahrt- sowie (nach BAE Systems) zweitgrößter Rüstungskonzern. Mit einem Umsatz von 63,7 Milliarden Euro im Jahr 2018 ist die Airbus Group nach Boeing auch das zweitgrößte Luft- und Raumfahrtunternehmen der Welt.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Airbus_Group',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Airbus_Logo_2017.svg/500px-Airbus_Logo_2017.svg.png',
  products: [
    {
      id: 103210,
      name: 'Airbus A220-100',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/aircraft/content-navigation/a220-100-side-thumbnail.png?wid=322&fit=fit,1&qlt=85,0&fmt=png-alpha'
    },
    {
      id: 103211,
      name: 'Airbus A220-300',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/aircraft/content-navigation/a220-300-side-thumbnail.png?wid=322&fit=fit,1&qlt=85,0&fmt=png-alpha'
    },
    {
      id: 103212,
      name: 'Airbus A318',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/aircraft/header/aircraft-families/content-navigation/Content_Navigation_A318.png?wid=322&fit=fit,1&qlt=85,0&fmt=png-alpha'
    },
    {
      id: 103213,
      name: 'Airbus A319neo',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/aircraft/header/aircraft-families/content-navigation/Content_Navigation_A319neo.png?wid=322&fit=fit,1&qlt=85,0&fmt=png-alpha'
    },
    {
      id: 103214,
      name: 'Airbus A320neo',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/aircraft/header/aircraft-families/content-navigation/Content_Navigation_A320neo.png?wid=322&fit=fit,1&qlt=85,0&fmt=png-alpha'
    },
    {
      id: 103215,
      name: 'Airbus A321neo',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/aircraft/header/aircraft-families/content-navigation/Content_Navigation_A321neo.png?wid=322&fit=fit,1&qlt=85,0&fmt=png-alpha'
    },
    {
      id: 103216,
      name: 'Airbus A330-200',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/aircraft/header/aircraft-families/content-navigation/Content_Navigation_A330-200.png?wid=322&fit=fit,1&qlt=85,0&fmt=png-alpha'
    },
    {
      id: 103217,
      name: 'Airbus A330-300',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/aircraft/header/aircraft-families/content-navigation/Content_Navigation_A330-300.png?wid=322&fit=fit,1&qlt=85,0&fmt=png-alpha',
    },
    {
      id: 103218,
      name: 'Airbus A330-800neo',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/aircraft/header/aircraft-families/content-navigation/Content_Navigation_A330-800neo.png?wid=322&fit=fit,1&qlt=85,0&fmt=png-alpha'
    },
    {
      id: 103219,
      name: 'Airbus A330-900neo',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/aircraft/header/aircraft-families/content-navigation/Content_Navigation_A330-900neo.png?wid=322&fit=fit,1&qlt=85,0&fmt=png-alpha'
    },
    {
      id: 103220,
      name: 'Airbus A350-900',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/products-and-solutions/commercial-aircraft/a350-family/a350-900/A350-900-Air-France-Air-To-Air-stockshot.mp4?wid=769&fit=fit,1&qlt=85,0'
    },
    {
      id: 103221,
      name: 'Airbus A350-1000',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/aircraft/header/aircraft-families/content-navigation/Content_Navigation_A350-900.png?wid=322&fit=fit,1&qlt=85,0&fmt=png-alpha'
    },
    {
      id: 103222,
      name: 'Airbus A380',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/products-and-solutions/commercial-aircraft/a380-family/airbus-a380-ana-take-off-broll.mp4?wid=769&fit=fit,1&qlt=85,0'
    },
    {
      id: 103223,
      name: 'Airbus A400M',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/defence/a400m/web.a400m.large.20.jpg?wid=991&fit=fit,1&qlt=85,0'
    },
    {
      id: 103224,
      name: 'Airbus A330MRTT',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/defence/content-navigation/Content_Navigation_A400M.png?wid=322&fit=fit,1&qlt=85,0&fmt=png-alpha'
    },
    {
      id: 103225,
      name: 'Airbus Eurofighter',
      logo: 'https://airbus-h.assetsadobe2.com/is/image/content/dam/channel-specific/website-/products-and-services/defence/sevices/web.services.large.16.jpg?wid=991&fit=fit,1&qlt=85,0'
    },
    {
      id: 103226,
      name: 'Airbus UAV'
    },
    {
      id: 103228,
      name: 'Airbus FCAS'
    }
  ],
  industries: [121012, 121015, 2210],
  currency: Currency.EUR,
  securityType: SecurityType.OopNaam,
  isin: 'NL0000235190',
  wkn: '938914',
  symbol: 'AIR.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [],
  end_of_month_prices: prices,
  dividends,
  tags: ['Luftfahrtunternehmen', 'Raumfahrtunternehmen', 'zivile Luftfahrt']
};
// tslint:enable:max-line-length

