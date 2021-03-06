import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {year: 2018, rate: 2.10, yield: 2.71}, {year: 2017, rate: 1.70}, {year: 2016, rate: 1.45}, {
    year: 2015,
    rate: 1.10,
    yield: 1.79
  }, {year: 2014, rate: 0.30, yield: 0.83}, {year: 2013, rate: 0.40, yield: 0.89}, {year: 2012, rate: 1.80, yield: 4.95}, {
    year: 2011,
    rate: 1.80,
    yield: 5.26
  }, {year: 2010, rate: 1.50, yield: 2.49}, {year: 2009, rate: 0.30, yield: 0.67}, {year: 2008, rate: 1.30, yield: 5.68}, {
    year: 2007,
    rate: 1.30,
    yield: 2.39
  }, {year: 2006, rate: 1.00, yield: 1.74}, {year: 2005, rate: 0.90, yield: 1.69}, {year: 2004, rate: 0.74, yield: 1.89}, {
    year: 2003,
    rate: 0.64,
    yield: 2.78
  }, {year: 2002, rate: 0.64, yield: 4.35}, {year: 2001, rate: 0.44, yield: 2.11}, {year: 2000, rate: 0.64, yield: 6.74}
];
const prices = {
  '2019-11-20': {
    '1. open': '108.0000',
    '2. high': '118.3000',
    '3. low': '94.7200',
    '4. close': '97.0200',
    '5. volume': '2732026'
  },
  '2019-10-31': {
    '1. open': '117.0000',
    '2. high': '118.3000',
    '3. low': '104.5000',
    '4. close': '107.8500',
    '5. volume': '3010878'
  },
  '2019-09-30': {
    '1. open': '106.8000',
    '2. high': '118.6000',
    '3. low': '106.7500',
    '4. close': '116.0500',
    '5. volume': '2286421'
  },
  '2019-08-30': {
    '1. open': '103.2000',
    '2. high': '110.6500',
    '3. low': '97.8400',
    '4. close': '107.3000',
    '5. volume': '2674924'
  },
  '2019-07-31': {
    '1. open': '109.0000',
    '2. high': '110.8500',
    '3. low': '99.5400',
    '4. close': '103.4000',
    '5. volume': '3228746'
  },
  '2019-06-28': {
    '1. open': '94.4000',
    '2. high': '109.7000',
    '3. low': '93.8800',
    '4. close': '107.6500',
    '5. volume': '3019344'
  },
  '2019-05-31': {
    '1. open': '102.1000',
    '2. high': '104.3000',
    '3. low': '94.2400',
    '4. close': '95.3000',
    '5. volume': '2997348'
  },
  '2019-04-30': {
    '1. open': '93.8200',
    '2. high': '103.7500',
    '3. low': '93.4800',
    '4. close': '102.3000',
    '5. volume': '2251489'
  },
  '2019-03-29': {
    '1. open': '99.2000',
    '2. high': '103.3500',
    '3. low': '90.5000',
    '4. close': '92.8800',
    '5. volume': '4070560'
  },
  '2019-02-28': {
    '1. open': '91.0800',
    '2. high': '96.2400',
    '3. low': '89.0200',
    '4. close': '94.0400',
    '5. volume': '2747327'
  },
  '2019-01-31': {
    '1. open': '76.8400',
    '2. high': '92.7000',
    '3. low': '76.4000',
    '4. close': '90.5800',
    '5. volume': '3590790'
  },
  '2018-12-28': {
    '1. open': '86.3400',
    '2. high': '88.4600',
    '3. low': '74.2600',
    '4. close': '77.1600',
    '5. volume': '4357787'
  },
  '2018-11-30': {
    '1. open': '76.2200',
    '2. high': '84.4800',
    '3. low': '73.1200',
    '4. close': '81.8000',
    '5. volume': '5928216'
  },
  '2018-10-31': {
    '1. open': '89.8400',
    '2. high': '92.1400',
    '3. low': '68.9400',
    '4. close': '76.5400',
    '5. volume': '5272378'
  },
  '2018-09-28': {
    '1. open': '93.7200',
    '2. high': '94.8400',
    '3. low': '86.6200',
    '4. close': '90.0600',
    '5. volume': '3245800'
  },
  '2018-08-31': {
    '1. open': '103.6000',
    '2. high': '103.7000',
    '3. low': '92.6400',
    '4. close': '93.9200',
    '5. volume': '3735391'
  },
  '2018-07-31': {
    '1. open': '93.1600',
    '2. high': '103.8000',
    '3. low': '91.7200',
    '4. close': '103.3000',
    '5. volume': '4144230'
  },
  '2018-06-29': {
    '1. open': '109.6500',
    '2. high': '112.7500',
    '3. low': '89.4600',
    '4. close': '94.5600',
    '5. volume': '3457395'
  },
  '2018-05-31': {
    '1. open': '108.4000',
    '2. high': '117.8500',
    '3. low': '106.9000',
    '4. close': '109.1000',
    '5. volume': '2825409'
  },
  '2018-04-30': {
    '1. open': '113.9500',
    '2. high': '119.3500',
    '3. low': '108.1500',
    '4. close': '108.6500',
    '5. volume': '2675768'
  },
  '2018-03-29': {
    '1. open': '108.4500',
    '2. high': '117.5500',
    '3. low': '100.5500',
    '4. close': '115.3500',
    '5. volume': '4003454'
  },
  '2018-02-28': {
    '1. open': '114.7500',
    '2. high': '116.8000',
    '3. low': '99.2000',
    '4. close': '109.0000',
    '5. volume': '3211235'
  },
  '2018-01-31': {
    '1. open': '106.0500',
    '2. high': '115.9500',
    '3. low': '104.6000',
    '4. close': '113.9000',
    '5. volume': '3048452'
  },
  '2017-12-29': {
    '1. open': '107.1500',
    '2. high': '109.7500',
    '3. low': '103.0500',
    '4. close': '105.8500',
    '5. volume': '2259489'
  },
  '2017-11-30': {
    '1. open': '101.9000',
    '2. high': '107.8500',
    '3. low': '96.2600',
    '4. close': '106.9000',
    '5. volume': '3107286'
  },
  '2017-10-31': {
    '1. open': '96.0000',
    '2. high': '102.9000',
    '3. low': '95.4000',
    '4. close': '101.2500',
    '5. volume': '2246900'
  },
  '2017-09-29': {
    '1. open': '86.3600',
    '2. high': '95.7600',
    '3. low': '86.0000',
    '4. close': '95.3600',
    '5. volume': '2741960'
  },
  '2017-08-31': {
    '1. open': '85.4900',
    '2. high': '89.9500',
    '3. low': '84.1700',
    '4. close': '85.8600',
    '5. volume': '2953139'
  },
  '2017-07-31': {
    '1. open': '84.0000',
    '2. high': '89.5000',
    '3. low': '82.7100',
    '4. close': '84.4000',
    '5. volume': '2478613'
  },
  '2017-06-30': {
    '1. open': '85.5000',
    '2. high': '90.0000',
    '3. low': '82.9100',
    '4. close': '83.1200',
    '5. volume': '2987346'
  },
  '2017-05-31': {
    '1. open': '84.2400',
    '2. high': '87.6100',
    '3. low': '81.8600',
    '4. close': '85.4300',
    '5. volume': '4434384'
  },
  '2017-04-28': {
    '1. open': '79.2000',
    '2. high': '84.9200',
    '3. low': '77.5200',
    '4. close': '84.2500',
    '5. volume': '3651421'
  },
  '2017-03-31': {
    '1. open': '74.0000',
    '2. high': '78.7600',
    '3. low': '71.1100',
    '4. close': '78.6300',
    '5. volume': '4474933'
  },
  '2017-02-28': {
    '1. open': '71.4800',
    '2. high': '73.3800',
    '3. low': '66.5900',
    '4. close': '72.1200',
    '5. volume': '3831563'
  },
  '2017-01-31': {
    '1. open': '63.8100',
    '2. high': '72.2400',
    '3. low': '63.7500',
    '4. close': '70.8400',
    '5. volume': '4081919'
  },
  '2016-12-30': {
    '1. open': '67.2000',
    '2. high': '67.7500',
    '3. low': '62.4600',
    '4. close': '63.9000',
    '5. volume': '3331710'
  },
  '2016-11-30': {
    '1. open': '63.5000',
    '2. high': '69.4300',
    '3. low': '60.1400',
    '4. close': '67.3000',
    '5. volume': '3916406'
  },
  '2016-10-31': {
    '1. open': '61.5000',
    '2. high': '64.4000',
    '3. low': '60.4200',
    '4. close': '63.1100',
    '5. volume': '2455196'
  },
  '2016-09-30': {
    '1. open': '65.1100',
    '2. high': '66.7000',
    '3. low': '61.0000',
    '4. close': '61.9600',
    '5. volume': '2221909'
  },
  '2016-08-31': {
    '1. open': '63.1300',
    '2. high': '65.7300',
    '3. low': '61.5500',
    '4. close': '64.7400',
    '5. volume': '3014562'
  },
  '2016-07-29': {
    '1. open': '53.6600',
    '2. high': '62.8900',
    '3. low': '50.9300',
    '4. close': '62.6200',
    '5. volume': '4535911'
  },
  '2016-06-30': {
    '1. open': '61.8700',
    '2. high': '62.3000',
    '3. low': '48.0200',
    '4. close': '53.2000',
    '5. volume': '4704849'
  },
  '2016-05-31': {
    '1. open': '67.5000',
    '2. high': '68.0200',
    '3. low': '57.2700',
    '4. close': '61.7100',
    '5. volume': '4385418'
  },
  '2016-04-29': {
    '1. open': '69.7700',
    '2. high': '71.2900',
    '3. low': '65.6200',
    '4. close': '68.3200',
    '5. volume': '3113038'
  },
  '2016-03-31': {
    '1. open': '66.0000',
    '2. high': '70.3300',
    '3. low': '64.7800',
    '4. close': '70.2200',
    '5. volume': '3579805'
  },
  '2016-02-29': {
    '1. open': '65.2000',
    '2. high': '66.9500',
    '3. low': '53.8400',
    '4. close': '65.7800',
    '5. volume': '5427153'
  },
  '2016-01-29': {
    '1. open': '60.8600',
    '2. high': '65.7500',
    '3. low': '54.9200',
    '4. close': '65.6000',
    '5. volume': '5521921'
  },
  '2015-12-30': {
    '1. open': '60.3000',
    '2. high': '63.9700',
    '3. low': '58.7500',
    '4. close': '61.4800',
    '5. volume': '4269730'
  },
  '2015-11-30': {
    '1. open': '56.8500',
    '2. high': '64.2200',
    '3. low': '52.6000',
    '4. close': '60.0700',
    '5. volume': '6904202'
  },
  '2015-10-30': {
    '1. open': '55.2900',
    '2. high': '58.1500',
    '3. low': '52.1800',
    '4. close': '57.2600',
    '5. volume': '4429430'
  },
  '2015-09-30': {
    '1. open': '54.0500',
    '2. high': '58.7900',
    '3. low': '50.5200',
    '4. close': '54.7800',
    '5. volume': '5153458'
  },
  '2015-08-31': {
    '1. open': '49.8150',
    '2. high': '57.5000',
    '3. low': '48.4500',
    '4. close': '55.0200',
    '5. volume': '4967360'
  },
  '2015-07-31': {
    '1. open': '46.2350',
    '2. high': '51.2600',
    '3. low': '44.7050',
    '4. close': '49.5750',
    '5. volume': '3702125'
  },
  '2015-06-30': {
    '1. open': '48.0500',
    '2. high': '49.2600',
    '3. low': '44.3900',
    '4. close': '45.4850',
    '5. volume': '3599375'
  },
  '2015-05-29': {
    '1. open': '46.0200',
    '2. high': '50.8700',
    '3. low': '44.5200',
    '4. close': '47.8650',
    '5. volume': '3752452'
  },
  '2015-04-30': {
    '1. open': '45.0150',
    '2. high': '49.6550',
    '3. low': '44.7900',
    '4. close': '46.0150',
    '5. volume': '4415856'
  },
  '2015-03-31': {
    '1. open': '45.8000',
    '2. high': '47.8000',
    '3. low': '44.1550',
    '4. close': '45.0050',
    '5. volume': '5955225'
  },
  '2015-02-27': {
    '1. open': '38.7800',
    '2. high': '45.4850',
    '3. low': '38.5000',
    '4. close': '45.2900',
    '5. volume': '5114227'
  },
  '2015-01-30': {
    '1. open': '36.2500',
    '2. high': '40.3250',
    '3. low': '34.1750',
    '4. close': '38.5100',
    '5. volume': '5497173'
  },
  '2014-12-30': {
    '1. open': '33.9000',
    '2. high': '37.0900',
    '3. low': '32.7000',
    '4. close': '36.2700',
    '5. volume': '4111202'
  },
  '2014-11-28': {
    '1. open': '34.2000',
    '2. high': '34.7500',
    '3. low': '30.3850',
    '4. close': '34.1050',
    '5. volume': '5571687'
  },
  '2014-10-31': {
    '1. open': '38.0250',
    '2. high': '38.3800',
    '3. low': '31.9350',
    '4. close': '34.2500',
    '5. volume': '7052987'
  },
  '2014-09-30': {
    '1. open': '41.4400',
    '2. high': '44.3350',
    '3. low': '37.3350',
    '4. close': '38.1000',
    '5. volume': '5007313'
  },
  '2014-08-29': {
    '1. open': '45.1650',
    '2. high': '45.3150',
    '3. low': '37.9450',
    '4. close': '41.1550',
    '5. volume': '5045928'
  },
  '2014-07-31': {
    '1. open': '51.9500',
    '2. high': '53.4700',
    '3. low': '45.1550',
    '4. close': '45.4950',
    '5. volume': '3342389'
  },
  '2014-06-30': {
    '1. open': '50.3000',
    '2. high': '53.9700',
    '3. low': '49.2750',
    '4. close': '51.7000',
    '5. volume': '3461925'
  },
  '2014-05-30': {
    '1. open': '48.0700',
    '2. high': '52.1600',
    '3. low': '45.4400',
    '4. close': '50.2700',
    '5. volume': '3895483'
  },
  '2014-04-30': {
    '1. open': '51.2500',
    '2. high': '52.9600',
    '3. low': '47.7000',
    '4. close': '47.8250',
    '5. volume': '3505764'
  },
  '2014-03-31': {
    '1. open': '53.5500',
    '2. high': '58.0900',
    '3. low': '49.7650',
    '4. close': '51.0500',
    '5. volume': '5164753'
  },
  '2014-02-28': {
    '1. open': '47.5900',
    '2. high': '54.9500',
    '3. low': '45.6750',
    '4. close': '54.7800',
    '5. volume': '4150396'
  },
  '2014-01-31': {
    '1. open': '44.8550',
    '2. high': '48.0850',
    '3. low': '43.0500',
    '4. close': '47.5750',
    '5. volume': '3795818'
  },
  '2013-12-30': {
    '1. open': '45.3200',
    '2. high': '45.5150',
    '3. low': '41.7300',
    '4. close': '44.8450',
    '5. volume': '2433052'
  },
  '2013-11-29': {
    '1. open': '45.6000',
    '2. high': '46.9950',
    '3. low': '42.3300',
    '4. close': '45.3600',
    '5. volume': '3316521'
  },
  '2013-10-31': {
    '1. open': '42.4300',
    '2. high': '46.4150',
    '3. low': '41.3500',
    '4. close': '45.6850',
    '5. volume': '3382892'
  },
  '2013-09-30': {
    '1. open': '37.6000',
    '2. high': '42.9900',
    '3. low': '37.2550',
    '4. close': '42.4700',
    '5. volume': '4218324'
  },
  '2013-08-30': {
    '1. open': '35.1500',
    '2. high': '38.3000',
    '3. low': '35.0550',
    '4. close': '37.1050',
    '5. volume': '3356200'
  },
  '2013-07-31': {
    '1. open': '36.0350',
    '2. high': '40.9950',
    '3. low': '34.1600',
    '4. close': '35.0050',
    '5. volume': '5136359'
  },
  '2013-06-28': {
    '1. open': '38.5200',
    '2. high': '39.9200',
    '3. low': '35.1850',
    '4. close': '35.8050',
    '5. volume': '3909090'
  },
  '2013-05-31': {
    '1. open': '35.4200',
    '2. high': '39.9350',
    '3. low': '35.1850',
    '4. close': '38.8000',
    '5. volume': '5706545'
  },
  '2013-04-30': {
    '1. open': '36.0050',
    '2. high': '37.5200',
    '3. low': '34.6250',
    '4. close': '35.9650',
    '5. volume': '4908607'
  },
  '2013-03-28': {
    '1. open': '42.2500',
    '2. high': '42.4000',
    '3. low': '35.0800',
    '4. close': '36.0850',
    '5. volume': '6350858'
  },
  '2013-02-28': {
    '1. open': '39.1350',
    '2. high': '43.7450',
    '3. low': '38.7050',
    '4. close': '42.1500',
    '5. volume': '4016399'
  },
  '2013-01-31': {
    '1. open': '37.3600',
    '2. high': '41.2450',
    '3. low': '37.0650',
    '4. close': '39.2100',
    '5. volume': '4263852'
  },
  '2012-12-28': {
    '1. open': '35.9500',
    '2. high': '37.8000',
    '3. low': '34.9700',
    '4. close': '36.4000',
    '5. volume': '3908693'
  },
  '2012-11-30': {
    '1. open': '36.8650',
    '2. high': '37.0000',
    '3. low': '31.2000',
    '4. close': '35.5950',
    '5. volume': '6672529'
  },
  '2012-10-31': {
    '1. open': '36.3150',
    '2. high': '39.0600',
    '3. low': '35.5500',
    '4. close': '36.8150',
    '5. volume': '5020960'
  },
  '2012-09-28': {
    '1. open': '39.3400',
    '2. high': '41.3200',
    '3. low': '36.3000',
    '4. close': '36.3000',
    '5. volume': '4395522'
  },
  '2012-08-31': {
    '1. open': '40.9000',
    '2. high': '42.4950',
    '3. low': '36.2300',
    '4. close': '39.3450',
    '5. volume': '4980068'
  },
  '2012-07-31': {
    '1. open': '38.6500',
    '2. high': '41.5400',
    '3. low': '36.8300',
    '4. close': '40.7200',
    '5. volume': '4602569'
  },
  '2012-06-29': {
    '1. open': '33.5900',
    '2. high': '39.1000',
    '3. low': '31.0000',
    '4. close': '38.7000',
    '5. volume': '5163439'
  },
  '2012-05-31': {
    '1. open': '42.8950',
    '2. high': '43.0050',
    '3. low': '33.1200',
    '4. close': '33.3700',
    '5. volume': '6297497'
  },
  '2012-04-30': {
    '1. open': '44.7000',
    '2. high': '47.0200',
    '3. low': '40.2000',
    '4. close': '42.4250',
    '5. volume': '5676930'
  },
  '2012-03-30': {
    '1. open': '45.5000',
    '2. high': '47.6000',
    '3. low': '42.5400',
    '4. close': '44.3950',
    '5. volume': '5939865'
  },
  '2012-02-29': {
    '1. open': '41.0000',
    '2. high': '46.5800',
    '3. low': '40.6300',
    '4. close': '45.5250',
    '5. volume': '6643965'
  },
  '2012-01-31': {
    '1. open': '34.1900',
    '2. high': '42.5550',
    '3. low': '34.1900',
    '4. close': '40.9950',
    '5. volume': '5919932'
  },
  '2011-12-30': {
    '1. open': '35.9000',
    '2. high': '37.4800',
    '3. low': '30.9300',
    '4. close': '34.2350',
    '5. volume': '4353422'
  },
  '2011-11-30': {
    '1. open': '37.7500',
    '2. high': '38.0000',
    '3. low': '30.0000',
    '4. close': '35.9150',
    '5. volume': '6353999'
  },
  '2011-10-31': {
    '1. open': '34.0250',
    '2. high': '41.8650',
    '3. low': '30.9500',
    '4. close': '38.5100',
    '5. volume': '4861145'
  },
  '2011-09-30': {
    '1. open': '46.3000',
    '2. high': '46.3000',
    '3. low': '35.0000',
    '4. close': '35.4100',
    '5. volume': '6486440'
  },
  '2011-08-31': {
    '1. open': '59.8800',
    '2. high': '60.4400',
    '3. low': '41.0650',
    '4. close': '46.3250',
    '5. volume': '10103940'
  },
  '2011-07-29': {
    '1. open': '61.2500',
    '2. high': '64.7400',
    '3. low': '56.4500',
    '4. close': '58.4100',
    '5. volume': '5459086'
  },
  '2011-06-30': {
    '1. open': '60.2200',
    '2. high': '61.4000',
    '3. low': '56.5000',
    '4. close': '61.0500',
    '5. volume': '4661779'
  },
  '2011-05-31': {
    '1. open': '60.9500',
    '2. high': '62.5000',
    '3. low': '56.5200',
    '4. close': '59.7800',
    '5. volume': '4819735'
  },
  '2011-04-29': {
    '1. open': '58.6000',
    '2. high': '60.9500',
    '3. low': '54.7900',
    '4. close': '60.5600',
    '5. volume': '3884184'
  },
  '2011-03-31': {
    '1. open': '59.5500',
    '2. high': '59.8500',
    '3. low': '51.3200',
    '4. close': '58.4700',
    '5. volume': '6569304'
  },
  '2011-02-28': {
    '1. open': '63.0000',
    '2. high': '65.1700',
    '3. low': '56.3500',
    '4. close': '58.7500',
    '5. volume': '5517617'
  },
  '2011-01-31': {
    '1. open': '60.3000',
    '2. high': '66.9000',
    '3. low': '57.0600',
    '4. close': '62.5400',
    '5. volume': '5984929'
  },
  '2010-12-30': {
    '1. open': '50.1900',
    '2. high': '60.4100',
    '3. low': '49.6700',
    '4. close': '60.1700',
    '5. volume': '4582092'
  },
  '2010-11-30': {
    '1. open': '52.0500',
    '2. high': '53.3200',
    '3. low': '48.6650',
    '4. close': '49.7200',
    '5. volume': '5473365'
  },
  '2010-10-29': {
    '1. open': '48.8600',
    '2. high': '52.1200',
    '3. low': '45.8300',
    '4. close': '51.7600',
    '5. volume': '4333046'
  },
  '2010-09-30': {
    '1. open': '43.7300',
    '2. high': '49.2500',
    '3. low': '43.2350',
    '4. close': '48.5000',
    '5. volume': '4059351'
  },
  '2010-08-31': {
    '1. open': '46.0300',
    '2. high': '49.2550',
    '3. low': '41.9200',
    '4. close': '43.6800',
    '5. volume': '4527392'
  },
  '2010-07-30': {
    '1. open': '46.3000',
    '2. high': '49.2000',
    '3. low': '44.5550',
    '4. close': '45.9300',
    '5. volume': '3833290'
  },
  '2010-06-30': {
    '1. open': '46.0200',
    '2. high': '48.7500',
    '3. low': '42.2200',
    '4. close': '47.0750',
    '5. volume': '7259579'
  },
  '2010-05-31': {
    '1. open': '54.0000',
    '2. high': '55.1100',
    '3. low': '41.7850',
    '4. close': '46.0900',
    '5. volume': '6976823'
  },
  '2010-04-30': {
    '1. open': '52.9000',
    '2. high': '55.0000',
    '3. low': '50.6700',
    '4. close': '52.6200',
    '5. volume': '3970994'
  },
  '2010-03-31': {
    '1. open': '46.2450',
    '2. high': '53.5900',
    '3. low': '46.2450',
    '4. close': '53.0300',
    '5. volume': '4681944'
  },
  '2010-02-26': {
    '1. open': '45.8400',
    '2. high': '48.8800',
    '3. low': '43.3700',
    '4. close': '45.9900',
    '5. volume': '4862772'
  },
  '2010-01-29': {
    '1. open': '44.5000',
    '2. high': '50.3400',
    '3. low': '42.8800',
    '4. close': '46.2050',
    '5. volume': '5232114'
  },
  '2009-12-30': {
    '1. open': '40.2000',
    '2. high': '45.6700',
    '3. low': '39.9900',
    '4. close': '44.7400',
    '5. volume': '2874821'
  },
  '2009-11-30': {
    '1. open': '36.7300',
    '2. high': '42.3400',
    '3. low': '35.0500',
    '4. close': '39.8000',
    '5. volume': '4037713'
  },
  '2009-10-30': {
    '1. open': '40.7400',
    '2. high': '42.5100',
    '3. low': '36.1500',
    '4. close': '36.9400',
    '5. volume': '4825591'
  },
  '2009-09-30': {
    '1. open': '34.4200',
    '2. high': '41.4200',
    '3. low': '32.8800',
    '4. close': '40.4600',
    '5. volume': '6428745'
  },
  '2009-08-31': {
    '1. open': '34.3400',
    '2. high': '37.1900',
    '3. low': '33.1600',
    '4. close': '34.0400',
    '5. volume': '4259576'
  },
  '2009-07-31': {
    '1. open': '30.8600',
    '2. high': '34.7500',
    '3. low': '28.5600',
    '4. close': '34.1600',
    '5. volume': '5455676'
  },
  '2009-06-30': {
    '1. open': '29.5500',
    '2. high': '31.8700',
    '3. low': '28.8000',
    '4. close': '30.8500',
    '5. volume': '5095305'
  },
  '2009-05-29': {
    '1. open': '32.1600',
    '2. high': '33.6200',
    '3. low': '25.5500',
    '4. close': '29.2200',
    '5. volume': '5459453'
  },
  '2009-04-30': {
    '1. open': '25.4700',
    '2. high': '33.2200',
    '3. low': '24.5000',
    '4. close': '32.0400',
    '5. volume': '5052579'
  },
  '2009-03-31': {
    '1. open': '25.6200',
    '2. high': '29.6400',
    '3. low': '23.6300',
    '4. close': '25.6100',
    '5. volume': '6019228'
  },
  '2009-02-27': {
    '1. open': '24.4700',
    '2. high': '27.8000',
    '3. low': '22.9800',
    '4. close': '26.0200',
    '5. volume': '6316715'
  },
  '2009-01-30': {
    '1. open': '23.2300',
    '2. high': '25.7700',
    '3. low': '19.0100',
    '4. close': '24.8800',
    '5. volume': '7233210'
  },
  '2008-12-30': {
    '1. open': '18.6800',
    '2. high': '23.5000',
    '3. low': '16.6300',
    '4. close': '22.9000',
    '5. volume': '9126309'
  },
  '2008-11-28': {
    '1. open': '24.6700',
    '2. high': '27.9500',
    '3. low': '16.0900',
    '4. close': '18.3400',
    '5. volume': '13798313'
  },
  '2008-10-31': {
    '1. open': '38.5000',
    '2. high': '38.6200',
    '3. low': '20.0200',
    '4. close': '24.0800',
    '5. volume': '16578111'
  },
  '2008-09-30': {
    '1. open': '43.0000',
    '2. high': '45.7000',
    '3. low': '35.6000',
    '4. close': '37.9400',
    '5. volume': '11480282'
  },
  '2008-08-29': {
    '1. open': '39.0100',
    '2. high': '44.2000',
    '3. low': '38.1200',
    '4. close': '43.5600',
    '5. volume': '6495558'
  },
  '2008-07-31': {
    '1. open': '45.4400',
    '2. high': '45.4400',
    '3. low': '33.7600',
    '4. close': '39.4800',
    '5. volume': '11117909'
  },
  '2008-06-30': {
    '1. open': '51.0100',
    '2. high': '53.1000',
    '3. low': '43.8100',
    '4. close': '45.9100',
    '5. volume': '6775517'
  },
  '2008-05-30': {
    '1. open': '48.7000',
    '2. high': '54.3100',
    '3. low': '48.6000',
    '4. close': '51.0200',
    '5. volume': '6256884'
  },
  '2008-04-30': {
    '1. open': '44.2500',
    '2. high': '49.4600',
    '3. low': '44.2400',
    '4. close': '48.6900',
    '5. volume': '5986205'
  },
  '2008-03-31': {
    '1. open': '45.7800',
    '2. high': '47.1000',
    '3. low': '42.0000',
    '4. close': '44.7000',
    '5. volume': '6846116'
  },
  '2008-02-29': {
    '1. open': '47.6900',
    '2. high': '50.7000',
    '3. low': '43.8800',
    '4. close': '46.2100',
    '5. volume': '6908547'
  },
  '2008-01-31': {
    '1. open': '53.9700',
    '2. high': '54.9300',
    '3. low': '42.0000',
    '4. close': '47.4600',
    '5. volume': '13088727'
  },
  '2007-12-28': {
    '1. open': '56.9000',
    '2. high': '57.9000',
    '3. low': '50.6200',
    '4. close': '54.3800',
    '5. volume': '4901652'
  },
  '2007-11-30': {
    '1. open': '61.3300',
    '2. high': '64.9700',
    '3. low': '46.5700',
    '4. close': '56.4500',
    '5. volume': '9638808'
  },
  '2007-10-31': {
    '1. open': '56.0000',
    '2. high': '63.9000',
    '3. low': '55.9100',
    '4. close': '61.5200',
    '5. volume': '6213366'
  },
  '2007-09-28': {
    '1. open': '60.9100',
    '2. high': '62.4400',
    '3. low': '52.3000',
    '4. close': '55.7100',
    '5. volume': '6079667'
  },
  '2007-08-31': {
    '1. open': '64.9200',
    '2. high': '68.7400',
    '3. low': '50.7300',
    '4. close': '60.9300',
    '5. volume': '10824952'
  },
  '2007-07-31': {
    '1. open': '68.8000',
    '2. high': '70.6000',
    '3. low': '59.2600',
    '4. close': '65.7100',
    '5. volume': '4595346'
  },
  '2007-06-29': {
    '1. open': '71.0600',
    '2. high': '73.7200',
    '3. low': '66.2600',
    '4. close': '68.9800',
    '5. volume': '5255763'
  },
  '2007-05-31': {
    '1. open': '73.7500',
    '2. high': '76.8900',
    '3. low': '67.2700',
    '4. close': '70.6000',
    '5. volume': '5204781'
  },
  '2007-04-30': {
    '1. open': '69.2000',
    '2. high': '74.9100',
    '3. low': '69.2000',
    '4. close': '73.0700',
    '5. volume': '5550017'
  },
  '2007-03-30': {
    '1. open': '60.8500',
    '2. high': '71.0000',
    '3. low': '57.2600',
    '4. close': '69.4000',
    '5. volume': '7645513'
  },
  '2007-02-28': {
    '1. open': '61.6000',
    '2. high': '67.0000',
    '3. low': '57.5000',
    '4. close': '60.8500',
    '5. volume': '5244911'
  },
  '2007-01-31': {
    '1. open': '58.0000',
    '2. high': '63.2900',
    '3. low': '56.6400',
    '4. close': '60.4900',
    '5. volume': '4370598'
  },
  '2006-12-29': {
    '1. open': '52.4000',
    '2. high': '57.6500',
    '3. low': '52.3600',
    '4. close': '57.4800',
    '5. volume': '2806200'
  },
  '2006-11-30': {
    '1. open': '56.3000',
    '2. high': '56.8700',
    '3. low': '51.1000',
    '4. close': '52.7000',
    '5. volume': '4863330'
  },
  '2006-10-31': {
    '1. open': '58.0000',
    '2. high': '58.1300',
    '3. low': '54.1000',
    '4. close': '56.2500',
    '5. volume': '2704131'
  },
  '2006-09-29': {
    '1. open': '52.2100',
    '2. high': '57.6800',
    '3. low': '51.8000',
    '4. close': '57.4000',
    '5. volume': '3288766'
  },
  '2006-08-31': {
    '1. open': '50.6200',
    '2. high': '53.8100',
    '3. low': '47.0100',
    '4. close': '52.4000',
    '5. volume': '4171345'
  },
  '2006-07-31': {
    '1. open': '55.0000',
    '2. high': '56.0000',
    '3. low': '48.1700',
    '4. close': '50.6200',
    '5. volume': '3521126'
  },
  '2006-06-30': {
    '1. open': '57.2500',
    '2. high': '58.0000',
    '3. low': '47.0500',
    '4. close': '54.5100',
    '5. volume': '5193654'
  },
  '2006-05-31': {
    '1. open': '63.7000',
    '2. high': '68.0000',
    '3. low': '52.4900',
    '4. close': '58.1000',
    '5. volume': '7067653'
  },
  '2006-04-28': {
    '1. open': '64.5000',
    '2. high': '67.6100',
    '3. low': '60.7500',
    '4. close': '63.9600',
    '5. volume': '3205428'
  },
  '2006-03-31': {
    '1. open': '65.0000',
    '2. high': '66.5300',
    '3. low': '62.0400',
    '4. close': '64.0000',
    '5. volume': '3193156'
  },
  '2006-02-28': {
    '1. open': '60.1600',
    '2. high': '66.7700',
    '3. low': '59.2400',
    '4. close': '65.2000',
    '5. volume': '3256764'
  },
  '2006-01-31': {
    '1. open': '53.5000',
    '2. high': '62.7000',
    '3. low': '53.5000',
    '4. close': '59.9700',
    '5. volume': '3832237'
  },
  '2005-12-30': {
    '1. open': '49.7500',
    '2. high': '53.3300',
    '3. low': '48.1500',
    '4. close': '53.2600',
    '5. volume': '2265947'
  },
  '2005-11-30': {
    '1. open': '51.4500',
    '2. high': '54.8000',
    '3. low': '49.2100',
    '4. close': '49.9000',
    '5. volume': '3061028'
  },
  '2005-10-31': {
    '1. open': '55.2300',
    '2. high': '55.2300',
    '3. low': '48.6200',
    '4. close': '51.3300',
    '5. volume': '3160835'
  },
  '2005-09-30': {
    '1. open': '48.1400',
    '2. high': '55.0800',
    '3. low': '47.8100',
    '4. close': '55.0000',
    '5. volume': '3174070'
  },
  '2005-08-31': {
    '1. open': '45.9000',
    '2. high': '48.6800',
    '3. low': '43.1500',
    '4. close': '48.4100',
    '5. volume': '2826480'
  },
  '2005-07-29': {
    '1. open': '41.2200',
    '2. high': '47.7000',
    '3. low': '39.8100',
    '4. close': '46.0600',
    '5. volume': '2947377'
  },
  '2005-06-30': {
    '1. open': '41.0000',
    '2. high': '42.0500',
    '3. low': '40.8000',
    '4. close': '41.6200',
    '5. volume': '782424'
  },
  '2005-05-31': {
    '1. open': '39.0500',
    '2. high': '41.1300',
    '3. low': '38.5000',
    '4. close': '41.0200',
    '5. volume': '694697'
  },
  '2005-04-29': {
    '1. open': '41.3000',
    '2. high': '44.1700',
    '3. low': '38.3100',
    '4. close': '38.9900',
    '5. volume': '1901852'
  },
  '2005-03-31': {
    '1. open': '43.5000',
    '2. high': '44.1500',
    '3. low': '39.2500',
    '4. close': '41.0000',
    '5. volume': '1715429'
  },
  '2005-02-28': {
    '1. open': '39.8500',
    '2. high': '43.5700',
    '3. low': '39.8000',
    '4. close': '43.4000',
    '5. volume': '1307806'
  },
  '2005-01-31': {
    '1. open': '38.9000',
    '2. high': '41.5000',
    '3. low': '38.1500',
    '4. close': '40.0500',
    '5. volume': '1330106'
  },
  '2004-12-30': {
    '1. open': '38.8800',
    '2. high': '39.6500',
    '3. low': '37.1100',
    '4. close': '39.2500',
    '5. volume': '539323'
  },
  '2004-11-30': {
    '1. open': '34.9800',
    '2. high': '42.4700',
    '3. low': '34.9700',
    '4. close': '38.6400',
    '5. volume': '1866662'
  },
  '2004-10-29': {
    '1. open': '35.2500',
    '2. high': '36.5000',
    '3. low': '33.0100',
    '4. close': '35.0000',
    '5. volume': '208696'
  },
  '2004-09-30': {
    '1. open': '33.6000',
    '2. high': '35.8000',
    '3. low': '33.2100',
    '4. close': '35.0000',
    '5. volume': '119833'
  },
  '2004-08-31': {
    '1. open': '32.4500',
    '2. high': '34.2000',
    '3. low': '32.1600',
    '4. close': '33.2000',
    '5. volume': '112370'
  },
  '2004-07-30': {
    '1. open': '33.7000',
    '2. high': '34.0000',
    '3. low': '29.8200',
    '4. close': '32.3300',
    '5. volume': '73590'
  },
  '2004-06-30': {
    '1. open': '31.2600',
    '2. high': '34.2700',
    '3. low': '31.2600',
    '4. close': '33.9700',
    '5. volume': '61070'
  },
  '2004-05-31': {
    '1. open': '33.6000',
    '2. high': '35.5000',
    '3. low': '29.5000',
    '4. close': '31.2700',
    '5. volume': '110909'
  },
  '2004-04-30': {
    '1. open': '30.2000',
    '2. high': '35.3000',
    '3. low': '30.2000',
    '4. close': '33.8800',
    '5. volume': '144145'
  },
  '2004-03-31': {
    '1. open': '28.2500',
    '2. high': '30.3000',
    '3. low': '27.0000',
    '4. close': '30.3000',
    '5. volume': '137931'
  },
  '2004-02-27': {
    '1. open': '26.6100',
    '2. high': '29.2600',
    '3. low': '26.3000',
    '4. close': '28.0000',
    '5. volume': '109408'
  },
  '2004-01-30': {
    '1. open': '23.0500',
    '2. high': '27.3900',
    '3. low': '23.0500',
    '4. close': '26.6100',
    '5. volume': '272120'
  },
  '2003-12-30': {
    '1. open': '27.3500',
    '2. high': '27.9900',
    '3. low': '23.0100',
    '4. close': '23.0100',
    '5. volume': '107646'
  },
  '2003-11-28': {
    '1. open': '26.4300',
    '2. high': '28.9400',
    '3. low': '25.5100',
    '4. close': '27.2100',
    '5. volume': '152515'
  },
  '2003-10-31': {
    '1. open': '22.8600',
    '2. high': '26.8500',
    '3. low': '22.7000',
    '4. close': '26.4800',
    '5. volume': '126309'
  },
  '2003-09-30': {
    '1. open': '21.2000',
    '2. high': '24.7900',
    '3. low': '21.2000',
    '4. close': '23.2500',
    '5. volume': '94957'
  },
  '2003-08-29': {
    '1. open': '24.8100',
    '2. high': '27.8000',
    '3. low': '21.2000',
    '4. close': '21.5500',
    '5. volume': '130849'
  },
  '2003-07-31': {
    '1. open': '19.5000',
    '2. high': '25.4600',
    '3. low': '18.4000',
    '4. close': '24.9500',
    '5. volume': '80600'
  },
  '2003-06-30': {
    '1. open': '19.3900',
    '2. high': '20.3400',
    '3. low': '18.9000',
    '4. close': '19.2500',
    '5. volume': '37364'
  },
  '2003-05-30': {
    '1. open': '18.7000',
    '2. high': '20.9000',
    '3. low': '17.6000',
    '4. close': '19.3000',
    '5. volume': '78436'
  },
  '2003-04-30': {
    '1. open': '13.9000',
    '2. high': '18.8000',
    '3. low': '13.0000',
    '4. close': '18.4600',
    '5. volume': '108300'
  },
  '2003-03-31': {
    '1. open': '13.4000',
    '2. high': '13.7500',
    '3. low': '12.5500',
    '4. close': '13.6700',
    '5. volume': '35235'
  },
  '2003-02-28': {
    '1. open': '14.2000',
    '2. high': '14.3000',
    '3. low': '12.3100',
    '4. close': '13.2700',
    '5. volume': '32753'
  },
  '2003-01-31': {
    '1. open': '14.7400',
    '2. high': '15.6300',
    '3. low': '12.6500',
    '4. close': '14.1000',
    '5. volume': '44307'
  },
  '2002-12-30': {
    '1. open': '15.8400',
    '2. high': '15.8700',
    '3. low': '13.5000',
    '4. close': '14.7000',
    '5. volume': '33630'
  },
  '2002-11-29': {
    '1. open': '16.4000',
    '2. high': '17.8400',
    '3. low': '15.5000',
    '4. close': '15.6900',
    '5. volume': '21749'
  },
  '2002-10-31': {
    '1. open': '17.2000',
    '2. high': '17.9000',
    '3. low': '15.3900',
    '4. close': '16.4200',
    '5. volume': '21304'
  },
  '2002-09-30': {
    '1. open': '19.7000',
    '2. high': '20.0500',
    '3. low': '17.0000',
    '4. close': '17.0000',
    '5. volume': '49233'
  },
  '2002-08-30': {
    '1. open': '16.4900',
    '2. high': '20.2000',
    '3. low': '16.0000',
    '4. close': '20.0000',
    '5. volume': '42912'
  },
  '2002-07-31': {
    '1. open': '17.9000',
    '2. high': '18.9000',
    '3. low': '14.5700',
    '4. close': '16.5000',
    '5. volume': '36705'
  },
  '2002-06-28': {
    '1. open': '19.6000',
    '2. high': '20.0000',
    '3. low': '17.0000',
    '4. close': '18.0200',
    '5. volume': '25485'
  },
  '2002-05-31': {
    '1. open': '19.1800',
    '2. high': '20.0000',
    '3. low': '18.6000',
    '4. close': '19.6000',
    '5. volume': '22915'
  },
  '2002-04-30': {
    '1. open': '18.2000',
    '2. high': '19.0400',
    '3. low': '16.8000',
    '4. close': '18.8000',
    '5. volume': '50860'
  },
  '2002-03-28': {
    '1. open': '20.5000',
    '2. high': '20.5000',
    '3. low': '18.5000',
    '4. close': '18.5000',
    '5. volume': '68202'
  },
  '2002-02-28': {
    '1. open': '20.4100',
    '2. high': '20.7000',
    '3. low': '19.7200',
    '4. close': '20.7000',
    '5. volume': '93017'
  },
  '2002-01-31': {
    '1. open': '20.3700',
    '2. high': '20.9900',
    '3. low': '18.3400',
    '4. close': '20.5000',
    '5. volume': '69605'
  },
  '2001-12-28': {
    '1. open': '17.1900',
    '2. high': '21.8200',
    '3. low': '16.2500',
    '4. close': '20.6600',
    '5. volume': '82642'
  },
  '2001-11-30': {
    '1. open': '20.3000',
    '2. high': '22.7900',
    '3. low': '16.7000',
    '4. close': '17.3900',
    '5. volume': '178386'
  },
  '2001-10-31': {
    '1. open': '18.0100',
    '2. high': '20.3300',
    '3. low': '17.3500',
    '4. close': '20.2900',
    '5. volume': '73938'
  },
  '2001-09-28': {
    '1. open': '18.0000',
    '2. high': '21.0000',
    '3. low': '16.2000',
    '4. close': '18.0000',
    '5. volume': '72736'
  },
  '2001-08-31': {
    '1. open': '18.0000',
    '2. high': '18.2000',
    '3. low': '17.7500',
    '4. close': '18.0000',
    '5. volume': '150695'
  },
  '2001-07-31': {
    '1. open': '18.2900',
    '2. high': '18.4800',
    '3. low': '17.8000',
    '4. close': '18.0000',
    '5. volume': '81246'
  },
  '2001-06-29': {
    '1. open': '16.7700',
    '2. high': '18.7500',
    '3. low': '16.7500',
    '4. close': '18.7500',
    '5. volume': '104748'
  },
  '2001-05-31': {
    '1. open': '16.3000',
    '2. high': '17.0500',
    '3. low': '16.0800',
    '4. close': '17.0000',
    '5. volume': '67090'
  },
  '2001-04-30': {
    '1. open': '16.0500',
    '2. high': '16.8000',
    '3. low': '16.0000',
    '4. close': '16.5000',
    '5. volume': '38650'
  },
  '2001-03-30': {
    '1. open': '15.8000',
    '2. high': '18.4600',
    '3. low': '14.0000',
    '4. close': '15.8200',
    '5. volume': '222715'
  },
  '2001-02-28': {
    '1. open': '11.8000',
    '2. high': '16.1800',
    '3. low': '11.0000',
    '4. close': '15.6500',
    '5. volume': '187117'
  },
  '2001-01-30': {
    '1. open': '9.3800',
    '2. high': '11.9300',
    '3. low': '9.3600',
    '4. close': '11.7900',
    '5. volume': '123034'
  },
  '2000-12-29': {
    '1. open': '7.5400',
    '2. high': '9.3800',
    '3. low': '7.5400',
    '4. close': '9.2500',
    '5. volume': '466951'
  },
  '2000-11-30': {
    '1. open': '11.0000',
    '2. high': '11.6200',
    '3. low': '6.4100',
    '4. close': '7.4300',
    '5. volume': '833828'
  },
  '2000-10-31': {
    '1. open': '11.5300',
    '2. high': '11.7900',
    '3. low': '10.5900',
    '4. close': '11.3500',
    '5. volume': '57346'
  },
  '2000-09-29': {
    '1. open': '12.7000',
    '2. high': '13.8900',
    '3. low': '11.2000',
    '4. close': '11.7000',
    '5. volume': '58071'
  },
  '2000-08-31': {
    '1. open': '13.2000',
    '2. high': '13.2000',
    '3. low': '12.0000',
    '4. close': '13.1100',
    '5. volume': '40018'
  },
  '2000-07-31': {
    '1. open': '13.0000',
    '2. high': '13.1800',
    '3. low': '12.2200',
    '4. close': '13.1800',
    '5. volume': '32725'
  },
  '2000-06-30': {
    '1. open': '16.2500',
    '2. high': '17.1700',
    '3. low': '12.9100',
    '4. close': '12.9100',
    '5. volume': '51648'
  },
  '2000-05-31': {
    '1. open': '14.7100',
    '2. high': '16.5000',
    '3. low': '14.3500',
    '4. close': '16.5000',
    '5. volume': '33141'
  },
  '2000-04-28': {
    '1. open': '16.1000',
    '2. high': '16.5000',
    '3. low': '14.3000',
    '4. close': '14.3000',
    '5. volume': '45073'
  },
  '2000-03-31': {
    '1. open': '10.2800',
    '2. high': '17.0400',
    '3. low': '10.2800',
    '4. close': '16.3000',
    '5. volume': '166747'
  },
  '2000-02-29': {
    '1. open': '11.7000',
    '2. high': '12.3500',
    '3. low': '10.2000',
    '4. close': '10.2000',
    '5. volume': '80785'
  },
  '2000-01-31': {
    '1. open': '15.0000',
    '2. high': '15.0000',
    '3. low': '11.2700',
    '4. close': '11.4400',
    '5. volume': '64367'
  },
  '1999-12-30': {
    '1. open': '15.1600',
    '2. high': '15.3000',
    '3. low': '11.6000',
    '4. close': '15.0000',
    '5. volume': '129389'
  }
};

// tslint:disable:max-line-length
export const rheinmetallCompany: Company = {
  id: 1077,
  name: 'Rheinmetall AG',
  country: Country.Deutschland,
  city: 'Düsseldorf',
  url: 'http://www.rheinmetall.com/',
  description: 'Die Rheinmetall AG ist ein börsennotierter deutscher Rüstungskonzern und Automobilzulieferer mit Sitz in Düsseldorf.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Rheinmetall',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Rheinmetall_logo_2016.svg/500px-Rheinmetall_logo_2016.svg.png',
  products: [],
  industries: [2211, 2212, 121110],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE0007030009',
  wkn: '703000',
  symbol: 'RHM.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Automotive', 'Defence', 'Rüstungskonzern', 'Waffen', 'Munition', 'Rüstungsexporte']
};
// tslint:enable:max-line-length

