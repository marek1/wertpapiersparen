import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {year: 2018, rate: 0.80, yield: 4.61}, {year: 2017, rate: 0.67}, {
    year: 2016,
    rate: 0.59
  }, {year: 2015, rate: 0.59, yield: 4.20}, {year: 2014, rate: 0.52, yield: 3.01}, {year: 2013, rate: 0.45, yield: 2.53}, {
    year: 2012,
    rate: 0.65,
    yield: 3.65
  }, {year: 2011, rate: 0.65, yield: 2.85}, {year: 2010, rate: 0.55, yield: 1.59}, {year: 2009, rate: 0.40, yield: 1.48}, {
    year: 2008,
    rate: 1.00,
    yield: 4.26
  }, {year: 2007, rate: 0.85, yield: 1.39}, {year: 2006, rate: 0.21}, {year: 2005, rate: 0.15}
];
const prices = {
  '2019-11-25': {
    '1. open': '23.1400',
    '2. high': '25.3800',
    '3. low': '23.1400',
    '4. close': '24.9000',
    '5. volume': '1064304'
  },
  '2019-10-31': {
    '1. open': '22.7800',
    '2. high': '23.9600',
    '3. low': '21.6800',
    '4. close': '23.2200',
    '5. volume': '823823'
  },
  '2019-09-30': {
    '1. open': '21.9400',
    '2. high': '22.9800',
    '3. low': '21.7000',
    '4. close': '22.8600',
    '5. volume': '863255'
  },
  '2019-08-30': {
    '1. open': '22.6600',
    '2. high': '22.9400',
    '3. low': '21.2200',
    '4. close': '21.9800',
    '5. volume': '1100834'
  },
  '2019-07-31': {
    '1. open': '23.4200',
    '2. high': '24.1600',
    '3. low': '22.2800',
    '4. close': '22.8600',
    '5. volume': '1033267'
  },
  '2019-06-28': {
    '1. open': '21.2200',
    '2. high': '23.3800',
    '3. low': '20.9400',
    '4. close': '23.2400',
    '5. volume': '1530385'
  },
  '2019-05-31': {
    '1. open': '22.4000',
    '2. high': '22.8200',
    '3. low': '21.1000',
    '4. close': '21.2600',
    '5. volume': '1044064'
  },
  '2019-04-30': {
    '1. open': '20.5400',
    '2. high': '22.8800',
    '3. low': '20.0800',
    '4. close': '22.4000',
    '5. volume': '1504865'
  },
  '2019-03-29': {
    '1. open': '19.3500',
    '2. high': '20.8000',
    '3. low': '18.4100',
    '4. close': '20.3800',
    '5. volume': '1194038'
  },
  '2019-02-28': {
    '1. open': '19.6100',
    '2. high': '20.1000',
    '3. low': '19.1100',
    '4. close': '19.2000',
    '5. volume': '830703'
  },
  '2019-01-31': {
    '1. open': '17.1900',
    '2. high': '19.8500',
    '3. low': '16.6700',
    '4. close': '19.4500',
    '5. volume': '1213079'
  },
  '2018-12-28': {
    '1. open': '19.5900',
    '2. high': '19.8600',
    '3. low': '17.0000',
    '4. close': '17.3300',
    '5. volume': '814239'
  },
  '2018-11-30': {
    '1. open': '18.6100',
    '2. high': '20.9400',
    '3. low': '18.3700',
    '4. close': '19.3600',
    '5. volume': '1464233'
  },
  '2018-10-31': {
    '1. open': '20.2800',
    '2. high': '20.5400',
    '3. low': '18.1000',
    '4. close': '18.7400',
    '5. volume': '1256393'
  },
  '2018-09-28': {
    '1. open': '20.8400',
    '2. high': '22.2800',
    '3. low': '19.4600',
    '4. close': '20.2400',
    '5. volume': '1373350'
  },
  '2018-08-31': {
    '1. open': '19.7900',
    '2. high': '22.3600',
    '3. low': '16.7700',
    '4. close': '20.7800',
    '5. volume': '3295568'
  },
  '2018-07-31': {
    '1. open': '18.4300',
    '2. high': '19.8000',
    '3. low': '18.2700',
    '4. close': '19.7300',
    '5. volume': '1151847'
  },
  '2018-06-29': {
    '1. open': '21.0000',
    '2. high': '21.5000',
    '3. low': '18.5000',
    '4. close': '18.6000',
    '5. volume': '1649803'
  },
  '2018-05-31': {
    '1. open': '19.9900',
    '2. high': '22.6800',
    '3. low': '19.9300',
    '4. close': '20.8600',
    '5. volume': '1584594'
  },
  '2018-04-30': {
    '1. open': '18.1300',
    '2. high': '20.5000',
    '3. low': '17.8700',
    '4. close': '19.9700',
    '5. volume': '1589450'
  },
  '2018-03-29': {
    '1. open': '20.1000',
    '2. high': '20.3200',
    '3. low': '17.4000',
    '4. close': '18.2500',
    '5. volume': '2409832'
  },
  '2018-02-28': {
    '1. open': '23.0000',
    '2. high': '23.0000',
    '3. low': '19.0600',
    '4. close': '20.1800',
    '5. volume': '2565956'
  },
  '2018-01-31': {
    '1. open': '23.6400',
    '2. high': '24.4600',
    '3. low': '21.8800',
    '4. close': '22.4600',
    '5. volume': '1564090'
  },
  '2017-12-29': {
    '1. open': '24.6400',
    '2. high': '24.6400',
    '3. low': '23.0100',
    '4. close': '23.6700',
    '5. volume': '1430269'
  },
  '2017-11-30': {
    '1. open': '27.4950',
    '2. high': '28.4450',
    '3. low': '23.2550',
    '4. close': '24.7100',
    '5. volume': '2844836'
  },
  '2017-10-31': {
    '1. open': '26.7150',
    '2. high': '27.9450',
    '3. low': '26.6800',
    '4. close': '27.4000',
    '5. volume': '1346691'
  },
  '2017-09-29': {
    '1. open': '26.7500',
    '2. high': '27.9950',
    '3. low': '25.4000',
    '4. close': '26.6500',
    '5. volume': '3273777'
  },
  '2017-08-31': {
    '1. open': '23.7500',
    '2. high': '26.9500',
    '3. low': '23.7050',
    '4. close': '26.7500',
    '5. volume': '3908609'
  },
  '2017-07-31': {
    '1. open': '19.3150',
    '2. high': '23.9550',
    '3. low': '19.1400',
    '4. close': '23.6600',
    '5. volume': '2317154'
  },
  '2017-06-30': {
    '1. open': '19.4300',
    '2. high': '20.8000',
    '3. low': '18.9750',
    '4. close': '19.1200',
    '5. volume': '2036223'
  },
  '2017-05-31': {
    '1. open': '17.4500',
    '2. high': '19.3850',
    '3. low': '17.1550',
    '4. close': '19.0500',
    '5. volume': '2724614'
  },
  '2017-04-28': {
    '1. open': '17.5450',
    '2. high': '17.6550',
    '3. low': '16.5500',
    '4. close': '17.4000',
    '5. volume': '2255882'
  },
  '2017-03-31': {
    '1. open': '18.7300',
    '2. high': '20.0000',
    '3. low': '16.6600',
    '4. close': '17.5450',
    '5. volume': '2768248'
  },
  '2017-02-28': {
    '1. open': '18.8150',
    '2. high': '19.4200',
    '3. low': '16.5600',
    '4. close': '18.6950',
    '5. volume': '3155859'
  },
  '2017-01-31': {
    '1. open': '17.7900',
    '2. high': '19.5400',
    '3. low': '17.6000',
    '4. close': '18.8450',
    '5. volume': '1527608'
  },
  '2016-12-30': {
    '1. open': '16.4700',
    '2. high': '17.9050',
    '3. low': '15.9000',
    '4. close': '17.7000',
    '5. volume': '1445173'
  },
  '2016-11-30': {
    '1. open': '14.4000',
    '2. high': '16.5050',
    '3. low': '14.2400',
    '4. close': '16.5000',
    '5. volume': '870350'
  },
  '2016-10-31': {
    '1. open': '13.6500',
    '2. high': '14.8000',
    '3. low': '13.5450',
    '4. close': '14.5100',
    '5. volume': '360085'
  },
  '2016-09-30': {
    '1. open': '14.4800',
    '2. high': '14.8000',
    '3. low': '13.5100',
    '4. close': '13.5350',
    '5. volume': '450728'
  },
  '2016-08-31': {
    '1. open': '14.4000',
    '2. high': '15.3100',
    '3. low': '14.2000',
    '4. close': '14.4150',
    '5. volume': '604223'
  },
  '2016-07-29': {
    '1. open': '13.6600',
    '2. high': '14.5850',
    '3. low': '12.9150',
    '4. close': '14.2950',
    '5. volume': '649211'
  },
  '2016-06-30': {
    '1. open': '15.4000',
    '2. high': '15.4000',
    '3. low': '12.8500',
    '4. close': '13.4450',
    '5. volume': '1151101'
  },
  '2016-05-31': {
    '1. open': '13.8300',
    '2. high': '15.4150',
    '3. low': '13.4250',
    '4. close': '15.2750',
    '5. volume': '962236'
  },
  '2016-04-29': {
    '1. open': '13.0350',
    '2. high': '13.9950',
    '3. low': '12.6100',
    '4. close': '13.7000',
    '5. volume': '743254'
  },
  '2016-03-31': {
    '1. open': '12.7000',
    '2. high': '14.0700',
    '3. low': '12.6450',
    '4. close': '12.9400',
    '5. volume': '1181773'
  },
  '2016-02-29': {
    '1. open': '12.8350',
    '2. high': '13.0500',
    '3. low': '11.8600',
    '4. close': '12.6800',
    '5. volume': '1182933'
  },
  '2016-01-29': {
    '1. open': '13.7500',
    '2. high': '14.0300',
    '3. low': '12.0100',
    '4. close': '12.7700',
    '5. volume': '1419076'
  },
  '2015-12-30': {
    '1. open': '13.8300',
    '2. high': '14.7000',
    '3. low': '13.0000',
    '4. close': '14.0600',
    '5. volume': '1950764'
  },
  '2015-11-30': {
    '1. open': '13.1950',
    '2. high': '14.1000',
    '3. low': '12.7700',
    '4. close': '13.8400',
    '5. volume': '1707526'
  },
  '2015-10-30': {
    '1. open': '14.6450',
    '2. high': '15.0850',
    '3. low': '12.6500',
    '4. close': '13.1550',
    '5. volume': '2728508'
  },
  '2015-09-30': {
    '1. open': '15.9450',
    '2. high': '16.0550',
    '3. low': '13.8400',
    '4. close': '14.5650',
    '5. volume': '1449244'
  },
  '2015-08-31': {
    '1. open': '17.5500',
    '2. high': '17.6550',
    '3. low': '14.8050',
    '4. close': '16.2450',
    '5. volume': '1190637'
  },
  '2015-07-31': {
    '1. open': '18.3500',
    '2. high': '18.5300',
    '3. low': '16.9600',
    '4. close': '17.5050',
    '5. volume': '1159479'
  },
  '2015-06-30': {
    '1. open': '19.6600',
    '2. high': '19.8700',
    '3. low': '17.8800',
    '4. close': '18.1500',
    '5. volume': '1141838'
  },
  '2015-05-29': {
    '1. open': '19.6700',
    '2. high': '20.9700',
    '3. low': '19.2050',
    '4. close': '19.6600',
    '5. volume': '928478'
  },
  '2015-04-30': {
    '1. open': '19.5450',
    '2. high': '20.3550',
    '3. low': '19.3150',
    '4. close': '19.6700',
    '5. volume': '1457307'
  },
  '2015-03-31': {
    '1. open': '19.8500',
    '2. high': '21.5250',
    '3. low': '19.3300',
    '4. close': '19.5450',
    '5. volume': '1880883'
  },
  '2015-02-27': {
    '1. open': '18.3600',
    '2. high': '19.8700',
    '3. low': '18.3500',
    '4. close': '19.8300',
    '5. volume': '702736'
  },
  '2015-01-30': {
    '1. open': '17.1850',
    '2. high': '18.9000',
    '3. low': '16.9100',
    '4. close': '18.2350',
    '5. volume': '916700'
  },
  '2014-12-30': {
    '1. open': '18.3000',
    '2. high': '18.8300',
    '3. low': '16.9250',
    '4. close': '17.2500',
    '5. volume': '750506'
  },
  '2014-11-28': {
    '1. open': '17.3150',
    '2. high': '18.5000',
    '3. low': '17.1150',
    '4. close': '18.3150',
    '5. volume': '781080'
  },
  '2014-10-31': {
    '1. open': '18.8000',
    '2. high': '19.0750',
    '3. low': '15.6950',
    '4. close': '17.4650',
    '5. volume': '1172427'
  },
  '2014-09-30': {
    '1. open': '18.4950',
    '2. high': '19.0000',
    '3. low': '17.9100',
    '4. close': '18.9150',
    '5. volume': '604795'
  },
  '2014-08-29': {
    '1. open': '19.1600',
    '2. high': '19.4000',
    '3. low': '17.3600',
    '4. close': '18.4050',
    '5. volume': '878739'
  },
  '2014-07-31': {
    '1. open': '19.4800',
    '2. high': '19.9800',
    '3. low': '18.5000',
    '4. close': '19.3100',
    '5. volume': '1191342'
  },
  '2014-06-30': {
    '1. open': '18.6450',
    '2. high': '19.8550',
    '3. low': '18.0650',
    '4. close': '19.3950',
    '5. volume': '1873061'
  },
  '2014-05-30': {
    '1. open': '17.4750',
    '2. high': '18.6000',
    '3. low': '17.0750',
    '4. close': '18.5000',
    '5. volume': '1571910'
  },
  '2014-04-30': {
    '1. open': '17.5450',
    '2. high': '18.2400',
    '3. low': '16.6550',
    '4. close': '17.4500',
    '5. volume': '1530694'
  },
  '2014-03-31': {
    '1. open': '19.3900',
    '2. high': '20.5000',
    '3. low': '17.2700',
    '4. close': '17.4450',
    '5. volume': '2491635'
  },
  '2014-02-28': {
    '1. open': '18.5000',
    '2. high': '19.9400',
    '3. low': '18.0850',
    '4. close': '19.5900',
    '5. volume': '881876'
  },
  '2014-01-31': {
    '1. open': '17.8000',
    '2. high': '19.6550',
    '3. low': '17.5000',
    '4. close': '18.5500',
    '5. volume': '1188144'
  },
  '2013-12-30': {
    '1. open': '18.7450',
    '2. high': '19.8500',
    '3. low': '17.3500',
    '4. close': '17.7800',
    '5. volume': '836691'
  },
  '2013-11-29': {
    '1. open': '18.5000',
    '2. high': '18.7950',
    '3. low': '17.1500',
    '4. close': '18.7850',
    '5. volume': '1056826'
  },
  '2013-10-31': {
    '1. open': '18.0950',
    '2. high': '19.8150',
    '3. low': '18.0700',
    '4. close': '18.5000',
    '5. volume': '1297583'
  },
  '2013-09-30': {
    '1. open': '16.9500',
    '2. high': '18.7200',
    '3. low': '16.7200',
    '4. close': '18.1800',
    '5. volume': '980000'
  },
  '2013-08-30': {
    '1. open': '17.9850',
    '2. high': '18.1100',
    '3. low': '16.4700',
    '4. close': '16.9200',
    '5. volume': '1506439'
  },
  '2013-07-31': {
    '1. open': '16.5000',
    '2. high': '18.0900',
    '3. low': '16.2900',
    '4. close': '18.0000',
    '5. volume': '1420415'
  },
  '2013-06-28': {
    '1. open': '18.8000',
    '2. high': '19.0350',
    '3. low': '16.0500',
    '4. close': '16.4400',
    '5. volume': '2402043'
  },
  '2013-05-31': {
    '1. open': '16.3650',
    '2. high': '19.1800',
    '3. low': '16.3000',
    '4. close': '18.7900',
    '5. volume': '2666938'
  },
  '2013-04-30': {
    '1. open': '17.1200',
    '2. high': '17.6550',
    '3. low': '16.2000',
    '4. close': '16.3400',
    '5. volume': '2309217'
  },
  '2013-03-28': {
    '1. open': '18.2000',
    '2. high': '18.2350',
    '3. low': '16.9800',
    '4. close': '17.0250',
    '5. volume': '2173179'
  },
  '2013-02-28': {
    '1. open': '18.2400',
    '2. high': '19.3800',
    '3. low': '17.9350',
    '4. close': '18.1100',
    '5. volume': '2337543'
  },
  '2013-01-31': {
    '1. open': '18.0500',
    '2. high': '19.9800',
    '3. low': '17.7750',
    '4. close': '18.2050',
    '5. volume': '2624849'
  },
  '2012-12-28': {
    '1. open': '17.4500',
    '2. high': '18.7000',
    '3. low': '17.2100',
    '4. close': '17.8200',
    '5. volume': '1198551'
  },
  '2012-11-30': {
    '1. open': '18.7900',
    '2. high': '19.1050',
    '3. low': '17.3400',
    '4. close': '17.3500',
    '5. volume': '1793767'
  },
  '2012-10-31': {
    '1. open': '20.2600',
    '2. high': '20.6350',
    '3. low': '18.0250',
    '4. close': '18.7350',
    '5. volume': '1972304'
  },
  '2012-09-28': {
    '1. open': '19.2650',
    '2. high': '22.1250',
    '3. low': '19.1850',
    '4. close': '20.2000',
    '5. volume': '1476771'
  },
  '2012-08-31': {
    '1. open': '17.9800',
    '2. high': '19.8000',
    '3. low': '16.7650',
    '4. close': '19.3800',
    '5. volume': '2181104'
  },
  '2012-07-31': {
    '1. open': '20.2500',
    '2. high': '20.8300',
    '3. low': '16.9900',
    '4. close': '18.0450',
    '5. volume': '1936292'
  },
  '2012-06-29': {
    '1. open': '20.2000',
    '2. high': '20.9700',
    '3. low': '19.1300',
    '4. close': '20.1300',
    '5. volume': '1998452'
  },
  '2012-05-31': {
    '1. open': '25.0850',
    '2. high': '25.2800',
    '3. low': '20.0900',
    '4. close': '20.3000',
    '5. volume': '2853131'
  },
  '2012-04-30': {
    '1. open': '25.4000',
    '2. high': '26.7950',
    '3. low': '23.9400',
    '4. close': '25.0500',
    '5. volume': '1706029'
  },
  '2012-03-30': {
    '1. open': '26.5050',
    '2. high': '26.8750',
    '3. low': '24.4250',
    '4. close': '25.2500',
    '5. volume': '1519691'
  },
  '2012-02-29': {
    '1. open': '24.5500',
    '2. high': '27.0250',
    '3. low': '24.5500',
    '4. close': '26.5900',
    '5. volume': '1783848'
  },
  '2012-01-31': {
    '1. open': '23.1200',
    '2. high': '24.8000',
    '3. low': '22.8100',
    '4. close': '24.5000',
    '5. volume': '2056003'
  },
  '2011-12-30': {
    '1. open': '22.5000',
    '2. high': '23.4800',
    '3. low': '20.0700',
    '4. close': '22.8250',
    '5. volume': '1714309'
  },
  '2011-11-30': {
    '1. open': '21.9450',
    '2. high': '22.9800',
    '3. low': '19.2250',
    '4. close': '22.5450',
    '5. volume': '1628214'
  },
  '2011-10-31': {
    '1. open': '20.1850',
    '2. high': '23.2800',
    '3. low': '19.5000',
    '4. close': '22.2850',
    '5. volume': '1457003'
  },
  '2011-09-30': {
    '1. open': '24.6100',
    '2. high': '24.6950',
    '3. low': '19.3650',
    '4. close': '20.9400',
    '5. volume': '2335645'
  },
  '2011-08-31': {
    '1. open': '27.9000',
    '2. high': '28.1700',
    '3. low': '21.1200',
    '4. close': '23.8100',
    '5. volume': '3828795'
  },
  '2011-07-29': {
    '1. open': '30.0000',
    '2. high': '30.7400',
    '3. low': '27.5150',
    '4. close': '27.8500',
    '5. volume': '2091356'
  },
  '2011-06-30': {
    '1. open': '33.5700',
    '2. high': '33.8250',
    '3. low': '28.8800',
    '4. close': '29.9600',
    '5. volume': '2235130'
  },
  '2011-05-31': {
    '1. open': '32.5000',
    '2. high': '33.4050',
    '3. low': '31.3700',
    '4. close': '33.2600',
    '5. volume': '2285194'
  },
  '2011-04-29': {
    '1. open': '32.7800',
    '2. high': '33.0850',
    '3. low': '31.0050',
    '4. close': '32.7500',
    '5. volume': '2142858'
  },
  '2011-03-31': {
    '1. open': '33.2650',
    '2. high': '34.4800',
    '3. low': '30.7200',
    '4. close': '32.8250',
    '5. volume': '2579922'
  },
  '2011-02-28': {
    '1. open': '32.5700',
    '2. high': '35.0850',
    '3. low': '31.6000',
    '4. close': '32.9750',
    '5. volume': '2663991'
  },
  '2011-01-31': {
    '1. open': '35.1100',
    '2. high': '35.8100',
    '3. low': '32.0500',
    '4. close': '32.2950',
    '5. volume': '2363885'
  },
  '2010-12-30': {
    '1. open': '31.4300',
    '2. high': '35.7000',
    '3. low': '31.4200',
    '4. close': '34.5500',
    '5. volume': '2611393'
  },
  '2010-11-30': {
    '1. open': '31.7000',
    '2. high': '31.8000',
    '3. low': '28.9500',
    '4. close': '30.9150',
    '5. volume': '2848485'
  },
  '2010-10-29': {
    '1. open': '28.7050',
    '2. high': '31.9900',
    '3. low': '28.0400',
    '4. close': '31.4550',
    '5. volume': '2382243'
  },
  '2010-09-30': {
    '1. open': '27.5700',
    '2. high': '29.0000',
    '3. low': '27.3350',
    '4. close': '28.5500',
    '5. volume': '1677558'
  },
  '2010-08-31': {
    '1. open': '28.1100',
    '2. high': '29.5000',
    '3. low': '26.8000',
    '4. close': '27.6050',
    '5. volume': '2327040'
  },
  '2010-07-30': {
    '1. open': '26.0050',
    '2. high': '29.4850',
    '3. low': '25.8000',
    '4. close': '28.0300',
    '5. volume': '2842561'
  },
  '2010-06-30': {
    '1. open': '25.4900',
    '2. high': '28.3500',
    '3. low': '24.2400',
    '4. close': '26.3000',
    '5. volume': '4642226'
  },
  '2010-05-31': {
    '1. open': '27.5000',
    '2. high': '28.1150',
    '3. low': '23.4400',
    '4. close': '25.7500',
    '5. volume': '4675268'
  },
  '2010-04-30': {
    '1. open': '28.5100',
    '2. high': '29.3900',
    '3. low': '26.9000',
    '4. close': '27.3700',
    '5. volume': '4427829'
  },
  '2010-03-31': {
    '1. open': '27.5750',
    '2. high': '31.4850',
    '3. low': '26.9950',
    '4. close': '28.0900',
    '5. volume': '3719262'
  },
  '2010-02-26': {
    '1. open': '26.8400',
    '2. high': '28.4200',
    '3. low': '25.2500',
    '4. close': '27.3400',
    '5. volume': '2843429'
  },
  '2010-01-29': {
    '1. open': '26.8900',
    '2. high': '31.2250',
    '3. low': '26.5700',
    '4. close': '26.8350',
    '5. volume': '3456476'
  },
  '2009-12-30': {
    '1. open': '25.9900',
    '2. high': '27.3900',
    '3. low': '25.4800',
    '4. close': '26.9900',
    '5. volume': '2827163'
  },
  '2009-11-30': {
    '1. open': '26.6400',
    '2. high': '28.0000',
    '3. low': '24.3500',
    '4. close': '25.8500',
    '5. volume': '6545094'
  },
  '2009-10-30': {
    '1. open': '30.9000',
    '2. high': '32.5000',
    '3. low': '26.2300',
    '4. close': '26.5000',
    '5. volume': '2926920'
  },
  '2009-09-30': {
    '1. open': '29.3000',
    '2. high': '32.4700',
    '3. low': '27.2600',
    '4. close': '30.7900',
    '5. volume': '3216105'
  },
  '2009-08-31': {
    '1. open': '32.0000',
    '2. high': '32.2600',
    '3. low': '28.0000',
    '4. close': '29.1500',
    '5. volume': '2556758'
  },
  '2009-07-31': {
    '1. open': '27.7200',
    '2. high': '32.7800',
    '3. low': '26.0500',
    '4. close': '32.2000',
    '5. volume': '2148598'
  },
  '2009-06-30': {
    '1. open': '29.7900',
    '2. high': '30.4000',
    '3. low': '25.1200',
    '4. close': '27.4500',
    '5. volume': '1625675'
  },
  '2009-05-29': {
    '1. open': '27.5000',
    '2. high': '30.3700',
    '3. low': '25.0100',
    '4. close': '29.5000',
    '5. volume': '2417084'
  },
  '2009-04-30': {
    '1. open': '18.4200',
    '2. high': '27.6200',
    '3. low': '18.4100',
    '4. close': '27.2900',
    '5. volume': '2767802'
  },
  '2009-03-31': {
    '1. open': '17.7600',
    '2. high': '19.7300',
    '3. low': '16.1500',
    '4. close': '18.6000',
    '5. volume': '1960256'
  },
  '2009-02-27': {
    '1. open': '19.7700',
    '2. high': '23.0000',
    '3. low': '17.5000',
    '4. close': '17.9800',
    '5. volume': '2267839'
  },
  '2009-01-30': {
    '1. open': '24.7000',
    '2. high': '27.2800',
    '3. low': '18.8600',
    '4. close': '20.0000',
    '5. volume': '1692524'
  },
  '2008-12-30': {
    '1. open': '23.6000',
    '2. high': '26.0000',
    '3. low': '20.2600',
    '4. close': '23.5000',
    '5. volume': '2382623'
  },
  '2008-11-28': {
    '1. open': '27.0100',
    '2. high': '32.6000',
    '3. low': '21.8500',
    '4. close': '23.4100',
    '5. volume': '2961917'
  },
  '2008-10-31': {
    '1. open': '42.3000',
    '2. high': '44.2300',
    '3. low': '21.9600',
    '4. close': '26.8000',
    '5. volume': '4341351'
  },
  '2008-09-30': {
    '1. open': '42.6900',
    '2. high': '46.8400',
    '3. low': '39.9500',
    '4. close': '42.0000',
    '5. volume': '2629246'
  },
  '2008-08-29': {
    '1. open': '41.1400',
    '2. high': '43.4200',
    '3. low': '39.2600',
    '4. close': '42.7600',
    '5. volume': '2546147'
  },
  '2008-07-31': {
    '1. open': '49.5000',
    '2. high': '49.6100',
    '3. low': '41.3200',
    '4. close': '41.8100',
    '5. volume': '2386538'
  },
  '2008-06-30': {
    '1. open': '56.1100',
    '2. high': '59.1900',
    '3. low': '48.5500',
    '4. close': '49.4000',
    '5. volume': '1867725'
  },
  '2008-05-30': {
    '1. open': '54.0300',
    '2. high': '57.9000',
    '3. low': '52.1400',
    '4. close': '55.5600',
    '5. volume': '4732025'
  },
  '2008-04-30': {
    '1. open': '48.5100',
    '2. high': '54.0000',
    '3. low': '46.5000',
    '4. close': '53.5300',
    '5. volume': '1778003'
  },
  '2008-03-31': {
    '1. open': '51.3000',
    '2. high': '53.0800',
    '3. low': '39.6800',
    '4. close': '48.2500',
    '5. volume': '2656921'
  },
  '2008-02-29': {
    '1. open': '49.1000',
    '2. high': '55.9600',
    '3. low': '45.6900',
    '4. close': '51.4000',
    '5. volume': '1272289'
  },
  '2008-01-31': {
    '1. open': '60.5100',
    '2. high': '61.8800',
    '3. low': '42.0000',
    '4. close': '49.6900',
    '5. volume': '4997670'
  },
  '2007-12-28': {
    '1. open': '59.9900',
    '2. high': '64.4900',
    '3. low': '58.4100',
    '4. close': '61.0000',
    '5. volume': '1784814'
  }
};

// tslint:disable:max-line-length
export const hhlaCompany: Company = {
  id: 1134,
  name: 'Hamburger Hafen und Logistik AG (HHLA)',
  country: Country.Deutschland,
  city: 'Hamburg',
  url: 'http://www.hhla.de/',
  description: 'Die Hamburger Hafen und Logistik AG (HHLA), bis 2005 Hamburger Hafen- und Lagerhaus-Aktiengesellschaft, zuvor seit 1885 die Hamburger Freihafen-Lagerhaus Gesellschaft, HFLG[4] ist ein europäisches Logistikunternehmen, das vor allem spezialisiert ist auf die Bereiche Hafenumschlag, Container- und Transportlogistik.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Hamburger_Hafen_und_Logistik',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/b/b5/Hhla-logo.svg/500px-Hhla-logo.svg.png',
  products: [],
  industries: [121411, 1220],
  securityType: SecurityType.Namensaktie,
  currency: Currency.EUR,
  isin: 'DE000A0S8488',
  wkn: 'A0S848',
  symbol: 'HHFA.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Hafenlogistik', 'Containerterminals', 'Transportsysteme', 'Logistikdienstleistungen']
};
// tslint:enable:max-line-length
