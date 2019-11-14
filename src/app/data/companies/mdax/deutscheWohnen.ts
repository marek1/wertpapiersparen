import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.87, yield: 2.16}, {year: 2017, rate: 0.80}, {year: 2016, rate: 0.74}, {
    year: 2015,
    rate: 0.54,
    yield: 2.11
  }, {year: 2014, rate: 0.44, yield: 2.25}, {year: 2013, rate: 0.34, yield: 2.42}, {year: 2012, rate: 0.21, yield: 1.50}, {
    year: 2011,
    rate: 0.23,
    yield: 2.24
  }, {year: 2010, rate: 0.20, yield: 1.90}, {year: 2009, rate: 0.00, yield: 0.00}, {year: 2008, rate: 0.00, yield: 0.00}, {
    year: 2007,
    rate: 0.00,
    yield: 0.00
  }, {year: 2006, rate: 1.76, yield: 3.63}
];

const prices = {
  '2019-11-14': {
    '1. open': '33.8900',
    '2. high': '35.2800',
    '3. low': '33.0400',
    '4. close': '35.1000',
    '5. volume': '8731912'
  },
  '2019-10-31': {
    '1. open': '33.6700',
    '2. high': '36.0400',
    '3. low': '32.8600',
    '4. close': '33.7200',
    '5. volume': '21958224'
  },
  '2019-09-30': {
    '1. open': '32.7500',
    '2. high': '33.9700',
    '3. low': '30.5500',
    '4. close': '33.4900',
    '5. volume': '22427852'
  },
  '2019-08-30': {
    '1. open': '33.2900',
    '2. high': '34.4300',
    '3. low': '28.5900',
    '4. close': '32.2600',
    '5. volume': '26003086'
  },
  '2019-07-31': {
    '1. open': '33.4100',
    '2. high': '34.5900',
    '3. low': '32.1200',
    '4. close': '33.2200',
    '5. volume': '19843970'
  },
  '2019-06-28': {
    '1. open': '42.1100',
    '2. high': '42.8000',
    '3. low': '31.9400',
    '4. close': '32.2700',
    '5. volume': '31656160'
  },
  '2019-05-31': {
    '1. open': '40.0000',
    '2. high': '43.2000',
    '3. low': '40.0000',
    '4. close': '42.2500',
    '5. volume': '15935755'
  },
  '2019-04-30': {
    '1. open': '43.3000',
    '2. high': '43.4500',
    '3. low': '38.4300',
    '4. close': '40.0700',
    '5. volume': '19358684'
  },
  '2019-03-29': {
    '1. open': '41.0700',
    '2. high': '44.8300',
    '3. low': '40.4500',
    '4. close': '43.2300',
    '5. volume': '15828212'
  },
  '2019-02-28': {
    '1. open': '42.4000',
    '2. high': '43.6200',
    '3. low': '40.8900',
    '4. close': '41.0000',
    '5. volume': '12724581'
  },
  '2019-01-31': {
    '1. open': '39.9600',
    '2. high': '44.1100',
    '3. low': '39.7000',
    '4. close': '43.5900',
    '5. volume': '12817201'
  },
  '2018-12-28': {
    '1. open': '42.9600',
    '2. high': '43.0200',
    '3. low': '39.7000',
    '4. close': '40.0000',
    '5. volume': '13066022'
  },
  '2018-11-30': {
    '1. open': '40.3700',
    '2. high': '43.1000',
    '3. low': '39.8400',
    '4. close': '42.3400',
    '5. volume': '12961129'
  },
  '2018-10-31': {
    '1. open': '41.2900',
    '2. high': '41.8000',
    '3. low': '38.5800',
    '4. close': '40.4400',
    '5. volume': '15172434'
  },
  '2018-09-28': {
    '1. open': '43.6100',
    '2. high': '43.8200',
    '3. low': '40.6600',
    '4. close': '41.3200',
    '5. volume': '14351510'
  },
  '2018-08-31': {
    '1. open': '41.7800',
    '2. high': '44.0400',
    '3. low': '40.9200',
    '4. close': '43.5400',
    '5. volume': '11729828'
  },
  '2018-07-31': {
    '1. open': '41.0200',
    '2. high': '42.5900',
    '3. low': '40.7200',
    '4. close': '41.6600',
    '5. volume': '13686795'
  },
  '2018-06-29': {
    '1. open': '40.2600',
    '2. high': '42.1800',
    '3. low': '39.6700',
    '4. close': '41.4000',
    '5. volume': '20409999'
  },
  '2018-05-31': {
    '1. open': '39.1800',
    '2. high': '40.5600',
    '3. low': '38.6200',
    '4. close': '40.1300',
    '5. volume': '13815881'
  },
  '2018-04-30': {
    '1. open': '37.7800',
    '2. high': '39.3100',
    '3. low': '37.2100',
    '4. close': '39.1400',
    '5. volume': '14162654'
  },
  '2018-03-29': {
    '1. open': '33.9500',
    '2. high': '38.0000',
    '3. low': '33.6400',
    '4. close': '37.9000',
    '5. volume': '16506733'
  },
  '2018-02-28': {
    '1. open': '36.5000',
    '2. high': '36.5600',
    '3. low': '32.1800',
    '4. close': '33.9500',
    '5. volume': '18307450'
  },
  '2018-01-31': {
    '1. open': '36.3200',
    '2. high': '38.1800',
    '3. low': '34.6000',
    '4. close': '36.4000',
    '5. volume': '19826714'
  },
  '2017-12-29': {
    '1. open': '37.0850',
    '2. high': '38.0900',
    '3. low': '36.1000',
    '4. close': '36.4600',
    '5. volume': '12598886'
  },
  '2017-11-30': {
    '1. open': '36.8950',
    '2. high': '37.6750',
    '3. low': '36.3800',
    '4. close': '37.1400',
    '5. volume': '15273736'
  },
  '2017-10-31': {
    '1. open': '36.0650',
    '2. high': '37.0150',
    '3. low': '34.9850',
    '4. close': '36.5650',
    '5. volume': '13794206'
  },
  '2017-09-29': {
    '1. open': '35.7500',
    '2. high': '36.9200',
    '3. low': '34.7050',
    '4. close': '35.9200',
    '5. volume': '17443107'
  },
  '2017-08-31': {
    '1. open': '33.5750',
    '2. high': '35.7500',
    '3. low': '33.5750',
    '4. close': '35.6800',
    '5. volume': '14557887'
  },
  '2017-07-31': {
    '1. open': '33.8000',
    '2. high': '34.4900',
    '3. low': '32.2550',
    '4. close': '33.4850',
    '5. volume': '12764860'
  },
  '2017-06-30': {
    '1. open': '34.9350',
    '2. high': '35.5850',
    '3. low': '33.0300',
    '4. close': '33.4900',
    '5. volume': '17316778'
  },
  '2017-05-31': {
    '1. open': '31.6000',
    '2. high': '35.2600',
    '3. low': '31.3550',
    '4. close': '34.9150',
    '5. volume': '20796889'
  },
  '2017-04-28': {
    '1. open': '30.9900',
    '2. high': '32.4650',
    '3. low': '30.6100',
    '4. close': '31.3900',
    '5. volume': '15731336'
  },
  '2017-03-31': {
    '1. open': '32.7350',
    '2. high': '32.7350',
    '3. low': '30.3300',
    '4. close': '30.8650',
    '5. volume': '21170546'
  },
  '2017-02-28': {
    '1. open': '30.2850',
    '2. high': '32.9100',
    '3. low': '29.8750',
    '4. close': '32.4250',
    '5. volume': '18710242'
  },
  '2017-01-31': {
    '1. open': '29.9750',
    '2. high': '30.9400',
    '3. low': '29.0250',
    '4. close': '30.1400',
    '5. volume': '17540126'
  },
  '2016-12-30': {
    '1. open': '28.9500',
    '2. high': '30.0750',
    '3. low': '27.6100',
    '4. close': '29.8400',
    '5. volume': '18225171'
  },
  '2016-11-30': {
    '1. open': '29.8200',
    '2. high': '30.4150',
    '3. low': '26.5400',
    '4. close': '29.0600',
    '5. volume': '27152380'
  },
  '2016-10-31': {
    '1. open': '32.4050',
    '2. high': '32.4550',
    '3. low': '28.6600',
    '4. close': '29.7200',
    '5. volume': '19713172'
  },
  '2016-09-30': {
    '1. open': '33.8200',
    '2. high': '34.8250',
    '3. low': '31.5450',
    '4. close': '32.3550',
    '5. volume': '19450765'
  },
  '2016-08-31': {
    '1. open': '33.6700',
    '2. high': '35.4000',
    '3. low': '33.0400',
    '4. close': '33.7000',
    '5. volume': '15588959'
  },
  '2016-07-29': {
    '1. open': '30.8150',
    '2. high': '33.4750',
    '3. low': '30.2250',
    '4. close': '33.4750',
    '5. volume': '15503202'
  },
  '2016-06-30': {
    '1. open': '28.8500',
    '2. high': '30.7650',
    '3. low': '27.7300',
    '4. close': '30.5250',
    '5. volume': '19749823'
  },
  '2016-05-31': {
    '1. open': '26.7900',
    '2. high': '28.9050',
    '3. low': '26.6450',
    '4. close': '28.8650',
    '5. volume': '13447468'
  },
  '2016-04-29': {
    '1. open': '27.1800',
    '2. high': '28.3000',
    '3. low': '25.9050',
    '4. close': '26.7450',
    '5. volume': '16622530'
  },
  '2016-03-31': {
    '1. open': '24.6500',
    '2. high': '27.5050',
    '3. low': '23.8600',
    '4. close': '27.3300',
    '5. volume': '21005770'
  },
  '2016-02-29': {
    '1. open': '24.3750',
    '2. high': '24.7400',
    '3. low': '21.6500',
    '4. close': '24.3750',
    '5. volume': '17979066'
  },
  '2016-01-29': {
    '1. open': '25.2600',
    '2. high': '25.5150',
    '3. low': '22.8000',
    '4. close': '24.2450',
    '5. volume': '24800894'
  },
  '2015-12-30': {
    '1. open': '26.3000',
    '2. high': '26.3000',
    '3. low': '23.9650',
    '4. close': '25.6150',
    '5. volume': '14456773'
  },
  '2015-11-30': {
    '1. open': '25.4950',
    '2. high': '26.1350',
    '3. low': '23.7000',
    '4. close': '26.0450',
    '5. volume': '18939611'
  },
  '2015-10-30': {
    '1. open': '24.1600',
    '2. high': '26.2850',
    '3. low': '23.0950',
    '4. close': '25.6550',
    '5. volume': '28992655'
  },
  '2015-09-30': {
    '1. open': '24.0000',
    '2. high': '24.4450',
    '3. low': '22.2850',
    '4. close': '23.8850',
    '5. volume': '26427903'
  },
  '2015-08-31': {
    '1. open': '22.4100',
    '2. high': '25.1500',
    '3. low': '21.7700',
    '4. close': '23.4400',
    '5. volume': '19944697'
  },
  '2015-07-31': {
    '1. open': '20.7200',
    '2. high': '23.9600',
    '3. low': '20.7050',
    '4. close': '22.5050',
    '5. volume': '18880258'
  },
  '2015-06-30': {
    '1. open': '22.2600',
    '2. high': '23.0000',
    '3. low': '20.5300',
    '4. close': '20.5550',
    '5. volume': '29600379'
  },
  '2015-05-29': {
    '1. open': '22.2260',
    '2. high': '23.9800',
    '3. low': '19.3631',
    '4. close': '22.1800',
    '5. volume': '27108608'
  },
  '2015-04-30': {
    '1. open': '21.6671',
    '2. high': '22.8622',
    '3. low': '21.0309',
    '4. close': '21.3126',
    '5. volume': '14957961'
  },
  '2015-03-31': {
    '1. open': '22.5305',
    '2. high': '22.9395',
    '3. low': '20.6719',
    '4. close': '21.6671',
    '5. volume': '18235395'
  },
  '2015-02-27': {
    '1. open': '20.9945',
    '2. high': '22.6077',
    '3. low': '20.3674',
    '4. close': '22.3896',
    '5. volume': '17210599'
  },
  '2015-01-30': {
    '1. open': '17.9090',
    '2. high': '21.6807',
    '3. low': '17.6045',
    '4. close': '20.9400',
    '5. volume': '18878203'
  },
  '2014-12-30': {
    '1. open': '17.6181',
    '2. high': '18.1362',
    '3. low': '16.5730',
    '4. close': '17.7954',
    '5. volume': '15734338'
  },
  '2014-11-28': {
    '1. open': '16.3412',
    '2. high': '17.6999',
    '3. low': '16.0867',
    '4. close': '17.5454',
    '5. volume': '10888095'
  },
  '2014-10-31': {
    '1. open': '15.3596',
    '2. high': '16.3412',
    '3. low': '14.1736',
    '4. close': '16.3412',
    '5. volume': '15738183'
  },
  '2014-09-30': {
    '1. open': '15.5959',
    '2. high': '16.4321',
    '3. low': '15.2142',
    '4. close': '15.3778',
    '5. volume': '14182369'
  },
  '2014-08-29': {
    '1. open': '14.8007',
    '2. high': '15.7504',
    '3. low': '14.4235',
    '4. close': '15.6050',
    '5. volume': '12629700'
  },
  '2014-07-31': {
    '1. open': '14.4008',
    '2. high': '14.9961',
    '3. low': '14.2008',
    '4. close': '14.7371',
    '5. volume': '9177989'
  },
  '2014-06-30': {
    '1. open': '14.7961',
    '2. high': '14.8961',
    '3. low': '14.1327',
    '4. close': '14.3145',
    '5. volume': '12236539'
  },
  '2014-05-30': {
    '1. open': '14.0372',
    '2. high': '14.8052',
    '3. low': '13.7737',
    '4. close': '14.7871',
    '5. volume': '9669633'
  },
  '2014-04-30': {
    '1. open': '14.1418',
    '2. high': '14.4644',
    '3. low': '13.7737',
    '4. close': '14.0372',
    '5. volume': '10993744'
  },
  '2014-03-31': {
    '1. open': '13.7964',
    '2. high': '14.4281',
    '3. low': '13.3238',
    '4. close': '14.1418',
    '5. volume': '16538764'
  },
  '2014-02-28': {
    '1. open': '12.6558',
    '2. high': '13.9873',
    '3. low': '12.4059',
    '4. close': '13.9509',
    '5. volume': '10031210'
  },
  '2014-01-31': {
    '1. open': '12.8148',
    '2. high': '13.4010',
    '3. low': '12.5331',
    '4. close': '12.6285',
    '5. volume': '14044075'
  },
  '2013-12-30': {
    '1. open': '13.4465',
    '2. high': '13.4647',
    '3. low': '12.5195',
    '4. close': '12.7558',
    '5. volume': '14569906'
  },
  '2013-11-29': {
    '1. open': '12.6512',
    '2. high': '13.7373',
    '3. low': '12.6240',
    '4. close': '13.4465',
    '5. volume': '39093934'
  },
  '2013-10-31': {
    '1. open': '12.0696',
    '2. high': '12.7421',
    '3. low': '11.5243',
    '4. close': '12.5967',
    '5. volume': '13759047'
  },
  '2013-09-30': {
    '1. open': '12.0469',
    '2. high': '12.5558',
    '3. low': '11.6470',
    '4. close': '12.0196',
    '5. volume': '8562661'
  },
  '2013-08-30': {
    '1. open': '12.1241',
    '2. high': '13.1511',
    '3. low': '11.9014',
    '4. close': '12.0605',
    '5. volume': '9934757'
  },
  '2013-07-31': {
    '1. open': '11.9287',
    '2. high': '12.1832',
    '3. low': '11.3152',
    '4. close': '12.0514',
    '5. volume': '7779564'
  },
  '2013-06-28': {
    '1. open': '13.1284',
    '2. high': '13.1329',
    '3. low': '11.2289',
    '4. close': '11.8560',
    '5. volume': '7805079'
  },
  '2013-05-31': {
    '1. open': '12.1695',
    '2. high': '14.3553',
    '3. low': '12.1196',
    '4. close': '13.1284',
    '5. volume': '9113649'
  },
  '2013-04-30': {
    '1. open': '12.8876',
    '2. high': '13.1420',
    '3. low': '11.6788',
    '4. close': '12.1695',
    '5. volume': '9982269'
  },
  '2013-03-28': {
    '1. open': '12.7967',
    '2. high': '13.7237',
    '3. low': '12.3059',
    '4. close': '12.8876',
    '5. volume': '8052891'
  },
  '2013-02-28': {
    '1. open': '13.1693',
    '2. high': '13.3602',
    '3. low': '12.3968',
    '4. close': '12.7876',
    '5. volume': '5649258'
  },
  '2013-01-31': {
    '1. open': '12.8421',
    '2. high': '13.2102',
    '3. low': '12.2241',
    '4. close': '12.8876',
    '5. volume': '9951778'
  },
  '2012-12-28': {
    '1. open': '13.5874',
    '2. high': '13.5919',
    '3. low': '12.5785',
    '4. close': '12.7240',
    '5. volume': '5404992'
  },
  '2012-11-30': {
    '1. open': '12.8603',
    '2. high': '13.5828',
    '3. low': '12.4876',
    '4. close': '13.5147',
    '5. volume': '5952452'
  },
  '2012-10-31': {
    '1. open': '12.4104',
    '2. high': '13.3920',
    '3. low': '11.9741',
    '4. close': '12.8512',
    '5. volume': '8549994'
  },
  '2012-09-28': {
    '1. open': '12.2968',
    '2. high': '12.7921',
    '3. low': '11.8787',
    '4. close': '12.4240',
    '5. volume': '7274283'
  },
  '2012-08-31': {
    '1. open': '12.3604',
    '2. high': '12.8148',
    '3. low': '12.1605',
    '4. close': '12.2241',
    '5. volume': '7293687'
  },
  '2012-07-31': {
    '1. open': '12.0878',
    '2. high': '13.1329',
    '3. low': '11.6969',
    '4. close': '12.3331',
    '5. volume': '9330170'
  },
  '2012-06-29': {
    '1. open': '11.3607',
    '2. high': '12.0650',
    '3. low': '10.1246',
    '4. close': '12.0650',
    '5. volume': '18970404'
  },
  '2012-05-31': {
    '1. open': '10.1837',
    '2. high': '11.4243',
    '3. low': '9.8883',
    '4. close': '11.3607',
    '5. volume': '7978084'
  },
  '2012-04-30': {
    '1. open': '10.0883',
    '2. high': '10.4064',
    '3. low': '9.5702',
    '4. close': '10.0928',
    '5. volume': '5714484'
  },
  '2012-03-30': {
    '1. open': '9.0376',
    '2. high': '10.3655',
    '3. low': '8.8622',
    '4. close': '10.0701',
    '5. volume': '5999823'
  },
  '2012-02-29': {
    '1. open': '9.2249',
    '2. high': '9.6429',
    '3. low': '8.7968',
    '4. close': '9.0640',
    '5. volume': '4917176'
  },
  '2012-01-31': {
    '1. open': '9.2385',
    '2. high': '9.5339',
    '3. low': '8.6187',
    '4. close': '9.2203',
    '5. volume': '4368420'
  },
  '2011-12-30': {
    '1. open': '9.3430',
    '2. high': '9.4384',
    '3. low': '8.3615',
    '4. close': '9.3294',
    '5. volume': '7144779'
  },
  '2011-11-30': {
    '1. open': '9.3659',
    '2. high': '10.1081',
    '3. low': '8.2678',
    '4. close': '9.4521',
    '5. volume': '9761162'
  },
  '2011-10-31': {
    '1. open': '8.6749',
    '2. high': '9.6707',
    '3. low': '8.1466',
    '4. close': '9.4366',
    '5. volume': '3548044'
  },
  '2011-09-30': {
    '1. open': '9.1715',
    '2. high': '9.4896',
    '3. low': '8.2614',
    '4. close': '8.8357',
    '5. volume': '4205296'
  },
  '2011-08-31': {
    '1. open': '10.1346',
    '2. high': '10.1479',
    '3. low': '7.6721',
    '4. close': '9.1141',
    '5. volume': '7537943'
  },
  '2011-07-29': {
    '1. open': '10.6117',
    '2. high': '10.7266',
    '3. low': '9.7547',
    '4. close': '9.9844',
    '5. volume': '3852160'
  },
  '2011-06-30': {
    '1. open': '9.6531',
    '2. high': '10.6868',
    '3. low': '9.5028',
    '4. close': '10.6029',
    '5. volume': '4395139'
  },
  '2011-05-31': {
    '1. open': '9.4543',
    '2. high': '9.9181',
    '3. low': '9.2069',
    '4. close': '9.6486',
    '5. volume': '4827075'
  },
  '2011-04-29': {
    '1. open': '9.0743',
    '2. high': '9.5426',
    '3. low': '8.6228',
    '4. close': '9.3968',
    '5. volume': '4734345'
  },
  '2011-03-31': {
    '1. open': '9.4763',
    '2. high': '9.8916',
    '3. low': '8.3330',
    '4. close': '8.9948',
    '5. volume': '6563446'
  },
  '2011-02-28': {
    '1. open': '8.8181',
    '2. high': '10.2230',
    '3. low': '8.7439',
    '4. close': '9.6177',
    '5. volume': '6714185'
  },
  '2011-01-31': {
    '1. open': '9.2775',
    '2. high': '9.6221',
    '3. low': '8.3604',
    '4. close': '8.8198',
    '5. volume': '7809196'
  },
  '2010-12-30': {
    '1. open': '8.2172',
    '2. high': '9.2775',
    '3. low': '8.0935',
    '4. close': '9.2775',
    '5. volume': '7224703'
  },
  '2010-11-30': {
    '1. open': '7.7755',
    '2. high': '8.3056',
    '3. low': '7.5987',
    '4. close': '8.2764',
    '5. volume': '3219564'
  },
  '2010-10-29': {
    '1. open': '7.7746',
    '2. high': '8.6590',
    '3. low': '7.3867',
    '4. close': '7.6800',
    '5. volume': '4970152'
  },
  '2010-09-30': {
    '1. open': '6.7726',
    '2. high': '7.8196',
    '3. low': '6.6127',
    '4. close': '7.7110',
    '5. volume': '3063965'
  },
  '2010-08-31': {
    '1. open': '6.6268',
    '2. high': '6.9626',
    '3. low': '6.0171',
    '4. close': '6.7832',
    '5. volume': '2057222'
  },
  '2010-07-30': {
    '1. open': '5.6902',
    '2. high': '6.6268',
    '3. low': '5.4782',
    '4. close': '6.6268',
    '5. volume': '3749541'
  },
  '2010-06-30': {
    '1. open': '5.8122',
    '2. high': '6.0437',
    '3. low': '5.3235',
    '4. close': '5.6522',
    '5. volume': '5116682'
  },
  '2010-05-31': {
    '1. open': '6.0083',
    '2. high': '6.1850',
    '3. low': '5.4163',
    '4. close': '5.7786',
    '5. volume': '3932788'
  },
  '2010-04-30': {
    '1. open': '6.5650',
    '2. high': '6.7399',
    '3. low': '5.9200',
    '4. close': '6.0083',
    '5. volume': '2603011'
  },
  '2010-03-31': {
    '1. open': '6.1400',
    '2. high': '6.9900',
    '3. low': '5.9297',
    '4. close': '6.6339',
    '5. volume': '2586991'
  },
  '2010-02-26': {
    '1. open': '6.4943',
    '2. high': '6.7470',
    '3. low': '5.5992',
    '4. close': '6.0967',
    '5. volume': '2816857'
  },
  '2010-01-29': {
    '1. open': '5.9995',
    '2. high': '6.7682',
    '3. low': '5.9641',
    '4. close': '6.5040',
    '5. volume': '3193135'
  },
  '2009-12-30': {
    '1. open': '5.8404',
    '2. high': '6.5384',
    '3. low': '5.8228',
    '4. close': '5.9200',
    '5. volume': '4209224'
  },
  '2009-11-30': {
    '1. open': '6.7505',
    '2. high': '6.9449',
    '3. low': '5.8228',
    '4. close': '5.8228',
    '5. volume': '3655797'
  },
  '2009-10-30': {
    '1. open': '5.9553',
    '2. high': '7.5546',
    '3. low': '5.9288',
    '4. close': '6.8124',
    '5. volume': '9663720'
  },
  '2009-09-30': {
    '1. open': '6.4208',
    '2. high': '7.5713',
    '3. low': '5.7782',
    '4. close': '5.9553',
    '5. volume': '7252053'
  },
  '2009-08-31': {
    '1. open': '5.5450',
    '2. high': '6.7162',
    '3. low': '5.3429',
    '4. close': '6.4053',
    '5. volume': '3076463'
  },
  '2009-07-31': {
    '1. open': '5.1823',
    '2. high': '5.5709',
    '3. low': '4.3272',
    '4. close': '5.5191',
    '5. volume': '2429684'
  },
  '2009-06-30': {
    '1. open': '5.8559',
    '2. high': '6.2705',
    '3. low': '4.8299',
    '4. close': '5.1512',
    '5. volume': '5915002'
  },
  '2009-05-29': {
    '1. open': '7.1256',
    '2. high': '7.4728',
    '3. low': '5.3740',
    '4. close': '5.8352',
    '5. volume': '4199949'
  },
  '2009-04-30': {
    '1. open': '5.8456',
    '2. high': '8.9135',
    '3. low': '5.6590',
    '4. close': '7.1463',
    '5. volume': '3513109'
  },
  '2009-03-31': {
    '1. open': '4.3945',
    '2. high': '6.3638',
    '3. low': '3.9852',
    '4. close': '5.9078',
    '5. volume': '3055422'
  },
  '2009-02-27': {
    '1. open': '5.9855',
    '2. high': '6.0270',
    '3. low': '3.7623',
    '4. close': '4.4205',
    '5. volume': '3017587'
  },
  '2009-01-30': {
    '1. open': '4.8351',
    '2. high': '6.1617',
    '3. low': '3.9385',
    '4. close': '5.9130',
    '5. volume': '4535781'
  },
  '2008-12-30': {
    '1. open': '2.3735',
    '2. high': '4.9180',
    '3. low': '2.3683',
    '4. close': '4.9180',
    '5. volume': '4899665'
  },
  '2008-11-28': {
    '1. open': '3.8867',
    '2. high': '3.8867',
    '3. low': '1.9278',
    '4. close': '2.3579',
    '5. volume': '2933813'
  },
  '2008-10-31': {
    '1. open': '4.6640',
    '2. high': '4.8351',
    '3. low': '2.4512',
    '4. close': '3.7312',
    '5. volume': '5465707'
  },
  '2008-09-30': {
    '1. open': '5.1978',
    '2. high': '7.1619',
    '3. low': '4.0681',
    '4. close': '4.5967',
    '5. volume': '5738442'
  },
  '2008-08-29': {
    '1. open': '3.9748',
    '2. high': '5.2859',
    '3. low': '3.8556',
    '4. close': '5.1512',
    '5. volume': '4730301'
  },
  '2008-07-31': {
    '1. open': '5.0009',
    '2. high': '5.1045',
    '3. low': '3.7934',
    '4. close': '4.0266',
    '5. volume': '8313762'
  },
  '2008-06-30': {
    '1. open': '7.7786',
    '2. high': '7.9185',
    '3. low': '4.6796',
    '4. close': '4.9594',
    '5. volume': '4466443'
  },
  '2008-05-30': {
    '1. open': '8.1931',
    '2. high': '9.2348',
    '3. low': '7.6386',
    '4. close': '7.7527',
    '5. volume': '3450273'
  },
  '2008-04-30': {
    '1. open': '9.4058',
    '2. high': '10.1779',
    '3. low': '8.1051',
    '4. close': '8.1880',
    '5. volume': '2535980'
  },
  '2008-03-31': {
    '1. open': '11.1937',
    '2. high': '12.1835',
    '3. low': '9.2762',
    '4. close': '9.4110',
    '5. volume': '2231923'
  },
  '2008-02-29': {
    '1. open': '12.4322',
    '2. high': '13.1370',
    '3. low': '11.1056',
    '4. close': '11.2921',
    '5. volume': '2483324'
  },
  '2008-01-31': {
    '1. open': '10.9449',
    '2. high': '12.3856',
    '3. low': '10.4163',
    '4. close': '12.2923',
    '5. volume': '2863646'
  },
  '2007-12-28': {
    '1. open': '13.6138',
    '2. high': '13.9766',
    '3. low': '10.0950',
    '4. close': '10.9346',
    '5. volume': '3574967'
  },
  '2007-11-30': {
    '1. open': '15.7437',
    '2. high': '15.9199',
    '3. low': '13.1629',
    '4. close': '13.5775',
    '5. volume': '3385384'
  },
  '2007-10-31': {
    '1. open': '15.7022',
    '2. high': '17.0444',
    '3. low': '15.2617',
    '4. close': '15.8577',
    '5. volume': '2218737'
  },
  '2007-09-28': {
    '1. open': '13.4013',
    '2. high': '15.9614',
    '3. low': '13.3340',
    '4. close': '15.6141',
    '5. volume': '3831285'
  },
  '2007-08-31': {
    '1. open': '15.5209',
    '2. high': '16.0391',
    '3. low': '12.8520',
    '4. close': '13.3236',
    '5. volume': '3763094'
  },
  '2007-07-31': {
    '1. open': '19.9724',
    '2. high': '20.5943',
    '3. low': '15.3498',
    '4. close': '15.5209',
    '5. volume': '3980749'
  },
  '2007-06-29': {
    '1. open': '20.9104',
    '2. high': '21.7914',
    '3. low': '18.1379',
    '4. close': '19.8739',
    '5. volume': '3289603'
  },
  '2007-05-31': {
    '1. open': '22.2526',
    '2. high': '22.5273',
    '3. low': '20.2782',
    '4. close': '20.8845',
    '5. volume': '2529879'
  },
  '2007-04-30': {
    '1. open': '20.4647',
    '2. high': '23.4912',
    '3. low': '20.3559',
    '4. close': '22.2837',
    '5. volume': '1242325'
  },
  '2007-03-30': {
    '1. open': '23.8902',
    '2. high': '24.8437',
    '3. low': '20.2108',
    '4. close': '20.3974',
    '5. volume': '1543914'
  },
  '2007-02-28': {
    '1. open': '27.6888',
    '2. high': '29.5389',
    '3. low': '23.3202',
    '4. close': '23.9213',
    '5. volume': '1915484'
  },
  '2007-01-31': {
    '1. open': '25.1236',
    '2. high': '28.7874',
    '3. low': '25.0458',
    '4. close': '27.4660',
    '5. volume': '1934746'
  },
  '2006-12-29': {
    '1. open': '25.6211',
    '2. high': '26.5850',
    '3. low': '24.1234',
    '4. close': '25.1236',
    '5. volume': '1544084'
  },
  '2006-11-30': {
    '1. open': '25.9631',
    '2. high': '26.1186',
    '3. low': '23.0610',
    '4. close': '25.1184',
    '5. volume': '1348992'
  },
  '2006-10-31': {
    '1. open': '24.7764',
    '2. high': '26.6886',
    '3. low': '23.7866',
    '4. close': '26.1704',
    '5. volume': '1471569'
  },
  '2006-09-29': {
    '1. open': '25.3920',
    '2. high': '26.6834',
    '3. low': '23.8384',
    '4. close': '24.7712',
    '5. volume': '1048367'
  },
  '2006-08-31': {
    '1. open': '25.3578',
    '2. high': '27.5955',
    '3. low': '24.9173',
    '4. close': '25.1257',
    '5. volume': '878990'
  }
};

// tslint:disable:max-line-length
export const deutscheWohnenCompany: Company = {
  id: 1045,
  name: 'Deutsche Wohnen SE',
  country: Country.Deutschland,
  city: 'Berlin',
  url: 'http://www.deutsche-wohnen.com/',
  description: 'Die Deutsche Wohnen SE ist eine börsennotierte deutsche Wohnungsgesellschaft mit Sitz in Berlin. Das Unternehmen besitzt etwa 163.000 Wohnungen und 2.600 Gewerbeimmobilien.[2] Rund 111.000 Wohnungen befinden sich in Berlin.[3] Zum Immobilienbestand gehören auch Pflege-Einrichtungen und Appartements für betreutes Wohnen.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Deutsche_Wohnen',
  logo: 'https://de.wikipedia.org/wiki/Datei:Deutsche_Wohnen_logo.svg',
  products: [],
  industries: [111010],
  currency: Currency.EUR,
  isin: 'DE000A0HN5C6',
  wkn: 'A0HN5C',
  symbol: 'DWNI.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Immobilienunternehmen', 'Immobilienverwaltung', 'Vermietung', 'Mietwohnungen']
};
// tslint:enable:max-line-length

