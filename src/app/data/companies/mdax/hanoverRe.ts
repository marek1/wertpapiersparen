import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {year: 2018, rate: 5.25, yield: 4.50}, {year: 2017, rate: 3.50}, {year: 2016, rate: 3.50}, {
    year: 2015,
    rate: 3.25,
    yield: 3.08
  }, {year: 2014, rate: 3.00, yield: 4.00}, {year: 2013, rate: 3.00, yield: 4.81}, {year: 2012, rate: 2.60, yield: 4.41}, {
    year: 2011,
    rate: 2.10,
    yield: 5.48
  }, {year: 2010, rate: 2.30, yield: 5.73}, {year: 2009, rate: 2.10, yield: 6.40}, {year: 2008, rate: 0.00, yield: 0.00}, {
    year: 2007,
    rate: 2.30,
    yield: 7.29
  }, {year: 2006, rate: 1.60, yield: 4.56}, {year: 2005, rate: 0.00, yield: 0.00}, {year: 2004, rate: 1.00, yield: 3.48}, {
    year: 2003,
    rate: 0.95,
    yield: 2.52
  }, {year: 2002, rate: 0.85, yield: 3.50}, {year: 2001, rate: 0.00, yield: 0.00}, {year: 2000, rate: 1.21, yield: 3.88}, {
    year: 1999,
    rate: 0.97,
    yield: 3.83
  }
];
const prices = {
  '2019-11-14': {
    '1. open': '158.8000',
    '2. high': '166.7000',
    '3. low': '158.0000',
    '4. close': '166.4000',
    '5. volume': '1533332'
  },
  '2019-10-31': {
    '1. open': '156.1000',
    '2. high': '160.8000',
    '3. low': '151.8000',
    '4. close': '158.8000',
    '5. volume': '2800678'
  },
  '2019-09-30': {
    '1. open': '145.0000',
    '2. high': '155.7000',
    '3. low': '145.0000',
    '4. close': '155.1000',
    '5. volume': '2553536'
  },
  '2019-08-30': {
    '1. open': '140.9000',
    '2. high': '149.8000',
    '3. low': '136.0000',
    '4. close': '144.8000',
    '5. volume': '3004322'
  },
  '2019-07-31': {
    '1. open': '143.0000',
    '2. high': '148.0000',
    '3. low': '140.0000',
    '4. close': '141.7000',
    '5. volume': '2736423'
  },
  '2019-06-28': {
    '1. open': '133.4000',
    '2. high': '143.3000',
    '3. low': '132.9000',
    '4. close': '142.2000',
    '5. volume': '3007626'
  },
  '2019-05-31': {
    '1. open': '134.4000',
    '2. high': '137.8000',
    '3. low': '126.5000',
    '4. close': '134.2000',
    '5. volume': '4183477'
  },
  '2019-04-30': {
    '1. open': '129.2000',
    '2. high': '136.0000',
    '3. low': '128.6000',
    '4. close': '134.4000',
    '5. volume': '3006627'
  },
  '2019-03-29': {
    '1. open': '131.9000',
    '2. high': '132.9000',
    '3. low': '124.9000',
    '4. close': '128.0000',
    '5. volume': '4276240'
  },
  '2019-02-28': {
    '1. open': '126.3000',
    '2. high': '131.8000',
    '3. low': '125.3000',
    '4. close': '131.0000',
    '5. volume': '3000869'
  },
  '2019-01-31': {
    '1. open': '116.7000',
    '2. high': '129.7000',
    '3. low': '114.5000',
    '4. close': '125.9000',
    '5. volume': '3702391'
  },
  '2018-12-28': {
    '1. open': '124.5000',
    '2. high': '125.3000',
    '3. low': '113.6000',
    '4. close': '117.7000',
    '5. volume': '2827640'
  },
  '2018-11-30': {
    '1. open': '119.1000',
    '2. high': '126.0000',
    '3. low': '118.7000',
    '4. close': '122.7000',
    '5. volume': '3831100'
  },
  '2018-10-31': {
    '1. open': '121.6000',
    '2. high': '125.0000',
    '3. low': '113.5000',
    '4. close': '119.1000',
    '5. volume': '4131667'
  },
  '2018-09-28': {
    '1. open': '118.3000',
    '2. high': '122.5000',
    '3. low': '117.2000',
    '4. close': '121.7000',
    '5. volume': '3276009'
  },
  '2018-08-31': {
    '1. open': '114.3000',
    '2. high': '118.5000',
    '3. low': '111.8000',
    '4. close': '118.3000',
    '5. volume': '3137391'
  },
  '2018-07-31': {
    '1. open': '106.0000',
    '2. high': '114.4000',
    '3. low': '105.2000',
    '4. close': '114.0000',
    '5. volume': '2798319'
  },
  '2018-06-29': {
    '1. open': '109.0000',
    '2. high': '112.5000',
    '3. low': '105.3000',
    '4. close': '106.8000',
    '5. volume': '3949014'
  },
  '2018-05-31': {
    '1. open': '116.5000',
    '2. high': '122.2000',
    '3. low': '108.0000',
    '4. close': '108.0000',
    '5. volume': '4261596'
  },
  '2018-04-30': {
    '1. open': '110.4000',
    '2. high': '118.9000',
    '3. low': '109.8000',
    '4. close': '116.6000',
    '5. volume': '3460220'
  },
  '2018-03-29': {
    '1. open': '111.9000',
    '2. high': '115.6000',
    '3. low': '106.6000',
    '4. close': '110.9000',
    '5. volume': '4455927'
  },
  '2018-02-28': {
    '1. open': '110.5000',
    '2. high': '113.8000',
    '3. low': '106.2000',
    '4. close': '111.9000',
    '5. volume': '3693735'
  },
  '2018-01-31': {
    '1. open': '105.5000',
    '2. high': '113.1000',
    '3. low': '104.3000',
    '4. close': '110.1000',
    '5. volume': '3080695'
  },
  '2017-12-29': {
    '1. open': '110.2500',
    '2. high': '110.5500',
    '3. low': '104.7500',
    '4. close': '104.9000',
    '5. volume': '2801550'
  },
  '2017-11-30': {
    '1. open': '108.7000',
    '2. high': '111.9000',
    '3. low': '105.9500',
    '4. close': '110.4000',
    '5. volume': '3880054'
  },
  '2017-10-31': {
    '1. open': '102.5000',
    '2. high': '110.5000',
    '3. low': '101.9500',
    '4. close': '107.6500',
    '5. volume': '3668478'
  },
  '2017-09-29': {
    '1. open': '102.2000',
    '2. high': '102.7500',
    '3. low': '94.6500',
    '4. close': '101.9500',
    '5. volume': '4089050'
  },
  '2017-08-31': {
    '1. open': '107.0000',
    '2. high': '110.2500',
    '3. low': '99.5400',
    '4. close': '101.8000',
    '5. volume': '3119970'
  },
  '2017-07-31': {
    '1. open': '105.1000',
    '2. high': '109.9000',
    '3. low': '105.0000',
    '4. close': '106.7000',
    '5. volume': '1981568'
  },
  '2017-06-30': {
    '1. open': '106.1500',
    '2. high': '109.0500',
    '3. low': '104.0500',
    '4. close': '104.9500',
    '5. volume': '2488269'
  },
  '2017-05-31': {
    '1. open': '110.1000',
    '2. high': '116.5000',
    '3. low': '103.4500',
    '4. close': '106.0000',
    '5. volume': '3599713'
  },
  '2017-04-28': {
    '1. open': '108.4000',
    '2. high': '111.4500',
    '3. low': '106.9500',
    '4. close': '110.1000',
    '5. volume': '2256601'
  },
  '2017-03-31': {
    '1. open': '107.4000',
    '2. high': '109.1000',
    '3. low': '104.0500',
    '4. close': '108.1500',
    '5. volume': '2950507'
  },
  '2017-02-28': {
    '1. open': '102.0000',
    '2. high': '108.3000',
    '3. low': '101.5500',
    '4. close': '106.6000',
    '5. volume': '2744747'
  },
  '2017-01-31': {
    '1. open': '102.0000',
    '2. high': '105.7000',
    '3. low': '100.1500',
    '4. close': '101.6500',
    '5. volume': '2566623'
  },
  '2016-12-30': {
    '1. open': '99.9900',
    '2. high': '104.6000',
    '3. low': '98.3100',
    '4. close': '102.8000',
    '5. volume': '2376565'
  },
  '2016-11-30': {
    '1. open': '102.0000',
    '2. high': '106.4000',
    '3. low': '96.1700',
    '4. close': '100.1500',
    '5. volume': '3135587'
  },
  '2016-10-31': {
    '1. open': '95.3500',
    '2. high': '102.3500',
    '3. low': '92.0800',
    '4. close': '101.5500',
    '5. volume': '2952854'
  },
  '2016-09-30': {
    '1. open': '91.1300',
    '2. high': '98.0600',
    '3. low': '91.0500',
    '4. close': '95.3400',
    '5. volume': '2865424'
  },
  '2016-08-31': {
    '1. open': '92.2500',
    '2. high': '95.1100',
    '3. low': '83.1900',
    '4. close': '91.6000',
    '5. volume': '3297484'
  },
  '2016-07-29': {
    '1. open': '94.7900',
    '2. high': '96.2900',
    '3. low': '88.6200',
    '4. close': '91.5200',
    '5. volume': '2517215'
  },
  '2016-06-30': {
    '1. open': '100.9500',
    '2. high': '101.3500',
    '3. low': '83.0000',
    '4. close': '93.8100',
    '5. volume': '3871472'
  },
  '2016-05-31': {
    '1. open': '100.0000',
    '2. high': '106.4000',
    '3. low': '94.6500',
    '4. close': '101.3500',
    '5. volume': '3541014'
  },
  '2016-04-29': {
    '1. open': '101.2000',
    '2. high': '106.4500',
    '3. low': '98.5500',
    '4. close': '99.5800',
    '5. volume': '2849474'
  },
  '2016-03-31': {
    '1. open': '94.7700',
    '2. high': '104.0000',
    '3. low': '92.2300',
    '4. close': '102.4000',
    '5. volume': '4086761'
  },
  '2016-02-29': {
    '1. open': '97.5000',
    '2. high': '97.8400',
    '3. low': '83.6400',
    '4. close': '94.8000',
    '5. volume': '4225457'
  },
  '2016-01-29': {
    '1. open': '103.5500',
    '2. high': '104.5000',
    '3. low': '92.7500',
    '4. close': '96.6000',
    '5. volume': '3788503'
  },
  '2015-12-30': {
    '1. open': '111.3500',
    '2. high': '112.6000',
    '3. low': '103.4500',
    '4. close': '105.6500',
    '5. volume': '3362875'
  },
  '2015-11-30': {
    '1. open': '104.2500',
    '2. high': '111.3500',
    '3. low': '101.4500',
    '4. close': '110.7500',
    '5. volume': '4207501'
  },
  '2015-10-30': {
    '1. open': '92.2600',
    '2. high': '105.9000',
    '3. low': '88.1700',
    '4. close': '105.2000',
    '5. volume': '3895020'
  },
  '2015-09-30': {
    '1. open': '89.3000',
    '2. high': '94.5300',
    '3. low': '87.8100',
    '4. close': '91.5400',
    '5. volume': '3796061'
  },
  '2015-08-31': {
    '1. open': '96.4700',
    '2. high': '101.2000',
    '3. low': '84.3100',
    '4. close': '90.6200',
    '5. volume': '4778909'
  },
  '2015-07-31': {
    '1. open': '87.5900',
    '2. high': '98.9900',
    '3. low': '86.9200',
    '4. close': '96.5800',
    '5. volume': '3755333'
  },
  '2015-06-30': {
    '1. open': '88.6300',
    '2. high': '90.7200',
    '3. low': '84.4900',
    '4. close': '86.7900',
    '5. volume': '4292975'
  },
  '2015-05-29': {
    '1. open': '91.7000',
    '2. high': '93.3200',
    '3. low': '84.5300',
    '4. close': '88.4500',
    '5. volume': '5000525'
  },
  '2015-04-30': {
    '1. open': '95.7400',
    '2. high': '102.1000',
    '3. low': '88.9000',
    '4. close': '91.0400',
    '5. volume': '4335901'
  },
  '2015-03-31': {
    '1. open': '86.0100',
    '2. high': '98.4300',
    '3. low': '84.6800',
    '4. close': '96.2000',
    '5. volume': '5630760'
  },
  '2015-02-27': {
    '1. open': '80.1900',
    '2. high': '86.3900',
    '3. low': '79.9000',
    '4. close': '86.1500',
    '5. volume': '3168843'
  },
  '2015-01-30': {
    '1. open': '75.2000',
    '2. high': '81.7400',
    '3. low': '73.0600',
    '4. close': '79.4400',
    '5. volume': '4753762'
  },
  '2014-12-30': {
    '1. open': '71.3400',
    '2. high': '76.1100',
    '3. low': '70.8900',
    '4. close': '74.9700',
    '5. volume': '3928734'
  },
  '2014-11-28': {
    '1. open': '66.3500',
    '2. high': '71.9400',
    '3. low': '66.2800',
    '4. close': '71.7600',
    '5. volume': '4044804'
  },
  '2014-10-31': {
    '1. open': '63.9300',
    '2. high': '66.6600',
    '3. low': '58.1600',
    '4. close': '66.4900',
    '5. volume': '4741767'
  },
  '2014-09-30': {
    '1. open': '63.1000',
    '2. high': '64.6700',
    '3. low': '62.5100',
    '4. close': '64.0200',
    '5. volume': '3594059'
  },
  '2014-08-29': {
    '1. open': '63.8400',
    '2. high': '63.9500',
    '3. low': '59.5300',
    '4. close': '63.2100',
    '5. volume': '3600950'
  },
  '2014-07-31': {
    '1. open': '65.9200',
    '2. high': '67.0000',
    '3. low': '63.6000',
    '4. close': '63.8600',
    '5. volume': '3234518'
  },
  '2014-06-30': {
    '1. open': '65.2400',
    '2. high': '66.2900',
    '3. low': '64.4500',
    '4. close': '65.8100',
    '5. volume': '2895308'
  },
  '2014-05-30': {
    '1. open': '67.5100',
    '2. high': '68.0000',
    '3. low': '62.9500',
    '4. close': '65.2400',
    '5. volume': '4398967'
  },
  '2014-04-30': {
    '1. open': '65.0900',
    '2. high': '67.8400',
    '3. low': '63.7400',
    '4. close': '67.1100',
    '5. volume': '4970298'
  },
  '2014-03-31': {
    '1. open': '60.8800',
    '2. high': '65.5000',
    '3. low': '58.8300',
    '4. close': '64.9300',
    '5. volume': '7014033'
  },
  '2014-02-28': {
    '1. open': '59.2400',
    '2. high': '62.2500',
    '3. low': '58.5800',
    '4. close': '61.7000',
    '5. volume': '3296687'
  },
  '2014-01-31': {
    '1. open': '62.7000',
    '2. high': '62.7000',
    '3. low': '58.5300',
    '4. close': '58.9000',
    '5. volume': '5248775'
  },
  '2013-12-30': {
    '1. open': '61.4700',
    '2. high': '63.0600',
    '3. low': '58.9500',
    '4. close': '62.3800',
    '5. volume': '3343685'
  },
  '2013-11-29': {
    '1. open': '59.2300',
    '2. high': '61.9300',
    '3. low': '58.4500',
    '4. close': '61.2900',
    '5. volume': '3635298'
  },
  '2013-10-31': {
    '1. open': '54.3900',
    '2. high': '60.5300',
    '3. low': '52.7000',
    '4. close': '59.0900',
    '5. volume': '4245982'
  },
  '2013-09-30': {
    '1. open': '53.4400',
    '2. high': '56.5400',
    '3. low': '51.7500',
    '4. close': '54.3600',
    '5. volume': '4309389'
  },
  '2013-08-30': {
    '1. open': '56.0700',
    '2. high': '59.4700',
    '3. low': '52.7900',
    '4. close': '52.7900',
    '5. volume': '4664346'
  },
  '2013-07-31': {
    '1. open': '56.1000',
    '2. high': '57.1400',
    '3. low': '53.3100',
    '4. close': '55.9000',
    '5. volume': '3903371'
  },
  '2013-06-28': {
    '1. open': '57.5500',
    '2. high': '58.0200',
    '3. low': '53.8500',
    '4. close': '55.3200',
    '5. volume': '5603269'
  },
  '2013-05-31': {
    '1. open': '63.1500',
    '2. high': '64.8200',
    '3. low': '55.9400',
    '4. close': '58.3200',
    '5. volume': '6506032'
  },
  '2013-04-30': {
    '1. open': '61.4500',
    '2. high': '64.8500',
    '3. low': '58.2800',
    '4. close': '64.1200',
    '5. volume': '4527466'
  },
  '2013-03-28': {
    '1. open': '59.9300',
    '2. high': '64.4700',
    '3. low': '59.3400',
    '4. close': '61.1900',
    '5. volume': '3735197'
  },
  '2013-02-28': {
    '1. open': '59.2400',
    '2. high': '60.0700',
    '3. low': '56.2000',
    '4. close': '59.9300',
    '5. volume': '3662609'
  },
  '2013-01-31': {
    '1. open': '60.2200',
    '2. high': '60.6000',
    '3. low': '58.1400',
    '4. close': '59.4600',
    '5. volume': '3339630'
  },
  '2012-12-28': {
    '1. open': '56.5700',
    '2. high': '59.8900',
    '3. low': '55.8600',
    '4. close': '58.9600',
    '5. volume': '2741970'
  },
  '2012-11-30': {
    '1. open': '53.8000',
    '2. high': '57.5000',
    '3. low': '52.8500',
    '4. close': '56.6500',
    '5. volume': '4541144'
  },
  '2012-10-31': {
    '1. open': '50.0200',
    '2. high': '55.6300',
    '3. low': '49.8850',
    '4. close': '54.2700',
    '5. volume': '5048663'
  },
  '2012-09-28': {
    '1. open': '48.3250',
    '2. high': '51.4900',
    '3. low': '47.9550',
    '4. close': '49.7250',
    '5. volume': '4229522'
  },
  '2012-08-31': {
    '1. open': '48.8500',
    '2. high': '50.1100',
    '3. low': '46.3300',
    '4. close': '48.5700',
    '5. volume': '4185596'
  },
  '2012-07-31': {
    '1. open': '46.7600',
    '2. high': '49.6500',
    '3. low': '46.2500',
    '4. close': '48.7700',
    '5. volume': '4233092'
  },
  '2012-06-29': {
    '1. open': '43.4700',
    '2. high': '47.0200',
    '3. low': '41.2250',
    '4. close': '46.8900',
    '5. volume': '4762366'
  },
  '2012-05-31': {
    '1. open': '46.0000',
    '2. high': '47.7000',
    '3. low': '42.0300',
    '4. close': '43.2550',
    '5. volume': '5947071'
  },
  '2012-04-30': {
    '1. open': '44.8000',
    '2. high': '46.4900',
    '3. low': '43.0200',
    '4. close': '45.6650',
    '5. volume': '4991848'
  },
  '2012-03-30': {
    '1. open': '41.7150',
    '2. high': '45.4500',
    '3. low': '40.0100',
    '4. close': '44.5400',
    '5. volume': '5158805'
  },
  '2012-02-29': {
    '1. open': '41.0500',
    '2. high': '43.4350',
    '3. low': '40.2300',
    '4. close': '41.6650',
    '5. volume': '5148957'
  },
  '2012-01-31': {
    '1. open': '38.2450',
    '2. high': '41.6500',
    '3. low': '37.0950',
    '4. close': '40.6850',
    '5. volume': '5078664'
  },
  '2011-12-30': {
    '1. open': '38.7950',
    '2. high': '39.5000',
    '3. low': '35.8600',
    '4. close': '38.3250',
    '5. volume': '4571072'
  },
  '2011-11-30': {
    '1. open': '35.1100',
    '2. high': '39.0300',
    '3. low': '33.9050',
    '4. close': '38.7400',
    '5. volume': '5873532'
  },
  '2011-10-31': {
    '1. open': '33.0500',
    '2. high': '38.5000',
    '3. low': '31.6150',
    '4. close': '35.8550',
    '5. volume': '5277729'
  },
  '2011-09-30': {
    '1. open': '33.1200',
    '2. high': '34.5700',
    '3. low': '28.7200',
    '4. close': '34.0400',
    '5. volume': '6636630'
  },
  '2011-08-31': {
    '1. open': '36.6500',
    '2. high': '36.7000',
    '3. low': '28.5800',
    '4. close': '32.8400',
    '5. volume': '13530623'
  },
  '2011-07-29': {
    '1. open': '36.3150',
    '2. high': '38.4400',
    '3. low': '33.7100',
    '4. close': '36.2350',
    '5. volume': '7813092'
  },
  '2011-06-30': {
    '1. open': '36.9100',
    '2. high': '37.0050',
    '3. low': '33.6600',
    '4. close': '35.9650',
    '5. volume': '7731948'
  },
  '2011-05-31': {
    '1. open': '41.0000',
    '2. high': '41.3600',
    '3. low': '35.5300',
    '4. close': '36.9150',
    '5. volume': '10353905'
  },
  '2011-04-29': {
    '1. open': '39.0000',
    '2. high': '41.3000',
    '3. low': '38.2750',
    '4. close': '40.8300',
    '5. volume': '5821242'
  },
  '2011-03-31': {
    '1. open': '42.2200',
    '2. high': '42.6000',
    '3. low': '34.6200',
    '4. close': '38.5250',
    '5. volume': '10588112'
  },
  '2011-02-28': {
    '1. open': '41.2000',
    '2. high': '43.4900',
    '3. low': '40.5500',
    '4. close': '42.1900',
    '5. volume': '4893426'
  },
  '2011-01-31': {
    '1. open': '40.4800',
    '2. high': '41.9500',
    '3. low': '39.2100',
    '4. close': '40.8550',
    '5. volume': '5575063'
  },
  '2010-12-30': {
    '1. open': '36.4000',
    '2. high': '41.3800',
    '3. low': '36.1850',
    '4. close': '40.1350',
    '5. volume': '5373855'
  },
  '2010-11-30': {
    '1. open': '36.6000',
    '2. high': '38.4150',
    '3. low': '35.5400',
    '4. close': '35.9100',
    '5. volume': '6107564'
  },
  '2010-10-29': {
    '1. open': '33.8500',
    '2. high': '36.6300',
    '3. low': '32.7450',
    '4. close': '36.3500',
    '5. volume': '5628353'
  },
  '2010-09-30': {
    '1. open': '35.1400',
    '2. high': '36.1100',
    '3. low': '33.4550',
    '4. close': '33.7400',
    '5. volume': '4628901'
  },
  '2010-08-31': {
    '1. open': '36.4000',
    '2. high': '38.4100',
    '3. low': '34.0200',
    '4. close': '35.0050',
    '5. volume': '5772836'
  },
  '2010-07-30': {
    '1. open': '35.0050',
    '2. high': '37.7100',
    '3. low': '34.7600',
    '4. close': '36.7400',
    '5. volume': '6043412'
  },
  '2010-06-30': {
    '1. open': '35.0000',
    '2. high': '36.7750',
    '3. low': '33.2450',
    '4. close': '35.3000',
    '5. volume': '7277363'
  },
  '2010-05-31': {
    '1. open': '35.5000',
    '2. high': '36.3650',
    '3. low': '30.6300',
    '4. close': '35.1900',
    '5. volume': '15822963'
  },
  '2010-04-30': {
    '1. open': '36.8550',
    '2. high': '37.8600',
    '3. low': '33.0300',
    '4. close': '35.2750',
    '5. volume': '9865615'
  },
  '2010-03-31': {
    '1. open': '32.8900',
    '2. high': '37.4900',
    '3. low': '32.8350',
    '4. close': '36.5600',
    '5. volume': '10513738'
  },
  '2010-02-26': {
    '1. open': '33.2750',
    '2. high': '34.4000',
    '3. low': '30.0150',
    '4. close': '32.8950',
    '5. volume': '7341559'
  },
  '2010-01-29': {
    '1. open': '33.2200',
    '2. high': '34.6300',
    '3. low': '32.2500',
    '4. close': '33.4000',
    '5. volume': '6223225'
  },
  '2009-12-30': {
    '1. open': '31.7600',
    '2. high': '33.1800',
    '3. low': '31.2800',
    '4. close': '32.7100',
    '5. volume': '5032139'
  },
  '2009-11-30': {
    '1. open': '30.5300',
    '2. high': '33.9000',
    '3. low': '29.9200',
    '4. close': '31.7400',
    '5. volume': '7420779'
  },
  '2009-10-30': {
    '1. open': '31.6500',
    '2. high': '35.2000',
    '3. low': '30.0000',
    '4. close': '30.6400',
    '5. volume': '8331493'
  },
  '2009-09-30': {
    '1. open': '30.9100',
    '2. high': '32.5900',
    '3. low': '29.4000',
    '4. close': '31.3300',
    '5. volume': '12128003'
  },
  '2009-08-31': {
    '1. open': '28.3600',
    '2. high': '32.1900',
    '3. low': '27.3000',
    '4. close': '30.7000',
    '5. volume': '10379217'
  },
  '2009-07-31': {
    '1. open': '26.5700',
    '2. high': '28.9000',
    '3. low': '23.1200',
    '4. close': '28.5500',
    '5. volume': '10857156'
  },
  '2009-06-30': {
    '1. open': '26.8700',
    '2. high': '27.3900',
    '3. low': '24.5400',
    '4. close': '26.3600',
    '5. volume': '8712960'
  },
  '2009-05-29': {
    '1. open': '25.0600',
    '2. high': '29.0000',
    '3. low': '24.6100',
    '4. close': '26.4700',
    '5. volume': '10707826'
  },
  '2009-04-30': {
    '1. open': '23.9000',
    '2. high': '27.3700',
    '3. low': '23.0900',
    '4. close': '24.5700',
    '5. volume': '12252373'
  },
  '2009-03-31': {
    '1. open': '27.8000',
    '2. high': '28.6100',
    '3. low': '20.8200',
    '4. close': '24.0000',
    '5. volume': '19229046'
  },
  '2009-02-27': {
    '1. open': '24.3500',
    '2. high': '28.7100',
    '3. low': '22.9400',
    '4. close': '28.7100',
    '5. volume': '13573133'
  },
  '2009-01-30': {
    '1. open': '22.3300',
    '2. high': '25.5000',
    '3. low': '18.8200',
    '4. close': '24.0200',
    '5. volume': '11871575'
  },
  '2008-12-30': {
    '1. open': '18.0700',
    '2. high': '24.4100',
    '3. low': '17.0500',
    '4. close': '22.5000',
    '5. volume': '9005193'
  },
  '2008-11-28': {
    '1. open': '19.6600',
    '2. high': '21.8200',
    '3. low': '16.1900',
    '4. close': '18.0300',
    '5. volume': '10498780'
  },
  '2008-10-31': {
    '1. open': '25.2600',
    '2. high': '27.3900',
    '3. low': '13.5900',
    '4. close': '19.6600',
    '5. volume': '14237651'
  },
  '2008-09-30': {
    '1. open': '28.7600',
    '2. high': '30.4600',
    '3. low': '23.2500',
    '4. close': '25.7100',
    '5. volume': '17479068'
  },
  '2008-08-29': {
    '1. open': '30.8300',
    '2. high': '31.8700',
    '3. low': '27.5600',
    '4. close': '29.1700',
    '5. volume': '12200422'
  },
  '2008-07-31': {
    '1. open': '31.2500',
    '2. high': '32.9400',
    '3. low': '25.5000',
    '4. close': '30.6400',
    '5. volume': '18598503'
  },
  '2008-06-30': {
    '1. open': '35.2900',
    '2. high': '36.0000',
    '3. low': '30.1500',
    '4. close': '31.3500',
    '5. volume': '13106672'
  },
  '2008-05-30': {
    '1. open': '35.4500',
    '2. high': '37.2300',
    '3. low': '32.4000',
    '4. close': '35.4400',
    '5. volume': '16793882'
  },
  '2008-04-30': {
    '1. open': '32.8000',
    '2. high': '35.4500',
    '3. low': '32.1700',
    '4. close': '34.9600',
    '5. volume': '14324567'
  },
  '2008-03-31': {
    '1. open': '31.2700',
    '2. high': '33.6800',
    '3. low': '28.3000',
    '4. close': '33.0200',
    '5. volume': '14451196'
  },
  '2008-02-29': {
    '1. open': '30.4000',
    '2. high': '32.4200',
    '3. low': '28.5100',
    '4. close': '31.5700',
    '5. volume': '12251970'
  },
  '2008-01-31': {
    '1. open': '31.6300',
    '2. high': '31.8200',
    '3. low': '23.5700',
    '4. close': '29.8800',
    '5. volume': '18134496'
  },
  '2007-12-28': {
    '1. open': '32.4500',
    '2. high': '33.9500',
    '3. low': '30.6900',
    '4. close': '31.5500',
    '5. volume': '9919203'
  },
  '2007-11-30': {
    '1. open': '36.4400',
    '2. high': '36.4700',
    '3. low': '30.1500',
    '4. close': '32.4500',
    '5. volume': '14606376'
  },
  '2007-10-31': {
    '1. open': '35.5400',
    '2. high': '37.1300',
    '3. low': '34.5100',
    '4. close': '36.4500',
    '5. volume': '10030770'
  },
  '2007-09-28': {
    '1. open': '34.0100',
    '2. high': '35.6000',
    '3. low': '32.0100',
    '4. close': '35.5800',
    '5. volume': '12180477'
  },
  '2007-08-31': {
    '1. open': '32.5000',
    '2. high': '34.3500',
    '3. low': '29.5700',
    '4. close': '34.0700',
    '5. volume': '22791303'
  },
  '2007-07-31': {
    '1. open': '35.8000',
    '2. high': '37.2500',
    '3. low': '32.0100',
    '4. close': '32.9000',
    '5. volume': '16319598'
  },
  '2007-06-29': {
    '1. open': '35.8000',
    '2. high': '37.0800',
    '3. low': '33.6800',
    '4. close': '35.9500',
    '5. volume': '14521106'
  },
  '2007-05-31': {
    '1. open': '37.5000',
    '2. high': '37.7900',
    '3. low': '34.5600',
    '4. close': '35.7600',
    '5. volume': '17019590'
  },
  '2007-04-30': {
    '1. open': '33.2500',
    '2. high': '37.4700',
    '3. low': '33.0200',
    '4. close': '37.3700',
    '5. volume': '12739062'
  },
  '2007-03-30': {
    '1. open': '32.1600',
    '2. high': '33.7500',
    '3. low': '30.2000',
    '4. close': '33.3500',
    '5. volume': '16200618'
  },
  '2007-02-28': {
    '1. open': '34.4000',
    '2. high': '34.9800',
    '3. low': '28.5500',
    '4. close': '32.1600',
    '5. volume': '9469146'
  },
  '2007-01-31': {
    '1. open': '35.0000',
    '2. high': '35.6900',
    '3. low': '33.6500',
    '4. close': '34.2200',
    '5. volume': '8111644'
  },
  '2006-12-29': {
    '1. open': '31.7300',
    '2. high': '35.2500',
    '3. low': '31.5500',
    '4. close': '35.0800',
    '5. volume': '8294528'
  },
  '2006-11-30': {
    '1. open': '33.4300',
    '2. high': '34.8500',
    '3. low': '31.3400',
    '4. close': '31.7300',
    '5. volume': '11622423'
  },
  '2006-10-31': {
    '1. open': '33.1100',
    '2. high': '34.3300',
    '3. low': '32.5800',
    '4. close': '33.2600',
    '5. volume': '10419701'
  },
  '2006-09-29': {
    '1. open': '30.0100',
    '2. high': '33.4400',
    '3. low': '29.3600',
    '4. close': '33.1700',
    '5. volume': '11138811'
  },
  '2006-08-31': {
    '1. open': '27.4800',
    '2. high': '30.2800',
    '3. low': '26.8800',
    '4. close': '30.1500',
    '5. volume': '10422289'
  },
  '2006-07-31': {
    '1. open': '27.4000',
    '2. high': '27.8000',
    '3. low': '25.7900',
    '4. close': '27.6300',
    '5. volume': '8463330'
  },
  '2006-06-30': {
    '1. open': '28.6000',
    '2. high': '28.9000',
    '3. low': '25.7200',
    '4. close': '27.3500',
    '5. volume': '12893887'
  },
  '2006-05-31': {
    '1. open': '29.3400',
    '2. high': '30.7000',
    '3. low': '26.3600',
    '4. close': '28.5800',
    '5. volume': '14303900'
  },
  '2006-04-28': {
    '1. open': '30.8800',
    '2. high': '31.2700',
    '3. low': '29.2700',
    '4. close': '29.3900',
    '5. volume': '10384640'
  },
  '2006-03-31': {
    '1. open': '31.7600',
    '2. high': '31.7600',
    '3. low': '28.3100',
    '4. close': '30.6100',
    '5. volume': '14739457'
  },
  '2006-02-28': {
    '1. open': '31.0400',
    '2. high': '32.3000',
    '3. low': '30.3300',
    '4. close': '31.8200',
    '5. volume': '9569612'
  },
  '2006-01-31': {
    '1. open': '29.9000',
    '2. high': '32.0000',
    '3. low': '29.5000',
    '4. close': '31.0800',
    '5. volume': '12412860'
  },
  '2005-12-30': {
    '1. open': '28.4100',
    '2. high': '31.0400',
    '3. low': '28.3900',
    '4. close': '29.9300',
    '5. volume': '10312822'
  },
  '2005-11-30': {
    '1. open': '29.9600',
    '2. high': '30.5000',
    '3. low': '28.1100',
    '4. close': '28.4000',
    '5. volume': '16047041'
  },
  '2005-10-31': {
    '1. open': '29.0500',
    '2. high': '30.3000',
    '3. low': '28.1100',
    '4. close': '30.1900',
    '5. volume': '10900392'
  },
  '2005-09-30': {
    '1. open': '29.0800',
    '2. high': '29.5000',
    '3. low': '26.4500',
    '4. close': '28.8000',
    '5. volume': '20104407'
  },
  '2005-08-31': {
    '1. open': '31.0500',
    '2. high': '32.4000',
    '3. low': '28.8000',
    '4. close': '29.1200',
    '5. volume': '11482080'
  },
  '2005-07-29': {
    '1. open': '31.1500',
    '2. high': '31.5600',
    '3. low': '29.3100',
    '4. close': '31.2000',
    '5. volume': '7883197'
  },
  '2005-06-30': {
    '1. open': '31.0300',
    '2. high': '32.8900',
    '3. low': '30.3600',
    '4. close': '31.2500',
    '5. volume': '9780049'
  },
  '2005-05-31': {
    '1. open': '29.4800',
    '2. high': '31.3700',
    '3. low': '28.3600',
    '4. close': '31.0700',
    '5. volume': '8323557'
  },
  '2005-04-29': {
    '1. open': '30.6600',
    '2. high': '32.0500',
    '3. low': '28.6600',
    '4. close': '28.8700',
    '5. volume': '8120265'
  },
  '2005-03-31': {
    '1. open': '31.8000',
    '2. high': '32.8500',
    '3. low': '29.7200',
    '4. close': '30.5100',
    '5. volume': '8955333'
  },
  '2005-02-28': {
    '1. open': '29.5500',
    '2. high': '32.6500',
    '3. low': '29.1300',
    '4. close': '32.3900',
    '5. volume': '8600450'
  },
  '2005-01-31': {
    '1. open': '28.6500',
    '2. high': '29.9000',
    '3. low': '28.1500',
    '4. close': '29.5300',
    '5. volume': '5653814'
  },
  '2004-12-31': {
    '1. open': '27.1300',
    '2. high': '29.0800',
    '3. low': '26.9100',
    '4. close': '28.7500',
    '5. volume': '5647323'
  },
  '2004-11-30': {
    '1. open': '25.7500',
    '2. high': '27.2500',
    '3. low': '25.5700',
    '4. close': '27.1300',
    '5. volume': '6607440'
  },
  '2004-10-29': {
    '1. open': '26.2000',
    '2. high': '26.3900',
    '3. low': '23.5600',
    '4. close': '25.5400',
    '5. volume': '15251661'
  },
  '2004-09-30': {
    '1. open': '26.9000',
    '2. high': '27.3000',
    '3. low': '25.6500',
    '4. close': '26.1000',
    '5. volume': '6765364'
  },
  '2004-08-31': {
    '1. open': '26.4500',
    '2. high': '27.3000',
    '3. low': '24.8000',
    '4. close': '26.5000',
    '5. volume': '4829708'
  },
  '2004-07-30': {
    '1. open': '27.6800',
    '2. high': '28.3500',
    '3. low': '24.8500',
    '4. close': '26.4000',
    '5. volume': '7017654'
  },
  '2004-06-30': {
    '1. open': '27.9800',
    '2. high': '28.6000',
    '3. low': '26.9000',
    '4. close': '27.4300',
    '5. volume': '5842367'
  },
  '2004-05-31': {
    '1. open': '28.7800',
    '2. high': '28.9500',
    '3. low': '24.7800',
    '4. close': '27.9500',
    '5. volume': '6228244'
  },
  '2004-04-30': {
    '1. open': '27.3000',
    '2. high': '29.8500',
    '3. low': '27.2700',
    '4. close': '28.6600',
    '5. volume': '6872998'
  },
  '2004-03-31': {
    '1. open': '29.0000',
    '2. high': '29.9300',
    '3. low': '26.1500',
    '4. close': '27.2200',
    '5. volume': '11702944'
  },
  '2004-02-27': {
    '1. open': '27.8900',
    '2. high': '31.5000',
    '3. low': '27.5100',
    '4. close': '28.7500',
    '5. volume': '16909994'
  },
  '2004-01-30': {
    '1. open': '27.7200',
    '2. high': '28.5900',
    '3. low': '25.8100',
    '4. close': '27.5500',
    '5. volume': '3596797'
  },
  '2003-12-31': {
    '1. open': '26.9000',
    '2. high': '29.0400',
    '3. low': '26.7500',
    '4. close': '27.7200',
    '5. volume': '3271033'
  },
  '2003-11-28': {
    '1. open': '25.0100',
    '2. high': '26.9000',
    '3. low': '23.5000',
    '4. close': '26.9000',
    '5. volume': '3228074'
  },
  '2003-10-31': {
    '1. open': '22.7500',
    '2. high': '25.5800',
    '3. low': '22.6400',
    '4. close': '25.0000',
    '5. volume': '2461798'
  },
  '2003-09-30': {
    '1. open': '24.2600',
    '2. high': '26.9000',
    '3. low': '22.3600',
    '4. close': '22.8800',
    '5. volume': '2968926'
  },
  '2003-08-29': {
    '1. open': '24.4800',
    '2. high': '24.9600',
    '3. low': '23.5800',
    '4. close': '24.2500',
    '5. volume': '2071634'
  },
  '2003-07-31': {
    '1. open': '22.6900',
    '2. high': '25.2000',
    '3. low': '20.5800',
    '4. close': '24.7000',
    '5. volume': '3351488'
  },
  '2003-06-30': {
    '1. open': '24.5000',
    '2. high': '25.6000',
    '3. low': '21.8100',
    '4. close': '22.6000',
    '5. volume': '6718263'
  },
  '2003-05-30': {
    '1. open': '23.1300',
    '2. high': '27.5000',
    '3. low': '22.7700',
    '4. close': '24.4500',
    '5. volume': '2207212'
  },
  '2003-04-30': {
    '1. open': '18.0000',
    '2. high': '24.6900',
    '3. low': '18.0000',
    '4. close': '23.3300',
    '5. volume': '2787905'
  },
  '2003-03-31': {
    '1. open': '21.1600',
    '2. high': '22.5000',
    '3. low': '17.3000',
    '4. close': '17.9600',
    '5. volume': '2199548'
  },
  '2003-02-28': {
    '1. open': '23.5900',
    '2. high': '24.7900',
    '3. low': '20.0000',
    '4. close': '20.9700',
    '5. volume': '1841304'
  },
  '2003-01-31': {
    '1. open': '24.3000',
    '2. high': '25.6500',
    '3. low': '22.2000',
    '4. close': '23.4500',
    '5. volume': '1161580'
  },
  '2002-12-30': {
    '1. open': '23.8000',
    '2. high': '26.6000',
    '3. low': '23.7700',
    '4. close': '24.3000',
    '5. volume': '1147914'
  },
  '2002-11-29': {
    '1. open': '23.1900',
    '2. high': '25.2500',
    '3. low': '20.0000',
    '4. close': '23.7800',
    '5. volume': '1289413'
  },
  '2002-10-31': {
    '1. open': '16.9400',
    '2. high': '23.5800',
    '3. low': '15.7500',
    '4. close': '22.9600',
    '5. volume': '1310836'
  },
  '2002-09-30': {
    '1. open': '22.4500',
    '2. high': '25.4000',
    '3. low': '15.9500',
    '4. close': '16.7000',
    '5. volume': '1793115'
  },
  '2002-08-30': {
    '1. open': '22.2000',
    '2. high': '24.6200',
    '3. low': '20.1300',
    '4. close': '22.4000',
    '5. volume': '996970'
  },
  '2002-07-31': {
    '1. open': '26.8833',
    '2. high': '27.5000',
    '3. low': '19.9000',
    '4. close': '23.3000',
    '5. volume': '1447393'
  },
  '2002-06-28': {
    '1. open': '27.6100',
    '2. high': '28.3333',
    '3. low': '23.6667',
    '4. close': '26.8333',
    '5. volume': '1684647'
  },
  '2002-05-31': {
    '1. open': '81.5000',
    '2. high': '84.8000',
    '3. low': '26.1667',
    '4. close': '27.3667',
    '5. volume': '942522'
  },
  '2002-04-30': {
    '1. open': '82.6500',
    '2. high': '82.6500',
    '3. low': '25.6667',
    '4. close': '27.1667',
    '5. volume': '943023'
  },
  '2002-03-29': {
    '1. open': '24.9667',
    '2. high': '82.6500',
    '3. low': '24.5000',
    '4. close': '82.6500',
    '5. volume': '1012671'
  },
  '2002-02-28': {
    '1. open': '23.6667',
    '2. high': '25.0667',
    '3. low': '23.0833',
    '4. close': '24.9333',
    '5. volume': '886101'
  },
  '2002-01-31': {
    '1. open': '67.3900',
    '2. high': '70.7400',
    '3. low': '22.4333',
    '4. close': '23.5667',
    '5. volume': '1138473'
  },
  '2001-12-31': {
    '1. open': '23.9533',
    '2. high': '67.9000',
    '3. low': '21.8333',
    '4. close': '67.3900',
    '5. volume': '1102449'
  },
  '2001-11-30': {
    '1. open': '20.8400',
    '2. high': '24.8333',
    '3. low': '20.6667',
    '4. close': '24.5667',
    '5. volume': '1201920'
  },
  '2001-10-31': {
    '1. open': '19.6667',
    '2. high': '67.5000',
    '3. low': '17.7333',
    '4. close': '20.7667',
    '5. volume': '1397325'
  },
  '2001-09-28': {
    '1. open': '28.5833',
    '2. high': '43.0500',
    '3. low': '12.8367',
    '4. close': '19.5000',
    '5. volume': '2570763'
  },
  '2001-08-31': {
    '1. open': '28.9067',
    '2. high': '29.5000',
    '3. low': '27.5000',
    '4. close': '28.3333',
    '5. volume': '626721'
  },
  '2001-07-31': {
    '1. open': '30.3533',
    '2. high': '32.5667',
    '3. low': '27.6667',
    '4. close': '29.1667',
    '5. volume': '1657614'
  },
  '2001-06-29': {
    '1. open': '27.2333',
    '2. high': '86.2300',
    '3. low': '25.7500',
    '4. close': '30.6233',
    '5. volume': '1156725'
  },
  '2001-05-31': {
    '1. open': '26.6300',
    '2. high': '27.2567',
    '3. low': '24.7500',
    '4. close': '27.2000',
    '5. volume': '1190952'
  },
  '2001-04-30': {
    '1. open': '28.5233',
    '2. high': '29.0167',
    '3. low': '25.0000',
    '4. close': '26.3933',
    '5. volume': '651444'
  },
  '2001-03-30': {
    '1. open': '33.3333',
    '2. high': '33.3333',
    '3. low': '26.4333',
    '4. close': '28.5000',
    '5. volume': '1495935'
  },
  '2001-02-28': {
    '1. open': '34.2967',
    '2. high': '35.0000',
    '3. low': '32.3667',
    '4. close': '33.4367',
    '5. volume': '805221'
  },
  '2001-01-31': {
    '1. open': '31.3333',
    '2. high': '34.7333',
    '3. low': '27.8667',
    '4. close': '33.8333',
    '5. volume': '1084812'
  },
  '2000-12-29': {
    '1. open': '35.7267',
    '2. high': '35.9000',
    '3. low': '30.0000',
    '4. close': '31.3900',
    '5. volume': '998964'
  },
  '2000-11-30': {
    '1. open': '32.8667',
    '2. high': '114.9700',
    '3. low': '32.3867',
    '4. close': '35.5700',
    '5. volume': '1305996'
  }
};

// tslint:disable:max-line-length
export const hanoverReCompany: Company = {
  id: 1058,
  name: 'Hannover Rück SE',
  country: Country.Deutschland,
  city: 'Hannover',
  url: 'http://www.hannover-rueck.de/',
  description: 'Die Hannover Rück SE ist eine börsennotierte deutsche Rückversicherungsgesellschaft mit Hauptsitz in Hannover und gehört mehrheitlich zum Talanx-Konzern. Sie hat ihren Ursprung in der 1966 gegründeten Aktiengesellschaft für Transport- und Rückversicherung (ATR) und gehört heute zu den drei größten Rückversicherern weltweit.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Hannover_R%C3%BCck',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/HannoverRe.svg/500px-HannoverRe.svg.png',
  products: [],
  industries: [141211],
  securityType: SecurityType.Namensaktie,
  currency: Currency.EUR,
  isin: 'DE0008402215',
  wkn: '840221',
  symbol: 'HNR1.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Rückversicherung', 'Rückversicherungsgesellschaft', 'Erstversicherung', 'Krankenrückversicherung', 'Krankenerstversicherung']
};
// tslint:enable:max-line-length

