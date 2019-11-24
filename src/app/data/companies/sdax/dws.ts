import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 1.37, yield: 5.83}
];
const prices = {
  '2019-11-22': {
    '1. open': '29.0250',
    '2. high': '31.7400',
    '3. low': '29.0000',
    '4. close': '31.0000',
    '5. volume': '1039774'
  },
  '2019-10-31': {
    '1. open': '26.9950',
    '2. high': '30.1800',
    '3. low': '26.1250',
    '4. close': '29.0000',
    '5. volume': '1853561'
  },
  '2019-09-30': {
    '1. open': '26.5050',
    '2. high': '28.4600',
    '3. low': '25.3900',
    '4. close': '27.1200',
    '5. volume': '1501376'
  },
  '2019-08-30': {
    '1. open': '30.0050',
    '2. high': '30.6850',
    '3. low': '25.6900',
    '4. close': '26.2750',
    '5. volume': '965320'
  },
  '2019-07-31': {
    '1. open': '30.7800',
    '2. high': '32.0000',
    '3. low': '30.0000',
    '4. close': '30.2850',
    '5. volume': '1128109'
  },
  '2019-06-28': {
    '1. open': '29.7000',
    '2. high': '31.2000',
    '3. low': '28.9000',
    '4. close': '30.7800',
    '5. volume': '1237257'
  },
  '2019-05-31': {
    '1. open': '33.0000',
    '2. high': '34.1800',
    '3. low': '28.5800',
    '4. close': '29.5000',
    '5. volume': '3155163'
  },
  '2019-04-30': {
    '1. open': '31.1200',
    '2. high': '33.3200',
    '3. low': '30.6600',
    '4. close': '32.7600',
    '5. volume': '1698105'
  },
  '2019-03-29': {
    '1. open': '26.1900',
    '2. high': '31.8000',
    '3. low': '25.6850',
    '4. close': '31.0000',
    '5. volume': '2412489'
  },
  '2019-02-28': {
    '1. open': '22.6200',
    '2. high': '26.0950',
    '3. low': '22.6200',
    '4. close': '26.0950',
    '5. volume': '1033900'
  },
  '2019-01-31': {
    '1. open': '23.5400',
    '2. high': '24.2300',
    '3. low': '22.3150',
    '4. close': '23.4850',
    '5. volume': '1579930'
  },
  '2018-12-28': {
    '1. open': '25.2550',
    '2. high': '25.9050',
    '3. low': '22.7000',
    '4. close': '23.3700',
    '5. volume': '1329329'
  },
  '2018-11-30': {
    '1. open': '24.7050',
    '2. high': '26.3050',
    '3. low': '23.5150',
    '4. close': '24.9700',
    '5. volume': '2483603'
  },
  '2018-10-31': {
    '1. open': '23.6200',
    '2. high': '25.8500',
    '3. low': '22.7000',
    '4. close': '24.6700',
    '5. volume': '1971008'
  },
  '2018-09-28': {
    '1. open': '26.3050',
    '2. high': '26.3200',
    '3. low': '23.2450',
    '4. close': '23.8000',
    '5. volume': '2867318'
  },
  '2018-08-31': {
    '1. open': '27.3850',
    '2. high': '27.3950',
    '3. low': '25.2500',
    '4. close': '26.1350',
    '5. volume': '1196888'
  },
  '2018-07-31': {
    '1. open': '25.6050',
    '2. high': '29.7250',
    '3. low': '25.6000',
    '4. close': '27.1400',
    '5. volume': '1575105'
  },
  '2018-06-29': {
    '1. open': '27.5150',
    '2. high': '29.0700',
    '3. low': '25.1800',
    '4. close': '25.7850',
    '5. volume': '1513967'
  },
  '2018-05-31': {
    '1. open': '30.4050',
    '2. high': '32.2900',
    '3. low': '27.2150',
    '4. close': '27.3000',
    '5. volume': '1038823'
  },
  '2018-04-30': {
    '1. open': '31.4550',
    '2. high': '32.0850',
    '3. low': '29.1600',
    '4. close': '30.3550',
    '5. volume': '3410700'
  }
};

// tslint:disable:max-line-length
export const dwsGroupCompany: Company = {
  id: 1128,
  name: 'DWS Group GmbH & Co. KGaA',
  country: Country.Deutschland,
  city: 'Frankfurt / Main',
  url: 'http://www.dws.com/',
  description: 'Die DWS Group GmbH & Co. KGaA (DWS) ist ein deutscher Vermögensverwalter mit Sitz in Frankfurt am Main. Das Unternehmen verwaltet knapp 750 Mrd. Euro, wurde 1956 gegründet und gehörte von 2004 bis zu seinem Börsengang voll zur Deutschen Bank. Seit dem 23. März 2018 ist die DWS Group an der Frankfurter Wertpapierbörse notiert und wurde im Juni 2018 in den SDAX aufgenommen.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/DWS_(Unternehmen)',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DWS_Logo_Global_Screen_Grey_sRGB.png/500px-DWS_Logo_Global_Screen_Grey_sRGB.png',
  products: [
    {
      id: 112810,
      name: 'DWS Fond'
    },
    {
      id: 112811,
      name: 'xtrackers'
    }
  ],
  industries: [141012],
  currency: Currency.EUR,
  isin: 'DE000DWS1007',
  wkn: 'DWS100',
  symbol: 'DWS.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Vermögensverwalter', 'Publikumsfonds', 'ETF', 'ETC', 'Fonds', 'Privatanleger']
};
// tslint:enable:max-line-length

