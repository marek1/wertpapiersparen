import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 1.45, yield: 4.86}, {year: 2017, rate: 1.40}, {year: 2016, rate: 1.35}, {
    year: 2015,
    rate: 1.30,
    yield: 4.55
  }, {year: 2014, rate: 1.25, yield: 4.95}, {year: 2013, rate: 1.20, yield: 4.87}, {year: 2012, rate: 1.05, yield: 4.89}, {
    year: 2011,
    rate: 0.00
  }
];
const prices = {
  '2019-11-28': {
    '1. open': '41.3800',
    '2. high': '43.5200',
    '3. low': '40.1000',
    '4. close': '43.3400',
    '5. volume': '1941147'
  },
  '2019-10-31': {
    '1. open': '39.6400',
    '2. high': '42.5400',
    '3. low': '39.3800',
    '4. close': '41.3000',
    '5. volume': '2585086'
  },
  '2019-09-30': {
    '1. open': '37.5200',
    '2. high': '39.7800',
    '3. low': '37.5200',
    '4. close': '39.6400',
    '5. volume': '1815385'
  },
  '2019-08-30': {
    '1. open': '38.4000',
    '2. high': '38.6200',
    '3. low': '36.5800',
    '4. close': '37.6800',
    '5. volume': '2179373'
  },
  '2019-07-31': {
    '1. open': '38.2800',
    '2. high': '39.8800',
    '3. low': '37.5200',
    '4. close': '38.0800',
    '5. volume': '2574591'
  },
  '2019-06-28': {
    '1. open': '35.4400',
    '2. high': '38.1000',
    '3. low': '35.3000',
    '4. close': '38.1000',
    '5. volume': '1757600'
  },
  '2019-05-31': {
    '1. open': '35.8000',
    '2. high': '37.2000',
    '3. low': '34.3800',
    '4. close': '35.5600',
    '5. volume': '2049748'
  },
  '2019-04-30': {
    '1. open': '34.5400',
    '2. high': '36.3000',
    '3. low': '34.4600',
    '4. close': '35.6200',
    '5. volume': '1544170'
  },
  '2019-03-29': {
    '1. open': '34.2000',
    '2. high': '35.3800',
    '3. low': '33.3000',
    '4. close': '34.3600',
    '5. volume': '1955370'
  },
  '2019-02-28': {
    '1. open': '32.4800',
    '2. high': '34.0200',
    '3. low': '32.3200',
    '4. close': '33.9600',
    '5. volume': '1844412'
  },
  '2019-01-31': {
    '1. open': '29.6400',
    '2. high': '32.9600',
    '3. low': '29.1000',
    '4. close': '32.4200',
    '5. volume': '2201165'
  },
  '2018-12-28': {
    '1. open': '31.9200',
    '2. high': '31.9200',
    '3. low': '29.0400',
    '4. close': '29.8000',
    '5. volume': '1843999'
  },
  '2018-11-30': {
    '1. open': '31.7200',
    '2. high': '32.9600',
    '3. low': '30.3600',
    '4. close': '31.5200',
    '5. volume': '2507648'
  },
  '2018-10-31': {
    '1. open': '32.7000',
    '2. high': '33.0000',
    '3. low': '28.6400',
    '4. close': '31.6200',
    '5. volume': '4116815'
  },
  '2018-09-28': {
    '1. open': '32.5600',
    '2. high': '33.6200',
    '3. low': '32.0800',
    '4. close': '32.7400',
    '5. volume': '2896191'
  },
  '2018-08-31': {
    '1. open': '32.7000',
    '2. high': '33.1600',
    '3. low': '30.7000',
    '4. close': '32.5200',
    '5. volume': '2725009'
  },
  '2018-07-31': {
    '1. open': '31.0000',
    '2. high': '32.8400',
    '3. low': '30.8200',
    '4. close': '32.7000',
    '5. volume': '1881020'
  },
  '2018-06-29': {
    '1. open': '33.0600',
    '2. high': '33.9400',
    '3. low': '30.7800',
    '4. close': '31.2800',
    '5. volume': '2684603'
  },
  '2018-05-31': {
    '1. open': '37.5400',
    '2. high': '37.6600',
    '3. low': '32.8800',
    '4. close': '32.9800',
    '5. volume': '3577164'
  },
  '2018-04-30': {
    '1. open': '35.2000',
    '2. high': '37.5200',
    '3. low': '34.4600',
    '4. close': '37.3800',
    '5. volume': '2692088'
  },
  '2018-03-29': {
    '1. open': '36.3200',
    '2. high': '36.3800',
    '3. low': '33.9400',
    '4. close': '35.3400',
    '5. volume': '3118871'
  },
  '2018-02-28': {
    '1. open': '35.6600',
    '2. high': '36.7000',
    '3. low': '34.2000',
    '4. close': '36.3800',
    '5. volume': '2855640'
  },
  '2018-01-31': {
    '1. open': '34.2800',
    '2. high': '37.3800',
    '3. low': '33.7400',
    '4. close': '35.6400',
    '5. volume': '2852083'
  },
  '2017-12-29': {
    '1. open': '34.6800',
    '2. high': '35.2400',
    '3. low': '33.5750',
    '4. close': '34.0700',
    '5. volume': '2483578'
  },
  '2017-11-30': {
    '1. open': '33.7000',
    '2. high': '34.9400',
    '3. low': '33.2650',
    '4. close': '34.5500',
    '5. volume': '3396276'
  },
  '2017-10-31': {
    '1. open': '34.2100',
    '2. high': '35.1100',
    '3. low': '33.5600',
    '4. close': '33.7150',
    '5. volume': '2400489'
  },
  '2017-09-29': {
    '1. open': '34.9450',
    '2. high': '34.9900',
    '3. low': '33.1500',
    '4. close': '34.2050',
    '5. volume': '2685796'
  },
  '2017-08-31': {
    '1. open': '35.0000',
    '2. high': '36.3200',
    '3. low': '33.1050',
    '4. close': '34.7650',
    '5. volume': '4472597'
  },
  '2017-07-31': {
    '1. open': '32.7000',
    '2. high': '35.5900',
    '3. low': '32.4050',
    '4. close': '34.8650',
    '5. volume': '3724290'
  },
  '2017-06-30': {
    '1. open': '32.9950',
    '2. high': '33.7500',
    '3. low': '32.5650',
    '4. close': '32.7000',
    '5. volume': '2821477'
  },
  '2017-05-31': {
    '1. open': '33.2700',
    '2. high': '35.5000',
    '3. low': '32.5000',
    '4. close': '32.9600',
    '5. volume': '3384399'
  },
  '2017-04-28': {
    '1. open': '33.2000',
    '2. high': '33.7300',
    '3. low': '32.5700',
    '4. close': '33.0900',
    '5. volume': '2519294'
  },
  '2017-03-31': {
    '1. open': '32.5500',
    '2. high': '34.4700',
    '3. low': '30.6600',
    '4. close': '33.0550',
    '5. volume': '4495528'
  },
  '2017-02-28': {
    '1. open': '32.0000',
    '2. high': '34.3650',
    '3. low': '31.8300',
    '4. close': '33.7300',
    '5. volume': '2995143'
  },
  '2017-01-31': {
    '1. open': '31.5600',
    '2. high': '32.8850',
    '3. low': '30.6050',
    '4. close': '31.7750',
    '5. volume': '3375597'
  },
  '2016-12-30': {
    '1. open': '29.9000',
    '2. high': '32.1450',
    '3. low': '29.7250',
    '4. close': '31.7700',
    '5. volume': '2701576'
  },
  '2016-11-30': {
    '1. open': '28.3700',
    '2. high': '30.4500',
    '3. low': '27.4250',
    '4. close': '29.9650',
    '5. volume': '3685745'
  },
  '2016-10-31': {
    '1. open': '27.1950',
    '2. high': '28.8050',
    '3. low': '26.7700',
    '4. close': '28.2750',
    '5. volume': '1752055'
  },
  '2016-09-30': {
    '1. open': '26.3800',
    '2. high': '27.8600',
    '3. low': '26.0300',
    '4. close': '27.1450',
    '5. volume': '2706054'
  },
  '2016-08-31': {
    '1. open': '27.1000',
    '2. high': '27.7750',
    '3. low': '25.6350',
    '4. close': '26.2000',
    '5. volume': '3859893'
  },
  '2016-07-29': {
    '1. open': '26.9500',
    '2. high': '27.4850',
    '3. low': '25.4200',
    '4. close': '26.9150',
    '5. volume': '2314215'
  },
  '2016-06-30': {
    '1. open': '30.2500',
    '2. high': '30.3350',
    '3. low': '25.2000',
    '4. close': '26.6300',
    '5. volume': '3095998'
  },
  '2016-05-31': {
    '1. open': '29.3050',
    '2. high': '30.3750',
    '3. low': '27.4100',
    '4. close': '30.2500',
    '5. volume': '3139060'
  },
  '2016-04-29': {
    '1. open': '29.7000',
    '2. high': '30.5950',
    '3. low': '28.8450',
    '4. close': '28.9750',
    '5. volume': '2578428'
  },
  '2016-03-31': {
    '1. open': '26.2500',
    '2. high': '30.2400',
    '3. low': '26.1200',
    '4. close': '30.0100',
    '5. volume': '3500717'
  },
  '2016-02-29': {
    '1. open': '26.6000',
    '2. high': '26.7800',
    '3. low': '23.5850',
    '4. close': '26.2250',
    '5. volume': '3451406'
  },
  '2016-01-29': {
    '1. open': '28.0000',
    '2. high': '28.0300',
    '3. low': '25.1150',
    '4. close': '26.4450',
    '5. volume': '3610577'
  },
  '2015-12-30': {
    '1. open': '29.4000',
    '2. high': '29.7500',
    '3. low': '27.6250',
    '4. close': '28.5450',
    '5. volume': '2142924'
  },
  '2015-11-30': {
    '1. open': '29.0000',
    '2. high': '29.8000',
    '3. low': '27.0500',
    '4. close': '29.3550',
    '5. volume': '3893300'
  },
  '2015-10-30': {
    '1. open': '27.1650',
    '2. high': '29.4400',
    '3. low': '26.2600',
    '4. close': '29.1700',
    '5. volume': '2692781'
  },
  '2015-09-30': {
    '1. open': '26.6900',
    '2. high': '27.8750',
    '3. low': '25.3500',
    '4. close': '26.7600',
    '5. volume': '3644351'
  },
  '2015-08-31': {
    '1. open': '29.1500',
    '2. high': '29.6950',
    '3. low': '25.0000',
    '4. close': '26.8450',
    '5. volume': '5442749'
  },
  '2015-07-31': {
    '1. open': '27.6150',
    '2. high': '29.4400',
    '3. low': '26.5750',
    '4. close': '29.1050',
    '5. volume': '6088143'
  },
  '2015-06-30': {
    '1. open': '27.3000',
    '2. high': '28.3950',
    '3. low': '26.0500',
    '4. close': '27.5400',
    '5. volume': '3932923'
  },
  '2015-05-29': {
    '1. open': '29.3000',
    '2. high': '29.3000',
    '3. low': '26.3850',
    '4. close': '27.3400',
    '5. volume': '5621328'
  },
  '2015-04-30': {
    '1. open': '29.1750',
    '2. high': '31.0850',
    '3. low': '28.2800',
    '4. close': '28.4600',
    '5. volume': '5324612'
  },
  '2015-03-31': {
    '1. open': '28.7000',
    '2. high': '31.7150',
    '3. low': '27.8600',
    '4. close': '29.2050',
    '5. volume': '7846725'
  },
  '2015-02-27': {
    '1. open': '27.1900',
    '2. high': '28.7500',
    '3. low': '26.9100',
    '4. close': '28.6850',
    '5. volume': '2917552'
  },
  '2015-01-30': {
    '1. open': '25.5000',
    '2. high': '27.3250',
    '3. low': '24.5200',
    '4. close': '27.0100',
    '5. volume': '4193429'
  },
  '2014-12-30': {
    '1. open': '25.1150',
    '2. high': '25.9150',
    '3. low': '23.8000',
    '4. close': '25.2700',
    '5. volume': '3656032'
  },
  '2014-11-28': {
    '1. open': '25.7300',
    '2. high': '26.2850',
    '3. low': '23.8000',
    '4. close': '25.0850',
    '5. volume': '4457728'
  },
  '2014-10-31': {
    '1. open': '26.3050',
    '2. high': '26.4350',
    '3. low': '23.3550',
    '4. close': '25.7150',
    '5. volume': '2918563'
  },
  '2014-09-30': {
    '1. open': '26.3950',
    '2. high': '27.4000',
    '3. low': '26.0200',
    '4. close': '26.3450',
    '5. volume': '1944382'
  },
  '2014-08-29': {
    '1. open': '26.4000',
    '2. high': '26.8500',
    '3. low': '24.7000',
    '4. close': '26.4250',
    '5. volume': '2564996'
  },
  '2014-07-31': {
    '1. open': '26.0000',
    '2. high': '27.7350',
    '3. low': '25.9050',
    '4. close': '26.6450',
    '5. volume': '2926252'
  },
  '2014-06-30': {
    '1. open': '26.6150',
    '2. high': '26.6500',
    '3. low': '25.0100',
    '4. close': '25.6000',
    '5. volume': '2885621'
  },
  '2014-05-30': {
    '1. open': '27.7500',
    '2. high': '27.9500',
    '3. low': '25.6950',
    '4. close': '26.5650',
    '5. volume': '3007733'
  },
  '2014-04-30': {
    '1. open': '26.3150',
    '2. high': '27.7900',
    '3. low': '25.9500',
    '4. close': '27.5550',
    '5. volume': '3195204'
  },
  '2014-03-31': {
    '1. open': '24.8000',
    '2. high': '26.5000',
    '3. low': '24.3000',
    '4. close': '26.1100',
    '5. volume': '3266056'
  },
  '2014-02-28': {
    '1. open': '23.6350',
    '2. high': '25.4900',
    '3. low': '23.3700',
    '4. close': '25.2100',
    '5. volume': '3058624'
  },
  '2014-01-31': {
    '1. open': '24.7000',
    '2. high': '25.2550',
    '3. low': '23.2450',
    '4. close': '23.7600',
    '5. volume': '4176171'
  },
  '2013-12-30': {
    '1. open': '24.6000',
    '2. high': '24.9000',
    '3. low': '24.0200',
    '4. close': '24.6500',
    '5. volume': '2179781'
  },
  '2013-11-29': {
    '1. open': '25.3000',
    '2. high': '25.8950',
    '3. low': '24.3000',
    '4. close': '24.6000',
    '5. volume': '3019463'
  },
  '2013-10-31': {
    '1. open': '24.8000',
    '2. high': '25.7500',
    '3. low': '24.3050',
    '4. close': '25.2650',
    '5. volume': '2205182'
  },
  '2013-09-30': {
    '1. open': '24.3050',
    '2. high': '25.2500',
    '3. low': '23.2050',
    '4. close': '24.9000',
    '5. volume': '2965436'
  },
  '2013-08-30': {
    '1. open': '23.6950',
    '2. high': '25.1900',
    '3. low': '23.6950',
    '4. close': '24.1000',
    '5. volume': '3598365'
  },
  '2013-07-31': {
    '1. open': '24.2050',
    '2. high': '24.6500',
    '3. low': '22.2850',
    '4. close': '23.6950',
    '5. volume': '7692228'
  },
  '2013-06-28': {
    '1. open': '25.8800',
    '2. high': '26.0000',
    '3. low': '23.0100',
    '4. close': '24.2550',
    '5. volume': '4014350'
  },
  '2013-05-31': {
    '1. open': '24.5000',
    '2. high': '26.1950',
    '3. low': '23.2000',
    '4. close': '25.7650',
    '5. volume': '3125912'
  },
  '2013-04-30': {
    '1. open': '23.7500',
    '2. high': '24.7000',
    '3. low': '23.0700',
    '4. close': '24.6350',
    '5. volume': '2908300'
  },
  '2013-03-28': {
    '1. open': '22.5600',
    '2. high': '24.8800',
    '3. low': '21.8500',
    '4. close': '23.5550',
    '5. volume': '3027342'
  },
  '2013-02-28': {
    '1. open': '22.6500',
    '2. high': '23.5450',
    '3. low': '22.0800',
    '4. close': '22.5300',
    '5. volume': '2871643'
  },
  '2013-01-31': {
    '1. open': '21.9000',
    '2. high': '23.1700',
    '3. low': '21.6700',
    '4. close': '22.3750',
    '5. volume': '3514863'
  },
  '2012-12-28': {
    '1. open': '20.0000',
    '2. high': '22.0500',
    '3. low': '19.9550',
    '4. close': '21.4800',
    '5. volume': '5075945'
  },
  '2012-11-30': {
    '1. open': '19.5000',
    '2. high': '20.4000',
    '3. low': '19.1400',
    '4. close': '19.9100',
    '5. volume': '4038830'
  }
};

// tslint:disable:max-line-length
export const talanxCompany: Company = {
  id: 1161,
  name: 'Talanx AG',
  country: Country.Deutschland,
  city: 'Hannover',
  url: 'http://www.talanx.com/',
  description: 'Die Talanx AG ist ein börsennotierter deutscher Versicherungskonzern mit Sitz in Hannover. Talanx ist gemessen an den gebuchten Bruttoprämien der drittgrößte deutsche Versicherungskonzern[2] (nach der Allianz und Munich Re/ERGO) und die sechstgrößte Versicherungsgruppe in Europa[3]. Talanx ist in mehr als 150 Ländern aktiv. Größter Eigentümer ist mit 79,0 % der Aktien der HDI-Versicherungsverein auf Gegenseitigkeit, der im Wesentlichen als Eigentümergesellschaft des Talanx-Konzerns fungiert. Die übrigen 21,0 % der Aktien befinden sich im Streubesitz.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Talanx',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Talanx.svg/500px-Talanx.svg.png',
  products: [
    {
      id: 116110,
      name: 'Ampega',
      logo: 'https://www.talanx.com/~/media/Images/T/Talanx/content-images/brands/ampega_k_.png?h=146&w=151'
    },
    {
      id: 116111,
      name: 'civlife',
      logo: 'https://www.talanx.com/~/media/Images/T/Talanx/content-images/brands/logo-civ-life_2019.png?h=120&la=de-DE&w=120'
    },
    {
      id: 116112,
      name: 'hannover re',
      logo: 'https://www.talanx.com/~/media/Images/T/Talanx/content-images/brands/logo-hannover-re.png?h=120&la=de-DE&w=120'
    },
    {
      id: 116113,
      name: 'HDI',
      logo: 'https://www.talanx.com/~/media/Images/T/Talanx/content-images/brands/logo-hdi-2019.png?h=120&la=de-DE&w=120'
    },
    {
      id: 116114,
      name: 'LifeStyle Protection',
      logo: 'https://www.talanx.com/~/media/Images/T/Talanx/content-images/brands/logo_lsp.png?h=120&la=de-DE&w=120'
    },
    {
      id: 116115,
      name: 'neue leben Versicherungen',
      logo: 'https://www.talanx.com/~/media/Images/T/Talanx/content-images/brands/neue-leben-logo_2018.png?h=120&la=de-DE&w=120'
    },
    {
      id: 116116,
      name: 'PB Versicherungen',
      logo: 'https://www.talanx.com/~/media/Images/T/Talanx/content-images/brands/logo-pb-versicherungen.png?h=120&la=de-DE&w=120'
    },
    {
      id: 116117,
      name: 'Posta Biztosito',
      logo: 'https://www.talanx.com/~/media/Images/T/Talanx/content-images/brands/logo-posta.png?h=120&la=de-DE&w=120'
    },
    {
      id: 116118,
      name: 'Talanx',
      logo: 'https://www.talanx.com/~/media/Images/T/Talanx/content-images/brands/logo-talanx-brand.png?h=120&la=de-DE&w=120'
    },
    {
      id: 116119,
      name: 'Targo Versicherung',
      logo: 'https://www.talanx.com/~/media/Images/T/Talanx/content-images/brands/logo-targo-v.png?h=120&la=de-DE&w=120'
    },
    {
      id: 116120,
      name: 'TU Europa',
      logo: 'https://www.talanx.com/~/media/Images/T/Talanx/content-images/brands/logo_tu_europa_2018_.png?h=120&la=de-DE&w=120'
    },
    {
      id: 116121,
      name: 'Warta',
      logo: 'https://www.talanx.com/~/media/Images/T/Talanx/content-images/brands/logo-warta.png?h=120&la=de-DE&w=120'
    }
  ],
  industries: [141210, 141211, 141012],
  securityType: SecurityType.Namensaktie,
  currency: Currency.EUR,
  isin: 'DE000TLX1005',
  wkn: 'TLX100',
  symbol: 'TLX.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Versicherungen', 'Finanzdienstleistungen']
};
// tslint:enable:max-line-length

