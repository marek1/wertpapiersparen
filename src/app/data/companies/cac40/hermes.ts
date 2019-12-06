import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 4.55, yield: 0.97}, {year: 2017, rate: 4.10}, {year: 2016, rate: 3.75}, {
    year: 2015,
    rate: 3.35,
    yield: 1.07
  }, {year: 2014, rate: 2.95, yield: 1.00}, {year: 2013, rate: 2.70, yield: 1.02}, {year: 2012, rate: 2.50, yield: 1.10}, {
    year: 2011,
    rate: 1.50,
    yield: 0.65
  }, {year: 2010, rate: 1.50, yield: 0.96}, {year: 2009, rate: 1.05, yield: 1.13}, {year: 2008, rate: 1.03}
];
const prices = {
  '2019-12-30': {'1. open': '490.50', '4. close': '665.00'},
  '2018-12-30': {'1. open': '446.80', '4. close': '471.40'},
  '2017-12-30': {'1. open': '387.96', '4. close': '448.25'},
  '2016-12-30': {'1. open': '306.14', '4. close': '390.25'},
  '2015-12-30': {'1. open': '292.65', '4. close': '313.40'},
  '2014-12-30': {'1. open': '264.49', '4. close': '293.55'},
  '2013-12-30': {'1. open': '225.50', '4. close': '262.70'},
  '2012-12-30': {'1. open': '229.43', '4. close': '229.28'},
  '2011-12-30': {'1. open': '157.90', '4. close': '227.92'},
  '2010-12-30': {'1. open': '92.97', '4. close': '157.90'},
  '2009-12-30': {'1. open': '100.36', '4. close': '92.97'},
  '2008-12-30': {'1. open': '84.80', '4. close': '100.36'},
  '2007-12-30': {'1. open': '93.85', '4. close': '84.80'},
  '2006-12-30': {'1. open': '70.33', '4. close': '93.85'},
  '2005-12-30': {'1. open': '49.53', '4. close': '70.20'},
  '2004-12-30': {'1. open': '50.23', '4. close': '48.83'},
  '2003-12-30': {'1. open': '44.33', '4. close': '50.23'},
  '2002-12-30': {'1. open': '56.67', '4. close': '44.33'},
  '2001-12-30': {'1. open': '51.63', '4. close': '56.67'}
};

// tslint:disable:max-line-length
export const hermesCompany: Company = {
  id: 1211,
  name: 'Hermes International S.C.A.',
  country: Country.Frankreich,
  city: 'Paris',
  url: 'https://finance.hermes.com/en/',
  description: 'Hermès [ɛʀˈmɛs] bzw. die Hermès International SCA (Société en Commandite par Actions) ist ein französisches Familienunternehmen mit Firmensitz in Paris, das seine Ursprünge im Sattlerwesen und in der gehobenen Lederverarbeitung hat. Das heutzutage vorwiegend aus Luxus-Modeartikeln bestehende Sortiment, das über ein internationales Netzwerk von Hermès-Boutiquen weltweit angeboten wird, umfasst 14 verschiedene Produktbereiche: Lederwaren, Seiden- und Kaschmir-Schals, Krawatten, Damen und Herren Prêt-à-porter, Parfum, Uhren, Schuhe, Handschuhe, Schreibwaren, Emaille, Schmuck, Porzellan, Inneneinrichtung.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Herm%C3%A8s_(Unternehmen)',
  logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Herm%C3%A8s.svg/400px-Herm%C3%A8s.svg.png',
  products: [
    {
      id: 121110,
      name: 'Hermès Mode',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Herm%C3%A8s.svg/400px-Herm%C3%A8s.svg.png',
      segment: 101410
    }
  ],
  industries: [101410, 101414, 1019, 101012],
  securityType: SecurityType.Aktie,
  currency: Currency.EUR,
  isin: 'FR0000052292',
  wkn: '886670',
  symbol: 'HMI.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.CAC40],
  end_of_month_prices: prices,
  dividends,
  tags: ['Modeartikel', 'Lederwaren', 'Schals', 'Krawatten', 'Damenbekleidung', 'Herrenbekleidung', 'Parfums', 'Uhren', 'Schmuck', 'Notizbücher', 'Hüte', 'Schuhe', 'Handschuhe', 'Heimtextilien', 'Porzellan', 'Geschirr']
};
// tslint:enable:max-line-length

