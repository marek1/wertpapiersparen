import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 3.07, yield: 4.09}, {year: 2017, rate: 3.03}, {year: 2016, rate: 2.96}, {
    year: 2015,
    rate: 2.93,
    yield: 3.68
  }, {year: 2014, rate: 2.85, yield: 3.77}, {year: 2013, rate: 2.80, yield: 3.63}, {year: 2012, rate: 2.77, yield: 3.88}, {
    year: 2011,
    rate: 2.65,
    yield: 4.67
  }, {year: 2010, rate: 2.40, yield: 5.02}, {year: 2009, rate: 2.20, yield: 4.00}, {year: 2008, rate: 2.07, yield: 4.56}, {
    year: 2007,
    rate: 1.75,
    yield: 2.78
  }, {year: 2006, rate: 1.52, yield: 2.17}, {year: 2005, rate: 1.20, yield: 1.62}, {year: 2004, rate: 1.02, yield: 1.73}, {
    year: 2003,
    rate: 0.84,
    yield: 1.41
  }, {year: 2002, rate: 0.66, yield: 1.13}, {year: 2001, rate: 0.44, yield: 0.53}
];
const prices = {
  '2019-12-02': {
    '1. open': '84.8500',
    '2. high': '85.1600',
    '3. low': '82.9200',
    '4. close': '82.9200',
    '5. volume': '6370'
  },
  '2019-11-29': {
    '1. open': '82.4400',
    '2. high': '85.3800',
    '3. low': '81.1500',
    '4. close': '84.5800',
    '5. volume': '173869'
  },
  '2019-10-31': {
    '1. open': '85.2200',
    '2. high': '86.3500',
    '3. low': '80.6100',
    '4. close': '82.7300',
    '5. volume': '183173'
  },
  '2019-09-30': {
    '1. open': '78.3600',
    '2. high': '85.7900',
    '3. low': '77.7200',
    '4. close': '84.9900',
    '5. volume': '220380'
  },
  '2019-08-30': {
    '1. open': '75.9100',
    '2. high': '78.6100',
    '3. low': '71.7800',
    '4. close': '78.1900',
    '5. volume': '145463'
  },
  '2019-07-31': {
    '1. open': '76.2300',
    '2. high': '78.4700',
    '3. low': '73.1000',
    '4. close': '75.3500',
    '5. volume': '102591'
  },
  '2019-06-28': {
    '1. open': '72.1600',
    '2. high': '79.4400',
    '3. low': '71.8200',
    '4. close': '75.9500',
    '5. volume': '100890'
  },
  '2019-05-31': {
    '1. open': '78.1700',
    '2. high': '78.3200',
    '3. low': '72.0000',
    '4. close': '72.4400',
    '5. volume': '100340'
  },
  '2019-04-30': {
    '1. open': '78.8000',
    '2. high': '79.7600',
    '3. low': '72.6500',
    '4. close': '77.3100',
    '5. volume': '171549'
  },
  '2019-03-29': {
    '1. open': '73.6900',
    '2. high': '80.0000',
    '3. low': '73.3700',
    '4. close': '78.7100',
    '5. volume': '166865'
  },
  '2019-02-28': {
    '1. open': '75.9600',
    '2. high': '77.0500',
    '3. low': '72.2000',
    '4. close': '73.5000',
    '5. volume': '97144'
  },
  '2019-01-31': {
    '1. open': '74.2100',
    '2. high': '76.5000',
    '3. low': '72.7400',
    '4. close': '75.7600',
    '5. volume': '103661'
  },
  '2018-12-28': {
    '1. open': '79.4200',
    '2. high': '80.1800',
    '3. low': '73.2700',
    '4. close': '75.2100',
    '5. volume': '100293'
  },
  '2018-11-30': {
    '1. open': '79.4400',
    '2. high': '80.4000',
    '3. low': '77.5000',
    '4. close': '79.7400',
    '5. volume': '117316'
  },
  '2018-10-31': {
    '1. open': '76.5100',
    '2. high': '80.0000',
    '3. low': '73.7500',
    '4. close': '78.9500',
    '5. volume': '274086'
  },
  '2018-09-28': {
    '1. open': '74.0000',
    '2. high': '77.2300',
    '3. low': '72.3000',
    '4. close': '76.6600',
    '5. volume': '90383'
  },
  '2018-08-31': {
    '1. open': '74.7900',
    '2. high': '76.0200',
    '3. low': '71.4600',
    '4. close': '73.7400',
    '5. volume': '118441'
  },
  '2018-07-31': {
    '1. open': '68.2500',
    '2. high': '74.6000',
    '3. low': '68.1400',
    '4. close': '74.3900',
    '5. volume': '178254'
  },
  '2018-06-29': {
    '1. open': '66.1200',
    '2. high': '69.9000',
    '3. low': '64.9600',
    '4. close': '68.7400',
    '5. volume': '306030'
  },
  '2018-05-31': {
    '1. open': '65.2300',
    '2. high': '66.8000',
    '3. low': '63.4000',
    '4. close': '65.5100',
    '5. volume': '231926'
  },
  '2018-04-30': {
    '1. open': '65.0800',
    '2. high': '67.2700',
    '3. low': '64.0000',
    '4. close': '65.8000',
    '5. volume': '261683'
  },
  '2018-03-29': {
    '1. open': '65.0900',
    '2. high': '66.8900',
    '3. low': '62.8800',
    '4. close': '65.2900',
    '5. volume': '290048'
  },
  '2018-02-28': {
    '1. open': '71.1200',
    '2. high': '71.7000',
    '3. low': '63.1000',
    '4. close': '65.0500',
    '5. volume': '485555'
  },
  '2018-01-31': {
    '1. open': '76.9800',
    '2. high': '76.9800',
    '3. low': '69.8200',
    '4. close': '71.0600',
    '5. volume': '374297'
  },
  '2017-12-29': {
    '1. open': '76.9800',
    '2. high': '76.9800',
    '3. low': '76.9800',
    '4. close': '76.9800',
    '5. volume': '0'
  },
  '2017-11-30': {
    '1. open': '81.6500',
    '2. high': '81.9800',
    '3. low': '75.3400',
    '4. close': '76.9800',
    '5. volume': '211856'
  },
  '2017-10-31': {
    '1. open': '84.1900',
    '2. high': '86.2500',
    '3. low': '80.6600',
    '4. close': '81.7000',
    '5. volume': '124495'
  },
  '2017-09-29': {
    '1. open': '82.3700',
    '2. high': '84.9000',
    '3. low': '80.9400',
    '4. close': '83.9600',
    '5. volume': '104322'
  },
  '2017-08-31': {
    '1. open': '80.5500',
    '2. high': '83.2400',
    '3. low': '79.3700',
    '4. close': '81.6700',
    '5. volume': '97574'
  },
  '2017-07-31': {
    '1. open': '84.0000',
    '2. high': '86.4800',
    '3. low': '80.6200',
    '4. close': '80.7700',
    '5. volume': '83160'
  },
  '2017-06-30': {
    '1. open': '87.7900',
    '2. high': '89.0100',
    '3. low': '83.9000',
    '4. close': '83.9000',
    '5. volume': '84126'
  },
  '2017-05-31': {
    '1. open': '87.4300',
    '2. high': '92.7800',
    '3. low': '86.8100',
    '4. close': '88.8300',
    '5. volume': '108745'
  },
  '2017-04-28': {
    '1. open': '84.8400',
    '2. high': '87.9400',
    '3. low': '82.0600',
    '4. close': '86.4900',
    '5. volume': '109088'
  },
  '2017-03-31': {
    '1. open': '82.1500',
    '2. high': '84.8900',
    '3. low': '81.0300',
    '4. close': '84.5100',
    '5. volume': '132970'
  },
  '2017-02-28': {
    '1. open': '74.7500',
    '2. high': '82.4000',
    '3. low': '74.5700',
    '4. close': '81.3400',
    '5. volume': '153780'
  },
  '2017-01-31': {
    '1. open': '76.9700',
    '2. high': '78.7900',
    '3. low': '73.4700',
    '4. close': '74.7600',
    '5. volume': '134153'
  },
  '2016-12-30': {
    '1. open': '75.5100',
    '2. high': '77.6700',
    '3. low': '73.8000',
    '4. close': '76.4700',
    '5. volume': '185594'
  },
  '2016-11-30': {
    '1. open': '71.3300',
    '2. high': '78.6700',
    '3. low': '70.4000',
    '4. close': '76.2000',
    '5. volume': '228978'
  },
  '2016-10-31': {
    '1. open': '68.3500',
    '2. high': '73.9800',
    '3. low': '67.2500',
    '4. close': '70.9600',
    '5. volume': '216264'
  },
  '2016-09-30': {
    '1. open': '69.1800',
    '2. high': '71.3700',
    '3. low': '66.5000',
    '4. close': '67.3000',
    '5. volume': '207002'
  },
  '2016-08-31': {
    '1. open': '75.6800',
    '2. high': '77.1800',
    '3. low': '67.5500',
    '4. close': '69.1600',
    '5. volume': '150948'
  },
  '2016-07-29': {
    '1. open': '75.1500',
    '2. high': '77.2700',
    '3. low': '73.0900',
    '4. close': '76.0700',
    '5. volume': '139131'
  },
  '2016-06-30': {
    '1. open': '73.8400',
    '2. high': '75.2200',
    '3. low': '65.3700',
    '4. close': '74.9200',
    '5. volume': '238180'
  },
  '2016-05-31': {
    '1. open': '72.8000',
    '2. high': '74.0000',
    '3. low': '68.4200',
    '4. close': '73.7000',
    '5. volume': '150734'
  },
  '2016-04-29': {
    '1. open': '70.5500',
    '2. high': '79.0000',
    '3. low': '69.3500',
    '4. close': '71.5400',
    '5. volume': '218128'
  },
  '2016-03-31': {
    '1. open': '72.8300',
    '2. high': '76.0000',
    '3. low': '68.9000',
    '4. close': '71.0100',
    '5. volume': '175209'
  },
  '2016-02-29': {
    '1. open': '77.1000',
    '2. high': '77.1100',
    '3. low': '66.4500',
    '4. close': '73.1000',
    '5. volume': '215124'
  },
  '2016-01-29': {
    '1. open': '76.8800',
    '2. high': '78.9100',
    '3. low': '71.1400',
    '4. close': '76.5500',
    '5. volume': '327069'
  },
  '2015-12-30': {
    '1. open': '84.4200',
    '2. high': '84.5900',
    '3. low': '74.7000',
    '4. close': '80.0200',
    '5. volume': '412611'
  },
  '2015-11-30': {
    '1. open': '90.5400',
    '2. high': '93.8000',
    '3. low': '79.8700',
    '4. close': '84.3200',
    '5. volume': '477726'
  },
  '2015-10-30': {
    '1. open': '86.0700',
    '2. high': '93.7500',
    '3. low': '83.5500',
    '4. close': '91.6100',
    '5. volume': '397766'
  },
  '2015-09-30': {
    '1. open': '86.4100',
    '2. high': '91.6000',
    '3. low': '82.2100',
    '4. close': '84.8900',
    '5. volume': '424586'
  },
  '2015-08-31': {
    '1. open': '98.1600',
    '2. high': '101.0000',
    '3. low': '79.8100',
    '4. close': '88.3400',
    '5. volume': '523737'
  },
  '2015-07-31': {
    '1. open': '88.7000',
    '2. high': '99.9700',
    '3. low': '86.0700',
    '4. close': '98.2000',
    '5. volume': '332175'
  },
  '2015-06-30': {
    '1. open': '90.6300',
    '2. high': '93.8500',
    '3. low': '84.7600',
    '4. close': '88.6400',
    '5. volume': '375229'
  },
  '2015-05-29': {
    '1. open': '90.8500',
    '2. high': '93.8000',
    '3. low': '87.1500',
    '4. close': '88.9600',
    '5. volume': '323627'
  },
  '2015-04-30': {
    '1. open': '91.8600',
    '2. high': '99.3200',
    '3. low': '90.3200',
    '4. close': '90.7500',
    '5. volume': '295062'
  },
  '2015-03-31': {
    '1. open': '87.3300',
    '2. high': '94.3900',
    '3. low': '85.0700',
    '4. close': '92.2600',
    '5. volume': '362084'
  },
  '2015-02-27': {
    '1. open': '82.1900',
    '2. high': '89.4200',
    '3. low': '80.4500',
    '4. close': '87.1600',
    '5. volume': '276609'
  },
  '2015-01-30': {
    '1. open': '76.0700',
    '2. high': '84.3000',
    '3. low': '73.0000',
    '4. close': '81.9400',
    '5. volume': '451436'
  },
  '2014-12-30': {
    '1. open': '77.8600',
    '2. high': '78.7900',
    '3. low': '69.7900',
    '4. close': '75.4000',
    '5. volume': '361873'
  },
  '2014-11-28': {
    '1. open': '73.3500',
    '2. high': '77.9500',
    '3. low': '71.6300',
    '4. close': '77.9500',
    '5. volume': '432026'
  },
  '2014-10-31': {
    '1. open': '89.2700',
    '2. high': '89.5400',
    '3. low': '69.5900',
    '4. close': '73.9900',
    '5. volume': '497486'
  },
  '2014-09-30': {
    '1. open': '83.8000',
    '2. high': '89.9000',
    '3. low': '82.9200',
    '4. close': '89.8000',
    '5. volume': '140946'
  },
  '2014-08-29': {
    '1. open': '79.0600',
    '2. high': '83.6300',
    '3. low': '76.6200',
    '4. close': '83.6200',
    '5. volume': '162757'
  },
  '2014-07-31': {
    '1. open': '77.5500',
    '2. high': '79.9700',
    '3. low': '75.2600',
    '4. close': '78.8400',
    '5. volume': '117093'
  },
  '2014-06-30': {
    '1. open': '78.4400',
    '2. high': '80.3400',
    '3. low': '77.0500',
    '4. close': '77.7300',
    '5. volume': '115402'
  },
  '2014-05-30': {
    '1. open': '78.4500',
    '2. high': '79.2000',
    '3. low': '76.0400',
    '4. close': '78.4800',
    '5. volume': '184601'
  },
  '2014-04-30': {
    '1. open': '75.6800',
    '2. high': '78.5200',
    '3. low': '73.8500',
    '4. close': '77.6300',
    '5. volume': '142165'
  },
  '2014-03-31': {
    '1. open': '74.0900',
    '2. high': '76.5700',
    '3. low': '70.5600',
    '4. close': '75.5500',
    '5. volume': '222607'
  },
  '2014-02-28': {
    '1. open': '72.7200',
    '2. high': '75.7400',
    '3. low': '68.3200',
    '4. close': '74.9500',
    '5. volume': '218030'
  },
  '2014-01-31': {
    '1. open': '77.2000',
    '2. high': '77.5400',
    '3. low': '70.5900',
    '4. close': '72.6400',
    '5. volume': '311145'
  },
  '2013-12-30': {
    '1. open': '78.0200',
    '2. high': '78.0200',
    '3. low': '71.8200',
    '4. close': '75.9400',
    '5. volume': '215838'
  },
  '2013-11-29': {
    '1. open': '78.9000',
    '2. high': '80.6900',
    '3. low': '76.8100',
    '4. close': '77.8700',
    '5. volume': '184278'
  },
  '2013-10-31': {
    '1. open': '75.4300',
    '2. high': '79.0400',
    '3. low': '71.9500',
    '4. close': '78.4800',
    '5. volume': '256193'
  },
  '2013-09-30': {
    '1. open': '73.4800',
    '2. high': '76.3400',
    '3. low': '71.5500',
    '4. close': '74.5000',
    '5. volume': '188184'
  },
  '2013-08-30': {
    '1. open': '76.0500',
    '2. high': '79.2000',
    '3. low': '72.6200',
    '4. close': '72.8600',
    '5. volume': '262371'
  },
  '2013-07-31': {
    '1. open': '80.1700',
    '2. high': '81.0800',
    '3. low': '77.3700',
    '4. close': '80.1100',
    '5. volume': '111564'
  },
  '2013-06-28': {
    '1. open': '81.4000',
    '2. high': '83.0700',
    '3. low': '75.1100',
    '4. close': '79.7900',
    '5. volume': '240662'
  },
  '2013-05-31': {
    '1. open': '81.8000',
    '2. high': '87.0000',
    '3. low': '81.0100',
    '4. close': '83.1000',
    '5. volume': '215564'
  },
  '2013-04-30': {
    '1. open': '79.2000',
    '2. high': '84.5700',
    '3. low': '76.9000',
    '4. close': '82.6900',
    '5. volume': '99686'
  },
  '2013-03-28': {
    '1. open': '72.8500',
    '2. high': '79.3000',
    '3. low': '71.3200',
    '4. close': '79.0400',
    '5. volume': '116754'
  },
  '2013-02-28': {
    '1. open': '71.9200',
    '2. high': '74.0800',
    '3. low': '66.2600',
    '4. close': '72.1700',
    '5. volume': '134170'
  },
  '2013-01-31': {
    '1. open': '72.7500',
    '2. high': '74.0200',
    '3. low': '71.5000',
    '4. close': '71.7700',
    '5. volume': '73562'
  },
  '2012-12-28': {
    '1. open': '68.6200',
    '2. high': '72.4900',
    '3. low': '68.5000',
    '4. close': '71.0500',
    '5. volume': '98828'
  },
  '2012-11-30': {
    '1. open': '67.5400',
    '2. high': '69.9200',
    '3. low': '65.8800',
    '4. close': '68.9200',
    '5. volume': '72918'
  },
  '2012-10-31': {
    '1. open': '66.4600',
    '2. high': '69.8000',
    '3. low': '65.5200',
    '4. close': '68.6000',
    '5. volume': '114381'
  },
  '2012-09-28': {
    '1. open': '65.1000',
    '2. high': '69.4000',
    '3. low': '64.5700',
    '4. close': '66.0500',
    '5. volume': '112093'
  },
  '2012-08-31': {
    '1. open': '66.1600',
    '2. high': '68.8000',
    '3. low': '64.3000',
    '4. close': '65.9000',
    '5. volume': '208156'
  },
  '2012-07-31': {
    '1. open': '59.4900',
    '2. high': '67.5000',
    '3. low': '59.4900',
    '4. close': '66.9900',
    '5. volume': '289119'
  },
  '2012-06-29': {
    '1. open': '54.9500',
    '2. high': '59.7800',
    '3. low': '53.4500',
    '4. close': '59.7800',
    '5. volume': '183881'
  },
  '2012-05-31': {
    '1. open': '58.4200',
    '2. high': '59.2000',
    '3. low': '53.5500',
    '4. close': '54.7800',
    '5. volume': '182945'
  },
  '2012-04-30': {
    '1. open': '58.3200',
    '2. high': '59.2300',
    '3. low': '54.8900',
    '4. close': '57.7700',
    '5. volume': '169387'
  },
  '2012-03-30': {
    '1. open': '55.6200',
    '2. high': '59.5300',
    '3. low': '55.6200',
    '4. close': '58.1500',
    '5. volume': '186853'
  },
  '2012-02-29': {
    '1. open': '56.7000',
    '2. high': '57.0000',
    '3. low': '54.6300',
    '4. close': '55.8300',
    '5. volume': '253244'
  },
  '2012-01-31': {
    '1. open': '56.7900',
    '2. high': '57.5400',
    '3. low': '55.0800',
    '4. close': '56.9600',
    '5. volume': '210746'
  },
  '2011-12-30': {
    '1. open': '51.7000',
    '2. high': '56.5900',
    '3. low': '51.1600',
    '4. close': '56.5900',
    '5. volume': '167530'
  },
  '2011-11-30': {
    '1. open': '50.9100',
    '2. high': '52.5000',
    '3. low': '47.0500',
    '4. close': '52.1800',
    '5. volume': '188488'
  },
  '2011-10-31': {
    '1. open': '48.9000',
    '2. high': '53.4900',
    '3. low': '48.0000',
    '4. close': '52.2000',
    '5. volume': '108864'
  },
  '2011-09-30': {
    '1. open': '50.8300',
    '2. high': '51.8000',
    '3. low': '45.5500',
    '4. close': '49.2850',
    '5. volume': '191254'
  },
  '2011-08-31': {
    '1. open': '54.3600',
    '2. high': '54.5900',
    '3. low': '43.0000',
    '4. close': '50.9000',
    '5. volume': '406725'
  },
  '2011-07-29': {
    '1. open': '55.2000',
    '2. high': '56.7500',
    '3. low': '52.9000',
    '4. close': '54.6200',
    '5. volume': '365716'
  },
  '2011-06-30': {
    '1. open': '54.8300',
    '2. high': '55.4800',
    '3. low': '51.0700',
    '4. close': '55.4800',
    '5. volume': '205111'
  },
  '2011-05-31': {
    '1. open': '53.7000',
    '2. high': '56.4800',
    '3. low': '52.7800',
    '4. close': '54.8200',
    '5. volume': '371609'
  },
  '2011-04-29': {
    '1. open': '50.1800',
    '2. high': '53.6800',
    '3. low': '49.7700',
    '4. close': '53.3600',
    '5. volume': '237606'
  },
  '2011-03-31': {
    '1. open': '50.3100',
    '2. high': '52.0500',
    '3. low': '46.0100',
    '4. close': '49.7700',
    '5. volume': '344569'
  },
  '2011-02-28': {
    '1. open': '50.2700',
    '2. high': '51.8900',
    '3. low': '48.5850',
    '4. close': '50.0900',
    '5. volume': '334929'
  },
  '2011-01-31': {
    '1. open': '48.3850',
    '2. high': '52.2600',
    '3. low': '48.3000',
    '4. close': '50.0700',
    '5. volume': '411610'
  },
  '2010-12-30': {
    '1. open': '47.3000',
    '2. high': '49.8050',
    '3. low': '46.5000',
    '4. close': '48.5000',
    '5. volume': '341321'
  },
  '2010-11-30': {
    '1. open': '50.7500',
    '2. high': '51.3900',
    '3. low': '46.3500',
    '4. close': '46.6450',
    '5. volume': '295503'
  },
  '2010-10-29': {
    '1. open': '48.7650',
    '2. high': '50.8700',
    '3. low': '47.6250',
    '4. close': '50.1700',
    '5. volume': '203348'
  },
  '2010-09-30': {
    '1. open': '45.3450',
    '2. high': '50.8500',
    '3. low': '45.3000',
    '4. close': '49.1000',
    '5. volume': '303381'
  },
  '2010-08-31': {
    '1. open': '46.3150',
    '2. high': '46.5800',
    '3. low': '44.1500',
    '4. close': '45.1700',
    '5. volume': '290520'
  },
  '2009-01-19': {
    '1. open': '45.4500',
    '2. high': '49.5000',
    '3. low': '45.4300',
    '4. close': '49.0400',
    '5. volume': '71474'
  },
  '2008-12-30': {
    '1. open': '45.0000',
    '2. high': '47.7400',
    '3. low': '41.8400',
    '4. close': '45.1000',
    '5. volume': '246646'
  },
  '2008-11-28': {
    '1. open': '49.8800',
    '2. high': '50.8000',
    '3. low': '38.7000',
    '4. close': '43.5000',
    '5. volume': '376202'
  },
  '2008-10-31': {
    '1. open': '46.1800',
    '2. high': '49.8800',
    '3. low': '37.2500',
    '4. close': '49.5700',
    '5. volume': '398407'
  },
  '2008-09-30': {
    '1. open': '48.1500',
    '2. high': '51.2500',
    '3. low': '43.4600',
    '4. close': '46.2500',
    '5. volume': '257974'
  },
  '2008-08-29': {
    '1. open': '49.5900',
    '2. high': '50.8700',
    '3. low': '46.4600',
    '4. close': '48.7600',
    '5. volume': '53424'
  },
  '2008-07-28': {
    '1. open': '42.2400',
    '2. high': '47.3500',
    '3. low': '41.7500',
    '4. close': '46.5000',
    '5. volume': '188841'
  },
  '2008-06-30': {
    '1. open': '47.5900',
    '2. high': '47.5900',
    '3. low': '41.1600',
    '4. close': '42.1900',
    '5. volume': '186636'
  },
  '2008-05-30': {
    '1. open': '50.5700',
    '2. high': '51.1800',
    '3. low': '46.0500',
    '4. close': '48.0600',
    '5. volume': '159243'
  },
  '2008-04-30': {
    '1. open': '47.6500',
    '2. high': '51.0500',
    '3. low': '47.4300',
    '4. close': '50.4500',
    '5. volume': '214252'
  },
  '2008-03-31': {
    '1. open': '48.8200',
    '2. high': '49.2500',
    '3. low': '44.5000',
    '4. close': '47.3600',
    '5. volume': '284696'
  },
  '2008-02-29': {
    '1. open': '55.1600',
    '2. high': '55.1600',
    '3. low': '48.6600',
    '4. close': '48.9900',
    '5. volume': '289812'
  },
  '2008-01-31': {
    '1. open': '62.8500',
    '2. high': '66.8500',
    '3. low': '53.7300',
    '4. close': '54.2600',
    '5. volume': '260015'
  }
};

// tslint:disable:max-line-length
export const sanofiCompany: Company = {
  id: 1195,
  name: 'Sanofi S.A.',
  country: Country.Frankreich,
  city: 'Paris',
  url: 'http://www.sanofi.com/',
  description: 'Sanofi (Sanofi-aventis Groupe) ist ein 2004 durch Fusion von Sanofi-Synthélabo und Aventis entstandener französischer Pharmakonzern. Mit einem Umsatz von 34,5 Milliarden Euro im Jahr 2018[3] und mit weltweit mehr als 100.000 Beschäftigten[2] ist Sanofi am Umsatz gemessen einer der größten Pharmakonzerne der Welt. Kerngeschäft des forschenden Konzerns sind verschreibungspflichtige Medikamente für Therapie und Vorsorge weit verbreiteter Krankheiten.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Sanofi',
  logo: 'https://www.sanofi.de/-/media/Project/One-Sanofi-Web/Websites/Europe/Sanofi-DE/layout/osw-logo-header-color-large.png?h=56&la=de&w=70&hash=F6F4DC8B46753EBCC5E7558E66616EC5',
  products: [],
  industries: [1610],
  securityType: SecurityType.ActionsPort,
  currency: Currency.EUR,
  isin: 'FR0000120578',
  wkn: '920657',
  symbol: 'SNW.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.CAC40, Indices.DowJonesSustainabilityEurozone],
  end_of_month_prices: prices,
  dividends,
  tags: ['Onkologie', 'Pharmaunternehmen', 'Diabetes', 'Stoffwechsel', 'Herz-Kreislauf', 'Thrombose', 'Zentrales Nervensystem', 'Innere Medizin', 'Onkologie', 'Impfstoffe']
};
// tslint:enable:max-line-length

