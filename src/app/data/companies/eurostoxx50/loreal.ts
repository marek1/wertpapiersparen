import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';

const dividends = [{year: 2018, rate: 3.85, yield: 1.94}, {year: 2017, rate: 3.55}, {year: 2016, rate: 3.30}, {
  year: 2015,
  rate: 3.10,
  yield: 1.97
}, {year: 2014, rate: 2.70, yield: 1.94}, {year: 2013, rate: 2.50, yield: 1.96}, {year: 2012, rate: 2.30, yield: 2.19}, {
  year: 2011,
  rate: 2.00,
  yield: 2.48
}, {year: 2010, rate: 1.80, yield: 2.17}, {year: 2009, rate: 1.50, yield: 1.92}, {year: 2008, rate: 1.44, yield: 2.31}, {
  year: 2007,
  rate: 1.38,
  yield: 1.41
}, {year: 2006, rate: 1.18, yield: 1.55}, {year: 2005, rate: 1.00, yield: 1.59}, {year: 2004, rate: 0.82, yield: 1.47}, {
  year: 2003,
  rate: 1.10,
  yield: 1.69
}, {year: 2002, rate: 0.96, yield: 1.32}, {year: 2001, rate: 0.81, yield: 1.00}, {year: 2000, rate: 0.66, yield: 0.72}, {
  year: 1999,
  rate: 0.51,
  yield: 0.64
}

];
const prices = {
  '2019-11-29': {
    '1. open': '262.8000',
    '2. high': '265.0000',
    '3. low': '254.0000',
    '4. close': '258.8000',
    '5. volume': '10442'
  },
  '2019-10-31': {
    '1. open': '258.3000',
    '2. high': '266.4000',
    '3. low': '236.0000',
    '4. close': '261.9000',
    '5. volume': '18065'
  },
  '2019-09-30': {
    '1. open': '249.3000',
    '2. high': '260.0000',
    '3. low': '241.9000',
    '4. close': '257.0000',
    '5. volume': '10071'
  },
  '2019-08-30': {
    '1. open': '240.4000',
    '2. high': '250.4000',
    '3. low': '226.7000',
    '4. close': '248.6000',
    '5. volume': '29952'
  },
  '2019-07-31': {
    '1. open': '251.9000',
    '2. high': '257.8000',
    '3. low': '235.6000',
    '4. close': '242.0000',
    '5. volume': '13218'
  },
  '2019-06-28': {
    '1. open': '239.7000',
    '2. high': '256.5000',
    '3. low': '238.3000',
    '4. close': '250.5000',
    '5. volume': '8427'
  },
  '2019-05-31': {
    '1. open': '243.8000',
    '2. high': '245.2000',
    '3. low': '233.7000',
    '4. close': '240.5000',
    '5. volume': '14009'
  },
  '2019-04-30': {
    '1. open': '240.9000',
    '2. high': '245.2000',
    '3. low': '237.5000',
    '4. close': '245.0000',
    '5. volume': '20479'
  },
  '2019-03-29': {
    '1. open': '223.8000',
    '2. high': '240.0000',
    '3. low': '222.0000',
    '4. close': '239.8000',
    '5. volume': '27830'
  },
  '2019-02-28': {
    '1. open': '210.5000',
    '2. high': '226.4000',
    '3. low': '210.3000',
    '4. close': '221.9000',
    '5. volume': '17194'
  },
  '2019-01-31': {
    '1. open': '199.7500',
    '2. high': '210.0000',
    '3. low': '195.0000',
    '4. close': '210.0000',
    '5. volume': '9579'
  },
  '2018-12-28': {
    '1. open': '212.9000',
    '2. high': '214.3000',
    '3. low': '193.5000',
    '4. close': '198.5000',
    '5. volume': '24299'
  },
  '2018-11-30': {
    '1. open': '199.0000',
    '2. high': '210.3000',
    '3. low': '198.3500',
    '4. close': '207.9000',
    '5. volume': '15058'
  },
  '2018-10-31': {
    '1. open': '206.9000',
    '2. high': '208.3000',
    '3. low': '182.3000',
    '4. close': '198.9000',
    '5. volume': '19333'
  },
  '2018-09-28': {
    '1. open': '206.3000',
    '2. high': '209.4000',
    '3. low': '197.2000',
    '4. close': '207.7000',
    '5. volume': '18506'
  },
  '2018-08-31': {
    '1. open': '212.2000',
    '2. high': '214.5000',
    '3. low': '201.0000',
    '4. close': '206.6000',
    '5. volume': '13017'
  },
  '2018-07-31': {
    '1. open': '210.7000',
    '2. high': '213.0000',
    '3. low': '200.9000',
    '4. close': '209.5000',
    '5. volume': '23316'
  },
  '2018-06-29': {
    '1. open': '206.3000',
    '2. high': '213.8000',
    '3. low': '202.6000',
    '4. close': '211.6000',
    '5. volume': '16550'
  },
  '2018-05-31': {
    '1. open': '198.1000',
    '2. high': '210.0000',
    '3. low': '194.5000',
    '4. close': '205.7000',
    '5. volume': '19121'
  },
  '2018-04-30': {
    '1. open': '182.7500',
    '2. high': '201.5000',
    '3. low': '182.5500',
    '4. close': '197.0000',
    '5. volume': '15166'
  },
  '2018-03-29': {
    '1. open': '176.9000',
    '2. high': '183.4000',
    '3. low': '170.9000',
    '4. close': '183.4000',
    '5. volume': '11905'
  },
  '2018-02-28': {
    '1. open': '183.6000',
    '2. high': '183.6000',
    '3. low': '171.3000',
    '4. close': '179.4500',
    '5. volume': '17791'
  },
  '2018-01-31': {
    '1. open': '189.0000',
    '2. high': '189.0000',
    '3. low': '181.1000',
    '4. close': '184.3000',
    '5. volume': '8198'
  },
  '2017-12-29': {
    '1. open': '189.0000',
    '2. high': '189.0000',
    '3. low': '189.0000',
    '4. close': '189.0000',
    '5. volume': '0'
  },
  '2017-11-30': {
    '1. open': '191.7000',
    '2. high': '194.2000',
    '3. low': '183.8500',
    '4. close': '189.0000',
    '5. volume': '8053'
  },
  '2017-10-31': {
    '1. open': '179.8500',
    '2. high': '191.8500',
    '3. low': '179.3000',
    '4. close': '189.5000',
    '5. volume': '4878'
  },
  '2017-09-29': {
    '1. open': '177.7000',
    '2. high': '183.8000',
    '3. low': '175.9500',
    '4. close': '181.5500',
    '5. volume': '5151'
  },
  '2017-08-31': {
    '1. open': '175.6500',
    '2. high': '182.0500',
    '3. low': '173.3000',
    '4. close': '177.8000',
    '5. volume': '6854'
  },
  '2017-07-31': {
    '1. open': '183.6500',
    '2. high': '186.2000',
    '3. low': '174.2500',
    '4. close': '175.2000',
    '5. volume': '9251'
  },
  '2017-06-30': {
    '1. open': '190.7000',
    '2. high': '196.6000',
    '3. low': '183.9500',
    '4. close': '184.1500',
    '5. volume': '8441'
  },
  '2017-05-31': {
    '1. open': '183.2500',
    '2. high': '191.5000',
    '3. low': '182.9000',
    '4. close': '190.9000',
    '5. volume': '10859'
  },
  '2017-04-28': {
    '1. open': '180.8500',
    '2. high': '186.1000',
    '3. low': '178.9000',
    '4. close': '183.6500',
    '5. volume': '22628'
  },
  '2017-03-31': {
    '1. open': '176.9000',
    '2. high': '180.0000',
    '3. low': '174.7000',
    '4. close': '179.5000',
    '5. volume': '14870'
  },
  '2017-02-28': {
    '1. open': '170.3500',
    '2. high': '177.0000',
    '3. low': '167.9500',
    '4. close': '174.4000',
    '5. volume': '8616'
  },
  '2017-01-31': {
    '1. open': '173.5500',
    '2. high': '173.6000',
    '3. low': '169.0000',
    '4. close': '169.0000',
    '5. volume': '19379'
  },
  '2016-12-30': {
    '1. open': '162.1000',
    '2. high': '173.0000',
    '3. low': '157.5000',
    '4. close': '172.7500',
    '5. volume': '10072'
  },
  '2016-11-30': {
    '1. open': '164.2000',
    '2. high': '166.9000',
    '3. low': '156.5000',
    '4. close': '162.1000',
    '5. volume': '11314'
  },
  '2016-10-31': {
    '1. open': '168.5000',
    '2. high': '171.4500',
    '3. low': '161.1000',
    '4. close': '163.3000',
    '5. volume': '6207'
  },
  '2016-09-30': {
    '1. open': '170.1000',
    '2. high': '175.5000',
    '3. low': '164.4500',
    '4. close': '167.1000',
    '5. volume': '5917'
  },
  '2016-08-31': {
    '1. open': '168.3500',
    '2. high': '176.3500',
    '3. low': '168.1000',
    '4. close': '170.1000',
    '5. volume': '8238'
  },
  '2016-07-29': {
    '1. open': '172.9000',
    '2. high': '177.5000',
    '3. low': '166.4000',
    '4. close': '168.0500',
    '5. volume': '8191'
  },
  '2016-06-30': {
    '1. open': '169.0000',
    '2. high': '171.5000',
    '3. low': '159.0000',
    '4. close': '171.5000',
    '5. volume': '17146'
  },
  '2016-05-31': {
    '1. open': '158.1000',
    '2. high': '168.7000',
    '3. low': '156.0000',
    '4. close': '168.7000',
    '5. volume': '8565'
  },
  '2016-04-29': {
    '1. open': '155.4500',
    '2. high': '169.0000',
    '3. low': '152.0000',
    '4. close': '158.2500',
    '5. volume': '17761'
  },
  '2016-03-31': {
    '1. open': '157.9000',
    '2. high': '161.3000',
    '3. low': '151.5000',
    '4. close': '157.7000',
    '5. volume': '25580'
  },
  '2016-02-29': {
    '1. open': '157.6000',
    '2. high': '160.0000',
    '3. low': '146.6000',
    '4. close': '155.9000',
    '5. volume': '18864'
  },
  '2016-01-29': {
    '1. open': '152.1000',
    '2. high': '154.8000',
    '3. low': '142.8500',
    '4. close': '154.5000',
    '5. volume': '22215'
  },
  '2015-12-30': {
    '1. open': '167.1500',
    '2. high': '171.7500',
    '3. low': '153.0000',
    '4. close': '158.3000',
    '5. volume': '28305'
  },
  '2015-11-30': {
    '1. open': '165.5000',
    '2. high': '170.9000',
    '3. low': '163.2500',
    '4. close': '168.3500',
    '5. volume': '27338'
  },
  '2015-10-30': {
    '1. open': '156.9500',
    '2. high': '174.5000',
    '3. low': '152.5500',
    '4. close': '166.0000',
    '5. volume': '41445'
  },
  '2015-09-30': {
    '1. open': '150.0000',
    '2. high': '156.0000',
    '3. low': '142.5500',
    '4. close': '155.1000',
    '5. volume': '26487'
  },
  '2015-08-31': {
    '1. open': '170.4000',
    '2. high': '178.8500',
    '3. low': '141.2500',
    '4. close': '152.4000',
    '5. volume': '45797'
  },
  '2015-07-31': {
    '1. open': '158.3500',
    '2. high': '173.4000',
    '3. low': '153.7000',
    '4. close': '169.5500',
    '5. volume': '22354'
  },
  '2015-06-30': {
    '1. open': '173.4000',
    '2. high': '174.5000',
    '3. low': '159.4000',
    '4. close': '161.0000',
    '5. volume': '25556'
  },
  '2015-05-29': {
    '1. open': '171.1000',
    '2. high': '177.8000',
    '3. low': '164.7500',
    '4. close': '173.0000',
    '5. volume': '32912'
  },
  '2015-04-30': {
    '1. open': '170.1000',
    '2. high': '180.6000',
    '3. low': '167.4500',
    '4. close': '170.7000',
    '5. volume': '32894'
  },
  '2015-03-31': {
    '1. open': '162.6000',
    '2. high': '174.2000',
    '3. low': '160.5500',
    '4. close': '171.8000',
    '5. volume': '28844'
  },
  '2015-02-27': {
    '1. open': '158.3500',
    '2. high': '161.5000',
    '3. low': '152.7500',
    '4. close': '161.5000',
    '5. volume': '31492'
  },
  '2015-01-30': {
    '1. open': '139.6000',
    '2. high': '159.5000',
    '3. low': '134.2000',
    '4. close': '159.0500',
    '5. volume': '32743'
  },
  '2014-12-30': {
    '1. open': '137.5000',
    '2. high': '140.4000',
    '3. low': '129.7000',
    '4. close': '139.0000',
    '5. volume': '21102'
  },
  '2014-11-28': {
    '1. open': '125.0000',
    '2. high': '137.0500',
    '3. low': '121.5000',
    '4. close': '137.0500',
    '5. volume': '30402'
  },
  '2014-10-31': {
    '1. open': '125.4000',
    '2. high': '125.4000',
    '3. low': '117.2500',
    '4. close': '125.4000',
    '5. volume': '20641'
  },
  '2014-09-30': {
    '1. open': '126.2000',
    '2. high': '130.0000',
    '3. low': '123.8500',
    '4. close': '125.5000',
    '5. volume': '11387'
  },
  '2014-08-29': {
    '1. open': '127.4000',
    '2. high': '128.3500',
    '3. low': '123.3500',
    '4. close': '126.9000',
    '5. volume': '14303'
  },
  '2014-07-31': {
    '1. open': '125.0000',
    '2. high': '129.3000',
    '3. low': '124.8000',
    '4. close': '126.0000',
    '5. volume': '16584'
  },
  '2014-06-30': {
    '1. open': '127.3000',
    '2. high': '129.8000',
    '3. low': '125.5500',
    '4. close': '126.0500',
    '5. volume': '11524'
  },
  '2014-05-30': {
    '1. open': '123.9500',
    '2. high': '129.5500',
    '3. low': '123.6000',
    '4. close': '128.4000',
    '5. volume': '17237'
  },
  '2014-04-30': {
    '1. open': '119.5000',
    '2. high': '124.5000',
    '3. low': '116.7000',
    '4. close': '123.6000',
    '5. volume': '30436'
  },
  '2014-03-31': {
    '1. open': '121.8000',
    '2. high': '122.8500',
    '3. low': '114.9000',
    '4. close': '119.9500',
    '5. volume': '32375'
  },
  '2014-02-28': {
    '1. open': '122.5000',
    '2. high': '132.5500',
    '3. low': '120.4000',
    '4. close': '122.9000',
    '5. volume': '46355'
  },
  '2014-01-31': {
    '1. open': '126.1000',
    '2. high': '128.8500',
    '3. low': '119.3000',
    '4. close': '122.0000',
    '5. volume': '43006'
  },
  '2013-12-30': {
    '1. open': '124.1500',
    '2. high': '127.6000',
    '3. low': '122.3000',
    '4. close': '126.1500',
    '5. volume': '32438'
  },
  '2013-11-29': {
    '1. open': '124.9000',
    '2. high': '126.0000',
    '3. low': '121.9000',
    '4. close': '123.0500',
    '5. volume': '35744'
  },
  '2013-10-31': {
    '1. open': '126.3500',
    '2. high': '130.0500',
    '3. low': '120.8500',
    '4. close': '126.8500',
    '5. volume': '34637'
  },
  '2013-09-30': {
    '1. open': '128.8000',
    '2. high': '129.7000',
    '3. low': '124.0000',
    '4. close': '126.7000',
    '5. volume': '13885'
  },
  '2013-08-30': {
    '1. open': '126.5500',
    '2. high': '130.0000',
    '3. low': '120.9000',
    '4. close': '128.3500',
    '5. volume': '17622'
  },
  '2013-07-31': {
    '1. open': '127.8000',
    '2. high': '130.8000',
    '3. low': '124.0500',
    '4. close': '126.2500',
    '5. volume': '22749'
  },
  '2013-06-28': {
    '1. open': '130.9500',
    '2. high': '130.9500',
    '3. low': '118.4000',
    '4. close': '126.3000',
    '5. volume': '32898'
  },
  '2013-05-31': {
    '1. open': '135.8000',
    '2. high': '137.5500',
    '3. low': '131.0000',
    '4. close': '131.6000',
    '5. volume': '35363'
  },
  '2013-04-30': {
    '1. open': '124.4000',
    '2. high': '135.4000',
    '3. low': '120.5000',
    '4. close': '135.3000',
    '5. volume': '19447'
  },
  '2013-03-28': {
    '1. open': '114.6000',
    '2. high': '124.2500',
    '3. low': '113.9000',
    '4. close': '124.2500',
    '5. volume': '38164'
  },
  '2013-02-28': {
    '1. open': '109.7000',
    '2. high': '115.3000',
    '3. low': '107.7000',
    '4. close': '113.6000',
    '5. volume': '21523'
  },
  '2013-01-31': {
    '1. open': '105.4000',
    '2. high': '114.1500',
    '3. low': '103.7000',
    '4. close': '109.7000',
    '5. volume': '19553'
  },
  '2012-12-28': {
    '1. open': '104.6000',
    '2. high': '105.9500',
    '3. low': '103.2500',
    '4. close': '105.4500',
    '5. volume': '14186'
  },
  '2012-11-30': {
    '1. open': '98.7100',
    '2. high': '105.6500',
    '3. low': '95.0000',
    '4. close': '105.2500',
    '5. volume': '17245'
  },
  '2012-10-31': {
    '1. open': '96.7000',
    '2. high': '102.0000',
    '3. low': '94.8000',
    '4. close': '98.5100',
    '5. volume': '21420'
  },
  '2012-09-28': {
    '1. open': '97.5800',
    '2. high': '100.9500',
    '3. low': '96.4200',
    '4. close': '97.1000',
    '5. volume': '28764'
  },
  '2012-08-31': {
    '1. open': '97.5900',
    '2. high': '102.5000',
    '3. low': '95.6300',
    '4. close': '97.6900',
    '5. volume': '41400'
  },
  '2012-07-31': {
    '1. open': '92.4000',
    '2. high': '99.5700',
    '3. low': '89.9100',
    '4. close': '98.1500',
    '5. volume': '64183'
  },
  '2012-06-29': {
    '1. open': '91.2800',
    '2. high': '93.2700',
    '3. low': '86.9000',
    '4. close': '91.9800',
    '5. volume': '71460'
  },
  '2012-05-31': {
    '1. open': '91.7100',
    '2. high': '93.8000',
    '3. low': '88.9000',
    '4. close': '90.2100',
    '5. volume': '62673'
  },
  '2012-04-30': {
    '1. open': '92.4600',
    '2. high': '94.7000',
    '3. low': '89.0900',
    '4. close': '91.0400',
    '5. volume': '51169'
  },
  '2012-03-30': {
    '1. open': '85.8900',
    '2. high': '92.0000',
    '3. low': '85.5500',
    '4. close': '92.0000',
    '5. volume': '47200'
  },
  '2012-02-29': {
    '1. open': '81.6800',
    '2. high': '86.0000',
    '3. low': '81.0700',
    '4. close': '85.7500',
    '5. volume': '41718'
  },
  '2012-01-31': {
    '1. open': '81.0000',
    '2. high': '83.3400',
    '3. low': '79.3000',
    '4. close': '81.5100',
    '5. volume': '34725'
  },
  '2011-12-30': {
    '1. open': '79.8300',
    '2. high': '80.6600',
    '3. low': '76.8400',
    '4. close': '80.3500',
    '5. volume': '12677'
  },
  '2011-11-30': {
    '1. open': '78.5900',
    '2. high': '79.6700',
    '3. low': '74.9400',
    '4. close': '79.6700',
    '5. volume': '31548'
  },
  '2011-10-31': {
    '1. open': '71.1900',
    '2. high': '81.4300',
    '3. low': '71.0000',
    '4. close': '80.5800',
    '5. volume': '17265'
  },
  '2011-09-30': {
    '1. open': '75.8400',
    '2. high': '75.8400',
    '3. low': '69.0000',
    '4. close': '72.2000',
    '5. volume': '20090'
  },
  '2011-08-31': {
    '1. open': '84.4800',
    '2. high': '84.4800',
    '3. low': '71.2200',
    '4. close': '76.1000',
    '5. volume': '68338'
  },
  '2011-07-29': {
    '1. open': '89.2300',
    '2. high': '91.1800',
    '3. low': '82.9500',
    '4. close': '84.0500',
    '5. volume': '57225'
  },
  '2011-06-30': {
    '1. open': '87.1000',
    '2. high': '89.5000',
    '3. low': '81.5100',
    '4. close': '89.3500',
    '5. volume': '56615'
  },
  '2011-05-31': {
    '1. open': '86.3600',
    '2. high': '87.3000',
    '3. low': '84.8000',
    '4. close': '87.2600',
    '5. volume': '24491'
  },
  '2011-04-29': {
    '1. open': '82.7200',
    '2. high': '86.7400',
    '3. low': '81.8000',
    '4. close': '85.4800',
    '5. volume': '29391'
  },
  '2011-03-31': {
    '1. open': '85.0000',
    '2. high': '85.0000',
    '3. low': '77.0000',
    '4. close': '82.8000',
    '5. volume': '42460'
  },
  '2011-02-28': {
    '1. open': '85.5200',
    '2. high': '89.9000',
    '3. low': '82.4000',
    '4. close': '84.7800',
    '5. volume': '46521'
  },
  '2011-01-31': {
    '1. open': '83.6600',
    '2. high': '86.7800',
    '3. low': '82.4000',
    '4. close': '84.9800',
    '5. volume': '27199'
  },
  '2010-12-30': {
    '1. open': '82.2200',
    '2. high': '86.8000',
    '3. low': '82.0600',
    '4. close': '84.6800',
    '5. volume': '29538'
  },
  '2010-11-30': {
    '1. open': '84.7800',
    '2. high': '87.7200',
    '3. low': '82.5200',
    '4. close': '82.9600',
    '5. volume': '19811'
  },
  '2010-10-29': {
    '1. open': '82.4200',
    '2. high': '87.7000',
    '3. low': '80.2500',
    '4. close': '84.6600',
    '5. volume': '37234'
  },
  '2010-09-30': {
    '1. open': '79.1600',
    '2. high': '84.8200',
    '3. low': '78.8600',
    '4. close': '83.2600',
    '5. volume': '23516'
  },
  '2010-08-31': {
    '1. open': '80.8600',
    '2. high': '81.7200',
    '3. low': '75.3400',
    '4. close': '78.8000',
    '5. volume': '43424'
  },
  '2009-01-19': {
    '1. open': '63.3900',
    '2. high': '64.9500',
    '3. low': '53.4700',
    '4. close': '54.0300',
    '5. volume': '18902'
  },
  '2008-12-30': {
    '1. open': '63.0000',
    '2. high': '64.3900',
    '3. low': '58.5400',
    '4. close': '61.4700',
    '5. volume': '93785'
  },
  '2008-11-28': {
    '1. open': '58.5600',
    '2. high': '67.7600',
    '3. low': '58.5000',
    '4. close': '63.7100',
    '5. volume': '86043'
  },
  '2008-10-31': {
    '1. open': '69.7300',
    '2. high': '70.5400',
    '3. low': '53.8200',
    '4. close': '59.0000',
    '5. volume': '256421'
  },
  '2008-09-30': {
    '1. open': '67.5900',
    '2. high': '77.3300',
    '3. low': '67.5900',
    '4. close': '69.4800',
    '5. volume': '94041'
  },
  '2008-08-29': {
    '1. open': '71.2100',
    '2. high': '72.4900',
    '3. low': '67.1600',
    '4. close': '67.9500',
    '5. volume': '6239'
  },
  '2008-07-28': {
    '1. open': '68.5400',
    '2. high': '70.1700',
    '3. low': '61.4000',
    '4. close': '65.5600',
    '5. volume': '36735'
  },
  '2008-06-30': {
    '1. open': '78.4000',
    '2. high': '78.4000',
    '3. low': '66.5000',
    '4. close': '69.0000',
    '5. volume': '66099'
  },
  '2008-05-30': {
    '1. open': '77.2100',
    '2. high': '79.5600',
    '3. low': '76.4200',
    '4. close': '78.3100',
    '5. volume': '29417'
  },
  '2008-04-30': {
    '1. open': '80.5700',
    '2. high': '85.0000',
    '3. low': '72.6000',
    '4. close': '76.4500',
    '5. volume': '49308'
  },
  '2008-03-31': {
    '1. open': '77.7400',
    '2. high': '82.5400',
    '3. low': '75.5200',
    '4. close': '80.0400',
    '5. volume': '66728'
  },
  '2008-02-29': {
    '1. open': '83.9000',
    '2. high': '87.7000',
    '3. low': '78.0100',
    '4. close': '78.5300',
    '5. volume': '80810'
  },
  '2008-01-31': {
    '1. open': '97.5900',
    '2. high': '98.9900',
    '3. low': '75.0600',
    '4. close': '82.2600',
    '5. volume': '146487'
  }
};

// tslint:disable:max-line-length
export const lorealCompany: Company = {
  id: 1189,
  name: 'L’Oréal S.A.',
  country: Country.Frankreich,
  city: 'Paris',
  url: 'http://www.loreal.com/',
  description: 'Die L’Oréal S.A. ist ein französischer Konsumgüterkonzern mit Hauptsitz in Paris und derzeit der größte Kosmetikhersteller der Welt. Der Deutschlandsitz befindet sich in Düsseldorf, der einzige Produktionsort für eine reine deutsche Herstellung liegt in Karlsruhe.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/L%E2%80%99Or%C3%A9al',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Or%C3%A9al_logo.svg/500px-L%27Or%C3%A9al_logo.svg.png',
  products: [
    {
      id: 118910,
      name: 'Lancome',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2078-664ce-picture_original-lancome-logo.png'
    },
    {
      id: 118911,
      name: 'Giorgio Armani beauty',
      logo: 'http://loreal-dam-front-corp-en-cdn.damdy.com/ressources/afile/164205-a4309-picture_original-g-armani-logo-march18.jpg'
    },
    {
      id: 118912,
      name: 'YvesSaintLaurent',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2123-2e4b5-picture_original-yves-saint-laurent-beauty-logo.png'
    },
    {
      id: 118913,
      name: 'Biotherm',
      logo: 'https://loreal-dam-front-corp-en-cdn.damdy.com/ressources/afile/2117-5ebb6-picture_original-biotherm-logo.png'
    },
    {
      id: 118914,
      name: 'Kiehl´s',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2128-47b0c-picture_original-kiehlos-logo.png'
    },
    {
      id: 118915,
      name: 'Ralph Lauren Fragrances',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/162465-fb4de-picture_original-ralph-lauren-big-logo-2018.jpg'
    },
    {
      id: 118916,
      name: 'shu uemura',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2097-20415-picture_original-shu-uemura-logo.png'
    },
    {
      id: 118917,
      name: 'cacharel',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2119-5a47f-picture_original-cacharel-logo.png'
    },
    {
      id: 118918,
      name: 'Helena Rubinstein',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2091-bfd3e-picture_original-helena-rubinstein-logo.png'
    },
    {
      id: 118919,
      name: 'Clarisonic',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2122-e1aab-picture_original-clarisonic-logo.png'
    },
    {
      id: 118920,
      name: 'Diesel',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2125-2c73c-picture_original-diesel-logo.png'
    },
    {
      id: 118921,
      name: 'Viktor & Rolf',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2108-38193-picture_original-viktor-rolf-logo.png'
    },
    {
      id: 118922,
      name: 'Yue Sai',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/149326-41e5d-picture_original-yue-sai-logo-2017.jpg'
    },
    {
      id: 118923,
      name: 'Maison Margiela',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2089-8c238-picture_original-logo-maison-martin-margiela.png'
    },
    {
      id: 118924,
      name: 'Urban Decay',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2650-e4d61-picture_original-urban-decay-logo.png'
    },
    {
      id: 118925,
      name: 'Guy Laroche',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/119889-4d85a-picture_original-logo-guy-laroche.png'
    },
    {
      id: 118926,
      name: 'Paloma Picasso',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/119893-da02b-picture_original-logo-paloma-picasso.png'
    },
    {
      id: 118927,
      name: 'Atelier Cologne',
      logo: 'https://loreal-dam-front-corp-en-cdn.damdy.com/ressources/afile/182154-3684c-picture_original-atelier-cologne-2019-logo.gif'
    },
    {
      id: 118928,
      name: 'House 99',
      logo: 'https://loreal-dam-front-corp-en-cdn.damdy.com/ressources/afile/171640-41102-picture_original-brands-gt-house-99.png'
    },
    {
      id: 118929,
      name: 'It Cosmetics',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/149852-9f225-picture_original-it-cosmetics-logo.jpg'
    },
    {
      id: 118930,
      name: 'Proenza Schouler',
      logo: 'https://loreal-dam-front-corp-en-cdn.damdy.com/ressources/afile/127803-a145e-picture_original-proenza-schouler-logo.png'
    },
    {
      id: 118931,
      name: 'L’Oréal Paris',
      logo: 'https://loreal-dam-front-corp-en-cdn.damdy.com/ressources/afile/162597-1245a-picture_original-loreal-paris-logo-2018.png'
    },
    {
      id: 118932,
      name: 'Magic Mask',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/151181-8259d-picture_original-magic-logo-brands-profil.jpg'
    },
    {
      id: 118933,
      name: 'Garnier',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2082-1ea93-picture_original-garnier-logo.png'
    },
    {
      id: 118934,
      name: 'Maybelline',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2094-99497-picture_original-maybelline-new-york-logo.png'
    },
    {
      id: 118935,
      name: 'African Beauty Brands',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/149242-89838-picture_original-african-beauty-brands-logo-2017.jpg'
    },
    {
      id: 118936,
      name: 'Essie',
      logo: 'http://loreal-dam-front-corp-en-cdn.damdy.com/ressources/afile/164196-75f72-picture_original-logo-essie-2018.jpg'
    },
    {
      id: 118937,
      name: 'NYX',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/147808-8f723-picture_original-nyx-logo.jpg'
    },
    {
      id: 118938,
      name: 'Niely',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/163238-35334-picture_original-niely-logo-march-2018.jpg'
    },
    {
      id: 118939,
      name: 'Kerastase',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2134-29216-picture_original-kerastase-logo.png'
    },
    {
      id: 118940,
      name: 'L’Oréal Professionnel',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2136-48662-picture_original-looreal-professionnel-logo.png'
    },
    {
      id: 118941,
      name: 'Redken',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2144-f5cf8-picture_original-redken-logo.png'
    },
    {
      id: 118941,
      name: 'Matrix',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/147824-9c808-picture_original-logo-matrix.jpg'
    },
    {
      id: 118942,
      name: 'Pureology',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/2142-0cfa4-picture_original-pureology-logo.png'
    },
    {
      id: 118943,
      name: 'shu uemura art of hair',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/148984-533c0-picture_original-shu-uemura-art-of-hair-logo-2017.jpg'
    },
    {
      id: 118944,
      name: 'Mizani',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/130628-8d89e-picture_original-logo-mizani.png'
    },
    {
      id: 118945,
      name: 'Decleor',
      logo: 'https://loreal-dam-front-corp-en-cdn.damdy.com/ressources/afile/180826-220fa-picture_original-decleor.png'
    },
    {
      id: 118946,
      name: 'Carita',
      logo: 'http://loreal-dam-front-resources-corp-en-cdn.brainsonic.com/ressources/afile/121555-0d055-picture_original-carita.png'
    },
    {
      id: 118947,
      name: 'Biolage',
      logo: 'http://loreal-dam-front-corp-en-cdn.damdy.com/ressources/afile/164664-40b76-picture_original-biolage-green-logo-march-2018.jpg'
    },
    {
      id: 118948,
      name: 'Seed Phytonutrients',
      logo: 'https://loreal-dam-front-corp-en-cdn.damdy.com/ressources/afile/165731-7f764-picture_original-seed-main-logo-may-2018.jpg'
    }
  ],
  industries: [101011],
  isharesIndustryName: IsharesIndustryNames.NichtzyklischeKonsumgueter,
  securityType: SecurityType.Aktie,
  currency: Currency.EUR,
  isin: 'FR0000120321',
  wkn: '853888',
  symbol: 'LOR.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50],
  end_of_month_prices: prices,
  dividends,
  tags: ['Kosmetikunternehmen', 'Schönheitsprodukte', 'Pflegeprodukte', 'Haarpflegeprodukte', 'Kosmetika']
};
// tslint:enable:max-line-length

