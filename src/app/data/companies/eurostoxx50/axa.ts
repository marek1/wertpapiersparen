import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';

const dividends = [
  {year: 2018, rate: 1.34, yield: 7.07}, {year: 2017, rate: 1.26}, {year: 2016, rate: 1.16}, {
    year: 2015,
    rate: 1.10,
    yield: 4.36
  }, {year: 2014, rate: 0.95, yield: 4.95}, {year: 2013, rate: 0.81, yield: 4.01}, {year: 2012, rate: 0.72, yield: 5.39}, {
    year: 2011,
    rate: 0.69,
    yield: 6.87
  }, {year: 2010, rate: 0.69, yield: 5.54}, {year: 2009, rate: 0.55, yield: 3.33}, {year: 2008, rate: 0.39, yield: 2.52}, {
    year: 2007,
    rate: 1.17,
    yield: 4.38
  }, {year: 2006, rate: 1.04, yield: 3.46}, {year: 2005, rate: 0.86, yield: 3.23}, {year: 2004, rate: 0.60, yield: 3.35}, {
    year: 2003,
    rate: 0.37,
    yield: 2.24
  }, {year: 2002, rate: 0.33, yield: 2.65}, {year: 2001, rate: 0.81, yield: 3.58}, {year: 2000, rate: 0.80, yield: 2.11}, {
    year: 1999,
    rate: 0.48,
    yield: 1.47
  }
];
const prices = {
  '2019-11-29': {
    '1. open': '24.2400',
    '2. high': '25.4300',
    '3. low': '24.2000',
    '4. close': '24.7250',
    '5. volume': '781308'
  },
  '2013-03-28': {
    '1. open': '13.3000',
    '2. high': '14.6900',
    '3. low': '12.9600',
    '4. close': '13.3050',
    '5. volume': '746022'
  },
  '2013-02-28': {
    '1. open': '13.7800',
    '2. high': '14.0850',
    '3. low': '12.9300',
    '4. close': '13.2700',
    '5. volume': '610877'
  },
  '2013-01-31': {
    '1. open': '13.6500',
    '2. high': '13.9300',
    '3. low': '13.1750',
    '4. close': '13.6000',
    '5. volume': '584762'
  },
  '2012-12-28': {
    '1. open': '12.6800',
    '2. high': '13.5200',
    '3. low': '12.6150',
    '4. close': '13.2200',
    '5. volume': '479440'
  },
  '2012-11-30': {
    '1. open': '12.2100',
    '2. high': '12.7400',
    '3. low': '11.4500',
    '4. close': '12.5400',
    '5. volume': '387044'
  },
  '2012-10-31': {
    '1. open': '11.6000',
    '2. high': '12.8050',
    '3. low': '11.3900',
    '4. close': '12.2000',
    '5. volume': '451004'
  },
  '2012-09-28': {
    '1. open': '11.4550',
    '2. high': '13.0500',
    '3. low': '11.4200',
    '4. close': '11.5000',
    '5. volume': '806306'
  },
  '2012-08-31': {
    '1. open': '9.9340',
    '2. high': '11.9300',
    '3. low': '9.3600',
    '4. close': '11.5850',
    '5. volume': '909386'
  },
  '2012-07-31': {
    '1. open': '10.4450',
    '2. high': '10.8000',
    '3. low': '8.8200',
    '4. close': '9.9940',
    '5. volume': '677449'
  },
  '2012-06-29': {
    '1. open': '9.1520',
    '2. high': '10.4600',
    '3. low': '8.7140',
    '4. close': '10.4250',
    '5. volume': '816766'
  },
  '2012-05-31': {
    '1. open': '10.9500',
    '2. high': '10.9500',
    '3. low': '8.9800',
    '4. close': '8.9870',
    '5. volume': '3485070'
  },
  '2012-04-30': {
    '1. open': '12.3400',
    '2. high': '12.5600',
    '3. low': '10.0600',
    '4. close': '10.7350',
    '5. volume': '1383182'
  },
  '2012-03-30': {
    '1. open': '12.0550',
    '2. high': '13.2450',
    '3. low': '11.6100',
    '4. close': '12.3750',
    '5. volume': '644164'
  },
  '2012-02-29': {
    '1. open': '11.8300',
    '2. high': '12.9000',
    '3. low': '11.6450',
    '4. close': '12.1150',
    '5. volume': '626407'
  },
  '2012-01-31': {
    '1. open': '10.1100',
    '2. high': '12.3000',
    '3. low': '9.4000',
    '4. close': '11.7850',
    '5. volume': '1134699'
  },
  '2011-12-30': {
    '1. open': '10.7500',
    '2. high': '11.6050',
    '3. low': '9.6220',
    '4. close': '9.9200',
    '5. volume': '701294'
  },
  '2011-11-30': {
    '1. open': '11.1600',
    '2. high': '11.2700',
    '3. low': '8.5500',
    '4. close': '10.7350',
    '5. volume': '1192777'
  },
  '2011-10-31': {
    '1. open': '9.2990',
    '2. high': '12.6400',
    '3. low': '8.8470',
    '4. close': '11.7450',
    '5. volume': '1697220'
  },
  '2011-09-30': {
    '1. open': '11.2500',
    '2. high': '11.3550',
    '3. low': '7.9140',
    '4. close': '9.9150',
    '5. volume': '1457685'
  },
  '2011-08-31': {
    '1. open': '13.5250',
    '2. high': '13.5500',
    '3. low': '9.3250',
    '4. close': '11.0800',
    '5. volume': '1816338'
  },
  '2011-07-29': {
    '1. open': '15.6900',
    '2. high': '15.9000',
    '3. low': '12.8300',
    '4. close': '13.1200',
    '5. volume': '704238'
  },
  '2011-06-30': {
    '1. open': '15.1200',
    '2. high': '15.6650',
    '3. low': '14.3800',
    '4. close': '15.6650',
    '5. volume': '656354'
  },
  '2011-05-31': {
    '1. open': '15.3100',
    '2. high': '15.3300',
    '3. low': '14.2000',
    '4. close': '14.8000',
    '5. volume': '560180'
  },
  '2011-04-29': {
    '1. open': '14.9950',
    '2. high': '15.9500',
    '3. low': '14.2850',
    '4. close': '15.1350',
    '5. volume': '845964'
  },
  '2011-03-31': {
    '1. open': '15.3950',
    '2. high': '15.4150',
    '3. low': '13.2950',
    '4. close': '14.7650',
    '5. volume': '1121020'
  },
  '2011-02-28': {
    '1. open': '15.5750',
    '2. high': '16.1550',
    '3. low': '14.4550',
    '4. close': '15.2400',
    '5. volume': '1234410'
  },
  '2011-01-31': {
    '1. open': '12.5350',
    '2. high': '16.0950',
    '3. low': '12.5350',
    '4. close': '15.4700',
    '5. volume': '1784876'
  },
  '2010-12-30': {
    '1. open': '11.2200',
    '2. high': '13.0250',
    '3. low': '11.2150',
    '4. close': '12.5500',
    '5. volume': '1207580'
  },
  '2010-11-30': {
    '1. open': '13.1500',
    '2. high': '13.8750',
    '3. low': '10.9100',
    '4. close': '11.0300',
    '5. volume': '1707595'
  },
  '2010-10-29': {
    '1. open': '12.8250',
    '2. high': '14.0800',
    '3. low': '12.3750',
    '4. close': '13.1200',
    '5. volume': '877925'
  },
  '2010-09-30': {
    '1. open': '12.5000',
    '2. high': '13.4700',
    '3. low': '12.2900',
    '4. close': '12.8750',
    '5. volume': '936278'
  },
  '2010-08-31': {
    '1. open': '14.1400',
    '2. high': '15.0000',
    '3. low': '11.9800',
    '4. close': '12.2300',
    '5. volume': '955438'
  },
  '2010-07-30': {
    '1. open': '12.5000',
    '2. high': '14.8900',
    '3. low': '12.1300',
    '4. close': '14.1750',
    '5. volume': '951836'
  },
  '2010-06-30': {
    '1. open': '13.3500',
    '2. high': '14.2000',
    '3. low': '11.9000',
    '4. close': '12.6400',
    '5. volume': '835845'
  },
  '2010-05-31': {
    '1. open': '13.6000',
    '2. high': '13.7250',
    '3. low': '13.3500',
    '4. close': '13.3500',
    '5. volume': '77869'
  },
  '2009-01-19': {
    '1. open': '15.9100',
    '2. high': '17.2500',
    '3. low': '12.0000',
    '4. close': '12.5500',
    '5. volume': '274565'
  },
  '2008-12-30': {
    '1. open': '15.3500',
    '2. high': '17.1100',
    '3. low': '13.6000',
    '4. close': '14.9300',
    '5. volume': '566264'
  },
  '2008-11-28': {
    '1. open': '15.1300',
    '2. high': '17.0000',
    '3. low': '11.2200',
    '4. close': '14.7500',
    '5. volume': '514583'
  },
  '2008-10-31': {
    '1. open': '23.0000',
    '2. high': '24.1600',
    '3. low': '12.0100',
    '4. close': '14.3500',
    '5. volume': '832087'
  },
  '2008-09-30': {
    '1. open': '21.7000',
    '2. high': '24.8600',
    '3. low': '18.6100',
    '4. close': '22.7300',
    '5. volume': '991978'
  },
  '2008-08-29': {
    '1. open': '21.7000',
    '2. high': '22.0000',
    '3. low': '19.9700',
    '4. close': '21.9400',
    '5. volume': '99139'
  },
  '2008-07-28': {
    '1. open': '18.8000',
    '2. high': '20.6400',
    '3. low': '16.1500',
    '4. close': '18.3000',
    '5. volume': '545115'
  },
  '2008-06-30': {
    '1. open': '22.4800',
    '2. high': '22.4800',
    '3. low': '18.0900',
    '4. close': '18.9400',
    '5. volume': '189144'
  },
  '2008-05-30': {
    '1. open': '24.5500',
    '2. high': '25.1100',
    '3. low': '21.6300',
    '4. close': '22.8300',
    '5. volume': '308553'
  },
  '2008-04-30': {
    '1. open': '23.4000',
    '2. high': '25.6500',
    '3. low': '22.3700',
    '4. close': '23.9400',
    '5. volume': '434858'
  },
  '2008-03-31': {
    '1. open': '22.0300',
    '2. high': '23.3400',
    '3. low': '19.3100',
    '4. close': '22.9400',
    '5. volume': '776537'
  },
  '2008-02-29': {
    '1. open': '23.3300',
    '2. high': '24.2000',
    '3. low': '20.0500',
    '4. close': '22.5100',
    '5. volume': '821415'
  },
  '2008-01-31': {
    '1. open': '27.2900',
    '2. high': '27.5100',
    '3. low': '20.7400',
    '4. close': '22.6600',
    '5. volume': '1078140'
  }
};

// tslint:disable:max-line-length
export const axaCompany: Company = {
  id: 1175,
  name: 'AXA S.A.',
  country: Country.Frankreich,
  city: 'Paris',
  url: 'https://www.axa.com/',
  description: 'Die Axa Gruppe ist ein ursprünglich französisches, heute in 64 Ländern tätiges Versicherungsunternehmen mit Paris als Hauptsitz. Die Aktiengesellschaft versichert Privatpersonen und Unternehmen. In Deutschland firmiert sie als Axa-Konzern AG, in der Schweiz als Axa Versicherungen AG.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Axa',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/250px-AXA_Logo.svg.png',
  products: [
    {
      id: 117510,
      name: 'AXA Versicherung',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/250px-AXA_Logo.svg.png',
    }
  ],
  industries: [141210],
  isharesIndustryName: IsharesIndustryNames.Financials,
  securityType: SecurityType.ActionsPort,
  currency: Currency.EUR,
  isin: 'FR0000120628',
  wkn: '855705',
  symbol: 'AXA.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.CAC40, Indices.MSCIEuropeSRI, Indices.DowJonesSustainabilityEurozone],
  end_of_month_prices: prices,
  dividends,
  tags: ['Versicherung', 'Versicherungen', 'Haftpflichversicherung', 'Lebensversicherung', 'Hausratversicherung']
};
// tslint:enable:max-line-length

