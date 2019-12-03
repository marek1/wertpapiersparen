import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.70, yield: 3.18}, {year: 2017, rate: 0.63}, {year: 2016, rate: 0.57}, {
    year: 2015,
    rate: 0.52,
    yield: 2.67
  }, {year: 2014, rate: 0.48, yield: 3.25}, {year: 2013, rate: 0.47, yield: 3.60}, {year: 2012, rate: 0.44, yield: 4.34}, {
    year: 2011,
    rate: 0.40,
    yield: 3.85
  }, {year: 2010, rate: 0.29, yield: 2.94}, {year: 2009, rate: 0.23, yield: 2.48}, {year: 2008, rate: 0.18, yield: 2.05}, {
    year: 2007,
    rate: 0.16,
    yield: 1.69
  }, {year: 2006, rate: 0.00, yield: 0.00}, {year: 2005, rate: 0.00, yield: 0.00}, {year: 2004, rate: 0.00, yield: 0.00}, {
    year: 2003,
    rate: 0.00,
    yield: 0.00
  }, {year: 2002, rate: 0.22, yield: 1.89}, {year: 2001, rate: 0.73, yield: 2.23}, {year: 2000, rate: 0.63, yield: 1.83}
];
const prices = {
  '2019-12-30': {'1. open': '22.24', '4. close': '23.01'},
  '2018-12-30': {'1. open': '18.40', '4. close': '22.01'},
  '2017-12-30': {'1. open': '19.93', '4. close': '18.38'},
  '2016-12-30': {'1. open': '20.73', '4. close': '19.81'},
  '2015-12-30': {'1. open': '15.67', '4. close': '21.25'},
  '2014-12-30': {'1. open': '15.09', '4. close': '15.54'},
  '2013-12-30': {'1. open': '11.49', '4. close': '15.11'},
  '2012-12-30': {'1. open': '11.94', '4. close': '11.70'},
  '2011-12-30': {'1. open': '11.42', '4. close': '11.94'},
  '2010-12-30': {'1. open': '10.66', '4. close': '11.43'},
  '2009-12-30': {'1. open': '10.05', '4. close': '10.66'},
  '2008-12-30': {'1. open': '10.91', '4. close': '10.05'},
  '2007-12-30': {'1. open': '9.36', '4. close': '10.91'},
  '2006-12-30': {'1. open': '7.31', '4. close': '9.36'},
  '2005-12-30': {'1. open': '6.94', '4. close': '7.34'},
  '2004-12-30': {'1. open': '6.84', '4. close': '6.50'},
  '2003-12-30': {'1. open': '13.70', '4. close': '6.84'},
  '2002-12-30': {'1. open': '37.41', '4. close': '13.70'},
  '2001-12-30': {'1. open': '39.60', '4. close': '37.41'},
  '2000-12-30': {'1. open': '32.78', '4. close': '39.60'},
  '1999-12-30': {'1. open': '34.44', '4. close': '32.95'},
  '1998-12-30': {'1. open': '25.28', '4. close': '34.44'},
  '1997-12-30': {'1. open': '17.58', '4. close': '25.28'},
  '1996-12-30': {'1. open': '16.33', '4. close': '17.58'}
};

// tslint:disable:max-line-length
export const aholdCompany: Company = {
  id: 1171,
  name: 'Koninklijke Ahold NV',
  country: Country.Niederlande,
  city: 'Amsterdam',
  url: 'http://www.ahold.com/',
  description: 'Die Koninklijke Ahold NV (deutsch: Königliche Ahold) ist ein niederländischer Konzern mit Sitz in Amsterdam. Er ist einer der weltweit größten Betreiber von Supermarktketten und beschäftigte 2014 227.000 Mitarbeiter.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Ahold',
  link_stockPrices: 'https://www.boerse.de/historische-kurse/Ahold-Delhaize-Aktie/NL0011794037?',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Ahold_Logo.svg/500px-Ahold_Logo.svg.png',
  products: [
    {
      id: 117110,
      name: 'Food Lion',
      logo: 'https://www.aholddelhaize.com/media/6306/food-lion.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572510000000'
    },
    {
      id: 117111,
      name: 'Giant Martins',
      logo: 'https://www.aholddelhaize.com/media/8747/giantmartins.png?anchor=center&mode=crop&width=230&height=100&rnd=131947111690000000'
    },
    {
      id: 117112,
      name: 'Giant',
      logo: 'https://www.aholddelhaize.com/media/8596/giant-food-logo.png?anchor=center&mode=crop&width=230&height=100&rnd=131925523060000000'
    },
    {
      id: 117113,
      name: 'Hanna Ford',
      logo: 'https://www.aholddelhaize.com/media/6280/hannaford.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572490000000'
    },
    {
      id: 117114,
      name: 'Peapod',
      logo: 'https://www.aholddelhaize.com/media/6295/peapod.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572500000000'
    },
    {
      id: 117115,
      name: 'Stop&Shop',
      logo: 'https://www.aholddelhaize.com/media/8369/stopshop-logo2.png?anchor=center&mode=crop&width=230&height=100&rnd=131879810420000000'
    },
    {
      id: 117116,
      name: 'Delhaize',
      logo: 'https://www.aholddelhaize.com/media/6309/delhaize.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572510000000'
    },
    {
      id: 117117,
      name: 'Albert Heijn',
      logo: 'https://www.aholddelhaize.com/media/6305/albert-heijn.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572510000000'
    },
    {
      id: 117118,
      name: 'bol.com',
      logo: 'https://www.aholddelhaize.com/media/9493/bolcom_logo_pay-off_blauw_rgb.jpg?anchor=center&mode=crop&width=230&height=100&rnd=132048952190000000'
    },
    {
      id: 117119,
      name: 'Etos',
      logo: 'https://www.aholddelhaize.com/media/6277/etos.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572480000000'
    },
    {
      id: 117120,
      name: 'Gall & Gall',
      logo: 'https://www.aholddelhaize.com/media/6278/gall-and-gall.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572480000000'
    },
    {
      id: 117121,
      name: 'albert',
      logo: 'https://www.aholddelhaize.com/media/6304/allbert.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572510000000'
    },
    {
      id: 117122,
      name: 'Alfa-Beta',
      logo: 'https://www.aholddelhaize.com/media/6284/alfa-beta-greece.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572490000000'
    },
    {
      id: 117123,
      name: 'Ena Food',
      logo: 'https://www.aholddelhaize.com/media/6290/ena-food.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572490000000'
    },
    {
      id: 117124,
      name: 'Maxi',
      logo: 'https://www.aholddelhaize.com/media/6282/ad-maxi.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572490000000'
    },
    {
      id: 117125,
      name: 'Tempo',
      logo: 'https://www.aholddelhaize.com/media/6303/tempo.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572510000000'
    },
    {
      id: 117126,
      name: 'Mega Image',
      logo: 'https://www.aholddelhaize.com/media/6303/tempo.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572510000000'
    },
    {
      id: 117127,
      name: 'Pingo doce',
      logo: 'https://www.aholddelhaize.com/media/6298/pingo-doce.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572500000000'
    },
    {
      id: 117128,
      name: 'Super indo',
      logo: 'https://www.aholddelhaize.com/media/6302/ad-super-indo.png?anchor=center&mode=crop&width=230&height=100&rnd=131638572510000000'
    }
  ],
  industries: [2010],
  securityType: SecurityType.AandelenAanToonder,
  currency: Currency.EUR,
  isin: 'NL0011794037',
  wkn: 'A2ANT0',
  symbol: 'AHOG.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50],
  end_of_month_prices: prices,
  dividends,
  tags: ['Einzelhandelskonzern', 'Einzelhandelsläden']
};
// tslint:enable:max-line-length

