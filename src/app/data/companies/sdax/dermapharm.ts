import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.77, yield: 3.43}, {year: 2017, rate: 0.00}
];
const prices = {
  '2019-11-22': {
    '1. open': '35.0000',
    '2. high': '37.6000',
    '3. low': '34.4450',
    '4. close': '37.6000',
    '5. volume': '495741'
  },
  '2019-10-31': {
    '1. open': '36.0900',
    '2. high': '36.5250',
    '3. low': '33.5100',
    '4. close': '35.0700',
    '5. volume': '455024'
  },
  '2019-09-30': {
    '1. open': '32.1050',
    '2. high': '36.1950',
    '3. low': '31.6200',
    '4. close': '36.0900',
    '5. volume': '582676'
  },
  '2019-08-30': {
    '1. open': '30.7000',
    '2. high': '32.1950',
    '3. low': '28.5000',
    '4. close': '32.0700',
    '5. volume': '279348'
  },
  '2019-07-31': {
    '1. open': '31.0000',
    '2. high': '32.8650',
    '3. low': '30.1000',
    '4. close': '30.7000',
    '5. volume': '307591'
  },
  '2019-06-28': {
    '1. open': '31.0500',
    '2. high': '33.1000',
    '3. low': '29.6000',
    '4. close': '30.3000',
    '5. volume': '457237'
  },
  '2019-05-31': {
    '1. open': '32.4500',
    '2. high': '34.2500',
    '3. low': '31.0000',
    '4. close': '31.3500',
    '5. volume': '496463'
  },
  '2019-04-30': {
    '1. open': '28.3000',
    '2. high': '32.9000',
    '3. low': '28.0000',
    '4. close': '32.4000',
    '5. volume': '437275'
  },
  '2019-03-29': {
    '1. open': '27.8200',
    '2. high': '30.2750',
    '3. low': '26.9850',
    '4. close': '28.1950',
    '5. volume': '632914'
  },
  '2019-02-28': {
    '1. open': '26.6850',
    '2. high': '29.1800',
    '3. low': '26.1300',
    '4. close': '27.5500',
    '5. volume': '277256'
  },
  '2019-01-31': {
    '1. open': '22.9950',
    '2. high': '26.6850',
    '3. low': '22.0000',
    '4. close': '26.6850',
    '5. volume': '342188'
  },
  '2018-12-28': {
    '1. open': '24.5500',
    '2. high': '25.9200',
    '3. low': '21.5750',
    '4. close': '22.7000',
    '5. volume': '295496'
  },
  '2018-11-30': {
    '1. open': '25.4450',
    '2. high': '27.5200',
    '3. low': '22.2700',
    '4. close': '24.3400',
    '5. volume': '250217'
  },
  '2018-10-31': {
    '1. open': '29.0250',
    '2. high': '30.4500',
    '3. low': '25.1000',
    '4. close': '25.1650',
    '5. volume': '380287'
  },
  '2018-09-28': {
    '1. open': '28.6500',
    '2. high': '29.8150',
    '3. low': '27.3450',
    '4. close': '28.9500',
    '5. volume': '198760'
  },
  '2018-08-31': {
    '1. open': '27.6800',
    '2. high': '29.6500',
    '3. low': '27.3350',
    '4. close': '28.8000',
    '5. volume': '190374'
  },
  '2018-07-31': {
    '1. open': '27.9950',
    '2. high': '29.2800',
    '3. low': '27.3950',
    '4. close': '28.0000',
    '5. volume': '191712'
  },
  '2018-06-29': {
    '1. open': '28.2200',
    '2. high': '28.7000',
    '3. low': '25.8000',
    '4. close': '27.9000',
    '5. volume': '342753'
  },
  '2018-05-31': {
    '1. open': '27.5000',
    '2. high': '28.4100',
    '3. low': '25.5750',
    '4. close': '28.2000',
    '5. volume': '463055'
  }
};

// tslint:disable:max-line-length
export const dermapharmCompany: Company = {
  id: 1121,
  name: 'Dermapharm Holding SE',
  country: Country.Deutschland,
  city: 'Grünwald',
  url: 'http://www.dermapharm.de/',
  description: 'Die Dermapharm Holding SE mit Sitz in Grünwald ist ein börsennotiertes deutsches Pharmaunternehmen, das sich auf die Herstellung und den Vertrieb von dermatologischen und allergologischen Präparaten spezialisiert hat.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Dermapharm',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/4/4d/Dermapharm_logo.svg/500px-Dermapharm_logo.svg.png',
  products: [
    {
      id: 112110,
      name: 'Aescusan®'
    },
    {
      id: 112111,
      name: 'Alpha Sanum®'
    },
    {
      id: 112112,
      name: 'Amorocutan® Nagellack'
    },
    {
      id: 112113,
      name: 'Azedil®'
    },
    {
      id: 112114,
      name: 'Bifon®'
    },
    {
      id: 112115,
      name: 'Bite away®'
    },
    {
      id: 112116,
      name: 'Calcilac®'
    },
    {
      id: 112117,
      name: 'Ciclocutan®'
    },
    {
      id: 112118,
      name: 'Cloderm®'
    },
    {
      id: 112119,
      name: 'Cutano®'
    },
    {
      id: 112120,
      name: 'Deacura®'
    },
    {
      id: 112121,
      name: 'Dekristol®'
    },
    {
      id: 112122,
      name: 'Dermapharm®'
    },
    {
      id: 112123,
      name: 'Herpotherm®'
    },
    {
      id: 112124,
      name: 'Hydraplex®'
    },
    {
      id: 112125,
      name: 'Hydrocutan®'
    },
    {
      id: 112126,
      name: 'Ketozolin®'
    },
    {
      id: 112127,
      name: 'Lactofem®'
    },
    {
      id: 112128,
      name: 'Magnesium 100 mg JENAPHARM®'
    },
    {
      id: 112129,
      name: 'Micotar®'
    },
    {
      id: 112130,
      name: 'Minoxicutan®'
    },
    {
      id: 112131,
      name: 'Momekort®'
    },
    {
      id: 112132,
      name: 'Moronal®'
    },
    {
      id: 112133,
      name: 'Mykofungin®'
    },
    {
      id: 112134,
      name: 'Nystaderm®'
    },
    {
      id: 112135,
      name: 'Physiotop®'
    },
    {
      id: 112136,
      name: 'Polysept®'
    },
    {
      id: 112137,
      name: 'Rhinivict®'
    },
    {
      id: 112138,
      name: 'Rivanol®'
    },
    {
      id: 112139,
      name: 'Terbiderm®'
    },
    {
      id: 112140,
      name: 'Ureotop®'
    },
    {
      id: 112141,
      name: 'VITA aktiv B12'
    },
    {
      id: 112142,
      name: 'Vitamin B duo'
    },
    {
      id: 112143,
      name: 'Vitamin B12 1000 µg inject JENAPHARM®'
    }
  ],
  industries: [1610],
  currency: Currency.EUR,
  isin: 'DE000A2GS5D8',
  wkn: 'A2GS5D',
  symbol: 'DMP.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Markenarzneimittel', 'patentfrei']
};
// tslint:enable:max-line-length

