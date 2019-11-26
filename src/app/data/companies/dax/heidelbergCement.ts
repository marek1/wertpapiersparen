import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { Company } from '../../../interfaces/company';
import { SecurityType } from '../../../enums/securityType';

const heidelbergCementDividends = [
  {year: 2018, rate: 2.10, yield: 3.95}, {year: 2017, rate: 1.90}, {year: 2016, rate: 1.60}, {
    year: 2015,
    rate: 1.30,
    yield: 1.72
  }, {year: 2014, rate: 0.75, yield: 1.28}, {year: 2013, rate: 0.60, yield: 1.09}, {year: 2012, rate: 0.47, yield: 1.03}, {
    year: 2011,
    rate: 0.35,
    yield: 1.07
  }, {year: 2010, rate: 0.25, yield: 0.53}, {year: 2009, rate: 0.12, yield: 0.25}, {year: 2008, rate: 0.12, yield: 0.38}, {
    year: 2007,
    rate: 1.30,
    yield: 1.23
  }, {year: 2006, rate: 1.25, yield: 1.13}, {year: 2005, rate: 1.15, yield: 1.53}, {year: 2004, rate: 0.55, yield: 1.24}, {
    year: 2003,
    rate: 1.15,
    yield: 3.43
  }, {year: 2002, rate: 0.00, yield: 0.00}, {year: 2001, rate: 1.15, yield: 2.13}, {year: 2000, rate: 1.15, yield: 2.37}, {
    year: 1999,
    rate: 1.05,
    yield: 1.35
  }
];

const heidelbergCementPrices = {
  '2019-11-08': {
    '1. open': '66.8400',
    '2. high': '68.6000',
    '3. low': '63.4200',
    '4. close': '65.1000',
    '5. volume': '5681063'
  },
  '2019-10-31': {
    '1. open': '66.8000',
    '2. high': '67.3800',
    '3. low': '59.8600',
    '4. close': '66.6200',
    '5. volume': '17152494'
  },
  '2019-09-30': {
    '1. open': '62.5600',
    '2. high': '69.8400',
    '3. low': '61.5400',
    '4. close': '66.3200',
    '5. volume': '16950722'
  },
  '2019-08-30': {
    '1. open': '64.9800',
    '2. high': '65.0400',
    '3. low': '58.2000',
    '4. close': '63.0400',
    '5. volume': '18083452'
  },
  '2019-07-31': {
    '1. open': '72.6800',
    '2. high': '73.0200',
    '3. low': '65.2600',
    '4. close': '65.6200',
    '5. volume': '15941418'
  },
  '2019-06-28': {
    '1. open': '66.2600',
    '2. high': '71.9800',
    '3. low': '65.8000',
    '4. close': '71.1600',
    '5. volume': '13830009'
  },
  '2019-05-31': {
    '1. open': '72.4800',
    '2. high': '73.3200',
    '3. low': '65.9200',
    '4. close': '66.5600',
    '5. volume': '17439154'
  },
  '2019-04-30': {
    '1. open': '64.7600',
    '2. high': '73.5200',
    '3. low': '64.6200',
    '4. close': '72.0000',
    '5. volume': '17691669'
  },
  '2019-03-29': {
    '1. open': '65.3400',
    '2. high': '66.2200',
    '3. low': '62.8000',
    '4. close': '64.1600',
    '5. volume': '16319325'
  },
  '2019-02-28': {
    '1. open': '60.5200',
    '2. high': '65.6200',
    '3. low': '58.1200',
    '4. close': '64.6400',
    '5. volume': '18110465'
  },
  '2019-01-31': {
    '1. open': '53.2600',
    '2. high': '61.8000',
    '3. low': '52.1200',
    '4. close': '60.3600',
    '5. volume': '17569172'
  },
  '2018-12-28': {
    '1. open': '59.5000',
    '2. high': '61.2000',
    '3. low': '51.8400',
    '4. close': '53.3800',
    '5. volume': '16618605'
  },
  '2018-11-30': {
    '1. open': '60.0000',
    '2. high': '65.0000',
    '3. low': '57.7600',
    '4. close': '58.7000',
    '5. volume': '17771492'
  },
  '2018-10-31': {
    '1. open': '67.4800',
    '2. high': '68.2600',
    '3. low': '54.8800',
    '4. close': '60.0000',
    '5. volume': '25021985'
  },
  '2018-09-28': {
    '1. open': '68.3400',
    '2. high': '70.5400',
    '3. low': '64.7200',
    '4. close': '67.3200',
    '5. volume': '16339601'
  },
  '2018-08-31': {
    '1. open': '72.6000',
    '2. high': '73.0000',
    '3. low': '67.9400',
    '4. close': '68.5800',
    '5. volume': '13705300'
  },
  '2018-07-31': {
    '1. open': '71.2000',
    '2. high': '74.1400',
    '3. low': '68.9800',
    '4. close': '72.6200',
    '5. volume': '14554116'
  },
  '2018-06-29': {
    '1. open': '76.0600',
    '2. high': '79.7200',
    '3. low': '71.5000',
    '4. close': '72.0800',
    '5. volume': '16153547'
  },
  '2018-05-31': {
    '1. open': '80.4200',
    '2. high': '85.2600',
    '3. low': '74.5800',
    '4. close': '75.8000',
    '5. volume': '17368482'
  },
  '2018-04-30': {
    '1. open': '78.9400',
    '2. high': '82.0800',
    '3. low': '77.6400',
    '4. close': '81.2600',
    '5. volume': '11706589'
  },
  '2018-03-29': {
    '1. open': '82.7000',
    '2. high': '83.9600',
    '3. low': '77.8000',
    '4. close': '79.7800',
    '5. volume': '13382905'
  },
  '2018-02-28': {
    '1. open': '87.7000',
    '2. high': '87.9600',
    '3. low': '80.7600',
    '4. close': '82.7400',
    '5. volume': '15572279'
  },
  '2018-01-31': {
    '1. open': '90.5600',
    '2. high': '96.1600',
    '3. low': '87.2200',
    '4. close': '87.2800',
    '5. volume': '14389938'
  },
  '2017-12-29': {
    '1. open': '89.4800',
    '2. high': '91.7200',
    '3. low': '87.8600',
    '4. close': '90.2500',
    '5. volume': '9956596'
  },
  '2017-11-30': {
    '1. open': '88.3900',
    '2. high': '94.0900',
    '3. low': '84.7500',
    '4. close': '89.3700',
    '5. volume': '18932899'
  },
  '2017-10-31': {
    '1. open': '87.2000',
    '2. high': '88.0400',
    '3. low': '82.4800',
    '4. close': '87.4700',
    '5. volume': '10785039'
  },
  '2017-09-29': {
    '1. open': '81.0400',
    '2. high': '87.0900',
    '3. low': '80.3200',
    '4. close': '86.9700',
    '5. volume': '12009597'
  },
  '2017-08-31': {
    '1. open': '82.1500',
    '2. high': '85.7900',
    '3. low': '76.9400',
    '4. close': '80.6500',
    '5. volume': '14478454'
  },
  '2017-07-31': {
    '1. open': '85.4200',
    '2. high': '88.2800',
    '3. low': '82.6800',
    '4. close': '83.8200',
    '5. volume': '12940253'
  },
  '2017-06-30': {
    '1. open': '82.9000',
    '2. high': '87.5700',
    '3. low': '81.4000',
    '4. close': '84.6500',
    '5. volume': '13938654'
  },
  '2017-05-31': {
    '1. open': '85.4200',
    '2. high': '90.1200',
    '3. low': '80.9000',
    '4. close': '82.8800',
    '5. volume': '15373796'
  },
  '2017-04-28': {
    '1. open': '88.2400',
    '2. high': '89.0400',
    '3. low': '83.6000',
    '4. close': '85.0000',
    '5. volume': '9114359'
  },
  '2017-03-31': {
    '1. open': '88.7500',
    '2. high': '91.9900',
    '3. low': '85.4400',
    '4. close': '87.7600',
    '5. volume': '13396367'
  },
  '2017-02-28': {
    '1. open': '89.7700',
    '2. high': '91.0700',
    '3. low': '84.2700',
    '4. close': '88.2100',
    '5. volume': '13608888'
  },
  '2017-01-31': {
    '1. open': '88.5600',
    '2. high': '92.3200',
    '3. low': '84.0300',
    '4. close': '89.1400',
    '5. volume': '11487254'
  },
  '2016-12-30': {
    '1. open': '84.1200',
    '2. high': '88.9800',
    '3. low': '82.5000',
    '4. close': '88.6300',
    '5. volume': '10431091'
  },
  '2016-11-30': {
    '1. open': '86.4000',
    '2. high': '94.5900',
    '3. low': '82.3900',
    '4. close': '84.6100',
    '5. volume': '16661400'
  },
  '2016-10-31': {
    '1. open': '84.0200',
    '2. high': '87.1700',
    '3. low': '82.9700',
    '4. close': '86.1600',
    '5. volume': '9401924'
  },
  '2016-09-30': {
    '1. open': '83.4200',
    '2. high': '85.4100',
    '3. low': '77.4700',
    '4. close': '84.0900',
    '5. volume': '13714541'
  },
  '2016-08-31': {
    '1. open': '76.2000',
    '2. high': '84.0800',
    '3. low': '72.7800',
    '4. close': '83.2700',
    '5. volume': '10727713'
  },
  '2016-07-29': {
    '1. open': '67.6200',
    '2. high': '76.6600',
    '3. low': '65.1200',
    '4. close': '75.7400',
    '5. volume': '11140915'
  },
  '2016-06-30': {
    '1. open': '77.0000',
    '2. high': '77.1300',
    '3. low': '65.7300',
    '4. close': '67.4700',
    '5. volume': '13403671'
  },
  '2016-05-31': {
    '1. open': '77.6700',
    '2. high': '79.9000',
    '3. low': '73.4900',
    '4. close': '76.8900',
    '5. volume': '11609620'
  },
  '2016-04-29': {
    '1. open': '74.1500',
    '2. high': '79.9900',
    '3. low': '71.6900',
    '4. close': '77.5900',
    '5. volume': '11978595'
  },
  '2016-03-31': {
    '1. open': '67.6700',
    '2. high': '76.0600',
    '3. low': '67.5200',
    '4. close': '75.2500',
    '5. volume': '13544821'
  },
  '2016-02-29': {
    '1. open': '68.2000',
    '2. high': '69.8400',
    '3. low': '58.1700',
    '4. close': '67.7100',
    '5. volume': '16837307'
  },
  '2016-01-29': {
    '1. open': '74.3500',
    '2. high': '75.6100',
    '3. low': '62.7600',
    '4. close': '67.5900',
    '5. volume': '15421746'
  },
  '2015-12-30': {
    '1. open': '75.8900',
    '2. high': '76.5200',
    '3. low': '69.8000',
    '4. close': '75.6200',
    '5. volume': '10947447'
  },
  '2015-11-30': {
    '1. open': '67.0100',
    '2. high': '75.7200',
    '3. low': '67.0100',
    '4. close': '75.3600',
    '5. volume': '12366445'
  },
  '2015-10-30': {
    '1. open': '64.2200',
    '2. high': '68.7600',
    '3. low': '60.6900',
    '4. close': '67.7800',
    '5. volume': '13108481'
  },
  '2015-09-30': {
    '1. open': '66.3300',
    '2. high': '68.3900',
    '3. low': '59.4000',
    '4. close': '61.2600',
    '5. volume': '13975680'
  },
  '2015-08-31': {
    '1. open': '69.3200',
    '2. high': '73.0300',
    '3. low': '62.3000',
    '4. close': '67.3600',
    '5. volume': '16634262'
  },
  '2015-07-31': {
    '1. open': '71.8200',
    '2. high': '73.9900',
    '3. low': '64.7000',
    '4. close': '69.4500',
    '5. volume': '19702606'
  },
  '2015-06-30': {
    '1. open': '74.9000',
    '2. high': '75.3600',
    '3. low': '69.3100',
    '4. close': '71.1300',
    '5. volume': '15828081'
  },
  '2015-05-29': {
    '1. open': '69.3800',
    '2. high': '77.1800',
    '3. low': '68.7100',
    '4. close': '73.8600',
    '5. volume': '12498581'
  },
  '2015-04-30': {
    '1. open': '73.4100',
    '2. high': '76.6900',
    '3. low': '68.1000',
    '4. close': '68.8500',
    '5. volume': '11758888'
  },
  '2015-03-31': {
    '1. open': '71.2400',
    '2. high': '74.9000',
    '3. low': '67.4400',
    '4. close': '73.8100',
    '5. volume': '15633143'
  },
  '2015-02-27': {
    '1. open': '65.3500',
    '2. high': '71.4800',
    '3. low': '64.4800',
    '4. close': '71.1300',
    '5. volume': '13893299'
  },
  '2015-01-30': {
    '1. open': '59.0000',
    '2. high': '65.9900',
    '3. low': '55.8200',
    '4. close': '65.2600',
    '5. volume': '18988527'
  },
  '2014-12-30': {
    '1. open': '60.6100',
    '2. high': '61.6300',
    '3. low': '54.5000',
    '4. close': '58.8100',
    '5. volume': '11971092'
  },
  '2014-11-28': {
    '1. open': '54.7500',
    '2. high': '61.4300',
    '3. low': '53.7500',
    '4. close': '60.9700',
    '5. volume': '13958781'
  },
  '2014-10-31': {
    '1. open': '51.9600',
    '2. high': '54.5900',
    '3. low': '48.3200',
    '4. close': '54.3200',
    '5. volume': '22288235'
  },
  '2014-09-30': {
    '1. open': '57.5200',
    '2. high': '59.4200',
    '3. low': '51.2900',
    '4. close': '52.3200',
    '5. volume': '15713432'
  },
  '2014-08-29': {
    '1. open': '55.2500',
    '2. high': '58.7000',
    '3. low': '51.9500',
    '4. close': '57.4200',
    '5. volume': '15435357'
  },
  '2014-07-31': {
    '1. open': '62.5300',
    '2. high': '65.3300',
    '3. low': '55.4100',
    '4. close': '55.6300',
    '5. volume': '15789950'
  },
  '2014-06-30': {
    '1. open': '63.4300',
    '2. high': '65.2600',
    '3. low': '61.0600',
    '4. close': '62.3300',
    '5. volume': '11770995'
  },
  '2014-05-30': {
    '1. open': '62.6700',
    '2. high': '63.9800',
    '3. low': '59.6600',
    '4. close': '63.1800',
    '5. volume': '13604224'
  },
  '2014-04-30': {
    '1. open': '62.5600',
    '2. high': '68.6600',
    '3. low': '61.0200',
    '4. close': '62.5200',
    '5. volume': '17935121'
  },
  '2014-03-31': {
    '1. open': '58.3200',
    '2. high': '63.9100',
    '3. low': '57.8900',
    '4. close': '62.2100',
    '5. volume': '20228203'
  },
  '2014-02-28': {
    '1. open': '55.4200',
    '2. high': '60.0300',
    '3. low': '53.8400',
    '4. close': '59.7200',
    '5. volume': '15279793'
  },
  '2014-01-31': {
    '1. open': '55.5600',
    '2. high': '60.1300',
    '3. low': '54.7300',
    '4. close': '55.2500',
    '5. volume': '18775949'
  },
  '2013-12-30': {
    '1. open': '57.7300',
    '2. high': '57.9000',
    '3. low': '53.4100',
    '4. close': '55.1500',
    '5. volume': '12725088'
  },
  '2013-11-29': {
    '1. open': '58.0000',
    '2. high': '59.8000',
    '3. low': '54.7500',
    '4. close': '57.5700',
    '5. volume': '15747613'
  },
  '2013-10-31': {
    '1. open': '57.4000',
    '2. high': '60.3000',
    '3. low': '55.1100',
    '4. close': '58.0600',
    '5. volume': '15559207'
  },
  '2013-09-30': {
    '1. open': '53.1400',
    '2. high': '59.8400',
    '3. low': '51.6100',
    '4. close': '57.0100',
    '5. volume': '14775045'
  },
  '2013-08-30': {
    '1. open': '57.6900',
    '2. high': '59.7500',
    '3. low': '51.7600',
    '4. close': '52.5500',
    '5. volume': '14713513'
  },
  '2013-07-31': {
    '1. open': '51.8900',
    '2. high': '58.7800',
    '3. low': '49.5000',
    '4. close': '57.7400',
    '5. volume': '17272858'
  },
  '2013-06-28': {
    '1. open': '58.0500',
    '2. high': '59.3300',
    '3. low': '49.3900',
    '4. close': '51.6700',
    '5. volume': '19039489'
  },
  '2013-05-31': {
    '1. open': '53.9900',
    '2. high': '60.8900',
    '3. low': '52.9500',
    '4. close': '58.4900',
    '5. volume': '14676729'
  },
  '2013-04-30': {
    '1. open': '56.3200',
    '2. high': '57.9500',
    '3. low': '49.8500',
    '4. close': '54.6700',
    '5. volume': '19492930'
  },
  '2013-03-28': {
    '1. open': '52.8000',
    '2. high': '58.4200',
    '3. low': '51.9500',
    '4. close': '56.0600',
    '5. volume': '18099839'
  },
  '2013-02-28': {
    '1. open': '46.6700',
    '2. high': '52.8800',
    '3. low': '45.6550',
    '4. close': '52.8200',
    '5. volume': '19238591'
  },
  '2013-01-31': {
    '1. open': '46.8500',
    '2. high': '47.9650',
    '3. low': '44.7900',
    '4. close': '46.3900',
    '5. volume': '16039093'
  },
  '2012-12-28': {
    '1. open': '41.8950',
    '2. high': '46.8300',
    '3. low': '41.8000',
    '4. close': '45.8300',
    '5. volume': '12719068'
  },
  '2012-11-30': {
    '1. open': '40.8050',
    '2. high': '43.7700',
    '3. low': '38.4100',
    '4. close': '41.7850',
    '5. volume': '18628347'
  },
  '2012-10-31': {
    '1. open': '40.7850',
    '2. high': '42.4850',
    '3. low': '39.5700',
    '4. close': '40.8900',
    '5. volume': '13535490'
  },
  '2012-09-28': {
    '1. open': '40.1550',
    '2. high': '44.3850',
    '3. low': '39.3600',
    '4. close': '40.7700',
    '5. volume': '15246519'
  },
  '2012-08-31': {
    '1. open': '37.8150',
    '2. high': '41.7900',
    '3. low': '37.3250',
    '4. close': '40.1700',
    '5. volume': '15914792'
  },
  '2012-07-31': {
    '1. open': '37.8000',
    '2. high': '39.3500',
    '3. low': '35.2650',
    '4. close': '37.8600',
    '5. volume': '20262363'
  },
  '2012-06-29': {
    '1. open': '35.2350',
    '2. high': '37.8150',
    '3. low': '32.1150',
    '4. close': '37.7650',
    '5. volume': '21357739'
  },
  '2012-05-31': {
    '1. open': '42.1000',
    '2. high': '43.1000',
    '3. low': '34.3800',
    '4. close': '35.0800',
    '5. volume': '24969970'
  },
  '2012-04-30': {
    '1. open': '45.9200',
    '2. high': '46.1800',
    '3. low': '39.9550',
    '4. close': '41.5350',
    '5. volume': '21418576'
  },
  '2012-03-30': {
    '1. open': '40.2000',
    '2. high': '46.6800',
    '3. low': '38.7350',
    '4. close': '45.3850',
    '5. volume': '27560838'
  },
  '2012-02-29': {
    '1. open': '37.9150',
    '2. high': '41.2950',
    '3. low': '36.1650',
    '4. close': '40.4100',
    '5. volume': '20896268'
  },
  '2012-01-31': {
    '1. open': '32.5450',
    '2. high': '39.5750',
    '3. low': '32.2400',
    '4. close': '37.5750',
    '5. volume': '26802773'
  },
  '2011-12-30': {
    '1. open': '31.2850',
    '2. high': '33.0000',
    '3. low': '29.2400',
    '4. close': '32.7900',
    '5. volume': '17573498'
  },
  '2011-11-30': {
    '1. open': '31.9850',
    '2. high': '34.9750',
    '3. low': '26.1250',
    '4. close': '31.2000',
    '5. volume': '29546358'
  },
  '2011-10-31': {
    '1. open': '26.5200',
    '2. high': '35.8200',
    '3. low': '23.9150',
    '4. close': '32.9800',
    '5. volume': '31248379'
  },
  '2011-09-30': {
    '1. open': '30.1350',
    '2. high': '30.3500',
    '3. low': '24.7100',
    '4. close': '27.4050',
    '5. volume': '29966182'
  },
  '2011-08-31': {
    '1. open': '39.4000',
    '2. high': '39.4700',
    '3. low': '26.9650',
    '4. close': '29.9300',
    '5. volume': '41591999'
  },
  '2011-07-29': {
    '1. open': '44.1400',
    '2. high': '45.1300',
    '3. low': '37.5000',
    '4. close': '38.4500',
    '5. volume': '20198510'
  },
  '2011-06-30': {
    '1. open': '48.5800',
    '2. high': '48.7200',
    '3. low': '42.4050',
    '4. close': '44.0250',
    '5. volume': '18908203'
  },
  '2011-05-31': {
    '1. open': '52.0000',
    '2. high': '52.8100',
    '3. low': '46.7350',
    '4. close': '48.3300',
    '5. volume': '21657687'
  },
  '2011-04-29': {
    '1. open': '49.5900',
    '2. high': '52.1800',
    '3. low': '48.2950',
    '4. close': '51.6300',
    '5. volume': '15068464'
  },
  '2011-03-31': {
    '1. open': '51.2200',
    '2. high': '51.8900',
    '3. low': '44.4850',
    '4. close': '49.2850',
    '5. volume': '25152811'
  },
  '2011-02-28': {
    '1. open': '47.7700',
    '2. high': '54.0000',
    '3. low': '45.6500',
    '4. close': '50.7300',
    '5. volume': '25309456'
  },
  '2011-01-31': {
    '1. open': '47.2750',
    '2. high': '49.3050',
    '3. low': '44.4150',
    '4. close': '47.7300',
    '5. volume': '23267454'
  },
  '2010-12-30': {
    '1. open': '42.1050',
    '2. high': '48.5900',
    '3. low': '42.1050',
    '4. close': '46.9000',
    '5. volume': '17215133'
  },
  '2010-11-30': {
    '1. open': '37.8000',
    '2. high': '43.5200',
    '3. low': '36.1300',
    '4. close': '41.8550',
    '5. volume': '29520203'
  },
  '2010-10-29': {
    '1. open': '35.4900',
    '2. high': '38.1950',
    '3. low': '34.2500',
    '4. close': '37.5850',
    '5. volume': '23589743'
  },
  '2010-09-30': {
    '1. open': '31.7550',
    '2. high': '36.6900',
    '3. low': '31.4300',
    '4. close': '35.3500',
    '5. volume': '24129050'
  },
  '2010-08-31': {
    '1. open': '39.4000',
    '2. high': '40.4000',
    '3. low': '30.8600',
    '4. close': '31.6500',
    '5. volume': '30954288'
  },
  '2010-07-30': {
    '1. open': '38.5000',
    '2. high': '41.2000',
    '3. low': '35.0050',
    '4. close': '38.6450',
    '5. volume': '28894146'
  },
  '2010-06-30': {
    '1. open': '43.9800',
    '2. high': '46.2700',
    '3. low': '38.9050',
    '4. close': '39.1700',
    '5. volume': '29851097'
  },
  '2010-05-31': {
    '1. open': '46.2100',
    '2. high': '49.1250',
    '3. low': '39.4400',
    '4. close': '44.1350',
    '5. volume': '34394509'
  },
  '2010-04-30': {
    '1. open': '41.8900',
    '2. high': '50.5500',
    '3. low': '41.5000',
    '4. close': '46.7650',
    '5. volume': '25727126'
  },
  '2010-03-31': {
    '1. open': '37.9300',
    '2. high': '44.1500',
    '3. low': '37.4200',
    '4. close': '41.3000',
    '5. volume': '22207167'
  },
  '2010-02-26': {
    '1. open': '43.2300',
    '2. high': '45.1700',
    '3. low': '36.7100',
    '4. close': '37.4250',
    '5. volume': '30104093'
  },
  '2010-01-29': {
    '1. open': '47.6500',
    '2. high': '52.2000',
    '3. low': '42.3150',
    '4. close': '43.7700',
    '5. volume': '24350145'
  },
  '2009-12-30': {
    '1. open': '44.7500',
    '2. high': '49.1800',
    '3. low': '44.7400',
    '4. close': '48.2300',
    '5. volume': '13258252'
  },
  '2009-11-30': {
    '1. open': '41.4000',
    '2. high': '47.9200',
    '3. low': '39.8900',
    '4. close': '44.2000',
    '5. volume': '21875099'
  },
  '2009-10-30': {
    '1. open': '44.5000',
    '2. high': '49.3700',
    '3. low': '38.2200',
    '4. close': '40.7300',
    '5. volume': '43657279'
  },
  '2009-09-30': {
    '1. open': '37.7212',
    '2. high': '45.9572',
    '3. low': '34.1705',
    '4. close': '44.2400',
    '5. volume': '41868787'
  },
  '2009-08-31': {
    '1. open': '28.3693',
    '2. high': '39.4643',
    '3. low': '27.5762',
    '4. close': '37.7212',
    '5. volume': '12974541'
  },
  '2009-07-31': {
    '1. open': '26.9767',
    '2. high': '28.5169',
    '3. low': '24.2006',
    '4. close': '28.2218',
    '5. volume': '4113443'
  },
  '2009-06-30': {
    '1. open': '24.0715',
    '2. high': '30.8964',
    '3. low': '23.8317',
    '4. close': '27.0228',
    '5. volume': '6317759'
  },
  '2009-05-29': {
    '1. open': '29.6605',
    '2. high': '41.0876',
    '3. low': '21.6828',
    '4. close': '23.5181',
    '5. volume': '6416432'
  },
  '2009-04-30': {
    '1. open': '22.4206',
    '2. high': '33.0822',
    '3. low': '21.6736',
    '4. close': '29.4207',
    '5. volume': '2474795'
  },
  '2009-03-31': {
    '1. open': '19.2388',
    '2. high': '23.2691',
    '3. low': '18.2427',
    '4. close': '22.7526',
    '5. volume': '2777479'
  },
  '2009-02-27': {
    '1. open': '27.8344',
    '2. high': '29.5037',
    '3. low': '17.9844',
    '4. close': '19.3679',
    '5. volume': '3276626'
  },
  '2009-01-30': {
    '1. open': '30.1585',
    '2. high': '32.2706',
    '3. low': '25.4641',
    '4. close': '27.9912',
    '5. volume': '3916507'
  },
  '2008-12-30': {
    '1. open': '34.7054',
    '2. high': '34.7054',
    '3. low': '24.3943',
    '4. close': '29.2363',
    '5. volume': '3372385'
  },
  '2008-11-28': {
    '1. open': '56.2498',
    '2. high': '58.1036',
    '3. low': '28.4062',
    '4. close': '34.4656',
    '5. volume': '5921874'
  },
  '2008-10-31': {
    '1. open': '69.2816',
    '2. high': '69.8719',
    '3. low': '50.0890',
    '4. close': '53.7228',
    '5. volume': '10129986'
  },
  '2008-09-30': {
    '1. open': '70.8864',
    '2. high': '74.4649',
    '3. low': '66.4041',
    '4. close': '68.7744',
    '5. volume': '3452004'
  },
  '2008-08-29': {
    '1. open': '70.5083',
    '2. high': '74.5017',
    '3. low': '64.0339',
    '4. close': '71.0155',
    '5. volume': '2328392'
  },
  '2008-07-31': {
    '1. open': '85.0342',
    '2. high': '85.0342',
    '3. low': '65.9061',
    '4. close': '70.7020',
    '5. volume': '3322185'
  },
  '2008-06-30': {
    '1. open': '101.5890',
    '2. high': '102.0960',
    '3. low': '83.0697',
    '4. close': '85.0065',
    '5. volume': '2022675'
  },
  '2008-05-30': {
    '1. open': '101.2940',
    '2. high': '104.7800',
    '3. low': '97.4849',
    '4. close': '101.5890',
    '5. volume': '2457237'
  },
  '2008-04-30': {
    '1. open': '100.6110',
    '2. high': '102.8530',
    '3. low': '97.3835',
    '4. close': '99.6431',
    '5. volume': '2365855'
  },
  '2008-03-31': {
    '1. open': '95.2807',
    '2. high': '106.4960',
    '3. low': '93.9342',
    '4. close': '100.5930',
    '5. volume': '2392518'
  },
  '2008-02-29': {
    '1. open': '92.2280',
    '2. high': '100.1320',
    '3. low': '89.0922',
    '4. close': '97.3466',
    '5. volume': '1815626'
  },
  '2008-01-31': {
    '1. open': '96.3229',
    '2. high': '102.6310',
    '3. low': '83.0513',
    '4. close': '92.5323',
    '5. volume': '3439201'
  },
  '2007-12-28': {
    '1. open': '104.6700',
    '2. high': '104.9550',
    '3. low': '92.9658',
    '4. close': '97.7616',
    '5. volume': '1525376'
  },
  '2007-11-30': {
    '1. open': '101.3030',
    '2. high': '109.3090',
    '3. low': '97.1160',
    '4. close': '103.0190',
    '5. volume': '2841086'
  },
  '2007-10-31': {
    '1. open': '94.8103',
    '2. high': '102.5570',
    '3. low': '94.1647',
    '4. close': '101.6170',
    '5. volume': '1482023'
  },
  '2007-09-28': {
    '1. open': '101.3680',
    '2. high': '101.3680',
    '3. low': '92.3940',
    '4. close': '95.4836',
    '5. volume': '1850156'
  },
  '2007-08-31': {
    '1. open': '98.4626',
    '2. high': '101.6350',
    '3. low': '94.0725',
    '4. close': '101.4510',
    '5. volume': '1896795'
  },
  '2007-07-31': {
    '1. open': '104.2730',
    '2. high': '105.0480',
    '3. low': '91.6377',
    '4. close': '99.8460',
    '5. volume': '1149642'
  },
  '2007-06-29': {
    '1. open': '110.1020',
    '2. high': '110.6740',
    '3. low': '100.3350',
    '4. close': '104.0150',
    '5. volume': '1406052'
  },
  '2007-05-31': {
    '1. open': '109.7510',
    '2. high': '111.5960',
    '3. low': '105.3980',
    '4. close': '110.1570',
    '5. volume': '913668'
  },
  '2007-04-30': {
    '1. open': '101.9120',
    '2. high': '111.8720',
    '3. low': '101.0820',
    '4. close': '108.8750',
    '5. volume': '1250628'
  },
  '2007-03-30': {
    '1. open': '101.2850',
    '2. high': '105.3240',
    '3. low': '96.8486',
    '4. close': '101.9120',
    '5. volume': '1322650'
  },
  '2007-02-28': {
    '1. open': '102.5570',
    '2. high': '109.6870',
    '3. low': '99.2373',
    '4. close': '101.2850',
    '5. volume': '823587'
  },
  '2007-01-31': {
    '1. open': '103.8390',
    '2. high': '105.3520',
    '3. low': '99.7906',
    '4. close': '103.9690',
    '5. volume': '763842'
  },
  '2006-12-29': {
    '1. open': '97.8539',
    '2. high': '104.2820',
    '3. low': '96.8393',
    '4. close': '102.3080',
    '5. volume': '705721'
  },
  '2006-11-30': {
    '1. open': '98.3150',
    '2. high': '99.6984',
    '3. low': '95.5482',
    '4. close': '97.8077',
    '5. volume': '586046'
  },
  '2006-10-31': {
    '1. open': '94.9856',
    '2. high': '98.5917',
    '3. low': '91.0659',
    '4. close': '96.8393',
    '5. volume': '588906'
  },
  '2006-09-29': {
    '1. open': '89.7839',
    '2. high': '95.8248',
    '3. low': '88.9077',
    '4. close': '94.9026',
    '5. volume': '774764'
  },
  '2006-08-31': {
    '1. open': '90.0145',
    '2. high': '93.4546',
    '3. low': '86.9710',
    '4. close': '89.9222',
    '5. volume': '742430'
  },
  '2006-07-31': {
    '1. open': '81.1053',
    '2. high': '92.1542',
    '3. low': '79.0578',
    '4. close': '89.7931',
    '5. volume': '803830'
  },
  '2006-06-30': {
    '1. open': '83.9090',
    '2. high': '87.2845',
    '3. low': '70.4622',
    '4. close': '81.1606',
    '5. volume': '807140'
  },
  '2006-05-31': {
    '1. open': '87.7272',
    '2. high': '95.9724',
    '3. low': '74.9813',
    '4. close': '85.1817',
    '5. volume': '1145697'
  },
  '2006-04-28': {
    '1. open': '83.4386',
    '2. high': '90.8445',
    '3. low': '83.4386',
    '4. close': '89.4611',
    '5. volume': '574232'
  },
  '2006-03-31': {
    '1. open': '83.3556',
    '2. high': '87.0171',
    '3. low': '79.7772',
    '4. close': '86.8787',
    '5. volume': '594277'
  },
  '2006-02-28': {
    '1. open': '77.4715',
    '2. high': '86.6943',
    '3. low': '71.9470',
    '4. close': '83.2449',
    '5. volume': '451866'
  },
  '2006-01-31': {
    '1. open': '70.0932',
    '2. high': '81.9906',
    '3. low': '68.5254',
    '4. close': '77.3424',
    '5. volume': '438821'
  },
  '2005-12-30': {
    '1. open': '69.0787',
    '2. high': '72.3989',
    '3. low': '67.2526',
    '4. close': '69.4108',
    '5. volume': '374922'
  },
  '2005-11-30': {
    '1. open': '58.1036',
    '2. high': '73.6532',
    '3. low': '57.9192',
    '4. close': '68.2026',
    '5. volume': '609055'
  },
  '2005-10-31': {
    '1. open': '54.8848',
    '2. high': '59.9482',
    '3. low': '54.8848',
    '4. close': '57.8730',
    '5. volume': '808746'
  },
  '2005-09-30': {
    '1. open': '54.0456',
    '2. high': '56.2590',
    '3. low': '53.6306',
    '4. close': '55.3275',
    '5. volume': '1254334'
  },
  '2005-08-31': {
    '1. open': '54.9310',
    '2. high': '56.0285',
    '3. low': '52.5699',
    '4. close': '54.0917',
    '5. volume': '1769539'
  },
  '2005-07-29': {
    '1. open': '54.7834',
    '2. high': '55.2445',
    '3. low': '54.7373',
    '4. close': '54.9402',
    '5. volume': '6131024'
  },
  '2005-06-30': {
    '1. open': '47.9770',
    '2. high': '56.5357',
    '3. low': '44.5645',
    '4. close': '54.8664',
    '5. volume': '16808664'
  },
  '2005-05-31': {
    '1. open': '41.4565',
    '2. high': '48.6502',
    '3. low': '40.5711',
    '4. close': '48.0231',
    '5. volume': '6768443'
  },
  '2005-04-29': {
    '1. open': '44.8689',
    '2. high': '46.7411',
    '3. low': '40.0915',
    '4. close': '41.5026',
    '5. volume': '5526689'
  },
  '2005-03-31': {
    '1. open': '44.5335',
    '2. high': '47.6265',
    '3. low': '43.9196',
    '4. close': '44.7582',
    '5. volume': '7798504'
  },
  '2005-02-28': {
    '1. open': '46.5376',
    '2. high': '50.6723',
    '3. low': '42.8814',
    '4. close': '44.9849',
    '5. volume': '7613195'
  },
  '2005-01-31': {
    '1. open': '40.1731',
    '2. high': '46.9529',
    '3. low': '39.4961',
    '4. close': '46.5828',
    '5. volume': '6060297'
  },
  '2004-12-31': {
    '1. open': '38.8190',
    '2. high': '40.9492',
    '3. low': '38.5301',
    '4. close': '40.8570',
    '5. volume': '3476828'
  },
  '2004-11-30': {
    '1. open': '35.0274',
    '2. high': '40.4259',
    '3. low': '34.8649',
    '4. close': '38.6926',
    '5. volume': '4823601'
  },
  '2004-10-29': {
    '1. open': '34.1246',
    '2. high': '36.9232',
    '3. low': '33.8538',
    '4. close': '34.8288',
    '5. volume': '4639960'
  },
  '2004-09-30': {
    '1. open': '32.8517',
    '2. high': '34.1788',
    '3. low': '32.1475',
    '4. close': '33.8086',
    '5. volume': '3168928'
  },
  '2004-08-31': {
    '1. open': '33.8538',
    '2. high': '34.5760',
    '3. low': '30.7482',
    '4. close': '32.6711',
    '5. volume': '4490902'
  },
  '2004-07-30': {
    '1. open': '36.6072',
    '2. high': '36.9232',
    '3. low': '32.5628',
    '4. close': '33.9982',
    '5. volume': '3885412'
  },
  '2004-06-30': {
    '1. open': '31.6961',
    '2. high': '37.0044',
    '3. low': '31.6961',
    '4. close': '36.9683',
    '5. volume': '3987093'
  },
  '2004-05-31': {
    '1. open': '34.1246',
    '2. high': '34.6572',
    '3. low': '29.5295',
    '4. close': '32.2739',
    '5. volume': '4533324'
  },
  '2004-04-30': {
    '1. open': '33.1767',
    '2. high': '35.5149',
    '3. low': '32.3281',
    '4. close': '33.9801',
    '5. volume': '3687567'
  },
  '2004-03-31': {
    '1. open': '32.3191',
    '2. high': '34.6211',
    '3. low': '31.1455',
    '4. close': '33.1767',
    '5. volume': '5036087'
  },
  '2004-02-27': {
    '1. open': '32.1746',
    '2. high': '32.7072',
    '3. low': '29.0059',
    '4. close': '32.4996',
    '5. volume': '2895262'
  },
  '2004-01-30': {
    '1. open': '30.9056',
    '2. high': '31.9760',
    '3. low': '27.9858',
    '4. close': '31.8316',
    '5. volume': '2647743'
  },
  '2003-12-31': {
    '1. open': '31.1364',
    '2. high': '32.2649',
    '3. low': '29.7913',
    '4. close': '30.9056',
    '5. volume': '2654944'
  },
  '2003-11-28': {
    '1. open': '33.1767',
    '2. high': '33.6010',
    '3. low': '29.6017',
    '4. close': '30.8295',
    '5. volume': '3980560'
  },
  '2003-10-31': {
    '1. open': '28.7080',
    '2. high': '33.7364',
    '3. low': '27.1733',
    '4. close': '33.1767',
    '5. volume': '4718704'
  },
  '2003-09-30': {
    '1. open': '29.9809',
    '2. high': '33.1135',
    '3. low': '27.0830',
    '4. close': '28.4372',
    '5. volume': '4312970'
  },
  '2003-08-29': {
    '1. open': '24.1039',
    '2. high': '30.2427',
    '3. low': '23.7428',
    '4. close': '30.2427',
    '5. volume': '4743974'
  },
  '2003-07-31': {
    '1. open': '17.1616',
    '2. high': '24.6185',
    '3. low': '16.8817',
    '4. close': '24.0949',
    '5. volume': '7279110'
  },
  '2003-06-30': {
    '1. open': '20.9442',
    '2. high': '23.6525',
    '3. low': '16.1595',
    '4. close': '17.3512',
    '5. volume': '7580313'
  },
  '2003-05-30': {
    '1. open': '25.2797',
    '2. high': '26.0539',
    '3. low': '19.5900',
    '4. close': '20.7636',
    '5. volume': '1381458'
  },
  '2003-04-30': {
    '1. open': '23.2914',
    '2. high': '26.4511',
    '3. low': '21.4859',
    '4. close': '24.9525',
    '5. volume': '1191039'
  },
  '2003-03-31': {
    '1. open': '20.2310',
    '2. high': '26.7851',
    '3. low': '19.7525',
    '4. close': '23.8330',
    '5. volume': '1530924'
  },
  '2003-02-28': {
    '1. open': '25.7921',
    '2. high': '26.7580',
    '3. low': '19.6803',
    '4. close': '20.0505',
    '5. volume': '1242730'
  },
  '2003-01-31': {
    '1. open': '32.7409',
    '2. high': '34.3413',
    '3. low': '24.3747',
    '4. close': '25.7018',
    '5. volume': '1862921'
  },
  '2002-12-31': {
    '1. open': '33.1315',
    '2. high': '34.0253',
    '3. low': '31.5968',
    '4. close': '32.7409',
    '5. volume': '637664'
  },
  '2002-11-29': {
    '1. open': '34.1246',
    '2. high': '35.2079',
    '3. low': '30.9198',
    '4. close': '33.0413',
    '5. volume': '738876'
  },
  '2002-10-31': {
    '1. open': '32.9510',
    '2. high': '35.3433',
    '3. low': '30.8566',
    '4. close': '34.6843',
    '5. volume': '737249'
  },
  '2002-09-30': {
    '1. open': '40.1731',
    '2. high': '40.5342',
    '3. low': '32.0663',
    '4. close': '33.2218',
    '5. volume': '726078'
  },
  '2002-08-30': {
    '1. open': '38.4579',
    '2. high': '41.1244',
    '3. low': '34.7565',
    '4. close': '40.4440',
    '5. volume': '787912'
  },
  '2002-07-31': {
    '1. open': '44.9578',
    '2. high': '44.9578',
    '3. low': '34.3051',
    '4. close': '37.9162',
    '5. volume': '565004'
  },
  '2002-06-28': {
    '1. open': '41.0759',
    '2. high': '45.1384',
    '3. low': '38.8190',
    '4. close': '44.9578',
    '5. volume': '958456'
  },
  '2002-05-31': {
    '1. open': '50.6793',
    '2. high': '50.6793',
    '3. low': '40.7148',
    '4. close': '40.7148',
    '5. volume': '855512'
  },
  '2002-04-30': {
    '1. open': '49.3419',
    '2. high': '50.8258',
    '3. low': '47.6210',
    '4. close': '49.6071',
    '5. volume': '417215'
  },
  '2002-03-29': {
    '1. open': '47.7564',
    '2. high': '50.2841',
    '3. low': '45.7703',
    '4. close': '49.3419',
    '5. volume': '394345'
  },
  '2002-02-28': {
    '1. open': '50.6904',
    '2. high': '51.1418',
    '3. low': '44.6960',
    '4. close': '47.3953',
    '5. volume': '520270'
  },
  '2002-01-31': {
    '1. open': '49.8031',
    '2. high': '53.3716',
    '3. low': '46.8536',
    '4. close': '51.4487',
    '5. volume': '528382'
  },
  '2001-12-31': {
    '1. open': '47.8376',
    '2. high': '50.9161',
    '3. low': '44.8856',
    '4. close': '49.8031',
    '5. volume': '653709'
  },
  '2001-11-30': {
    '1. open': '42.3217',
    '2. high': '48.5237',
    '3. low': '40.2724',
    '4. close': '47.8467',
    '5. volume': '1067289'
  },
  '2001-10-31': {
    '1. open': '37.7357',
    '2. high': '42.8814',
    '3. low': '36.8600',
    '4. close': '41.6176',
    '5. volume': '653971'
  },
  '2001-09-28': {
    '1. open': '45.0391',
    '2. high': '45.0391',
    '3. low': '33.4024',
    '4. close': '37.9162',
    '5. volume': '1019753'
  },
  '2001-08-31': {
    '1. open': '47.8557',
    '2. high': '48.7494',
    '3. low': '44.2356',
    '4. close': '44.3349',
    '5. volume': '557492'
  },
  '2001-07-31': {
    '1. open': '46.0411',
    '2. high': '48.7494',
    '3. low': '45.8154',
    '4. close': '48.2800',
    '5. volume': '586035'
  },
  '2001-06-29': {
    '1. open': '50.7355',
    '2. high': '52.2973',
    '3. low': '44.3259',
    '4. close': '45.8154',
    '5. volume': '722771'
  },
  '2001-05-31': {
    '1. open': '54.5344',
    '2. high': '54.5344',
    '3. low': '47.6661',
    '4. close': '50.2841',
    '5. volume': '584695'
  },
  '2001-04-30': {
    '1. open': '55.9716',
    '2. high': '59.0259',
    '3. low': '51.4577',
    '4. close': '53.3806',
    '5. volume': '386202'
  },
  '2001-03-30': {
    '1. open': '59.7632',
    '2. high': '60.7562',
    '3. low': '50.3834',
    '4. close': '55.9716',
    '5. volume': '544777'
  },
  '2001-02-28': {
    '1. open': '52.8480',
    '2. high': '60.2597',
    '3. low': '51.1869',
    '4. close': '60.2597',
    '5. volume': '460668'
  },
  '2001-01-31': {
    '1. open': '45.1917',
    '2. high': '56.5042',
    '3. low': '43.4231',
    '4. close': '52.3605',
    '5. volume': '394880'
  },
  '2000-12-29': {
    '1. open': '47.3953',
    '2. high': '50.2841',
    '3. low': '42.8814',
    '4. close': '44.2356',
    '5. volume': '339243'
  },
  '2000-11-30': {
    '1. open': '51.0063',
    '2. high': '55.0688',
    '3. low': '47.1154',
    '4. close': '47.8467',
    '5. volume': '363936'
  },
  '2000-10-31': {
    '1. open': '50.6452',
    '2. high': '52.5699',
    '3. low': '45.4092',
    '4. close': '47.5896',
    '5. volume': '215437'
  },
  '2000-09-29': {
    '1. open': '55.0688',
    '2. high': '56.0618',
    '3. low': '50.6452',
    '4. close': '51.2772',
    '5. volume': '613377'
  },
  '2000-08-31': {
    '1. open': '60.4854',
    '2. high': '64.0062',
    '3. low': '53.9132',
    '4. close': '55.0688',
    '5. volume': '673009'
  },
  '2000-07-31': {
    '1. open': '58.3187',
    '2. high': '60.8555',
    '3. low': '53.2633',
    '4. close': '60.4854',
    '5. volume': '398714'
  },
  '2000-06-30': {
    '1. open': '56.4229',
    '2. high': '58.5806',
    '3. low': '50.8258',
    '4. close': '58.3187',
    '5. volume': '731772'
  },
  '2000-05-31': {
    '1. open': '59.6715',
    '2. high': '61.7927',
    '3. low': '52.9924',
    '4. close': '56.8743',
    '5. volume': '402109'
  },
  '2000-04-28': {
    '1. open': '53.0737',
    '2. high': '58.5648',
    '3. low': '50.5550',
    '4. close': '58.4090',
    '5. volume': '609127'
  },
  '2000-03-31': {
    '1. open': '53.2633',
    '2. high': '60.4854',
    '3. low': '48.2980',
    '4. close': '53.1640',
    '5. volume': '511915'
  },
  '2000-02-29': {
    '1. open': '64.5479',
    '2. high': '64.5479',
    '3. low': '50.8258',
    '4. close': '52.8119',
    '5. volume': '683430'
  },
  '2000-01-31': {
    '1. open': '69.5131',
    '2. high': '70.2353',
    '3. low': '63.7444',
    '4. close': '64.1416',
    '5. volume': '512866'
  },
  '1999-12-30': {
    '1. open': '64.9992',
    '2. high': '70.8672',
    '3. low': '57.6417',
    '4. close': '69.7839',
    '5. volume': '1386409'
  }
};

// tslint:disable:max-line-length
export const heidelbergCementCompany: Company = {
  id: 1016,
  name: 'HeidelbergCement AG',
  country: Country.Deutschland,
  city: 'Heidelberg',
  url: 'https://www.heidelbergcement.com/de',
  description: 'Die HeidelbergCement AG mit Sitz in Heidelberg ist ein börsennotierter Baustoffkonzern. Das Unternehmen ist weltweit die Nummer 1 bei Zuschlagstoffen, Nummer 2 bei Zement und Nummer 3 bei Transportbeton.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/HeidelbergCement',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/HeidelbergCement_Logo.svg/500px-HeidelbergCement_Logo.svg.png',
  products: [
    {
      id: 101610,
      name: 'Zement'
    }
  ],
  industries: [111111],
  currency: Currency.EUR,
  securityType: SecurityType.Inhaberaktie,
  isin: 'DE0006047004',
  wkn: '604700',
  symbol: 'HEI.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [
    {
      name: 'HeidelbergCement ADR',
      isin: 'US42281P2056',
      securityType: SecurityType.ADR
    }
  ],
  current_indices: [Indices.DAX],
  end_of_month_prices: heidelbergCementPrices,
  dividends: heidelbergCementDividends,
  tags: ['Zement']
};
// tslint:enable:max-line-length
