import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.00, yield: 7.06}, {year: 2017, rate: 1.40}, {
    year: 2016,
    rate: 0.50
  }, {year: 2015, rate: 1.00, yield: 2.74}, {year: 2014, rate: 1.20, yield: 2.43}, {year: 2013, rate: 1.00, yield: 1.84}, {
    year: 2012,
    rate: 1.50,
    yield: 5.25
  }, {year: 2011, rate: 1.50, yield: 5.83}, {year: 2010, rate: 0.70, yield: 2.12}, {year: 2009, rate: 0.00, yield: 0.00}, {
    year: 2008,
    rate: 0.20,
    yield: 1.54
  }, {year: 2007, rate: 0.90, yield: 2.68}, {year: 2006, rate: 0.80, yield: 2.59}, {year: 2005, rate: 0.57, yield: 2.12}, {
    year: 2004,
    rate: 0.42,
    yield: 2.52
  }, {year: 2003, rate: 0.38, yield: 2.33}, {year: 2002, rate: 0.38, yield: 3.74}, {year: 2001, rate: 0.36, yield: 4.49}, {
    year: 2000,
    rate: 0.41,
    yield: 4.24
  }
];
const prices = {
  '2019-11-27': {
    '1. open': '10.8500',
    '2. high': '13.7600',
    '3. low': '10.6000',
    '4. close': '11.8550',
    '5. volume': '6861619'
  },
  '2019-10-31': {
    '1. open': '11.7000',
    '2. high': '12.4450',
    '3. low': '10.5850',
    '4. close': '10.6450',
    '5. volume': '4849755'
  },
  '2019-09-30': {
    '1. open': '11.6000',
    '2. high': '13.9600',
    '3. low': '10.6000',
    '4. close': '11.5750',
    '5. volume': '6564844'
  },
  '2019-08-30': {
    '1. open': '12.5000',
    '2. high': '12.7000',
    '3. low': '8.0760',
    '4. close': '11.4500',
    '5. volume': '8515043'
  },
  '2019-07-31': {
    '1. open': '14.6000',
    '2. high': '15.0000',
    '3. low': '11.9000',
    '4. close': '12.1950',
    '5. volume': '7033866'
  },
  '2019-06-28': {
    '1. open': '14.0000',
    '2. high': '14.9700',
    '3. low': '12.6750',
    '4. close': '14.5350',
    '5. volume': '4574869'
  },
  '2019-05-31': {
    '1. open': '20.7000',
    '2. high': '20.7000',
    '3. low': '13.4550',
    '4. close': '14.0100',
    '5. volume': '10461397'
  },
  '2019-04-30': {
    '1. open': '17.5000',
    '2. high': '21.7000',
    '3. low': '17.4150',
    '4. close': '20.5400',
    '5. volume': '5980794'
  },
  '2019-03-29': {
    '1. open': '24.1100',
    '2. high': '24.9900',
    '3. low': '16.9300',
    '4. close': '17.3800',
    '5. volume': '8199784'
  },
  '2019-02-28': {
    '1. open': '32.2000',
    '2. high': '33.2800',
    '3. low': '18.9050',
    '4. close': '23.9800',
    '5. volume': '7517260'
  },
  '2019-01-31': {
    '1. open': '30.4000',
    '2. high': '34.7000',
    '3. low': '29.4600',
    '4. close': '32.3100',
    '5. volume': '3135761'
  },
  '2018-12-28': {
    '1. open': '29.1100',
    '2. high': '34.1900',
    '3. low': '24.7500',
    '4. close': '30.2800',
    '5. volume': '4421945'
  },
  '2018-11-30': {
    '1. open': '32.3600',
    '2. high': '35.1600',
    '3. low': '25.4000',
    '4. close': '28.2100',
    '5. volume': '4824669'
  },
  '2018-10-31': {
    '1. open': '35.5500',
    '2. high': '36.1000',
    '3. low': '28.0000',
    '4. close': '32.2800',
    '5. volume': '6333058'
  },
  '2018-09-28': {
    '1. open': '37.0900',
    '2. high': '38.0000',
    '3. low': '32.5000',
    '4. close': '35.4500',
    '5. volume': '5999919'
  },
  '2018-08-31': {
    '1. open': '43.7800',
    '2. high': '43.9500',
    '3. low': '35.4100',
    '4. close': '37.1300',
    '5. volume': '8994162'
  },
  '2018-07-31': {
    '1. open': '43.0300',
    '2. high': '45.2700',
    '3. low': '40.8100',
    '4. close': '43.5700',
    '5. volume': '4219170'
  },
  '2018-06-29': {
    '1. open': '51.9600',
    '2. high': '55.8600',
    '3. low': '41.7200',
    '4. close': '43.5000',
    '5. volume': '3571296'
  },
  '2018-05-31': {
    '1. open': '52.2000',
    '2. high': '58.2400',
    '3. low': '51.2400',
    '4. close': '51.4600',
    '5. volume': '3431315'
  },
  '2018-04-30': {
    '1. open': '51.5600',
    '2. high': '54.4800',
    '3. low': '48.5600',
    '4. close': '52.0600',
    '5. volume': '3609857'
  },
  '2018-03-29': {
    '1. open': '55.9200',
    '2. high': '58.2000',
    '3. low': '50.7000',
    '4. close': '51.9200',
    '5. volume': '3771942'
  },
  '2018-02-28': {
    '1. open': '62.4000',
    '2. high': '62.4000',
    '3. low': '53.2800',
    '4. close': '56.2000',
    '5. volume': '4249492'
  },
  '2018-01-31': {
    '1. open': '62.6400',
    '2. high': '66.2000',
    '3. low': '61.5000',
    '4. close': '61.8600',
    '5. volume': '3069239'
  },
  '2017-12-29': {
    '1. open': '61.8000',
    '2. high': '64.2000',
    '3. low': '59.6800',
    '4. close': '62.3900',
    '5. volume': '2183886'
  },
  '2017-11-30': {
    '1. open': '57.2200',
    '2. high': '63.9900',
    '3. low': '53.0400',
    '4. close': '61.8900',
    '5. volume': '4834815'
  },
  '2017-10-31': {
    '1. open': '56.1000',
    '2. high': '58.8700',
    '3. low': '55.3700',
    '4. close': '56.9800',
    '5. volume': '2801495'
  },
  '2017-09-29': {
    '1. open': '50.8000',
    '2. high': '56.2900',
    '3. low': '48.9250',
    '4. close': '56.1100',
    '5. volume': '3916930'
  },
  '2017-08-31': {
    '1. open': '50.1000',
    '2. high': '56.0800',
    '3. low': '48.7900',
    '4. close': '50.3900',
    '5. volume': '3976621'
  },
  '2017-07-31': {
    '1. open': '45.2950',
    '2. high': '52.4600',
    '3. low': '45.1850',
    '4. close': '49.9850',
    '5. volume': '4456176'
  },
  '2017-06-30': {
    '1. open': '49.0350',
    '2. high': '51.4000',
    '3. low': '44.6150',
    '4. close': '45.0750',
    '5. volume': '4618558'
  },
  '2017-05-31': {
    '1. open': '50.0000',
    '2. high': '56.1100',
    '3. low': '48.4300',
    '4. close': '49.0750',
    '5. volume': '5042007'
  },
  '2017-04-28': {
    '1. open': '48.5200',
    '2. high': '49.9900',
    '3. low': '45.6350',
    '4. close': '49.8700',
    '5. volume': '4897930'
  },
  '2017-03-31': {
    '1. open': '38.1150',
    '2. high': '49.2200',
    '3. low': '38.0800',
    '4. close': '48.2450',
    '5. volume': '6313643'
  },
  '2017-02-28': {
    '1. open': '37.3500',
    '2. high': '40.4500',
    '3. low': '35.7350',
    '4. close': '37.8900',
    '5. volume': '4135320'
  },
  '2017-01-31': {
    '1. open': '33.7250',
    '2. high': '39.3500',
    '3. low': '33.7150',
    '4. close': '37.0700',
    '5. volume': '4689675'
  },
  '2016-12-30': {
    '1. open': '29.7950',
    '2. high': '34.4900',
    '3. low': '29.0200',
    '4. close': '33.8450',
    '5. volume': '3724130'
  },
  '2016-11-30': {
    '1. open': '34.8450',
    '2. high': '36.4800',
    '3. low': '29.4350',
    '4. close': '29.8400',
    '5. volume': '5401596'
  },
  '2016-10-31': {
    '1. open': '32.2450',
    '2. high': '35.4050',
    '3. low': '31.9000',
    '4. close': '34.5850',
    '5. volume': '3530789'
  },
  '2016-09-30': {
    '1. open': '32.9000',
    '2. high': '34.6300',
    '3. low': '30.2800',
    '4. close': '32.4200',
    '5. volume': '4009013'
  },
  '2016-08-31': {
    '1. open': '33.2100',
    '2. high': '35.9250',
    '3. low': '31.2350',
    '4. close': '33.1350',
    '5. volume': '6130590'
  },
  '2016-07-29': {
    '1. open': '24.9500',
    '2. high': '34.0000',
    '3. low': '23.0050',
    '4. close': '33.1050',
    '5. volume': '7843460'
  },
  '2016-06-30': {
    '1. open': '30.0450',
    '2. high': '30.7450',
    '3. low': '24.2650',
    '4. close': '24.6050',
    '5. volume': '5398252'
  },
  '2016-05-31': {
    '1. open': '31.6500',
    '2. high': '31.9450',
    '3. low': '27.5650',
    '4. close': '29.9600',
    '5. volume': '4370389'
  },
  '2016-04-29': {
    '1. open': '30.0000',
    '2. high': '32.6800',
    '3. low': '26.8600',
    '4. close': '31.4650',
    '5. volume': '3606018'
  },
  '2016-03-31': {
    '1. open': '26.9000',
    '2. high': '31.6500',
    '3. low': '26.2350',
    '4. close': '30.3250',
    '5. volume': '5746714'
  },
  '2016-02-29': {
    '1. open': '32.1000',
    '2. high': '32.3300',
    '3. low': '23.2400',
    '4. close': '26.9150',
    '5. volume': '7891506'
  },
  '2016-01-29': {
    '1. open': '35.8100',
    '2. high': '35.9500',
    '3. low': '28.6800',
    '4. close': '32.1050',
    '5. volume': '6399188'
  },
  '2015-12-30': {
    '1. open': '36.4650',
    '2. high': '37.9900',
    '3. low': '33.1500',
    '4. close': '36.4450',
    '5. volume': '6267428'
  },
  '2015-11-30': {
    '1. open': '36.9750',
    '2. high': '38.9900',
    '3. low': '32.0850',
    '4. close': '36.4400',
    '5. volume': '10890520'
  },
  '2015-10-30': {
    '1. open': '47.9550',
    '2. high': '55.1000',
    '3. low': '31.3950',
    '4. close': '37.1300',
    '5. volume': '15660072'
  },
  '2015-09-30': {
    '1. open': '53.1900',
    '2. high': '57.2700',
    '3. low': '45.1500',
    '4. close': '47.6100',
    '5. volume': '4644203'
  },
  '2015-08-31': {
    '1. open': '57.5500',
    '2. high': '61.0800',
    '3. low': '49.3900',
    '4. close': '54.1300',
    '5. volume': '3902309'
  },
  '2015-07-31': {
    '1. open': '57.5800',
    '2. high': '61.9300',
    '3. low': '56.5000',
    '4. close': '57.6700',
    '5. volume': '4106376'
  },
  '2015-06-30': {
    '1. open': '59.5500',
    '2. high': '60.8000',
    '3. low': '54.0600',
    '4. close': '56.6300',
    '5. volume': '3284245'
  },
  '2015-05-29': {
    '1. open': '57.9700',
    '2. high': '62.9600',
    '3. low': '54.4900',
    '4. close': '59.2300',
    '5. volume': '3382965'
  },
  '2015-04-30': {
    '1. open': '58.7700',
    '2. high': '63.5700',
    '3. low': '56.8000',
    '4. close': '57.5700',
    '5. volume': '4456382'
  },
  '2015-03-31': {
    '1. open': '57.4800',
    '2. high': '62.1000',
    '3. low': '54.6600',
    '4. close': '58.9700',
    '5. volume': '5826332'
  },
  '2015-02-27': {
    '1. open': '55.4500',
    '2. high': '57.7900',
    '3. low': '52.6200',
    '4. close': '57.5700',
    '5. volume': '3663382'
  },
  '2015-01-30': {
    '1. open': '49.3450',
    '2. high': '56.7500',
    '3. low': '46.9550',
    '4. close': '55.4700',
    '5. volume': '4196220'
  },
  '2014-12-30': {
    '1. open': '47.5050',
    '2. high': '50.9700',
    '3. low': '44.8100',
    '4. close': '49.3950',
    '5. volume': '3737136'
  },
  '2014-11-28': {
    '1. open': '45.8250',
    '2. high': '48.9000',
    '3. low': '43.9850',
    '4. close': '48.2200',
    '5. volume': '4604515'
  },
  '2014-10-31': {
    '1. open': '43.2150',
    '2. high': '45.9350',
    '3. low': '37.2500',
    '4. close': '45.6500',
    '5. volume': '9216011'
  },
  '2014-09-30': {
    '1. open': '46.9000',
    '2. high': '48.0500',
    '3. low': '41.1450',
    '4. close': '43.2200',
    '5. volume': '5954775'
  },
  '2014-08-29': {
    '1. open': '51.4400',
    '2. high': '51.7000',
    '3. low': '45.7000',
    '4. close': '46.9050',
    '5. volume': '6321897'
  },
  '2014-07-31': {
    '1. open': '58.3500',
    '2. high': '61.4400',
    '3. low': '51.0800',
    '4. close': '51.3100',
    '5. volume': '3712077'
  },
  '2014-06-30': {
    '1. open': '59.9000',
    '2. high': '61.1800',
    '3. low': '57.6500',
    '4. close': '58.1200',
    '5. volume': '4003650'
  },
  '2014-05-30': {
    '1. open': '53.5900',
    '2. high': '59.5000',
    '3. low': '51.4000',
    '4. close': '58.7300',
    '5. volume': '4351881'
  },
  '2014-04-30': {
    '1. open': '53.1500',
    '2. high': '56.1500',
    '3. low': '50.7600',
    '4. close': '53.5300',
    '5. volume': '4382320'
  },
  '2014-03-31': {
    '1. open': '52.6800',
    '2. high': '57.3600',
    '3. low': '47.3200',
    '4. close': '52.9700',
    '5. volume': '5912240'
  },
  '2014-02-28': {
    '1. open': '57.5600',
    '2. high': '58.1500',
    '3. low': '53.5000',
    '4. close': '54.9000',
    '5. volume': '4377847'
  },
  '2014-01-31': {
    '1. open': '54.6800',
    '2. high': '60.6000',
    '3. low': '53.3700',
    '4. close': '57.5800',
    '5. volume': '4979124'
  },
  '2013-12-30': {
    '1. open': '55.0100',
    '2. high': '55.6200',
    '3. low': '49.3600',
    '4. close': '54.3300',
    '5. volume': '3710503'
  },
  '2013-11-29': {
    '1. open': '50.0400',
    '2. high': '55.9800',
    '3. low': '46.8150',
    '4. close': '54.9900',
    '5. volume': '4533761'
  },
  '2013-10-31': {
    '1. open': '44.9500',
    '2. high': '50.4300',
    '3. low': '43.9350',
    '4. close': '50.0100',
    '5. volume': '3018268'
  },
  '2013-09-30': {
    '1. open': '42.3550',
    '2. high': '46.3650',
    '3. low': '41.8450',
    '4. close': '44.9550',
    '5. volume': '3160261'
  },
  '2013-08-30': {
    '1. open': '37.5000',
    '2. high': '45.1350',
    '3. low': '37.5000',
    '4. close': '41.5450',
    '5. volume': '4925117'
  },
  '2013-07-31': {
    '1. open': '38.5150',
    '2. high': '40.2450',
    '3. low': '36.3350',
    '4. close': '37.4900',
    '5. volume': '3913061'
  },
  '2013-06-28': {
    '1. open': '38.9950',
    '2. high': '39.7800',
    '3. low': '34.8700',
    '4. close': '38.2550',
    '5. volume': '4039553'
  },
  '2013-05-31': {
    '1. open': '32.4900',
    '2. high': '40.4850',
    '3. low': '31.6800',
    '4. close': '39.0200',
    '5. volume': '6586128'
  },
  '2013-04-30': {
    '1. open': '30.1700',
    '2. high': '34.6950',
    '3. low': '29.1550',
    '4. close': '34.2350',
    '5. volume': '5007942'
  },
  '2013-03-28': {
    '1. open': '34.4900',
    '2. high': '34.6000',
    '3. low': '29.5600',
    '4. close': '30.2100',
    '5. volume': '5690333'
  },
  '2013-02-28': {
    '1. open': '31.8100',
    '2. high': '34.6700',
    '3. low': '30.7300',
    '4. close': '34.5300',
    '5. volume': '5119637'
  },
  '2013-01-31': {
    '1. open': '29.4100',
    '2. high': '33.8350',
    '3. low': '28.6000',
    '4. close': '31.8600',
    '5. volume': '5828594'
  },
  '2012-12-28': {
    '1. open': '26.7300',
    '2. high': '28.8500',
    '3. low': '26.1100',
    '4. close': '28.5500',
    '5. volume': '4430329'
  },
  '2012-11-30': {
    '1. open': '25.7550',
    '2. high': '27.1450',
    '3. low': '23.4100',
    '4. close': '26.6750',
    '5. volume': '5579581'
  },
  '2012-10-31': {
    '1. open': '29.2150',
    '2. high': '31.4000',
    '3. low': '24.4000',
    '4. close': '25.7050',
    '5. volume': '7057844'
  },
  '2012-09-28': {
    '1. open': '29.4500',
    '2. high': '33.6150',
    '3. low': '28.1000',
    '4. close': '29.0600',
    '5. volume': '4455238'
  },
  '2012-08-31': {
    '1. open': '30.1000',
    '2. high': '32.2350',
    '3. low': '28.6700',
    '4. close': '29.8000',
    '5. volume': '4928032'
  },
  '2012-07-31': {
    '1. open': '30.0000',
    '2. high': '33.4700',
    '3. low': '27.9450',
    '4. close': '30.2600',
    '5. volume': '7302415'
  },
  '2012-06-29': {
    '1. open': '33.1200',
    '2. high': '33.9650',
    '3. low': '28.4400',
    '4. close': '30.0250',
    '5. volume': '5356872'
  },
  '2012-05-31': {
    '1. open': '39.4500',
    '2. high': '39.8450',
    '3. low': '30.6700',
    '4. close': '33.0650',
    '5. volume': '5546482'
  },
  '2012-04-30': {
    '1. open': '39.5000',
    '2. high': '40.8700',
    '3. low': '36.2250',
    '4. close': '38.7950',
    '5. volume': '5384388'
  },
  '2012-03-30': {
    '1. open': '37.4000',
    '2. high': '39.9500',
    '3. low': '34.3300',
    '4. close': '39.0000',
    '5. volume': '6390057'
  },
  '2012-02-29': {
    '1. open': '34.5000',
    '2. high': '39.4700',
    '3. low': '34.3700',
    '4. close': '37.6400',
    '5. volume': '6441195'
  },
  '2012-01-31': {
    '1. open': '25.6400',
    '2. high': '35.9700',
    '3. low': '25.5500',
    '4. close': '34.3400',
    '5. volume': '7286997'
  },
  '2011-12-30': {
    '1. open': '27.4500',
    '2. high': '28.6700',
    '3. low': '23.7000',
    '4. close': '25.7500',
    '5. volume': '4192352'
  },
  '2011-11-30': {
    '1. open': '29.4950',
    '2. high': '31.6600',
    '3. low': '23.5550',
    '4. close': '27.5000',
    '5. volume': '7161564'
  },
  '2011-10-31': {
    '1. open': '22.6400',
    '2. high': '34.5000',
    '3. low': '20.5050',
    '4. close': '30.4100',
    '5. volume': '7929087'
  },
  '2011-09-30': {
    '1. open': '29.8400',
    '2. high': '29.9900',
    '3. low': '21.1200',
    '4. close': '24.2550',
    '5. volume': '10013771'
  },
  '2011-08-31': {
    '1. open': '40.4800',
    '2. high': '40.6650',
    '3. low': '24.6000',
    '4. close': '29.8550',
    '5. volume': '15576624'
  },
  '2011-07-29': {
    '1. open': '38.9600',
    '2. high': '42.9600',
    '3. low': '37.8000',
    '4. close': '39.2800',
    '5. volume': '7081790'
  },
  '2011-06-30': {
    '1. open': '39.1500',
    '2. high': '41.2900',
    '3. low': '36.2750',
    '4. close': '40.8500',
    '5. volume': '4132809'
  },
  '2011-05-31': {
    '1. open': '37.4200',
    '2. high': '39.0800',
    '3. low': '35.0700',
    '4. close': '39.0500',
    '5. volume': '6909341'
  },
  '2011-04-29': {
    '1. open': '30.4900',
    '2. high': '37.8350',
    '3. low': '29.7650',
    '4. close': '37.1050',
    '5. volume': '5178733'
  },
  '2011-03-31': {
    '1. open': '30.5600',
    '2. high': '31.8400',
    '3. low': '25.0550',
    '4. close': '30.1450',
    '5. volume': '6304979'
  },
  '2011-02-28': {
    '1. open': '31.5500',
    '2. high': '34.6250',
    '3. low': '28.8100',
    '4. close': '30.3450',
    '5. volume': '5253332'
  },
  '2011-01-31': {
    '1. open': '33.0900',
    '2. high': '35.5000',
    '3. low': '29.7400',
    '4. close': '31.3350',
    '5. volume': '5414529'
  },
  '2010-12-30': {
    '1. open': '28.9000',
    '2. high': '34.9750',
    '3. low': '28.8600',
    '4. close': '32.9500',
    '5. volume': '3831744'
  },
  '2010-11-30': {
    '1. open': '26.2500',
    '2. high': '30.0000',
    '3. low': '25.7300',
    '4. close': '28.8100',
    '5. volume': '4708187'
  },
  '2010-10-29': {
    '1. open': '25.0500',
    '2. high': '27.7950',
    '3. low': '23.9050',
    '4. close': '26.1700',
    '5. volume': '3863485'
  },
  '2010-09-30': {
    '1. open': '20.7400',
    '2. high': '25.4200',
    '3. low': '20.4000',
    '4. close': '24.8750',
    '5. volume': '4256929'
  },
  '2010-08-31': {
    '1. open': '23.1000',
    '2. high': '23.3800',
    '3. low': '19.4050',
    '4. close': '20.6650',
    '5. volume': '6352227'
  },
  '2010-07-30': {
    '1. open': '17.1100',
    '2. high': '23.6900',
    '3. low': '16.7600',
    '4. close': '22.9700',
    '5. volume': '7539003'
  },
  '2010-06-30': {
    '1. open': '16.3000',
    '2. high': '18.5000',
    '3. low': '15.1100',
    '4. close': '17.3100',
    '5. volume': '4293495'
  },
  '2010-05-31': {
    '1. open': '17.5000',
    '2. high': '18.2100',
    '3. low': '14.9500',
    '4. close': '16.4900',
    '5. volume': '5392160'
  },
  '2010-04-30': {
    '1. open': '17.2500',
    '2. high': '19.0300',
    '3. low': '16.9400',
    '4. close': '17.5750',
    '5. volume': '5362925'
  },
  '2010-03-31': {
    '1. open': '13.8650',
    '2. high': '17.5150',
    '3. low': '13.5100',
    '4. close': '17.1700',
    '5. volume': '4369795'
  },
  '2010-02-26': {
    '1. open': '16.1450',
    '2. high': '16.5300',
    '3. low': '13.2700',
    '4. close': '13.9100',
    '5. volume': '5228175'
  },
  '2010-01-29': {
    '1. open': '16.2350',
    '2. high': '17.8200',
    '3. low': '14.9550',
    '4. close': '16.1150',
    '5. volume': '4040551'
  },
  '2009-12-30': {
    '1. open': '15.2200',
    '2. high': '17.1200',
    '3. low': '15.0200',
    '4. close': '16.3500',
    '5. volume': '2916145'
  },
  '2009-11-30': {
    '1. open': '13.7900',
    '2. high': '15.8400',
    '3. low': '12.9200',
    '4. close': '15.1400',
    '5. volume': '5898712'
  },
  '2009-10-30': {
    '1. open': '15.6300',
    '2. high': '16.4000',
    '3. low': '13.1400',
    '4. close': '13.9200',
    '5. volume': '6278979'
  },
  '2009-09-30': {
    '1. open': '14.8900',
    '2. high': '17.3400',
    '3. low': '13.6700',
    '4. close': '15.5800',
    '5. volume': '3396197'
  },
  '2009-08-31': {
    '1. open': '13.6900',
    '2. high': '17.0900',
    '3. low': '13.4400',
    '4. close': '14.7800',
    '5. volume': '4479465'
  },
  '2009-07-31': {
    '1. open': '11.8400',
    '2. high': '13.7000',
    '3. low': '11.0000',
    '4. close': '13.6900',
    '5. volume': '2874680'
  },
  '2009-06-30': {
    '1. open': '11.3600',
    '2. high': '14.4400',
    '3. low': '10.9000',
    '4. close': '11.7400',
    '5. volume': '4047899'
  },
  '2009-05-29': {
    '1. open': '11.3500',
    '2. high': '13.4500',
    '3. low': '9.6700',
    '4. close': '11.0700',
    '5. volume': '3239907'
  },
  '2009-04-30': {
    '1. open': '6.7400',
    '2. high': '11.3000',
    '3. low': '6.6800',
    '4. close': '11.2100',
    '5. volume': '3988163'
  },
  '2009-03-31': {
    '1. open': '7.0300',
    '2. high': '7.5900',
    '3. low': '6.0700',
    '4. close': '6.8400',
    '5. volume': '3732165'
  },
  '2009-02-27': {
    '1. open': '9.1000',
    '2. high': '10.2500',
    '3. low': '6.9400',
    '4. close': '7.1300',
    '5. volume': '3102609'
  },
  '2009-01-30': {
    '1. open': '12.9500',
    '2. high': '13.4000',
    '3. low': '8.9200',
    '4. close': '9.3200',
    '5. volume': '3491450'
  },
  '2008-12-30': {
    '1. open': '10.9200',
    '2. high': '13.4400',
    '3. low': '9.7100',
    '4. close': '12.9900',
    '5. volume': '5191758'
  },
  '2008-11-28': {
    '1. open': '10.7900',
    '2. high': '12.6200',
    '3. low': '7.5200',
    '4. close': '10.9800',
    '5. volume': '10192482'
  },
  '2008-10-31': {
    '1. open': '21.5100',
    '2. high': '21.5100',
    '3. low': '8.5200',
    '4. close': '9.7900',
    '5. volume': '12498113'
  },
  '2008-09-30': {
    '1. open': '29.9300',
    '2. high': '31.6000',
    '3. low': '19.9900',
    '4. close': '21.3500',
    '5. volume': '8034218'
  },
  '2008-08-29': {
    '1. open': '26.2700',
    '2. high': '31.1000',
    '3. low': '25.7500',
    '4. close': '30.3600',
    '5. volume': '2737335'
  },
  '2008-07-31': {
    '1. open': '27.2400',
    '2. high': '28.3500',
    '3. low': '23.1000',
    '4. close': '26.6400',
    '5. volume': '4377008'
  },
  '2008-06-30': {
    '1. open': '32.6100',
    '2. high': '32.7500',
    '3. low': '25.8000',
    '4. close': '27.2000',
    '5. volume': '4232875'
  },
  '2008-05-30': {
    '1. open': '34.7500',
    '2. high': '36.1500',
    '3. low': '30.2800',
    '4. close': '32.5800',
    '5. volume': '3973840'
  },
  '2008-04-30': {
    '1. open': '30.3500',
    '2. high': '35.1800',
    '3. low': '30.1500',
    '4. close': '34.3200',
    '5. volume': '4125966'
  },
  '2008-03-31': {
    '1. open': '27.4600',
    '2. high': '31.6000',
    '3. low': '26.3100',
    '4. close': '30.3200',
    '5. volume': '5194692'
  },
  '2008-02-29': {
    '1. open': '28.2500',
    '2. high': '29.4900',
    '3. low': '24.7000',
    '4. close': '27.9000',
    '5. volume': '8245746'
  },
  '2008-01-31': {
    '1. open': '33.4800',
    '2. high': '34.0500',
    '3. low': '22.9000',
    '4. close': '27.7500',
    '5. volume': '7471778'
  },
  '2007-12-28': {
    '1. open': '36.8900',
    '2. high': '37.2400',
    '3. low': '32.4000',
    '4. close': '33.6000',
    '5. volume': '3846409'
  },
  '2007-11-30': {
    '1. open': '44.0000',
    '2. high': '46.8100',
    '3. low': '32.6100',
    '4. close': '36.1000',
    '5. volume': '6339133'
  },
  '2007-10-31': {
    '1. open': '43.0000',
    '2. high': '45.9900',
    '3. low': '41.0700',
    '4. close': '43.8200',
    '5. volume': '5058940'
  },
  '2007-09-28': {
    '1. open': '38.4300',
    '2. high': '43.8700',
    '3. low': '38.4300',
    '4. close': '42.7900',
    '5. volume': '5441841'
  },
  '2007-08-31': {
    '1. open': '35.7000',
    '2. high': '39.9400',
    '3. low': '34.7500',
    '4. close': '38.4800',
    '5. volume': '6914885'
  },
  '2007-07-31': {
    '1. open': '34.3000',
    '2. high': '38.7500',
    '3. low': '34.1300',
    '4. close': '36.0600',
    '5. volume': '4281290'
  },
  '2007-06-29': {
    '1. open': '35.1400',
    '2. high': '35.7700',
    '3. low': '32.8600',
    '4. close': '34.5000',
    '5. volume': '3736558'
  },
  '2007-05-31': {
    '1. open': '33.3900',
    '2. high': '35.6100',
    '3. low': '31.9500',
    '4. close': '35.2500',
    '5. volume': '4713195'
  },
  '2007-04-30': {
    '1. open': '31.0000',
    '2. high': '33.4000',
    '3. low': '30.3300',
    '4. close': '33.3500',
    '5. volume': '4539807'
  },
  '2007-03-30': {
    '1. open': '31.0000',
    '2. high': '31.9000',
    '3. low': '29.2000',
    '4. close': '30.8300',
    '5. volume': '5534476'
  },
  '2007-02-28': {
    '1. open': '32.1800',
    '2. high': '34.4000',
    '3. low': '28.4000',
    '4. close': '30.7900',
    '5. volume': '3320541'
  },
  '2007-01-31': {
    '1. open': '30.8400',
    '2. high': '32.3400',
    '3. low': '29.7600',
    '4. close': '31.9600',
    '5. volume': '2720165'
  },
  '2006-12-29': {
    '1. open': '31.6600',
    '2. high': '33.2000',
    '3. low': '30.3000',
    '4. close': '30.9200',
    '5. volume': '2264437'
  },
  '2006-11-30': {
    '1. open': '30.1500',
    '2. high': '33.4000',
    '3. low': '29.6600',
    '4. close': '31.6700',
    '5. volume': '3746846'
  },
  '2006-10-31': {
    '1. open': '27.7000',
    '2. high': '30.2100',
    '3. low': '26.5600',
    '4. close': '29.8300',
    '5. volume': '3418765'
  },
  '2006-09-29': {
    '1. open': '27.2900',
    '2. high': '27.7200',
    '3. low': '26.1300',
    '4. close': '27.5000',
    '5. volume': '1944487'
  },
  '2006-08-31': {
    '1. open': '30.5000',
    '2. high': '30.6000',
    '3. low': '26.0100',
    '4. close': '27.2900',
    '5. volume': '2705072'
  },
  '2006-07-31': {
    '1. open': '29.5000',
    '2. high': '30.7200',
    '3. low': '27.1200',
    '4. close': '30.6100',
    '5. volume': '2086713'
  },
  '2006-06-30': {
    '1. open': '30.1400',
    '2. high': '30.5000',
    '3. low': '25.6000',
    '4. close': '29.4100',
    '5. volume': '3563003'
  },
  '2006-05-31': {
    '1. open': '34.0000',
    '2. high': '34.3400',
    '3. low': '25.3000',
    '4. close': '29.9000',
    '5. volume': '5913889'
  },
  '2006-04-28': {
    '1. open': '29.4900',
    '2. high': '33.7600',
    '3. low': '29.2500',
    '4. close': '32.8900',
    '5. volume': '1936031'
  },
  '2006-03-31': {
    '1. open': '29.4000',
    '2. high': '30.4000',
    '3. low': '27.1900',
    '4. close': '29.4600',
    '5. volume': '2022119'
  },
  '2006-02-28': {
    '1. open': '27.6700',
    '2. high': '29.8500',
    '3. low': '26.8000',
    '4. close': '29.3000',
    '5. volume': '2219027'
  },
  '2006-01-31': {
    '1. open': '27.0100',
    '2. high': '28.2900',
    '3. low': '25.1000',
    '4. close': '27.8500',
    '5. volume': '1667760'
  },
  '2005-12-30': {
    '1. open': '26.8500',
    '2. high': '28.5000',
    '3. low': '25.3100',
    '4. close': '26.9300',
    '5. volume': '1499286'
  },
  '2005-11-30': {
    '1. open': '26.0500',
    '2. high': '27.0000',
    '3. low': '24.6200',
    '4. close': '26.9000',
    '5. volume': '1884204'
  },
  '2005-10-31': {
    '1. open': '26.7000',
    '2. high': '29.4000',
    '3. low': '22.5900',
    '4. close': '26.0000',
    '5. volume': '2721526'
  },
  '2005-09-30': {
    '1. open': '25.2500',
    '2. high': '26.7900',
    '3. low': '23.7500',
    '4. close': '26.7000',
    '5. volume': '1871514'
  },
  '2005-08-31': {
    '1. open': '22.9600',
    '2. high': '25.3000',
    '3. low': '22.5900',
    '4. close': '25.1200',
    '5. volume': '1868551'
  },
  '2005-07-29': {
    '1. open': '21.1100',
    '2. high': '23.1000',
    '3. low': '20.4700',
    '4. close': '22.8000',
    '5. volume': '1374254'
  },
  '2005-06-30': {
    '1. open': '20.7800',
    '2. high': '22.1000',
    '3. low': '19.8500',
    '4. close': '21.2900',
    '5. volume': '1655552'
  },
  '2005-05-31': {
    '1. open': '20.2000',
    '2. high': '21.3367',
    '3. low': '19.0400',
    '4. close': '20.6767',
    '5. volume': '2263608'
  },
  '2005-04-29': {
    '1. open': '21.1533',
    '2. high': '22.6633',
    '3. low': '19.5533',
    '4. close': '20.0333',
    '5. volume': '2840388'
  },
  '2005-03-31': {
    '1. open': '19.6900',
    '2. high': '21.3833',
    '3. low': '19.2133',
    '4. close': '20.9667',
    '5. volume': '2460042'
  },
  '2005-02-28': {
    '1. open': '18.0967',
    '2. high': '19.9067',
    '3. low': '17.9367',
    '4. close': '19.7333',
    '5. volume': '2702793'
  },
  '2005-01-31': {
    '1. open': '16.7900',
    '2. high': '18.4767',
    '3. low': '16.6667',
    '4. close': '18.0000',
    '5. volume': '2132034'
  },
  '2004-12-30': {
    '1. open': '16.6667',
    '2. high': '16.8833',
    '3. low': '16.1500',
    '4. close': '16.6667',
    '5. volume': '1446543'
  },
  '2004-11-30': {
    '1. open': '15.5533',
    '2. high': '17.3333',
    '3. low': '15.5333',
    '4. close': '16.7000',
    '5. volume': '2555703'
  },
  '2004-10-29': {
    '1. open': '15.1300',
    '2. high': '15.8067',
    '3. low': '14.3400',
    '4. close': '15.6667',
    '5. volume': '1429980'
  },
  '2004-09-30': {
    '1. open': '15.3667',
    '2. high': '16.1667',
    '3. low': '14.6000',
    '4. close': '15.2633',
    '5. volume': '1044048'
  },
  '2004-08-31': {
    '1. open': '14.4233',
    '2. high': '15.6667',
    '3. low': '14.1333',
    '4. close': '15.2333',
    '5. volume': '2173560'
  },
  '2004-07-30': {
    '1. open': '14.1500',
    '2. high': '14.6300',
    '3. low': '13.8333',
    '4. close': '14.3333',
    '5. volume': '3218994'
  },
  '2004-06-30': {
    '1. open': '16.5000',
    '2. high': '16.8667',
    '3. low': '14.0767',
    '4. close': '14.1333',
    '5. volume': '1770867'
  },
  '2004-05-31': {
    '1. open': '17.3333',
    '2. high': '18.1367',
    '3. low': '16.4167',
    '4. close': '16.4767',
    '5. volume': '822117'
  },
  '2004-04-30': {
    '1. open': '15.9000',
    '2. high': '19.0000',
    '3. low': '15.1300',
    '4. close': '17.3833',
    '5. volume': '2648202'
  },
  '2004-03-31': {
    '1. open': '17.9167',
    '2. high': '18.1867',
    '3. low': '15.4667',
    '4. close': '15.8333',
    '5. volume': '1758294'
  },
  '2004-02-27': {
    '1. open': '18.2333',
    '2. high': '19.1333',
    '3. low': '16.8933',
    '4. close': '18.0000',
    '5. volume': '1265571'
  },
  '2004-01-30': {
    '1. open': '16.4800',
    '2. high': '18.2700',
    '3. low': '15.3333',
    '4. close': '18.2167',
    '5. volume': '1245513'
  },
  '2003-12-30': {
    '1. open': '14.4333',
    '2. high': '16.5000',
    '3. low': '14.3333',
    '4. close': '16.3333',
    '5. volume': '686019'
  },
  '2003-11-28': {
    '1. open': '16.3800',
    '2. high': '16.5900',
    '3. low': '13.4533',
    '4. close': '14.3333',
    '5. volume': '1365927'
  },
  '2003-10-31': {
    '1. open': '15.6000',
    '2. high': '16.6000',
    '3. low': '14.7333',
    '4. close': '16.1967',
    '5. volume': '649632'
  },
  '2003-09-30': {
    '1. open': '16.0667',
    '2. high': '16.0667',
    '3. low': '14.3367',
    '4. close': '15.6000',
    '5. volume': '998982'
  },
  '2003-08-29': {
    '1. open': '16.3333',
    '2. high': '16.5000',
    '3. low': '13.8400',
    '4. close': '15.9700',
    '5. volume': '1467474'
  },
  '2003-07-31': {
    '1. open': '14.6000',
    '2. high': '16.6467',
    '3. low': '13.2667',
    '4. close': '16.3833',
    '5. volume': '937110'
  },
  '2003-06-30': {
    '1. open': '12.8267',
    '2. high': '14.7200',
    '3. low': '12.5467',
    '4. close': '14.4333',
    '5. volume': '1104357'
  },
  '2003-05-30': {
    '1. open': '11.3000',
    '2. high': '12.8833',
    '3. low': '10.7667',
    '4. close': '12.6467',
    '5. volume': '1161699'
  },
  '2003-04-30': {
    '1. open': '9.8333',
    '2. high': '11.4967',
    '3. low': '9.5667',
    '4. close': '11.3333',
    '5. volume': '775032'
  },
  '2003-03-31': {
    '1. open': '9.5500',
    '2. high': '10.7000',
    '3. low': '9.2000',
    '4. close': '9.8333',
    '5. volume': '606213'
  },
  '2003-02-28': {
    '1. open': '9.8333',
    '2. high': '10.4000',
    '3. low': '8.6000',
    '4. close': '9.5000',
    '5. volume': '532050'
  },
  '2003-01-31': {
    '1. open': '10.2667',
    '2. high': '10.5333',
    '3. low': '9.6667',
    '4. close': '9.8733',
    '5. volume': '641595'
  },
  '2002-12-30': {
    '1. open': '9.5333',
    '2. high': '10.9667',
    '3. low': '9.5333',
    '4. close': '10.1667',
    '5. volume': '516948'
  },
  '2002-11-29': {
    '1. open': '9.5000',
    '2. high': '9.8333',
    '3. low': '8.6667',
    '4. close': '9.5833',
    '5. volume': '435405'
  },
  '2002-10-31': {
    '1. open': '8.2900',
    '2. high': '9.8000',
    '3. low': '8.2000',
    '4. close': '9.4467',
    '5. volume': '419916'
  },
  '2002-09-30': {
    '1. open': '9.9767',
    '2. high': '10.0000',
    '3. low': '7.2500',
    '4. close': '8.2933',
    '5. volume': '603816'
  },
  '2002-08-30': {
    '1. open': '10.4133',
    '2. high': '10.8333',
    '3. low': '9.6667',
    '4. close': '10.1167',
    '5. volume': '334383'
  },
  '2002-07-31': {
    '1. open': '11.0900',
    '2. high': '11.2533',
    '3. low': '9.0467',
    '4. close': '10.3167',
    '5. volume': '780615'
  },
  '2002-06-28': {
    '1. open': '12.3333',
    '2. high': '12.3333',
    '3. low': '9.3333',
    '4. close': '11.2500',
    '5. volume': '611169'
  },
  '2002-05-31': {
    '1. open': '11.0833',
    '2. high': '12.3333',
    '3. low': '10.8000',
    '4. close': '12.3000',
    '5. volume': '972942'
  },
  '2002-04-30': {
    '1. open': '9.9333',
    '2. high': '11.2000',
    '3. low': '9.7333',
    '4. close': '11.0833',
    '5. volume': '415728'
  },
  '2002-03-28': {
    '1. open': '9.6667',
    '2. high': '10.4833',
    '3. low': '9.6667',
    '4. close': '9.9333',
    '5. volume': '378603'
  },
  '2002-02-28': {
    '1. open': '9.4667',
    '2. high': '9.9333',
    '3. low': '9.3000',
    '4. close': '9.6667',
    '5. volume': '265464'
  },
  '2002-01-31': {
    '1. open': '8.1633',
    '2. high': '9.6167',
    '3. low': '8.1633',
    '4. close': '9.4667',
    '5. volume': '365355'
  },
  '2001-12-28': {
    '1. open': '8.4200',
    '2. high': '8.8667',
    '3. low': '8.0167',
    '4. close': '8.0167',
    '5. volume': '137235'
  },
  '2001-11-30': {
    '1. open': '8.1667',
    '2. high': '8.6767',
    '3. low': '7.7667',
    '4. close': '8.4667',
    '5. volume': '78156'
  },
  '2001-10-31': {
    '1. open': '7.8333',
    '2. high': '8.1333',
    '3. low': '7.6667',
    '4. close': '8.1333',
    '5. volume': '138852'
  },
  '2001-09-27': {
    '1. open': '8.5000',
    '2. high': '8.8233',
    '3. low': '6.6000',
    '4. close': '7.8000',
    '5. volume': '429309'
  },
  '2001-08-31': {
    '1. open': '8.4000',
    '2. high': '8.7333',
    '3. low': '8.1667',
    '4. close': '8.6000',
    '5. volume': '56943'
  },
  '2001-07-31': {
    '1. open': '8.3333',
    '2. high': '8.8000',
    '3. low': '8.1000',
    '4. close': '8.3333',
    '5. volume': '152610'
  },
  '2001-06-29': {
    '1. open': '8.4000',
    '2. high': '8.8000',
    '3. low': '7.9900',
    '4. close': '8.4033',
    '5. volume': '86094'
  },
  '2001-05-31': {
    '1. open': '8.6667',
    '2. high': '9.0967',
    '3. low': '8.5000',
    '4. close': '8.5000',
    '5. volume': '41007'
  },
  '2001-04-30': {
    '1. open': '8.2333',
    '2. high': '8.7400',
    '3. low': '8.0667',
    '4. close': '8.5667',
    '5. volume': '34419'
  },
  '2001-03-30': {
    '1. open': '9.7667',
    '2. high': '9.7667',
    '3. low': '8.1667',
    '4. close': '8.2667',
    '5. volume': '41616'
  },
  '2001-02-28': {
    '1. open': '8.6667',
    '2. high': '9.7333',
    '3. low': '8.6667',
    '4. close': '9.4267',
    '5. volume': '55320'
  },
  '2001-01-30': {
    '1. open': '9.4933',
    '2. high': '9.4933',
    '3. low': '8.5500',
    '4. close': '8.6667',
    '5. volume': '45267'
  },
  '2000-12-29': {
    '1. open': '8.3333',
    '2. high': '9.6667',
    '3. low': '8.3333',
    '4. close': '9.6667',
    '5. volume': '133506'
  },
  '2000-11-28': {
    '1. open': '8.6567',
    '2. high': '8.8933',
    '3. low': '8.0333',
    '4. close': '8.4267',
    '5. volume': '153237'
  },
  '2000-10-31': {
    '1. open': '8.8333',
    '2. high': '8.8333',
    '3. low': '8.2667',
    '4. close': '8.5000',
    '5. volume': '54882'
  },
  '2000-09-28': {
    '1. open': '9.2667',
    '2. high': '9.3333',
    '3. low': '8.6667',
    '4. close': '8.8333',
    '5. volume': '46365'
  },
  '2000-08-31': {
    '1. open': '9.3333',
    '2. high': '9.3667',
    '3. low': '8.8333',
    '4. close': '9.3000',
    '5. volume': '53229'
  },
  '2000-07-31': {
    '1. open': '9.0500',
    '2. high': '9.9667',
    '3. low': '8.7033',
    '4. close': '9.3333',
    '5. volume': '95838'
  },
  '2000-06-30': {
    '1. open': '9.6000',
    '2. high': '9.8333',
    '3. low': '8.7500',
    '4. close': '8.9933',
    '5. volume': '47385'
  },
  '2000-05-30': {
    '1. open': '9.0000',
    '2. high': '10.3167',
    '3. low': '9.0000',
    '4. close': '9.5000',
    '5. volume': '164754'
  },
  '2000-04-28': {
    '1. open': '9.2333',
    '2. high': '9.2800',
    '3. low': '8.6833',
    '4. close': '8.9500',
    '5. volume': '53070'
  },
  '2000-03-31': {
    '1. open': '9.8333',
    '2. high': '10.1667',
    '3. low': '9.0000',
    '4. close': '9.3333',
    '5. volume': '91692'
  },
  '2000-02-29': {
    '1. open': '9.8333',
    '2. high': '11.4967',
    '3. low': '9.3333',
    '4. close': '9.7300',
    '5. volume': '147873'
  },
  '2000-01-31': {
    '1. open': '9.1967',
    '2. high': '9.7367',
    '3. low': '8.5000',
    '4. close': '9.6667',
    '5. volume': '89922'
  },
  '1999-12-30': {
    '1. open': '10.0000',
    '2. high': '10.0000',
    '3. low': '9.0000',
    '4. close': '9.0000',
    '5. volume': '31110'
  }
};

// tslint:disable:max-line-length
export const leoniCompany: Company = {
  id: 1146,
  name: 'Leoni AG',
  country: Country.Deutschland,
  city: 'Nürnberg',
  url: 'https://www.leoni.com/de/',
  description: 'Leoni (Eigenschreibweise in Majuskeln) mit Sitz in Nürnberg ist ein führender deutscher Hersteller in den Produktgruppen Drähte, Kabel und Bordnetz-Systeme in der Rechtsform einer Aktiengesellschaft. Die produzierten Warengruppen sind in zwei Unternehmensbereiche aufgegliedert: „Division Wire & Cable Solutions“ (früher „Draht & Kabel“) sowie „Division Wiring Systems“ (früher „Bordnetz-Systeme“). Die Wurzeln von Leoni reichen bis ins Jahr 1569 zurück, als Anthoni Fournier eine Werkstatt in Nürnberg eröffnete, die Leonische Waren herstellte. Das Stammwerk befindet sich in Roth bei Nürnberg.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Leoni_AG',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Leoni_AG_Logo.svg/500px-Leoni_AG_Logo.svg.png',
  products: [],
  industries: [121110],
  securityType: SecurityType.Namensaktie,
  currency: Currency.EUR,
  isin: 'DE0005408884',
  wkn: '540888',
  symbol: 'LEO.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Entwicklungslieferant', 'Systemlieferant', 'Drähte', 'Kabel', 'Bordnetz']
};
// tslint:enable:max-line-length

