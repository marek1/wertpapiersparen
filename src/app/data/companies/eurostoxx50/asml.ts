import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';

const dividends = [
  {year: 2018, rate: 1.51, yield: 1.11}, {year: 2017, rate: 1.40}, {year: 2016, rate: 1.20}, {
    year: 2015,
    rate: 1.05,
    yield: 1.27
  }, {year: 2014, rate: 0.70, yield: 0.78}, {year: 2013, rate: 0.61, yield: 0.90}, {year: 2012, rate: 0.53, yield: 1.10}, {
    year: 2011,
    rate: 0.46,
    yield: 1.09
  }, {year: 2010, rate: 0.40, yield: 1.07}, {year: 2009, rate: 0.20, yield: 0.64}, {year: 2008, rate: 0.20, yield: 1.21}, {
    year: 2007,
    rate: 0.25,
    yield: 0.89
  }
];
const prices = {
  '2019-12-30': {'1. open': '134.46', '4. close': '240.20'},
  '2018-12-30': {'1. open': '144.45', '4. close': '136.42'},
  '2017-12-30': {'1. open': '105.90', '4. close': '145.50'},
  '2016-12-30': {'1. open': '79.79', '4. close': '105.80'},
  '2015-12-30': {'1. open': '90.14', '4. close': '83.80'},
  '2014-12-30': {'1. open': '68.44', '4. close': '89.23'},
  '2013-12-30': {'1. open': '49.05', '4. close': '68.59'},
  '2012-12-30': {'1. open': '32.45', '4. close': '48.34'},
  '2011-12-30': {'1. open': '28.87', '4. close': '32.28'},
  '2010-12-30': {'1. open': '23.76', '4. close': '28.75'},
  '2009-12-30': {'1. open': '12.84', '4. close': '23.76'},
  '2008-12-30': {'1. open': '21.71', '4. close': '12.84'},
  '2007-12-30': {'1. open': '18.70', '4. close': '21.71'},
  '2006-12-30': {'1. open': '17.13', '4. close': '18.70'},
  '2005-12-30': {'1. open': '11.68', '4. close': '16.68'},
  '2004-12-30': {'1. open': '16.20', '4. close': '11.70'},
  '2003-12-30': {'1. open': '8.05', '4. close': '16.20'},
  '2002-12-30': {'1. open': '19.60', '4. close': '8.05'},
  '2001-12-30': {'1. open': '24.80', '4. close': '19.60'},
  '2000-12-30': {'1. open': '38.17', '4. close': '24.80'},
  '1999-12-30': {'1. open': '8.78', '4. close': '36.50'},
  '1998-12-30': {'1. open': '13.85', '4. close': '8.78'}
};

// tslint:disable:max-line-length
export const asmlCompany: Company = {
  id: 1174,
  name: 'ASML N.V.',
  country: Country.Niederlande,
  city: 'Veldhoven',
  url: 'http://www.asml.com/',
  description: 'Das niederländische Unternehmen ASML ist der weltweit größte Anbieter von Lithographiesystemen für die Halbleiterindustrie. Die überaus komplexen Maschinen spielen eine wichtige Rolle bei der Herstellung von integrierten Schaltkreisen (Mikrochips). 80 % aller Chiphersteller (Foundries und IDMs) weltweit sind Kunden von ASML und der weltweite Marktanteil beträgt 65 %. ASML bietet weltweiten Kundendienst an über 50 Servicestellen in 14 Ländern.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/ASML',
  link_stockPrices: 'https://www.boerse.de/historische-kurse/ASML-Holding-Aktie/NL0010273215',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ASML_Logo.svg/500px-ASML_Logo.svg.png',
  products: [],
  industries: [1811],
  isharesIndustryName: IsharesIndustryNames.IT,
  securityType: SecurityType.AandelenOopNaam,
  currency: Currency.EUR,
  isin: 'NL0010273215',
  wkn: 'A1J4U4',
  symbol: 'ASME.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50],
  end_of_month_prices: prices,
  dividends,
  tags: ['Halbleiterindustrie', 'Lithographie-Systeme']
};
// tslint:enable:max-line-length

