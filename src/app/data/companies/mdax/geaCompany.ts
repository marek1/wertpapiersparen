import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [{year: 2018, rate: 0.85, yield: 3.76}, {year: 2017, rate: 0.85}, {year: 2016, rate: 0.80}, {
  year: 2015,
  rate: 0.80,
  yield: 2.14
}, {year: 2014, rate: 0.70, yield: 1.91}, {year: 2013, rate: 0.60, yield: 1.73}, {year: 2012, rate: 0.55, yield: 2.25}, {
  year: 2011,
  rate: 0.55,
  yield: 2.52
}, {year: 2010, rate: 0.40, yield: 1.85}, {year: 2009, rate: 0.30, yield: 1.93}, {year: 2008, rate: 0.40, yield: 3.29}, {
  year: 2007,
  rate: 0.20,
  yield: 0.84
}, {year: 2006, rate: 0.00, yield: 0.00}, {year: 2005, rate: 0.10, yield: 0.95}, {year: 2004, rate: 0.00, yield: 0.00}, {
  year: 2003,
  rate: 0.00,
  yield: 0.00
}, {year: 2002, rate: 0.25, yield: 3.84}, {year: 2001, rate: 0.25, yield: 4.05}, {year: 2000, rate: 0.25, yield: 2.08}, {
  year: 1999,
  rate: 0.26,
  yield: 1.37
}];
const prices = {
  '2019-11-14': {
    '1. open': '27.4100',
    '2. high': '29.2200',
    '3. low': '27.3800',
    '4. close': '29.0400',
    '5. volume': '4331014'
  },
  '2019-10-31': {
    '1. open': '24.8800',
    '2. high': '29.1200',
    '3. low': '23.7700',
    '4. close': '27.4100',
    '5. volume': '11725195'
  },
  '2019-09-30': {
    '1. open': '24.5200',
    '2. high': '27.5200',
    '3. low': '23.7000',
    '4. close': '24.7700',
    '5. volume': '8741627'
  },
  '2019-08-30': {
    '1. open': '22.5600',
    '2. high': '24.6100',
    '3. low': '21.5700',
    '4. close': '24.5300',
    '5. volume': '10440763'
  },
  '2019-07-31': {
    '1. open': '24.7300',
    '2. high': '25.1400',
    '3. low': '21.1600',
    '4. close': '22.6500',
    '5. volume': '11264617'
  },
  '2019-06-28': {
    '1. open': '24.2900',
    '2. high': '26.3000',
    '3. low': '23.6900',
    '4. close': '25.0000',
    '5. volume': '10599765'
  },
  '2019-05-31': {
    '1. open': '24.9200',
    '2. high': '25.4300',
    '3. low': '22.7300',
    '4. close': '24.4800',
    '5. volume': '11720761'
  },
  '2019-04-30': {
    '1. open': '23.6100',
    '2. high': '26.0900',
    '3. low': '23.3700',
    '4. close': '24.9200',
    '5. volume': '8746841'
  },
  '2019-03-29': {
    '1. open': '21.1900',
    '2. high': '24.3600',
    '3. low': '20.5400',
    '4. close': '23.3500',
    '5. volume': '11852885'
  },
  '2019-02-28': {
    '1. open': '24.1200',
    '2. high': '24.5200',
    '3. low': '19.0900',
    '4. close': '21.0700',
    '5. volume': '12239889'
  },
  '2019-01-31': {
    '1. open': '22.5100',
    '2. high': '24.8900',
    '3. low': '21.9800',
    '4. close': '24.0200',
    '5. volume': '8434652'
  },
  '2018-12-28': {
    '1. open': '24.0800',
    '2. high': '24.7900',
    '3. low': '20.9700',
    '4. close': '22.5000',
    '5. volume': '10656436'
  },
  '2018-11-30': {
    '1. open': '26.9100',
    '2. high': '27.6800',
    '3. low': '21.6600',
    '4. close': '23.8400',
    '5. volume': '14661955'
  },
  '2018-10-31': {
    '1. open': '30.8100',
    '2. high': '31.2400',
    '3. low': '24.6500',
    '4. close': '26.8600',
    '5. volume': '16245640'
  },
  '2018-09-28': {
    '1. open': '32.5800',
    '2. high': '33.2500',
    '3. low': '29.7900',
    '4. close': '30.6800',
    '5. volume': '8983677'
  },
  '2018-08-31': {
    '1. open': '33.5300',
    '2. high': '33.9700',
    '3. low': '31.3600',
    '4. close': '32.7300',
    '5. volume': '9161477'
  },
  '2018-07-31': {
    '1. open': '28.5600',
    '2. high': '34.6000',
    '3. low': '26.9500',
    '4. close': '33.4000',
    '5. volume': '17180980'
  },
  '2018-06-29': {
    '1. open': '31.6400',
    '2. high': '33.2400',
    '3. low': '28.4000',
    '4. close': '28.8900',
    '5. volume': '11279764'
  },
  '2018-05-31': {
    '1. open': '32.4000',
    '2. high': '33.7900',
    '3. low': '31.3400',
    '4. close': '31.5000',
    '5. volume': '9734539'
  },
  '2018-04-30': {
    '1. open': '34.3100',
    '2. high': '35.0800',
    '3. low': '31.5600',
    '4. close': '32.4100',
    '5. volume': '11980045'
  },
  '2018-03-29': {
    '1. open': '38.8700',
    '2. high': '39.1000',
    '3. low': '33.7600',
    '4. close': '34.5500',
    '5. volume': '11951008'
  },
  '2018-02-28': {
    '1. open': '40.0700',
    '2. high': '40.3200',
    '3. low': '36.4600',
    '4. close': '38.9500',
    '5. volume': '8513393'
  },
  '2018-01-31': {
    '1. open': '40.1100',
    '2. high': '41.7600',
    '3. low': '37.7500',
    '4. close': '40.0300',
    '5. volume': '10993932'
  },
  '2017-12-29': {
    '1. open': '40.6950',
    '2. high': '41.7650',
    '3. low': '39.1250',
    '4. close': '40.0100',
    '5. volume': '7993161'
  },
  '2017-11-30': {
    '1. open': '41.9300',
    '2. high': '42.8750',
    '3. low': '39.1200',
    '4. close': '40.5350',
    '5. volume': '11212988'
  },
  '2017-10-31': {
    '1. open': '38.5000',
    '2. high': '42.0600',
    '3. low': '37.5050',
    '4. close': '41.3950',
    '5. volume': '12107265'
  },
  '2017-09-29': {
    '1. open': '37.0000',
    '2. high': '38.4900',
    '3. low': '36.5050',
    '4. close': '38.4900',
    '5. volume': '9573200'
  },
  '2017-08-31': {
    '1. open': '34.1750',
    '2. high': '38.5750',
    '3. low': '34.0550',
    '4. close': '37.0000',
    '5. volume': '13492990'
  },
  '2017-07-31': {
    '1. open': '36.0000',
    '2. high': '38.8800',
    '3. low': '34.3450',
    '4. close': '34.3450',
    '5. volume': '17332691'
  },
  '2017-06-30': {
    '1. open': '36.5600',
    '2. high': '37.9600',
    '3. low': '35.8300',
    '4. close': '35.8300',
    '5. volume': '13323952'
  },
  '2017-05-31': {
    '1. open': '38.8900',
    '2. high': '39.8000',
    '3. low': '34.6400',
    '4. close': '36.5750',
    '5. volume': '20369162'
  },
  '2017-04-28': {
    '1. open': '40.1050',
    '2. high': '42.3200',
    '3. low': '37.8000',
    '4. close': '39.0400',
    '5. volume': '14259167'
  },
  '2017-03-31': {
    '1. open': '36.9600',
    '2. high': '40.0500',
    '3. low': '36.5200',
    '4. close': '39.8400',
    '5. volume': '13888422'
  },
  '2017-02-28': {
    '1. open': '38.2200',
    '2. high': '40.3100',
    '3. low': '36.6600',
    '4. close': '36.7400',
    '5. volume': '13301149'
  },
  '2017-01-31': {
    '1. open': '38.3450',
    '2. high': '39.5900',
    '3. low': '37.0050',
    '4. close': '38.2400',
    '5. volume': '10761215'
  },
  '2016-12-30': {
    '1. open': '35.0800',
    '2. high': '38.8300',
    '3. low': '34.2400',
    '4. close': '38.2300',
    '5. volume': '12023487'
  },
  '2016-11-30': {
    '1. open': '35.1100',
    '2. high': '35.7000',
    '3. low': '32.6200',
    '4. close': '35.1700',
    '5. volume': '17066007'
  },
  '2016-10-31': {
    '1. open': '49.2250',
    '2. high': '49.8250',
    '3. low': '35.2250',
    '4. close': '35.2250',
    '5. volume': '17640433'
  },
  '2016-09-30': {
    '1. open': '48.3800',
    '2. high': '50.1300',
    '3. low': '46.3650',
    '4. close': '49.4100',
    '5. volume': '6368305'
  },
  '2016-08-31': {
    '1. open': '47.7500',
    '2. high': '50.1700',
    '3. low': '46.7750',
    '4. close': '48.1150',
    '5. volume': '6780799'
  },
  '2016-07-29': {
    '1. open': '42.6650',
    '2. high': '47.7500',
    '3. low': '41.6600',
    '4. close': '47.7350',
    '5. volume': '7476021'
  },
  '2016-06-30': {
    '1. open': '41.7500',
    '2. high': '43.9250',
    '3. low': '39.3050',
    '4. close': '42.2750',
    '5. volume': '8153715'
  },
  '2016-05-31': {
    '1. open': '40.5900',
    '2. high': '41.7350',
    '3. low': '39.0000',
    '4. close': '41.6650',
    '5. volume': '7553856'
  },
  '2016-04-29': {
    '1. open': '42.3300',
    '2. high': '42.8850',
    '3. low': '39.3500',
    '4. close': '40.4900',
    '5. volume': '8135270'
  },
  '2016-03-31': {
    '1. open': '40.8000',
    '2. high': '43.4300',
    '3. low': '40.0700',
    '4. close': '43.0000',
    '5. volume': '8916453'
  },
  '2016-02-29': {
    '1. open': '38.7750',
    '2. high': '41.7950',
    '3. low': '37.2050',
    '4. close': '40.6750',
    '5. volume': '11370164'
  },
  '2016-01-29': {
    '1. open': '36.0950',
    '2. high': '38.8350',
    '3. low': '33.3100',
    '4. close': '38.6250',
    '5. volume': '10521639'
  },
  '2015-12-30': {
    '1. open': '39.4600',
    '2. high': '39.5000',
    '3. low': '35.8700',
    '4. close': '37.4000',
    '5. volume': '7831735'
  },
  '2015-11-30': {
    '1. open': '36.3850',
    '2. high': '39.2800',
    '3. low': '35.9400',
    '4. close': '39.2800',
    '5. volume': '8095372'
  },
  '2015-10-30': {
    '1. open': '35.9850',
    '2. high': '37.7900',
    '3. low': '33.2050',
    '4. close': '36.4650',
    '5. volume': '13563410'
  },
  '2015-09-30': {
    '1. open': '34.4500',
    '2. high': '35.1000',
    '3. low': '31.1600',
    '4. close': '34.0350',
    '5. volume': '12193032'
  },
  '2015-08-31': {
    '1. open': '38.4800',
    '2. high': '38.6350',
    '3. low': '32.3450',
    '4. close': '34.8000',
    '5. volume': '11574815'
  },
  '2015-07-31': {
    '1. open': '40.4400',
    '2. high': '41.8200',
    '3. low': '37.0050',
    '4. close': '38.5500',
    '5. volume': '9830649'
  },
  '2015-06-30': {
    '1. open': '44.4600',
    '2. high': '44.6800',
    '3. low': '39.7950',
    '4. close': '40.0100',
    '5. volume': '10413970'
  },
  '2015-05-29': {
    '1. open': '43.1450',
    '2. high': '45.1950',
    '3. low': '41.6900',
    '4. close': '44.2050',
    '5. volume': '6778057'
  },
  '2015-04-30': {
    '1. open': '44.8600',
    '2. high': '47.3850',
    '3. low': '42.2800',
    '4. close': '43.1750',
    '5. volume': '7516801'
  },
  '2015-03-31': {
    '1. open': '44.0150',
    '2. high': '45.5000',
    '3. low': '42.0200',
    '4. close': '45.0400',
    '5. volume': '9729354'
  },
  '2015-02-27': {
    '1. open': '40.2700',
    '2. high': '44.4900',
    '3. low': '39.1850',
    '4. close': '44.2000',
    '5. volume': '8422050'
  },
  '2015-01-30': {
    '1. open': '36.9800',
    '2. high': '41.3900',
    '3. low': '34.9800',
    '4. close': '40.2450',
    '5. volume': '9724558'
  },
  '2014-12-30': {
    '1. open': '38.1800',
    '2. high': '38.5000',
    '3. low': '33.5950',
    '4. close': '36.6000',
    '5. volume': '7593103'
  },
  '2014-11-28': {
    '1. open': '36.6500',
    '2. high': '38.6250',
    '3. low': '35.8600',
    '4. close': '38.4300',
    '5. volume': '5984035'
  },
  '2014-10-31': {
    '1. open': '34.5200',
    '2. high': '37.1450',
    '3. low': '31.2050',
    '4. close': '36.6950',
    '5. volume': '11757058'
  },
  '2014-09-30': {
    '1. open': '34.5100',
    '2. high': '34.9850',
    '3. low': '32.8500',
    '4. close': '34.5450',
    '5. volume': '7781874'
  },
  '2014-08-29': {
    '1. open': '33.6450',
    '2. high': '35.1350',
    '3. low': '31.3300',
    '4. close': '34.4300',
    '5. volume': '7083827'
  },
  '2014-07-31': {
    '1. open': '34.6450',
    '2. high': '35.6850',
    '3. low': '33.2550',
    '4. close': '33.6450',
    '5. volume': '7221532'
  },
  '2014-06-30': {
    '1. open': '31.6700',
    '2. high': '35.3600',
    '3. low': '31.2300',
    '4. close': '34.5800',
    '5. volume': '8023094'
  },
  '2014-05-30': {
    '1. open': '32.3500',
    '2. high': '33.2850',
    '3. low': '30.5250',
    '4. close': '31.5550',
    '5. volume': '7880976'
  },
  '2014-04-30': {
    '1. open': '33.4400',
    '2. high': '34.5900',
    '3. low': '30.3650',
    '4. close': '32.2450',
    '5. volume': '9299136'
  },
  '2014-03-31': {
    '1. open': '34.3000',
    '2. high': '35.6450',
    '3. low': '32.4450',
    '4. close': '33.1800',
    '5. volume': '8593259'
  },
  '2014-02-28': {
    '1. open': '34.8650',
    '2. high': '35.2250',
    '3. low': '31.7100',
    '4. close': '35.1400',
    '5. volume': '9234535'
  },
  '2014-01-31': {
    '1. open': '34.7900',
    '2. high': '36.6500',
    '3. low': '33.9450',
    '4. close': '34.7850',
    '5. volume': '7971868'
  },
  '2013-12-30': {
    '1. open': '34.3250',
    '2. high': '35.0050',
    '3. low': '32.4050',
    '4. close': '34.6000',
    '5. volume': '5634501'
  },
  '2013-11-29': {
    '1. open': '32.4800',
    '2. high': '34.7450',
    '3. low': '31.9500',
    '4. close': '34.3050',
    '5. volume': '7707540'
  },
  '2013-10-31': {
    '1. open': '30.4450',
    '2. high': '33.1800',
    '3. low': '30.1100',
    '4. close': '32.0500',
    '5. volume': '7019823'
  },
  '2013-09-30': {
    '1. open': '31.0400',
    '2. high': '31.5750',
    '3. low': '29.5350',
    '4. close': '30.3550',
    '5. volume': '8099436'
  },
  '2013-08-30': {
    '1. open': '31.2900',
    '2. high': '32.6400',
    '3. low': '30.3400',
    '4. close': '30.5900',
    '5. volume': '6972600'
  },
  '2013-07-31': {
    '1. open': '27.4150',
    '2. high': '32.5250',
    '3. low': '26.9000',
    '4. close': '31.0150',
    '5. volume': '7949429'
  },
  '2013-06-28': {
    '1. open': '28.0000',
    '2. high': '29.4300',
    '3. low': '26.7350',
    '4. close': '27.2300',
    '5. volume': '10477373'
  },
  '2013-05-31': {
    '1. open': '25.7050',
    '2. high': '29.1850',
    '3. low': '25.2500',
    '4. close': '28.1300',
    '5. volume': '10055866'
  },
  '2013-04-30': {
    '1. open': '26.3700',
    '2. high': '26.8850',
    '3. low': '24.4100',
    '4. close': '25.6850',
    '5. volume': '10329133'
  },
  '2013-03-28': {
    '1. open': '27.2650',
    '2. high': '27.4400',
    '3. low': '25.3200',
    '4. close': '25.7100',
    '5. volume': '7881525'
  },
  '2013-02-28': {
    '1. open': '26.7450',
    '2. high': '27.5400',
    '3. low': '24.6050',
    '4. close': '27.2750',
    '5. volume': '12442259'
  },
  '2013-01-31': {
    '1. open': '24.9350',
    '2. high': '28.1950',
    '3. low': '24.8500',
    '4. close': '26.7000',
    '5. volume': '8496494'
  },
  '2012-12-28': {
    '1. open': '25.0950',
    '2. high': '25.3650',
    '3. low': '24.3500',
    '4. close': '24.4700',
    '5. volume': '5724714'
  },
  '2012-11-30': {
    '1. open': '24.0000',
    '2. high': '25.3050',
    '3. low': '22.9350',
    '4. close': '25.1250',
    '5. volume': '7008398'
  },
  '2012-10-31': {
    '1. open': '23.5400',
    '2. high': '25.6800',
    '3. low': '23.5400',
    '4. close': '24.0900',
    '5. volume': '9205840'
  },
  '2012-09-28': {
    '1. open': '21.0050',
    '2. high': '24.6600',
    '3. low': '20.7900',
    '4. close': '23.5450',
    '5. volume': '9312457'
  },
  '2012-08-31': {
    '1. open': '22.0100',
    '2. high': '22.9450',
    '3. low': '20.5150',
    '4. close': '21.0000',
    '5. volume': '10282166'
  },
  '2012-07-31': {
    '1. open': '21.4000',
    '2. high': '23.4900',
    '3. low': '21.0150',
    '4. close': '21.9650',
    '5. volume': '13882681'
  },
  '2012-06-29': {
    '1. open': '20.6350',
    '2. high': '21.8900',
    '3. low': '19.4650',
    '4. close': '20.9700',
    '5. volume': '15302013'
  },
  '2012-05-31': {
    '1. open': '25.5000',
    '2. high': '25.5000',
    '3. low': '20.1350',
    '4. close': '20.5800',
    '5. volume': '15182845'
  },
  '2012-04-30': {
    '1. open': '25.9950',
    '2. high': '26.7900',
    '3. low': '23.9000',
    '4. close': '24.9300',
    '5. volume': '12748897'
  },
  '2012-03-30': {
    '1. open': '25.3600',
    '2. high': '26.5200',
    '3. low': '23.5900',
    '4. close': '25.8600',
    '5. volume': '11520408'
  },
  '2012-02-29': {
    '1. open': '24.5450',
    '2. high': '26.8300',
    '3. low': '24.3750',
    '4. close': '25.3600',
    '5. volume': '14366666'
  },
  '2012-01-31': {
    '1. open': '21.7500',
    '2. high': '25.1700',
    '3. low': '21.7500',
    '4. close': '24.5550',
    '5. volume': '14707564'
  },
  '2011-12-30': {
    '1. open': '21.9500',
    '2. high': '22.8000',
    '3. low': '19.4000',
    '4. close': '21.8500',
    '5. volume': '10562354'
  },
  '2011-11-30': {
    '1. open': '19.0050',
    '2. high': '22.2800',
    '3. low': '18.2850',
    '4. close': '21.9000',
    '5. volume': '14202601'
  },
  '2011-10-31': {
    '1. open': '16.7750',
    '2. high': '21.6750',
    '3. low': '15.6100',
    '4. close': '19.9650',
    '5. volume': '12578269'
  },
  '2011-09-30': {
    '1. open': '20.3200',
    '2. high': '20.9400',
    '3. low': '16.7000',
    '4. close': '17.6650',
    '5. volume': '18091580'
  },
  '2011-08-31': {
    '1. open': '24.0200',
    '2. high': '24.8000',
    '3. low': '16.5050',
    '4. close': '20.3800',
    '5. volume': '28721815'
  },
  '2011-07-29': {
    '1. open': '24.6750',
    '2. high': '25.7000',
    '3. low': '22.7700',
    '4. close': '24.2650',
    '5. volume': '17383926'
  },
  '2011-06-30': {
    '1. open': '23.5750',
    '2. high': '25.2450',
    '3. low': '22.6700',
    '4. close': '24.6850',
    '5. volume': '15793415'
  },
  '2011-05-31': {
    '1. open': '24.9300',
    '2. high': '25.1900',
    '3. low': '22.4250',
    '4. close': '23.3700',
    '5. volume': '16934108'
  },
  '2011-04-29': {
    '1. open': '23.4350',
    '2. high': '25.4400',
    '3. low': '22.9450',
    '4. close': '24.6900',
    '5. volume': '12425615'
  },
  '2011-03-31': {
    '1. open': '22.5000',
    '2. high': '23.4350',
    '3. low': '19.6600',
    '4. close': '23.2400',
    '5. volume': '18188468'
  },
  '2011-02-28': {
    '1. open': '21.0500',
    '2. high': '23.3200',
    '3. low': '20.3600',
    '4. close': '22.3950',
    '5. volume': '19597677'
  },
  '2011-01-31': {
    '1. open': '21.8600',
    '2. high': '22.7250',
    '3. low': '20.2500',
    '4. close': '20.8250',
    '5. volume': '15557295'
  },
  '2010-12-30': {
    '1. open': '18.6300',
    '2. high': '21.9850',
    '3. low': '18.6150',
    '4. close': '21.6300',
    '5. volume': '11701203'
  },
  '2010-11-30': {
    '1. open': '18.8150',
    '2. high': '19.7700',
    '3. low': '18.0850',
    '4. close': '18.5200',
    '5. volume': '13906202'
  },
  '2010-10-29': {
    '1. open': '18.4000',
    '2. high': '19.7100',
    '3. low': '17.9550',
    '4. close': '18.7900',
    '5. volume': '14925869'
  },
  '2010-09-30': {
    '1. open': '16.4300',
    '2. high': '18.6850',
    '3. low': '16.1300',
    '4. close': '18.3350',
    '5. volume': '13859252'
  },
  '2010-08-31': {
    '1. open': '17.6350',
    '2. high': '18.4350',
    '3. low': '15.2500',
    '4. close': '16.3900',
    '5. volume': '16375125'
  },
  '2010-07-30': {
    '1. open': '16.3150',
    '2. high': '18.9500',
    '3. low': '16.0000',
    '4. close': '17.3650',
    '5. volume': '17852895'
  },
  '2010-06-30': {
    '1. open': '16.4100',
    '2. high': '17.9900',
    '3. low': '15.5600',
    '4. close': '16.4150',
    '5. volume': '21750817'
  },
  '2010-05-31': {
    '1. open': '16.8000',
    '2. high': '17.4900',
    '3. low': '14.4850',
    '4. close': '16.4350',
    '5. volume': '26615415'
  },
  '2010-04-30': {
    '1. open': '17.3000',
    '2. high': '18.3250',
    '3. low': '16.3800',
    '4. close': '16.7400',
    '5. volume': '18135537'
  },
  '2010-03-31': {
    '1. open': '13.8000',
    '2. high': '17.6400',
    '3. low': '13.6250',
    '4. close': '17.1600',
    '5. volume': '27317138'
  },
  '2010-02-26': {
    '1. open': '14.7450',
    '2. high': '15.3100',
    '3. low': '13.4800',
    '4. close': '13.7200',
    '5. volume': '17637163'
  },
  '2010-01-29': {
    '1. open': '15.4900',
    '2. high': '16.4800',
    '3. low': '14.2050',
    '4. close': '14.8000',
    '5. volume': '21896959'
  },
  '2009-12-30': {
    '1. open': '14.1000',
    '2. high': '15.7800',
    '3. low': '14.1000',
    '4. close': '15.5600',
    '5. volume': '14944723'
  },
  '2009-11-30': {
    '1. open': '12.6700',
    '2. high': '15.3900',
    '3. low': '12.5800',
    '4. close': '14.0400',
    '5. volume': '19972681'
  },
  '2009-10-30': {
    '1. open': '14.0900',
    '2. high': '15.0900',
    '3. low': '12.5100',
    '4. close': '12.8300',
    '5. volume': '23470762'
  },
  '2009-09-30': {
    '1. open': '12.6000',
    '2. high': '15.0500',
    '3. low': '11.9400',
    '4. close': '14.2600',
    '5. volume': '25637544'
  },
  '2009-08-31': {
    '1. open': '11.6200',
    '2. high': '13.2000',
    '3. low': '11.4900',
    '4. close': '12.3600',
    '5. volume': '18593761'
  },
  '2009-07-31': {
    '1. open': '10.7900',
    '2. high': '11.6100',
    '3. low': '9.4300',
    '4. close': '11.4900',
    '5. volume': '18449723'
  },
  '2009-06-30': {
    '1. open': '11.2000',
    '2. high': '11.9500',
    '3. low': '9.9600',
    '4. close': '10.7900',
    '5. volume': '21592932'
  },
  '2009-05-29': {
    '1. open': '10.1000',
    '2. high': '11.7600',
    '3. low': '9.8300',
    '4. close': '11.0000',
    '5. volume': '27663398'
  },
  '2009-04-30': {
    '1. open': '7.9400',
    '2. high': '10.2000',
    '3. low': '7.6700',
    '4. close': '9.9600',
    '5. volume': '32292238'
  },
  '2009-03-31': {
    '1. open': '8.3200',
    '2. high': '8.9000',
    '3. low': '7.2000',
    '4. close': '8.0300',
    '5. volume': '36364108'
  },
  '2009-02-27': {
    '1. open': '8.8800',
    '2. high': '10.7400',
    '3. low': '7.8600',
    '4. close': '8.5500',
    '5. volume': '25006860'
  },
  '2009-01-30': {
    '1. open': '12.6900',
    '2. high': '13.8500',
    '3. low': '8.0400',
    '4. close': '9.0300',
    '5. volume': '26205422'
  },
  '2008-12-30': {
    '1. open': '12.0900',
    '2. high': '12.6500',
    '3. low': '10.2900',
    '4. close': '12.1500',
    '5. volume': '17176738'
  },
  '2008-11-28': {
    '1. open': '11.2900',
    '2. high': '13.5700',
    '3. low': '9.4200',
    '4. close': '12.1500',
    '5. volume': '23259421'
  },
  '2008-10-31': {
    '1. open': '13.8100',
    '2. high': '14.8000',
    '3. low': '9.2700',
    '4. close': '11.3300',
    '5. volume': '59985901'
  },
  '2008-09-30': {
    '1. open': '21.3700',
    '2. high': '21.8000',
    '3. low': '13.2600',
    '4. close': '13.6600',
    '5. volume': '36545885'
  },
  '2008-08-29': {
    '1. open': '21.1200',
    '2. high': '21.7500',
    '3. low': '19.5000',
    '4. close': '21.5000',
    '5. volume': '16659361'
  },
  '2008-07-31': {
    '1. open': '22.3600',
    '2. high': '22.6700',
    '3. low': '19.8200',
    '4. close': '21.1900',
    '5. volume': '26671453'
  },
  '2008-06-30': {
    '1. open': '24.8200',
    '2. high': '25.1200',
    '3. low': '21.8200',
    '4. close': '22.4400',
    '5. volume': '20213907'
  },
  '2008-05-30': {
    '1. open': '24.2300',
    '2. high': '26.9500',
    '3. low': '23.9600',
    '4. close': '25.0300',
    '5. volume': '22322869'
  },
  '2008-04-30': {
    '1. open': '21.1100',
    '2. high': '25.3000',
    '3. low': '20.7500',
    '4. close': '23.7500',
    '5. volume': '28587315'
  },
  '2008-03-31': {
    '1. open': '20.6500',
    '2. high': '21.8900',
    '3. low': '19.2300',
    '4. close': '21.3000',
    '5. volume': '25436976'
  },
  '2008-02-29': {
    '1. open': '20.9800',
    '2. high': '22.1700',
    '3. low': '19.8600',
    '4. close': '21.5900',
    '5. volume': '27256325'
  },
  '2008-01-31': {
    '1. open': '23.4900',
    '2. high': '23.9400',
    '3. low': '18.1100',
    '4. close': '20.6000',
    '5. volume': '51411357'
  },
  '2007-12-28': {
    '1. open': '24.9900',
    '2. high': '25.9200',
    '3. low': '22.9700',
    '4. close': '23.8000',
    '5. volume': '21273921'
  },
  '2007-11-30': {
    '1. open': '26.0500',
    '2. high': '27.0200',
    '3. low': '19.4000',
    '4. close': '24.7600',
    '5. volume': '52341654'
  },
  '2007-10-31': {
    '1. open': '24.6700',
    '2. high': '28.3400',
    '3. low': '24.6700',
    '4. close': '25.9000',
    '5. volume': '33321769'
  },
  '2007-09-28': {
    '1. open': '23.9800',
    '2. high': '25.8000',
    '3. low': '22.2000',
    '4. close': '24.6700',
    '5. volume': '28291335'
  },
  '2007-08-31': {
    '1. open': '23.6900',
    '2. high': '24.9500',
    '3. low': '20.2700',
    '4. close': '23.7000',
    '5. volume': '37541474'
  },
  '2007-07-31': {
    '1. open': '25.5600',
    '2. high': '27.5400',
    '3. low': '21.5100',
    '4. close': '24.1600',
    '5. volume': '27099240'
  },
  '2007-06-29': {
    '1. open': '23.9100',
    '2. high': '26.0000',
    '3. low': '21.4000',
    '4. close': '25.8100',
    '5. volume': '32849214'
  },
  '2007-05-31': {
    '1. open': '21.7100',
    '2. high': '24.0900',
    '3. low': '21.2600',
    '4. close': '23.9700',
    '5. volume': '25615935'
  },
  '2007-04-30': {
    '1. open': '20.7700',
    '2. high': '21.8000',
    '3. low': '19.7100',
    '4. close': '21.6000',
    '5. volume': '35685148'
  },
  '2007-03-30': {
    '1. open': '17.6000',
    '2. high': '20.8400',
    '3. low': '15.7000',
    '4. close': '20.7200',
    '5. volume': '48569542'
  },
  '2007-02-28': {
    '1. open': '18.0100',
    '2. high': '19.7600',
    '3. low': '16.3000',
    '4. close': '17.4000',
    '5. volume': '32429252'
  },
  '2007-01-31': {
    '1. open': '17.1000',
    '2. high': '18.1500',
    '3. low': '15.7300',
    '4. close': '17.8000',
    '5. volume': '34080585'
  },
  '2006-12-29': {
    '1. open': '14.9500',
    '2. high': '17.0800',
    '3. low': '14.9100',
    '4. close': '17.0700',
    '5. volume': '18387317'
  },
  '2006-11-30': {
    '1. open': '13.9900',
    '2. high': '15.9400',
    '3. low': '13.9900',
    '4. close': '14.9900',
    '5. volume': '22075115'
  },
  '2006-10-31': {
    '1. open': '14.1600',
    '2. high': '14.4400',
    '3. low': '13.6700',
    '4. close': '14.0700',
    '5. volume': '16011911'
  },
  '2006-09-29': {
    '1. open': '12.7900',
    '2. high': '14.6500',
    '3. low': '12.6600',
    '4. close': '14.2200',
    '5. volume': '17253439'
  },
  '2006-08-31': {
    '1. open': '12.9500',
    '2. high': '13.1500',
    '3. low': '11.8200',
    '4. close': '12.7600',
    '5. volume': '17450964'
  },
  '2006-07-31': {
    '1. open': '13.4100',
    '2. high': '13.9500',
    '3. low': '11.2100',
    '4. close': '12.8100',
    '5. volume': '23603858'
  },
  '2006-06-30': {
    '1. open': '13.7200',
    '2. high': '14.0400',
    '3. low': '11.1500',
    '4. close': '13.4000',
    '5. volume': '22335310'
  },
  '2006-05-31': {
    '1. open': '15.0300',
    '2. high': '16.4400',
    '3. low': '12.3500',
    '4. close': '13.6000',
    '5. volume': '40681821'
  },
  '2006-04-28': {
    '1. open': '13.8600',
    '2. high': '15.1000',
    '3. low': '13.3100',
    '4. close': '15.0000',
    '5. volume': '20482213'
  },
  '2006-03-31': {
    '1. open': '13.7500',
    '2. high': '15.0800',
    '3. low': '12.7100',
    '4. close': '13.8800',
    '5. volume': '24624188'
  },
  '2006-02-28': {
    '1. open': '12.7500',
    '2. high': '14.3000',
    '3. low': '12.0200',
    '4. close': '13.7600',
    '5. volume': '23739233'
  },
  '2006-01-31': {
    '1. open': '10.5100',
    '2. high': '13.1500',
    '3. low': '10.5100',
    '4. close': '12.7000',
    '5. volume': '24822492'
  },
  '2005-12-30': {
    '1. open': '9.8400',
    '2. high': '10.6600',
    '3. low': '9.8100',
    '4. close': '10.5000',
    '5. volume': '13930617'
  },
  '2005-11-30': {
    '1. open': '9.4000',
    '2. high': '9.9300',
    '3. low': '8.9700',
    '4. close': '9.8100',
    '5. volume': '10209274'
  },
  '2005-10-31': {
    '1. open': '9.5000',
    '2. high': '9.9200',
    '3. low': '8.6700',
    '4. close': '9.5000',
    '5. volume': '12647851'
  },
  '2005-09-30': {
    '1. open': '9.6500',
    '2. high': '10.1900',
    '3. low': '9.3800',
    '4. close': '9.4900',
    '5. volume': '7624427'
  },
  '2005-08-31': {
    '1. open': '11.2400',
    '2. high': '11.2400',
    '3. low': '9.5200',
    '4. close': '9.6000',
    '5. volume': '15476603'
  },
  '2005-07-29': {
    '1. open': '9.9200',
    '2. high': '11.2900',
    '3. low': '9.6300',
    '4. close': '11.1600',
    '5. volume': '9440027'
  },
  '2005-06-30': {
    '1. open': '9.2400',
    '2. high': '10.1500',
    '3. low': '9.1400',
    '4. close': '9.9800',
    '5. volume': '9215640'
  },
  '2005-05-31': {
    '1. open': '8.6000',
    '2. high': '9.3000',
    '3. low': '8.4300',
    '4. close': '9.2400',
    '5. volume': '7910055'
  },
  '2005-04-29': {
    '1. open': '9.8500',
    '2. high': '10.1300',
    '3. low': '8.2600',
    '4. close': '8.5800',
    '5. volume': '9820745'
  },
  '2005-03-31': {
    '1. open': '10.3900',
    '2. high': '10.7900',
    '3. low': '9.6800',
    '4. close': '9.8700',
    '5. volume': '9046547'
  },
  '2005-02-28': {
    '1. open': '9.2400',
    '2. high': '10.3900',
    '3. low': '9.1100',
    '4. close': '10.3500',
    '5. volume': '9436860'
  },
  '2005-01-31': {
    '1. open': '8.6100',
    '2. high': '9.6600',
    '3. low': '8.6100',
    '4. close': '9.2000',
    '5. volume': '11649133'
  },
  '2004-12-31': {
    '1. open': '8.9200',
    '2. high': '9.0500',
    '3. low': '8.3300',
    '4. close': '8.6900',
    '5. volume': '8829625'
  },
  '2004-11-30': {
    '1. open': '9.2000',
    '2. high': '9.6000',
    '3. low': '8.7000',
    '4. close': '8.9300',
    '5. volume': '11109489'
  },
  '2004-10-29': {
    '1. open': '9.9500',
    '2. high': '10.1500',
    '3. low': '8.6500',
    '4. close': '9.2800',
    '5. volume': '12269390'
  },
  '2004-09-30': {
    '1. open': '10.4200',
    '2. high': '10.7100',
    '3. low': '9.8000',
    '4. close': '9.9200',
    '5. volume': '11971689'
  },
  '2004-08-31': {
    '1. open': '10.3800',
    '2. high': '10.9400',
    '3. low': '9.8000',
    '4. close': '10.4700',
    '5. volume': '7275673'
  },
  '2004-07-30': {
    '1. open': '10.4100',
    '2. high': '10.5500',
    '3. low': '9.7000',
    '4. close': '10.4100',
    '5. volume': '8109298'
  },
  '2004-06-30': {
    '1. open': '10.6800',
    '2. high': '11.0100',
    '3. low': '10.2500',
    '4. close': '10.3800',
    '5. volume': '9327423'
  },
  '2004-05-31': {
    '1. open': '12.2000',
    '2. high': '12.6400',
    '3. low': '10.6000',
    '4. close': '10.7800',
    '5. volume': '10259156'
  },
  '2004-04-30': {
    '1. open': '11.4500',
    '2. high': '12.7500',
    '3. low': '11.3600',
    '4. close': '12.3000',
    '5. volume': '9528568'
  },
  '2004-03-31': {
    '1. open': '12.1600',
    '2. high': '12.5000',
    '3. low': '10.2200',
    '4. close': '11.3800',
    '5. volume': '9657157'
  },
  '2004-02-27': {
    '1. open': '12.5500',
    '2. high': '13.2000',
    '3. low': '12.0000',
    '4. close': '12.1700',
    '5. volume': '7456862'
  },
  '2004-01-30': {
    '1. open': '11.1000',
    '2. high': '13.0900',
    '3. low': '10.9500',
    '4. close': '12.6000',
    '5. volume': '8517901'
  },
  '2003-12-31': {
    '1. open': '11.2000',
    '2. high': '11.3100',
    '3. low': '10.6100',
    '4. close': '11.1000',
    '5. volume': '4661913'
  },
  '2003-11-28': {
    '1. open': '10.8500',
    '2. high': '11.3900',
    '3. low': '10.0600',
    '4. close': '11.1300',
    '5. volume': '7339660'
  },
  '2003-10-31': {
    '1. open': '10.2100',
    '2. high': '10.8700',
    '3. low': '9.6300',
    '4. close': '10.8700',
    '5. volume': '14081894'
  },
  '2003-09-30': {
    '1. open': '9.2700',
    '2. high': '10.6500',
    '3. low': '8.6000',
    '4. close': '10.1600',
    '5. volume': '9718506'
  },
  '2003-08-29': {
    '1. open': '9.1700',
    '2. high': '9.3900',
    '3. low': '8.0000',
    '4. close': '9.1500',
    '5. volume': '10363237'
  },
  '2003-07-31': {
    '1. open': '8.8900',
    '2. high': '9.4800',
    '3. low': '8.5100',
    '4. close': '9.2500',
    '5. volume': '6918942'
  },
  '2003-06-30': {
    '1. open': '8.9000',
    '2. high': '9.2600',
    '3. low': '8.0800',
    '4. close': '8.8200',
    '5. volume': '10100204'
  },
  '2003-05-30': {
    '1. open': '8.1500',
    '2. high': '8.8900',
    '3. low': '7.8100',
    '4. close': '8.8300',
    '5. volume': '10302112'
  },
  '2003-04-30': {
    '1. open': '5.0400',
    '2. high': '8.9400',
    '3. low': '4.9900',
    '4. close': '8.1600',
    '5. volume': '15209357'
  },
  '2003-03-31': {
    '1. open': '5.3400',
    '2. high': '5.6800',
    '3. low': '4.8700',
    '4. close': '4.9700',
    '5. volume': '3101045'
  },
  '2003-02-28': {
    '1. open': '6.0600',
    '2. high': '6.2100',
    '3. low': '5.2000',
    '4. close': '5.3100',
    '5. volume': '3100284'
  },
  '2003-01-31': {
    '1. open': '5.9000',
    '2. high': '6.6500',
    '3. low': '5.9000',
    '4. close': '6.1000',
    '5. volume': '2751971'
  },
  '2002-12-31': {
    '1. open': '7.5100',
    '2. high': '7.7500',
    '3. low': '5.5500',
    '4. close': '5.9000',
    '5. volume': '2688351'
  },
  '2002-11-29': {
    '1. open': '6.5000',
    '2. high': '7.5500',
    '3. low': '6.0600',
    '4. close': '7.5500',
    '5. volume': '3001765'
  },
  '2002-10-31': {
    '1. open': '6.5200',
    '2. high': '7.2400',
    '3. low': '5.5200',
    '4. close': '6.4300',
    '5. volume': '4272013'
  },
  '2002-09-30': {
    '1. open': '7.6000',
    '2. high': '7.8000',
    '3. low': '6.4000',
    '4. close': '6.5100',
    '5. volume': '2956656'
  },
  '2002-08-30': {
    '1. open': '6.6100',
    '2. high': '8.1200',
    '3. low': '5.7000',
    '4. close': '7.5400',
    '5. volume': '3080031'
  },
  '2002-07-31': {
    '1. open': '9.0800',
    '2. high': '9.2700',
    '3. low': '5.6600',
    '4. close': '6.8800',
    '5. volume': '6122927'
  },
  '2002-06-28': {
    '1. open': '10.9300',
    '2. high': '11.3000',
    '3. low': '8.8000',
    '4. close': '9.0800',
    '5. volume': '3006109'
  },
  '2002-05-31': {
    '1. open': '10.8500',
    '2. high': '11.6300',
    '3. low': '10.4900',
    '4. close': '10.9300',
    '5. volume': '4012962'
  },
  '2002-04-30': {
    '1. open': '11.6400',
    '2. high': '11.6400',
    '3. low': '10.4800',
    '4. close': '10.8000',
    '5. volume': '4382848'
  },
  '2002-03-29': {
    '1. open': '11.6400',
    '2. high': '14.0200',
    '3. low': '10.9000',
    '4. close': '11.6400',
    '5. volume': '9009075'
  },
  '2002-02-28': {
    '1. open': '11.7600',
    '2. high': '12.0000',
    '3. low': '10.0000',
    '4. close': '11.7000',
    '5. volume': '6197092'
  },
  '2002-01-31': {
    '1. open': '9.3500',
    '2. high': '12.2000',
    '3. low': '9.3500',
    '4. close': '11.7900',
    '5. volume': '5484803'
  },
  '2001-12-31': {
    '1. open': '9.3900',
    '2. high': '9.8500',
    '3. low': '9.0100',
    '4. close': '9.3500',
    '5. volume': '3506145'
  },
  '2001-11-30': {
    '1. open': '8.5000',
    '2. high': '10.0000',
    '3. low': '8.3500',
    '4. close': '9.2500',
    '5. volume': '3460746'
  },
  '2001-10-31': {
    '1. open': '6.4200',
    '2. high': '9.7000',
    '3. low': '6.4100',
    '4. close': '8.4900',
    '5. volume': '8955625'
  },
  '2001-09-28': {
    '1. open': '8.2000',
    '2. high': '8.6000',
    '3. low': '4.3600',
    '4. close': '6.1700',
    '5. volume': '8578031'
  },
  '2001-08-31': {
    '1. open': '12.3700',
    '2. high': '12.9500',
    '3. low': '7.5000',
    '4. close': '8.1900',
    '5. volume': '9267608'
  },
  '2001-07-31': {
    '1. open': '12.0900',
    '2. high': '12.6000',
    '3. low': '11.6000',
    '4. close': '12.6000',
    '5. volume': '2691920'
  },
  '2001-06-29': {
    '1. open': '13.5900',
    '2. high': '13.5900',
    '3. low': '12.0000',
    '4. close': '12.0400',
    '5. volume': '3127715'
  },
  '2001-05-31': {
    '1. open': '12.4200',
    '2. high': '14.2500',
    '3. low': '11.7600',
    '4. close': '13.5000',
    '5. volume': '4154554'
  },
  '2001-04-30': {
    '1. open': '12.5700',
    '2. high': '13.3900',
    '3. low': '11.2100',
    '4. close': '12.4200',
    '5. volume': '3696079'
  },
  '2001-03-30': {
    '1. open': '14.6000',
    '2. high': '14.7500',
    '3. low': '11.2000',
    '4. close': '12.6200',
    '5. volume': '4602612'
  },
  '2001-02-28': {
    '1. open': '14.9000',
    '2. high': '15.0300',
    '3. low': '14.1500',
    '4. close': '14.6000',
    '5. volume': '2616584'
  },
  '2001-01-31': {
    '1. open': '12.4200',
    '2. high': '15.1900',
    '3. low': '12.4200',
    '4. close': '14.9000',
    '5. volume': '2802038'
  },
  '2000-12-29': {
    '1. open': '13.3000',
    '2. high': '15.3000',
    '3. low': '11.8400',
    '4. close': '12.4200',
    '5. volume': '3906700'
  },
  '2000-11-30': {
    '1. open': '12.6700',
    '2. high': '14.2500',
    '3. low': '12.5100',
    '4. close': '13.0500',
    '5. volume': '4429870'
  },
  '2000-10-31': {
    '1. open': '12.2000',
    '2. high': '13.1000',
    '3. low': '11.5000',
    '4. close': '11.8500',
    '5. volume': '2166264'
  },
  '2000-09-29': {
    '1. open': '13.6000',
    '2. high': '13.6000',
    '3. low': '11.3000',
    '4. close': '12.0000',
    '5. volume': '3156574'
  },
  '2000-08-31': {
    '1. open': '13.9100',
    '2. high': '15.0000',
    '3. low': '13.5000',
    '4. close': '13.6000',
    '5. volume': '3175198'
  },
  '2000-07-31': {
    '1. open': '14.5000',
    '2. high': '15.9000',
    '3. low': '13.7200',
    '4. close': '13.9100',
    '5. volume': '3089148'
  },
  '2000-06-30': {
    '1. open': '16.0800',
    '2. high': '16.1500',
    '3. low': '14.0200',
    '4. close': '14.5500',
    '5. volume': '5218759'
  },
  '2000-05-31': {
    '1. open': '17.0200',
    '2. high': '17.7400',
    '3. low': '15.8500',
    '4. close': '16.0000',
    '5. volume': '4563521'
  },
  '2000-04-28': {
    '1. open': '19.1500',
    '2. high': '19.7400',
    '3. low': '16.0800',
    '4. close': '17.0200',
    '5. volume': '4792110'
  },
  '2000-03-31': {
    '1. open': '19.9000',
    '2. high': '21.1000',
    '3. low': '17.9100',
    '4. close': '19.2500',
    '5. volume': '6004521'
  },
  '2000-02-29': {
    '1. open': '20.4000',
    '2. high': '21.5000',
    '3. low': '17.7000',
    '4. close': '19.7000',
    '5. volume': '10917180'
  }
};

// tslint:disable:max-line-length
export const geaCompany: Company = {
  id: 1054,
  name: 'GEA Group AG',
  country: Country.Deutschland,
  city: 'Düsseldorf',
  url: 'https://www.gea.com/',
  description: 'Die GEA Group Aktiengesellschaft (kurz GEA Group, bis 2000 Metallgesellschaft, 2000 bis 2005 mg technologies) ist ein börsennotierter Industriekonzern (MDAX) mit Sitz in Düsseldorf. Zu dem Konzern gehören weltweit mehr als 250 operative Tochtergesellschaften, die Prozesstechnik und Komponenten für unterschiedliche Produktionsprozesse vor allem in den Industriebereichen Nahrungsmittel und Getränke liefern. GEA steht für: Global Engineering Alliance.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/GEA_Group',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/3/3e/GEA_Group_2010_logo.svg/500px-GEA_Group_2010_logo.svg.png',
  products: [],
  industries: [171410, 171411],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE0006602006',
  wkn: '660200',
  symbol: 'G1A.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Systemanbieter', 'Spezialmaschinenbau', 'Anlagenbau']
};
// tslint:enable:max-line-length

