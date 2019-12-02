import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.72, yield: 3.22}, {
    year: 2017,
    rate: 0.68
  }, {year: 2016, rate: 0.65}, {year: 2015, rate: 0.63, yield: 2.34}, {year: 2014, rate: 0.63, yield: 3.14}, {
    year: 2013,
    rate: 0.63,
    yield: 3.94
  }, {year: 2012, rate: 0.63, yield: 4.10}, {year: 2011, rate: 0.63, yield: 4.07}, {year: 2010, rate: 0.63, yield: 4.03}, {
    year: 2009,
    rate: 0.63,
    yield: 3.29
  }, {year: 2008, rate: 0.62, yield: 3.48}, {year: 2007, rate: 0.61, yield: 2.57}
];
const prices = {
  '2019-11-29': {
    '1. open': '34.780',
    '2. high': '34.860',
    '3. low': '34.670',
    '4. close': '34.700',
    '5. volume': ''
  },
  '2019-10-31': {
    '1. open': '33.140',
    '2. high': '33.140',
    '3. low': '32.380',
    '4. close': '32.700',
    '5. volume': ''
  },
  '2018-12-28': {
    '1. open': '22.340',
    '2. high': '22.920',
    '3. low': '22.340',
    '4. close': '22.920',
    '5. volume': ''
  },
  '2017-12-29': {
    '1. open': '30.050',
    '2. high': '30.050',
    '3. low': '30.050',
    '4. close': '30.050',
    '5. volume': ''
  },
  '2016-12-30': {
    '1. open': '32.395',
    '2. high': '32.395',
    '3. low': '32.395',
    '4. close': '32.395',
    '5. volume': ''
  },
  '2015-12-30': {
    '1. open': '26.690',
    '2. high': '26.695',
    '3. low': '26.690',
    '4. close': '26.695',
    '5. volume': ''
  },
  '2014-12-30': {
    '1. open': '19.615',
    '2. high': '19.615',
    '3. low': '19.600',
    '4. close': '19.600',
    '5. volume': ''
  },
};

// tslint:disable:max-line-length
export const crhCompany: Company = {
  id: 1178,
  name: 'Cement Roadstone Holding plc',
  country: Country.Irland,
  city: 'Dublin',
  url: 'http://www.crh.com/',
  description: 'Cement Roadstone Holding plc (CRH) ist ein weltweit operierender irischer Baustoffhersteller mit Hauptsitz in Dublin. Das Unternehmen entstand 1970 durch den Zusammenschluss der irischen Unternehmen Cement Holding und Roadstone Ltd. Das Unternehmen ist Mitglied im ISEQ Overall Index an der Irish Stock Exchange. Es wird an den Börsen in London und New York City gehandelt und gehört zu den 50 Unternehmen des EURO STOXX 50-Aktienindex. CRH hatte 2012 eine Produktionskapazität von 56 Mio. t Zement.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Cement_Roadstone_Holding',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/b/bc/Cement_Roadstone_Holding_logo.svg/238px-Cement_Roadstone_Holding_logo.svg.png',
  products: [],
  industries: [111111],
  securityType: SecurityType.RegisteredShares,
  currency: Currency.EUR,
  isin: 'IE0001827041',
  wkn: '864684',
  symbol: 'CRG.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50],
  end_of_month_prices: prices,
  dividends,
  tags: ['Baustoffhersteller', 'Rohstoffproduktion', 'Bauindustrie', 'Kies', 'Zement', 'Asphalt', 'Fertigbeton', 'Betonprodukte']
};
// tslint:enable:max-line-length

