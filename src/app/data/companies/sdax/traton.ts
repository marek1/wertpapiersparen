import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [];
const prices = {
  '2019-11-28': {
    '1. open': '23.1700',
    '2. high': '25.4800',
    '3. low': '22.9600',
    '4. close': '24.9700',
    '5. volume': '1059713'
  },
  '2019-10-31': {
    '1. open': '24.6700',
    '2. high': '24.6700',
    '3. low': '22.3500',
    '4. close': '22.9800',
    '5. volume': '1091286'
  },
  '2019-09-30': {
    '1. open': '22.8650',
    '2. high': '26.2350',
    '3. low': '22.2000',
    '4. close': '24.4500',
    '5. volume': '1638494'
  },
  '2019-08-30': {
    '1. open': '25.1950',
    '2. high': '25.2300',
    '3. low': '22.0200',
    '4. close': '22.6000',
    '5. volume': '2496490'
  }
};

// tslint:disable:max-line-length
export const tratonCompany: Company = {
  id: 1163,
  name: 'Traton Group SE',
  country: Country.Deutschland,
  city: 'München',
  url: 'https://traton.com/de.html',
  description: 'Traton Group SE (Eigenschreibweise TRATON GROUP), bis 30. August 2018 Volkswagen Truck & Bus,[3] mit Sitz in München ist mit ihren Marken MAN, Scania und Volkswagen Caminhões e Ônibus und RIO ein börsennotierter Nutzfahrzeug- und Bushersteller, der mehrheitlich der Volkswagen AG gehört. Im Jahr 2018 setzten die Marken der Traton Group insgesamt rund 233.000 Fahrzeuge ab. Das Angebot umfasst leichte, mittelschwere und schwere Lkw sowie Vans und Busse. Zum Jahresende 2018 beschäftigte das Unternehmen an 29 Standorten in 17 Ländern rund 81.000 Mitarbeiter.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Traton',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Traton_Group_Logo.svg/500px-Traton_Group_Logo.svg.png',
  products: [
    {
      id: 116310,
      name: 'MAN',
      logo: 'https://traton.com/dam/jcr:a03ccf1e-b8e1-44e3-92ee-4ee684f96f09/traton-footer-logo-MAN.png'
    },
    {
      id: 116311,
      name: 'Scania',
      logo: 'https://traton.com/dam/jcr:864cac0f-4e82-4d3a-9c84-6d3de7bf36a6/traton-footer-logo-Scania.png'
    },
    {
      id: 116312,
      name: 'Volkswagen Caminhões e Ônibus',
      logo: 'https://traton.com/dam/jcr:96f110ad-079f-4bfe-ba7a-def496d65286/traton-footer-logo-VWCO.png'
    },
    {
      id: 116313,
      name: 'RIO',
      logo: 'https://traton.com/dam/jcr:c4db7371-07eb-4bf6-bf89-77361e4bbd25/traton-footer-logo-RIO.png'
    }
  ],
  industries: [121212, 121610, 1810],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE000TRAT0N7',
  wkn: 'TRAT0N',
  symbol: '',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Nutzfahrzeugherstellern', 'Lkws', 'Busse']
};
// tslint:enable:max-line-length

