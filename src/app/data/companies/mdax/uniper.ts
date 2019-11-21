import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.90, yield: 4.04}, {year: 2017, rate: 0.74}, {year: 2016, rate: 0.55}
];
const prices = {
  '2019-11-21': {
    '1. open': '27.9200',
    '2. high': '29.5900',
    '3. low': '27.7200',
    '4. close': '29.5200',
    '5. volume': '6950939'
  },
  '2019-10-31': {
    '1. open': '30.1000',
    '2. high': '30.2700',
    '3. low': '26.6400',
    '4. close': '27.9400',
    '5. volume': '12899291'
  },
  '2019-09-30': {
    '1. open': '27.2800',
    '2. high': '30.6400',
    '3. low': '27.2800',
    '4. close': '30.0900',
    '5. volume': '8451657'
  },
  '2019-08-30': {
    '1. open': '27.9700',
    '2. high': '28.3500',
    '3. low': '26.3100',
    '4. close': '27.5700',
    '5. volume': '9068141'
  },
  '2019-07-31': {
    '1. open': '26.7900',
    '2. high': '28.9100',
    '3. low': '26.3600',
    '4. close': '27.9500',
    '5. volume': '6921180'
  },
  '2019-06-28': {
    '1. open': '25.0100',
    '2. high': '26.9100',
    '3. low': '24.9200',
    '4. close': '26.6300',
    '5. volume': '9693633'
  },
  '2019-05-31': {
    '1. open': '26.9200',
    '2. high': '27.0600',
    '3. low': '24.5000',
    '4. close': '25.1100',
    '5. volume': '11573625'
  },
  '2019-04-30': {
    '1. open': '26.9100',
    '2. high': '27.7400',
    '3. low': '26.6200',
    '4. close': '27.0100',
    '5. volume': '7749327'
  },
  '2019-03-29': {
    '1. open': '25.6900',
    '2. high': '27.7100',
    '3. low': '25.0500',
    '4. close': '26.8900',
    '5. volume': '9933065'
  },
  '2019-02-28': {
    '1. open': '25.3700',
    '2. high': '26.9500',
    '3. low': '25.2800',
    '4. close': '25.6100',
    '5. volume': '9091360'
  },
  '2019-01-31': {
    '1. open': '22.4800',
    '2. high': '25.6800',
    '3. low': '22.3000',
    '4. close': '25.2700',
    '5. volume': '11251273'
  },
  '2018-12-28': {
    '1. open': '22.9600',
    '2. high': '23.8000',
    '3. low': '21.5500',
    '4. close': '22.6000',
    '5. volume': '14421835'
  },
  '2018-11-30': {
    '1. open': '25.4400',
    '2. high': '27.1500',
    '3. low': '22.5900',
    '4. close': '22.6700',
    '5. volume': '20255550'
  },
  '2018-10-31': {
    '1. open': '26.5100',
    '2. high': '27.1100',
    '3. low': '24.6400',
    '4. close': '25.5100',
    '5. volume': '15751712'
  },
  '2018-09-28': {
    '1. open': '26.2600',
    '2. high': '27.4600',
    '3. low': '25.4100',
    '4. close': '26.5100',
    '5. volume': '13033079'
  },
  '2018-08-31': {
    '1. open': '26.8000',
    '2. high': '26.8500',
    '3. low': '24.4500',
    '4. close': '26.3200',
    '5. volume': '12347324'
  },
  '2018-07-31': {
    '1. open': '25.2700',
    '2. high': '27.0800',
    '3. low': '25.0100',
    '4. close': '26.6900',
    '5. volume': '8960550'
  },
  '2018-06-29': {
    '1. open': '27.0500',
    '2. high': '27.2600',
    '3. low': '24.6200',
    '4. close': '25.5400',
    '5. volume': '11584822'
  },
  '2018-05-31': {
    '1. open': '25.5800',
    '2. high': '27.7400',
    '3. low': '25.5000',
    '4. close': '27.1300',
    '5. volume': '14344313'
  },
  '2018-04-30': {
    '1. open': '24.5400',
    '2. high': '25.7200',
    '3. low': '23.2400',
    '4. close': '25.6700',
    '5. volume': '10447795'
  },
  '2018-03-29': {
    '1. open': '24.7000',
    '2. high': '25.7200',
    '3. low': '23.4000',
    '4. close': '24.7500',
    '5. volume': '13246093'
  },
  '2018-02-28': {
    '1. open': '24.0000',
    '2. high': '25.6300',
    '3. low': '22.5600',
    '4. close': '24.9300',
    '5. volume': '12582574'
  },
  '2018-01-31': {
    '1. open': '25.7200',
    '2. high': '26.1500',
    '3. low': '23.6700',
    '4. close': '24.0300',
    '5. volume': '15663669'
  },
  '2017-12-29': {
    '1. open': '24.9600',
    '2. high': '26.6400',
    '3. low': '24.4500',
    '4. close': '26.0000',
    '5. volume': '19613660'
  },
  '2017-11-30': {
    '1. open': '24.0000',
    '2. high': '24.9950',
    '3. low': '23.3000',
    '4. close': '24.9950',
    '5. volume': '42370921'
  },
  '2017-10-31': {
    '1. open': '23.2300',
    '2. high': '24.3500',
    '3. low': '23.1500',
    '4. close': '24.1200',
    '5. volume': '17158879'
  },
  '2017-09-29': {
    '1. open': '20.9600',
    '2. high': '23.3900',
    '3. low': '20.6950',
    '4. close': '23.2000',
    '5. volume': '28469938'
  },
  '2017-08-31': {
    '1. open': '17.4450',
    '2. high': '21.0350',
    '3. low': '17.3850',
    '4. close': '20.9150',
    '5. volume': '20754864'
  },
  '2017-07-31': {
    '1. open': '16.6500',
    '2. high': '17.7400',
    '3. low': '16.1250',
    '4. close': '17.3900',
    '5. volume': '13502535'
  },
  '2017-06-30': {
    '1. open': '17.5800',
    '2. high': '18.2200',
    '3. low': '16.3800',
    '4. close': '16.4350',
    '5. volume': '19410420'
  },
  '2017-05-31': {
    '1. open': '15.1050',
    '2. high': '18.3000',
    '3. low': '15.0300',
    '4. close': '17.3550',
    '5. volume': '26903539'
  },
  '2017-04-28': {
    '1. open': '15.9000',
    '2. high': '16.2150',
    '3. low': '14.6450',
    '4. close': '15.0700',
    '5. volume': '16307282'
  },
  '2017-03-31': {
    '1. open': '13.4500',
    '2. high': '15.7800',
    '3. low': '13.3650',
    '4. close': '15.7800',
    '5. volume': '24083449'
  },
  '2017-02-28': {
    '1. open': '13.2150',
    '2. high': '13.6000',
    '3. low': '12.3100',
    '4. close': '13.4000',
    '5. volume': '19022168'
  },
  '2017-01-31': {
    '1. open': '13.1250',
    '2. high': '14.3500',
    '3. low': '12.8800',
    '4. close': '13.1450',
    '5. volume': '24051286'
  },
  '2016-12-30': {
    '1. open': '11.7300',
    '2. high': '13.1900',
    '3. low': '11.0400',
    '4. close': '13.1150',
    '5. volume': '24861298'
  },
  '2016-11-30': {
    '1. open': '12.1900',
    '2. high': '12.9200',
    '3. low': '11.2500',
    '4. close': '11.7550',
    '5. volume': '24070945'
  },
  '2016-10-31': {
    '1. open': '10.8000',
    '2. high': '12.5700',
    '3. low': '10.5600',
    '4. close': '12.1250',
    '5. volume': '25375738'
  }
};

// tslint:disable:max-line-length
export const uniperCompany: Company = {
  id: 1089,
  name: 'Uniper SE',
  country: Country.Deutschland,
  city: 'Düsseldorf',
  url: 'https://www.uniper.energy/de',
  description: 'Die Uniper SE [ˈjuːnipɚ] ist eine börsennotierte Gesellschaft, die durch Abspaltung der Energieerzeugungssparten Wasser, Kohle und Gas der E.ON SE entstanden ist. In der Uniper-Gruppe, welche die Uniper SE und ihre Tochtergesellschaften umfasst, sind die konventionelle Energieerzeugung (einschließlich der Wasserkraft, jedoch ohne die deutschen Kernenergieaktivitäten), der globale Energiehandel (insbesondere die Vermarktung von Strom und Gas) und die Stromerzeugung in Russland sowie die Energiespeicherung gebündelt.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Uniper',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Uniper_logo.svg/289px-Uniper_logo.svg.png',
  products: [],
  industries: [111310],
  currency: Currency.EUR,
  isin: 'DE000UNSE018',
  wkn: 'UNSE01',
  symbol: 'UN01.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Energieunternehmen', 'Stromerzeugungsanlagen']
};
// tslint:enable:max-line-length

