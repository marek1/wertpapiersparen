import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.30, yield: 1.82}, {year: 2017, rate: 0.25}, {year: 2016, rate: 0.00}, {
    year: 2015,
    rate: 0.00,
    yield: 0.00
  }, {year: 2014, rate: 0.00, yield: 0.00}, {year: 2013, rate: 0.00, yield: 0.00}, {year: 2012, rate: 0.00, yield: 0.00}, {
    year: 2011,
    rate: 0.00,
    yield: 0.00
  }, {year: 2010, rate: 0.00, yield: 0.00}, {year: 2009, rate: 0.00, yield: 0.00}, {year: 2008, rate: 0.00, yield: 0.00}, {
    year: 2007,
    rate: 0.00,
    yield: 0.00
  }, {year: 2006, rate: 0.09, yield: 0.67}, {year: 2005, rate: 1.00}
];
const prices = {
  '2019-11-27': {
    '1. open': '18.4900',
    '2. high': '19.0900',
    '3. low': '17.2500',
    '4. close': '17.7500',
    '5. volume': '1028447'
  },
  '2019-10-31': {
    '1. open': '17.3800',
    '2. high': '18.4200',
    '3. low': '16.3500',
    '4. close': '18.3700',
    '5. volume': '1221464'
  },
  '2019-09-30': {
    '1. open': '16.4700',
    '2. high': '17.3400',
    '3. low': '16.2000',
    '4. close': '17.0500',
    '5. volume': '1296681'
  },
  '2019-08-30': {
    '1. open': '17.4000',
    '2. high': '17.8700',
    '3. low': '16.0900',
    '4. close': '16.6000',
    '5. volume': '1670699'
  },
  '2019-07-31': {
    '1. open': '18.3900',
    '2. high': '19.2900',
    '3. low': '17.4800',
    '4. close': '17.5400',
    '5. volume': '1423381'
  },
  '2019-06-28': {
    '1. open': '17.2100',
    '2. high': '18.4800',
    '3. low': '16.6500',
    '4. close': '18.2000',
    '5. volume': '1678815'
  },
  '2019-05-31': {
    '1. open': '18.5500',
    '2. high': '19.2900',
    '3. low': '17.1500',
    '4. close': '17.4100',
    '5. volume': '1374976'
  },
  '2019-04-30': {
    '1. open': '19.8900',
    '2. high': '20.2600',
    '3. low': '18.0800',
    '4. close': '18.5700',
    '5. volume': '1134559'
  },
  '2019-03-29': {
    '1. open': '19.2000',
    '2. high': '20.6400',
    '3. low': '19.0900',
    '4. close': '19.8300',
    '5. volume': '1849874'
  },
  '2019-02-28': {
    '1. open': '19.5800',
    '2. high': '19.9500',
    '3. low': '19.0000',
    '4. close': '19.0500',
    '5. volume': '1437665'
  },
  '2019-01-31': {
    '1. open': '16.7100',
    '2. high': '19.5100',
    '3. low': '15.7800',
    '4. close': '19.4400',
    '5. volume': '1752213'
  },
  '2018-12-28': {
    '1. open': '18.0700',
    '2. high': '18.2000',
    '3. low': '15.8900',
    '4. close': '16.6500',
    '5. volume': '1783773'
  },
  '2018-11-30': {
    '1. open': '15.3000',
    '2. high': '19.2000',
    '3. low': '15.3000',
    '4. close': '17.7300',
    '5. volume': '2709646'
  },
  '2018-10-31': {
    '1. open': '16.4900',
    '2. high': '16.8600',
    '3. low': '14.6000',
    '4. close': '15.1800',
    '5. volume': '1670785'
  },
  '2018-09-28': {
    '1. open': '18.0000',
    '2. high': '18.4000',
    '3. low': '16.4200',
    '4. close': '16.5400',
    '5. volume': '1277823'
  },
  '2018-08-31': {
    '1. open': '19.3300',
    '2. high': '19.6500',
    '3. low': '17.1500',
    '4. close': '17.9300',
    '5. volume': '2203066'
  },
  '2018-07-31': {
    '1. open': '16.5800',
    '2. high': '19.4500',
    '3. low': '16.2500',
    '4. close': '19.2900',
    '5. volume': '1508527'
  },
  '2018-06-29': {
    '1. open': '17.7800',
    '2. high': '18.3100',
    '3. low': '16.0000',
    '4. close': '16.5100',
    '5. volume': '1456657'
  },
  '2018-05-31': {
    '1. open': '16.6000',
    '2. high': '19.0800',
    '3. low': '16.6000',
    '4. close': '17.6700',
    '5. volume': '2191183'
  },
  '2018-04-30': {
    '1. open': '17.9400',
    '2. high': '18.4000',
    '3. low': '16.4500',
    '4. close': '16.5800',
    '5. volume': '1511901'
  },
  '2018-03-29': {
    '1. open': '18.4800',
    '2. high': '19.6500',
    '3. low': '17.3600',
    '4. close': '18.0000',
    '5. volume': '2945719'
  },
  '2018-02-28': {
    '1. open': '20.2400',
    '2. high': '20.4000',
    '3. low': '17.3200',
    '4. close': '18.4800',
    '5. volume': '3083534'
  },
  '2018-01-31': {
    '1. open': '19.4800',
    '2. high': '21.2200',
    '3. low': '19.4200',
    '4. close': '20.1600',
    '5. volume': '2950362'
  },
  '2017-12-29': {
    '1. open': '19.8650',
    '2. high': '20.3100',
    '3. low': '18.1800',
    '4. close': '19.3350',
    '5. volume': '3322891'
  },
  '2017-11-30': {
    '1. open': '18.3000',
    '2. high': '19.8500',
    '3. low': '17.7050',
    '4. close': '19.8100',
    '5. volume': '3608212'
  },
  '2017-10-31': {
    '1. open': '17.6250',
    '2. high': '18.7000',
    '3. low': '17.3000',
    '4. close': '18.1100',
    '5. volume': '2954023'
  },
  '2017-09-29': {
    '1. open': '16.9350',
    '2. high': '17.6350',
    '3. low': '16.4600',
    '4. close': '17.6300',
    '5. volume': '3016950'
  },
  '2017-08-31': {
    '1. open': '15.3450',
    '2. high': '17.9350',
    '3. low': '15.2650',
    '4. close': '17.0200',
    '5. volume': '5025884'
  },
  '2017-07-31': {
    '1. open': '15.1454',
    '2. high': '15.9150',
    '3. low': '13.7636',
    '4. close': '15.2850',
    '5. volume': '3590212'
  },
  '2017-06-30': {
    '1. open': '15.4273',
    '2. high': '16.6364',
    '3. low': '14.5000',
    '4. close': '15.0227',
    '5. volume': '3755817'
  },
  '2017-05-31': {
    '1. open': '16.5546',
    '2. high': '17.1773',
    '3. low': '15.0227',
    '4. close': '15.3682',
    '5. volume': '4058522'
  },
  '2017-04-28': {
    '1. open': '15.1818',
    '2. high': '16.7591',
    '3. low': '14.9500',
    '4. close': '16.4636',
    '5. volume': '2545593'
  },
  '2017-03-31': {
    '1. open': '16.1500',
    '2. high': '16.4500',
    '3. low': '14.7500',
    '4. close': '15.0909',
    '5. volume': '3779399'
  },
  '2017-02-28': {
    '1. open': '13.7909',
    '2. high': '16.4954',
    '3. low': '13.2318',
    '4. close': '16.0682',
    '5. volume': '4691664'
  },
  '2017-01-31': {
    '1. open': '14.3727',
    '2. high': '15.1136',
    '3. low': '13.2727',
    '4. close': '13.5227',
    '5. volume': '3910305'
  },
  '2016-12-30': {
    '1. open': '14.0546',
    '2. high': '14.3727',
    '3. low': '12.8000',
    '4. close': '14.3500',
    '5. volume': '4314814'
  },
  '2016-11-30': {
    '1. open': '17.2454',
    '2. high': '17.2454',
    '3. low': '13.5000',
    '4. close': '14.0636',
    '5. volume': '5256329'
  },
  '2016-10-31': {
    '1. open': '17.8000',
    '2. high': '17.8000',
    '3. low': '15.7182',
    '4. close': '17.1182',
    '5. volume': '3234178'
  },
  '2016-09-30': {
    '1. open': '19.4454',
    '2. high': '19.7000',
    '3. low': '17.0727',
    '4. close': '17.7136',
    '5. volume': '1911893'
  },
  '2016-08-31': {
    '1. open': '18.9422',
    '2. high': '20.3227',
    '3. low': '18.2521',
    '4. close': '19.4454',
    '5. volume': '2633110'
  },
  '2016-07-29': {
    '1. open': '18.0207',
    '2. high': '18.7934',
    '3. low': '16.1405',
    '4. close': '18.6612',
    '5. volume': '2240618'
  },
  '2016-06-30': {
    '1. open': '20.4959',
    '2. high': '20.8926',
    '3. low': '16.7107',
    '4. close': '17.8347',
    '5. volume': '2325259'
  },
  '2016-05-31': {
    '1. open': '16.7769',
    '2. high': '20.9793',
    '3. low': '16.0620',
    '4. close': '20.6488',
    '5. volume': '3329119'
  },
  '2016-04-29': {
    '1. open': '20.2066',
    '2. high': '20.4959',
    '3. low': '16.5992',
    '4. close': '16.7190',
    '5. volume': '2596134'
  },
  '2016-03-31': {
    '1. open': '17.7934',
    '2. high': '20.4711',
    '3. low': '16.7934',
    '4. close': '20.3760',
    '5. volume': '2955131'
  },
  '2016-02-29': {
    '1. open': '19.4215',
    '2. high': '20.4959',
    '3. low': '15.7769',
    '4. close': '17.8967',
    '5. volume': '2854250'
  },
  '2016-01-29': {
    '1. open': '22.3141',
    '2. high': '22.6033',
    '3. low': '18.4587',
    '4. close': '19.4504',
    '5. volume': '2879615'
  },
  '2015-12-30': {
    '1. open': '19.5372',
    '2. high': '23.3802',
    '3. low': '19.2355',
    '4. close': '22.3141',
    '5. volume': '3379257'
  },
  '2015-11-30': {
    '1. open': '20.6033',
    '2. high': '21.0950',
    '3. low': '17.6488',
    '4. close': '19.4587',
    '5. volume': '3573208'
  },
  '2015-10-30': {
    '1. open': '17.7273',
    '2. high': '21.4793',
    '3. low': '17.7025',
    '4. close': '20.6735',
    '5. volume': '2877881'
  },
  '2015-09-30': {
    '1. open': '17.2438',
    '2. high': '18.0785',
    '3. low': '15.9091',
    '4. close': '17.6488',
    '5. volume': '2827642'
  },
  '2015-08-31': {
    '1. open': '18.5500',
    '2. high': '19.4741',
    '3. low': '14.7438',
    '4. close': '17.3058',
    '5. volume': '4466158'
  },
  '2015-07-31': {
    '1. open': '16.7318',
    '2. high': '19.2186',
    '3. low': '16.0856',
    '4. close': '18.3321',
    '5. volume': '3572269'
  },
  '2015-06-30': {
    '1. open': '14.2111',
    '2. high': '17.1112',
    '3. low': '14.1097',
    '4. close': '16.4801',
    '5. volume': '3473812'
  },
  '2015-05-29': {
    '1. open': '13.2044',
    '2. high': '14.1999',
    '3. low': '11.1796',
    '4. close': '14.1623',
    '5. volume': '2660999'
  },
  '2015-04-30': {
    '1. open': '12.4906',
    '2. high': '14.2299',
    '3. low': '12.4756',
    '4. close': '13.2382',
    '5. volume': '2232078'
  },
  '2015-03-31': {
    '1. open': '12.6296',
    '2. high': '13.0654',
    '3. low': '11.2923',
    '4. close': '12.5394',
    '5. volume': '3573469'
  },
  '2015-02-27': {
    '1. open': '11.7092',
    '2. high': '13.3095',
    '3. low': '11.4576',
    '4. close': '12.6221',
    '5. volume': '2903464'
  },
  '2015-01-30': {
    '1. open': '9.2412',
    '2. high': '11.9196',
    '3. low': '9.1322',
    '4. close': '11.6792',
    '5. volume': '3137444'
  },
  '2014-12-30': {
    '1. open': '8.5500',
    '2. high': '9.5492',
    '3. low': '8.4748',
    '4. close': '9.1585',
    '5. volume': '2024913'
  },
  '2014-11-28': {
    '1. open': '8.0616',
    '2. high': '8.7979',
    '3. low': '8.0616',
    '4. close': '8.5462',
    '5. volume': '1946764'
  },
  '2014-10-31': {
    '1. open': '7.9264',
    '2. high': '8.1893',
    '3. low': '7.2119',
    '4. close': '8.0917',
    '5. volume': '2341734'
  },
  '2014-09-30': {
    '1. open': '7.3629',
    '2. high': '8.2194',
    '3. low': '7.2953',
    '4. close': '7.9790',
    '5. volume': '2418776'
  },
  '2014-08-29': {
    '1. open': '6.2585',
    '2. high': '7.5117',
    '3. low': '6.1157',
    '4. close': '7.3614',
    '5. volume': '2540284'
  },
  '2014-07-31': {
    '1. open': '6.6526',
    '2. high': '6.8362',
    '3. low': '6.1983',
    '4. close': '6.2712',
    '5. volume': '2314157'
  },
  '2014-06-30': {
    '1. open': '6.3589',
    '2. high': '6.6935',
    '3. low': '6.2079',
    '4. close': '6.6252',
    '5. volume': '1814268'
  },
  '2014-05-30': {
    '1. open': '5.8323',
    '2. high': '6.4886',
    '3. low': '5.8118',
    '4. close': '6.3493',
    '5. volume': '3164628'
  },
  '2014-04-30': {
    '1. open': '5.7141',
    '2. high': '5.9081',
    '3. low': '5.4504',
    '4. close': '5.8124',
    '5. volume': '2206569'
  },
  '2014-03-31': {
    '1. open': '5.4573',
    '2. high': '5.7298',
    '3. low': '5.3637',
    '4. close': '5.7100',
    '5. volume': '2220614'
  },
  '2014-02-28': {
    '1. open': '5.2592',
    '2. high': '5.6417',
    '3. low': '4.9874',
    '4. close': '5.5529',
    '5. volume': '2396171'
  },
  '2014-01-31': {
    '1. open': '5.2319',
    '2. high': '5.6622',
    '3. low': '5.0413',
    '4. close': '5.2790',
    '5. volume': '3695233'
  },
  '2013-12-30': {
    '1. open': '5.7353',
    '2. high': '5.8609',
    '3. low': '5.0393',
    '4. close': '5.2353',
    '5. volume': '4197946'
  },
  '2013-11-29': {
    '1. open': '4.7128',
    '2. high': '5.6840',
    '3. low': '4.6623',
    '4. close': '5.6390',
    '5. volume': '5404732'
  },
  '2013-10-31': {
    '1. open': '5.0543',
    '2. high': '5.2995',
    '3. low': '4.5619',
    '4. close': '4.7264',
    '5. volume': '5015331'
  },
  '2013-09-30': {
    '1. open': '4.6308',
    '2. high': '5.3268',
    '3. low': '4.5776',
    '4. close': '5.0543',
    '5. volume': '4747316'
  },
  '2013-08-30': {
    '1. open': '5.6349',
    '2. high': '5.7626',
    '3. low': '4.4669',
    '4. close': '4.5878',
    '5. volume': '5518276'
  },
  '2013-07-31': {
    '1. open': '5.3337',
    '2. high': '6.1130',
    '3. low': '5.1581',
    '4. close': '5.6355',
    '5. volume': '3494488'
  },
  '2013-06-28': {
    '1. open': '6.2434',
    '2. high': '6.5767',
    '3. low': '4.8637',
    '4. close': '5.2736',
    '5. volume': '6775203'
  },
  '2013-05-31': {
    '1. open': '5.2592',
    '2. high': '6.8267',
    '3. low': '5.1294',
    '4. close': '6.2523',
    '5. volume': '4666690'
  },
  '2013-04-30': {
    '1. open': '4.9518',
    '2. high': '5.5625',
    '3. low': '4.7763',
    '4. close': '5.2517',
    '5. volume': '3174392'
  },
  '2013-03-28': {
    '1. open': '4.4396',
    '2. high': '5.3070',
    '3. low': '4.4396',
    '4. close': '4.9518',
    '5. volume': '3633111'
  },
  '2013-02-28': {
    '1. open': '4.4396',
    '2. high': '4.5967',
    '3. low': '4.2825',
    '4. close': '4.4532',
    '5. volume': '1732939'
  },
  '2013-01-31': {
    '1. open': '4.4737',
    '2. high': '4.5284',
    '3. low': '4.0735',
    '4. close': '4.4703',
    '5. volume': '3480030'
  },
  '2012-12-28': {
    '1. open': '4.4396',
    '2. high': '4.5489',
    '3. low': '3.8290',
    '4. close': '4.4123',
    '5. volume': '3887435'
  },
  '2012-11-30': {
    '1. open': '3.7115',
    '2. high': '4.4273',
    '3. low': '3.6336',
    '4. close': '4.4252',
    '5. volume': '3294758'
  },
  '2012-10-31': {
    '1. open': '3.0394',
    '2. high': '3.7224',
    '3. low': '3.0394',
    '4. close': '3.7115',
    '5. volume': '3737478'
  },
  '2012-09-28': {
    '1. open': '3.0667',
    '2. high': '3.2102',
    '3. low': '3.0053',
    '4. close': '3.0326',
    '5. volume': '1386133'
  },
  '2012-08-31': {
    '1. open': '3.3802',
    '2. high': '3.4321',
    '3. low': '3.0558',
    '4. close': '3.0558',
    '5. volume': '1075192'
  },
  '2012-07-31': {
    '1. open': '2.7488',
    '2. high': '3.4082',
    '3. low': '2.7370',
    '4. close': '3.4048',
    '5. volume': '1430949'
  },
  '2012-06-29': {
    '1. open': '2.9320',
    '2. high': '3.0518',
    '3. low': '2.6060',
    '4. close': '2.7320',
    '5. volume': '1638760'
  },
  '2012-05-31': {
    '1. open': '3.0425',
    '2. high': '3.1648',
    '3. low': '2.7320',
    '4. close': '2.9183',
    '5. volume': '1637084'
  },
  '2012-04-30': {
    '1. open': '3.1046',
    '2. high': '3.1046',
    '3. low': '2.8947',
    '4. close': '3.0382',
    '5. volume': '2296135'
  },
  '2012-03-30': {
    '1. open': '2.7942',
    '2. high': '3.1170',
    '3. low': '2.4899',
    '4. close': '3.0996',
    '5. volume': '3691707'
  },
  '2012-02-29': {
    '1. open': '2.3595',
    '2. high': '2.9904',
    '3. low': '2.3005',
    '4. close': '2.7954',
    '5. volume': '3443488'
  },
  '2012-01-31': {
    '1. open': '2.1192',
    '2. high': '2.4017',
    '3. low': '2.0484',
    '4. close': '2.3595',
    '5. volume': '1590237'
  },
  '2011-12-30': {
    '1. open': '2.2415',
    '2. high': '2.2496',
    '3. low': '1.9249',
    '4. close': '2.1279',
    '5. volume': '1029672'
  },
  '2011-11-30': {
    '1. open': '2.4222',
    '2. high': '2.4551',
    '3. low': '1.9913',
    '4. close': '2.2664',
    '5. volume': '1286578'
  },
  '2011-10-31': {
    '1. open': '2.1105',
    '2. high': '2.5948',
    '3. low': '2.0627',
    '4. close': '2.4837',
    '5. volume': '1585894'
  },
  '2011-09-30': {
    '1. open': '2.3105',
    '2. high': '2.3533',
    '3. low': '1.7386',
    '4. close': '2.1918',
    '5. volume': '2320727'
  },
  '2011-08-31': {
    '1. open': '2.9183',
    '2. high': '2.9183',
    '3. low': '1.9311',
    '4. close': '2.3222',
    '5. volume': '2416785'
  },
  '2011-07-29': {
    '1. open': '3.2009',
    '2. high': '3.2996',
    '3. low': '2.6575',
    '4. close': '2.8891',
    '5. volume': '1541798'
  },
  '2011-06-30': {
    '1. open': '3.1356',
    '2. high': '3.3567',
    '3. low': '3.0618',
    '4. close': '3.2164',
    '5. volume': '2026026'
  },
  '2011-05-31': {
    '1. open': '3.1108',
    '2. high': '3.2598',
    '3. low': '2.9692',
    '4. close': '3.1431',
    '5. volume': '1826415'
  },
  '2011-04-29': {
    '1. open': '3.0736',
    '2. high': '3.2729',
    '3. low': '3.0413',
    '4. close': '3.1232',
    '5. volume': '1836291'
  },
  '2011-03-31': {
    '1. open': '3.5517',
    '2. high': '3.6448',
    '3. low': '2.6786',
    '4. close': '3.0537',
    '5. volume': '4761438'
  },
  '2011-02-28': {
    '1. open': '3.1046',
    '2. high': '3.6752',
    '3. low': '3.0940',
    '4. close': '3.6510',
    '5. volume': '5038088'
  },
  '2011-01-31': {
    '1. open': '2.3732',
    '2. high': '3.6510',
    '3. low': '2.3036',
    '4. close': '3.0611',
    '5. volume': '5449817'
  },
  '2010-12-30': {
    '1. open': '2.2664',
    '2. high': '2.4526',
    '3. low': '2.2192',
    '4. close': '2.3843',
    '5. volume': '2366412'
  },
  '2010-11-30': {
    '1. open': '2.2949',
    '2. high': '2.3595',
    '3. low': '2.0801',
    '4. close': '2.2657',
    '5. volume': '1290417'
  },
  '2010-10-29': {
    '1. open': '2.0180',
    '2. high': '2.4247',
    '3. low': '1.9683',
    '4. close': '2.2744',
    '5. volume': '2385053'
  },
  '2010-09-30': {
    '1. open': '1.9621',
    '2. high': '2.0180',
    '3. low': '1.8441',
    '4. close': '2.0118',
    '5. volume': '1132270'
  },
  '2010-08-31': {
    '1. open': '1.9217',
    '2. high': '2.0118',
    '3. low': '1.7820',
    '4. close': '1.9410',
    '5. volume': '1099378'
  },
  '2010-07-30': {
    '1. open': '1.8317',
    '2. high': '1.9373',
    '3. low': '1.7765',
    '4. close': '1.9062',
    '5. volume': '963571'
  },
  '2010-06-30': {
    '1. open': '1.8504',
    '2. high': '2.0180',
    '3. low': '1.7864',
    '4. close': '1.8342',
    '5. volume': '1056141'
  },
  '2010-05-31': {
    '1. open': '1.8957',
    '2. high': '2.0180',
    '3. low': '1.6268',
    '4. close': '1.8628',
    '5. volume': '1672217'
  },
  '2010-04-30': {
    '1. open': '1.9981',
    '2. high': '2.2819',
    '3. low': '1.8013',
    '4. close': '1.9131',
    '5. volume': '1497044'
  },
  '2010-03-31': {
    '1. open': '1.7057',
    '2. high': '2.0416',
    '3. low': '1.6392',
    '4. close': '2.0180',
    '5. volume': '1633930'
  },
  '2010-02-26': {
    '1. open': '1.9249',
    '2. high': '1.9870',
    '3. low': '1.6045',
    '4. close': '1.6951',
    '5. volume': '1872995'
  },
  '2010-01-29': {
    '1. open': '1.9304',
    '2. high': '2.1024',
    '3. low': '1.8690',
    '4. close': '1.9435',
    '5. volume': '2431357'
  },
  '2009-12-30': {
    '1. open': '2.3533',
    '2. high': '2.3533',
    '3. low': '1.7386',
    '4. close': '1.9000',
    '5. volume': '1578707'
  },
  '2009-11-30': {
    '1. open': '2.4340',
    '2. high': '2.4464',
    '3. low': '2.1298',
    '4. close': '2.2912',
    '5. volume': '1657777'
  },
  '2009-10-30': {
    '1. open': '2.2291',
    '2. high': '2.6389',
    '3. low': '1.9311',
    '4. close': '2.3595',
    '5. volume': '2552275'
  },
  '2009-09-30': {
    '1. open': '1.8814',
    '2. high': '2.3160',
    '3. low': '1.8441',
    '4. close': '2.2291',
    '5. volume': '1914223'
  },
  '2009-08-31': {
    '1. open': '1.8690',
    '2. high': '2.1981',
    '3. low': '1.8131',
    '4. close': '1.9187',
    '5. volume': '1155668'
  },
  '2009-07-31': {
    '1. open': '1.7075',
    '2. high': '2.0490',
    '3. low': '1.6206',
    '4. close': '1.8504',
    '5. volume': '1143804'
  },
  '2009-06-30': {
    '1. open': '1.7572',
    '2. high': '2.0428',
    '3. low': '1.5647',
    '4. close': '1.7199',
    '5. volume': '1937775'
  },
  '2009-05-29': {
    '1. open': '1.3412',
    '2. high': '1.8628',
    '3. low': '1.2480',
    '4. close': '1.7945',
    '5. volume': '3666157'
  },
  '2009-04-30': {
    '1. open': '0.8631',
    '2. high': '1.4530',
    '3. low': '0.8569',
    '4. close': '1.3039',
    '5. volume': '3331333'
  },
  '2009-03-31': {
    '1. open': '0.9376',
    '2. high': '0.9624',
    '3. low': '0.7761',
    '4. close': '0.8569',
    '5. volume': '3211402'
  },
  '2009-02-27': {
    '1. open': '0.9562',
    '2. high': '1.0804',
    '3. low': '0.8134',
    '4. close': '0.9748',
    '5. volume': '1740091'
  },
  '2009-01-30': {
    '1. open': '1.0369',
    '2. high': '1.2170',
    '3. low': '0.7824',
    '4. close': '0.9748',
    '5. volume': '3219675'
  },
  '2008-12-30': {
    '1. open': '0.6023',
    '2. high': '1.2108',
    '3. low': '0.5402',
    '4. close': '1.0121',
    '5. volume': '8735846'
  },
  '2008-11-28': {
    '1. open': '0.9811',
    '2. high': '1.1114',
    '3. low': '0.5588',
    '4. close': '0.5899',
    '5. volume': '4736251'
  },
  '2008-10-31': {
    '1. open': '1.4281',
    '2. high': '1.4530',
    '3. low': '0.8134',
    '4. close': '0.9935',
    '5. volume': '7587944'
  },
  '2008-09-30': {
    '1. open': '1.6765',
    '2. high': '1.7945',
    '3. low': '1.1487',
    '4. close': '1.3288',
    '5. volume': '6416906'
  },
  '2008-08-29': {
    '1. open': '1.5833',
    '2. high': '1.8255',
    '3. low': '1.5523',
    '4. close': '1.7137',
    '5. volume': '5440025'
  },
  '2008-07-31': {
    '1. open': '1.9249',
    '2. high': '1.9621',
    '3. low': '1.5026',
    '4. close': '1.5709',
    '5. volume': '10314309'
  },
  '2008-06-30': {
    '1. open': '2.3533',
    '2. high': '2.5023',
    '3. low': '1.9249',
    '4. close': '1.9311',
    '5. volume': '4953359'
  },
  '2008-05-30': {
    '1. open': '2.3471',
    '2. high': '2.7072',
    '3. low': '2.1422',
    '4. close': '2.3284',
    '5. volume': '7032014'
  },
  '2008-04-30': {
    '1. open': '2.8749',
    '2. high': '2.9680',
    '3. low': '1.9807',
    '4. close': '2.2850',
    '5. volume': '16824871'
  },
  '2008-03-31': {
    '1. open': '2.5520',
    '2. high': '2.9990',
    '3. low': '1.8193',
    '4. close': '2.9245',
    '5. volume': '16038023'
  },
  '2008-02-29': {
    '1. open': '2.7507',
    '2. high': '3.0239',
    '3. low': '2.5085',
    '4. close': '2.5520',
    '5. volume': '14167540'
  },
  '2008-01-31': {
    '1. open': '3.2536',
    '2. high': '3.6200',
    '3. low': '2.2850',
    '4. close': '2.6948',
    '5. volume': '16549790'
  },
  '2007-12-28': {
    '1. open': '3.7069',
    '2. high': '4.5265',
    '3. low': '3.1419',
    '4. close': '3.2039',
    '5. volume': '11396058'
  },
  '2007-11-30': {
    '1. open': '5.4268',
    '2. high': '5.6566',
    '3. low': '2.7569',
    '4. close': '3.6138',
    '5. volume': '18879816'
  },
  '2007-10-31': {
    '1. open': '6.6128',
    '2. high': '6.9233',
    '3. low': '5.6193',
    '4. close': '5.7187',
    '5. volume': '5163844'
  },
  '2007-09-28': {
    '1. open': '7.2648',
    '2. high': '7.3766',
    '3. low': '5.6814',
    '4. close': '6.6687',
    '5. volume': '7185650'
  },
  '2007-08-31': {
    '1. open': '7.0413',
    '2. high': '8.3452',
    '3. low': '6.3520',
    '4. close': '7.1406',
    '5. volume': '10140574'
  },
  '2007-07-31': {
    '1. open': '8.1030',
    '2. high': '8.7302',
    '3. low': '6.7059',
    '4. close': '7.0475',
    '5. volume': '10143978'
  },
  '2007-06-29': {
    '1. open': '8.7550',
    '2. high': '9.9658',
    '3. low': '8.1030',
    '4. close': '8.1465',
    '5. volume': '7471209'
  },
  '2007-05-31': {
    '1. open': '9.7423',
    '2. high': '9.9347',
    '3. low': '8.5625',
    '4. close': '8.7302',
    '5. volume': '7184621'
  },
  '2007-04-30': {
    '1. open': '10.5805',
    '2. high': '10.6364',
    '3. low': '9.1958',
    '4. close': '9.6553',
    '5. volume': '11537328'
  },
  '2007-03-30': {
    '1. open': '13.0393',
    '2. high': '13.4616',
    '3. low': '9.8789',
    '4. close': '10.3818',
    '5. volume': '8378670'
  },
  '2007-02-28': {
    '1. open': '13.4119',
    '2. high': '14.6165',
    '3. low': '12.5488',
    '4. close': '13.0828',
    '5. volume': '4682142'
  },
  '2007-01-31': {
    '1. open': '14.0328',
    '2. high': '14.7096',
    '3. low': '13.0580',
    '4. close': '13.3498',
    '5. volume': '7410903'
  },
  '2006-12-29': {
    '1. open': '11.9651',
    '2. high': '14.1570',
    '3. low': '11.9403',
    '4. close': '14.0080',
    '5. volume': '5821799'
  },
  '2006-11-30': {
    '1. open': '12.3563',
    '2. high': '12.4805',
    '3. low': '11.0276',
    '4. close': '11.8596',
    '5. volume': '7212057'
  },
  '2006-10-31': {
    '1. open': '13.0952',
    '2. high': '13.4988',
    '3. low': '12.1080',
    '4. close': '12.4060',
    '5. volume': '4005615'
  },
  '2006-09-29': {
    '1. open': '13.1076',
    '2. high': '13.6168',
    '3. low': '12.2135',
    '4. close': '13.0890',
    '5. volume': '3316948'
  },
  '2006-08-31': {
    '1. open': '11.9838',
    '2. high': '13.7720',
    '3. low': '11.9527',
    '4. close': '13.1511',
    '5. volume': '1959365'
  },
  '2006-07-31': {
    '1. open': '11.9900',
    '2. high': '12.4992',
    '3. low': '11.4870',
    '4. close': '12.0893',
    '5. volume': '2400122'
  },
  '2006-06-30': {
    '1. open': '13.5982',
    '2. high': '13.5982',
    '3. low': '11.1766',
    '4. close': '11.8844',
    '5. volume': '2301851'
  },
  '2006-05-31': {
    '1. open': '13.0393',
    '2. high': '16.4358',
    '3. low': '12.2942',
    '4. close': '13.6292',
    '5. volume': '4069951'
  },
  '2006-04-28': {
    '1. open': '14.7158',
    '2. high': '15.3864',
    '3. low': '13.2256',
    '4. close': '13.3125',
    '5. volume': '7707254'
  }
};

// tslint:disable:max-line-length
export const patriziaCompany: Company = {
  id: 1148,
  name: 'Patrizia AG',
  country: Country.Deutschland,
  city: 'Augsburg',
  url: 'http://www.patrizia.ag/',
  description: 'Die Patrizia AG (Eigenschreibweise PATRIZIA AG) mit Sitz in Augsburg ist ein im SDAX der Deutschen Börse notierter globaler Anbieter von Immobilieninvestments in Europa.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Patrizia_Immobilien',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Patrizia_Immobilien_logo.svg/500px-Patrizia_Immobilien_logo.svg.png',
  products: [],
  industries: [111016, 111017],
  securityType: SecurityType.Namensaktie,
  currency: Currency.EUR,
  isin: 'DE000PAT1AG3',
  wkn: 'PAT1AG',
  symbol: 'PAT.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Immobilien-Investmenthaus', 'Immobilien-Investor', 'Akquisition', 'Consulting', 'Wohnungsprivatisierung', 'Immobilienmanagement', 'Projektentwicklung', 'Bautechnik', 'Sales']
};
// tslint:enable:max-line-length
