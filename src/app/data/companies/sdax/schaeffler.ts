import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.55, yield: 7.23}, {year: 2017, rate: 0.55}, {year: 2016, rate: 0.50}, {year: 2015, rate: 0.35, yield: 2.15}
];
const prices = {
  '2019-11-27': {
    '1. open': '7.6480',
    '2. high': '10.5250',
    '3. low': '7.4220',
    '4. close': '9.9820',
    '5. volume': '25885792'
  },
  '2019-10-31': {
    '1. open': '7.1280',
    '2. high': '8.2240',
    '3. low': '6.4200',
    '4. close': '7.5600',
    '5. volume': '16533194'
  },
  '2019-09-30': {
    '1. open': '6.2000',
    '2. high': '7.9980',
    '3. low': '6.1060',
    '4. close': '7.0440',
    '5. volume': '15912714'
  },
  '2019-08-30': {
    '1. open': '6.7380',
    '2. high': '6.8600',
    '3. low': '5.7320',
    '4. close': '6.1700',
    '5. volume': '13173230'
  },
  '2019-07-31': {
    '1. open': '6.7160',
    '2. high': '7.0920',
    '3. low': '6.0800',
    '4. close': '6.7720',
    '5. volume': '22414639'
  },
  '2019-06-28': {
    '1. open': '6.4680',
    '2. high': '6.9220',
    '3. low': '6.0620',
    '4. close': '6.5440',
    '5. volume': '15927578'
  },
  '2019-05-31': {
    '1. open': '7.6200',
    '2. high': '7.7540',
    '3. low': '6.3800',
    '4. close': '6.5780',
    '5. volume': '21191329'
  },
  '2019-04-30': {
    '1. open': '7.3220',
    '2. high': '8.5600',
    '3. low': '7.2500',
    '4. close': '7.6100',
    '5. volume': '20676850'
  },
  '2019-03-29': {
    '1. open': '8.1140',
    '2. high': '8.4060',
    '3. low': '7.0200',
    '4. close': '7.2480',
    '5. volume': '38463402'
  },
  '2019-02-28': {
    '1. open': '7.7700',
    '2. high': '8.1180',
    '3. low': '7.2620',
    '4. close': '8.0600',
    '5. volume': '17326955'
  },
  '2019-01-31': {
    '1. open': '7.4320',
    '2. high': '8.2880',
    '3. low': '7.2500',
    '4. close': '7.7400',
    '5. volume': '21010046'
  },
  '2018-12-28': {
    '1. open': '8.0540',
    '2. high': '8.2400',
    '3. low': '6.9600',
    '4. close': '7.4580',
    '5. volume': '27151283'
  },
  '2018-11-30': {
    '1. open': '9.2640',
    '2. high': '10.0400',
    '3. low': '7.2980',
    '4. close': '7.6000',
    '5. volume': '50024082'
  },
  '2018-10-31': {
    '1. open': '11.0200',
    '2. high': '11.1300',
    '3. low': '8.4220',
    '4. close': '9.3320',
    '5. volume': '30513991'
  },
  '2018-09-28': {
    '1. open': '11.6700',
    '2. high': '11.9150',
    '3. low': '10.1500',
    '4. close': '11.0100',
    '5. volume': '25183939'
  },
  '2018-08-31': {
    '1. open': '11.7750',
    '2. high': '12.5800',
    '3. low': '10.5800',
    '4. close': '11.7000',
    '5. volume': '24838555'
  },
  '2018-07-31': {
    '1. open': '11.0800',
    '2. high': '11.8000',
    '3. low': '10.9600',
    '4. close': '11.7200',
    '5. volume': '16952289'
  },
  '2018-06-29': {
    '1. open': '12.8700',
    '2. high': '13.4800',
    '3. low': '11.0000',
    '4. close': '11.1500',
    '5. volume': '15710392'
  },
  '2018-05-31': {
    '1. open': '12.8700',
    '2. high': '14.0000',
    '3. low': '12.5900',
    '4. close': '12.8100',
    '5. volume': '19663813'
  },
  '2018-04-30': {
    '1. open': '12.5000',
    '2. high': '13.3600',
    '3. low': '12.1650',
    '4. close': '12.8650',
    '5. volume': '15499302'
  },
  '2018-03-29': {
    '1. open': '13.2700',
    '2. high': '13.5800',
    '3. low': '12.0550',
    '4. close': '12.5350',
    '5. volume': '19880568'
  },
  '2018-02-28': {
    '1. open': '16.0700',
    '2. high': '16.0700',
    '3. low': '12.6900',
    '4. close': '13.3550',
    '5. volume': '27264366'
  },
  '2018-01-31': {
    '1. open': '14.8150',
    '2. high': '16.7800',
    '3. low': '13.8600',
    '4. close': '16.0150',
    '5. volume': '22959283'
  },
  '2017-12-29': {
    '1. open': '14.6400',
    '2. high': '14.8100',
    '3. low': '13.5450',
    '4. close': '14.7850',
    '5. volume': '12960703'
  },
  '2017-11-30': {
    '1. open': '13.7400',
    '2. high': '14.9650',
    '3. low': '13.2700',
    '4. close': '14.6550',
    '5. volume': '26531554'
  },
  '2017-10-31': {
    '1. open': '13.6800',
    '2. high': '13.8700',
    '3. low': '13.2200',
    '4. close': '13.5850',
    '5. volume': '14866439'
  },
  '2017-09-29': {
    '1. open': '11.6300',
    '2. high': '13.6550',
    '3. low': '11.6300',
    '4. close': '13.6500',
    '5. volume': '24030615'
  },
  '2017-08-31': {
    '1. open': '11.8100',
    '2. high': '12.3750',
    '3. low': '11.3050',
    '4. close': '11.8400',
    '5. volume': '23352349'
  },
  '2017-07-31': {
    '1. open': '12.6800',
    '2. high': '12.8550',
    '3. low': '11.7900',
    '4. close': '11.7900',
    '5. volume': '23479594'
  },
  '2017-06-30': {
    '1. open': '14.7600',
    '2. high': '15.3950',
    '3. low': '12.3550',
    '4. close': '12.5400',
    '5. volume': '22952737'
  },
  '2017-05-31': {
    '1. open': '15.8800',
    '2. high': '16.0300',
    '3. low': '14.6150',
    '4. close': '14.7050',
    '5. volume': '21247303'
  },
  '2017-04-28': {
    '1. open': '16.6000',
    '2. high': '16.6050',
    '3. low': '14.9600',
    '4. close': '15.8150',
    '5. volume': '12495284'
  },
  '2017-03-31': {
    '1. open': '14.9800',
    '2. high': '16.6000',
    '3. low': '14.8650',
    '4. close': '16.4800',
    '5. volume': '13701768'
  },
  '2017-02-28': {
    '1. open': '15.1000',
    '2. high': '15.6500',
    '3. low': '14.6000',
    '4. close': '14.8800',
    '5. volume': '11311239'
  },
  '2017-01-31': {
    '1. open': '14.1200',
    '2. high': '15.8000',
    '3. low': '13.6000',
    '4. close': '14.9700',
    '5. volume': '15547491'
  },
  '2016-12-30': {
    '1. open': '12.2200',
    '2. high': '14.0900',
    '3. low': '11.9800',
    '4. close': '14.0550',
    '5. volume': '12767643'
  },
  '2016-11-30': {
    '1. open': '13.8200',
    '2. high': '13.9000',
    '3. low': '11.8500',
    '4. close': '12.2300',
    '5. volume': '18283274'
  },
  '2016-10-31': {
    '1. open': '14.0750',
    '2. high': '14.3300',
    '3. low': '13.2000',
    '4. close': '13.7800',
    '5. volume': '11001054'
  },
  '2016-09-30': {
    '1. open': '13.7900',
    '2. high': '14.6900',
    '3. low': '13.3650',
    '4. close': '14.0800',
    '5. volume': '14441463'
  },
  '2016-08-31': {
    '1. open': '13.0700',
    '2. high': '14.2800',
    '3. low': '12.2650',
    '4. close': '13.8800',
    '5. volume': '12423504'
  },
  '2016-07-29': {
    '1. open': '11.9000',
    '2. high': '13.5500',
    '3. low': '11.2700',
    '4. close': '13.0500',
    '5. volume': '16624795'
  },
  '2016-06-30': {
    '1. open': '14.6500',
    '2. high': '14.8800',
    '3. low': '11.4500',
    '4. close': '11.8500',
    '5. volume': '20696665'
  },
  '2016-05-31': {
    '1. open': '13.2750',
    '2. high': '15.0000',
    '3. low': '12.6150',
    '4. close': '14.5000',
    '5. volume': '31899416'
  },
  '2016-04-29': {
    '1. open': '14.0200',
    '2. high': '14.1750',
    '3. low': '12.8000',
    '4. close': '13.1000',
    '5. volume': '21469321'
  },
  '2016-03-31': {
    '1. open': '14.2800',
    '2. high': '15.4800',
    '3. low': '13.5400',
    '4. close': '14.1300',
    '5. volume': '4351497'
  },
  '2016-02-29': {
    '1. open': '14.7450',
    '2. high': '14.7450',
    '3. low': '12.2050',
    '4. close': '14.4100',
    '5. volume': '4124451'
  },
  '2016-01-29': {
    '1. open': '16.0000',
    '2. high': '16.3000',
    '3. low': '13.6700',
    '4. close': '14.6200',
    '5. volume': '4075448'
  },
  '2015-12-30': {
    '1. open': '16.8000',
    '2. high': '17.4650',
    '3. low': '15.8400',
    '4. close': '16.2500',
    '5. volume': '4621474'
  },
  '2015-11-30': {
    '1. open': '13.4000',
    '2. high': '16.9400',
    '3. low': '12.4000',
    '4. close': '16.6000',
    '5. volume': '5424110'
  }
};

// tslint:disable:max-line-length
export const schaefflerCompany: Company = {
  id: 1151,
  name: 'Schaeffler-Gruppe AG',
  country: Country.Deutschland,
  city: 'Herzogenaurach',
  url: 'https://www.schaeffler.com/content.schaeffler.com/de/index.jsp',
  description: 'Die Schaeffler-Gruppe mit Stammsitz in Herzogenaurach ist ein börsennotierter deutscher Zulieferer der Automobil- und Maschinenbauindustrie. Zu den Produkten der Gruppe zählen Kupplungssysteme, Getriebeteile, Nockenwellenversteller, Lager und Lineartechnik-Komponenten. Das von Maria-Elisabeth Schaeffler und ihrem Sohn Georg Friedrich Wilhelm Schaeffler kontrollierte Unternehmen entstand durch die Übernahme der Auffanggesellschaft eines 1933 nach der Flucht des jüdischen Eigentümers aus Deutschland in Konkurs geratenen Großunternehmens.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Schaeffler-Gruppe',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schaeffler_logo.svg/500px-Schaeffler_logo.svg.png',
  products: [],
  industries: [121110],
  securityType: SecurityType.InhaberVorzug,
  currency: Currency.EUR,
  isin: 'DE000SHA0159',
  wkn: 'SHA015',
  symbol: 'SHA.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Automobilzulieferer', 'Industriezulieferer', 'Präzisionskomponenten', 'Ventilspielausgleichselemente', 'Wälzlagerungen', 'Kupplungen']
};
// tslint:enable:max-line-length

