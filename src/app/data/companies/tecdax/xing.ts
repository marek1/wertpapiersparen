import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {year: 2018, rate: 5.70, yield: 2.48}, {year: 2017, rate: 1.68}, {year: 2016, rate: 1.37}, {
    year: 2015,
    rate: 1.03,
    yield: 0.60
  }, {year: 2014, rate: 0.92, yield: 0.99}, {year: 2013, rate: 0.62, yield: 0.83}, {year: 2012, rate: 0.56, yield: 1.34}, {
    year: 2011,
    rate: 0.56,
    yield: 1.36
  }, {year: 2010, rate: 0.00, yield: 0.00}, {year: 2009, rate: 0.00, yield: 0.00}, {year: 2008, rate: 0.00, yield: 0.00}, {
    year: 2007,
    rate: 0.00,
    yield: 0.00
  }
];
const prices = {
  '2019-11-21': {
    '1. open': '282.5000',
    '2. high': '290.5000',
    '3. low': '265.5000',
    '4. close': '279.0000',
    '5. volume': '53944'
  },
  '2019-10-31': {
    '1. open': '250.0000',
    '2. high': '286.0000',
    '3. low': '244.5000',
    '4. close': '282.5000',
    '5. volume': '82791'
  },
  '2019-09-30': {
    '1. open': '265.0000',
    '2. high': '291.0000',
    '3. low': '248.0000',
    '4. close': '250.0000',
    '5. volume': '83364'
  }
};

// tslint:disable:max-line-length
export const xingCompany: Company = {
  id: 1104,
  name: 'New Work SE (Xing)',
  country: Country.Deutschland,
  city: 'Hamburg',
  url: 'https://www.new-work.se/de/',
  description: 'Xing ist ein soziales Netzwerk, in dem Mitglieder vorrangig ihre beruflichen Kontakte verwalten. Betrieben wird Xing von der New Work SE (bis Mitte 2019 Xing SE[3]) mit Sitz in Hamburg. Xing bietet vor allem eine Plattform für Geschäftsnetzwerke im deutschsprachigen Raum,[4] im Gegensatz zu global ausgerichteten Netzwerken wie LinkedIn. Zudem existiert Xing Spanien mit Sitz in Barcelona.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/XING',
  logo: 'https://www.new-work.se/assets/images/layout/nwse-logo.svg',
  products: [
    {
      id: 110410,
      name: 'Xing',
      logo: 'https://www.new-work.se/NWSE/Home/BrandOverview/XING.svg'
    },
    {
      id: 110411,
      name: 'Kununu',
      logo: 'https://www.new-work.se/NWSE/Home/BrandOverview/kununu.svg'
    },
    {
      id: 110412,
      name: 'Honeypot',
      logo: 'https://www.new-work.se/NWSE/Home/BrandOverview/Honeypot_NEU.svg'
    },
    {
      id: 110413,
      name: 'Internations',
      logo: 'https://www.new-work.se/NWSE/Home/BrandOverview/InterNations_NEU.svg'
    }
  ],
  industries: [131211, 131212, 1912],
  securityType: SecurityType.Namensaktie,
  currency: Currency.EUR,
  isin: 'DE000NWRK013',
  wkn: 'NWRK01',
  symbol: 'NWO.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.TecDAX, Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Business-Netzwerk', 'Internet-Plattform', 'Business-Kontakte']
};
// tslint:enable:max-line-length

