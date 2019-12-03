import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { SecurityType } from '../../../enums/securityType';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.78, yield: 4.30}, {year: 2017, rate: 0.53}, {year: 2016, rate: 0.48}, {
    year: 2015,
    rate: 0.00,
    yield: 0.00
  }, {year: 2014, rate: 0.00, yield: 0.00}, {year: 2013, rate: 0.00, yield: 0.00}, {year: 2012, rate: 0.00, yield: 0.00}, {
    year: 2011,
    rate: 0.00,
    yield: 0.00
  }, {year: 2010, rate: 1.10, yield: 3.87}, {year: 2009, rate: 0.00, yield: 0.00}, {year: 2008, rate: 0.00, yield: 0.00}, {
    year: 2007,
    rate: 1.50
  }
];
const prices = {
  '2019-12-30': {'1. open': '18.60', '4. close': '21.51'},
  '2018-12-30': {'1. open': '17.01', '4. close': '18.20'},
  '2017-12-30': {'1. open': '15.30', '4. close': '16.94'},
  '2016-12-30': {'1. open': '15.80', '4. close': '15.49'},
  '2015-12-30': {'1. open': '10.18', '4. close': '16.28'},
  '2014-12-30': {'1. open': '9.41', '4. close': '10.16'},
  '2013-12-30': {'1. open': '5.47', '4. close': '9.50'},
  '2012-12-30': {'1. open': '12.06', '4. close': '5.44'},
  '2011-12-30': {'1. open': '29.44', '4. close': '11.90'},
  '2010-12-30': {'1. open': '23.86', '4. close': '28.65'},
  '2009-12-30': {'1. open': '12.20', '4. close': '23.76'},
  '2008-12-30': {'1. open': '51.72', '4. close': '11.72'},
  '2007-12-30': {'1. open': '50.10', '4. close': '52.27'},
  '2006-12-30': {'1. open': '48.73', '4. close': '50.10'},
  '2005-12-30': {'1. open': '47.40', '4. close': '48.93'},
  '2004-12-30': {'1. open': '39.81', '4. close': '46.38'},
  '2003-12-30': {'1. open': '38.20', '4. close': '39.81'},
  '2002-12-30': {'1. open': '48.00', '4. close': '38.20'},
  '2001-12-30': {'1. open': '40.00', '4. close': '48.00'},
  '2000-12-30': {'1. open': '38.00', '4. close': '40.00'},
  '1999-12-30': {'1. open': '21.99', '4. close': '37.00'},
  '1998-12-30': {'1. open': '33.83', '4. close': '21.99'}
};

// tslint:disable:max-line-length
export const peugeotCompany: Company = {
  id: 1214,
  name: 'Groupe PSA S.A.',
  country: Country.Frankreich,
  city: 'Rueil-Malmaison',
  url: 'http://www.groupe-psa.com/',
  description: 'Die Groupe PSA (abgekürzt für Peugeot Société Anonyme) ist ein französischer Automobilhersteller, zu dem die Marken Citroën, DS, Opel, Peugeot und Vauxhall gehören.[3][4] Seit August 2017 ist PSA – wie schon 2007–2010 – (nach Volkswagen) gemessen an den Absatzzahlen der zweitgrößte Autobauer Europas.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Groupe_PSA',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Groupe_PSA_logo.svg/442px-Groupe_PSA_logo.svg.png',
  products: [
    {
      id: 121410,
      name: 'Peugeot',
      logo: 'https://www.groupe-psa.com/content/uploads/2017/07/brand-image-peugeot-blanc.png'
    },
    {
      id: 121411,
      name: 'Citröen',
      logo: 'https://www.groupe-psa.com/content/uploads/2018/06/brand-image-citroen-blanc.png'
    },
    {
      id: 121412,
      name: 'DS',
      logo: 'https://www.groupe-psa.com/content/uploads/2017/07/brand-image-ds-blanc.png'
    },
    {
      id: 121413,
      name: 'Opel',
      logo: 'https://www.groupe-psa.com/content/uploads/2017/07/brand-image-opel-blanc.png'
    },
    {
      id: 121414,
      name: 'Vauxhall',
      logo: 'https://www.groupe-psa.com/content/uploads/2017/07/brand-image-vauxhall-blanc.png'
    }
  ],
  industries: [121111],
  securityType: SecurityType.ActionsPort,
  currency: Currency.EUR,
  isin: 'FR0000121501',
  wkn: '852363',
  symbol: 'PEU.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.CAC40],
  end_of_month_prices: prices,
  dividends,
  tags: ['Fahrzeughersteller', 'PKWs', 'Nutzfahrzeuge', 'Peugeot', 'Citröen', 'DS']
};
// tslint:enable:max-line-length

