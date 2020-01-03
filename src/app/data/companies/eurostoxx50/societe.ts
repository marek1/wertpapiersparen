import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [];
const prices = {
  '2019-12-02': {
    '1. open': '28.7300',
    '2. high': '29.1100',
    '3. low': '28.3350',
    '4. close': '28.6150',
    '5. volume': '5903'
  },
  '2019-11-29': {
    '1. open': '25.4650',
    '2. high': '29.0000',
    '3. low': '25.3750',
    '4. close': '28.5900',
    '5. volume': '206605'
  },
  '2019-10-31': {
    '1. open': '25.0650',
    '2. high': '26.9000',
    '3. low': '22.9000',
    '4. close': '25.4500',
    '5. volume': '261296'
  },
  '2019-09-30': {
    '1. open': '23.0900',
    '2. high': '26.2100',
    '3. low': '22.8400',
    '4. close': '25.1450',
    '5. volume': '256831'
  },
  '2019-08-30': {
    '1. open': '22.8150',
    '2. high': '23.5250',
    '3. low': '21.0500',
    '4. close': '23.0600',
    '5. volume': '152330'
  },
  '2019-07-31': {
    '1. open': '22.6200',
    '2. high': '23.7050',
    '3. low': '21.9000',
    '4. close': '22.2050',
    '5. volume': '108051'
  },
  '2019-06-28': {
    '1. open': '22.3300',
    '2. high': '22.7200',
    '3. low': '20.8300',
    '4. close': '22.2200',
    '5. volume': '118227'
  },
  '2019-05-31': {
    '1. open': '28.2200',
    '2. high': '29.6300',
    '3. low': '22.3000',
    '4. close': '22.4550',
    '5. volume': '232611'
  },
  '2019-04-30': {
    '1. open': '26.0350',
    '2. high': '29.1650',
    '3. low': '25.9900',
    '4. close': '28.2150',
    '5. volume': '150384'
  },
  '2019-03-29': {
    '1. open': '27.2000',
    '2. high': '28.2000',
    '3. low': '25.1850',
    '4. close': '25.7500',
    '5. volume': '218622'
  },
  '2019-02-28': {
    '1. open': '27.0800',
    '2. high': '27.3100',
    '3. low': '23.6400',
    '4. close': '27.0100',
    '5. volume': '217320'
  },
  '2019-01-31': {
    '1. open': '27.2350',
    '2. high': '29.4950',
    '3. low': '26.9000',
    '4. close': '27.1350',
    '5. volume': '148808'
  },
  '2018-12-28': {
    '1. open': '33.1850',
    '2. high': '33.1850',
    '3. low': '27.0800',
    '4. close': '27.7850',
    '5. volume': '116118'
  },
  '2018-11-30': {
    '1. open': '32.4750',
    '2. high': '34.4450',
    '3. low': '32.1600',
    '4. close': '32.4800',
    '5. volume': '108762'
  },
  '2018-10-31': {
    '1. open': '36.8050',
    '2. high': '37.3600',
    '3. low': '31.9950',
    '4. close': '32.4850',
    '5. volume': '183730'
  },
  '2018-09-28': {
    '1. open': '35.3200',
    '2. high': '38.4450',
    '3. low': '34.9500',
    '4. close': '36.9800',
    '5. volume': '112844'
  },
  '2018-08-31': {
    '1. open': '38.4100',
    '2. high': '38.4100',
    '3. low': '34.9350',
    '4. close': '35.2400',
    '5. volume': '160955'
  },
  '2018-07-31': {
    '1. open': '35.8050',
    '2. high': '38.3150',
    '3. low': '35.5600',
    '4. close': '38.1350',
    '5. volume': '141714'
  },
  '2018-06-29': {
    '1. open': '37.3050',
    '2. high': '38.4800',
    '3. low': '35.2300',
    '4. close': '36.1225',
    '5. volume': '141217'
  },
  '2018-05-31': {
    '1. open': '45.4450',
    '2. high': '46.2500',
    '3. low': '36.6850',
    '4. close': '36.8700',
    '5. volume': '169592'
  },
  '2018-04-30': {
    '1. open': '44.0100',
    '2. high': '46.3350',
    '3. low': '42.8450',
    '4. close': '45.2750',
    '5. volume': '43415'
  },
  '2018-03-29': {
    '1. open': '46.8500',
    '2. high': '46.9000',
    '3. low': '42.9950',
    '4. close': '44.9500',
    '5. volume': '84217'
  },
  '2018-02-28': {
    '1. open': '47.2700',
    '2. high': '47.4550',
    '3. low': '43.5150',
    '4. close': '46.8500',
    '5. volume': '99212'
  },
  '2018-01-31': {
    '1. open': '43.0000',
    '2. high': '47.2150',
    '3. low': '43.0000',
    '4. close': '46.4000',
    '5. volume': '109902'
  },
  '2017-12-29': {
    '1. open': '43.0000',
    '2. high': '43.0000',
    '3. low': '43.0000',
    '4. close': '43.0000',
    '5. volume': '0'
  },
  '2017-11-30': {
    '1. open': '48.0950',
    '2. high': '48.6050',
    '3. low': '42.5000',
    '4. close': '43.0000',
    '5. volume': '145406'
  },
  '2017-10-31': {
    '1. open': '49.4100',
    '2. high': '49.8000',
    '3. low': '47.1950',
    '4. close': '48.1050',
    '5. volume': '40487'
  },
  '2017-09-29': {
    '1. open': '47.3000',
    '2. high': '49.6550',
    '3. low': '45.7150',
    '4. close': '48.8150',
    '5. volume': '57656'
  },
  '2017-08-31': {
    '1. open': '49.8700',
    '2. high': '50.5800',
    '3. low': '46.0250',
    '4. close': '47.3750',
    '5. volume': '113751'
  },
  '2017-07-31': {
    '1. open': '47.8050',
    '2. high': '50.2200',
    '3. low': '47.3750',
    '4. close': '49.4250',
    '5. volume': '47281'
  },
  '2017-06-30': {
    '1. open': '46.5100',
    '2. high': '49.4000',
    '3. low': '45.6000',
    '4. close': '47.1850',
    '5. volume': '73599'
  },
  '2017-05-31': {
    '1. open': '50.5900',
    '2. high': '52.0000',
    '3. low': '46.9800',
    '4. close': '46.9800',
    '5. volume': '101842'
  },
  '2017-04-28': {
    '1. open': '47.4750',
    '2. high': '51.2400',
    '3. low': '42.9050',
    '4. close': '50.2200',
    '5. volume': '64654'
  },
  '2017-03-31': {
    '1. open': '42.8000',
    '2. high': '48.4900',
    '3. low': '42.7250',
    '4. close': '47.3150',
    '5. volume': '44311'
  },
  '2017-02-28': {
    '1. open': '45.6650',
    '2. high': '46.1300',
    '3. low': '40.8050',
    '4. close': '42.0000',
    '5. volume': '61403'
  },
  '2017-01-31': {
    '1. open': '46.7100',
    '2. high': '49.2600',
    '3. low': '44.7900',
    '4. close': '45.4100',
    '5. volume': '43918'
  },
  '2016-12-30': {
    '1. open': '40.9500',
    '2. high': '47.8000',
    '3. low': '39.5850',
    '4. close': '46.5350',
    '5. volume': '94645'
  },
  '2016-11-30': {
    '1. open': '35.4800',
    '2. high': '41.2000',
    '3. low': '34.2350',
    '4. close': '40.7600',
    '5. volume': '70122'
  },
  '2016-10-31': {
    '1. open': '30.6400',
    '2. high': '36.4850',
    '3. low': '30.6400',
    '4. close': '35.6000',
    '5. volume': '82036'
  },
  '2016-09-30': {
    '1. open': '33.2050',
    '2. high': '33.9500',
    '3. low': '29.3850',
    '4. close': '30.8450',
    '5. volume': '59852'
  },
  '2016-08-31': {
    '1. open': '30.6850',
    '2. high': '33.0100',
    '3. low': '28.1200',
    '4. close': '32.7150',
    '5. volume': '68736'
  },
  '2016-07-29': {
    '1. open': '28.6850',
    '2. high': '30.8550',
    '3. low': '26.1550',
    '4. close': '30.4800',
    '5. volume': '79070'
  },
  '2016-06-30': {
    '1. open': '36.4850',
    '2. high': '37.0000',
    '3. low': '25.9500',
    '4. close': '28.4600',
    '5. volume': '118485'
  },
  '2016-05-31': {
    '1. open': '34.1000',
    '2. high': '37.2700',
    '3. low': '31.7300',
    '4. close': '37.2700',
    '5. volume': '87709'
  },
  '2016-04-29': {
    '1. open': '32.2250',
    '2. high': '35.9650',
    '3. low': '29.8650',
    '4. close': '34.6000',
    '5. volume': '54060'
  },
  '2016-03-31': {
    '1. open': '32.3800',
    '2. high': '37.0000',
    '3. low': '32.0000',
    '4. close': '32.6450',
    '5. volume': '34585'
  },
  '2016-02-29': {
    '1. open': '35.2200',
    '2. high': '35.2200',
    '3. low': '26.7300',
    '4. close': '31.4800',
    '5. volume': '164421'
  },
  '2016-01-29': {
    '1. open': '41.5800',
    '2. high': '41.6100',
    '3. low': '33.9600',
    '4. close': '34.9100',
    '5. volume': '112525'
  },
  '2015-12-30': {
    '1. open': '45.4300',
    '2. high': '45.6250',
    '3. low': '40.1300',
    '4. close': '43.0450',
    '5. volume': '53400'
  },
  '2015-11-30': {
    '1. open': '42.4000',
    '2. high': '45.8750',
    '3. low': '42.4000',
    '4. close': '45.3250',
    '5. volume': '34421'
  },
  '2015-10-30': {
    '1. open': '40.3450',
    '2. high': '43.5800',
    '3. low': '39.6900',
    '4. close': '42.0650',
    '5. volume': '60282'
  },
  '2015-09-30': {
    '1. open': '42.5500',
    '2. high': '43.6400',
    '3. low': '37.1600',
    '4. close': '39.8900',
    '5. volume': '48371'
  },
  '2015-08-31': {
    '1. open': '44.7900',
    '2. high': '48.6300',
    '3. low': '39.6000',
    '4. close': '43.3750',
    '5. volume': '79773'
  },
  '2015-07-31': {
    '1. open': '42.6150',
    '2. high': '45.6150',
    '3. low': '39.0500',
    '4. close': '44.5500',
    '5. volume': '78933'
  },
  '2015-06-30': {
    '1. open': '42.5850',
    '2. high': '44.7700',
    '3. low': '41.0000',
    '4. close': '42.1450',
    '5. volume': '94079'
  },
  '2015-05-29': {
    '1. open': '44.9450',
    '2. high': '46.2150',
    '3. low': '42.3550',
    '4. close': '42.3800',
    '5. volume': '71875'
  },
  '2015-04-30': {
    '1. open': '44.8000',
    '2. high': '46.8750',
    '3. low': '44.3800',
    '4. close': '44.8150',
    '5. volume': '151314'
  },
  '2015-03-31': {
    '1. open': '41.6900',
    '2. high': '45.8450',
    '3. low': '40.3100',
    '4. close': '44.8000',
    '5. volume': '88697'
  },
  '2015-02-27': {
    '1. open': '35.7800',
    '2. high': '41.3750',
    '3. low': '35.1800',
    '4. close': '41.1500',
    '5. volume': '146019'
  },
  '2015-01-30': {
    '1. open': '35.3450',
    '2. high': '39.0650',
    '3. low': '32.5400',
    '4. close': '35.6950',
    '5. volume': '268916'
  },
  '2014-12-30': {
    '1. open': '39.5550',
    '2. high': '39.5550',
    '3. low': '31.8600',
    '4. close': '35.1550',
    '5. volume': '173811'
  },
  '2014-11-28': {
    '1. open': '38.9200',
    '2. high': '40.0900',
    '3. low': '34.8400',
    '4. close': '39.6900',
    '5. volume': '98931'
  },
  '2014-10-31': {
    '1. open': '40.5000',
    '2. high': '40.7200',
    '3. low': '32.6000',
    '4. close': '38.4600',
    '5. volume': '111587'
  },
  '2014-09-30': {
    '1. open': '38.5000',
    '2. high': '42.0250',
    '3. low': '37.8600',
    '4. close': '40.5850',
    '5. volume': '36067'
  },
  '2014-08-29': {
    '1. open': '37.4900',
    '2. high': '39.5500',
    '3. low': '34.8050',
    '4. close': '38.4300',
    '5. volume': '132215'
  },
  '2014-07-31': {
    '1. open': '38.9600',
    '2. high': '40.2250',
    '3. low': '36.1450',
    '4. close': '37.4950',
    '5. volume': '38671'
  },
  '2014-06-30': {
    '1. open': '42.3550',
    '2. high': '44.5900',
    '3. low': '38.0550',
    '4. close': '38.0550',
    '5. volume': '38154'
  },
  '2014-05-30': {
    '1. open': '44.7900',
    '2. high': '44.7900',
    '3. low': '40.3650',
    '4. close': '42.2650',
    '5. volume': '47574'
  },
  '2014-04-30': {
    '1. open': '45.3650',
    '2. high': '47.7300',
    '3. low': '41.9150',
    '4. close': '44.7900',
    '5. volume': '23579'
  },
  '2014-03-31': {
    '1. open': '46.0400',
    '2. high': '48.3000',
    '3. low': '43.3050',
    '4. close': '44.9900',
    '5. volume': '52359'
  },
  '2014-02-28': {
    '1. open': '41.9800',
    '2. high': '48.5000',
    '3. low': '40.7200',
    '4. close': '48.2050',
    '5. volume': '57441'
  },
  '2014-01-31': {
    '1. open': '42.2250',
    '2. high': '46.3600',
    '3. low': '41.3750',
    '4. close': '41.9300',
    '5. volume': '108021'
  },
  '2013-12-30': {
    '1. open': '42.4800',
    '2. high': '42.4800',
    '3. low': '39.3200',
    '4. close': '42.2800',
    '5. volume': '55105'
  },
  '2013-11-29': {
    '1. open': '41.6500',
    '2. high': '42.9000',
    '3. low': '39.8050',
    '4. close': '42.3300',
    '5. volume': '64193'
  },
  '2013-10-31': {
    '1. open': '37.2000',
    '2. high': '42.4500',
    '3. low': '37.2000',
    '4. close': '41.7000',
    '5. volume': '88458'
  },
  '2013-09-30': {
    '1. open': '33.7600',
    '2. high': '38.6750',
    '3. low': '33.2900',
    '4. close': '36.7550',
    '5. volume': '82466'
  },
  '2013-08-30': {
    '1. open': '31.6000',
    '2. high': '36.0150',
    '3. low': '31.6000',
    '4. close': '33.2200',
    '5. volume': '186298'
  },
  '2013-07-31': {
    '1. open': '26.6300',
    '2. high': '30.8600',
    '3. low': '25.3500',
    '4. close': '30.2350',
    '5. volume': '60171'
  },
  '2013-06-28': {
    '1. open': '30.5000',
    '2. high': '31.4100',
    '3. low': '26.1300',
    '4. close': '26.5300',
    '5. volume': '68755'
  },
  '2013-05-31': {
    '1. open': '27.3200',
    '2. high': '32.2550',
    '3. low': '27.2850',
    '4. close': '31.0800',
    '5. volume': '129611'
  },
  '2013-04-30': {
    '1. open': '25.8000',
    '2. high': '28.0750',
    '3. low': '23.8900',
    '4. close': '27.6100',
    '5. volume': '116125'
  },
  '2013-03-28': {
    '1. open': '28.9800',
    '2. high': '31.0000',
    '3. low': '24.9450',
    '4. close': '25.7800',
    '5. volume': '137191'
  },
  '2013-02-28': {
    '1. open': '33.2400',
    '2. high': '33.9150',
    '3. low': '27.9750',
    '4. close': '29.5500',
    '5. volume': '103549'
  },
  '2013-01-31': {
    '1. open': '29.0800',
    '2. high': '34.3000',
    '3. low': '29.0800',
    '4. close': '32.4450',
    '5. volume': '140682'
  },
  '2012-12-28': {
    '1. open': '27.8150',
    '2. high': '29.9900',
    '3. low': '27.8150',
    '4. close': '28.4900',
    '5. volume': '75378'
  },
  '2012-11-30': {
    '1. open': '24.9750',
    '2. high': '28.0000',
    '3. low': '23.8100',
    '4. close': '28.0000',
    '5. volume': '83314'
  },
  '2012-10-31': {
    '1. open': '22.2200',
    '2. high': '26.8000',
    '3. low': '22.2200',
    '4. close': '24.5900',
    '5. volume': '165496'
  },
  '2012-09-28': {
    '1. open': '20.8950',
    '2. high': '25.6100',
    '3. low': '20.5800',
    '4. close': '22.1200',
    '5. volume': '362701'
  },
  '2012-08-31': {
    '1. open': '18.5300',
    '2. high': '21.9200',
    '3. low': '16.8000',
    '4. close': '21.1000',
    '5. volume': '252195'
  },
  '2012-07-31': {
    '1. open': '18.3500',
    '2. high': '19.3900',
    '3. low': '15.3500',
    '4. close': '18.1000',
    '5. volume': '452684'
  },
  '2012-06-29': {
    '1. open': '16.0900',
    '2. high': '18.4150',
    '3. low': '15.8050',
    '4. close': '18.3250',
    '5. volume': '311495'
  },
  '2012-05-31': {
    '1. open': '18.3800',
    '2. high': '18.7750',
    '3. low': '15.1000',
    '4. close': '15.9400',
    '5. volume': '551704'
  },
  '2012-04-30': {
    '1. open': '21.5650',
    '2. high': '22.3350',
    '3. low': '16.3300',
    '4. close': '18.0500',
    '5. volume': '629984'
  },
  '2012-03-30': {
    '1. open': '23.8000',
    '2. high': '25.8050',
    '3. low': '21.4750',
    '4. close': '21.9000',
    '5. volume': '279458'
  },
  '2012-02-29': {
    '1. open': '20.7250',
    '2. high': '25.3600',
    '3. low': '20.6300',
    '4. close': '24.4200',
    '5. volume': '873710'
  },
  '2012-01-31': {
    '1. open': '17.0100',
    '2. high': '23.0500',
    '3. low': '14.9550',
    '4. close': '20.2200',
    '5. volume': '1185339'
  },
  '2011-12-30': {
    '1. open': '17.9300',
    '2. high': '21.0400',
    '3. low': '15.9000',
    '4. close': '16.5200',
    '5. volume': '612370'
  },
  '2011-11-30': {
    '1. open': '18.6000',
    '2. high': '19.5000',
    '3. low': '15.0850',
    '4. close': '17.9850',
    '5. volume': '864562'
  },
  '2011-10-31': {
    '1. open': '19.0000',
    '2. high': '24.5350',
    '3. low': '17.5000',
    '4. close': '21.1800',
    '5. volume': '636413'
  },
  '2011-09-30': {
    '1. open': '24.1200',
    '2. high': '24.1200',
    '3. low': '14.4800',
    '4. close': '19.8800',
    '5. volume': '565113'
  },
  '2011-08-31': {
    '1. open': '35.7500',
    '2. high': '35.7500',
    '3. low': '20.1000',
    '4. close': '23.1750',
    '5. volume': '532492'
  },
  '2011-07-29': {
    '1. open': '41.0800',
    '2. high': '42.4950',
    '3. low': '32.8400',
    '4. close': '34.4000',
    '5. volume': '204185'
  },
  '2011-06-30': {
    '1. open': '41.3000',
    '2. high': '41.3000',
    '3. low': '37.2900',
    '4. close': '40.9750',
    '5. volume': '160822'
  },
  '2011-05-31': {
    '1. open': '45.5100',
    '2. high': '46.4750',
    '3. low': '41.0300',
    '4. close': '41.3000',
    '5. volume': '126281'
  },
  '2011-04-29': {
    '1. open': '46.3800',
    '2. high': '48.1000',
    '3. low': '43.0000',
    '4. close': '45.5000',
    '5. volume': '60616'
  },
  '2011-03-31': {
    '1. open': '51.3100',
    '2. high': '51.4300',
    '3. low': '42.7700',
    '4. close': '46.0900',
    '5. volume': '125353'
  },
  '2011-02-28': {
    '1. open': '47.5500',
    '2. high': '52.7300',
    '3. low': '46.1900',
    '4. close': '51.3000',
    '5. volume': '92145'
  },
  '2011-01-31': {
    '1. open': '40.7600',
    '2. high': '49.5350',
    '3. low': '39.3800',
    '4. close': '47.2000',
    '5. volume': '131255'
  },
  '2010-12-30': {
    '1. open': '36.3800',
    '2. high': '43.1800',
    '3. low': '36.3800',
    '4. close': '40.8300',
    '5. volume': '94561'
  },
  '2010-11-30': {
    '1. open': '42.3550',
    '2. high': '45.8500',
    '3. low': '35.0650',
    '4. close': '35.6000',
    '5. volume': '119488'
  },
  '2010-10-29': {
    '1. open': '41.0450',
    '2. high': '45.0000',
    '3. low': '41.0000',
    '4. close': '43.2500',
    '5. volume': '34043'
  },
  '2010-09-28': {
    '1. open': '42.9500',
    '2. high': '46.1550',
    '3. low': '40.0000',
    '4. close': '44.8800',
    '5. volume': '4720'
  },
  '2010-08-31': {
    '1. open': '46.4750',
    '2. high': '46.7700',
    '3. low': '39.4550',
    '4. close': '39.4550',
    '5. volume': '5880'
  },
  '2009-01-19': {
    '1. open': '36.4344',
    '2. high': '37.2087',
    '3. low': '29.0879',
    '4. close': '29.1872',
    '5. volume': '32742'
  },
  '2008-12-30': {
    '1. open': '32.3045',
    '2. high': '39.7105',
    '3. low': '29.4453',
    '4. close': '34.4191',
    '5. volume': '147318'
  },
  '2008-11-28': {
    '1. open': '42.7781',
    '2. high': '49.0821',
    '3. low': '25.8515',
    '4. close': '33.2079',
    '5. volume': '100429'
  },
  '2008-10-31': {
    '1. open': '61.9384',
    '2. high': '68.5701',
    '3. low': '28.9986',
    '4. close': '42.2420',
    '5. volume': '143821'
  },
  '2008-09-30': {
    '1. open': '64.9663',
    '2. high': '69.6423',
    '3. low': '52.1696',
    '4. close': '61.8590',
    '5. volume': '231993'
  },
  '2008-08-29': {
    '1. open': '63.7353',
    '2. high': '66.0782',
    '3. low': '59.9628',
    '4. close': '65.8201',
    '5. volume': '38630'
  },
  '2008-07-28': {
    '1. open': '53.2120',
    '2. high': '63.4077',
    '3. low': '47.3150',
    '4. close': '59.0693',
    '5. volume': '172300'
  },
  '2008-06-30': {
    '1. open': '65.1053',
    '2. high': '66.0385',
    '3. low': '53.0433',
    '4. close': '54.5126',
    '5. volume': '123493'
  },
  '2008-05-30': {
    '1. open': '75.8272',
    '2. high': '78.2694',
    '3. low': '64.8274',
    '4. close': '66.7633',
    '5. volume': '114337'
  },
  '2008-04-30': {
    '1. open': '61.3825',
    '2. high': '76.2838',
    '3. low': '61.3825',
    '4. close': '75.0131',
    '5. volume': '170573'
  },
  '2008-03-31': {
    '1. open': '70.4464',
    '2. high': '72.8390',
    '3. low': '59.2878',
    '4. close': '61.9682',
    '5. volume': '340542'
  },
  '2008-02-29': {
    '1. open': '84.6032',
    '2. high': '88.8522',
    '3. low': '62.5142',
    '4. close': '70.3868',
    '5. volume': '298700'
  },
  '2008-01-31': {
    '1. open': '98.3232',
    '2. high': '99.1869',
    '3. low': '67.7064',
    '4. close': '82.1014',
    '5. volume': '212894'
  }
};

// tslint:disable:max-line-length
export const societeGeneralCompany: Company = {
  id: 1198,
  name: 'Société Générale S.A.',
  country: Country.Frankreich,
  city: 'Paris',
  url: 'http://www.societegenerale.com/',
  description: 'Die Société Générale, abgekürzt SG oder SocGén, mit Sitz in Paris ist eine der wichtigsten Geschäftsbanken Frankreichs und gehört zusammen mit dem Crédit Lyonnais und der BNP Paribas zu den drei ältesten Geschäftsbanken des Landes (les trois vieilles). Ihr ursprünglicher Name lautet Société Générale pour favoriser le développement du commerce et de l’industrie en France (‚Allgemeine Gesellschaft zur Förderung der Entwicklung des Handels und der Industrie in Frankreich‘).',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_G%C3%A9n%C3%A9rale',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Soci%C3%A9t%C3%A9_G%C3%A9n%C3%A9rale.svg/500px-Soci%C3%A9t%C3%A9_G%C3%A9n%C3%A9rale.svg.png',
  products: [],
  industries: [141010],
  securityType: SecurityType.ActionsPort,
  currency: Currency.EUR,
  isin: 'FR0000130809',
  wkn: '873403',
  symbol: 'SGE.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.CAC40, Indices.MSCIWorld],
  end_of_month_prices: prices,
  dividends,
  tags: ['Bank', 'Banking', 'Finanzdienstleistungen', 'Girokonto', 'Finanzierung', 'Immobilienfinanzierung', 'Universalbank', 'Privatkundengeschäft', 'Firmenkundengeschäft', 'Kreditkarten', 'Konsumkredite', 'Darlehen', 'Geldanlagen']
};
// tslint:enable:max-line-length

