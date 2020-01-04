import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';

const dividends = [
  {year: 2018, rate: 1.94, yield: 3.19}, {year: 2017, rate: 1.90}, {
    year: 2016,
    rate: 1.70
  }, {year: 2015, rate: 1.60, yield: 2.57}, {year: 2014, rate: 1.50, yield: 2.75}, {year: 2013, rate: 1.45, yield: 2.77}, {
    year: 2012,
    rate: 1.45,
    yield: 2.91
  }, {year: 2011, rate: 1.39, yield: 2.86}, {year: 2010, rate: 1.30, yield: 2.76}, {year: 2009, rate: 1.20, yield: 2.82}, {
    year: 2008,
    rate: 1.20,
    yield: 2.78
  }, {year: 2007, rate: 1.10, yield: 1.79}, {year: 2006, rate: 1.00, yield: 1.74}, {year: 2005, rate: 0.85, yield: 1.93}, {
    year: 2004,
    rate: 0.68,
    yield: 2.00
  }, {year: 2003, rate: 0.92, yield: 2.84}, {year: 2002, rate: 0.87, yield: 2.71}, {year: 2001, rate: 0.78, yield: 2.28}, {
    year: 2000,
    rate: 0.73,
    yield: 1.82
  }, {year: 1999, rate: 0.65, yield: 2.22}
];
const prices = {
  '2019-11-29': {
    '1. open': '74.5400',
    '2. high': '76.5000',
    '3. low': '73.0200',
    '4. close': '74.7200',
    '5. volume': '58211'
  },
  '2019-10-31': {
    '1. open': '80.9000',
    '2. high': '80.9000',
    '3. low': '71.1800',
    '4. close': '74.4600',
    '5. volume': '248750'
  },
  '2019-09-30': {
    '1. open': '81.5800',
    '2. high': '82.0800',
    '3. low': '78.2800',
    '4. close': '80.8400',
    '5. volume': '70470'
  },
  '2019-08-30': {
    '1. open': '77.7800',
    '2. high': '81.9800',
    '3. low': '75.9200',
    '4. close': '81.4600',
    '5. volume': '81426'
  },
  '2019-07-31': {
    '1. open': '74.7600',
    '2. high': '79.4000',
    '3. low': '74.2200',
    '4. close': '78.4000',
    '5. volume': '101788'
  },
  '2019-06-28': {
    '1. open': '71.1600',
    '2. high': '75.5400',
    '3. low': '71.1600',
    '4. close': '74.5000',
    '5. volume': '62146'
  },
  '2019-05-31': {
    '1. open': '72.0200',
    '2. high': '72.5000',
    '3. low': '69.3600',
    '4. close': '71.4000',
    '5. volume': '253251'
  },
  '2019-04-30': {
    '1. open': '68.9400',
    '2. high': '72.0800',
    '3. low': '67.8800',
    '4. close': '72.0800',
    '5. volume': '68934'
  },
  '2019-03-29': {
    '1. open': '66.6300',
    '2. high': '69.5700',
    '3. low': '65.7200',
    '4. close': '68.7000',
    '5. volume': '84697'
  },
  '2019-02-28': {
    '1. open': '63.6500',
    '2. high': '67.8700',
    '3. low': '63.5000',
    '4. close': '66.3500',
    '5. volume': '126393'
  },
  '2019-01-31': {
    '1. open': '60.6200',
    '2. high': '63.6400',
    '3. low': '60.4400',
    '4. close': '63.3700',
    '5. volume': '61576'
  },
  '2018-12-28': {
    '1. open': '66.1500',
    '2. high': '66.3700',
    '3. low': '59.8000',
    '4. close': '60.6800',
    '5. volume': '53812'
  },
  '2018-11-30': {
    '1. open': '62.7900',
    '2. high': '66.6400',
    '3. low': '62.6800',
    '4. close': '66.0900',
    '5. volume': '104020'
  },
  '2018-10-31': {
    '1. open': '66.6700',
    '2. high': '68.2900',
    '3. low': '61.2500',
    '4. close': '62.5800',
    '5. volume': '118365'
  },
  '2018-09-28': {
    '1. open': '67.9200',
    '2. high': '68.1400',
    '3. low': '64.3100',
    '4. close': '66.7100',
    '5. volume': '70470'
  },
  '2018-08-31': {
    '1. open': '67.1600',
    '2. high': '69.0600',
    '3. low': '66.7100',
    '4. close': '67.8000',
    '5. volume': '61738'
  },
  '2018-07-31': {
    '1. open': '62.5100',
    '2. high': '67.8700',
    '3. low': '62.5000',
    '4. close': '67.2500',
    '5. volume': '138439'
  },
  '2018-06-29': {
    '1. open': '65.7300',
    '2. high': '66.4700',
    '3. low': '62.6000',
    '4. close': '62.7900',
    '5. volume': '91788'
  },
  '2018-05-31': {
    '1. open': '66.4200',
    '2. high': '67.6300',
    '3. low': '64.4000',
    '4. close': '65.4200',
    '5. volume': '97533'
  },
  '2018-04-30': {
    '1. open': '65.5000',
    '2. high': '68.4900',
    '3. low': '64.0300',
    '4. close': '66.5000',
    '5. volume': '82556'
  },
  '2018-03-29': {
    '1. open': '65.6000',
    '2. high': '68.5200',
    '3. low': '63.6000',
    '4. close': '64.7500',
    '5. volume': '87186'
  },
  '2018-02-28': {
    '1. open': '69.9900',
    '2. high': '70.3400',
    '3. low': '63.4300',
    '4. close': '65.9100',
    '5. volume': '108870'
  },
  '2018-01-31': {
    '1. open': '70.7100',
    '2. high': '71.7000',
    '3. low': '68.0300',
    '4. close': '70.1800',
    '5. volume': '60753'
  },
  '2017-12-29': {
    '1. open': '70.7100',
    '2. high': '70.7100',
    '3. low': '70.7100',
    '4. close': '70.7100',
    '5. volume': '0'
  },
  '2017-11-30': {
    '1. open': '70.7000',
    '2. high': '71.8700',
    '3. low': '66.1000',
    '4. close': '70.7100',
    '5. volume': '53041'
  },
  '2017-10-31': {
    '1. open': '66.4400',
    '2. high': '71.9900',
    '3. low': '66.0700',
    '4. close': '70.2300',
    '5. volume': '67202'
  },
  '2017-09-29': {
    '1. open': '66.3800',
    '2. high': '68.6000',
    '3. low': '65.3500',
    '4. close': '65.9400',
    '5. volume': '22464'
  },
  '2017-08-31': {
    '1. open': '63.4500',
    '2. high': '68.1200',
    '3. low': '62.7000',
    '4. close': '66.8400',
    '5. volume': '50517'
  },
  '2017-07-31': {
    '1. open': '66.3500',
    '2. high': '66.7500',
    '3. low': '62.8300',
    '4. close': '63.0800',
    '5. volume': '53085'
  },
  '2017-06-30': {
    '1. open': '66.2600',
    '2. high': '69.4200',
    '3. low': '66.0000',
    '4. close': '66.4300',
    '5. volume': '49207'
  },
  '2017-05-31': {
    '1. open': '64.4300',
    '2. high': '67.7100',
    '3. low': '63.7600',
    '4. close': '66.9300',
    '5. volume': '116657'
  },
  '2017-04-28': {
    '1. open': '63.9800',
    '2. high': '64.4600',
    '3. low': '62.0000',
    '4. close': '64.0000',
    '5. volume': '77878'
  },
  '2017-03-31': {
    '1. open': '62.9900',
    '2. high': '64.4100',
    '3. low': '61.1800',
    '4. close': '63.5500',
    '5. volume': '148857'
  },
  '2017-02-28': {
    '1. open': '58.2400',
    '2. high': '63.0000',
    '3. low': '58.1700',
    '4. close': '62.6400',
    '5. volume': '115989'
  },
  '2017-01-31': {
    '1. open': '60.0200',
    '2. high': '61.4900',
    '3. low': '58.0600',
    '4. close': '58.2300',
    '5. volume': '120153'
  },
  '2016-12-30': {
    '1. open': '59.0200',
    '2. high': '61.9000',
    '3. low': '58.0000',
    '4. close': '59.9700',
    '5. volume': '81553'
  },
  '2016-11-30': {
    '1. open': '63.1600',
    '2. high': '63.3700',
    '3. low': '57.8000',
    '4. close': '59.4800',
    '5. volume': '78696'
  },
  '2016-10-31': {
    '1. open': '67.2700',
    '2. high': '67.7800',
    '3. low': '62.5500',
    '4. close': '63.0000',
    '5. volume': '37852'
  },
  '2016-09-30': {
    '1. open': '68.2400',
    '2. high': '70.4000',
    '3. low': '63.8600',
    '4. close': '65.5100',
    '5. volume': '45981'
  },
  '2016-08-31': {
    '1. open': '68.7700',
    '2. high': '70.2600',
    '3. low': '67.3100',
    '4. close': '68.0500',
    '5. volume': '52433'
  },
  '2016-07-29': {
    '1. open': '63.5800',
    '2. high': '68.9600',
    '3. low': '63.1100',
    '4. close': '68.9600',
    '5. volume': '55903'
  },
  '2016-06-30': {
    '1. open': '63.2900',
    '2. high': '63.7100',
    '3. low': '59.7800',
    '4. close': '62.0300',
    '5. volume': '55956'
  },
  '2016-05-31': {
    '1. open': '61.6000',
    '2. high': '63.5400',
    '3. low': '58.8100',
    '4. close': '63.3600',
    '5. volume': '22377'
  },
  '2016-04-29': {
    '1. open': '61.6000',
    '2. high': '64.7900',
    '3. low': '60.1700',
    '4. close': '61.1500',
    '5. volume': '39012'
  },
  '2016-03-31': {
    '1. open': '64.3300',
    '2. high': '65.6000',
    '3. low': '61.8900',
    '4. close': '62.4600',
    '5. volume': '45074'
  },
  '2016-02-29': {
    '1. open': '63.5800',
    '2. high': '64.7600',
    '3. low': '57.5600',
    '4. close': '64.1100',
    '5. volume': '47851'
  },
  '2016-01-29': {
    '1. open': '60.5100',
    '2. high': '63.6500',
    '3. low': '57.5700',
    '4. close': '63.6500',
    '5. volume': '53779'
  },
  '2015-12-30': {
    '1. open': '65.9800',
    '2. high': '66.1200',
    '3. low': '60.4000',
    '4. close': '63.0300',
    '5. volume': '63541'
  },
  '2015-11-30': {
    '1. open': '62.9800',
    '2. high': '66.0000',
    '3. low': '62.4600',
    '4. close': '65.7000',
    '5. volume': '49567'
  },
  '2015-10-30': {
    '1. open': '56.9600',
    '2. high': '65.1000',
    '3. low': '55.6900',
    '4. close': '62.9100',
    '5. volume': '70405'
  },
  '2015-09-30': {
    '1. open': '54.4900',
    '2. high': '56.4900',
    '3. low': '52.9100',
    '4. close': '56.2300',
    '5. volume': '73579'
  },
  '2015-08-31': {
    '1. open': '61.9900',
    '2. high': '63.2100',
    '3. low': '52.0000',
    '4. close': '55.1500',
    '5. volume': '156414'
  },
  '2015-07-31': {
    '1. open': '58.1400',
    '2. high': '63.1500',
    '3. low': '57.4800',
    '4. close': '61.3900',
    '5. volume': '72918'
  },
  '2015-06-30': {
    '1. open': '63.2200',
    '2. high': '63.3000',
    '3. low': '58.2800',
    '4. close': '58.4000',
    '5. volume': '74670'
  },
  '2015-05-29': {
    '1. open': '64.5500',
    '2. high': '65.5300',
    '3. low': '61.3500',
    '4. close': '63.0800',
    '5. volume': '56940'
  },
  '2015-04-30': {
    '1. open': '62.7500',
    '2. high': '67.2900',
    '3. low': '62.7500',
    '4. close': '64.7400',
    '5. volume': '42204'
  },
  '2015-03-31': {
    '1. open': '62.2500',
    '2. high': '63.2500',
    '3. low': '60.9100',
    '4. close': '62.6100',
    '5. volume': '94491'
  },
  '2015-02-27': {
    '1. open': '59.9000',
    '2. high': '62.1400',
    '3. low': '56.8700',
    '4. close': '62.0700',
    '5. volume': '104150'
  },
  '2015-01-30': {
    '1. open': '54.7100',
    '2. high': '60.4600',
    '3. low': '52.4500',
    '4. close': '59.5900',
    '5. volume': '134009'
  },
  '2014-12-30': {
    '1. open': '56.7200',
    '2. high': '56.7900',
    '3. low': '51.5500',
    '4. close': '54.1000',
    '5. volume': '136073'
  },
  '2014-11-28': {
    '1. open': '54.2900',
    '2. high': '56.5100',
    '3. low': '53.4300',
    '4. close': '56.4000',
    '5. volume': '84259'
  },
  '2014-10-31': {
    '1. open': '52.9000',
    '2. high': '54.3100',
    '3. low': '49.8200',
    '4. close': '54.2100',
    '5. volume': '86274'
  },
  '2014-09-30': {
    '1. open': '53.3000',
    '2. high': '55.2600',
    '3. low': '51.7400',
    '4. close': '53.0000',
    '5. volume': '42037'
  },
  '2014-08-29': {
    '1. open': '54.1100',
    '2. high': '54.5000',
    '3. low': '52.6500',
    '4. close': '53.0000',
    '5. volume': '49729'
  },
  '2014-07-31': {
    '1. open': '55.4500',
    '2. high': '57.3400',
    '3. low': '53.8300',
    '4. close': '53.9500',
    '5. volume': '56268'
  },
  '2014-06-30': {
    '1. open': '54.5200',
    '2. high': '55.5500',
    '3. low': '52.6700',
    '4. close': '54.0300',
    '5. volume': '45973'
  },
  '2014-05-30': {
    '1. open': '53.0800',
    '2. high': '55.5000',
    '3. low': '50.6100',
    '4. close': '54.6000',
    '5. volume': '58658'
  },
  '2014-04-30': {
    '1. open': '51.1300',
    '2. high': '54.4700',
    '3. low': '50.7600',
    '4. close': '53.1200',
    '5. volume': '72145'
  },
  '2014-03-31': {
    '1. open': '50.4200',
    '2. high': '52.6500',
    '3. low': '49.0200',
    '4. close': '51.2700',
    '5. volume': '101312'
  },
  '2014-02-28': {
    '1. open': '49.2200',
    '2. high': '52.4100',
    '3. low': '48.6000',
    '4. close': '51.0800',
    '5. volume': '108091'
  },
  '2014-01-31': {
    '1. open': '52.8500',
    '2. high': '53.3200',
    '3. low': '48.4400',
    '4. close': '49.0900',
    '5. volume': '132779'
  },
  '2013-12-30': {
    '1. open': '53.7400',
    '2. high': '53.7400',
    '3. low': '50.5800',
    '4. close': '52.1000',
    '5. volume': '68517'
  },
  '2013-11-29': {
    '1. open': '54.4700',
    '2. high': '55.9200',
    '3. low': '53.0800',
    '4. close': '53.5300',
    '5. volume': '71934'
  },
  '2013-10-31': {
    '1. open': '55.2400',
    '2. high': '56.1400',
    '3. low': '50.3200',
    '4. close': '54.4800',
    '5. volume': '123440'
  },
  '2013-09-30': {
    '1. open': '57.1000',
    '2. high': '57.8000',
    '3. low': '54.6600',
    '4. close': '55.4800',
    '5. volume': '62954'
  },
  '2013-08-30': {
    '1. open': '59.8500',
    '2. high': '60.2700',
    '3. low': '56.1000',
    '4. close': '56.1600',
    '5. volume': '30501'
  },
  '2013-07-31': {
    '1. open': '58.0000',
    '2. high': '59.8800',
    '3. low': '54.6000',
    '4. close': '59.5000',
    '5. volume': '30197'
  },
  '2013-06-28': {
    '1. open': '56.4800',
    '2. high': '58.2200',
    '3. low': '54.7200',
    '4. close': '57.4100',
    '5. volume': '88301'
  },
  '2013-05-31': {
    '1. open': '57.5000',
    '2. high': '59.7700',
    '3. low': '56.2000',
    '4. close': '57.1200',
    '5. volume': '64779'
  },
  '2013-04-30': {
    '1. open': '54.6400',
    '2. high': '59.6700',
    '3. low': '53.3200',
    '4. close': '58.2300',
    '5. volume': '64147'
  },
  '2013-03-28': {
    '1. open': '53.3900',
    '2. high': '55.7000',
    '3. low': '52.6100',
    '4. close': '54.5900',
    '5. volume': '46948'
  },
  '2013-02-28': {
    '1. open': '51.0200',
    '2. high': '54.1500',
    '3. low': '49.3600',
    '4. close': '53.0800',
    '5. volume': '74838'
  },
  '2013-01-31': {
    '1. open': '50.2000',
    '2. high': '52.2300',
    '3. low': '49.2550',
    '4. close': '51.4100',
    '5. volume': '37358'
  },
  '2012-12-28': {
    '1. open': '49.0000',
    '2. high': '51.4100',
    '3. low': '48.9900',
    '4. close': '49.6950',
    '5. volume': '28020'
  },
  '2012-11-30': {
    '1. open': '47.4350',
    '2. high': '49.9850',
    '3. low': '47.4350',
    '4. close': '48.8550',
    '5. volume': '73450'
  },
  '2012-10-31': {
    '1. open': '48.2950',
    '2. high': '48.8750',
    '3. low': '45.8000',
    '4. close': '47.5300',
    '5. volume': '146181'
  },
  '2012-09-28': {
    '1. open': '49.5800',
    '2. high': '50.9500',
    '3. low': '47.9500',
    '4. close': '47.9500',
    '5. volume': '39392'
  },
  '2012-08-31': {
    '1. open': '49.7050',
    '2. high': '51.2700',
    '3. low': '48.2200',
    '4. close': '49.6650',
    '5. volume': '70455'
  },
  '2012-07-31': {
    '1. open': '48.9300',
    '2. high': '51.1000',
    '3. low': '46.8500',
    '4. close': '49.5850',
    '5. volume': '106882'
  },
  '2012-06-29': {
    '1. open': '51.9100',
    '2. high': '52.5900',
    '3. low': '46.5000',
    '4. close': '48.5800',
    '5. volume': '237541'
  },
  '2012-05-31': {
    '1. open': '53.5000',
    '2. high': '54.8500',
    '3. low': '50.9400',
    '4. close': '51.3500',
    '5. volume': '82234'
  },
  '2012-04-30': {
    '1. open': '52.4000',
    '2. high': '54.7200',
    '3. low': '50.0000',
    '4. close': '53.5100',
    '5. volume': '96861'
  },
  '2012-03-30': {
    '1. open': '50.9000',
    '2. high': '53.4700',
    '3. low': '50.5800',
    '4. close': '52.1700',
    '5. volume': '122917'
  },
  '2012-02-29': {
    '1. open': '47.7650',
    '2. high': '51.0100',
    '3. low': '47.2900',
    '4. close': '50.8100',
    '5. volume': '86295'
  },
  '2012-01-31': {
    '1. open': '48.9850',
    '2. high': '49.6600',
    '3. low': '45.9600',
    '4. close': '47.0500',
    '5. volume': '95757'
  },
  '2011-12-30': {
    '1. open': '48.8500',
    '2. high': '49.3750',
    '3. low': '45.9500',
    '4. close': '48.2800',
    '5. volume': '59391'
  },
  '2011-11-30': {
    '1. open': '49.5300',
    '2. high': '49.5300',
    '3. low': '45.2750',
    '4. close': '49.1750',
    '5. volume': '80727'
  },
  '2011-10-31': {
    '1. open': '45.3350',
    '2. high': '51.1700',
    '3. low': '44.5650',
    '4. close': '50.6000',
    '5. volume': '63563'
  },
  '2011-09-30': {
    '1. open': '47.4900',
    '2. high': '48.0950',
    '3. low': '41.9250',
    '4. close': '46.1000',
    '5. volume': '75394'
  },
  '2011-08-31': {
    '1. open': '50.1200',
    '2. high': '50.8300',
    '3. low': '43.4450',
    '4. close': '47.5050',
    '5. volume': '214164'
  },
  '2011-07-29': {
    '1. open': '51.6200',
    '2. high': '53.0000',
    '3. low': '49.1000',
    '4. close': '49.9000',
    '5. volume': '114565'
  },
  '2011-06-30': {
    '1. open': '51.2600',
    '2. high': '53.0000',
    '3. low': '49.6050',
    '4. close': '52.0000',
    '5. volume': '232122'
  },
  '2011-05-31': {
    '1. open': '49.5700',
    '2. high': '50.9400',
    '3. low': '48.3150',
    '4. close': '50.8500',
    '5. volume': '147902'
  },
  '2011-04-29': {
    '1. open': '46.2950',
    '2. high': '49.3700',
    '3. low': '46.1250',
    '4. close': '49.3100',
    '5. volume': '153653'
  },
  '2011-03-31': {
    '1. open': '45.6350',
    '2. high': '46.3500',
    '3. low': '42.2550',
    '4. close': '46.3500',
    '5. volume': '127238'
  },
  '2011-02-28': {
    '1. open': '44.3250',
    '2. high': '46.0000',
    '3. low': '43.1000',
    '4. close': '45.4000',
    '5. volume': '193886'
  },
  '2011-01-31': {
    '1. open': '47.5700',
    '2. high': '48.0600',
    '3. low': '43.8500',
    '4. close': '43.9800',
    '5. volume': '176984'
  },
  '2010-12-30': {
    '1. open': '45.2300',
    '2. high': '48.7900',
    '3. low': '45.2000',
    '4. close': '48.3800',
    '5. volume': '121080'
  },
  '2010-11-30': {
    '1. open': '45.7100',
    '2. high': '47.5400',
    '3. low': '44.9700',
    '4. close': '45.0000',
    '5. volume': '128360'
  },
  '2010-10-29': {
    '1. open': '43.9700',
    '2. high': '46.2100',
    '3. low': '42.6750',
    '4. close': '45.4350',
    '5. volume': '114712'
  },
  '2010-09-30': {
    '1. open': '42.4000',
    '2. high': '44.6800',
    '3. low': '42.3900',
    '4. close': '43.8700',
    '5. volume': '82354'
  },
  '2010-08-31': {
    '1. open': '43.2250',
    '2. high': '44.3450',
    '3. low': '41.0000',
    '4. close': '42.0300',
    '5. volume': '108163'
  },
  '2010-07-30': {
    '1. open': '43.8150',
    '2. high': '46.5850',
    '3. low': '42.7400',
    '4. close': '43.1150',
    '5. volume': '146628'
  },
  '2010-06-30': {
    '1. open': '41.5900',
    '2. high': '45.6350',
    '3. low': '41.2100',
    '4. close': '44.0550',
    '5. volume': '116536'
  },
  '2010-05-31': {
    '1. open': '42.0000',
    '2. high': '42.1450',
    '3. low': '41.8650',
    '4. close': '42.0950',
    '5. volume': '9696'
  },
  '2009-01-19': {
    '1. open': '43.1600',
    '2. high': '45.5200',
    '3. low': '41.5300',
    '4. close': '42.5700',
    '5. volume': '20304'
  },
  '2008-12-30': {
    '1. open': '45.0000',
    '2. high': '45.0600',
    '3. low': '41.6300',
    '4. close': '43.1200',
    '5. volume': '111858'
  },
  '2008-11-28': {
    '1. open': '42.8300',
    '2. high': '45.4000',
    '3. low': '40.9000',
    '4. close': '45.3200',
    '5. volume': '71894'
  },
  '2008-10-31': {
    '1. open': '50.5000',
    '2. high': '51.1200',
    '3. low': '39.6500',
    '4. close': '43.6900',
    '5. volume': '159647'
  },
  '2008-09-30': {
    '1. open': '47.1500',
    '2. high': '54.0000',
    '3. low': '46.4700',
    '4. close': '49.1500',
    '5. volume': '76289'
  },
  '2008-08-29': {
    '1. open': '48.7900',
    '2. high': '48.7900',
    '3. low': '46.5000',
    '4. close': '47.5500',
    '5. volume': '6032'
  },
  '2008-07-28': {
    '1. open': '44.4500',
    '2. high': '49.6000',
    '3. low': '40.7100',
    '4. close': '49.6000',
    '5. volume': '85489'
  },
  '2008-06-30': {
    '1. open': '55.5200',
    '2. high': '56.5700',
    '3. low': '44.1900',
    '4. close': '44.4900',
    '5. volume': '130043'
  },
  '2008-05-30': {
    '1. open': '57.2800',
    '2. high': '57.7800',
    '3. low': '53.5000',
    '4. close': '56.2000',
    '5. volume': '143764'
  },
  '2008-04-30': {
    '1. open': '56.6700',
    '2. high': '58.3500',
    '3. low': '54.4400',
    '4. close': '56.9300',
    '5. volume': '70904'
  },
  '2008-03-31': {
    '1. open': '51.9300',
    '2. high': '57.3100',
    '3. low': '51.3400',
    '4. close': '56.5000',
    '5. volume': '119655'
  },
  '2008-02-29': {
    '1. open': '54.6000',
    '2. high': '56.4300',
    '3. low': '51.1000',
    '4. close': '52.0000',
    '5. volume': '164832'
  },
  '2008-01-31': {
    '1. open': '61.9500',
    '2. high': '63.9300',
    '3. low': '51.8900',
    '4. close': '54.0500',
    '5. volume': '206089'
  }
};

// tslint:disable:max-line-length
export const danoneCompany: Company = {
  id: 1179,
  name: 'Danone S.A.',
  country: Country.Deutschland,
  city: 'Paris',
  url: 'http://www.danone.com/',
  description: 'Danone ist ein multinationaler Getränke- und Lebensmittelkonzern mit Hauptsitz in Paris. Das Unternehmen besitzt Niederlassungen in rund 120 Ländern der Welt. Über 100.000 Mitarbeiter erwirtschaften weltweit einen Jahresumsatz von über 24 Milliarden Euro.[2] In den USA tritt das Unternehmen unter dem Markennamen Dannon auf.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Danone',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Danone_Logo.png/500px-Danone_Logo.png',
  products: [
    {
      id: 117910,
      name: 'Danone',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/dairy/danone/Danone-logo.png'
    },
    {
      id: 117911,
      name: 'zywiec',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/waters/zywiec/zywiec-logo.jpg'
    },
    {
      id: 117912,
      name: 'Hayat',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/waters/hayat/hayat-su.png'
    },
    {
      id: 117913,
      name: 'danonino',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/dairy/danonino/danonino-logo.jpg'
    },
    {
      id: 117914,
      name: 'Villadelsur',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/waters/villadelsur/Villadelsur-logo.jpg'
    },
    {
      id: 117915,
      name: 'Alpro',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/dairy/alpro/alpro-logo.jpg'
    },
    {
      id: 117916,
      name: 'Silk',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/plant-based/silk/silk-logo.jpg'
    },
    {
      id: 117917,
      name: 'mizone',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/waters/mizone/mizone-logo.jpg'
    },
    {
      id: 117918,
      name: 'Bonafont',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/waters/bonafont/bonafont-logo.jpg'
    },
    {
      id: 117918,
      name: 'Actimel',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/dairy/actimel/actimel-logo.jpg'
    },
    {
      id: 117919,
      name: 'Font Vella',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/waters/font-vella/Fontvella-logo.jpg'
    },
    {
      id: 117920,
      name: 'prostok',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/dairy/prostokvashino/prostok.jpg'
    },
    {
      id: 117921,
      name: 'delight',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/dairy/international-delight/international-delight-mug-drink.jpg'
    },
    {
      id: 117922,
      name: 'oikos',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/dairy/oikos/oikos-ritual.jpg'
    },
    {
      id: 117923,
      name: 'Salus',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/waters/salus/salus-logo.jpg'
    },
    {
      id: 117924,
      name: 'Activia',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/dairy/activia/Activia-logo.jpg'
    },
    {
      id: 117925,
      name: 'Evian',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/waters/evian/LOGO%20FINAL.png'
    },
    {
      id: 117926,
      name: 'Volvic',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/waters/evian/LOGO%20FINAL.png'
    },
    {
      id: 117927,
      name: 'AQUA',
      logo: 'https://www.danone.com/content/dam/danone-corp/danone-com/brands/waters/aqua/Aqua.png'
    }
  ],
  industries: [2411, 2412],
  isharesIndustryName: IsharesIndustryNames.NichtzyklischeKonsumgueter,
  securityType: SecurityType.ActionsPort,
  currency: Currency.EUR,
  isin: 'FR0000120644',
  wkn: '851194',
  symbol: 'BSN.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.MSCIEuropeSRI, Indices.MSCIWorld, Indices.DowJonesSustainabilityEurozone],
  end_of_month_prices: prices,
  dividends,
  tags: ['Lebensmittelbranche', 'Milchprodukte', 'Getränke', 'Gebäck']
};
// tslint:enable:max-line-length

