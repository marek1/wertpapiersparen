import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.00}, {year: 2017, rate: 0.00}, {year: 2016, rate: 0.00}, {year: 2015, rate: 0.00, yield: 0.00}, {
    year: 2014,
    rate: 0.00,
    yield: 0.00
  }, {year: 2013, rate: 0.00, yield: 0.00}, {year: 2012, rate: 0.00, yield: 0.00}, {year: 2011, rate: 0.00, yield: 0.00}, {
    year: 2010,
    rate: 0.00,
    yield: 0.00
  }, {year: 2009, rate: 0.00, yield: 0.00}, {year: 2008, rate: 0.00, yield: 0.00}, {year: 2007, rate: 0.00, yield: 0.00}, {
    year: 2006,
    rate: 0.00,
    yield: 0.00
  }, {year: 2005, rate: 0.00, yield: 0.00}, {year: 2004, rate: 0.00, yield: 0.00}, {year: 2003, rate: 0.00, yield: 0.00}
];
const prices = {
  '2019-11-15': {
    '1. open': '97.7500',
    '2. high': '103.6000',
    '3. low': '93.9500',
    '4. close': '94.5000',
    '5. volume': '1583730'
  },
  '2019-10-31': {
    '1. open': '101.3000',
    '2. high': '106.1000',
    '3. low': '90.6500',
    '4. close': '97.6500',
    '5. volume': '3653578'
  },
  '2019-09-30': {
    '1. open': '107.4000',
    '2. high': '110.6000',
    '3. low': '100.2000',
    '4. close': '101.1000',
    '5. volume': '2265373'
  },
  '2019-08-30': {
    '1. open': '108.9000',
    '2. high': '114.7000',
    '3. low': '101.3000',
    '4. close': '107.5000',
    '5. volume': '3087171'
  },
  '2019-07-31': {
    '1. open': '85.8500',
    '2. high': '111.0000',
    '3. low': '84.1000',
    '4. close': '109.3000',
    '5. volume': '3506866'
  },
  '2019-06-28': {
    '1. open': '86.0500',
    '2. high': '94.4500',
    '3. low': '81.9000',
    '4. close': '84.4500',
    '5. volume': '2953367'
  },
  '2019-05-31': {
    '1. open': '88.9500',
    '2. high': '97.9000',
    '3. low': '85.0000',
    '4. close': '86.4500',
    '5. volume': '3351327'
  },
  '2019-04-30': {
    '1. open': '81.4000',
    '2. high': '91.8000',
    '3. low': '81.3500',
    '4. close': '88.4000',
    '5. volume': '2791731'
  },
  '2019-03-29': {
    '1. open': '91.0500',
    '2. high': '93.6500',
    '3. low': '79.7000',
    '4. close': '81.1500',
    '5. volume': '3257596'
  },
  '2019-02-28': {
    '1. open': '94.5000',
    '2. high': '99.2500',
    '3. low': '87.7000',
    '4. close': '90.3000',
    '5. volume': '2471508'
  },
  '2019-01-31': {
    '1. open': '88.8500',
    '2. high': '105.5000',
    '3. low': '86.5500',
    '4. close': '94.3000',
    '5. volume': '3548432'
  },
  '2018-12-28': {
    '1. open': '104.2000',
    '2. high': '104.7000',
    '3. low': '86.2500',
    '4. close': '88.9500',
    '5. volume': '2934476'
  },
  '2018-11-30': {
    '1. open': '81.8500',
    '2. high': '109.8000',
    '3. low': '81.8500',
    '4. close': '100.9000',
    '5. volume': '5289757'
  },
  '2018-10-31': {
    '1. open': '92.4000',
    '2. high': '95.7000',
    '3. low': '76.4500',
    '4. close': '81.8000',
    '5. volume': '4715799'
  },
  '2018-09-28': {
    '1. open': '101.4000',
    '2. high': '101.7000',
    '3. low': '90.1500',
    '4. close': '92.1000',
    '5. volume': '3274242'
  },
  '2018-08-31': {
    '1. open': '111.9000',
    '2. high': '115.8000',
    '3. low': '97.3500',
    '4. close': '101.7000',
    '5. volume': '2830327'
  },
  '2018-07-31': {
    '1. open': '103.3000',
    '2. high': '124.9000',
    '3. low': '102.3000',
    '4. close': '112.4000',
    '5. volume': '3476364'
  },
  '2018-06-29': {
    '1. open': '89.6000',
    '2. high': '106.0000',
    '3. low': '89.2500',
    '4. close': '105.0000',
    '5. volume': '2760055'
  },
  '2018-05-31': {
    '1. open': '86.7500',
    '2. high': '93.4000',
    '3. low': '85.6500',
    '4. close': '89.0500',
    '5. volume': '1907683'
  },
  '2018-04-30': {
    '1. open': '82.9000',
    '2. high': '87.0000',
    '3. low': '76.9000',
    '4. close': '86.0000',
    '5. volume': '1862115'
  },
  '2018-03-29': {
    '1. open': '81.7000',
    '2. high': '88.4000',
    '3. low': '77.0000',
    '4. close': '83.0000',
    '5. volume': '2994588'
  },
  '2018-02-28': {
    '1. open': '80.0000',
    '2. high': '82.6000',
    '3. low': '70.5500',
    '4. close': '82.1500',
    '5. volume': '2736624'
  },
  '2018-01-31': {
    '1. open': '77.2000',
    '2. high': '87.3500',
    '3. low': '76.5000',
    '4. close': '79.4000',
    '5. volume': '2860663'
  },
  '2017-12-29': {
    '1. open': '79.7000',
    '2. high': '82.0600',
    '3. low': '73.6500',
    '4. close': '76.5800',
    '5. volume': '2411508'
  },
  '2017-11-30': {
    '1. open': '75.6500',
    '2. high': '83.8300',
    '3. low': '74.6000',
    '4. close': '79.3100',
    '5. volume': '3771527'
  },
  '2017-10-31': {
    '1. open': '71.4000',
    '2. high': '80.7100',
    '3. low': '71.3200',
    '4. close': '74.5600',
    '5. volume': '4162683'
  },
  '2017-09-29': {
    '1. open': '60.0000',
    '2. high': '73.3000',
    '3. low': '59.4000',
    '4. close': '71.3700',
    '5. volume': '4112266'
  },
  '2017-08-31': {
    '1. open': '62.0000',
    '2. high': '64.1900',
    '3. low': '55.0500',
    '4. close': '59.6800',
    '5. volume': '4228005'
  },
  '2017-07-31': {
    '1. open': '62.2000',
    '2. high': '68.7300',
    '3. low': '60.2300',
    '4. close': '61.7300',
    '5. volume': '3010109'
  },
  '2017-06-30': {
    '1. open': '65.1500',
    '2. high': '67.7500',
    '3. low': '58.0900',
    '4. close': '62.1000',
    '5. volume': '3753936'
  },
  '2017-05-31': {
    '1. open': '56.0000',
    '2. high': '67.0600',
    '3. low': '53.4000',
    '4. close': '65.1900',
    '5. volume': '4314144'
  },
  '2017-04-28': {
    '1. open': '55.4600',
    '2. high': '55.9400',
    '3. low': '49.6300',
    '4. close': '55.7200',
    '5. volume': '2778077'
  },
  '2017-03-31': {
    '1. open': '53.9200',
    '2. high': '61.3600',
    '3. low': '52.5700',
    '4. close': '55.0700',
    '5. volume': '4718319'
  },
  '2017-02-28': {
    '1. open': '48.2850',
    '2. high': '54.5000',
    '3. low': '47.1000',
    '4. close': '53.8100',
    '5. volume': '2385770'
  },
  '2017-01-31': {
    '1. open': '49.0000',
    '2. high': '51.8800',
    '3. low': '46.5000',
    '4. close': '47.9500',
    '5. volume': '2924440'
  },
  '2016-12-30': {
    '1. open': '41.9850',
    '2. high': '49.0900',
    '3. low': '40.1000',
    '4. close': '48.7500',
    '5. volume': '2779997'
  },
  '2016-11-30': {
    '1. open': '40.4550',
    '2. high': '48.7400',
    '3. low': '38.1400',
    '4. close': '42.0000',
    '5. volume': '4625983'
  },
  '2016-10-31': {
    '1. open': '43.5000',
    '2. high': '46.5950',
    '3. low': '39.7000',
    '4. close': '40.3300',
    '5. volume': '2962393'
  },
  '2016-09-30': {
    '1. open': '38.5900',
    '2. high': '39.4500',
    '3. low': '35.6100',
    '4. close': '37.2250',
    '5. volume': '1934739'
  },
  '2016-08-31': {
    '1. open': '40.0900',
    '2. high': '40.7400',
    '3. low': '37.5250',
    '4. close': '38.2400',
    '5. volume': '1678798'
  },
  '2016-07-29': {
    '1. open': '37.9050',
    '2. high': '40.3200',
    '3. low': '36.4000',
    '4. close': '39.6000',
    '5. volume': '1688888'
  },
  '2016-06-30': {
    '1. open': '50.3000',
    '2. high': '50.5500',
    '3. low': '32.9000',
    '4. close': '37.3300',
    '5. volume': '3702504'
  },
  '2016-05-31': {
    '1. open': '43.7200',
    '2. high': '51.2000',
    '3. low': '41.3200',
    '4. close': '50.4000',
    '5. volume': '1742968'
  },
  '2016-04-29': {
    '1. open': '42.0550',
    '2. high': '52.0000',
    '3. low': '40.3000',
    '4. close': '43.7000',
    '5. volume': '3804701'
  },
  '2016-03-31': {
    '1. open': '37.5000',
    '2. high': '43.6900',
    '3. low': '36.8250',
    '4. close': '42.4050',
    '5. volume': '3626272'
  },
  '2016-02-29': {
    '1. open': '44.2000',
    '2. high': '44.5750',
    '3. low': '33.8850',
    '4. close': '37.4350',
    '5. volume': '3376481'
  },
  '2016-01-29': {
    '1. open': '57.1000',
    '2. high': '57.2900',
    '3. low': '40.7450',
    '4. close': '43.8200',
    '5. volume': '3276881'
  },
  '2015-12-30': {
    '1. open': '56.4000',
    '2. high': '62.3000',
    '3. low': '55.0400',
    '4. close': '57.6500',
    '5. volume': '1937136'
  },
  '2015-11-30': {
    '1. open': '55.7100',
    '2. high': '57.9900',
    '3. low': '47.6600',
    '4. close': '56.0300',
    '5. volume': '2919504'
  },
  '2015-10-30': {
    '1. open': '60.4600',
    '2. high': '62.6900',
    '3. low': '54.1200',
    '4. close': '56.2700',
    '5. volume': '2440912'
  },
  '2015-09-30': {
    '1. open': '62.1300',
    '2. high': '66.3800',
    '3. low': '57.3800',
    '4. close': '59.6100',
    '5. volume': '2442981'
  },
  '2015-08-31': {
    '1. open': '73.6000',
    '2. high': '75.1300',
    '3. low': '56.5900',
    '4. close': '63.0300',
    '5. volume': '2058560'
  },
  '2015-07-31': {
    '1. open': '65.1500',
    '2. high': '76.9600',
    '3. low': '63.7400',
    '4. close': '73.5700',
    '5. volume': '2627297'
  },
  '2015-06-30': {
    '1. open': '67.3100',
    '2. high': '69.3300',
    '3. low': '62.5000',
    '4. close': '64.3800',
    '5. volume': '2936324'
  },
  '2015-05-29': {
    '1. open': '64.6300',
    '2. high': '70.3700',
    '3. low': '60.9800',
    '4. close': '66.8400',
    '5. volume': '2532213'
  },
  '2015-04-30': {
    '1. open': '58.8200',
    '2. high': '67.8800',
    '3. low': '56.1000',
    '4. close': '64.4300',
    '5. volume': '5256611'
  },
  '2015-03-31': {
    '1. open': '74.5100',
    '2. high': '75.7000',
    '3. low': '54.3000',
    '4. close': '58.8100',
    '5. volume': '5824251'
  },
  '2015-02-27': {
    '1. open': '76.6200',
    '2. high': '78.8900',
    '3. low': '71.8800',
    '4. close': '74.4800',
    '5. volume': '2151884'
  },
  '2015-01-30': {
    '1. open': '76.9500',
    '2. high': '79.5000',
    '3. low': '72.3400',
    '4. close': '76.0000',
    '5. volume': '2475978'
  },
  '2014-12-30': {
    '1. open': '78.5200',
    '2. high': '88.5000',
    '3. low': '74.4600',
    '4. close': '76.6300',
    '5. volume': '3190141'
  },
  '2014-11-28': {
    '1. open': '75.4000',
    '2. high': '80.6400',
    '3. low': '73.6200',
    '4. close': '79.1700',
    '5. volume': '1756916'
  },
  '2014-10-31': {
    '1. open': '77.6100',
    '2. high': '77.7500',
    '3. low': '63.2000',
    '4. close': '75.7300',
    '5. volume': '3026798'
  },
  '2014-09-30': {
    '1. open': '70.6000',
    '2. high': '78.7500',
    '3. low': '69.6500',
    '4. close': '77.6900',
    '5. volume': '1694530'
  },
  '2014-08-29': {
    '1. open': '71.5000',
    '2. high': '72.7100',
    '3. low': '62.8700',
    '4. close': '70.2100',
    '5. volume': '1571026'
  },
  '2014-07-31': {
    '1. open': '68.5000',
    '2. high': '74.9000',
    '3. low': '65.8000',
    '4. close': '71.7200',
    '5. volume': '1531683'
  },
  '2014-06-30': {
    '1. open': '67.0000',
    '2. high': '70.9800',
    '3. low': '65.1300',
    '4. close': '68.5000',
    '5. volume': '1189799'
  },
  '2014-05-30': {
    '1. open': '61.9200',
    '2. high': '70.0000',
    '3. low': '59.0300',
    '4. close': '66.4500',
    '5. volume': '1490534'
  },
  '2014-04-30': {
    '1. open': '67.8400',
    '2. high': '68.8900',
    '3. low': '55.4500',
    '4. close': '61.7200',
    '5. volume': '2855965'
  },
  '2014-03-31': {
    '1. open': '63.2100',
    '2. high': '72.7200',
    '3. low': '62.5000',
    '4. close': '67.3000',
    '5. volume': '2696484'
  },
  '2014-02-28': {
    '1. open': '65.0900',
    '2. high': '68.0000',
    '3. low': '60.7500',
    '4. close': '67.2800',
    '5. volume': '1689345'
  },
  '2014-01-31': {
    '1. open': '56.1800',
    '2. high': '70.2300',
    '3. low': '55.9800',
    '4. close': '64.9600',
    '5. volume': '3577201'
  },
  '2013-12-30': {
    '1. open': '56.5200',
    '2. high': '58.9500',
    '3. low': '52.2500',
    '4. close': '55.8500',
    '5. volume': '1735359'
  },
  '2013-11-29': {
    '1. open': '57.3200',
    '2. high': '58.0000',
    '3. low': '50.2400',
    '4. close': '56.4400',
    '5. volume': '2070868'
  },
  '2013-10-31': {
    '1. open': '57.1400',
    '2. high': '61.8500',
    '3. low': '55.2100',
    '4. close': '57.1100',
    '5. volume': '2568141'
  },
  '2013-09-30': {
    '1. open': '56.0000',
    '2. high': '58.3900',
    '3. low': '53.4200',
    '4. close': '57.3900',
    '5. volume': '2176269'
  },
  '2013-08-30': {
    '1. open': '51.7000',
    '2. high': '60.0000',
    '3. low': '51.2600',
    '4. close': '54.6800',
    '5. volume': '2616951'
  },
  '2013-07-31': {
    '1. open': '43.4800',
    '2. high': '52.9400',
    '3. low': '42.2700',
    '4. close': '51.4900',
    '5. volume': '2678570'
  },
  '2013-06-28': {
    '1. open': '37.0000',
    '2. high': '44.9200',
    '3. low': '35.2450',
    '4. close': '43.2450',
    '5. volume': '2930283'
  },
  '2013-05-31': {
    '1. open': '33.9000',
    '2. high': '37.8650',
    '3. low': '33.2400',
    '4. close': '37.2950',
    '5. volume': '1787331'
  },
  '2013-04-30': {
    '1. open': '31.8900',
    '2. high': '34.9000',
    '3. low': '29.3700',
    '4. close': '34.4850',
    '5. volume': '1646814'
  },
  '2013-03-28': {
    '1. open': '29.2050',
    '2. high': '33.4050',
    '3. low': '27.5300',
    '4. close': '31.8750',
    '5. volume': '3384134'
  },
  '2013-02-28': {
    '1. open': '31.1250',
    '2. high': '35.9400',
    '3. low': '29.2200',
    '4. close': '29.7000',
    '5. volume': '2519137'
  },
  '2013-01-31': {
    '1. open': '29.9000',
    '2. high': '32.9250',
    '3. low': '29.1200',
    '4. close': '31.2000',
    '5. volume': '1412256'
  },
  '2012-12-28': {
    '1. open': '26.8900',
    '2. high': '30.4400',
    '3. low': '26.6300',
    '4. close': '29.3000',
    '5. volume': '1427549'
  },
  '2012-11-30': {
    '1. open': '26.0950',
    '2. high': '27.1000',
    '3. low': '24.3800',
    '4. close': '26.9300',
    '5. volume': '1896177'
  },
  '2012-10-31': {
    '1. open': '23.9700',
    '2. high': '26.7500',
    '3. low': '23.8350',
    '4. close': '26.2000',
    '5. volume': '1925283'
  },
  '2012-09-28': {
    '1. open': '19.8150',
    '2. high': '24.4000',
    '3. low': '19.1600',
    '4. close': '24.0000',
    '5. volume': '2221702'
  },
  '2012-08-31': {
    '1. open': '18.0800',
    '2. high': '19.8500',
    '3. low': '17.6000',
    '4. close': '19.5000',
    '5. volume': '671683'
  },
  '2012-07-31': {
    '1. open': '17.6000',
    '2. high': '19.2500',
    '3. low': '17.4800',
    '4. close': '18.2000',
    '5. volume': '541940'
  },
  '2012-06-29': {
    '1. open': '16.9500',
    '2. high': '17.6050',
    '3. low': '16.0500',
    '4. close': '17.6050',
    '5. volume': '1016877'
  },
  '2012-05-31': {
    '1. open': '20.6500',
    '2. high': '20.6900',
    '3. low': '16.9200',
    '4. close': '17.0500',
    '5. volume': '1274876'
  },
  '2012-04-30': {
    '1. open': '19.4500',
    '2. high': '21.8000',
    '3. low': '19.2500',
    '4. close': '20.6250',
    '5. volume': '1490878'
  },
  '2012-03-30': {
    '1. open': '18.1600',
    '2. high': '19.5650',
    '3. low': '17.8200',
    '4. close': '19.2350',
    '5. volume': '1176316'
  },
  '2012-02-29': {
    '1. open': '19.7500',
    '2. high': '19.9500',
    '3. low': '17.7300',
    '4. close': '18.5100',
    '5. volume': '1311122'
  },
  '2012-01-31': {
    '1. open': '17.4900',
    '2. high': '19.9500',
    '3. low': '17.4000',
    '4. close': '19.6750',
    '5. volume': '1463349'
  },
  '2011-12-30': {
    '1. open': '17.3000',
    '2. high': '18.0000',
    '3. low': '16.9750',
    '4. close': '17.5300',
    '5. volume': '922069'
  },
  '2011-11-30': {
    '1. open': '17.1600',
    '2. high': '18.1250',
    '3. low': '15.8250',
    '4. close': '17.2350',
    '5. volume': '1129357'
  },
  '2011-10-31': {
    '1. open': '18.9150',
    '2. high': '19.3950',
    '3. low': '17.3350',
    '4. close': '17.6600',
    '5. volume': '1314275'
  },
  '2011-09-30': {
    '1. open': '19.5500',
    '2. high': '20.2500',
    '3. low': '17.7650',
    '4. close': '19.2250',
    '5. volume': '2024946'
  },
  '2011-08-31': {
    '1. open': '20.1000',
    '2. high': '20.1350',
    '3. low': '15.6500',
    '4. close': '19.5000',
    '5. volume': '2637178'
  },
  '2011-07-29': {
    '1. open': '20.2900',
    '2. high': '20.9000',
    '3. low': '19.3000',
    '4. close': '19.7050',
    '5. volume': '997427'
  },
  '2011-06-30': {
    '1. open': '21.0000',
    '2. high': '21.8750',
    '3. low': '18.5600',
    '4. close': '20.3900',
    '5. volume': '1685622'
  },
  '2011-05-31': {
    '1. open': '19.9600',
    '2. high': '20.9000',
    '3. low': '19.3000',
    '4. close': '20.6500',
    '5. volume': '1610777'
  },
  '2011-04-29': {
    '1. open': '18.9000',
    '2. high': '19.9400',
    '3. low': '18.6350',
    '4. close': '19.8500',
    '5. volume': '1226973'
  },
  '2011-03-31': {
    '1. open': '19.7500',
    '2. high': '20.6500',
    '3. low': '17.2200',
    '4. close': '18.7650',
    '5. volume': '2614867'
  },
  '2011-02-28': {
    '1. open': '19.3000',
    '2. high': '20.2700',
    '3. low': '17.3600',
    '4. close': '19.6700',
    '5. volume': '2025721'
  },
  '2011-01-31': {
    '1. open': '18.5000',
    '2. high': '22.0700',
    '3. low': '18.0550',
    '4. close': '19.2100',
    '5. volume': '4337713'
  },
  '2010-12-30': {
    '1. open': '15.8250',
    '2. high': '18.9500',
    '3. low': '15.6650',
    '4. close': '18.5300',
    '5. volume': '2407663'
  },
  '2010-11-30': {
    '1. open': '17.1100',
    '2. high': '17.2400',
    '3. low': '15.3900',
    '4. close': '15.7450',
    '5. volume': '1105629'
  },
  '2010-10-29': {
    '1. open': '16.7800',
    '2. high': '17.7050',
    '3. low': '16.3950',
    '4. close': '17.2200',
    '5. volume': '973056'
  },
  '2010-09-30': {
    '1. open': '16.4000',
    '2. high': '17.1000',
    '3. low': '16.0750',
    '4. close': '16.6700',
    '5. volume': '1039927'
  },
  '2010-08-31': {
    '1. open': '15.9300',
    '2. high': '17.1000',
    '3. low': '14.9400',
    '4. close': '16.4000',
    '5. volume': '1420112'
  },
  '2010-07-30': {
    '1. open': '14.6900',
    '2. high': '16.1050',
    '3. low': '14.5000',
    '4. close': '15.7700',
    '5. volume': '950562'
  },
  '2010-06-30': {
    '1. open': '14.7500',
    '2. high': '15.4500',
    '3. low': '13.3500',
    '4. close': '14.5200',
    '5. volume': '1271223'
  },
  '2010-05-31': {
    '1. open': '15.4000',
    '2. high': '15.6800',
    '3. low': '14.1000',
    '4. close': '14.8200',
    '5. volume': '1268687'
  },
  '2010-04-30': {
    '1. open': '16.8000',
    '2. high': '17.0000',
    '3. low': '14.8100',
    '4. close': '15.3500',
    '5. volume': '1339078'
  },
  '2010-03-31': {
    '1. open': '15.7000',
    '2. high': '17.3000',
    '3. low': '15.6350',
    '4. close': '16.7900',
    '5. volume': '1283354'
  },
  '2010-02-26': {
    '1. open': '16.9200',
    '2. high': '16.9800',
    '3. low': '15.3000',
    '4. close': '15.6000',
    '5. volume': '1128031'
  },
  '2010-01-29': {
    '1. open': '17.0900',
    '2. high': '17.8500',
    '3. low': '16.8000',
    '4. close': '16.8800',
    '5. volume': '981571'
  },
  '2009-12-30': {
    '1. open': '17.7500',
    '2. high': '18.5000',
    '3. low': '16.5000',
    '4. close': '17.0400',
    '5. volume': '993714'
  },
  '2009-11-30': {
    '1. open': '17.8500',
    '2. high': '18.5500',
    '3. low': '16.7300',
    '4. close': '17.8400',
    '5. volume': '1050284'
  },
  '2009-10-30': {
    '1. open': '17.0000',
    '2. high': '19.0300',
    '3. low': '15.7700',
    '4. close': '17.8100',
    '5. volume': '1714983'
  },
  '2009-09-30': {
    '1. open': '15.4500',
    '2. high': '17.4500',
    '3. low': '14.6900',
    '4. close': '17.1000',
    '5. volume': '1940064'
  },
  '2009-08-31': {
    '1. open': '16.5100',
    '2. high': '16.6700',
    '3. low': '15.1200',
    '4. close': '15.6500',
    '5. volume': '1282471'
  },
  '2009-07-31': {
    '1. open': '16.3300',
    '2. high': '17.4800',
    '3. low': '15.3300',
    '4. close': '16.3200',
    '5. volume': '2261357'
  },
  '2009-06-30': {
    '1. open': '13.8000',
    '2. high': '16.5800',
    '3. low': '13.6300',
    '4. close': '16.3500',
    '5. volume': '1687765'
  },
  '2009-05-29': {
    '1. open': '14.0000',
    '2. high': '14.6300',
    '3. low': '12.8100',
    '4. close': '13.6600',
    '5. volume': '1505673'
  },
  '2009-04-30': {
    '1. open': '12.7500',
    '2. high': '14.4400',
    '3. low': '12.2500',
    '4. close': '13.8400',
    '5. volume': '1896812'
  },
  '2009-03-31': {
    '1. open': '14.8000',
    '2. high': '14.8000',
    '3. low': '11.6600',
    '4. close': '12.8100',
    '5. volume': '2524056'
  },
  '2009-02-27': {
    '1. open': '16.1800',
    '2. high': '16.2100',
    '3. low': '14.3300',
    '4. close': '14.5500',
    '5. volume': '1081291'
  },
  '2009-01-30': {
    '1. open': '18.7000',
    '2. high': '18.7000',
    '3. low': '15.1200',
    '4. close': '16.4000',
    '5. volume': '1522330'
  },
  '2008-12-30': {
    '1. open': '15.4967',
    '2. high': '19.3500',
    '3. low': '14.6700',
    '4. close': '18.7500',
    '5. volume': '2037914'
  },
  '2008-11-28': {
    '1. open': '16.5700',
    '2. high': '16.9967',
    '3. low': '14.4000',
    '4. close': '15.3933',
    '5. volume': '2525622'
  },
  '2008-10-31': {
    '1. open': '14.9267',
    '2. high': '16.3367',
    '3. low': '12.1833',
    '4. close': '16.3367',
    '5. volume': '3839385'
  },
  '2008-09-30': {
    '1. open': '16.4500',
    '2. high': '17.1333',
    '3. low': '13.2333',
    '4. close': '14.4167',
    '5. volume': '2427714'
  },
  '2008-08-29': {
    '1. open': '15.7867',
    '2. high': '17.7000',
    '3. low': '15.4033',
    '4. close': '16.6000',
    '5. volume': '2514528'
  },
  '2008-07-31': {
    '1. open': '13.9933',
    '2. high': '16.2667',
    '3. low': '12.3600',
    '4. close': '16.0133',
    '5. volume': '2573316'
  },
  '2008-06-30': {
    '1. open': '15.4500',
    '2. high': '16.2933',
    '3. low': '13.5300',
    '4. close': '13.9933',
    '5. volume': '2063214'
  },
  '2008-05-30': {
    '1. open': '13.6133',
    '2. high': '15.5667',
    '3. low': '13.6133',
    '4. close': '15.3967',
    '5. volume': '1453212'
  },
  '2008-04-30': {
    '1. open': '13.2000',
    '2. high': '14.1500',
    '3. low': '12.2233',
    '4. close': '13.5500',
    '5. volume': '2088363'
  },
  '2008-03-31': {
    '1. open': '13.8633',
    '2. high': '14.2900',
    '3. low': '11.7867',
    '4. close': '13.0833',
    '5. volume': '3005901'
  },
  '2008-02-29': {
    '1. open': '14.4300',
    '2. high': '16.0200',
    '3. low': '12.8133',
    '4. close': '13.9833',
    '5. volume': '3606687'
  },
  '2008-01-31': {
    '1. open': '16.1000',
    '2. high': '16.4300',
    '3. low': '11.1667',
    '4. close': '14.3000',
    '5. volume': '4406106'
  },
  '2007-12-28': {
    '1. open': '17.8667',
    '2. high': '18.3333',
    '3. low': '15.4000',
    '4. close': '16.1000',
    '5. volume': '2003656'
  },
  '2007-11-30': {
    '1. open': '14.3800',
    '2. high': '14.6667',
    '3. low': '11.3667',
    '4. close': '13.9133',
    '5. volume': '1172901'
  },
  '2007-10-31': {
    '1. open': '14.6100',
    '2. high': '15.0000',
    '3. low': '13.8867',
    '4. close': '14.2500',
    '5. volume': '753174'
  },
  '2007-09-28': {
    '1. open': '12.6633',
    '2. high': '15.2133',
    '3. low': '12.5833',
    '4. close': '14.4567',
    '5. volume': '1461975'
  },
  '2007-08-31': {
    '1. open': '13.6667',
    '2. high': '13.6667',
    '3. low': '10.9100',
    '4. close': '12.5000',
    '5. volume': '1743690'
  },
  '2007-07-31': {
    '1. open': '16.1000',
    '2. high': '16.2000',
    '3. low': '12.7167',
    '4. close': '13.8000',
    '5. volume': '1344994'
  },
  '2007-06-29': {
    '1. open': '17.0000',
    '2. high': '17.0000',
    '3. low': '15.1033',
    '4. close': '16.1000',
    '5. volume': '1053905'
  },
  '2007-05-31': {
    '1. open': '17.5500',
    '2. high': '17.8600',
    '3. low': '16.2367',
    '4. close': '16.8933',
    '5. volume': '839266'
  },
  '2007-04-30': {
    '1. open': '18.2900',
    '2. high': '18.9733',
    '3. low': '16.9700',
    '4. close': '17.6667',
    '5. volume': '610336'
  },
  '2007-03-30': {
    '1. open': '17.6667',
    '2. high': '18.6100',
    '3. low': '16.6167',
    '4. close': '18.1267',
    '5. volume': '821593'
  },
  '2007-02-28': {
    '1. open': '18.4700',
    '2. high': '20.1600',
    '3. low': '15.8333',
    '4. close': '17.4667',
    '5. volume': '966525'
  },
  '2007-01-31': {
    '1. open': '18.2667',
    '2. high': '19.6667',
    '3. low': '17.2833',
    '4. close': '18.4167',
    '5. volume': '905639'
  },
  '2006-12-29': {
    '1. open': '14.9000',
    '2. high': '18.8667',
    '3. low': '14.5533',
    '4. close': '18.1233',
    '5. volume': '895990'
  },
  '2006-11-30': {
    '1. open': '16.5633',
    '2. high': '16.7933',
    '3. low': '14.5000',
    '4. close': '15.0000',
    '5. volume': '604764'
  },
  '2006-10-31': {
    '1. open': '15.5367',
    '2. high': '17.4667',
    '3. low': '15.4333',
    '4. close': '16.4167',
    '5. volume': '816204'
  },
  '2006-09-29': {
    '1. open': '14.6133',
    '2. high': '16.0367',
    '3. low': '14.2933',
    '4. close': '15.7733',
    '5. volume': '432495'
  },
  '2006-08-31': {
    '1. open': '15.1367',
    '2. high': '15.2000',
    '3. low': '14.0333',
    '4. close': '14.6300',
    '5. volume': '617583'
  },
  '2006-07-31': {
    '1. open': '14.1033',
    '2. high': '16.1667',
    '3. low': '13.2033',
    '4. close': '15.0000',
    '5. volume': '869567'
  },
  '2006-06-30': {
    '1. open': '13.3600',
    '2. high': '14.0333',
    '3. low': '11.5000',
    '4. close': '14.0333',
    '5. volume': '1151997'
  },
  '2006-05-31': {
    '1. open': '15.6267',
    '2. high': '15.7767',
    '3. low': '12.3667',
    '4. close': '13.4800',
    '5. volume': '1174295'
  },
  '2006-04-28': {
    '1. open': '15.8667',
    '2. high': '16.1633',
    '3. low': '14.4167',
    '4. close': '15.4133',
    '5. volume': '694719'
  },
  '2006-03-31': {
    '1. open': '16.7333',
    '2. high': '16.9333',
    '3. low': '14.1200',
    '4. close': '15.8033',
    '5. volume': '1279731'
  },
  '2006-02-28': {
    '1. open': '16.3000',
    '2. high': '18.6667',
    '3. low': '15.1167',
    '4. close': '16.2033',
    '5. volume': '1578619'
  },
  '2006-01-31': {
    '1. open': '13.7733',
    '2. high': '16.6667',
    '3. low': '13.5333',
    '4. close': '16.1100',
    '5. volume': '787936'
  },
  '2005-12-30': {
    '1. open': '12.1033',
    '2. high': '14.0633',
    '3. low': '11.7033',
    '4. close': '13.7733',
    '5. volume': '681378'
  },
  '2005-11-30': {
    '1. open': '12.7933',
    '2. high': '12.9467',
    '3. low': '12.0533',
    '4. close': '12.1067',
    '5. volume': '404421'
  },
  '2005-10-31': {
    '1. open': '12.6000',
    '2. high': '13.6667',
    '3. low': '12.0000',
    '4. close': '12.7933',
    '5. volume': '626448'
  },
  '2005-09-30': {
    '1. open': '11.0667',
    '2. high': '13.2000',
    '3. low': '11.0100',
    '4. close': '12.7100',
    '5. volume': '626632'
  },
  '2005-08-31': {
    '1. open': '12.4000',
    '2. high': '12.4633',
    '3. low': '10.6100',
    '4. close': '11.1167',
    '5. volume': '460838'
  },
  '2005-07-29': {
    '1. open': '10.5500',
    '2. high': '12.6667',
    '3. low': '9.7667',
    '4. close': '12.2333',
    '5. volume': '744194'
  },
  '2005-06-30': {
    '1. open': '11.1600',
    '2. high': '11.2133',
    '3. low': '10.4000',
    '4. close': '10.4500',
    '5. volume': '516547'
  },
  '2005-05-31': {
    '1. open': '9.7667',
    '2. high': '11.0933',
    '3. low': '9.7667',
    '4. close': '10.9433',
    '5. volume': '365555'
  },
  '2005-04-29': {
    '1. open': '11.5133',
    '2. high': '12.3300',
    '3. low': '9.1333',
    '4. close': '9.6600',
    '5. volume': '965567'
  },
  '2005-03-31': {
    '1. open': '14.1633',
    '2. high': '14.2300',
    '3. low': '10.4000',
    '4. close': '11.0933',
    '5. volume': '859236'
  },
  '2005-02-28': {
    '1. open': '13.6967',
    '2. high': '14.9933',
    '3. low': '13.4000',
    '4. close': '14.2100',
    '5. volume': '429940'
  },
  '2005-01-31': {
    '1. open': '12.8200',
    '2. high': '14.4300',
    '3. low': '12.6200',
    '4. close': '13.4667',
    '5. volume': '486480'
  },
  '2004-12-30': {
    '1. open': '11.5300',
    '2. high': '13.4667',
    '3. low': '11.2000',
    '4. close': '12.7000',
    '5. volume': '612564'
  },
  '2004-11-30': {
    '1. open': '10.1667',
    '2. high': '15.5667',
    '3. low': '10.1667',
    '4. close': '11.3700',
    '5. volume': '2297850'
  },
  '2004-10-29': {
    '1. open': '8.5633',
    '2. high': '11.1667',
    '3. low': '8.1933',
    '4. close': '10.1333',
    '5. volume': '657404'
  },
  '2004-09-30': {
    '1. open': '7.4400',
    '2. high': '9.1500',
    '3. low': '7.4400',
    '4. close': '8.5100',
    '5. volume': '522658'
  },
  '2004-08-31': {
    '1. open': '7.7967',
    '2. high': '8.3733',
    '3. low': '6.1033',
    '4. close': '7.4367',
    '5. volume': '245846'
  },
  '2004-07-30': {
    '1. open': '7.8833',
    '2. high': '8.5300',
    '3. low': '6.7333',
    '4. close': '7.7000',
    '5. volume': '364603'
  },
  '2004-06-30': {
    '1. open': '7.4967',
    '2. high': '8.9700',
    '3. low': '6.9767',
    '4. close': '7.8000',
    '5. volume': '622439'
  },
  '2004-05-31': {
    '1. open': '6.2267',
    '2. high': '7.6300',
    '3. low': '5.0833',
    '4. close': '7.4333',
    '5. volume': '401970'
  },
  '2004-04-30': {
    '1. open': '6.3067',
    '2. high': '6.6333',
    '3. low': '5.6500',
    '4. close': '6.1333',
    '5. volume': '303886'
  },
  '2004-03-31': {
    '1. open': '7.2033',
    '2. high': '7.6600',
    '3. low': '5.8700',
    '4. close': '6.2833',
    '5. volume': '659776'
  },
  '2004-02-27': {
    '1. open': '6.6967',
    '2. high': '7.6667',
    '3. low': '5.5333',
    '4. close': '7.1667',
    '5. volume': '1174967'
  },
  '2004-01-30': {
    '1. open': '3.8333',
    '2. high': '7.2900',
    '3. low': '3.4433',
    '4. close': '6.5333',
    '5. volume': '1451417'
  },
  '2003-12-30': {
    '1. open': '3.2667',
    '2. high': '4.0633',
    '3. low': '3.0000',
    '4. close': '3.7133',
    '5. volume': '475171'
  },
  '2003-11-28': {
    '1. open': '3.1500',
    '2. high': '3.5000',
    '3. low': '2.8167',
    '4. close': '3.2167',
    '5. volume': '398064'
  },
  '2003-10-31': {
    '1. open': '3.0200',
    '2. high': '3.5333',
    '3. low': '2.9900',
    '4. close': '3.1933',
    '5. volume': '469597'
  },
  '2003-09-30': {
    '1. open': '3.0867',
    '2. high': '3.9333',
    '3. low': '3.0200',
    '4. close': '3.0233',
    '5. volume': '824589'
  },
  '2003-08-29': {
    '1. open': '3.2000',
    '2. high': '3.2633',
    '3. low': '2.7667',
    '4. close': '3.0433',
    '5. volume': '219065'
  },
  '2003-07-31': {
    '1. open': '3.3667',
    '2. high': '3.5133',
    '3. low': '3.0333',
    '4. close': '3.2000',
    '5. volume': '542023'
  },
  '2003-06-30': {
    '1. open': '3.1767',
    '2. high': '4.0933',
    '3. low': '3.1333',
    '4. close': '3.4133',
    '5. volume': '661101'
  },
  '2003-05-30': {
    '1. open': '3.0567',
    '2. high': '3.8633',
    '3. low': '2.9167',
    '4. close': '3.1200',
    '5. volume': '221229'
  },
  '2003-04-30': {
    '1. open': '3.0000',
    '2. high': '3.6000',
    '3. low': '2.9167',
    '4. close': '3.0567',
    '5. volume': '219728'
  },
  '2003-03-31': {
    '1. open': '2.7133',
    '2. high': '4.5000',
    '3. low': '2.1700',
    '4. close': '3.0000',
    '5. volume': '799982'
  },
  '2003-02-28': {
    '1. open': '2.9333',
    '2. high': '3.1667',
    '3. low': '2.5767',
    '4. close': '2.7500',
    '5. volume': '195175'
  },
  '2003-01-31': {
    '1. open': '5.0000',
    '2. high': '6.5333',
    '3. low': '2.7100',
    '4. close': '2.9833',
    '5. volume': '2513666'
  },
  '2002-12-30': {
    '1. open': '2.3867',
    '2. high': '7.2000',
    '3. low': '1.5633',
    '4. close': '5.3167',
    '5. volume': '1238868'
  },
  '2002-11-29': {
    '1. open': '3.5867',
    '2. high': '3.7667',
    '3. low': '2.0033',
    '4. close': '2.3433',
    '5. volume': '1097959'
  },
  '2002-10-31': {
    '1. open': '4.4833',
    '2. high': '5.5333',
    '3. low': '2.7667',
    '4. close': '3.6000',
    '5. volume': '1400280'
  },
  '2002-09-30': {
    '1. open': '6.3667',
    '2. high': '6.7067',
    '3. low': '4.4167',
    '4. close': '4.5233',
    '5. volume': '249449'
  },
  '2002-08-30': {
    '1. open': '7.5333',
    '2. high': '7.7333',
    '3. low': '5.4500',
    '4. close': '6.4633',
    '5. volume': '300899'
  },
  '2002-07-31': {
    '1. open': '8.6500',
    '2. high': '10.0700',
    '3. low': '7.2000',
    '4. close': '7.5200',
    '5. volume': '679145'
  },
  '2002-06-28': {
    '1. open': '9.1500',
    '2. high': '9.3500',
    '3. low': '6.5533',
    '4. close': '8.4833',
    '5. volume': '512838'
  },
  '2002-05-31': {
    '1. open': '10.8300',
    '2. high': '11.1733',
    '3. low': '7.5167',
    '4. close': '9.1667',
    '5. volume': '968577'
  },
  '2002-04-30': {
    '1. open': '13.6767',
    '2. high': '13.7400',
    '3. low': '10.1267',
    '4. close': '10.8000',
    '5. volume': '512050'
  },
  '2002-03-28': {
    '1. open': '15.7667',
    '2. high': '16.6667',
    '3. low': '13.2667',
    '4. close': '13.5667',
    '5. volume': '330874'
  },
  '2002-02-28': {
    '1. open': '18.5000',
    '2. high': '19.3300',
    '3. low': '12.5533',
    '4. close': '15.5833',
    '5. volume': '179936'
  },
  '2002-01-31': {
    '1. open': '20.3333',
    '2. high': '20.6167',
    '3. low': '17.5000',
    '4. close': '18.4000',
    '5. volume': '152942'
  },
  '2001-12-28': {
    '1. open': '18.7333',
    '2. high': '21.3267',
    '3. low': '14.3333',
    '4. close': '20.4833',
    '5. volume': '381388'
  },
  '2001-11-30': {
    '1. open': '18.3333',
    '2. high': '21.8500',
    '3. low': '17.0033',
    '4. close': '18.5000',
    '5. volume': '647231'
  },
  '2001-10-31': {
    '1. open': '9.0333',
    '2. high': '30.5000',
    '3. low': '9.0333',
    '4. close': '18.0000',
    '5. volume': '2004303'
  },
  '2001-09-28': {
    '1. open': '9.9500',
    '2. high': '9.9500',
    '3. low': '4.6333',
    '4. close': '9.0833',
    '5. volume': '278668'
  },
  '2001-08-31': {
    '1. open': '13.3333',
    '2. high': '13.6000',
    '3. low': '9.4300',
    '4. close': '9.9333',
    '5. volume': '257265'
  },
  '2001-07-31': {
    '1. open': '16.5067',
    '2. high': '16.6667',
    '3. low': '10.3700',
    '4. close': '12.9333',
    '5. volume': '337113'
  },
  '2001-06-29': {
    '1. open': '24.0000',
    '2. high': '24.1333',
    '3. low': '13.0433',
    '4. close': '16.5000',
    '5. volume': '451376'
  },
  '2001-05-31': {
    '1. open': '26.4667',
    '2. high': '28.6667',
    '3. low': '22.8333',
    '4. close': '24.0000',
    '5. volume': '195916'
  },
  '2001-04-30': {
    '1. open': '28.5000',
    '2. high': '29.3333',
    '3. low': '21.3333',
    '4. close': '26.1700',
    '5. volume': '199825'
  },
  '2001-03-30': {
    '1. open': '38.6667',
    '2. high': '38.9000',
    '3. low': '19.3300',
    '4. close': '27.8333',
    '5. volume': '514273'
  },
  '2001-02-28': {
    '1. open': '48.5500',
    '2. high': '51.5000',
    '3. low': '36.8333',
    '4. close': '39.1000',
    '5. volume': '139150'
  },
  '2001-01-31': {
    '1. open': '44.3333',
    '2. high': '66.6667',
    '3. low': '42.6667',
    '4. close': '49.4000',
    '5. volume': '464236'
  },
  '2000-12-29': {
    '1. open': '43.4600',
    '2. high': '60.0000',
    '3. low': '39.2333',
    '4. close': '42.0000',
    '5. volume': '163915'
  },
  '2000-11-30': {
    '1. open': '60.0000',
    '2. high': '143.0000',
    '3. low': '36.0000',
    '4. close': '43.0000',
    '5. volume': '172280'
  },
  '2000-10-31': {
    '1. open': '68.6667',
    '2. high': '200.0000',
    '3. low': '53.0000',
    '4. close': '185.0000',
    '5. volume': '91227'
  },
  '2000-09-29': {
    '1. open': '72.6667',
    '2. high': '229.5000',
    '3. low': '59.0000',
    '4. close': '65.6667',
    '5. volume': '161299'
  },
  '2000-08-31': {
    '1. open': '55.6667',
    '2. high': '71.3333',
    '3. low': '34.0700',
    '4. close': '70.8333',
    '5. volume': '472649'
  },
  '2000-07-31': {
    '1. open': '72.8333',
    '2. high': '212.5000',
    '3. low': '54.0000',
    '4. close': '55.3333',
    '5. volume': '114964'
  },
  '2000-06-30': {
    '1. open': '69.8700',
    '2. high': '92.3333',
    '3. low': '66.6667',
    '4. close': '72.3333',
    '5. volume': '138512'
  },
  '2000-05-31': {
    '1. open': '274.0000',
    '2. high': '274.0000',
    '3. low': '56.6667',
    '4. close': '68.3333',
    '5. volume': '258274'
  },
  '2000-04-28': {
    '1. open': '98.3367',
    '2. high': '262.0000',
    '3. low': '75.0000',
    '4. close': '91.3333',
    '5. volume': '226024'
  },
  '2000-03-31': {
    '1. open': '105.6670',
    '2. high': '336.9900',
    '3. low': '71.6667',
    '4. close': '95.0000',
    '5. volume': '521892'
  },
  '2000-02-29': {
    '1. open': '26.6667',
    '2. high': '148.1470',
    '3. low': '25.9000',
    '4. close': '101.0000',
    '5. volume': '1463190'
  },
  '2000-01-31': {
    '1. open': '9.3333',
    '2. high': '58.1000',
    '3. low': '8.5333',
    '4. close': '26.0000',
    '5. volume': '1510039'
  },
  '1999-12-30': {
    '1. open': '7.0000',
    '2. high': '9.6400',
    '3. low': '5.5667',
    '4. close': '8.4667',
    '5. volume': '1173228'
  }
};

// tslint:disable:max-line-length
export const morphosysCompany: Company = {
  id: 1068,
  name: 'MorphoSys AG',
  country: Country.Deutschland,
  city: 'Planegg',
  url: 'http://www.morphosys.de/',
  description: 'Die MorphoSys AG ist ein 1992 gegründetes deutsches Biotechnologieunternehmen. Die börsengehandelte und im TecDAX notierte Gesellschaft hat ihren Sitz seit 2016 in Planegg bei München[2]. Morphosys gehört laut Eigenangabe zu den weltweit führenden Biotechnologieunternehmen im Bereich der vollständig humanen Antikörper. Auf Basis seiner Technologien entwickelt Morphosys Antikörper sowohl für Therapie als auch für Forschung und Diagnostik.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Morphosys',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Morphosys-logo.svg/500px-Morphosys-logo.svg.png',
  products: [],
  industries: [1511],
  currency: Currency.EUR,
  isin: 'DE0006632003',
  wkn: '663200',
  symbol: 'MOR.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX, Indices.TecDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Biotech', 'Antikörper', 'HuCAL®', 'Arzneimittel']
};
// tslint:enable:max-line-length

