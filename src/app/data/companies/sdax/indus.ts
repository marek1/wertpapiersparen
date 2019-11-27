import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 1.50, yield: 3.83}, {year: 2017, rate: 1.50}, {
    year: 2016,
    rate: 1.35
  }, {year: 2015, rate: 1.20, yield: 2.70}, {year: 2014, rate: 1.20, yield: 3.15}, {year: 2013, rate: 1.10, yield: 3.77}, {
    year: 2012,
    rate: 1.00,
    yield: 4.94
  }, {year: 2011, rate: 1.00, yield: 5.30}, {year: 2010, rate: 0.90, yield: 4.09}, {year: 2009, rate: 0.50, yield: 4.17}, {
    year: 2008,
    rate: 0.80,
    yield: 5.98
  }, {year: 2007, rate: 1.20, yield: 4.95}, {year: 2006, rate: 1.20, yield: 4.05}, {year: 2005, rate: 1.20, yield: 4.07}, {
    year: 2004,
    rate: 1.18,
    yield: 5.37
  }, {year: 2003, rate: 1.18, yield: 5.76}, {year: 2002, rate: 1.15, yield: 6.66}, {year: 2001, rate: 1.15, yield: 5.72}, {
    year: 2000,
    rate: 1.12,
    yield: 4.67
  }
];
const prices = {
  '2019-11-27': {
    '1. open': '34.2500',
    '2. high': '38.8500',
    '3. low': '34.0500',
    '4. close': '38.5000',
    '5. volume': '256454'
  },
  '2019-10-31': {
    '1. open': '37.5500',
    '2. high': '38.0500',
    '3. low': '33.5500',
    '4. close': '34.2000',
    '5. volume': '364122'
  },
  '2019-09-30': {
    '1. open': '35.0500',
    '2. high': '39.4500',
    '3. low': '34.1000',
    '4. close': '37.5000',
    '5. volume': '239334'
  },
  '2019-08-30': {
    '1. open': '36.0500',
    '2. high': '36.3500',
    '3. low': '31.3000',
    '4. close': '34.8000',
    '5. volume': '392986'
  },
  '2019-07-31': {
    '1. open': '39.6000',
    '2. high': '40.2500',
    '3. low': '34.1500',
    '4. close': '35.9500',
    '5. volume': '383259'
  },
  '2019-06-28': {
    '1. open': '39.3500',
    '2. high': '40.6000',
    '3. low': '38.0500',
    '4. close': '39.5000',
    '5. volume': '333394'
  },
  '2019-05-31': {
    '1. open': '47.5000',
    '2. high': '47.6000',
    '3. low': '39.0000',
    '4. close': '39.5500',
    '5. volume': '554922'
  },
  '2019-04-30': {
    '1. open': '42.8000',
    '2. high': '47.6000',
    '3. low': '42.8000',
    '4. close': '47.4500',
    '5. volume': '300115'
  },
  '2019-03-29': {
    '1. open': '41.9500',
    '2. high': '45.9000',
    '3. low': '41.6000',
    '4. close': '42.9500',
    '5. volume': '336518'
  },
  '2019-02-28': {
    '1. open': '43.4000',
    '2. high': '44.0000',
    '3. low': '41.1500',
    '4. close': '41.8500',
    '5. volume': '529032'
  },
  '2019-01-31': {
    '1. open': '39.2000',
    '2. high': '44.8000',
    '3. low': '38.1000',
    '4. close': '43.3000',
    '5. volume': '402035'
  },
  '2018-12-28': {
    '1. open': '41.4000',
    '2. high': '42.2000',
    '3. low': '37.4000',
    '4. close': '39.0000',
    '5. volume': '584228'
  },
  '2018-11-30': {
    '1. open': '48.2500',
    '2. high': '49.8500',
    '3. low': '40.1000',
    '4. close': '40.5500',
    '5. volume': '609956'
  },
  '2018-10-31': {
    '1. open': '53.8000',
    '2. high': '53.8000',
    '3. low': '45.8000',
    '4. close': '48.2500',
    '5. volume': '493470'
  },
  '2018-09-28': {
    '1. open': '55.6000',
    '2. high': '55.6000',
    '3. low': '52.0000',
    '4. close': '53.5000',
    '5. volume': '373376'
  },
  '2018-08-31': {
    '1. open': '53.9000',
    '2. high': '56.9000',
    '3. low': '52.6000',
    '4. close': '55.5000',
    '5. volume': '270957'
  },
  '2018-07-31': {
    '1. open': '53.1000',
    '2. high': '54.7000',
    '3. low': '51.9000',
    '4. close': '53.7000',
    '5. volume': '341460'
  },
  '2018-06-29': {
    '1. open': '55.9000',
    '2. high': '57.0000',
    '3. low': '52.5000',
    '4. close': '53.4000',
    '5. volume': '418131'
  },
  '2018-05-31': {
    '1. open': '59.3000',
    '2. high': '61.2000',
    '3. low': '55.4000',
    '4. close': '56.1000',
    '5. volume': '382775'
  },
  '2018-04-30': {
    '1. open': '56.5000',
    '2. high': '60.2000',
    '3. low': '55.6000',
    '4. close': '59.4000',
    '5. volume': '405685'
  },
  '2018-03-29': {
    '1. open': '61.0000',
    '2. high': '61.0000',
    '3. low': '53.6000',
    '4. close': '56.9000',
    '5. volume': '502443'
  },
  '2018-02-28': {
    '1. open': '64.1000',
    '2. high': '64.2000',
    '3. low': '57.8000',
    '4. close': '61.3000',
    '5. volume': '466352'
  },
  '2018-01-31': {
    '1. open': '59.6000',
    '2. high': '66.2000',
    '3. low': '59.0000',
    '4. close': '63.9000',
    '5. volume': '441137'
  },
  '2017-12-29': {
    '1. open': '62.1000',
    '2. high': '62.1000',
    '3. low': '59.3600',
    '4. close': '59.5000',
    '5. volume': '355073'
  },
  '2017-11-30': {
    '1. open': '60.1700',
    '2. high': '64.8900',
    '3. low': '58.9400',
    '4. close': '62.1000',
    '5. volume': '626772'
  },
  '2017-10-31': {
    '1. open': '62.8500',
    '2. high': '64.7700',
    '3. low': '53.9000',
    '4. close': '60.1300',
    '5. volume': '785667'
  },
  '2017-09-29': {
    '1. open': '63.5500',
    '2. high': '64.3800',
    '3. low': '62.1100',
    '4. close': '62.5700',
    '5. volume': '376417'
  },
  '2017-08-31': {
    '1. open': '63.2500',
    '2. high': '64.9500',
    '3. low': '61.0400',
    '4. close': '63.3600',
    '5. volume': '569144'
  },
  '2017-07-31': {
    '1. open': '62.2900',
    '2. high': '64.4400',
    '3. low': '61.1800',
    '4. close': '63.2500',
    '5. volume': '467849'
  },
  '2017-06-30': {
    '1. open': '62.8600',
    '2. high': '65.2900',
    '3. low': '61.3900',
    '4. close': '62.1000',
    '5. volume': '574852'
  },
  '2017-05-31': {
    '1. open': '61.5500',
    '2. high': '64.7500',
    '3. low': '60.5300',
    '4. close': '62.7000',
    '5. volume': '613515'
  },
  '2017-04-28': {
    '1. open': '61.0100',
    '2. high': '62.0000',
    '3. low': '59.8100',
    '4. close': '61.3300',
    '5. volume': '382501'
  },
  '2017-03-31': {
    '1. open': '58.3500',
    '2. high': '61.5800',
    '3. low': '56.2500',
    '4. close': '60.5700',
    '5. volume': '909659'
  },
  '2017-02-28': {
    '1. open': '52.9300',
    '2. high': '58.3500',
    '3. low': '52.8600',
    '4. close': '58.2000',
    '5. volume': '709035'
  },
  '2017-01-31': {
    '1. open': '51.6500',
    '2. high': '53.6300',
    '3. low': '50.2700',
    '4. close': '52.7700',
    '5. volume': '524093'
  },
  '2016-12-30': {
    '1. open': '51.5500',
    '2. high': '52.9400',
    '3. low': '50.0800',
    '4. close': '51.6400',
    '5. volume': '576228'
  },
  '2016-11-30': {
    '1. open': '53.7900',
    '2. high': '54.3900',
    '3. low': '47.3700',
    '4. close': '51.6600',
    '5. volume': '814415'
  },
  '2016-10-31': {
    '1. open': '50.7600',
    '2. high': '54.4500',
    '3. low': '50.3800',
    '4. close': '53.7100',
    '5. volume': '534258'
  },
  '2016-09-30': {
    '1. open': '48.6600',
    '2. high': '50.6900',
    '3. low': '47.6050',
    '4. close': '50.6900',
    '5. volume': '587713'
  },
  '2016-08-31': {
    '1. open': '44.4000',
    '2. high': '49.0000',
    '3. low': '42.2100',
    '4. close': '48.3550',
    '5. volume': '714483'
  },
  '2016-07-29': {
    '1. open': '42.1000',
    '2. high': '44.6500',
    '3. low': '40.5700',
    '4. close': '44.3250',
    '5. volume': '414830'
  },
  '2016-06-30': {
    '1. open': '47.0100',
    '2. high': '47.9000',
    '3. low': '39.1000',
    '4. close': '41.8000',
    '5. volume': '844967'
  },
  '2016-05-31': {
    '1. open': '44.7450',
    '2. high': '47.7950',
    '3. low': '43.5000',
    '4. close': '47.1100',
    '5. volume': '628617'
  },
  '2016-04-29': {
    '1. open': '43.2750',
    '2. high': '45.3550',
    '3. low': '42.1050',
    '4. close': '44.4600',
    '5. volume': '466523'
  },
  '2016-03-31': {
    '1. open': '40.1900',
    '2. high': '43.9500',
    '3. low': '39.2000',
    '4. close': '43.3400',
    '5. volume': '601993'
  },
  '2016-02-29': {
    '1. open': '42.1700',
    '2. high': '42.8000',
    '3. low': '36.4250',
    '4. close': '40.0450',
    '5. volume': '784593'
  },
  '2016-01-29': {
    '1. open': '43.5000',
    '2. high': '43.5000',
    '3. low': '39.1600',
    '4. close': '41.9450',
    '5. volume': '784852'
  },
  '2015-12-30': {
    '1. open': '45.2000',
    '2. high': '45.8000',
    '3. low': '41.6050',
    '4. close': '44.5100',
    '5. volume': '634161'
  },
  '2015-11-30': {
    '1. open': '42.3300',
    '2. high': '45.4000',
    '3. low': '41.0100',
    '4. close': '44.9800',
    '5. volume': '887814'
  },
  '2015-10-30': {
    '1. open': '40.9450',
    '2. high': '43.4800',
    '3. low': '36.6300',
    '4. close': '42.3650',
    '5. volume': '1009877'
  },
  '2015-09-30': {
    '1. open': '41.1100',
    '2. high': '42.3500',
    '3. low': '38.8950',
    '4. close': '39.9400',
    '5. volume': '727489'
  },
  '2015-08-31': {
    '1. open': '45.2000',
    '2. high': '47.7300',
    '3. low': '35.6000',
    '4. close': '41.7750',
    '5. volume': '1200632'
  },
  '2015-07-31': {
    '1. open': '45.6750',
    '2. high': '47.5700',
    '3. low': '43.6600',
    '4. close': '44.8700',
    '5. volume': '638032'
  },
  '2015-06-30': {
    '1. open': '49.5000',
    '2. high': '50.2000',
    '3. low': '43.0750',
    '4. close': '45.1900',
    '5. volume': '1082334'
  },
  '2015-05-29': {
    '1. open': '47.0000',
    '2. high': '50.5500',
    '3. low': '46.4600',
    '4. close': '48.0700',
    '5. volume': '849561'
  },
  '2015-04-30': {
    '1. open': '46.3000',
    '2. high': '50.7800',
    '3. low': '46.0000',
    '4. close': '46.8550',
    '5. volume': '1206735'
  },
  '2015-03-31': {
    '1. open': '38.0000',
    '2. high': '47.2250',
    '3. low': '37.1000',
    '4. close': '46.3800',
    '5. volume': '1575069'
  },
  '2015-02-27': {
    '1. open': '38.6000',
    '2. high': '39.3800',
    '3. low': '36.2500',
    '4. close': '37.9050',
    '5. volume': '903446'
  },
  '2015-01-30': {
    '1. open': '38.1000',
    '2. high': '40.3450',
    '3. low': '37.2050',
    '4. close': '38.7100',
    '5. volume': '668809'
  },
  '2014-12-30': {
    '1. open': '39.0700',
    '2. high': '40.0000',
    '3. low': '36.0500',
    '4. close': '38.1100',
    '5. volume': '738534'
  },
  '2014-11-28': {
    '1. open': '36.5950',
    '2. high': '40.8000',
    '3. low': '35.9500',
    '4. close': '39.5450',
    '5. volume': '802428'
  },
  '2014-10-31': {
    '1. open': '38.4300',
    '2. high': '39.3950',
    '3. low': '32.0150',
    '4. close': '36.5950',
    '5. volume': '1480576'
  },
  '2014-09-30': {
    '1. open': '39.7500',
    '2. high': '40.8000',
    '3. low': '36.4200',
    '4. close': '38.4900',
    '5. volume': '911911'
  },
  '2014-08-29': {
    '1. open': '39.1000',
    '2. high': '40.9000',
    '3. low': '38.2000',
    '4. close': '39.7950',
    '5. volume': '1240915'
  },
  '2014-07-31': {
    '1. open': '36.1650',
    '2. high': '40.5500',
    '3. low': '36.1650',
    '4. close': '39.3500',
    '5. volume': '1173995'
  },
  '2014-06-30': {
    '1. open': '36.0800',
    '2. high': '38.4200',
    '3. low': '34.6350',
    '4. close': '36.2400',
    '5. volume': '1191120'
  },
  '2014-05-30': {
    '1. open': '33.9600',
    '2. high': '36.3500',
    '3. low': '33.7600',
    '4. close': '35.7750',
    '5. volume': '687417'
  },
  '2014-04-30': {
    '1. open': '32.0000',
    '2. high': '33.8300',
    '3. low': '31.2000',
    '4. close': '33.8000',
    '5. volume': '564746'
  },
  '2014-03-31': {
    '1. open': '29.5000',
    '2. high': '32.4900',
    '3. low': '29.2000',
    '4. close': '31.9700',
    '5. volume': '779386'
  },
  '2014-02-28': {
    '1. open': '29.5000',
    '2. high': '30.4800',
    '3. low': '28.0000',
    '4. close': '30.4800',
    '5. volume': '526261'
  },
  '2014-01-31': {
    '1. open': '29.2500',
    '2. high': '30.4500',
    '3. low': '28.6650',
    '4. close': '29.3950',
    '5. volume': '841943'
  },
  '2013-12-30': {
    '1. open': '28.1600',
    '2. high': '29.5550',
    '3. low': '26.3600',
    '4. close': '29.1950',
    '5. volume': '973749'
  },
  '2013-11-29': {
    '1. open': '26.4800',
    '2. high': '28.6950',
    '3. low': '26.4800',
    '4. close': '28.0200',
    '5. volume': '692672'
  },
  '2013-10-31': {
    '1. open': '25.4800',
    '2. high': '27.0000',
    '3. low': '24.8000',
    '4. close': '26.5000',
    '5. volume': '519164'
  },
  '2013-09-30': {
    '1. open': '24.7800',
    '2. high': '25.7300',
    '3. low': '24.3000',
    '4. close': '25.4150',
    '5. volume': '326953'
  },
  '2013-08-30': {
    '1. open': '25.3250',
    '2. high': '25.4800',
    '3. low': '23.8500',
    '4. close': '24.4000',
    '5. volume': '341377'
  },
  '2013-07-31': {
    '1. open': '25.0550',
    '2. high': '25.8350',
    '3. low': '23.5450',
    '4. close': '25.1300',
    '5. volume': '473398'
  },
  '2013-06-28': {
    '1. open': '26.5900',
    '2. high': '26.9100',
    '3. low': '22.6500',
    '4. close': '24.8900',
    '5. volume': '817996'
  },
  '2013-05-31': {
    '1. open': '24.8650',
    '2. high': '26.5150',
    '3. low': '24.3100',
    '4. close': '26.5150',
    '5. volume': '808459'
  },
  '2013-04-30': {
    '1. open': '24.0750',
    '2. high': '25.1250',
    '3. low': '23.1500',
    '4. close': '24.9700',
    '5. volume': '436880'
  },
  '2013-03-28': {
    '1. open': '23.8000',
    '2. high': '24.6000',
    '3. low': '23.0000',
    '4. close': '24.1100',
    '5. volume': '535957'
  },
  '2013-02-28': {
    '1. open': '23.0500',
    '2. high': '24.1600',
    '3. low': '22.6000',
    '4. close': '23.8050',
    '5. volume': '481068'
  },
  '2013-01-31': {
    '1. open': '20.7200',
    '2. high': '23.0250',
    '3. low': '20.5500',
    '4. close': '23.0250',
    '5. volume': '354156'
  },
  '2012-12-28': {
    '1. open': '19.9900',
    '2. high': '20.7900',
    '3. low': '19.8150',
    '4. close': '20.2600',
    '5. volume': '287383'
  },
  '2012-11-30': {
    '1. open': '19.5000',
    '2. high': '20.2800',
    '3. low': '18.9000',
    '4. close': '19.8450',
    '5. volume': '342554'
  },
  '2012-10-31': {
    '1. open': '19.1100',
    '2. high': '19.8800',
    '3. low': '18.8300',
    '4. close': '19.4250',
    '5. volume': '275813'
  },
  '2012-09-28': {
    '1. open': '19.3950',
    '2. high': '19.7650',
    '3. low': '18.6900',
    '4. close': '18.9750',
    '5. volume': '289357'
  },
  '2012-08-31': {
    '1. open': '19.1700',
    '2. high': '20.0000',
    '3. low': '18.8000',
    '4. close': '19.3250',
    '5. volume': '428661'
  },
  '2012-07-31': {
    '1. open': '21.7200',
    '2. high': '22.2450',
    '3. low': '19.0000',
    '4. close': '19.0500',
    '5. volume': '450839'
  },
  '2012-06-29': {
    '1. open': '22.5250',
    '2. high': '22.7650',
    '3. low': '19.7600',
    '4. close': '21.6750',
    '5. volume': '517594'
  },
  '2012-05-31': {
    '1. open': '23.7500',
    '2. high': '23.8500',
    '3. low': '22.0400',
    '4. close': '22.7050',
    '5. volume': '402435'
  },
  '2012-04-30': {
    '1. open': '23.2750',
    '2. high': '23.5500',
    '3. low': '21.8500',
    '4. close': '23.5350',
    '5. volume': '339348'
  },
  '2012-03-30': {
    '1. open': '21.8000',
    '2. high': '23.8500',
    '3. low': '21.5000',
    '4. close': '23.1500',
    '5. volume': '519065'
  },
  '2012-02-29': {
    '1. open': '22.0000',
    '2. high': '22.4500',
    '3. low': '21.1000',
    '4. close': '21.9650',
    '5. volume': '406758'
  },
  '2012-01-31': {
    '1. open': '19.1000',
    '2. high': '22.1500',
    '3. low': '19.0000',
    '4. close': '21.8650',
    '5. volume': '509083'
  },
  '2011-12-30': {
    '1. open': '18.8600',
    '2. high': '19.4350',
    '3. low': '18.4650',
    '4. close': '18.8600',
    '5. volume': '390560'
  },
  '2011-11-30': {
    '1. open': '18.7700',
    '2. high': '19.1600',
    '3. low': '17.5200',
    '4. close': '18.8900',
    '5. volume': '452060'
  },
  '2011-10-31': {
    '1. open': '18.1900',
    '2. high': '19.8000',
    '3. low': '16.6200',
    '4. close': '18.9500',
    '5. volume': '561635'
  },
  '2011-09-30': {
    '1. open': '19.4000',
    '2. high': '19.5600',
    '3. low': '17.0800',
    '4. close': '18.9000',
    '5. volume': '681869'
  },
  '2011-08-31': {
    '1. open': '21.9500',
    '2. high': '22.3900',
    '3. low': '16.5250',
    '4. close': '19.4500',
    '5. volume': '1261847'
  },
  '2011-07-29': {
    '1. open': '24.1950',
    '2. high': '24.9000',
    '3. low': '21.4550',
    '4. close': '21.6350',
    '5. volume': '712805'
  },
  '2011-06-30': {
    '1. open': '23.3000',
    '2. high': '24.0000',
    '3. low': '23.0000',
    '4. close': '24.0000',
    '5. volume': '596749'
  },
  '2011-05-31': {
    '1. open': '22.4000',
    '2. high': '23.3850',
    '3. low': '21.9500',
    '4. close': '23.2800',
    '5. volume': '506308'
  },
  '2011-04-29': {
    '1. open': '21.1500',
    '2. high': '22.4800',
    '3. low': '20.3200',
    '4. close': '22.3500',
    '5. volume': '367594'
  },
  '2011-03-31': {
    '1. open': '22.1500',
    '2. high': '22.8300',
    '3. low': '18.1300',
    '4. close': '21.0450',
    '5. volume': '966047'
  },
  '2011-02-28': {
    '1. open': '22.0500',
    '2. high': '23.0900',
    '3. low': '19.6700',
    '4. close': '21.9500',
    '5. volume': '562788'
  },
  '2011-01-31': {
    '1. open': '21.9000',
    '2. high': '23.4750',
    '3. low': '21.5050',
    '4. close': '21.8800',
    '5. volume': '763117'
  },
  '2010-12-30': {
    '1. open': '21.5000',
    '2. high': '24.3900',
    '3. low': '21.4950',
    '4. close': '21.9850',
    '5. volume': '806476'
  },
  '2010-11-30': {
    '1. open': '19.2500',
    '2. high': '22.4800',
    '3. low': '18.4500',
    '4. close': '21.2600',
    '5. volume': '848918'
  },
  '2010-10-29': {
    '1. open': '19.2000',
    '2. high': '19.4900',
    '3. low': '17.5000',
    '4. close': '19.1500',
    '5. volume': '516432'
  },
  '2010-09-30': {
    '1. open': '17.0000',
    '2. high': '19.3200',
    '3. low': '16.8050',
    '4. close': '19.1050',
    '5. volume': '615949'
  },
  '2010-08-31': {
    '1. open': '16.9000',
    '2. high': '17.3500',
    '3. low': '15.6750',
    '4. close': '16.9300',
    '5. volume': '556832'
  },
  '2010-07-30': {
    '1. open': '16.0250',
    '2. high': '17.0000',
    '3. low': '15.1500',
    '4. close': '16.8700',
    '5. volume': '416435'
  },
  '2010-06-30': {
    '1. open': '15.0000',
    '2. high': '16.6850',
    '3. low': '14.6500',
    '4. close': '16.1750',
    '5. volume': '608180'
  },
  '2010-05-31': {
    '1. open': '15.7000',
    '2. high': '16.0000',
    '3. low': '13.8200',
    '4. close': '15.0000',
    '5. volume': '708941'
  },
  '2010-04-30': {
    '1. open': '13.9400',
    '2. high': '16.2500',
    '3. low': '13.8950',
    '4. close': '15.6250',
    '5. volume': '781190'
  },
  '2010-03-31': {
    '1. open': '12.2000',
    '2. high': '13.9400',
    '3. low': '12.1650',
    '4. close': '13.9400',
    '5. volume': '664410'
  },
  '2010-02-26': {
    '1. open': '12.4450',
    '2. high': '12.8500',
    '3. low': '11.9500',
    '4. close': '12.2000',
    '5. volume': '403335'
  },
  '2010-01-29': {
    '1. open': '11.9600',
    '2. high': '13.7000',
    '3. low': '11.9600',
    '4. close': '12.2700',
    '5. volume': '538571'
  },
  '2009-12-30': {
    '1. open': '12.0900',
    '2. high': '12.4900',
    '3. low': '11.7500',
    '4. close': '12.0000',
    '5. volume': '283583'
  },
  '2009-11-30': {
    '1. open': '11.7000',
    '2. high': '12.5000',
    '3. low': '10.9000',
    '4. close': '12.2000',
    '5. volume': '625679'
  },
  '2009-10-30': {
    '1. open': '11.6400',
    '2. high': '12.7700',
    '3. low': '11.2100',
    '4. close': '11.8000',
    '5. volume': '801445'
  },
  '2009-09-30': {
    '1. open': '11.4400',
    '2. high': '12.0300',
    '3. low': '10.5700',
    '4. close': '11.6300',
    '5. volume': '593683'
  },
  '2009-08-31': {
    '1. open': '9.9000',
    '2. high': '12.1300',
    '3. low': '9.6000',
    '4. close': '11.4500',
    '5. volume': '1040546'
  },
  '2009-07-31': {
    '1. open': '10.8400',
    '2. high': '11.1900',
    '3. low': '8.9500',
    '4. close': '9.9900',
    '5. volume': '734994'
  },
  '2009-06-30': {
    '1. open': '11.4500',
    '2. high': '12.0000',
    '3. low': '10.3200',
    '4. close': '10.7700',
    '5. volume': '1039091'
  },
  '2009-05-29': {
    '1. open': '11.1000',
    '2. high': '11.5400',
    '3. low': '10.6100',
    '4. close': '11.2600',
    '5. volume': '568533'
  },
  '2009-04-30': {
    '1. open': '8.8000',
    '2. high': '11.4500',
    '3. low': '8.6800',
    '4. close': '10.7500',
    '5. volume': '555195'
  },
  '2009-03-31': {
    '1. open': '8.9500',
    '2. high': '9.3600',
    '3. low': '7.8000',
    '4. close': '8.7100',
    '5. volume': '644198'
  },
  '2009-02-27': {
    '1. open': '10.5000',
    '2. high': '11.6100',
    '3. low': '8.4600',
    '4. close': '8.9000',
    '5. volume': '472706'
  },
  '2009-01-30': {
    '1. open': '13.4000',
    '2. high': '13.6300',
    '3. low': '10.1000',
    '4. close': '10.6800',
    '5. volume': '690944'
  },
  '2008-12-30': {
    '1. open': '10.9900',
    '2. high': '13.7500',
    '3. low': '10.0300',
    '4. close': '13.4000',
    '5. volume': '1751610'
  },
  '2008-11-28': {
    '1. open': '14.3900',
    '2. high': '14.3900',
    '3. low': '10.5900',
    '4. close': '10.9000',
    '5. volume': '1488853'
  },
  '2008-10-31': {
    '1. open': '16.9000',
    '2. high': '17.4000',
    '3. low': '11.5000',
    '4. close': '13.7700',
    '5. volume': '1368500'
  },
  '2008-09-30': {
    '1. open': '18.7400',
    '2. high': '19.4500',
    '3. low': '15.8200',
    '4. close': '16.7500',
    '5. volume': '1174797'
  },
  '2008-08-29': {
    '1. open': '18.3000',
    '2. high': '18.8700',
    '3. low': '17.5000',
    '4. close': '18.6700',
    '5. volume': '1154799'
  },
  '2008-07-31': {
    '1. open': '21.9300',
    '2. high': '21.9300',
    '3. low': '17.5800',
    '4. close': '18.2700',
    '5. volume': '1478663'
  },
  '2008-06-30': {
    '1. open': '25.0000',
    '2. high': '25.2800',
    '3. low': '20.5700',
    '4. close': '21.4900',
    '5. volume': '782774'
  },
  '2008-05-30': {
    '1. open': '22.9200',
    '2. high': '25.2900',
    '3. low': '22.9200',
    '4. close': '25.0100',
    '5. volume': '388669'
  },
  '2008-04-30': {
    '1. open': '22.1900',
    '2. high': '23.6700',
    '3. low': '21.8100',
    '4. close': '22.8200',
    '5. volume': '353467'
  },
  '2008-03-31': {
    '1. open': '20.7700',
    '2. high': '22.8000',
    '3. low': '19.6000',
    '4. close': '22.2000',
    '5. volume': '639448'
  },
  '2008-02-29': {
    '1. open': '20.9100',
    '2. high': '21.3900',
    '3. low': '19.7500',
    '4. close': '20.7400',
    '5. volume': '769292'
  },
  '2008-01-31': {
    '1. open': '23.9900',
    '2. high': '24.5100',
    '3. low': '18.0200',
    '4. close': '20.6700',
    '5. volume': '977000'
  },
  '2007-12-28': {
    '1. open': '24.6400',
    '2. high': '25.5000',
    '3. low': '23.0000',
    '4. close': '24.2500',
    '5. volume': '711834'
  },
  '2007-11-30': {
    '1. open': '26.0500',
    '2. high': '26.0500',
    '3. low': '21.2600',
    '4. close': '24.5200',
    '5. volume': '1205962'
  },
  '2007-10-31': {
    '1. open': '26.1800',
    '2. high': '26.5400',
    '3. low': '25.0800',
    '4. close': '26.0500',
    '5. volume': '618149'
  },
  '2007-09-28': {
    '1. open': '27.3000',
    '2. high': '28.3800',
    '3. low': '25.6500',
    '4. close': '26.0000',
    '5. volume': '407176'
  },
  '2007-08-31': {
    '1. open': '27.4900',
    '2. high': '27.7600',
    '3. low': '24.6100',
    '4. close': '27.1500',
    '5. volume': '991828'
  },
  '2007-07-31': {
    '1. open': '30.5900',
    '2. high': '31.3100',
    '3. low': '26.5100',
    '4. close': '27.6900',
    '5. volume': '1093479'
  },
  '2007-06-29': {
    '1. open': '29.9500',
    '2. high': '31.3300',
    '3. low': '29.2700',
    '4. close': '30.4000',
    '5. volume': '1114323'
  },
  '2007-05-31': {
    '1. open': '31.0500',
    '2. high': '31.6000',
    '3. low': '29.5200',
    '4. close': '30.0000',
    '5. volume': '573182'
  },
  '2007-04-30': {
    '1. open': '28.5000',
    '2. high': '31.9000',
    '3. low': '27.8000',
    '4. close': '31.3400',
    '5. volume': '667558'
  },
  '2007-03-30': {
    '1. open': '28.9000',
    '2. high': '29.3900',
    '3. low': '25.7600',
    '4. close': '28.4900',
    '5. volume': '762103'
  },
  '2007-02-28': {
    '1. open': '29.5000',
    '2. high': '30.3100',
    '3. low': '27.6900',
    '4. close': '29.2000',
    '5. volume': '1417166'
  },
  '2007-01-31': {
    '1. open': '29.6700',
    '2. high': '31.6800',
    '3. low': '29.0000',
    '4. close': '29.7600',
    '5. volume': '997356'
  },
  '2006-12-29': {
    '1. open': '28.9000',
    '2. high': '29.6900',
    '3. low': '27.7400',
    '4. close': '29.6000',
    '5. volume': '492075'
  },
  '2006-11-30': {
    '1. open': '27.8000',
    '2. high': '29.6400',
    '3. low': '27.4100',
    '4. close': '28.8900',
    '5. volume': '614668'
  },
  '2006-10-31': {
    '1. open': '28.0000',
    '2. high': '28.6500',
    '3. low': '27.8000',
    '4. close': '27.9000',
    '5. volume': '377333'
  },
  '2006-09-29': {
    '1. open': '26.4000',
    '2. high': '28.2000',
    '3. low': '26.3000',
    '4. close': '28.1200',
    '5. volume': '514804'
  },
  '2006-08-31': {
    '1. open': '26.6000',
    '2. high': '26.8000',
    '3. low': '24.9000',
    '4. close': '26.2800',
    '5. volume': '313440'
  },
  '2006-07-31': {
    '1. open': '28.0600',
    '2. high': '29.3600',
    '3. low': '24.5000',
    '4. close': '26.6000',
    '5. volume': '639448'
  },
  '2006-06-30': {
    '1. open': '29.7500',
    '2. high': '29.7700',
    '3. low': '24.6000',
    '4. close': '27.8800',
    '5. volume': '624796'
  },
  '2006-05-31': {
    '1. open': '33.2200',
    '2. high': '33.6700',
    '3. low': '26.5200',
    '4. close': '29.8000',
    '5. volume': '1221471'
  },
  '2006-04-28': {
    '1. open': '32.1000',
    '2. high': '34.3000',
    '3. low': '31.1900',
    '4. close': '33.3000',
    '5. volume': '550802'
  },
  '2006-03-31': {
    '1. open': '29.2500',
    '2. high': '32.1000',
    '3. low': '29.1700',
    '4. close': '32.0100',
    '5. volume': '658584'
  },
  '2006-02-28': {
    '1. open': '29.5100',
    '2. high': '30.1200',
    '3. low': '28.6000',
    '4. close': '29.3000',
    '5. volume': '426796'
  },
  '2006-01-31': {
    '1. open': '29.3500',
    '2. high': '31.0100',
    '3. low': '26.8000',
    '4. close': '29.6500',
    '5. volume': '849316'
  },
  '2005-12-30': {
    '1. open': '27.6500',
    '2. high': '29.5000',
    '3. low': '27.1100',
    '4. close': '29.4500',
    '5. volume': '550871'
  },
  '2005-11-30': {
    '1. open': '27.0300',
    '2. high': '28.0000',
    '3. low': '26.3800',
    '4. close': '27.4200',
    '5. volume': '466485'
  },
  '2005-10-31': {
    '1. open': '27.1000',
    '2. high': '28.0000',
    '3. low': '26.3400',
    '4. close': '27.0400',
    '5. volume': '550191'
  },
  '2005-09-30': {
    '1. open': '24.8500',
    '2. high': '27.4700',
    '3. low': '24.5500',
    '4. close': '27.1200',
    '5. volume': '629812'
  },
  '2005-08-31': {
    '1. open': '24.6000',
    '2. high': '25.0000',
    '3. low': '24.3000',
    '4. close': '24.8500',
    '5. volume': '685223'
  },
  '2005-07-29': {
    '1. open': '24.1800',
    '2. high': '25.6000',
    '3. low': '23.7000',
    '4. close': '24.5900',
    '5. volume': '1217166'
  },
  '2005-06-30': {
    '1. open': '23.8100',
    '2. high': '24.3000',
    '3. low': '23.4000',
    '4. close': '24.2300',
    '5. volume': '1245407'
  },
  '2005-05-31': {
    '1. open': '22.8500',
    '2. high': '24.0000',
    '3. low': '22.5400',
    '4. close': '23.6500',
    '5. volume': '480731'
  },
  '2005-04-29': {
    '1. open': '22.9700',
    '2. high': '24.0000',
    '3. low': '22.4000',
    '4. close': '22.8500',
    '5. volume': '410790'
  },
  '2005-03-31': {
    '1. open': '24.2800',
    '2. high': '24.4500',
    '3. low': '21.5300',
    '4. close': '22.8100',
    '5. volume': '626583'
  },
  '2005-02-28': {
    '1. open': '23.8000',
    '2. high': '24.8500',
    '3. low': '23.7000',
    '4. close': '24.3500',
    '5. volume': '865321'
  },
  '2005-01-31': {
    '1. open': '22.0500',
    '2. high': '24.3500',
    '3. low': '22.0000',
    '4. close': '23.9000',
    '5. volume': '744159'
  },
  '2004-12-30': {
    '1. open': '22.2500',
    '2. high': '22.4600',
    '3. low': '21.5000',
    '4. close': '21.9700',
    '5. volume': '290981'
  },
  '2004-11-30': {
    '1. open': '20.4800',
    '2. high': '23.0000',
    '3. low': '20.4000',
    '4. close': '22.4000',
    '5. volume': '429435'
  },
  '2004-10-29': {
    '1. open': '21.4100',
    '2. high': '21.6300',
    '3. low': '20.2000',
    '4. close': '20.3000',
    '5. volume': '461084'
  },
  '2004-09-30': {
    '1. open': '21.8500',
    '2. high': '21.9500',
    '3. low': '21.0000',
    '4. close': '21.5000',
    '5. volume': '245211'
  },
  '2004-08-31': {
    '1. open': '22.8800',
    '2. high': '22.8800',
    '3. low': '19.5200',
    '4. close': '21.6600',
    '5. volume': '689609'
  },
  '2004-07-30': {
    '1. open': '25.5000',
    '2. high': '25.6400',
    '3. low': '22.1600',
    '4. close': '22.8000',
    '5. volume': '536401'
  },
  '2004-06-30': {
    '1. open': '24.8300',
    '2. high': '25.9000',
    '3. low': '24.0000',
    '4. close': '25.5500',
    '5. volume': '694751'
  },
  '2004-05-31': {
    '1. open': '24.8000',
    '2. high': '24.8900',
    '3. low': '23.4000',
    '4. close': '24.6900',
    '5. volume': '253387'
  },
  '2004-04-30': {
    '1. open': '24.6700',
    '2. high': '25.3800',
    '3. low': '23.7500',
    '4. close': '24.5500',
    '5. volume': '305856'
  },
  '2004-03-31': {
    '1. open': '25.9100',
    '2. high': '25.9500',
    '3. low': '23.1500',
    '4. close': '24.5200',
    '5. volume': '417786'
  },
  '2004-02-27': {
    '1. open': '22.8000',
    '2. high': '27.5000',
    '3. low': '22.6000',
    '4. close': '25.7500',
    '5. volume': '1079090'
  },
  '2004-01-30': {
    '1. open': '20.5000',
    '2. high': '22.9800',
    '3. low': '20.5000',
    '4. close': '22.8000',
    '5. volume': '534777'
  },
  '2003-12-30': {
    '1. open': '21.3500',
    '2. high': '21.4500',
    '3. low': '20.2500',
    '4. close': '20.4500',
    '5. volume': '291454'
  },
  '2003-11-28': {
    '1. open': '20.0000',
    '2. high': '21.6000',
    '3. low': '20.0000',
    '4. close': '21.2600',
    '5. volume': '255248'
  },
  '2003-10-31': {
    '1. open': '19.0000',
    '2. high': '20.2500',
    '3. low': '18.6600',
    '4. close': '19.9400',
    '5. volume': '226532'
  },
  '2003-09-30': {
    '1. open': '21.4300',
    '2. high': '21.4300',
    '3. low': '19.2100',
    '4. close': '19.5700',
    '5. volume': '260220'
  },
  '2003-08-29': {
    '1. open': '20.1000',
    '2. high': '21.7800',
    '3. low': '19.5600',
    '4. close': '21.3500',
    '5. volume': '286692'
  },
  '2003-07-31': {
    '1. open': '22.8700',
    '2. high': '23.1000',
    '3. low': '19.8300',
    '4. close': '20.0500',
    '5. volume': '618454'
  },
  '2003-06-30': {
    '1. open': '21.5000',
    '2. high': '22.8700',
    '3. low': '20.5000',
    '4. close': '22.8000',
    '5. volume': '326673'
  },
  '2003-05-30': {
    '1. open': '17.5000',
    '2. high': '21.5000',
    '3. low': '17.0000',
    '4. close': '21.1000',
    '5. volume': '417983'
  },
  '2003-04-30': {
    '1. open': '14.9500',
    '2. high': '17.9900',
    '3. low': '14.5200',
    '4. close': '17.4500',
    '5. volume': '225029'
  },
  '2003-03-31': {
    '1. open': '16.2100',
    '2. high': '16.2200',
    '3. low': '13.8000',
    '4. close': '14.7900',
    '5. volume': '369233'
  },
  '2003-02-28': {
    '1. open': '16.1500',
    '2. high': '16.8500',
    '3. low': '15.7700',
    '4. close': '15.9400',
    '5. volume': '139852'
  },
  '2003-01-31': {
    '1. open': '17.2700',
    '2. high': '18.0500',
    '3. low': '15.9000',
    '4. close': '16.6500',
    '5. volume': '204556'
  },
  '2002-12-30': {
    '1. open': '20.1000',
    '2. high': '20.1000',
    '3. low': '16.5100',
    '4. close': '17.2700',
    '5. volume': '221362'
  },
  '2002-11-29': {
    '1. open': '17.7000',
    '2. high': '20.0000',
    '3. low': '16.6000',
    '4. close': '20.0000',
    '5. volume': '146316'
  },
  '2002-10-31': {
    '1. open': '17.0000',
    '2. high': '18.6000',
    '3. low': '15.8100',
    '4. close': '17.9800',
    '5. volume': '116909'
  },
  '2002-09-30': {
    '1. open': '19.8000',
    '2. high': '20.2500',
    '3. low': '16.4800',
    '4. close': '17.4500',
    '5. volume': '148292'
  },
  '2002-08-30': {
    '1. open': '22.0000',
    '2. high': '22.0000',
    '3. low': '19.2500',
    '4. close': '19.8800',
    '5. volume': '151284'
  },
  '2002-07-31': {
    '1. open': '24.1000',
    '2. high': '24.9400',
    '3. low': '20.0000',
    '4. close': '22.2000',
    '5. volume': '119144'
  },
  '2002-06-28': {
    '1. open': '25.0000',
    '2. high': '25.7200',
    '3. low': '21.0200',
    '4. close': '24.1800',
    '5. volume': '76566'
  },
  '2002-05-31': {
    '1. open': '25.5000',
    '2. high': '26.4500',
    '3. low': '24.9500',
    '4. close': '25.0000',
    '5. volume': '102607'
  },
  '2002-04-30': {
    '1. open': '24.8000',
    '2. high': '25.5500',
    '3. low': '24.0000',
    '4. close': '25.5500',
    '5. volume': '148088'
  },
  '2002-03-28': {
    '1. open': '22.5900',
    '2. high': '25.5000',
    '3. low': '22.1500',
    '4. close': '24.6000',
    '5. volume': '304715'
  },
  '2002-02-28': {
    '1. open': '21.0000',
    '2. high': '22.8500',
    '3. low': '20.7500',
    '4. close': '22.3000',
    '5. volume': '376089'
  },
  '2002-01-31': {
    '1. open': '20.5300',
    '2. high': '21.3500',
    '3. low': '19.9000',
    '4. close': '21.0000',
    '5. volume': '183957'
  },
  '2001-12-28': {
    '1. open': '22.0000',
    '2. high': '22.0500',
    '3. low': '20.0000',
    '4. close': '20.1000',
    '5. volume': '278769'
  },
  '2001-11-30': {
    '1. open': '23.0100',
    '2. high': '23.6000',
    '3. low': '21.5000',
    '4. close': '22.2500',
    '5. volume': '104919'
  },
  '2001-10-31': {
    '1. open': '21.4100',
    '2. high': '23.1000',
    '3. low': '21.0000',
    '4. close': '23.0000',
    '5. volume': '51966'
  },
  '2001-09-28': {
    '1. open': '24.7000',
    '2. high': '25.0000',
    '3. low': '19.0000',
    '4. close': '21.7500',
    '5. volume': '78260'
  },
  '2001-08-31': {
    '1. open': '25.5000',
    '2. high': '25.7800',
    '3. low': '23.0000',
    '4. close': '24.7000',
    '5. volume': '73838'
  },
  '2001-07-31': {
    '1. open': '26.5000',
    '2. high': '26.8400',
    '3. low': '24.0000',
    '4. close': '25.5000',
    '5. volume': '88910'
  },
  '2001-06-29': {
    '1. open': '28.0000',
    '2. high': '28.1500',
    '3. low': '25.0000',
    '4. close': '26.4000',
    '5. volume': '220307'
  },
  '2001-05-31': {
    '1. open': '26.0000',
    '2. high': '28.0000',
    '3. low': '25.7000',
    '4. close': '28.0000',
    '5. volume': '23098'
  },
  '2001-04-30': {
    '1. open': '24.3000',
    '2. high': '26.9500',
    '3. low': '23.5000',
    '4. close': '26.0000',
    '5. volume': '37459'
  },
  '2001-03-30': {
    '1. open': '25.5000',
    '2. high': '25.5000',
    '3. low': '22.9000',
    '4. close': '24.2500',
    '5. volume': '12727'
  },
  '2001-02-28': {
    '1. open': '24.3000',
    '2. high': '26.5000',
    '3. low': '23.1000',
    '4. close': '25.0000',
    '5. volume': '42245'
  },
  '2001-01-31': {
    '1. open': '23.3000',
    '2. high': '24.5000',
    '3. low': '23.3000',
    '4. close': '24.3000',
    '5. volume': '33835'
  },
  '2000-12-29': {
    '1. open': '23.6000',
    '2. high': '24.9000',
    '3. low': '22.0000',
    '4. close': '23.1100',
    '5. volume': '35215'
  },
  '2000-11-30': {
    '1. open': '24.9800',
    '2. high': '26.8500',
    '3. low': '23.0000',
    '4. close': '24.0000',
    '5. volume': '14578'
  },
  '2000-10-31': {
    '1. open': '23.5000',
    '2. high': '24.5000',
    '3. low': '20.5000',
    '4. close': '24.5000',
    '5. volume': '184822'
  },
  '2000-09-29': {
    '1. open': '29.1000',
    '2. high': '29.5000',
    '3. low': '23.5000',
    '4. close': '23.7500',
    '5. volume': '44078'
  },
  '2000-08-31': {
    '1. open': '26.5100',
    '2. high': '29.4500',
    '3. low': '25.8000',
    '4. close': '29.4500',
    '5. volume': '173757'
  },
  '2000-07-31': {
    '1. open': '28.7500',
    '2. high': '29.9000',
    '3. low': '26.6000',
    '4. close': '26.6000',
    '5. volume': '40718'
  },
  '2000-06-30': {
    '1. open': '28.3900',
    '2. high': '29.7000',
    '3. low': '27.7500',
    '4. close': '28.5000',
    '5. volume': '30890'
  },
  '2000-05-31': {
    '1. open': '26.7000',
    '2. high': '30.2000',
    '3. low': '26.4000',
    '4. close': '28.0000',
    '5. volume': '17494'
  },
  '2000-04-28': {
    '1. open': '27.9000',
    '2. high': '28.0000',
    '3. low': '26.5000',
    '4. close': '26.7000',
    '5. volume': '6394'
  },
  '2000-03-31': {
    '1. open': '27.2000',
    '2. high': '30.0000',
    '3. low': '25.7000',
    '4. close': '27.0000',
    '5. volume': '20334'
  },
  '2000-02-29': {
    '1. open': '27.5000',
    '2. high': '32.0000',
    '3. low': '26.5000',
    '4. close': '28.5000',
    '5. volume': '30951'
  },
  '2000-01-31': {
    '1. open': '26.7000',
    '2. high': '29.2000',
    '3. low': '25.5000',
    '4. close': '27.1000',
    '5. volume': '12192'
  },
  '1999-12-27': {
    '1. open': '28.3500',
    '2. high': '28.3500',
    '3. low': '26.0000',
    '4. close': '27.0000',
    '5. volume': '9705'
  }
};

// tslint:disable:max-line-length
export const indusCompany: Company = {
  id: 1137,
  name: 'INDUS Holding AG',
  country: Country.Deutschland,
  city: 'Bergisch Gladbach',
  url: 'http://www.indus.de/',
  description: 'Die INDUS Holding Aktiengesellschaft mit Sitz in Bergisch Gladbach ist eine deutsche Beteiligungsgesellschaft. Das Unternehmen ist im SDAX gelistet.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Indus_Holding',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Indus_Holding_AG_Logo.svg/500px-Indus_Holding_AG_Logo.svg.png',
  products: [],
  industries: [1723],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE0006200108',
  wkn: '620010',
  symbol: 'INH.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Holding', 'Industrieunternehmen', 'Industriebeteiligungen']
};
// tslint:enable:max-line-length
