import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.55, yield: 2.18}, {year: 2017, rate: 0.45}, {year: 2016, rate: 0.30}, {
    year: 2015,
    rate: 0.25,
    yield: 1.10
  }, {year: 2014, rate: 0.20, yield: 0.85}, {year: 2013, rate: 0.20, yield: 0.65}, {year: 2012, rate: 0.25, yield: 0.63}, {
    year: 2011,
    rate: 0.45,
    yield: 1.16
  }, {year: 2010, rate: 0.32, yield: 0.55}, {year: 2009, rate: 0.25, yield: 0.37}, {year: 2008, rate: 1.40, yield: 2.55}, {
    year: 2007,
    rate: 3.00,
    yield: 2.94
  }, {year: 2006, rate: 2.00, yield: 2.02}, {year: 2005, rate: 1.00, yield: 2.19}, {year: 2004, rate: 0.40, yield: 2.81}, {
    year: 2003,
    rate: 0.25,
    yield: 2.84
  }, {year: 2002, rate: 0.32, yield: 5.34}, {year: 2001, rate: 0.42, yield: 4.39}, {year: 2000, rate: 0.15, yield: 1.69}
];
const prices = {
  '2019-11-27': {
    '1. open': '16.4800',
    '2. high': '18.7750',
    '3. low': '16.2200',
    '4. close': '18.2600',
    '5. volume': '9220970'
  },
  '2019-10-31': {
    '1. open': '15.3000',
    '2. high': '17.3600',
    '3. low': '14.1300',
    '4. close': '16.2300',
    '5. volume': '10585904'
  },
  '2019-09-30': {
    '1. open': '16.6400',
    '2. high': '19.0850',
    '3. low': '15.1400',
    '4. close': '15.4000',
    '5. volume': '7559827'
  },
  '2019-08-30': {
    '1. open': '19.6850',
    '2. high': '19.8500',
    '3. low': '14.4550',
    '4. close': '16.5050',
    '5. volume': '9552988'
  },
  '2019-07-31': {
    '1. open': '25.4000',
    '2. high': '26.0900',
    '3. low': '19.1300',
    '4. close': '19.8500',
    '5. volume': '6452654'
  },
  '2019-06-28': {
    '1. open': '23.2500',
    '2. high': '25.6200',
    '3. low': '22.7000',
    '4. close': '25.1800',
    '5. volume': '3451787'
  },
  '2019-05-31': {
    '1. open': '29.3000',
    '2. high': '29.5300',
    '3. low': '22.9500',
    '4. close': '23.2700',
    '5. volume': '4054934'
  },
  '2019-04-30': {
    '1. open': '26.1900',
    '2. high': '31.5100',
    '3. low': '26.1500',
    '4. close': '29.3700',
    '5. volume': '4606068'
  },
  '2019-03-29': {
    '1. open': '26.9800',
    '2. high': '28.5100',
    '3. low': '24.8900',
    '4. close': '25.7800',
    '5. volume': '5652587'
  },
  '2019-02-28': {
    '1. open': '26.4000',
    '2. high': '27.3100',
    '3. low': '23.3700',
    '4. close': '26.8600',
    '5. volume': '6015719'
  },
  '2019-01-31': {
    '1. open': '25.4300',
    '2. high': '27.8600',
    '3. low': '24.1600',
    '4. close': '26.3200',
    '5. volume': '4651628'
  },
  '2018-12-28': {
    '1. open': '29.5000',
    '2. high': '30.2300',
    '3. low': '25.0800',
    '4. close': '25.5700',
    '5. volume': '4077750'
  },
  '2018-11-30': {
    '1. open': '35.4200',
    '2. high': '37.5400',
    '3. low': '27.4400',
    '4. close': '28.3400',
    '5. volume': '5447736'
  },
  '2018-10-31': {
    '1. open': '42.9900',
    '2. high': '43.8400',
    '3. low': '33.6900',
    '4. close': '35.3800',
    '5. volume': '4577758'
  },
  '2018-09-28': {
    '1. open': '39.0500',
    '2. high': '44.0000',
    '3. low': '36.5700',
    '4. close': '43.0500',
    '5. volume': '3771012'
  },
  '2018-08-31': {
    '1. open': '42.6000',
    '2. high': '42.6200',
    '3. low': '37.2800',
    '4. close': '39.0300',
    '5. volume': '3626490'
  },
  '2018-07-31': {
    '1. open': '36.6500',
    '2. high': '42.9800',
    '3. low': '36.0500',
    '4. close': '42.3000',
    '5. volume': '4284072'
  },
  '2018-06-29': {
    '1. open': '43.9700',
    '2. high': '45.5600',
    '3. low': '36.1600',
    '4. close': '37.3500',
    '5. volume': '4967353'
  },
  '2018-05-31': {
    '1. open': '45.7900',
    '2. high': '49.6700',
    '3. low': '43.4900',
    '4. close': '43.7600',
    '5. volume': '5236995'
  },
  '2018-04-30': {
    '1. open': '41.2000',
    '2. high': '47.2600',
    '3. low': '39.5900',
    '4. close': '45.5700',
    '5. volume': '4787538'
  },
  '2018-03-29': {
    '1. open': '47.0000',
    '2. high': '47.2000',
    '3. low': '39.9600',
    '4. close': '41.5400',
    '5. volume': '5560693'
  },
  '2018-02-28': {
    '1. open': '48.7700',
    '2. high': '49.9400',
    '3. low': '44.1900',
    '4. close': '47.2100',
    '5. volume': '5335466'
  },
  '2018-01-31': {
    '1. open': '47.7600',
    '2. high': '52.4800',
    '3. low': '47.0000',
    '4. close': '48.6000',
    '5. volume': '6035614'
  },
  '2017-12-29': {
    '1. open': '43.4400',
    '2. high': '48.5650',
    '3. low': '41.6500',
    '4. close': '47.5950',
    '5. volume': '3139707'
  },
  '2017-11-30': {
    '1. open': '42.0400',
    '2. high': '45.0600',
    '3. low': '39.1000',
    '4. close': '43.2650',
    '5. volume': '5274148'
  },
  '2017-10-31': {
    '1. open': '38.4850',
    '2. high': '44.2800',
    '3. low': '37.0250',
    '4. close': '41.5100',
    '5. volume': '4537912'
  },
  '2017-09-29': {
    '1. open': '37.9400',
    '2. high': '39.5150',
    '3. low': '36.4950',
    '4. close': '38.3800',
    '5. volume': '4566528'
  },
  '2017-08-31': {
    '1. open': '37.9550',
    '2. high': '39.5750',
    '3. low': '35.8300',
    '4. close': '37.7500',
    '5. volume': '6473552'
  },
  '2017-07-31': {
    '1. open': '35.7500',
    '2. high': '39.0800',
    '3. low': '35.7500',
    '4. close': '37.9150',
    '5. volume': '6250343'
  },
  '2017-06-30': {
    '1. open': '33.9950',
    '2. high': '36.6150',
    '3. low': '32.8000',
    '4. close': '35.7150',
    '5. volume': '6617356'
  },
  '2017-05-31': {
    '1. open': '31.5300',
    '2. high': '35.1900',
    '3. low': '31.1600',
    '4. close': '33.9000',
    '5. volume': '6920424'
  },
  '2017-04-28': {
    '1. open': '34.0050',
    '2. high': '34.8400',
    '3. low': '29.7400',
    '4. close': '31.4750',
    '5. volume': '6163168'
  },
  '2017-03-31': {
    '1. open': '34.6600',
    '2. high': '36.4500',
    '3. low': '31.6750',
    '4. close': '33.9350',
    '5. volume': '5446486'
  },
  '2017-02-28': {
    '1. open': '35.6650',
    '2. high': '38.4550',
    '3. low': '33.3800',
    '4. close': '34.5100',
    '5. volume': '5175533'
  },
  '2017-01-31': {
    '1. open': '33.4400',
    '2. high': '37.8700',
    '3. low': '33.0800',
    '4. close': '35.4300',
    '5. volume': '4617689'
  },
  '2016-12-30': {
    '1. open': '30.8050',
    '2. high': '35.4650',
    '3. low': '30.3400',
    '4. close': '33.5500',
    '5. volume': '5505169'
  },
  '2016-11-30': {
    '1. open': '30.0750',
    '2. high': '31.2300',
    '3. low': '27.0500',
    '4. close': '30.8300',
    '5. volume': '5695271'
  },
  '2016-10-31': {
    '1. open': '29.0150',
    '2. high': '32.6500',
    '3. low': '28.6000',
    '4. close': '29.9000',
    '5. volume': '5204320'
  },
  '2016-09-30': {
    '1. open': '27.5400',
    '2. high': '29.7000',
    '3. low': '26.7800',
    '4. close': '29.1650',
    '5. volume': '4180395'
  },
  '2016-08-31': {
    '1. open': '28.1500',
    '2. high': '30.7200',
    '3. low': '26.4050',
    '4. close': '27.2750',
    '5. volume': '6741643'
  },
  '2016-07-29': {
    '1. open': '23.8500',
    '2. high': '28.2950',
    '3. low': '22.5000',
    '4. close': '27.9000',
    '5. volume': '5388438'
  },
  '2016-06-30': {
    '1. open': '28.8000',
    '2. high': '29.3200',
    '3. low': '22.7150',
    '4. close': '23.6850',
    '5. volume': '6378114'
  },
  '2016-05-31': {
    '1. open': '29.6500',
    '2. high': '30.0800',
    '3. low': '25.2200',
    '4. close': '28.6900',
    '5. volume': '6610901'
  },
  '2016-04-29': {
    '1. open': '24.4500',
    '2. high': '30.8150',
    '3. low': '23.2800',
    '4. close': '29.5550',
    '5. volume': '9345121'
  },
  '2016-03-31': {
    '1. open': '20.7350',
    '2. high': '25.5200',
    '3. low': '20.7350',
    '4. close': '24.8850',
    '5. volume': '9272667'
  },
  '2016-02-29': {
    '1. open': '19.7900',
    '2. high': '22.3400',
    '3. low': '16.8050',
    '4. close': '21.0550',
    '5. volume': '11827433'
  },
  '2016-01-29': {
    '1. open': '22.2550',
    '2. high': '22.9300',
    '3. low': '18.1500',
    '4. close': '19.6800',
    '5. volume': '10124218'
  },
  '2015-12-30': {
    '1. open': '23.4650',
    '2. high': '23.7250',
    '3. low': '20.3350',
    '4. close': '22.7250',
    '5. volume': '9581091'
  },
  '2015-11-30': {
    '1. open': '26.2300',
    '2. high': '28.1700',
    '3. low': '22.6500',
    '4. close': '23.2800',
    '5. volume': '10033884'
  },
  '2015-10-30': {
    '1. open': '22.5550',
    '2. high': '27.7650',
    '3. low': '22.1000',
    '4. close': '26.2550',
    '5. volume': '8841278'
  },
  '2015-09-30': {
    '1. open': '27.2500',
    '2. high': '28.0200',
    '3. low': '21.2250',
    '4. close': '22.1900',
    '5. volume': '10185771'
  },
  '2015-08-31': {
    '1. open': '32.5750',
    '2. high': '34.3000',
    '3. low': '25.7600',
    '4. close': '27.7750',
    '5. volume': '9360785'
  },
  '2015-07-31': {
    '1. open': '32.5000',
    '2. high': '34.9950',
    '3. low': '29.7600',
    '4. close': '32.5150',
    '5. volume': '8858644'
  },
  '2015-06-30': {
    '1. open': '33.1000',
    '2. high': '34.9200',
    '3. low': '31.1850',
    '4. close': '32.0600',
    '5. volume': '8817011'
  },
  '2015-05-29': {
    '1. open': '30.8800',
    '2. high': '36.4150',
    '3. low': '30.7700',
    '4. close': '33.0200',
    '5. volume': '8552995'
  },
  '2015-04-30': {
    '1. open': '27.1300',
    '2. high': '31.7000',
    '3. low': '27.1300',
    '4. close': '30.6500',
    '5. volume': '10148037'
  },
  '2015-03-31': {
    '1. open': '26.3500',
    '2. high': '29.5700',
    '3. low': '24.7650',
    '4. close': '27.0850',
    '5. volume': '10618630'
  },
  '2015-02-27': {
    '1. open': '24.3650',
    '2. high': '27.8900',
    '3. low': '24.0000',
    '4. close': '25.5250',
    '5. volume': '9009515'
  },
  '2015-01-30': {
    '1. open': '23.2850',
    '2. high': '24.5100',
    '3. low': '21.0050',
    '4. close': '24.2450',
    '5. volume': '8913197'
  },
  '2014-12-30': {
    '1. open': '26.5750',
    '2. high': '26.6550',
    '3. low': '21.0700',
    '4. close': '23.4100',
    '5. volume': '9216407'
  },
  '2014-11-28': {
    '1. open': '24.0000',
    '2. high': '28.9550',
    '3. low': '22.4200',
    '4. close': '26.6050',
    '5. volume': '7751551'
  },
  '2014-10-31': {
    '1. open': '27.3000',
    '2. high': '27.5550',
    '3. low': '21.7500',
    '4. close': '24.0100',
    '5. volume': '7639879'
  },
  '2014-09-30': {
    '1. open': '28.6600',
    '2. high': '31.1000',
    '3. low': '26.7700',
    '4. close': '27.3050',
    '5. volume': '5882080'
  },
  '2014-08-29': {
    '1. open': '27.6550',
    '2. high': '29.7800',
    '3. low': '25.2650',
    '4. close': '28.4200',
    '5. volume': '7212567'
  },
  '2014-07-31': {
    '1. open': '30.8950',
    '2. high': '31.9950',
    '3. low': '27.8500',
    '4. close': '27.9350',
    '5. volume': '4339260'
  },
  '2014-06-30': {
    '1. open': '31.4400',
    '2. high': '31.9900',
    '3. low': '30.0500',
    '4. close': '30.7400',
    '5. volume': '4191564'
  },
  '2014-05-30': {
    '1. open': '30.5000',
    '2. high': '33.8100',
    '3. low': '30.0500',
    '4. close': '31.3550',
    '5. volume': '4864854'
  },
  '2014-04-30': {
    '1. open': '28.8800',
    '2. high': '31.6400',
    '3. low': '28.6100',
    '4. close': '30.5350',
    '5. volume': '5338493'
  },
  '2014-03-31': {
    '1. open': '30.0400',
    '2. high': '30.6000',
    '3. low': '26.9800',
    '4. close': '28.6900',
    '5. volume': '7082360'
  },
  '2014-02-28': {
    '1. open': '32.8050',
    '2. high': '32.8900',
    '3. low': '29.8700',
    '4. close': '30.6250',
    '5. volume': '5989317'
  },
  '2014-01-31': {
    '1. open': '31.0350',
    '2. high': '33.1400',
    '3. low': '29.3550',
    '4. close': '32.8500',
    '5. volume': '6336056'
  },
  '2013-12-30': {
    '1. open': '31.9000',
    '2. high': '32.1750',
    '3. low': '28.0200',
    '4. close': '31.0000',
    '5. volume': '4023574'
  },
  '2013-11-29': {
    '1. open': '32.3450',
    '2. high': '34.2800',
    '3. low': '30.6200',
    '4. close': '31.9950',
    '5. volume': '3608417'
  },
  '2013-10-31': {
    '1. open': '30.6300',
    '2. high': '34.0300',
    '3. low': '29.4600',
    '4. close': '32.4750',
    '5. volume': '3902253'
  },
  '2013-09-30': {
    '1. open': '29.0850',
    '2. high': '32.8700',
    '3. low': '29.0050',
    '4. close': '30.7150',
    '5. volume': '5347926'
  },
  '2013-08-30': {
    '1. open': '27.8650',
    '2. high': '30.1750',
    '3. low': '24.5350',
    '4. close': '28.7500',
    '5. volume': '8275490'
  },
  '2013-07-31': {
    '1. open': '25.4800',
    '2. high': '28.9000',
    '3. low': '24.6250',
    '4. close': '28.0150',
    '5. volume': '6527225'
  },
  '2013-06-28': {
    '1. open': '29.0100',
    '2. high': '29.3300',
    '3. low': '25.1600',
    '4. close': '25.3050',
    '5. volume': '8527487'
  },
  '2013-05-31': {
    '1. open': '29.6100',
    '2. high': '33.3950',
    '3. low': '29.1500',
    '4. close': '29.3600',
    '5. volume': '13511892'
  },
  '2013-04-30': {
    '1. open': '31.1950',
    '2. high': '32.3150',
    '3. low': '28.5300',
    '4. close': '29.7200',
    '5. volume': '9634997'
  },
  '2013-03-28': {
    '1. open': '36.6500',
    '2. high': '36.6500',
    '3. low': '30.5350',
    '4. close': '31.3150',
    '5. volume': '6794431'
  },
  '2013-02-28': {
    '1. open': '34.4100',
    '2. high': '37.5900',
    '3. low': '34.2900',
    '4. close': '36.5450',
    '5. volume': '6781675'
  },
  '2013-01-31': {
    '1. open': '40.4000',
    '2. high': '41.5550',
    '3. low': '34.3200',
    '4. close': '34.3200',
    '5. volume': '8373745'
  },
  '2012-12-28': {
    '1. open': '35.4150',
    '2. high': '40.7000',
    '3. low': '35.1150',
    '4. close': '39.4250',
    '5. volume': '4033185'
  },
  '2012-11-30': {
    '1. open': '33.2650',
    '2. high': '36.2250',
    '3. low': '30.7800',
    '4. close': '35.4500',
    '5. volume': '7375639'
  },
  '2012-10-31': {
    '1. open': '30.0850',
    '2. high': '35.3700',
    '3. low': '30.0750',
    '4. close': '33.3850',
    '5. volume': '6854231'
  },
  '2012-09-28': {
    '1. open': '29.3150',
    '2. high': '35.1550',
    '3. low': '27.9000',
    '4. close': '30.0650',
    '5. volume': '7326590'
  },
  '2012-08-31': {
    '1. open': '29.6600',
    '2. high': '32.9250',
    '3. low': '27.4700',
    '4. close': '29.2600',
    '5. volume': '5894729'
  },
  '2012-07-31': {
    '1. open': '32.0550',
    '2. high': '33.4750',
    '3. low': '27.0250',
    '4. close': '29.6600',
    '5. volume': '6203818'
  },
  '2012-06-29': {
    '1. open': '34.6750',
    '2. high': '37.6050',
    '3. low': '30.9050',
    '4. close': '32.3750',
    '5. volume': '6650950'
  },
  '2012-05-31': {
    '1. open': '40.1000',
    '2. high': '40.3300',
    '3. low': '34.2050',
    '4. close': '34.5300',
    '5. volume': '7205447'
  },
  '2012-04-30': {
    '1. open': '41.4700',
    '2. high': '42.2450',
    '3. low': '36.9500',
    '4. close': '39.4400',
    '5. volume': '6935642'
  },
  '2012-03-30': {
    '1. open': '45.6400',
    '2. high': '46.5000',
    '3. low': '39.7450',
    '4. close': '41.0950',
    '5. volume': '7472825'
  },
  '2012-02-29': {
    '1. open': '45.8000',
    '2. high': '48.9450',
    '3. low': '43.6650',
    '4. close': '45.9400',
    '5. volume': '6007989'
  },
  '2012-01-31': {
    '1. open': '38.6300',
    '2. high': '48.9000',
    '3. low': '38.6000',
    '4. close': '45.6700',
    '5. volume': '6901717'
  },
  '2011-12-30': {
    '1. open': '38.8000',
    '2. high': '41.2450',
    '3. low': '35.4800',
    '4. close': '38.6300',
    '5. volume': '5186860'
  },
  '2011-11-30': {
    '1. open': '39.9000',
    '2. high': '41.6000',
    '3. low': '33.8000',
    '4. close': '38.3750',
    '5. volume': '5966366'
  },
  '2011-10-31': {
    '1. open': '34.8250',
    '2. high': '43.6900',
    '3. low': '32.8200',
    '4. close': '40.9400',
    '5. volume': '6574040'
  },
  '2011-09-30': {
    '1. open': '43.4900',
    '2. high': '43.5350',
    '3. low': '32.4300',
    '4. close': '36.2550',
    '5. volume': '8553322'
  },
  '2011-08-31': {
    '1. open': '51.8900',
    '2. high': '52.2100',
    '3. low': '36.8300',
    '4. close': '43.2800',
    '5. volume': '14071863'
  },
  '2011-07-29': {
    '1. open': '52.9000',
    '2. high': '55.0000',
    '3. low': '50.1600',
    '4. close': '50.8800',
    '5. volume': '5836585'
  },
  '2011-06-30': {
    '1. open': '51.3800',
    '2. high': '52.9000',
    '3. low': '48.5000',
    '4. close': '52.5900',
    '5. volume': '6829857'
  },
  '2011-05-31': {
    '1. open': '53.3200',
    '2. high': '55.0000',
    '3. low': '48.8950',
    '4. close': '51.3500',
    '5. volume': '7951656'
  },
  '2011-04-29': {
    '1. open': '56.1800',
    '2. high': '58.6000',
    '3. low': '50.3900',
    '4. close': '53.0100',
    '5. volume': '5696878'
  },
  '2011-03-31': {
    '1. open': '60.7400',
    '2. high': '61.3200',
    '3. low': '49.7000',
    '4. close': '55.7000',
    '5. volume': '10165525'
  },
  '2011-02-28': {
    '1. open': '59.3300',
    '2. high': '65.6400',
    '3. low': '58.1000',
    '4. close': '60.1600',
    '5. volume': '7909259'
  },
  '2011-01-31': {
    '1. open': '57.8900',
    '2. high': '61.1100',
    '3. low': '54.2600',
    '4. close': '59.1000',
    '5. volume': '7581694'
  },
  '2010-12-30': {
    '1. open': '50.3000',
    '2. high': '58.7500',
    '3. low': '50.0700',
    '4. close': '57.7700',
    '5. volume': '6659621'
  },
  '2010-11-30': {
    '1. open': '52.0900',
    '2. high': '56.2700',
    '3. low': '49.0500',
    '4. close': '49.5650',
    '5. volume': '8148755'
  },
  '2010-10-29': {
    '1. open': '47.7500',
    '2. high': '55.4200',
    '3. low': '45.7650',
    '4. close': '51.5900',
    '5. volume': '8853924'
  },
  '2010-09-30': {
    '1. open': '48.1000',
    '2. high': '52.2100',
    '3. low': '46.7500',
    '4. close': '47.5150',
    '5. volume': '6615073'
  },
  '2010-08-31': {
    '1. open': '51.4000',
    '2. high': '56.6100',
    '3. low': '46.0850',
    '4. close': '47.8850',
    '5. volume': '7512695'
  },
  '2010-07-30': {
    '1. open': '48.8000',
    '2. high': '52.6000',
    '3. low': '46.5450',
    '4. close': '51.2800',
    '5. volume': '7440818'
  },
  '2010-06-30': {
    '1. open': '52.5000',
    '2. high': '54.1000',
    '3. low': '47.5000',
    '4. close': '48.9900',
    '5. volume': '13791738'
  },
  '2010-05-31': {
    '1. open': '61.2800',
    '2. high': '62.0000',
    '3. low': '47.9600',
    '4. close': '52.5400',
    '5. volume': '19482588'
  },
  '2010-04-30': {
    '1. open': '69.0000',
    '2. high': '71.2500',
    '3. low': '60.6100',
    '4. close': '61.3300',
    '5. volume': '12045124'
  },
  '2010-03-31': {
    '1. open': '65.4500',
    '2. high': '70.1600',
    '3. low': '64.9200',
    '4. close': '68.7300',
    '5. volume': '11792424'
  },
  '2010-02-26': {
    '1. open': '64.0100',
    '2. high': '67.8700',
    '3. low': '63.0800',
    '4. close': '64.8100',
    '5. volume': '12491971'
  },
  '2010-01-29': {
    '1. open': '68.1400',
    '2. high': '74.3200',
    '3. low': '63.0000',
    '4. close': '64.2100',
    '5. volume': '13769309'
  },
  '2009-12-30': {
    '1. open': '64.6900',
    '2. high': '70.3500',
    '3. low': '63.0100',
    '4. close': '68.4400',
    '5. volume': '7481384'
  },
  '2009-11-30': {
    '1. open': '61.0000',
    '2. high': '66.3600',
    '3. low': '59.8300',
    '4. close': '63.5500',
    '5. volume': '11286265'
  },
  '2009-10-30': {
    '1. open': '65.7000',
    '2. high': '71.9400',
    '3. low': '60.5500',
    '4. close': '61.2400',
    '5. volume': '13266357'
  },
  '2009-09-30': {
    '1. open': '66.7200',
    '2. high': '72.6600',
    '3. low': '60.0600',
    '4. close': '65.5000',
    '5. volume': '15690615'
  },
  '2009-08-31': {
    '1. open': '71.0000',
    '2. high': '73.4000',
    '3. low': '63.1800',
    '4. close': '66.3900',
    '5. volume': '9668422'
  },
  '2009-07-31': {
    '1. open': '63.2400',
    '2. high': '72.8500',
    '3. low': '57.0400',
    '4. close': '71.1500',
    '5. volume': '11874955'
  },
  '2009-06-30': {
    '1. open': '67.2000',
    '2. high': '71.6200',
    '3. low': '57.5000',
    '4. close': '62.4200',
    '5. volume': '14216024'
  },
  '2009-05-29': {
    '1. open': '54.9000',
    '2. high': '68.6000',
    '3. low': '48.9000',
    '4. close': '65.9300',
    '5. volume': '16124195'
  },
  '2009-04-30': {
    '1. open': '41.5600',
    '2. high': '57.7100',
    '3. low': '40.5200',
    '4. close': '53.9400',
    '5. volume': '14054181'
  },
  '2009-03-31': {
    '1. open': '48.0100',
    '2. high': '50.8700',
    '3. low': '40.2200',
    '4. close': '42.0800',
    '5. volume': '14232495'
  },
  '2009-02-27': {
    '1. open': '55.5100',
    '2. high': '69.5000',
    '3. low': '48.0900',
    '4. close': '49.4300',
    '5. volume': '11897991'
  },
  '2009-01-30': {
    '1. open': '55.7600',
    '2. high': '63.8000',
    '3. low': '47.0700',
    '4. close': '57.0800',
    '5. volume': '13368690'
  },
  '2008-12-30': {
    '1. open': '54.8700',
    '2. high': '55.2700',
    '3. low': '43.7100',
    '4. close': '55.0000',
    '5. volume': '17818330'
  },
  '2008-11-28': {
    '1. open': '52.0000',
    '2. high': '61.2400',
    '3. low': '37.8000',
    '4. close': '54.3400',
    '5. volume': '16471600'
  },
  '2008-10-31': {
    '1. open': '71.9000',
    '2. high': '73.4000',
    '3. low': '38.6000',
    '4. close': '51.1600',
    '5. volume': '25983105'
  },
  '2008-09-30': {
    '1. open': '104.4700',
    '2. high': '104.6600',
    '3. low': '64.5500',
    '4. close': '70.7600',
    '5. volume': '20222988'
  },
  '2008-08-29': {
    '1. open': '104.8000',
    '2. high': '105.6900',
    '3. low': '95.7500',
    '4. close': '105.1000',
    '5. volume': '11038616'
  },
  '2008-07-31': {
    '1. open': '116.1700',
    '2. high': '116.1700',
    '3. low': '95.3000',
    '4. close': '105.6600',
    '5. volume': '15597898'
  },
  '2008-06-30': {
    '1. open': '127.3100',
    '2. high': '131.7800',
    '3. low': '113.5300',
    '4. close': '116.4000',
    '5. volume': '10497801'
  },
  '2008-05-30': {
    '1. open': '132.8100',
    '2. high': '143.8800',
    '3. low': '120.6100',
    '4. close': '126.3000',
    '5. volume': '10998554'
  },
  '2008-04-30': {
    '1. open': '109.9800',
    '2. high': '137.4100',
    '3. low': '104.5900',
    '4. close': '132.1200',
    '5. volume': '12412434'
  },
  '2008-03-31': {
    '1. open': '114.0000',
    '2. high': '119.4800',
    '3. low': '100.0000',
    '4. close': '110.1900',
    '5. volume': '12521805'
  },
  '2008-02-29': {
    '1. open': '106.5400',
    '2. high': '124.5000',
    '3. low': '105.0200',
    '4. close': '117.1800',
    '5. volume': '16402881'
  },
  '2008-01-31': {
    '1. open': '100.5200',
    '2. high': '104.8000',
    '3. low': '80.5100',
    '4. close': '104.3200',
    '5. volume': '20011038'
  },
  '2007-12-28': {
    '1. open': '111.8600',
    '2. high': '111.9900',
    '3. low': '96.5000',
    '4. close': '102.0500',
    '5. volume': '6914252'
  },
  '2007-11-30': {
    '1. open': '138.0000',
    '2. high': '138.7900',
    '3. low': '97.7600',
    '4. close': '108.9500',
    '5. volume': '14130146'
  },
  '2007-10-31': {
    '1. open': '139.5000',
    '2. high': '151.0000',
    '3. low': '130.5400',
    '4. close': '135.7100',
    '5. volume': '7584805'
  },
  '2007-09-28': {
    '1. open': '146.0000',
    '2. high': '149.5000',
    '3. low': '133.6100',
    '4. close': '137.7400',
    '5. volume': '7336020'
  },
  '2007-08-31': {
    '1. open': '146.0000',
    '2. high': '151.8000',
    '3. low': '116.2800',
    '4. close': '145.0000',
    '5. volume': '13364656'
  },
  '2007-07-31': {
    '1. open': '141.9600',
    '2. high': '158.9000',
    '3. low': '136.2000',
    '4. close': '151.1600',
    '5. volume': '8525274'
  },
  '2007-06-29': {
    '1. open': '142.0500',
    '2. high': '152.1800',
    '3. low': '129.5600',
    '4. close': '143.4900',
    '5. volume': '9800317'
  },
  '2007-05-31': {
    '1. open': '125.0000',
    '2. high': '143.9800',
    '3. low': '122.9700',
    '4. close': '142.4500',
    '5. volume': '9472396'
  },
  '2007-04-30': {
    '1. open': '110.0600',
    '2. high': '122.8400',
    '3. low': '108.8000',
    '4. close': '122.0000',
    '5. volume': '6990636'
  },
  '2007-03-30': {
    '1. open': '94.5000',
    '2. high': '109.6400',
    '3. low': '88.2900',
    '4. close': '109.3200',
    '5. volume': '10758246'
  },
  '2007-02-28': {
    '1. open': '98.3000',
    '2. high': '106.7600',
    '3. low': '88.1300',
    '4. close': '93.3700',
    '5. volume': '8261870'
  },
  '2007-01-31': {
    '1. open': '99.8800',
    '2. high': '101.8900',
    '3. low': '90.3800',
    '4. close': '97.6000',
    '5. volume': '9009870'
  },
  '2006-12-29': {
    '1. open': '91.8000',
    '2. high': '100.9600',
    '3. low': '89.9000',
    '4. close': '99.0500',
    '5. volume': '8444310'
  },
  '2006-11-30': {
    '1. open': '83.8100',
    '2. high': '92.4000',
    '3. low': '80.8000',
    '4. close': '90.7600',
    '5. volume': '8034860'
  },
  '2006-10-31': {
    '1. open': '74.1500',
    '2. high': '87.8000',
    '3. low': '73.5000',
    '4. close': '83.8100',
    '5. volume': '7263439'
  },
  '2006-09-29': {
    '1. open': '69.5500',
    '2. high': '75.1500',
    '3. low': '68.1000',
    '4. close': '74.1100',
    '5. volume': '8711676'
  },
  '2006-08-31': {
    '1. open': '61.6900',
    '2. high': '70.2800',
    '3. low': '60.4000',
    '4. close': '69.9300',
    '5. volume': '9939985'
  },
  '2006-07-31': {
    '1. open': '67.1000',
    '2. high': '68.8800',
    '3. low': '58.1100',
    '4. close': '61.7800',
    '5. volume': '8035353'
  },
  '2006-06-30': {
    '1. open': '67.8000',
    '2. high': '69.9600',
    '3. low': '52.8500',
    '4. close': '66.3700',
    '5. volume': '11443807'
  },
  '2006-05-31': {
    '1. open': '63.7400',
    '2. high': '72.8500',
    '3. low': '50.8000',
    '4. close': '68.2500',
    '5. volume': '19010148'
  },
  '2006-04-28': {
    '1. open': '60.7500',
    '2. high': '68.4000',
    '3. low': '56.2900',
    '4. close': '62.9000',
    '5. volume': '9297213'
  },
  '2006-03-31': {
    '1. open': '57.4000',
    '2. high': '66.0000',
    '3. low': '56.1700',
    '4. close': '60.7500',
    '5. volume': '9229794'
  },
  '2006-02-28': {
    '1. open': '56.2900',
    '2. high': '60.5800',
    '3. low': '50.2500',
    '4. close': '57.5000',
    '5. volume': '7310320'
  },
  '2006-01-31': {
    '1. open': '45.4000',
    '2. high': '59.4700',
    '3. low': '45.2100',
    '4. close': '56.5000',
    '5. volume': '9896065'
  },
  '2005-12-30': {
    '1. open': '42.7800',
    '2. high': '45.9500',
    '3. low': '41.1000',
    '4. close': '45.6100',
    '5. volume': '4096616'
  },
  '2005-11-30': {
    '1. open': '36.6700',
    '2. high': '43.2900',
    '3. low': '35.7400',
    '4. close': '42.5100',
    '5. volume': '6320684'
  },
  '2005-10-31': {
    '1. open': '41.5000',
    '2. high': '42.6500',
    '3. low': '32.0000',
    '4. close': '36.5200',
    '5. volume': '11255301'
  },
  '2005-09-30': {
    '1. open': '30.3900',
    '2. high': '42.2000',
    '3. low': '30.2200',
    '4. close': '41.1800',
    '5. volume': '10868485'
  },
  '2005-08-31': {
    '1. open': '26.4000',
    '2. high': '30.4800',
    '3. low': '26.4000',
    '4. close': '30.1500',
    '5. volume': '8059522'
  },
  '2005-07-29': {
    '1. open': '22.2000',
    '2. high': '26.7500',
    '3. low': '21.8300',
    '4. close': '26.2300',
    '5. volume': '10208348'
  },
  '2005-06-30': {
    '1. open': '18.9900',
    '2. high': '22.7000',
    '3. low': '18.7900',
    '4. close': '22.4400',
    '5. volume': '10031420'
  },
  '2005-05-31': {
    '1. open': '15.9600',
    '2. high': '19.1400',
    '3. low': '15.9200',
    '4. close': '19.0900',
    '5. volume': '8052137'
  },
  '2005-04-29': {
    '1. open': '16.5000',
    '2. high': '16.8000',
    '3. low': '15.2200',
    '4. close': '15.9700',
    '5. volume': '5846878'
  },
  '2005-03-31': {
    '1. open': '16.6500',
    '2. high': '17.3500',
    '3. low': '15.6100',
    '4. close': '16.4600',
    '5. volume': '4858336'
  },
  '2005-02-28': {
    '1. open': '16.3200',
    '2. high': '17.8100',
    '3. low': '15.8600',
    '4. close': '16.6400',
    '5. volume': '5022898'
  },
  '2005-01-31': {
    '1. open': '14.3200',
    '2. high': '17.0700',
    '3. low': '14.1700',
    '4. close': '16.3900',
    '5. volume': '6658960'
  },
  '2004-12-31': {
    '1. open': '14.9100',
    '2. high': '14.9200',
    '3. low': '12.9100',
    '4. close': '14.2500',
    '5. volume': '5735038'
  },
  '2004-11-30': {
    '1. open': '12.7600',
    '2. high': '15.7600',
    '3. low': '12.6800',
    '4. close': '15.0400',
    '5. volume': '4506291'
  },
  '2004-10-29': {
    '1. open': '12.1200',
    '2. high': '13.9500',
    '3. low': '12.0200',
    '4. close': '12.7000',
    '5. volume': '6158983'
  },
  '2004-09-30': {
    '1. open': '10.9100',
    '2. high': '12.3000',
    '3. low': '10.7400',
    '4. close': '12.1000',
    '5. volume': '3541870'
  },
  '2004-08-31': {
    '1. open': '10.1000',
    '2. high': '11.0300',
    '3. low': '9.4500',
    '4. close': '10.8600',
    '5. volume': '2627242'
  },
  '2004-07-30': {
    '1. open': '9.9000',
    '2. high': '10.2000',
    '3. low': '9.6000',
    '4. close': '10.2000',
    '5. volume': '1408474'
  },
  '2004-06-30': {
    '1. open': '9.7100',
    '2. high': '9.8800',
    '3. low': '9.2600',
    '4. close': '9.8500',
    '5. volume': '1612087'
  },
  '2004-05-31': {
    '1. open': '10.3000',
    '2. high': '10.2500',
    '3. low': '9.0600',
    '4. close': '9.7100',
    '5. volume': '2088444'
  },
  '2004-04-30': {
    '1. open': '10.2000',
    '2. high': '10.6500',
    '3. low': '10.0000',
    '4. close': '10.2200',
    '5. volume': '3182307'
  },
  '2004-03-31': {
    '1. open': '10.0600',
    '2. high': '10.4900',
    '3. low': '9.6000',
    '4. close': '10.2000',
    '5. volume': '3313159'
  },
  '2004-02-27': {
    '1. open': '9.4000',
    '2. high': '10.2100',
    '3. low': '9.3800',
    '4. close': '10.0800',
    '5. volume': '1523253'
  },
  '2004-01-30': {
    '1. open': '8.7900',
    '2. high': '9.5500',
    '3. low': '8.7200',
    '4. close': '9.4000',
    '5. volume': '1414180'
  },
  '2003-12-31': {
    '1. open': '8.4400',
    '2. high': '9.3500',
    '3. low': '8.4000',
    '4. close': '8.7900',
    '5. volume': '1312384'
  },
  '2003-11-28': {
    '1. open': '8.3400',
    '2. high': '8.6100',
    '3. low': '8.0700',
    '4. close': '8.4400',
    '5. volume': '1093677'
  },
  '2003-10-31': {
    '1. open': '7.6500',
    '2. high': '8.3500',
    '3. low': '7.5500',
    '4. close': '8.2400',
    '5. volume': '993246'
  },
  '2003-09-30': {
    '1. open': '8.1800',
    '2. high': '8.8800',
    '3. low': '7.4200',
    '4. close': '7.7000',
    '5. volume': '1361682'
  },
  '2003-08-29': {
    '1. open': '7.5800',
    '2. high': '8.3000',
    '3. low': '7.0200',
    '4. close': '8.1800',
    '5. volume': '1692568'
  },
  '2003-07-31': {
    '1. open': '6.6700',
    '2. high': '7.6000',
    '3. low': '6.3600',
    '4. close': '7.5100',
    '5. volume': '1725058'
  },
  '2003-06-30': {
    '1. open': '6.9500',
    '2. high': '7.0400',
    '3. low': '6.4800',
    '4. close': '6.6000',
    '5. volume': '1347251'
  },
  '2003-05-30': {
    '1. open': '6.9000',
    '2. high': '7.4700',
    '3. low': '6.8100',
    '4. close': '6.9800',
    '5. volume': '927353'
  },
  '2003-04-30': {
    '1. open': '6.9700',
    '2. high': '7.5700',
    '3. low': '6.3500',
    '4. close': '6.9000',
    '5. volume': '1118737'
  },
  '2003-03-31': {
    '1. open': '7.2500',
    '2. high': '7.5900',
    '3. low': '6.6000',
    '4. close': '6.9400',
    '5. volume': '565899'
  },
  '2003-02-28': {
    '1. open': '6.8900',
    '2. high': '7.3600',
    '3. low': '6.8200',
    '4. close': '7.2500',
    '5. volume': '819601'
  },
  '2003-01-31': {
    '1. open': '5.9900',
    '2. high': '6.9700',
    '3. low': '5.8800',
    '4. close': '6.7500',
    '5. volume': '1349548'
  },
  '2002-12-31': {
    '1. open': '6.6000',
    '2. high': '6.9800',
    '3. low': '5.8600',
    '4. close': '5.9900',
    '5. volume': '1671586'
  },
  '2002-11-29': {
    '1. open': '7.1000',
    '2. high': '7.1600',
    '3. low': '5.8500',
    '4. close': '6.4400',
    '5. volume': '1859049'
  },
  '2002-10-31': {
    '1. open': '7.5000',
    '2. high': '7.5000',
    '3. low': '6.5000',
    '4. close': '7.1000',
    '5. volume': '1139860'
  },
  '2002-09-30': {
    '1. open': '8.8000',
    '2. high': '8.8400',
    '3. low': '7.1100',
    '4. close': '7.4500',
    '5. volume': '808611'
  },
  '2002-08-30': {
    '1. open': '9.0500',
    '2. high': '9.0500',
    '3. low': '8.0000',
    '4. close': '8.7800',
    '5. volume': '630607'
  },
  '2002-07-31': {
    '1. open': '10.2500',
    '2. high': '10.7500',
    '3. low': '8.6000',
    '4. close': '8.9200',
    '5. volume': '600859'
  },
  '2002-06-28': {
    '1. open': '10.7300',
    '2. high': '11.3800',
    '3. low': '8.1100',
    '4. close': '10.1000',
    '5. volume': '920191'
  },
  '2002-05-31': {
    '1. open': '11.0000',
    '2. high': '11.1700',
    '3. low': '10.2400',
    '4. close': '10.7000',
    '5. volume': '623695'
  },
  '2002-04-30': {
    '1. open': '11.8200',
    '2. high': '11.9500',
    '3. low': '10.7100',
    '4. close': '11.0000',
    '5. volume': '829401'
  },
  '2002-03-29': {
    '1. open': '11.0700',
    '2. high': '11.8900',
    '3. low': '10.4300',
    '4. close': '11.8200',
    '5. volume': '1669454'
  },
  '2002-02-28': {
    '1. open': '12.2000',
    '2. high': '12.3000',
    '3. low': '10.6500',
    '4. close': '11.3500',
    '5. volume': '808314'
  },
  '2002-01-31': {
    '1. open': '9.5700',
    '2. high': '12.6000',
    '3. low': '9.5700',
    '4. close': '12.0800',
    '5. volume': '993037'
  },
  '2001-12-31': {
    '1. open': '9.5200',
    '2. high': '10.0000',
    '3. low': '9.2000',
    '4. close': '9.5700',
    '5. volume': '351680'
  },
  '2001-11-30': {
    '1. open': '9.0500',
    '2. high': '10.1500',
    '3. low': '9.0000',
    '4. close': '9.2500',
    '5. volume': '487812'
  },
  '2001-10-31': {
    '1. open': '8.8000',
    '2. high': '9.2500',
    '3. low': '7.9800',
    '4. close': '9.0500',
    '5. volume': '230450'
  },
  '2001-09-28': {
    '1. open': '9.5800',
    '2. high': '9.7000',
    '3. low': '6.6500',
    '4. close': '8.6000',
    '5. volume': '533641'
  },
  '2001-08-31': {
    '1. open': '9.7000',
    '2. high': '10.1000',
    '3. low': '9.3000',
    '4. close': '9.7500',
    '5. volume': '428725'
  },
  '2001-07-31': {
    '1. open': '9.6500',
    '2. high': '10.4000',
    '3. low': '9.1500',
    '4. close': '9.7000',
    '5. volume': '924234'
  },
  '2001-06-29': {
    '1. open': '10.2500',
    '2. high': '10.6500',
    '3. low': '8.9500',
    '4. close': '9.5500',
    '5. volume': '644243'
  },
  '2001-05-31': {
    '1. open': '10.8000',
    '2. high': '10.8500',
    '3. low': '9.8500',
    '4. close': '10.2000',
    '5. volume': '885113'
  },
  '2001-04-30': {
    '1. open': '9.9500',
    '2. high': '10.7500',
    '3. low': '9.4500',
    '4. close': '10.7200',
    '5. volume': '520599'
  },
  '2001-03-30': {
    '1. open': '10.0500',
    '2. high': '10.3000',
    '3. low': '9.9000',
    '4. close': '10.0000',
    '5. volume': '358925'
  },
  '2001-02-28': {
    '1. open': '9.3500',
    '2. high': '10.0500',
    '3. low': '9.2000',
    '4. close': '9.9800',
    '5. volume': '633348'
  },
  '2001-01-31': {
    '1. open': '8.9000',
    '2. high': '9.7000',
    '3. low': '8.7500',
    '4. close': '9.3500',
    '5. volume': '281945'
  },
  '2000-12-29': {
    '1. open': '8.0500',
    '2. high': '8.9000',
    '3. low': '7.8000',
    '4. close': '8.9000',
    '5. volume': '113986'
  },
  '2000-11-30': {
    '1. open': '7.9900',
    '2. high': '8.3500',
    '3. low': '7.7000',
    '4. close': '8.0500',
    '5. volume': '65837'
  },
  '2000-10-31': {
    '1. open': '8.1000',
    '2. high': '8.1000',
    '3. low': '7.8500',
    '4. close': '7.8500',
    '5. volume': '11499'
  },
  '2000-09-29': {
    '1. open': '8.2000',
    '2. high': '8.3000',
    '3. low': '7.6500',
    '4. close': '8.0000',
    '5. volume': '58462'
  },
  '2000-08-31': {
    '1. open': '7.5500',
    '2. high': '8.3500',
    '3. low': '7.0000',
    '4. close': '8.0500',
    '5. volume': '904863'
  },
  '2000-07-31': {
    '1. open': '7.5500',
    '2. high': '7.6500',
    '3. low': '7.2300',
    '4. close': '7.6000',
    '5. volume': '73289'
  },
  '2000-06-30': {
    '1. open': '8.0000',
    '2. high': '8.0000',
    '3. low': '7.1500',
    '4. close': '7.1500',
    '5. volume': '176908'
  },
  '2000-05-31': {
    '1. open': '8.7000',
    '2. high': '8.9500',
    '3. low': '7.9000',
    '4. close': '8.0000',
    '5. volume': '148865'
  },
  '2000-04-28': {
    '1. open': '8.8700',
    '2. high': '8.9900',
    '3. low': '8.4500',
    '4. close': '8.7000',
    '5. volume': '50760'
  },
  '2000-03-31': {
    '1. open': '9.3000',
    '2. high': '9.4000',
    '3. low': '8.5500',
    '4. close': '8.9400',
    '5. volume': '129028'
  },
  '2000-02-29': {
    '1. open': '9.4500',
    '2. high': '9.6500',
    '3. low': '9.2000',
    '4. close': '9.2500',
    '5. volume': '327823'
  },
  '2000-01-31': {
    '1. open': '9.7000',
    '2. high': '10.4000',
    '3. low': '8.7500',
    '4. close': '9.2000',
    '5. volume': '190439'
  },
  '1999-12-30': {
    '1. open': '8.1800',
    '2. high': '9.9500',
    '3. low': '8.1500',
    '4. close': '9.2000',
    '5. volume': '395015'
  }
};


// tslint:disable:max-line-length
export const salzgitterCompany: Company = {
  id: 1150,
  name: 'Salzgitter AG',
  country: Country.Deutschland,
  city: 'Salzgitter',
  url: 'http://www.salzgitter-ag.de/',
  description: 'Die Salzgitter AG ist ein börsennotierter deutscher Stahlkonzern mit Sitz in Salzgitter. Die Salzgitter-Gruppe besteht aus mehr als 100 einzelnen Unternehmen, darunter die Salzgitter Flachstahl-, die Ilsenburger Grobblech-, die Peiner Träger GmbH sowie die Mannesmannröhren-Werke. Im Jahr 2018 erzielte die Gruppe einen Umsatz von rund 9,3 Milliarden Euro. Die Salzgitter-Gruppe beschäftigt weltweit über 25.000 Mitarbeiter, sie ist in den Bereichen Flach- und Profilstahl der fünftgrößte europäische Hersteller und nimmt eine weltweite Spitzenposition im Röhrenbereich ein.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Salzgitter_AG',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Salzgitter_AG_Logo.svg/500px-Salzgitter_AG_Logo.svg.png',
  products: [],
  industries: [171010],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE0006202005',
  wkn: '620200',
  symbol: 'SZG.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Stahl-Technologie', 'Walzstahl', 'Röhrenerzeugnisse', 'Weiterverarbeitung']
};
// tslint:enable:max-line-length

