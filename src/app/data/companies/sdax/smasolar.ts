import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.00, yield: 0.25}, {year: 2017, rate: 0.35}, {year: 2016, rate: 0.26}, {
    year: 2015,
    rate: 0.14,
    yield: 0.27
  }, {year: 2014, rate: 0.00, yield: 0.00}, {year: 2013, rate: 0.00, yield: 0.00}, {year: 2012, rate: 0.60, yield: 3.16}, {
    year: 2011,
    rate: 1.30,
    yield: 3.01
  }, {year: 2010, rate: 3.00, yield: 4.32}, {year: 2009, rate: 1.30, yield: 1.41}, {year: 2008, rate: 1.00, yield: 2.67}
];
const prices = {
  '2019-11-27': {
    '1. open': '27.8800',
    '2. high': '33.8600',
    '3. low': '25.7000',
    '4. close': '31.3800',
    '5. volume': '3118783'
  },
  '2019-10-31': {
    '1. open': '26.0000',
    '2. high': '29.5800',
    '3. low': '22.4200',
    '4. close': '28.0200',
    '5. volume': '2167578'
  },
  '2019-09-30': {
    '1. open': '21.4800',
    '2. high': '27.0000',
    '3. low': '20.1000',
    '4. close': '26.0200',
    '5. volume': '1778644'
  },
  '2019-08-30': {
    '1. open': '21.6200',
    '2. high': '24.7800',
    '3. low': '19.0200',
    '4. close': '21.2000',
    '5. volume': '1940603'
  },
  '2019-07-31': {
    '1. open': '26.5000',
    '2. high': '26.5200',
    '3. low': '21.6200',
    '4. close': '21.9200',
    '5. volume': '874350'
  },
  '2019-06-28': {
    '1. open': '24.9000',
    '2. high': '25.7800',
    '3. low': '21.9600',
    '4. close': '25.5800',
    '5. volume': '1192360'
  },
  '2019-05-31': {
    '1. open': '20.4600',
    '2. high': '25.5200',
    '3. low': '18.0200',
    '4. close': '24.9800',
    '5. volume': '2040529'
  },
  '2019-04-30': {
    '1. open': '18.6400',
    '2. high': '21.4200',
    '3. low': '18.4000',
    '4. close': '20.2800',
    '5. volume': '1284421'
  },
  '2019-03-29': {
    '1. open': '23.3200',
    '2. high': '23.6600',
    '3. low': '17.2900',
    '4. close': '18.2500',
    '5. volume': '1378118'
  },
  '2019-02-28': {
    '1. open': '21.9000',
    '2. high': '24.1000',
    '3. low': '20.2400',
    '4. close': '23.1200',
    '5. volume': '1333749'
  },
  '2019-01-31': {
    '1. open': '16.5000',
    '2. high': '23.1400',
    '3. low': '15.0100',
    '4. close': '22.0600',
    '5. volume': '2092821'
  },
  '2018-12-28': {
    '1. open': '19.0000',
    '2. high': '19.1500',
    '3. low': '14.5300',
    '4. close': '16.5900',
    '5. volume': '2132773'
  },
  '2018-11-30': {
    '1. open': '20.8000',
    '2. high': '22.8800',
    '3. low': '17.6500',
    '4. close': '18.5000',
    '5. volume': '3261874'
  },
  '2018-10-31': {
    '1. open': '20.2000',
    '2. high': '21.5200',
    '3. low': '17.7100',
    '4. close': '20.6000',
    '5. volume': '2843973'
  },
  '2018-09-28': {
    '1. open': '31.1600',
    '2. high': '31.3200',
    '3. low': '19.6000',
    '4. close': '20.1800',
    '5. volume': '2925338'
  },
  '2018-08-31': {
    '1. open': '36.4400',
    '2. high': '36.5400',
    '3. low': '28.8800',
    '4. close': '31.2400',
    '5. volume': '2674038'
  },
  '2018-07-31': {
    '1. open': '35.0800',
    '2. high': '36.9000',
    '3. low': '31.5000',
    '4. close': '36.1200',
    '5. volume': '1725480'
  },
  '2018-06-29': {
    '1. open': '51.9500',
    '2. high': '54.2000',
    '3. low': '34.2200',
    '4. close': '35.4800',
    '5. volume': '2108767'
  },
  '2018-05-31': {
    '1. open': '51.4500',
    '2. high': '63.1500',
    '3. low': '51.0500',
    '4. close': '51.5000',
    '5. volume': '1892843'
  },
  '2018-04-30': {
    '1. open': '45.7400',
    '2. high': '52.2000',
    '3. low': '44.2200',
    '4. close': '51.1500',
    '5. volume': '1317880'
  },
  '2018-03-29': {
    '1. open': '49.3000',
    '2. high': '59.4500',
    '3. low': '45.5800',
    '4. close': '45.9800',
    '5. volume': '2583615'
  },
  '2018-02-28': {
    '1. open': '43.7000',
    '2. high': '51.0500',
    '3. low': '41.6200',
    '4. close': '49.4400',
    '5. volume': '2425550'
  },
  '2018-01-31': {
    '1. open': '35.7000',
    '2. high': '44.6800',
    '3. low': '35.3800',
    '4. close': '43.8000',
    '5. volume': '2551123'
  },
  '2017-12-29': {
    '1. open': '33.8650',
    '2. high': '37.5500',
    '3. low': '32.4800',
    '4. close': '35.9950',
    '5. volume': '1274587'
  },
  '2017-11-30': {
    '1. open': '39.8600',
    '2. high': '42.4000',
    '3. low': '32.1300',
    '4. close': '33.5050',
    '5. volume': '3236386'
  },
  '2017-10-31': {
    '1. open': '33.0850',
    '2. high': '40.3400',
    '3. low': '33.0850',
    '4. close': '39.7950',
    '5. volume': '1902077'
  },
  '2017-09-29': {
    '1. open': '37.2750',
    '2. high': '39.6900',
    '3. low': '32.0200',
    '4. close': '33.1650',
    '5. volume': '2688738'
  },
  '2017-08-31': {
    '1. open': '32.7800',
    '2. high': '37.3900',
    '3. low': '32.0500',
    '4. close': '37.1900',
    '5. volume': '3281921'
  },
  '2017-07-31': {
    '1. open': '26.3500',
    '2. high': '32.3950',
    '3. low': '26.1150',
    '4. close': '30.6600',
    '5. volume': '2006582'
  },
  '2017-06-30': {
    '1. open': '25.1450',
    '2. high': '28.7750',
    '3. low': '24.9650',
    '4. close': '26.3000',
    '5. volume': '1956552'
  },
  '2017-05-31': {
    '1. open': '23.6300',
    '2. high': '26.0000',
    '3. low': '22.8300',
    '4. close': '25.1800',
    '5. volume': '2037192'
  },
  '2017-04-28': {
    '1. open': '23.7250',
    '2. high': '25.0000',
    '3. low': '22.0000',
    '4. close': '23.7550',
    '5. volume': '1843018'
  },
  '2017-03-31': {
    '1. open': '23.9800',
    '2. high': '28.1050',
    '3. low': '23.5400',
    '4. close': '23.6750',
    '5. volume': '2724991'
  },
  '2017-02-28': {
    '1. open': '23.7850',
    '2. high': '25.6450',
    '3. low': '22.1700',
    '4. close': '23.7900',
    '5. volume': '2135719'
  },
  '2017-01-31': {
    '1. open': '25.4000',
    '2. high': '26.1950',
    '3. low': '23.1200',
    '4. close': '23.7550',
    '5. volume': '2483867'
  },
  '2016-12-30': {
    '1. open': '22.6250',
    '2. high': '25.7950',
    '3. low': '21.5000',
    '4. close': '25.1150',
    '5. volume': '1991136'
  },
  '2016-11-30': {
    '1. open': '23.4600',
    '2. high': '23.9700',
    '3. low': '20.8000',
    '4. close': '22.8350',
    '5. volume': '2985097'
  },
  '2016-10-31': {
    '1. open': '28.3700',
    '2. high': '29.3150',
    '3. low': '22.2350',
    '4. close': '23.3700',
    '5. volume': '3341637'
  },
  '2016-09-30': {
    '1. open': '31.6150',
    '2. high': '31.8000',
    '3. low': '27.2450',
    '4. close': '28.3900',
    '5. volume': '3426822'
  },
  '2016-08-31': {
    '1. open': '45.2000',
    '2. high': '46.2100',
    '3. low': '29.5900',
    '4. close': '31.4200',
    '5. volume': '5869090'
  },
  '2016-07-29': {
    '1. open': '44.5450',
    '2. high': '46.7000',
    '3. low': '42.2200',
    '4. close': '44.9300',
    '5. volume': '2335304'
  },
  '2016-06-30': {
    '1. open': '49.7700',
    '2. high': '50.9900',
    '3. low': '41.5000',
    '4. close': '44.2000',
    '5. volume': '3532661'
  },
  '2016-05-31': {
    '1. open': '46.8150',
    '2. high': '50.2900',
    '3. low': '44.1200',
    '4. close': '49.5200',
    '5. volume': '3069783'
  },
  '2016-04-29': {
    '1. open': '45.7600',
    '2. high': '50.4900',
    '3. low': '41.5000',
    '4. close': '46.2500',
    '5. volume': '3676122'
  },
  '2016-03-31': {
    '1. open': '42.2700',
    '2. high': '47.5650',
    '3. low': '39.5000',
    '4. close': '45.9300',
    '5. volume': '3768769'
  },
  '2016-02-29': {
    '1. open': '45.4600',
    '2. high': '48.6100',
    '3. low': '36.5000',
    '4. close': '42.5500',
    '5. volume': '5742861'
  },
  '2016-01-29': {
    '1. open': '51.0500',
    '2. high': '56.0100',
    '3. low': '38.5100',
    '4. close': '45.0100',
    '5. volume': '6811400'
  },
  '2015-12-30': {
    '1. open': '47.6000',
    '2. high': '56.0100',
    '3. low': '42.2200',
    '4. close': '51.7200',
    '5. volume': '4355543'
  },
  '2015-11-30': {
    '1. open': '43.9000',
    '2. high': '50.0000',
    '3. low': '40.1950',
    '4. close': '47.2250',
    '5. volume': '4089605'
  },
  '2015-10-30': {
    '1. open': '38.6000',
    '2. high': '44.0500',
    '3. low': '37.0550',
    '4. close': '43.9000',
    '5. volume': '3579534'
  },
  '2015-09-30': {
    '1. open': '33.6050',
    '2. high': '39.2600',
    '3. low': '27.2450',
    '4. close': '38.6200',
    '5. volume': '4982050'
  },
  '2015-08-31': {
    '1. open': '30.5100',
    '2. high': '37.5150',
    '3. low': '27.6750',
    '4. close': '34.7700',
    '5. volume': '5158118'
  },
  '2015-07-31': {
    '1. open': '20.3000',
    '2. high': '36.4000',
    '3. low': '19.7500',
    '4. close': '30.2200',
    '5. volume': '8664158'
  },
  '2015-06-30': {
    '1. open': '17.2750',
    '2. high': '23.0000',
    '3. low': '17.2750',
    '4. close': '20.0500',
    '5. volume': '4103830'
  },
  '2015-05-29': {
    '1. open': '13.5250',
    '2. high': '18.8400',
    '3. low': '13.0300',
    '4. close': '17.0150',
    '5. volume': '4091015'
  },
  '2015-04-30': {
    '1. open': '11.9800',
    '2. high': '14.9300',
    '3. low': '11.8700',
    '4. close': '13.3750',
    '5. volume': '3570507'
  },
  '2015-03-31': {
    '1. open': '12.0000',
    '2. high': '12.9500',
    '3. low': '11.3000',
    '4. close': '11.9600',
    '5. volume': '3878893'
  },
  '2015-02-27': {
    '1. open': '11.3850',
    '2. high': '13.8800',
    '3. low': '11.0600',
    '4. close': '11.9700',
    '5. volume': '4188712'
  },
  '2015-01-30': {
    '1. open': '15.3150',
    '2. high': '15.7400',
    '3. low': '10.2750',
    '4. close': '10.9900',
    '5. volume': '3380453'
  },
  '2014-12-30': {
    '1. open': '20.9400',
    '2. high': '21.0800',
    '3. low': '13.8800',
    '4. close': '15.3000',
    '5. volume': '3072404'
  },
  '2014-11-28': {
    '1. open': '19.8500',
    '2. high': '22.0000',
    '3. low': '17.8500',
    '4. close': '21.1350',
    '5. volume': '1383294'
  },
  '2014-10-31': {
    '1. open': '20.8500',
    '2. high': '21.4000',
    '3. low': '16.2200',
    '4. close': '19.8200',
    '5. volume': '2206150'
  },
  '2014-09-30': {
    '1. open': '24.4000',
    '2. high': '26.6550',
    '3. low': '20.8000',
    '4. close': '20.9000',
    '5. volume': '1581471'
  },
  '2014-08-29': {
    '1. open': '20.5450',
    '2. high': '24.4000',
    '3. low': '19.1200',
    '4. close': '24.4000',
    '5. volume': '1517457'
  },
  '2014-07-31': {
    '1. open': '27.5400',
    '2. high': '29.8600',
    '3. low': '20.2500',
    '4. close': '20.2500',
    '5. volume': '2927056'
  },
  '2014-06-30': {
    '1. open': '29.4550',
    '2. high': '32.6800',
    '3. low': '26.6200',
    '4. close': '27.4500',
    '5. volume': '2510108'
  },
  '2014-05-30': {
    '1. open': '30.3050',
    '2. high': '31.8000',
    '3. low': '25.4200',
    '4. close': '29.3650',
    '5. volume': '3423491'
  },
  '2014-04-30': {
    '1. open': '39.0000',
    '2. high': '40.8300',
    '3. low': '29.0600',
    '4. close': '30.1450',
    '5. volume': '3195442'
  },
  '2014-03-31': {
    '1. open': '42.2350',
    '2. high': '50.1000',
    '3. low': '38.2700',
    '4. close': '38.5000',
    '5. volume': '3255826'
  },
  '2014-02-28': {
    '1. open': '31.3400',
    '2. high': '49.2100',
    '3. low': '29.0050',
    '4. close': '43.4050',
    '5. volume': '2302996'
  },
  '2014-01-31': {
    '1. open': '23.0150',
    '2. high': '33.1950',
    '3. low': '22.9950',
    '4. close': '31.0900',
    '5. volume': '2545180'
  },
  '2013-12-30': {
    '1. open': '29.6450',
    '2. high': '30.5900',
    '3. low': '21.7050',
    '4. close': '22.9600',
    '5. volume': '1656617'
  },
  '2013-11-29': {
    '1. open': '30.6200',
    '2. high': '33.1450',
    '3. low': '26.4050',
    '4. close': '29.4500',
    '5. volume': '1949297'
  },
  '2013-10-31': {
    '1. open': '25.3050',
    '2. high': '35.0700',
    '3. low': '24.8750',
    '4. close': '30.0800',
    '5. volume': '1883061'
  },
  '2013-09-30': {
    '1. open': '24.3650',
    '2. high': '26.9500',
    '3. low': '22.2750',
    '4. close': '25.3250',
    '5. volume': '1018068'
  },
  '2013-08-30': {
    '1. open': '25.6150',
    '2. high': '27.0000',
    '3. low': '23.3100',
    '4. close': '24.2600',
    '5. volume': '1021950'
  },
  '2013-07-31': {
    '1. open': '22.7650',
    '2. high': '26.4300',
    '3. low': '19.1200',
    '4. close': '25.6950',
    '5. volume': '1087857'
  },
  '2013-06-28': {
    '1. open': '25.2600',
    '2. high': '25.5150',
    '3. low': '20.7100',
    '4. close': '22.9300',
    '5. volume': '1168774'
  },
  '2013-05-31': {
    '1. open': '18.9500',
    '2. high': '25.6650',
    '3. low': '18.2000',
    '4. close': '25.6650',
    '5. volume': '2345374'
  },
  '2013-04-30': {
    '1. open': '18.7000',
    '2. high': '21.5550',
    '3. low': '16.7550',
    '4. close': '18.8000',
    '5. volume': '1921798'
  },
  '2013-03-28': {
    '1. open': '22.1900',
    '2. high': '23.4000',
    '3. low': '17.4850',
    '4. close': '18.6700',
    '5. volume': '1659830'
  },
  '2013-02-28': {
    '1. open': '19.0500',
    '2. high': '23.6500',
    '3. low': '17.0000',
    '4. close': '22.1700',
    '5. volume': '2329020'
  },
  '2013-01-31': {
    '1. open': '19.1500',
    '2. high': '23.0000',
    '3. low': '18.4500',
    '4. close': '19.0000',
    '5. volume': '2555620'
  },
  '2012-12-28': {
    '1. open': '16.6000',
    '2. high': '19.6550',
    '3. low': '15.8000',
    '4. close': '19.0100',
    '5. volume': '1334081'
  },
  '2012-11-30': {
    '1. open': '16.2450',
    '2. high': '17.1000',
    '3. low': '15.6100',
    '4. close': '16.5550',
    '5. volume': '1384594'
  },
  '2012-10-31': {
    '1. open': '27.1950',
    '2. high': '28.8700',
    '3. low': '15.8600',
    '4. close': '16.5400',
    '5. volume': '2671138'
  },
  '2012-09-28': {
    '1. open': '24.6400',
    '2. high': '29.9000',
    '3. low': '23.5000',
    '4. close': '27.2150',
    '5. volume': '934475'
  },
  '2012-08-31': {
    '1. open': '24.9600',
    '2. high': '29.1950',
    '3. low': '23.9600',
    '4. close': '24.6300',
    '5. volume': '1327965'
  },
  '2012-07-31': {
    '1. open': '27.4950',
    '2. high': '28.0000',
    '3. low': '21.0000',
    '4. close': '25.0000',
    '5. volume': '1520242'
  },
  '2012-06-29': {
    '1. open': '24.8700',
    '2. high': '28.7200',
    '3. low': '22.5000',
    '4. close': '26.9900',
    '5. volume': '1422501'
  },
  '2012-05-31': {
    '1. open': '32.5000',
    '2. high': '35.5900',
    '3. low': '24.3200',
    '4. close': '24.5400',
    '5. volume': '2090333'
  },
  '2012-04-30': {
    '1. open': '33.7650',
    '2. high': '33.9000',
    '3. low': '29.1500',
    '4. close': '31.6500',
    '5. volume': '1773233'
  },
  '2012-03-30': {
    '1. open': '37.9900',
    '2. high': '38.4650',
    '3. low': '31.4300',
    '4. close': '33.9800',
    '5. volume': '2848022'
  },
  '2012-02-29': {
    '1. open': '47.7050',
    '2. high': '53.0000',
    '3. low': '37.8300',
    '4. close': '38.4000',
    '5. volume': '1800009'
  },
  '2012-01-31': {
    '1. open': '43.1600',
    '2. high': '55.7500',
    '3. low': '41.7750',
    '4. close': '47.2400',
    '5. volume': '2132051'
  },
  '2011-12-30': {
    '1. open': '42.9600',
    '2. high': '43.8000',
    '3. low': '37.6550',
    '4. close': '43.1650',
    '5. volume': '1337333'
  },
  '2011-11-30': {
    '1. open': '42.0000',
    '2. high': '51.4100',
    '3. low': '36.1800',
    '4. close': '43.8100',
    '5. volume': '1466119'
  },
  '2011-10-31': {
    '1. open': '37.2000',
    '2. high': '45.9900',
    '3. low': '35.5000',
    '4. close': '43.3850',
    '5. volume': '1694203'
  },
  '2011-09-30': {
    '1. open': '72.5000',
    '2. high': '72.5000',
    '3. low': '39.0550',
    '4. close': '39.3700',
    '5. volume': '2741226'
  },
  '2011-08-31': {
    '1. open': '64.1000',
    '2. high': '78.0300',
    '3. low': '52.5100',
    '4. close': '72.5000',
    '5. volume': '3060777'
  },
  '2011-07-29': {
    '1. open': '77.0000',
    '2. high': '79.7300',
    '3. low': '63.1000',
    '4. close': '64.0000',
    '5. volume': '1571768'
  },
  '2011-06-30': {
    '1. open': '75.8000',
    '2. high': '77.2000',
    '3. low': '70.6100',
    '4. close': '76.8200',
    '5. volume': '1601636'
  },
  '2011-05-31': {
    '1. open': '80.5000',
    '2. high': '80.9800',
    '3. low': '70.1500',
    '4. close': '75.8000',
    '5. volume': '1855779'
  },
  '2011-04-29': {
    '1. open': '87.3500',
    '2. high': '89.4600',
    '3. low': '75.0200',
    '4. close': '80.4900',
    '5. volume': '1456949'
  },
  '2011-03-31': {
    '1. open': '76.4100',
    '2. high': '89.6000',
    '3. low': '68.7700',
    '4. close': '88.4400',
    '5. volume': '3262164'
  },
  '2011-02-28': {
    '1. open': '72.1700',
    '2. high': '83.8500',
    '3. low': '69.5500',
    '4. close': '76.9600',
    '5. volume': '2851039'
  },
  '2011-01-31': {
    '1. open': '70.1300',
    '2. high': '76.4000',
    '3. low': '61.2500',
    '4. close': '72.8300',
    '5. volume': '3424862'
  },
  '2010-12-30': {
    '1. open': '67.9000',
    '2. high': '74.9500',
    '3. low': '66.0200',
    '4. close': '69.5000',
    '5. volume': '1930733'
  },
  '2010-11-30': {
    '1. open': '85.5500',
    '2. high': '86.3800',
    '3. low': '64.5100',
    '4. close': '66.9900',
    '5. volume': '3824187'
  },
  '2010-10-29': {
    '1. open': '80.7800',
    '2. high': '86.0000',
    '3. low': '78.0800',
    '4. close': '84.8000',
    '5. volume': '1957287'
  },
  '2010-09-30': {
    '1. open': '85.3000',
    '2. high': '93.4000',
    '3. low': '75.3000',
    '4. close': '81.0300',
    '5. volume': '3199127'
  },
  '2010-08-31': {
    '1. open': '94.9300',
    '2. high': '98.3000',
    '3. low': '77.7100',
    '4. close': '85.3000',
    '5. volume': '2255398'
  },
  '2010-07-30': {
    '1. open': '84.1300',
    '2. high': '104.2000',
    '3. low': '82.3300',
    '4. close': '94.8500',
    '5. volume': '1882341'
  },
  '2010-06-30': {
    '1. open': '82.4100',
    '2. high': '91.9100',
    '3. low': '76.7300',
    '4. close': '84.5600',
    '5. volume': '1393234'
  },
  '2010-05-31': {
    '1. open': '90.6800',
    '2. high': '95.8000',
    '3. low': '78.7000',
    '4. close': '82.1100',
    '5. volume': '1805130'
  },
  '2010-04-30': {
    '1. open': '91.7500',
    '2. high': '95.9800',
    '3. low': '85.0100',
    '4. close': '92.1900',
    '5. volume': '1420935'
  },
  '2010-03-31': {
    '1. open': '77.8000',
    '2. high': '95.5000',
    '3. low': '76.0000',
    '4. close': '90.7500',
    '5. volume': '1822725'
  },
  '2010-02-26': {
    '1. open': '86.3300',
    '2. high': '89.9000',
    '3. low': '72.5000',
    '4. close': '76.4700',
    '5. volume': '3004284'
  },
  '2010-01-29': {
    '1. open': '94.1800',
    '2. high': '106.7000',
    '3. low': '76.6000',
    '4. close': '85.0000',
    '5. volume': '3915429'
  },
  '2009-12-30': {
    '1. open': '89.1500',
    '2. high': '102.5700',
    '3. low': '85.4600',
    '4. close': '93.2500',
    '5. volume': '1719036'
  },
  '2009-11-30': {
    '1. open': '65.8200',
    '2. high': '91.4800',
    '3. low': '63.6400',
    '4. close': '88.5600',
    '5. volume': '2688124'
  },
  '2009-10-30': {
    '1. open': '68.9000',
    '2. high': '71.7000',
    '3. low': '55.6500',
    '4. close': '65.1900',
    '5. volume': '2192311'
  },
  '2009-09-30': {
    '1. open': '52.2100',
    '2. high': '70.9100',
    '3. low': '47.6000',
    '4. close': '70.0600',
    '5. volume': '1823219'
  },
  '2009-08-31': {
    '1. open': '56.7500',
    '2. high': '60.0000',
    '3. low': '51.1100',
    '4. close': '51.6900',
    '5. volume': '910731'
  },
  '2009-07-31': {
    '1. open': '53.3700',
    '2. high': '56.3600',
    '3. low': '48.6600',
    '4. close': '56.1100',
    '5. volume': '1080698'
  },
  '2009-06-30': {
    '1. open': '57.8500',
    '2. high': '60.5000',
    '3. low': '46.9000',
    '4. close': '52.7700',
    '5. volume': '1324838'
  },
  '2009-05-29': {
    '1. open': '47.5000',
    '2. high': '59.0000',
    '3. low': '45.0800',
    '4. close': '56.9500',
    '5. volume': '1559283'
  },
  '2009-04-30': {
    '1. open': '33.2900',
    '2. high': '49.3900',
    '3. low': '32.8500',
    '4. close': '47.4300',
    '5. volume': '1288226'
  },
  '2009-03-31': {
    '1. open': '30.6800',
    '2. high': '35.6100',
    '3. low': '27.8600',
    '4. close': '33.2000',
    '5. volume': '1496928'
  },
  '2009-02-27': {
    '1. open': '29.9000',
    '2. high': '33.5000',
    '3. low': '29.4100',
    '4. close': '31.0100',
    '5. volume': '890662'
  },
  '2009-01-30': {
    '1. open': '39.8000',
    '2. high': '41.6900',
    '3. low': '29.0000',
    '4. close': '30.2900',
    '5. volume': '903891'
  },
  '2008-12-23': {
    '1. open': '35.6000',
    '2. high': '37.2900',
    '3. low': '26.0000',
    '4. close': '36.8500',
    '5. volume': '1260621'
  },
  '2008-11-28': {
    '1. open': '37.1500',
    '2. high': '42.2000',
    '3. low': '23.0000',
    '4. close': '36.0000',
    '5. volume': '1551505'
  },
  '2008-10-31': {
    '1. open': '55.0000',
    '2. high': '55.5000',
    '3. low': '33.5500',
    '4. close': '35.0000',
    '5. volume': '1523854'
  },
  '2008-09-30': {
    '1. open': '59.8500',
    '2. high': '61.7000',
    '3. low': '47.2200',
    '4. close': '54.7800',
    '5. volume': '1318616'
  }
};

// tslint:disable:max-line-length
export const smasolarCompany: Company = {
  id: 1155,
  name: 'SMA Solar Technology AG',
  country: Country.Deutschland,
  city: 'Niestetal',
  url: 'http://www.sma.de/',
  description: 'Die SMA Solar Technology AG (ursprünglich für „System-, Mess- und Anlagentechnik“) mit Hauptsitz im nordhessischen Niestetal ist einer der weltweit umsatzstärksten und deutschlandweit bekannteste Hersteller von Wechselrichtern für Photovoltaikanlagen mit Netzeinspeisung, netzunabhängiger Einspeisung sowie Backup-Betrieben.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/SMA_Solar_Technology',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Logo_SMA.svg/381px-Logo_SMA.svg.png',
  products: [],
  industries: [111315],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE000A0DJ6J9',
  wkn: 'A0DJ6J',
  symbol: 'S92.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Photovoltaikindustrie', 'Komponenten']
};
// tslint:enable:max-line-length

