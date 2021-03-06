import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 2.65, yield: 5.78}, {year: 2017, rate: 3.55}, {year: 2016, rate: 2.75}, {
    year: 2015,
    rate: 2.67,
    yield: 5.92
  }, {year: 2014, rate: 2.97, yield: 5.10}, {year: 2013, rate: 3.26, yield: 5.34}, {year: 2012, rate: 3.21, yield: 6.01}, {
    year: 2011,
    rate: 3.12,
    yield: 5.77
  }, {year: 2010, rate: 3.12, yield: 5.74}, {year: 2009, rate: 3.12, yield: 5.06}, {year: 2008, rate: 3.12, yield: 5.85}, {
    year: 2007,
    rate: 2.84,
    yield: 3.65
  }, {year: 2006, rate: 2.56, yield: 3.42}, {year: 2005, rate: 2.22, yield: 3.05}, {year: 2004, rate: 1.85, yield: 3.36}, {
    year: 2003,
    rate: 1.62,
    yield: 3.21
  }, {year: 2002, rate: 1.41, yield: 3.02}, {year: 2001, rate: 1.30, yield: 2.37}, {year: 2000, rate: 1.14, yield: 2.10}
];
const prices = {
  '2019-12-02': {
    '1. open': '48.0050',
    '2. high': '48.2700',
    '3. low': '47.0900',
    '4. close': '47.1200',
    '5. volume': '9262'
  },
  '2019-11-29': {
    '1. open': '47.4050',
    '2. high': '49.8000',
    '3. low': '47.3050',
    '4. close': '47.7000',
    '5. volume': '842863'
  },
  '2019-10-31': {
    '1. open': '47.7950',
    '2. high': '48.2150',
    '3. low': '44.3200',
    '4. close': '47.1950',
    '5. volume': '1235233'
  },
  '2019-09-30': {
    '1. open': '45.3650',
    '2. high': '49.5850',
    '3. low': '44.4650',
    '4. close': '47.7900',
    '5. volume': '839668'
  },
  '2019-08-30': {
    '1. open': '46.6000',
    '2. high': '46.8850',
    '3. low': '42.6650',
    '4. close': '45.3200',
    '5. volume': '840698'
  },
  '2019-07-31': {
    '1. open': '49.8250',
    '2. high': '50.6200',
    '3. low': '47.0000',
    '4. close': '47.0600',
    '5. volume': '402514'
  },
  '2019-06-28': {
    '1. open': '46.0750',
    '2. high': '49.7300',
    '3. low': '46.0700',
    '4. close': '49.3050',
    '5. volume': '413893'
  },
  '2019-05-31': {
    '1. open': '49.4300',
    '2. high': '49.9100',
    '3. low': '46.0200',
    '4. close': '46.6200',
    '5. volume': '558086'
  },
  '2019-04-30': {
    '1. open': '49.8450',
    '2. high': '51.4300',
    '3. low': '48.3700',
    '4. close': '49.4950',
    '5. volume': '445580'
  },
  '2019-03-29': {
    '1. open': '50.3300',
    '2. high': '52.4100',
    '3. low': '49.1000',
    '4. close': '49.5450',
    '5. volume': '747902'
  },
  '2019-02-28': {
    '1. open': '47.6450',
    '2. high': '50.2900',
    '3. low': '47.3900',
    '4. close': '49.9450',
    '5. volume': '939520'
  },
  '2019-01-31': {
    '1. open': '45.0950',
    '2. high': '49.1050',
    '3. low': '45.0000',
    '4. close': '47.9350',
    '5. volume': '725249'
  },
  '2018-12-28': {
    '1. open': '50.4000',
    '2. high': '50.6500',
    '3. low': '44.0000',
    '4. close': '46.3150',
    '5. volume': '650214'
  },
  '2018-11-30': {
    '1. open': '51.4200',
    '2. high': '52.2100',
    '3. low': '47.3200',
    '4. close': '49.0850',
    '5. volume': '964598'
  },
  '2018-10-31': {
    '1. open': '56.2100',
    '2. high': '56.7800',
    '3. low': '49.4750',
    '4. close': '51.9300',
    '5. volume': '1324080'
  },
  '2018-09-28': {
    '1. open': '53.8300',
    '2. high': '56.1500',
    '3. low': '51.7200',
    '4. close': '55.8900',
    '5. volume': '791622'
  },
  '2018-08-31': {
    '1. open': '55.6600',
    '2. high': '56.2300',
    '3. low': '51.8600',
    '4. close': '53.9300',
    '5. volume': '797908'
  },
  '2018-07-31': {
    '1. open': '51.6700',
    '2. high': '56.0500',
    '3. low': '51.3600',
    '4. close': '55.8900',
    '5. volume': '798589'
  },
  '2018-06-29': {
    '1. open': '52.5400',
    '2. high': '53.5800',
    '3. low': '50.6200',
    '4. close': '52.3200',
    '5. volume': '698032'
  },
  '2018-05-31': {
    '1. open': '52.1000',
    '2. high': '54.9100',
    '3. low': '49.5250',
    '4. close': '51.9900',
    '5. volume': '659195'
  },
  '2018-04-30': {
    '1. open': '46.3950',
    '2. high': '52.2700',
    '3. low': '46.3300',
    '4. close': '52.2700',
    '5. volume': '533270'
  },
  '2018-03-29': {
    '1. open': '46.7600',
    '2. high': '47.8000',
    '3. low': '45.3000',
    '4. close': '46.2450',
    '5. volume': '324902'
  },
  '2018-02-28': {
    '1. open': '47.0700',
    '2. high': '47.5450',
    '3. low': '43.6950',
    '4. close': '46.8950',
    '5. volume': '728691'
  },
  '2018-01-31': {
    '1. open': '47.7350',
    '2. high': '48.7500',
    '3. low': '46.1950',
    '4. close': '46.6350',
    '5. volume': '551666'
  },
  '2017-12-29': {
    '1. open': '47.7350',
    '2. high': '47.7350',
    '3. low': '47.7350',
    '4. close': '47.7350',
    '5. volume': '0'
  },
  '2017-11-30': {
    '1. open': '48.0000',
    '2. high': '49.3300',
    '3. low': '45.9600',
    '4. close': '47.7350',
    '5. volume': '731071'
  },
  '2017-10-31': {
    '1. open': '45.5300',
    '2. high': '47.7700',
    '3. low': '45.0700',
    '4. close': '47.7250',
    '5. volume': '437112'
  },
  '2017-09-29': {
    '1. open': '43.6100',
    '2. high': '46.1650',
    '3. low': '43.0000',
    '4. close': '45.4000',
    '5. volume': '556815'
  },
  '2017-08-31': {
    '1. open': '43.3400',
    '2. high': '44.1300',
    '3. low': '42.3150',
    '4. close': '43.4850',
    '5. volume': '433582'
  },
  '2017-07-31': {
    '1. open': '43.8200',
    '2. high': '44.2650',
    '3. low': '42.2350',
    '4. close': '42.9600',
    '5. volume': '465232'
  },
  '2017-06-30': {
    '1. open': '47.6650',
    '2. high': '47.8500',
    '3. low': '43.1400',
    '4. close': '43.1400',
    '5. volume': '452393'
  },
  '2017-05-31': {
    '1. open': '47.2450',
    '2. high': '48.7700',
    '3. low': '46.5700',
    '4. close': '47.2700',
    '5. volume': '433032'
  },
  '2017-04-28': {
    '1. open': '47.5050',
    '2. high': '49.0000',
    '3. low': '46.3200',
    '4. close': '47.1850',
    '5. volume': '312052'
  },
  '2017-03-31': {
    '1. open': '47.4250',
    '2. high': '48.2450',
    '3. low': '45.8500',
    '4. close': '47.3850',
    '5. volume': '389743'
  },
  '2017-02-28': {
    '1. open': '47.0600',
    '2. high': '48.9300',
    '3. low': '46.1200',
    '4. close': '47.0400',
    '5. volume': '321566'
  },
  '2017-01-31': {
    '1. open': '48.6400',
    '2. high': '49.4900',
    '3. low': '46.3750',
    '4. close': '46.8900',
    '5. volume': '389875'
  },
  '2016-12-30': {
    '1. open': '45.2400',
    '2. high': '48.8350',
    '3. low': '44.1950',
    '4. close': '48.6050',
    '5. volume': '541019'
  },
  '2016-11-30': {
    '1. open': '43.5150',
    '2. high': '45.3200',
    '3. low': '41.8600',
    '4. close': '45.0550',
    '5. volume': '440830'
  },
  '2016-10-31': {
    '1. open': '42.4500',
    '2. high': '44.8000',
    '3. low': '42.3750',
    '4. close': '43.7100',
    '5. volume': '317047'
  },
  '2016-09-30': {
    '1. open': '42.9650',
    '2. high': '44.9000',
    '3. low': '40.5550',
    '4. close': '42.2250',
    '5. volume': '415407'
  },
  '2016-08-31': {
    '1. open': '43.1150',
    '2. high': '43.8950',
    '3. low': '40.9750',
    '4. close': '42.9750',
    '5. volume': '266607'
  },
  '2016-07-29': {
    '1. open': '43.5250',
    '2. high': '44.5900',
    '3. low': '41.5000',
    '4. close': '42.7400',
    '5. volume': '361638'
  },
  '2016-06-30': {
    '1. open': '43.6300',
    '2. high': '44.0950',
    '3. low': '39.2000',
    '4. close': '43.3450',
    '5. volume': '520360'
  },
  '2016-05-31': {
    '1. open': '44.2500',
    '2. high': '44.6900',
    '3. low': '41.7500',
    '4. close': '43.5500',
    '5. volume': '317713'
  },
  '2016-04-29': {
    '1. open': '39.4600',
    '2. high': '45.2100',
    '3. low': '38.0800',
    '4. close': '44.1350',
    '5. volume': '496401'
  },
  '2016-03-31': {
    '1. open': '41.3950',
    '2. high': '43.4000',
    '3. low': '39.5750',
    '4. close': '40.1000',
    '5. volume': '477114'
  },
  '2016-02-29': {
    '1. open': '40.7400',
    '2. high': '41.4000',
    '3. low': '35.1650',
    '4. close': '41.2900',
    '5. volume': '530789'
  },
  '2016-01-29': {
    '1. open': '40.7850',
    '2. high': '41.2100',
    '3. low': '36.1700',
    '4. close': '40.8550',
    '5. volume': '776839'
  },
  '2015-12-30': {
    '1. open': '46.9100',
    '2. high': '47.3400',
    '3. low': '40.4700',
    '4. close': '41.9550',
    '5. volume': '707784'
  },
  '2015-11-30': {
    '1. open': '43.8050',
    '2. high': '47.2800',
    '3. low': '43.8050',
    '4. close': '47.0650',
    '5. volume': '877170'
  },
  '2015-10-30': {
    '1. open': '40.8550',
    '2. high': '46.3500',
    '3. low': '40.2900',
    '4. close': '43.9500',
    '5. volume': '1033354'
  },
  '2015-09-30': {
    '1. open': '40.7050',
    '2. high': '42.5450',
    '3. low': '38.1950',
    '4. close': '40.2800',
    '5. volume': '782671'
  },
  '2015-08-31': {
    '1. open': '44.9300',
    '2. high': '46.4800',
    '3. low': '37.0000',
    '4. close': '40.9050',
    '5. volume': '1229447'
  },
  '2015-07-31': {
    '1. open': '43.9900',
    '2. high': '46.2800',
    '3. low': '41.8850',
    '4. close': '45.1900',
    '5. volume': '830892'
  },
  '2015-06-30': {
    '1. open': '46.2200',
    '2. high': '46.8700',
    '3. low': '43.2900',
    '4. close': '43.7800',
    '5. volume': '722738'
  },
  '2015-05-29': {
    '1. open': '48.0250',
    '2. high': '48.8900',
    '3. low': '46.0200',
    '4. close': '46.2100',
    '5. volume': '619127'
  },
  '2015-04-30': {
    '1. open': '46.2100',
    '2. high': '50.3000',
    '3. low': '45.6800',
    '4. close': '48.3200',
    '5. volume': '964838'
  },
  '2015-03-31': {
    '1. open': '47.9250',
    '2. high': '48.3000',
    '3. low': '44.1900',
    '4. close': '46.4000',
    '5. volume': '1268736'
  },
  '2015-02-27': {
    '1. open': '46.0000',
    '2. high': '48.5500',
    '3. low': '45.5300',
    '4. close': '48.0800',
    '5. volume': '1179171'
  },
  '2015-01-30': {
    '1. open': '43.3350',
    '2. high': '46.7850',
    '3. low': '39.4000',
    '4. close': '45.5000',
    '5. volume': '1728839'
  },
  '2014-12-30': {
    '1. open': '43.5350',
    '2. high': '46.5350',
    '3. low': '38.2300',
    '4. close': '42.8850',
    '5. volume': '1645708'
  },
  '2014-11-28': {
    '1. open': '47.3300',
    '2. high': '49.3800',
    '3. low': '43.6750',
    '4. close': '45.0000',
    '5. volume': '742490'
  },
  '2014-10-31': {
    '1. open': '51.2200',
    '2. high': '51.2200',
    '3. low': '40.8050',
    '4. close': '47.3300',
    '5. volume': '783581'
  },
  '2014-09-30': {
    '1. open': '50.4900',
    '2. high': '52.0700',
    '3. low': '48.5000',
    '4. close': '51.6800',
    '5. volume': '344709'
  },
  '2014-08-29': {
    '1. open': '48.5700',
    '2. high': '50.2300',
    '3. low': '47.0150',
    '4. close': '50.1300',
    '5. volume': '358249'
  },
  '2014-07-31': {
    '1. open': '52.7900',
    '2. high': '53.5900',
    '3. low': '48.1200',
    '4. close': '48.1200',
    '5. volume': '488545'
  },
  '2014-06-30': {
    '1. open': '51.3900',
    '2. high': '54.6700',
    '3. low': '50.3800',
    '4. close': '52.8500',
    '5. volume': '295182'
  },
  '2014-05-30': {
    '1. open': '50.9900',
    '2. high': '52.9400',
    '3. low': '50.4000',
    '4. close': '51.8600',
    '5. volume': '392879'
  },
  '2014-04-30': {
    '1. open': '47.6300',
    '2. high': '51.7600',
    '3. low': '47.2700',
    '4. close': '51.3700',
    '5. volume': '339252'
  },
  '2014-03-31': {
    '1. open': '46.4800',
    '2. high': '48.2550',
    '3. low': '44.8150',
    '4. close': '47.8000',
    '5. volume': '384127'
  },
  '2014-02-28': {
    '1. open': '42.4550',
    '2. high': '46.9500',
    '3. low': '41.2550',
    '4. close': '46.9500',
    '5. volume': '442361'
  },
  '2014-01-31': {
    '1. open': '44.5050',
    '2. high': '44.7200',
    '3. low': '41.3200',
    '4. close': '42.1500',
    '5. volume': '506974'
  },
  '2013-12-30': {
    '1. open': '44.6400',
    '2. high': '44.6400',
    '3. low': '41.2000',
    '4. close': '44.1900',
    '5. volume': '533864'
  },
  '2013-11-29': {
    '1. open': '44.9450',
    '2. high': '45.0950',
    '3. low': '43.4800',
    '4. close': '44.5600',
    '5. volume': '365552'
  },
  '2013-10-31': {
    '1. open': '42.9300',
    '2. high': '45.6750',
    '3. low': '42.2150',
    '4. close': '45.3550',
    '5. volume': '521584'
  },
  '2013-09-30': {
    '1. open': '41.9750',
    '2. high': '43.7600',
    '3. low': '41.4700',
    '4. close': '42.7250',
    '5. volume': '615669'
  },
  '2013-08-30': {
    '1. open': '40.0950',
    '2. high': '42.8300',
    '3. low': '39.7400',
    '4. close': '41.8850',
    '5. volume': '636259'
  },
  '2013-07-31': {
    '1. open': '37.7350',
    '2. high': '40.3750',
    '3. low': '36.6400',
    '4. close': '39.9050',
    '5. volume': '491854'
  },
  '2013-06-28': {
    '1. open': '38.5900',
    '2. high': '39.0850',
    '3. low': '35.6450',
    '4. close': '37.5100',
    '5. volume': '484075'
  },
  '2013-05-31': {
    '1. open': '38.2400',
    '2. high': '40.4000',
    '3. low': '37.8850',
    '4. close': '38.7850',
    '5. volume': '471056'
  },
  '2013-04-30': {
    '1. open': '37.5750',
    '2. high': '38.3500',
    '3. low': '35.2000',
    '4. close': '38.0600',
    '5. volume': '694663'
  },
  '2013-03-28': {
    '1. open': '38.1050',
    '2. high': '39.6000',
    '3. low': '37.1700',
    '4. close': '37.2950',
    '5. volume': '447162'
  },
  '2013-02-28': {
    '1. open': '40.0100',
    '2. high': '40.3650',
    '3. low': '37.1000',
    '4. close': '38.3400',
    '5. volume': '552864'
  },
  '2013-01-31': {
    '1. open': '39.6700',
    '2. high': '40.7950',
    '3. low': '39.0100',
    '4. close': '40.0000',
    '5. volume': '440380'
  },
  '2012-12-28': {
    '1. open': '38.8200',
    '2. high': '39.9050',
    '3. low': '38.1000',
    '4. close': '39.1400',
    '5. volume': '306194'
  },
  '2012-11-30': {
    '1. open': '38.5900',
    '2. high': '39.6600',
    '3. low': '36.7850',
    '4. close': '38.8400',
    '5. volume': '316277'
  },
  '2012-10-31': {
    '1. open': '38.6100',
    '2. high': '40.0000',
    '3. low': '37.6350',
    '4. close': '38.9900',
    '5. volume': '370705'
  },
  '2012-09-28': {
    '1. open': '39.4750',
    '2. high': '42.0000',
    '3. low': '38.8000',
    '4. close': '38.8000',
    '5. volume': '523953'
  },
  '2012-08-31': {
    '1. open': '37.9000',
    '2. high': '40.6350',
    '3. low': '37.2500',
    '4. close': '39.7600',
    '5. volume': '583609'
  },
  '2012-07-31': {
    '1. open': '35.4750',
    '2. high': '38.0500',
    '3. low': '34.5000',
    '4. close': '37.8000',
    '5. volume': '563939'
  },
  '2012-06-29': {
    '1. open': '34.9150',
    '2. high': '35.5700',
    '3. low': '33.4450',
    '4. close': '35.4000',
    '5. volume': '451267'
  },
  '2012-05-31': {
    '1. open': '36.8200',
    '2. high': '36.9000',
    '3. low': '33.9200',
    '4. close': '34.7500',
    '5. volume': '676985'
  },
  '2012-04-30': {
    '1. open': '38.6950',
    '2. high': '39.3800',
    '3. low': '35.4350',
    '4. close': '36.4850',
    '5. volume': '989097'
  },
  '2012-03-30': {
    '1. open': '41.9850',
    '2. high': '42.9550',
    '3. low': '36.9000',
    '4. close': '38.3100',
    '5. volume': '1811495'
  },
  '2012-02-29': {
    '1. open': '40.9150',
    '2. high': '42.3750',
    '3. low': '40.3000',
    '4. close': '42.1400',
    '5. volume': '562165'
  },
  '2012-01-31': {
    '1. open': '39.5700',
    '2. high': '40.8500',
    '3. low': '38.6650',
    '4. close': '40.3100',
    '5. volume': '449523'
  },
  '2011-12-30': {
    '1. open': '38.2450',
    '2. high': '39.6000',
    '3. low': '36.1850',
    '4. close': '39.4500',
    '5. volume': '427411'
  },
  '2011-11-30': {
    '1. open': '37.0050',
    '2. high': '38.7000',
    '3. low': '34.6100',
    '4. close': '38.1250',
    '5. volume': '499677'
  },
  '2011-10-31': {
    '1. open': '32.1350',
    '2. high': '39.7800',
    '3. low': '31.8200',
    '4. close': '37.8300',
    '5. volume': '576694'
  },
  '2011-09-30': {
    '1. open': '34.2150',
    '2. high': '34.8000',
    '3. low': '29.4800',
    '4. close': '32.8650',
    '5. volume': '665346'
  },
  '2011-08-31': {
    '1. open': '38.0000',
    '2. high': '38.1000',
    '3. low': '30.4000',
    '4. close': '33.9300',
    '5. volume': '1453304'
  },
  '2011-07-29': {
    '1. open': '39.8500',
    '2. high': '40.8900',
    '3. low': '37.4000',
    '4. close': '37.9650',
    '5. volume': '506433'
  },
  '2011-06-30': {
    '1. open': '40.0900',
    '2. high': '40.2450',
    '3. low': '37.3300',
    '4. close': '39.6200',
    '5. volume': '541678'
  },
  '2011-05-31': {
    '1. open': '43.5000',
    '2. high': '43.5450',
    '3. low': '39.0500',
    '4. close': '39.9950',
    '5. volume': '596536'
  },
  '2011-04-29': {
    '1. open': '43.3300',
    '2. high': '43.7350',
    '3. low': '40.3800',
    '4. close': '43.1700',
    '5. volume': '429539'
  },
  '2011-03-31': {
    '1. open': '44.3900',
    '2. high': '44.6550',
    '3. low': '39.7550',
    '4. close': '43.2050',
    '5. volume': '1092984'
  },
  '2011-02-28': {
    '1. open': '43.2850',
    '2. high': '44.4250',
    '3. low': '42.3550',
    '4. close': '44.4050',
    '5. volume': '977037'
  },
  '2011-01-31': {
    '1. open': '40.1550',
    '2. high': '43.5900',
    '3. low': '39.9800',
    '4. close': '42.8600',
    '5. volume': '1318549'
  },
  '2010-12-30': {
    '1. open': '37.7250',
    '2. high': '40.7900',
    '3. low': '37.2450',
    '4. close': '40.1500',
    '5. volume': '845904'
  },
  '2010-11-30': {
    '1. open': '39.5600',
    '2. high': '41.2550',
    '3. low': '36.9500',
    '4. close': '37.3800',
    '5. volume': '1327797'
  },
  '2010-10-29': {
    '1. open': '38.0400',
    '2. high': '39.6800',
    '3. low': '37.5400',
    '4. close': '39.1500',
    '5. volume': '733458'
  },
  '2010-09-30': {
    '1. open': '36.8400',
    '2. high': '39.5800',
    '3. low': '36.8400',
    '4. close': '37.9750',
    '5. volume': '677616'
  },
  '2010-08-31': {
    '1. open': '39.1000',
    '2. high': '41.0000',
    '3. low': '36.2500',
    '4. close': '36.5100',
    '5. volume': '751291'
  },
  '2010-07-30': {
    '1. open': '36.5800',
    '2. high': '39.6450',
    '3. low': '35.6500',
    '4. close': '38.9000',
    '5. volume': '582560'
  },
  '2010-06-30': {
    '1. open': '37.5500',
    '2. high': '40.9800',
    '3. low': '36.5000',
    '4. close': '36.8100',
    '5. volume': '746769'
  },
  '2010-05-31': {
    '1. open': '38.5000',
    '2. high': '38.5000',
    '3. low': '37.7000',
    '4. close': '37.9400',
    '5. volume': '49542'
  },
  '2009-01-19': {
    '1. open': '38.8300',
    '2. high': '42.3800',
    '3. low': '36.5500',
    '4. close': '37.0500',
    '5. volume': '149946'
  },
  '2008-12-30': {
    '1. open': '41.1100',
    '2. high': '41.9000',
    '3. low': '35.5000',
    '4. close': '38.8200',
    '5. volume': '759170'
  },
  '2008-11-28': {
    '1. open': '43.0900',
    '2. high': '44.7000',
    '3. low': '36.3400',
    '4. close': '40.5400',
    '5. volume': '748316'
  },
  '2008-10-31': {
    '1. open': '42.9400',
    '2. high': '43.6800',
    '3. low': '31.7000',
    '4. close': '42.9000',
    '5. volume': '934968'
  },
  '2008-09-30': {
    '1. open': '48.9000',
    '2. high': '48.9300',
    '3. low': '40.5600',
    '4. close': '42.4300',
    '5. volume': '490269'
  },
  '2008-08-29': {
    '1. open': '47.4500',
    '2. high': '49.3400',
    '3. low': '47.4500',
    '4. close': '49.0900',
    '5. volume': '128988'
  },
  '2008-07-28': {
    '1. open': '53.9300',
    '2. high': '54.0800',
    '3. low': '46.3200',
    '4. close': '48.9000',
    '5. volume': '318658'
  },
  '2008-06-30': {
    '1. open': '56.2500',
    '2. high': '56.2500',
    '3. low': '51.1700',
    '4. close': '53.9200',
    '5. volume': '251709'
  },
  '2008-05-30': {
    '1. open': '54.4000',
    '2. high': '58.2600',
    '3. low': '53.2000',
    '4. close': '56.0200',
    '5. volume': '361249'
  },
  '2008-04-30': {
    '1. open': '46.7800',
    '2. high': '54.3300',
    '3. low': '46.4000',
    '4. close': '53.8000',
    '5. volume': '347958'
  },
  '2008-03-31': {
    '1. open': '49.3600',
    '2. high': '49.8000',
    '3. low': '45.5000',
    '4. close': '46.9500',
    '5. volume': '379800'
  },
  '2008-02-29': {
    '1. open': '49.3400',
    '2. high': '51.4400',
    '3. low': '47.4800',
    '4. close': '49.8800',
    '5. volume': '369544'
  },
  '2008-01-31': {
    '1. open': '56.6700',
    '2. high': '59.4100',
    '3. low': '46.5300',
    '4. close': '48.8300',
    '5. volume': '903386'
  }
};

// tslint:disable:max-line-length
export const totalCompany: Company = {
  id: 1200,
  name: 'Total S.A.',
  country: Country.Frankreich,
  city: 'Courbevoie',
  url: 'http://www.total.com/',
  description: 'Die Total S.A. ist ein französisches Mineralölunternehmen mit Hauptsitz im Tour Total Coupole im Hochhausviertel La Défense in Courbevoie bei Paris. Mit einem Umsatzvolumen von 155,8 Mrd. US-Dollar[5][6] (Stand: 2017) ist es das viertgrößte Mineralölunternehmen und das insgesamt achtgrößte Industrieunternehmen der Welt. Total beschäftigt in 130 Ländern etwa 99.000 Angestellte[3] (2016). In 30 Ländern fördert das Unternehmen Öl und Gas. Die Aktie der Total S.A. gehört dem Börsenindex CAC 40 an und ist an der New York Stock Exchange und der Euronext in Paris notiert.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Total_(Unternehmen)',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/1/19/Total_Logo.svg/201px-Total_Logo.svg.png',
  products: [
    {
      id: 120010,
      name: 'Hutchison',
      logo: 'https://www.hutchinson.com/sites/all/themes/custom/hutchinson_theme/app/images/hutchinson-logo.png'
    },
    {
      id: 120011,
      name: 'Total Tankstellen',
      logo: 'https://www.total.com/sites/default/files/styles/logo/public/logo_total_290x70px_v3.png'
    },
    {
      id: 120012,
      name: 'Saft Batterien',
      logo: 'https://www.saftbatteries.com/sites/all/themes/custom/saft_batteries/library/images/logo-saft.svg'
    }
  ],
  industries: [1510, 171310, 171311, 171312, 171011],
  securityType: SecurityType.Aktie,
  currency: Currency.EUR,
  isin: 'FR0000120271',
  wkn: '850727',
  symbol: 'TOTB.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.MSCIWorld, Indices.DowJonesSustainabilityEurozone],
  end_of_month_prices: prices,
  dividends,
  tags: ['Ölförderung', 'Gasförderung', 'Weiterverarbeitung', 'Energiegewinnung', 'Elf', 'Stationen', 'Tankstellen']
};
// tslint:enable:max-line-length

