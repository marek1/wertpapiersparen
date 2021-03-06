import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [{year: 2018, rate: 0.90, yield: 2.22}, {year: 2017, rate: 0.80}, {year: 2016, rate: 0.70}, {
  year: 2015,
  rate: 0.60,
  yield: 1.41
}, {year: 2014, rate: 0.50, yield: 1.30}, {year: 2013, rate: 0.50, yield: 1.03}, {year: 2012, rate: 1.00, yield: 1.51}, {
  year: 2011,
  rate: 0.85,
  yield: 2.13
}, {year: 2010, rate: 0.70, yield: 1.18}, {year: 2009, rate: 0.50, yield: 1.90}, {year: 2008, rate: 0.50, yield: 3.64}, {
  year: 2007,
  rate: 1.00,
  yield: 2.98
}, {year: 2006, rate: 0.25, yield: 0.59}, {year: 2005, rate: 0.00, yield: 0.00}, {year: 2004, rate: 0.00, yield: 0.00}, {
  year: 2003,
  rate: 0.00
}, {year: 2002, rate: 0.00}];

const prices = {
  '2019-11-15': {
    '1. open': '58.7800',
    '2. high': '63.5800',
    '3. low': '58.4000',
    '4. close': '63.5400',
    '5. volume': '3304520'
  },
  '2019-10-31': {
    '1. open': '56.0000',
    '2. high': '62.3600',
    '3. low': '52.8000',
    '4. close': '58.3000',
    '5. volume': '6762334'
  },
  '2019-09-30': {
    '1. open': '54.5600',
    '2. high': '59.5800',
    '3. low': '51.7600',
    '4. close': '56.0000',
    '5. volume': '6820067'
  },
  '2019-08-30': {
    '1. open': '53.7800',
    '2. high': '55.4000',
    '3. low': '48.6900',
    '4. close': '54.7000',
    '5. volume': '8047461'
  },
  '2019-07-31': {
    '1. open': '53.1000',
    '2. high': '57.8200',
    '3. low': '50.3600',
    '4. close': '54.1400',
    '5. volume': '7477428'
  },
  '2019-06-28': {
    '1. open': '44.7300',
    '2. high': '52.3400',
    '3. low': '44.0500',
    '4. close': '52.2600',
    '5. volume': '7089032'
  },
  '2019-05-31': {
    '1. open': '51.4000',
    '2. high': '51.5200',
    '3. low': '44.0200',
    '4. close': '44.8700',
    '5. volume': '9482143'
  },
  '2019-04-30': {
    '1. open': '48.5000',
    '2. high': '55.2000',
    '3. low': '48.4700',
    '4. close': '51.5000',
    '5. volume': '8237163'
  },
  '2019-03-29': {
    '1. open': '47.9900',
    '2. high': '52.1200',
    '3. low': '45.9400',
    '4. close': '47.5400',
    '5. volume': '9565217'
  },
  '2019-02-28': {
    '1. open': '48.1000',
    '2. high': '49.7200',
    '3. low': '44.9400',
    '4. close': '47.6500',
    '5. volume': '8365670'
  },
  '2019-01-31': {
    '1. open': '40.2400',
    '2. high': '49.8100',
    '3. low': '39.4700',
    '4. close': '48.0200',
    '5. volume': '9488777'
  },
  '2018-12-28': {
    '1. open': '49.5400',
    '2. high': '50.6000',
    '3. low': '39.6100',
    '4. close': '40.2000',
    '5. volume': '7810230'
  },
  '2018-11-30': {
    '1. open': '54.8400',
    '2. high': '58.3200',
    '3. low': '47.9800',
    '4. close': '48.4200',
    '5. volume': '7640679'
  },
  '2018-10-31': {
    '1. open': '63.2800',
    '2. high': '64.1400',
    '3. low': '51.4800',
    '4. close': '54.7600',
    '5. volume': '8236506'
  },
  '2018-09-28': {
    '1. open': '67.7400',
    '2. high': '67.8000',
    '3. low': '62.4400',
    '4. close': '63.0800',
    '5. volume': '5395949'
  },
  '2018-08-31': {
    '1. open': '70.5000',
    '2. high': '72.4200',
    '3. low': '66.6600',
    '4. close': '67.6800',
    '5. volume': '5198148'
  },
  '2018-07-31': {
    '1. open': '66.0200',
    '2. high': '70.5600',
    '3. low': '65.2000',
    '4. close': '70.3000',
    '5. volume': '4675712'
  },
  '2018-06-29': {
    '1. open': '67.9000',
    '2. high': '72.6000',
    '3. low': '64.6200',
    '4. close': '66.8000',
    '5. volume': '5804034'
  },
  '2018-05-31': {
    '1. open': '61.7800',
    '2. high': '71.1800',
    '3. low': '61.1800',
    '4. close': '67.6800',
    '5. volume': '7506164'
  },
  '2018-04-30': {
    '1. open': '61.9000',
    '2. high': '63.5800',
    '3. low': '60.1800',
    '4. close': '61.5600',
    '5. volume': '6392747'
  },
  '2018-03-29': {
    '1. open': '68.4800',
    '2. high': '69.6000',
    '3. low': '60.6800',
    '4. close': '62.2000',
    '5. volume': '8682986'
  },
  '2018-02-28': {
    '1. open': '70.0000',
    '2. high': '70.6800',
    '3. low': '65.0000',
    '4. close': '68.6000',
    '5. volume': '5771108'
  },
  '2018-01-31': {
    '1. open': '66.3200',
    '2. high': '74.7800',
    '3. low': '65.4600',
    '4. close': '70.2200',
    '5. volume': '7721582'
  },
  '2017-12-29': {
    '1. open': '63.7500',
    '2. high': '67.3600',
    '3. low': '61.3300',
    '4. close': '66.2900',
    '5. volume': '6357106'
  },
  '2017-11-30': {
    '1. open': '67.5000',
    '2. high': '70.5900',
    '3. low': '61.0300',
    '4. close': '63.8200',
    '5. volume': '8664253'
  },
  '2017-10-31': {
    '1. open': '66.9500',
    '2. high': '69.1200',
    '3. low': '65.8100',
    '4. close': '67.0800',
    '5. volume': '4657754'
  },
  '2017-09-29': {
    '1. open': '63.5600',
    '2. high': '67.2000',
    '3. low': '60.8100',
    '4. close': '66.7600',
    '5. volume': '6868330'
  },
  '2017-08-31': {
    '1. open': '65.4900',
    '2. high': '67.8400',
    '3. low': '61.7600',
    '4. close': '62.6500',
    '5. volume': '8889497'
  },
  '2017-07-31': {
    '1. open': '66.4400',
    '2. high': '69.5000',
    '3. low': '64.8100',
    '4. close': '65.2200',
    '5. volume': '5016395'
  },
  '2017-06-30': {
    '1. open': '66.6000',
    '2. high': '70.6700',
    '3. low': '65.5300',
    '4. close': '66.2900',
    '5. volume': '7862104'
  },
  '2017-05-31': {
    '1. open': '66.5900',
    '2. high': '69.1800',
    '3. low': '62.3400',
    '4. close': '66.4300',
    '5. volume': '10431242'
  },
  '2017-04-28': {
    '1. open': '63.1600',
    '2. high': '66.4900',
    '3. low': '61.9000',
    '4. close': '66.3000',
    '5. volume': '6463976'
  },
  '2017-03-31': {
    '1. open': '64.2000',
    '2. high': '67.1500',
    '3. low': '59.8900',
    '4. close': '62.8900',
    '5. volume': '10453313'
  },
  '2017-02-28': {
    '1. open': '66.7800',
    '2. high': '68.6400',
    '3. low': '63.3800',
    '4. close': '64.1000',
    '5. volume': '6194529'
  },
  '2017-01-31': {
    '1. open': '62.2000',
    '2. high': '68.8400',
    '3. low': '62.1000',
    '4. close': '67.1500',
    '5. volume': '7433104'
  },
  '2016-12-30': {
    '1. open': '58.1900',
    '2. high': '63.5300',
    '3. low': '57.3900',
    '4. close': '62.3500',
    '5. volume': '6090727'
  },
  '2016-11-30': {
    '1. open': '58.5000',
    '2. high': '59.3600',
    '3. low': '53.6400',
    '4. close': '58.1900',
    '5. volume': '7511928'
  },
  '2016-10-31': {
    '1. open': '55.0000',
    '2. high': '59.7900',
    '3. low': '54.7400',
    '4. close': '58.3300',
    '5. volume': '6817254'
  },
  '2016-09-30': {
    '1. open': '48.1000',
    '2. high': '56.3800',
    '3. low': '45.7050',
    '4. close': '55.3000',
    '5. volume': '10034321'
  },
  '2016-08-31': {
    '1. open': '42.5900',
    '2. high': '48.8750',
    '3. low': '41.3850',
    '4. close': '47.8400',
    '5. volume': '7455056'
  },
  '2016-07-29': {
    '1. open': '39.5250',
    '2. high': '42.5750',
    '3. low': '37.2800',
    '4. close': '42.2500',
    '5. volume': '6373295'
  },
  '2016-06-30': {
    '1. open': '43.3800',
    '2. high': '44.2000',
    '3. low': '37.7200',
    '4. close': '39.2800',
    '5. volume': '8027168'
  },
  '2016-05-31': {
    '1. open': '45.7500',
    '2. high': '46.4850',
    '3. low': '41.2800',
    '4. close': '42.9400',
    '5. volume': '6703017'
  },
  '2016-04-29': {
    '1. open': '41.8000',
    '2. high': '46.7900',
    '3. low': '40.0800',
    '4. close': '45.6650',
    '5. volume': '7164877'
  },
  '2016-03-31': {
    '1. open': '38.4450',
    '2. high': '43.2700',
    '3. low': '38.3100',
    '4. close': '42.2400',
    '5. volume': '10254669'
  },
  '2016-02-29': {
    '1. open': '38.0000',
    '2. high': '38.6000',
    '3. low': '32.9000',
    '4. close': '38.3950',
    '5. volume': '9946446'
  },
  '2016-01-29': {
    '1. open': '42.3750',
    '2. high': '42.5150',
    '3. low': '35.6000',
    '4. close': '37.7950',
    '5. volume': '11240674'
  },
  '2015-12-30': {
    '1. open': '48.4350',
    '2. high': '49.3450',
    '3. low': '41.2950',
    '4. close': '42.6800',
    '5. volume': '7643442'
  },
  '2015-11-30': {
    '1. open': '48.4200',
    '2. high': '51.9200',
    '3. low': '45.4400',
    '4. close': '48.2000',
    '5. volume': '10378466'
  },
  '2015-10-30': {
    '1. open': '42.2750',
    '2. high': '50.2200',
    '3. low': '40.8000',
    '4. close': '48.8500',
    '5. volume': '11637974'
  },
  '2015-09-30': {
    '1. open': '44.6250',
    '2. high': '48.0000',
    '3. low': '39.9900',
    '4. close': '41.8150',
    '5. volume': '22714585'
  },
  '2015-08-31': {
    '1. open': '52.4200',
    '2. high': '55.7300',
    '3. low': '42.3950',
    '4. close': '45.3000',
    '5. volume': '17091136'
  },
  '2015-07-31': {
    '1. open': '53.5000',
    '2. high': '56.5000',
    '3. low': '50.3500',
    '4. close': '52.5300',
    '5. volume': '13465648'
  },
  '2015-06-30': {
    '1. open': '50.8100',
    '2. high': '55.8700',
    '3. low': '48.4750',
    '4. close': '52.8900',
    '5. volume': '14933569'
  },
  '2015-05-29': {
    '1. open': '48.1500',
    '2. high': '52.4800',
    '3. low': '46.6100',
    '4. close': '50.5300',
    '5. volume': '10068393'
  },
  '2015-04-30': {
    '1. open': '49.4200',
    '2. high': '52.5900',
    '3. low': '47.0500',
    '4. close': '47.8750',
    '5. volume': '10014954'
  },
  '2015-03-31': {
    '1. open': '46.2750',
    '2. high': '51.0000',
    '3. low': '45.0350',
    '4. close': '49.6250',
    '5. volume': '15718617'
  },
  '2015-02-27': {
    '1. open': '42.5550',
    '2. high': '46.4650',
    '3. low': '42.2250',
    '4. close': '46.0350',
    '5. volume': '16503701'
  },
  '2015-01-30': {
    '1. open': '38.5000',
    '2. high': '42.7100',
    '3. low': '33.5250',
    '4. close': '42.5500',
    '5. volume': '29868535'
  },
  '2014-12-30': {
    '1. open': '39.6600',
    '2. high': '40.9000',
    '3. low': '36.2400',
    '4. close': '38.4550',
    '5. volume': '14650060'
  },
  '2014-11-28': {
    '1. open': '41.4250',
    '2. high': '42.3000',
    '3. low': '37.2550',
    '4. close': '39.9350',
    '5. volume': '23919526'
  },
  '2014-10-31': {
    '1. open': '43.5250',
    '2. high': '43.7850',
    '3. low': '38.9450',
    '4. close': '41.4800',
    '5. volume': '21980529'
  },
  '2014-09-30': {
    '1. open': '47.2400',
    '2. high': '48.7650',
    '3. low': '43.3650',
    '4. close': '43.7050',
    '5. volume': '15005319'
  },
  '2014-08-29': {
    '1. open': '47.1400',
    '2. high': '48.1500',
    '3. low': '45.6000',
    '4. close': '47.1150',
    '5. volume': '13366840'
  },
  '2014-07-31': {
    '1. open': '49.3400',
    '2. high': '51.1600',
    '3. low': '47.1100',
    '4. close': '47.5650',
    '5. volume': '12618984'
  },
  '2014-06-30': {
    '1. open': '52.4000',
    '2. high': '52.4900',
    '3. low': '48.0700',
    '4. close': '49.2950',
    '5. volume': '11796972'
  },
  '2014-05-30': {
    '1. open': '54.7900',
    '2. high': '55.1600',
    '3. low': '50.5600',
    '4. close': '52.1600',
    '5. volume': '16178491'
  },
  '2014-04-30': {
    '1. open': '54.9000',
    '2. high': '56.7500',
    '3. low': '52.8800',
    '4. close': '54.8000',
    '5. volume': '10632130'
  },
  '2014-03-31': {
    '1. open': '52.6000',
    '2. high': '55.1300',
    '3. low': '49.2550',
    '4. close': '54.7500',
    '5. volume': '17004670'
  },
  '2014-02-28': {
    '1. open': '48.7500',
    '2. high': '54.9200',
    '3. low': '47.9300',
    '4. close': '53.7800',
    '5. volume': '20638633'
  },
  '2014-01-31': {
    '1. open': '48.8950',
    '2. high': '49.9500',
    '3. low': '44.6400',
    '4. close': '48.7500',
    '5. volume': '32563510'
  },
  '2013-12-30': {
    '1. open': '48.4750',
    '2. high': '48.8650',
    '3. low': '43.6650',
    '4. close': '48.4750',
    '5. volume': '13959450'
  },
  '2013-11-29': {
    '1. open': '51.8200',
    '2. high': '53.6400',
    '3. low': '45.9400',
    '4. close': '48.6950',
    '5. volume': '17527234'
  },
  '2013-10-31': {
    '1. open': '47.9000',
    '2. high': '52.0900',
    '3. low': '46.0700',
    '4. close': '51.8400',
    '5. volume': '13178397'
  },
  '2013-09-30': {
    '1. open': '49.3700',
    '2. high': '53.1600',
    '3. low': '47.5050',
    '4. close': '47.9800',
    '5. volume': '16007726'
  },
  '2013-08-30': {
    '1. open': '47.2000',
    '2. high': '49.2950',
    '3. low': '42.8050',
    '4. close': '48.7650',
    '5. volume': '19617678'
  },
  '2013-07-31': {
    '1. open': '46.4150',
    '2. high': '48.8000',
    '3. low': '42.4450',
    '4. close': '47.0050',
    '5. volume': '21739844'
  },
  '2013-06-28': {
    '1. open': '57.5500',
    '2. high': '58.1000',
    '3. low': '44.9050',
    '4. close': '46.2800',
    '5. volume': '22736985'
  },
  '2013-05-31': {
    '1. open': '55.0300',
    '2. high': '59.1500',
    '3. low': '52.6200',
    '4. close': '57.5700',
    '5. volume': '20728911'
  },
  '2013-04-30': {
    '1. open': '55.2300',
    '2. high': '55.5900',
    '3. low': '50.4500',
    '4. close': '55.3000',
    '5. volume': '17471822'
  },
  '2013-03-28': {
    '1. open': '64.9000',
    '2. high': '68.4300',
    '3. low': '54.1900',
    '4. close': '55.3200',
    '5. volume': '24296074'
  },
  '2013-02-28': {
    '1. open': '62.3400',
    '2. high': '69.9900',
    '3. low': '60.5900',
    '4. close': '64.9200',
    '5. volume': '13148471'
  },
  '2013-01-31': {
    '1. open': '67.7000',
    '2. high': '67.7800',
    '3. low': '60.4500',
    '4. close': '62.2000',
    '5. volume': '12705765'
  },
  '2012-12-28': {
    '1. open': '67.0000',
    '2. high': '68.8300',
    '3. low': '65.7300',
    '4. close': '66.2700',
    '5. volume': '6926997'
  },
  '2012-11-30': {
    '1. open': '63.5400',
    '2. high': '67.4400',
    '3. low': '60.0200',
    '4. close': '66.9300',
    '5. volume': '11778741'
  },
  '2012-10-31': {
    '1. open': '63.7500',
    '2. high': '65.9600',
    '3. low': '59.3300',
    '4. close': '63.7300',
    '5. volume': '13939432'
  },
  '2012-09-28': {
    '1. open': '60.4500',
    '2. high': '68.9000',
    '3. low': '58.3600',
    '4. close': '64.5300',
    '5. volume': '15295932'
  },
  '2012-08-31': {
    '1. open': '56.7800',
    '2. high': '62.3500',
    '3. low': '55.6700',
    '4. close': '60.3200',
    '5. volume': '9737806'
  },
  '2012-07-31': {
    '1. open': '49.7300',
    '2. high': '58.3900',
    '3. low': '49.3050',
    '4. close': '56.5000',
    '5. volume': '11926374'
  },
  '2012-06-29': {
    '1. open': '53.8200',
    '2. high': '54.2600',
    '3. low': '45.7450',
    '4. close': '49.7200',
    '5. volume': '15140092'
  },
  '2012-05-31': {
    '1. open': '61.6400',
    '2. high': '63.2200',
    '3. low': '51.5300',
    '4. close': '53.5900',
    '5. volume': '14039775'
  },
  '2012-04-30': {
    '1. open': '61.6800',
    '2. high': '64.4000',
    '3. low': '56.6100',
    '4. close': '60.1500',
    '5. volume': '10051584'
  },
  '2012-03-30': {
    '1. open': '55.8000',
    '2. high': '63.8000',
    '3. low': '51.5200',
    '4. close': '61.9800',
    '5. volume': '16243345'
  },
  '2012-02-29': {
    '1. open': '50.1500',
    '2. high': '58.6500',
    '3. low': '50.1000',
    '4. close': '56.1000',
    '5. volume': '9944576'
  },
  '2012-01-31': {
    '1. open': '40.4000',
    '2. high': '51.0600',
    '3. low': '40.1700',
    '4. close': '49.7950',
    '5. volume': '11552987'
  },
  '2011-12-30': {
    '1. open': '41.3000',
    '2. high': '42.3000',
    '3. low': '35.7250',
    '4. close': '40.0000',
    '5. volume': '8676898'
  },
  '2011-11-30': {
    '1. open': '42.1500',
    '2. high': '44.5300',
    '3. low': '35.2700',
    '4. close': '41.4600',
    '5. volume': '13080052'
  },
  '2011-10-31': {
    '1. open': '34.5450',
    '2. high': '46.9000',
    '3. low': '31.3400',
    '4. close': '42.5900',
    '5. volume': '11343264'
  },
  '2011-09-30': {
    '1. open': '43.4200',
    '2. high': '43.4200',
    '3. low': '33.4000',
    '4. close': '36.2400',
    '5. volume': '17749299'
  },
  '2011-08-31': {
    '1. open': '57.3500',
    '2. high': '57.5800',
    '3. low': '37.8000',
    '4. close': '43.4300',
    '5. volume': '23321955'
  },
  '2011-07-29': {
    '1. open': '56.7000',
    '2. high': '61.1300',
    '3. low': '54.4500',
    '4. close': '56.1600',
    '5. volume': '9215912'
  },
  '2011-06-30': {
    '1. open': '60.0500',
    '2. high': '60.9500',
    '3. low': '53.7500',
    '4. close': '56.6000',
    '5. volume': '10731741'
  },
  '2011-05-31': {
    '1. open': '62.2600',
    '2. high': '64.0800',
    '3. low': '55.6400',
    '4. close': '59.9900',
    '5. volume': '11833359'
  },
  '2011-04-29': {
    '1. open': '53.6000',
    '2. high': '62.9000',
    '3. low': '53.1300',
    '4. close': '61.9300',
    '5. volume': '10545403'
  },
  '2011-03-31': {
    '1. open': '53.9500',
    '2. high': '55.8700',
    '3. low': '47.3300',
    '4. close': '52.7800',
    '5. volume': '14454618'
  },
  '2011-02-28': {
    '1. open': '53.2400',
    '2. high': '58.8100',
    '3. low': '51.7100',
    '4. close': '53.9000',
    '5. volume': '9486944'
  },
  '2011-01-31': {
    '1. open': '59.5000',
    '2. high': '59.9000',
    '3. low': '50.4800',
    '4. close': '53.0900',
    '5. volume': '11672912'
  },
  '2010-12-30': {
    '1. open': '54.4300',
    '2. high': '59.4900',
    '3. low': '53.5600',
    '4. close': '59.1000',
    '5. volume': '10080171'
  },
  '2010-11-30': {
    '1. open': '50.5000',
    '2. high': '55.1700',
    '3. low': '49.2200',
    '4. close': '54.2700',
    '5. volume': '15852892'
  },
  '2010-10-29': {
    '1. open': '40.6500',
    '2. high': '50.2300',
    '3. low': '40.6500',
    '4. close': '50.0000',
    '5. volume': '11232139'
  },
  '2010-09-30': {
    '1. open': '34.8500',
    '2. high': '41.8000',
    '3. low': '34.2650',
    '4. close': '40.1900',
    '5. volume': '11468588'
  },
  '2010-08-31': {
    '1. open': '37.3000',
    '2. high': '41.3650',
    '3. low': '33.1600',
    '4. close': '34.5600',
    '5. volume': '14375603'
  },
  '2010-07-30': {
    '1. open': '34.4300',
    '2. high': '39.3950',
    '3. low': '33.9650',
    '4. close': '36.8450',
    '5. volume': '12937294'
  },
  '2010-06-30': {
    '1. open': '32.6850',
    '2. high': '38.5500',
    '3. low': '31.3850',
    '4. close': '34.8150',
    '5. volume': '14404469'
  },
  '2010-05-31': {
    '1. open': '36.2400',
    '2. high': '37.5950',
    '3. low': '29.7700',
    '4. close': '32.6500',
    '5. volume': '20005935'
  },
  '2010-04-30': {
    '1. open': '34.3500',
    '2. high': '36.4700',
    '3. low': '32.8100',
    '4. close': '35.6700',
    '5. volume': '10050392'
  },
  '2010-03-31': {
    '1. open': '27.3650',
    '2. high': '35.2300',
    '3. low': '27.2550',
    '4. close': '34.1150',
    '5. volume': '16802747'
  },
  '2010-02-26': {
    '1. open': '27.4200',
    '2. high': '29.6900',
    '3. low': '25.8900',
    '4. close': '27.0000',
    '5. volume': '14713057'
  },
  '2010-01-29': {
    '1. open': '26.4000',
    '2. high': '30.6900',
    '3. low': '26.4000',
    '4. close': '27.4850',
    '5. volume': '13890174'
  },
  '2009-12-30': {
    '1. open': '25.5000',
    '2. high': '28.0300',
    '3. low': '25.3800',
    '4. close': '26.3400',
    '5. volume': '9353749'
  },
  '2009-11-30': {
    '1. open': '21.0500',
    '2. high': '25.7500',
    '3. low': '20.1100',
    '4. close': '25.2300',
    '5. volume': '13104301'
  },
  '2009-10-30': {
    '1. open': '23.4700',
    '2. high': '25.6500',
    '3. low': '20.8200',
    '4. close': '21.3300',
    '5. volume': '12727838'
  },
  '2009-09-30': {
    '1. open': '21.1700',
    '2. high': '24.0800',
    '3. low': '20.2000',
    '4. close': '23.5500',
    '5. volume': '10909424'
  },
  '2009-08-31': {
    '1. open': '20.2900',
    '2. high': '22.2600',
    '3. low': '19.0600',
    '4. close': '21.1200',
    '5. volume': '12846189'
  },
  '2009-07-31': {
    '1. open': '17.7000',
    '2. high': '20.7900',
    '3. low': '16.3700',
    '4. close': '20.4200',
    '5. volume': '12538295'
  },
  '2009-06-30': {
    '1. open': '16.6100',
    '2. high': '18.3200',
    '3. low': '15.7600',
    '4. close': '17.6600',
    '5. volume': '10606511'
  },
  '2009-05-29': {
    '1. open': '17.1100',
    '2. high': '18.9500',
    '3. low': '15.0700',
    '4. close': '16.4200',
    '5. volume': '13353875'
  },
  '2009-04-30': {
    '1. open': '12.8600',
    '2. high': '17.2000',
    '3. low': '12.4900',
    '4. close': '16.3400',
    '5. volume': '11779096'
  },
  '2009-03-31': {
    '1. open': '11.6600',
    '2. high': '14.2200',
    '3. low': '11.0900',
    '4. close': '12.8300',
    '5. volume': '11083559'
  },
  '2009-02-27': {
    '1. open': '11.5300',
    '2. high': '13.9900',
    '3. low': '10.6400',
    '4. close': '11.8100',
    '5. volume': '8980903'
  },
  '2009-01-30': {
    '1. open': '14.1500',
    '2. high': '15.1400',
    '3. low': '10.7000',
    '4. close': '11.4600',
    '5. volume': '12546841'
  },
  '2008-12-30': {
    '1. open': '13.1500',
    '2. high': '13.8000',
    '3. low': '11.6400',
    '4. close': '13.7300',
    '5. volume': '12329980'
  },
  '2008-11-28': {
    '1. open': '12.2900',
    '2. high': '14.9900',
    '3. low': '10.2800',
    '4. close': '13.0300',
    '5. volume': '16947497'
  },
  '2008-10-31': {
    '1. open': '19.8000',
    '2. high': '19.8000',
    '3. low': '10.5200',
    '4. close': '11.9400',
    '5. volume': '26827640'
  },
  '2008-09-30': {
    '1. open': '26.1800',
    '2. high': '27.3900',
    '3. low': '18.0300',
    '4. close': '19.3600',
    '5. volume': '20675589'
  },
  '2008-08-29': {
    '1. open': '24.6100',
    '2. high': '27.5100',
    '3. low': '24.3400',
    '4. close': '26.3500',
    '5. volume': '13781643'
  },
  '2008-07-31': {
    '1. open': '26.1000',
    '2. high': '27.8900',
    '3. low': '22.8800',
    '4. close': '24.9700',
    '5. volume': '15642826'
  },
  '2008-06-30': {
    '1. open': '29.0400',
    '2. high': '33.4300',
    '3. low': '24.7500',
    '4. close': '26.0800',
    '5. volume': '17468003'
  },
  '2008-05-30': {
    '1. open': '25.4500',
    '2. high': '30.6500',
    '3. low': '25.2400',
    '4. close': '28.9900',
    '5. volume': '14550375'
  },
  '2008-04-30': {
    '1. open': '25.7900',
    '2. high': '27.6300',
    '3. low': '24.3100',
    '4. close': '25.0100',
    '5. volume': '11946324'
  },
  '2008-03-31': {
    '1. open': '24.7300',
    '2. high': '25.8200',
    '3. low': '22.1000',
    '4. close': '25.4300',
    '5. volume': '16775959'
  },
  '2008-02-29': {
    '1. open': '23.4000',
    '2. high': '26.8800',
    '3. low': '22.6400',
    '4. close': '25.2000',
    '5. volume': '15403898'
  },
  '2008-01-31': {
    '1. open': '34.1000',
    '2. high': '34.3700',
    '3. low': '20.7700',
    '4. close': '23.2000',
    '5. volume': '24630876'
  },
  '2007-12-28': {
    '1. open': '31.9800',
    '2. high': '33.6900',
    '3. low': '30.2700',
    '4. close': '33.6000',
    '5. volume': '11849278'
  },
  '2007-11-30': {
    '1. open': '34.4700',
    '2. high': '34.5100',
    '3. low': '26.7200',
    '4. close': '31.8400',
    '5. volume': '25667909'
  },
  '2007-10-31': {
    '1. open': '33.3000',
    '2. high': '36.2900',
    '3. low': '32.2600',
    '4. close': '34.4700',
    '5. volume': '13643315'
  },
  '2007-09-28': {
    '1. open': '37.0700',
    '2. high': '38.0000',
    '3. low': '32.5800',
    '4. close': '33.2800',
    '5. volume': '17214012'
  },
  '2007-08-31': {
    '1. open': '39.7000',
    '2. high': '40.2200',
    '3. low': '32.6100',
    '4. close': '36.7500',
    '5. volume': '24911859'
  },
  '2007-07-31': {
    '1. open': '40.9900',
    '2. high': '43.0700',
    '3. low': '37.5600',
    '4. close': '39.7000',
    '5. volume': '16235404'
  },
  '2007-06-29': {
    '1. open': '41.5600',
    '2. high': '42.5900',
    '3. low': '38.6000',
    '4. close': '41.3800',
    '5. volume': '14317981'
  },
  '2007-05-31': {
    '1. open': '41.0000',
    '2. high': '43.7500',
    '3. low': '40.0500',
    '4. close': '42.1400',
    '5. volume': '18304454'
  },
  '2007-04-30': {
    '1. open': '38.2000',
    '2. high': '40.5300',
    '3. low': '37.2500',
    '4. close': '40.2200',
    '5. volume': '16445760'
  },
  '2007-03-30': {
    '1. open': '36.9500',
    '2. high': '40.0900',
    '3. low': '34.8800',
    '4. close': '38.5600',
    '5. volume': '21947312'
  },
  '2007-02-28': {
    '1. open': '39.5100',
    '2. high': '42.2500',
    '3. low': '35.1000',
    '4. close': '37.5700',
    '5. volume': '15700696'
  },
  '2007-01-31': {
    '1. open': '42.6900',
    '2. high': '43.5500',
    '3. low': '39.1300',
    '4. close': '39.6600',
    '5. volume': '12936677'
  },
  '2006-12-29': {
    '1. open': '40.0000',
    '2. high': '42.4800',
    '3. low': '39.8200',
    '4. close': '42.4800',
    '5. volume': '8531438'
  },
  '2006-11-30': {
    '1. open': '35.9000',
    '2. high': '41.5600',
    '3. low': '35.4200',
    '4. close': '39.8500',
    '5. volume': '12729918'
  },
  '2006-10-31': {
    '1. open': '33.9900',
    '2. high': '36.7700',
    '3. low': '33.8100',
    '4. close': '35.8100',
    '5. volume': '8582066'
  },
  '2006-09-29': {
    '1. open': '32.0500',
    '2. high': '34.6100',
    '3. low': '31.5900',
    '4. close': '33.8500',
    '5. volume': '10295577'
  },
  '2006-08-31': {
    '1. open': '29.0700',
    '2. high': '32.4700',
    '3. low': '28.5100',
    '4. close': '32.0300',
    '5. volume': '10522741'
  },
  '2006-07-31': {
    '1. open': '30.7500',
    '2. high': '31.9600',
    '3. low': '28.9000',
    '4. close': '29.3100',
    '5. volume': '7908365'
  },
  '2006-06-30': {
    '1. open': '31.9000',
    '2. high': '32.2800',
    '3. low': '26.4600',
    '4. close': '30.8600',
    '5. volume': '12476715'
  },
  '2006-05-31': {
    '1. open': '32.9800',
    '2. high': '35.0000',
    '3. low': '29.1000',
    '4. close': '31.6200',
    '5. volume': '13886346'
  },
  '2006-04-28': {
    '1. open': '31.1000',
    '2. high': '34.0600',
    '3. low': '29.6100',
    '4. close': '32.4200',
    '5. volume': '11725668'
  },
  '2006-03-31': {
    '1. open': '29.0100',
    '2. high': '32.6500',
    '3. low': '28.0000',
    '4. close': '31.0100',
    '5. volume': '9984357'
  },
  '2006-02-28': {
    '1. open': '25.5200',
    '2. high': '29.7000',
    '3. low': '25.0000',
    '4. close': '29.0500',
    '5. volume': '11594327'
  },
  '2006-01-31': {
    '1. open': '26.4900',
    '2. high': '28.1500',
    '3. low': '24.6700',
    '4. close': '26.0500',
    '5. volume': '10041047'
  },
  '2005-12-30': {
    '1. open': '26.8500',
    '2. high': '27.7400',
    '3. low': '26.3100',
    '4. close': '26.9600',
    '5. volume': '6091342'
  },
  '2005-11-30': {
    '1. open': '24.4100',
    '2. high': '27.1500',
    '3. low': '23.7300',
    '4. close': '26.8500',
    '5. volume': '8502047'
  },
  '2005-10-31': {
    '1. open': '24.9900',
    '2. high': '25.2000',
    '3. low': '21.6400',
    '4. close': '24.2000',
    '5. volume': '10118638'
  },
  '2005-09-30': {
    '1. open': '23.9000',
    '2. high': '26.1600',
    '3. low': '22.8500',
    '4. close': '24.8000',
    '5. volume': '10454651'
  },
  '2005-08-31': {
    '1. open': '23.7000',
    '2. high': '24.8400',
    '3. low': '21.7700',
    '4. close': '23.9500',
    '5. volume': '11470324'
  },
  '2005-07-29': {
    '1. open': '18.5000',
    '2. high': '23.8900',
    '3. low': '18.4500',
    '4. close': '23.7900',
    '5. volume': '11162115'
  },
  '2005-06-30': {
    '1. open': '17.4500',
    '2. high': '19.7600',
    '3. low': '17.4300',
    '4. close': '18.5200',
    '5. volume': '13339266'
  },
  '2005-05-31': {
    '1. open': '16.1400',
    '2. high': '17.5000',
    '3. low': '16.0000',
    '4. close': '17.3500',
    '5. volume': '7573850'
  },
  '2005-04-29': {
    '1. open': '15.9100',
    '2. high': '17.6200',
    '3. low': '15.6200',
    '4. close': '16.0000',
    '5. volume': '14401134'
  },
  '2005-03-31': {
    '1. open': '17.3000',
    '2. high': '17.7700',
    '3. low': '15.5700',
    '4. close': '15.9000',
    '5. volume': '14153883'
  },
  '2005-02-28': {
    '1. open': '15.0500',
    '2. high': '17.9000',
    '3. low': '14.7000',
    '4. close': '17.0300',
    '5. volume': '37141101'
  },
  '2005-01-31': {
    '1. open': '25.1200',
    '2. high': '25.2900',
    '3. low': '13.6300',
    '4. close': '14.8400',
    '5. volume': '134813925'
  },
  '2004-12-31': {
    '1. open': '23.7600',
    '2. high': '25.5300',
    '3. low': '23.7400',
    '4. close': '24.9400',
    '5. volume': '76356313'
  },
  '2004-11-30': {
    '1. open': '22.2500',
    '2. high': '24.7100',
    '3. low': '22.2000',
    '4. close': '23.8400',
    '5. volume': '89486955'
  },
  '2004-10-29': {
    '1. open': '22.1500',
    '2. high': '23.3500',
    '3. low': '21.5500',
    '4. close': '22.2100',
    '5. volume': '84492954'
  },
  '2004-09-30': {
    '1. open': '21.1500',
    '2. high': '22.4600',
    '3. low': '20.5000',
    '4. close': '22.0200',
    '5. volume': '92970636'
  },
  '2004-08-31': {
    '1. open': '22.0100',
    '2. high': '22.1900',
    '3. low': '19.7300',
    '4. close': '20.9700',
    '5. volume': '77001132'
  },
  '2004-07-30': {
    '1. open': '23.9000',
    '2. high': '24.0000',
    '3. low': '21.2100',
    '4. close': '22.1800',
    '5. volume': '78523617'
  },
  '2004-06-30': {
    '1. open': '23.3600',
    '2. high': '24.0500',
    '3. low': '22.4500',
    '4. close': '23.7000',
    '5. volume': '85560606'
  },
  '2004-05-31': {
    '1. open': '21.9200',
    '2. high': '23.7900',
    '3. low': '20.7000',
    '4. close': '23.4000',
    '5. volume': '104189457'
  },
  '2004-04-30': {
    '1. open': '19.9500',
    '2. high': '23.1000',
    '3. low': '19.7000',
    '4. close': '22.7300',
    '5. volume': '97393310'
  },
  '2004-03-31': {
    '1. open': '23.0500',
    '2. high': '23.8300',
    '3. low': '19.0200',
    '4. close': '19.8100',
    '5. volume': '131903542'
  },
  '2004-02-27': {
    '1. open': '24.5200',
    '2. high': '24.7900',
    '3. low': '22.2000',
    '4. close': '22.8000',
    '5. volume': '76853955'
  },
  '2004-01-30': {
    '1. open': '23.2200',
    '2. high': '25.8200',
    '3. low': '23.2200',
    '4. close': '24.3800',
    '5. volume': '82625463'
  },
  '2003-12-31': {
    '1. open': '22.8000',
    '2. high': '23.6600',
    '3. low': '21.8200',
    '4. close': '23.2200',
    '5. volume': '79439848'
  },
  '2003-11-28': {
    '1. open': '20.6300',
    '2. high': '23.4600',
    '3. low': '20.4200',
    '4. close': '22.5400',
    '5. volume': '118003480'
  },
  '2003-10-31': {
    '1. open': '18.4800',
    '2. high': '20.7100',
    '3. low': '17.8800',
    '4. close': '20.7900',
    '5. volume': '99048619'
  },
  '2003-09-30': {
    '1. open': '19.6900',
    '2. high': '21.1000',
    '3. low': '18.0000',
    '4. close': '18.5500',
    '5. volume': '108110037'
  },
  '2003-08-29': {
    '1. open': '20.9300',
    '2. high': '21.4600',
    '3. low': '18.6000',
    '4. close': '19.2500',
    '5. volume': '85002654'
  },
  '2003-07-31': {
    '1. open': '20.0000',
    '2. high': '21.2500',
    '3. low': '18.7900',
    '4. close': '21.2100',
    '5. volume': '90153210'
  },
  '2003-06-30': {
    '1. open': '17.7000',
    '2. high': '20.7700',
    '3. low': '17.5400',
    '4. close': '20.2500',
    '5. volume': '93009265'
  },
  '2003-05-30': {
    '1. open': '16.3500',
    '2. high': '18.5100',
    '3. low': '15.5800',
    '4. close': '17.3700',
    '5. volume': '119310704'
  },
  '2003-04-30': {
    '1. open': '12.4900',
    '2. high': '17.4000',
    '3. low': '11.9600',
    '4. close': '16.3500',
    '5. volume': '118933418'
  },
  '2003-03-31': {
    '1. open': '12.4000',
    '2. high': '14.7800',
    '3. low': '9.8000',
    '4. close': '12.4900',
    '5. volume': '173884206'
  },
  '2003-02-28': {
    '1. open': '16.5400',
    '2. high': '16.9400',
    '3. low': '10.8100',
    '4. close': '12.1700',
    '5. volume': '138367546'
  },
  '2003-01-31': {
    '1. open': '20.4500',
    '2. high': '22.4800',
    '3. low': '15.3000',
    '4. close': '16.2300',
    '5. volume': '100485606'
  },
  '2002-12-31': {
    '1. open': '23.2100',
    '2. high': '24.1700',
    '3. low': '19.4200',
    '4. close': '20.4500',
    '5. volume': '64804455'
  },
  '2002-11-29': {
    '1. open': '19.1600',
    '2. high': '23.9300',
    '3. low': '18.2700',
    '4. close': '23.0600',
    '5. volume': '85016603'
  },
  '2002-10-31': {
    '1. open': '17.8600',
    '2. high': '21.8400',
    '3. low': '17.0300',
    '4. close': '18.6000',
    '5. volume': '99085983'
  },
  '2002-09-30': {
    '1. open': '24.0500',
    '2. high': '24.0500',
    '3. low': '17.2600',
    '4. close': '17.0000',
    '5. volume': '102833171'
  },
  '2002-08-30': {
    '1. open': '24.4500',
    '2. high': '25.6300',
    '3. low': '20.9000',
    '4. close': '24.1000',
    '5. volume': '71700828'
  },
  '2002-07-31': {
    '1. open': '32.2000',
    '2. high': '33.5500',
    '3. low': '22.7000',
    '4. close': '25.1500',
    '5. volume': '99852249'
  },
  '2002-06-28': {
    '1. open': '34.5000',
    '2. high': '35.0900',
    '3. low': '29.0600',
    '4. close': '32.9700',
    '5. volume': '80246309'
  },
  '2002-05-31': {
    '1. open': '35.9500',
    '2. high': '37.2400',
    '3. low': '34.0000',
    '4. close': '34.8000',
    '5. volume': '49392923'
  },
  '2002-04-30': {
    '1. open': '38.7800',
    '2. high': '40.4100',
    '3. low': '34.8000',
    '4. close': '35.9500',
    '5. volume': '60770909'
  },
  '2002-03-29': {
    '1. open': '36.6100',
    '2. high': '40.9000',
    '3. low': '36.6100',
    '4. close': '38.7800',
    '5. volume': '73422309'
  },
  '2002-02-28': {
    '1. open': '37.3400',
    '2. high': '37.8500',
    '3. low': '32.6900',
    '4. close': '36.7900',
    '5. volume': '51728683'
  },
  '2002-01-31': {
    '1. open': '35.8000',
    '2. high': '38.7600',
    '3. low': '34.7700',
    '4. close': '37.1800',
    '5. volume': '64521077'
  },
  '2001-12-31': {
    '1. open': '36.1700',
    '2. high': '38.2900',
    '3. low': '34.0000',
    '4. close': '35.8000',
    '5. volume': '47545255'
  },
  '2001-11-30': {
    '1. open': '32.8900',
    '2. high': '39.0600',
    '3. low': '32.3200',
    '4. close': '36.9000',
    '5. volume': '66413257'
  },
  '2001-10-31': {
    '1. open': '31.4800',
    '2. high': '37.3200',
    '3. low': '29.4100',
    '4. close': '32.9600',
    '5. volume': '79203618'
  },
  '2001-09-28': {
    '1. open': '35.6400',
    '2. high': '36.9800',
    '3. low': '23.9000',
    '4. close': '31.5000',
    '5. volume': '74911262'
  },
  '2001-08-31': {
    '1. open': '47.2000',
    '2. high': '47.2400',
    '3. low': '32.5000',
    '4. close': '35.1800',
    '5. volume': '151758553'
  },
  '2001-07-31': {
    '1. open': '46.3000',
    '2. high': '47.2500',
    '3. low': '42.6900',
    '4. close': '47.2500',
    '5. volume': '50145554'
  },
  '2001-06-29': {
    '1. open': '46.9900',
    '2. high': '48.3000',
    '3. low': '42.4200',
    '4. close': '46.8600',
    '5. volume': '49755625'
  },
  '2001-05-31': {
    '1. open': '47.6300',
    '2. high': '48.5400',
    '3. low': '45.0000',
    '4. close': '46.7100',
    '5. volume': '42375808'
  },
  '2001-04-30': {
    '1. open': '47.9600',
    '2. high': '50.1500',
    '3. low': '45.0000',
    '4. close': '47.6300',
    '5. volume': '53855288'
  },
  '2001-03-30': {
    '1. open': '53.1500',
    '2. high': '53.5700',
    '3. low': '44.7900',
    '4. close': '48.1400',
    '5. volume': '65411652'
  },
  '2001-02-28': {
    '1. open': '52.5600',
    '2. high': '55.0000',
    '3. low': '51.3300',
    '4. close': '53.1900',
    '5. volume': '29904098'
  },
  '2001-01-31': {
    '1. open': '55.8700',
    '2. high': '58.0000',
    '3. low': '49.2000',
    '4. close': '52.8800',
    '5. volume': '39632871'
  },
  '2000-12-29': {
    '1. open': '50.1500',
    '2. high': '56.5000',
    '3. low': '50.1200',
    '4. close': '55.8700',
    '5. volume': '47073889'
  },
  '2000-11-30': {
    '1. open': '51.4900',
    '2. high': '53.0000',
    '3. low': '47.7000',
    '4. close': '50.7700',
    '5. volume': '44499419'
  },
  '2000-10-31': {
    '1. open': '42.2000',
    '2. high': '49.9700',
    '3. low': '41.8200',
    '4. close': '49.3500',
    '5. volume': '27266011'
  },
  '2000-09-29': {
    '1. open': '48.0900',
    '2. high': '48.0900',
    '3. low': '40.8000',
    '4. close': '41.8900',
    '5. volume': '40203380'
  },
  '2000-08-31': {
    '1. open': '45.1200',
    '2. high': '49.1700',
    '3. low': '42.9000',
    '4. close': '47.2700',
    '5. volume': '45963669'
  },
  '2000-07-31': {
    '1. open': '41.1900',
    '2. high': '45.7100',
    '3. low': '40.2000',
    '4. close': '45.0500',
    '5. volume': '30410142'
  },
  '2000-06-30': {
    '1. open': '41.4600',
    '2. high': '42.9900',
    '3. low': '38.5200',
    '4. close': '41.0500',
    '5. volume': '50946915'
  },
  '2000-05-31': {
    '1. open': '45.8300',
    '2. high': '45.8300',
    '3. low': '40.8700',
    '4. close': '41.4000',
    '5. volume': '32530255'
  },
  '2000-04-28': {
    '1. open': '46.6000',
    '2. high': '47.6300',
    '3. low': '42.3000',
    '4. close': '45.8300',
    '5. volume': '33561093'
  },
  '2000-03-31': {
    '1. open': '43.2500',
    '2. high': '47.8300',
    '3. low': '40.2100',
    '4. close': '46.7800',
    '5. volume': '75710284'
  },
  '2000-02-29': {
    '1. open': '40.5500',
    '2. high': '45.3900',
    '3. low': '39.5100',
    '4. close': '43.7900',
    '5. volume': '42650844'
  }
};

// tslint:disable:max-line-length
export const lanxessCompany: Company = {
  id: 1065,
  name: 'Lanxess AG',
  country: Country.Deutschland,
  city: 'Köln',
  url: 'http://www.lanxess.de/',
  description: 'Die LANXESS Aktiengesellschaft mit Sitz in Köln ist ein Spezialchemie-Konzern.[2] Der Konzern entstand 2004 durch Ausgliederung der Chemie- und von Teilen der Polymersparte der Bayer AG. Das Kerngeschäft von Lanxess bilden Entwicklung, Herstellung und Vertrieb von chemischen Zwischenprodukten, Additiven, Spezialchemikalien und Kunststoffen.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Lanxess',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/LanXess-Logo.svg/500px-LanXess-Logo.svg.png',
  products: [],
  industries: [1510, 171011],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE0005470405',
  wkn: '547040',
  symbol: 'LXS.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Chemie', 'Polymere', 'Basischemikalien', 'Spezialchemikalien', 'Feinchemikalien']
};
// tslint:enable:max-line-length

