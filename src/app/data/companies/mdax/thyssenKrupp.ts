import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2019, rate: 0, yield: 0}, {year: 2018, rate: 0.15, yield: 0.69}, {year: 2017, rate: 0.15}, {year: 2016, rate: 0.15}, {
    year: 2015,
    rate: 0.15,
    yield: 0.96
  }, {year: 2014, rate: 0.11, yield: 0.53}, {year: 2013, rate: 0.00, yield: 0.00}, {year: 2012, rate: 0.00, yield: 0.00}, {
    year: 2011,
    rate: 0.45,
    yield: 2.43
  }, {year: 2010, rate: 0.45, yield: 1.88}, {year: 2009, rate: 0.30, yield: 1.27}, {year: 2008, rate: 1.30, yield: 6.18}, {
    year: 2007,
    rate: 1.30,
    yield: 2.91
  }, {year: 2006, rate: 1.00, yield: 3.76}, {year: 2005, rate: 0.80, yield: 4.61}, {year: 2004, rate: 0.60, yield: 3.82}, {
    year: 2003,
    rate: 0.50,
    yield: 4.34
  }, {year: 2002, rate: 0.40, yield: 3.57}, {year: 2001, rate: 0.60, yield: 5.31}, {year: 2000, rate: 0.75, yield: 4.87}, {
    year: 1999,
    rate: 0.72,
    yield: 3.85
  }
];
const prices = {
  '2019-11-21': {
    '1. open': '12.9600',
    '2. high': '13.9500',
    '3. low': '11.9300',
    '4. close': '12.0850',
    '5. volume': '49693990'
  },
  '2019-10-31': {
    '1. open': '12.7600',
    '2. high': '13.7600',
    '3. low': '12.1100',
    '4. close': '12.7950',
    '5. volume': '68640135'
  },
  '2019-09-30': {
    '1. open': '11.1000',
    '2. high': '13.2650',
    '3. low': '10.5850',
    '4. close': '12.7050',
    '5. volume': '114155756'
  },
  '2019-08-30': {
    '1. open': '11.5800',
    '2. high': '11.8750',
    '3. low': '9.2520',
    '4. close': '11.1150',
    '5. volume': '125937890'
  },
  '2019-07-31': {
    '1. open': '13.1500',
    '2. high': '13.2950',
    '3. low': '11.2100',
    '4. close': '11.6900',
    '5. volume': '115124821'
  },
  '2019-06-28': {
    '1. open': '11.2400',
    '2. high': '12.9350',
    '3. low': '11.0300',
    '4. close': '12.8250',
    '5. volume': '99696518'
  },
  '2019-05-31': {
    '1. open': '12.4000',
    '2. high': '14.4650',
    '3. low': '11.1650',
    '4. close': '11.3350',
    '5. volume': '178759963'
  },
  '2019-04-30': {
    '1. open': '12.5000',
    '2. high': '13.7950',
    '3. low': '12.3200',
    '4. close': '12.5350',
    '5. volume': '95207491'
  },
  '2019-03-29': {
    '1. open': '13.2450',
    '2. high': '13.4050',
    '3. low': '11.7750',
    '4. close': '12.2450',
    '5. volume': '83664655'
  },
  '2019-02-28': {
    '1. open': '15.5000',
    '2. high': '16.3100',
    '3. low': '12.9100',
    '4. close': '13.1500',
    '5. volume': '106666693'
  },
  '2019-01-31': {
    '1. open': '14.8750',
    '2. high': '16.5700',
    '3. low': '14.4200',
    '4. close': '15.4700',
    '5. volume': '64985248'
  },
  '2018-12-28': {
    '1. open': '16.9150',
    '2. high': '17.3450',
    '3. low': '14.5850',
    '4. close': '14.9800',
    '5. volume': '52525933'
  },
  '2018-11-30': {
    '1. open': '18.5250',
    '2. high': '19.5850',
    '3. low': '15.5200',
    '4. close': '16.4950',
    '5. volume': '85844098'
  },
  '2018-10-31': {
    '1. open': '21.8500',
    '2. high': '21.9900',
    '3. low': '17.6600',
    '4. close': '18.5750',
    '5. volume': '82872822'
  },
  '2018-09-28': {
    '1. open': '19.8050',
    '2. high': '23.5000',
    '3. low': '18.7500',
    '4. close': '21.7400',
    '5. volume': '71271478'
  },
  '2018-08-31': {
    '1. open': '22.0700',
    '2. high': '22.9000',
    '3. low': '18.8850',
    '4. close': '19.9100',
    '5. volume': '68555339'
  },
  '2018-07-31': {
    '1. open': '20.8400',
    '2. high': '23.7000',
    '3. low': '20.2300',
    '4. close': '22.8200',
    '5. volume': '81419570'
  },
  '2018-06-29': {
    '1. open': '22.6400',
    '2. high': '24.1000',
    '3. low': '19.8750',
    '4. close': '20.8200',
    '5. volume': '71953131'
  },
  '2018-05-31': {
    '1. open': '21.6100',
    '2. high': '23.8900',
    '3. low': '21.3300',
    '4. close': '22.5700',
    '5. volume': '70786193'
  },
  '2018-04-30': {
    '1. open': '21.0000',
    '2. high': '23.1300',
    '3. low': '20.8300',
    '4. close': '21.6000',
    '5. volume': '49405354'
  },
  '2018-03-29': {
    '1. open': '22.3300',
    '2. high': '22.3600',
    '3. low': '20.6700',
    '4. close': '21.1900',
    '5. volume': '59687818'
  },
  '2018-02-28': {
    '1. open': '25.4900',
    '2. high': '25.5900',
    '3. low': '22.1100',
    '4. close': '22.3200',
    '5. volume': '49560723'
  },
  '2018-01-31': {
    '1. open': '24.2300',
    '2. high': '26.5200',
    '3. low': '23.7400',
    '4. close': '25.3400',
    '5. volume': '51100490'
  },
  '2017-12-29': {
    '1. open': '22.9750',
    '2. high': '24.3050',
    '3. low': '22.1050',
    '4. close': '24.2150',
    '5. volume': '45225573'
  },
  '2017-11-30': {
    '1. open': '23.1050',
    '2. high': '23.7400',
    '3. low': '21.3500',
    '4. close': '22.9900',
    '5. volume': '64574924'
  },
  '2017-10-31': {
    '1. open': '25.1600',
    '2. high': '25.2600',
    '3. low': '22.6450',
    '4. close': '22.9050',
    '5. volume': '72987233'
  },
  '2017-09-29': {
    '1. open': '25.5200',
    '2. high': '26.9000',
    '3. low': '24.1800',
    '4. close': '25.0750',
    '5. volume': '69383975'
  },
  '2017-08-31': {
    '1. open': '25.0600',
    '2. high': '26.7500',
    '3. low': '24.2900',
    '4. close': '25.1900',
    '5. volume': '53692743'
  },
  '2017-07-31': {
    '1. open': '25.3600',
    '2. high': '27.0700',
    '3. low': '25.0400',
    '4. close': '25.0850',
    '5. volume': '50905961'
  },
  '2017-06-30': {
    '1. open': '23.5050',
    '2. high': '26.0400',
    '3. low': '22.8150',
    '4. close': '24.8750',
    '5. volume': '54302244'
  },
  '2017-05-31': {
    '1. open': '21.8400',
    '2. high': '24.3500',
    '3. low': '21.0500',
    '4. close': '23.6100',
    '5. volume': '60844323'
  },
  '2017-04-28': {
    '1. open': '23.0450',
    '2. high': '23.3950',
    '3. low': '21.2150',
    '4. close': '21.8550',
    '5. volume': '43401453'
  },
  '2017-03-31': {
    '1. open': '23.7850',
    '2. high': '24.1000',
    '3. low': '21.8700',
    '4. close': '22.9600',
    '5. volume': '50668130'
  },
  '2017-02-28': {
    '1. open': '23.4250',
    '2. high': '24.6900',
    '3. low': '22.1450',
    '4. close': '23.5950',
    '5. volume': '51430529'
  },
  '2017-01-31': {
    '1. open': '22.6000',
    '2. high': '24.6150',
    '3. low': '22.1750',
    '4. close': '23.3500',
    '5. volume': '48242031'
  },
  '2016-12-30': {
    '1. open': '21.3500',
    '2. high': '24.3350',
    '3. low': '20.9900',
    '4. close': '22.6400',
    '5. volume': '48444053'
  },
  '2016-11-30': {
    '1. open': '21.2000',
    '2. high': '22.2950',
    '3. low': '19.4100',
    '4. close': '21.4200',
    '5. volume': '55037679'
  },
  '2016-10-31': {
    '1. open': '21.1700',
    '2. high': '22.9900',
    '3. low': '20.7400',
    '4. close': '21.0900',
    '5. volume': '43402938'
  },
  '2016-09-30': {
    '1. open': '20.9250',
    '2. high': '22.3950',
    '3. low': '20.0850',
    '4. close': '21.2200',
    '5. volume': '40592064'
  },
  '2016-08-31': {
    '1. open': '20.6200',
    '2. high': '22.2200',
    '3. low': '19.4300',
    '4. close': '20.8950',
    '5. volume': '39521347'
  },
  '2016-07-29': {
    '1. open': '18.1450',
    '2. high': '20.5650',
    '3. low': '16.5950',
    '4. close': '20.5000',
    '5. volume': '44344222'
  },
  '2016-06-30': {
    '1. open': '19.9000',
    '2. high': '20.2350',
    '3. low': '16.8250',
    '4. close': '18.0100',
    '5. volume': '54979926'
  },
  '2016-05-31': {
    '1. open': '20.2200',
    '2. high': '20.4950',
    '3. low': '17.3150',
    '4. close': '19.7850',
    '5. volume': '50292428'
  },
  '2016-04-29': {
    '1. open': '18.8550',
    '2. high': '21.9250',
    '3. low': '17.9250',
    '4. close': '20.3100',
    '5. volume': '61706605'
  },
  '2016-03-31': {
    '1. open': '15.6000',
    '2. high': '18.4750',
    '3. low': '15.5550',
    '4. close': '18.2600',
    '5. volume': '53750539'
  },
  '2016-02-29': {
    '1. open': '14.1800',
    '2. high': '15.6400',
    '3. low': '12.5600',
    '4. close': '15.6150',
    '5. volume': '87983561'
  },
  '2016-01-29': {
    '1. open': '17.8350',
    '2. high': '17.8550',
    '3. low': '14.1250',
    '4. close': '14.2350',
    '5. volume': '61458410'
  },
  '2015-12-30': {
    '1. open': '20.1500',
    '2. high': '20.2400',
    '3. low': '16.7700',
    '4. close': '18.3400',
    '5. volume': '54534755'
  },
  '2015-11-30': {
    '1. open': '18.1800',
    '2. high': '20.2000',
    '3. low': '18.0350',
    '4. close': '20.1450',
    '5. volume': '54960934'
  },
  '2015-10-30': {
    '1. open': '15.8400',
    '2. high': '18.9750',
    '3. low': '15.4850',
    '4. close': '18.3450',
    '5. volume': '57316136'
  },
  '2015-09-30': {
    '1. open': '19.0650',
    '2. high': '19.2400',
    '3. low': '14.9350',
    '4. close': '15.6800',
    '5. volume': '55764077'
  },
  '2015-08-31': {
    '1. open': '22.8900',
    '2. high': '24.2850',
    '3. low': '17.8150',
    '4. close': '19.3250',
    '5. volume': '54031560'
  },
  '2015-07-31': {
    '1. open': '23.5250',
    '2. high': '25.1250',
    '3. low': '21.6500',
    '4. close': '23.0850',
    '5. volume': '46315689'
  },
  '2015-06-30': {
    '1. open': '24.2500',
    '2. high': '24.7000',
    '3. low': '22.6400',
    '4. close': '23.3350',
    '5. volume': '45590672'
  },
  '2015-05-29': {
    '1. open': '23.9900',
    '2. high': '26.4300',
    '3. low': '23.5300',
    '4. close': '24.1200',
    '5. volume': '46257630'
  },
  '2015-04-30': {
    '1. open': '24.4550',
    '2. high': '26.2200',
    '3. low': '23.6650',
    '4. close': '23.8600',
    '5. volume': '38810424'
  },
  '2015-03-31': {
    '1. open': '23.7650',
    '2. high': '25.6750',
    '3. low': '23.0250',
    '4. close': '24.4350',
    '5. volume': '44707521'
  },
  '2015-02-27': {
    '1. open': '22.8700',
    '2. high': '23.8250',
    '3. low': '22.4800',
    '4. close': '23.7900',
    '5. volume': '47107177'
  },
  '2015-01-30': {
    '1. open': '21.2750',
    '2. high': '23.2100',
    '3. low': '19.2400',
    '4. close': '23.0900',
    '5. volume': '64882277'
  },
  '2014-12-30': {
    '1. open': '21.0850',
    '2. high': '22.0000',
    '3. low': '19.7300',
    '4. close': '21.2600',
    '5. volume': '39785237'
  },
  '2014-11-28': {
    '1. open': '19.0650',
    '2. high': '21.8050',
    '3. low': '18.6900',
    '4. close': '21.2750',
    '5. volume': '54880918'
  },
  '2014-10-31': {
    '1. open': '20.6650',
    '2. high': '20.7250',
    '3. low': '16.8400',
    '4. close': '19.1750',
    '5. volume': '79286939'
  },
  '2014-09-30': {
    '1. open': '21.1350',
    '2. high': '22.2800',
    '3. low': '20.5850',
    '4. close': '20.7750',
    '5. volume': '39657245'
  },
  '2014-08-29': {
    '1. open': '21.0450',
    '2. high': '21.6100',
    '3. low': '19.7300',
    '4. close': '21.1250',
    '5. volume': '49474459'
  },
  '2014-07-31': {
    '1. open': '21.3900',
    '2. high': '22.7200',
    '3. low': '21.1300',
    '4. close': '21.1650',
    '5. volume': '42448599'
  },
  '2014-06-30': {
    '1. open': '22.1800',
    '2. high': '22.3150',
    '3. low': '20.8950',
    '4. close': '21.2900',
    '5. volume': '38101482'
  },
  '2014-05-30': {
    '1. open': '20.4900',
    '2. high': '22.8000',
    '3. low': '20.1750',
    '4. close': '22.0300',
    '5. volume': '50336944'
  },
  '2014-04-30': {
    '1. open': '19.6500',
    '2. high': '21.0200',
    '3. low': '19.2600',
    '4. close': '20.5200',
    '5. volume': '43869072'
  },
  '2014-03-31': {
    '1. open': '19.2100',
    '2. high': '19.9450',
    '3. low': '17.6550',
    '4. close': '19.4650',
    '5. volume': '57177464'
  },
  '2014-02-28': {
    '1. open': '19.0850',
    '2. high': '20.7200',
    '3. low': '18.3550',
    '4. close': '19.7600',
    '5. volume': '62386666'
  },
  '2014-01-31': {
    '1. open': '17.7500',
    '2. high': '19.5550',
    '3. low': '17.0250',
    '4. close': '19.0950',
    '5. volume': '61774014'
  },
  '2013-12-30': {
    '1. open': '18.1000',
    '2. high': '18.2800',
    '3. low': '16.5750',
    '4. close': '17.6900',
    '5. volume': '85016911'
  },
  '2013-11-29': {
    '1. open': '18.8300',
    '2. high': '19.6000',
    '3. low': '18.5250',
    '4. close': '19.2650',
    '5. volume': '44346424'
  },
  '2013-10-31': {
    '1. open': '17.8450',
    '2. high': '19.4300',
    '3. low': '17.7650',
    '4. close': '18.8250',
    '5. volume': '51641972'
  },
  '2013-09-30': {
    '1. open': '16.0800',
    '2. high': '18.4950',
    '3. low': '15.4050',
    '4. close': '17.6800',
    '5. volume': '70227253'
  },
  '2013-08-30': {
    '1. open': '16.3850',
    '2. high': '17.1700',
    '3. low': '15.5750',
    '4. close': '15.9050',
    '5. volume': '69641541'
  },
  '2013-07-31': {
    '1. open': '15.2000',
    '2. high': '17.4400',
    '3. low': '14.3350',
    '4. close': '16.3500',
    '5. volume': '80902197'
  },
  '2013-06-28': {
    '1. open': '15.3500',
    '2. high': '15.9700',
    '3. low': '14.0100',
    '4. close': '15.0950',
    '5. volume': '73850493'
  },
  '2013-05-31': {
    '1. open': '13.6000',
    '2. high': '15.8900',
    '3. low': '13.1700',
    '4. close': '15.4550',
    '5. volume': '90413156'
  },
  '2013-04-30': {
    '1. open': '15.8300',
    '2. high': '15.8750',
    '3. low': '13.1100',
    '4. close': '13.7350',
    '5. volume': '89216458'
  },
  '2013-03-28': {
    '1. open': '17.1700',
    '2. high': '18.5500',
    '3. low': '15.8200',
    '4. close': '15.8650',
    '5. volume': '70325274'
  },
  '2013-02-28': {
    '1. open': '17.9500',
    '2. high': '18.3600',
    '3. low': '16.8950',
    '4. close': '17.2750',
    '5. volume': '54036623'
  },
  '2013-01-31': {
    '1. open': '18.2550',
    '2. high': '19.2500',
    '3. low': '17.4500',
    '4. close': '17.8900',
    '5. volume': '64015856'
  },
  '2012-12-28': {
    '1. open': '15.5300',
    '2. high': '18.6700',
    '3. low': '15.4600',
    '4. close': '17.7600',
    '5. volume': '78625128'
  },
  '2012-11-30': {
    '1. open': '17.5000',
    '2. high': '18.5200',
    '3. low': '15.4450',
    '4. close': '15.5700',
    '5. volume': '71670704'
  },
  '2012-10-31': {
    '1. open': '16.6250',
    '2. high': '18.9600',
    '3. low': '16.4850',
    '4. close': '17.5550',
    '5. volume': '77354735'
  },
  '2012-09-28': {
    '1. open': '15.8400',
    '2. high': '18.5700',
    '3. low': '15.1900',
    '4. close': '16.5400',
    '5. volume': '80374455'
  },
  '2012-08-31': {
    '1. open': '14.9350',
    '2. high': '16.8000',
    '3. low': '14.3800',
    '4. close': '15.8400',
    '5. volume': '95272268'
  },
  '2012-07-31': {
    '1. open': '12.7350',
    '2. high': '15.2200',
    '3. low': '12.6600',
    '4. close': '14.9700',
    '5. volume': '108581411'
  },
  '2012-06-29': {
    '1. open': '13.3700',
    '2. high': '13.3800',
    '3. low': '11.4450',
    '4. close': '12.8350',
    '5. volume': '110778644'
  },
  '2012-05-31': {
    '1. open': '18.1450',
    '2. high': '18.3200',
    '3. low': '13.1750',
    '4. close': '13.3450',
    '5. volume': '102504971'
  },
  '2012-04-30': {
    '1. open': '18.7800',
    '2. high': '19.0450',
    '3. low': '16.9650',
    '4. close': '17.9000',
    '5. volume': '62905699'
  },
  '2012-03-30': {
    '1. open': '20.1850',
    '2. high': '20.7600',
    '3. low': '18.3050',
    '4. close': '18.6650',
    '5. volume': '67836226'
  },
  '2012-02-29': {
    '1. open': '21.7300',
    '2. high': '23.2900',
    '3. low': '19.9250',
    '4. close': '20.2550',
    '5. volume': '66342617'
  },
  '2012-01-31': {
    '1. open': '17.7700',
    '2. high': '22.3400',
    '3. low': '17.7700',
    '4. close': '21.6700',
    '5. volume': '97571709'
  },
  '2011-12-30': {
    '1. open': '19.1700',
    '2. high': '19.4500',
    '3. low': '16.7400',
    '4. close': '17.7250',
    '5. volume': '70179848'
  },
  '2011-11-30': {
    '1. open': '19.8600',
    '2. high': '21.6650',
    '3. low': '16.6700',
    '4. close': '19.1200',
    '5. volume': '77299039'
  },
  '2011-10-31': {
    '1. open': '17.5500',
    '2. high': '22.4900',
    '3. low': '16.7400',
    '4. close': '20.8550',
    '5. volume': '70260723'
  },
  '2011-09-30': {
    '1. open': '23.5650',
    '2. high': '23.6750',
    '3. low': '17.8100',
    '4. close': '18.5450',
    '5. volume': '86125602'
  },
  '2011-08-31': {
    '1. open': '31.3500',
    '2. high': '31.5500',
    '3. low': '20.2300',
    '4. close': '23.5100',
    '5. volume': '130564231'
  },
  '2011-07-29': {
    '1. open': '35.5100',
    '2. high': '35.6400',
    '3. low': '30.2600',
    '4. close': '30.8500',
    '5. volume': '77668750'
  },
  '2011-06-30': {
    '1. open': '32.9900',
    '2. high': '36.2000',
    '3. low': '31.9400',
    '4. close': '35.8350',
    '5. volume': '60105080'
  },
  '2011-05-31': {
    '1. open': '31.2200',
    '2. high': '33.9750',
    '3. low': '29.4550',
    '4. close': '33.0050',
    '5. volume': '61860254'
  },
  '2011-04-29': {
    '1. open': '28.9400',
    '2. high': '31.1450',
    '3. low': '28.3500',
    '4. close': '31.0650',
    '5. volume': '37245468'
  },
  '2011-03-31': {
    '1. open': '30.3600',
    '2. high': '30.7300',
    '3. low': '26.3400',
    '4. close': '28.8300',
    '5. volume': '58582264'
  },
  '2011-02-28': {
    '1. open': '29.7000',
    '2. high': '31.3500',
    '3. low': '29.1300',
    '4. close': '30.1300',
    '5. volume': '46447144'
  },
  '2011-01-31': {
    '1. open': '31.1000',
    '2. high': '32.0850',
    '3. low': '28.8150',
    '4. close': '29.5600',
    '5. volume': '64073190'
  },
  '2010-12-30': {
    '1. open': '29.7050',
    '2. high': '32.3150',
    '3. low': '29.6150',
    '4. close': '30.9850',
    '5. volume': '44026170'
  },
  '2010-11-30': {
    '1. open': '26.6750',
    '2. high': '31.2000',
    '3. low': '26.2450',
    '4. close': '29.4200',
    '5. volume': '61322690'
  },
  '2010-10-29': {
    '1. open': '24.0000',
    '2. high': '27.2100',
    '3. low': '23.8250',
    '4. close': '26.4400',
    '5. volume': '57405912'
  },
  '2010-09-30': {
    '1. open': '21.7000',
    '2. high': '24.4000',
    '3. low': '21.4250',
    '4. close': '23.9200',
    '5. volume': '62416958'
  },
  '2010-08-31': {
    '1. open': '23.0500',
    '2. high': '24.3850',
    '3. low': '21.1650',
    '4. close': '21.5950',
    '5. volume': '59885689'
  },
  '2010-07-30': {
    '1. open': '20.0600',
    '2. high': '23.7950',
    '3. low': '19.6750',
    '4. close': '22.7700',
    '5. volume': '68797106'
  },
  '2010-06-30': {
    '1. open': '21.8950',
    '2. high': '22.8000',
    '3. low': '20.2250',
    '4. close': '20.3500',
    '5. volume': '83262728'
  },
  '2010-05-31': {
    '1. open': '24.5900',
    '2. high': '25.0400',
    '3. low': '20.0000',
    '4. close': '21.9450',
    '5. volume': '103533712'
  },
  '2010-04-30': {
    '1. open': '25.5850',
    '2. high': '26.9800',
    '3. low': '24.2450',
    '4. close': '24.6200',
    '5. volume': '59191747'
  },
  '2010-03-31': {
    '1. open': '23.4400',
    '2. high': '26.3950',
    '3. low': '23.1700',
    '4. close': '25.4550',
    '5. volume': '63003827'
  },
  '2010-02-26': {
    '1. open': '22.9300',
    '2. high': '24.3500',
    '3. low': '21.7650',
    '4. close': '23.2500',
    '5. volume': '77042196'
  },
  '2010-01-29': {
    '1. open': '26.5000',
    '2. high': '28.2400',
    '3. low': '22.7550',
    '4. close': '22.9900',
    '5. volume': '75771719'
  },
  '2009-12-30': {
    '1. open': '24.6800',
    '2. high': '26.8900',
    '3. low': '24.0900',
    '4. close': '26.4000',
    '5. volume': '55101687'
  },
  '2009-11-30': {
    '1. open': '21.8900',
    '2. high': '25.3400',
    '3. low': '21.2800',
    '4. close': '24.2700',
    '5. volume': '70671077'
  },
  '2009-10-30': {
    '1. open': '23.5000',
    '2. high': '26.1500',
    '3. low': '21.7300',
    '4. close': '21.9000',
    '5. volume': '74604243'
  },
  '2009-09-30': {
    '1. open': '23.9500',
    '2. high': '25.3400',
    '3. low': '22.0600',
    '4. close': '23.5300',
    '5. volume': '70682419'
  },
  '2009-08-31': {
    '1. open': '21.6000',
    '2. high': '25.2100',
    '3. low': '21.4000',
    '4. close': '23.7000',
    '5. volume': '82475820'
  },
  '2009-07-31': {
    '1. open': '18.0500',
    '2. high': '21.8500',
    '3. low': '16.1200',
    '4. close': '21.6000',
    '5. volume': '100661785'
  },
  '2009-06-30': {
    '1. open': '18.4900',
    '2. high': '20.6900',
    '3. low': '16.7200',
    '4. close': '17.6900',
    '5. volume': '108152403'
  },
  '2009-05-29': {
    '1. open': '16.6800',
    '2. high': '18.4800',
    '3. low': '15.1800',
    '4. close': '17.9900',
    '5. volume': '83716473'
  },
  '2009-04-30': {
    '1. open': '12.9400',
    '2. high': '18.4500',
    '3. low': '12.6300',
    '4. close': '16.2400',
    '5. volume': '92796587'
  },
  '2009-03-31': {
    '1. open': '13.8300',
    '2. high': '15.7400',
    '3. low': '12.2200',
    '4. close': '13.1700',
    '5. volume': '93525014'
  },
  '2009-02-27': {
    '1. open': '15.6800',
    '2. high': '19.2400',
    '3. low': '13.7300',
    '4. close': '14.2000',
    '5. volume': '75201504'
  },
  '2009-01-30': {
    '1. open': '19.3500',
    '2. high': '20.9700',
    '3. low': '14.9900',
    '4. close': '15.9400',
    '5. volume': '93770718'
  },
  '2008-12-30': {
    '1. open': '15.8500',
    '2. high': '19.4900',
    '3. low': '13.9900',
    '4. close': '18.9600',
    '5. volume': '85815703'
  },
  '2008-11-28': {
    '1. open': '15.5000',
    '2. high': '16.9800',
    '3. low': '11.7100',
    '4. close': '15.9600',
    '5. volume': '113289545'
  },
  '2008-10-31': {
    '1. open': '21.8000',
    '2. high': '22.0800',
    '3. low': '12.0100',
    '4. close': '15.0100',
    '5. volume': '173571712'
  },
  '2008-09-30': {
    '1. open': '33.9600',
    '2. high': '34.0500',
    '3. low': '19.3900',
    '4. close': '21.0300',
    '5. volume': '140838438'
  },
  '2008-08-29': {
    '1. open': '35.8400',
    '2. high': '37.1700',
    '3. low': '32.6800',
    '4. close': '34.2100',
    '5. volume': '62014794'
  },
  '2008-07-31': {
    '1. open': '39.4300',
    '2. high': '39.7500',
    '3. low': '30.8300',
    '4. close': '35.9100',
    '5. volume': '107364905'
  },
  '2008-06-30': {
    '1. open': '43.4400',
    '2. high': '44.9400',
    '3. low': '39.1400',
    '4. close': '39.8800',
    '5. volume': '70660174'
  },
  '2008-05-30': {
    '1. open': '40.5900',
    '2. high': '46.6800',
    '3. low': '40.4600',
    '4. close': '43.4300',
    '5. volume': '70035017'
  },
  '2008-04-30': {
    '1. open': '36.2000',
    '2. high': '40.9300',
    '3. low': '35.8900',
    '4. close': '40.2300',
    '5. volume': '70043537'
  },
  '2008-03-31': {
    '1. open': '37.3900',
    '2. high': '39.3600',
    '3. low': '33.7500',
    '4. close': '36.2400',
    '5. volume': '87257044'
  },
  '2008-02-29': {
    '1. open': '33.2000',
    '2. high': '39.4500',
    '3. low': '32.7500',
    '4. close': '38.1500',
    '5. volume': '105107428'
  },
  '2008-01-31': {
    '1. open': '38.3700',
    '2. high': '39.7000',
    '3. low': '29.6900',
    '4. close': '32.7400',
    '5. volume': '132454245'
  },
  '2007-12-28': {
    '1. open': '40.3700',
    '2. high': '40.8200',
    '3. low': '36.0500',
    '4. close': '38.3500',
    '5. volume': '69696852'
  },
  '2007-11-30': {
    '1. open': '45.8700',
    '2. high': '46.0200',
    '3. low': '36.5900',
    '4. close': '40.3000',
    '5. volume': '91722720'
  },
  '2007-10-31': {
    '1. open': '44.5000',
    '2. high': '46.9200',
    '3. low': '41.6300',
    '4. close': '46.0000',
    '5. volume': '64374151'
  },
  '2007-09-28': {
    '1. open': '43.0000',
    '2. high': '45.4800',
    '3. low': '39.2400',
    '4. close': '44.6600',
    '5. volume': '67214720'
  },
  '2007-08-31': {
    '1. open': '40.4100',
    '2. high': '43.2000',
    '3. low': '36.0500',
    '4. close': '42.9000',
    '5. volume': '96330507'
  },
  '2007-07-31': {
    '1. open': '43.8900',
    '2. high': '46.7200',
    '3. low': '39.5600',
    '4. close': '41.0100',
    '5. volume': '69201499'
  },
  '2007-06-29': {
    '1. open': '43.4200',
    '2. high': '46.5300',
    '3. low': '41.7600',
    '4. close': '44.1300',
    '5. volume': '80002237'
  },
  '2007-05-31': {
    '1. open': '39.8700',
    '2. high': '43.5600',
    '3. low': '39.5900',
    '4. close': '43.4200',
    '5. volume': '63589148'
  },
  '2007-04-30': {
    '1. open': '36.7100',
    '2. high': '39.9900',
    '3. low': '36.4700',
    '4. close': '39.5900',
    '5. volume': '48941642'
  },
  '2007-03-30': {
    '1. open': '37.3200',
    '2. high': '38.1800',
    '3. low': '34.9300',
    '4. close': '37.0400',
    '5. volume': '82619223'
  },
  '2007-02-28': {
    '1. open': '36.6000',
    '2. high': '39.9000',
    '3. low': '34.5500',
    '4. close': '37.0500',
    '5. volume': '79552231'
  },
  '2007-01-31': {
    '1. open': '35.6500',
    '2. high': '36.7800',
    '3. low': '32.7500',
    '4. close': '36.2100',
    '5. volume': '102707659'
  },
  '2006-12-29': {
    '1. open': '29.2500',
    '2. high': '35.9200',
    '3. low': '28.5200',
    '4. close': '35.6900',
    '5. volume': '87914122'
  },
  '2006-11-30': {
    '1. open': '29.2200',
    '2. high': '29.9900',
    '3. low': '28.0200',
    '4. close': '29.1400',
    '5. volume': '61089097'
  },
  '2006-10-31': {
    '1. open': '26.5000',
    '2. high': '31.9300',
    '3. low': '25.9100',
    '4. close': '29.0800',
    '5. volume': '91633625'
  },
  '2006-09-29': {
    '1. open': '26.6700',
    '2. high': '27.4000',
    '3. low': '25.2600',
    '4. close': '26.5700',
    '5. volume': '81099385'
  },
  '2006-08-31': {
    '1. open': '27.4900',
    '2. high': '28.6300',
    '3. low': '25.5200',
    '4. close': '26.5800',
    '5. volume': '115172357'
  },
  '2006-07-31': {
    '1. open': '26.9000',
    '2. high': '28.8000',
    '3. low': '25.3000',
    '4. close': '27.4000',
    '5. volume': '100120073'
  },
  '2006-06-30': {
    '1. open': '26.7900',
    '2. high': '28.2400',
    '3. low': '22.3900',
    '4. close': '26.7700',
    '5. volume': '82721761'
  },
  '2006-05-31': {
    '1. open': '26.4000',
    '2. high': '29.9800',
    '3. low': '23.6900',
    '4. close': '26.7500',
    '5. volume': '120527516'
  },
  '2006-04-28': {
    '1. open': '23.8900',
    '2. high': '27.8800',
    '3. low': '23.5300',
    '4. close': '26.1300',
    '5. volume': '64973013'
  },
  '2006-03-31': {
    '1. open': '21.2600',
    '2. high': '24.0300',
    '3. low': '20.7900',
    '4. close': '23.8300',
    '5. volume': '91247605'
  },
  '2006-02-28': {
    '1. open': '20.8500',
    '2. high': '21.7300',
    '3. low': '19.2800',
    '4. close': '21.2500',
    '5. volume': '79187827'
  },
  '2006-01-31': {
    '1. open': '17.7800',
    '2. high': '22.4000',
    '3. low': '17.6800',
    '4. close': '21.0600',
    '5. volume': '128241696'
  },
  '2005-12-30': {
    '1. open': '17.2200',
    '2. high': '17.6800',
    '3. low': '16.7600',
    '4. close': '17.6200',
    '5. volume': '69391163'
  },
  '2005-11-30': {
    '1. open': '16.9500',
    '2. high': '17.7500',
    '3. low': '16.8800',
    '4. close': '17.0900',
    '5. volume': '72011874'
  },
  '2005-10-31': {
    '1. open': '17.4900',
    '2. high': '18.0100',
    '3. low': '16.5100',
    '4. close': '16.9400',
    '5. volume': '86810704'
  },
  '2005-09-30': {
    '1. open': '15.6000',
    '2. high': '17.4900',
    '3. low': '15.6000',
    '4. close': '17.3700',
    '5. volume': '79211556'
  },
  '2005-08-31': {
    '1. open': '15.5900',
    '2. high': '16.1000',
    '3. low': '15.2900',
    '4. close': '15.5100',
    '5. volume': '61491905'
  },
  '2005-07-29': {
    '1. open': '14.3300',
    '2. high': '15.7600',
    '3. low': '13.9200',
    '4. close': '15.4900',
    '5. volume': '74958741'
  },
  '2005-06-30': {
    '1. open': '14.9200',
    '2. high': '15.1900',
    '3. low': '14.1000',
    '4. close': '14.3900',
    '5. volume': '71642799'
  },
  '2005-05-31': {
    '1. open': '14.3100',
    '2. high': '15.0100',
    '3. low': '13.8300',
    '4. close': '14.9300',
    '5. volume': '62195532'
  },
  '2005-04-29': {
    '1. open': '15.9800',
    '2. high': '16.0000',
    '3. low': '13.9300',
    '4. close': '14.2100',
    '5. volume': '68123548'
  },
  '2005-03-31': {
    '1. open': '17.2800',
    '2. high': '17.3200',
    '3. low': '15.0100',
    '4. close': '15.8900',
    '5. volume': '63396972'
  },
  '2005-02-28': {
    '1. open': '16.4100',
    '2. high': '17.4200',
    '3. low': '16.1600',
    '4. close': '17.3400',
    '5. volume': '62252386'
  },
  '2005-01-31': {
    '1. open': '16.2500',
    '2. high': '16.9200',
    '3. low': '16.0300',
    '4. close': '16.3900',
    '5. volume': '70051518'
  },
  '2004-12-31': {
    '1. open': '16.0500',
    '2. high': '16.4000',
    '3. low': '15.3300',
    '4. close': '16.2000',
    '5. volume': '71331258'
  },
  '2004-11-30': {
    '1. open': '14.7500',
    '2. high': '16.5300',
    '3. low': '14.7000',
    '4. close': '16.2000',
    '5. volume': '56343117'
  },
  '2004-10-29': {
    '1. open': '15.7200',
    '2. high': '16.5600',
    '3. low': '14.4300',
    '4. close': '14.7000',
    '5. volume': '82654664'
  },
  '2004-09-30': {
    '1. open': '15.3900',
    '2. high': '16.0000',
    '3. low': '15.2800',
    '4. close': '15.6900',
    '5. volume': '44171230'
  },
  '2004-08-31': {
    '1. open': '14.8000',
    '2. high': '15.4800',
    '3. low': '13.8000',
    '4. close': '15.2800',
    '5. volume': '52354093'
  },
  '2004-07-30': {
    '1. open': '14.2400',
    '2. high': '14.9300',
    '3. low': '13.5300',
    '4. close': '14.8200',
    '5. volume': '57167298'
  },
  '2004-06-30': {
    '1. open': '13.7000',
    '2. high': '14.2400',
    '3. low': '12.9100',
    '4. close': '14.0100',
    '5. volume': '56180651'
  },
  '2004-05-31': {
    '1. open': '14.4000',
    '2. high': '14.8300',
    '3. low': '12.6400',
    '4. close': '13.6900',
    '5. volume': '50842781'
  },
  '2004-04-30': {
    '1. open': '15.2900',
    '2. high': '16.0000',
    '3. low': '14.2500',
    '4. close': '14.4800',
    '5. volume': '50358803'
  },
  '2004-03-31': {
    '1. open': '15.7000',
    '2. high': '16.3500',
    '3. low': '13.7700',
    '4. close': '15.1200',
    '5. volume': '68291459'
  },
  '2004-02-27': {
    '1. open': '16.2400',
    '2. high': '16.8500',
    '3. low': '15.2200',
    '4. close': '15.5900',
    '5. volume': '51645844'
  },
  '2004-01-30': {
    '1. open': '15.6700',
    '2. high': '17.9800',
    '3. low': '15.6700',
    '4. close': '16.2600',
    '5. volume': '54555274'
  },
  '2003-12-31': {
    '1. open': '15.7700',
    '2. high': '16.0000',
    '3. low': '14.8000',
    '4. close': '15.6700',
    '5. volume': '45982602'
  },
  '2003-11-28': {
    '1. open': '14.3300',
    '2. high': '15.7300',
    '3. low': '14.0500',
    '4. close': '15.4500',
    '5. volume': '53201584'
  },
  '2003-10-31': {
    '1. open': '11.4200',
    '2. high': '14.3700',
    '3. low': '11.1200',
    '4. close': '14.3500',
    '5. volume': '58743369'
  },
  '2003-09-30': {
    '1. open': '12.4800',
    '2. high': '13.8500',
    '3. low': '11.3500',
    '4. close': '11.5200',
    '5. volume': '63243130'
  },
  '2003-08-29': {
    '1. open': '11.4700',
    '2. high': '12.9000',
    '3. low': '11.0100',
    '4. close': '12.3400',
    '5. volume': '59791128'
  },
  '2003-07-31': {
    '1. open': '10.1000',
    '2. high': '11.8800',
    '3. low': '9.9100',
    '4. close': '11.5900',
    '5. volume': '71796946'
  },
  '2003-06-30': {
    '1. open': '9.2000',
    '2. high': '10.8400',
    '3. low': '9.1200',
    '4. close': '10.0400',
    '5. volume': '52113993'
  },
  '2003-05-30': {
    '1. open': '9.1400',
    '2. high': '10.1900',
    '3. low': '8.5300',
    '4. close': '9.0600',
    '5. volume': '49055601'
  },
  '2003-04-30': {
    '1. open': '7.1500',
    '2. high': '9.4200',
    '3. low': '7.1500',
    '4. close': '9.1800',
    '5. volume': '49109846'
  },
  '2003-03-31': {
    '1. open': '9.0000',
    '2. high': '9.0000',
    '3. low': '6.8500',
    '4. close': '7.3600',
    '5. volume': '60360123'
  },
  '2003-02-28': {
    '1. open': '10.4000',
    '2. high': '10.6800',
    '3. low': '7.9500',
    '4. close': '8.9100',
    '5. volume': '51691301'
  },
  '2003-01-31': {
    '1. open': '10.6500',
    '2. high': '11.8400',
    '3. low': '9.7200',
    '4. close': '10.3000',
    '5. volume': '46532656'
  },
  '2002-12-31': {
    '1. open': '12.2500',
    '2. high': '12.7200',
    '3. low': '9.8000',
    '4. close': '10.6500',
    '5. volume': '43011636'
  },
  '2002-11-29': {
    '1. open': '10.5500',
    '2. high': '12.5900',
    '3. low': '9.4000',
    '4. close': '11.9500',
    '5. volume': '60818001'
  },
  '2002-10-31': {
    '1. open': '10.8200',
    '2. high': '12.0000',
    '3. low': '8.9400',
    '4. close': '10.5700',
    '5. volume': '55035946'
  },
  '2002-09-30': {
    '1. open': '13.2100',
    '2. high': '13.8700',
    '3. low': '10.5100',
    '4. close': '11.2000',
    '5. volume': '45466026'
  },
  '2002-08-30': {
    '1. open': '13.4300',
    '2. high': '14.3000',
    '3. low': '11.0500',
    '4. close': '13.4400',
    '5. volume': '33690812'
  },
  '2002-07-31': {
    '1. open': '15.1300',
    '2. high': '15.7300',
    '3. low': '12.0400',
    '4. close': '13.2100',
    '5. volume': '41524185'
  },
  '2002-06-28': {
    '1. open': '17.4400',
    '2. high': '17.7400',
    '3. low': '13.6600',
    '4. close': '15.3000',
    '5. volume': '37442147'
  },
  '2002-05-31': {
    '1. open': '16.7900',
    '2. high': '17.8500',
    '3. low': '16.3500',
    '4. close': '17.3600',
    '5. volume': '29987870'
  },
  '2002-04-30': {
    '1. open': '18.0500',
    '2. high': '18.1500',
    '3. low': '16.6300',
    '4. close': '16.7900',
    '5. volume': '34880020'
  },
  '2002-03-29': {
    '1. open': '17.2500',
    '2. high': '18.6900',
    '3. low': '16.8000',
    '4. close': '18.0500',
    '5. volume': '41481632'
  },
  '2002-02-28': {
    '1. open': '16.3900',
    '2. high': '17.6000',
    '3. low': '15.9100',
    '4. close': '17.3500',
    '5. volume': '36811559'
  },
  '2002-01-31': {
    '1. open': '16.3900',
    '2. high': '17.8600',
    '3. low': '15.6000',
    '4. close': '16.3500',
    '5. volume': '35590147'
  },
  '2001-12-31': {
    '1. open': '15.8300',
    '2. high': '17.9000',
    '3. low': '15.4500',
    '4. close': '16.3900',
    '5. volume': '35537043'
  },
  '2001-11-30': {
    '1. open': '12.0900',
    '2. high': '16.5200',
    '3. low': '11.7500',
    '4. close': '15.5900',
    '5. volume': '51314111'
  },
  '2001-10-31': {
    '1. open': '11.4500',
    '2. high': '13.2500',
    '3. low': '11.0300',
    '4. close': '12.0000',
    '5. volume': '38384163'
  },
  '2001-09-28': {
    '1. open': '14.8500',
    '2. high': '14.9800',
    '3. low': '9.7100',
    '4. close': '11.3000',
    '5. volume': '36537093'
  },
  '2001-08-31': {
    '1. open': '15.8800',
    '2. high': '16.0200',
    '3. low': '14.3700',
    '4. close': '14.9000',
    '5. volume': '25922109'
  },
  '2001-07-31': {
    '1. open': '15.4900',
    '2. high': '16.2000',
    '3. low': '15.0000',
    '4. close': '15.8100',
    '5. volume': '21315732'
  },
  '2001-06-29': {
    '1. open': '17.8000',
    '2. high': '17.8000',
    '3. low': '14.7900',
    '4. close': '15.5000',
    '5. volume': '22947646'
  },
  '2001-05-31': {
    '1. open': '17.5600',
    '2. high': '18.5900',
    '3. low': '16.4800',
    '4. close': '17.7700',
    '5. volume': '25249143'
  },
  '2001-04-30': {
    '1. open': '16.5900',
    '2. high': '17.9900',
    '3. low': '15.1000',
    '4. close': '17.5300',
    '5. volume': '24543405'
  },
  '2001-03-30': {
    '1. open': '19.5600',
    '2. high': '19.7200',
    '3. low': '14.2600',
    '4. close': '16.4900',
    '5. volume': '49604632'
  },
  '2001-02-28': {
    '1. open': '20.0200',
    '2. high': '20.8900',
    '3. low': '18.8500',
    '4. close': '19.8800',
    '5. volume': '23319367'
  },
  '2001-01-31': {
    '1. open': '16.5000',
    '2. high': '20.7100',
    '3. low': '16.5000',
    '4. close': '20.1000',
    '5. volume': '40901485'
  },
  '2000-12-29': {
    '1. open': '15.0400',
    '2. high': '17.7500',
    '3. low': '15.0000',
    '4. close': '16.5000',
    '5. volume': '31413947'
  },
  '2000-11-30': {
    '1. open': '16.9000',
    '2. high': '17.4200',
    '3. low': '14.5700',
    '4. close': '14.7100',
    '5. volume': '22315625'
  },
  '2000-10-31': {
    '1. open': '15.3500',
    '2. high': '16.4800',
    '3. low': '13.4200',
    '4. close': '16.2400',
    '5. volume': '15778725'
  },
  '2000-09-29': {
    '1. open': '17.0500',
    '2. high': '17.7500',
    '3. low': '14.8100',
    '4. close': '15.3900',
    '5. volume': '24069733'
  },
  '2000-08-31': {
    '1. open': '18.7400',
    '2. high': '18.8300',
    '3. low': '16.5000',
    '4. close': '17.1000',
    '5. volume': '31159751'
  },
  '2000-07-31': {
    '1. open': '17.0500',
    '2. high': '18.7400',
    '3. low': '16.0100',
    '4. close': '18.6900',
    '5. volume': '26978485'
  },
  '2000-06-30': {
    '1. open': '18.5000',
    '2. high': '19.2100',
    '3. low': '16.2500',
    '4. close': '17.0500',
    '5. volume': '45978680'
  },
  '2000-05-31': {
    '1. open': '23.1000',
    '2. high': '25.7500',
    '3. low': '18.2700',
    '4. close': '18.3000',
    '5. volume': '41191898'
  },
  '2000-04-28': {
    '1. open': '25.9000',
    '2. high': '26.4600',
    '3. low': '21.1000',
    '4. close': '23.1000',
    '5. volume': '17319043'
  },
  '2000-03-31': {
    '1. open': '25.3500',
    '2. high': '27.7000',
    '3. low': '22.5100',
    '4. close': '25.7500',
    '5. volume': '41790441'
  },
  '2000-02-29': {
    '1. open': '26.3000',
    '2. high': '29.9000',
    '3. low': '23.8700',
    '4. close': '25.3600',
    '5. volume': '27691050'
  },
  '2000-01-31': {
    '1. open': '30.7400',
    '2. high': '34.4500',
    '3. low': '25.9800',
    '4. close': '25.9900',
    '5. volume': '34486514'
  },
  '1999-12-30': {
    '1. open': '25.6200',
    '2. high': '33.6000',
    '3. low': '25.5700',
    '4. close': '30.8100',
    '5. volume': '27608949'
  }
};

// tslint:disable:max-line-length
export const thyssenKruppCompany: Company = {
  id: 1088,
  name: 'Thyssenkrupp AG',
  country: Country.Deutschland,
  city: 'Essen',
  url: 'https://www.thyssenkrupp.com/',
  description: 'Die Thyssenkrupp AG ([ˌtʏsn̩ˈkrʊp] oder [ˌtɪsn̩ˈkrʊp], Eigenschreibweise thyssenkrupp) mit Sitz in Essen ist ein börsennotierter, diversifizierter Industriekonzern mit Schwerpunkt in der Stahl-Verarbeitung und Deutschlands größter Stahlhersteller.[3] Der Konzern entstand 1999 aus der Fusion der Friedrich Krupp AG Hoesch-Krupp mit der Thyssen AG.[4][5] Der Konzern beschäftigt weltweit rund 161.000 Mitarbeiter und hat einen Umsatz von rund 43 Mrd. Euro.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Thyssenkrupp',
  logo: 'https://d13qmi8c46i38w.cloudfront.net/media/UCPthyssenkruppAG/assets.files/media/logo-(header)/thyssenkrupp_logo_claim_d.svg',
  products: [
    {
      id: 108810,
      name: 'ThyssenKrupp Aufzüge'
    },
    {
      id: 108811,
      name: 'PowerCore® Elektroband'
    }
  ],
  industries: [121110, 171410, 171411, 111114, 171010, 1711, 121013, 1722],
  currency: Currency.EUR,
  isin: 'DE0007500001',
  wkn: '750000',
  symbol: 'TKA.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Mischkonzern', 'Industriekonzern', 'Wertstoffe', 'Stahl', 'Flachstahl', 'Werkstoffe', 'Rohstoffe', 'Personenbeförderungsanlagen', 'Komponentenfertigung']
};
// tslint:enable:max-line-length