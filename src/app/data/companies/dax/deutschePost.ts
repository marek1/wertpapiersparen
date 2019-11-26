import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { Company } from '../../../interfaces/company';
import { SecurityType } from '../../../enums/securityType';

const deutschePostDividends = [
  {year: 2018, rate: 1.15, yield: 4.82}, {year: 2017, rate: 1.15}, {year: 2016, rate: 1.05}, {
    year: 2015,
    rate: 0.85,
    yield: 3.27
  }, {year: 2014, rate: 0.85, yield: 3.14}, {year: 2013, rate: 0.80, yield: 3.02}, {year: 2012, rate: 0.70, yield: 4.22}, {
    year: 2011,
    rate: 0.70,
    yield: 5.89
  }, {year: 2010, rate: 0.65, yield: 5.12}, {year: 2009, rate: 0.60, yield: 4.45}, {year: 2008, rate: 0.60, yield: 5.04}, {
    year: 2007,
    rate: 0.90,
    yield: 3.83
  }, {year: 2006, rate: 0.75, yield: 3.28}, {year: 2005, rate: 0.70, yield: 3.42}, {year: 2004, rate: 0.50, yield: 2.96}, {
    year: 2003,
    rate: 0.44,
    yield: 2.69
  }, {year: 2002, rate: 0.40, yield: 4.00}, {year: 2001, rate: 0.37, yield: 2.47}, {year: 2000, rate: 0.27, yield: 1.17}, {
    year: 1999,
    rate: 0.16
  }
];

const deutschePostPrices = {
  '2019-11-08': {
    '1. open': '31.9100',
    '2. high': '32.9950',
    '3. low': '31.8400',
    '4. close': '32.7450',
    '5. volume': '15715458'
  },
  '2019-10-31': {
    '1. open': '30.6900',
    '2. high': '32.3500',
    '3. low': '28.4100',
    '4. close': '31.7500',
    '5. volume': '65107311'
  },
  '2019-09-30': {
    '1. open': '29.9600',
    '2. high': '31.2100',
    '3. low': '29.3850',
    '4. close': '30.6450',
    '5. volume': '57310551'
  },
  '2019-08-30': {
    '1. open': '29.4500',
    '2. high': '30.1300',
    '3. low': '27.7650',
    '4. close': '29.9000',
    '5. volume': '68836031'
  },
  '2019-07-31': {
    '1. open': '29.3500',
    '2. high': '30.6650',
    '3. low': '28.9750',
    '4. close': '29.5100',
    '5. volume': '53577858'
  },
  '2019-06-28': {
    '1. open': '26.1350',
    '2. high': '28.9400',
    '3. low': '26.0700',
    '4. close': '28.9000',
    '5. volume': '60545485'
  },
  '2019-05-31': {
    '1. open': '30.8350',
    '2. high': '31.1500',
    '3. low': '26.2350',
    '4. close': '26.3800',
    '5. volume': '86860970'
  },
  '2019-04-30': {
    '1. open': '29.2600',
    '2. high': '31.3350',
    '3. low': '28.7400',
    '4. close': '30.9000',
    '5. volume': '62712179'
  },
  '2019-03-29': {
    '1. open': '27.5500',
    '2. high': '30.0200',
    '3. low': '26.6500',
    '4. close': '29.0000',
    '5. volume': '80609544'
  },
  '2019-02-28': {
    '1. open': '25.8200',
    '2. high': '27.3700',
    '3. low': '25.1800',
    '4. close': '27.3200',
    '5. volume': '58595071'
  },
  '2019-01-31': {
    '1. open': '23.7200',
    '2. high': '26.4800',
    '3. low': '23.3600',
    '4. close': '25.7600',
    '5. volume': '76808455'
  },
  '2018-12-28': {
    '1. open': '28.6000',
    '2. high': '28.9300',
    '3. low': '23.4300',
    '4. close': '23.9100',
    '5. volume': '79095307'
  },
  '2018-11-30': {
    '1. open': '27.8900',
    '2. high': '29.1700',
    '3. low': '27.4200',
    '4. close': '28.1200',
    '5. volume': '69804201'
  },
  '2018-10-31': {
    '1. open': '30.6600',
    '2. high': '30.9900',
    '3. low': '27.0400',
    '4. close': '27.9500',
    '5. volume': '86880366'
  },
  '2018-09-28': {
    '1. open': '31.2600',
    '2. high': '32.0500',
    '3. low': '30.4100',
    '4. close': '30.7100',
    '5. volume': '64413193'
  },
  '2018-08-31': {
    '1. open': '30.3800',
    '2. high': '32.1800',
    '3. low': '29.2500',
    '4. close': '31.4100',
    '5. volume': '68205841'
  },
  '2018-07-31': {
    '1. open': '27.6300',
    '2. high': '30.3700',
    '3. low': '27.2300',
    '4. close': '30.1900',
    '5. volume': '88430135'
  },
  '2018-06-29': {
    '1. open': '32.7800',
    '2. high': '33.4600',
    '3. low': '27.7100',
    '4. close': '27.9700',
    '5. volume': '119634848'
  },
  '2018-05-31': {
    '1. open': '36.2200',
    '2. high': '37.2300',
    '3. low': '32.4100',
    '4. close': '32.4700',
    '5. volume': '93671757'
  },
  '2018-04-30': {
    '1. open': '35.2500',
    '2. high': '38.1500',
    '3. low': '34.3500',
    '4. close': '36.1000',
    '5. volume': '62697610'
  },
  '2018-03-29': {
    '1. open': '37.4700',
    '2. high': '37.7900',
    '3. low': '34.2000',
    '4. close': '35.5200',
    '5. volume': '87794973'
  },
  '2018-02-28': {
    '1. open': '38.3300',
    '2. high': '38.3300',
    '3. low': '35.1100',
    '4. close': '37.6400',
    '5. volume': '72153296'
  },
  '2018-01-31': {
    '1. open': '39.5100',
    '2. high': '41.2000',
    '3. low': '38.0700',
    '4. close': '38.0700',
    '5. volume': '56067388'
  },
  '2017-12-29': {
    '1. open': '40.0000',
    '2. high': '41.3600',
    '3. low': '38.9800',
    '4. close': '39.7500',
    '5. volume': '50951546'
  },
  '2017-11-30': {
    '1. open': '40.2150',
    '2. high': '40.5850',
    '3. low': '38.3950',
    '4. close': '39.8900',
    '5. volume': '53225078'
  },
  '2017-10-31': {
    '1. open': '37.9600',
    '2. high': '39.7200',
    '3. low': '37.0000',
    '4. close': '39.3200',
    '5. volume': '45971864'
  },
  '2017-09-29': {
    '1. open': '35.0000',
    '2. high': '37.8200',
    '3. low': '34.5100',
    '4. close': '37.6650',
    '5. volume': '49459068'
  },
  '2017-08-31': {
    '1. open': '32.9400',
    '2. high': '35.5750',
    '3. low': '32.7300',
    '4. close': '34.8450',
    '5. volume': '53544859'
  },
  '2017-07-31': {
    '1. open': '33.2650',
    '2. high': '34.3100',
    '3. low': '32.3350',
    '4. close': '32.8000',
    '5. volume': '50618633'
  },
  '2017-06-30': {
    '1. open': '32.5400',
    '2. high': '33.5500',
    '3. low': '31.5750',
    '4. close': '32.8200',
    '5. volume': '60041600'
  },
  '2017-05-31': {
    '1. open': '31.9850',
    '2. high': '33.3100',
    '3. low': '31.1800',
    '4. close': '32.5150',
    '5. volume': '65843662'
  },
  '2017-04-28': {
    '1. open': '32.2100',
    '2. high': '33.0600',
    '3. low': '30.5200',
    '4. close': '33.0000',
    '5. volume': '55753886'
  },
  '2017-03-31': {
    '1. open': '32.6000',
    '2. high': '32.9500',
    '3. low': '30.5800',
    '4. close': '32.1050',
    '5. volume': '71537622'
  },
  '2017-02-28': {
    '1. open': '31.0800',
    '2. high': '32.6100',
    '3. low': '30.7800',
    '4. close': '32.3750',
    '5. volume': '45298888'
  },
  '2017-01-31': {
    '1. open': '31.1050',
    '2. high': '32.1800',
    '3. low': '30.9550',
    '4. close': '30.9550',
    '5. volume': '57077421'
  },
  '2016-12-30': {
    '1. open': '29.3700',
    '2. high': '31.3900',
    '3. low': '28.5650',
    '4. close': '31.2350',
    '5. volume': '69303002'
  },
  '2016-11-30': {
    '1. open': '28.4000',
    '2. high': '29.5400',
    '3. low': '27.5800',
    '4. close': '29.4900',
    '5. volume': '64383511'
  },
  '2016-10-31': {
    '1. open': '27.8800',
    '2. high': '28.5000',
    '3. low': '26.9600',
    '4. close': '28.2300',
    '5. volume': '55312553'
  },
  '2016-09-30': {
    '1. open': '28.4500',
    '2. high': '29.0000',
    '3. low': '26.9750',
    '4. close': '27.8200',
    '5. volume': '66361542'
  },
  '2016-08-31': {
    '1. open': '26.8550',
    '2. high': '28.7950',
    '3. low': '26.3950',
    '4. close': '28.4000',
    '5. volume': '53562097'
  },
  '2016-07-29': {
    '1. open': '25.3150',
    '2. high': '26.8450',
    '3. low': '24.1750',
    '4. close': '26.6900',
    '5. volume': '52066042'
  },
  '2016-06-30': {
    '1. open': '26.1300',
    '2. high': '26.7150',
    '3. low': '23.5000',
    '4. close': '25.1750',
    '5. volume': '92150816'
  },
  '2016-05-31': {
    '1. open': '25.7050',
    '2. high': '27.0200',
    '3. low': '25.0700',
    '4. close': '26.2150',
    '5. volume': '76041322'
  },
  '2016-04-29': {
    '1. open': '24.1350',
    '2. high': '26.3450',
    '3. low': '23.3600',
    '4. close': '25.6400',
    '5. volume': '68278709'
  },
  '2016-03-31': {
    '1. open': '21.9400',
    '2. high': '25.0750',
    '3. low': '21.7700',
    '4. close': '24.4200',
    '5. volume': '96105102'
  },
  '2016-02-29': {
    '1. open': '22.4000',
    '2. high': '22.4800',
    '3. low': '19.5450',
    '4. close': '21.9350',
    '5. volume': '103705747'
  },
  '2016-01-29': {
    '1. open': '25.4050',
    '2. high': '25.6350',
    '3. low': '21.9150',
    '4. close': '22.3300',
    '5. volume': '90994546'
  },
  '2015-12-30': {
    '1. open': '27.8500',
    '2. high': '27.9450',
    '3. low': '24.1250',
    '4. close': '25.9550',
    '5. volume': '83013100'
  },
  '2015-11-30': {
    '1. open': '26.8400',
    '2. high': '27.8500',
    '3. low': '25.3950',
    '4. close': '27.6650',
    '5. volume': '70091419'
  },
  '2015-10-30': {
    '1. open': '25.0500',
    '2. high': '27.8500',
    '3. low': '24.3200',
    '4. close': '27.0700',
    '5. volume': '84559634'
  },
  '2015-09-30': {
    '1. open': '24.3150',
    '2. high': '25.1250',
    '3. low': '22.9250',
    '4. close': '24.7750',
    '5. volume': '104373420'
  },
  '2015-08-31': {
    '1. open': '27.5000',
    '2. high': '28.2750',
    '3. low': '23.0000',
    '4. close': '24.5550',
    '5. volume': '102706705'
  },
  '2015-07-31': {
    '1. open': '26.4100',
    '2. high': '29.1000',
    '3. low': '25.8050',
    '4. close': '27.5200',
    '5. volume': '85524489'
  },
  '2015-06-30': {
    '1. open': '27.6400',
    '2. high': '27.9100',
    '3. low': '25.5850',
    '4. close': '26.2050',
    '5. volume': '110998439'
  },
  '2015-05-29': {
    '1. open': '29.7750',
    '2. high': '30.2800',
    '3. low': '27.1700',
    '4. close': '27.4450',
    '5. volume': '96494868'
  },
  '2015-04-30': {
    '1. open': '28.8000',
    '2. high': '31.1850',
    '3. low': '28.6400',
    '4. close': '29.5550',
    '5. volume': '77582379'
  },
  '2015-03-31': {
    '1. open': '30.3950',
    '2. high': '30.7750',
    '3. low': '28.5050',
    '4. close': '29.0950',
    '5. volume': '111975380'
  },
  '2015-02-27': {
    '1. open': '28.7100',
    '2. high': '30.4300',
    '3. low': '27.6900',
    '4. close': '30.4300',
    '5. volume': '73684491'
  },
  '2015-01-30': {
    '1. open': '27.2350',
    '2. high': '29.2000',
    '3. low': '25.9850',
    '4. close': '28.7700',
    '5. volume': '99855688'
  },
  '2014-12-30': {
    '1. open': '26.5700',
    '2. high': '27.5000',
    '3. low': '25.4650',
    '4. close': '27.0450',
    '5. volume': '74062371'
  },
  '2014-11-28': {
    '1. open': '25.0950',
    '2. high': '26.7150',
    '3. low': '24.0000',
    '4. close': '26.7150',
    '5. volume': '82977885'
  },
  '2014-10-31': {
    '1. open': '25.3200',
    '2. high': '25.6350',
    '3. low': '21.5500',
    '4. close': '25.0550',
    '5. volume': '114309183'
  },
  '2014-09-30': {
    '1. open': '24.8600',
    '2. high': '26.5850',
    '3. low': '24.7250',
    '4. close': '25.3900',
    '5. volume': '71736552'
  },
  '2014-08-29': {
    '1. open': '23.8750',
    '2. high': '25.4400',
    '3. low': '22.9350',
    '4. close': '24.8850',
    '5. volume': '86097427'
  },
  '2014-07-31': {
    '1. open': '26.5100',
    '2. high': '27.1800',
    '3. low': '23.9150',
    '4. close': '24.0150',
    '5. volume': '82866926'
  },
  '2014-06-30': {
    '1. open': '27.3050',
    '2. high': '27.5000',
    '3. low': '25.8150',
    '4. close': '26.4100',
    '5. volume': '66396808'
  },
  '2014-05-30': {
    '1. open': '27.1400',
    '2. high': '27.9250',
    '3. low': '26.0950',
    '4. close': '27.2100',
    '5. volume': '91059488'
  },
  '2014-04-30': {
    '1. open': '27.1450',
    '2. high': '28.4700',
    '3. low': '25.6150',
    '4. close': '27.1350',
    '5. volume': '84380945'
  },
  '2014-03-31': {
    '1. open': '26.5000',
    '2. high': '27.5800',
    '3. low': '24.0600',
    '4. close': '26.9700',
    '5. volume': '106503073'
  },
  '2014-02-28': {
    '1. open': '25.7850',
    '2. high': '27.2400',
    '3. low': '24.5500',
    '4. close': '27.2100',
    '5. volume': '68070572'
  },
  '2014-01-31': {
    '1. open': '26.6350',
    '2. high': '27.0000',
    '3. low': '25.0050',
    '4. close': '25.6700',
    '5. volume': '84510712'
  },
  '2013-12-30': {
    '1. open': '26.0300',
    '2. high': '26.7500',
    '3. low': '24.4000',
    '4. close': '26.5000',
    '5. volume': '78373331'
  },
  '2013-11-29': {
    '1. open': '24.9150',
    '2. high': '26.0700',
    '3. low': '24.2000',
    '4. close': '26.0300',
    '5. volume': '82309722'
  },
  '2013-10-31': {
    '1. open': '24.6800',
    '2. high': '25.1900',
    '3. low': '23.3800',
    '4. close': '24.9250',
    '5. volume': '89937318'
  },
  '2013-09-30': {
    '1. open': '22.1500',
    '2. high': '24.8150',
    '3. low': '22.1300',
    '4. close': '24.5300',
    '5. volume': '155581064'
  },
  '2013-08-30': {
    '1. open': '21.2450',
    '2. high': '22.3500',
    '3. low': '21.0550',
    '4. close': '21.8600',
    '5. volume': '66933820'
  },
  '2013-07-31': {
    '1. open': '19.1000',
    '2. high': '21.5200',
    '3. low': '18.9850',
    '4. close': '21.0700',
    '5. volume': '83946204'
  },
  '2013-06-28': {
    '1. open': '19.4800',
    '2. high': '19.9800',
    '3. low': '18.6600',
    '4. close': '19.0950',
    '5. volume': '85891719'
  },
  '2013-05-31': {
    '1. open': '17.9650',
    '2. high': '20.7650',
    '3. low': '17.8750',
    '4. close': '19.5600',
    '5. volume': '99202889'
  },
  '2013-04-30': {
    '1. open': '18.0050',
    '2. high': '18.4750',
    '3. low': '17.1050',
    '4. close': '18.0200',
    '5. volume': '74970325'
  },
  '2013-03-28': {
    '1. open': '17.1900',
    '2. high': '18.8450',
    '3. low': '16.9400',
    '4. close': '17.9750',
    '5. volume': '77765588'
  },
  '2013-02-28': {
    '1. open': '17.3300',
    '2. high': '17.5700',
    '3. low': '16.7000',
    '4. close': '17.1850',
    '5. volume': '68019266'
  },
  '2013-01-31': {
    '1. open': '17.0000',
    '2. high': '17.7750',
    '3. low': '16.4050',
    '4. close': '17.2950',
    '5. volume': '75457066'
  },
  '2012-12-28': {
    '1. open': '16.0200',
    '2. high': '16.7500',
    '3. low': '15.8100',
    '4. close': '16.6000',
    '5. volume': '64082746'
  },
  '2012-11-30': {
    '1. open': '15.2800',
    '2. high': '15.9900',
    '3. low': '14.4000',
    '4. close': '15.9600',
    '5. volume': '80243573'
  },
  '2012-10-31': {
    '1. open': '15.2700',
    '2. high': '16.1800',
    '3. low': '15.2200',
    '4. close': '15.2950',
    '5. volume': '70742325'
  },
  '2012-09-28': {
    '1. open': '15.4550',
    '2. high': '16.0100',
    '3. low': '15.1900',
    '4. close': '15.2000',
    '5. volume': '93863944'
  },
  '2012-08-31': {
    '1. open': '14.6300',
    '2. high': '15.9750',
    '3. low': '14.5450',
    '4. close': '15.4450',
    '5. volume': '83102091'
  },
  '2012-07-31': {
    '1. open': '13.9000',
    '2. high': '14.9750',
    '3. low': '13.7100',
    '4. close': '14.6400',
    '5. volume': '87789527'
  },
  '2012-06-29': {
    '1. open': '13.3200',
    '2. high': '13.9400',
    '3. low': '12.6400',
    '4. close': '13.9400',
    '5. volume': '86149091'
  },
  '2012-05-31': {
    '1. open': '14.4000',
    '2. high': '14.5000',
    '3. low': '12.8400',
    '4. close': '13.3200',
    '5. volume': '101144315'
  },
  '2012-04-30': {
    '1. open': '14.5900',
    '2. high': '14.8250',
    '3. low': '13.2650',
    '4. close': '14.1000',
    '5. volume': '83039282'
  },
  '2012-03-30': {
    '1. open': '13.1750',
    '2. high': '14.7000',
    '3. low': '12.9000',
    '4. close': '14.4350',
    '5. volume': '89239558'
  },
  '2012-02-29': {
    '1. open': '12.7600',
    '2. high': '13.8750',
    '3. low': '12.6950',
    '4. close': '13.1850',
    '5. volume': '90416798'
  },
  '2012-01-31': {
    '1. open': '11.8700',
    '2. high': '12.8850',
    '3. low': '11.8500',
    '4. close': '12.7000',
    '5. volume': '97300854'
  },
  '2011-12-30': {
    '1. open': '11.2800',
    '2. high': '11.9700',
    '3. low': '10.5900',
    '4. close': '11.8800',
    '5. volume': '85706494'
  },
  '2011-11-30': {
    '1. open': '10.7900',
    '2. high': '11.6250',
    '3. low': '10.1200',
    '4. close': '11.2150',
    '5. volume': '98631546'
  },
  '2011-10-31': {
    '1. open': '9.3040',
    '2. high': '11.4350',
    '3. low': '9.0510',
    '4. close': '11.0100',
    '5. volume': '103106163'
  },
  '2011-09-30': {
    '1. open': '10.6700',
    '2. high': '10.6750',
    '3. low': '8.8960',
    '4. close': '9.6250',
    '5. volume': '138044948'
  },
  '2011-08-31': {
    '1. open': '12.4900',
    '2. high': '12.5250',
    '3. low': '9.8900',
    '4. close': '10.6550',
    '5. volume': '158055768'
  },
  '2011-07-29': {
    '1. open': '13.2050',
    '2. high': '13.3300',
    '3. low': '12.1700',
    '4. close': '12.3200',
    '5. volume': '83026490'
  },
  '2011-06-30': {
    '1. open': '13.1450',
    '2. high': '13.2750',
    '3. low': '12.3250',
    '4. close': '13.2500',
    '5. volume': '86051586'
  },
  '2011-05-31': {
    '1. open': '13.4000',
    '2. high': '13.8950',
    '3. low': '12.8850',
    '4. close': '13.0850',
    '5. volume': '119394643'
  },
  '2011-04-29': {
    '1. open': '12.7500',
    '2. high': '13.3600',
    '3. low': '12.5100',
    '4. close': '13.3600',
    '5. volume': '76798555'
  },
  '2011-03-31': {
    '1. open': '13.3750',
    '2. high': '13.4550',
    '3. low': '12.0300',
    '4. close': '12.7200',
    '5. volume': '129759667'
  },
  '2011-02-28': {
    '1. open': '13.4300',
    '2. high': '13.9300',
    '3. low': '13.0700',
    '4. close': '13.2900',
    '5. volume': '85989473'
  },
  '2011-01-31': {
    '1. open': '12.9000',
    '2. high': '13.6950',
    '3. low': '12.7000',
    '4. close': '13.3900',
    '5. volume': '91011380'
  },
  '2010-12-30': {
    '1. open': '12.4100',
    '2. high': '12.8950',
    '3. low': '12.2850',
    '4. close': '12.7000',
    '5. volume': '83360569'
  },
  '2010-11-30': {
    '1. open': '13.3800',
    '2. high': '14.0150',
    '3. low': '12.3000',
    '4. close': '12.3450',
    '5. volume': '135791942'
  },
  '2010-10-29': {
    '1. open': '13.2300',
    '2. high': '13.8100',
    '3. low': '12.8350',
    '4. close': '13.4000',
    '5. volume': '90381577'
  },
  '2010-09-30': {
    '1. open': '12.9050',
    '2. high': '13.6200',
    '3. low': '12.7550',
    '4. close': '13.3050',
    '5. volume': '86026371'
  },
  '2010-08-31': {
    '1. open': '13.2900',
    '2. high': '14.1750',
    '3. low': '12.6800',
    '4. close': '12.9050',
    '5. volume': '88469583'
  },
  '2010-07-30': {
    '1. open': '11.8500',
    '2. high': '13.6400',
    '3. low': '11.8300',
    '4. close': '13.3250',
    '5. volume': '94646520'
  },
  '2010-06-30': {
    '1. open': '12.1000',
    '2. high': '12.8700',
    '3. low': '11.5300',
    '4. close': '12.0100',
    '5. volume': '110855317'
  },
  '2010-05-31': {
    '1. open': '12.2600',
    '2. high': '12.7350',
    '3. low': '11.0100',
    '4. close': '12.1200',
    '5. volume': '181533726'
  },
  '2010-04-30': {
    '1. open': '12.8750',
    '2. high': '13.5900',
    '3. low': '12.1600',
    '4. close': '12.2350',
    '5. volume': '159635453'
  },
  '2010-03-31': {
    '1. open': '12.0550',
    '2. high': '13.3350',
    '3. low': '11.8300',
    '4. close': '12.8450',
    '5. volume': '140615576'
  },
  '2010-02-26': {
    '1. open': '12.6250',
    '2. high': '13.2450',
    '3. low': '11.6000',
    '4. close': '11.9450',
    '5. volume': '100108762'
  },
  '2010-01-29': {
    '1. open': '13.5500',
    '2. high': '14.6950',
    '3. low': '12.3150',
    '4. close': '12.6400',
    '5. volume': '93100050'
  },
  '2009-12-30': {
    '1. open': '12.5150',
    '2. high': '13.8200',
    '3. low': '12.5100',
    '4. close': '13.4850',
    '5. volume': '73085827'
  },
  '2009-11-30': {
    '1. open': '11.4500',
    '2. high': '13.2450',
    '3. low': '11.2450',
    '4. close': '12.4700',
    '5. volume': '86123698'
  },
  '2009-10-30': {
    '1. open': '12.7500',
    '2. high': '13.1850',
    '3. low': '11.2550',
    '4. close': '11.4950',
    '5. volume': '106298730'
  },
  '2009-09-30': {
    '1. open': '11.9750',
    '2. high': '13.3400',
    '3. low': '10.9800',
    '4. close': '12.8000',
    '5. volume': '101944977'
  },
  '2009-08-31': {
    '1. open': '11.1600',
    '2. high': '12.5900',
    '3. low': '10.7550',
    '4. close': '12.0350',
    '5. volume': '93034271'
  },
  '2009-07-31': {
    '1. open': '9.3950',
    '2. high': '11.3650',
    '3. low': '8.7200',
    '4. close': '11.1050',
    '5. volume': '111136785'
  },
  '2009-06-30': {
    '1. open': '9.9950',
    '2. high': '10.5000',
    '3. low': '8.6600',
    '4. close': '9.2850',
    '5. volume': '113188010'
  },
  '2009-05-29': {
    '1. open': '8.9300',
    '2. high': '10.6000',
    '3. low': '8.8750',
    '4. close': '9.7500',
    '5. volume': '135752282'
  },
  '2009-04-30': {
    '1. open': '8.0900',
    '2. high': '9.9650',
    '3. low': '7.9950',
    '4. close': '8.7500',
    '5. volume': '147447824'
  },
  '2009-03-31': {
    '1. open': '7.5000',
    '2. high': '8.4250',
    '3. low': '6.6000',
    '4. close': '8.1100',
    '5. volume': '154981338'
  },
  '2009-02-27': {
    '1. open': '9.6450',
    '2. high': '10.8000',
    '3. low': '7.2900',
    '4. close': '7.6400',
    '5. volume': '119317398'
  },
  '2009-01-30': {
    '1. open': '12.0000',
    '2. high': '12.1050',
    '3. low': '8.5250',
    '4. close': '9.7800',
    '5. volume': '141206618'
  },
  '2008-12-30': {
    '1. open': '11.2800',
    '2. high': '11.9100',
    '3. low': '9.9400',
    '4. close': '11.9100',
    '5. volume': '102510664'
  },
  '2008-11-28': {
    '1. open': '8.9700',
    '2. high': '11.4200',
    '3. low': '8.7200',
    '4. close': '11.2900',
    '5. volume': '157036105'
  },
  '2008-10-31': {
    '1. open': '15.0900',
    '2. high': '15.1500',
    '3. low': '6.8700',
    '4. close': '8.6500',
    '5. volume': '287164981'
  },
  '2008-09-30': {
    '1. open': '15.8600',
    '2. high': '16.8200',
    '3. low': '14.3050',
    '4. close': '14.7800',
    '5. volume': '186121552'
  },
  '2008-08-29': {
    '1. open': '15.0900',
    '2. high': '16.1050',
    '3. low': '14.5200',
    '4. close': '16.0000',
    '5. volume': '111710890'
  },
  '2008-07-31': {
    '1. open': '16.6500',
    '2. high': '16.8900',
    '3. low': '14.6400',
    '4. close': '15.0900',
    '5. volume': '188632227'
  },
  '2008-06-30': {
    '1. open': '20.4900',
    '2. high': '20.5000',
    '3. low': '16.3500',
    '4. close': '16.6000',
    '5. volume': '161858432'
  },
  '2008-05-30': {
    '1. open': '20.2000',
    '2. high': '22.5400',
    '3. low': '19.8200',
    '4. close': '20.4500',
    '5. volume': '163144678'
  },
  '2008-04-30': {
    '1. open': '19.1800',
    '2. high': '20.8400',
    '3. low': '19.1500',
    '4. close': '20.0300',
    '5. volume': '113206763'
  },
  '2008-03-31': {
    '1. open': '21.6700',
    '2. high': '22.5700',
    '3. low': '19.0900',
    '4. close': '19.3500',
    '5. volume': '170897563'
  },
  '2008-02-29': {
    '1. open': '21.8300',
    '2. high': '23.0700',
    '3. low': '21.2700',
    '4. close': '21.9800',
    '5. volume': '120886363'
  },
  '2008-01-31': {
    '1. open': '23.1900',
    '2. high': '24.3800',
    '3. low': '19.8000',
    '4. close': '21.6600',
    '5. volume': '191102432'
  },
  '2007-12-28': {
    '1. open': '23.1300',
    '2. high': '24.3800',
    '3. low': '22.7500',
    '4. close': '23.5100',
    '5. volume': '95755719'
  },
  '2007-11-30': {
    '1. open': '20.8400',
    '2. high': '23.6500',
    '3. low': '19.9600',
    '4. close': '23.2100',
    '5. volume': '193171105'
  },
  '2007-10-31': {
    '1. open': '20.3900',
    '2. high': '22.1400',
    '3. low': '19.8400',
    '4. close': '20.9100',
    '5. volume': '160252187'
  },
  '2007-09-28': {
    '1. open': '21.3500',
    '2. high': '21.8400',
    '3. low': '19.8100',
    '4. close': '20.4000',
    '5. volume': '119285852'
  },
  '2007-08-31': {
    '1. open': '21.1800',
    '2. high': '22.0100',
    '3. low': '20.1000',
    '4. close': '21.3300',
    '5. volume': '181130145'
  },
  '2007-07-31': {
    '1. open': '23.9800',
    '2. high': '24.2000',
    '3. low': '20.9000',
    '4. close': '21.4600',
    '5. volume': '139285163'
  },
  '2007-06-29': {
    '1. open': '23.6700',
    '2. high': '25.0300',
    '3. low': '23.2400',
    '4. close': '24.0300',
    '5. volume': '149960376'
  },
  '2007-05-31': {
    '1. open': '25.5000',
    '2. high': '25.7300',
    '3. low': '23.0700',
    '4. close': '23.6400',
    '5. volume': '137815401'
  },
  '2007-04-30': {
    '1. open': '22.6500',
    '2. high': '26.3300',
    '3. low': '22.2800',
    '4. close': '25.3400',
    '5. volume': '151041444'
  },
  '2007-03-30': {
    '1. open': '24.1900',
    '2. high': '24.6700',
    '3. low': '21.7700',
    '4. close': '22.6600',
    '5. volume': '176469354'
  },
  '2007-02-28': {
    '1. open': '23.7500',
    '2. high': '25.7200',
    '3. low': '23.7500',
    '4. close': '24.1200',
    '5. volume': '116937926'
  },
  '2007-01-31': {
    '1. open': '22.9100',
    '2. high': '24.1100',
    '3. low': '22.1400',
    '4. close': '23.6000',
    '5. volume': '114376785'
  },
  '2006-12-29': {
    '1. open': '22.4500',
    '2. high': '24.2500',
    '3. low': '22.2300',
    '4. close': '22.8400',
    '5. volume': '131644001'
  },
  '2006-11-30': {
    '1. open': '21.5700',
    '2. high': '22.6700',
    '3. low': '21.4400',
    '4. close': '22.5000',
    '5. volume': '109032492'
  },
  '2006-10-31': {
    '1. open': '20.8000',
    '2. high': '22.0800',
    '3. low': '20.6300',
    '4. close': '21.7000',
    '5. volume': '90691288'
  },
  '2006-09-29': {
    '1. open': '19.7400',
    '2. high': '20.9600',
    '3. low': '19.6500',
    '4. close': '20.7000',
    '5. volume': '99452160'
  },
  '2006-08-31': {
    '1. open': '19.1200',
    '2. high': '19.9000',
    '3. low': '18.4600',
    '4. close': '19.7900',
    '5. volume': '116930353'
  },
  '2006-07-31': {
    '1. open': '21.0500',
    '2. high': '21.4500',
    '3. low': '18.8200',
    '4. close': '19.3800',
    '5. volume': '121515051'
  },
  '2006-06-30': {
    '1. open': '21.1600',
    '2. high': '21.6800',
    '3. low': '20.0700',
    '4. close': '20.9600',
    '5. volume': '77479853'
  },
  '2006-05-31': {
    '1. open': '21.2000',
    '2. high': '23.5000',
    '3. low': '19.9300',
    '4. close': '21.1600',
    '5. volume': '152858669'
  },
  '2006-04-28': {
    '1. open': '20.7900',
    '2. high': '21.3300',
    '3. low': '20.5900',
    '4. close': '21.1300',
    '5. volume': '74869441'
  },
  '2006-03-31': {
    '1. open': '21.9700',
    '2. high': '22.8000',
    '3. low': '20.4900',
    '4. close': '20.6900',
    '5. volume': '130652793'
  },
  '2006-02-28': {
    '1. open': '23.0500',
    '2. high': '23.8500',
    '3. low': '21.7500',
    '4. close': '21.9100',
    '5. volume': '95976127'
  },
  '2006-01-31': {
    '1. open': '20.6400',
    '2. high': '23.7000',
    '3. low': '20.5500',
    '4. close': '23.1900',
    '5. volume': '130968994'
  },
  '2005-12-30': {
    '1. open': '18.5200',
    '2. high': '20.6800',
    '3. low': '18.3800',
    '4. close': '20.4800',
    '5. volume': '107997904'
  },
  '2005-11-30': {
    '1. open': '18.6400',
    '2. high': '19.1600',
    '3. low': '18.2300',
    '4. close': '18.4300',
    '5. volume': '69927826'
  },
  '2005-10-31': {
    '1. open': '19.4600',
    '2. high': '20.0800',
    '3. low': '17.7000',
    '4. close': '18.6000',
    '5. volume': '95079472'
  },
  '2005-09-30': {
    '1. open': '20.5200',
    '2. high': '20.6400',
    '3. low': '19.2600',
    '4. close': '19.4600',
    '5. volume': '109968854'
  },
  '2005-08-31': {
    '1. open': '20.5500',
    '2. high': '21.2300',
    '3. low': '19.9100',
    '4. close': '20.4400',
    '5. volume': '82675485'
  },
  '2005-07-29': {
    '1. open': '19.1900',
    '2. high': '20.6800',
    '3. low': '18.7100',
    '4. close': '20.4600',
    '5. volume': '77079433'
  },
  '2005-06-30': {
    '1. open': '19.1200',
    '2. high': '19.7700',
    '3. low': '18.8500',
    '4. close': '19.3200',
    '5. volume': '113977820'
  },
  '2005-05-31': {
    '1. open': '18.2200',
    '2. high': '19.5100',
    '3. low': '17.9700',
    '4. close': '19.0700',
    '5. volume': '59363961'
  },
  '2005-04-29': {
    '1. open': '18.8600',
    '2. high': '19.7700',
    '3. low': '17.9300',
    '4. close': '18.1500',
    '5. volume': '86313312'
  },
  '2005-03-31': {
    '1. open': '18.2000',
    '2. high': '18.9800',
    '3. low': '17.8400',
    '4. close': '18.8300',
    '5. volume': '67560812'
  },
  '2005-02-28': {
    '1. open': '17.8000',
    '2. high': '18.3100',
    '3. low': '17.5700',
    '4. close': '18.1500',
    '5. volume': '58442347'
  },
  '2005-01-31': {
    '1. open': '16.9500',
    '2. high': '17.8700',
    '3. low': '16.4800',
    '4. close': '17.8700',
    '5. volume': '57887648'
  },
  '2004-12-31': {
    '1. open': '15.8300',
    '2. high': '16.9900',
    '3. low': '15.8100',
    '4. close': '16.9000',
    '5. volume': '65019111'
  },
  '2004-11-30': {
    '1. open': '15.3500',
    '2. high': '16.3700',
    '3. low': '15.2300',
    '4. close': '15.8700',
    '5. volume': '71993647'
  },
  '2004-10-29': {
    '1. open': '15.6800',
    '2. high': '16.4000',
    '3. low': '14.9200',
    '4. close': '15.3200',
    '5. volume': '48836412'
  },
  '2004-09-30': {
    '1. open': '16.5100',
    '2. high': '17.2000',
    '3. low': '15.6200',
    '4. close': '15.6300',
    '5. volume': '52441481'
  },
  '2004-08-31': {
    '1. open': '16.7000',
    '2. high': '16.7500',
    '3. low': '15.1800',
    '4. close': '16.3500',
    '5. volume': '39911386'
  },
  '2004-07-30': {
    '1. open': '17.9100',
    '2. high': '17.9500',
    '3. low': '16.2500',
    '4. close': '16.6700',
    '5. volume': '44456462'
  },
  '2004-06-30': {
    '1. open': '16.3800',
    '2. high': '17.9200',
    '3. low': '16.2000',
    '4. close': '17.7500',
    '5. volume': '61480432'
  },
  '2004-05-31': {
    '1. open': '18.2700',
    '2. high': '18.9900',
    '3. low': '15.9800',
    '4. close': '16.4500',
    '5. volume': '54446543'
  },
  '2004-04-30': {
    '1. open': '18.4300',
    '2. high': '19.3100',
    '3. low': '18.1700',
    '4. close': '18.3900',
    '5. volume': '39053814'
  },
  '2004-03-31': {
    '1. open': '19.2500',
    '2. high': '19.8100',
    '3. low': '16.9400',
    '4. close': '18.2000',
    '5. volume': '66970007'
  },
  '2004-02-27': {
    '1. open': '18.0000',
    '2. high': '19.4400',
    '3. low': '17.7200',
    '4. close': '19.1200',
    '5. volume': '50230976'
  },
  '2004-01-30': {
    '1. open': '16.3500',
    '2. high': '18.7500',
    '3. low': '16.2400',
    '4. close': '17.9200',
    '5. volume': '58300055'
  },
  '2003-12-31': {
    '1. open': '16.0300',
    '2. high': '17.2000',
    '3. low': '15.4300',
    '4. close': '16.3500',
    '5. volume': '70380181'
  },
  '2003-11-28': {
    '1. open': '16.5400',
    '2. high': '17.6400',
    '3. low': '15.4200',
    '4. close': '15.7100',
    '5. volume': '36595045'
  },
  '2003-10-31': {
    '1. open': '14.7700',
    '2. high': '17.2300',
    '3. low': '14.4700',
    '4. close': '16.5500',
    '5. volume': '43485301'
  },
  '2003-09-30': {
    '1. open': '14.6800',
    '2. high': '15.8200',
    '3. low': '13.7300',
    '4. close': '14.6700',
    '5. volume': '39577448'
  },
  '2003-08-29': {
    '1. open': '13.3100',
    '2. high': '15.2800',
    '3. low': '13.0800',
    '4. close': '14.6000',
    '5. volume': '31546359'
  },
  '2003-07-31': {
    '1. open': '12.8300',
    '2. high': '13.5000',
    '3. low': '11.6500',
    '4. close': '13.3700',
    '5. volume': '35867727'
  },
  '2003-06-30': {
    '1. open': '13.2000',
    '2. high': '13.5000',
    '3. low': '12.2200',
    '4. close': '12.7900',
    '5. volume': '36732215'
  },
  '2003-05-30': {
    '1. open': '10.6900',
    '2. high': '13.3000',
    '3. low': '10.3700',
    '4. close': '12.9500',
    '5. volume': '39258504'
  },
  '2003-04-30': {
    '1. open': '9.0900',
    '2. high': '11.3200',
    '3. low': '9.0300',
    '4. close': '10.6900',
    '5. volume': '35084338'
  },
  '2003-03-31': {
    '1. open': '9.4600',
    '2. high': '10.1800',
    '3. low': '8.5700',
    '4. close': '9.0900',
    '5. volume': '49866874'
  },
  '2003-02-28': {
    '1. open': '10.1300',
    '2. high': '10.6600',
    '3. low': '9.1200',
    '4. close': '9.4400',
    '5. volume': '29320025'
  },
  '2003-01-31': {
    '1. open': '10.0000',
    '2. high': '11.6100',
    '3. low': '9.6800',
    '4. close': '10.0800',
    '5. volume': '38742168'
  },
  '2002-12-31': {
    '1. open': '10.7400',
    '2. high': '10.9700',
    '3. low': '9.8000',
    '4. close': '10.0000',
    '5. volume': '29489495'
  },
  '2002-11-29': {
    '1. open': '10.3400',
    '2. high': '11.5000',
    '3. low': '9.9100',
    '4. close': '10.7800',
    '5. volume': '27547767'
  },
  '2002-10-31': {
    '1. open': '8.6200',
    '2. high': '10.5500',
    '3. low': '7.6200',
    '4. close': '10.3300',
    '5. volume': '37406333'
  },
  '2002-09-30': {
    '1. open': '11.2000',
    '2. high': '11.2000',
    '3. low': '8.1800',
    '4. close': '8.6200',
    '5. volume': '27653084'
  },
  '2002-08-30': {
    '1. open': '10.2800',
    '2. high': '11.1500',
    '3. low': '9.8000',
    '4. close': '11.1100',
    '5. volume': '20096327'
  },
  '2002-07-31': {
    '1. open': '12.8500',
    '2. high': '13.8500',
    '3. low': '9.0600',
    '4. close': '10.1000',
    '5. volume': '40097555'
  },
  '2002-06-28': {
    '1. open': '15.3600',
    '2. high': '15.5500',
    '3. low': '12.1100',
    '4. close': '13.0900',
    '5. volume': '31219780'
  },
  '2002-05-31': {
    '1. open': '15.0700',
    '2. high': '15.6700',
    '3. low': '14.6500',
    '4. close': '15.5200',
    '5. volume': '24491149'
  },
  '2002-04-30': {
    '1. open': '17.1100',
    '2. high': '17.2000',
    '3. low': '14.7500',
    '4. close': '15.0600',
    '5. volume': '31246950'
  },
  '2002-03-29': {
    '1. open': '14.9100',
    '2. high': '17.4800',
    '3. low': '14.8500',
    '4. close': '17.1100',
    '5. volume': '29268860'
  },
  '2002-02-28': {
    '1. open': '14.7500',
    '2. high': '15.8000',
    '3. low': '14.0800',
    '4. close': '15.0500',
    '5. volume': '27595869'
  },
  '2002-01-31': {
    '1. open': '14.9900',
    '2. high': '16.8500',
    '3. low': '14.5600',
    '4. close': '14.9100',
    '5. volume': '29048607'
  },
  '2001-12-31': {
    '1. open': '15.8500',
    '2. high': '16.0600',
    '3. low': '14.2800',
    '4. close': '14.9900',
    '5. volume': '21249413'
  },
  '2001-11-30': {
    '1. open': '15.7500',
    '2. high': '16.8500',
    '3. low': '15.0100',
    '4. close': '15.7700',
    '5. volume': '28254244'
  },
  '2001-10-31': {
    '1. open': '16.8000',
    '2. high': '17.6500',
    '3. low': '15.2100',
    '4. close': '15.9600',
    '5. volume': '28298741'
  },
  '2001-09-28': {
    '1. open': '16.4000',
    '2. high': '16.5000',
    '3. low': '11.8000',
    '4. close': '16.5000',
    '5. volume': '42226011'
  },
  '2001-08-31': {
    '1. open': '17.9400',
    '2. high': '18.4500',
    '3. low': '16.1000',
    '4. close': '16.3100',
    '5. volume': '19639100'
  },
  '2001-07-31': {
    '1. open': '18.9000',
    '2. high': '19.8400',
    '3. low': '17.4000',
    '4. close': '17.8800',
    '5. volume': '21229480'
  },
  '2001-06-29': {
    '1. open': '18.2500',
    '2. high': '19.1800',
    '3. low': '17.8300',
    '4. close': '18.9000',
    '5. volume': '32858793'
  },
  '2001-05-31': {
    '1. open': '19.0000',
    '2. high': '19.1000',
    '3. low': '17.4000',
    '4. close': '18.1900',
    '5. volume': '33860600'
  },
  '2001-04-30': {
    '1. open': '19.2500',
    '2. high': '19.9400',
    '3. low': '17.7500',
    '4. close': '19.2200',
    '5. volume': '23299043'
  },
  '2001-03-30': {
    '1. open': '23.3800',
    '2. high': '23.3800',
    '3. low': '18.7500',
    '4. close': '19.4000',
    '5. volume': '37783587'
  },
  '2001-02-28': {
    '1. open': '23.1000',
    '2. high': '24.7800',
    '3. low': '22.8200',
    '4. close': '23.4000',
    '5. volume': '22670262'
  },
  '2001-01-31': {
    '1. open': '23.0800',
    '2. high': '24.7000',
    '3. low': '21.8000',
    '4. close': '23.2700',
    '5. volume': '24694451'
  },
  '2000-12-29': {
    '1. open': '22.2000',
    '2. high': '23.9400',
    '3. low': '22.0700',
    '4. close': '23.0500',
    '5. volume': '21159951'
  }
};

// tslint:disable:max-line-length
export const deutschePostCompany: Company = {
  id: 1011,
  name: 'Deutsche Post AG',
  country: Country.Deutschland,
  city: 'Bonn',
  url: 'https://www.dpdhl.com/de.html',
  description: 'Die Deutsche Post AG mit Sitz in Bonn ist ein deutsches Logistik- und Postunternehmen. Das Unternehmen entstand 1995 durch Privatisierung der früheren Behörde Deutsche Bundespost und ist seit 2000 Bestandteil des deutschen Leitindexes DAX an der Frankfurter Wertpapierbörse',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Deutsche_Post_AG',
  logo: 'https://www.dpdhl.com/content/dam/dpdhl/en/logos/official_dpdhllogo.svg',
  products: [
    {
      id: 101110,
      name: 'Deutsche Post',
      logo: 'https://www.dpdhl.com/content/dam/dpdhl/en/logos/deutsche-post-logo.svg'
    },
    {
      id: 101111,
      name: 'DHL',
      logo: 'https://www.dpdhl.com/content/dam/dpdhl/en/logos/dhl-logo.svg'
    }
  ],
  industries: [1219],
  currency: Currency.EUR,
  securityType: SecurityType.Namensaktie,
  isin: 'DE0005552004',
  wkn: '555200',
  symbol: 'DPW.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [
    {
      name: 'Deutsche Post ADR',
      isin: 'US25157Y2028',
      securityType: SecurityType.ADR
    }
  ],
  current_indices: [Indices.DAX, Indices.EuroStoxx50],
  end_of_month_prices: deutschePostPrices,
  dividends: deutschePostDividends,
  tags: ['Post', 'Briefe', 'Pakete', 'Logistik', 'Logistics']
};
// tslint:enable:max-line-length
