import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.75, yield: 6.12}, {year: 2017, rate: 0.70}, {year: 2016, rate: 1.00}, {
    year: 2015,
    rate: 1.00,
    yield: 6.09
  }, {year: 2014, rate: 1.00, yield: 5.15}, {year: 2013, rate: 1.50, yield: 8.78}, {year: 2012, rate: 1.50, yield: 9.63}, {
    year: 2011,
    rate: 1.50,
    yield: 7.10
  }, {year: 2010, rate: 1.50, yield: 5.59}, {year: 2009, rate: 1.47, yield: 4.85}, {year: 2008, rate: 2.20, yield: 6.36}, {
    year: 2007,
    rate: 1.36,
    yield: 2.92
  }, {year: 2006, rate: 1.20, yield: 3.06}, {year: 2005, rate: 1.00, yield: 3.80}, {year: 2004, rate: 0.80, yield: 4.08}, {
    year: 2003,
    rate: 0.71,
    yield: 4.46
  }, {year: 2002, rate: 0.71, yield: 4.29}, {year: 2001, rate: 0.71, yield: 2.09}, {year: 2000, rate: 0.66, yield: 1.70}, {
    year: 1999,
    rate: 0.60,
    yield: 1.89
  }
];
const prices = {
  '2019-12-30': {'1. open': '12.55', '4. close': '14.06'},
  '2018-12-30': {'1. open': '14.38', '4. close': '12.26'},
  '2017-12-30': {'1. open': '12.31', '4. close': '14.36'},
  '2016-12-30': {'1. open': '15.85', '4. close': '12.08'},
  '2015-12-30': {'1. open': '19.38', '4. close': '16.51'},
  '2014-12-30': {'1. open': '17.29', '4. close': '19.70'},
  '2013-12-30': {'1. open': '15.95', '4. close': '17.03'},
  '2012-12-30': {'1. open': '20.98', '4. close': '15.33'},
  '2011-12-30': {'1. open': '27.16', '4. close': '20.53'},
  '2010-12-30': {'1. open': '30.10', '4. close': '27.30'},
  '2009-12-30': {'1. open': '33.96', '4. close': '30.10'},
  '2008-12-30': {'1. open': '40.38', '4. close': '33.96'},
  '2007-12-30': {'1. open': '33.60', '4. close': '40.38'},
  '2006-12-30': {'1. open': '24.60', '4. close': '33.60'},
  '2005-12-30': {'1. open': '28.00', '4. close': '24.76'}
};

// tslint:disable:max-line-length
export const engieCompany: Company = {
  id: 1181,
  name: 'Engie S.A.',
  country: Country.Frankreich,
  city: 'Courbevoie',
  url: 'http://www.engie.com/',
  description: 'Die Engie SA [ˈɛndʒi] (bis 2015: GDF Suez) mit Sitz im Geschäftsviertel La Défense bei Paris ist ein international tätiger Energieversorgungskonzern, ursprünglich hervorgegangen aus der Fusion des mehrheitlich in staatlicher Hand befindlichen Gasversorgers Gaz de France (GDF) und des Mischkonzerns Suez im Juli 2008 unter dem Namen GDF Suez. Die Engie-Aktie ist Bestandteil des französischen Leitindexes CAC 40. Der französische Staat hält 24,1 Prozent der Anteile an Engie.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Engie',
  link_stockPrices: 'https://www.boerse.de/historische-kurse/Engie-Aktie/FR0010208488',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/LOGO_ENGIE.jpg/500px-LOGO_ENGIE.jpg',
  products: [],
  industries: [111309, 111310],
  securityType: SecurityType.ActionsPort,
  currency: Currency.EUR,
  isin: 'FR0010208488',
  wkn: 'A0ER6Q',
  symbol: 'GZF.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.MSCIWorld],
  end_of_month_prices: prices,
  dividends,
  tags: ['Energieversorgung', 'Erdgas', 'Strom', 'Energiebeschaffung', 'Energiehandel']
};
// tslint:enable:max-line-length

