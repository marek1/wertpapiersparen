import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';

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
  '2019-12-30': {'1. open': '23.12', '4. close': '34.71'},
  '2018-12-30': {'1. open': '30.38', '4. close': '22.35'},
  '2017-12-30': {'1. open': '32.89', '4. close': '29.79'},
  '2016-12-30': {'1. open': '26.10', '4. close': '32.81'},
  '2015-12-30': {'1. open': '19.54', '4. close': '26.73'},
  '2014-12-30': {'1. open': '18.39', '4. close': '19.90'},
  '2013-12-30': {'1. open': '15.20', '4. close': '18.42'},
  '2012-12-30': {'1. open': '15.25', '4. close': '15.23'},
  '2011-12-30': {'1. open': '15.49', '4. close': '14.89'},
  '2010-12-30': {'1. open': '19.89', '4. close': '15.74'},
  '2009-12-30': {'1. open': '18.40', '4. close': '19.89'},
  '2008-12-30': {'1. open': '23.51', '4. close': '18.40'},
  '2007-12-30': {'1. open': '32.16', '4. close': '23.51'},
  '2006-12-30': {'1. open': '24.72', '4. close': '32.16'},
  '2005-12-30': {'1. open': '19.58', '4. close': '24.17'},
  '2004-12-30': {'1. open': '16.07', '4. close': '19.50'},
  '2003-12-30': {'1. open': '11.90', '4. close': '16.07'},
  '2002-12-30': {'1. open': '19.65', '4. close': '11.90'},
  '2001-12-30': {'1. open': '19.00', '4. close': '19.65'},
  '2000-12-30': {'1. open': '21.10', '4. close': '19.00'},
  '1999-12-30': {'1. open': '14.32', '4. close': '21.10'},
  '1998-12-30': {'1. open': '13.04', '4. close': '14.32'}
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
  link_stockPrices: 'https://www.boerse.de/historische-kurse/CRH-Aktie/IE0001827041',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/b/bc/Cement_Roadstone_Holding_logo.svg/238px-Cement_Roadstone_Holding_logo.svg.png',
  products: [],
  industries: [111111],
  isharesIndustryName: IsharesIndustryNames.Materialien,
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

