import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 2.35, yield: 3.98}, {year: 2017, rate: 2.20}, {
    year: 2016,
    rate: 2.04
  }, {year: 2015, rate: 2.00, yield: 3.81}, {year: 2014, rate: 1.92, yield: 3.17}, {year: 2013, rate: 1.87, yield: 2.95}, {
    year: 2012,
    rate: 1.87,
    yield: 3.41
  }, {year: 2011, rate: 1.70, yield: 4.18}, {year: 2010, rate: 1.60, yield: 2.86}, {year: 2009, rate: 1.03, yield: 2.52}, {
    year: 2008,
    rate: 1.73,
    yield: 6.53
  }, {year: 2007, rate: 1.65, yield: 3.56}, {year: 2006, rate: 1.50}, {year: 2005, rate: 1.13}, {year: 2004, rate: 0.90}
];
const prices = {
  '2019-12-02': {
    '1. open': '87.7800',
    '2. high': '88.3400',
    '3. low': '86.3800',
    '4. close': '87.7800',
    '5. volume': '2556'
  },
  '2019-11-29': {
    '1. open': '83.6400',
    '2. high': '88.5600',
    '3. low': '83.6400',
    '4. close': '87.7000',
    '5. volume': '39385'
  },
  '2019-10-31': {
    '1. open': '80.5400',
    '2. high': '85.3000',
    '3. low': '74.9000',
    '4. close': '83.3400',
    '5. volume': '50131'
  },
  '2019-09-30': {
    '1. open': '76.1400',
    '2. high': '82.0200',
    '3. low': '74.5400',
    '4. close': '80.5200',
    '5. volume': '25996'
  },
  '2019-08-30': {
    '1. open': '77.8800',
    '2. high': '78.6400',
    '3. low': '71.0400',
    '4. close': '76.1600',
    '5. volume': '27184'
  },
  '2019-07-31': {
    '1. open': '80.5600',
    '2. high': '81.2000',
    '3. low': '75.9200',
    '4. close': '78.0800',
    '5. volume': '67057'
  },
  '2019-06-28': {
    '1. open': '70.4800',
    '2. high': '79.7600',
    '3. low': '70.4800',
    '4. close': '79.7600',
    '5. volume': '20344'
  },
  '2019-05-31': {
    '1. open': '74.6400',
    '2. high': '74.6400',
    '3. low': '69.9800',
    '4. close': '70.8000',
    '5. volume': '25772'
  },
  '2019-04-30': {
    '1. open': '70.5200',
    '2. high': '78.5400',
    '3. low': '70.5200',
    '4. close': '76.0000',
    '5. volume': '63019'
  },
  '2019-03-29': {
    '1. open': '68.4400',
    '2. high': '71.3800',
    '3. low': '67.2800',
    '4. close': '69.9600',
    '5. volume': '52088'
  },
  '2019-02-28': {
    '1. open': '62.0600',
    '2. high': '70.1000',
    '3. low': '61.8200',
    '4. close': '68.4400',
    '5. volume': '55505'
  },
  '2019-01-31': {
    '1. open': '57.8200',
    '2. high': '62.4600',
    '3. low': '57.6200',
    '4. close': '62.0800',
    '5. volume': '73777'
  },
  '2018-12-28': {
    '1. open': '66.4800',
    '2. high': '66.8000',
    '3. low': '57.6600',
    '4. close': '58.2600',
    '5. volume': '55893'
  },
  '2018-11-30': {
    '1. open': '64.1600',
    '2. high': '65.6600',
    '3. low': '61.9200',
    '4. close': '64.1600',
    '5. volume': '75703'
  },
  '2018-10-31': {
    '1. open': '69.4800',
    '2. high': '69.4800',
    '3. low': '57.6000',
    '4. close': '63.9600',
    '5. volume': '63294'
  },
  '2018-09-28': {
    '1. open': '70.1000',
    '2. high': '70.5400',
    '3. low': '64.3200',
    '4. close': '69.3200',
    '5. volume': '61470'
  },
  '2018-08-31': {
    '1. open': '69.0000',
    '2. high': '71.5200',
    '3. low': '66.7800',
    '4. close': '70.2400',
    '5. volume': '47027'
  },
  '2018-07-31': {
    '1. open': '70.1600',
    '2. high': '72.0000',
    '3. low': '67.1400',
    '4. close': '68.8800',
    '5. volume': '56068'
  },
  '2018-06-29': {
    '1. open': '75.4600',
    '2. high': '76.4000',
    '3. low': '69.5600',
    '4. close': '71.4500',
    '5. volume': '21681'
  },
  '2018-05-31': {
    '1. open': '73.4600',
    '2. high': '78.4000',
    '3. low': '73.2800',
    '4. close': '74.1400',
    '5. volume': '33666'
  },
  '2018-04-30': {
    '1. open': '70.7000',
    '2. high': '75.9400',
    '3. low': '68.2600',
    '4. close': '75.4800',
    '5. volume': '17576'
  },
  '2018-03-29': {
    '1. open': '70.6600',
    '2. high': '72.4000',
    '3. low': '68.6000',
    '4. close': '70.3600',
    '5. volume': '28053'
  },
  '2018-02-28': {
    '1. open': '75.8000',
    '2. high': '75.8000',
    '3. low': '68.4600',
    '4. close': '71.8200',
    '5. volume': '44058'
  },
  '2018-01-31': {
    '1. open': '73.2500',
    '2. high': '76.2600',
    '3. low': '70.0200',
    '4. close': '75.4000',
    '5. volume': '42457'
  },
  '2017-12-29': {
    '1. open': '73.2500',
    '2. high': '73.2500',
    '3. low': '73.2500',
    '4. close': '73.2500',
    '5. volume': '0'
  },
  '2017-11-30': {
    '1. open': '74.7100',
    '2. high': '74.9500',
    '3. low': '70.4000',
    '4. close': '73.2500',
    '5. volume': '19581'
  },
  '2017-10-31': {
    '1. open': '73.8100',
    '2. high': '74.9400',
    '3. low': '72.4000',
    '4. close': '74.7100',
    '5. volume': '22641'
  },
  '2017-09-29': {
    '1. open': '66.9700',
    '2. high': '73.2600',
    '3. low': '66.9700',
    '4. close': '72.2000',
    '5. volume': '13312'
  },
  '2017-08-31': {
    '1. open': '66.8200',
    '2. high': '70.3200',
    '3. low': '65.5200',
    '4. close': '66.9700',
    '5. volume': '18885'
  },
  '2017-07-31': {
    '1. open': '67.9800',
    '2. high': '69.2600',
    '3. low': '65.2100',
    '4. close': '66.7800',
    '5. volume': '6809'
  },
  '2017-06-30': {
    '1. open': '68.9100',
    '2. high': '70.7000',
    '3. low': '66.0000',
    '4. close': '67.4000',
    '5. volume': '14759'
  },
  '2017-05-31': {
    '1. open': '72.6000',
    '2. high': '74.4600',
    '3. low': '67.6100',
    '4. close': '68.9100',
    '5. volume': '16175'
  },
  '2017-04-28': {
    '1. open': '69.0900',
    '2. high': '74.4700',
    '3. low': '67.9400',
    '4. close': '73.2300',
    '5. volume': '25919'
  },
  '2017-03-31': {
    '1. open': '65.0300',
    '2. high': '68.4200',
    '3. low': '64.5900',
    '4. close': '68.4200',
    '5. volume': '15827'
  },
  '2017-02-28': {
    '1. open': '68.6700',
    '2. high': '69.5200',
    '3. low': '63.8500',
    '4. close': '64.2700',
    '5. volume': '34539'
  },
  '2017-01-31': {
    '1. open': '65.8700',
    '2. high': '68.8600',
    '3. low': '65.4500',
    '4. close': '67.1000',
    '5. volume': '18178'
  },
  '2016-12-30': {
    '1. open': '62.6800',
    '2. high': '66.5900',
    '3. low': '61.6000',
    '4. close': '65.7100',
    '5. volume': '10049'
  },
  '2016-11-30': {
    '1. open': '60.6000',
    '2. high': '64.3800',
    '3. low': '58.7400',
    '4. close': '62.7000',
    '5. volume': '10027'
  },
  '2016-10-31': {
    '1. open': '62.1200',
    '2. high': '63.2700',
    '3. low': '59.6000',
    '4. close': '61.2400',
    '5. volume': '27644'
  },
  '2016-09-30': {
    '1. open': '61.3700',
    '2. high': '63.7000',
    '3. low': '57.9200',
    '4. close': '60.7000',
    '5. volume': '8978'
  },
  '2016-08-31': {
    '1. open': '59.4900',
    '2. high': '62.1000',
    '3. low': '57.2990',
    '4. close': '61.3700',
    '5. volume': '7300'
  },
  '2016-07-29': {
    '1. open': '53.1000',
    '2. high': '59.4900',
    '3. low': '50.0400',
    '4. close': '59.4900',
    '5. volume': '5840'
  },
  '2016-06-30': {
    '1. open': '57.5000',
    '2. high': '58.0000',
    '3. low': '49.9000',
    '4. close': '51.8000',
    '5. volume': '18893'
  },
  '2016-05-31': {
    '1. open': '57.7000',
    '2. high': '58.3400',
    '3. low': '53.5900',
    '4. close': '58.1000',
    '5. volume': '8580'
  },
  '2016-04-29': {
    '1. open': '54.9100',
    '2. high': '59.6000',
    '3. low': '52.0000',
    '4. close': '57.5000',
    '5. volume': '25005'
  },
  '2016-03-31': {
    '1. open': '54.6000',
    '2. high': '56.8000',
    '3. low': '53.6500',
    '4. close': '55.7000',
    '5. volume': '5241'
  },
  '2016-02-29': {
    '1. open': '49.0000',
    '2. high': '54.5700',
    '3. low': '45.5000',
    '4. close': '54.5700',
    '5. volume': '15652'
  },
  '2016-01-29': {
    '1. open': '51.6000',
    '2. high': '51.6000',
    '3. low': '46.0000',
    '4. close': '48.8000',
    '5. volume': '15335'
  },
  '2015-12-30': {
    '1. open': '58.5900',
    '2. high': '58.6300',
    '3. low': '51.7000',
    '4. close': '54.1000',
    '5. volume': '62631'
  },
  '2015-11-30': {
    '1. open': '55.2000',
    '2. high': '59.4000',
    '3. low': '54.9000',
    '4. close': '59.4000',
    '5. volume': '28875'
  },
  '2015-10-30': {
    '1. open': '50.8000',
    '2. high': '55.3900',
    '3. low': '49.3000',
    '4. close': '54.3000',
    '5. volume': '13812'
  },
  '2015-09-30': {
    '1. open': '56.2000',
    '2. high': '56.9000',
    '3. low': '49.2000',
    '4. close': '49.8500',
    '5. volume': '12247'
  },
  '2015-08-31': {
    '1. open': '63.7100',
    '2. high': '65.2100',
    '3. low': '54.1000',
    '4. close': '56.2000',
    '5. volume': '37531'
  },
  '2015-07-31': {
    '1. open': '62.9900',
    '2. high': '64.9200',
    '3. low': '58.9300',
    '4. close': '61.7300',
    '5. volume': '26292'
  },
  '2015-06-30': {
    '1. open': '68.5000',
    '2. high': '69.2000',
    '3. low': '62.6800',
    '4. close': '62.7600',
    '5. volume': '2105'
  },
  '2015-05-29': {
    '1. open': '67.5000',
    '2. high': '70.5000',
    '3. low': '66.6600',
    '4. close': '68.9000',
    '5. volume': '14476'
  },
  '2015-04-30': {
    '1. open': '73.5000',
    '2. high': '75.0000',
    '3. low': '66.5200',
    '4. close': '66.5200',
    '5. volume': '13706'
  },
  '2015-03-31': {
    '1. open': '71.2000',
    '2. high': '74.5000',
    '3. low': '70.2000',
    '4. close': '72.0000',
    '5. volume': '10091'
  },
  '2015-02-27': {
    '1. open': '67.2000',
    '2. high': '71.5000',
    '3. low': '66.5700',
    '4. close': '71.5000',
    '5. volume': '11148'
  },
  '2015-01-30': {
    '1. open': '60.5100',
    '2. high': '68.6000',
    '3. low': '56.6500',
    '4. close': '66.6000',
    '5. volume': '20774'
  },
  '2014-12-30': {
    '1. open': '65.8000',
    '2. high': '65.8000',
    '3. low': '56.7000',
    '4. close': '60.0600',
    '5. volume': '9970'
  },
  '2014-11-28': {
    '1. open': '62.9000',
    '2. high': '66.2900',
    '3. low': '61.1600',
    '4. close': '65.8000',
    '5. volume': '3909'
  },
  '2014-10-31': {
    '1. open': '61.0000',
    '2. high': '62.7900',
    '3. low': '54.1000',
    '4. close': '62.7000',
    '5. volume': '20067'
  },
  '2014-09-30': {
    '1. open': '63.6000',
    '2. high': '65.8000',
    '3. low': '59.8700',
    '4. close': '61.0000',
    '5. volume': '22442'
  },
  '2014-08-29': {
    '1. open': '63.1100',
    '2. high': '64.8000',
    '3. low': '60.4000',
    '4. close': '64.2000',
    '5. volume': '11539'
  },
  '2014-07-31': {
    '1. open': '68.4000',
    '2. high': '68.9000',
    '3. low': '64.0000',
    '4. close': '64.0000',
    '5. volume': '4308'
  },
  '2014-06-30': {
    '1. open': '69.5800',
    '2. high': '71.4900',
    '3. low': '68.5200',
    '4. close': '69.1800',
    '5. volume': '2733'
  },
  '2014-05-30': {
    '1. open': '67.4800',
    '2. high': '69.3200',
    '3. low': '65.9800',
    '4. close': '68.4900',
    '5. volume': '2308'
  },
  '2014-04-30': {
    '1. open': '64.4800',
    '2. high': '69.0200',
    '3. low': '63.0000',
    '4. close': '67.3700',
    '5. volume': '4253'
  },
  '2014-03-31': {
    '1. open': '63.4700',
    '2. high': '65.7100',
    '3. low': '60.6400',
    '4. close': '64.4800',
    '5. volume': '7612'
  },
  '2014-02-28': {
    '1. open': '59.6300',
    '2. high': '66.0100',
    '3. low': '58.4700',
    '4. close': '64.0600',
    '5. volume': '25630'
  },
  '2014-01-31': {
    '1. open': '62.3100',
    '2. high': '65.5100',
    '3. low': '59.4000',
    '4. close': '59.4000',
    '5. volume': '11991'
  },
  '2013-12-30': {
    '1. open': '62.5300',
    '2. high': '63.6000',
    '3. low': '58.1800',
    '4. close': '62.8700',
    '5. volume': '8965'
  },
  '2013-11-29': {
    '1. open': '62.2700',
    '2. high': '62.9100',
    '3. low': '59.3600',
    '4. close': '62.2100',
    '5. volume': '14454'
  },
  '2013-10-31': {
    '1. open': '63.7000',
    '2. high': '63.7000',
    '3. low': '60.0100',
    '4. close': '61.9200',
    '5. volume': '4083'
  },
  '2013-09-30': {
    '1. open': '58.9800',
    '2. high': '66.2100',
    '3. low': '58.9800',
    '4. close': '62.4100',
    '5. volume': '19080'
  },
  '2013-08-30': {
    '1. open': '60.9100',
    '2. high': '61.9600',
    '3. low': '57.7400',
    '4. close': '57.7400',
    '5. volume': '9425'
  },
  '2013-07-31': {
    '1. open': '56.0200',
    '2. high': '59.9600',
    '3. low': '54.8600',
    '4. close': '59.4500',
    '5. volume': '8746'
  },
  '2013-06-28': {
    '1. open': '62.4000',
    '2. high': '62.4000',
    '3. low': '53.6000',
    '4. close': '56.2900',
    '5. volume': '18057'
  },
  '2013-05-31': {
    '1. open': '57.5400',
    '2. high': '62.4900',
    '3. low': '56.8100',
    '4. close': '61.4000',
    '5. volume': '4008'
  },
  '2013-04-30': {
    '1. open': '58.1000',
    '2. high': '58.5500',
    '3. low': '53.0700',
    '4. close': '57.5400',
    '5. volume': '24438'
  },
  '2013-03-28': {
    '1. open': '58.6000',
    '2. high': '60.5000',
    '3. low': '55.7600',
    '4. close': '56.7800',
    '5. volume': '9454'
  },
  '2013-02-28': {
    '1. open': '56.3500',
    '2. high': '59.8800',
    '3. low': '53.4100',
    '4. close': '58.7000',
    '5. volume': '7797'
  },
  '2013-01-31': {
    '1. open': '55.3900',
    '2. high': '56.9000',
    '3. low': '54.5900',
    '4. close': '56.9000',
    '5. volume': '7889'
  },
  '2012-12-28': {
    '1. open': '54.2800',
    '2. high': '56.0100',
    '3. low': '53.2900',
    '4. close': '55.3900',
    '5. volume': '3979'
  },
  '2012-11-30': {
    '1. open': '49.7200',
    '2. high': '54.6000',
    '3. low': '48.6550',
    '4. close': '54.6000',
    '5. volume': '21694'
  },
  '2012-10-31': {
    '1. open': '47.8800',
    '2. high': '50.6000',
    '3. low': '47.3000',
    '4. close': '48.4850',
    '5. volume': '20172'
  },
  '2012-09-28': {
    '1. open': '50.3500',
    '2. high': '53.2000',
    '3. low': '47.3000',
    '4. close': '47.3000',
    '5. volume': '14769'
  },
  '2012-08-31': {
    '1. open': '47.3500',
    '2. high': '51.8700',
    '3. low': '46.8500',
    '4. close': '49.5300',
    '5. volume': '25182'
  },
  '2012-07-31': {
    '1. open': '44.1000',
    '2. high': '47.0500',
    '3. low': '41.6300',
    '4. close': '46.7300',
    '5. volume': '156026'
  },
  '2012-06-29': {
    '1. open': '42.7850',
    '2. high': '44.6250',
    '3. low': '39.7200',
    '4. close': '42.9050',
    '5. volume': '95300'
  },
  '2012-05-31': {
    '1. open': '47.0700',
    '2. high': '47.7600',
    '3. low': '41.4750',
    '4. close': '43.2600',
    '5. volume': '70996'
  },
  '2012-04-30': {
    '1. open': '49.3700',
    '2. high': '49.7950',
    '3. low': '45.6000',
    '4. close': '46.3000',
    '5. volume': '19084'
  },
  '2012-03-30': {
    '1. open': '51.2400',
    '2. high': '53.2000',
    '3. low': '48.7000',
    '4. close': '48.8950',
    '5. volume': '45611'
  },
  '2012-02-29': {
    '1. open': '47.8500',
    '2. high': '51.8500',
    '3. low': '46.9500',
    '4. close': '51.0000',
    '5. volume': '19022'
  },
  '2012-01-31': {
    '1. open': '40.9000',
    '2. high': '49.5000',
    '3. low': '40.9000',
    '4. close': '47.3400',
    '5. volume': '21386'
  },
  '2011-12-30': {
    '1. open': '42.0000',
    '2. high': '42.3100',
    '3. low': '37.1000',
    '4. close': '39.9650',
    '5. volume': '27641'
  },
  '2011-11-30': {
    '1. open': '40.9100',
    '2. high': '42.5350',
    '3. low': '35.9100',
    '4. close': '41.6750',
    '5. volume': '8093'
  },
  '2011-10-31': {
    '1. open': '39.4650',
    '2. high': '46.2000',
    '3. low': '37.5900',
    '4. close': '44.0000',
    '5. volume': '13201'
  },
  '2011-09-30': {
    '1. open': '46.9750',
    '2. high': '46.9750',
    '3. low': '36.0550',
    '4. close': '40.3700',
    '5. volume': '19244'
  },
  '2011-08-29': {
    '1. open': '51.3250',
    '2. high': '51.9000',
    '3. low': '40.8750',
    '4. close': '45.3750',
    '5. volume': '38222'
  },
  '2011-07-29': {
    '1. open': '57.5000',
    '2. high': '58.7500',
    '3. low': '47.6750',
    '4. close': '50.3500',
    '5. volume': '37296'
  },
  '2011-06-30': {
    '1. open': '57.7500',
    '2. high': '57.7500',
    '3. low': '53.8750',
    '4. close': '57.5250',
    '5. volume': '27668'
  },
  '2011-05-31': {
    '1. open': '60.0000',
    '2. high': '60.0000',
    '3. low': '54.3750',
    '4. close': '57.0000',
    '5. volume': '18502'
  },
  '2011-04-29': {
    '1. open': '60.4000',
    '2. high': '61.9000',
    '3. low': '54.1500',
    '4. close': '59.2500',
    '5. volume': '34428'
  },
  '2011-03-31': {
    '1. open': '60.3250',
    '2. high': '61.5750',
    '3. low': '53.6000',
    '4. close': '60.3250',
    '5. volume': '27910'
  },
  '2011-02-28': {
    '1. open': '57.3500',
    '2. high': '60.1000',
    '3. low': '54.6250',
    '4. close': '60.1000',
    '5. volume': '21990'
  },
  '2011-01-31': {
    '1. open': '56.7250',
    '2. high': '58.6000',
    '3. low': '55.3500',
    '4. close': '57.1250',
    '5. volume': '12292'
  },
  '2010-12-28': {
    '1. open': '56.4000',
    '2. high': '59.8000',
    '3. low': '56.4000',
    '4. close': '57.2000',
    '5. volume': '11498'
  },
  '2010-11-30': {
    '1. open': '51.8500',
    '2. high': '56.8750',
    '3. low': '51.4000',
    '4. close': '54.1000',
    '5. volume': '7096'
  },
  '2010-10-28': {
    '1. open': '47.8500',
    '2. high': '51.9250',
    '3. low': '46.5000',
    '4. close': '51.0000',
    '5. volume': '4050'
  },
  '2010-09-21': {
    '1. open': '42.1350',
    '2. high': '46.4750',
    '3. low': '42.1350',
    '4. close': '46.4500',
    '5. volume': '1158'
  },
  '2010-08-09': {
    '1. open': '45.3500',
    '2. high': '46.1600',
    '3. low': '45.3500',
    '4. close': '46.1600',
    '5. volume': '80'
  },
  '2010-07-27': {
    '1. open': '41.1650',
    '2. high': '44.4950',
    '3. low': '40.1750',
    '4. close': '44.4950',
    '5. volume': '7094'
  },
  '2010-06-29': {
    '1. open': '40.1150',
    '2. high': '46.6700',
    '3. low': '40.1150',
    '4. close': '42.0250',
    '5. volume': '21314'
  },
  '2010-05-26': {
    '1. open': '41.8046',
    '2. high': '42.0919',
    '3. low': '37.8500',
    '4. close': '38.8500',
    '5. volume': '17533'
  },
  '2010-04-30': {
    '1. open': '43.1436',
    '2. high': '43.5769',
    '3. low': '40.4851',
    '4. close': '41.6683',
    '5. volume': '46483'
  },
  '2010-03-31': {
    '1. open': '38.9514',
    '2. high': '42.3792',
    '3. low': '38.7080',
    '4. close': '42.0675',
    '5. volume': '39373'
  },
  '2010-02-25': {
    '1. open': '36.4196',
    '2. high': '39.7159',
    '3. low': '35.2413',
    '4. close': '37.8316',
    '5. volume': '17844'
  },
  '2010-01-28': {
    '1. open': '39.9447',
    '2. high': '39.9447',
    '3. low': '36.9552',
    '4. close': '37.2863',
    '5. volume': '10691'
  },
  '2009-12-30': {
    '1. open': '36.6338',
    '2. high': '39.7986',
    '3. low': '36.5170',
    '4. close': '39.6282',
    '5. volume': '83581'
  },
  '2009-11-20': {
    '1. open': '36.5316',
    '2. high': '37.2765',
    '3. low': '36.3222',
    '4. close': '36.3222',
    '5. volume': '3553'
  },
  '2008-12-17': {
    '1. open': '23.6143',
    '2. high': '26.4188',
    '3. low': '21.7641',
    '4. close': '26.4188',
    '5. volume': '6017'
  },
  '2008-11-24': {
    '1. open': '24.4761',
    '2. high': '24.4761',
    '3. low': '21.3016',
    '4. close': '21.3016',
    '5. volume': '6692'
  },
  '2008-10-31': {
    '1. open': '30.0413',
    '2. high': '30.0413',
    '3. low': '19.4514',
    '4. close': '22.1780',
    '5. volume': '7090'
  },
  '2008-09-30': {
    '1. open': '33.3035',
    '2. high': '33.5469',
    '3. low': '28.1375',
    '4. close': '28.1375',
    '5. volume': '4575'
  },
  '2008-08-21': {
    '1. open': '34.4915',
    '2. high': '34.4915',
    '3. low': '33.3035',
    '4. close': '33.3035',
    '5. volume': '626'
  },
  '2008-07-28': {
    '1. open': '33.0065',
    '2. high': '33.8245',
    '3. low': '29.1746',
    '4. close': '33.0357',
    '5. volume': '7800'
  },
  '2008-06-25': {
    '1. open': '38.2016',
    '2. high': '39.6282',
    '3. low': '34.2091',
    '4. close': '34.2091',
    '5. volume': '8595'
  },
  '2008-05-09': {
    '1. open': '37.4907',
    '2. high': '37.4907',
    '3. low': '37.4907',
    '4. close': '37.4907',
    '5. volume': '390'
  },
  '2008-04-29': {
    '1. open': '40.2563',
    '2. high': '41.1327',
    '3. low': '38.0069',
    '4. close': '38.0069',
    '5. volume': '8657'
  },
  '2008-03-31': {
    '1. open': '37.0233',
    '2. high': '40.7529',
    '3. low': '36.5754',
    '4. close': '39.6233',
    '5. volume': '5907'
  },
  '2008-02-28': {
    '1. open': '37.7050',
    '2. high': '39.1608',
    '3. low': '34.1361',
    '4. close': '39.1608',
    '5. volume': '6980'
  },
  '2008-01-30': {
    '1. open': '45.2810',
    '2. high': '45.2810',
    '3. low': '35.5237',
    '4. close': '37.8511',
    '5. volume': '19557'
  }
};

// tslint:disable:max-line-length
export const schneiderCompany: Company = {
  id: 1197,
  name: 'Schneider Electric SE',
  country: Country.Frankreich,
  city: 'Rueil-Malmaison',
  url: 'https://www.se.com/',
  description: 'Schneider Electric SE ist ein börsennotierter Elektrotechnik-Konzern, der in den Gebieten elektrische Energieverteilung und industrielle Automation tätig ist. Das Unternehmen hat seinen Sitz in Rueil-Malmaison bei Paris und ist in ca. 150 Ländern vertreten.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Schneider_Electric',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Schneider_Electric_2007.svg/500px-Schneider_Electric_2007.svg.png',
  products: [],
  industries: [1724],
  securityType: SecurityType.ActionsPort,
  currency: Currency.EUR,
  isin: 'FR0000121972',
  wkn: '860180',
  symbol: 'SND.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.CAC40],
  end_of_month_prices: prices,
  dividends,
  tags: ['Energieverteilung', 'industrielle Automation', 'Energie', 'Infrastruktur', 'Netzwerkindustrie', 'Datenindustrie', 'Gebäudetechnik']
};
// tslint:enable:max-line-length

