import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {year: 2018, rate: 0.65, yield: 1.64}, {year: 2017, rate: 0.56}, {
    year: 2016,
    rate: 0.30
  }, {year: 2015, rate: 0.00, yield: 0.00}
];
const prices = {
  '2019-11-20': {
    '1. open': '55.5000',
    '2. high': '55.9000',
    '3. low': '51.0000',
    '4. close': '52.4000',
    '5. volume': '3370201'
  },
  '2019-10-31': {
    '1. open': '52.4500',
    '2. high': '55.8500',
    '3. low': '51.6000',
    '4. close': '55.4500',
    '5. volume': '4444668'
  },
  '2019-09-30': {
    '1. open': '53.7500',
    '2. high': '54.0000',
    '3. low': '48.9600',
    '4. close': '52.3000',
    '5. volume': '6785442'
  },
  '2019-08-30': {
    '1. open': '49.9000',
    '2. high': '53.9500',
    '3. low': '49.8800',
    '4. close': '53.8000',
    '5. volume': '5281924'
  },
  '2019-07-31': {
    '1. open': '47.0000',
    '2. high': '50.3500',
    '3. low': '46.8400',
    '4. close': '50.2500',
    '5. volume': '4601002'
  },
  '2019-06-28': {
    '1. open': '45.4800',
    '2. high': '46.9200',
    '3. low': '43.8800',
    '4. close': '46.7200',
    '5. volume': '4860378'
  },
  '2019-05-31': {
    '1. open': '45.9000',
    '2. high': '46.3600',
    '3. low': '42.0000',
    '4. close': '44.4600',
    '5. volume': '10306670'
  },
  '2019-04-30': {
    '1. open': '46.4800',
    '2. high': '46.4800',
    '3. low': '45.8200',
    '4. close': '45.9000',
    '5. volume': '6194401'
  },
  '2019-03-29': {
    '1. open': '46.2000',
    '2. high': '46.4000',
    '3. low': '45.9400',
    '4. close': '46.1600',
    '5. volume': '8222639'
  },
  '2019-02-28': {
    '1. open': '40.8400',
    '2. high': '46.8600',
    '3. low': '40.1400',
    '4. close': '46.3000',
    '5. volume': '10164028'
  },
  '2019-01-31': {
    '1. open': '41.5000',
    '2. high': '42.9000',
    '3. low': '38.2800',
    '4. close': '40.9800',
    '5. volume': '7286833'
  },
  '2018-12-28': {
    '1. open': '37.5800',
    '2. high': '42.8800',
    '3. low': '35.8600',
    '4. close': '40.1600',
    '5. volume': '5948566'
  },
  '2018-11-30': {
    '1. open': '36.8000',
    '2. high': '38.3000',
    '3. low': '34.1800',
    '4. close': '36.8000',
    '5. volume': '5546480'
  },
  '2018-10-31': {
    '1. open': '40.1600',
    '2. high': '40.3600',
    '3. low': '33.2200',
    '4. close': '36.6600',
    '5. volume': '7408148'
  },
  '2018-09-28': {
    '1. open': '45.3600',
    '2. high': '45.7800',
    '3. low': '40.1600',
    '4. close': '40.1600',
    '5. volume': '5770020'
  },
  '2018-08-31': {
    '1. open': '44.5800',
    '2. high': '46.4400',
    '3. low': '41.6000',
    '4. close': '44.5600',
    '5. volume': '4418548'
  },
  '2018-07-31': {
    '1. open': '45.0600',
    '2. high': '48.6200',
    '3. low': '43.6000',
    '4. close': '44.5000',
    '5. volume': '4751511'
  },
  '2018-06-29': {
    '1. open': '43.7600',
    '2. high': '46.7400',
    '3. low': '43.5800',
    '4. close': '45.4400',
    '5. volume': '6878870'
  },
  '2018-05-31': {
    '1. open': '43.2200',
    '2. high': '44.6000',
    '3. low': '42.0200',
    '4. close': '43.8600',
    '5. volume': '4008031'
  },
  '2018-04-30': {
    '1. open': '37.6000',
    '2. high': '43.4200',
    '3. low': '37.1200',
    '4. close': '42.9400',
    '5. volume': '3479752'
  },
  '2018-03-29': {
    '1. open': '36.0800',
    '2. high': '37.8600',
    '3. low': '34.6600',
    '4. close': '37.8400',
    '5. volume': '7470240'
  },
  '2018-02-28': {
    '1. open': '37.5400',
    '2. high': '37.6000',
    '3. low': '34.4800',
    '4. close': '36.2600',
    '5. volume': '4707649'
  },
  '2018-01-31': {
    '1. open': '33.8800',
    '2. high': '37.8400',
    '3. low': '33.6200',
    '4. close': '37.2800',
    '5. volume': '3078226'
  },
  '2017-12-29': {
    '1. open': '35.3650',
    '2. high': '35.4100',
    '3. low': '33.2000',
    '4. close': '34.0500',
    '5. volume': '3105348'
  },
  '2017-11-30': {
    '1. open': '34.6950',
    '2. high': '36.2150',
    '3. low': '32.9250',
    '4. close': '35.3600',
    '5. volume': '5777351'
  },
  '2017-10-31': {
    '1. open': '34.6950',
    '2. high': '35.8000',
    '3. low': '33.6200',
    '4. close': '34.3600',
    '5. volume': '2935013'
  },
  '2017-09-29': {
    '1. open': '34.0100',
    '2. high': '35.3450',
    '3. low': '33.7200',
    '4. close': '34.6000',
    '5. volume': '2238091'
  },
  '2017-08-31': {
    '1. open': '32.3250',
    '2. high': '34.9800',
    '3. low': '29.8850',
    '4. close': '33.8250',
    '5. volume': '2847001'
  },
  '2017-07-31': {
    '1. open': '32.1550',
    '2. high': '33.9500',
    '3. low': '31.6550',
    '4. close': '32.2000',
    '5. volume': '1976692'
  },
  '2017-06-30': {
    '1. open': '34.1650',
    '2. high': '34.8800',
    '3. low': '31.5050',
    '4. close': '32.2450',
    '5. volume': '3258480'
  },
  '2017-05-31': {
    '1. open': '31.5400',
    '2. high': '34.4750',
    '3. low': '31.2600',
    '4. close': '34.0500',
    '5. volume': '2077690'
  },
  '2017-04-28': {
    '1. open': '31.3700',
    '2. high': '32.9600',
    '3. low': '30.5150',
    '4. close': '31.5000',
    '5. volume': '1536419'
  },
  '2017-03-31': {
    '1. open': '33.4500',
    '2. high': '33.9000',
    '3. low': '29.8050',
    '4. close': '31.3500',
    '5. volume': '2931075'
  },
  '2017-02-28': {
    '1. open': '33.0000',
    '2. high': '33.7100',
    '3. low': '31.4300',
    '4. close': '33.2900',
    '5. volume': '1324172'
  },
  '2017-01-31': {
    '1. open': '33.9650',
    '2. high': '35.5000',
    '3. low': '32.8150',
    '4. close': '33.0050',
    '5. volume': '1184553'
  },
  '2016-12-30': {
    '1. open': '33.9200',
    '2. high': '34.9050',
    '3. low': '31.8400',
    '4. close': '33.8250',
    '5. volume': '1590014'
  },
  '2016-11-30': {
    '1. open': '31.6750',
    '2. high': '35.3250',
    '3. low': '28.3850',
    '4. close': '33.9500',
    '5. volume': '1208197'
  },
  '2016-10-31': {
    '1. open': '29.8000',
    '2. high': '32.4000',
    '3. low': '29.2400',
    '4. close': '31.4100',
    '5. volume': '1438213'
  },
  '2016-09-30': {
    '1. open': '33.2750',
    '2. high': '34.1200',
    '3. low': '29.2500',
    '4. close': '30.0000',
    '5. volume': '1036611'
  },
  '2016-08-31': {
    '1. open': '37.2500',
    '2. high': '41.0000',
    '3. low': '32.9200',
    '4. close': '33.4500',
    '5. volume': '638773'
  },
  '2016-07-29': {
    '1. open': '34.4050',
    '2. high': '37.5950',
    '3. low': '32.3350',
    '4. close': '36.8000',
    '5. volume': '532211'
  },
  '2016-06-30': {
    '1. open': '34.5300',
    '2. high': '38.2350',
    '3. low': '32.4200',
    '4. close': '33.3550',
    '5. volume': '722418'
  },
  '2016-05-31': {
    '1. open': '32.4500',
    '2. high': '36.8000',
    '3. low': '31.5000',
    '4. close': '34.1950',
    '5. volume': '350748'
  },
  '2016-04-29': {
    '1. open': '30.6550',
    '2. high': '33.1650',
    '3. low': '29.4000',
    '4. close': '32.0150',
    '5. volume': '554844'
  },
  '2016-03-31': {
    '1. open': '31.4500',
    '2. high': '32.4450',
    '3. low': '29.5700',
    '4. close': '30.5000',
    '5. volume': '267944'
  },
  '2016-02-29': {
    '1. open': '30.8450',
    '2. high': '31.3450',
    '3. low': '24.1050',
    '4. close': '31.1000',
    '5. volume': '470698'
  },
  '2016-01-29': {
    '1. open': '33.3850',
    '2. high': '34.2500',
    '3. low': '29.1950',
    '4. close': '30.5000',
    '5. volume': '438160'
  },
  '2015-12-30': {
    '1. open': '29.8050',
    '2. high': '33.2700',
    '3. low': '29.4000',
    '4. close': '32.9250',
    '5. volume': '410432'
  },
  '2015-11-30': {
    '1. open': '30.5800',
    '2. high': '31.5000',
    '3. low': '29.2800',
    '4. close': '30.1400',
    '5. volume': '331371'
  }
};

// tslint:disable:max-line-length
export const scout24Company: Company = {
  id: 1081,
  name: 'Scout24 AG',
  country: Country.Deutschland,
  city: 'München',
  url: 'http://www.scout24.com/',
  description: 'Scout24 mit Sitz in München betreibt europaweit verschiedene Online-Marktplätze in mehreren Branchen. Zu den größten Online-Plattformen des Unternehmens zählen ImmobilienScout24 und AutoScout24. Die Scout24-Gruppe ist in 18 Ländern aktiv und stellt ihre Angebote und Dienstleistungen alleine in Deutschland monatlich fast 20 Millionen Unique Usern zur Verfügung.[4] Scout24 beschäftigt insgesamt in der Gruppe 1.552 Mitarbeiter.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Scout24_AG',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Scout24_Holding_logo.svg/500px-Scout24_Holding_logo.svg.png',
  products: [
    {
      id: 108110,
      name: 'Immobilienscout 24',
      logo: 'https://www.scout24.com/ResourceImage.aspx?raid=1129778'
    },
    {
      id: 108111,
      name: 'AutoScout 24',
      logo: 'https://www.scout24.com/ResourceImage.aspx?raid=1129779',
    },
    {
      id: 108112,
      name: 'FinanceScout 24',
      logo: 'https://www.scout24.com/ResourceImage.aspx?raid=1129780',
    },
    {
      id: 108113,
      name: 'Scout24 Media',
      logo: 'https://www.scout24.com/ResourceImage.aspx?raid=1130634',
    }
  ],
  industries: [131210],
  securityType: SecurityType.Namensaktie,
  currency: Currency.EUR,
  isin: 'DE000A12DM80',
  wkn: 'A12DM8',
  symbol: 'G24.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Anzeigenplattformen', 'Onlineplattformen', 'Internetplattformen']
};
// tslint:enable:max-line-length

