import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.00}, {year: 2017, rate: 0.00}, {year: 2016, rate: 0.00}
];
const prices = {
  '2019-11-27': {
    '1. open': '39.1500',
    '2. high': '39.1500',
    '3. low': '35.9000',
    '4. close': '37.1000',
    '5. volume': '273919'
  },
  '2019-10-31': {
    '1. open': '36.0000',
    '2. high': '39.6500',
    '3. low': '34.3500',
    '4. close': '39.1000',
    '5. volume': '420938'
  },
  '2019-09-30': {
    '1. open': '29.5000',
    '2. high': '36.0500',
    '3. low': '29.0500',
    '4. close': '35.6500',
    '5. volume': '288187'
  },
  '2019-08-30': {
    '1. open': '35.7000',
    '2. high': '36.8000',
    '3. low': '28.3000',
    '4. close': '29.7000',
    '5. volume': '360757'
  },
  '2019-07-31': {
    '1. open': '34.9000',
    '2. high': '36.9000',
    '3. low': '33.3000',
    '4. close': '35.5000',
    '5. volume': '302784'
  },
  '2019-06-28': {
    '1. open': '34.6000',
    '2. high': '35.7500',
    '3. low': '33.5500',
    '4. close': '34.4000',
    '5. volume': '185373'
  },
  '2019-05-31': {
    '1. open': '34.7500',
    '2. high': '36.6000',
    '3. low': '34.2000',
    '4. close': '34.8500',
    '5. volume': '359958'
  },
  '2019-04-30': {
    '1. open': '36.8000',
    '2. high': '41.2000',
    '3. low': '33.2500',
    '4. close': '34.6000',
    '5. volume': '764280'
  },
  '2019-03-29': {
    '1. open': '36.5000',
    '2. high': '40.6000',
    '3. low': '36.2000',
    '4. close': '36.7000',
    '5. volume': '224695'
  },
  '2019-02-28': {
    '1. open': '36.4000',
    '2. high': '36.7000',
    '3. low': '34.4000',
    '4. close': '36.2000',
    '5. volume': '138997'
  },
  '2019-01-31': {
    '1. open': '37.8000',
    '2. high': '39.3000',
    '3. low': '34.6000',
    '4. close': '36.0000',
    '5. volume': '173146'
  },
  '2018-12-28': {
    '1. open': '41.2000',
    '2. high': '41.4000',
    '3. low': '35.5000',
    '4. close': '37.6000',
    '5. volume': '135587'
  },
  '2018-11-30': {
    '1. open': '45.5000',
    '2. high': '48.0000',
    '3. low': '35.8000',
    '4. close': '40.7000',
    '5. volume': '330451'
  },
  '2018-10-31': {
    '1. open': '44.0000',
    '2. high': '49.6000',
    '3. low': '39.0000',
    '4. close': '45.0000',
    '5. volume': '360325'
  },
  '2018-09-28': {
    '1. open': '54.0000',
    '2. high': '54.0000',
    '3. low': '42.8000',
    '4. close': '43.4000',
    '5. volume': '223953'
  },
  '2018-08-31': {
    '1. open': '50.0000',
    '2. high': '56.0000',
    '3. low': '49.8000',
    '4. close': '53.8000',
    '5. volume': '333871'
  },
  '2018-07-31': {
    '1. open': '43.4000',
    '2. high': '52.6000',
    '3. low': '42.9000',
    '4. close': '50.0000',
    '5. volume': '326694'
  },
  '2018-06-29': {
    '1. open': '41.7000',
    '2. high': '45.0000',
    '3. low': '40.9000',
    '4. close': '44.4000',
    '5. volume': '256054'
  },
  '2018-05-31': {
    '1. open': '38.7000',
    '2. high': '43.3000',
    '3. low': '36.7000',
    '4. close': '41.9000',
    '5. volume': '404225'
  },
  '2018-04-30': {
    '1. open': '39.9000',
    '2. high': '40.7000',
    '3. low': '35.8000',
    '4. close': '38.8000',
    '5. volume': '531222'
  },
  '2018-03-29': {
    '1. open': '39.6000',
    '2. high': '46.1000',
    '3. low': '36.2000',
    '4. close': '37.5000',
    '5. volume': '300669'
  },
  '2018-02-28': {
    '1. open': '47.4000',
    '2. high': '47.5000',
    '3. low': '31.8000',
    '4. close': '39.5000',
    '5. volume': '848442'
  },
  '2018-01-31': {
    '1. open': '47.0000',
    '2. high': '48.3000',
    '3. low': '40.5000',
    '4. close': '46.5000',
    '5. volume': '379741'
  },
  '2017-12-29': {
    '1. open': '53.8900',
    '2. high': '55.0000',
    '3. low': '43.7000',
    '4. close': '46.3500',
    '5. volume': '387011'
  },
  '2017-11-30': {
    '1. open': '64.1100',
    '2. high': '64.8100',
    '3. low': '49.2650',
    '4. close': '53.0000',
    '5. volume': '311322'
  },
  '2017-10-31': {
    '1. open': '53.4000',
    '2. high': '64.1600',
    '3. low': '49.5150',
    '4. close': '63.4800',
    '5. volume': '211016'
  },
  '2017-09-29': {
    '1. open': '42.4950',
    '2. high': '55.0000',
    '3. low': '40.2200',
    '4. close': '52.0000',
    '5. volume': '298237'
  }
};

// tslint:disable:max-line-length
export const shopApothekeCompany: Company = {
  id: 1153,
  name: 'Shop Apotheke Europe N.V.',
  country: Country.Niederlande,
  city: 'Venlo',
  url: 'https://shop-apotheke-europe.com/de/',
  description: 'Shop Apotheke Europe N.V. ist eine börsennotierte Online-Apothekengruppe mit Hauptsitz in Venlo, Niederlande. Das Unternehmen beschäftigt insgesamt etwa 730 Mitarbeiter an Standorten in Venlo, Köln, Düsseldorf und Tongern. Das Angebot umfasst freiverkäufliche und verschreibungspflichtige Arzneimittel, Nahrungsergänzungsmittel sowie Beauty- und Gesundheitsprodukte. Shop Apotheke beliefert über seinen Onlineshop nach eigenen Angaben mehr als 2,8 Mio. Kunden.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Shop_Apotheke_Europe',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/SHOP-APOTHEKE-EUROPE.svg/500px-SHOP-APOTHEKE-EUROPE.svg.png',
  products: [
    {
      id: 115310,
      name: 'Shop Apotheke',
      logo: 'https://shop-apotheke-europe.com/uploads/logos/logo-shop_apotheke_com.png'
    }
  ],
  industries: [131210],
  securityType: SecurityType.AandelenAanToonder,
  currency: Currency.EUR,
  isin: 'NL0012044747',
  wkn: 'A2AR94',
  symbol: 'SAE.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Online-Apotheke']
};
// tslint:enable:max-line-length

