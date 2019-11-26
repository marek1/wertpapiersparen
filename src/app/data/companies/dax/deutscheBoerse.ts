import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { Company } from '../../../interfaces/company';
import { SecurityType } from '../../../enums/securityType';

const deutscheBoerseDividends = [
  {year: 2018, rate: 2.70, yield: 2.57}, {year: 2017, rate: 2.45}, {year: 2016, rate: 2.35}, {
    year: 2015,
    rate: 2.25,
    yield: 2.76
  }, {year: 2014, rate: 2.10, yield: 3.55}, {year: 2013, rate: 2.10, yield: 3.49}, {year: 2012, rate: 2.10, yield: 4.54}, {
    year: 2011,
    rate: 2.30,
    yield: 5.68
  }, {year: 2010, rate: 2.10, yield: 4.04}, {year: 2009, rate: 2.10, yield: 3.62}, {year: 2008, rate: 2.10, yield: 4.13}, {
    year: 2007,
    rate: 2.10,
    yield: 1.55
  }, {year: 2006, rate: 1.70, yield: 2.44}, {year: 2005, rate: 1.05, yield: 2.43}, {year: 2004, rate: 0.35, yield: 1.58}, {
    year: 2003,
    rate: 0.28,
    yield: 1.29
  }, {year: 2002, rate: 0.22, yield: 1.15}, {year: 2001, rate: 0.18, yield: 0.83}, {year: 2000, rate: 0.15}, {year: 1999, rate: 0.40}
];

const deutscheBoersePrices = {
  '2019-11-08': {
    '1. open': '138.6500',
    '2. high': '141.2500',
    '3. low': '133.5500',
    '4. close': '135.4000',
    '5. volume': '4683920'
  },
  '2019-10-31': {
    '1. open': '143.2500',
    '2. high': '145.9500',
    '3. low': '137.3000',
    '4. close': '138.9500',
    '5. volume': '14262373'
  },
  '2019-09-30': {
    '1. open': '134.4500',
    '2. high': '143.8500',
    '3. low': '133.4000',
    '4. close': '143.4000',
    '5. volume': '20735624'
  },
  '2019-08-30': {
    '1. open': '127.0000',
    '2. high': '136.2000',
    '3. low': '125.3500',
    '4. close': '133.7500',
    '5. volume': '12337000'
  },
  '2019-07-31': {
    '1. open': '125.2000',
    '2. high': '130.7000',
    '3. low': '123.9000',
    '4. close': '126.3000',
    '5. volume': '11468049'
  },
  '2019-06-28': {
    '1. open': '123.5500',
    '2. high': '129.1500',
    '3. low': '122.7000',
    '4. close': '124.4000',
    '5. volume': '9944360'
  },
  '2019-05-31': {
    '1. open': '117.3500',
    '2. high': '126.0000',
    '3. low': '116.5000',
    '4. close': '123.7500',
    '5. volume': '11904742'
  },
  '2019-04-30': {
    '1. open': '114.7500',
    '2. high': '119.4500',
    '3. low': '112.4500',
    '4. close': '118.9000',
    '5. volume': '9930004'
  },
  '2019-03-29': {
    '1. open': '111.7500',
    '2. high': '116.1000',
    '3. low': '109.6000',
    '4. close': '114.3000',
    '5. volume': '10782187'
  },
  '2019-02-28': {
    '1. open': '116.3000',
    '2. high': '117.1500',
    '3. low': '108.5000',
    '4. close': '111.1000',
    '5. volume': '11470649'
  },
  '2019-01-31': {
    '1. open': '104.7000',
    '2. high': '117.3500',
    '3. low': '103.9500',
    '4. close': '116.2500',
    '5. volume': '11043171'
  },
  '2018-12-28': {
    '1. open': '114.5000',
    '2. high': '115.8500',
    '3. low': '102.4000',
    '4. close': '104.9500',
    '5. volume': '10857268'
  },
  '2018-11-30': {
    '1. open': '111.6500',
    '2. high': '115.9000',
    '3. low': '109.1000',
    '4. close': '112.8000',
    '5. volume': '12833902'
  },
  '2018-10-31': {
    '1. open': '114.9500',
    '2. high': '118.2000',
    '3. low': '106.6500',
    '4. close': '111.8500',
    '5. volume': '15849411'
  },
  '2018-09-28': {
    '1. open': '119.0000',
    '2. high': '119.9000',
    '3. low': '114.3000',
    '4. close': '115.4000',
    '5. volume': '11045210'
  },
  '2018-08-31': {
    '1. open': '112.8500',
    '2. high': '120.2000',
    '3. low': '111.1000',
    '4. close': '119.0000',
    '5. volume': '10607938'
  },
  '2018-07-31': {
    '1. open': '112.7000',
    '2. high': '121.1500',
    '3. low': '112.2500',
    '4. close': '112.7000',
    '5. volume': '10998537'
  },
  '2018-06-29': {
    '1. open': '115.1500',
    '2. high': '119.8000',
    '3. low': '112.2000',
    '4. close': '114.1500',
    '5. volume': '11251434'
  },
  '2018-05-31': {
    '1. open': '111.8500',
    '2. high': '117.3500',
    '3. low': '109.0500',
    '4. close': '114.4000',
    '5. volume': '10351890'
  },
  '2018-04-30': {
    '1. open': '110.0000',
    '2. high': '115.3500',
    '3. low': '108.6000',
    '4. close': '111.6500',
    '5. volume': '10338162'
  },
  '2018-03-29': {
    '1. open': '109.7500',
    '2. high': '112.6000',
    '3. low': '104.2000',
    '4. close': '110.6000',
    '5. volume': '14315086'
  },
  '2018-02-28': {
    '1. open': '104.0000',
    '2. high': '110.7500',
    '3. low': '100.9000',
    '4. close': '109.4500',
    '5. volume': '13068703'
  },
  '2018-01-31': {
    '1. open': '96.4200',
    '2. high': '104.9500',
    '3. low': '95.3000',
    '4. close': '103.3500',
    '5. volume': '10560352'
  },
  '2017-12-29': {
    '1. open': '94.9800',
    '2. high': '100.2500',
    '3. low': '93.2100',
    '4. close': '96.8000',
    '5. volume': '9422096'
  },
  '2017-11-30': {
    '1. open': '89.5200',
    '2. high': '95.6900',
    '3. low': '89.2200',
    '4. close': '95.2500',
    '5. volume': '10975107'
  },
  '2017-10-31': {
    '1. open': '91.3100',
    '2. high': '96.2600',
    '3. low': '88.6000',
    '4. close': '88.6800',
    '5. volume': '10786276'
  },
  '2017-09-29': {
    '1. open': '89.0100',
    '2. high': '95.9400',
    '3. low': '89.0000',
    '4. close': '91.7100',
    '5. volume': '10330648'
  },
  '2017-08-31': {
    '1. open': '88.0000',
    '2. high': '91.9900',
    '3. low': '87.8300',
    '4. close': '89.7900',
    '5. volume': '7203243'
  },
  '2017-07-31': {
    '1. open': '92.5300',
    '2. high': '97.0000',
    '3. low': '87.9600',
    '4. close': '88.4100',
    '5. volume': '8946368'
  },
  '2017-06-30': {
    '1. open': '92.6400',
    '2. high': '98.4200',
    '3. low': '91.3700',
    '4. close': '92.4200',
    '5. volume': '8615990'
  },
  '2017-05-31': {
    '1. open': '90.4900',
    '2. high': '94.9100',
    '3. low': '87.7900',
    '4. close': '92.4800',
    '5. volume': '9324123'
  },
  '2017-04-28': {
    '1. open': '86.5800',
    '2. high': '91.2200',
    '3. low': '84.7600',
    '4. close': '89.8500',
    '5. volume': '9908828'
  },
  '2017-03-31': {
    '1. open': '81.0700',
    '2. high': '86.7200',
    '3. low': '77.2100',
    '4. close': '86.1800',
    '5. volume': '2060159'
  },
  '2017-02-28': {
    '1. open': '82.4600',
    '2. high': '83.6300',
    '3. low': '78.3000',
    '4. close': '80.1900',
    '5. volume': '1974780'
  },
  '2017-01-31': {
    '1. open': '76.9500',
    '2. high': '83.5100',
    '3. low': '74.2700',
    '4. close': '82.3100',
    '5. volume': '2046993'
  },
  '2016-12-30': {
    '1. open': '73.1200',
    '2. high': '77.6600',
    '3. low': '69.8500',
    '4. close': '76.4200',
    '5. volume': '1768601'
  },
  '2016-11-30': {
    '1. open': '68.2000',
    '2. high': '74.4900',
    '3. low': '66.1100',
    '4. close': '73.1100',
    '5. volume': '2086842'
  },
  '2016-10-31': {
    '1. open': '68.9000',
    '2. high': '70.9400',
    '3. low': '66.4900',
    '4. close': '68.0700',
    '5. volume': '1976397'
  },
  '2016-09-30': {
    '1. open': '71.9900',
    '2. high': '75.0000',
    '3. low': '69.1100',
    '4. close': '69.4700',
    '5. volume': '2448494'
  },
  '2016-08-31': {
    '1. open': '74.6400',
    '2. high': '76.9900',
    '3. low': '71.6300',
    '4. close': '71.6300',
    '5. volume': '4748345'
  },
  '2016-07-29': {
    '1. open': '74.1000',
    '2. high': '76.9500',
    '3. low': '69.3300',
    '4. close': '75.1100',
    '5. volume': '9104955'
  },
  '2016-06-30': {
    '1. open': '78.6500',
    '2. high': '82.1400',
    '3. low': '70.2400',
    '4. close': '73.5400',
    '5. volume': '13942586'
  },
  '2016-05-31': {
    '1. open': '71.2600',
    '2. high': '80.0000',
    '3. low': '70.3200',
    '4. close': '78.7500',
    '5. volume': '11679272'
  },
  '2016-04-29': {
    '1. open': '74.0400',
    '2. high': '76.1300',
    '3. low': '70.1700',
    '4. close': '71.6900',
    '5. volume': '9574274'
  },
  '2016-03-31': {
    '1. open': '75.6600',
    '2. high': '78.5500',
    '3. low': '70.9000',
    '4. close': '74.9900',
    '5. volume': '13050897'
  },
  '2016-02-29': {
    '1. open': '78.6500',
    '2. high': '83.0000',
    '3. low': '69.8000',
    '4. close': '76.1700',
    '5. volume': '18839228'
  },
  '2016-01-29': {
    '1. open': '79.7700',
    '2. high': '79.7700',
    '3. low': '72.3600',
    '4. close': '78.6100',
    '5. volume': '14575968'
  },
  '2015-12-30': {
    '1. open': '81.4400',
    '2. high': '81.8200',
    '3. low': '73.7800',
    '4. close': '81.3900',
    '5. volume': '12023717'
  },
  '2015-11-30': {
    '1. open': '82.9200',
    '2. high': '84.8300',
    '3. low': '78.3700',
    '4. close': '81.1900',
    '5. volume': '10587838'
  },
  '2015-10-30': {
    '1. open': '80.4300',
    '2. high': '85.5000',
    '3. low': '75.3600',
    '4. close': '83.7500',
    '5. volume': '12345302'
  },
  '2015-09-30': {
    '1. open': '78.7800',
    '2. high': '81.8500',
    '3. low': '73.8800',
    '4. close': '77.0300',
    '5. volume': '13320797'
  },
  '2015-08-31': {
    '1. open': '82.2900',
    '2. high': '85.1300',
    '3. low': '70.8600',
    '4. close': '79.7900',
    '5. volume': '14575818'
  },
  '2015-07-31': {
    '1. open': '74.9200',
    '2. high': '87.4100',
    '3. low': '74.1100',
    '4. close': '82.6300',
    '5. volume': '17271412'
  },
  '2015-06-30': {
    '1. open': '73.1600',
    '2. high': '77.2400',
    '3. low': '71.0500',
    '4. close': '74.2500',
    '5. volume': '16358480'
  },
  '2015-05-29': {
    '1. open': '75.0000',
    '2. high': '76.5500',
    '3. low': '70.8100',
    '4. close': '72.9300',
    '5. volume': '13852299'
  },
  '2015-04-30': {
    '1. open': '75.6700',
    '2. high': '80.6900',
    '3. low': '72.3200',
    '4. close': '74.3100',
    '5. volume': '13185785'
  },
  '2015-03-31': {
    '1. open': '72.6100',
    '2. high': '77.3900',
    '3. low': '69.1100',
    '4. close': '76.0600',
    '5. volume': '14721526'
  },
  '2015-02-27': {
    '1. open': '68.1900',
    '2. high': '73.6900',
    '3. low': '66.7500',
    '4. close': '72.9000',
    '5. volume': '12751929'
  },
  '2015-01-30': {
    '1. open': '59.6900',
    '2. high': '68.8200',
    '3. low': '58.6500',
    '4. close': '68.0300',
    '5. volume': '16826825'
  },
  '2014-12-30': {
    '1. open': '58.3500',
    '2. high': '60.0000',
    '3. low': '55.2300',
    '4. close': '59.2200',
    '5. volume': '10569192'
  },
  '2014-11-28': {
    '1. open': '54.1600',
    '2. high': '58.9000',
    '3. low': '53.6900',
    '4. close': '58.7500',
    '5. volume': '13218329'
  },
  '2014-10-31': {
    '1. open': '53.1200',
    '2. high': '54.9900',
    '3. low': '49.9000',
    '4. close': '54.5100',
    '5. volume': '20493545'
  },
  '2014-09-30': {
    '1. open': '54.3900',
    '2. high': '56.1300',
    '3. low': '53.0100',
    '4. close': '53.3300',
    '5. volume': '12538155'
  },
  '2014-08-29': {
    '1. open': '54.3400',
    '2. high': '55.9500',
    '3. low': '50.6000',
    '4. close': '54.1100',
    '5. volume': '12170527'
  },
  '2014-07-31': {
    '1. open': '56.9800',
    '2. high': '57.1400',
    '3. low': '52.7500',
    '4. close': '54.2400',
    '5. volume': '14598861'
  },
  '2014-06-30': {
    '1. open': '56.1200',
    '2. high': '56.9900',
    '3. low': '53.9900',
    '4. close': '56.6800',
    '5. volume': '11790325'
  },
  '2014-05-30': {
    '1. open': '52.7300',
    '2. high': '56.7900',
    '3. low': '52.5900',
    '4. close': '56.0000',
    '5. volume': '14532188'
  },
  '2014-04-30': {
    '1. open': '58.1000',
    '2. high': '58.1000',
    '3. low': '52.0700',
    '4. close': '52.7900',
    '5. volume': '14166595'
  },
  '2014-03-31': {
    '1. open': '58.2600',
    '2. high': '59.2300',
    '3. low': '54.8000',
    '4. close': '57.7700',
    '5. volume': '13181008'
  },
  '2014-02-28': {
    '1. open': '57.1400',
    '2. high': '60.6900',
    '3. low': '56.1900',
    '4. close': '59.4400',
    '5. volume': '12047444'
  },
  '2014-01-31': {
    '1. open': '60.3600',
    '2. high': '63.2900',
    '3. low': '55.9600',
    '4. close': '57.0900',
    '5. volume': '16174938'
  },
  '2013-12-30': {
    '1. open': '57.1700',
    '2. high': '60.4800',
    '3. low': '53.3400',
    '4. close': '60.2000',
    '5. volume': '10019858'
  },
  '2013-11-29': {
    '1. open': '56.0000',
    '2. high': '57.1800',
    '3. low': '53.6500',
    '4. close': '56.9200',
    '5. volume': '10648465'
  },
  '2013-10-31': {
    '1. open': '55.7200',
    '2. high': '59.2900',
    '3. low': '54.5800',
    '4. close': '55.4500',
    '5. volume': '12803793'
  },
  '2013-09-30': {
    '1. open': '53.5100',
    '2. high': '56.8500',
    '3. low': '53.5000',
    '4. close': '55.6100',
    '5. volume': '10157375'
  },
  '2013-08-30': {
    '1. open': '53.4500',
    '2. high': '57.5400',
    '3. low': '52.4700',
    '4. close': '53.0500',
    '5. volume': '12144510'
  },
  '2013-07-31': {
    '1. open': '50.7800',
    '2. high': '55.2700',
    '3. low': '49.7850',
    '4. close': '53.1800',
    '5. volume': '15770753'
  },
  '2013-06-28': {
    '1. open': '49.5200',
    '2. high': '50.9000',
    '3. low': '46.9300',
    '4. close': '50.5700',
    '5. volume': '18408195'
  },
  '2013-05-31': {
    '1. open': '47.1650',
    '2. high': '51.1800',
    '3. low': '45.6450',
    '4. close': '49.7900',
    '5. volume': '19509382'
  },
  '2013-04-30': {
    '1. open': '47.5550',
    '2. high': '48.7800',
    '3. low': '44.5100',
    '4. close': '47.4000',
    '5. volume': '15179149'
  },
  '2013-03-28': {
    '1. open': '47.5000',
    '2. high': '51.5200',
    '3. low': '46.9850',
    '4. close': '47.2450',
    '5. volume': '14396203'
  },
  '2013-02-28': {
    '1. open': '48.4500',
    '2. high': '52.3000',
    '3. low': '46.0100',
    '4. close': '47.4850',
    '5. volume': '21466534'
  },
  '2013-01-31': {
    '1. open': '46.8200',
    '2. high': '49.8000',
    '3. low': '46.2250',
    '4. close': '48.4550',
    '5. volume': '16497210'
  },
  '2012-12-28': {
    '1. open': '43.4700',
    '2. high': '46.8750',
    '3. low': '43.4700',
    '4. close': '46.2100',
    '5. volume': '13960825'
  },
  '2012-11-30': {
    '1. open': '41.7600',
    '2. high': '43.9500',
    '3. low': '40.9250',
    '4. close': '43.3100',
    '5. volume': '17388009'
  },
  '2012-10-31': {
    '1. open': '43.3050',
    '2. high': '43.8600',
    '3. low': '41.0000',
    '4. close': '41.7600',
    '5. volume': '17025001'
  },
  '2012-09-28': {
    '1. open': '40.9400',
    '2. high': '45.6850',
    '3. low': '40.0500',
    '4. close': '43.0650',
    '5. volume': '20360610'
  },
  '2012-08-31': {
    '1. open': '40.6000',
    '2. high': '42.7250',
    '3. low': '39.6550',
    '4. close': '40.9300',
    '5. volume': '16364658'
  },
  '2012-07-31': {
    '1. open': '41.7300',
    '2. high': '43.7050',
    '3. low': '39.7600',
    '4. close': '40.4650',
    '5. volume': '23079070'
  },
  '2012-06-29': {
    '1. open': '38.6800',
    '2. high': '42.5300',
    '3. low': '36.2450',
    '4. close': '42.5300',
    '5. volume': '33641426'
  },
  '2012-05-31': {
    '1. open': '48.2200',
    '2. high': '48.4850',
    '3. low': '38.0800',
    '4. close': '38.5150',
    '5. volume': '28772219'
  },
  '2012-04-30': {
    '1. open': '50.4000',
    '2. high': '51.7900',
    '3. low': '45.4850',
    '4. close': '47.4300',
    '5. volume': '20393752'
  },
  '2012-03-30': {
    '1. open': '49.0750',
    '2. high': '51.5100',
    '3. low': '45.4750',
    '4. close': '50.4800',
    '5. volume': '21656432'
  },
  '2012-02-29': {
    '1. open': '45.4900',
    '2. high': '52.1000',
    '3. low': '44.8450',
    '4. close': '49.7700',
    '5. volume': '14142285'
  },
  '2012-01-31': {
    '1. open': '43.1500',
    '2. high': '46.5000',
    '3. low': '39.6550',
    '4. close': '44.8100',
    '5. volume': '1043322'
  },
  '2011-12-30': {
    '1. open': '45.2250',
    '2. high': '46.5000',
    '3. low': '40.9900',
    '4. close': '43.1200',
    '5. volume': '942250'
  },
  '2011-11-30': {
    '1. open': '39.3950',
    '2. high': '46.2550',
    '3. low': '37.5950',
    '4. close': '45.4350',
    '5. volume': '1781125'
  },
  '2011-10-31': {
    '1. open': '36.9300',
    '2. high': '43.1500',
    '3. low': '35.6450',
    '4. close': '40.1000',
    '5. volume': '2293189'
  },
  '2011-09-30': {
    '1. open': '41.4900',
    '2. high': '44.9000',
    '3. low': '37.5250',
    '4. close': '37.8950',
    '5. volume': '2454953'
  },
  '2011-08-31': {
    '1. open': '51.9000',
    '2. high': '52.8800',
    '3. low': '38.1300',
    '4. close': '41.4600',
    '5. volume': '5436827'
  },
  '2011-07-29': {
    '1. open': '52.5000',
    '2. high': '55.9400',
    '3. low': '50.7400',
    '4. close': '51.6400',
    '5. volume': '25792844'
  },
  '2011-06-30': {
    '1. open': '54.7500',
    '2. high': '55.0300',
    '3. low': '50.0100',
    '4. close': '52.4000',
    '5. volume': '25556131'
  },
  '2011-05-31': {
    '1. open': '56.7700',
    '2. high': '57.6800',
    '3. low': '53.7400',
    '4. close': '54.7800',
    '5. volume': '47222253'
  },
  '2011-04-29': {
    '1. open': '53.8500',
    '2. high': '56.3000',
    '3. low': '51.3900',
    '4. close': '56.1000',
    '5. volume': '24269211'
  },
  '2011-03-31': {
    '1. open': '55.7700',
    '2. high': '56.9900',
    '3. low': '50.5800',
    '4. close': '53.5500',
    '5. volume': '25479348'
  },
  '2011-02-28': {
    '1. open': '55.9000',
    '2. high': '62.4800',
    '3. low': '53.9900',
    '4. close': '55.6400',
    '5. volume': '40101567'
  },
  '2011-01-31': {
    '1. open': '52.4800',
    '2. high': '57.7900',
    '3. low': '51.9000',
    '4. close': '55.3600',
    '5. volume': '24177496'
  },
  '2010-12-30': {
    '1. open': '46.9000',
    '2. high': '53.0400',
    '3. low': '46.8950',
    '4. close': '51.8000',
    '5. volume': '20779064'
  },
  '2010-11-30': {
    '1. open': '50.7700',
    '2. high': '51.0000',
    '3. low': '46.3300',
    '4. close': '46.5900',
    '5. volume': '25332300'
  },
  '2010-10-29': {
    '1. open': '48.9500',
    '2. high': '53.2900',
    '3. low': '46.8050',
    '4. close': '50.5600',
    '5. volume': '25892958'
  },
  '2010-09-30': {
    '1. open': '48.3850',
    '2. high': '51.8400',
    '3. low': '47.8000',
    '4. close': '48.9450',
    '5. volume': '22256060'
  },
  '2010-08-31': {
    '1. open': '54.0000',
    '2. high': '55.4300',
    '3. low': '47.3550',
    '4. close': '48.2200',
    '5. volume': '22968950'
  },
  '2010-07-30': {
    '1. open': '49.4550',
    '2. high': '54.9600',
    '3. low': '48.4750',
    '4. close': '53.7200',
    '5. volume': '22695933'
  },
  '2010-06-30': {
    '1. open': '49.5000',
    '2. high': '54.1000',
    '3. low': '48.4600',
    '4. close': '50.0800',
    '5. volume': '29740236'
  },
  '2010-05-31': {
    '1. open': '57.8400',
    '2. high': '57.8400',
    '3. low': '49.5700',
    '4. close': '49.5900',
    '5. volume': '51781228'
  },
  '2010-04-30': {
    '1. open': '55.0000',
    '2. high': '59.0000',
    '3. low': '53.5300',
    '4. close': '58.5400',
    '5. volume': '28504405'
  },
  '2010-03-31': {
    '1. open': '51.4100',
    '2. high': '56.6200',
    '3. low': '51.1300',
    '4. close': '54.8800',
    '5. volume': '24030236'
  },
  '2010-02-26': {
    '1. open': '47.3000',
    '2. high': '51.6400',
    '3. low': '45.4500',
    '4. close': '51.0800',
    '5. volume': '34753140'
  },
  '2010-01-29': {
    '1. open': '58.3500',
    '2. high': '58.9300',
    '3. low': '47.3000',
    '4. close': '47.5500',
    '5. volume': '30905901'
  },
  '2009-12-30': {
    '1. open': '56.5700',
    '2. high': '58.3300',
    '3. low': '52.3100',
    '4. close': '58.0000',
    '5. volume': '20893661'
  },
  '2009-11-30': {
    '1. open': '55.3800',
    '2. high': '59.1500',
    '3. low': '53.8500',
    '4. close': '55.4900',
    '5. volume': '24622913'
  },
  '2009-10-30': {
    '1. open': '55.7700',
    '2. high': '62.6200',
    '3. low': '53.8700',
    '4. close': '55.1200',
    '5. volume': '33856663'
  },
  '2009-09-30': {
    '1. open': '53.4500',
    '2. high': '60.0700',
    '3. low': '51.9000',
    '4. close': '55.8500',
    '5. volume': '33469721'
  },
  '2009-08-31': {
    '1. open': '56.0000',
    '2. high': '58.3900',
    '3. low': '50.7500',
    '4. close': '53.2500',
    '5. volume': '30310374'
  },
  '2009-07-31': {
    '1. open': '54.8000',
    '2. high': '60.9600',
    '3. low': '49.2500',
    '4. close': '55.6000',
    '5. volume': '29419152'
  },
  '2009-06-30': {
    '1. open': '62.0000',
    '2. high': '65.2700',
    '3. low': '54.1400',
    '4. close': '55.2800',
    '5. volume': '31281897'
  },
  '2009-05-29': {
    '1. open': '56.0000',
    '2. high': '64.5900',
    '3. low': '52.6800',
    '4. close': '61.5400',
    '5. volume': '36391782'
  },
  '2009-04-30': {
    '1. open': '45.8000',
    '2. high': '57.6200',
    '3. low': '43.7800',
    '4. close': '56.0000',
    '5. volume': '37174541'
  },
  '2009-03-31': {
    '1. open': '36.2000',
    '2. high': '45.4400',
    '3. low': '29.5000',
    '4. close': '45.3800',
    '5. volume': '47828921'
  },
  '2009-02-27': {
    '1. open': '39.3000',
    '2. high': '42.4700',
    '3. low': '34.3700',
    '4. close': '36.3800',
    '5. volume': '35569339'
  },
  '2009-01-30': {
    '1. open': '51.6000',
    '2. high': '57.7000',
    '3. low': '37.1700',
    '4. close': '39.5000',
    '5. volume': '35265503'
  },
  '2008-12-30': {
    '1. open': '56.4000',
    '2. high': '58.7600',
    '3. low': '47.7000',
    '4. close': '50.8000',
    '5. volume': '31573365'
  },
  '2008-11-28': {
    '1. open': '62.0000',
    '2. high': '68.8900',
    '3. low': '47.0000',
    '4. close': '56.2200',
    '5. volume': '38616258'
  },
  '2008-10-31': {
    '1. open': '64.5500',
    '2. high': '71.8000',
    '3. low': '43.4000',
    '4. close': '61.9900',
    '5. volume': '75779427'
  },
  '2008-09-30': {
    '1. open': '63.8900',
    '2. high': '75.0800',
    '3. low': '56.2600',
    '4. close': '63.8700',
    '5. volume': '72272265'
  },
  '2008-08-29': {
    '1. open': '73.1000',
    '2. high': '75.0000',
    '3. low': '58.6700',
    '4. close': '64.8200',
    '5. volume': '47740047'
  },
  '2008-07-31': {
    '1. open': '71.5800',
    '2. high': '79.0800',
    '3. low': '60.9800',
    '4. close': '73.5100',
    '5. volume': '58868804'
  },
  '2008-06-30': {
    '1. open': '92.6800',
    '2. high': '93.4400',
    '3. low': '69.5600',
    '4. close': '71.6900',
    '5. volume': '63235757'
  },
  '2008-05-30': {
    '1. open': '97.0000',
    '2. high': '108.4500',
    '3. low': '90.0400',
    '4. close': '92.2300',
    '5. volume': '43223853'
  },
  '2008-04-30': {
    '1. open': '101.8000',
    '2. high': '105.3300',
    '3. low': '84.6000',
    '4. close': '94.2200',
    '5. volume': '49939258'
  },
  '2008-03-31': {
    '1. open': '102.5100',
    '2. high': '107.5400',
    '3. low': '92.4300',
    '4. close': '102.0300',
    '5. volume': '43416393'
  },
  '2008-02-29': {
    '1. open': '119.1900',
    '2. high': '124.9900',
    '3. low': '103.5700',
    '4. close': '104.8900',
    '5. volume': '44728362'
  },
  '2008-01-31': {
    '1. open': '134.6600',
    '2. high': '134.6600',
    '3. low': '96.2100',
    '4. close': '116.8500',
    '5. volume': '69555446'
  },
  '2007-12-28': {
    '1. open': '128.0100',
    '2. high': '136.3200',
    '3. low': '122.6400',
    '4. close': '135.7500',
    '5. volume': '24224442'
  },
  '2007-11-30': {
    '1. open': '111.2800',
    '2. high': '129.3100',
    '3. low': '111.0700',
    '4. close': '128.2200',
    '5. volume': '36161888'
  },
  '2007-10-31': {
    '1. open': '95.5000',
    '2. high': '111.6800',
    '3. low': '95.1100',
    '4. close': '108.9000',
    '5. volume': '41280019'
  },
  '2007-09-28': {
    '1. open': '81.8000',
    '2. high': '98.2500',
    '3. low': '75.6100',
    '4. close': '95.5000',
    '5. volume': '38932162'
  },
  '2007-08-31': {
    '1. open': '80.5000',
    '2. high': '86.5400',
    '3. low': '72.7300',
    '4. close': '81.0000',
    '5. volume': '56690105'
  },
  '2007-07-31': {
    '1. open': '82.6000',
    '2. high': '90.7700',
    '3. low': '81.0300',
    '4. close': '85.4700',
    '5. volume': '33205523'
  },
  '2007-06-29': {
    '1. open': '176.0000',
    '2. high': '177.8900',
    '3. low': '80.2800',
    '4. close': '83.7500',
    '5. volume': '33877014'
  },
  '2007-05-31': {
    '1. open': '171.9000',
    '2. high': '176.2000',
    '3. low': '162.9300',
    '4. close': '175.9200',
    '5. volume': '20761395'
  },
  '2007-04-30': {
    '1. open': '171.0000',
    '2. high': '181.5500',
    '3. low': '167.9500',
    '4. close': '172.5500',
    '5. volume': '12648874'
  },
  '2007-03-30': {
    '1. open': '151.1800',
    '2. high': '173.3300',
    '3. low': '148.6400',
    '4. close': '171.5000',
    '5. volume': '23335550'
  },
  '2007-02-28': {
    '1. open': '161.8900',
    '2. high': '169.9000',
    '3. low': '147.5100',
    '4. close': '151.3600',
    '5. volume': '17851573'
  },
  '2007-01-31': {
    '1. open': '139.8600',
    '2. high': '168.6500',
    '3. low': '137.8200',
    '4. close': '161.2100',
    '5. volume': '21888100'
  },
  '2006-12-29': {
    '1. open': '126.9300',
    '2. high': '140.8800',
    '3. low': '121.2100',
    '4. close': '139.4200',
    '5. volume': '15380335'
  },
  '2006-11-30': {
    '1. open': '126.3400',
    '2. high': '140.5900',
    '3. low': '119.6500',
    '4. close': '126.4000',
    '5. volume': '28852025'
  },
  '2006-10-31': {
    '1. open': '118.7000',
    '2. high': '131.4800',
    '3. low': '116.9400',
    '4. close': '126.3400',
    '5. volume': '15356808'
  },
  '2006-09-29': {
    '1. open': '118.5000',
    '2. high': '121.9000',
    '3. low': '114.8600',
    '4. close': '118.6000',
    '5. volume': '13664075'
  },
  '2006-08-31': {
    '1. open': '110.5500',
    '2. high': '118.9000',
    '3. low': '107.9900',
    '4. close': '118.4700',
    '5. volume': '12423970'
  },
  '2006-07-31': {
    '1. open': '105.5000',
    '2. high': '113.2000',
    '3. low': '103.5000',
    '4. close': '111.1500',
    '5. volume': '12166317'
  },
  '2006-06-30': {
    '1. open': '102.2900',
    '2. high': '109.4600',
    '3. low': '92.6600',
    '4. close': '106.5000',
    '5. volume': '19571312'
  },
  '2006-05-31': {
    '1. open': '114.7600',
    '2. high': '126.3600',
    '3. low': '94.1200',
    '4. close': '101.4200',
    '5. volume': '38358375'
  },
  '2006-04-28': {
    '1. open': '119.4800',
    '2. high': '120.3700',
    '3. low': '109.4900',
    '4. close': '114.6300',
    '5. volume': '12286310'
  },
  '2006-03-31': {
    '1. open': '105.9400',
    '2. high': '122.3500',
    '3. low': '98.3500',
    '4. close': '119.0000',
    '5. volume': '21928745'
  },
  '2006-02-28': {
    '1. open': '104.8900',
    '2. high': '108.5600',
    '3. low': '97.2900',
    '4. close': '105.5800',
    '5. volume': '17541819'
  },
  '2006-01-31': {
    '1. open': '86.8000',
    '2. high': '105.2700',
    '3. low': '84.2500',
    '4. close': '104.1000',
    '5. volume': '20122620'
  },
  '2005-12-30': {
    '1. open': '83.3000',
    '2. high': '90.1900',
    '3. low': '82.7700',
    '4. close': '86.5600',
    '5. volume': '10088931'
  },
  '2005-11-30': {
    '1. open': '78.6500',
    '2. high': '84.5400',
    '3. low': '78.0000',
    '4. close': '83.5000',
    '5. volume': '13392377'
  },
  '2005-10-31': {
    '1. open': '79.5100',
    '2. high': '81.2500',
    '3. low': '74.3300',
    '4. close': '78.5000',
    '5. volume': '15825118'
  },
  '2005-09-30': {
    '1. open': '74.7400',
    '2. high': '80.0500',
    '3. low': '73.7000',
    '4. close': '79.5000',
    '5. volume': '15230573'
  },
  '2005-08-31': {
    '1. open': '72.6000',
    '2. high': '75.2400',
    '3. low': '71.1400',
    '4. close': '74.1400',
    '5. volume': '15230983'
  },
  '2005-07-29': {
    '1. open': '64.2700',
    '2. high': '72.5000',
    '3. low': '64.2700',
    '4. close': '72.4400',
    '5. volume': '17996101'
  },
  '2005-06-30': {
    '1. open': '59.9000',
    '2. high': '64.8500',
    '3. low': '59.8900',
    '4. close': '64.7400',
    '5. volume': '15860001'
  },
  '2005-05-31': {
    '1. open': '58.5700',
    '2. high': '63.2900',
    '3. low': '56.6600',
    '4. close': '59.7500',
    '5. volume': '34390930'
  },
  '2005-04-29': {
    '1. open': '57.9000',
    '2. high': '62.3500',
    '3. low': '56.7700',
    '4. close': '58.4000',
    '5. volume': '26651657'
  },
  '2005-03-31': {
    '1. open': '55.8500',
    '2. high': '60.2100',
    '3. low': '55.5700',
    '4. close': '58.0000',
    '5. volume': '37769544'
  },
  '2005-02-28': {
    '1. open': '47.5100',
    '2. high': '57.0100',
    '3. low': '46.8500',
    '4. close': '56.1000',
    '5. volume': '33134578'
  },
  '2005-01-31': {
    '1. open': '44.1800',
    '2. high': '48.6000',
    '3. low': '43.2900',
    '4. close': '47.7000',
    '5. volume': '21533320'
  },
  '2004-12-31': {
    '1. open': '44.3200',
    '2. high': '46.4900',
    '3. low': '42.2900',
    '4. close': '44.2800',
    '5. volume': '18070966'
  },
  '2004-11-30': {
    '1. open': '39.2100',
    '2. high': '45.2300',
    '3. low': '38.7600',
    '4. close': '44.5500',
    '5. volume': '20363896'
  },
  '2004-10-29': {
    '1. open': '40.8000',
    '2. high': '42.1600',
    '3. low': '38.5500',
    '4. close': '39.1500',
    '5. volume': '13465924'
  },
  '2004-09-30': {
    '1. open': '40.1400',
    '2. high': '42.7000',
    '3. low': '39.8000',
    '4. close': '40.7200',
    '5. volume': '10873065'
  },
  '2004-08-31': {
    '1. open': '40.2000',
    '2. high': '40.4600',
    '3. low': '36.6500',
    '4. close': '39.6700',
    '5. volume': '18247328'
  },
  '2004-07-30': {
    '1. open': '42.2700',
    '2. high': '42.2700',
    '3. low': '39.8000',
    '4. close': '40.4800',
    '5. volume': '15152014'
  },
  '2004-06-30': {
    '1. open': '43.9900',
    '2. high': '44.9000',
    '3. low': '41.6900',
    '4. close': '41.7700',
    '5. volume': '14815610'
  },
  '2004-05-31': {
    '1. open': '45.6800',
    '2. high': '46.1500',
    '3. low': '42.0300',
    '4. close': '43.7500',
    '5. volume': '12049263'
  },
  '2004-04-30': {
    '1. open': '46.4600',
    '2. high': '48.2700',
    '3. low': '45.1200',
    '4. close': '45.8800',
    '5. volume': '10900760'
  },
  '2004-03-31': {
    '1. open': '46.7600',
    '2. high': '48.3800',
    '3. low': '43.4000',
    '4. close': '46.1700',
    '5. volume': '17584191'
  },
  '2004-02-27': {
    '1. open': '47.9900',
    '2. high': '51.3500',
    '3. low': '46.0000',
    '4. close': '46.2900',
    '5. volume': '20236193'
  },
  '2004-01-30': {
    '1. open': '43.3500',
    '2. high': '48.9600',
    '3. low': '43.1100',
    '4. close': '47.7500',
    '5. volume': '16652544'
  },
  '2003-12-31': {
    '1. open': '42.5000',
    '2. high': '45.0800',
    '3. low': '38.9000',
    '4. close': '43.3500',
    '5. volume': '22327041'
  },
  '2003-11-28': {
    '1. open': '47.8500',
    '2. high': '48.3800',
    '3. low': '41.2100',
    '4. close': '42.0100',
    '5. volume': '22730763'
  },
  '2003-10-31': {
    '1. open': '43.4400',
    '2. high': '48.4200',
    '3. low': '43.0000',
    '4. close': '47.8200',
    '5. volume': '13725352'
  },
  '2003-09-30': {
    '1. open': '44.4300',
    '2. high': '47.0000',
    '3. low': '43.0600',
    '4. close': '43.8000',
    '5. volume': '14883195'
  },
  '2003-08-29': {
    '1. open': '46.3800',
    '2. high': '47.1400',
    '3. low': '41.7100',
    '4. close': '44.0300',
    '5. volume': '13305260'
  },
  '2003-07-31': {
    '1. open': '45.7500',
    '2. high': '49.2000',
    '3. low': '45.6000',
    '4. close': '46.9900',
    '5. volume': '11845996'
  },
  '2003-06-30': {
    '1. open': '44.8400',
    '2. high': '46.4000',
    '3. low': '43.0600',
    '4. close': '46.1300',
    '5. volume': '12855641'
  },
  '2003-05-30': {
    '1. open': '41.5500',
    '2. high': '46.0000',
    '3. low': '40.2400',
    '4. close': '44.7500',
    '5. volume': '12486789'
  },
  '2003-04-30': {
    '1. open': '35.1000',
    '2. high': '42.0000',
    '3. low': '35.0200',
    '4. close': '42.0000',
    '5. volume': '11129523'
  },
  '2003-03-31': {
    '1. open': '36.1900',
    '2. high': '37.3600',
    '3. low': '31.6100',
    '4. close': '35.3300',
    '5. volume': '12637785'
  },
  '2003-02-28': {
    '1. open': '34.5700',
    '2. high': '36.8100',
    '3. low': '33.0000',
    '4. close': '35.9200',
    '5. volume': '8385783'
  },
  '2003-01-31': {
    '1. open': '38.1600',
    '2. high': '38.5500',
    '3. low': '32.7500',
    '4. close': '34.6700',
    '5. volume': '13190734'
  },
  '2002-12-31': {
    '1. open': '40.0800',
    '2. high': '40.2000',
    '3. low': '36.0000',
    '4. close': '38.1600',
    '5. volume': '9968729'
  },
  '2002-11-29': {
    '1. open': '36.7600',
    '2. high': '41.3500',
    '3. low': '35.9800',
    '4. close': '40.1000',
    '5. volume': '10899456'
  },
  '2002-10-31': {
    '1. open': '33.8000',
    '2. high': '38.4000',
    '3. low': '31.5300',
    '4. close': '36.4300',
    '5. volume': '11448734'
  },
  '2002-09-30': {
    '1. open': '38.2000',
    '2. high': '39.6300',
    '3. low': '32.7100',
    '4. close': '33.8000',
    '5. volume': '3539932'
  },
  '2002-08-30': {
    '1. open': '38.1800',
    '2. high': '39.7500',
    '3. low': '37.0300',
    '4. close': '38.5000',
    '5. volume': '2836761'
  },
  '2002-07-31': {
    '1. open': '43.1400',
    '2. high': '44.3500',
    '3. low': '33.8000',
    '4. close': '37.7000',
    '5. volume': '4033558'
  },
  '2002-06-28': {
    '1. open': '49.3500',
    '2. high': '49.3500',
    '3. low': '40.4500',
    '4. close': '43.1000',
    '5. volume': '6827166'
  },
  '2002-05-31': {
    '1. open': '49.3000',
    '2. high': '51.2000',
    '3. low': '47.0000',
    '4. close': '49.1000',
    '5. volume': '3011915'
  },
  '2002-04-30': {
    '1. open': '46.5000',
    '2. high': '50.2500',
    '3. low': '46.5000',
    '4. close': '49.4000',
    '5. volume': '2445589'
  },
  '2002-03-29': {
    '1. open': '46.3000',
    '2. high': '51.5100',
    '3. low': '44.6100',
    '4. close': '46.5000',
    '5. volume': '3024021'
  },
  '2002-02-28': {
    '1. open': '41.6900',
    '2. high': '46.7000',
    '3. low': '41.5400',
    '4. close': '46.7000',
    '5. volume': '2667874'
  },
  '2002-01-31': {
    '1. open': '42.5500',
    '2. high': '44.9200',
    '3. low': '40.4500',
    '4. close': '41.6900',
    '5. volume': '1586203'
  },
  '2001-12-28': {
    '1. open': '40.0000',
    '2. high': '44.9300',
    '3. low': '39.0400',
    '4. close': '43.2100',
    '5. volume': '2271940'
  },
  '2001-11-30': {
    '1. open': '38.9100',
    '2. high': '42.0000',
    '3. low': '37.8600',
    '4. close': '39.7500',
    '5. volume': '2062355'
  },
  '2001-10-31': {
    '1. open': '38.5000',
    '2. high': '42.4000',
    '3. low': '36.0800',
    '4. close': '38.4500',
    '5. volume': '2317889'
  },
  '2001-09-28': {
    '1. open': '39.8400',
    '2. high': '40.0000',
    '3. low': '30.0000',
    '4. close': '38.7200',
    '5. volume': '2207169'
  },
  '2001-08-31': {
    '1. open': '38.3800',
    '2. high': '40.5500',
    '3. low': '37.5900',
    '4. close': '39.1100',
    '5. volume': '1738994'
  },
  '2001-07-31': {
    '1. open': '41.8000',
    '2. high': '41.8000',
    '3. low': '36.5500',
    '4. close': '38.8400',
    '5. volume': '2422261'
  },
  '2001-06-29': {
    '1. open': '40.0000',
    '2. high': '43.4500',
    '3. low': '38.5000',
    '4. close': '41.7000',
    '5. volume': '2710634'
  },
  '2001-05-31': {
    '1. open': '36.5000',
    '2. high': '40.5500',
    '3. low': '36.3500',
    '4. close': '40.1500',
    '5. volume': '5516020'
  },
  '2001-04-30': {
    '1. open': '30.5000',
    '2. high': '37.0000',
    '3. low': '30.5000',
    '4. close': '36.1500',
    '5. volume': '2228760'
  },
  '2001-03-30': {
    '1. open': '37.9500',
    '2. high': '38.3850',
    '3. low': '29.7700',
    '4. close': '31.8000',
    '5. volume': '8450250'
  }
};

// tslint:disable:max-line-length
export const deutschBoerseCompany: Company = {
  id: 1010,
  name: 'Deutsche Börse AG',
  country: Country.Deutschland,
  city: 'Frankfurt',
  url: 'https://www.deutsche-boerse.com/dbg-de/',
  description: 'Die Deutsche Börse AG ist eine deutsche Aktiengesellschaft mit Sitz in Frankfurt am Main. Kerngeschäft ist die Entwicklung und der Betrieb von Handelsplattformen, Teilnehmernetzwerken und Abwicklungssystemen für Börsen. ',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Deutsche_B%C3%B6rse',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/8/87/Deutsche_B%C3%B6rse_Group_Logo.svg/500px-Deutsche_B%C3%B6rse_Group_Logo.svg.png',
  products: [
    {
      id: 101010,
      name: 'Börse Frankfurt',
      logo: 'https://www.deutsche-boerse.com/resource/blob/1597396/5488932901d7495eef60ae4b8a101e92/data/boerse-frankfurt.jpg'
    },
    {
      id: 101011,
      name: 'Xetra',
      logo: 'https://www.deutsche-boerse.com/resource/blob/1597408/3e98c9122af9d2b7885bc5fef5484c73/data/xetra.jpg'
    },
    {
      id: 101012,
      name: 'Eurex',
      logo: 'https://www.deutsche-boerse.com/resource/blob/1597402/18c1434414f2306965211d5aa04f99a2/data/eurex.jpg'
    },
    {
      id: 101013,
      name: 'Clearstream',
      logo: 'https://www.deutsche-boerse.com/resource/blob/1597398/008750264a71be93865988219f46941c/data/clearstream.jpg'
    },
    {
      id: 101014,
      name: 'EEX',
      logo: 'https://www.deutsche-boerse.com/resource/blob/1597400/9d7362a908ee0cac0198ed58ed3c58a0/data/eex.jpg'
    }
  ],
  industries: [1411],
  currency: Currency.EUR,
  securityType: SecurityType.Namensaktie,
  isin: 'DE0005810055',
  wkn: '581005',
  symbol: 'DB1.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.DAX, Indices.EuroStoxx50],
  end_of_month_prices: deutscheBoersePrices,
  dividends: deutscheBoerseDividends,
  tags: ['Börse', 'Börsenplatz']
};
// tslint:enable:max-line-length
