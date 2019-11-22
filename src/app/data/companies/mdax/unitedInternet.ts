import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.88, yield: 2.29}, {year: 2017, rate: 0.85}, {year: 2016, rate: 0.80}, {
    year: 2015,
    rate: 0.70,
    yield: 1.37
  }, {year: 2014, rate: 0.60, yield: 1.60}, {year: 2013, rate: 0.40, yield: 1.29}, {year: 2012, rate: 0.30, yield: 1.84}, {
    year: 2011,
    rate: 0.30,
    yield: 2.17
  }, {year: 2010, rate: 0.20, yield: 1.64}, {year: 2009, rate: 0.40, yield: 4.34}, {year: 2008, rate: 0.00, yield: 0.00}, {
    year: 2007,
    rate: 0.20,
    yield: 1.20
  }, {year: 2006, rate: 0.18, yield: 1.44}, {year: 2005, rate: 0.06, yield: 0.74}, {year: 2004, rate: 0.05, yield: 1.00}, {
    year: 2003,
    rate: 0.04,
    yield: 0.85
  }, {year: 2002, rate: 0.13, yield: 7.83}, {year: 2001, rate: 0.00, yield: 0.00}, {year: 2000, rate: 0.00, yield: 0.00}
];
const prices = {
  '2019-11-21': {
    '1. open': '27.1700',
    '2. high': '30.7000',
    '3. low': '26.5600',
    '4. close': '29.6900',
    '5. volume': '11283013'
  },
  '2019-10-31': {
    '1. open': '32.9300',
    '2. high': '36.7300',
    '3. low': '26.8200',
    '4. close': '27.0100',
    '5. volume': '13174975'
  },
  '2019-09-30': {
    '1. open': '29.8000',
    '2. high': '34.8500',
    '3. low': '28.7900',
    '4. close': '32.7300',
    '5. volume': '9662472'
  },
  '2019-08-30': {
    '1. open': '27.0200',
    '2. high': '30.0700',
    '3. low': '24.2100',
    '4. close': '29.8000',
    '5. volume': '11042347'
  },
  '2019-07-31': {
    '1. open': '29.5800',
    '2. high': '29.6500',
    '3. low': '25.6100',
    '4. close': '27.0700',
    '5. volume': '10497186'
  },
  '2019-06-28': {
    '1. open': '29.070',
    '2. high': '29.110',
    '3. low': '28.820',
    '4. close': '28.960',
    '5. volume': '334211'
  },
  '2019-05-31': {
    '1. open': '31.500',
    '2. high': '32.140',
    '3. low': '31.310',
    '4. close': '32.050',
    '5. volume': '334671'
  },
  '2019-04-30': {
    '1. open': '36.130',
    '2. high': '36.380',
    '3. low': '35.730',
    '4. close': '35.730',
    '5. volume': '277829'
  },
  '2019-03-29': {
    '1. open': '31.890',
    '2. high': '32.570',
    '3. low': '31.240',
    '4. close': '32.530',
    '5. volume': '716310'
  },
  '2019-02-29': {
    '1. open': '31.570',
    '2. high': '32.040',
    '3. low': '31.360',
    '4. close': '31.990',
    '5. volume': '484244'
  },
  '2019-01-31': {
    '1. open': '34.800',
    '2. high': '35.230',
    '3. low': '34.250',
    '4. close': '34.590',
    '5. volume': '799445'
  },
  '2018-12-28': {
    '1. open': '37.920',
    '2. high': '38.470',
    '3. low': '37.390',
    '4. close': '38.200',
    '5. volume': '280371'
  },
  '2018-11-30': {
    '1. open': '40.240',
    '2. high': '40.310',
    '3. low': '39.550',
    '4. close': '39.750',
    '5. volume': '639974'
  },
};

// tslint:disable:max-line-length
export const unitedInternetCompany: Company = {
  id: 1090,
  name: 'United Internet AG',
  country: Country.Deutschland,
  city: 'Montabaur',
  url: 'http://www.united-internet.de/',
  description: 'Die United Internet AG mit Sitz in Montabaur ist ein börsennotierter Internet-Provider. Das Unternehmen ist mit insgesamt 13 Marken und zahlreichen Tochtergesellschaften und Beteiligungen aktiv.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/United_Internet',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/UnitedInternet_logo.svg/500px-UnitedInternet_logo.svg.png',
  products: [
    {
      id: 109010,
      name: '1&1 Drillisch',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/Brands/1und1drillisch.svg'
    },
    {
      id: 109011,
      name: '1&1 Versatel',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/Brands/1und1-versatel.svg'
    },
    {
      id: 109012,
      name: 'GMX',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/Brands/gmx2018_black.svg'
    },
    {
      id: 109013,
      name: 'Web.de',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/Brands/logo_web.de.svg'
    },
    {
      id: 109014,
      name: 'mail.com',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/Brands/mail-punkt-com.svg'
    },
    {
      id: 109015,
      name: 'IONOS',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/Brands/IONOS_by.svg'
    },
    {
      id: 109016,
      name: 'Arsys',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/Brands/arsys.svg'
    },
    {
      id: 109017,
      name: 'fasthosts',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/Brands/fasthosts.svg'
    },
    {
      id: 109018,
      name: 'home.pl',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/Brands/home-punkt-pl.svg'
    },
    {
      id: 109019,
      name: 'InternetX',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/Brands/internetx.svg'
    },
    {
      id: 109020,
      name: 'Sedo',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/Brands/logo_sedo.svg'
    },
    {
      id: 109021,
      name: 'Strato',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/markenlogos/strato.svg'
    },
    {
      id: 109022,
      name: 'United Domains',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/Brands/united-domains.svg'
    },
    {
      id: 109023,
      name: 'World4you',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/Brands/world4you.svg'
    },
    {
      id: 109024,
      name: 'united internet media',
      logo: 'https://www.united-internet.de/fileadmin/user_upload/Brands/united-internet-media.svg'
    }
  ],
  industries: [131013, 131212, 131214, 131215],
  currency: Currency.EUR,
  isin: 'DE0005089031',
  wkn: '508903',
  symbol: 'UTDI.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX, Indices.TecDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Internet', 'Internet-Zugangsprodukte', 'Plattformen', 'Mobilfunk', 'DSL']
};
// tslint:enable:max-line-length

