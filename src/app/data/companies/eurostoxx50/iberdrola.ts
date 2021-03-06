import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.35, yield: 5.18}, {year: 2017, rate: 0.32}, {year: 2016, rate: 0.29}, {
    year: 2015,
    rate: 0.28,
    yield: 4.21
  }, {year: 2014, rate: 0.03, yield: 0.54}, {year: 2013, rate: 0.03, yield: 0.65}, {year: 2012, rate: 0.03, yield: 0.71}, {
    year: 2011,
    rate: 0.03,
    yield: 0.62
  }, {year: 2010, rate: 0.03, yield: 0.52}, {year: 2009, rate: 0.33, yield: 4.95}, {year: 2008, rate: 0.33, yield: 5.05}, {
    year: 2007,
    rate: 0.27,
    yield: 2.60
  }, {year: 2006, rate: 0.22, yield: 2.66}, {year: 2005, rate: 0.19, yield: 3.29}, {year: 2004, rate: 0.19, yield: 4.06}, {
    year: 2003,
    rate: 0.17,
    yield: 4.34
  }, {year: 2002, rate: 0.15, yield: 4.49}
];
const prices = {
  '2019-11-29': {
    '1. open': '9.2600',
    '2. high': '9.2900',
    '3. low': '8.7620',
    '4. close': '9.0400',
    '5. volume': '162015'
  },
  '2019-10-31': {
    '1. open': '9.5460',
    '2. high': '9.5460',
    '3. low': '9.0400',
    '4. close': '9.1200',
    '5. volume': '215598'
  },
  '2019-09-30': {
    '1. open': '9.3620',
    '2. high': '9.6480',
    '3. low': '9.0760',
    '4. close': '9.5100',
    '5. volume': '105906'
  },
  '2019-08-30': {
    '1. open': '8.5800',
    '2. high': '9.4600',
    '3. low': '8.5240',
    '4. close': '9.3420',
    '5. volume': '148180'
  },
  '2019-07-31': {
    '1. open': '8.9900',
    '2. high': '9.1180',
    '3. low': '8.3100',
    '4. close': '8.7960',
    '5. volume': '188573'
  },
  '2019-06-28': {
    '1. open': '8.3080',
    '2. high': '9.1320',
    '3. low': '8.2640',
    '4. close': '8.7860',
    '5. volume': '103720'
  },
  '2019-05-31': {
    '1. open': '8.0580',
    '2. high': '8.6000',
    '3. low': '7.8620',
    '4. close': '8.3000',
    '5. volume': '134645'
  },
  '2019-04-30': {
    '1. open': '7.8320',
    '2. high': '8.1680',
    '3. low': '7.5000',
    '4. close': '7.9260',
    '5. volume': '210079'
  },
  '2019-03-29': {
    '1. open': '7.4000',
    '2. high': '7.9000',
    '3. low': '7.2540',
    '4. close': '7.7860',
    '5. volume': '324295'
  },
  '2019-02-28': {
    '1. open': '7.2080',
    '2. high': '7.4380',
    '3. low': '7.1000',
    '4. close': '7.4100',
    '5. volume': '190403'
  },
  '2019-01-31': {
    '1. open': '6.9120',
    '2. high': '7.2500',
    '3. low': '6.8540',
    '4. close': '7.2500',
    '5. volume': '175841'
  },
  '2018-12-28': {
    '1. open': '6.6720',
    '2. high': '7.1760',
    '3. low': '6.5360',
    '4. close': '6.8760',
    '5. volume': '114922'
  },
  '2018-11-30': {
    '1. open': '6.3460',
    '2. high': '6.7900',
    '3. low': '6.1600',
    '4. close': '6.5880',
    '5. volume': '167623'
  },
  '2018-10-31': {
    '1. open': '6.3760',
    '2. high': '6.4240',
    '3. low': '5.9500',
    '4. close': '6.1800',
    '5. volume': '119339'
  },
  '2018-09-28': {
    '1. open': '6.4460',
    '2. high': '6.4720',
    '3. low': '6.1640',
    '4. close': '6.3940',
    '5. volume': '66753'
  },
  '2018-08-31': {
    '1. open': '6.6400',
    '2. high': '6.6400',
    '3. low': '6.3920',
    '4. close': '6.5920',
    '5. volume': '86002'
  },
  '2018-07-31': {
    '1. open': '6.5940',
    '2. high': '6.9800',
    '3. low': '6.5320',
    '4. close': '6.6640',
    '5. volume': '218302'
  },
  '2018-06-29': {
    '1. open': '6.1360',
    '2. high': '6.7200',
    '3. low': '5.9500',
    '4. close': '6.6440',
    '5. volume': '293333'
  },
  '2018-05-31': {
    '1. open': '6.4200',
    '2. high': '6.6500',
    '3. low': '6.0660',
    '4. close': '6.0960',
    '5. volume': '248188'
  },
  '2018-04-30': {
    '1. open': '5.9800',
    '2. high': '6.4500',
    '3. low': '5.8820',
    '4. close': '6.4460',
    '5. volume': '288384'
  },
  '2018-03-29': {
    '1. open': '6.0360',
    '2. high': '6.4700',
    '3. low': '5.6500',
    '4. close': '6.4700',
    '5. volume': '200944'
  },
  '2018-02-28': {
    '1. open': '6.6300',
    '2. high': '6.6420',
    '3. low': '5.8800',
    '4. close': '6.0880',
    '5. volume': '188179'
  },
  '2018-01-31': {
    '1. open': '6.4600',
    '2. high': '6.8360',
    '3. low': '6.2200',
    '4. close': '6.5600',
    '5. volume': '166644'
  },
  '2017-12-29': {
    '1. open': '6.6750',
    '2. high': '6.7450',
    '3. low': '6.4600',
    '4. close': '6.4890',
    '5. volume': '109331'
  },
  '2017-11-30': {
    '1. open': '6.9740',
    '2. high': '6.9750',
    '3. low': '6.4250',
    '4. close': '6.6440',
    '5. volume': '173505'
  },
  '2017-10-31': {
    '1. open': '6.4890',
    '2. high': '6.8820',
    '3. low': '6.2600',
    '4. close': '6.8540',
    '5. volume': '317636'
  },
  '2017-09-29': {
    '1. open': '6.9000',
    '2. high': '6.9700',
    '3. low': '6.4800',
    '4. close': '6.5480',
    '5. volume': '205315'
  },
  '2017-08-31': {
    '1. open': '6.7000',
    '2. high': '7.0070',
    '3. low': '6.6800',
    '4. close': '6.8520',
    '5. volume': '422443'
  },
  '2017-07-31': {
    '1. open': '6.9580',
    '2. high': '7.0050',
    '3. low': '6.6400',
    '4. close': '6.6780',
    '5. volume': '167901'
  },
  '2017-06-30': {
    '1. open': '7.1350',
    '2. high': '7.2760',
    '3. low': '6.9400',
    '4. close': '6.9570',
    '5. volume': '446113'
  },
  '2017-05-31': {
    '1. open': '6.5820',
    '2. high': '7.1490',
    '3. low': '6.5820',
    '4. close': '7.1490',
    '5. volume': '255158'
  },
  '2017-04-28': {
    '1. open': '6.6960',
    '2. high': '6.7600',
    '3. low': '6.4450',
    '4. close': '6.6100',
    '5. volume': '205182'
  },
  '2017-03-31': {
    '1. open': '6.2890',
    '2. high': '6.7000',
    '3. low': '6.2280',
    '4. close': '6.6910',
    '5. volume': '383537'
  },
  '2017-02-28': {
    '1. open': '5.8960',
    '2. high': '6.2840',
    '3. low': '5.7740',
    '4. close': '6.2690',
    '5. volume': '337039'
  },
  '2017-01-31': {
    '1. open': '6.2000',
    '2. high': '6.2500',
    '3. low': '5.7840',
    '4. close': '5.8330',
    '5. volume': '580458'
  },
  '2016-12-30': {
    '1. open': '5.6220',
    '2. high': '6.2200',
    '3. low': '5.5470',
    '4. close': '6.2200',
    '5. volume': '213809'
  },
  '2016-11-30': {
    '1. open': '6.1800',
    '2. high': '6.1850',
    '3. low': '5.5860',
    '4. close': '5.7510',
    '5. volume': '278830'
  },
  '2016-10-31': {
    '1. open': '6.0160',
    '2. high': '6.2600',
    '3. low': '5.8200',
    '4. close': '6.2270',
    '5. volume': '167694'
  },
  '2016-09-30': {
    '1. open': '5.9340',
    '2. high': '6.1400',
    '3. low': '5.8720',
    '4. close': '6.0400',
    '5. volume': '107515'
  },
  '2016-08-31': {
    '1. open': '6.1270',
    '2. high': '6.1270',
    '3. low': '5.8400',
    '4. close': '5.8970',
    '5. volume': '88061'
  },
  '2016-07-29': {
    '1. open': '6.0990',
    '2. high': '6.2240',
    '3. low': '5.6800',
    '4. close': '6.1240',
    '5. volume': '118991'
  },
  '2016-06-30': {
    '1. open': '6.0600',
    '2. high': '6.1060',
    '3. low': '5.0400',
    '4. close': '5.9580',
    '5. volume': '216939'
  },
  '2016-05-31': {
    '1. open': '6.2370',
    '2. high': '6.2590',
    '3. low': '5.9760',
    '4. close': '6.1280',
    '5. volume': '322551'
  },
  '2016-04-29': {
    '1. open': '5.7380',
    '2. high': '6.2330',
    '3. low': '5.7380',
    '4. close': '6.1740',
    '5. volume': '160910'
  },
  '2016-03-31': {
    '1. open': '5.9590',
    '2. high': '6.1490',
    '3. low': '5.7840',
    '4. close': '5.8630',
    '5. volume': '285667'
  },
  '2016-02-29': {
    '1. open': '6.5240',
    '2. high': '6.5240',
    '3. low': '5.8340',
    '4. close': '5.9580',
    '5. volume': '173253'
  },
  '2016-01-29': {
    '1. open': '6.5000',
    '2. high': '6.5750',
    '3. low': '6.1040',
    '4. close': '6.4830',
    '5. volume': '108598'
  },
  '2015-12-30': {
    '1. open': '6.6240',
    '2. high': '6.6600',
    '3. low': '6.2600',
    '4. close': '6.5620',
    '5. volume': '304060'
  },
  '2015-11-30': {
    '1. open': '6.4260',
    '2. high': '6.6720',
    '3. low': '6.3360',
    '4. close': '6.6600',
    '5. volume': '260041'
  },
  '2015-10-30': {
    '1. open': '5.9520',
    '2. high': '6.5000',
    '3. low': '5.9520',
    '4. close': '6.4820',
    '5. volume': '223832'
  },
  '2015-09-30': {
    '1. open': '5.9500',
    '2. high': '6.0570',
    '3. low': '5.7460',
    '4. close': '5.9520',
    '5. volume': '184330'
  },
  '2015-08-31': {
    '1. open': '6.4360',
    '2. high': '6.4810',
    '3. low': '5.7230',
    '4. close': '6.0100',
    '5. volume': '222585'
  },
  '2015-07-31': {
    '1. open': '6.1410',
    '2. high': '6.5350',
    '3. low': '5.8400',
    '4. close': '6.3750',
    '5. volume': '273690'
  },
  '2015-06-30': {
    '1. open': '6.3410',
    '2. high': '6.4040',
    '3. low': '5.9110',
    '4. close': '6.1080',
    '5. volume': '265188'
  },
  '2015-05-29': {
    '1. open': '5.9880',
    '2. high': '6.4640',
    '3. low': '5.7860',
    '4. close': '6.2560',
    '5. volume': '480626'
  },
  '2015-04-30': {
    '1. open': '6.0000',
    '2. high': '6.2190',
    '3. low': '5.8970',
    '4. close': '5.9900',
    '5. volume': '508199'
  },
  '2015-03-31': {
    '1. open': '6.0550',
    '2. high': '6.2420',
    '3. low': '5.8260',
    '4. close': '6.0100',
    '5. volume': '478164'
  },
  '2015-02-27': {
    '1. open': '6.0780',
    '2. high': '6.1620',
    '3. low': '5.6900',
    '4. close': '6.0700',
    '5. volume': '440968'
  },
  '2015-01-30': {
    '1. open': '5.6870',
    '2. high': '6.2480',
    '3. low': '5.4370',
    '4. close': '6.0800',
    '5. volume': '295303'
  },
  '2014-12-30': {
    '1. open': '5.9050',
    '2. high': '5.9720',
    '3. low': '5.2980',
    '4. close': '5.6210',
    '5. volume': '215758'
  },
  '2014-11-28': {
    '1. open': '5.6680',
    '2. high': '5.9400',
    '3. low': '5.4350',
    '4. close': '5.9400',
    '5. volume': '124997'
  },
  '2014-10-31': {
    '1. open': '5.7160',
    '2. high': '5.7160',
    '3. low': '5.1320',
    '4. close': '5.6500',
    '5. volume': '210768'
  },
  '2014-09-30': {
    '1. open': '5.6060',
    '2. high': '5.8040',
    '3. low': '5.4890',
    '4. close': '5.6780',
    '5. volume': '128083'
  },
  '2014-08-29': {
    '1. open': '5.5580',
    '2. high': '5.6260',
    '3. low': '5.3180',
    '4. close': '5.5760',
    '5. volume': '226283'
  },
  '2014-07-31': {
    '1. open': '5.5560',
    '2. high': '5.6650',
    '3. low': '5.3000',
    '4. close': '5.5260',
    '5. volume': '705348'
  },
  '2014-06-30': {
    '1. open': '5.3000',
    '2. high': '5.6150',
    '3. low': '5.2510',
    '4. close': '5.5430',
    '5. volume': '181963'
  },
  '2014-05-30': {
    '1. open': '5.0770',
    '2. high': '5.2600',
    '3. low': '5.0580',
    '4. close': '5.2370',
    '5. volume': '249238'
  },
  '2014-04-30': {
    '1. open': '5.0640',
    '2. high': '5.1200',
    '3. low': '4.7100',
    '4. close': '4.9980',
    '5. volume': '642697'
  },
  '2014-03-31': {
    '1. open': '4.7160',
    '2. high': '5.1050',
    '3. low': '4.7160',
    '4. close': '5.0870',
    '5. volume': '313834'
  },
  '2014-02-28': {
    '1. open': '4.5600',
    '2. high': '4.8410',
    '3. low': '4.4120',
    '4. close': '4.8100',
    '5. volume': '335193'
  },
  '2014-01-31': {
    '1. open': '4.6400',
    '2. high': '4.7900',
    '3. low': '4.5120',
    '4. close': '4.5400',
    '5. volume': '299466'
  },
  '2013-12-30': {
    '1. open': '4.6380',
    '2. high': '4.6600',
    '3. low': '4.3790',
    '4. close': '4.6090',
    '5. volume': '272684'
  },
  '2013-11-29': {
    '1. open': '4.6250',
    '2. high': '4.7950',
    '3. low': '4.6160',
    '4. close': '4.7040',
    '5. volume': '225926'
  },
  '2013-10-31': {
    '1. open': '4.3290',
    '2. high': '4.6740',
    '3. low': '4.2380',
    '4. close': '4.5900',
    '5. volume': '560456'
  },
  '2013-09-30': {
    '1. open': '4.0350',
    '2. high': '4.3500',
    '3. low': '4.0000',
    '4. close': '4.2800',
    '5. volume': '234813'
  },
  '2013-08-30': {
    '1. open': '4.1710',
    '2. high': '4.2900',
    '3. low': '4.0000',
    '4. close': '4.0000',
    '5. volume': '394314'
  },
  '2013-07-31': {
    '1. open': '4.0780',
    '2. high': '4.1600',
    '3. low': '3.7680',
    '4. close': '4.1390',
    '5. volume': '521412'
  },
  '2013-06-28': {
    '1. open': '4.0890',
    '2. high': '4.2630',
    '3. low': '3.9100',
    '4. close': '4.0600',
    '5. volume': '371138'
  },
  '2013-05-31': {
    '1. open': '4.0950',
    '2. high': '4.3500',
    '3. low': '4.0250',
    '4. close': '4.2090',
    '5. volume': '510100'
  },
  '2013-04-30': {
    '1. open': '3.6600',
    '2. high': '4.1070',
    '3. low': '3.6300',
    '4. close': '4.1070',
    '5. volume': '378947'
  },
  '2013-03-28': {
    '1. open': '3.7480',
    '2. high': '4.1040',
    '3. low': '3.6170',
    '4. close': '3.6550',
    '5. volume': '630192'
  },
  '2013-02-28': {
    '1. open': '3.9750',
    '2. high': '3.9750',
    '3. low': '3.5920',
    '4. close': '3.7860',
    '5. volume': '764538'
  },
  '2013-01-31': {
    '1. open': '4.2800',
    '2. high': '4.2800',
    '3. low': '3.9760',
    '4. close': '3.9760',
    '5. volume': '759009'
  },
  '2012-12-28': {
    '1. open': '3.8700',
    '2. high': '4.2500',
    '3. low': '3.7370',
    '4. close': '4.1520',
    '5. volume': '455071'
  },
  '2012-11-30': {
    '1. open': '3.9810',
    '2. high': '4.0200',
    '3. low': '3.7400',
    '4. close': '3.8100',
    '5. volume': '560418'
  },
  '2012-10-31': {
    '1. open': '3.5510',
    '2. high': '4.1050',
    '3. low': '3.5010',
    '4. close': '3.9900',
    '5. volume': '748493'
  },
  '2012-09-28': {
    '1. open': '3.1570',
    '2. high': '3.8370',
    '3. low': '3.1570',
    '4. close': '3.5500',
    '5. volume': '1930550'
  },
  '2012-08-31': {
    '1. open': '2.9440',
    '2. high': '3.4150',
    '3. low': '2.6980',
    '4. close': '3.1580',
    '5. volume': '1931619'
  },
  '2012-07-31': {
    '1. open': '3.6740',
    '2. high': '3.7440',
    '3. low': '2.6400',
    '4. close': '2.9570',
    '5. volume': '1443279'
  },
  '2012-06-29': {
    '1. open': '3.0820',
    '2. high': '3.7000',
    '3. low': '3.0120',
    '4. close': '3.7000',
    '5. volume': '594291'
  },
  '2012-05-31': {
    '1. open': '3.5820',
    '2. high': '3.6200',
    '3. low': '3.0300',
    '4. close': '3.1150',
    '5. volume': '590340'
  },
  '2012-04-30': {
    '1. open': '4.2560',
    '2. high': '4.2560',
    '3. low': '3.4630',
    '4. close': '3.5500',
    '5. volume': '892655'
  },
  '2012-03-30': {
    '1. open': '4.4430',
    '2. high': '4.6050',
    '3. low': '4.1550',
    '4. close': '4.2650',
    '5. volume': '404672'
  },
  '2012-02-29': {
    '1. open': '4.6210',
    '2. high': '4.7970',
    '3. low': '4.4350',
    '4. close': '4.4500',
    '5. volume': '404343'
  },
  '2012-01-31': {
    '1. open': '4.8620',
    '2. high': '4.9600',
    '3. low': '4.4480',
    '4. close': '4.5110',
    '5. volume': '352328'
  },
  '2011-12-30': {
    '1. open': '4.9420',
    '2. high': '5.1750',
    '3. low': '4.6970',
    '4. close': '4.7980',
    '5. volume': '81566'
  },
  '2011-11-30': {
    '1. open': '5.2490',
    '2. high': '5.2490',
    '3. low': '4.5000',
    '4. close': '4.9510',
    '5. volume': '164360'
  },
  '2011-10-31': {
    '1. open': '4.7490',
    '2. high': '5.4500',
    '3. low': '4.7490',
    '4. close': '5.3590',
    '5. volume': '259403'
  },
  '2011-09-30': {
    '1. open': '5.1500',
    '2. high': '5.1970',
    '3. low': '4.3000',
    '4. close': '5.0400',
    '5. volume': '143596'
  },
  '2011-08-31': {
    '1. open': '5.6850',
    '2. high': '5.6850',
    '3. low': '4.7500',
    '4. close': '5.1000',
    '5. volume': '426212'
  },
  '2011-07-29': {
    '1. open': '6.1600',
    '2. high': '6.2500',
    '3. low': '5.4190',
    '4. close': '5.5940',
    '5. volume': '247964'
  },
  '2011-06-30': {
    '1. open': '6.1700',
    '2. high': '6.1700',
    '3. low': '5.8950',
    '4. close': '6.1280',
    '5. volume': '151252'
  },
  '2011-05-31': {
    '1. open': '6.3020',
    '2. high': '6.3280',
    '3. low': '5.9210',
    '4. close': '6.1700',
    '5. volume': '251401'
  },
  '2011-04-29': {
    '1. open': '6.0100',
    '2. high': '6.3200',
    '3. low': '5.9700',
    '4. close': '6.2780',
    '5. volume': '246897'
  },
  '2011-03-31': {
    '1. open': '6.3300',
    '2. high': '6.3510',
    '3. low': '5.4500',
    '4. close': '6.1100',
    '5. volume': '366867'
  },
  '2011-02-28': {
    '1. open': '6.2740',
    '2. high': '6.4700',
    '3. low': '6.1120',
    '4. close': '6.3600',
    '5. volume': '425097'
  },
  '2011-01-31': {
    '1. open': '5.7000',
    '2. high': '6.4160',
    '3. low': '5.4210',
    '4. close': '6.3230',
    '5. volume': '500951'
  },
  '2010-12-30': {
    '1. open': '5.4260',
    '2. high': '5.9700',
    '3. low': '5.3600',
    '4. close': '5.6000',
    '5. volume': '275048'
  },
  '2010-11-30': {
    '1. open': '6.0810',
    '2. high': '6.1070',
    '3. low': '5.2880',
    '4. close': '5.3000',
    '5. volume': '345215'
  },
  '2010-10-29': {
    '1. open': '5.7050',
    '2. high': '6.0990',
    '3. low': '5.5130',
    '4. close': '6.0990',
    '5. volume': '261596'
  },
  '2010-09-30': {
    '1. open': '5.5880',
    '2. high': '5.7990',
    '3. low': '5.5490',
    '4. close': '5.6900',
    '5. volume': '281303'
  },
  '2010-08-31': {
    '1. open': '5.4580',
    '2. high': '5.6920',
    '3. low': '5.2330',
    '4. close': '5.5400',
    '5. volume': '386106'
  },
  '2010-07-30': {
    '1. open': '4.5770',
    '2. high': '5.5240',
    '3. low': '4.5200',
    '4. close': '5.4010',
    '5. volume': '344866'
  },
  '2010-06-30': {
    '1. open': '5.2940',
    '2. high': '5.5370',
    '3. low': '4.5960',
    '4. close': '4.6250',
    '5. volume': '410728'
  },
  '2010-05-31': {
    '1. open': '5.9900',
    '2. high': '5.9900',
    '3. low': '4.9510',
    '4. close': '5.4000',
    '5. volume': '426787'
  },
  '2010-04-30': {
    '1. open': '6.3020',
    '2. high': '6.5800',
    '3. low': '5.8130',
    '4. close': '5.9920',
    '5. volume': '375501'
  },
  '2010-03-31': {
    '1. open': '5.8540',
    '2. high': '6.4060',
    '3. low': '5.8540',
    '4. close': '6.2460',
    '5. volume': '247199'
  },
  '2010-02-26': {
    '1. open': '6.1500',
    '2. high': '6.3950',
    '3. low': '5.7110',
    '4. close': '5.8040',
    '5. volume': '182371'
  },
  '2010-01-29': {
    '1. open': '6.7400',
    '2. high': '6.8290',
    '3. low': '6.1210',
    '4. close': '6.3760',
    '5. volume': '134987'
  },
  '2009-12-30': {
    '1. open': '6.3900',
    '2. high': '7.0500',
    '3. low': '6.3000',
    '4. close': '6.7000',
    '5. volume': '126101'
  },
  '2009-11-30': {
    '1. open': '6.1200',
    '2. high': '6.6500',
    '3. low': '6.0100',
    '4. close': '6.3700',
    '5. volume': '180342'
  },
  '2009-10-30': {
    '1. open': '6.7100',
    '2. high': '6.8200',
    '3. low': '6.1200',
    '4. close': '6.2500',
    '5. volume': '326132'
  },
  '2009-09-30': {
    '1. open': '6.4500',
    '2. high': '6.9000',
    '3. low': '6.2100',
    '4. close': '6.7400',
    '5. volume': '191553'
  },
  '2009-08-31': {
    '1. open': '6.0700',
    '2. high': '6.5000',
    '3. low': '5.8600',
    '4. close': '6.4100',
    '5. volume': '114065'
  },
  '2009-07-31': {
    '1. open': '5.7000',
    '2. high': '6.1300',
    '3. low': '5.2200',
    '4. close': '6.0400',
    '5. volume': '148486'
  },
  '2009-06-30': {
    '1. open': '6.1500',
    '2. high': '6.3200',
    '3. low': '5.5000',
    '4. close': '5.8000',
    '5. volume': '112447'
  },
  '2009-05-29': {
    '1. open': '5.8200',
    '2. high': '6.4000',
    '3. low': '5.7600',
    '4. close': '5.9600',
    '5. volume': '79279'
  },
  '2009-04-30': {
    '1. open': '5.3000',
    '2. high': '6.0600',
    '3. low': '5.3000',
    '4. close': '6.0600',
    '5. volume': '111474'
  },
  '2009-03-31': {
    '1. open': '5.2400',
    '2. high': '5.9200',
    '3. low': '4.2700',
    '4. close': '5.3000',
    '5. volume': '132831'
  },
  '2009-02-27': {
    '1. open': '5.9000',
    '2. high': '6.1100',
    '3. low': '5.2000',
    '4. close': '5.2000',
    '5. volume': '61944'
  },
  '2009-01-30': {
    '1. open': '6.3900',
    '2. high': '6.9400',
    '3. low': '5.7900',
    '4. close': '6.2900',
    '5. volume': '28682'
  },
  '2008-12-30': {
    '1. open': '6.0300',
    '2. high': '6.5000',
    '3. low': '5.2700',
    '4. close': '6.4900',
    '5. volume': '140132'
  },
  '2008-11-27': {
    '1. open': '5.6900',
    '2. high': '6.3000',
    '3. low': '5.1800',
    '4. close': '5.8600',
    '5. volume': '174458'
  },
  '2008-10-31': {
    '1. open': '7.3300',
    '2. high': '7.5100',
    '3. low': '4.7600',
    '4. close': '5.6000',
    '5. volume': '158299'
  },
  '2008-09-30': {
    '1. open': '8.3000',
    '2. high': '8.4300',
    '3. low': '6.8300',
    '4. close': '6.9500',
    '5. volume': '232158'
  },
  '2008-08-28': {
    '1. open': '8.9400',
    '2. high': '8.9400',
    '3. low': '7.8700',
    '4. close': '7.8900',
    '5. volume': '71208'
  },
  '2008-07-31': {
    '1. open': '8.1300',
    '2. high': '9.3300',
    '3. low': '7.7800',
    '4. close': '8.8200',
    '5. volume': '86173'
  },
  '2008-06-30': {
    '1. open': '9.2500',
    '2. high': '9.3300',
    '3. low': '8.2700',
    '4. close': '8.5700',
    '5. volume': '83046'
  },
  '2008-05-30': {
    '1. open': '9.2100',
    '2. high': '9.9800',
    '3. low': '9.2000',
    '4. close': '9.4500',
    '5. volume': '154731'
  },
  '2008-04-30': {
    '1. open': '9.8000',
    '2. high': '10.2200',
    '3. low': '9.0100',
    '4. close': '9.4300',
    '5. volume': '48705'
  },
  '2008-03-31': {
    '1. open': '9.3500',
    '2. high': '10.8000',
    '3. low': '9.3300',
    '4. close': '10.0000',
    '5. volume': '33777'
  },
  '2008-02-29': {
    '1. open': '10.5300',
    '2. high': '10.8400',
    '3. low': '9.5100',
    '4. close': '9.6700',
    '5. volume': '257451'
  },
  '2008-01-31': {
    '1. open': '10.1100',
    '2. high': '11.0600',
    '3. low': '6.0000',
    '4. close': '10.3000',
    '5. volume': '101608'
  },
  '2007-12-28': {
    '1. open': '11.2000',
    '2. high': '11.3900',
    '3. low': '10.1400',
    '4. close': '10.7300',
    '5. volume': '43070'
  },
  '2007-11-30': {
    '1. open': '11.2400',
    '2. high': '12.1900',
    '3. low': '10.9600',
    '4. close': '11.0000',
    '5. volume': '103876'
  }
};

// tslint:disable:max-line-length
export const iberdrolaCompany: Company = {
  id: 1184,
  name: 'Iberdrola S.A.',
  country: Country.Spanien,
  city: 'Bilbao',
  url: 'http://www.iberdrola.es/',
  description: 'Die Iberdrola S.A. ist ein spanisches Stromerzeugungs- und -vertriebsunternehmen mit Sitz in Bilbao. Im Jahr 2008 war das Unternehmen der siebtgrößte europäische Stromproduzent.[2] Die Niederlassung der Iberdrola Energie Deutschland GmbH befindet sich in Berlin.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Iberdrola',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Iberdrola_wordmark.svg/500px-Iberdrola_wordmark.svg.png',
  products: [],
  industries: [111310],
  securityType: SecurityType.AccionesPort,
  currency: Currency.EUR,
  isin: 'ES0144580Y14',
  wkn: 'A0M46B',
  symbol: 'IBE1',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.MSCIWorld, Indices.DowJonesSustainabilityEurozone],
  end_of_month_prices: prices,
  dividends,
  tags: ['Energieversorger', 'Elektrizität', 'Erdgas']
};
// tslint:enable:max-line-length

