import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.50, yield: 1.24}, {year: 2017, rate: 0.35}, {year: 2016, rate: 0.35}, {
    year: 2015,
    rate: 0.35,
    yield: 1.31
  }, {year: 2014, rate: 0.35, yield: 1.76}, {year: 2013, rate: 0.35, yield: 1.89}, {year: 2012, rate: 0.35, yield: 2.39}, {
    year: 2011,
    rate: 0.25,
    yield: 2.87
  }, {year: 2010, rate: 0.25, yield: 2.26}, {year: 2009, rate: 0.25, yield: 3.36}, {year: 2008, rate: 0.00, yield: 0.00}, {
    year: 2007,
    rate: 0.00,
    yield: 0.00
  }, {year: 2006, rate: 0.00, yield: 0.00}, {year: 2005, rate: 0.00, yield: 0.00}, {year: 2004, rate: 0.00, yield: 0.00}, {
    year: 2003,
    rate: 0.00,
    yield: 0.00
  }, {year: 2002, rate: 0.00, yield: 0.00}, {year: 2001, rate: 0.00, yield: 0.00}, {year: 2000, rate: 0.03, yield: 2.88}
];
const prices = {
  '2019-11-14': {
    '1. open': '57.7000',
    '2. high': '61.5500',
    '3. low': '55.8000',
    '4. close': '59.5000',
    '5. volume': '1148910'
  },
  '2019-10-31': {
    '1. open': '55.2000',
    '2. high': '59.2000',
    '3. low': '51.9000',
    '4. close': '57.4000',
    '5. volume': '2236180'
  },
  '2019-09-30': {
    '1. open': '51.8500',
    '2. high': '55.9000',
    '3. low': '46.4600',
    '4. close': '55.2000',
    '5. volume': '3167191'
  },
  '2019-08-30': {
    '1. open': '70.3000',
    '2. high': '71.3500',
    '3. low': '50.1000',
    '4. close': '51.8500',
    '5. volume': '3156230'
  },
  '2019-07-31': {
    '1. open': '72.0000',
    '2. high': '74.8000',
    '3. low': '69.3500',
    '4. close': '69.9500',
    '5. volume': '1928657'
  },
  '2019-06-28': {
    '1. open': '60.8000',
    '2. high': '71.0500',
    '3. low': '60.1000',
    '4. close': '71.0000',
    '5. volume': '1931790'
  },
  '2019-05-31': {
    '1. open': '59.2000',
    '2. high': '62.6000',
    '3. low': '56.4000',
    '4. close': '60.2000',
    '5. volume': '2225584'
  },
  '2019-04-30': {
    '1. open': '52.9000',
    '2. high': '59.2500',
    '3. low': '52.9000',
    '4. close': '59.0000',
    '5. volume': '1427493'
  },
  '2019-03-29': {
    '1. open': '51.3000',
    '2. high': '54.2000',
    '3. low': '49.5600',
    '4. close': '52.5000',
    '5. volume': '1704046'
  },
  '2019-02-28': {
    '1. open': '43.7200',
    '2. high': '52.5000',
    '3. low': '43.2200',
    '4. close': '51.4000',
    '5. volume': '1506142'
  },
  '2019-01-31': {
    '1. open': '40.7000',
    '2. high': '45.0200',
    '3. low': '39.3200',
    '4. close': '43.4200',
    '5. volume': '1044896'
  },
  '2018-12-28': {
    '1. open': '42.6800',
    '2. high': '42.6800',
    '3. low': '37.8800',
    '4. close': '40.4400',
    '5. volume': '985610'
  },
  '2018-11-30': {
    '1. open': '49.7200',
    '2. high': '51.2500',
    '3. low': '40.8800',
    '4. close': '41.7800',
    '5. volume': '1386054'
  },
  '2018-10-31': {
    '1. open': '49.8200',
    '2. high': '51.4500',
    '3. low': '44.4400',
    '4. close': '50.0000',
    '5. volume': '1716618'
  },
  '2018-09-28': {
    '1. open': '50.1500',
    '2. high': '51.8000',
    '3. low': '48.2600',
    '4. close': '49.7600',
    '5. volume': '1043240'
  },
  '2018-08-31': {
    '1. open': '47.7600',
    '2. high': '54.1500',
    '3. low': '46.3000',
    '4. close': '50.2000',
    '5. volume': '1867869'
  },
  '2018-07-31': {
    '1. open': '43.1800',
    '2. high': '49.0000',
    '3. low': '42.9000',
    '4. close': '47.6800',
    '5. volume': '1291783'
  },
  '2018-06-29': {
    '1. open': '37.9800',
    '2. high': '45.1200',
    '3. low': '37.7600',
    '4. close': '44.0000',
    '5. volume': '1543050'
  },
  '2018-05-31': {
    '1. open': '43.3200',
    '2. high': '47.6400',
    '3. low': '37.6400',
    '4. close': '37.7400',
    '5. volume': '2189352'
  },
  '2018-04-30': {
    '1. open': '43.6800',
    '2. high': '44.7800',
    '3. low': '41.0200',
    '4. close': '43.2400',
    '5. volume': '1168776'
  },
  '2018-03-29': {
    '1. open': '46.6000',
    '2. high': '47.3000',
    '3. low': '41.8000',
    '4. close': '43.9400',
    '5. volume': '1646179'
  },
  '2018-02-28': {
    '1. open': '50.8000',
    '2. high': '51.3000',
    '3. low': '43.2200',
    '4. close': '46.7600',
    '5. volume': '1326807'
  },
  '2018-01-31': {
    '1. open': '55.1500',
    '2. high': '60.3000',
    '3. low': '50.3000',
    '4. close': '50.9500',
    '5. volume': '1779145'
  },
  '2017-12-29': {
    '1. open': '56.9800',
    '2. high': '57.8800',
    '3. low': '51.3100',
    '4. close': '54.7200',
    '5. volume': '1118773'
  },
  '2017-11-30': {
    '1. open': '49.7000',
    '2. high': '57.9200',
    '3. low': '46.0850',
    '4. close': '56.8000',
    '5. volume': '1621502'
  },
  '2017-10-31': {
    '1. open': '48.0000',
    '2. high': '51.7000',
    '3. low': '46.4700',
    '4. close': '49.3300',
    '5. volume': '946883'
  },
  '2017-09-29': {
    '1. open': '49.1600',
    '2. high': '49.4350',
    '3. low': '46.1350',
    '4. close': '47.9200',
    '5. volume': '697775'
  },
  '2017-08-31': {
    '1. open': '50.4500',
    '2. high': '51.8000',
    '3. low': '45.5300',
    '4. close': '48.9950',
    '5. volume': '1561538'
  },
  '2017-07-31': {
    '1. open': '49.6500',
    '2. high': '51.3300',
    '3. low': '48.6950',
    '4. close': '50.3600',
    '5. volume': '846285'
  },
  '2017-06-30': {
    '1. open': '50.5300',
    '2. high': '52.9400',
    '3. low': '48.4050',
    '4. close': '49.1300',
    '5. volume': '1283243'
  },
  '2017-05-31': {
    '1. open': '45.4500',
    '2. high': '50.9800',
    '3. low': '41.7150',
    '4. close': '50.5800',
    '5. volume': '1005981'
  },
  '2017-04-28': {
    '1. open': '41.7500',
    '2. high': '45.6500',
    '3. low': '40.1500',
    '4. close': '45.2000',
    '5. volume': '632940'
  },
  '2017-03-31': {
    '1. open': '38.1750',
    '2. high': '41.7200',
    '3. low': '37.8350',
    '4. close': '41.7200',
    '5. volume': '915352'
  },
  '2017-02-28': {
    '1. open': '36.4350',
    '2. high': '39.2500',
    '3. low': '36.3200',
    '4. close': '37.8150',
    '5. volume': '1177786'
  },
  '2017-01-31': {
    '1. open': '38.9600',
    '2. high': '39.5950',
    '3. low': '36.1200',
    '4. close': '36.4000',
    '5. volume': '1179826'
  },
  '2016-12-30': {
    '1. open': '37.2600',
    '2. high': '39.5450',
    '3. low': '37.0550',
    '4. close': '38.9450',
    '5. volume': '651204'
  },
  '2016-11-30': {
    '1. open': '40.2000',
    '2. high': '40.5350',
    '3. low': '36.0600',
    '4. close': '37.2050',
    '5. volume': '981864'
  },
  '2016-10-31': {
    '1. open': '41.1500',
    '2. high': '42.9400',
    '3. low': '37.6500',
    '4. close': '40.3300',
    '5. volume': '719325'
  },
  '2016-09-30': {
    '1. open': '38.2200',
    '2. high': '41.0350',
    '3. low': '37.7000',
    '4. close': '41.0350',
    '5. volume': '553432'
  },
  '2016-08-31': {
    '1. open': '38.7500',
    '2. high': '39.9000',
    '3. low': '36.3500',
    '4. close': '38.1050',
    '5. volume': '756771'
  },
  '2016-07-29': {
    '1. open': '37.5400',
    '2. high': '39.5000',
    '3. low': '35.1550',
    '4. close': '38.6200',
    '5. volume': '542375'
  },
  '2016-06-30': {
    '1. open': '39.3850',
    '2. high': '40.2600',
    '3. low': '32.5200',
    '4. close': '37.4900',
    '5. volume': '1318714'
  },
  '2016-05-31': {
    '1. open': '34.5400',
    '2. high': '40.0500',
    '3. low': '33.9450',
    '4. close': '39.2100',
    '5. volume': '666048'
  },
  '2016-04-29': {
    '1. open': '36.6550',
    '2. high': '37.9500',
    '3. low': '33.9150',
    '4. close': '34.3000',
    '5. volume': '695925'
  },
  '2016-03-31': {
    '1. open': '37.2200',
    '2. high': '38.2000',
    '3. low': '33.9200',
    '4. close': '37.1500',
    '5. volume': '872604'
  },
  '2016-02-29': {
    '1. open': '37.1950',
    '2. high': '38.0650',
    '3. low': '31.6450',
    '4. close': '36.8350',
    '5. volume': '1565683'
  },
  '2016-01-29': {
    '1. open': '33.4400',
    '2. high': '38.3300',
    '3. low': '32.3650',
    '4. close': '36.9000',
    '5. volume': '1403309'
  },
  '2015-12-30': {
    '1. open': '33.3300',
    '2. high': '36.4000',
    '3. low': '31.6300',
    '4. close': '33.8000',
    '5. volume': '1095888'
  },
  '2015-11-30': {
    '1. open': '26.5900',
    '2. high': '33.5750',
    '3. low': '25.1000',
    '4. close': '33.1150',
    '5. volume': '1351694'
  },
  '2015-10-30': {
    '1. open': '29.7900',
    '2. high': '29.9000',
    '3. low': '26.2050',
    '4. close': '26.8000',
    '5. volume': '618066'
  },
  '2015-09-30': {
    '1. open': '27.2050',
    '2. high': '30.8400',
    '3. low': '26.3800',
    '4. close': '29.5400',
    '5. volume': '568059'
  },
  '2015-08-31': {
    '1. open': '28.7500',
    '2. high': '30.3700',
    '3. low': '24.4900',
    '4. close': '27.5150',
    '5. volume': '1127633'
  },
  '2015-07-31': {
    '1. open': '31.2400',
    '2. high': '36.3600',
    '3. low': '27.9000',
    '4. close': '28.7550',
    '5. volume': '1709873'
  },
  '2015-06-30': {
    '1. open': '30.4900',
    '2. high': '32.8550',
    '3. low': '28.8450',
    '4. close': '31.3850',
    '5. volume': '1024818'
  },
  '2015-05-29': {
    '1. open': '25.5000',
    '2. high': '30.4950',
    '3. low': '25.1250',
    '4. close': '30.1850',
    '5. volume': '810988'
  },
  '2015-04-30': {
    '1. open': '26.7200',
    '2. high': '28.6500',
    '3. low': '25.1450',
    '4. close': '25.5100',
    '5. volume': '664440'
  },
  '2015-03-31': {
    '1. open': '27.6000',
    '2. high': '28.2200',
    '3. low': '26.1300',
    '4. close': '26.9300',
    '5. volume': '906641'
  },
  '2015-02-27': {
    '1. open': '23.0100',
    '2. high': '28.8000',
    '3. low': '21.8500',
    '4. close': '27.6100',
    '5. volume': '977112'
  },
  '2015-01-30': {
    '1. open': '19.9200',
    '2. high': '23.7850',
    '3. low': '19.7900',
    '4. close': '22.9100',
    '5. volume': '523683'
  },
  '2014-12-30': {
    '1. open': '21.5000',
    '2. high': '21.6500',
    '3. low': '19.0000',
    '4. close': '19.9000',
    '5. volume': '491719'
  },
  '2014-11-28': {
    '1. open': '18.3850',
    '2. high': '21.5150',
    '3. low': '18.3150',
    '4. close': '21.2700',
    '5. volume': '291053'
  },
  '2014-10-31': {
    '1. open': '18.9600',
    '2. high': '19.4900',
    '3. low': '17.5800',
    '4. close': '18.3000',
    '5. volume': '484643'
  },
  '2014-09-30': {
    '1. open': '19.0000',
    '2. high': '19.7050',
    '3. low': '18.6650',
    '4. close': '18.9600',
    '5. volume': '244783'
  },
  '2014-08-29': {
    '1. open': '18.4500',
    '2. high': '20.0000',
    '3. low': '18.0850',
    '4. close': '19.0650',
    '5. volume': '270231'
  },
  '2014-07-31': {
    '1. open': '21.0350',
    '2. high': '21.0350',
    '3. low': '18.5950',
    '4. close': '18.6000',
    '5. volume': '282078'
  },
  '2014-06-30': {
    '1. open': '19.5350',
    '2. high': '21.3600',
    '3. low': '19.1350',
    '4. close': '20.8100',
    '5. volume': '744403'
  },
  '2014-05-30': {
    '1. open': '19.4050',
    '2. high': '19.9450',
    '3. low': '16.8600',
    '4. close': '19.7900',
    '5. volume': '947224'
  },
  '2014-04-30': {
    '1. open': '18.2000',
    '2. high': '20.0300',
    '3. low': '18.2000',
    '4. close': '19.2100',
    '5. volume': '408343'
  },
  '2014-03-31': {
    '1. open': '19.0000',
    '2. high': '19.3900',
    '3. low': '17.8200',
    '4. close': '18.2000',
    '5. volume': '726958'
  },
  '2014-02-28': {
    '1. open': '19.6750',
    '2. high': '20.2150',
    '3. low': '18.5100',
    '4. close': '19.0650',
    '5. volume': '637698'
  },
  '2014-01-31': {
    '1. open': '18.5900',
    '2. high': '21.3600',
    '3. low': '18.2050',
    '4. close': '19.7500',
    '5. volume': '668453'
  },
  '2013-12-30': {
    '1. open': '18.3000',
    '2. high': '20.1100',
    '3. low': '18.0400',
    '4. close': '18.5000',
    '5. volume': '557632'
  },
  '2013-11-29': {
    '1. open': '19.1850',
    '2. high': '19.3550',
    '3. low': '17.0200',
    '4. close': '18.3050',
    '5. volume': '459145'
  },
  '2013-10-31': {
    '1. open': '17.8000',
    '2. high': '19.7500',
    '3. low': '17.3000',
    '4. close': '19.1950',
    '5. volume': '677802'
  },
  '2013-09-30': {
    '1. open': '16.6050',
    '2. high': '19.2050',
    '3. low': '16.2500',
    '4. close': '18.0400',
    '5. volume': '905559'
  },
  '2013-08-30': {
    '1. open': '18.4500',
    '2. high': '18.4650',
    '3. low': '14.1600',
    '4. close': '16.2000',
    '5. volume': '1446894'
  },
  '2013-07-31': {
    '1. open': '18.2000',
    '2. high': '20.0000',
    '3. low': '17.6100',
    '4. close': '18.3800',
    '5. volume': '688417'
  },
  '2013-06-28': {
    '1. open': '18.0000',
    '2. high': '19.5050',
    '3. low': '17.8450',
    '4. close': '18.2650',
    '5. volume': '909445'
  },
  '2013-05-31': {
    '1. open': '17.1000',
    '2. high': '18.4000',
    '3. low': '16.9900',
    '4. close': '18.0000',
    '5. volume': '547393'
  },
  '2013-04-30': {
    '1. open': '17.4500',
    '2. high': '18.0000',
    '3. low': '16.1600',
    '4. close': '17.5100',
    '5. volume': '556771'
  },
  '2013-03-28': {
    '1. open': '17.1850',
    '2. high': '18.6000',
    '3. low': '16.4350',
    '4. close': '17.1850',
    '5. volume': '471546'
  },
  '2013-02-28': {
    '1. open': '16.4200',
    '2. high': '17.4100',
    '3. low': '15.9900',
    '4. close': '17.1100',
    '5. volume': '807731'
  },
  '2013-01-31': {
    '1. open': '14.7900',
    '2. high': '16.5950',
    '3. low': '14.0100',
    '4. close': '16.2050',
    '5. volume': '561054'
  },
  '2012-12-28': {
    '1. open': '13.8900',
    '2. high': '15.6150',
    '3. low': '13.7000',
    '4. close': '14.6450',
    '5. volume': '341132'
  },
  '2012-11-30': {
    '1. open': '14.0000',
    '2. high': '14.2200',
    '3. low': '12.5700',
    '4. close': '13.8500',
    '5. volume': '518747'
  },
  '2012-10-31': {
    '1. open': '14.3500',
    '2. high': '14.8000',
    '3. low': '13.6500',
    '4. close': '14.0000',
    '5. volume': '404936'
  },
  '2012-09-28': {
    '1. open': '13.6700',
    '2. high': '14.4950',
    '3. low': '13.0500',
    '4. close': '14.3100',
    '5. volume': '369893'
  },
  '2012-08-31': {
    '1. open': '11.2600',
    '2. high': '13.9500',
    '3. low': '11.2000',
    '4. close': '13.5000',
    '5. volume': '938170'
  },
  '2012-07-31': {
    '1. open': '11.0000',
    '2. high': '11.8000',
    '3. low': '10.7100',
    '4. close': '11.4100',
    '5. volume': '202511'
  },
  '2012-06-29': {
    '1. open': '12.0000',
    '2. high': '12.0000',
    '3. low': '10.5500',
    '4. close': '10.6500',
    '5. volume': '201304'
  },
  '2012-05-31': {
    '1. open': '11.5300',
    '2. high': '12.2500',
    '3. low': '11.1000',
    '4. close': '12.0000',
    '5. volume': '484255'
  },
  '2012-04-30': {
    '1. open': '10.8100',
    '2. high': '11.6300',
    '3. low': '10.6100',
    '4. close': '11.6300',
    '5. volume': '467765'
  },
  '2012-03-30': {
    '1. open': '10.5650',
    '2. high': '11.4500',
    '3. low': '10.3250',
    '4. close': '10.6000',
    '5. volume': '285576'
  },
  '2012-02-29': {
    '1. open': '8.2500',
    '2. high': '11.0300',
    '3. low': '8.2500',
    '4. close': '10.6400',
    '5. volume': '627461'
  },
  '2012-01-31': {
    '1. open': '8.6200',
    '2. high': '8.7380',
    '3. low': '8.1530',
    '4. close': '8.2850',
    '5. volume': '467133'
  },
  '2011-12-30': {
    '1. open': '8.1250',
    '2. high': '8.7000',
    '3. low': '8.0000',
    '4. close': '8.7000',
    '5. volume': '502016'
  },
  '2011-11-30': {
    '1. open': '9.3870',
    '2. high': '9.4490',
    '3. low': '7.8610',
    '4. close': '8.1500',
    '5. volume': '307788'
  },
  '2011-10-31': {
    '1. open': '9.2160',
    '2. high': '9.5600',
    '3. low': '8.1100',
    '4. close': '9.3000',
    '5. volume': '298987'
  },
  '2011-09-30': {
    '1. open': '8.7060',
    '2. high': '8.9800',
    '3. low': '7.4700',
    '4. close': '8.9000',
    '5. volume': '459711'
  },
  '2011-08-31': {
    '1. open': '9.8010',
    '2. high': '10.7000',
    '3. low': '7.6000',
    '4. close': '8.8600',
    '5. volume': '938844'
  },
  '2011-07-29': {
    '1. open': '10.5200',
    '2. high': '10.9100',
    '3. low': '9.8000',
    '4. close': '10.0500',
    '5. volume': '617571'
  },
  '2011-06-30': {
    '1. open': '11.3000',
    '2. high': '11.7950',
    '3. low': '10.2000',
    '4. close': '10.6000',
    '5. volume': '332101'
  },
  '2011-05-31': {
    '1. open': '11.4500',
    '2. high': '11.6600',
    '3. low': '10.1250',
    '4. close': '11.1500',
    '5. volume': '413046'
  },
  '2011-04-29': {
    '1. open': '11.3950',
    '2. high': '11.6600',
    '3. low': '10.5100',
    '4. close': '11.4250',
    '5. volume': '217083'
  },
  '2011-03-31': {
    '1. open': '11.5000',
    '2. high': '11.6500',
    '3. low': '10.5000',
    '4. close': '11.5000',
    '5. volume': '364578'
  },
  '2011-02-28': {
    '1. open': '11.9300',
    '2. high': '12.7000',
    '3. low': '10.7500',
    '4. close': '11.4000',
    '5. volume': '336006'
  },
  '2011-01-31': {
    '1. open': '10.7650',
    '2. high': '12.0000',
    '3. low': '10.6300',
    '4. close': '11.9300',
    '5. volume': '256421'
  },
  '2010-12-30': {
    '1. open': '9.9040',
    '2. high': '11.6300',
    '3. low': '9.6530',
    '4. close': '11.0650',
    '5. volume': '423418'
  },
  '2010-11-30': {
    '1. open': '9.6900',
    '2. high': '10.9400',
    '3. low': '9.3010',
    '4. close': '9.6200',
    '5. volume': '271685'
  },
  '2010-10-29': {
    '1. open': '9.2000',
    '2. high': '9.9000',
    '3. low': '9.2000',
    '4. close': '9.4620',
    '5. volume': '165080'
  },
  '2010-09-30': {
    '1. open': '8.4890',
    '2. high': '9.8000',
    '3. low': '8.3500',
    '4. close': '9.3330',
    '5. volume': '317179'
  },
  '2010-08-31': {
    '1. open': '8.3000',
    '2. high': '8.8000',
    '3. low': '7.9000',
    '4. close': '8.5000',
    '5. volume': '346767'
  },
  '2010-07-30': {
    '1. open': '8.2900',
    '2. high': '8.3500',
    '3. low': '7.6210',
    '4. close': '8.2300',
    '5. volume': '288040'
  },
  '2010-06-30': {
    '1. open': '8.2980',
    '2. high': '8.4800',
    '3. low': '8.1000',
    '4. close': '8.2700',
    '5. volume': '197606'
  },
  '2010-05-31': {
    '1. open': '8.2600',
    '2. high': '9.0000',
    '3. low': '7.8000',
    '4. close': '8.1100',
    '5. volume': '563580'
  },
  '2010-04-30': {
    '1. open': '8.5420',
    '2. high': '8.7000',
    '3. low': '8.2100',
    '4. close': '8.3600',
    '5. volume': '379580'
  },
  '2010-03-31': {
    '1. open': '8.8500',
    '2. high': '8.9000',
    '3. low': '8.1500',
    '4. close': '8.6630',
    '5. volume': '796536'
  },
  '2010-02-26': {
    '1. open': '7.9900',
    '2. high': '8.9200',
    '3. low': '7.5540',
    '4. close': '8.8000',
    '5. volume': '1049635'
  },
  '2010-01-29': {
    '1. open': '7.5900',
    '2. high': '8.2700',
    '3. low': '7.5100',
    '4. close': '8.0000',
    '5. volume': '452110'
  },
  '2009-12-30': {
    '1. open': '7.9600',
    '2. high': '8.1400',
    '3. low': '6.9800',
    '4. close': '7.4500',
    '5. volume': '642282'
  },
  '2009-11-30': {
    '1. open': '8.3700',
    '2. high': '9.2000',
    '3. low': '7.3800',
    '4. close': '7.8000',
    '5. volume': '764765'
  },
  '2009-10-30': {
    '1. open': '7.9200',
    '2. high': '9.3000',
    '3. low': '7.7600',
    '4. close': '8.3800',
    '5. volume': '1204033'
  },
  '2009-09-30': {
    '1. open': '7.1400',
    '2. high': '7.7900',
    '3. low': '5.9200',
    '4. close': '7.7200',
    '5. volume': '1191577'
  },
  '2009-08-31': {
    '1. open': '6.5000',
    '2. high': '7.4500',
    '3. low': '6.1700',
    '4. close': '7.1200',
    '5. volume': '702747'
  },
  '2009-07-31': {
    '1. open': '6.0500',
    '2. high': '6.8000',
    '3. low': '5.7500',
    '4. close': '6.8000',
    '5. volume': '1137165'
  },
  '2009-06-30': {
    '1. open': '4.1000',
    '2. high': '6.2000',
    '3. low': '3.9000',
    '4. close': '6.0100',
    '5. volume': '1870054'
  },
  '2009-05-29': {
    '1. open': '4.1400',
    '2. high': '4.7400',
    '3. low': '3.9200',
    '4. close': '4.0400',
    '5. volume': '1468206'
  },
  '2009-04-30': {
    '1. open': '4.5000',
    '2. high': '4.6000',
    '3. low': '3.7500',
    '4. close': '4.0800',
    '5. volume': '1029625'
  },
  '2009-03-31': {
    '1. open': '4.3000',
    '2. high': '4.8800',
    '3. low': '3.9000',
    '4. close': '4.4900',
    '5. volume': '866571'
  },
  '2009-02-27': {
    '1. open': '4.0000',
    '2. high': '5.0000',
    '3. low': '3.9700',
    '4. close': '4.2000',
    '5. volume': '676937'
  },
  '2009-01-30': {
    '1. open': '3.3000',
    '2. high': '4.6000',
    '3. low': '3.2000',
    '4. close': '3.9000',
    '5. volume': '259613'
  },
  '2008-12-30': {
    '1. open': '4.1300',
    '2. high': '4.1400',
    '3. low': '3.0100',
    '4. close': '3.0200',
    '5. volume': '480615'
  },
  '2008-11-28': {
    '1. open': '3.8900',
    '2. high': '4.6600',
    '3. low': '3.7000',
    '4. close': '4.1400',
    '5. volume': '571732'
  },
  '2008-10-31': {
    '1. open': '4.4700',
    '2. high': '4.6000',
    '3. low': '3.0000',
    '4. close': '3.5400',
    '5. volume': '1225607'
  },
  '2008-09-30': {
    '1. open': '4.6000',
    '2. high': '4.9900',
    '3. low': '4.0500',
    '4. close': '4.6000',
    '5. volume': '915214'
  },
  '2008-08-29': {
    '1. open': '5.7600',
    '2. high': '5.8200',
    '3. low': '4.3300',
    '4. close': '4.5000',
    '5. volume': '1162211'
  },
  '2008-07-31': {
    '1. open': '8.9000',
    '2. high': '9.0000',
    '3. low': '3.7800',
    '4. close': '5.7200',
    '5. volume': '4443597'
  },
  '2008-06-30': {
    '1. open': '9.7500',
    '2. high': '9.9400',
    '3. low': '8.7600',
    '4. close': '9.0000',
    '5. volume': '324705'
  },
  '2008-05-30': {
    '1. open': '9.8000',
    '2. high': '10.2600',
    '3. low': '9.2000',
    '4. close': '9.7000',
    '5. volume': '586389'
  },
  '2008-04-30': {
    '1. open': '8.6000',
    '2. high': '10.5900',
    '3. low': '8.5500',
    '4. close': '9.8000',
    '5. volume': '2366851'
  },
  '2008-03-31': {
    '1. open': '11.6300',
    '2. high': '12.2000',
    '3. low': '8.5000',
    '4. close': '8.5000',
    '5. volume': '833346'
  },
  '2008-02-29': {
    '1. open': '12.7000',
    '2. high': '12.7000',
    '3. low': '11.4900',
    '4. close': '11.8000',
    '5. volume': '267250'
  },
  '2008-01-31': {
    '1. open': '13.2200',
    '2. high': '13.2500',
    '3. low': '9.6100',
    '4. close': '12.6900',
    '5. volume': '454614'
  },
  '2007-12-28': {
    '1. open': '13.9100',
    '2. high': '14.0000',
    '3. low': '12.1800',
    '4. close': '13.4000',
    '5. volume': '250328'
  },
  '2007-11-30': {
    '1. open': '14.2500',
    '2. high': '15.0000',
    '3. low': '13.0000',
    '4. close': '13.7200',
    '5. volume': '465694'
  },
  '2007-10-31': {
    '1. open': '14.9600',
    '2. high': '15.2500',
    '3. low': '13.5000',
    '4. close': '14.3500',
    '5. volume': '740923'
  },
  '2007-09-28': {
    '1. open': '13.4000',
    '2. high': '15.2700',
    '3. low': '11.2800',
    '4. close': '14.7600',
    '5. volume': '636095'
  },
  '2007-08-31': {
    '1. open': '17.0500',
    '2. high': '18.0000',
    '3. low': '13.0000',
    '4. close': '13.3500',
    '5. volume': '808314'
  },
  '2007-07-31': {
    '1. open': '16.8700',
    '2. high': '19.0100',
    '3. low': '16.0100',
    '4. close': '17.3700',
    '5. volume': '483059'
  },
  '2007-06-29': {
    '1. open': '17.8700',
    '2. high': '18.5000',
    '3. low': '15.2800',
    '4. close': '16.7300',
    '5. volume': '854375'
  },
  '2007-05-31': {
    '1. open': '17.5000',
    '2. high': '19.7500',
    '3. low': '17.3000',
    '4. close': '18.2000',
    '5. volume': '3691558'
  },
  '2007-04-26': {
    '1. open': '16.1500',
    '2. high': '16.1500',
    '3. low': '16.1500',
    '4. close': '16.1500',
    '5. volume': '800'
  },
  '2003-06-16': {
    '1. open': '2.8800',
    '2. high': '2.8800',
    '3. low': '2.8800',
    '4. close': '2.8800',
    '5. volume': '0'
  },
  '2003-05-30': {
    '1. open': '2.0460',
    '2. high': '2.9200',
    '3. low': '2.0460',
    '4. close': '2.8004',
    '5. volume': '23800'
  },
  '2003-04-30': {
    '1. open': '1.1920',
    '2. high': '2.0000',
    '3. low': '1.1920',
    '4. close': '2.0000',
    '5. volume': '6250'
  },
  '2003-03-31': {
    '1. open': '1.1920',
    '2. high': '1.2440',
    '3. low': '1.1920',
    '4. close': '1.1920',
    '5. volume': '0'
  },
  '2003-02-25': {
    '1. open': '1.1680',
    '2. high': '1.1796',
    '3. low': '1.1680',
    '4. close': '1.1796',
    '5. volume': '7500'
  },
  '2003-01-20': {
    '1. open': '1.2000',
    '2. high': '1.2000',
    '3. low': '1.2000',
    '4. close': '1.2000',
    '5. volume': '0'
  },
  '2002-12-23': {
    '1. open': '1.1600',
    '2. high': '1.1600',
    '3. low': '1.1600',
    '4. close': '1.1600',
    '5. volume': '2500'
  },
  '2002-11-29': {
    '1. open': '1.1440',
    '2. high': '1.2800',
    '3. low': '1.1440',
    '4. close': '1.1440',
    '5. volume': '0'
  },
  '2002-10-31': {
    '1. open': '1.1520',
    '2. high': '1.1560',
    '3. low': '1.1440',
    '4. close': '1.1440',
    '5. volume': '2500'
  },
  '2002-09-30': {
    '1. open': '1.1600',
    '2. high': '1.2400',
    '3. low': '1.1196',
    '4. close': '1.1560',
    '5. volume': '2500'
  },
  '2002-08-30': {
    '1. open': '1.1800',
    '2. high': '1.3200',
    '3. low': '1.1800',
    '4. close': '1.2880',
    '5. volume': '10000'
  },
  '2002-07-15': {
    '1. open': '1.2240',
    '2. high': '1.2400',
    '3. low': '1.2240',
    '4. close': '1.2400',
    '5. volume': '25300'
  },
  '2002-06-28': {
    '1. open': '1.2200',
    '2. high': '1.2400',
    '3. low': '1.1800',
    '4. close': '1.2240',
    '5. volume': '19125'
  },
  '2002-05-31': {
    '1. open': '1.3000',
    '2. high': '1.3400',
    '3. low': '1.2200',
    '4. close': '1.2200',
    '5. volume': '10250'
  },
  '2002-03-28': {
    '1. open': '0.6464',
    '2. high': '1.2800',
    '3. low': '0.6464',
    '4. close': '0.6464',
    '5. volume': '0'
  },
  '2002-02-18': {
    '1. open': '0.8800',
    '2. high': '1.1200',
    '3. low': '0.8800',
    '4. close': '1.1200',
    '5. volume': '2750'
  },
  '2002-01-31': {
    '1. open': '0.8800',
    '2. high': '1.1200',
    '3. low': '0.8800',
    '4. close': '0.8800',
    '5. volume': '0'
  },
  '2001-08-22': {
    '1. open': '0.7400',
    '2. high': '0.7400',
    '3. low': '0.7400',
    '4. close': '0.7400',
    '5. volume': '0'
  },
  '2001-06-18': {
    '1. open': '0.8800',
    '2. high': '0.8800',
    '3. low': '0.8800',
    '4. close': '0.8800',
    '5. volume': '3750'
  },
  '2000-11-21': {
    '1. open': '0.8400',
    '2. high': '0.8400',
    '3. low': '0.8400',
    '4. close': '0.8400',
    '5. volume': '0'
  },
  '2000-10-31': {
    '1. open': '1.0400',
    '2. high': '1.0400',
    '3. low': '0.8400',
    '4. close': '0.8400',
    '5. volume': '0'
  },
  '2000-09-29': {
    '1. open': '1.0400',
    '2. high': '1.1200',
    '3. low': '1.0400',
    '4. close': '1.0400',
    '5. volume': '3025'
  },
  '2000-08-31': {
    '1. open': '1.2000',
    '2. high': '1.2000',
    '3. low': '0.8160',
    '4. close': '1.0400',
    '5. volume': '10500'
  },
  '2000-07-31': {
    '1. open': '0.8800',
    '2. high': '4.0000',
    '3. low': '0.8800',
    '4. close': '1.2000',
    '5. volume': '0'
  },
  '2000-06-30': {
    '1. open': '0.6212',
    '2. high': '0.8800',
    '3. low': '0.6212',
    '4. close': '0.7200',
    '5. volume': '0'
  },
  '2000-05-31': {
    '1. open': '0.6212',
    '2. high': '0.6212',
    '3. low': '0.6212',
    '4. close': '0.6212',
    '5. volume': '0'
  },
  '2000-04-28': {
    '1. open': '0.6212',
    '2. high': '0.6212',
    '3. low': '0.6212',
    '4. close': '0.6212',
    '5. volume': '0'
  },
  '2000-03-31': {
    '1. open': '0.6212',
    '2. high': '0.6212',
    '3. low': '0.6212',
    '4. close': '0.6212',
    '5. volume': '0'
  }
};

// tslint:disable:max-line-length
export const compugroupCompany: Company = {
  id: 1042,
  name: 'CompuGroup Medical SE',
  country: Country.Deutschland,
  city: 'Koblenz',
  url: 'http://www.cgm.com/',
  description: 'Die CompuGroup Medical SE (auch CGM) ist ein börsennotiertes Softwareunternehmen mit Sitz in Koblenz. Es produziert Anwendungssoftware zur Unterstützung ärztlicher und organisatorischer Tätigkeiten in Arztpraxen, Apotheken, medizinischen Laboratorien und Krankenhäusern.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/CompuGroup_Medical',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Logo_CompuGroup_Medical_AG.png',
  products: [],
  industries: [161111],
  currency: Currency.EUR,
  isin: 'DE0005437305',
  wkn: '543730',
  symbol: 'COP.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['eHealth', 'e-Health', 'Software', 'Kommunikationslösungen']
};
// tslint:enable:max-line-length

