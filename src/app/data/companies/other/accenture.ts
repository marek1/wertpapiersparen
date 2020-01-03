import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 2.66, yield: 1.57}, {year: 2017, rate: 2.42}, {
    year: 2016,
    rate: 2.20
  }, {year: 2015, rate: 2.04, yield: 2.16}, {year: 2014, rate: 1.86, yield: 2.29}, {year: 2013, rate: 1.62, yield: 2.24}, {
    year: 2012,
    rate: 1.35,
    yield: 2.19
  }, {year: 2011, rate: 0.90, yield: 1.68}, {year: 2010, rate: 1.13, yield: 3.09}, {year: 2009, rate: 0.50, yield: 1.52}
];
const prices = {
  '2019-12-30': {'1. open': '121.00', '4. close': '180.10'},
  '2018-12-30': {'1. open': '127.00', '4. close': '123.00'},
  '2017-12-30': {'1. open': '110.92', '4. close': '128.22'},
  '2016-12-30': {'1. open': '94.58', '4. close': '111.65'},
  '2015-12-30': {'1. open': '74.43', '4. close': '96.51'},
  '2014-12-30': {'1. open': '59.99', '4. close': '74.40'},
  '2013-12-30': {'1. open': '50.51', '4. close': '59.92'},
  '2012-12-30': {'1. open': '40.94', '4. close': '49.80'},
  '2011-12-30': {'1. open': '36.35', '4. close': '41.59'},
  '2010-12-30': {'1. open': '28.99', '4. close': '36.42'},
  '2009-12-30': {'1. open': '23.40', '4. close': '28.99'},
  '2008-12-30': {'1. open': '25.06', '4. close': '23.40'},
  '2007-12-30': {'1. open': '27.96', '4. close': '25.06'},
  '2006-12-30': {'1. open': '24.28', '4. close': '27.96'},
  '2005-12-30': {'1. open': '19.60', '4. close': '24.16'}
};

// tslint:disable:max-line-length
export const accentureCompany: Company = {
  id: 1229,
  name: 'Accenture Plc',
  country: Country.Irland,
  city: 'Dublin',
  url: 'http://www.accenture.com/',
  description: 'Die Accenture Plc (ehemals Andersen Consulting) mit Sitz im irischen Dublin ist einer der weltweit größten[5] Managementberatungs-, Technologie- und Outsourcing-Dienstleister mit etwa 459.000 (2018) Mitarbeitern.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Accenture',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Acc_Logo_Black_Purple_png.png/500px-Acc_Logo_Black_Purple_png.png',
  products: [],
  industries: [2310, 1812],
  securityType: SecurityType.RegisteredSharesA,
  currency: Currency.EUR,
  isin: 'IE00B4BNMY34',
  wkn: 'A0YAQA',
  symbol: 'XET.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MSCIWorld],
  end_of_month_prices: prices,
  dividends,
  tags: ['Unternehmensberatung', 'Managementberatungsunternehmen', 'Technologieunternehmen', 'Dienstleistungsunternehmen']
};
// tslint:enable:max-line-length

