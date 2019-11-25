import { Country } from '../../../enums/country';
import { Company } from '../../../interfaces/company';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.00, yield: 1.48}, {year: 2017, rate: 0.80}, {year: 2016, rate: 0.60}, {
    year: 2015,
    rate: 0.60,
    yield: 3.10
  }, {year: 2014, rate: 0.60, yield: 3.16}, {year: 2013, rate: 0.60, yield: 2.09}, {year: 2012, rate: 0.60, yield: 2.53}, {
    year: 2011,
    rate: 0.60,
    yield: 2.65
  }, {year: 2010, rate: 0.60, yield: 2.27}, {year: 2009, rate: 0.45, yield: 2.56}, {year: 2008, rate: 0.30, yield: 3.37}, {
    year: 2007,
    rate: 0.25,
    yield: 2.54
  }, {year: 2006, rate: 0.25, yield: 2.08}, {year: 2005, rate: 0.15, yield: 1.47}, {year: 2004, rate: 0.25, yield: 2.99}, {
    year: 2003,
    rate: 0.00,
    yield: 0.00
  }, {year: 2002, rate: 0.45, yield: 15.79}, {year: 2001, rate: 0.00, yield: 0.00}, {year: 2000, rate: 0.00, yield: 0.00}, {
    year: 1999,
    rate: 0.00,
    yield: 0.00
  }
];
const prices = {
  '2019-11-25': {
    '1. open': '158.8000',
    '2. high': '191.0000',
    '3. low': '148.2000',
    '4. close': '181.4000',
    '5. volume': '431552'
  },
  '2019-10-31': {
    '1. open': '158.8000',
    '2. high': '176.0000',
    '3. low': '146.6000',
    '4. close': '157.0000',
    '5. volume': '353597'
  },
  '2019-09-30': {
    '1. open': '158.4000',
    '2. high': '191.0000',
    '3. low': '147.6000',
    '4. close': '155.8000',
    '5. volume': '571082'
  },
  '2019-08-30': {
    '1. open': '121.0000',
    '2. high': '167.6000',
    '3. low': '115.0000',
    '4. close': '158.2000',
    '5. volume': '492965'
  },
  '2019-07-31': {
    '1. open': '105.0000',
    '2. high': '139.0000',
    '3. low': '97.4000',
    '4. close': '119.8000',
    '5. volume': '400554'
  },
  '2019-06-28': {
    '1. open': '96.3000',
    '2. high': '104.0000',
    '3. low': '91.8000',
    '4. close': '103.6000',
    '5. volume': '296077'
  },
  '2019-05-31': {
    '1. open': '79.3000',
    '2. high': '108.0000',
    '3. low': '77.4000',
    '4. close': '96.0000',
    '5. volume': '595632'
  },
  '2019-04-30': {
    '1. open': '76.5000',
    '2. high': '88.8000',
    '3. low': '71.9000',
    '4. close': '78.4000',
    '5. volume': '319943'
  },
  '2019-03-29': {
    '1. open': '85.2000',
    '2. high': '90.3000',
    '3. low': '74.7000',
    '4. close': '77.2000',
    '5. volume': '235801'
  },
  '2019-02-28': {
    '1. open': '95.7000',
    '2. high': '99.3000',
    '3. low': '84.2000',
    '4. close': '85.1000',
    '5. volume': '391316'
  },
  '2019-01-31': {
    '1. open': '60.7000',
    '2. high': '101.0000',
    '3. low': '60.5000',
    '4. close': '95.3000',
    '5. volume': '752943'
  },
  '2018-12-28': {
    '1. open': '68.0000',
    '2. high': '71.6000',
    '3. low': '56.5000',
    '4. close': '61.7000',
    '5. volume': '352965'
  },
  '2018-11-30': {
    '1. open': '48.8000',
    '2. high': '68.0000',
    '3. low': '48.8000',
    '4. close': '66.4000',
    '5. volume': '366508'
  },
  '2018-10-31': {
    '1. open': '44.5500',
    '2. high': '50.3000',
    '3. low': '43.0500',
    '4. close': '49.0000',
    '5. volume': '254261'
  },
  '2018-09-28': {
    '1. open': '47.3500',
    '2. high': '49.1000',
    '3. low': '44.1500',
    '4. close': '44.4000',
    '5. volume': '114047'
  },
  '2018-08-31': {
    '1. open': '41.6000',
    '2. high': '47.6000',
    '3. low': '41.0000',
    '4. close': '47.1500',
    '5. volume': '148566'
  },
  '2018-07-31': {
    '1. open': '37.0500',
    '2. high': '41.5500',
    '3. low': '36.7000',
    '4. close': '41.4000',
    '5. volume': '120879'
  },
  '2018-06-29': {
    '1. open': '36.0000',
    '2. high': '39.3500',
    '3. low': '36.0000',
    '4. close': '37.3500',
    '5. volume': '142382'
  },
  '2018-05-31': {
    '1. open': '36.6000',
    '2. high': '37.8500',
    '3. low': '34.8500',
    '4. close': '36.0000',
    '5. volume': '100838'
  },
  '2018-04-30': {
    '1. open': '34.1500',
    '2. high': '37.2000',
    '3. low': '33.3000',
    '4. close': '36.5500',
    '5. volume': '109672'
  },
  '2018-03-29': {
    '1. open': '35.4500',
    '2. high': '37.2500',
    '3. low': '32.2500',
    '4. close': '34.6500',
    '5. volume': '147225'
  },
  '2018-02-28': {
    '1. open': '37.2500',
    '2. high': '37.8000',
    '3. low': '33.3000',
    '4. close': '35.6000',
    '5. volume': '133217'
  },
  '2018-01-31': {
    '1. open': '36.2500',
    '2. high': '41.1500',
    '3. low': '34.7500',
    '4. close': '37.4500',
    '5. volume': '145321'
  },
  '2017-12-29': {
    '1. open': '39.1950',
    '2. high': '39.1950',
    '3. low': '33.4700',
    '4. close': '36.1050',
    '5. volume': '162556'
  },
  '2017-11-30': {
    '1. open': '36.4850',
    '2. high': '41.2900',
    '3. low': '34.3200',
    '4. close': '39.0400',
    '5. volume': '149986'
  },
  '2017-10-31': {
    '1. open': '35.5000',
    '2. high': '36.9850',
    '3. low': '34.2300',
    '4. close': '36.1750',
    '5. volume': '115443'
  },
  '2017-09-29': {
    '1. open': '33.7900',
    '2. high': '36.0500',
    '3. low': '33.6150',
    '4. close': '35.5000',
    '5. volume': '117378'
  },
  '2017-08-31': {
    '1. open': '35.7900',
    '2. high': '36.5350',
    '3. low': '33.1000',
    '4. close': '33.7900',
    '5. volume': '205465'
  },
  '2017-07-31': {
    '1. open': '35.0000',
    '2. high': '37.2550',
    '3. low': '33.0150',
    '4. close': '35.8200',
    '5. volume': '177678'
  },
  '2017-06-30': {
    '1. open': '32.3500',
    '2. high': '38.1750',
    '3. low': '31.5000',
    '4. close': '35.0000',
    '5. volume': '361848'
  },
  '2017-05-31': {
    '1. open': '25.2050',
    '2. high': '33.0600',
    '3. low': '25.0200',
    '4. close': '32.5000',
    '5. volume': '423796'
  },
  '2017-04-28': {
    '1. open': '26.6000',
    '2. high': '27.0000',
    '3. low': '24.0500',
    '4. close': '25.3600',
    '5. volume': '98404'
  },
  '2017-03-31': {
    '1. open': '25.3100',
    '2. high': '26.9450',
    '3. low': '25.2200',
    '4. close': '26.8650',
    '5. volume': '106877'
  },
  '2017-02-28': {
    '1. open': '25.0000',
    '2. high': '26.6000',
    '3. low': '25.0000',
    '4. close': '25.2100',
    '5. volume': '68295'
  },
  '2017-01-31': {
    '1. open': '26.7500',
    '2. high': '27.6400',
    '3. low': '24.7250',
    '4. close': '25.5000',
    '5. volume': '230405'
  },
  '2016-12-30': {
    '1. open': '23.3000',
    '2. high': '27.3800',
    '3. low': '23.3000',
    '4. close': '26.7500',
    '5. volume': '342687'
  },
  '2016-11-30': {
    '1. open': '21.2000',
    '2. high': '23.8900',
    '3. low': '20.8850',
    '4. close': '23.4000',
    '5. volume': '221515'
  },
  '2016-10-31': {
    '1. open': '21.2600',
    '2. high': '21.8850',
    '3. low': '20.8950',
    '4. close': '21.1800',
    '5. volume': '38197'
  },
  '2016-09-30': {
    '1. open': '21.1000',
    '2. high': '21.7400',
    '3. low': '20.8000',
    '4. close': '21.3000',
    '5. volume': '66313'
  },
  '2016-08-31': {
    '1. open': '21.0050',
    '2. high': '21.9450',
    '3. low': '20.6300',
    '4. close': '21.6000',
    '5. volume': '83268'
  },
  '2016-07-29': {
    '1. open': '19.7900',
    '2. high': '21.6400',
    '3. low': '19.0550',
    '4. close': '21.2000',
    '5. volume': '166255'
  },
  '2016-06-30': {
    '1. open': '20.8700',
    '2. high': '21.3500',
    '3. low': '18.6000',
    '4. close': '19.7900',
    '5. volume': '118411'
  },
  '2016-05-31': {
    '1. open': '19.3000',
    '2. high': '21.0000',
    '3. low': '19.3000',
    '4. close': '20.7500',
    '5. volume': '80924'
  },
  '2016-04-29': {
    '1. open': '19.6000',
    '2. high': '19.8000',
    '3. low': '18.5000',
    '4. close': '19.3900',
    '5. volume': '83342'
  },
  '2016-03-31': {
    '1. open': '18.7800',
    '2. high': '19.9500',
    '3. low': '18.0000',
    '4. close': '19.5800',
    '5. volume': '54941'
  },
  '2016-02-29': {
    '1. open': '18.2800',
    '2. high': '18.8000',
    '3. low': '17.2500',
    '4. close': '18.7000',
    '5. volume': '65508'
  },
  '2016-01-29': {
    '1. open': '19.4900',
    '2. high': '20.0900',
    '3. low': '16.6100',
    '4. close': '18.3000',
    '5. volume': '115246'
  },
  '2015-12-30': {
    '1. open': '19.7500',
    '2. high': '19.7500',
    '3. low': '18.5600',
    '4. close': '19.3650',
    '5. volume': '124077'
  },
  '2015-11-30': {
    '1. open': '19.3500',
    '2. high': '20.4150',
    '3. low': '18.3500',
    '4. close': '19.4550',
    '5. volume': '137184'
  },
  '2015-10-30': {
    '1. open': '18.6800',
    '2. high': '20.7500',
    '3. low': '17.7700',
    '4. close': '19.1750',
    '5. volume': '115553'
  },
  '2015-09-30': {
    '1. open': '20.8500',
    '2. high': '21.3450',
    '3. low': '18.5000',
    '4. close': '18.6750',
    '5. volume': '74089'
  },
  '2015-08-31': {
    '1. open': '22.2500',
    '2. high': '23.0750',
    '3. low': '19.1100',
    '4. close': '20.9000',
    '5. volume': '150223'
  },
  '2015-07-31': {
    '1. open': '23.9500',
    '2. high': '24.1350',
    '3. low': '21.8300',
    '4. close': '22.5550',
    '5. volume': '163912'
  },
  '2015-06-30': {
    '1. open': '24.0700',
    '2. high': '24.6000',
    '3. low': '21.5050',
    '4. close': '23.9400',
    '5. volume': '92365'
  },
  '2015-05-29': {
    '1. open': '21.6000',
    '2. high': '24.4000',
    '3. low': '21.0900',
    '4. close': '24.0350',
    '5. volume': '150111'
  },
  '2015-04-30': {
    '1. open': '20.4000',
    '2. high': '21.8400',
    '3. low': '20.1100',
    '4. close': '21.2150',
    '5. volume': '264751'
  },
  '2015-03-31': {
    '1. open': '20.2000',
    '2. high': '21.9000',
    '3. low': '20.0000',
    '4. close': '20.4500',
    '5. volume': '124439'
  },
  '2015-02-27': {
    '1. open': '21.0000',
    '2. high': '21.0000',
    '3. low': '19.5200',
    '4. close': '20.0000',
    '5. volume': '157202'
  },
  '2015-01-30': {
    '1. open': '18.6300',
    '2. high': '21.5000',
    '3. low': '16.7050',
    '4. close': '21.0000',
    '5. volume': '289033'
  },
  '2014-12-30': {
    '1. open': '21.1000',
    '2. high': '21.2900',
    '3. low': '18.7100',
    '4. close': '18.9800',
    '5. volume': '224142'
  },
  '2014-11-28': {
    '1. open': '23.9900',
    '2. high': '23.9900',
    '3. low': '20.5650',
    '4. close': '21.1000',
    '5. volume': '92592'
  },
  '2014-10-31': {
    '1. open': '23.0600',
    '2. high': '23.9950',
    '3. low': '20.4150',
    '4. close': '23.8000',
    '5. volume': '78022'
  },
  '2014-09-30': {
    '1. open': '23.0000',
    '2. high': '23.1250',
    '3. low': '21.9800',
    '4. close': '22.5600',
    '5. volume': '41761'
  },
  '2014-08-29': {
    '1. open': '23.7300',
    '2. high': '23.7300',
    '3. low': '21.0000',
    '4. close': '22.9950',
    '5. volume': '63089'
  },
  '2014-07-31': {
    '1. open': '25.6000',
    '2. high': '25.9500',
    '3. low': '23.6000',
    '4. close': '23.7000',
    '5. volume': '58634'
  },
  '2014-06-30': {
    '1. open': '26.9750',
    '2. high': '27.3900',
    '3. low': '25.1000',
    '4. close': '25.2800',
    '5. volume': '66449'
  },
  '2014-05-30': {
    '1. open': '25.0700',
    '2. high': '27.2950',
    '3. low': '24.5000',
    '4. close': '26.8450',
    '5. volume': '138239'
  },
  '2014-04-30': {
    '1. open': '24.2800',
    '2. high': '25.6600',
    '3. low': '24.0000',
    '4. close': '25.0200',
    '5. volume': '79815'
  },
  '2014-03-31': {
    '1. open': '24.5100',
    '2. high': '24.7600',
    '3. low': '22.8000',
    '4. close': '24.1000',
    '5. volume': '135734'
  },
  '2014-02-28': {
    '1. open': '26.0900',
    '2. high': '26.5500',
    '3. low': '24.5050',
    '4. close': '24.5500',
    '5. volume': '107704'
  },
  '2014-01-31': {
    '1. open': '29.0500',
    '2. high': '30.6000',
    '3. low': '23.6800',
    '4. close': '26.7600',
    '5. volume': '204295'
  },
  '2013-12-30': {
    '1. open': '30.0000',
    '2. high': '30.0000',
    '3. low': '28.1700',
    '4. close': '28.6500',
    '5. volume': '69995'
  },
  '2013-11-29': {
    '1. open': '29.4050',
    '2. high': '30.1200',
    '3. low': '27.8100',
    '4. close': '29.6050',
    '5. volume': '96237'
  },
  '2013-10-31': {
    '1. open': '27.9000',
    '2. high': '30.5000',
    '3. low': '27.3050',
    '4. close': '29.9900',
    '5. volume': '130772'
  },
  '2013-09-30': {
    '1. open': '27.1000',
    '2. high': '29.2700',
    '3. low': '27.0500',
    '4. close': '28.0000',
    '5. volume': '106132'
  },
  '2013-08-30': {
    '1. open': '25.1000',
    '2. high': '28.0000',
    '3. low': '24.6650',
    '4. close': '27.0450',
    '5. volume': '188847'
  },
  '2013-07-31': {
    '1. open': '25.2000',
    '2. high': '26.8500',
    '3. low': '24.0050',
    '4. close': '25.0700',
    '5. volume': '105034'
  },
  '2013-06-28': {
    '1. open': '25.4000',
    '2. high': '25.8500',
    '3. low': '23.9550',
    '4. close': '25.3100',
    '5. volume': '72382'
  },
  '2013-05-31': {
    '1. open': '28.3850',
    '2. high': '28.8000',
    '3. low': '25.1500',
    '4. close': '25.6700',
    '5. volume': '216527'
  },
  '2013-04-30': {
    '1. open': '27.1800',
    '2. high': '29.0400',
    '3. low': '26.3100',
    '4. close': '28.6500',
    '5. volume': '245296'
  },
  '2013-03-28': {
    '1. open': '26.5000',
    '2. high': '27.5500',
    '3. low': '25.6600',
    '4. close': '27.4450',
    '5. volume': '111400'
  },
  '2013-02-28': {
    '1. open': '25.7250',
    '2. high': '27.2500',
    '3. low': '25.1500',
    '4. close': '26.5000',
    '5. volume': '129215'
  },
  '2013-01-31': {
    '1. open': '23.9500',
    '2. high': '27.0000',
    '3. low': '23.2000',
    '4. close': '25.8000',
    '5. volume': '162215'
  },
  '2012-12-28': {
    '1. open': '23.5000',
    '2. high': '23.6700',
    '3. low': '22.3800',
    '4. close': '23.6700',
    '5. volume': '76292'
  },
  '2012-11-30': {
    '1. open': '22.6000',
    '2. high': '24.0000',
    '3. low': '22.3200',
    '4. close': '23.1700',
    '5. volume': '131088'
  },
  '2012-10-31': {
    '1. open': '22.9000',
    '2. high': '24.6900',
    '3. low': '22.0000',
    '4. close': '22.5350',
    '5. volume': '82169'
  },
  '2012-09-28': {
    '1. open': '20.8700',
    '2. high': '23.4000',
    '3. low': '20.5000',
    '4. close': '23.0150',
    '5. volume': '156959'
  },
  '2012-08-31': {
    '1. open': '22.0000',
    '2. high': '22.1500',
    '3. low': '20.5250',
    '4. close': '20.8700',
    '5. volume': '100775'
  },
  '2012-07-31': {
    '1. open': '22.5400',
    '2. high': '22.8500',
    '3. low': '21.0000',
    '4. close': '21.9500',
    '5. volume': '115041'
  },
  '2012-06-29': {
    '1. open': '22.0150',
    '2. high': '22.8250',
    '3. low': '20.3000',
    '4. close': '22.5500',
    '5. volume': '86867'
  },
  '2012-05-31': {
    '1. open': '25.0500',
    '2. high': '25.0600',
    '3. low': '21.5100',
    '4. close': '22.1500',
    '5. volume': '164626'
  },
  '2012-04-30': {
    '1. open': '24.7000',
    '2. high': '25.3100',
    '3. low': '23.9500',
    '4. close': '24.7000',
    '5. volume': '79498'
  },
  '2012-03-30': {
    '1. open': '23.1000',
    '2. high': '24.9650',
    '3. low': '21.8100',
    '4. close': '24.5800',
    '5. volume': '182505'
  },
  '2012-02-29': {
    '1. open': '22.8500',
    '2. high': '24.0000',
    '3. low': '21.3700',
    '4. close': '23.1200',
    '5. volume': '244168'
  },
  '2012-01-31': {
    '1. open': '22.7500',
    '2. high': '24.5000',
    '3. low': '22.4050',
    '4. close': '23.1200',
    '5. volume': '102879'
  },
  '2011-12-30': {
    '1. open': '24.0000',
    '2. high': '24.1600',
    '3. low': '20.0200',
    '4. close': '22.6000',
    '5. volume': '127273'
  },
  '2011-11-30': {
    '1. open': '26.5000',
    '2. high': '26.5000',
    '3. low': '23.2800',
    '4. close': '24.0000',
    '5. volume': '147092'
  },
  '2011-10-31': {
    '1. open': '24.8000',
    '2. high': '27.2500',
    '3. low': '23.1550',
    '4. close': '26.7100',
    '5. volume': '158990'
  },
  '2011-09-30': {
    '1. open': '24.2500',
    '2. high': '26.5200',
    '3. low': '22.1100',
    '4. close': '25.7300',
    '5. volume': '142153'
  },
  '2011-08-31': {
    '1. open': '27.8000',
    '2. high': '28.9950',
    '3. low': '22.1000',
    '4. close': '24.5000',
    '5. volume': '279723'
  },
  '2011-07-29': {
    '1. open': '30.0000',
    '2. high': '30.5000',
    '3. low': '27.3050',
    '4. close': '28.3500',
    '5. volume': '85796'
  },
  '2011-06-30': {
    '1. open': '29.4900',
    '2. high': '30.4000',
    '3. low': '25.8300',
    '4. close': '30.4000',
    '5. volume': '237175'
  },
  '2011-05-31': {
    '1. open': '29.5000',
    '2. high': '31.6000',
    '3. low': '28.7100',
    '4. close': '29.5000',
    '5. volume': '154711'
  },
  '2011-04-29': {
    '1. open': '29.5000',
    '2. high': '31.4500',
    '3. low': '28.5000',
    '4. close': '29.2650',
    '5. volume': '162308'
  },
  '2011-03-31': {
    '1. open': '28.0550',
    '2. high': '29.4900',
    '3. low': '23.0300',
    '4. close': '29.4000',
    '5. volume': '370659'
  },
  '2011-02-28': {
    '1. open': '26.9450',
    '2. high': '28.5900',
    '3. low': '26.6100',
    '4. close': '28.4500',
    '5. volume': '126980'
  },
  '2011-01-31': {
    '1. open': '26.4500',
    '2. high': '30.0000',
    '3. low': '26.2000',
    '4. close': '26.7500',
    '5. volume': '227971'
  },
  '2010-12-30': {
    '1. open': '25.3950',
    '2. high': '27.4000',
    '3. low': '25.1000',
    '4. close': '26.4500',
    '5. volume': '170590'
  },
  '2010-11-30': {
    '1. open': '25.8000',
    '2. high': '27.5950',
    '3. low': '25.0200',
    '4. close': '25.3300',
    '5. volume': '194400'
  },
  '2010-10-29': {
    '1. open': '23.6800',
    '2. high': '26.2950',
    '3. low': '22.5250',
    '4. close': '25.7100',
    '5. volume': '149823'
  },
  '2010-09-30': {
    '1. open': '24.3600',
    '2. high': '24.3600',
    '3. low': '22.5100',
    '4. close': '23.4500',
    '5. volume': '129393'
  },
  '2010-08-31': {
    '1. open': '24.5100',
    '2. high': '25.6000',
    '3. low': '22.5000',
    '4. close': '24.4800',
    '5. volume': '214392'
  },
  '2010-07-30': {
    '1. open': '23.3000',
    '2. high': '26.2400',
    '3. low': '22.0550',
    '4. close': '24.7900',
    '5. volume': '224425'
  },
  '2010-06-30': {
    '1. open': '20.6100',
    '2. high': '23.7800',
    '3. low': '19.8700',
    '4. close': '23.5000',
    '5. volume': '249332'
  },
  '2010-05-31': {
    '1. open': '19.9500',
    '2. high': '21.3950',
    '3. low': '18.0600',
    '4. close': '20.6000',
    '5. volume': '326015'
  },
  '2010-04-30': {
    '1. open': '22.6000',
    '2. high': '22.9500',
    '3. low': '19.6100',
    '4. close': '20.2100',
    '5. volume': '317471'
  },
  '2010-03-31': {
    '1. open': '24.1200',
    '2. high': '24.8000',
    '3. low': '22.2600',
    '4. close': '22.7500',
    '5. volume': '303008'
  },
  '2010-02-26': {
    '1. open': '20.7000',
    '2. high': '24.2800',
    '3. low': '19.4900',
    '4. close': '23.6400',
    '5. volume': '279574'
  },
  '2010-01-29': {
    '1. open': '17.6500',
    '2. high': '22.4400',
    '3. low': '16.0000',
    '4. close': '20.7800',
    '5. volume': '621130'
  },
  '2009-12-30': {
    '1. open': '19.2000',
    '2. high': '19.3900',
    '3. low': '16.7200',
    '4. close': '17.5000',
    '5. volume': '302965'
  },
  '2009-11-30': {
    '1. open': '18.3500',
    '2. high': '21.2400',
    '3. low': '17.6000',
    '4. close': '19.2500',
    '5. volume': '290929'
  },
  '2009-10-30': {
    '1. open': '18.8100',
    '2. high': '19.9000',
    '3. low': '16.5300',
    '4. close': '18.9200',
    '5. volume': '255565'
  },
  '2009-09-30': {
    '1. open': '16.8000',
    '2. high': '20.0300',
    '3. low': '15.5000',
    '4. close': '18.6000',
    '5. volume': '198990'
  },
  '2009-08-31': {
    '1. open': '17.2000',
    '2. high': '18.3900',
    '3. low': '16.7000',
    '4. close': '17.0300',
    '5. volume': '210279'
  },
  '2009-07-31': {
    '1. open': '10.6000',
    '2. high': '17.3900',
    '3. low': '10.6000',
    '4. close': '17.3000',
    '5. volume': '291006'
  },
  '2009-06-30': {
    '1. open': '11.1800',
    '2. high': '11.6800',
    '3. low': '10.4000',
    '4. close': '10.8500',
    '5. volume': '89460'
  },
  '2009-05-29': {
    '1. open': '8.2600',
    '2. high': '11.4000',
    '3. low': '7.9900',
    '4. close': '11.0500',
    '5. volume': '188009'
  },
  '2009-04-30': {
    '1. open': '7.3000',
    '2. high': '9.1500',
    '3. low': '6.7600',
    '4. close': '8.2000',
    '5. volume': '109324'
  },
  '2009-03-31': {
    '1. open': '6.4000',
    '2. high': '7.1900',
    '3. low': '5.5100',
    '4. close': '7.1900',
    '5. volume': '34548'
  },
  '2009-02-27': {
    '1. open': '6.6000',
    '2. high': '7.0600',
    '3. low': '6.3800',
    '4. close': '6.6000',
    '5. volume': '29874'
  },
  '2009-01-30': {
    '1. open': '8.8800',
    '2. high': '8.8800',
    '3. low': '6.3500',
    '4. close': '6.6000',
    '5. volume': '56943'
  },
  '2008-12-30': {
    '1. open': '7.8800',
    '2. high': '8.9000',
    '3. low': '7.4400',
    '4. close': '8.9000',
    '5. volume': '60235'
  },
  '2008-11-28': {
    '1. open': '7.7000',
    '2. high': '8.5000',
    '3. low': '7.4000',
    '4. close': '8.1900',
    '5. volume': '65154'
  },
  '2008-10-31': {
    '1. open': '9.0000',
    '2. high': '9.3000',
    '3. low': '7.2000',
    '4. close': '7.3300',
    '5. volume': '66361'
  },
  '2008-09-30': {
    '1. open': '9.3300',
    '2. high': '9.9000',
    '3. low': '8.8000',
    '4. close': '9.0000',
    '5. volume': '59172'
  },
  '2008-08-29': {
    '1. open': '9.3000',
    '2. high': '10.0000',
    '3. low': '9.0100',
    '4. close': '9.2200',
    '5. volume': '33669'
  },
  '2008-07-31': {
    '1. open': '9.5000',
    '2. high': '9.6300',
    '3. low': '9.0000',
    '4. close': '9.5000',
    '5. volume': '20390'
  },
  '2008-06-30': {
    '1. open': '9.9900',
    '2. high': '10.3000',
    '3. low': '9.0500',
    '4. close': '9.6900',
    '5. volume': '43516'
  },
  '2008-05-30': {
    '1. open': '9.6000',
    '2. high': '10.4900',
    '3. low': '9.4000',
    '4. close': '9.8800',
    '5. volume': '32144'
  },
  '2008-04-30': {
    '1. open': '8.8000',
    '2. high': '9.4000',
    '3. low': '8.7000',
    '4. close': '9.3900',
    '5. volume': '15512'
  },
  '2008-03-31': {
    '1. open': '9.3500',
    '2. high': '9.5900',
    '3. low': '8.7000',
    '4. close': '8.8000',
    '5. volume': '20533'
  },
  '2008-02-29': {
    '1. open': '9.0000',
    '2. high': '9.7500',
    '3. low': '8.7100',
    '4. close': '9.4400',
    '5. volume': '27876'
  },
  '2008-01-31': {
    '1. open': '9.7600',
    '2. high': '10.0000',
    '3. low': '8.7000',
    '4. close': '9.0000',
    '5. volume': '62548'
  },
  '2007-12-28': {
    '1. open': '10.0000',
    '2. high': '10.4000',
    '3. low': '9.8000',
    '4. close': '9.8600',
    '5. volume': '19440'
  },
  '2007-11-30': {
    '1. open': '11.8000',
    '2. high': '11.9900',
    '3. low': '9.6200',
    '4. close': '9.9500',
    '5. volume': '73689'
  },
  '2007-10-31': {
    '1. open': '10.9500',
    '2. high': '12.2100',
    '3. low': '10.7500',
    '4. close': '12.0000',
    '5. volume': '57721'
  },
  '2007-09-28': {
    '1. open': '11.4000',
    '2. high': '11.4500',
    '3. low': '10.5000',
    '4. close': '10.9500',
    '5. volume': '57396'
  },
  '2007-08-31': {
    '1. open': '11.7500',
    '2. high': '12.1600',
    '3. low': '10.6500',
    '4. close': '11.2700',
    '5. volume': '44654'
  },
  '2007-07-31': {
    '1. open': '12.5000',
    '2. high': '13.2000',
    '3. low': '11.7200',
    '4. close': '12.0000',
    '5. volume': '89579'
  },
  '2007-06-29': {
    '1. open': '12.3000',
    '2. high': '12.7000',
    '3. low': '12.0100',
    '4. close': '12.4700',
    '5. volume': '124323'
  },
  '2007-05-31': {
    '1. open': '12.3000',
    '2. high': '12.4800',
    '3. low': '11.6600',
    '4. close': '12.4000',
    '5. volume': '140248'
  },
  '2007-04-30': {
    '1. open': '11.7000',
    '2. high': '12.4800',
    '3. low': '11.5200',
    '4. close': '12.4000',
    '5. volume': '49464'
  },
  '2007-03-30': {
    '1. open': '10.9500',
    '2. high': '11.9900',
    '3. low': '10.3900',
    '4. close': '11.7100',
    '5. volume': '102010'
  },
  '2007-02-28': {
    '1. open': '12.1100',
    '2. high': '12.1100',
    '3. low': '10.0000',
    '4. close': '10.8000',
    '5. volume': '158742'
  },
  '2007-01-31': {
    '1. open': '11.7000',
    '2. high': '12.7800',
    '3. low': '11.2200',
    '4. close': '12.1000',
    '5. volume': '89556'
  },
  '2006-12-29': {
    '1. open': '12.0100',
    '2. high': '12.3400',
    '3. low': '11.3100',
    '4. close': '12.0200',
    '5. volume': '95745'
  },
  '2006-11-30': {
    '1. open': '12.2000',
    '2. high': '12.7200',
    '3. low': '11.4000',
    '4. close': '12.3400',
    '5. volume': '99091'
  },
  '2006-10-31': {
    '1. open': '12.2000',
    '2. high': '13.2500',
    '3. low': '11.7600',
    '4. close': '12.3500',
    '5. volume': '49433'
  },
  '2006-09-29': {
    '1. open': '11.8100',
    '2. high': '12.2300',
    '3. low': '11.4400',
    '4. close': '12.2200',
    '5. volume': '33372'
  },
  '2006-08-31': {
    '1. open': '11.8500',
    '2. high': '12.2100',
    '3. low': '11.5800',
    '4. close': '12.0600',
    '5. volume': '29157'
  },
  '2006-07-31': {
    '1. open': '11.9500',
    '2. high': '12.1900',
    '3. low': '11.1100',
    '4. close': '11.5300',
    '5. volume': '21105'
  },
  '2006-06-30': {
    '1. open': '12.2000',
    '2. high': '12.4000',
    '3. low': '11.3300',
    '4. close': '12.0200',
    '5. volume': '33288'
  },
  '2006-05-31': {
    '1. open': '14.8000',
    '2. high': '14.8000',
    '3. low': '11.2600',
    '4. close': '11.9500',
    '5. volume': '92751'
  },
  '2006-04-28': {
    '1. open': '13.3000',
    '2. high': '14.8800',
    '3. low': '13.3000',
    '4. close': '14.5000',
    '5. volume': '131972'
  },
  '2006-03-31': {
    '1. open': '13.4000',
    '2. high': '13.8200',
    '3. low': '11.8000',
    '4. close': '13.4200',
    '5. volume': '63817'
  },
  '2006-02-28': {
    '1. open': '12.6000',
    '2. high': '13.5500',
    '3. low': '12.2000',
    '4. close': '13.5500',
    '5. volume': '79502'
  },
  '2006-01-31': {
    '1. open': '10.4000',
    '2. high': '13.3000',
    '3. low': '10.2000',
    '4. close': '12.8500',
    '5. volume': '93790'
  },
  '2005-12-30': {
    '1. open': '10.8000',
    '2. high': '11.2900',
    '3. low': '9.8000',
    '4. close': '10.2000',
    '5. volume': '75444'
  },
  '2005-11-30': {
    '1. open': '11.6000',
    '2. high': '12.5400',
    '3. low': '10.5000',
    '4. close': '10.9500',
    '5. volume': '99319'
  },
  '2005-10-31': {
    '1. open': '13.4000',
    '2. high': '13.6400',
    '3. low': '11.5600',
    '4. close': '11.6000',
    '5. volume': '54092'
  },
  '2005-09-30': {
    '1. open': '13.8000',
    '2. high': '13.9500',
    '3. low': '12.5100',
    '4. close': '13.5100',
    '5. volume': '68702'
  },
  '2005-08-31': {
    '1. open': '12.8400',
    '2. high': '14.0000',
    '3. low': '12.0100',
    '4. close': '13.8000',
    '5. volume': '79541'
  },
  '2005-07-29': {
    '1. open': '13.5000',
    '2. high': '13.8000',
    '3. low': '12.6000',
    '4. close': '12.6000',
    '5. volume': '54614'
  },
  '2005-06-30': {
    '1. open': '10.6500',
    '2. high': '13.6000',
    '3. low': '10.4000',
    '4. close': '13.2000',
    '5. volume': '109531'
  },
  '2005-05-31': {
    '1. open': '10.5000',
    '2. high': '11.2400',
    '3. low': '10.2000',
    '4. close': '10.9000',
    '5. volume': '42805'
  },
  '2005-04-29': {
    '1. open': '11.5000',
    '2. high': '12.2000',
    '3. low': '9.9500',
    '4. close': '10.5000',
    '5. volume': '122043'
  },
  '2005-03-31': {
    '1. open': '10.2900',
    '2. high': '12.0000',
    '3. low': '10.2000',
    '4. close': '11.6000',
    '5. volume': '92929'
  },
  '2005-02-28': {
    '1. open': '9.4000',
    '2. high': '11.5000',
    '3. low': '9.2000',
    '4. close': '10.3000',
    '5. volume': '133167'
  },
  '2005-01-31': {
    '1. open': '8.3500',
    '2. high': '10.3000',
    '3. low': '8.3500',
    '4. close': '9.4100',
    '5. volume': '106141'
  },
  '2004-12-30': {
    '1. open': '8.3000',
    '2. high': '8.9900',
    '3. low': '8.1500',
    '4. close': '8.2000',
    '5. volume': '43856'
  },
  '2004-11-30': {
    '1. open': '9.0000',
    '2. high': '9.2000',
    '3. low': '8.2000',
    '4. close': '8.2500',
    '5. volume': '77400'
  },
  '2004-10-29': {
    '1. open': '8.9600',
    '2. high': '9.4000',
    '3. low': '8.9500',
    '4. close': '9.0500',
    '5. volume': '68443'
  },
  '2004-09-30': {
    '1. open': '7.4200',
    '2. high': '9.3900',
    '3. low': '7.4200',
    '4. close': '9.0000',
    '5. volume': '64049'
  },
  '2004-08-31': {
    '1. open': '7.9500',
    '2. high': '8.2400',
    '3. low': '6.9500',
    '4. close': '7.5000',
    '5. volume': '38665'
  },
  '2004-07-30': {
    '1. open': '9.2000',
    '2. high': '9.2000',
    '3. low': '7.9000',
    '4. close': '8.0500',
    '5. volume': '35217'
  },
  '2004-06-30': {
    '1. open': '9.0000',
    '2. high': '9.2900',
    '3. low': '8.5000',
    '4. close': '9.1500',
    '5. volume': '32260'
  },
  '2004-05-31': {
    '1. open': '9.4000',
    '2. high': '9.4000',
    '3. low': '8.6100',
    '4. close': '9.1000',
    '5. volume': '47571'
  },
  '2004-04-30': {
    '1. open': '8.6000',
    '2. high': '9.4900',
    '3. low': '8.6000',
    '4. close': '9.3700',
    '5. volume': '60976'
  },
  '2004-03-31': {
    '1. open': '9.5400',
    '2. high': '9.7000',
    '3. low': '7.8300',
    '4. close': '8.8500',
    '5. volume': '66687'
  },
  '2004-02-27': {
    '1. open': '8.0000',
    '2. high': '10.1500',
    '3. low': '7.4000',
    '4. close': '9.3500',
    '5. volume': '136050'
  },
  '2004-01-30': {
    '1. open': '7.1000',
    '2. high': '8.6500',
    '3. low': '6.9000',
    '4. close': '8.2000',
    '5. volume': '131897'
  },
  '2003-12-30': {
    '1. open': '7.3200',
    '2. high': '7.9200',
    '3. low': '6.9000',
    '4. close': '7.1800',
    '5. volume': '83186'
  },
  '2003-11-28': {
    '1. open': '10.3500',
    '2. high': '10.8000',
    '3. low': '6.3100',
    '4. close': '7.4500',
    '5. volume': '192706'
  },
  '2003-10-31': {
    '1. open': '6.0000',
    '2. high': '12.3500',
    '3. low': '5.7600',
    '4. close': '10.0700',
    '5. volume': '317759'
  },
  '2003-09-30': {
    '1. open': '4.9500',
    '2. high': '6.6500',
    '3. low': '4.8500',
    '4. close': '6.1300',
    '5. volume': '161300'
  },
  '2003-08-29': {
    '1. open': '5.0000',
    '2. high': '5.0000',
    '3. low': '4.6500',
    '4. close': '4.9000',
    '5. volume': '26438'
  },
  '2003-07-31': {
    '1. open': '5.2100',
    '2. high': '6.0000',
    '3. low': '4.5000',
    '4. close': '4.8100',
    '5. volume': '42393'
  },
  '2003-06-30': {
    '1. open': '4.2000',
    '2. high': '5.5500',
    '3. low': '4.2000',
    '4. close': '5.5000',
    '5. volume': '91997'
  },
  '2003-05-30': {
    '1. open': '3.6000',
    '2. high': '4.5000',
    '3. low': '3.5900',
    '4. close': '4.1100',
    '5. volume': '274642'
  },
  '2003-04-30': {
    '1. open': '3.4800',
    '2. high': '3.4800',
    '3. low': '3.2000',
    '4. close': '3.3500',
    '5. volume': '80611'
  },
  '2003-03-31': {
    '1. open': '3.6000',
    '2. high': '3.6000',
    '3. low': '3.3000',
    '4. close': '3.3000',
    '5. volume': '32863'
  },
  '2003-02-28': {
    '1. open': '3.2000',
    '2. high': '3.7000',
    '3. low': '3.0000',
    '4. close': '3.5000',
    '5. volume': '76126'
  },
  '2003-01-31': {
    '1. open': '2.8500',
    '2. high': '3.3500',
    '3. low': '2.8000',
    '4. close': '3.1500',
    '5. volume': '47919'
  },
  '2002-12-30': {
    '1. open': '3.8000',
    '2. high': '3.8000',
    '3. low': '2.7000',
    '4. close': '2.7500',
    '5. volume': '27760'
  },
  '2002-11-29': {
    '1. open': '3.3900',
    '2. high': '4.1000',
    '3. low': '3.3500',
    '4. close': '3.7000',
    '5. volume': '96872'
  },
  '2002-10-31': {
    '1. open': '3.3000',
    '2. high': '4.0000',
    '3. low': '3.0000',
    '4. close': '3.2500',
    '5. volume': '137429'
  },
  '2002-09-30': {
    '1. open': '3.9900',
    '2. high': '4.1500',
    '3. low': '3.3000',
    '4. close': '3.3000',
    '5. volume': '16825'
  },
  '2002-08-30': {
    '1. open': '5.4000',
    '2. high': '5.5500',
    '3. low': '3.8500',
    '4. close': '4.1000',
    '5. volume': '63183'
  },
  '2002-07-31': {
    '1. open': '5.2000',
    '2. high': '6.7700',
    '3. low': '5.1000',
    '4. close': '5.4100',
    '5. volume': '72337'
  },
  '2002-06-28': {
    '1. open': '6.6600',
    '2. high': '6.7000',
    '3. low': '5.0500',
    '4. close': '5.2000',
    '5. volume': '49667'
  },
  '2002-05-31': {
    '1. open': '10.5000',
    '2. high': '11.0000',
    '3. low': '6.3500',
    '4. close': '6.6000',
    '5. volume': '187147'
  },
  '2002-04-30': {
    '1. open': '14.6000',
    '2. high': '14.6000',
    '3. low': '10.1500',
    '4. close': '10.7500',
    '5. volume': '70817'
  },
  '2002-03-28': {
    '1. open': '13.8000',
    '2. high': '15.4000',
    '3. low': '13.8000',
    '4. close': '14.5000',
    '5. volume': '30362'
  },
  '2002-02-28': {
    '1. open': '16.9000',
    '2. high': '17.3000',
    '3. low': '13.7500',
    '4. close': '13.7500',
    '5. volume': '38415'
  },
  '2002-01-31': {
    '1. open': '13.4700',
    '2. high': '18.0000',
    '3. low': '13.4700',
    '4. close': '17.1500',
    '5. volume': '96244'
  },
  '2001-12-28': {
    '1. open': '21.3000',
    '2. high': '21.5900',
    '3. low': '13.0000',
    '4. close': '13.4700',
    '5. volume': '28039'
  },
  '2001-11-30': {
    '1. open': '17.8000',
    '2. high': '22.9000',
    '3. low': '16.5000',
    '4. close': '21.5000',
    '5. volume': '51237'
  },
  '2001-10-31': {
    '1. open': '14.9800',
    '2. high': '18.9500',
    '3. low': '12.7000',
    '4. close': '18.1000',
    '5. volume': '51570'
  },
  '2001-09-28': {
    '1. open': '19.0500',
    '2. high': '19.2700',
    '3. low': '10.3000',
    '4. close': '15.9800',
    '5. volume': '86783'
  },
  '2001-08-31': {
    '1. open': '29.9000',
    '2. high': '29.9500',
    '3. low': '18.2900',
    '4. close': '19.8100',
    '5. volume': '39295'
  },
  '2001-07-31': {
    '1. open': '29.6900',
    '2. high': '33.6500',
    '3. low': '25.2000',
    '4. close': '30.0100',
    '5. volume': '48623'
  },
  '2001-06-29': {
    '1. open': '31.4900',
    '2. high': '33.3000',
    '3. low': '25.2100',
    '4. close': '29.3500',
    '5. volume': '46986'
  },
  '2001-05-31': {
    '1. open': '28.3000',
    '2. high': '34.4900',
    '3. low': '27.5500',
    '4. close': '31.8500',
    '5. volume': '85367'
  },
  '2001-04-30': {
    '1. open': '26.7500',
    '2. high': '27.7000',
    '3. low': '22.4500',
    '4. close': '27.7000',
    '5. volume': '54780'
  },
  '2001-03-30': {
    '1. open': '40.6000',
    '2. high': '41.2000',
    '3. low': '21.1500',
    '4. close': '26.1500',
    '5. volume': '69661'
  },
  '2001-02-28': {
    '1. open': '49.5000',
    '2. high': '50.0000',
    '3. low': '37.9000',
    '4. close': '40.5000',
    '5. volume': '70367'
  },
  '2001-01-31': {
    '1. open': '52.5000',
    '2. high': '58.7000',
    '3. low': '39.2000',
    '4. close': '48.9000',
    '5. volume': '61739'
  },
  '2000-12-29': {
    '1. open': '47.2000',
    '2. high': '58.2000',
    '3. low': '47.2000',
    '4. close': '52.1000',
    '5. volume': '42756'
  },
  '2000-11-30': {
    '1. open': '56.4800',
    '2. high': '63.5000',
    '3. low': '41.5000',
    '4. close': '47.5000',
    '5. volume': '67976'
  },
  '2000-10-31': {
    '1. open': '74.4000',
    '2. high': '75.3500',
    '3. low': '56.9000',
    '4. close': '57.2700',
    '5. volume': '21700'
  },
  '2000-09-29': {
    '1. open': '77.5000',
    '2. high': '82.1000',
    '3. low': '65.0000',
    '4. close': '73.4000',
    '5. volume': '29097'
  },
  '2000-08-31': {
    '1. open': '67.5000',
    '2. high': '83.0000',
    '3. low': '60.0000',
    '4. close': '77.3500',
    '5. volume': '60361'
  },
  '2000-07-31': {
    '1. open': '88.7600',
    '2. high': '88.7600',
    '3. low': '66.0000',
    '4. close': '67.5000',
    '5. volume': '14971'
  },
  '2000-06-30': {
    '1. open': '89.9800',
    '2. high': '98.5000',
    '3. low': '83.0000',
    '4. close': '85.9100',
    '5. volume': '30796'
  },
  '2000-05-31': {
    '1. open': '98.0000',
    '2. high': '103.5000',
    '3. low': '82.5000',
    '4. close': '87.5000',
    '5. volume': '7029'
  },
  '2000-04-28': {
    '1. open': '106.6500',
    '2. high': '110.1900',
    '3. low': '95.9500',
    '4. close': '98.0000',
    '5. volume': '10751'
  },
  '2000-03-31': {
    '1. open': '140.0700',
    '2. high': '142.5200',
    '3. low': '99.0000',
    '4. close': '102.6000',
    '5. volume': '53603'
  },
  '2000-02-29': {
    '1. open': '58.0000',
    '2. high': '132.9500',
    '3. low': '57.0000',
    '4. close': '132.9500',
    '5. volume': '95031'
  },
  '2000-01-31': {
    '1. open': '50.0000',
    '2. high': '65.0000',
    '3. low': '42.6500',
    '4. close': '58.0000',
    '5. volume': '69026'
  },
  '1999-12-30': {
    '1. open': '46.4000',
    '2. high': '55.4500',
    '3. low': '45.5500',
    '4. close': '50.2500',
    '5. volume': '45714'
  }
};

// tslint:disable:max-line-length
export const eckertCompany: Company = {
  id: 1129,
  name: 'Eckert & Ziegler Strahlen- und Medizintechnik AG',
  country: Country.Deutschland,
  city: 'Berlin',
  url: 'http://www.ezag.de/',
  description: 'Die Eckert & Ziegler Strahlen- und Medizintechnik AG entwickelt und produziert isotopentechnische Komponenten für die medizinische, wissenschaftliche und messtechnische Anwendung. Das Unternehmen beschäftigte 788 Mitarbeiter zum Jahresende 2018. Der Konzernumsatz betrug im Geschäftsjahr 2018 168,7 Mio. €.[1] Seit 24. Juni 2019 ist die Aktie des Unternehmens Bestandteil des SDAX der Deutschen Börse.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Eckert_%26_Ziegler',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Eckert_logo.svg/500px-Eckert_logo.svg.png',
  products: [],
  industries: [161210],
  currency: Currency.EUR,
  isin: 'DE0005659700',
  wkn: '565970',
  symbol: 'EUZ.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Strahlungstechnologien', 'Krebsheilmittel', 'Herzheilmittel', 'radioaktive Komponenten']
};
// tslint:enable:max-line-length

