import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';

const dividends = [
  {year: 2018, rate: 0.26, yield: 5.62}, {year: 2017, rate: 0.09}, {year: 2016, rate: 0.08}, {
    year: 2015,
    rate: 0.08,
    yield: 1.19
  }, {year: 2014, rate: 0.08, yield: 1.02}, {year: 2013, rate: 0.20, yield: 2.23}, {year: 2012, rate: 0.20, yield: 2.87}, {
    year: 2011,
    rate: 0.19,
    yield: 2.84
  }, {year: 2010, rate: 0.33, yield: 4.33}, {year: 2009, rate: 0.42, yield: 3.29}, {year: 2008, rate: 0.61, yield: 7.04}, {
    year: 2007,
    rate: 0.73,
    yield: 4.36
  }, {year: 2006, rate: 0.64, yield: 3.51}, {year: 2005, rate: 0.53, yield: 3.51}, {year: 2004, rate: 0.44, yield: 3.37}, {
    year: 2003,
    rate: 0.38,
    yield: 3.47
  }, {year: 2002, rate: 0.35, yield: 3.84}, {year: 2001, rate: 0.38, yield: 2.73}, {year: 2000, rate: 0.36, yield: 2.27}
];
const prices = {
  '2019-11-29': {
    '1. open': '4.7230',
    '2. high': '5.0210',
    '3. low': '4.6420',
    '4. close': '4.7850',
    '5. volume': '1654102'
  },
  '2019-10-31': {
    '1. open': '4.8050',
    '2. high': '4.9570',
    '3. low': '4.4835',
    '4. close': '4.7205',
    '5. volume': '1762530'
  },
  '2019-09-30': {
    '1. open': '4.2990',
    '2. high': '4.8675',
    '3. low': '4.2500',
    '4. close': '4.7780',
    '5. volume': '877661'
  },
  '2019-08-30': {
    '1. open': '4.6430',
    '2. high': '4.6750',
    '3. low': '4.1930',
    '4. close': '4.3165',
    '5. volume': '332698'
  },
  '2019-07-31': {
    '1. open': '4.9970',
    '2. high': '5.1180',
    '3. low': '4.5750',
    '4. close': '4.6085',
    '5. volume': '122217'
  },
  '2019-06-28': {
    '1. open': '4.8165',
    '2. high': '5.0490',
    '3. low': '4.7860',
    '4. close': '4.9280',
    '5. volume': '83011'
  },
  '2019-05-31': {
    '1. open': '5.3700',
    '2. high': '5.3700',
    '3. low': '4.8570',
    '4. close': '4.8735',
    '5. volume': '99877'
  },
  '2019-04-30': {
    '1. open': '5.2360',
    '2. high': '5.6540',
    '3. low': '5.2360',
    '4. close': '5.4300',
    '5. volume': '67780'
  },
  '2019-03-29': {
    '1. open': '5.4820',
    '2. high': '5.5520',
    '3. low': '5.0200',
    '4. close': '5.0860',
    '5. volume': '435615'
  },
  '2019-02-28': {
    '1. open': '5.1470',
    '2. high': '5.4940',
    '3. low': '5.0270',
    '4. close': '5.4750',
    '5. volume': '103593'
  },
  '2019-01-31': {
    '1. open': '4.5640',
    '2. high': '5.3100',
    '3. low': '4.5390',
    '4. close': '5.1680',
    '5. volume': '162954'
  },
  '2018-12-28': {
    '1. open': '5.1200',
    '2. high': '5.1500',
    '3. low': '4.4980',
    '4. close': '4.6375',
    '5. volume': '114980'
  },
  '2018-11-30': {
    '1. open': '4.8845',
    '2. high': '5.3230',
    '3. low': '4.8325',
    '4. close': '5.0130',
    '5. volume': '167765'
  },
  '2018-10-31': {
    '1. open': '5.6010',
    '2. high': '5.7400',
    '3. low': '4.8800',
    '4. close': '4.8845',
    '5. volume': '146600'
  },
  '2018-09-28': {
    '1. open': '5.3640',
    '2. high': '5.7800',
    '3. low': '5.1500',
    '4. close': '5.5000',
    '5. volume': '65258'
  },
  '2018-08-31': {
    '1. open': '6.2320',
    '2. high': '6.2600',
    '3. low': '5.3360',
    '4. close': '5.3790',
    '5. volume': '359810'
  },
  '2018-07-31': {
    '1. open': '5.9930',
    '2. high': '6.4330',
    '3. low': '5.9100',
    '4. close': '6.2940',
    '5. volume': '142971'
  },
  '2018-06-29': {
    '1. open': '5.9180',
    '2. high': '6.2530',
    '3. low': '5.8160',
    '4. close': '6.0770',
    '5. volume': '171408'
  },
  '2018-05-31': {
    '1. open': '6.7430',
    '2. high': '6.8900',
    '3. low': '5.7920',
    '4. close': '5.8490',
    '5. volume': '59534'
  },
  '2018-04-30': {
    '1. open': '6.4340',
    '2. high': '6.7300',
    '3. low': '6.3210',
    '4. close': '6.7300',
    '5. volume': '17211'
  },
  '2018-03-29': {
    '1. open': '6.7900',
    '2. high': '6.8040',
    '3. low': '6.2220',
    '4. close': '6.4340',
    '5. volume': '50787'
  },
  '2018-02-28': {
    '1. open': '7.5690',
    '2. high': '7.5690',
    '3. low': '6.8770',
    '4. close': '6.8970',
    '5. volume': '19372'
  },
  '2018-01-31': {
    '1. open': '7.1130',
    '2. high': '7.6420',
    '3. low': '7.0700',
    '4. close': '7.5720',
    '5. volume': '66289'
  },
  '2017-12-29': {
    '1. open': '7.1680',
    '2. high': '7.2970',
    '3. low': '7.0590',
    '4. close': '7.1130',
    '5. volume': '18331'
  },
  '2017-11-30': {
    '1. open': '7.5450',
    '2. high': '7.5600',
    '3. low': '7.0190',
    '4. close': '7.1830',
    '5. volume': '193005'
  },
  '2017-10-31': {
    '1. open': '7.3480',
    '2. high': '7.4510',
    '3. low': '7.1300',
    '4. close': '7.4080',
    '5. volume': '39223'
  },
  '2017-09-29': {
    '1. open': '7.4320',
    '2. high': '7.5740',
    '3. low': '7.1500',
    '4. close': '7.5300',
    '5. volume': '21800'
  },
  '2017-08-31': {
    '1. open': '7.7500',
    '2. high': '7.9140',
    '3. low': '7.2780',
    '4. close': '7.4400',
    '5. volume': '29946'
  },
  '2017-07-31': {
    '1. open': '7.3230',
    '2. high': '7.7300',
    '3. low': '7.3230',
    '4. close': '7.6460',
    '5. volume': '135041'
  },
  '2017-06-30': {
    '1. open': '7.1990',
    '2. high': '7.5000',
    '3. low': '7.1690',
    '4. close': '7.4500',
    '5. volume': '22341'
  },
  '2017-05-31': {
    '1. open': '7.4000',
    '2. high': '7.8530',
    '3. low': '7.1820',
    '4. close': '7.3270',
    '5. volume': '43481'
  },
  '2017-04-28': {
    '1. open': '7.0260',
    '2. high': '7.6390',
    '3. low': '6.8000',
    '4. close': '7.3550',
    '5. volume': '39992'
  },
  '2017-03-31': {
    '1. open': '6.3690',
    '2. high': '7.2820',
    '3. low': '6.3620',
    '4. close': '7.2820',
    '5. volume': '120394'
  },
  '2017-02-28': {
    '1. open': '6.3820',
    '2. high': '6.3820',
    '3. low': '5.9230',
    '4. close': '6.1210',
    '5. volume': '25851'
  },
  '2017-01-31': {
    '1. open': '6.4300',
    '2. high': '6.7000',
    '3. low': '6.0340',
    '4. close': '6.3370',
    '5. volume': '151148'
  },
  '2016-12-30': {
    '1. open': '5.8920',
    '2. high': '6.6000',
    '3. low': '5.7560',
    '4. close': '6.3750',
    '5. volume': '141205'
  },
  '2016-11-30': {
    '1. open': '6.6000',
    '2. high': '6.6000',
    '3. low': '5.6920',
    '4. close': '5.7660',
    '5. volume': '229201'
  },
  '2016-10-31': {
    '1. open': '5.3120',
    '2. high': '6.6020',
    '3. low': '5.2870',
    '4. close': '6.5770',
    '5. volume': '49735'
  },
  '2016-09-30': {
    '1. open': '5.6530',
    '2. high': '5.8280',
    '3. low': '5.2170',
    '4. close': '5.3490',
    '5. volume': '92483'
  },
  '2016-08-31': {
    '1. open': '5.2500',
    '2. high': '5.6020',
    '3. low': '4.7600',
    '4. close': '5.5560',
    '5. volume': '172530'
  },
  '2016-07-29': {
    '1. open': '5.1100',
    '2. high': '5.4200',
    '3. low': '4.8490',
    '4. close': '5.2100',
    '5. volume': '55688'
  },
  '2016-06-30': {
    '1. open': '6.0710',
    '2. high': '6.0710',
    '3. low': '4.6600',
    '4. close': '5.1000',
    '5. volume': '384496'
  },
  '2016-05-31': {
    '1. open': '5.9650',
    '2. high': '6.1110',
    '3. low': '5.5500',
    '4. close': '6.0710',
    '5. volume': '72883'
  },
  '2016-04-29': {
    '1. open': '5.9400',
    '2. high': '6.7800',
    '3. low': '5.4510',
    '4. close': '5.9620',
    '5. volume': '93628'
  },
  '2016-03-31': {
    '1. open': '5.8640',
    '2. high': '6.4790',
    '3. low': '5.7900',
    '4. close': '5.9400',
    '5. volume': '84459'
  },
  '2016-02-29': {
    '1. open': '5.9270',
    '2. high': '5.9340',
    '3. low': '5.2810',
    '4. close': '5.8380',
    '5. volume': '73074'
  },
  '2016-01-29': {
    '1. open': '6.7960',
    '2. high': '6.7960',
    '3. low': '5.5900',
    '4. close': '5.7350',
    '5. volume': '63248'
  },
  '2015-12-30': {
    '1. open': '7.8440',
    '2. high': '7.8790',
    '3. low': '6.7720',
    '4. close': '6.7960',
    '5. volume': '81295'
  },
  '2015-11-30': {
    '1. open': '7.8710',
    '2. high': '8.0350',
    '3. low': '7.4960',
    '4. close': '7.8940',
    '5. volume': '261296'
  },
  '2015-10-30': {
    '1. open': '7.6130',
    '2. high': '8.2520',
    '3. low': '7.3600',
    '4. close': '7.7970',
    '5. volume': '284449'
  },
  '2015-09-30': {
    '1. open': '8.2090',
    '2. high': '8.2090',
    '3. low': '7.3700',
    '4. close': '7.6130',
    '5. volume': '119785'
  },
  '2015-08-31': {
    '1. open': '9.1000',
    '2. high': '9.4060',
    '3. low': '7.7090',
    '4. close': '8.2330',
    '5. volume': '112020'
  },
  '2015-07-31': {
    '1. open': '9.1000',
    '2. high': '9.4630',
    '3. low': '8.3500',
    '4. close': '9.1000',
    '5. volume': '103318'
  },
  '2015-06-30': {
    '1. open': '9.1920',
    '2. high': '9.4580',
    '3. low': '8.6840',
    '4. close': '8.8650',
    '5. volume': '98344'
  },
  '2015-05-29': {
    '1. open': '8.9500',
    '2. high': '9.3130',
    '3. low': '8.8020',
    '4. close': '9.1920',
    '5. volume': '109609'
  },
  '2015-04-30': {
    '1. open': '9.3610',
    '2. high': '9.7740',
    '3. low': '8.9710',
    '4. close': '8.9710',
    '5. volume': '88583'
  },
  '2015-03-31': {
    '1. open': '9.0380',
    '2. high': '9.5980',
    '3. low': '8.8320',
    '4. close': '9.4250',
    '5. volume': '78714'
  },
  '2015-02-27': {
    '1. open': '7.6480',
    '2. high': '8.9890',
    '3. low': '7.4000',
    '4. close': '8.9890',
    '5. volume': '296833'
  },
  '2015-01-30': {
    '1. open': '7.9270',
    '2. high': '8.1360',
    '3. low': '7.2460',
    '4. close': '7.5900',
    '5. volume': '228354'
  },
  '2014-12-30': {
    '1. open': '8.6000',
    '2. high': '8.6870',
    '3. low': '7.5440',
    '4. close': '7.8490',
    '5. volume': '165960'
  },
  '2014-11-28': {
    '1. open': '8.8000',
    '2. high': '8.8560',
    '3. low': '8.1390',
    '4. close': '8.6140',
    '5. volume': '99971'
  },
  '2014-10-31': {
    '1. open': '9.6510',
    '2. high': '9.6700',
    '3. low': '8.4200',
    '4. close': '8.9150',
    '5. volume': '275709'
  },
  '2014-09-30': {
    '1. open': '9.1590',
    '2. high': '9.7640',
    '3. low': '9.1590',
    '4. close': '9.4880',
    '5. volume': '82860'
  },
  '2014-08-29': {
    '1. open': '9.0900',
    '2. high': '9.4000',
    '3. low': '8.5490',
    '4. close': '9.1590',
    '5. volume': '237641'
  },
  '2014-07-31': {
    '1. open': '9.3350',
    '2. high': '9.6300',
    '3. low': '8.8900',
    '4. close': '9.1700',
    '5. volume': '63045'
  },
  '2014-06-30': {
    '1. open': '9.4500',
    '2. high': '9.9870',
    '3. low': '9.2970',
    '4. close': '9.3200',
    '5. volume': '69851'
  },
  '2014-05-30': {
    '1. open': '8.7850',
    '2. high': '9.4340',
    '3. low': '8.6840',
    '4. close': '9.3240',
    '5. volume': '65450'
  },
  '2014-04-30': {
    '1. open': '8.7320',
    '2. high': '9.3000',
    '3. low': '8.7290',
    '4. close': '8.7770',
    '5. volume': '199987'
  },
  '2014-03-31': {
    '1. open': '8.8380',
    '2. high': '9.2870',
    '3. low': '8.5100',
    '4. close': '8.9280',
    '5. volume': '191566'
  },
  '2014-02-28': {
    '1. open': '8.7820',
    '2. high': '9.2270',
    '3. low': '8.6030',
    '4. close': '9.0090',
    '5. volume': '594094'
  },
  '2014-01-31': {
    '1. open': '8.9490',
    '2. high': '9.9270',
    '3. low': '8.5740',
    '4. close': '8.7000',
    '5. volume': '166331'
  },
  '2013-12-30': {
    '1. open': '8.8200',
    '2. high': '8.9980',
    '3. low': '8.2080',
    '4. close': '8.9980',
    '5. volume': '55244'
  },
  '2013-11-29': {
    '1. open': '8.6080',
    '2. high': '8.9060',
    '3. low': '8.2800',
    '4. close': '8.8500',
    '5. volume': '162278'
  },
  '2013-10-31': {
    '1. open': '8.2610',
    '2. high': '9.3600',
    '3. low': '8.2610',
    '4. close': '8.5610',
    '5. volume': '275472'
  },
  '2013-09-30': {
    '1. open': '7.4090',
    '2. high': '8.4100',
    '3. low': '7.3920',
    '4. close': '8.2000',
    '5. volume': '221141'
  },
  '2013-08-30': {
    '1. open': '7.1620',
    '2. high': '7.6100',
    '3. low': '7.1020',
    '4. close': '7.2400',
    '5. volume': '59361'
  },
  '2013-07-31': {
    '1. open': '6.4220',
    '2. high': '7.1070',
    '3. low': '6.2290',
    '4. close': '7.0850',
    '5. volume': '111729'
  },
  '2013-06-28': {
    '1. open': '7.1700',
    '2. high': '7.3520',
    '3. low': '6.2500',
    '4. close': '6.5920',
    '5. volume': '49870'
  },
  '2013-05-31': {
    '1. open': '7.4440',
    '2. high': '7.5350',
    '3. low': '7.1280',
    '4. close': '7.2440',
    '5. volume': '20885'
  },
  '2013-04-30': {
    '1. open': '6.7600',
    '2. high': '7.5280',
    '3. low': '6.5370',
    '4. close': '7.4050',
    '5. volume': '41622'
  },
  '2013-03-28': {
    '1. open': '7.2900',
    '2. high': '7.8180',
    '3. low': '6.6600',
    '4. close': '6.7600',
    '5. volume': '55269'
  },
  '2013-02-28': {
    '1. open': '7.1220',
    '2. high': '7.7980',
    '3. low': '6.9710',
    '4. close': '7.4590',
    '5. volume': '135223'
  },
  '2013-01-31': {
    '1. open': '7.0590',
    '2. high': '7.9260',
    '3. low': '7.0590',
    '4. close': '7.3400',
    '5. volume': '113981'
  },
  '2012-12-28': {
    '1. open': '6.5010',
    '2. high': '7.0580',
    '3. low': '6.4500',
    '4. close': '6.9480',
    '5. volume': '61467'
  },
  '2012-11-30': {
    '1. open': '6.3870',
    '2. high': '6.5700',
    '3. low': '5.9540',
    '4. close': '6.5000',
    '5. volume': '43826'
  },
  '2012-10-31': {
    '1. open': '6.0450',
    '2. high': '6.6500',
    '3. low': '5.8630',
    '4. close': '6.3870',
    '5. volume': '130430'
  },
  '2012-09-28': {
    '1. open': '6.0030',
    '2. high': '6.7530',
    '3. low': '5.9980',
    '4. close': '6.1250',
    '5. volume': '398079'
  },
  '2012-08-31': {
    '1. open': '5.3050',
    '2. high': '6.0330',
    '3. low': '4.8700',
    '4. close': '6.0140',
    '5. volume': '312601'
  },
  '2012-07-31': {
    '1. open': '5.6360',
    '2. high': '5.7090',
    '3. low': '4.3310',
    '4. close': '5.2250',
    '5. volume': '130093'
  },
  '2012-06-29': {
    '1. open': '4.6110',
    '2. high': '5.5600',
    '3. low': '4.6110',
    '4. close': '5.5600',
    '5. volume': '142100'
  },
  '2012-05-31': {
    '1. open': '4.8460',
    '2. high': '5.3400',
    '3. low': '4.5350',
    '4. close': '4.5470',
    '5. volume': '180339'
  },
  '2012-04-30': {
    '1. open': '5.8450',
    '2. high': '5.8450',
    '3. low': '4.9200',
    '4. close': '5.2560',
    '5. volume': '121981'
  },
  '2012-03-30': {
    '1. open': '6.7540',
    '2. high': '6.7870',
    '3. low': '5.8800',
    '4. close': '5.8800',
    '5. volume': '157543'
  },
  '2012-02-29': {
    '1. open': '6.8550',
    '2. high': '7.3000',
    '3. low': '6.6680',
    '4. close': '6.7490',
    '5. volume': '101199'
  },
  '2012-01-31': {
    '1. open': '6.6440',
    '2. high': '6.9670',
    '3. low': '6.1090',
    '4. close': '6.7000',
    '5. volume': '103020'
  },
  '2011-12-30': {
    '1. open': '5.5550',
    '2. high': '6.7890',
    '3. low': '5.5550',
    '4. close': '6.3500',
    '5. volume': '23291'
  },
  '2011-11-30': {
    '1. open': '6.5000',
    '2. high': '6.5000',
    '3. low': '5.5040',
    '4. close': '5.5550',
    '5. volume': '137998'
  },
  '2011-10-31': {
    '1. open': '5.8330',
    '2. high': '6.9430',
    '3. low': '5.8330',
    '4. close': '6.6600',
    '5. volume': '180848'
  },
  '2011-09-30': {
    '1. open': '6.3400',
    '2. high': '6.3400',
    '3. low': '5.2260',
    '4. close': '6.2190',
    '5. volume': '272487'
  },
  '2011-08-31': {
    '1. open': '7.4140',
    '2. high': '7.4140',
    '3. low': '5.5790',
    '4. close': '6.1500',
    '5. volume': '286185'
  },
  '2011-07-29': {
    '1. open': '8.0920',
    '2. high': '8.3550',
    '3. low': '6.9180',
    '4. close': '7.2190',
    '5. volume': '318496'
  },
  '2011-06-30': {
    '1. open': '8.1560',
    '2. high': '8.1560',
    '3. low': '7.3590',
    '4. close': '8.0100',
    '5. volume': '86089'
  },
  '2011-05-31': {
    '1. open': '8.6810',
    '2. high': '8.6810',
    '3. low': '7.7120',
    '4. close': '8.1000',
    '5. volume': '95880'
  },
  '2011-04-29': {
    '1. open': '8.5500',
    '2. high': '8.9320',
    '3. low': '8.0580',
    '4. close': '8.7100',
    '5. volume': '111715'
  },
  '2011-03-31': {
    '1. open': '9.0240',
    '2. high': '9.1220',
    '3. low': '8.3100',
    '4. close': '8.6390',
    '5. volume': '128182'
  },
  '2011-02-28': {
    '1. open': '9.0710',
    '2. high': '9.4700',
    '3. low': '8.6550',
    '4. close': '9.0100',
    '5. volume': '486190'
  },
  '2011-01-31': {
    '1. open': '7.6560',
    '2. high': '9.2500',
    '3. low': '6.8900',
    '4. close': '9.0150',
    '5. volume': '529408'
  },
  '2010-12-30': {
    '1. open': '7.1750',
    '2. high': '8.1750',
    '3. low': '7.1750',
    '4. close': '7.6200',
    '5. volume': '128785'
  },
  '2010-11-30': {
    '1. open': '9.4000',
    '2. high': '9.4000',
    '3. low': '7.0220',
    '4. close': '7.1000',
    '5. volume': '225794'
  },
  '2010-10-29': {
    '1. open': '9.6950',
    '2. high': '10.0550',
    '3. low': '9.2130',
    '4. close': '9.2130',
    '5. volume': '72507'
  },
  '2010-09-30': {
    '1. open': '9.8370',
    '2. high': '10.3200',
    '3. low': '9.7300',
    '4. close': '9.8700',
    '5. volume': '18791'
  },
  '2010-08-31': {
    '1. open': '10.3300',
    '2. high': '10.8400',
    '3. low': '9.2510',
    '4. close': '9.2510',
    '5. volume': '59531'
  },
  '2010-07-30': {
    '1. open': '8.3150',
    '2. high': '10.6500',
    '3. low': '8.3150',
    '4. close': '10.2500',
    '5. volume': '99044'
  },
  '2010-06-30': {
    '1. open': '8.2150',
    '2. high': '9.6590',
    '3. low': '7.3100',
    '4. close': '8.5870',
    '5. volume': '193145'
  },
  '2010-05-28': {
    '1. open': '9.9000',
    '2. high': '9.9000',
    '3. low': '7.8750',
    '4. close': '8.6460',
    '5. volume': '97612'
  },
  '2010-04-30': {
    '1. open': '10.1800',
    '2. high': '11.3450',
    '3. low': '9.4790',
    '4. close': '9.9800',
    '5. volume': '146034'
  },
  '2010-03-31': {
    '1. open': '9.6100',
    '2. high': '10.7350',
    '3. low': '9.5100',
    '4. close': '10.1300',
    '5. volume': '39979'
  },
  '2010-02-26': {
    '1. open': '11.0900',
    '2. high': '11.3700',
    '3. low': '9.3320',
    '4. close': '9.4000',
    '5. volume': '55658'
  },
  '2010-01-29': {
    '1. open': '12.6850',
    '2. high': '13.4850',
    '3. low': '10.8750',
    '4. close': '11.3450',
    '5. volume': '34313'
  },
  '2009-12-29': {
    '1. open': '12.7100',
    '2. high': '13.0800',
    '3. low': '12.1900',
    '4. close': '12.7800',
    '5. volume': '16029'
  },
  '2009-11-30': {
    '1. open': '12.1800',
    '2. high': '13.2600',
    '3. low': '11.8600',
    '4. close': '12.5400',
    '5. volume': '25029'
  },
  '2009-10-30': {
    '1. open': '11.9300',
    '2. high': '12.7800',
    '3. low': '11.4100',
    '4. close': '12.6100',
    '5. volume': '120376'
  },
  '2009-09-29': {
    '1. open': '12.4000',
    '2. high': '12.4900',
    '3. low': '11.9100',
    '4. close': '12.3400',
    '5. volume': '64783'
  },
  '2009-08-31': {
    '1. open': '11.5700',
    '2. high': '12.7200',
    '3. low': '11.2000',
    '4. close': '12.3500',
    '5. volume': '104250'
  },
  '2009-07-30': {
    '1. open': '9.0300',
    '2. high': '11.3400',
    '3. low': '8.6600',
    '4. close': '11.3400',
    '5. volume': '69195'
  },
  '2009-06-26': {
    '1. open': '8.8200',
    '2. high': '8.8900',
    '3. low': '8.2000',
    '4. close': '8.6900',
    '5. volume': '109815'
  },
  '2009-05-29': {
    '1. open': '8.1400',
    '2. high': '9.1200',
    '3. low': '7.9300',
    '4. close': '8.6600',
    '5. volume': '62849'
  },
  '2009-04-30': {
    '1. open': '6.8100',
    '2. high': '8.4600',
    '3. low': '6.8100',
    '4. close': '8.4600',
    '5. volume': '61422'
  },
  '2009-03-31': {
    '1. open': '5.6400',
    '2. high': '6.5000',
    '3. low': '4.7000',
    '4. close': '5.8700',
    '5. volume': '33940'
  },
  '2009-02-26': {
    '1. open': '7.1700',
    '2. high': '7.6700',
    '3. low': '5.6000',
    '4. close': '6.0900',
    '5. volume': '33077'
  },
  '2009-01-29': {
    '1. open': '8.9200',
    '2. high': '9.1000',
    '3. low': '6.4000',
    '4. close': '7.2000',
    '5. volume': '14346'
  },
  '2008-12-30': {
    '1. open': '7.7500',
    '2. high': '8.8400',
    '3. low': '7.2200',
    '4. close': '8.6800',
    '5. volume': '37321'
  },
  '2008-11-27': {
    '1. open': '9.0500',
    '2. high': '10.1000',
    '3. low': '7.0800',
    '4. close': '8.0000',
    '5. volume': '25438'
  },
  '2008-10-31': {
    '1. open': '11.5500',
    '2. high': '12.1600',
    '3. low': '7.3900',
    '4. close': '8.8100',
    '5. volume': '51823'
  },
  '2008-09-30': {
    '1. open': '11.2000',
    '2. high': '11.9000',
    '3. low': '10.3000',
    '4. close': '11.0700',
    '5. volume': '30727'
  },
  '2008-08-29': {
    '1. open': '11.6200',
    '2. high': '12.2000',
    '3. low': '10.5900',
    '4. close': '11.6000',
    '5. volume': '134287'
  },
  '2008-07-30': {
    '1. open': '12.0100',
    '2. high': '12.8200',
    '3. low': '10.7500',
    '4. close': '11.8800',
    '5. volume': '67115'
  },
  '2008-06-30': {
    '1. open': '14.0600',
    '2. high': '14.4200',
    '3. low': '12.1000',
    '4. close': '12.1000',
    '5. volume': '18216'
  },
  '2008-05-30': {
    '1. open': '14.9500',
    '2. high': '15.4900',
    '3. low': '14.2300',
    '4. close': '14.7000',
    '5. volume': '26124'
  },
  '2008-04-30': {
    '1. open': '14.6600',
    '2. high': '15.1600',
    '3. low': '14.0000',
    '4. close': '14.2200',
    '5. volume': '6433'
  },
  '2008-03-28': {
    '1. open': '13.1100',
    '2. high': '14.0000',
    '3. low': '12.6800',
    '4. close': '13.7000',
    '5. volume': '7584'
  },
  '2008-02-28': {
    '1. open': '14.5000',
    '2. high': '14.5000',
    '3. low': '12.9800',
    '4. close': '14.0700',
    '5. volume': '3525'
  },
  '2008-01-31': {
    '1. open': '16.7500',
    '2. high': '16.9400',
    '3. low': '12.1000',
    '4. close': '14.0000',
    '5. volume': '136622'
  },
  '2007-12-28': {
    '1. open': '16.5600',
    '2. high': '17.4300',
    '3. low': '16.3600',
    '4. close': '16.6000',
    '5. volume': '18725'
  },
  '2007-11-27': {
    '1. open': '17.1000',
    '2. high': '17.7500',
    '3. low': '15.6900',
    '4. close': '16.0100',
    '5. volume': '12721'
  },
  '2007-10-31': {
    '1. open': '16.8400',
    '2. high': '17.9700',
    '3. low': '16.5500',
    '4. close': '16.5500',
    '5. volume': '12785'
  },
  '2007-09-27': {
    '1. open': '17.2100',
    '2. high': '17.2900',
    '3. low': '15.2000',
    '4. close': '16.1300',
    '5. volume': '12785'
  },
  '2007-08-31': {
    '1. open': '17.2900',
    '2. high': '18.2000',
    '3. low': '16.1200',
    '4. close': '16.8800',
    '5. volume': '58074'
  },
  '2007-07-31': {
    '1. open': '18.1000',
    '2. high': '18.9900',
    '3. low': '17.4600',
    '4. close': '17.5300',
    '5. volume': '49825'
  },
  '2007-06-29': {
    '1. open': '18.5100',
    '2. high': '18.8500',
    '3. low': '17.5800',
    '4. close': '18.1900',
    '5. volume': '74343'
  },
  '2007-05-31': {
    '1. open': '17.8000',
    '2. high': '18.9400',
    '3. low': '17.5000',
    '4. close': '18.7800',
    '5. volume': '148634'
  },
  '2007-04-30': {
    '1. open': '18.2900',
    '2. high': '18.8900',
    '3. low': '17.6500',
    '4. close': '17.7800',
    '5. volume': '239908'
  },
  '2007-03-30': {
    '1. open': '18.5000',
    '2. high': '18.6300',
    '3. low': '17.4100',
    '4. close': '18.4700',
    '5. volume': '185859'
  },
  '2007-02-28': {
    '1. open': '19.2200',
    '2. high': '20.2900',
    '3. low': '18.2900',
    '4. close': '18.5000',
    '5. volume': '146312'
  },
  '2007-01-31': {
    '1. open': '18.8600',
    '2. high': '19.4600',
    '3. low': '18.3700',
    '4. close': '19.0900',
    '5. volume': '84050'
  },
  '2006-12-29': {
    '1. open': '18.2500',
    '2. high': '18.6200',
    '3. low': '17.9900',
    '4. close': '18.1800',
    '5. volume': '56282'
  },
  '2006-11-30': {
    '1. open': '18.9900',
    '2. high': '19.5100',
    '3. low': '18.0200',
    '4. close': '18.2500',
    '5. volume': '48597'
  },
  '2006-10-31': {
    '1. open': '18.3300',
    '2. high': '20.1000',
    '3. low': '18.1300',
    '4. close': '18.9600',
    '5. volume': '152700'
  },
  '2006-09-29': {
    '1. open': '17.9500',
    '2. high': '18.3200',
    '3. low': '17.5500',
    '4. close': '18.2200',
    '5. volume': '48656'
  },
  '2006-08-31': {
    '1. open': '16.6000',
    '2. high': '17.8700',
    '3. low': '16.6000',
    '4. close': '17.8200',
    '5. volume': '55054'
  },
  '2006-07-31': {
    '1. open': '16.2100',
    '2. high': '16.8900',
    '3. low': '15.6700',
    '4. close': '16.6700',
    '5. volume': '68949'
  },
  '2006-06-30': {
    '1. open': '16.3500',
    '2. high': '16.3500',
    '3. low': '14.7600',
    '4. close': '15.9500',
    '5. volume': '139397'
  },
  '2006-05-31': {
    '1. open': '17.5000',
    '2. high': '17.7000',
    '3. low': '15.8600',
    '4. close': '16.0700',
    '5. volume': '84856'
  },
  '2006-04-28': {
    '1. open': '17.3000',
    '2. high': '17.5000',
    '3. low': '16.4700',
    '4. close': '17.5000',
    '5. volume': '41369'
  },
  '2006-03-31': {
    '1. open': '17.2400',
    '2. high': '17.3200',
    '3. low': '16.5200',
    '4. close': '17.2000',
    '5. volume': '53880'
  },
  '2006-02-28': {
    '1. open': '16.6300',
    '2. high': '17.1900',
    '3. low': '16.0800',
    '4. close': '17.0500',
    '5. volume': '105720'
  },
  '2006-01-31': {
    '1. open': '15.1400',
    '2. high': '16.6200',
    '3. low': '14.5200',
    '4. close': '16.5800',
    '5. volume': '90849'
  },
  '2005-12-30': {
    '1. open': '15.1300',
    '2. high': '15.1700',
    '3. low': '14.5100',
    '4. close': '15.0900',
    '5. volume': '50776'
  },
  '2005-11-30': {
    '1. open': '14.8400',
    '2. high': '15.2000',
    '3. low': '14.6200',
    '4. close': '15.0200',
    '5. volume': '41269'
  },
  '2005-10-31': {
    '1. open': '14.6000',
    '2. high': '14.8300',
    '3. low': '14.0500',
    '4. close': '14.4000',
    '5. volume': '20243'
  },
  '2005-09-30': {
    '1. open': '13.6000',
    '2. high': '14.6400',
    '3. low': '13.6000',
    '4. close': '14.6400',
    '5. volume': '94103'
  },
  '2005-08-31': {
    '1. open': '13.8800',
    '2. high': '14.1600',
    '3. low': '13.4000',
    '4. close': '13.5100',
    '5. volume': '127968'
  },
  '2005-07-29': {
    '1. open': '12.8300',
    '2. high': '14.0600',
    '3. low': '12.3500',
    '4. close': '13.9200',
    '5. volume': '68265'
  },
  '2005-06-30': {
    '1. open': '12.7300',
    '2. high': '13.0100',
    '3. low': '12.4800',
    '4. close': '12.8700',
    '5. volume': '73744'
  },
  '2005-05-31': {
    '1. open': '12.0500',
    '2. high': '12.7100',
    '3. low': '11.7200',
    '4. close': '12.6400',
    '5. volume': '80631'
  },
  '2005-04-29': {
    '1. open': '12.6700',
    '2. high': '12.8900',
    '3. low': '11.7700',
    '4. close': '11.9900',
    '5. volume': '57992'
  },
  '2005-03-31': {
    '1. open': '13.1600',
    '2. high': '13.2100',
    '3. low': '12.2500',
    '4. close': '12.6700',
    '5. volume': '36840'
  },
  '2005-02-28': {
    '1. open': '13.0100',
    '2. high': '13.6300',
    '3. low': '12.8600',
    '4. close': '13.1600',
    '5. volume': '96467'
  },
  '2005-01-28': {
    '1. open': '12.9600',
    '2. high': '13.1300',
    '3. low': '12.4600',
    '4. close': '12.7900',
    '5. volume': '89899'
  },
  '2004-12-30': {
    '1. open': '12.4300',
    '2. high': '13.1400',
    '3. low': '12.4100',
    '4. close': '13.1400',
    '5. volume': '101742'
  },
  '2004-11-30': {
    '1. open': '12.4700',
    '2. high': '12.7900',
    '3. low': '12.1100',
    '4. close': '12.3700',
    '5. volume': '92612'
  },
  '2004-10-29': {
    '1. open': '11.1000',
    '2. high': '12.4000',
    '3. low': '11.1000',
    '4. close': '12.4000',
    '5. volume': '88276'
  },
  '2004-09-29': {
    '1. open': '10.7000',
    '2. high': '11.4500',
    '3. low': '10.4500',
    '4. close': '11.0600',
    '5. volume': '15403'
  },
  '2004-08-31': {
    '1. open': '11.0300',
    '2. high': '11.0300',
    '3. low': '10.3400',
    '4. close': '11.0000',
    '5. volume': '37327'
  },
  '2004-07-30': {
    '1. open': '11.0100',
    '2. high': '11.1000',
    '3. low': '10.7200',
    '4. close': '11.0300',
    '5. volume': '13214'
  },
  '2004-06-30': {
    '1. open': '10.7700',
    '2. high': '11.2000',
    '3. low': '10.7000',
    '4. close': '11.0900',
    '5. volume': '53748'
  },
  '2004-05-27': {
    '1. open': '11.1700',
    '2. high': '11.2900',
    '3. low': '10.2500',
    '4. close': '10.9200',
    '5. volume': '39094'
  },
  '2004-04-29': {
    '1. open': '10.7600',
    '2. high': '11.5000',
    '3. low': '10.7600',
    '4. close': '11.1000',
    '5. volume': '44180'
  },
  '2004-03-31': {
    '1. open': '11.0600',
    '2. high': '11.2400',
    '3. low': '10.1800',
    '4. close': '10.8300',
    '5. volume': '53164'
  },
  '2004-02-26': {
    '1. open': '10.6300',
    '2. high': '11.2600',
    '3. low': '10.0000',
    '4. close': '10.9000',
    '5. volume': '33443'
  },
  '2004-01-29': {
    '1. open': '11.1800',
    '2. high': '11.8600',
    '3. low': '10.9000',
    '4. close': '10.9000',
    '5. volume': '67911'
  },
  '2003-12-29': {
    '1. open': '10.2000',
    '2. high': '10.8600',
    '3. low': '10.0600',
    '4. close': '10.8600',
    '5. volume': '45117'
  },
  '2003-11-28': {
    '1. open': '9.9700',
    '2. high': '10.1400',
    '3. low': '9.6000',
    '4. close': '9.9100',
    '5. volume': '45498'
  },
  '2003-10-30': {
    '1. open': '9.0700',
    '2. high': '9.8100',
    '3. low': '9.0700',
    '4. close': '9.8100',
    '5. volume': '30263'
  },
  '2003-09-30': {
    '1. open': '9.9100',
    '2. high': '10.0800',
    '3. low': '8.8500',
    '4. close': '8.8500',
    '5. volume': '51396'
  },
  '2003-08-27': {
    '1. open': '9.4800',
    '2. high': '10.5000',
    '3. low': '9.4600',
    '4. close': '9.8200',
    '5. volume': '62420'
  },
  '2003-07-31': {
    '1. open': '9.1700',
    '2. high': '9.7900',
    '3. low': '8.9000',
    '4. close': '9.7900',
    '5. volume': '76482'
  },
  '2003-06-30': {
    '1. open': '8.6400',
    '2. high': '9.5200',
    '3. low': '8.3700',
    '4. close': '9.3800',
    '5. volume': '64430'
  },
  '2003-05-30': {
    '1. open': '8.9500',
    '2. high': '8.9500',
    '3. low': '8.0000',
    '4. close': '8.5400',
    '5. volume': '22324'
  },
  '2003-04-29': {
    '1. open': '7.8900',
    '2. high': '9.6500',
    '3. low': '7.8900',
    '4. close': '9.6000',
    '5. volume': '27807'
  },
  '2003-03-31': {
    '1. open': '6.9400',
    '2. high': '8.3200',
    '3. low': '6.8400',
    '4. close': '7.7600',
    '5. volume': '44344'
  },
  '2003-02-27': {
    '1. open': '8.0000',
    '2. high': '8.0100',
    '3. low': '7.4300',
    '4. close': '7.4300',
    '5. volume': '17671'
  },
  '2003-01-31': {
    '1. open': '9.4800',
    '2. high': '9.8100',
    '3. low': '8.0000',
    '4. close': '8.1600',
    '5. volume': '16919'
  },
  '2002-12-30': {
    '1. open': '9.9300',
    '2. high': '9.9300',
    '3. low': '9.2400',
    '4. close': '9.2400',
    '5. volume': '5800'
  },
  '2002-11-28': {
    '1. open': '10.0100',
    '2. high': '10.8700',
    '3. low': '9.3300',
    '4. close': '10.8700',
    '5. volume': '21903'
  },
  '2002-10-17': {
    '1. open': '7.7700',
    '2. high': '9.4600',
    '3. low': '7.3700',
    '4. close': '9.3000',
    '5. volume': '7480'
  },
  '2002-09-30': {
    '1. open': '10.0000',
    '2. high': '10.0200',
    '3. low': '7.3500',
    '4. close': '7.6000',
    '5. volume': '15890'
  },
  '2002-08-27': {
    '1. open': '9.6000',
    '2. high': '10.6200',
    '3. low': '8.6300',
    '4. close': '10.6200',
    '5. volume': '43564'
  },
  '2002-07-31': {
    '1. open': '11.3800',
    '2. high': '11.7500',
    '3. low': '9.4000',
    '4. close': '9.5800',
    '5. volume': '41290'
  },
  '2002-06-27': {
    '1. open': '12.6000',
    '2. high': '12.6000',
    '3. low': '10.5000',
    '4. close': '11.0000',
    '5. volume': '16034'
  },
  '2002-05-29': {
    '1. open': '12.9100',
    '2. high': '14.0900',
    '3. low': '12.8900',
    '4. close': '13.2500',
    '5. volume': '285'
  },
  '2002-03-19': {
    '1. open': '13.3100',
    '2. high': '14.1000',
    '3. low': '13.3100',
    '4. close': '14.1000',
    '5. volume': '1151'
  },
  '2002-02-21': {
    '1. open': '13.6000',
    '2. high': '13.6000',
    '3. low': '12.4000',
    '4. close': '12.5000',
    '5. volume': '3900'
  },
  '2002-01-24': {
    '1. open': '14.0000',
    '2. high': '14.2000',
    '3. low': '12.0100',
    '4. close': '13.6000',
    '5. volume': '4077'
  },
  '2001-12-27': {
    '1. open': '13.1000',
    '2. high': '13.1100',
    '3. low': '13.1000',
    '4. close': '13.1100',
    '5. volume': '1100'
  },
  '2001-11-22': {
    '1. open': '12.8100',
    '2. high': '14.8000',
    '3. low': '12.8100',
    '4. close': '14.4900',
    '5. volume': '31700'
  },
  '2001-10-29': {
    '1. open': '12.4500',
    '2. high': '12.6500',
    '3. low': '12.4500',
    '4. close': '12.6500',
    '5. volume': '19626'
  },
  '2001-09-03': {
    '1. open': '14.1500',
    '2. high': '14.1500',
    '3. low': '14.1500',
    '4. close': '14.1500',
    '5. volume': '800'
  },
  '2001-07-10': {
    '1. open': '14.0000',
    '2. high': '14.0000',
    '3. low': '14.0000',
    '4. close': '14.0000',
    '5. volume': '200'
  },
  '2001-06-20': {
    '1. open': '15.5000',
    '2. high': '16.0000',
    '3. low': '15.4300',
    '4. close': '15.8500',
    '5. volume': '2324'
  },
  '2001-05-30': {
    '1. open': '16.8000',
    '2. high': '16.8000',
    '3. low': '15.8000',
    '4. close': '15.8000',
    '5. volume': '840'
  },
  '2001-04-25': {
    '1. open': '14.6000',
    '2. high': '15.2000',
    '3. low': '14.1000',
    '4. close': '15.1000',
    '5. volume': '787'
  },
  '2001-03-21': {
    '1. open': '16.4400',
    '2. high': '16.4400',
    '3. low': '14.2000',
    '4. close': '14.2000',
    '5. volume': '415'
  },
  '2001-02-12': {
    '1. open': '16.4100',
    '2. high': '17.3000',
    '3. low': '16.4100',
    '4. close': '17.3000',
    '5. volume': '1197'
  },
  '2001-01-31': {
    '1. open': '16.6000',
    '2. high': '17.4000',
    '3. low': '16.6000',
    '4. close': '17.4000',
    '5. volume': '1413'
  },
  '2000-12-11': {
    '1. open': '16.3000',
    '2. high': '16.6000',
    '3. low': '16.3000',
    '4. close': '16.5000',
    '5. volume': '500'
  },
  '2000-11-30': {
    '1. open': '18.0000',
    '2. high': '18.0000',
    '3. low': '15.0000',
    '4. close': '15.0000',
    '5. volume': '1077'
  },
  '2000-10-27': {
    '1. open': '17.3000',
    '2. high': '18.0000',
    '3. low': '15.0000',
    '4. close': '15.0500',
    '5. volume': '1250'
  },
  '2000-09-26': {
    '1. open': '17.5000',
    '2. high': '18.0500',
    '3. low': '16.7500',
    '4. close': '17.3000',
    '5. volume': '2761'
  },
  '2000-08-29': {
    '1. open': '16.1500',
    '2. high': '17.5000',
    '3. low': '15.4000',
    '4. close': '15.4000',
    '5. volume': '3715'
  },
  '2000-07-25': {
    '1. open': '15.4000',
    '2. high': '16.2000',
    '3. low': '15.4000',
    '4. close': '16.2000',
    '5. volume': '1650'
  },
  '2000-06-19': {
    '1. open': '15.4000',
    '2. high': '15.4000',
    '3. low': '15.4000',
    '4. close': '15.4000',
    '5. volume': '1300'
  },
  '2000-05-19': {
    '1. open': '14.1500',
    '2. high': '16.0000',
    '3. low': '14.0000',
    '4. close': '15.4000',
    '5. volume': '1300'
  },
  '2000-04-27': {
    '1. open': '14.4000',
    '2. high': '14.4000',
    '3. low': '14.1500',
    '4. close': '14.1500',
    '5. volume': '2200'
  },
  '2000-03-06': {
    '1. open': '15.5000',
    '2. high': '15.8000',
    '3. low': '14.4000',
    '4. close': '14.4000',
    '5. volume': '940'
  },
  '2000-02-25': {
    '1. open': '13.4200',
    '2. high': '16.0000',
    '3. low': '13.4000',
    '4. close': '14.9500',
    '5. volume': '2776'
  },
  '2000-01-28': {
    '1. open': '15.5000',
    '2. high': '15.5000',
    '3. low': '13.5000',
    '4. close': '13.5000',
    '5. volume': '3500'
  }
};

// tslint:disable:max-line-length
export const bbvaCompany: Company = {
  id: 1176,
  name: 'Banco Bilbao Vizcaya Argentaria (BBVA) S.A.',
  country: Country.Spanien,
  city: 'Bilbao',
  url: 'http://www.bbva.com/',
  description: 'Banco Bilbao Vizcaya Argentaria (BBVA) ist ein Kreditinstitut und ein Unternehmen für Finanzdienstleistungen mit einer mehr als 150-jährigen Geschichte. Es ist die zweitgrößte Bank in Spanien, eine der größten Banken Lateinamerikas, der USA und der Welt und hat ihren rechtlichen Sitz in Bilbao sowie den operativen Sitz in Madrid. Die Bank hat mehr als 110.000 Angestellte und 47 Millionen Kunden in der ganzen Welt.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Banco_Bilbao_Vizcaya_Argentaria',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/BBVA_2019.svg/500px-BBVA_2019.svg.png',
  products: [],
  industries: [141010, 141011],
  isharesIndustryName: IsharesIndustryNames.Financials,
  securityType: SecurityType.AccionesNom,
  currency: Currency.EUR,
  isin: 'ES0113211835',
  wkn: '875773',
  symbol: 'BOY.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.MSCIEuropeSRI],
  end_of_month_prices: prices,
  dividends,
  tags: ['Universalbank', 'Privatkunden', 'Firmenkundengeschäft', 'Europa', 'Lateinamerika']
};
// tslint:enable:max-line-length

