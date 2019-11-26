import { Country } from '../../../enums/country';
import { Company } from '../../../interfaces/company';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {year: 2018, rate: 1.15, yield: 1.82}, {year: 2017, rate: 1.10}, {year: 2016, rate: 1.05}, {
    year: 2015,
    rate: 0.85,
    yield: 1.15
  }, {year: 2014, rate: 0.75, yield: 1.69}, {year: 2013, rate: 0.70, yield: 1.38}, {year: 2012, rate: 0.65, yield: 1.62}, {
    year: 2011,
    rate: 0.60,
    yield: 1.92
  }, {year: 2010, rate: 0.50, yield: 1.77}, {year: 2009, rate: 0.00, yield: 0.00}, {year: 2008, rate: 0.40, yield: 1.48}, {
    year: 2007,
    rate: 0.40,
    yield: 1.06
  }
];
const prices = {
  '2019-11-14': {
    '1. open': '72.3500',
    '2. high': '74.5000',
    '3. low': '71.5000',
    '4. close': '72.3500',
    '5. volume': '682606'
  },
  '2019-10-31': {
    '1. open': '65.5000',
    '2. high': '72.8500',
    '3. low': '62.0500',
    '4. close': '72.2500',
    '5. volume': '2870423'
  },
  '2019-09-30': {
    '1. open': '69.3000',
    '2. high': '69.9500',
    '3. low': '64.8500',
    '4. close': '65.8000',
    '5. volume': '1698243'
  },
  '2019-08-30': {
    '1. open': '70.8000',
    '2. high': '72.0000',
    '3. low': '64.6000',
    '4. close': '68.6500',
    '5. volume': '1940262'
  },
  '2019-07-31': {
    '1. open': '65.7500',
    '2. high': '74.8000',
    '3. low': '64.3500',
    '4. close': '70.9000',
    '5. volume': '2557006'
  },
  '2019-06-28': {
    '1. open': '63.6500',
    '2. high': '66.3000',
    '3. low': '61.9500',
    '4. close': '64.7500',
    '5. volume': '2089450'
  },
  '2019-05-31': {
    '1. open': '67.6500',
    '2. high': '70.3500',
    '3. low': '63.3000',
    '4. close': '63.8000',
    '5. volume': '1823997'
  },
  '2019-04-30': {
    '1. open': '67.1000',
    '2. high': '71.9000',
    '3. low': '65.1500',
    '4. close': '67.0000',
    '5. volume': '2241771'
  },
  '2019-03-29': {
    '1. open': '68.1000',
    '2. high': '69.7500',
    '3. low': '65.7500',
    '4. close': '67.0000',
    '5. volume': '1945112'
  },
  '2019-02-28': {
    '1. open': '59.2500',
    '2. high': '70.1000',
    '3. low': '56.5000',
    '4. close': '67.5000',
    '5. volume': '3190073'
  },
  '2019-01-31': {
    '1. open': '54.1000',
    '2. high': '61.7000',
    '3. low': '51.1000',
    '4. close': '59.1000',
    '5. volume': '3056583'
  },
  '2018-12-28': {
    '1. open': '63.7000',
    '2. high': '65.2000',
    '3. low': '54.5000',
    '4. close': '57.2500',
    '5. volume': '1862384'
  },
  '2018-11-30': {
    '1. open': '62.4500',
    '2. high': '65.0500',
    '3. low': '62.0000',
    '4. close': '62.9000',
    '5. volume': '2176224'
  },
  '2018-10-31': {
    '1. open': '72.7500',
    '2. high': '74.4000',
    '3. low': '59.2000',
    '4. close': '62.2500',
    '5. volume': '4059446'
  },
  '2018-09-28': {
    '1. open': '71.8500',
    '2. high': '80.2500',
    '3. low': '69.8500',
    '4. close': '72.7500',
    '5. volume': '2912556'
  },
  '2018-08-31': {
    '1. open': '73.0500',
    '2. high': '74.6000',
    '3. low': '71.5500',
    '4. close': '72.0000',
    '5. volume': '1314832'
  },
  '2018-07-31': {
    '1. open': '69.1500',
    '2. high': '78.9000',
    '3. low': '68.1000',
    '4. close': '72.8000',
    '5. volume': '3128668'
  },
  '2018-06-29': {
    '1. open': '66.7000',
    '2. high': '73.6000',
    '3. low': '66.2500',
    '4. close': '69.5000',
    '5. volume': '2472407'
  },
  '2018-05-31': {
    '1. open': '67.8500',
    '2. high': '69.1500',
    '3. low': '65.7500',
    '4. close': '66.6500',
    '5. volume': '1529397'
  },
  '2018-04-30': {
    '1. open': '66.3500',
    '2. high': '68.9500',
    '3. low': '64.0500',
    '4. close': '67.6000',
    '5. volume': '1832700'
  },
  '2018-03-29': {
    '1. open': '63.2000',
    '2. high': '68.5000',
    '3. low': '62.2500',
    '4. close': '66.6500',
    '5. volume': '1874447'
  },
  '2018-02-28': {
    '1. open': '70.2500',
    '2. high': '70.8500',
    '3. low': '60.6000',
    '4. close': '63.1000',
    '5. volume': '3242988'
  },
  '2018-01-31': {
    '1. open': '69.4000',
    '2. high': '73.9500',
    '3. low': '68.4500',
    '4. close': '70.3000',
    '5. volume': '2245031'
  },
  '2017-12-29': {
    '1. open': '67.4000',
    '2. high': '71.2500',
    '3. low': '66.1200',
    '4. close': '69.1200',
    '5. volume': '2201246'
  },
  '2017-11-30': {
    '1. open': '68.9100',
    '2. high': '68.9900',
    '3. low': '64.4900',
    '4. close': '67.0600',
    '5. volume': '2096916'
  },
  '2017-10-31': {
    '1. open': '65.9000',
    '2. high': '69.6000',
    '3. low': '63.2700',
    '4. close': '68.2400',
    '5. volume': '3127026'
  },
  '2017-09-29': {
    '1. open': '66.2000',
    '2. high': '66.2600',
    '3. low': '59.6100',
    '4. close': '65.4900',
    '5. volume': '3571949'
  },
  '2017-08-31': {
    '1. open': '69.8700',
    '2. high': '70.9900',
    '3. low': '64.6300',
    '4. close': '66.0800',
    '5. volume': '1930423'
  },
  '2017-07-31': {
    '1. open': '71.0000',
    '2. high': '71.7800',
    '3. low': '68.2800',
    '4. close': '69.7700',
    '5. volume': '2488391'
  },
  '2017-06-30': {
    '1. open': '76.2900',
    '2. high': '78.2500',
    '3. low': '69.6700',
    '4. close': '70.4300',
    '5. volume': '2307994'
  },
  '2017-05-31': {
    '1. open': '72.4500',
    '2. high': '76.2800',
    '3. low': '72.0000',
    '4. close': '76.2400',
    '5. volume': '1872698'
  },
  '2017-04-28': {
    '1. open': '74.3000',
    '2. high': '74.9200',
    '3. low': '70.0800',
    '4. close': '72.0200',
    '5. volume': '2563740'
  },
  '2017-03-31': {
    '1. open': '74.3900',
    '2. high': '74.9500',
    '3. low': '71.5800',
    '4. close': '74.2400',
    '5. volume': '2021134'
  },
  '2017-02-28': {
    '1. open': '75.5700',
    '2. high': '76.8800',
    '3. low': '71.9400',
    '4. close': '74.0100',
    '5. volume': '2424263'
  },
  '2017-01-31': {
    '1. open': '70.5000',
    '2. high': '76.8600',
    '3. low': '70.3800',
    '4. close': '75.2200',
    '5. volume': '1695016'
  },
  '2016-12-30': {
    '1. open': '68.7900',
    '2. high': '71.3900',
    '3. low': '66.7600',
    '4. close': '70.6200',
    '5. volume': '1433052'
  },
  '2016-11-30': {
    '1. open': '68.9300',
    '2. high': '69.6500',
    '3. low': '65.6500',
    '4. close': '68.8500',
    '5. volume': '1863028'
  },
  '2016-10-31': {
    '1. open': '75.0000',
    '2. high': '76.9000',
    '3. low': '68.2500',
    '4. close': '68.7100',
    '5. volume': '1928720'
  },
  '2016-09-30': {
    '1. open': '74.9700',
    '2. high': '77.6000',
    '3. low': '71.6500',
    '4. close': '75.6300',
    '5. volume': '1666858'
  },
  '2016-08-31': {
    '1. open': '77.0700',
    '2. high': '77.3700',
    '3. low': '73.0600',
    '4. close': '74.4500',
    '5. volume': '1216257'
  },
  '2016-07-29': {
    '1. open': '69.1700',
    '2. high': '77.1900',
    '3. low': '68.6900',
    '4. close': '76.7700',
    '5. volume': '1578688'
  },
  '2016-06-30': {
    '1. open': '71.5800',
    '2. high': '74.5700',
    '3. low': '65.0000',
    '4. close': '68.9900',
    '5. volume': '1912502'
  },
  '2016-05-31': {
    '1. open': '65.5000',
    '2. high': '72.3500',
    '3. low': '64.4400',
    '4. close': '71.5400',
    '5. volume': '1542230'
  },
  '2016-04-29': {
    '1. open': '68.1200',
    '2. high': '73.7000',
    '3. low': '64.7400',
    '4. close': '64.9400',
    '5. volume': '2026126'
  },
  '2016-03-31': {
    '1. open': '66.4500',
    '2. high': '70.3600',
    '3. low': '64.0800',
    '4. close': '68.9300',
    '5. volume': '1868430'
  },
  '2016-02-29': {
    '1. open': '65.6600',
    '2. high': '67.0800',
    '3. low': '55.7000',
    '4. close': '65.9400',
    '5. volume': '3589133'
  },
  '2016-01-29': {
    '1. open': '71.4000',
    '2. high': '71.6800',
    '3. low': '63.2000',
    '4. close': '65.1300',
    '5. volume': '2546785'
  },
  '2015-12-30': {
    '1. open': '74.0500',
    '2. high': '76.2400',
    '3. low': '67.7000',
    '4. close': '72.1900',
    '5. volume': '2397540'
  },
  '2015-11-30': {
    '1. open': '70.5800',
    '2. high': '76.6200',
    '3. low': '69.9700',
    '4. close': '73.9000',
    '5. volume': '2139518'
  },
  '2015-10-30': {
    '1. open': '65.9000',
    '2. high': '72.1200',
    '3. low': '63.5200',
    '4. close': '70.9700',
    '5. volume': '2767850'
  },
  '2015-09-30': {
    '1. open': '63.8500',
    '2. high': '67.5900',
    '3. low': '62.2000',
    '4. close': '65.2400',
    '5. volume': '2564926'
  },
  '2015-08-31': {
    '1. open': '66.9100',
    '2. high': '68.6400',
    '3. low': '57.2800',
    '4. close': '64.6300',
    '5. volume': '2848734'
  },
  '2015-07-31': {
    '1. open': '56.1000',
    '2. high': '68.3300',
    '3. low': '52.0900',
    '4. close': '66.9100',
    '5. volume': '3869551'
  },
  '2015-06-30': {
    '1. open': '52.1100',
    '2. high': '56.5500',
    '3. low': '49.9650',
    '4. close': '55.9100',
    '5. volume': '2293200'
  },
  '2015-05-29': {
    '1. open': '50.5000',
    '2. high': '54.3000',
    '3. low': '48.4150',
    '4. close': '51.9400',
    '5. volume': '2189562'
  },
  '2015-04-30': {
    '1. open': '51.2400',
    '2. high': '57.8000',
    '3. low': '49.2400',
    '4. close': '50.6900',
    '5. volume': '3356466'
  },
  '2015-03-31': {
    '1. open': '51.2000',
    '2. high': '53.4000',
    '3. low': '49.2300',
    '4. close': '51.3600',
    '5. volume': '2416315'
  },
  '2015-02-27': {
    '1. open': '48.6900',
    '2. high': '52.8000',
    '3. low': '46.5500',
    '4. close': '51.4700',
    '5. volume': '2050902'
  },
  '2015-01-30': {
    '1. open': '45.1500',
    '2. high': '48.7600',
    '3. low': '43.3650',
    '4. close': '48.3950',
    '5. volume': '2283416'
  },
  '2014-12-30': {
    '1. open': '44.3050',
    '2. high': '46.5500',
    '3. low': '41.4000',
    '4. close': '44.9500',
    '5. volume': '1608287'
  },
  '2014-11-28': {
    '1. open': '44.4050',
    '2. high': '46.5150',
    '3. low': '43.9100',
    '4. close': '44.4350',
    '5. volume': '1709380'
  },
  '2014-10-31': {
    '1. open': '51.0900',
    '2. high': '51.7300',
    '3. low': '41.0350',
    '4. close': '44.3450',
    '5. volume': '4863056'
  },
  '2014-09-30': {
    '1. open': '54.9800',
    '2. high': '56.9900',
    '3. low': '50.8500',
    '4. close': '51.4200',
    '5. volume': '1865807'
  },
  '2014-08-29': {
    '1. open': '51.3700',
    '2. high': '55.7300',
    '3. low': '49.4100',
    '4. close': '55.0000',
    '5. volume': '1554845'
  },
  '2014-07-31': {
    '1. open': '50.4700',
    '2. high': '53.8500',
    '3. low': '49.7650',
    '4. close': '51.7000',
    '5. volume': '1752975'
  },
  '2014-06-30': {
    '1. open': '49.5000',
    '2. high': '53.0700',
    '3. low': '48.3850',
    '4. close': '50.3800',
    '5. volume': '1568617'
  },
  '2014-05-30': {
    '1. open': '48.5150',
    '2. high': '49.6650',
    '3. low': '47.2850',
    '4. close': '49.3700',
    '5. volume': '1082983'
  },
  '2014-04-30': {
    '1. open': '46.8900',
    '2. high': '49.4250',
    '3. low': '44.5600',
    '4. close': '48.8650',
    '5. volume': '2520559'
  },
  '2014-03-31': {
    '1. open': '48.2300',
    '2. high': '49.8050',
    '3. low': '44.2200',
    '4. close': '46.9750',
    '5. volume': '2588090'
  },
  '2014-02-28': {
    '1. open': '50.0000',
    '2. high': '51.9100',
    '3. low': '47.5050',
    '4. close': '49.4200',
    '5. volume': '3261011'
  },
  '2014-01-31': {
    '1. open': '50.9500',
    '2. high': '54.2200',
    '3. low': '49.0600',
    '4. close': '49.8500',
    '5. volume': '2392282'
  },
  '2013-12-30': {
    '1. open': '49.7250',
    '2. high': '51.2000',
    '3. low': '46.1100',
    '4. close': '50.8300',
    '5. volume': '2116835'
  },
  '2013-11-29': {
    '1. open': '48.9000',
    '2. high': '51.2500',
    '3. low': '46.9050',
    '4. close': '49.6650',
    '5. volume': '2363007'
  },
  '2013-10-31': {
    '1. open': '44.7000',
    '2. high': '48.8200',
    '3. low': '42.5600',
    '4. close': '48.8200',
    '5. volume': '2810848'
  },
  '2013-09-30': {
    '1. open': '46.2300',
    '2. high': '46.8500',
    '3. low': '43.0550',
    '4. close': '44.2800',
    '5. volume': '2340380'
  },
  '2013-08-30': {
    '1. open': '43.5000',
    '2. high': '47.6600',
    '3. low': '43.5000',
    '4. close': '45.6500',
    '5. volume': '1552775'
  },
  '2013-07-31': {
    '1. open': '44.5000',
    '2. high': '45.4050',
    '3. low': '41.6350',
    '4. close': '43.8650',
    '5. volume': '2514470'
  },
  '2013-06-28': {
    '1. open': '46.0150',
    '2. high': '46.8800',
    '3. low': '41.6350',
    '4. close': '44.5000',
    '5. volume': '1953177'
  },
  '2013-05-31': {
    '1. open': '43.3400',
    '2. high': '47.9850',
    '3. low': '42.8750',
    '4. close': '46.2900',
    '5. volume': '1991732'
  },
  '2013-04-30': {
    '1. open': '44.5900',
    '2. high': '46.8050',
    '3. low': '42.2250',
    '4. close': '43.3550',
    '5. volume': '2932073'
  },
  '2013-03-28': {
    '1. open': '44.0650',
    '2. high': '46.4000',
    '3. low': '43.1950',
    '4. close': '44.8250',
    '5. volume': '2536412'
  },
  '2013-02-28': {
    '1. open': '37.9450',
    '2. high': '44.7750',
    '3. low': '37.1500',
    '4. close': '44.1250',
    '5. volume': '3970674'
  },
  '2013-01-31': {
    '1. open': '40.7000',
    '2. high': '40.7300',
    '3. low': '37.0500',
    '4. close': '37.8900',
    '5. volume': '2753851'
  },
  '2012-12-28': {
    '1. open': '39.6000',
    '2. high': '40.8450',
    '3. low': '38.7150',
    '4. close': '40.0950',
    '5. volume': '1383729'
  },
  '2012-11-30': {
    '1. open': '38.2800',
    '2. high': '39.5300',
    '3. low': '36.9550',
    '4. close': '39.4050',
    '5. volume': '1766775'
  },
  '2012-10-31': {
    '1. open': '40.6000',
    '2. high': '41.8800',
    '3. low': '36.4000',
    '4. close': '38.2800',
    '5. volume': '3544385'
  },
  '2012-09-28': {
    '1. open': '39.8000',
    '2. high': '41.4100',
    '3. low': '39.1350',
    '4. close': '40.6700',
    '5. volume': '1841210'
  },
  '2012-08-31': {
    '1. open': '38.0050',
    '2. high': '40.6250',
    '3. low': '37.6450',
    '4. close': '39.8900',
    '5. volume': '1761723'
  },
  '2012-07-31': {
    '1. open': '37.1000',
    '2. high': '40.4100',
    '3. low': '36.7100',
    '4. close': '38.1000',
    '5. volume': '4043142'
  },
  '2012-06-29': {
    '1. open': '35.1900',
    '2. high': '37.5800',
    '3. low': '32.7350',
    '4. close': '37.0900',
    '5. volume': '2533304'
  },
  '2012-05-31': {
    '1. open': '35.2300',
    '2. high': '36.3350',
    '3. low': '33.2000',
    '4. close': '35.4600',
    '5. volume': '2324715'
  },
  '2012-04-30': {
    '1. open': '33.0000',
    '2. high': '36.6700',
    '3. low': '31.8900',
    '4. close': '34.8800',
    '5. volume': '3885831'
  },
  '2012-03-30': {
    '1. open': '33.2400',
    '2. high': '34.2600',
    '3. low': '32.1250',
    '4. close': '32.8000',
    '5. volume': '2538226'
  },
  '2012-02-29': {
    '1. open': '36.2500',
    '2. high': '37.7600',
    '3. low': '31.9200',
    '4. close': '33.3350',
    '5. volume': '4603720'
  },
  '2012-01-31': {
    '1. open': '32.0000',
    '2. high': '37.1700',
    '3. low': '31.8350',
    '4. close': '36.2850',
    '5. volume': '2849591'
  },
  '2011-12-30': {
    '1. open': '31.1950',
    '2. high': '32.2950',
    '3. low': '30.7050',
    '4. close': '32.1950',
    '5. volume': '1437238'
  },
  '2011-11-30': {
    '1. open': '31.7900',
    '2. high': '32.3050',
    '3. low': '28.8500',
    '4. close': '31.1700',
    '5. volume': '2269451'
  },
  '2011-10-31': {
    '1. open': '30.4950',
    '2. high': '33.2850',
    '3. low': '28.5400',
    '4. close': '32.0000',
    '5. volume': '2575050'
  },
  '2011-09-30': {
    '1. open': '33.2100',
    '2. high': '33.2100',
    '3. low': '28.1550',
    '4. close': '31.5000',
    '5. volume': '2150078'
  },
  '2011-08-31': {
    '1. open': '35.3850',
    '2. high': '35.6950',
    '3. low': '27.7450',
    '4. close': '33.0000',
    '5. volume': '3052393'
  },
  '2011-07-29': {
    '1. open': '33.0000',
    '2. high': '37.1000',
    '3. low': '31.5300',
    '4. close': '35.2900',
    '5. volume': '2565058'
  },
  '2011-06-30': {
    '1. open': '32.7650',
    '2. high': '33.6300',
    '3. low': '31.0000',
    '4. close': '32.9150',
    '5. volume': '1483318'
  },
  '2011-05-31': {
    '1. open': '32.9250',
    '2. high': '33.8400',
    '3. low': '31.6500',
    '4. close': '32.8900',
    '5. volume': '1332052'
  },
  '2011-04-29': {
    '1. open': '32.3150',
    '2. high': '33.9050',
    '3. low': '31.7650',
    '4. close': '32.6450',
    '5. volume': '1286466'
  },
  '2011-03-31': {
    '1. open': '33.1950',
    '2. high': '33.1950',
    '3. low': '29.4300',
    '4. close': '32.3000',
    '5. volume': '1585594'
  },
  '2011-02-28': {
    '1. open': '30.7000',
    '2. high': '33.3000',
    '3. low': '29.8800',
    '4. close': '32.1350',
    '5. volume': '2178773'
  },
  '2011-01-31': {
    '1. open': '32.8000',
    '2. high': '34.1500',
    '3. low': '29.4300',
    '4. close': '30.2000',
    '5. volume': '1457217'
  },
  '2010-12-30': {
    '1. open': '28.3250',
    '2. high': '32.9900',
    '3. low': '27.9000',
    '4. close': '32.9900',
    '5. volume': '1753883'
  },
  '2010-11-30': {
    '1. open': '28.6650',
    '2. high': '29.0000',
    '3. low': '27.1900',
    '4. close': '28.2000',
    '5. volume': '1317950'
  },
  '2010-10-29': {
    '1. open': '29.5450',
    '2. high': '30.3800',
    '3. low': '27.3700',
    '4. close': '28.4300',
    '5. volume': '2314142'
  },
  '2010-09-30': {
    '1. open': '27.7150',
    '2. high': '29.9400',
    '3. low': '27.5950',
    '4. close': '29.3500',
    '5. volume': '1595535'
  },
  '2010-08-31': {
    '1. open': '28.3600',
    '2. high': '28.6900',
    '3. low': '26.2000',
    '4. close': '27.3500',
    '5. volume': '1320685'
  },
  '2010-07-30': {
    '1. open': '26.0000',
    '2. high': '29.6100',
    '3. low': '25.0200',
    '4. close': '28.0400',
    '5. volume': '3285419'
  },
  '2010-06-30': {
    '1. open': '25.0900',
    '2. high': '28.3450',
    '3. low': '24.4500',
    '4. close': '26.3000',
    '5. volume': '2428321'
  },
  '2010-05-31': {
    '1. open': '26.0800',
    '2. high': '26.4500',
    '3. low': '23.1600',
    '4. close': '25.4150',
    '5. volume': '1946395'
  },
  '2010-04-30': {
    '1. open': '23.1500',
    '2. high': '27.6500',
    '3. low': '23.0200',
    '4. close': '26.3050',
    '5. volume': '2456822'
  },
  '2010-03-31': {
    '1. open': '23.0000',
    '2. high': '24.0000',
    '3. low': '22.0050',
    '4. close': '23.1500',
    '5. volume': '1944413'
  },
  '2010-02-26': {
    '1. open': '24.0000',
    '2. high': '27.0000',
    '3. low': '21.4900',
    '4. close': '22.7000',
    '5. volume': '2963264'
  },
  '2010-01-29': {
    '1. open': '23.6000',
    '2. high': '25.6500',
    '3. low': '22.8000',
    '4. close': '23.6500',
    '5. volume': '1753331'
  },
  '2009-12-30': {
    '1. open': '23.0600',
    '2. high': '25.3700',
    '3. low': '23.0000',
    '4. close': '23.5000',
    '5. volume': '1527103'
  },
  '2009-11-30': {
    '1. open': '19.2100',
    '2. high': '23.9000',
    '3. low': '19.1000',
    '4. close': '23.0500',
    '5. volume': '2052210'
  },
  '2009-10-30': {
    '1. open': '21.6900',
    '2. high': '22.6500',
    '3. low': '19.1000',
    '4. close': '19.3000',
    '5. volume': '4014408'
  },
  '2009-09-30': {
    '1. open': '19.7400',
    '2. high': '22.2600',
    '3. low': '18.7200',
    '4. close': '21.5000',
    '5. volume': '5130260'
  },
  '2009-08-31': {
    '1. open': '15.7600',
    '2. high': '19.9400',
    '3. low': '15.6600',
    '4. close': '19.6600',
    '5. volume': '2938251'
  },
  '2009-07-31': {
    '1. open': '16.4500',
    '2. high': '17.0700',
    '3. low': '15.2500',
    '4. close': '15.7100',
    '5. volume': '4785644'
  },
  '2009-06-30': {
    '1. open': '16.4200',
    '2. high': '17.8700',
    '3. low': '15.1500',
    '4. close': '15.8100',
    '5. volume': '4718703'
  },
  '2009-05-29': {
    '1. open': '18.3600',
    '2. high': '20.0000',
    '3. low': '16.3000',
    '4. close': '16.3100',
    '5. volume': '2021425'
  },
  '2009-04-30': {
    '1. open': '13.8800',
    '2. high': '18.7200',
    '3. low': '13.7100',
    '4. close': '18.2500',
    '5. volume': '3649949'
  },
  '2009-03-31': {
    '1. open': '16.5900',
    '2. high': '16.6400',
    '3. low': '13.0200',
    '4. close': '13.7900',
    '5. volume': '3135060'
  },
  '2009-02-27': {
    '1. open': '15.8000',
    '2. high': '19.4900',
    '3. low': '15.5000',
    '4. close': '16.6500',
    '5. volume': '2854601'
  },
  '2009-01-30': {
    '1. open': '19.8200',
    '2. high': '19.8200',
    '3. low': '15.2500',
    '4. close': '16.0000',
    '5. volume': '2860750'
  },
  '2008-12-30': {
    '1. open': '26.9400',
    '2. high': '27.1400',
    '3. low': '16.9200',
    '4. close': '19.5000',
    '5. volume': '4560904'
  },
  '2008-11-28': {
    '1. open': '26.9000',
    '2. high': '31.4500',
    '3. low': '24.5000',
    '4. close': '27.1000',
    '5. volume': '886264'
  },
  '2008-10-31': {
    '1. open': '32.0300',
    '2. high': '32.4900',
    '3. low': '22.1500',
    '4. close': '27.1800',
    '5. volume': '2390974'
  },
  '2008-09-30': {
    '1. open': '34.6400',
    '2. high': '34.6500',
    '3. low': '30.0000',
    '4. close': '32.2100',
    '5. volume': '1618796'
  },
  '2008-08-29': {
    '1. open': '33.3300',
    '2. high': '35.5300',
    '3. low': '32.5000',
    '4. close': '34.4100',
    '5. volume': '929009'
  },
  '2008-07-31': {
    '1. open': '32.6800',
    '2. high': '35.6800',
    '3. low': '29.4000',
    '4. close': '33.3100',
    '5. volume': '2012818'
  },
  '2008-06-30': {
    '1. open': '34.9900',
    '2. high': '36.5000',
    '3. low': '31.5100',
    '4. close': '32.3600',
    '5. volume': '1944247'
  },
  '2008-05-30': {
    '1. open': '35.5500',
    '2. high': '37.7100',
    '3. low': '32.9000',
    '4. close': '34.9000',
    '5. volume': '1196342'
  },
  '2008-04-30': {
    '1. open': '32.1500',
    '2. high': '37.1700',
    '3. low': '30.3000',
    '4. close': '35.8100',
    '5. volume': '3502457'
  },
  '2008-03-31': {
    '1. open': '32.0000',
    '2. high': '33.6300',
    '3. low': '29.3000',
    '4. close': '31.8700',
    '5. volume': '608039'
  },
  '2008-02-29': {
    '1. open': '34.0100',
    '2. high': '34.9800',
    '3. low': '30.7800',
    '4. close': '31.9900',
    '5. volume': '736477'
  },
  '2008-01-31': {
    '1. open': '38.0000',
    '2. high': '38.2500',
    '3. low': '30.0100',
    '4. close': '34.3500',
    '5. volume': '1302273'
  },
  '2007-12-28': {
    '1. open': '37.5000',
    '2. high': '38.3900',
    '3. low': '33.9800',
    '4. close': '38.2000',
    '5. volume': '793295'
  },
  '2007-11-30': {
    '1. open': '37.7000',
    '2. high': '37.8800',
    '3. low': '32.2500',
    '4. close': '37.7000',
    '5. volume': '969855'
  },
  '2007-10-31': {
    '1. open': '38.0000',
    '2. high': '39.3100',
    '3. low': '36.5200',
    '4. close': '38.0000',
    '5. volume': '754525'
  },
  '2007-09-28': {
    '1. open': '38.0000',
    '2. high': '39.4000',
    '3. low': '34.0000',
    '4. close': '38.0000',
    '5. volume': '1171453'
  },
  '2007-08-31': {
    '1. open': '37.1700',
    '2. high': '38.4000',
    '3. low': '31.9400',
    '4. close': '38.4000',
    '5. volume': '979770'
  },
  '2007-07-31': {
    '1. open': '38.0000',
    '2. high': '39.7000',
    '3. low': '35.3600',
    '4. close': '36.7600',
    '5. volume': '2814122'
  }
};

// tslint:disable:max-line-length
export const gerresheimerCompany: Company = {
  id: 1055,
  name: 'Gerresheimer AG',
  country: Country.Deutschland,
  city: 'Düsseldorf',
  url: 'https://www.gerresheimer.com/index.html',
  description: 'Die Gerresheimer AG (vormals Gerresheimer Glas AG) mit Sitz in Düsseldorf ist ein börsennotierter deutscher Hersteller von Primärverpackungen aus Spezialglas und Kunststoffen für die Pharma-, Kosmetik- und Lebensmittelindustrie. Das Unternehmen hat Standorte in Europa, Amerika und Asien.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Gerresheimer',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Gerresheimer_logo.svg/500px-Gerresheimer_logo.svg.png',
  products: [],
  industries: [1722],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE000A0LD6E6',
  wkn: 'A0LD6E',
  symbol: 'GXI.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Verpackungen', 'Verpackungslösungen', 'Systemlösungen', 'Primärverpackungen']
};
// tslint:enable:max-line-length

