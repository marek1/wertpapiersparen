import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {  year: 2018, rate: 0.00 }, {  year: 2017, rate: 0.00 }
];
const prices = {
  '2019-11-25': {
    '1. open': '15.7600',
    '2. high': '19.1800',
    '3. low': '14.3000',
    '4. close': '18.5600',
    '5. volume': '9033125'
  },
  '2019-10-31': {
    '1. open': '13.9000',
    '2. high': '18.3200',
    '3. low': '13.2800',
    '4. close': '15.6200',
    '5. volume': '15931844'
  },
  '2019-09-30': {
    '1. open': '11.9800',
    '2. high': '13.9800',
    '3. low': '11.2400',
    '4. close': '13.9200',
    '5. volume': '14890166'
  },
  '2019-08-30': {
    '1. open': '8.7300',
    '2. high': '12.1000',
    '3. low': '8.5100',
    '4. close': '11.8800',
    '5. volume': '11630204'
  },
  '2019-07-31': {
    '1. open': '8.4100',
    '2. high': '9.2800',
    '3. low': '8.1300',
    '4. close': '8.7100',
    '5. volume': '7019294'
  },
  '2019-06-28': {
    '1. open': '9.1500',
    '2. high': '9.2100',
    '3. low': '8.0000',
    '4. close': '8.3700',
    '5. volume': '5394539'
  },
  '2019-05-31': {
    '1. open': '8.7500',
    '2. high': '9.4000',
    '3. low': '8.2000',
    '4. close': '9.2000',
    '5. volume': '10509069'
  },
  '2019-04-30': {
    '1. open': '8.4000',
    '2. high': '9.2500',
    '3. low': '7.8800',
    '4. close': '9.0000',
    '5. volume': '2375631'
  },
  '2019-03-29': {
    '1. open': '9.5200',
    '2. high': '10.0500',
    '3. low': '8.2500',
    '4. close': '8.3800',
    '5. volume': '3231552'
  },
  '2019-02-28': {
    '1. open': '8.7200',
    '2. high': '9.5800',
    '3. low': '8.1600',
    '4. close': '9.5800',
    '5. volume': '3317418'
  },
  '2019-01-31': {
    '1. open': '6.1600',
    '2. high': '9.5900',
    '3. low': '5.8250',
    '4. close': '8.6850',
    '5. volume': '5895792'
  },
  '2018-12-28': {
    '1. open': '9.1550',
    '2. high': '9.3700',
    '3. low': '5.8250',
    '4. close': '6.1100',
    '5. volume': '4042044'
  },
  '2018-11-30': {
    '1. open': '10.6100',
    '2. high': '11.3500',
    '3. low': '8.2800',
    '4. close': '9.0500',
    '5. volume': '3185318'
  },
  '2018-10-31': {
    '1. open': '11.0600',
    '2. high': '11.2800',
    '3. low': '9.7300',
    '4. close': '10.5400',
    '5. volume': '3738755'
  },
  '2018-09-28': {
    '1. open': '12.3200',
    '2. high': '12.3200',
    '3. low': '10.0100',
    '4. close': '10.9800',
    '5. volume': '5959333'
  },
  '2018-08-31': {
    '1. open': '14.4300',
    '2. high': '14.9900',
    '3. low': '11.9100',
    '4. close': '12.2500',
    '5. volume': '5060309'
  },
  '2018-07-31': {
    '1. open': '12.9800',
    '2. high': '15.0000',
    '3. low': '12.4200',
    '4. close': '14.4500',
    '5. volume': '2118860'
  },
  '2018-06-29': {
    '1. open': '12.0200',
    '2. high': '13.5000',
    '3. low': '11.8400',
    '4. close': '13.0700',
    '5. volume': '4500097'
  },
  '2018-05-31': {
    '1. open': '11.7900',
    '2. high': '12.4900',
    '3. low': '11.1700',
    '4. close': '12.0300',
    '5. volume': '4023398'
  },
  '2018-04-30': {
    '1. open': '13.4300',
    '2. high': '14.1400',
    '3. low': '11.5500',
    '4. close': '11.7900',
    '5. volume': '2385176'
  },
  '2018-03-29': {
    '1. open': '13.4500',
    '2. high': '14.8800',
    '3. low': '11.9500',
    '4. close': '13.2800',
    '5. volume': '778763'
  },
  '2018-02-28': {
    '1. open': '12.7000',
    '2. high': '14.2200',
    '3. low': '11.8500',
    '4. close': '13.4500',
    '5. volume': '767125'
  },
  '2018-01-31': {
    '1. open': '11.6900',
    '2. high': '13.0000',
    '3. low': '11.0000',
    '4. close': '12.5000',
    '5. volume': '995137'
  },
  '2017-12-29': {
    '1. open': '9.9150',
    '2. high': '12.6700',
    '3. low': '9.4100',
    '4. close': '11.9000',
    '5. volume': '1940794'
  }
};

// tslint:disable:max-line-length
export const helloFreshCompany: Company = {
  id: 1133,
  name: 'HelloFresh SE',
  country: Country.Deutschland,
  city: 'Berlin',
  url: 'https://www.hellofresh.de/',
  description: 'HelloFresh ist ein deutsches Unternehmen mit Sitz in Berlin. Es wurde im Jahr 2011 gegründet. HelloFresh bietet sogenannte „Kochboxen“ für Verbraucher an: Pakete mit vorbereiteten Zutaten und einem Rezept, die im Abonnement erhältlich sind.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/HelloFresh',
  logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg',
  products: [
    {
      id: 113310,
      name: 'HelloFresh',
      logo: 'https://cdn.hellofresh.com/logo/HelloFresh_Logo_Horizontal_V2.svg'
    }
  ],
  industries: [2010, 101310],
  currency: Currency.EUR,
  isin: 'DE000A161408',
  wkn: 'A16140',
  symbol: 'HFG.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Lieferservice', 'Kochboxen', 'Rezepte']
};
// tslint:enable:max-line-length

