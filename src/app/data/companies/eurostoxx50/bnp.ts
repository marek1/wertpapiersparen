import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 3.02, yield: 7.66}, {year: 2017, rate: 3.02}, {year: 2016, rate: 2.70}, {
    year: 2015,
    rate: 2.31,
    yield: 4.39
  }, {year: 2014, rate: 1.50, yield: 3.05}, {year: 2013, rate: 1.50, yield: 2.65}, {year: 2012, rate: 1.50, yield: 3.52}, {
    year: 2011,
    rate: 1.20,
    yield: 3.95
  }, {year: 2010, rate: 2.10, yield: 4.41}, {year: 2009, rate: 1.50, yield: 2.69}, {year: 2008, rate: 1.00, yield: 3.31}, {
    year: 2007,
    rate: 3.35,
    yield: 4.51
  }, {year: 2006, rate: 3.10, yield: 3.75}, {year: 2005, rate: 2.60, yield: 3.80}, {year: 2004, rate: 2.00, yield: 3.75}, {
    year: 2003,
    rate: 2.18,
    yield: 4.37
  }, {year: 2002, rate: 1.80, yield: 4.64}, {year: 2001, rate: 1.80, yield: 3.58}, {year: 2000, rate: 1.69, yield: 3.61}
];
const prices = {
  '2019-11-29': {
    '1. open': '46.8000',
    '2. high': '52.2500',
    '3. low': '46.6850',
    '4. close': '51.1600',
    '5. volume': '116515'
  },
  '2019-10-31': {
    '1. open': '44.7300',
    '2. high': '48.3650',
    '3. low': '41.6350',
    '4. close': '46.8950',
    '5. volume': '165771'
  },
  '2019-09-30': {
    '1. open': '41.0200',
    '2. high': '45.5100',
    '3. low': '40.5250',
    '4. close': '44.7450',
    '5. volume': '122601'
  },
  '2019-08-30': {
    '1. open': '43.0600',
    '2. high': '43.0600',
    '3. low': '38.9000',
    '4. close': '41.0250',
    '5. volume': '119845'
  },
  '2019-07-31': {
    '1. open': '42.4200',
    '2. high': '44.5450',
    '3. low': '41.2650',
    '4. close': '42.1800',
    '5. volume': '126265'
  },
  '2019-06-28': {
    '1. open': '40.6200',
    '2. high': '42.4900',
    '3. low': '39.9300',
    '4. close': '41.8350',
    '5. volume': '84762'
  },
  '2019-05-31': {
    '1. open': '48.0000',
    '2. high': '49.2500',
    '3. low': '40.4900',
    '4. close': '40.9350',
    '5. volume': '192164'
  },
  '2019-04-30': {
    '1. open': '43.0700',
    '2. high': '49.0550',
    '3. low': '42.8300',
    '4. close': '47.3700',
    '5. volume': '207071'
  },
  '2019-03-29': {
    '1. open': '45.3650',
    '2. high': '45.5000',
    '3. low': '41.1000',
    '4. close': '42.5350',
    '5. volume': '309293'
  },
  '2019-02-28': {
    '1. open': '40.7700',
    '2. high': '45.4000',
    '3. low': '39.6350',
    '4. close': '45.0600',
    '5. volume': '219394'
  },
  '2019-01-31': {
    '1. open': '38.4650',
    '2. high': '43.1000',
    '3. low': '38.1500',
    '4. close': '40.9550',
    '5. volume': '188795'
  },
  '2018-12-28': {
    '1. open': '45.2550',
    '2. high': '45.2550',
    '3. low': '38.2000',
    '4. close': '39.3850',
    '5. volume': '171176'
  },
  '2018-11-30': {
    '1. open': '45.7450',
    '2. high': '47.2650',
    '3. low': '43.7500',
    '4. close': '44.3800',
    '5. volume': '173999'
  },
  '2018-10-31': {
    '1. open': '52.2300',
    '2. high': '52.6800',
    '3. low': '45.4150',
    '4. close': '46.1350',
    '5. volume': '305380'
  },
  '2018-09-28': {
    '1. open': '50.5500',
    '2. high': '55.3200',
    '3. low': '50.1000',
    '4. close': '52.7300',
    '5. volume': '242337'
  },
  '2018-08-31': {
    '1. open': '56.3000',
    '2. high': '56.3000',
    '3. low': '50.2000',
    '4. close': '50.5700',
    '5. volume': '215960'
  },
  '2018-07-31': {
    '1. open': '52.4700',
    '2. high': '55.9700',
    '3. low': '51.2700',
    '4. close': '55.6900',
    '5. volume': '131861'
  },
  '2018-06-29': {
    '1. open': '54.0200',
    '2. high': '55.1500',
    '3. low': '51.7300',
    '4. close': '53.1900',
    '5. volume': '222488'
  },
  '2018-05-31': {
    '1. open': '64.1700',
    '2. high': '64.3300',
    '3. low': '52.7800',
    '4. close': '53.1800',
    '5. volume': '245031'
  },
  '2018-04-30': {
    '1. open': '60.2300',
    '2. high': '64.6800',
    '3. low': '58.4300',
    '4. close': '63.8700',
    '5. volume': '75234'
  },
  '2018-03-29': {
    '1. open': '64.8600',
    '2. high': '64.9000',
    '3. low': '58.4500',
    '4. close': '60.1000',
    '5. volume': '161128'
  },
  '2018-02-28': {
    '1. open': '67.4200',
    '2. high': '67.4800',
    '3. low': '62.2200',
    '4. close': '65.4000',
    '5. volume': '139941'
  },
  '2018-01-31': {
    '1. open': '64.3300',
    '2. high': '68.6200',
    '3. low': '61.8600',
    '4. close': '66.6300',
    '5. volume': '129056'
  },
  '2017-12-29': {
    '1. open': '64.3300',
    '2. high': '64.3300',
    '3. low': '64.3300',
    '4. close': '64.3300',
    '5. volume': '0'
  },
  '2017-11-30': {
    '1. open': '67.1300',
    '2. high': '67.1300',
    '3. low': '62.5600',
    '4. close': '64.3300',
    '5. volume': '91950'
  },
  '2017-10-31': {
    '1. open': '68.2500',
    '2. high': '69.1600',
    '3. low': '65.6500',
    '4. close': '68.8800',
    '5. volume': '153664'
  },
  '2017-09-29': {
    '1. open': '64.1900',
    '2. high': '68.4300',
    '3. low': '62.2000',
    '4. close': '68.2000',
    '5. volume': '117928'
  },
  '2017-08-31': {
    '1. open': '66.1300',
    '2. high': '68.8000',
    '3. low': '62.7500',
    '4. close': '64.5200',
    '5. volume': '156013'
  },
  '2017-07-31': {
    '1. open': '63.9400',
    '2. high': '67.0600',
    '3. low': '63.3400',
    '4. close': '65.5800',
    '5. volume': '91046'
  },
  '2017-06-30': {
    '1. open': '62.9000',
    '2. high': '65.3500',
    '3. low': '61.1000',
    '4. close': '62.8500',
    '5. volume': '108107'
  },
  '2017-05-31': {
    '1. open': '65.0100',
    '2. high': '68.1700',
    '3. low': '62.6700',
    '4. close': '63.0000',
    '5. volume': '203030'
  },
  '2017-04-28': {
    '1. open': '62.2800',
    '2. high': '67.5000',
    '3. low': '57.3100',
    '4. close': '65.0700',
    '5. volume': '136113'
  },
  '2017-03-31': {
    '1. open': '55.8300',
    '2. high': '62.7700',
    '3. low': '55.8300',
    '4. close': '62.2200',
    '5. volume': '148860'
  },
  '2017-02-28': {
    '1. open': '59.8500',
    '2. high': '61.8200',
    '3. low': '53.9900',
    '4. close': '55.2900',
    '5. volume': '182920'
  },
  '2017-01-31': {
    '1. open': '60.0200',
    '2. high': '63.2600',
    '3. low': '59.0500',
    '4. close': '59.4300',
    '5. volume': '59101'
  },
  '2016-12-30': {
    '1. open': '54.7100',
    '2. high': '62.0300',
    '3. low': '53.9400',
    '4. close': '60.0000',
    '5. volume': '68914'
  },
  '2016-11-30': {
    '1. open': '52.9100',
    '2. high': '56.8900',
    '3. low': '50.5500',
    '4. close': '55.1700',
    '5. volume': '59617'
  },
  '2016-10-31': {
    '1. open': '45.9500',
    '2. high': '54.0000',
    '3. low': '45.9300',
    '4. close': '53.0100',
    '5. volume': '56693'
  },
  '2016-09-30': {
    '1. open': '46.4950',
    '2. high': '48.5000',
    '3. low': '43.6000',
    '4. close': '44.0200',
    '5. volume': '30528'
  },
  '2016-08-31': {
    '1. open': '45.0650',
    '2. high': '46.6000',
    '3. low': '41.5750',
    '4. close': '45.9250',
    '5. volume': '47266'
  },
  '2016-07-29': {
    '1. open': '39.7400',
    '2. high': '44.7800',
    '3. low': '38.0100',
    '4. close': '44.2750',
    '5. volume': '58596'
  },
  '2016-06-30': {
    '1. open': '49.0950',
    '2. high': '49.0950',
    '3. low': '35.5100',
    '4. close': '39.7950',
    '5. volume': '183732'
  },
  '2016-05-31': {
    '1. open': '46.4000',
    '2. high': '50.4900',
    '3. low': '42.9900',
    '4. close': '50.1300',
    '5. volume': '61698'
  },
  '2016-04-29': {
    '1. open': '43.5750',
    '2. high': '48.1700',
    '3. low': '41.1800',
    '4. close': '46.9650',
    '5. volume': '58245'
  },
  '2016-03-31': {
    '1. open': '43.0000',
    '2. high': '49.0000',
    '3. low': '42.6750',
    '4. close': '43.7350',
    '5. volume': '41663'
  },
  '2016-02-29': {
    '1. open': '43.8550',
    '2. high': '44.0950',
    '3. low': '37.2550',
    '4. close': '42.8900',
    '5. volume': '115321'
  },
  '2016-01-29': {
    '1. open': '51.2400',
    '2. high': '51.9100',
    '3. low': '42.1900',
    '4. close': '43.5600',
    '5. volume': '60884'
  },
  '2015-12-30': {
    '1. open': '56.4700',
    '2. high': '57.0000',
    '3. low': '50.2200',
    '4. close': '52.8400',
    '5. volume': '49217'
  },
  '2015-11-30': {
    '1. open': '54.9500',
    '2. high': '58.0800',
    '3. low': '54.2400',
    '4. close': '56.3500',
    '5. volume': '87931'
  },
  '2015-10-30': {
    '1. open': '53.0500',
    '2. high': '56.4100',
    '3. low': '51.4400',
    '4. close': '55.2900',
    '5. volume': '95660'
  },
  '2015-09-30': {
    '1. open': '55.4000',
    '2. high': '57.1800',
    '3. low': '49.7750',
    '4. close': '52.4700',
    '5. volume': '109261'
  },
  '2015-08-31': {
    '1. open': '59.1400',
    '2. high': '60.9800',
    '3. low': '50.8800',
    '4. close': '56.1900',
    '5. volume': '124809'
  },
  '2015-07-31': {
    '1. open': '54.8300',
    '2. high': '59.6100',
    '3. low': '50.3500',
    '4. close': '59.4400',
    '5. volume': '96856'
  },
  '2015-06-30': {
    '1. open': '55.0200',
    '2. high': '57.9000',
    '3. low': '52.4300',
    '4. close': '54.3300',
    '5. volume': '121258'
  },
  '2015-05-29': {
    '1. open': '55.9800',
    '2. high': '57.7400',
    '3. low': '54.8400',
    '4. close': '54.8400',
    '5. volume': '100420'
  },
  '2015-04-30': {
    '1. open': '56.8000',
    '2. high': '59.5100',
    '3. low': '54.4100',
    '4. close': '56.6000',
    '5. volume': '123255'
  },
  '2015-03-31': {
    '1. open': '52.1800',
    '2. high': '57.4900',
    '3. low': '50.8600',
    '4. close': '56.7600',
    '5. volume': '107913'
  },
  '2015-02-27': {
    '1. open': '46.6800',
    '2. high': '52.2600',
    '3. low': '45.3450',
    '4. close': '51.9700',
    '5. volume': '112641'
  },
  '2015-01-30': {
    '1. open': '49.7650',
    '2. high': '51.1500',
    '3. low': '43.3000',
    '4. close': '46.6000',
    '5. volume': '144658'
  },
  '2014-12-30': {
    '1. open': '51.2700',
    '2. high': '52.0600',
    '3. low': '45.1750',
    '4. close': '49.3350',
    '5. volume': '86124'
  },
  '2014-11-28': {
    '1. open': '50.2300',
    '2. high': '51.5700',
    '3. low': '46.3600',
    '4. close': '51.5700',
    '5. volume': '103019'
  },
  '2014-10-31': {
    '1. open': '52.6000',
    '2. high': '52.8100',
    '3. low': '44.1400',
    '4. close': '50.2700',
    '5. volume': '114869'
  },
  '2014-09-30': {
    '1. open': '50.9700',
    '2. high': '54.9200',
    '3. low': '50.7300',
    '4. close': '52.6700',
    '5. volume': '65300'
  },
  '2014-08-29': {
    '1. open': '49.4250',
    '2. high': '52.0000',
    '3. low': '47.5000',
    '4. close': '51.0600',
    '5. volume': '50218'
  },
  '2014-07-31': {
    '1. open': '50.8200',
    '2. high': '51.7400',
    '3. low': '46.6400',
    '4. close': '48.8600',
    '5. volume': '56430'
  },
  '2014-06-30': {
    '1. open': '50.5300',
    '2. high': '52.8500',
    '3. low': '48.9650',
    '4. close': '49.2850',
    '5. volume': '97589'
  },
  '2014-05-30': {
    '1. open': '53.0100',
    '2. high': '53.7800',
    '3. low': '49.3350',
    '4. close': '50.9500',
    '5. volume': '105152'
  },
  '2014-04-30': {
    '1. open': '56.6900',
    '2. high': '59.4700',
    '3. low': '53.0000',
    '4. close': '54.0500',
    '5. volume': '87478'
  },
  '2014-03-31': {
    '1. open': '58.3300',
    '2. high': '60.0000',
    '3. low': '54.8200',
    '4. close': '56.5100',
    '5. volume': '87990'
  },
  '2014-02-28': {
    '1. open': '57.4700',
    '2. high': '61.6500',
    '3. low': '54.8600',
    '4. close': '59.3600',
    '5. volume': '130806'
  },
  '2014-01-31': {
    '1. open': '56.7900',
    '2. high': '59.8700',
    '3. low': '55.3300',
    '4. close': '57.0500',
    '5. volume': '189235'
  },
  '2013-12-30': {
    '1. open': '55.5500',
    '2. high': '56.5600',
    '3. low': '51.8200',
    '4. close': '56.4200',
    '5. volume': '108015'
  },
  '2013-11-29': {
    '1. open': '54.3400',
    '2. high': '55.8000',
    '3. low': '52.3600',
    '4. close': '55.4600',
    '5. volume': '112476'
  },
  '2013-10-31': {
    '1. open': '50.4700',
    '2. high': '54.9000',
    '3. low': '50.0900',
    '4. close': '54.9000',
    '5. volume': '138392'
  },
  '2013-09-30': {
    '1. open': '48.4050',
    '2. high': '51.4900',
    '3. low': '47.4150',
    '4. close': '50.0700',
    '5. volume': '199896'
  },
  '2013-08-30': {
    '1. open': '49.1650',
    '2. high': '51.0000',
    '3. low': '47.3500',
    '4. close': '47.3500',
    '5. volume': '155045'
  },
  '2013-07-31': {
    '1. open': '42.6400',
    '2. high': '48.7000',
    '3. low': '40.6400',
    '4. close': '48.5750',
    '5. volume': '149638'
  },
  '2013-06-28': {
    '1. open': '45.0000',
    '2. high': '46.1500',
    '3. low': '39.3500',
    '4. close': '42.2450',
    '5. volume': '321919'
  },
  '2013-05-31': {
    '1. open': '42.4000',
    '2. high': '47.2450',
    '3. low': '41.8750',
    '4. close': '45.8600',
    '5. volume': '111314'
  },
  '2013-04-30': {
    '1. open': '40.2600',
    '2. high': '42.9850',
    '3. low': '37.6400',
    '4. close': '42.8300',
    '5. volume': '175168'
  },
  '2013-03-28': {
    '1. open': '42.8200',
    '2. high': '44.8000',
    '3. low': '38.7600',
    '4. close': '40.4000',
    '5. volume': '105444'
  },
  '2013-02-28': {
    '1. open': '46.5150',
    '2. high': '47.5000',
    '3. low': '41.4150',
    '4. close': '42.8000',
    '5. volume': '142845'
  },
  '2013-01-31': {
    '1. open': '44.0000',
    '2. high': '47.8000',
    '3. low': '43.2500',
    '4. close': '46.1500',
    '5. volume': '160321'
  },
  '2012-12-28': {
    '1. open': '43.1500',
    '2. high': '44.7000',
    '3. low': '42.4550',
    '4. close': '42.5050',
    '5. volume': '60851'
  },
  '2012-11-30': {
    '1. open': '38.7500',
    '2. high': '43.2050',
    '3. low': '38.6200',
    '4. close': '43.1000',
    '5. volume': '73781'
  },
  '2012-10-31': {
    '1. open': '36.8700',
    '2. high': '41.8500',
    '3. low': '36.8700',
    '4. close': '38.9900',
    '5. volume': '124500'
  },
  '2012-09-28': {
    '1. open': '34.6300',
    '2. high': '40.5000',
    '3. low': '34.2500',
    '4. close': '36.6500',
    '5. volume': '179503'
  },
  '2012-08-31': {
    '1. open': '30.3000',
    '2. high': '35.8300',
    '3. low': '29.2000',
    '4. close': '34.6300',
    '5. volume': '161768'
  },
  '2012-07-31': {
    '1. open': '30.3450',
    '2. high': '31.9500',
    '3. low': '26.2050',
    '4. close': '30.2100',
    '5. volume': '243523'
  },
  '2012-06-29': {
    '1. open': '25.7750',
    '2. high': '30.4900',
    '3. low': '25.5850',
    '4. close': '30.4900',
    '5. volume': '398756'
  },
  '2012-05-31': {
    '1. open': '30.8400',
    '2. high': '30.8400',
    '3. low': '24.6650',
    '4. close': '25.5500',
    '5. volume': '290982'
  },
  '2012-04-30': {
    '1. open': '35.7650',
    '2. high': '36.0100',
    '3. low': '27.9800',
    '4. close': '30.5600',
    '5. volume': '372437'
  },
  '2012-03-30': {
    '1. open': '36.1850',
    '2. high': '39.4050',
    '3. low': '34.9700',
    '4. close': '35.5200',
    '5. volume': '431776'
  },
  '2012-02-29': {
    '1. open': '32.8300',
    '2. high': '38.0600',
    '3. low': '32.8300',
    '4. close': '36.6600',
    '5. volume': '341763'
  },
  '2012-01-31': {
    '1. open': '30.3350',
    '2. high': '36.6000',
    '3. low': '27.5000',
    '4. close': '32.5700',
    '5. volume': '270683'
  },
  '2011-12-30': {
    '1. open': '29.4950',
    '2. high': '34.4200',
    '3. low': '27.1500',
    '4. close': '30.3400',
    '5. volume': '322390'
  },
  '2011-11-30': {
    '1. open': '29.4300',
    '2. high': '33.7450',
    '3. low': '24.9400',
    '4. close': '29.6500',
    '5. volume': '375946'
  },
  '2011-10-31': {
    '1. open': '28.2050',
    '2. high': '37.0500',
    '3. low': '26.5000',
    '4. close': '33.1500',
    '5. volume': '415345'
  },
  '2011-09-30': {
    '1. open': '35.9000',
    '2. high': '36.1400',
    '3. low': '22.9000',
    '4. close': '30.5300',
    '5. volume': '416159'
  },
  '2011-08-31': {
    '1. open': '46.6000',
    '2. high': '46.6000',
    '3. low': '32.4350',
    '4. close': '35.2800',
    '5. volume': '176219'
  },
  '2011-07-29': {
    '1. open': '53.4000',
    '2. high': '54.8200',
    '3. low': '43.6000',
    '4. close': '45.3750',
    '5. volume': '137177'
  },
  '2011-06-30': {
    '1. open': '54.3000',
    '2. high': '54.3000',
    '3. low': '49.4000',
    '4. close': '53.4000',
    '5. volume': '90668'
  },
  '2011-05-31': {
    '1. open': '53.9500',
    '2. high': '55.1500',
    '3. low': '51.1400',
    '4. close': '54.2500',
    '5. volume': '128599'
  },
  '2011-04-29': {
    '1. open': '52.7800',
    '2. high': '55.2700',
    '3. low': '50.0900',
    '4. close': '53.5800',
    '5. volume': '68996'
  },
  '2011-03-31': {
    '1. open': '56.8200',
    '2. high': '56.8200',
    '3. low': '49.7400',
    '4. close': '51.9000',
    '5. volume': '79133'
  },
  '2011-02-28': {
    '1. open': '54.9900',
    '2. high': '59.7500',
    '3. low': '53.8700',
    '4. close': '56.7000',
    '5. volume': '156373'
  },
  '2011-01-31': {
    '1. open': '48.4000',
    '2. high': '56.7000',
    '3. low': '47.0150',
    '4. close': '55.1000',
    '5. volume': '134701'
  },
  '2010-12-30': {
    '1. open': '46.3000',
    '2. high': '52.8100',
    '3. low': '46.2200',
    '4. close': '48.1900',
    '5. volume': '131348'
  },
  '2010-11-30': {
    '1. open': '52.8700',
    '2. high': '55.1800',
    '3. low': '45.1400',
    '4. close': '45.2750',
    '5. volume': '115058'
  },
  '2010-10-29': {
    '1. open': '52.9000',
    '2. high': '54.5900',
    '3. low': '50.6600',
    '4. close': '52.8000',
    '5. volume': '65903'
  },
  '2010-09-30': {
    '1. open': '49.6200',
    '2. high': '56.5000',
    '3. low': '49.0000',
    '4. close': '52.4900',
    '5. volume': '74050'
  },
  '2010-08-31': {
    '1. open': '54.3500',
    '2. high': '57.2600',
    '3. low': '48.3000',
    '4. close': '49.1800',
    '5. volume': '103083'
  },
  '2010-07-30': {
    '1. open': '43.8300',
    '2. high': '55.5500',
    '3. low': '43.2000',
    '4. close': '52.9600',
    '5. volume': '174466'
  },
  '2010-06-30': {
    '1. open': '46.0000',
    '2. high': '51.5100',
    '3. low': '40.9200',
    '4. close': '44.9600',
    '5. volume': '169455'
  },
  '2010-05-31': {
    '1. open': '51.8400',
    '2. high': '53.4700',
    '3. low': '42.7400',
    '4. close': '46.1250',
    '5. volume': '202510'
  },
  '2010-04-30': {
    '1. open': '57.0600',
    '2. high': '58.3600',
    '3. low': '48.8900',
    '4. close': '51.7900',
    '5. volume': '147215'
  },
  '2010-03-31': {
    '1. open': '54.2500',
    '2. high': '59.2000',
    '3. low': '53.4200',
    '4. close': '56.2600',
    '5. volume': '113021'
  },
  '2010-02-26': {
    '1. open': '51.8500',
    '2. high': '54.5000',
    '3. low': '46.0000',
    '4. close': '53.0000',
    '5. volume': '90244'
  },
  '2010-01-29': {
    '1. open': '56.0900',
    '2. high': '60.3300',
    '3. low': '50.6000',
    '4. close': '51.8500',
    '5. volume': '56496'
  },
  '2009-12-30': {
    '1. open': '55.7500',
    '2. high': '56.7900',
    '3. low': '53.8900',
    '4. close': '55.7200',
    '5. volume': '153956'
  },
  '2009-11-30': {
    '1. open': '51.5000',
    '2. high': '58.4200',
    '3. low': '50.7400',
    '4. close': '54.5000',
    '5. volume': '94162'
  },
  '2009-10-30': {
    '1. open': '54.9900',
    '2. high': '56.7700',
    '3. low': '49.8600',
    '4. close': '51.8600',
    '5. volume': '77217'
  },
  '2009-09-30': {
    '1. open': '56.2500',
    '2. high': '58.5300',
    '3. low': '51.6000',
    '4. close': '54.4000',
    '5. volume': '112509'
  },
  '2009-08-31': {
    '1. open': '51.6900',
    '2. high': '59.1600',
    '3. low': '51.4300',
    '4. close': '56.2500',
    '5. volume': '126858'
  },
  '2009-07-31': {
    '1. open': '46.7100',
    '2. high': '52.3500',
    '3. low': '44.5700',
    '4. close': '51.0300',
    '5. volume': '127188'
  },
  '2009-06-30': {
    '1. open': '49.7700',
    '2. high': '51.1200',
    '3. low': '43.0700',
    '4. close': '46.2100',
    '5. volume': '94503'
  },
  '2009-05-29': {
    '1. open': '41.5000',
    '2. high': '48.7900',
    '3. low': '41.0000',
    '4. close': '48.4800',
    '5. volume': '486830'
  },
  '2009-04-30': {
    '1. open': '30.2400',
    '2. high': '41.4100',
    '3. low': '30.2400',
    '4. close': '41.2500',
    '5. volume': '366150'
  },
  '2009-03-31': {
    '1. open': '24.6400',
    '2. high': '35.6800',
    '3. low': '21.2400',
    '4. close': '31.0800',
    '5. volume': '243288'
  },
  '2009-02-27': {
    '1. open': '27.6500',
    '2. high': '29.7400',
    '3. low': '22.5000',
    '4. close': '25.8500',
    '5. volume': '124267'
  },
  '2009-01-30': {
    '1. open': '31.2700',
    '2. high': '35.3000',
    '3. low': '20.8800',
    '4. close': '30.0100',
    '5. volume': '268993'
  },
  '2008-12-30': {
    '1. open': '41.5000',
    '2. high': '47.0000',
    '3. low': '28.6700',
    '4. close': '29.3200',
    '5. volume': '266032'
  },
  '2008-11-28': {
    '1. open': '56.3600',
    '2. high': '59.3200',
    '3. low': '33.9000',
    '4. close': '43.4100',
    '5. volume': '234586'
  },
  '2008-10-31': {
    '1. open': '66.5700',
    '2. high': '72.1900',
    '3. low': '46.5200',
    '4. close': '55.6800',
    '5. volume': '269392'
  },
  '2008-09-30': {
    '1. open': '60.8400',
    '2. high': '69.9800',
    '3. low': '56.0000',
    '4. close': '65.6300',
    '5. volume': '407761'
  },
  '2008-08-29': {
    '1. open': '63.1400',
    '2. high': '66.9300',
    '3. low': '56.6700',
    '4. close': '61.7300',
    '5. volume': '124419'
  },
  '2008-07-31': {
    '1. open': '55.8300',
    '2. high': '66.5000',
    '3. low': '51.5400',
    '4. close': '63.9400',
    '5. volume': '270258'
  },
  '2008-06-30': {
    '1. open': '66.7600',
    '2. high': '66.7600',
    '3. low': '56.3600',
    '4. close': '57.4000',
    '5. volume': '41739'
  },
  '2008-05-30': {
    '1. open': '70.5200',
    '2. high': '71.9000',
    '3. low': '64.9500',
    '4. close': '66.4100',
    '5. volume': '67146'
  },
  '2008-04-30': {
    '1. open': '63.7900',
    '2. high': '70.9300',
    '3. low': '63.7900',
    '4. close': '69.4000',
    '5. volume': '126128'
  },
  '2008-03-31': {
    '1. open': '58.7800',
    '2. high': '65.2200',
    '3. low': '52.2000',
    '4. close': '63.7000',
    '5. volume': '224851'
  },
  '2008-02-29': {
    '1. open': '66.2000',
    '2. high': '66.2000',
    '3. low': '57.9500',
    '4. close': '59.5000',
    '5. volume': '185203'
  },
  '2008-01-31': {
    '1. open': '73.8300',
    '2. high': '75.2500',
    '3. low': '58.6800',
    '4. close': '65.5000',
    '5. volume': '321861'
  },
  '2007-12-28': {
    '1. open': '76.4900',
    '2. high': '79.0400',
    '3. low': '72.2100',
    '4. close': '75.0600',
    '5. volume': '51846'
  },
  '2007-11-30': {
    '1. open': '75.2100',
    '2. high': '77.9000',
    '3. low': '67.7000',
    '4. close': '77.2000',
    '5. volume': '210417'
  },
  '2007-10-31': {
    '1. open': '75.6900',
    '2. high': '82.7600',
    '3. low': '72.7500',
    '4. close': '76.0400',
    '5. volume': '155430'
  },
  '2007-09-28': {
    '1. open': '77.4100',
    '2. high': '78.6700',
    '3. low': '70.7600',
    '4. close': '76.7200',
    '5. volume': '265371'
  },
  '2007-08-31': {
    '1. open': '79.7000',
    '2. high': '85.4800',
    '3. low': '73.8600',
    '4. close': '77.0000',
    '5. volume': '351293'
  },
  '2007-07-31': {
    '1. open': '87.5800',
    '2. high': '88.9500',
    '3. low': '78.0000',
    '4. close': '81.5000',
    '5. volume': '177388'
  },
  '2007-06-29': {
    '1. open': '90.8700',
    '2. high': '92.1100',
    '3. low': '85.3400',
    '4. close': '88.3300',
    '5. volume': '201400'
  },
  '2007-05-31': {
    '1. open': '86.5000',
    '2. high': '95.0800',
    '3. low': '86.0000',
    '4. close': '90.3000',
    '5. volume': '203160'
  },
  '2007-04-30': {
    '1. open': '77.7700',
    '2. high': '87.4100',
    '3. low': '77.2700',
    '4. close': '85.8000',
    '5. volume': '208702'
  },
  '2007-03-30': {
    '1. open': '78.5100',
    '2. high': '80.7800',
    '3. low': '75.4000',
    '4. close': '78.6900',
    '5. volume': '364225'
  },
  '2007-02-28': {
    '1. open': '86.3000',
    '2. high': '87.6700',
    '3. low': '78.0000',
    '4. close': '78.5200',
    '5. volume': '310130'
  },
  '2007-01-31': {
    '1. open': '83.5300',
    '2. high': '86.2600',
    '3. low': '82.6100',
    '4. close': '85.6200',
    '5. volume': '168775'
  },
  '2006-12-29': {
    '1. open': '81.7600',
    '2. high': '83.7000',
    '3. low': '79.2700',
    '4. close': '83.1800',
    '5. volume': '240457'
  },
  '2006-11-30': {
    '1. open': '85.6800',
    '2. high': '86.9100',
    '3. low': '79.5400',
    '4. close': '81.6300',
    '5. volume': '149782'
  },
  '2006-10-31': {
    '1. open': '84.9400',
    '2. high': '88.1700',
    '3. low': '83.8700',
    '4. close': '86.3800',
    '5. volume': '337130'
  },
  '2006-09-29': {
    '1. open': '82.4900',
    '2. high': '85.1400',
    '3. low': '81.0500',
    '4. close': '84.6500',
    '5. volume': '175206'
  },
  '2006-08-31': {
    '1. open': '76.3500',
    '2. high': '84.1500',
    '3. low': '74.6900',
    '4. close': '82.9000',
    '5. volume': '185750'
  },
  '2006-07-31': {
    '1. open': '75.2200',
    '2. high': '77.3200',
    '3. low': '70.4000',
    '4. close': '76.4900',
    '5. volume': '159268'
  },
  '2006-06-30': {
    '1. open': '72.1000',
    '2. high': '75.3400',
    '3. low': '66.0000',
    '4. close': '75.2200',
    '5. volume': '135716'
  },
  '2006-05-31': {
    '1. open': '74.4900',
    '2. high': '79.2100',
    '3. low': '70.5900',
    '4. close': '73.1600',
    '5. volume': '410550'
  },
  '2006-04-28': {
    '1. open': '77.3700',
    '2. high': '78.0000',
    '3. low': '72.5600',
    '4. close': '75.1000',
    '5. volume': '133300'
  },
  '2006-03-31': {
    '1. open': '77.8400',
    '2. high': '78.7600',
    '3. low': '72.5000',
    '4. close': '77.0900',
    '5. volume': '217912'
  },
  '2006-02-28': {
    '1. open': '73.0800',
    '2. high': '79.4100',
    '3. low': '71.3500',
    '4. close': '77.5100',
    '5. volume': '236774'
  },
  '2006-01-31': {
    '1. open': '68.4000',
    '2. high': '73.6800',
    '3. low': '68.1300',
    '4. close': '73.4500',
    '5. volume': '157549'
  },
  '2005-12-30': {
    '1. open': '67.5600',
    '2. high': '69.2200',
    '3. low': '66.6800',
    '4. close': '68.3900',
    '5. volume': '127700'
  },
  '2005-11-30': {
    '1. open': '63.2500',
    '2. high': '68.7400',
    '3. low': '63.0400',
    '4. close': '67.6200',
    '5. volume': '134303'
  },
  '2005-10-31': {
    '1. open': '63.6800',
    '2. high': '65.0000',
    '3. low': '61.1400',
    '4. close': '63.2300',
    '5. volume': '127646'
  },
  '2005-09-30': {
    '1. open': '59.1700',
    '2. high': '63.5100',
    '3. low': '58.3700',
    '4. close': '63.5100',
    '5. volume': '96922'
  },
  '2005-08-31': {
    '1. open': '59.7900',
    '2. high': '61.3500',
    '3. low': '57.6400',
    '4. close': '58.7300',
    '5. volume': '172691'
  },
  '2005-07-29': {
    '1. open': '56.6200',
    '2. high': '61.4300',
    '3. low': '53.8300',
    '4. close': '59.8000',
    '5. volume': '130184'
  },
  '2005-06-30': {
    '1. open': '54.8100',
    '2. high': '57.3500',
    '3. low': '54.8100',
    '4. close': '56.9300',
    '5. volume': '139367'
  },
  '2005-05-31': {
    '1. open': '51.0400',
    '2. high': '56.8000',
    '3. low': '51.0400',
    '4. close': '54.7000',
    '5. volume': '168405'
  },
  '2005-04-29': {
    '1. open': '54.7600',
    '2. high': '55.6000',
    '3. low': '50.7400',
    '4. close': '50.9100',
    '5. volume': '201277'
  },
  '2005-03-31': {
    '1. open': '54.5300',
    '2. high': '55.8900',
    '3. low': '53.8400',
    '4. close': '54.9000',
    '5. volume': '151755'
  },
  '2005-02-28': {
    '1. open': '55.2800',
    '2. high': '56.2700',
    '3. low': '54.1800',
    '4. close': '55.0200',
    '5. volume': '137411'
  },
  '2005-01-31': {
    '1. open': '53.4300',
    '2. high': '56.1600',
    '3. low': '53.4300',
    '4. close': '55.0200',
    '5. volume': '81976'
  },
  '2004-12-31': {
    '1. open': '52.8000',
    '2. high': '54.2100',
    '3. low': '51.9800',
    '4. close': '53.3800',
    '5. volume': '103223'
  },
  '2004-11-30': {
    '1. open': '53.4000',
    '2. high': '56.0000',
    '3. low': '52.0700',
    '4. close': '52.2300',
    '5. volume': '113295'
  },
  '2004-10-29': {
    '1. open': '52.4200',
    '2. high': '54.9200',
    '3. low': '51.5900',
    '4. close': '53.7800',
    '5. volume': '127020'
  },
  '2004-09-30': {
    '1. open': '50.0300',
    '2. high': '53.4700',
    '3. low': '49.8200',
    '4. close': '51.9500',
    '5. volume': '96640'
  },
  '2004-08-31': {
    '1. open': '48.5300',
    '2. high': '51.1700',
    '3. low': '47.6100',
    '4. close': '50.0300',
    '5. volume': '99946'
  },
  '2004-07-30': {
    '1. open': '50.8700',
    '2. high': '50.9200',
    '3. low': '46.2500',
    '4. close': '48.5700',
    '5. volume': '163436'
  },
  '2004-06-30': {
    '1. open': '50.0300',
    '2. high': '52.2800',
    '3. low': '49.6300',
    '4. close': '50.7100',
    '5. volume': '141309'
  },
  '2004-05-31': {
    '1. open': '50.0700',
    '2. high': '51.4500',
    '3. low': '47.2600',
    '4. close': '50.0500',
    '5. volume': '149217'
  },
  '2004-04-30': {
    '1. open': '50.0600',
    '2. high': '53.3000',
    '3. low': '49.8200',
    '4. close': '50.1700',
    '5. volume': '145007'
  },
  '2004-03-31': {
    '1. open': '51.2000',
    '2. high': '51.4500',
    '3. low': '47.4500',
    '4. close': '49.8800',
    '5. volume': '157493'
  },
  '2004-02-27': {
    '1. open': '50.5000',
    '2. high': '52.1400',
    '3. low': '49.3700',
    '4. close': '50.7300',
    '5. volume': '126582'
  },
  '2004-01-30': {
    '1. open': '49.8300',
    '2. high': '52.3100',
    '3. low': '49.7400',
    '4. close': '50.0900',
    '5. volume': '216806'
  },
  '2003-12-31': {
    '1. open': '47.6100',
    '2. high': '49.8300',
    '3. low': '47.3400',
    '4. close': '49.8300',
    '5. volume': '129844'
  },
  '2003-11-28': {
    '1. open': '45.4000',
    '2. high': '47.4700',
    '3. low': '44.0600',
    '4. close': '47.2800',
    '5. volume': '165349'
  },
  '2003-10-31': {
    '1. open': '42.3000',
    '2. high': '46.8200',
    '3. low': '41.9900',
    '4. close': '45.3300',
    '5. volume': '175783'
  },
  '2003-09-30': {
    '1. open': '45.9700',
    '2. high': '47.4800',
    '3. low': '41.5000',
    '4. close': '41.8100',
    '5. volume': '266670'
  },
  '2003-08-29': {
    '1. open': '48.2000',
    '2. high': '49.4400',
    '3. low': '44.5600',
    '4. close': '45.5800',
    '5. volume': '261854'
  },
  '2003-07-31': {
    '1. open': '44.2000',
    '2. high': '48.8600',
    '3. low': '43.7700',
    '4. close': '48.7000',
    '5. volume': '193260'
  },
  '2003-06-30': {
    '1. open': '42.9200',
    '2. high': '47.2100',
    '3. low': '42.1500',
    '4. close': '44.4300',
    '5. volume': '306058'
  },
  '2003-05-30': {
    '1. open': '42.0600',
    '2. high': '44.2300',
    '3. low': '39.7000',
    '4. close': '42.2500',
    '5. volume': '285337'
  },
  '2003-04-30': {
    '1. open': '36.6300',
    '2. high': '43.0800',
    '3. low': '36.0100',
    '4. close': '42.0600',
    '5. volume': '446910'
  },
  '2003-03-31': {
    '1. open': '38.5000',
    '2. high': '41.7700',
    '3. low': '32.7000',
    '4. close': '36.7800',
    '5. volume': '427647'
  },
  '2003-02-28': {
    '1. open': '37.0500',
    '2. high': '40.3000',
    '3. low': '36.0100',
    '4. close': '38.0900',
    '5. volume': '339807'
  },
  '2003-01-31': {
    '1. open': '37.7000',
    '2. high': '41.7200',
    '3. low': '32.9300',
    '4. close': '36.7800',
    '5. volume': '397817'
  },
  '2002-12-31': {
    '1. open': '41.1800',
    '2. high': '41.5000',
    '3. low': '35.0000',
    '4. close': '37.7000',
    '5. volume': '350765'
  },
  '2002-11-29': {
    '1. open': '39.5900',
    '2. high': '45.5300',
    '3. low': '38.0000',
    '4. close': '40.8000',
    '5. volume': '356493'
  },
  '2002-10-31': {
    '1. open': '33.5000',
    '2. high': '41.8500',
    '3. low': '27.5600',
    '4. close': '40.2100',
    '5. volume': '229561'
  },
  '2002-09-30': {
    '1. open': '47.1800',
    '2. high': '47.1800',
    '3. low': '32.2600',
    '4. close': '33.2100',
    '5. volume': '282530'
  },
  '2002-08-30': {
    '1. open': '46.7100',
    '2. high': '52.1500',
    '3. low': '42.6200',
    '4. close': '47.9700',
    '5. volume': '212846'
  },
  '2002-07-31': {
    '1. open': '55.4000',
    '2. high': '56.5000',
    '3. low': '36.6700',
    '4. close': '45.5200',
    '5. volume': '747741'
  },
  '2002-06-28': {
    '1. open': '59.5100',
    '2. high': '60.6400',
    '3. low': '50.5400',
    '4. close': '55.4500',
    '5. volume': '677328'
  },
  '2002-05-31': {
    '1. open': '58.0000',
    '2. high': '61.7900',
    '3. low': '57.0500',
    '4. close': '60.1300',
    '5. volume': '424655'
  },
  '2002-04-30': {
    '1. open': '57.5700',
    '2. high': '60.2000',
    '3. low': '53.8500',
    '4. close': '58.0000',
    '5. volume': '800593'
  },
  '2002-03-29': {
    '1. open': '55.4600',
    '2. high': '58.2500',
    '3. low': '53.8500',
    '4. close': '57.5700',
    '5. volume': '645801'
  },
  '2002-02-28': {
    '1. open': '54.3000',
    '2. high': '56.2700',
    '3. low': '50.1200',
    '4. close': '56.0500',
    '5. volume': '381062'
  },
  '2002-01-31': {
    '1. open': '50.3000',
    '2. high': '54.8250',
    '3. low': '49.8750',
    '4. close': '54.0000',
    '5. volume': '179572'
  },
  '2001-12-31': {
    '1. open': '49.0000',
    '2. high': '50.5500',
    '3. low': '48.0000',
    '4. close': '50.3000',
    '5. volume': '74024'
  },
  '2001-11-30': {
    '1. open': '45.9600',
    '2. high': '50.1500',
    '3. low': '45.9200',
    '4. close': '48.9700',
    '5. volume': '91224'
  },
  '2001-10-31': {
    '1. open': '45.5000',
    '2. high': '47.9750',
    '3. low': '43.9550',
    '4. close': '46.2500',
    '5. volume': '685992'
  },
  '2001-09-28': {
    '1. open': '50.0450',
    '2. high': '51.0250',
    '3. low': '36.6000',
    '4. close': '44.9550',
    '5. volume': '1114080'
  },
  '2001-08-31': {
    '1. open': '49.5200',
    '2. high': '52.2400',
    '3. low': '48.9800',
    '4. close': '50.2500',
    '5. volume': '585850'
  },
  '2001-07-31': {
    '1. open': '51.6250',
    '2. high': '53.4900',
    '3. low': '47.2550',
    '4. close': '50.1200',
    '5. volume': '461466'
  },
  '2001-06-29': {
    '1. open': '50.9400',
    '2. high': '52.7450',
    '3. low': '49.1850',
    '4. close': '51.7750',
    '5. volume': '356842'
  },
  '2001-05-31': {
    '1. open': '49.9250',
    '2. high': '53.1600',
    '3. low': '46.9400',
    '4. close': '50.8800',
    '5. volume': '569714'
  },
  '2001-04-30': {
    '1. open': '47.6400',
    '2. high': '50.3600',
    '3. low': '45.0000',
    '4. close': '49.9250',
    '5. volume': '658642'
  },
  '2001-03-30': {
    '1. open': '44.7100',
    '2. high': '48.1150',
    '3. low': '41.5100',
    '4. close': '47.4300',
    '5. volume': '352028'
  },
  '2001-02-28': {
    '1. open': '50.9750',
    '2. high': '50.9750',
    '3. low': '44.2600',
    '4. close': '44.7100',
    '5. volume': '4172'
  },
  '2001-01-31': {
    '1. open': '45.4700',
    '2. high': '50.9500',
    '3. low': '45.2500',
    '4. close': '48.5500',
    '5. volume': '6324'
  },
  '2000-12-29': {
    '1. open': '44.7750',
    '2. high': '48.5900',
    '3. low': '44.7750',
    '4. close': '45.4700',
    '5. volume': '2264'
  },
  '2000-11-30': {
    '1. open': '50.6000',
    '2. high': '51.1650',
    '3. low': '44.6850',
    '4. close': '44.7750',
    '5. volume': '12182'
  },
  '2000-10-31': {
    '1. open': '50.3500',
    '2. high': '50.3500',
    '3. low': '44.3350',
    '4. close': '49.2500',
    '5. volume': '2252'
  },
  '2000-09-29': {
    '1. open': '54.0000',
    '2. high': '54.0000',
    '3. low': '49.6500',
    '4. close': '50.3500',
    '5. volume': '9186'
  },
  '2000-08-31': {
    '1. open': '50.5000',
    '2. high': '55.0000',
    '3. low': '50.5000',
    '4. close': '54.0000',
    '5. volume': '6056'
  },
  '2000-07-31': {
    '1. open': '50.3300',
    '2. high': '53.6500',
    '3. low': '50.3300',
    '4. close': '52.0000',
    '5. volume': '10480'
  },
  '2000-06-30': {
    '1. open': '48.0900',
    '2. high': '50.7550',
    '3. low': '48.0900',
    '4. close': '50.4000',
    '5. volume': '10832'
  },
  '2000-05-31': {
    '1. open': '45.0000',
    '2. high': '48.8150',
    '3. low': '45.0000',
    '4. close': '48.0900',
    '5. volume': '9856'
  },
  '2000-04-28': {
    '1. open': '41.5000',
    '2. high': '45.0000',
    '3. low': '41.5000',
    '4. close': '45.0000',
    '5. volume': '1160'
  },
  '2000-03-31': {
    '1. open': '43.0000',
    '2. high': '45.0000',
    '3. low': '40.5000',
    '4. close': '41.5000',
    '5. volume': '2834'
  },
  '2000-02-29': {
    '1. open': '43.0000',
    '2. high': '43.0000',
    '3. low': '42.5000',
    '4. close': '42.5000',
    '5. volume': '4360'
  },
  '2000-01-31': {
    '1. open': '39.0000',
    '2. high': '43.0000',
    '3. low': '39.0000',
    '4. close': '42.5000',
    '5. volume': '436'
  },
  '1999-12-31': {
    '1. open': '39.0000',
    '2. high': '39.0000',
    '3. low': '39.0000',
    '4. close': '39.0000',
    '5. volume': '0'
  }
};

// tslint:disable:max-line-length
export const bnpCompany: Company = {
  id: 1177,
  name: 'BNP Paribas S.A.',
  country: Country.Frankreich,
  city: 'Paris',
  url: 'http://www.bnpparibas.com/',
  description: 'Die BNP Paribas ist eine französische Großbank, die am 23. Mai 2000 durch die Fusion der Banque Nationale de Paris (BNP) und der Bank Paribas entstanden ist. Gemessen an den Einlagen war sie 2010 die größte Bank Europas, gemessen am Börsenwert im Jahr 2019 die drittgrößte Bank Europas[3] und gemessen an der Bilanzsumme die zweitgrößte Bank in Europa.[4] Zusammen mit der Société Générale und dem Crédit Lyonnais gehört sie zu den drei alten Geschäftsbanken Frankreichs („les trois vieilles“).',
  link_wikipedia: 'https://de.wikipedia.org/wiki/BNP_Paribas',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/8/85/BNP_Paribas_logo.svg/500px-BNP_Paribas_logo.svg.png',
  products: [
    {
      id: 117710,
      name: 'ConsorsBank',
      logo: 'https://www.consorsbank.de/ev/images/evr/assets/logos-2x/logo-94x94-wh.png'
    },
    {
      id: 117711,
      name: 'Hello Bank',
      logo: 'https://www.hellobank.at/App_Themes/direktanlage/SMDAT/2014/templates/website/static/assets/img/logo/b2c-m_2x.png?1511972989'
    }
  ],
  industries: [141010],
  securityType: SecurityType.Aktie,
  currency: Currency.EUR,
  isin: 'FR0000131104',
  wkn: '887771',
  symbol: 'BNP',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.CAC40, Indices.MSCIWorld, Indices.DowJonesSustainabilityEurozone],
  end_of_month_prices: prices,
  dividends,
  tags: ['Finanzinstitut', 'Universalbank', 'Privatkunden', 'Firmenkundengeschäft', 'Direktbanken', 'Onlinebanken', 'Broker']
};
// tslint:enable:max-line-length

