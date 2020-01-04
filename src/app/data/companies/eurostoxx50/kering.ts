import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 10.50, yield: 2.67}, {year: 2017, rate: 6.00}, {year: 2016, rate: 4.60}, {
    year: 2015,
    rate: 4.00,
    yield: 2.49
  }, {year: 2014, rate: 4.00, yield: 2.51}, {year: 2013, rate: 3.75, yield: 2.44}, {year: 2012, rate: 3.75, yield: 2.66}, {
    year: 2011,
    rate: 3.50,
    yield: 3.16
  }, {year: 2010, rate: 3.50, yield: 2.94}, {year: 2009, rate: 3.30, yield: 4.00}, {year: 2008, rate: 3.30, yield: 7.08}, {
    year: 2007,
    rate: 3.45,
    yield: 3.14
  }, {year: 2006, rate: 3.00, yield: 2.65}, {year: 2005, rate: 2.72, yield: 2.86}, {year: 2004, rate: 2.52, yield: 3.42}, {
    year: 2003,
    rate: 2.40,
    yield: 3.13
  }, {year: 2002, rate: 2.30, yield: 3.28}, {year: 2001, rate: 2.30, yield: 1.59}, {year: 2000, rate: 2.18, yield: 0.95}
];
const prices = {
  '2019-11-29': {
    '1. open': '514.0000',
    '2. high': '552.7000',
    '3. low': '514.0000',
    '4. close': '547.1000',
    '5. volume': '14302'
  },
  '2019-10-31': {
    '1. open': '470.1500',
    '2. high': '522.0000',
    '3. low': '435.0000',
    '4. close': '509.8000',
    '5. volume': '7052'
  },
  '2019-09-30': {
    '1. open': '439.6000',
    '2. high': '479.5000',
    '3. low': '428.3500',
    '4. close': '467.6500',
    '5. volume': '3730'
  },
  '2019-08-30': {
    '1. open': '465.4000',
    '2. high': '473.1500',
    '3. low': '421.0000',
    '4. close': '440.4000',
    '5. volume': '8396'
  },
  '2019-07-31': {
    '1. open': '530.8000',
    '2. high': '534.0000',
    '3. low': '464.3000',
    '4. close': '469.6000',
    '5. volume': '8942'
  },
  '2019-06-28': {
    '1. open': '460.8000',
    '2. high': '521.5000',
    '3. low': '459.5500',
    '4. close': '520.0000',
    '5. volume': '5873'
  },
  '2019-05-31': {
    '1. open': '523.5000',
    '2. high': '526.0000',
    '3. low': '457.7000',
    '4. close': '457.9000',
    '5. volume': '5423'
  },
  '2019-04-30': {
    '1. open': '521.1000',
    '2. high': '539.2000',
    '3. low': '505.6000',
    '4. close': '525.0000',
    '5. volume': '6148'
  },
  '2019-03-29': {
    '1. open': '493.0000',
    '2. high': '511.4000',
    '3. low': '485.0000',
    '4. close': '511.4000',
    '5. volume': '14813'
  },
  '2019-02-28': {
    '1. open': '440.3000',
    '2. high': '487.1000',
    '3. low': '436.1000',
    '4. close': '480.2000',
    '5. volume': '5206'
  },
  '2019-01-31': {
    '1. open': '403.1000',
    '2. high': '437.5000',
    '3. low': '380.9000',
    '4. close': '437.5000',
    '5. volume': '5372'
  },
  '2018-12-28': {
    '1. open': '404.4000',
    '2. high': '416.0000',
    '3. low': '384.8000',
    '4. close': '385.6000',
    '5. volume': '7763'
  },
  '2018-11-30': {
    '1. open': '396.6000',
    '2. high': '426.7000',
    '3. low': '370.2000',
    '4. close': '384.0000',
    '5. volume': '10572'
  },
  '2018-10-31': {
    '1. open': '467.4000',
    '2. high': '468.5000',
    '3. low': '353.0000',
    '4. close': '393.6000',
    '5. volume': '25121'
  },
  '2018-09-28': {
    '1. open': '467.0000',
    '2. high': '467.0000',
    '3. low': '430.0000',
    '4. close': '461.8000',
    '5. volume': '5400'
  },
  '2018-08-31': {
    '1. open': '456.4000',
    '2. high': '483.1000',
    '3. low': '450.9000',
    '4. close': '467.9000',
    '5. volume': '3936'
  },
  '2018-07-31': {
    '1. open': '476.0000',
    '2. high': '507.6000',
    '3. low': '453.1000',
    '4. close': '456.1000',
    '5. volume': '7270'
  },
  '2018-06-29': {
    '1. open': '493.8000',
    '2. high': '519.0000',
    '3. low': '468.7500',
    '4. close': '483.9000',
    '5. volume': '4335'
  },
  '2018-05-31': {
    '1. open': '449.8270',
    '2. high': '492.5000',
    '3. low': '444.3410',
    '4. close': '489.6000',
    '5. volume': '9723'
  },
  '2018-04-30': {
    '1. open': '363.0780',
    '2. high': '444.9920',
    '3. low': '363.0780',
    '4. close': '444.2480',
    '5. volume': '4014'
  },
  '2018-03-29': {
    '1. open': '363.0780',
    '2. high': '368.3780',
    '3. low': '348.7600',
    '4. close': '360.3820',
    '5. volume': '1801'
  },
  '2018-02-28': {
    '1. open': '379.8150',
    '2. high': '379.8150',
    '3. low': '334.7200',
    '4. close': '362.8930',
    '5. volume': '5411'
  },
  '2018-01-31': {
    '1. open': '353.4090',
    '2. high': '385.2070',
    '3. low': '353.4090',
    '4. close': '378.5130',
    '5. volume': '3320'
  },
  '2017-12-29': {
    '1. open': '353.4090',
    '2. high': '353.4090',
    '3. low': '353.4090',
    '4. close': '353.4090',
    '5. volume': '0'
  },
  '2017-11-30': {
    '1. open': '367.2160',
    '2. high': '377.6300',
    '3. low': '352.7110',
    '4. close': '353.4090',
    '5. volume': '2127'
  },
  '2017-10-31': {
    '1. open': '315.0550',
    '2. high': '370.1910',
    '3. low': '313.5680',
    '4. close': '369.2620',
    '5. volume': '2033'
  },
  '2017-09-29': {
    '1. open': '295.6700',
    '2. high': '311.9410',
    '3. low': '292.6480',
    '4. close': '311.3360',
    '5. volume': '4273'
  },
  '2017-08-31': {
    '1. open': '274.3780',
    '2. high': '293.8100',
    '3. low': '274.3780',
    '4. close': '293.2060',
    '5. volume': '1510'
  },
  '2017-07-31': {
    '1. open': '281.3510',
    '2. high': '291.7180',
    '3. low': '272.3320',
    '4. close': '274.3780',
    '5. volume': '1821'
  },
  '2017-06-30': {
    '1. open': '274.8430',
    '2. high': '290.3230',
    '3. low': '272.0070',
    '4. close': '282.4200',
    '5. volume': '1560'
  },
  '2017-05-31': {
    '1. open': '264.7080',
    '2. high': '274.6570',
    '3. low': '263.4990',
    '4. close': '274.6570',
    '5. volume': '3202'
  },
  '2017-04-28': {
    '1. open': '225.5180',
    '2. high': '264.8470',
    '3. low': '225.0060',
    '4. close': '264.8470',
    '5. volume': '3207'
  },
  '2017-03-31': {
    '1. open': '218.4980',
    '2. high': '224.9130',
    '3. low': '216.1730',
    '4. close': '224.9130',
    '5. volume': '2311'
  },
  '2017-02-28': {
    '1. open': '206.9690',
    '2. high': '217.7540',
    '3. low': '206.4110',
    '4. close': '215.5230',
    '5. volume': '1276'
  },
  '2017-01-31': {
    '1. open': '199.2980',
    '2. high': '214.9650',
    '3. low': '199.2980',
    '4. close': '213.8960',
    '5. volume': '27370'
  },
  '2016-12-30': {
    '1. open': '189.0240',
    '2. high': '199.2980',
    '3. low': '189.0240',
    '4. close': '199.2980',
    '5. volume': '476'
  },
  '2016-11-30': {
    '1. open': '187.2110',
    '2. high': '189.0240',
    '3. low': '180.6090',
    '4. close': '189.0240',
    '5. volume': '932'
  },
  '2016-10-31': {
    '1. open': '168.1970',
    '2. high': '188.0010',
    '3. low': '168.1970',
    '4. close': '187.2110',
    '5. volume': '2030'
  },
  '2016-09-30': {
    '1. open': '158.4340',
    '2. high': '165.7790',
    '3. low': '158.4340',
    '4. close': '165.1290',
    '5. volume': '257'
  },
  '2016-08-31': {
    '1. open': '157.5510',
    '2. high': '162.7110',
    '3. low': '156.1560',
    '4. close': '158.4340',
    '5. volume': '1184'
  },
  '2016-07-29': {
    '1. open': '137.2820',
    '2. high': '158.5740',
    '3. low': '135.0040',
    '4. close': '157.5510',
    '5. volume': '1596'
  },
  '2016-06-30': {
    '1. open': '134.6780',
    '2. high': '141.6050',
    '3. low': '134.6780',
    '4. close': '141.6050',
    '5. volume': '148'
  },
  '2016-05-31': {
    '1. open': '138.2580',
    '2. high': '138.2580',
    '3. low': '132.2610',
    '4. close': '132.2610',
    '5. volume': '1157'
  },
  '2016-04-29': {
    '1. open': '151.6000',
    '2. high': '151.6000',
    '3. low': '137.6070',
    '4. close': '138.2580',
    '5. volume': '569'
  },
  '2016-03-31': {
    '1. open': '149.4620',
    '2. high': '153.5060',
    '3. low': '149.4620',
    '4. close': '151.6000',
    '5. volume': '916'
  },
  '2016-02-29': {
    '1. open': '134.8640',
    '2. high': '151.6470',
    '3. low': '134.8640',
    '4. close': '143.1390',
    '5. volume': '532'
  },
  '2016-01-29': {
    '1. open': '147.1370',
    '2. high': '147.1370',
    '3. low': '132.9580',
    '4. close': '134.8640',
    '5. volume': '90'
  },
  '2015-12-30': {
    '1. open': '155.4590',
    '2. high': '155.4590',
    '3. low': '146.7660',
    '4. close': '147.1370',
    '5. volume': '302'
  },
  '2015-11-30': {
    '1. open': '157.8760',
    '2. high': '160.4800',
    '3. low': '154.6690',
    '4. close': '155.4590',
    '5. volume': '480'
  },
  '2015-10-30': {
    '1. open': '133.4230',
    '2. high': '159.7360',
    '3. low': '133.4230',
    '4. close': '157.8760',
    '5. volume': '4379'
  },
  '2015-09-30': {
    '1. open': '135.5620',
    '2. high': '135.5620',
    '3. low': '133.4230',
    '4. close': '133.4230',
    '5. volume': '217'
  },
  '2015-08-31': {
    '1. open': '163.7800',
    '2. high': '165.7790',
    '3. low': '136.8630',
    '4. close': '144.4410',
    '5. volume': '1983'
  },
  '2015-07-31': {
    '1. open': '150.6240',
    '2. high': '158.3880',
    '3. low': '148.4860',
    '4. close': '157.0400',
    '5. volume': '356'
  },
  '2015-06-30': {
    '1. open': '151.3210',
    '2. high': '151.3210',
    '3. low': '143.0460',
    '4. close': '150.6240',
    '5. volume': '821'
  },
  '2015-05-29': {
    '1. open': '153.4130',
    '2. high': '157.0860',
    '3. low': '148.7650',
    '4. close': '151.3210',
    '5. volume': '723'
  },
  '2015-04-30': {
    '1. open': '177.4480',
    '2. high': '177.4480',
    '3. low': '154.4830',
    '4. close': '154.9940',
    '5. volume': '5001'
  },
  '2015-03-31': {
    '1. open': '166.1050',
    '2. high': '182.6550',
    '3. low': '166.1050',
    '4. close': '177.4480',
    '5. volume': '428'
  },
  '2015-02-27': {
    '1. open': '165.5010',
    '2. high': '171.3580',
    '3. low': '164.4310',
    '4. close': '166.1050',
    '5. volume': '1177'
  },
  '2015-01-30': {
    '1. open': '145.1380',
    '2. high': '167.4530',
    '3. low': '142.5820',
    '4. close': '167.4530',
    '5. volume': '735'
  },
  '2014-12-30': {
    '1. open': '154.0640',
    '2. high': '154.1110',
    '3. low': '145.1380',
    '4. close': '145.1380',
    '5. volume': '552'
  },
  '2014-11-28': {
    '1. open': '135.4690',
    '2. high': '154.0640',
    '3. low': '135.4690',
    '4. close': '154.0640',
    '5. volume': '9521'
  },
  '2014-10-31': {
    '1. open': '148.8580',
    '2. high': '148.8580',
    '3. low': '131.9820',
    '4. close': '135.4690',
    '5. volume': '1141'
  },
  '2014-09-30': {
    '1. open': '149.8800',
    '2. high': '151.5540',
    '3. low': '149.2290',
    '4. close': '149.3220',
    '5. volume': '859'
  },
  '2014-08-29': {
    '1. open': '146.3470',
    '2. high': '148.7650',
    '3. low': '143.4650',
    '4. close': '143.4650',
    '5. volume': '257'
  },
  '2014-07-31': {
    '1. open': '152.5770',
    '2. high': '152.5770',
    '3. low': '143.8830',
    '4. close': '144.9520',
    '5. volume': '159'
  },
  '2014-06-30': {
    '1. open': '150.3450',
    '2. high': '152.5770',
    '3. low': '147.7880',
    '4. close': '152.5770',
    '5. volume': '194'
  },
  '2014-05-30': {
    '1. open': '147.9280',
    '2. high': '150.8100',
    '3. low': '142.3030',
    '4. close': '150.3450',
    '5. volume': '110'
  },
  '2014-04-30': {
    '1. open': '129.7510',
    '2. high': '148.9040',
    '3. low': '129.7510',
    '4. close': '148.9040',
    '5. volume': '370'
  },
  '2014-03-31': {
    '1. open': '135.7480',
    '2. high': '138.8160',
    '3. low': '129.1460',
    '4. close': '129.7510',
    '5. volume': '630'
  },
  '2014-02-28': {
    '1. open': '133.8880',
    '2. high': '143.4180',
    '3. low': '133.8880',
    '4. close': '141.7450',
    '5. volume': '244'
  },
  '2014-01-31': {
    '1. open': '141.4190',
    '2. high': '141.4190',
    '3. low': '132.7260',
    '4. close': '133.8880',
    '5. volume': '480'
  },
  '2013-12-30': {
    '1. open': '151.2280',
    '2. high': '151.2280',
    '3. low': '139.1880',
    '4. close': '141.4190',
    '5. volume': '737'
  },
  '2013-11-29': {
    '1. open': '156.1560',
    '2. high': '156.6210',
    '3. low': '150.6710',
    '4. close': '151.2280',
    '5. volume': '804'
  },
  '2013-10-31': {
    '1. open': '157.7830',
    '2. high': '157.7830',
    '3. low': '152.5300',
    '4. close': '156.4350',
    '5. volume': '851'
  },
  '2013-09-30': {
    '1. open': '157.7830',
    '2. high': '157.7830',
    '3. low': '157.7830',
    '4. close': '157.7830',
    '5. volume': '0'
  },
  '2013-08-30': {
    '1. open': '157.7830',
    '2. high': '157.7830',
    '3. low': '157.7830',
    '4. close': '157.7830',
    '5. volume': '0'
  },
  '2013-07-31': {
    '1. open': '145.7890',
    '2. high': '158.4810',
    '3. low': '145.7890',
    '4. close': '157.7830',
    '5. volume': '2772'
  },
  '2013-06-28': {
    '1. open': '154.2040',
    '2. high': '155.0870',
    '3. low': '145.5570',
    '4. close': '149.6940',
    '5. volume': '1989'
  },
  '2013-05-31': {
    '1. open': '154.6220',
    '2. high': '166.2910',
    '3. low': '154.6220',
    '4. close': '158.8530',
    '5. volume': '1531'
  },
  '2013-04-30': {
    '1. open': '160.9910',
    '2. high': '163.0830',
    '3. low': '151.8330',
    '4. close': '154.6220',
    '5. volume': '1949'
  },
  '2013-03-28': {
    '1. open': '160.5260',
    '2. high': '166.5230',
    '3. low': '160.5260',
    '4. close': '165.5010',
    '5. volume': '1868'
  },
  '2013-02-28': {
    '1. open': '148.0210',
    '2. high': '161.7810',
    '3. low': '148.0210',
    '4. close': '159.4570',
    '5. volume': '830'
  },
  '2013-01-31': {
    '1. open': '131.3310',
    '2. high': '147.2770',
    '3. low': '131.3310',
    '4. close': '146.8120',
    '5. volume': '2675'
  },
  '2012-12-28': {
    '1. open': '133.1910',
    '2. high': '134.0280',
    '3. low': '131.0990',
    '4. close': '131.3310',
    '5. volume': '840'
  },
  '2012-11-30': {
    '1. open': '127.1010',
    '2. high': '133.1440',
    '3. low': '124.1250',
    '4. close': '132.9580',
    '5. volume': '2725'
  },
  '2012-10-31': {
    '1. open': '112.7360',
    '2. high': '126.4030',
    '3. low': '112.7360',
    '4. close': '126.0310',
    '5. volume': '7180'
  },
  '2012-09-28': {
    '1. open': '115.6180',
    '2. high': '118.1280',
    '3. low': '112.0850',
    '4. close': '112.7360',
    '5. volume': '708'
  },
  '2012-08-31': {
    '1. open': '113.7120',
    '2. high': '119.0120',
    '3. low': '113.7120',
    '4. close': '115.6180',
    '5. volume': '4811'
  },
  '2012-07-31': {
    '1. open': '102.8340',
    '2. high': '114.3630',
    '3. low': '99.6258',
    '4. close': '113.2010',
    '5. volume': '3668'
  },
  '2012-06-29': {
    '1. open': '106.6460',
    '2. high': '109.5280',
    '3. low': '101.9970',
    '4. close': '102.8340',
    '5. volume': '2509'
  },
  '2012-05-31': {
    '1. open': '117.3850',
    '2. high': '117.3850',
    '3. low': '106.9250',
    '4. close': '106.9250',
    '5. volume': '3433'
  },
  '2012-04-30': {
    '1. open': '124.2180',
    '2. high': '124.2180',
    '3. low': '108.3660',
    '4. close': '117.3850',
    '5. volume': '3004'
  },
  '2012-03-30': {
    '1. open': '119.4770',
    '2. high': '126.4030',
    '3. low': '118.5470',
    '4. close': '124.2180',
    '5. volume': '1251'
  },
  '2012-02-29': {
    '1. open': '114.8280',
    '2. high': '119.4770',
    '3. low': '111.1550',
    '4. close': '119.4770',
    '5. volume': '2592'
  },
  '2012-01-31': {
    '1. open': '104.4140',
    '2. high': '112.0380',
    '3. low': '104.4140',
    '4. close': '110.3180',
    '5. volume': '2836'
  },
  '2011-12-30': {
    '1. open': '96.7899',
    '2. high': '103.8100',
    '3. low': '96.7899',
    '4. close': '102.9730',
    '5. volume': '1162'
  },
  '2011-11-30': {
    '1. open': '100.9740',
    '2. high': '104.1350',
    '3. low': '94.7909',
    '4. close': '96.7899',
    '5. volume': '4243'
  },
  '2011-10-31': {
    '1. open': '86.7018',
    '2. high': '109.3420',
    '3. low': '86.7018',
    '4. close': '104.6930',
    '5. volume': '723'
  },
  '2011-09-29': {
    '1. open': '107.3890',
    '2. high': '107.3890',
    '3. low': '95.4883',
    '4. close': '97.1154',
    '5. volume': '1926'
  },
  '2011-08-29': {
    '1. open': '116.1760',
    '2. high': '116.1760',
    '3. low': '95.9531',
    '4. close': '103.0660',
    '5. volume': '1357'
  },
  '2011-07-28': {
    '1. open': '115.1530',
    '2. high': '121.4760',
    '3. low': '112.3170',
    '4. close': '119.6160',
    '5. volume': '5821'
  },
  '2011-06-30': {
    '1. open': '110.2720',
    '2. high': '114.1770',
    '3. low': '105.7160',
    '4. close': '114.1770',
    '5. volume': '2256'
  },
  '2011-05-30': {
    '1. open': '113.6190',
    '2. high': '114.8280',
    '3. low': '107.9940',
    '4. close': '108.0870',
    '5. volume': '5893'
  },
  '2011-04-29': {
    '1. open': '102.7410',
    '2. high': '112.3170',
    '3. low': '102.7410',
    '4. close': '112.1780',
    '5. volume': '1808'
  },
  '2011-03-21': {
    '1. open': '102.8340',
    '2. high': '103.2980',
    '3. low': '92.0016',
    '4. close': '96.2321',
    '5. volume': '2026'
  },
  '2011-02-28': {
    '1. open': '108.5980',
    '2. high': '109.2020',
    '3. low': '102.1830',
    '4. close': '102.1830',
    '5. volume': '1987'
  },
  '2011-01-28': {
    '1. open': '112.2710',
    '2. high': '113.0150',
    '3. low': '105.6230',
    '4. close': '107.0640',
    '5. volume': '4804'
  },
  '2010-12-30': {
    '1. open': '114.8280',
    '2. high': '119.1510',
    '3. low': '110.7830',
    '4. close': '111.5270',
    '5. volume': '2879'
  },
  '2010-11-30': {
    '1. open': '109.8070',
    '2. high': '115.8040',
    '3. low': '104.5540',
    '4. close': '114.6420',
    '5. volume': '3405'
  },
  '2010-10-28': {
    '1. open': '107.3890',
    '2. high': '111.1550',
    '3. low': '105.0650',
    '4. close': '110.5970',
    '5. volume': '2519'
  },
  '2010-09-30': {
    '1. open': '98.3706',
    '2. high': '111.5270',
    '3. low': '97.9986',
    '4. close': '111.5270',
    '5. volume': '3336'
  },
  '2010-08-31': {
    '1. open': '98.7425',
    '2. high': '99.1144',
    '3. low': '92.9779',
    '4. close': '94.9304',
    '5. volume': '1182'
  },
  '2010-07-22': {
    '1. open': '92.6245',
    '2. high': '94.8374',
    '3. low': '90.8858',
    '4. close': '93.4892',
    '5. volume': '1692'
  },
  '2010-06-30': {
    '1. open': '93.9541',
    '2. high': '101.2060',
    '3. low': '90.8115',
    '4. close': '95.1163',
    '5. volume': '3961'
  },
  '2010-05-28': {
    '1. open': '94.5585',
    '2. high': '98.1846',
    '3. low': '83.7916',
    '4. close': '89.9561',
    '5. volume': '9235'
  },
  '2010-04-30': {
    '1. open': '92.2805',
    '2. high': '102.3690',
    '3. low': '92.1968',
    '4. close': '95.1628',
    '5. volume': '4749'
  },
  '2010-03-31': {
    '1. open': '79.5054',
    '2. high': '91.5274',
    '3. low': '79.5054',
    '4. close': '91.5274',
    '5. volume': '5846'
  },
  '2010-02-26': {
    '1. open': '82.4900',
    '2. high': '82.4900',
    '3. low': '75.8885',
    '4. close': '76.6416',
    '5. volume': '2351'
  },
  '2010-01-29': {
    '1. open': '78.9382',
    '2. high': '84.3960',
    '3. low': '78.6314',
    '4. close': '82.7968',
    '5. volume': '2567'
  },
  '2009-12-30': {
    '1. open': '76.6323',
    '2. high': '77.8968',
    '3. low': '75.2935',
    '4. close': '76.9485',
    '5. volume': '853'
  },
  '2009-11-30': {
    '1. open': '77.7016',
    '2. high': '77.7016',
    '3. low': '75.0982',
    '4. close': '75.5910',
    '5. volume': '542'
  },
  '2009-08-17': {
    '1. open': '71.7789',
    '2. high': '71.7789',
    '3. low': '71.7789',
    '4. close': '71.7789',
    '5. volume': '70'
  },
  '2008-12-23': {
    '1. open': '34.6343',
    '2. high': '43.6996',
    '3. low': '30.1248',
    '4. close': '42.7419',
    '5. volume': '2360'
  },
  '2008-11-28': {
    '1. open': '44.1645',
    '2. high': '46.4889',
    '3. low': '29.9946',
    '4. close': '35.1456',
    '5. volume': '3527'
  },
  '2008-10-31': {
    '1. open': '57.6463',
    '2. high': '57.6463',
    '3. low': '34.5506',
    '4. close': '44.7038',
    '5. volume': '4600'
  },
  '2008-09-26': {
    '1. open': '72.0113',
    '2. high': '72.8017',
    '3. low': '62.1092',
    '4. close': '62.1650',
    '5. volume': '4432'
  },
  '2008-08-29': {
    '1. open': '73.7779',
    '2. high': '74.6240',
    '3. low': '68.8408',
    '4. close': '74.6240',
    '5. volume': '553'
  },
  '2008-07-25': {
    '1. open': '59.5988',
    '2. high': '67.5856',
    '3. low': '53.7133',
    '4. close': '66.1072',
    '5. volume': '4036'
  },
  '2008-06-30': {
    '1. open': '78.9103',
    '2. high': '80.4258',
    '3. low': '64.1454',
    '4. close': '65.5959',
    '5. volume': '5616'
  },
  '2008-05-30': {
    '1. open': '78.5477',
    '2. high': '83.6801',
    '3. low': '75.7769',
    '4. close': '77.2646',
    '5. volume': '2859'
  },
  '2008-04-30': {
    '1. open': '81.7926',
    '2. high': '81.7926',
    '3. low': '76.1954',
    '4. close': '77.1716',
    '5. volume': '3520'
  },
  '2008-03-27': {
    '1. open': '84.1543',
    '2. high': '87.1388',
    '3. low': '76.9857',
    '4. close': '87.1388',
    '5. volume': '2689'
  },
  '2008-02-29': {
    '1. open': '87.9292',
    '2. high': '90.2815',
    '3. low': '83.0292',
    '4. close': '84.8609',
    '5. volume': '6565'
  },
  '2008-01-31': {
    '1. open': '102.0620',
    '2. high': '102.7780',
    '3. low': '76.3348',
    '4. close': '87.8641',
    '5. volume': '8843'
  }
};

// tslint:disable:max-line-length
export const keringCompany: Company = {
  id: 1188,
  name: 'Kering S.A.',
  country: Country.Frankreich,
  city: 'Paris',
  url: 'http://www.kering.com/',
  description: 'Kering ([kɛːʁiŋ], bis 2013: PPR S.A.) ist ein französischer, weltweit agierender Mode- und Accessoires-Konzern. Das in Paris ansässige Unternehmen wurde 1963 von dem französischen Unternehmer François Pinault gegründet und bis 2005 von diesem geführt. Seit dem 21. März 2005 wird der Konzern von Pinaults Sohn, François-Henri Pinault, geleitet. Zu Kering gehören durch zahlreiche Unternehmensübernahmen heute unter anderem international bekannte Mode-, Sport- und Accessoiresmarken sowie renommierte Schmuckhersteller und Uhrenmanufakturen des gehobenen Segments.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Kering_(Unternehmen)',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Kering-logo.svg/500px-Kering-logo.svg.png',
  products: [
    {
      id: 118810,
      name: 'Gucci',
      logo: 'https://keringcorporate.dam.kering.com/m/0aa8c6ba29b06e68/original/GUCCI-STORY-BRAND-DESKTOP.png',
      segment: 101411
    },
    {
      id: 118811,
      name: 'Saint Laurent',
      logo: 'https://keringcorporate.dam.kering.com/m/17f9d278713d0ea9/original/STORY-BRAND-DESKTOP.png',
      segment: 101411
    },
    {
      id: 118812,
      name: 'Bottega Veneta',
      logo: 'https://keringcorporate.dam.kering.com/m/476ddb1df7ff0ad6/original/100x100-LOGO.png',
      segment: 101411
    },
    {
      id: 118813,
      name: 'Balenciaga',
      logo: 'https://keringcorporate.dam.kering.com/m/23d27d1e0d6a218e/original/BAL_STORY-BRAND-DESKTOP.png',
      segment: 101411
    },
    {
      id: 118814,
      name: 'Alexander McQueen',
      logo: 'https://keringcorporate.dam.kering.com/m/5250d61940ecae52/original/LOGO-DESKTOP-AMQ-V2.png',
      segment: 101411
    },
    {
      id: 118815,
      name: 'Brioni',
      logo: 'https://keringcorporate.dam.kering.com/m/3b0f97403f5960c2/original/BRIONI-STORY-BRAND-DESKTOP.png',
      segment: 101411
    },
    {
      id: 118816,
      name: 'Boucheron',
      logo: 'https://keringcorporate.dam.kering.com/m/610ca07938b78681/original/STORY-BRAND-DESKTOP-BOUCHERON.png',
      segment: 101414
    },
    {
      id: 118817,
      name: 'Pomellato',
      logo: 'https://keringcorporate.dam.kering.com/m/086bee0b10b62997/original/DESKTOP-1POMELLATO.png',
      segment: 101414
    },
    {
      id: 118818,
      name: 'DoDo',
      logo: 'https://keringcorporate.dam.kering.com/m/4c77da3e13be9a57/original/1DODO.png',
      segment: 101414
    },
    {
      id: 118819,
      name: 'Qeelin',
      logo: 'https://keringcorporate.dam.kering.com/m/05cdeefe65bac441/original/DESKTOP-1QEELIN.png',
      segment: 101414
    },
    {
      id: 118820,
      name: 'Ulysse-Nardin',
      logo: 'https://keringcorporate.dam.kering.com/m/1b239e8a009c5aa5/original/LOGO-DESKTOP-ULYSSE-NARDIN-V2.png',
      segment: 101413
    },
    {
      id: 118821,
      name: 'Girard Perregaux',
      logo: 'https://keringcorporate.dam.kering.com/m/4bd7377c62d1b767/original/Logo-GP-100x100-Stories.jpg',
      segment: 101413
    },
    {
      id: 118822,
      name: 'Kering Eyewear',
      logo: 'https://keringcorporate.dam.kering.com/m/2fb195ea433085a8/original/STORY-BRAND-DESKTOP.png',
      segment: 101412
    }
  ],
  industries: [101410, 101411],
  securityType: SecurityType.ActionsPort,
  currency: Currency.EUR,
  isin: 'FR0000121485',
  wkn: '851223',
  symbol: 'PPX.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.MSCIWorld, Indices.DowJonesSustainabilityEurozone],
  end_of_month_prices: prices,
  dividends,
  tags: ['Großhandelsunternehmen', 'Luxusprodukte', 'Sportprodukte', 'Lifestyleprodukte', 'Luxusmarken', 'Sport', 'Lifestyle']
};
// tslint:enable:max-line-length

