import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.85, yield: 2.77}, {year: 2017, rate: 0.80}, {
    year: 2016,
    rate: 0.80
  }, {year: 2015, rate: 0.80, yield: 3.40}, {year: 2014, rate: 0.80, yield: 3.31}, {year: 2013, rate: 0.80, yield: 3.00}, {
    year: 2012,
    rate: 0.75,
    yield: 3.77
  }, {year: 2011, rate: 0.75, yield: 4.61}, {year: 2010, rate: 0.70, yield: 3.15}, {year: 2009, rate: 0.70, yield: 3.39}, {
    year: 2008,
    rate: 0.70,
    yield: 5.06
  }, {year: 2007, rate: 0.60, yield: 2.03}, {year: 2006, rate: 0.44, yield: 1.54}, {year: 2005, rate: 0.40, yield: 1.52}, {
    year: 2004,
    rate: 0.36,
    yield: 1.85
  }, {year: 2003, rate: 0.36, yield: 1.56}, {year: 2002, rate: 0.36, yield: 2.16}, {year: 2001, rate: 0.36, yield: 1.08}, {
    year: 2000,
    rate: 0.30,
    yield: 0.77
  }, {year: 1999, rate: 0.25, yield: 0.74}
];
const prices = {
  '2019-12-02': {
    '1. open': '42.2450',
    '2. high': '42.5500',
    '3. low': '41.8500',
    '4. close': '41.9900',
    '5. volume': '5528'
  },
  '2019-11-29': {
    '1. open': '39.3550',
    '2. high': '42.4000',
    '3. low': '39.3050',
    '4. close': '42.3150',
    '5. volume': '108242'
  },
  '2019-10-31': {
    '1. open': '42.8200',
    '2. high': '42.8200',
    '3. low': '37.5200',
    '4. close': '39.1150',
    '5. volume': '245763'
  },
  '2019-09-30': {
    '1. open': '42.9800',
    '2. high': '44.5000',
    '3. low': '41.3300',
    '4. close': '42.4150',
    '5. volume': '77193'
  },
  '2019-08-30': {
    '1. open': '42.5200',
    '2. high': '43.6600',
    '3. low': '40.5200',
    '4. close': '42.8350',
    '5. volume': '60320'
  },
  '2019-07-31': {
    '1. open': '38.6000',
    '2. high': '42.8600',
    '3. low': '38.6000',
    '4. close': '42.5100',
    '5. volume': '116111'
  },
  '2019-06-28': {
    '1. open': '35.3250',
    '2. high': '38.5750',
    '3. low': '35.1050',
    '4. close': '38.2000',
    '5. volume': '83222'
  },
  '2019-05-31': {
    '1. open': '37.8200',
    '2. high': '37.9500',
    '3. low': '35.1750',
    '4. close': '35.1750',
    '5. volume': '103745'
  },
  '2019-04-30': {
    '1. open': '36.4950',
    '2. high': '37.9200',
    '3. low': '34.7950',
    '4. close': '37.7850',
    '5. volume': '83009'
  },
  '2019-03-29': {
    '1. open': '35.2000',
    '2. high': '36.7700',
    '3. low': '34.8400',
    '4. close': '36.7700',
    '5. volume': '75684'
  },
  '2019-02-28': {
    '1. open': '34.5000',
    '2. high': '35.2200',
    '3. low': '33.4800',
    '4. close': '35.0050',
    '5. volume': '99948'
  },
  '2019-01-31': {
    '1. open': '30.3100',
    '2. high': '34.3350',
    '3. low': '29.1000',
    '4. close': '34.3350',
    '5. volume': '222054'
  },
  '2018-12-28': {
    '1. open': '33.9450',
    '2. high': '33.9450',
    '3. low': '30.0200',
    '4. close': '30.7150',
    '5. volume': '134291'
  },
  '2018-11-30': {
    '1. open': '33.2700',
    '2. high': '34.3300',
    '3. low': '31.7200',
    '4. close': '33.3850',
    '5. volume': '160854'
  },
  '2018-10-31': {
    '1. open': '39.5550',
    '2. high': '39.6850',
    '3. low': '31.0250',
    '4. close': '32.9900',
    '5. volume': '292069'
  },
  '2018-09-28': {
    '1. open': '38.4350',
    '2. high': '40.0100',
    '3. low': '37.1500',
    '4. close': '39.2900',
    '5. volume': '69059'
  },
  '2018-08-31': {
    '1. open': '37.6600',
    '2. high': '39.0000',
    '3. low': '36.8350',
    '4. close': '38.4650',
    '5. volume': '68639'
  },
  '2018-07-31': {
    '1. open': '36.1700',
    '2. high': '38.3950',
    '3. low': '34.9900',
    '4. close': '37.5700',
    '5. volume': '132458'
  },
  '2018-06-29': {
    '1. open': '35.5800',
    '2. high': '37.0100',
    '3. low': '35.3550',
    '4. close': '36.4325',
    '5. volume': '98710'
  },
  '2018-05-31': {
    '1. open': '35.2800',
    '2. high': '36.7000',
    '3. low': '34.8700',
    '4. close': '35.0650',
    '5. volume': '164451'
  },
  '2018-04-30': {
    '1. open': '30.9350',
    '2. high': '35.5000',
    '3. low': '30.1950',
    '4. close': '34.8200',
    '5. volume': '225593'
  },
  '2018-03-29': {
    '1. open': '31.4150',
    '2. high': '32.8450',
    '3. low': '30.0700',
    '4. close': '31.1850',
    '5. volume': '133306'
  },
  '2018-02-28': {
    '1. open': '33.1100',
    '2. high': '33.2600',
    '3. low': '29.2900',
    '4. close': '31.5050',
    '5. volume': '359381'
  },
  '2018-01-31': {
    '1. open': '32.3950',
    '2. high': '33.9200',
    '3. low': '31.2700',
    '4. close': '32.8650',
    '5. volume': '347151'
  },
  '2017-12-29': {
    '1. open': '32.3950',
    '2. high': '32.3950',
    '3. low': '32.3950',
    '4. close': '32.3950',
    '5. volume': '0'
  },
  '2017-11-30': {
    '1. open': '35.1850',
    '2. high': '35.8050',
    '3. low': '32.3850',
    '4. close': '32.3950',
    '5. volume': '268231'
  },
  '2017-10-31': {
    '1. open': '35.0000',
    '2. high': '36.1000',
    '3. low': '34.0500',
    '4. close': '34.5750',
    '5. volume': '173073'
  },
  '2017-09-29': {
    '1. open': '32.0500',
    '2. high': '35.3300',
    '3. low': '31.7650',
    '4. close': '34.5850',
    '5. volume': '196789'
  },
  '2017-08-31': {
    '1. open': '32.5100',
    '2. high': '32.7950',
    '3. low': '31.1650',
    '4. close': '31.9800',
    '5. volume': '138199'
  },
  '2017-07-31': {
    '1. open': '31.4400',
    '2. high': '33.0000',
    '3. low': '30.7850',
    '4. close': '32.3900',
    '5. volume': '176551'
  },
  '2017-06-30': {
    '1. open': '31.7600',
    '2. high': '34.2950',
    '3. low': '31.1550',
    '4. close': '31.1700',
    '5. volume': '218827'
  },
  '2017-05-31': {
    '1. open': '31.6500',
    '2. high': '33.2500',
    '3. low': '31.2650',
    '4. close': '31.5000',
    '5. volume': '166616'
  },
  '2017-04-28': {
    '1. open': '30.2900',
    '2. high': '31.9950',
    '3. low': '29.5750',
    '4. close': '31.8200',
    '5. volume': '167127'
  },
  '2017-03-31': {
    '1. open': '28.7700',
    '2. high': '30.0750',
    '3. low': '28.4500',
    '4. close': '30.0750',
    '5. volume': '199297'
  },
  '2017-02-28': {
    '1. open': '27.4700',
    '2. high': '28.5000',
    '3. low': '26.9300',
    '4. close': '28.5000',
    '5. volume': '156495'
  },
  '2017-01-31': {
    '1. open': '28.9600',
    '2. high': '29.3650',
    '3. low': '26.6800',
    '4. close': '27.1800',
    '5. volume': '238844'
  },
  '2016-12-30': {
    '1. open': '26.9900',
    '2. high': '29.0800',
    '3. low': '26.4050',
    '4. close': '28.8300',
    '5. volume': '213419'
  },
  '2016-11-30': {
    '1. open': '27.6250',
    '2. high': '28.0150',
    '3. low': '26.3100',
    '4. close': '27.1600',
    '5. volume': '176011'
  },
  '2016-10-31': {
    '1. open': '26.2400',
    '2. high': '27.7400',
    '3. low': '25.7200',
    '4. close': '27.4450',
    '5. volume': '295094'
  },
  '2016-09-30': {
    '1. open': '26.1100',
    '2. high': '26.7700',
    '3. low': '25.0850',
    '4. close': '26.3800',
    '5. volume': '284523'
  },
  '2016-08-31': {
    '1. open': '24.0300',
    '2. high': '26.2100',
    '3. low': '23.2500',
    '4. close': '26.1550',
    '5. volume': '235426'
  },
  '2016-07-29': {
    '1. open': '22.4500',
    '2. high': '24.5250',
    '3. low': '21.3300',
    '4. close': '23.8700',
    '5. volume': '224281'
  },
  '2016-06-30': {
    '1. open': '24.2250',
    '2. high': '24.3000',
    '3. low': '20.9150',
    '4. close': '22.2750',
    '5. volume': '366806'
  },
  '2016-05-31': {
    '1. open': '24.0600',
    '2. high': '24.3450',
    '3. low': '22.5550',
    '4. close': '24.2550',
    '5. volume': '141952'
  },
  '2016-04-29': {
    '1. open': '24.6700',
    '2. high': '25.3500',
    '3. low': '23.5400',
    '4. close': '24.0300',
    '5. volume': '208540'
  },
  '2016-03-31': {
    '1. open': '23.5800',
    '2. high': '25.5450',
    '3. low': '23.5100',
    '4. close': '25.1100',
    '5. volume': '175832'
  },
  '2016-02-29': {
    '1. open': '24.6150',
    '2. high': '24.6150',
    '3. low': '20.8500',
    '4. close': '23.2850',
    '5. volume': '201030'
  },
  '2016-01-29': {
    '1. open': '22.9000',
    '2. high': '24.4950',
    '3. low': '22.0000',
    '4. close': '24.4450',
    '5. volume': '337072'
  },
  '2015-12-30': {
    '1. open': '25.9350',
    '2. high': '26.0100',
    '3. low': '22.9800',
    '4. close': '24.0600',
    '5. volume': '288394'
  },
  '2015-11-30': {
    '1. open': '24.4950',
    '2. high': '26.0450',
    '3. low': '24.0550',
    '4. close': '25.9200',
    '5. volume': '304239'
  },
  '2015-10-30': {
    '1. open': '21.3650',
    '2. high': '24.5800',
    '3. low': '20.9250',
    '4. close': '24.5800',
    '5. volume': '388861'
  },
  '2015-09-30': {
    '1. open': '22.4100',
    '2. high': '23.5550',
    '3. low': '20.5000',
    '4. close': '21.1250',
    '5. volume': '320003'
  },
  '2015-08-31': {
    '1. open': '25.3700',
    '2. high': '25.8300',
    '3. low': '21.1550',
    '4. close': '22.8050',
    '5. volume': '388398'
  },
  '2015-07-31': {
    '1. open': '23.0800',
    '2. high': '25.3800',
    '3. low': '22.3000',
    '4. close': '25.2900',
    '5. volume': '350970'
  },
  '2015-06-30': {
    '1. open': '24.9400',
    '2. high': '25.1300',
    '3. low': '22.6750',
    '4. close': '22.8600',
    '5. volume': '428872'
  },
  '2015-05-29': {
    '1. open': '25.3950',
    '2. high': '25.6400',
    '3. low': '24.0800',
    '4. close': '24.7200',
    '5. volume': '343093'
  },
  '2015-04-30': {
    '1. open': '26.5100',
    '2. high': '27.9900',
    '3. low': '25.5450',
    '4. close': '25.5450',
    '5. volume': '452849'
  },
  '2015-03-31': {
    '1. open': '26.7150',
    '2. high': '27.6300',
    '3. low': '25.6150',
    '4. close': '26.4450',
    '5. volume': '243474'
  },
  '2015-02-27': {
    '1. open': '24.3650',
    '2. high': '26.7600',
    '3. low': '24.2500',
    '4. close': '26.6650',
    '5. volume': '251767'
  },
  '2015-01-30': {
    '1. open': '24.3350',
    '2. high': '26.9300',
    '3. low': '23.0000',
    '4. close': '24.5950',
    '5. volume': '532047'
  },
  '2014-12-30': {
    '1. open': '24.1550',
    '2. high': '24.4000',
    '3. low': '22.1800',
    '4. close': '24.1900',
    '5. volume': '258014'
  },
  '2014-11-28': {
    '1. open': '22.2500',
    '2. high': '24.3550',
    '3. low': '22.0000',
    '4. close': '24.3550',
    '5. volume': '167513'
  },
  '2014-10-31': {
    '1. open': '25.4000',
    '2. high': '25.4000',
    '3. low': '20.7400',
    '4. close': '22.3600',
    '5. volume': '326544'
  },
  '2014-09-30': {
    '1. open': '23.1600',
    '2. high': '25.3000',
    '3. low': '23.1000',
    '4. close': '25.3000',
    '5. volume': '241271'
  },
  '2014-08-29': {
    '1. open': '23.1100',
    '2. high': '23.5300',
    '3. low': '21.9200',
    '4. close': '23.2450',
    '5. volume': '161410'
  },
  '2014-07-31': {
    '1. open': '23.3000',
    '2. high': '23.9650',
    '3. low': '22.8350',
    '4. close': '23.1850',
    '5. volume': '250759'
  },
  '2014-06-30': {
    '1. open': '23.2650',
    '2. high': '24.2100',
    '3. low': '22.0400',
    '4. close': '23.2500',
    '5. volume': '180287'
  },
  '2014-05-30': {
    '1. open': '23.1500',
    '2. high': '23.7400',
    '3. low': '22.1750',
    '4. close': '23.1600',
    '5. volume': '273437'
  },
  '2014-04-30': {
    '1. open': '25.6100',
    '2. high': '25.9950',
    '3. low': '22.6350',
    '4. close': '22.9750',
    '5. volume': '311113'
  },
  '2014-03-31': {
    '1. open': '24.9000',
    '2. high': '25.9700',
    '3. low': '23.6500',
    '4. close': '25.4100',
    '5. volume': '330806'
  },
  '2014-02-28': {
    '1. open': '25.7600',
    '2. high': '26.5150',
    '3. low': '25.0500',
    '4. close': '25.2750',
    '5. volume': '209356'
  },
  '2014-01-31': {
    '1. open': '26.8350',
    '2. high': '28.3000',
    '3. low': '25.0600',
    '4. close': '26.0000',
    '5. volume': '359920'
  },
  '2013-12-30': {
    '1. open': '26.4450',
    '2. high': '26.8350',
    '3. low': '24.5250',
    '4. close': '26.5800',
    '5. volume': '340995'
  },
  '2013-11-29': {
    '1. open': '26.0900',
    '2. high': '26.6950',
    '3. low': '25.5050',
    '4. close': '26.2200',
    '5. volume': '235324'
  },
  '2013-10-31': {
    '1. open': '24.0000',
    '2. high': '26.2000',
    '3. low': '23.1750',
    '4. close': '25.8650',
    '5. volume': '360389'
  },
  '2013-09-30': {
    '1. open': '23.6850',
    '2. high': '25.4500',
    '3. low': '23.6100',
    '4. close': '23.9000',
    '5. volume': '304163'
  },
  '2013-08-30': {
    '1. open': '24.2400',
    '2. high': '24.6900',
    '3. low': '22.6950',
    '4. close': '23.4800',
    '5. volume': '243162'
  },
  '2013-07-31': {
    '1. open': '21.1800',
    '2. high': '24.5500',
    '3. low': '20.7000',
    '4. close': '23.9150',
    '5. volume': '351492'
  },
  '2013-06-28': {
    '1. open': '21.8400',
    '2. high': '22.1550',
    '3. low': '20.2850',
    '4. close': '20.9700',
    '5. volume': '344804'
  },
  '2013-05-31': {
    '1. open': '21.0450',
    '2. high': '23.0400',
    '3. low': '20.3600',
    '4. close': '21.9950',
    '5. volume': '436355'
  },
  '2013-04-30': {
    '1. open': '22.9550',
    '2. high': '23.5600',
    '3. low': '19.9950',
    '4. close': '21.0600',
    '5. volume': '605397'
  },
  '2013-03-28': {
    '1. open': '21.6550',
    '2. high': '24.1500',
    '3. low': '21.4100',
    '4. close': '23.0950',
    '5. volume': '378279'
  },
  '2013-02-28': {
    '1. open': '22.9650',
    '2. high': '23.4150',
    '3. low': '21.0350',
    '4. close': '21.6400',
    '5. volume': '352805'
  },
  '2013-01-31': {
    '1. open': '20.1950',
    '2. high': '23.1300',
    '3. low': '20.1000',
    '4. close': '23.0150',
    '5. volume': '327654'
  },
  '2012-12-28': {
    '1. open': '19.8900',
    '2. high': '20.4250',
    '3. low': '19.8450',
    '4. close': '19.9300',
    '5. volume': '201389'
  },
  '2012-11-30': {
    '1. open': '19.3600',
    '2. high': '20.2850',
    '3. low': '19.3600',
    '4. close': '19.9050',
    '5. volume': '202386'
  },
  '2012-10-31': {
    '1. open': '18.1050',
    '2. high': '20.2000',
    '3. low': '18.1050',
    '4. close': '19.3550',
    '5. volume': '183943'
  },
  '2012-09-28': {
    '1. open': '18.1650',
    '2. high': '19.5150',
    '3. low': '18.1400',
    '4. close': '18.2300',
    '5. volume': '326611'
  },
  '2012-08-31': {
    '1. open': '17.9950',
    '2. high': '19.0000',
    '3. low': '17.8700',
    '4. close': '18.3000',
    '5. volume': '286800'
  },
  '2012-07-31': {
    '1. open': '15.5000',
    '2. high': '18.0000',
    '3. low': '15.4150',
    '4. close': '18.0000',
    '5. volume': '212054'
  },
  '2012-06-29': {
    '1. open': '14.3350',
    '2. high': '15.5850',
    '3. low': '13.8000',
    '4. close': '15.5350',
    '5. volume': '190733'
  },
  '2012-05-31': {
    '1. open': '14.4700',
    '2. high': '15.2900',
    '3. low': '13.7500',
    '4. close': '14.2400',
    '5. volume': '196083'
  },
  '2012-04-30': {
    '1. open': '15.1900',
    '2. high': '15.4200',
    '3. low': '13.7400',
    '4. close': '14.9850',
    '5. volume': '255333'
  },
  '2012-03-30': {
    '1. open': '15.6450',
    '2. high': '16.2500',
    '3. low': '14.8900',
    '4. close': '15.2150',
    '5. volume': '343299'
  },
  '2012-02-29': {
    '1. open': '15.5150',
    '2. high': '16.4800',
    '3. low': '15.3850',
    '4. close': '15.7600',
    '5. volume': '424912'
  },
  '2012-01-31': {
    '1. open': '16.2950',
    '2. high': '16.6200',
    '3. low': '14.3750',
    '4. close': '15.4300',
    '5. volume': '374445'
  },
  '2011-12-30': {
    '1. open': '14.9350',
    '2. high': '16.2250',
    '3. low': '14.5650',
    '4. close': '16.2250',
    '5. volume': '120592'
  },
  '2011-11-30': {
    '1. open': '14.7350',
    '2. high': '15.5100',
    '3. low': '13.2200',
    '4. close': '15.1400',
    '5. volume': '142802'
  },
  '2011-10-31': {
    '1. open': '13.0750',
    '2. high': '15.8900',
    '3. low': '12.5950',
    '4. close': '15.1900',
    '5. volume': '206045'
  },
  '2011-09-30': {
    '1. open': '14.7500',
    '2. high': '14.7500',
    '3. low': '12.0100',
    '4. close': '13.5850',
    '5. volume': '229809'
  },
  '2011-08-31': {
    '1. open': '17.4800',
    '2. high': '17.5850',
    '3. low': '12.8750',
    '4. close': '14.6900',
    '5. volume': '540696'
  },
  '2011-07-29': {
    '1. open': '17.7000',
    '2. high': '18.0100',
    '3. low': '16.6650',
    '4. close': '17.4250',
    '5. volume': '253814'
  },
  '2011-06-30': {
    '1. open': '19.2000',
    '2. high': '19.2350',
    '3. low': '15.5650',
    '4. close': '17.6350',
    '5. volume': '767111'
  },
  '2011-05-31': {
    '1. open': '20.0900',
    '2. high': '20.7100',
    '3. low': '18.8750',
    '4. close': '19.2650',
    '5. volume': '293533'
  },
  '2011-04-29': {
    '1. open': '22.7850',
    '2. high': '23.0850',
    '3. low': '19.9100',
    '4. close': '20.0500',
    '5. volume': '232044'
  },
  '2011-03-31': {
    '1. open': '23.8800',
    '2. high': '24.0600',
    '3. low': '21.4700',
    '4. close': '22.5900',
    '5. volume': '317040'
  },
  '2011-02-28': {
    '1. open': '22.9650',
    '2. high': '23.8550',
    '3. low': '22.1100',
    '4. close': '23.7000',
    '5. volume': '228849'
  },
  '2011-01-31': {
    '1. open': '23.1650',
    '2. high': '25.3550',
    '3. low': '22.7000',
    '4. close': '22.8000',
    '5. volume': '355966'
  },
  '2010-12-30': {
    '1. open': '20.9800',
    '2. high': '23.1800',
    '3. low': '20.9800',
    '4. close': '22.9200',
    '5. volume': '195988'
  },
  '2010-11-30': {
    '1. open': '21.8450',
    '2. high': '23.2650',
    '3. low': '20.6000',
    '4. close': '20.7850',
    '5. volume': '287489'
  },
  '2010-10-29': {
    '1. open': '22.9300',
    '2. high': '24.6500',
    '3. low': '21.7400',
    '4. close': '21.8050',
    '5. volume': '293118'
  },
  '2010-09-30': {
    '1. open': '22.1700',
    '2. high': '24.3700',
    '3. low': '22.1700',
    '4. close': '23.3500',
    '5. volume': '209257'
  },
  '2010-08-31': {
    '1. open': '23.9600',
    '2. high': '24.4000',
    '3. low': '20.9850',
    '4. close': '22.1000',
    '5. volume': '170262'
  },
  '2010-07-30': {
    '1. open': '24.2100',
    '2. high': '26.3700',
    '3. low': '23.3000',
    '4. close': '23.9300',
    '5. volume': '147055'
  },
  '2010-06-30': {
    '1. open': '24.0800',
    '2. high': '26.8000',
    '3. low': '23.3850',
    '4. close': '24.3500',
    '5. volume': '143568'
  },
  '2010-05-31': {
    '1. open': '25.0650',
    '2. high': '26.0500',
    '3. low': '22.3150',
    '4. close': '24.4300',
    '5. volume': '319191'
  },
  '2010-04-30': {
    '1. open': '23.7200',
    '2. high': '27.0000',
    '3. low': '23.7200',
    '4. close': '25.2800',
    '5. volume': '336761'
  },
  '2010-03-31': {
    '1. open': '21.2429',
    '2. high': '24.5904',
    '3. low': '21.2429',
    '4. close': '23.6750',
    '5. volume': '388615'
  },
  '2010-02-26': {
    '1. open': '21.3694',
    '2. high': '21.9824',
    '3. low': '20.2260',
    '4. close': '20.6785',
    '5. volume': '239622'
  },
  '2010-01-29': {
    '1. open': '20.2892',
    '2. high': '22.2841',
    '3. low': '19.9000',
    '4. close': '21.3499',
    '5. volume': '244264'
  },
  '2009-12-30': {
    '1. open': '17.9149',
    '2. high': '20.4936',
    '3. low': '17.9149',
    '4. close': '20.2211',
    '5. volume': '381150'
  },
  '2009-11-30': {
    '1. open': '17.9440',
    '2. high': '18.2457',
    '3. low': '17.3602',
    '4. close': '18.0024',
    '5. volume': '55970'
  },
  '2009-01-19': {
    '1. open': '13.7792',
    '2. high': '14.7231',
    '3. low': '12.7477',
    '4. close': '13.0007',
    '5. volume': '128721'
  },
  '2008-12-30': {
    '1. open': '12.7477',
    '2. high': '13.8278',
    '3. low': '11.5313',
    '4. close': '13.5554',
    '5. volume': '564581'
  },
  '2008-11-28': {
    '1. open': '14.2754',
    '2. high': '15.6573',
    '3. low': '11.9595',
    '4. close': '12.3390',
    '5. volume': '599140'
  },
  '2008-10-31': {
    '1. open': '18.3430',
    '2. high': '19.2285',
    '3. low': '12.0178',
    '4. close': '14.0419',
    '5. volume': '658769'
  },
  '2008-09-30': {
    '1. open': '21.5154',
    '2. high': '22.4593',
    '3. low': '17.5159',
    '4. close': '18.3236',
    '5. volume': '276150'
  },
  '2008-08-29': {
    '1. open': '22.3328',
    '2. high': '22.6052',
    '3. low': '21.1358',
    '4. close': '21.7197',
    '5. volume': '56298'
  },
  '2008-07-28': {
    '1. open': '20.9217',
    '2. high': '21.9435',
    '3. low': '18.7809',
    '4. close': '20.5714',
    '5. volume': '347386'
  },
  '2008-06-30': {
    '1. open': '23.9481',
    '2. high': '24.2692',
    '3. low': '20.9217',
    '4. close': '20.9899',
    '5. volume': '285162'
  },
  '2008-05-30': {
    '1. open': '24.0357',
    '2. high': '24.8142',
    '3. low': '23.1210',
    '4. close': '24.0941',
    '5. volume': '459954'
  },
  '2008-04-30': {
    '1. open': '23.7924',
    '2. high': '24.7071',
    '3. low': '22.3814',
    '4. close': '23.5783',
    '5. volume': '432069'
  },
  '2008-03-31': {
    '1. open': '24.9310',
    '2. high': '25.6316',
    '3. low': '22.9750',
    '4. close': '23.5394',
    '5. volume': '347230'
  },
  '2008-02-29': {
    '1. open': '25.8262',
    '2. high': '26.5366',
    '3. low': '24.8920',
    '4. close': '25.2034',
    '5. volume': '417776'
  },
  '2008-01-31': {
    '1. open': '28.9012',
    '2. high': '29.0472',
    '3. low': '22.7415',
    '4. close': '25.4856',
    '5. volume': '1100199'
  }
};

// tslint:disable:max-line-length
export const philipsCompany: Company = {
  id: 1193,
  name: 'Koninklijke Philips N.V.',
  country: Country.Niederlande,
  city: 'Amsterdam',
  url: 'http://www.philips.de/',
  description: 'Koninklijke Philips (kurz Philips genannt) ist ein Hersteller von Gesundheitstechnologie und Haushaltsgeräten mit Sitz in Amsterdam. Einst tätig im Bereich der Unterhaltungselektronik, Halbleiter- und Lichttechnik, hat sich das Unternehmen inzwischen auf die Bereiche Personal Health mit Haushaltskleingeräten (beispielsweise Kaffeemaschinen, Wasserkochern und elektrischen Zahnbürsten) und Health Systems, dem professionellen medizintechnischen Bereich (insbesondere der Radiologie) konzentriert. Im Bereich der Unterhaltungselektronik (Audio, TV) besteht heute eine Lizenzvereinbarung zur Nutzung der Marke durch das chinesische Unternehmen TPV Technology.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Philips',
  logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
  products: [
    {
      id: 119310,
      name: 'Philips Fernseher',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 131113
    },
    {
      id: 119311,
      name: 'Philips Monitore',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 181311
    },
    {
      id: 119312,
      name: 'Philips Projektoren',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 181311
    },
    {
      id: 119313,
      name: 'Philips Set-Top-Boxen',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 131312
    },
    {
      id: 119314,
      name: 'Philips Kopfhörer',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 131312
    },
    {
      id: 119315,
      name: 'Philips Lautsprecher',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 131312
    },
    {
      id: 119316,
      name: 'Philips Telefone',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 131012
    },
    {
      id: 119317,
      name: 'Philips Lautsprecher',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 181311
    },
    {
      id: 119318,
      name: 'Philips Advent',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 1010
    },
    {
      id: 119319,
      name: 'Philips Rasierer',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 1010
    },
    {
      id: 119320,
      name: 'Philips Fön',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 1010
    },
    {
      id: 119321,
      name: 'Philips Senseo',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 111212
    },
    {
      id: 119322,
      name: 'Philips Staubsauger',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 111212
    },
    {
      id: 119323,
      name: 'Philips Bügel',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 111212
    },
    {
      id: 119324,
      name: 'Philips Hue',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 111212
    },
    {
      id: 119325,
      name: 'Philips Kaffeemaschine',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 111212
    },
    {
      id: 119326,
      name: 'Philips Sonicare',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 1010
    },
    {
      id: 119327,
      name: 'Philips Autolampen',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 121110
    },
    {
      id: 119328,
      name: 'Philips Motorradlampen',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 121110
    },
    {
      id: 119329,
      name: 'Philips Lumea',
      logo: 'https://www.philips.de/etc/philips/clientlibs/foundation-general/clientlibs-css-rb2014/images/generic/wordmark_2x.svg',
      segment: 1010
    }
  ],
  industries: [111212, 161210, 131012, 131113, 131312, 1724],
  securityType: SecurityType.AandelenAanToonder,
  currency: Currency.EUR,
  isin: 'NL0000009538',
  wkn: '940602',
  symbol: 'PHI1.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50],
  end_of_month_prices: prices,
  dividends,
  tags: ['Technologiekonzern', 'Elektronik', 'Healthcare', 'Haushaltsgeräte', 'Diagnose', 'Gesundheitsmanagement']
};
// tslint:enable:max-line-length

