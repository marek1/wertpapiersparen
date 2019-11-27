import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.17, yield: 122.15}, {year: 2017, rate: 0.15}, {year: 2016, rate: 0.12}, {year: 2015, rate: 0.12, yield: 2.13}
];
const prices = {
  '2019-11-27': {
    '1. open': '0.0594',
    '2. high': '0.0625',
    '3. low': '0.0500',
    '4. close': '0.0539',
    '5. volume': '98256015'
  },
  '2019-10-31': {
    '1. open': '0.0620',
    '2. high': '0.0678',
    '3. low': '0.0575',
    '4. close': '0.0589',
    '5. volume': '76224316'
  },
  '2019-09-30': {
    '1. open': '0.0680',
    '2. high': '0.0730',
    '3. low': '0.0602',
    '4. close': '0.0609',
    '5. volume': '96616174'
  },
  '2019-08-30': {
    '1. open': '0.0772',
    '2. high': '0.0873',
    '3. low': '0.0150',
    '4. close': '0.0698',
    '5. volume': '235808931'
  },
  '2019-07-31': {
    '1. open': '0.0791',
    '2. high': '0.0930',
    '3. low': '0.0725',
    '4. close': '0.0759',
    '5. volume': '150629722'
  }
};

// tslint:disable:max-line-length
export const steinhoffCompany: Company = {
  id: 1157,
  name: 'Steinhoff International Holdings',
  country: Country.Niederlande,
  city: 'Amsterdam',
  url: 'http://www.steinhoffinternational.com/',
  description: 'Steinhoff International Holdings ist ein börsennotierter weltweit tätiger Möbelkonzern mit Sitz in Amsterdam und operativer Hauptzentrale in Sandton (Johannesburg/Südafrika), dessen Wurzeln in der deutschen Möbelindustrie liegen. 2016 waren rund 112.000 Mitarbeiter für das Unternehmen tätig.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Steinhoff_International_Holdings',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/b/bd/Steinhoff_International_Holdings_logo.svg/500px-Steinhoff_International_Holdings_logo.svg.png',
  products: [
    {
      id: 115710,
      name: 'Conforama',
      logo: 'http://www.steinhoffinternational.com/images/logos/Conforama.png'
    },
    {
      id: 115711,
      name: 'Pepco',
      logo: 'http://www.steinhoffinternational.com/images/logos/PEPCO_Group.png'
    },
    {
      id: 115712,
      name: 'Harveys',
      logo: 'http://www.steinhoffinternational.com/images/careers/harveys.jpg'
    },
    {
      id: 115713,
      name: 'Poco',
      logo: 'https://static.poco.de/static//media/cache/resolve/logo_262_2x/static/img/poco-logo.png'
    }
  ],
  industries: [2010],
  securityType: SecurityType.AandelenOopNaam,
  currency: Currency.EUR,
  isin: 'NL0011375019',
  wkn: 'A14XB9',
  symbol: 'SNH.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Einzelhandelskonzern', 'Möbel', 'Haushaltswaren', 'Einrichtungsgegenstände']
};
// tslint:enable:max-line-length

