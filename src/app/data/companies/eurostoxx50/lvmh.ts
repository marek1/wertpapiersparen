import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 6.00, yield: 2.38}, {year: 2017, rate: 5.00}, {year: 2016, rate: 4.00}, {
    year: 2015,
    rate: 3.55,
    yield: 2.41
  }, {year: 2014, rate: 3.20, yield: 2.42}, {year: 2013, rate: 3.10, yield: 2.34}, {year: 2012, rate: 2.90, yield: 2.09}, {
    year: 2011,
    rate: 2.60,
    yield: 2.38
  }, {year: 2010, rate: 2.10, yield: 1.71}, {year: 2009, rate: 1.65, yield: 2.11}, {year: 2008, rate: 1.60, yield: 3.35}, {
    year: 2007,
    rate: 1.60,
    yield: 1.94
  }, {year: 2006, rate: 1.40, yield: 1.75}, {year: 2005, rate: 1.15, yield: 1.53}, {year: 2004, rate: 0.95, yield: 1.69}, {
    year: 2003,
    rate: 0.85,
    yield: 1.47
  }, {year: 2002, rate: 0.80, yield: 2.04}, {year: 2001, rate: 0.75, yield: 1.64}, {year: 2000, rate: 0.75, yield: 1.06}
];
const prices = {
  '2019-11-29': {
    '1. open': '386.0500',
    '2. high': '411.0000',
    '3. low': '384.1000',
    '4. close': '407.7000',
    '5. volume': '65795'
  },
  '2019-10-31': {
    '1. open': '365.5000',
    '2. high': '389.6500',
    '3. low': '344.4500',
    '4. close': '383.8500',
    '5. volume': '59985'
  },
  '2019-09-30': {
    '1. open': '364.0000',
    '2. high': '384.2500',
    '3. low': '355.0000',
    '4. close': '365.2500',
    '5. volume': '35996'
  },
  '2019-08-30': {
    '1. open': '374.4500',
    '2. high': '379.1000',
    '3. low': '341.7000',
    '4. close': '362.3500',
    '5. volume': '66310'
  },
  '2019-07-31': {
    '1. open': '381.7500',
    '2. high': '391.9000',
    '3. low': '370.9500',
    '4. close': '375.3000',
    '5. volume': '35171'
  },
  '2019-06-28': {
    '1. open': '336.2500',
    '2. high': '375.1000',
    '3. low': '330.8500',
    '4. close': '373.9000',
    '5. volume': '23126'
  },
  '2019-05-31': {
    '1. open': '349.1000',
    '2. high': '354.5500',
    '3. low': '323.3000',
    '4. close': '338.6000',
    '5. volume': '62777'
  },
  '2019-04-30': {
    '1. open': '332.7000',
    '2. high': '354.1500',
    '3. low': '327.2500',
    '4. close': '349.0500',
    '5. volume': '40520'
  },
  '2019-03-29': {
    '1. open': '305.4000',
    '2. high': '330.1500',
    '3. low': '302.4500',
    '4. close': '327.9000',
    '5. volume': '56759'
  },
  '2019-02-28': {
    '1. open': '282.5500',
    '2. high': '305.0000',
    '3. low': '280.6000',
    '4. close': '301.6500',
    '5. volume': '31647'
  },
  '2019-01-31': {
    '1. open': '253.3000',
    '2. high': '279.3500',
    '3. low': '243.2000',
    '4. close': '279.2500',
    '5. volume': '52284'
  },
  '2018-12-28': {
    '1. open': '263.0500',
    '2. high': '268.9000',
    '3. low': '242.6000',
    '4. close': '252.2000',
    '5. volume': '71489'
  },
  '2018-11-30': {
    '1. open': '268.3000',
    '2. high': '280.3000',
    '3. low': '249.9000',
    '4. close': '252.6500',
    '5. volume': '56187'
  },
  '2018-10-31': {
    '1. open': '304.0000',
    '2. high': '307.8500',
    '3. low': '257.0000',
    '4. close': '269.3000',
    '5. volume': '85633'
  },
  '2018-09-28': {
    '1. open': '299.1500',
    '2. high': '310.2500',
    '3. low': '278.8000',
    '4. close': '304.6500',
    '5. volume': '37398'
  },
  '2018-08-31': {
    '1. open': '300.9500',
    '2. high': '313.7000',
    '3. low': '289.8000',
    '4. close': '301.9000',
    '5. volume': '30100'
  },
  '2018-07-31': {
    '1. open': '283.2500',
    '2. high': '310.1000',
    '3. low': '281.1000',
    '4. close': '298.9000',
    '5. volume': '26259'
  },
  '2018-06-29': {
    '1. open': '301.2500',
    '2. high': '311.3500',
    '3. low': '278.8000',
    '4. close': '285.7500',
    '5. volume': '29206'
  },
  '2018-05-31': {
    '1. open': '290.9500',
    '2. high': '311.4500',
    '3. low': '289.5000',
    '4. close': '297.0000',
    '5. volume': '18660'
  },
  '2018-04-30': {
    '1. open': '249.4000',
    '2. high': '289.2500',
    '3. low': '248.9000',
    '4. close': '289.2500',
    '5. volume': '38061'
  },
  '2018-03-29': {
    '1. open': '246.0500',
    '2. high': '254.9500',
    '3. low': '238.9500',
    '4. close': '240.1000',
    '5. volume': '17280'
  },
  '2018-02-28': {
    '1. open': '253.0500',
    '2. high': '253.6500',
    '3. low': '232.8000',
    '4. close': '246.4000',
    '5. volume': '41885'
  },
  '2018-01-31': {
    '1. open': '245.0000',
    '2. high': '255.3000',
    '3. low': '237.9000',
    '4. close': '252.4500',
    '5. volume': '22322'
  },
  '2017-12-29': {
    '1. open': '245.0000',
    '2. high': '245.0000',
    '3. low': '245.0000',
    '4. close': '245.0000',
    '5. volume': '0'
  },
  '2017-11-30': {
    '1. open': '257.1000',
    '2. high': '260.0000',
    '3. low': '243.9000',
    '4. close': '245.0000',
    '5. volume': '15398'
  },
  '2017-10-31': {
    '1. open': '234.0500',
    '2. high': '254.7000',
    '3. low': '230.0000',
    '4. close': '253.6000',
    '5. volume': '28897'
  },
  '2017-09-29': {
    '1. open': '222.2500',
    '2. high': '232.6500',
    '3. low': '216.6500',
    '4. close': '231.4000',
    '5. volume': '15127'
  },
  '2017-08-31': {
    '1. open': '213.9000',
    '2. high': '223.4500',
    '3. low': '213.3500',
    '4. close': '220.7000',
    '5. volume': '27997'
  },
  '2017-07-31': {
    '1. open': '220.0000',
    '2. high': '224.4500',
    '3. low': '212.6500',
    '4. close': '213.0000',
    '5. volume': '24212'
  },
  '2017-06-30': {
    '1. open': '228.2500',
    '2. high': '235.0000',
    '3. low': '218.1500',
    '4. close': '219.5000',
    '5. volume': '19051'
  },
  '2017-05-31': {
    '1. open': '227.1500',
    '2. high': '238.7000',
    '3. low': '224.7000',
    '4. close': '227.2000',
    '5. volume': '31357'
  },
  '2017-04-28': {
    '1. open': '206.5000',
    '2. high': '227.4000',
    '3. low': '203.7500',
    '4. close': '227.1000',
    '5. volume': '103273'
  },
  '2017-03-31': {
    '1. open': '192.7000',
    '2. high': '205.3000',
    '3. low': '192.7000',
    '4. close': '205.3000',
    '5. volume': '39797'
  },
  '2017-02-28': {
    '1. open': '187.7500',
    '2. high': '193.5000',
    '3. low': '181.8500',
    '4. close': '189.8500',
    '5. volume': '23629'
  },
  '2017-01-31': {
    '1. open': '181.1000',
    '2. high': '192.6000',
    '3. low': '175.8500',
    '4. close': '186.1500',
    '5. volume': '29626'
  },
  '2016-12-30': {
    '1. open': '170.2000',
    '2. high': '180.8500',
    '3. low': '168.1500',
    '4. close': '179.8500',
    '5. volume': '35598'
  },
  '2016-11-30': {
    '1. open': '166.5500',
    '2. high': '172.2500',
    '3. low': '160.4000',
    '4. close': '171.9500',
    '5. volume': '27848'
  },
  '2016-10-31': {
    '1. open': '151.9000',
    '2. high': '169.3000',
    '3. low': '151.9000',
    '4. close': '165.5000',
    '5. volume': '40303'
  },
  '2016-09-30': {
    '1. open': '152.7000',
    '2. high': '157.0500',
    '3. low': '145.8000',
    '4. close': '152.1000',
    '5. volume': '28971'
  },
  '2016-08-31': {
    '1. open': '153.2500',
    '2. high': '158.9500',
    '3. low': '148.5000',
    '4. close': '152.0500',
    '5. volume': '33216'
  },
  '2016-07-29': {
    '1. open': '135.3000',
    '2. high': '155.2500',
    '3. low': '130.8000',
    '4. close': '153.6500',
    '5. volume': '52762'
  },
  '2016-06-30': {
    '1. open': '144.0000',
    '2. high': '149.5000',
    '3. low': '130.5500',
    '4. close': '135.8500',
    '5. volume': '63869'
  },
  '2016-05-31': {
    '1. open': '146.8000',
    '2. high': '150.3500',
    '3. low': '141.0000',
    '4. close': '143.7500',
    '5. volume': '37775'
  },
  '2016-04-29': {
    '1. open': '148.6000',
    '2. high': '154.9500',
    '3. low': '140.4000',
    '4. close': '145.4000',
    '5. volume': '34758'
  },
  '2016-03-31': {
    '1. open': '153.2500',
    '2. high': '162.7000',
    '3. low': '146.8000',
    '4. close': '150.9500',
    '5. volume': '28893'
  },
  '2016-02-29': {
    '1. open': '148.0500',
    '2. high': '157.5000',
    '3. low': '142.8000',
    '4. close': '154.4500',
    '5. volume': '53096'
  },
  '2016-01-29': {
    '1. open': '141.4500',
    '2. high': '147.0500',
    '3. low': '131.8500',
    '4. close': '147.0500',
    '5. volume': '91582'
  },
  '2015-12-30': {
    '1. open': '159.0000',
    '2. high': '160.8000',
    '3. low': '142.2000',
    '4. close': '147.7500',
    '5. volume': '95303'
  },
  '2015-11-30': {
    '1. open': '168.6500',
    '2. high': '173.9500',
    '3. low': '152.6000',
    '4. close': '157.9500',
    '5. volume': '101424'
  },
  '2015-10-30': {
    '1. open': '154.5000',
    '2. high': '171.0000',
    '3. low': '146.3500',
    '4. close': '169.0500',
    '5. volume': '110772'
  },
  '2015-09-30': {
    '1. open': '146.3500',
    '2. high': '156.1500',
    '3. low': '142.4000',
    '4. close': '152.3000',
    '5. volume': '54678'
  },
  '2015-08-31': {
    '1. open': '170.9500',
    '2. high': '176.5000',
    '3. low': '134.8500',
    '4. close': '148.6000',
    '5. volume': '121802'
  },
  '2015-07-31': {
    '1. open': '158.0000',
    '2. high': '171.7000',
    '3. low': '147.2500',
    '4. close': '170.4500',
    '5. volume': '69942'
  },
  '2015-06-30': {
    '1. open': '161.8500',
    '2. high': '173.0000',
    '3. low': '154.0000',
    '4. close': '157.5500',
    '5. volume': '64265'
  },
  '2015-05-29': {
    '1. open': '157.4500',
    '2. high': '168.2000',
    '3. low': '151.2500',
    '4. close': '162.1000',
    '5. volume': '50319'
  },
  '2015-04-30': {
    '1. open': '161.8000',
    '2. high': '172.8000',
    '3. low': '154.3000',
    '4. close': '156.1500',
    '5. volume': '50567'
  },
  '2015-03-31': {
    '1. open': '164.5000',
    '2. high': '175.0000',
    '3. low': '159.5000',
    '4. close': '163.8000',
    '5. volume': '64106'
  },
  '2015-02-27': {
    '1. open': '143.5000',
    '2. high': '164.3000',
    '3. low': '142.0500',
    '4. close': '164.3000',
    '5. volume': '72043'
  },
  '2015-01-30': {
    '1. open': '133.2000',
    '2. high': '146.0000',
    '3. low': '123.9000',
    '4. close': '143.9000',
    '5. volume': '85452'
  },
  '2014-12-30': {
    '1. open': '143.7500',
    '2. high': '146.3000',
    '3. low': '124.3000',
    '4. close': '131.3500',
    '5. volume': '70983'
  },
  '2014-11-28': {
    '1. open': '135.0500',
    '2. high': '144.9000',
    '3. low': '132.0000',
    '4. close': '144.3500',
    '5. volume': '75041'
  },
  '2014-10-31': {
    '1. open': '129.6500',
    '2. high': '135.2500',
    '3. low': '121.9000',
    '4. close': '135.2500',
    '5. volume': '63121'
  },
  '2014-09-30': {
    '1. open': '132.2000',
    '2. high': '137.9000',
    '3. low': '128.0500',
    '4. close': '129.6500',
    '5. volume': '44548'
  },
  '2014-08-29': {
    '1. open': '129.2000',
    '2. high': '133.3500',
    '3. low': '124.6000',
    '4. close': '131.6000',
    '5. volume': '53582'
  },
  '2014-07-31': {
    '1. open': '140.7000',
    '2. high': '141.8500',
    '3. low': '128.1500',
    '4. close': '128.2500',
    '5. volume': '55841'
  },
  '2014-06-30': {
    '1. open': '146.2000',
    '2. high': '147.0000',
    '3. low': '139.9500',
    '4. close': '141.1500',
    '5. volume': '35705'
  },
  '2014-05-30': {
    '1. open': '142.0500',
    '2. high': '146.0000',
    '3. low': '139.0000',
    '4. close': '146.0000',
    '5. volume': '29660'
  },
  '2014-04-30': {
    '1. open': '134.2000',
    '2. high': '143.4500',
    '3. low': '132.4500',
    '4. close': '141.6500',
    '5. volume': '61108'
  },
  '2014-03-31': {
    '1. open': '132.6500',
    '2. high': '134.5500',
    '3. low': '125.2000',
    '4. close': '132.4500',
    '5. volume': '77228'
  },
  '2014-02-28': {
    '1. open': '131.9000',
    '2. high': '138.6500',
    '3. low': '128.5000',
    '4. close': '134.4000',
    '5. volume': '67116'
  },
  '2014-01-31': {
    '1. open': '132.6000',
    '2. high': '132.8000',
    '3. low': '121.0500',
    '4. close': '132.4000',
    '5. volume': '176397'
  },
  '2013-12-30': {
    '1. open': '138.8500',
    '2. high': '138.8500',
    '3. low': '126.2500',
    '4. close': '131.3000',
    '5. volume': '92542'
  },
  '2013-11-29': {
    '1. open': '141.5000',
    '2. high': '142.5500',
    '3. low': '137.6000',
    '4. close': '139.0000',
    '5. volume': '56279'
  },
  '2013-10-31': {
    '1. open': '146.5000',
    '2. high': '147.4500',
    '3. low': '135.0500',
    '4. close': '142.0500',
    '5. volume': '78990'
  },
  '2013-09-30': {
    '1. open': '134.4500',
    '2. high': '150.0000',
    '3. low': '132.3500',
    '4. close': '146.2000',
    '5. volume': '57738'
  },
  '2013-08-30': {
    '1. open': '137.8500',
    '2. high': '141.9000',
    '3. low': '132.5000',
    '4. close': '132.5000',
    '5. volume': '61780'
  },
  '2013-07-31': {
    '1. open': '126.1000',
    '2. high': '137.3500',
    '3. low': '123.6500',
    '4. close': '136.5500',
    '5. volume': '61892'
  },
  '2013-06-28': {
    '1. open': '136.0500',
    '2. high': '137.5500',
    '3. low': '117.9500',
    '4. close': '124.8000',
    '5. volume': '119968'
  },
  '2013-05-31': {
    '1. open': '132.4500',
    '2. high': '143.3000',
    '3. low': '131.0000',
    '4. close': '137.3500',
    '5. volume': '52462'
  },
  '2013-04-30': {
    '1. open': '134.5000',
    '2. high': '137.7000',
    '3. low': '120.3500',
    '4. close': '131.2000',
    '5. volume': '72850'
  },
  '2013-03-28': {
    '1. open': '132.0000',
    '2. high': '137.2000',
    '3. low': '129.2500',
    '4. close': '133.5500',
    '5. volume': '38780'
  },
  '2013-02-28': {
    '1. open': '136.9000',
    '2. high': '140.8500',
    '3. low': '128.0000',
    '4. close': '132.4000',
    '5. volume': '47671'
  },
  '2013-01-31': {
    '1. open': '141.0000',
    '2. high': '143.1500',
    '3. low': '135.7000',
    '4. close': '140.5500',
    '5. volume': '32660'
  },
  '2012-12-28': {
    '1. open': '135.9500',
    '2. high': '140.5000',
    '3. low': '135.1000',
    '4. close': '138.8000',
    '5. volume': '40789'
  },
  '2012-11-30': {
    '1. open': '126.6000',
    '2. high': '137.6500',
    '3. low': '123.2000',
    '4. close': '136.0000',
    '5. volume': '39557'
  },
  '2012-10-31': {
    '1. open': '117.7500',
    '2. high': '129.4000',
    '3. low': '117.5000',
    '4. close': '125.7500',
    '5. volume': '66630'
  },
  '2012-09-28': {
    '1. open': '129.0000',
    '2. high': '133.9000',
    '3. low': '116.3500',
    '4. close': '117.0000',
    '5. volume': '62094'
  },
  '2012-08-31': {
    '1. open': '123.1500',
    '2. high': '134.7000',
    '3. low': '121.0000',
    '4. close': '129.5000',
    '5. volume': '50720'
  },
  '2012-07-31': {
    '1. open': '120.9000',
    '2. high': '126.0500',
    '3. low': '113.9000',
    '4. close': '123.7000',
    '5. volume': '49034'
  },
  '2012-06-29': {
    '1. open': '119.0500',
    '2. high': '123.0000',
    '3. low': '111.1500',
    '4. close': '120.8500',
    '5. volume': '48113'
  },
  '2012-05-31': {
    '1. open': '126.4500',
    '2. high': '130.8000',
    '3. low': '116.8500',
    '4. close': '118.5500',
    '5. volume': '54268'
  },
  '2012-04-30': {
    '1. open': '129.9000',
    '2. high': '132.0000',
    '3. low': '119.6000',
    '4. close': '125.0000',
    '5. volume': '39342'
  },
  '2012-03-30': {
    '1. open': '127.1000',
    '2. high': '136.6500',
    '3. low': '125.1500',
    '4. close': '128.7500',
    '5. volume': '47745'
  },
  '2012-02-29': {
    '1. open': '124.3000',
    '2. high': '129.0500',
    '3. low': '122.8500',
    '4. close': '126.8000',
    '5. volume': '81906'
  },
  '2012-01-31': {
    '1. open': '110.0000',
    '2. high': '124.2500',
    '3. low': '108.8000',
    '4. close': '123.0500',
    '5. volume': '45795'
  },
  '2011-12-30': {
    '1. open': '116.2000',
    '2. high': '118.1500',
    '3. low': '103.4500',
    '4. close': '108.2000',
    '5. volume': '27154'
  },
  '2011-11-30': {
    '1. open': '116.9500',
    '2. high': '120.6500',
    '3. low': '105.4000',
    '4. close': '116.7000',
    '5. volume': '26045'
  },
  '2011-10-31': {
    '1. open': '96.6200',
    '2. high': '125.2500',
    '3. low': '94.2700',
    '4. close': '121.3000',
    '5. volume': '77364'
  },
  '2011-09-30': {
    '1. open': '119.2500',
    '2. high': '119.5000',
    '3. low': '98.3800',
    '4. close': '99.8300',
    '5. volume': '47596'
  },
  '2011-08-31': {
    '1. open': '129.3500',
    '2. high': '131.6500',
    '3. low': '102.4500',
    '4. close': '117.5000',
    '5. volume': '86309'
  },
  '2011-07-29': {
    '1. open': '124.0000',
    '2. high': '132.1000',
    '3. low': '119.7500',
    '4. close': '126.3000',
    '5. volume': '48782'
  },
  '2011-06-30': {
    '1. open': '121.0000',
    '2. high': '125.0000',
    '3. low': '111.0000',
    '4. close': '125.0000',
    '5. volume': '31670'
  },
  '2011-05-31': {
    '1. open': '122.0500',
    '2. high': '124.0000',
    '3. low': '115.0000',
    '4. close': '120.6000',
    '5. volume': '39534'
  },
  '2011-04-29': {
    '1. open': '112.6500',
    '2. high': '121.6000',
    '3. low': '109.1500',
    '4. close': '121.6000',
    '5. volume': '41721'
  },
  '2011-03-31': {
    '1. open': '116.7500',
    '2. high': '117.6000',
    '3. low': '98.0000',
    '4. close': '112.2000',
    '5. volume': '68374'
  },
  '2011-02-28': {
    '1. open': '116.2000',
    '2. high': '120.9000',
    '3. low': '110.8500',
    '4. close': '114.6000',
    '5. volume': '73406'
  },
  '2011-01-31': {
    '1. open': '124.4500',
    '2. high': '125.1000',
    '3. low': '110.8000',
    '4. close': '114.3000',
    '5. volume': '53533'
  },
  '2010-12-30': {
    '1. open': '118.9000',
    '2. high': '129.0000',
    '3. low': '117.7500',
    '4. close': '124.3500',
    '5. volume': '32708'
  },
  '2010-11-30': {
    '1. open': '113.7500',
    '2. high': '122.0000',
    '3. low': '112.3000',
    '4. close': '117.3000',
    '5. volume': '48499'
  },
  '2010-10-29': {
    '1. open': '107.9500',
    '2. high': '119.2500',
    '3. low': '104.8500',
    '4. close': '113.0000',
    '5. volume': '51746'
  },
  '2010-09-30': {
    '1. open': '92.0000',
    '2. high': '109.1500',
    '3. low': '92.0000',
    '4. close': '109.1500',
    '5. volume': '38065'
  },
  '2010-08-31': {
    '1. open': '93.9800',
    '2. high': '97.0000',
    '3. low': '89.3400',
    '4. close': '90.6400',
    '5. volume': '32379'
  },
  '2010-07-30': {
    '1. open': '88.3000',
    '2. high': '95.0000',
    '3. low': '84.9800',
    '4. close': '94.4200',
    '5. volume': '30020'
  },
  '2010-06-30': {
    '1. open': '85.4100',
    '2. high': '96.8400',
    '3. low': '85.4100',
    '4. close': '89.8600',
    '5. volume': '28656'
  },
  '2010-05-31': {
    '1. open': '86.3100',
    '2. high': '92.4200',
    '3. low': '79.0800',
    '4. close': '86.1900',
    '5. volume': '63926'
  },
  '2010-04-30': {
    '1. open': '87.7400',
    '2. high': '92.3000',
    '3. low': '84.6200',
    '4. close': '86.5200',
    '5. volume': '58293'
  },
  '2010-03-31': {
    '1. open': '80.1600',
    '2. high': '87.8200',
    '3. low': '80.1600',
    '4. close': '87.2400',
    '5. volume': '57137'
  },
  '2010-02-26': {
    '1. open': '78.3000',
    '2. high': '81.9600',
    '3. low': '74.4700',
    '4. close': '79.3800',
    '5. volume': '64846'
  },
  '2010-01-29': {
    '1. open': '78.7600',
    '2. high': '82.2100',
    '3. low': '76.9000',
    '4. close': '79.2800',
    '5. volume': '31344'
  },
  '2009-12-30': {
    '1. open': '70.2400',
    '2. high': '79.1500',
    '3. low': '70.2400',
    '4. close': '78.2800',
    '5. volume': '33232'
  },
  '2009-11-30': {
    '1. open': '70.2800',
    '2. high': '76.2400',
    '3. low': '68.3600',
    '4. close': '70.2800',
    '5. volume': '16361'
  },
  '2009-10-30': {
    '1. open': '69.6800',
    '2. high': '75.0500',
    '3. low': '65.5000',
    '4. close': '71.0000',
    '5. volume': '38910'
  },
  '2009-09-30': {
    '1. open': '67.3800',
    '2. high': '69.9000',
    '3. low': '64.5300',
    '4. close': '69.6800',
    '5. volume': '20674'
  },
  '2009-08-31': {
    '1. open': '63.4800',
    '2. high': '68.1200',
    '3. low': '62.1200',
    '4. close': '66.5000',
    '5. volume': '26376'
  },
  '2009-07-31': {
    '1. open': '54.7400',
    '2. high': '64.2200',
    '3. low': '52.9300',
    '4. close': '63.1600',
    '5. volume': '48465'
  },
  '2009-06-30': {
    '1. open': '60.0110',
    '2. high': '61.5000',
    '3. low': '54.5800',
    '4. close': '55.4100',
    '5. volume': '10752'
  },
  '2009-05-29': {
    '1. open': '57.7700',
    '2. high': '61.4900',
    '3. low': '57.0000',
    '4. close': '59.4300',
    '5. volume': '67750'
  },
  '2009-04-30': {
    '1. open': '46.9700',
    '2. high': '57.6900',
    '3. low': '46.9700',
    '4. close': '57.2500',
    '5. volume': '34065'
  },
  '2009-03-31': {
    '1. open': '43.8200',
    '2. high': '49.9400',
    '3. low': '42.9400',
    '4. close': '47.0900',
    '5. volume': '34910'
  },
  '2009-02-27': {
    '1. open': '42.0100',
    '2. high': '50.4800',
    '3. low': '41.6000',
    '4. close': '45.5200',
    '5. volume': '46412'
  },
  '2009-01-30': {
    '1. open': '47.5600',
    '2. high': '49.5400',
    '3. low': '39.4800',
    '4. close': '43.0600',
    '5. volume': '32379'
  },
  '2008-12-30': {
    '1. open': '44.8800',
    '2. high': '49.3000',
    '3. low': '41.6700',
    '4. close': '46.1000',
    '5. volume': '77313'
  },
  '2008-11-28': {
    '1. open': '52.6300',
    '2. high': '56.3000',
    '3. low': '38.2000',
    '4. close': '43.9400',
    '5. volume': '87279'
  },
  '2008-10-31': {
    '1. open': '61.6900',
    '2. high': '62.2500',
    '3. low': '43.8300',
    '4. close': '51.3000',
    '5. volume': '145284'
  },
  '2008-09-30': {
    '1. open': '72.3000',
    '2. high': '75.3700',
    '3. low': '60.2200',
    '4. close': '61.5200',
    '5. volume': '112440'
  },
  '2008-08-29': {
    '1. open': '71.7000',
    '2. high': '73.6300',
    '3. low': '69.2700',
    '4. close': '72.8500',
    '5. volume': '8559'
  },
  '2008-07-28': {
    '1. open': '66.0900',
    '2. high': '70.0200',
    '3. low': '59.7800',
    '4. close': '68.1000',
    '5. volume': '34516'
  },
  '2008-06-30': {
    '1. open': '74.8800',
    '2. high': '75.0600',
    '3. low': '64.7900',
    '4. close': '66.2700',
    '5. volume': '30112'
  },
  '2008-05-29': {
    '1. open': '74.6000',
    '2. high': '77.3000',
    '3. low': '72.1700',
    '4. close': '74.1100',
    '5. volume': '80051'
  },
  '2008-04-30': {
    '1. open': '71.0600',
    '2. high': '73.8290',
    '3. low': '65.6700',
    '4. close': '73.5800',
    '5. volume': '39840'
  },
  '2008-03-31': {
    '1. open': '67.1200',
    '2. high': '70.6200',
    '3. low': '63.6300',
    '4. close': '70.3500',
    '5. volume': '47537'
  },
  '2008-02-29': {
    '1. open': '70.5100',
    '2. high': '73.3800',
    '3. low': '66.9700',
    '4. close': '68.1000',
    '5. volume': '106338'
  },
  '2008-01-31': {
    '1. open': '82.9500',
    '2. high': '83.9400',
    '3. low': '62.3900',
    '4. close': '68.3000',
    '5. volume': '248036'
  }
};

// tslint:disable:max-line-length
export const lvmhCompany: Company = {
  id: 1190,
  name: 'LVMH Moët Hennessy – Louis Vuitton S.E.',
  country: Country.Frankreich,
  city: 'Paris',
  url: 'http://www.lvmh.com/',
  description: 'Die börsennotierte LVMH Moët Hennessy – Louis Vuitton SE ist der weltweite Branchenführer der Luxusgüterindustrie, der Rechte an über 70 verschiedenen Marken hält, die weltweit in über 3940 Geschäften vertrieben werden.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/LVMH',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/LVMH_logo.svg/500px-LVMH_logo.svg.png',
  products: [
    {
      id: 119010,
      name: 'Moët & Chandon',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/moetchandon_logo-3.png',
      segment: 101314
    },
    {
      id: 119011,
      name: 'Chandon',
      logo: 'https://r.lvmh-static.com/uploads/2015/02/logo_chandon_transparent.png',
      segment: 101314
    },
    {
      id: 119012,
      name: 'Ardbeg',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/ardbeg_logo_horizontal.png',
      segment: 101314
    },
    {
      id: 119013,
      name: 'Belvedere',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/belvedere_vodka_pure_blk.png',
      segment: 101314
    },
    {
      id: 119014,
      name: 'Bodega Numanthia',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/15-09-18_nouveau-logo-orang.png',
      segment: 101314
    },
    {
      id: 119015,
      name: 'Cape Mentelle',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/capementelle_logo.png',
      segment: 101314
    },
    {
      id: 119016,
      name: 'Chateau Cheval Blanc',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/chateauchevalblanc_logo1.png',
      segment: 101314
    },
    {
      id: 119017,
      name: 'Ao Yun',
      logo: 'https://r.lvmh-static.com/uploads/2017/07/logo.png',
      segment: 101314
    },
    {
      id: 119018,
      name: 'Chateau dYquem',
      logo: 'https://r.lvmh-static.com/uploads/2014/09/logo-yquem-2013.png',
      segment: 101314
    },
    {
      id: 119019,
      name: 'Cheval des Andes',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/chevaldesandes_logo1.png',
      segment: 101314
    },
    {
      id: 119020,
      name: 'Clos des Lambrays',
      logo: 'https://r.lvmh-static.com/uploads/2017/02/logo-ok.png',
      segment: 101314
    },
    {
      id: 119021,
      name: 'Clos19',
      logo: 'https://r.lvmh-static.com/uploads/2017/04/logo_no_strap_white.png',
      segment: 101314
    },
    {
      id: 119022,
      name: 'Cloudy Bay',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/cloudybay_logo_noir.png',
      segment: 101314
    },
    {
      id: 119023,
      name: 'Dom Perignon',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/domperignon_logo.png',
      segment: 101314
    },
    {
      id: 119024,
      name: 'Glenmorangie',
      logo: 'https://r.lvmh-static.com/uploads/2014/09/glenmorangie_logo.png',
      segment: 101314
    },
    {
      id: 119025,
      name: 'Hennessy',
      logo: 'https://r.lvmh-static.com/uploads/2014/09/hennessy_logo.png',
      segment: 101314
    },
    {
      id: 119026,
      name: 'Krug',
      logo: 'https://r.lvmh-static.com/uploads/2014/07/krug-logo_pantone_gold.png',
      segment: 101314
    },
    {
      id: 119027,
      name: 'Mercier',
      logo: 'https://r.lvmh-static.com/uploads/2014/09/mercier_logo.png',
      segment: 101314
    },
    {
      id: 119028,
      name: 'Newton Napa Valley',
      logo: 'https://r.lvmh-static.com/uploads/2018/05/logonewton_final-ok.png',
      segment: 101314
    },
    {
      id: 119029,
      name: 'Ruinart',
      logo: 'https://r.lvmh-static.com/uploads/2014/09/logo_ok_ruinart_gris_or.png',
      segment: 101314
    },
    {
      id: 119030,
      name: 'Terrazas de los Andes',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/tdla_logo-white-400x300.png',
      segment: 101314
    },
    {
      id: 119031,
      name: 'Veuve Clicquot',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/veuveclicquot_logo1.png',
      segment: 101314
    },
    {
      id: 119032,
      name: 'Volcan de mi Tierra',
      logo: 'https://r.lvmh-static.com/uploads/2018/04/logovolcan-e1523894896568.png',
      segment: 101314
    },
    {
      id: 119033,
      name: 'Woodinville',
      logo: 'https://r.lvmh-static.com/uploads/2019/02/ww-logo-2017-noline.png',
      segment: 101314
    },
    {
      id: 119034,
      name: 'Berluti',
      logo: 'https://r.lvmh-static.com/uploads/2014/09/ber_logo-e1544446280210.png',
      segment: 101410
    },
    {
      id: 119035,
      name: 'Celine',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/celine_logo-e1538140405341.png',
      segment: 101410
    },
    {
      id: 119036,
      name: 'Christian Dior',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/logo-christian-dior-couture.png',
      segment: 101410
    },
    {
      id: 119037,
      name: 'Emilio Pucci',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/new-logo-regular-copie.png',
      segment: 101410
    },
    {
      id: 119038,
      name: 'Fendi Roma',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/fendi_logo.png',
      segment: 101410
    },
    {
      id: 119040,
      name: 'Fenty',
      logo: 'https://r.lvmh-static.com/uploads/2019/05/logo3.png',
      segment: 101410
    },
    {
      id: 119041,
      name: 'Louis Vuitton',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/lv-logo-noir-ok.png',
      segment: 101410
    },
    {
      id: 119042,
      name: 'Givenchy',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/givenchy_logo-blanc.png',
      segment: 101410
    },
    {
      id: 119043,
      name: 'Kenzo',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/kenzo_logo_reg_black_centered_rz-copie.png',
      segment: 101410
    },
    {
      id: 119044,
      name: 'Loewe',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/logo-loewe.png',
      segment: 101410
    },
    {
      id: 119045,
      name: 'Loro Piana',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/loropiana_logo.png',
      segment: 101410
    },
    {
      id: 119046,
      name: 'Rimowa',
      logo: 'https://r.lvmh-static.com/uploads/2017/01/rimowa-logo.png',
      segment: 101410
    },
    {
      id: 119047,
      name: 'Marc Jacobs',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/marcjacobs_logo.png',
      segment: 101410
    },
    {
      id: 119048,
      name: 'Moynat',
      logo: 'https://r.lvmh-static.com/uploads/2016/10/logo-moynat.png',
      segment: 101410
    },
    {
      id: 119049,
      name: 'Nicholas Kirkwood',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/nicholas_kirkwood_logo.png',
      segment: 101410
    },
    {
      id: 119050,
      name: 'Patou',
      logo: 'https://r.lvmh-static.com/uploads/2019/05/patou-logo-ok.png',
      segment: 101410
    },
    {
      id: 119051,
      name: 'Pink',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/large-format-pink-logo-red-rgb.png',
      segment: 101410
    },
    {
      id: 119052,
      name: 'Aqua di Parma',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/acqua-di-parma_black-def.png',
      segment: 101012
    },
    {
      id: 119053,
      name: 'Benefit',
      logo: 'https://r.lvmh-static.com/uploads/2014/09/logo_benefit400.png',
      segment: 101012
    },
    {
      id: 119054,
      name: 'Cha Ling',
      logo: 'https://r.lvmh-static.com/uploads/2019/06/logo-chaling-ok.png',
      segment: 101012
    },
    {
      id: 119055,
      name: 'Fenty Beauty by Rihanna',
      logo: 'https://r.lvmh-static.com/uploads/2018/03/logo-fentybeautybyrihanna_white.png',
      segment: 101012
    },
    {
      id: 119056,
      name: 'Fresh',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/fresh_logo2.png',
      segment: 101012
    },
    {
      id: 119057,
      name: 'Givenchy Parfums',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/parfumsgivenchy_logo.png',
      segment: 101012
    },
    {
      id: 119058,
      name: 'Guerlain',
      logo: 'https://r.lvmh-static.com/uploads/2014/09/guerlain-logo-temporaire.png',
      segment: 101012
    },
    {
      id: 119059,
      name: 'Kat Von D',
      logo: 'https://r.lvmh-static.com/uploads/2018/03/kvd_logo-primary_white2.png',
      segment: 101012
    },
    {
      id: 119060,
      name: 'Kenzo Parfums',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/kenzo-logo-parfums-paris.png',
      segment: 101012
    },
    {
      id: 119061,
      name: 'Maison Francis Kurkdijan',
      logo: 'https://r.lvmh-static.com/uploads/2017/03/logo-mfk-white.png',
      segment: 101012
    },
    {
      id: 119062,
      name: 'Make up for ever',
      logo: 'https://r.lvmh-static.com/uploads/2014/09/mufe_logo.png',
      segment: 101012
    },
    {
      id: 119063,
      name: 'Marc Jacobs Beauty',
      logo: 'https://r.lvmh-static.com/uploads/2018/04/marc-jacobs-beauty-logo1.png',
      segment: 101012
    },
    {
      id: 119064,
      name: 'Christian Dior Parfums',
      logo: 'https://r.lvmh-static.com/uploads/2014/07/dior.png',
      segment: 101012
    },
    {
      id: 119065,
      name: 'Parfumes Loewe',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/logo-loewe.png',
      segment: 101012
    },
    {
      id: 119066,
      name: 'Bulgari',
      logo: 'https://r.lvmh-static.com/uploads/2014/09/bulgari_logo.png',
      segment: 101411
    },
    {
      id: 119067,
      name: 'Chaumet',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/logo-diademe-blanc.png',
      segment: 101411
    },
    {
      id: 119068,
      name: 'Fred',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/fred_logo.png',
      segment: 101411
    },
    {
      id: 119069,
      name: 'Hublot',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/hublot_logo.png',
      segment: 101411
    },
    {
      id: 119070,
      name: 'Tag Heuer',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/tagheuer_logo1.png',
      segment: 101413
    },
    {
      id: 119071,
      name: 'Zenith',
      logo: 'https://r.lvmh-static.com/uploads/2014/09/logo-zenith.png',
      segment: 101411
    },
    {
      id: 119072,
      name: 'DFS',
      logo: 'https://r.lvmh-static.com/uploads/2014/09/dfs-logo-400x150px.png',
      segment: 2010
    },
    {
      id: 119073,
      name: 'LA GRANDE EPICERIE DE PARIS',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/lge_logo.png',
      segment: 2010
    },
    {
      id: 119074,
      name: 'LE BON MARCHÉ RIVE GAUCHE',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/lbm_logo1.png',
      segment: 2010
    },
    {
      id: 119075,
      name: 'Sephora',
      logo: 'https://r.lvmh-static.com/uploads/2014/09/sephora_fr_center_black_400x75px_ok.png',
      segment: 2010
    },
    {
      id: 119076,
      name: 'Starboard',
      logo: 'https://r.lvmh-static.com/uploads/2014/10/starboardcruise_logo.png',
      segment: 2010
    }
  ],
  industries: [101314, 101410, 101012, 101411, 101413, 1019, 2010],
  securityType: SecurityType.Aktie,
  currency: Currency.EUR,
  isin: 'FR0000121014',
  wkn: '853292',
  symbol: 'MOH.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50],
  end_of_month_prices: prices,
  dividends,
  tags: ['Luxusgüter', 'Marken', 'Wein', 'Spirituosen', 'Mode', 'Lederwaren', 'Parfüm', 'Kosmetik', 'Uhren', 'Schmuck']
};
// tslint:enable:max-line-length

