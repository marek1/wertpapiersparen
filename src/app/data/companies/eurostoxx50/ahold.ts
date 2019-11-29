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
  '2019-11-28': {
    '1. open': '22.1650',
    '2. high': '24.5250',
    '3. low': '22.1650',
    '4. close': '23.7550',
    '5. volume': '52886'
  },
  '2019-10-31': {
    '1. open': '23.1850',
    '2. high': '23.2350',
    '3. low': '22.2550',
    '4. close': '22.3750',
    '5. volume': '36984'
  },
  '2019-09-30': {
    '1. open': '21.5100',
    '2. high': '23.0800',
    '3. low': '21.2950',
    '4. close': '23.0000',
    '5. volume': '47718'
  },
  '2019-08-30': {
    '1. open': '20.4150',
    '2. high': '21.5400',
    '3. low': '19.6200',
    '4. close': '21.5400',
    '5. volume': '129298'
  },
  '2019-07-31': {
    '1. open': '19.8080',
    '2. high': '20.9300',
    '3. low': '19.8080',
    '4. close': '20.6050',
    '5. volume': '171304'
  },
  '2019-06-28': {
    '1. open': '20.0250',
    '2. high': '21.0200',
    '3. low': '19.4200',
    '4. close': '19.8960',
    '5. volume': '76866'
  },
  '2019-05-31': {
    '1. open': '21.4050',
    '2. high': '21.6750',
    '3. low': '20.0000',
    '4. close': '20.3100',
    '5. volume': '74444'
  },
  '2019-04-30': {
    '1. open': '23.6450',
    '2. high': '23.6900',
    '3. low': '20.9500',
    '4. close': '20.9500',
    '5. volume': '38038'
  },
  '2019-03-29': {
    '1. open': '22.6950',
    '2. high': '23.9200',
    '3. low': '22.1700',
    '4. close': '23.2350',
    '5. volume': '54453'
  },
  '2019-02-28': {
    '1. open': '22.8850',
    '2. high': '23.5000',
    '3. low': '22.3100',
    '4. close': '22.6950',
    '5. volume': '62619'
  },
  '2019-01-31': {
    '1. open': '22.1800',
    '2. high': '23.4350',
    '3. low': '21.7500',
    '4. close': '22.7400',
    '5. volume': '65364'
  },
  '2018-12-28': {
    '1. open': '22.9400',
    '2. high': '23.0500',
    '3. low': '21.8250',
    '4. close': '22.1400',
    '5. volume': '103024'
  },
  '2018-11-30': {
    '1. open': '20.5100',
    '2. high': '23.1900',
    '3. low': '20.2700',
    '4. close': '22.7250',
    '5. volume': '148406'
  },
  '2018-10-31': {
    '1. open': '19.6920',
    '2. high': '20.4900',
    '3. low': '18.8720',
    '4. close': '20.2950',
    '5. volume': '74215'
  },
  '2018-09-28': {
    '1. open': '21.0000',
    '2. high': '21.1500',
    '3. low': '18.8860',
    '4. close': '19.5260',
    '5. volume': '84980'
  },
  '2018-08-31': {
    '1. open': '21.7350',
    '2. high': '22.0600',
    '3. low': '20.2500',
    '4. close': '20.8000',
    '5. volume': '101054'
  },
  '2018-07-31': {
    '1. open': '20.3250',
    '2. high': '21.7500',
    '3. low': '20.3250',
    '4. close': '21.7350',
    '5. volume': '40582'
  },
  '2018-06-29': {
    '1. open': '19.8060',
    '2. high': '20.6350',
    '3. low': '19.7640',
    '4. close': '20.3750',
    '5. volume': '359445'
  },
  '2018-05-31': {
    '1. open': '19.9680',
    '2. high': '19.9880',
    '3. low': '18.9860',
    '4. close': '19.8420',
    '5. volume': '99708'
  },
  '2018-04-30': {
    '1. open': '19.1900',
    '2. high': '20.0350',
    '3. low': '18.8320',
    '4. close': '20.0250',
    '5. volume': '330818'
  },
  '2018-03-29': {
    '1. open': '18.5200',
    '2. high': '19.2380',
    '3. low': '18.1720',
    '4. close': '19.2260',
    '5. volume': '100005'
  },
  '2018-02-28': {
    '1. open': '18.1220',
    '2. high': '18.5000',
    '3. low': '17.0020',
    '4. close': '18.4800',
    '5. volume': '237451'
  },
  '2018-01-31': {
    '1. open': '18.2180',
    '2. high': '18.8140',
    '3. low': '17.5640',
    '4. close': '17.9520',
    '5. volume': '196179'
  }
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

