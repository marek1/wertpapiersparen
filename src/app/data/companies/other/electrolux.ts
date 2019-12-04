import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';

const dividends = [
  {year: 2018, rate: 8.50, yield: 4.55}, {year: 2017, rate: 8.30}, {year: 2016, rate: 7.50}, {
    year: 2015,
    rate: 6.50,
    yield: 3.15
  }, {year: 2014, rate: 6.50, yield: 2.84}, {year: 2013, rate: 6.50, yield: 3.86}, {year: 2012, rate: 6.50, yield: 3.81}, {
    year: 2011,
    rate: 6.50,
    yield: 5.93
  }, {year: 2010, rate: 6.50, yield: 3.40}, {year: 2009, rate: 4.00, yield: 2.39}, {year: 2008, rate: 0.00, yield: 0.00}, {
    year: 2007,
    rate: 4.25,
    yield: 3.92
  }
];
const prices = {
  '2019-12-30': {'1. open': '18.06', '4. close': '22.67'},
  '2018-12-30': {'1. open': '26.74', '4. close': '18.24'},
  '2017-12-30': {'1. open': '23.60', '4. close': '27.06'},
  '2016-12-30': {'1. open': '22.44', '4. close': '23.60'},
  '2015-12-30': {'1. open': '24.25', '4. close': '22.46'},
  '2014-12-30': {'1. open': '18.98', '4. close': '24.23'},
  '2013-12-30': {'1. open': '19.64', '4. close': '18.84'},
  '2012-12-30': {'1. open': '12.25', '4. close': '19.83'},
  '2011-12-30': {'1. open': '21.27', '4. close': '12.03'},
  '2010-12-30': {'1. open': '16.35', '4. close': '21.20'},
  '2009-12-30': {'1. open': '6.05', '4. close': '16.35'},
  '2008-12-30': {'1. open': '11.24', '4. close': '6.05'},
  '2007-12-30': {'1. open': '14.61', '4. close': '11.24'},
  '2006-12-30': {'1. open': '10.81', '4. close': '14.61'},
  '2005-12-30': {'1. open': '8.30', '4. close': '11.00'},
  '2004-12-30': {'1. open': '8.65', '4. close': '8.50'},
  '2003-12-30': {'1. open': '7.50', '4. close': '8.65'},
  '2002-12-30': {'1. open': '8.30', '4. close': '7.50'},
  '2001-12-30': {'1. open': '7.00', '4. close': '8.30'},
  '2000-12-30': {'1. open': '12.50', '4. close': '7.00'},
  '1999-12-30': {'1. open': '7.49', '4. close': '12.50'},
  '1998-12-30': {'1. open': '6.29', '4. close': '7.49'},
  '1997-12-30': {'1. open': '4.55', '4. close': '6.29'},
  '1996-12-30': {'1. open': '3.04', '4. close': '4.55'},
  '1995-12-30': {'1. open': '3.99', '4. close': '3.04'},
  '1994-12-30': {'1. open': '3.07', '4. close': '3.99'},
  '1993-12-30': {'1. open': '2.86', '4. close': '3.12'},
  '1992-12-30': {'1. open': '3.07', '4. close': '2.86'}
};

// tslint:disable:max-line-length
export const electroluxCompany: Company = {
  id: 1225,
  name: 'Electrolux AB',
  country: Country.Schweden,
  city: 'Stockholm',
  url: 'http://www.electrolux.com/',
  description: 'Electrolux AB ist ein schwedischer Konzern im Bereich der Küchengeräte für Haushalt und Gewerbe mit Sitz in Stockholm. Er gehört zur Unternehmensgruppe Wallenberg.[3] Das Unternehmen hatte 2011 einen Umsatz von rund 102 Milliarden Schwedischer Kronen[2] und beschäftigte etwa 53.000 Mitarbeiter.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Electrolux',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/6/6a/Electrolux_201x_logo.svg/500px-Electrolux_201x_logo.svg.png',
  products: [
    {
      id: 122510,
      name: 'AEG',
      logo: 'https://brandlicensing.electrolux.com/link/9533e258992d4e1195fad0066c545d57.aspx?id=2022&epslanguage=en',
      segment: 111212
    },
    {
      id: 122511,
      name: 'Electrolux',
      logo: 'https://brandlicensing.electrolux.com/link/86903b48c8af489aa851f8031aeef67b.aspx?id=1132&epslanguage=en',
      segment: 111212
    },
    {
      id: 122512,
      name: 'Zanussi',
      logo: 'https://brandlicensing.electrolux.com/link/3a2a8e876687466fa42b45e84d8f1940.aspx?id=737&epslanguage=en',
      segment: 111212
    },
    {
      id: 122513,
      name: 'Frigidaire',
      logo: 'https://brandlicensing.electrolux.com/link/045a438a2b82449aa2c044c1c8a830d5.aspx?id=656&epslanguage=en',
      segment: 111212
    },
    {
      id: 122514,
      name: 'Gibson',
      logo: 'https://brandlicensing.electrolux.com/link/57147194f7b542488e8a49744639aa49.aspx?id=78&epslanguage=en',
      segment: 111212
    },
    {
      id: 122515,
      name: 'Kelvinator',
      logo: 'https://brandlicensing.electrolux.com/link/e15ad15d70fb43d29383adea7a252bf7.aspx?id=412&epslanguage=en',
      segment: 111212
    },
    {
      id: 122516,
      name: 'Tappan',
      logo: 'https://brandlicensing.electrolux.com/link/6e1bd085aa7342a7ab3975cb0e3615a4.aspx?id=96&epslanguage=en',
      segment: 111212
    }
  ],
  industries: [111212],
  securityType: SecurityType.NamnAktierB,
  currency: Currency.EUR,
  isin: 'SE0000103814',
  wkn: '853138',
  symbol: '',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [],
  end_of_month_prices: prices,
  dividends,
  tags: ['Elektrogeräte', 'Haushaltsgeräte']
};
// tslint:enable:max-line-length

