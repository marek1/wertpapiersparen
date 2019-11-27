import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 2.00, yield: 4.67}, {year: 2017, rate: 1.30}, {year: 2016, rate: 1.10}, {
    year: 2015,
    rate: 0.70,
    yield: 1.21
  }, {year: 2014, rate: 0.40, yield: 1.62}, {year: 2013, rate: 0.10, yield: 0.78}, {year: 2012, rate: 0.00, yield: 0.00}, {
    year: 2011,
    rate: 0.00,
    yield: 0.00
  }, {year: 2010, rate: 0.00, yield: 0.00}
];
const prices = {
  '2019-11-27': {
    '1. open': '72.6000',
    '2. high': '75.7500',
    '3. low': '68.5000',
    '4. close': '71.8500',
    '5. volume': '1733133'
  },
  '2019-10-31': {
    '1. open': '69.5500',
    '2. high': '74.4000',
    '3. low': '69.3000',
    '4. close': '72.2000',
    '5. volume': '1261986'
  },
  '2019-09-30': {
    '1. open': '67.5500',
    '2. high': '71.6500',
    '3. low': '66.9000',
    '4. close': '69.8500',
    '5. volume': '1163890'
  },
  '2019-08-30': {
    '1. open': '71.2500',
    '2. high': '71.7000',
    '3. low': '64.4500',
    '4. close': '67.9500',
    '5. volume': '1971134'
  },
  '2019-07-31': {
    '1. open': '66.3000',
    '2. high': '72.6500',
    '3. low': '63.7000',
    '4. close': '71.4500',
    '5. volume': '1724933'
  },
  '2019-06-28': {
    '1. open': '59.2500',
    '2. high': '66.3500',
    '3. low': '59.1500',
    '4. close': '66.0500',
    '5. volume': '1177141'
  },
  '2019-05-31': {
    '1. open': '60.3000',
    '2. high': '63.8500',
    '3. low': '56.5500',
    '4. close': '59.9000',
    '5. volume': '1271242'
  },
  '2019-04-30': {
    '1. open': '52.4000',
    '2. high': '62.0000',
    '3. low': '51.5500',
    '4. close': '60.2500',
    '5. volume': '1296092'
  },
  '2019-03-29': {
    '1. open': '52.7500',
    '2. high': '53.0000',
    '3. low': '49.1600',
    '4. close': '52.2000',
    '5. volume': '939517'
  },
  '2019-02-28': {
    '1. open': '49.2200',
    '2. high': '52.8500',
    '3. low': '47.8000',
    '4. close': '52.1500',
    '5. volume': '1461676'
  },
  '2019-01-31': {
    '1. open': '42.0200',
    '2. high': '48.9800',
    '3. low': '40.3000',
    '4. close': '48.8800',
    '5. volume': '1521031'
  },
  '2018-12-28': {
    '1. open': '47.0000',
    '2. high': '47.7600',
    '3. low': '41.6000',
    '4. close': '42.1800',
    '5. volume': '1245140'
  },
  '2018-11-30': {
    '1. open': '46.3800',
    '2. high': '50.7500',
    '3. low': '44.9600',
    '4. close': '46.1400',
    '5. volume': '1715082'
  },
  '2018-10-31': {
    '1. open': '49.6400',
    '2. high': '50.5500',
    '3. low': '42.4600',
    '4. close': '46.1800',
    '5. volume': '1808353'
  },
  '2018-09-28': {
    '1. open': '51.3000',
    '2. high': '53.2000',
    '3. low': '48.0400',
    '4. close': '49.2400',
    '5. volume': '1648999'
  },
  '2018-08-31': {
    '1. open': '52.6500',
    '2. high': '56.3500',
    '3. low': '47.2800',
    '4. close': '51.1000',
    '5. volume': '2366617'
  },
  '2018-07-31': {
    '1. open': '51.5500',
    '2. high': '54.6500',
    '3. low': '50.9000',
    '4. close': '52.5000',
    '5. volume': '1351583'
  },
  '2018-06-29': {
    '1. open': '55.2500',
    '2. high': '56.4500',
    '3. low': '51.0000',
    '4. close': '51.8500',
    '5. volume': '1764091'
  },
  '2018-05-31': {
    '1. open': '60.8500',
    '2. high': '63.9000',
    '3. low': '54.8000',
    '4. close': '54.9500',
    '5. volume': '2158660'
  },
  '2018-04-30': {
    '1. open': '56.5000',
    '2. high': '61.6500',
    '3. low': '54.9000',
    '4. close': '60.7500',
    '5. volume': '1508037'
  },
  '2018-03-29': {
    '1. open': '58.4500',
    '2. high': '58.5500',
    '3. low': '54.0500',
    '4. close': '56.7500',
    '5. volume': '2048827'
  },
  '2018-02-28': {
    '1. open': '62.3500',
    '2. high': '66.4000',
    '3. low': '54.5000',
    '4. close': '58.5000',
    '5. volume': '3021633'
  },
  '2018-01-31': {
    '1. open': '61.2500',
    '2. high': '64.8000',
    '3. low': '60.1000',
    '4. close': '62.0000',
    '5. volume': '2095578'
  },
  '2017-12-29': {
    '1. open': '64.0100',
    '2. high': '65.6500',
    '3. low': '61.3800',
    '4. close': '61.6000',
    '5. volume': '2057173'
  },
  '2017-11-30': {
    '1. open': '54.4700',
    '2. high': '65.3300',
    '3. low': '54.4700',
    '4. close': '63.6200',
    '5. volume': '2964649'
  },
  '2017-10-31': {
    '1. open': '55.8000',
    '2. high': '58.9900',
    '3. low': '54.2100',
    '4. close': '54.9000',
    '5. volume': '1706828'
  },
  '2017-09-29': {
    '1. open': '53.5000',
    '2. high': '55.8700',
    '3. low': '52.1800',
    '4. close': '55.3400',
    '5. volume': '1550267'
  },
  '2017-08-31': {
    '1. open': '54.6000',
    '2. high': '58.9800',
    '3. low': '50.5600',
    '4. close': '53.5200',
    '5. volume': '3335524'
  },
  '2017-07-31': {
    '1. open': '52.7000',
    '2. high': '54.8800',
    '3. low': '51.2100',
    '4. close': '54.5100',
    '5. volume': '1722998'
  },
  '2017-06-30': {
    '1. open': '57.5100',
    '2. high': '58.5900',
    '3. low': '51.1800',
    '4. close': '52.4400',
    '5. volume': '2869567'
  },
  '2017-05-31': {
    '1. open': '53.5000',
    '2. high': '58.4700',
    '3. low': '52.5000',
    '4. close': '57.3100',
    '5. volume': '2914650'
  },
  '2017-04-28': {
    '1. open': '52.5400',
    '2. high': '54.1000',
    '3. low': '49.1850',
    '4. close': '53.0900',
    '5. volume': '2644791'
  },
  '2017-03-31': {
    '1. open': '46.9500',
    '2. high': '52.3700',
    '3. low': '44.8400',
    '4. close': '52.1800',
    '5. volume': '3867010'
  },
  '2017-02-28': {
    '1. open': '46.8500',
    '2. high': '49.6500',
    '3. low': '43.8000',
    '4. close': '47.2150',
    '5. volume': '3982699'
  },
  '2017-01-31': {
    '1. open': '41.7300',
    '2. high': '46.1800',
    '3. low': '40.2600',
    '4. close': '45.5000',
    '5. volume': '3854806'
  },
  '2016-12-30': {
    '1. open': '35.6500',
    '2. high': '42.4400',
    '3. low': '34.2500',
    '4. close': '41.7050',
    '5. volume': '4204202'
  },
  '2016-11-30': {
    '1. open': '41.5750',
    '2. high': '43.0000',
    '3. low': '34.7850',
    '4. close': '35.7800',
    '5. volume': '6708697'
  },
  '2016-10-31': {
    '1. open': '39.1100',
    '2. high': '41.6700',
    '3. low': '36.7750',
    '4. close': '41.5250',
    '5. volume': '3561669'
  },
  '2016-09-30': {
    '1. open': '41.5000',
    '2. high': '43.5000',
    '3. low': '37.4000',
    '4. close': '38.6800',
    '5. volume': '5023563'
  },
  '2016-08-31': {
    '1. open': '42.8100',
    '2. high': '45.6450',
    '3. low': '39.2950',
    '4. close': '41.5150',
    '5. volume': '4537579'
  },
  '2016-07-29': {
    '1. open': '41.7000',
    '2. high': '44.0350',
    '3. low': '38.7050',
    '4. close': '42.5100',
    '5. volume': '3236025'
  },
  '2016-06-30': {
    '1. open': '48.6850',
    '2. high': '49.1300',
    '3. low': '37.7000',
    '4. close': '41.2450',
    '5. volume': '4406080'
  },
  '2016-05-31': {
    '1. open': '43.4500',
    '2. high': '50.3800',
    '3. low': '41.6000',
    '4. close': '48.8800',
    '5. volume': '5418191'
  },
  '2016-04-29': {
    '1. open': '54.9000',
    '2. high': '57.8300',
    '3. low': '36.1000',
    '4. close': '43.0000',
    '5. volume': '11456384'
  },
  '2016-03-31': {
    '1. open': '53.5000',
    '2. high': '56.3500',
    '3. low': '49.5300',
    '4. close': '55.2500',
    '5. volume': '4154004'
  },
  '2016-02-29': {
    '1. open': '54.5000',
    '2. high': '55.5800',
    '3. low': '43.6950',
    '4. close': '53.1700',
    '5. volume': '5840776'
  },
  '2016-01-29': {
    '1. open': '57.3500',
    '2. high': '57.6500',
    '3. low': '46.6900',
    '4. close': '54.3300',
    '5. volume': '5542582'
  },
  '2015-12-30': {
    '1. open': '57.0000',
    '2. high': '59.7300',
    '3. low': '53.1400',
    '4. close': '57.9000',
    '5. volume': '5548379'
  },
  '2015-11-30': {
    '1. open': '57.2800',
    '2. high': '64.4900',
    '3. low': '54.6400',
    '4. close': '56.2400',
    '5. volume': '7563331'
  },
  '2015-10-30': {
    '1. open': '53.1500',
    '2. high': '58.8400',
    '3. low': '44.7650',
    '4. close': '57.3900',
    '5. volume': '3539243'
  },
  '2015-09-30': {
    '1. open': '51.6900',
    '2. high': '58.6300',
    '3. low': '48.1200',
    '4. close': '52.6300',
    '5. volume': '3702158'
  },
  '2015-08-31': {
    '1. open': '46.6000',
    '2. high': '55.7000',
    '3. low': '41.7100',
    '4. close': '52.5000',
    '5. volume': '4324183'
  },
  '2015-07-31': {
    '1. open': '41.9000',
    '2. high': '48.0200',
    '3. low': '40.8500',
    '4. close': '45.0950',
    '5. volume': '2296990'
  },
  '2015-06-30': {
    '1. open': '38.4150',
    '2. high': '45.0950',
    '3. low': '37.3000',
    '4. close': '41.9000',
    '5. volume': '2440480'
  },
  '2015-05-29': {
    '1. open': '34.7800',
    '2. high': '39.7100',
    '3. low': '30.3900',
    '4. close': '38.0800',
    '5. volume': '2499746'
  },
  '2015-04-30': {
    '1. open': '31.7650',
    '2. high': '35.7450',
    '3. low': '31.5500',
    '4. close': '33.1700',
    '5. volume': '2514315'
  },
  '2015-03-31': {
    '1. open': '28.1500',
    '2. high': '32.6500',
    '3. low': '26.6650',
    '4. close': '31.8850',
    '5. volume': '2650466'
  },
  '2015-02-27': {
    '1. open': '25.9150',
    '2. high': '28.8000',
    '3. low': '25.1450',
    '4. close': '28.0000',
    '5. volume': '2014525'
  },
  '2015-01-30': {
    '1. open': '24.6050',
    '2. high': '27.2300',
    '3. low': '23.5650',
    '4. close': '25.8500',
    '5. volume': '1859827'
  },
  '2014-12-30': {
    '1. open': '22.8350',
    '2. high': '25.2350',
    '3. low': '21.8500',
    '4. close': '24.7200',
    '5. volume': '1837803'
  },
  '2014-11-28': {
    '1. open': '18.2950',
    '2. high': '22.9800',
    '3. low': '18.0450',
    '4. close': '22.8200',
    '5. volume': '2534331'
  },
  '2014-10-31': {
    '1. open': '17.3550',
    '2. high': '18.5450',
    '3. low': '14.7800',
    '4. close': '18.1750',
    '5. volume': '1521891'
  },
  '2014-09-30': {
    '1. open': '17.0300',
    '2. high': '18.7900',
    '3. low': '16.7200',
    '4. close': '17.4500',
    '5. volume': '1698992'
  },
  '2014-08-29': {
    '1. open': '15.5900',
    '2. high': '17.9150',
    '3. low': '14.6500',
    '4. close': '17.0500',
    '5. volume': '1484124'
  },
  '2014-07-31': {
    '1. open': '16.2500',
    '2. high': '17.2500',
    '3. low': '15.6200',
    '4. close': '15.7700',
    '5. volume': '1442736'
  },
  '2014-06-30': {
    '1. open': '14.1100',
    '2. high': '16.4000',
    '3. low': '13.5550',
    '4. close': '16.1500',
    '5. volume': '1514398'
  },
  '2014-05-30': {
    '1. open': '12.4850',
    '2. high': '14.0950',
    '3. low': '12.0300',
    '4. close': '14.0000',
    '5. volume': '1187102'
  },
  '2014-04-30': {
    '1. open': '13.1450',
    '2. high': '13.1650',
    '3. low': '12.1350',
    '4. close': '12.4000',
    '5. volume': '632833'
  },
  '2014-03-31': {
    '1. open': '11.9950',
    '2. high': '13.6350',
    '3. low': '11.4200',
    '4. close': '13.0800',
    '5. volume': '1234731'
  },
  '2014-02-28': {
    '1. open': '13.0100',
    '2. high': '13.9350',
    '3. low': '12.5300',
    '4. close': '12.8500',
    '5. volume': '1046637'
  },
  '2014-01-31': {
    '1. open': '12.9000',
    '2. high': '15.1350',
    '3. low': '12.5300',
    '4. close': '13.0100',
    '5. volume': '1253537'
  },
  '2013-12-30': {
    '1. open': '13.9200',
    '2. high': '13.9200',
    '3. low': '12.2600',
    '4. close': '12.9000',
    '5. volume': '553198'
  },
  '2013-11-29': {
    '1. open': '12.7350',
    '2. high': '14.6650',
    '3. low': '12.6600',
    '4. close': '13.9000',
    '5. volume': '861868'
  },
  '2013-10-31': {
    '1. open': '11.9000',
    '2. high': '13.7200',
    '3. low': '11.8900',
    '4. close': '12.7500',
    '5. volume': '877982'
  },
  '2013-09-30': {
    '1. open': '11.1000',
    '2. high': '12.7100',
    '3. low': '10.4900',
    '4. close': '11.9000',
    '5. volume': '882269'
  },
  '2013-08-30': {
    '1. open': '10.0250',
    '2. high': '11.4000',
    '3. low': '9.4810',
    '4. close': '10.9900',
    '5. volume': '865619'
  },
  '2013-07-31': {
    '1. open': '7.6290',
    '2. high': '10.5050',
    '3. low': '7.5890',
    '4. close': '10.0000',
    '5. volume': '1135739'
  },
  '2013-06-28': {
    '1. open': '8.7200',
    '2. high': '8.7200',
    '3. low': '7.2690',
    '4. close': '7.5270',
    '5. volume': '1011422'
  },
  '2013-05-31': {
    '1. open': '7.3750',
    '2. high': '8.9280',
    '3. low': '7.3090',
    '4. close': '8.6230',
    '5. volume': '1653377'
  },
  '2013-04-30': {
    '1. open': '8.1400',
    '2. high': '8.5100',
    '3. low': '6.8890',
    '4. close': '7.3250',
    '5. volume': '849336'
  },
  '2013-03-28': {
    '1. open': '8.5460',
    '2. high': '9.1500',
    '3. low': '7.8370',
    '4. close': '8.0000',
    '5. volume': '810304'
  },
  '2013-02-28': {
    '1. open': '8.4250',
    '2. high': '8.6000',
    '3. low': '7.5980',
    '4. close': '8.4840',
    '5. volume': '694972'
  },
  '2013-01-31': {
    '1. open': '6.7100',
    '2. high': '9.2800',
    '3. low': '6.6650',
    '4. close': '8.3200',
    '5. volume': '926752'
  },
  '2012-12-28': {
    '1. open': '6.8530',
    '2. high': '7.3340',
    '3. low': '6.5000',
    '4. close': '6.6000',
    '5. volume': '471039'
  },
  '2012-11-30': {
    '1. open': '6.9260',
    '2. high': '7.7030',
    '3. low': '6.3750',
    '4. close': '6.7500',
    '5. volume': '708468'
  },
  '2012-10-31': {
    '1. open': '8.0250',
    '2. high': '8.1840',
    '3. low': '6.2640',
    '4. close': '6.8000',
    '5. volume': '1721506'
  },
  '2012-09-28': {
    '1. open': '7.8340',
    '2. high': '9.7700',
    '3. low': '7.6500',
    '4. close': '8.0200',
    '5. volume': '634731'
  },
  '2012-08-31': {
    '1. open': '7.7000',
    '2. high': '7.8140',
    '3. low': '6.4980',
    '4. close': '7.7000',
    '5. volume': '412053'
  },
  '2012-07-31': {
    '1. open': '7.7450',
    '2. high': '8.9200',
    '3. low': '7.6150',
    '4. close': '7.6310',
    '5. volume': '259761'
  },
  '2012-06-29': {
    '1. open': '8.0400',
    '2. high': '8.9500',
    '3. low': '7.3430',
    '4. close': '7.7600',
    '5. volume': '964473'
  },
  '2012-05-31': {
    '1. open': '12.9950',
    '2. high': '12.9950',
    '3. low': '7.1890',
    '4. close': '8.0000',
    '5. volume': '1147925'
  },
  '2012-04-30': {
    '1. open': '12.6200',
    '2. high': '13.1350',
    '3. low': '11.9950',
    '4. close': '12.9000',
    '5. volume': '657157'
  },
  '2012-03-30': {
    '1. open': '13.6800',
    '2. high': '14.8950',
    '3. low': '12.4250',
    '4. close': '12.6500',
    '5. volume': '900507'
  },
  '2012-02-29': {
    '1. open': '12.4700',
    '2. high': '14.3700',
    '3. low': '12.4700',
    '4. close': '13.8000',
    '5. volume': '953554'
  },
  '2012-01-31': {
    '1. open': '12.6000',
    '2. high': '13.0100',
    '3. low': '12.0450',
    '4. close': '12.4700',
    '5. volume': '942281'
  },
  '2011-12-30': {
    '1. open': '12.5800',
    '2. high': '13.4200',
    '3. low': '11.8700',
    '4. close': '12.6900',
    '5. volume': '740096'
  },
  '2011-11-30': {
    '1. open': '10.2600',
    '2. high': '12.6300',
    '3. low': '9.9740',
    '4. close': '12.6300',
    '5. volume': '973591'
  },
  '2011-10-31': {
    '1. open': '10.3400',
    '2. high': '11.2900',
    '3. low': '9.7910',
    '4. close': '10.6000',
    '5. volume': '780360'
  },
  '2011-09-30': {
    '1. open': '13.1100',
    '2. high': '13.5000',
    '3. low': '9.6000',
    '4. close': '10.7500',
    '5. volume': '1305463'
  },
  '2011-08-31': {
    '1. open': '16.8800',
    '2. high': '16.8800',
    '3. low': '10.3300',
    '4. close': '13.1500',
    '5. volume': '1967530'
  },
  '2011-07-29': {
    '1. open': '19.1900',
    '2. high': '20.8850',
    '3. low': '16.1450',
    '4. close': '16.9000',
    '5. volume': '828207'
  },
  '2011-06-30': {
    '1. open': '20.2100',
    '2. high': '21.0900',
    '3. low': '18.4650',
    '4. close': '19.1600',
    '5. volume': '659185'
  },
  '2011-05-31': {
    '1. open': '22.2300',
    '2. high': '23.4100',
    '3. low': '18.8150',
    '4. close': '19.9200',
    '5. volume': '1416345'
  },
  '2011-04-29': {
    '1. open': '22.9450',
    '2. high': '23.5950',
    '3. low': '21.0050',
    '4. close': '22.0000',
    '5. volume': '638479'
  },
  '2011-03-31': {
    '1. open': '24.7900',
    '2. high': '24.9300',
    '3. low': '22.4100',
    '4. close': '22.9500',
    '5. volume': '375562'
  },
  '2011-02-28': {
    '1. open': '26.3950',
    '2. high': '26.9950',
    '3. low': '23.1650',
    '4. close': '24.5700',
    '5. volume': '304012'
  },
  '2011-01-31': {
    '1. open': '26.7000',
    '2. high': '27.4550',
    '3. low': '24.1600',
    '4. close': '26.2300',
    '5. volume': '743636'
  },
  '2010-12-30': {
    '1. open': '24.6000',
    '2. high': '26.7400',
    '3. low': '24.2900',
    '4. close': '26.7400',
    '5. volume': '935829'
  },
  '2010-11-30': {
    '1. open': '23.6800',
    '2. high': '24.9650',
    '3. low': '21.5950',
    '4. close': '24.5000',
    '5. volume': '1067434'
  },
  '2010-10-29': {
    '1. open': '21.5600',
    '2. high': '23.9000',
    '3. low': '21.0100',
    '4. close': '23.6000',
    '5. volume': '394062'
  },
  '2010-09-30': {
    '1. open': '20.0000',
    '2. high': '22.5000',
    '3. low': '19.6200',
    '4. close': '21.7500',
    '5. volume': '1541521'
  },
  '2010-08-31': {
    '1. open': '19.7000',
    '2. high': '20.2000',
    '3. low': '18.8000',
    '4. close': '19.8500',
    '5. volume': '1177574'
  }
};

// tslint:disable:max-line-length
export const stroerCompany: Company = {
  id: 1158,
  name: 'Ströer SE & Co. KGaA',
  country: Country.Deutschland,
  city: 'Köln',
  url: 'https://www.stroeer.com/',
  description: 'Die Ströer SE & Co. KGaA ist ein börsennotiertes deutsches, international tätiges Unternehmen mit Sitz in Köln, das in der Vermarktung von Online- und Außenwerbung tätig ist und in Deutschland einer der größten Anbieter von Out-of-Home-Medien ist. Darüber hinaus betreibt Ströer die Internetportale giga.de, Spieletipps.de (übernommen von der ECONA AG), kino.de, desired.de und die Newsportale t-online.de (übernommen von der Deutschen Telekom) und watson.de.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Str%C3%B6er_Media',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Str%C3%B6er-Logo.svg/500px-Str%C3%B6er-Logo.svg.png',
  products: [
    {
      id: 115810,
      name: 'auto motor sport',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_automotorundsport.de.jpg'
    },
    {
      id: 115811,
      name: 'desired',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_desired.de.jpg'
    },
    {
      id: 115812,
      name: 'EA mobile',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_eamobilenetwork.jpg'
    },
    {
      id: 115813,
      name: 'familie.de',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_familie.de.jpg'
    },
    {
      id: 115814,
      name: 'freenet.de',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_freenet.de.jpg'
    },
    {
      id: 115815,
      name: 'games world',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_gamesworldnetzwerk.jpg'
    },
    {
      id: 115816,
      name: 'GIGA',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_giga.de.jpg'
    },
    {
      id: 115817,
      name: 'kicker',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_kicker.jpg'
    },
    {
      id: 115818,
      name: 'kino.de',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_kino.de.jpg'
    },
    {
      id: 115819,
      name: 'lecker.de',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_lecker.jpg'
    },
    {
      id: 115820,
      name: 'markt.de',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_markt.de.jpg'
    },
    {
      id: 115821,
      name: 'Mens Health',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_menshealth.de.jpg'
    },
    {
      id: 115822,
      name: 'Motorsport Magazin',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_motorsportmagazin.com.jpg'
    },
    {
      id: 115823,
      name: 't-online.de',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_tonline.de.jpg'
    },
    {
      id: 115824,
      name: 'Testberichte.de',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_testberichte.de.jpg'
    },
    {
      id: 115825,
      name: 'Watson.de',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_watson.de.jpg'
    },
    {
      id: 115826,
      name: 'Wunderweib',
      logo: 'https://www.stroeer.de/fileadmin/portfolio/logos/marken_logo_wunderweib.jpg'
    }
  ],
  industries: [2110, 2113],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE0007493991',
  wkn: '749399',
  symbol: 'SAX.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Außenwerbung', 'Onlinewerbunng', 'Plakatmedien', 'Wartehallen', 'Transportmitteln', 'Außenwerbeflächen', 'Webseiten']
};
// tslint:enable:max-line-length

