import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 1.81, yield: 3.13}, {year: 2017, rate: 3.12}, {year: 2016, rate: 3.79}, {
    year: 2015,
    rate: 3.95,
    yield: 3.78
  }, {year: 2014, rate: 3.52, yield: 3.35}, {year: 2013, rate: 2.83, yield: 2.75}, {year: 2012, rate: 2.24, yield: 2.57}, {
    year: 2011,
    rate: 1.55,
    yield: 2.57
  }, {year: 2010, rate: 1.06, yield: 1.83}, {year: 2009, rate: 0.54, yield: 1.10}, {year: 2008, rate: 0.39}, {
    year: 2007,
    rate: 1.13,
    yield: 2.30
  }, {year: 2006, rate: 1.03, yield: 2.40}, {year: 2005, rate: 0.93, yield: 1.83}, {year: 2004, rate: 0.83, yield: 1.58}, {
    year: 2003,
    rate: 0.75,
    yield: 1.55
  }
];
const prices = {
  '2019-11-29': {
    '1. open': '72.3200',
    '2. high': '73.2000',
    '3. low': '70.4000',
    '4. close': '72.1500',
    '5. volume': '139031'
  },
  '2019-10-31': {
    '1. open': '88.6800',
    '2. high': '88.7500',
    '3. low': '72.0000',
    '4. close': '72.1800',
    '5. volume': '165330'
  },
  '2019-09-30': {
    '1. open': '86.3100',
    '2. high': '89.5200',
    '3. low': '83.7300',
    '4. close': '85.2300',
    '5. volume': '86280'
  },
  '2019-08-30': {
    '1. open': '90.9900',
    '2. high': '92.5600',
    '3. low': '82.8300',
    '4. close': '86.2700',
    '5. volume': '106695'
  },
  '2019-07-31': {
    '1. open': '78.3700',
    '2. high': '91.8000',
    '3. low': '77.3600',
    '4. close': '91.0800',
    '5. volume': '183851'
  },
  '2019-06-28': {
    '1. open': '72.3600',
    '2. high': '80.0000',
    '3. low': '71.9100',
    '4. close': '77.8200',
    '5. volume': '50936'
  },
  '2019-05-31': {
    '1. open': '78.7300',
    '2. high': '79.3800',
    '3. low': '71.8000',
    '4. close': '72.6700',
    '5. volume': '74967'
  },
  '2019-04-30': {
    '1. open': '74.6400',
    '2. high': '80.1700',
    '3. low': '74.0700',
    '4. close': '79.2000',
    '5. volume': '104138'
  },
  '2019-03-29': {
    '1. open': '69.3900',
    '2. high': '74.9800',
    '3. low': '69.1900',
    '4. close': '73.5000',
    '5. volume': '87968'
  },
  '2019-02-28': {
    '1. open': '66.8100',
    '2. high': '69.9700',
    '3. low': '64.8700',
    '4. close': '68.5000',
    '5. volume': '135350'
  },
  '2019-01-31': {
    '1. open': '56.8400',
    '2. high': '66.5400',
    '3. low': '56.4600',
    '4. close': '66.5400',
    '5. volume': '106345'
  },
  '2018-12-28': {
    '1. open': '68.8600',
    '2. high': '69.1700',
    '3. low': '56.8900',
    '4. close': '57.9300',
    '5. volume': '257546'
  },
  '2018-11-30': {
    '1. open': '65.3900',
    '2. high': '69.6000',
    '3. low': '64.8500',
    '4. close': '68.3300',
    '5. volume': '131702'
  },
  '2018-10-31': {
    '1. open': '74.7200',
    '2. high': '76.3300',
    '3. low': '64.1300',
    '4. close': '65.1600',
    '5. volume': '278774'
  },
  '2018-09-28': {
    '1. open': '80.4200',
    '2. high': '80.7500',
    '3. low': '75.1000',
    '4. close': '75.2700',
    '5. volume': '130383'
  },
  '2018-08-31': {
    '1. open': '86.7100',
    '2. high': '88.4200',
    '3. low': '79.4600',
    '4. close': '80.5800',
    '5. volume': '192985'
  },
  '2018-07-31': {
    '1. open': '85.9900',
    '2. high': '91.0600',
    '3. low': '85.2100',
    '4. close': '86.6200',
    '5. volume': '123573'
  },
  '2018-06-29': {
    '1. open': '80.3800',
    '2. high': '87.0200',
    '3. low': '79.3800',
    '4. close': '86.4650',
    '5. volume': '185023'
  },
  '2018-05-31': {
    '1. open': '81.8300',
    '2. high': '85.6400',
    '3. low': '78.6200',
    '4. close': '80.2700',
    '5. volume': '215375'
  },
  '2018-04-30': {
    '1. open': '87.7700',
    '2. high': '90.3900',
    '3. low': '81.8900',
    '4. close': '82.5400',
    '5. volume': '94394'
  },
  '2018-03-29': {
    '1. open': '91.3900',
    '2. high': '95.0300',
    '3. low': '85.6000',
    '4. close': '89.2300',
    '5. volume': '92789'
  },
  '2018-02-28': {
    '1. open': '92.0300',
    '2. high': '92.0300',
    '3. low': '81.8300',
    '4. close': '87.5400',
    '5. volume': '116130'
  },
  '2018-01-31': {
    '1. open': '93.0200',
    '2. high': '96.7200',
    '3. low': '90.8800',
    '4. close': '91.3600',
    '5. volume': '86314'
  },
  '2017-12-29': {
    '1. open': '96.6400',
    '2. high': '97.6600',
    '3. low': '92.9200',
    '4. close': '93.2000',
    '5. volume': '76386'
  },
  '2017-11-30': {
    '1. open': '105.5000',
    '2. high': '105.9000',
    '3. low': '96.0000',
    '4. close': '97.1500',
    '5. volume': '70221'
  },
  '2017-10-31': {
    '1. open': '100.8500',
    '2. high': '107.3000',
    '3. low': '99.8200',
    '4. close': '103.6500',
    '5. volume': '63217'
  },
  '2017-09-29': {
    '1. open': '100.4000',
    '2. high': '103.5000',
    '3. low': '97.1800',
    '4. close': '100.7500',
    '5. volume': '46402'
  },
  '2017-08-31': {
    '1. open': '102.4000',
    '2. high': '102.4000',
    '3. low': '95.5000',
    '4. close': '99.7300',
    '5. volume': '58583'
  },
  '2017-07-31': {
    '1. open': '97.1900',
    '2. high': '106.1500',
    '3. low': '95.3500',
    '4. close': '102.2500',
    '5. volume': '82220'
  },
  '2017-06-30': {
    '1. open': '104.4500',
    '2. high': '105.9500',
    '3. low': '96.7000',
    '4. close': '96.7500',
    '5. volume': '63678'
  },
  '2017-05-31': {
    '1. open': '102.9000',
    '2. high': '110.0000',
    '3. low': '102.4500',
    '4. close': '104.6000',
    '5. volume': '52652'
  },
  '2017-04-28': {
    '1. open': '103.1000',
    '2. high': '104.6000',
    '3. low': '101.0000',
    '4. close': '103.9500',
    '5. volume': '44307'
  },
  '2017-03-31': {
    '1. open': '103.8500',
    '2. high': '105.2000',
    '3. low': '100.0000',
    '4. close': '102.7000',
    '5. volume': '108418'
  },
  '2017-02-28': {
    '1. open': '96.4800',
    '2. high': '103.8000',
    '3. low': '96.3600',
    '4. close': '102.9000',
    '5. volume': '72524'
  },
  '2017-01-31': {
    '1. open': '99.9500',
    '2. high': '101.8000',
    '3. low': '96.4000',
    '4. close': '96.7500',
    '5. volume': '69158'
  },
  '2016-12-30': {
    '1. open': '97.7200',
    '2. high': '100.7000',
    '3. low': '92.1800',
    '4. close': '99.9800',
    '5. volume': '92349'
  },
  '2016-11-30': {
    '1. open': '114.8500',
    '2. high': '114.8500',
    '3. low': '94.1100',
    '4. close': '98.0600',
    '5. volume': '49211'
  },
  '2016-10-31': {
    '1. open': '115.9500',
    '2. high': '116.5500',
    '3. low': '112.9500',
    '4. close': '114.8500',
    '5. volume': '15492'
  },
  '2016-09-30': {
    '1. open': '111.6500',
    '2. high': '119.4000',
    '3. low': '108.4500',
    '4. close': '116.7000',
    '5. volume': '55626'
  },
  '2016-08-31': {
    '1. open': '116.0500',
    '2. high': '116.1000',
    '3. low': '110.2000',
    '4. close': '111.2500',
    '5. volume': '31083'
  },
  '2016-07-29': {
    '1. open': '117.9500',
    '2. high': '119.3500',
    '3. low': '109.3500',
    '4. close': '114.1500',
    '5. volume': '96023'
  },
  '2016-06-30': {
    '1. open': '114.1000',
    '2. high': '118.0000',
    '3. low': '105.3000',
    '4. close': '117.3500',
    '5. volume': '104633'
  },
  '2016-05-31': {
    '1. open': '109.7500',
    '2. high': '114.5500',
    '3. low': '104.7500',
    '4. close': '113.6000',
    '5. volume': '54614'
  },
  '2016-04-29': {
    '1. open': '108.5000',
    '2. high': '116.3500',
    '3. low': '105.4500',
    '4. close': '108.0500',
    '5. volume': '28718'
  },
  '2016-03-31': {
    '1. open': '102.4500',
    '2. high': '112.1500',
    '3. low': '101.9000',
    '4. close': '109.8000',
    '5. volume': '46269'
  },
  '2016-02-29': {
    '1. open': '115.0000',
    '2. high': '116.4500',
    '3. low': '100.8000',
    '4. close': '102.9500',
    '5. volume': '39388'
  },
  '2016-01-29': {
    '1. open': '113.9500',
    '2. high': '115.6000',
    '3. low': '104.8500',
    '4. close': '115.6000',
    '5. volume': '50761'
  },
  '2015-12-30': {
    '1. open': '122.1500',
    '2. high': '123.0500',
    '3. low': '110.2500',
    '4. close': '116.0500',
    '5. volume': '65732'
  },
  '2015-11-30': {
    '1. open': '107.7000',
    '2. high': '124.2500',
    '3. low': '107.4500',
    '4. close': '122.9500',
    '5. volume': '78531'
  },
  '2015-10-30': {
    '1. open': '95.9200',
    '2. high': '109.9500',
    '3. low': '93.7100',
    '4. close': '108.6500',
    '5. volume': '95677'
  },
  '2015-09-30': {
    '1. open': '95.4000',
    '2. high': '104.9000',
    '3. low': '92.7700',
    '4. close': '95.1500',
    '5. volume': '74344'
  },
  '2015-08-31': {
    '1. open': '109.2000',
    '2. high': '112.3000',
    '3. low': '87.7000',
    '4. close': '97.3300',
    '5. volume': '81437'
  },
  '2015-07-31': {
    '1. open': '108.0000',
    '2. high': '119.6500',
    '3. low': '106.0000',
    '4. close': '108.1500',
    '5. volume': '56082'
  },
  '2015-06-30': {
    '1. open': '110.2000',
    '2. high': '114.0500',
    '3. low': '105.2500',
    '4. close': '108.0000',
    '5. volume': '58500'
  },
  '2015-05-29': {
    '1. open': '108.1000',
    '2. high': '112.7000',
    '3. low': '104.2000',
    '4. close': '110.1500',
    '5. volume': '49456'
  },
  '2015-04-30': {
    '1. open': '113.4500',
    '2. high': '118.7000',
    '3. low': '108.3500',
    '4. close': '109.1500',
    '5. volume': '45527'
  },
  '2015-03-31': {
    '1. open': '113.9500',
    '2. high': '117.4000',
    '3. low': '109.5500',
    '4. close': '114.0000',
    '5. volume': '66866'
  },
  '2015-02-27': {
    '1. open': '108.3500',
    '2. high': '114.2500',
    '3. low': '104.7000',
    '4. close': '113.5000',
    '5. volume': '46042'
  },
  '2015-01-30': {
    '1. open': '94.4900',
    '2. high': '109.0500',
    '3. low': '89.9000',
    '4. close': '107.6500',
    '5. volume': '92439'
  },
  '2014-12-30': {
    '1. open': '94.2800',
    '2. high': '94.9300',
    '3. low': '85.8000',
    '4. close': '93.8600',
    '5. volume': '44484'
  },
  '2014-11-28': {
    '1. open': '87.8900',
    '2. high': '94.4700',
    '3. low': '86.8800',
    '4. close': '94.1000',
    '5. volume': '20066'
  },
  '2014-10-31': {
    '1. open': '87.6700',
    '2. high': '88.0300',
    '3. low': '78.8600',
    '4. close': '87.8600',
    '5. volume': '70786'
  },
  '2014-09-30': {
    '1. open': '84.7400',
    '2. high': '89.7100',
    '3. low': '84.6200',
    '4. close': '88.3000',
    '5. volume': '16358'
  },
  '2014-08-29': {
    '1. open': '80.5200',
    '2. high': '85.1600',
    '3. low': '79.0000',
    '4. close': '84.1500',
    '5. volume': '32413'
  },
  '2014-07-31': {
    '1. open': '84.1900',
    '2. high': '85.0400',
    '3. low': '81.0100',
    '4. close': '81.1000',
    '5. volume': '24164'
  },
  '2014-06-30': {
    '1. open': '80.6000',
    '2. high': '85.0800',
    '3. low': '80.0800',
    '4. close': '84.1100',
    '5. volume': '15868'
  },
  '2014-05-30': {
    '1. open': '78.0000',
    '2. high': '81.4000',
    '3. low': '76.1500',
    '4. close': '80.3500',
    '5. volume': '28481'
  },
  '2014-04-30': {
    '1. open': '76.2200',
    '2. high': '80.6600',
    '3. low': '76.0000',
    '4. close': '78.3200',
    '5. volume': '20915'
  },
  '2014-03-31': {
    '1. open': '75.1600',
    '2. high': '77.4000',
    '3. low': '71.5900',
    '4. close': '76.4500',
    '5. volume': '23129'
  },
  '2014-02-28': {
    '1. open': '71.0600',
    '2. high': '76.8000',
    '3. low': '69.4300',
    '4. close': '76.0000',
    '5. volume': '20566'
  },
  '2014-01-31': {
    '1. open': '77.5700',
    '2. high': '78.1000',
    '3. low': '69.5000',
    '4. close': '70.6500',
    '5. volume': '29107'
  },
  '2013-12-30': {
    '1. open': '75.2000',
    '2. high': '77.5100',
    '3. low': '72.6600',
    '4. close': '76.6900',
    '5. volume': '28093'
  },
  '2013-11-29': {
    '1. open': '75.6000',
    '2. high': '78.1000',
    '3. low': '75.0600',
    '4. close': '75.1300',
    '5. volume': '20412'
  },
  '2013-10-31': {
    '1. open': '72.4200',
    '2. high': '76.5000',
    '3. low': '70.7200',
    '4. close': '76.4500',
    '5. volume': '20259'
  },
  '2013-09-30': {
    '1. open': '71.3500',
    '2. high': '77.6500',
    '3. low': '70.6000',
    '4. close': '73.4400',
    '5. volume': '27161'
  },
  '2013-08-30': {
    '1. open': '72.8400',
    '2. high': '75.8500',
    '3. low': '69.9100',
    '4. close': '70.6200',
    '5. volume': '35761'
  },
  '2013-07-31': {
    '1. open': '69.9000',
    '2. high': '73.2300',
    '3. low': '66.0400',
    '4. close': '73.2300',
    '5. volume': '32072'
  },
  '2013-06-28': {
    '1. open': '70.1500',
    '2. high': '71.3700',
    '3. low': '64.2500',
    '4. close': '68.7900',
    '5. volume': '76238'
  },
  '2013-05-31': {
    '1. open': '72.7000',
    '2. high': '76.6900',
    '3. low': '71.0500',
    '4. close': '71.4000',
    '5. volume': '45393'
  },
  '2013-04-30': {
    '1. open': '76.8900',
    '2. high': '79.2200',
    '3. low': '70.4200',
    '4. close': '71.9100',
    '5. volume': '24654'
  },
  '2013-03-28': {
    '1. open': '71.7300',
    '2. high': '77.3100',
    '3. low': '71.6600',
    '4. close': '77.3100',
    '5. volume': '47364'
  },
  '2013-02-28': {
    '1. open': '64.6800',
    '2. high': '71.9000',
    '3. low': '63.8000',
    '4. close': '71.6800',
    '5. volume': '29711'
  },
  '2013-01-31': {
    '1. open': '66.2800',
    '2. high': '69.5500',
    '3. low': '63.6600',
    '4. close': '64.9900',
    '5. volume': '27933'
  },
  '2012-12-28': {
    '1. open': '68.0300',
    '2. high': '69.1800',
    '3. low': '65.9200',
    '4. close': '66.7200',
    '5. volume': '20527'
  },
  '2012-11-30': {
    '1. open': '64.2200',
    '2. high': '67.6600',
    '3. low': '64.1100',
    '4. close': '67.6600',
    '5. volume': '27596'
  },
  '2012-10-31': {
    '1. open': '66.6000',
    '2. high': '69.7100',
    '3. low': '64.7700',
    '4. close': '64.9500',
    '5. volume': '26751'
  },
  '2012-09-28': {
    '1. open': '66.9000',
    '2. high': '70.9200',
    '3. low': '64.8700',
    '4. close': '66.5000',
    '5. volume': '33481'
  },
  '2012-08-31': {
    '1. open': '64.1400',
    '2. high': '68.0400',
    '3. low': '64.1400',
    '4. close': '66.8500',
    '5. volume': '23858'
  },
  '2012-07-31': {
    '1. open': '62.1000',
    '2. high': '66.7200',
    '3. low': '61.9700',
    '4. close': '64.2000',
    '5. volume': '36771'
  },
  '2012-06-29': {
    '1. open': '54.2800',
    '2. high': '61.3100',
    '3. low': '52.2500',
    '4. close': '61.2800',
    '5. volume': '54541'
  },
  '2012-05-31': {
    '1. open': '55.6000',
    '2. high': '56.8600',
    '3. low': '52.7400',
    '4. close': '54.2900',
    '5. volume': '16466'
  },
  '2012-04-30': {
    '1. open': '54.7600',
    '2. high': '56.5800',
    '3. low': '53.2700',
    '4. close': '54.6300',
    '5. volume': '20028'
  },
  '2012-03-30': {
    '1. open': '50.1700',
    '2. high': '55.3200',
    '3. low': '50.1700',
    '4. close': '53.8800',
    '5. volume': '26799'
  },
  '2012-02-29': {
    '1. open': '46.5450',
    '2. high': '50.1200',
    '3. low': '46.5450',
    '4. close': '49.9900',
    '5. volume': '57665'
  },
  '2012-01-31': {
    '1. open': '47.4100',
    '2. high': '48.4450',
    '3. low': '46.3150',
    '4. close': '46.3150',
    '5. volume': '41384'
  },
  '2011-12-30': {
    '1. open': '44.4150',
    '2. high': '47.2000',
    '3. low': '43.9050',
    '4. close': '47.2000',
    '5. volume': '75004'
  },
  '2011-11-30': {
    '1. open': '40.0000',
    '2. high': '44.4200',
    '3. low': '38.8000',
    '4. close': '44.2000',
    '5. volume': '71424'
  },
  '2011-10-31': {
    '1. open': '39.5000',
    '2. high': '40.6500',
    '3. low': '38.4550',
    '4. close': '40.5100',
    '5. volume': '28160'
  },
  '2011-09-30': {
    '1. open': '38.5000',
    '2. high': '40.4900',
    '3. low': '36.0000',
    '4. close': '39.6300',
    '5. volume': '11818'
  },
  '2011-08-31': {
    '1. open': '41.0150',
    '2. high': '41.0150',
    '3. low': '34.2100',
    '4. close': '38.3550',
    '5. volume': '39181'
  },
  '2011-07-28': {
    '1. open': '40.3100',
    '2. high': '41.5000',
    '3. low': '38.5500',
    '4. close': '41.0400',
    '5. volume': '26474'
  },
  '2011-06-30': {
    '1. open': '42.5500',
    '2. high': '42.5500',
    '3. low': '38.6750',
    '4. close': '40.0400',
    '5. volume': '26044'
  },
  '2011-05-31': {
    '1. open': '43.0100',
    '2. high': '43.2750',
    '3. low': '40.6500',
    '4. close': '41.6750',
    '5. volume': '55909'
  },
  '2011-04-29': {
    '1. open': '40.4750',
    '2. high': '43.7200',
    '3. low': '40.4750',
    '4. close': '42.8500',
    '5. volume': '59682'
  },
  '2011-03-31': {
    '1. open': '40.9500',
    '2. high': '41.7450',
    '3. low': '38.9300',
    '4. close': '40.1800',
    '5. volume': '36776'
  },
  '2011-02-28': {
    '1. open': '40.5050',
    '2. high': '41.5750',
    '3. low': '39.1800',
    '4. close': '40.4250',
    '5. volume': '75343'
  },
  '2011-01-31': {
    '1. open': '42.9800',
    '2. high': '44.2450',
    '3. low': '40.0900',
    '4. close': '40.5150',
    '5. volume': '24857'
  },
  '2010-12-30': {
    '1. open': '42.1600',
    '2. high': '43.9300',
    '3. low': '41.7800',
    '4. close': '43.1700',
    '5. volume': '17111'
  },
  '2010-11-30': {
    '1. open': '45.5200',
    '2. high': '45.7500',
    '3. low': '41.7850',
    '4. close': '41.8200',
    '5. volume': '24242'
  },
  '2010-10-29': {
    '1. open': '43.1650',
    '2. high': '46.2000',
    '3. low': '41.8900',
    '4. close': '44.9000',
    '5. volume': '14022'
  },
  '2010-09-30': {
    '1. open': '41.2400',
    '2. high': '44.2000',
    '3. low': '41.2050',
    '4. close': '43.5000',
    '5. volume': '40554'
  },
  '2010-08-31': {
    '1. open': '41.2900',
    '2. high': '42.0000',
    '3. low': '39.0900',
    '4. close': '40.9500',
    '5. volume': '14248'
  },
  '2010-07-30': {
    '1. open': '39.3000',
    '2. high': '42.7850',
    '3. low': '38.6100',
    '4. close': '40.0200',
    '5. volume': '23458'
  },
  '2010-06-30': {
    '1. open': '40.6500',
    '2. high': '42.7350',
    '3. low': '37.6500',
    '4. close': '39.3000',
    '5. volume': '18495'
  },
  '2010-05-31': {
    '1. open': '36.4950',
    '2. high': '40.2200',
    '3. low': '36.0000',
    '4. close': '39.4000',
    '5. volume': '18569'
  },
  '2010-04-30': {
    '1. open': '37.5000',
    '2. high': '38.7900',
    '3. low': '35.4150',
    '4. close': '36.5050',
    '5. volume': '8077'
  },
  '2010-03-31': {
    '1. open': '35.8850',
    '2. high': '38.8400',
    '3. low': '35.8850',
    '4. close': '36.0650',
    '5. volume': '9087'
  },
  '2010-02-26': {
    '1. open': '35.2000',
    '2. high': '37.5000',
    '3. low': '33.0600',
    '4. close': '35.6250',
    '5. volume': '6436'
  },
  '2010-01-29': {
    '1. open': '37.6500',
    '2. high': '38.2200',
    '3. low': '33.8550',
    '4. close': '36.5000',
    '5. volume': '5532'
  },
  '2009-12-28': {
    '1. open': '35.2000',
    '2. high': '37.0000',
    '3. low': '34.0500',
    '4. close': '37.0000',
    '5. volume': '4349'
  },
  '2009-11-30': {
    '1. open': '36.1000',
    '2. high': '36.1000',
    '3. low': '33.7500',
    '4. close': '33.7500',
    '5. volume': '1260'
  },
  '2009-08-17': {
    '1. open': '27.0500',
    '2. high': '27.0500',
    '3. low': '27.0500',
    '4. close': '27.0500',
    '5. volume': '10'
  },
  '2008-12-23': {
    '1. open': '12.5400',
    '2. high': '15.9900',
    '3. low': '12.0000',
    '4. close': '15.9900',
    '5. volume': '6308'
  },
  '2008-11-28': {
    '1. open': '29.8800',
    '2. high': '30.1900',
    '3. low': '12.5400',
    '4. close': '12.5400',
    '5. volume': '986'
  },
  '2008-10-29': {
    '1. open': '37.0000',
    '2. high': '37.6700',
    '3. low': '25.6400',
    '4. close': '30.1700',
    '5. volume': '596'
  },
  '2008-08-19': {
    '1. open': '48.6400',
    '2. high': '48.6400',
    '3. low': '48.6400',
    '4. close': '48.6400',
    '5. volume': '65'
  },
  '2008-07-28': {
    '1. open': '40.8000',
    '2. high': '44.5300',
    '3. low': '40.8000',
    '4. close': '44.5300',
    '5. volume': '933'
  },
  '2008-06-26': {
    '1. open': '47.7000',
    '2. high': '48.2400',
    '3. low': '45.2400',
    '4. close': '45.2400',
    '5. volume': '1673'
  },
  '2008-05-30': {
    '1. open': '50.9100',
    '2. high': '50.9100',
    '3. low': '48.4000',
    '4. close': '49.0600',
    '5. volume': '584'
  },
  '2008-04-29': {
    '1. open': '61.5200',
    '2. high': '61.5200',
    '3. low': '55.6600',
    '4. close': '55.6600',
    '5. volume': '1200'
  },
  '2008-03-17': {
    '1. open': '55.0000',
    '2. high': '57.4200',
    '3. low': '55.0000',
    '4. close': '57.4200',
    '5. volume': '150'
  },
  '2008-02-08': {
    '1. open': '53.7000',
    '2. high': '53.7000',
    '3. low': '53.7000',
    '4. close': '53.7000',
    '5. volume': '110'
  },
  '2008-01-28': {
    '1. open': '57.4200',
    '2. high': '57.7800',
    '3. low': '50.7300',
    '4. close': '52.9900',
    '5. volume': '526'
  }
};

// tslint:disable:max-line-length
export const abInbevCompany: Company = {
  id: 1170,
  name: 'Anheuser-Busch InBev NV',
  country: Country.Belgien,
  city: 'Brüssel',
  url: 'http://www.ab-inbev.com/',
  description: 'Anheuser-Busch InBev (AB InBev) ist – gemessen am Absatzvolumen – die größte Brauereigruppe der Welt. Sie hat ihren juristischen Sitz in Brüssel und operative Sitze in Löwen sowie New York City[4] und entstand 2008 durch die Übernahme von Anheuser-Busch durch die belgisch-brasilianische InBev-Gruppe. Das Unternehmen ist an der Brüsseler Euronext-Börse notiert und Teil des EURO STOXX 50 sowie des BEL20.[5] Es beschäftigt über 175.000 Mitarbeiter und ist mit über 500 Marken in über 150 Ländern vertreten. Die weltweite Bierproduktion betrug 2018 567 Millionen Hektoliter.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Anheuser-Busch_InBev',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Anheuser-Busch_InBev_text_logo.svg/500px-Anheuser-Busch_InBev_text_logo.svg.png',
  products: [
    {
      id: 117010,
      name: 'Aguila',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Aquila_Card.png'
    },
    {
      id: 117011,
      name: 'Becks',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Becks%20Blue_Card.png'
    },
    {
      id: 117012,
      name: 'Brahma',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Brahma_Card.png'
    },
    {
      id: 117013,
      name: 'Budweiser',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Budweiser_Card.png'
    },
    {
      id: 117014,
      name: 'Canvas',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Canvas_Card.png'
    },
    {
      id: 117015,
      name: 'Cass',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Cass_Card.png'
    },
    {
      id: 117016,
      name: 'Corona',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Corona_Card.png'
    },
    {
      id: 117017,
      name: 'Eagle',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Eagle_Card.png'
    },
    {
      id: 117018,
      name: 'Hero',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Hero_Card.png'
    },
    {
      id: 117019,
      name: 'Jupiler',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Jupiler_Card.png'
    },
    {
      id: 117020,
      name: 'Leffe',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Leffe_Card.png'
    },
    {
      id: 117021,
      name: 'Modelo',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Modelo%20Especial_Card.png'
    },
    {
      id: 117022,
      name: 'Patagonia',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Patagonia247_Card.png'
    },
    {
      id: 117023,
      name: 'Victoria',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/Victoria_Card.png'
    },
    {
      id: 117024,
      name: 'Wäls Brut',
      logo: 'https://www.ab-inbev.com/content/dam/abinbev/our-brands/landing-page/desktop/beer/WalsBrut_Card.png'
    }
  ],
  industries: [2414, 2412],
  securityType: SecurityType.ActionsAuPorteur,
  currency: Currency.EUR,
  isin: 'BE0974293251',
  wkn: 'A2ASUV',
  symbol: '1NBA.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50],
  end_of_month_prices: prices,
  dividends,
  tags: ['Brauereien', 'Bier']
};
// tslint:enable:max-line-length

