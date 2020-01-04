import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';

const dividends = [
  {year: 2018, rate: 0.20, yield: 10.23}, {year: 2017, rate: 0.20}, {year: 2016, rate: 0.18}, {
    year: 2015,
    rate: 0.14,
    yield: 4.53
  }, {year: 2014, rate: 0.07, yield: 2.89}, {year: 2013, rate: 0.05, yield: 2.79}, {year: 2012, rate: 0.05, yield: 3.85}, {
    year: 2011,
    rate: 0.05,
    yield: 3.88
  }, {year: 2010, rate: 0.08, yield: 3.94}, {year: 2009, rate: 0.08, yield: 2.56}, {year: 2008, rate: 0.00, yield: 0.00}, {
    year: 2007,
    rate: 0.38,
    yield: 7.02
  }, {year: 2006, rate: 0.38, yield: 6.50}, {year: 2005, rate: 0.57, yield: 4.31}, {year: 2004, rate: 0.47, yield: 4.43}, {
    year: 2003,
    rate: 0.39,
    yield: 3.77
  }, {year: 2002, rate: 0.30, yield: 4.84}, {year: 2001, rate: 0.57, yield: 4.73}, {year: 2000, rate: 0.57, yield: 3.30}
];
const prices = {
  '2019-12-30': {'1. open': '1.92', '4. close': '2.27'},
  '2018-12-30': {'1. open': '2.78', '4. close': '1.95'},
  '2017-12-30': {'1. open': '2.42', '4. close': '2.77'},
  '2016-12-30': {'1. open': '3.02', '4. close': '2.40'},
  '2015-12-30': {'1. open': '2.46', '4. close': '3.10'},
  '2014-12-30': {'1. open': '1.79', '4. close': '2.44'},
  '2013-12-30': {'1. open': '1.35', '4. close': '1.80'},
  '2012-12-30': {'1. open': '1.35', '4. close': '1.33'},
  '2011-12-30': {'1. open': '2.06', '4. close': '1.29'},
  '2010-12-30': {'1. open': '3.11', '4. close': '2.10'},
  '2009-12-30': {'1. open': '2.53', '4. close': '3.11'},
  '2008-12-30': {'1. open': '5.36', '4. close': '2.53'},
  '2007-12-30': {'1. open': '5.66', '4. close': '5.36'},
  '2006-12-30': {'1. open': '4.55', '4. close': '5.66'},
  '2005-12-30': {'1. open': '3.70', '4. close': '4.39'},
  '2004-12-30': {'1. open': '3.00', '4. close': '3.50'}
};

// tslint:disable:max-line-length
export const intesaCompany: Company = {
  id: 1187,
  name: 'Intesa Sanpaolo S.p.A.',
  country: Country.Italien,
  city: 'Turin',
  url: 'https://www.intesasanpaolo.com/',
  description: 'Die Intesa Sanpaolo S.p.A. ist eines der größten italienischen Kreditinstitute. Das Unternehmen mit Sitz in Turin ist an der Borsa Italiana im Leitindex FTSE MIB gelistet.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Intesa_Sanpaolo',
  link_stockPrices: 'https://www.boerse.de/historische-kurse/Intesa-Sanpaolo-Aktie/IT0000072618',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/5/51/Intesa_Sanpaolo_logo.svg/500px-Intesa_Sanpaolo_logo.svg.png',
  products: [],
  industries: [141010],
  isharesIndustryName: IsharesIndustryNames.Financials,
  securityType: SecurityType.AzioniNom,
  currency: Currency.EUR,
  isin: 'IT0000072618',
  wkn: '850605',
  symbol: 'IES.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.MSCIEuropeSRI, Indices.MSCIWorld, Indices.DowJonesSustainabilityEurozone],
  end_of_month_prices: prices,
  dividends,
  tags: ['Bank', 'Finanzunternehmen', 'Filialen', 'Finanzierungsprodukte', 'Kapitalanlageprodukte']
};
// tslint:enable:max-line-length

