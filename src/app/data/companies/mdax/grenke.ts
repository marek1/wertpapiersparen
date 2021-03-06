import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {year: 2018, rate: 0.80, yield: 1.10}, {year: 2017, rate: 0.70}, {year: 2016, rate: 0.58}, {
    year: 2015,
    rate: 0.50,
    yield: 0.81
  }, {year: 2014, rate: 0.37, yield: 1.24}, {year: 2013, rate: 0.33, yield: 1.47}, {year: 2012, rate: 0.27, yield: 1.58}, {
    year: 2011,
    rate: 0.25,
    yield: 1.92
  }, {year: 2010, rate: 0.23, yield: 1.84}, {year: 2009, rate: 0.20, yield: 2.02}, {year: 2008, rate: 0.20, yield: 3.37}, {
    year: 2007,
    rate: 0.20,
    yield: 2.62
  }, {year: 2006, rate: 0.18, yield: 1.52}, {year: 2005, rate: 0.17, yield: 1.04}, {year: 2004, rate: 0.13, yield: 1.14}, {
    year: 2003,
    rate: 0.11,
    yield: 1.84
  }, {year: 2002, rate: 0.08, yield: 2.44}, {year: 2001, rate: 0.00, yield: 0.00}, {year: 2000, rate: 0.00, yield: 0.00}
];
const prices = {
  '2019-11-14': {
    '1. open': '85.5000',
    '2. high': '94.6500',
    '3. low': '84.9000',
    '4. close': '91.9000',
    '5. volume': '592638'
  },
  '2019-10-31': {
    '1. open': '76.5000',
    '2. high': '89.0000',
    '3. low': '74.2000',
    '4. close': '84.8500',
    '5. volume': '1668653'
  },
  '2019-09-30': {
    '1. open': '73.3000',
    '2. high': '79.5000',
    '3. low': '72.1000',
    '4. close': '75.6000',
    '5. volume': '1197115'
  },
  '2019-08-30': {
    '1. open': '78.2500',
    '2. high': '81.2500',
    '3. low': '70.4500',
    '4. close': '73.7000',
    '5. volume': '1729412'
  },
  '2019-07-31': {
    '1. open': '94.9500',
    '2. high': '96.7000',
    '3. low': '75.8500',
    '4. close': '78.0000',
    '5. volume': '1852875'
  },
  '2019-06-28': {
    '1. open': '84.4000',
    '2. high': '94.7000',
    '3. low': '82.5000',
    '4. close': '94.4000',
    '5. volume': '1459177'
  },
  '2019-05-31': {
    '1. open': '95.1000',
    '2. high': '95.1000',
    '3. low': '84.1500',
    '4. close': '85.5000',
    '5. volume': '980399'
  },
  '2019-04-30': {
    '1. open': '86.8500',
    '2. high': '95.4000',
    '3. low': '86.0500',
    '4. close': '94.6500',
    '5. volume': '814205'
  },
  '2019-03-29': {
    '1. open': '89.7000',
    '2. high': '91.9000',
    '3. low': '80.1500',
    '4. close': '86.6500',
    '5. volume': '1071060'
  },
  '2019-02-28': {
    '1. open': '80.5500',
    '2. high': '89.7000',
    '3. low': '76.4500',
    '4. close': '89.7000',
    '5. volume': '1107502'
  },
  '2019-01-31': {
    '1. open': '75.9000',
    '2. high': '83.2500',
    '3. low': '68.9500',
    '4. close': '80.2000',
    '5. volume': '1377544'
  },
  '2018-12-28': {
    '1. open': '77.5500',
    '2. high': '78.2000',
    '3. low': '69.8000',
    '4. close': '74.2000',
    '5. volume': '1233062'
  },
  '2018-11-30': {
    '1. open': '85.0500',
    '2. high': '88.5000',
    '3. low': '69.1000',
    '4. close': '75.6000',
    '5. volume': '2523302'
  },
  '2018-10-31': {
    '1. open': '103.1000',
    '2. high': '104.6000',
    '3. low': '81.7500',
    '4. close': '84.8000',
    '5. volume': '1949055'
  },
  '2018-09-28': {
    '1. open': '103.8000',
    '2. high': '107.3000',
    '3. low': '99.8000',
    '4. close': '102.7000',
    '5. volume': '1187763'
  },
  '2018-08-31': {
    '1. open': '94.5500',
    '2. high': '105.0000',
    '3. low': '92.2500',
    '4. close': '103.9000',
    '5. volume': '1008790'
  },
  '2018-07-31': {
    '1. open': '96.8000',
    '2. high': '102.7000',
    '3. low': '93.6500',
    '4. close': '94.5500',
    '5. volume': '955264'
  },
  '2018-06-29': {
    '1. open': '96.9000',
    '2. high': '106.6000',
    '3. low': '94.4500',
    '4. close': '97.8500',
    '5. volume': '1124684'
  },
  '2018-05-31': {
    '1. open': '98.4000',
    '2. high': '103.5000',
    '3. low': '95.1000',
    '4. close': '96.7500',
    '5. volume': '764651'
  },
  '2018-04-30': {
    '1. open': '86.2000',
    '2. high': '99.5000',
    '3. low': '85.6500',
    '4. close': '97.8500',
    '5. volume': '848766'
  },
  '2018-03-29': {
    '1. open': '89.4000',
    '2. high': '93.3000',
    '3. low': '84.4000',
    '4. close': '86.1000',
    '5. volume': '1056060'
  },
  '2018-02-28': {
    '1. open': '95.9500',
    '2. high': '96.7500',
    '3. low': '86.5000',
    '4. close': '89.6500',
    '5. volume': '758886'
  },
  '2018-01-31': {
    '1. open': '79.4500',
    '2. high': '99.6500',
    '3. low': '79.1000',
    '4. close': '95.9500',
    '5. volume': '847574'
  },
  '2017-12-29': {
    '1. open': '83.1600',
    '2. high': '85.2300',
    '3. low': '79.1100',
    '4. close': '79.1600',
    '5. volume': '491236'
  },
  '2017-11-30': {
    '1. open': '84.4000',
    '2. high': '86.1500',
    '3. low': '78.7700',
    '4. close': '84.7400',
    '5. volume': '639790'
  },
  '2017-10-31': {
    '1. open': '79.5000',
    '2. high': '86.6700',
    '3. low': '79.0000',
    '4. close': '84.0100',
    '5. volume': '1008450'
  },
  '2017-09-29': {
    '1. open': '75.7300',
    '2. high': '80.7000',
    '3. low': '75.5100',
    '4. close': '78.8500',
    '5. volume': '797492'
  },
  '2017-08-31': {
    '1. open': '73.4900',
    '2. high': '78.3000',
    '3. low': '72.9800',
    '4. close': '75.7300',
    '5. volume': '841373'
  },
  '2017-07-31': {
    '1. open': '65.0000',
    '2. high': '74.9400',
    '3. low': '63.9500',
    '4. close': '73.0400',
    '5. volume': '1132093'
  },
  '2017-06-30': {
    '1. open': '63.9833',
    '2. high': '67.7833',
    '3. low': '63.7000',
    '4. close': '64.8333',
    '5. volume': '821961'
  },
  '2017-05-31': {
    '1. open': '61.0167',
    '2. high': '65.2667',
    '3. low': '60.9667',
    '4. close': '63.9833',
    '5. volume': '996108'
  },
  '2017-04-28': {
    '1. open': '55.0333',
    '2. high': '61.8333',
    '3. low': '54.9333',
    '4. close': '60.9667',
    '5. volume': '871782'
  },
  '2017-03-31': {
    '1. open': '55.0000',
    '2. high': '56.1833',
    '3. low': '53.0167',
    '4. close': '55.1333',
    '5. volume': '855147'
  },
  '2017-02-28': {
    '1. open': '51.6667',
    '2. high': '57.1000',
    '3. low': '50.9000',
    '4. close': '55.0000',
    '5. volume': '1154175'
  },
  '2017-01-31': {
    '1. open': '50.4000',
    '2. high': '52.0833',
    '3. low': '47.7833',
    '4. close': '51.5500',
    '5. volume': '967740'
  },
  '2016-12-30': {
    '1. open': '46.0000',
    '2. high': '53.9167',
    '3. low': '45.2000',
    '4. close': '49.6667',
    '5. volume': '912381'
  },
  '2016-11-30': {
    '1. open': '52.9000',
    '2. high': '53.3833',
    '3. low': '45.5167',
    '4. close': '45.7833',
    '5. volume': '1285407'
  },
  '2016-10-31': {
    '1. open': '57.1667',
    '2. high': '58.8667',
    '3. low': '51.6667',
    '4. close': '52.8667',
    '5. volume': '777522'
  },
  '2016-09-30': {
    '1. open': '57.6667',
    '2. high': '60.3333',
    '3. low': '55.0667',
    '4. close': '57.0833',
    '5. volume': '545556'
  },
  '2016-08-31': {
    '1. open': '58.6667',
    '2. high': '60.3167',
    '3. low': '56.3333',
    '4. close': '57.9000',
    '5. volume': '611124'
  },
  '2016-07-29': {
    '1. open': '52.4500',
    '2. high': '58.6167',
    '3. low': '49.6667',
    '4. close': '58.3333',
    '5. volume': '1202634'
  },
  '2016-06-30': {
    '1. open': '60.1667',
    '2. high': '60.3667',
    '3. low': '51.5667',
    '4. close': '52.3333',
    '5. volume': '959499'
  },
  '2016-05-31': {
    '1. open': '57.7667',
    '2. high': '61.7833',
    '3. low': '55.5333',
    '4. close': '60.1833',
    '5. volume': '854715'
  },
  '2016-04-29': {
    '1. open': '62.2333',
    '2. high': '66.9333',
    '3. low': '55.7333',
    '4. close': '57.4000',
    '5. volume': '886284'
  },
  '2016-03-31': {
    '1. open': '61.4667',
    '2. high': '63.3333',
    '3. low': '58.7833',
    '4. close': '62.3000',
    '5. volume': '724716'
  },
  '2016-02-29': {
    '1. open': '59.6667',
    '2. high': '61.6667',
    '3. low': '50.0333',
    '4. close': '61.0833',
    '5. volume': '1231506'
  },
  '2016-01-29': {
    '1. open': '60.7000',
    '2. high': '63.3333',
    '3. low': '54.3333',
    '4. close': '59.0333',
    '5. volume': '1147197'
  },
  '2015-12-30': {
    '1. open': '61.1667',
    '2. high': '63.0000',
    '3. low': '57.7333',
    '4. close': '61.5333',
    '5. volume': '760788'
  },
  '2015-11-30': {
    '1. open': '56.1667',
    '2. high': '61.6333',
    '3. low': '54.0000',
    '4. close': '61.0000',
    '5. volume': '1362735'
  },
  '2015-10-30': {
    '1. open': '47.3333',
    '2. high': '56.4667',
    '3. low': '46.4167',
    '4. close': '55.6500',
    '5. volume': '818385'
  },
  '2015-09-30': {
    '1. open': '49.0000',
    '2. high': '53.1167',
    '3. low': '42.6667',
    '4. close': '47.2000',
    '5. volume': '914259'
  },
  '2015-08-31': {
    '1. open': '45.9167',
    '2. high': '49.1333',
    '3. low': '43.6333',
    '4. close': '48.9333',
    '5. volume': '746499'
  },
  '2015-07-31': {
    '1. open': '43.6167',
    '2. high': '46.7500',
    '3. low': '42.1000',
    '4. close': '45.3667',
    '5. volume': '617535'
  },
  '2015-06-30': {
    '1. open': '40.5667',
    '2. high': '44.8333',
    '3. low': '38.0333',
    '4. close': '43.1333',
    '5. volume': '689571'
  },
  '2015-05-29': {
    '1. open': '40.0000',
    '2. high': '41.5167',
    '3. low': '37.8167',
    '4. close': '39.8333',
    '5. volume': '477405'
  },
  '2015-04-30': {
    '1. open': '35.5667',
    '2. high': '41.5833',
    '3. low': '35.5667',
    '4. close': '39.6667',
    '5. volume': '711006'
  },
  '2015-03-31': {
    '1. open': '34.8333',
    '2. high': '37.5667',
    '3. low': '34.3500',
    '4. close': '35.8333',
    '5. volume': '442329'
  },
  '2015-02-27': {
    '1. open': '31.8800',
    '2. high': '37.0000',
    '3. low': '31.4967',
    '4. close': '35.1167',
    '5. volume': '681225'
  },
  '2015-01-30': {
    '1. open': '30.0000',
    '2. high': '31.9567',
    '3. low': '29.6000',
    '4. close': '31.6267',
    '5. volume': '535191'
  },
  '2014-12-30': {
    '1. open': '29.5533',
    '2. high': '30.5967',
    '3. low': '27.5000',
    '4. close': '29.6633',
    '5. volume': '473385'
  },
  '2014-11-28': {
    '1. open': '26.6733',
    '2. high': '29.8133',
    '3. low': '26.3333',
    '4. close': '29.5667',
    '5. volume': '589800'
  },
  '2014-10-31': {
    '1. open': '25.8333',
    '2. high': '26.4267',
    '3. low': '23.4367',
    '4. close': '26.4267',
    '5. volume': '660303'
  },
  '2014-09-30': {
    '1. open': '25.3133',
    '2. high': '26.5333',
    '3. low': '25.0000',
    '4. close': '25.9133',
    '5. volume': '197595'
  },
  '2014-08-29': {
    '1. open': '25.9000',
    '2. high': '26.3733',
    '3. low': '24.3167',
    '4. close': '25.3433',
    '5. volume': '285741'
  },
  '2014-07-31': {
    '1. open': '25.9900',
    '2. high': '26.6467',
    '3. low': '24.3333',
    '4. close': '25.9000',
    '5. volume': '397536'
  },
  '2014-06-30': {
    '1. open': '25.5667',
    '2. high': '26.3167',
    '3. low': '23.9900',
    '4. close': '25.9067',
    '5. volume': '230979'
  },
  '2014-05-30': {
    '1. open': '25.0400',
    '2. high': '25.9000',
    '3. low': '24.1667',
    '4. close': '25.5300',
    '5. volume': '332751'
  },
  '2014-04-30': {
    '1. open': '26.6667',
    '2. high': '27.4000',
    '3. low': '24.0033',
    '4. close': '25.1333',
    '5. volume': '437946'
  },
  '2014-03-31': {
    '1. open': '25.0100',
    '2. high': '26.8400',
    '3. low': '23.8333',
    '4. close': '26.6000',
    '5. volume': '419748'
  },
  '2014-02-28': {
    '1. open': '22.9800',
    '2. high': '25.3667',
    '3. low': '22.6433',
    '4. close': '25.3667',
    '5. volume': '417963'
  },
  '2014-01-31': {
    '1. open': '22.6667',
    '2. high': '24.3333',
    '3. low': '22.1533',
    '4. close': '23.0267',
    '5. volume': '582306'
  },
  '2013-12-30': {
    '1. open': '24.1100',
    '2. high': '25.2500',
    '3. low': '22.1833',
    '4. close': '22.6667',
    '5. volume': '377973'
  },
  '2013-11-29': {
    '1. open': '24.8733',
    '2. high': '25.4600',
    '3. low': '22.6200',
    '4. close': '24.2333',
    '5. volume': '344238'
  },
  '2013-10-31': {
    '1. open': '22.6767',
    '2. high': '24.3667',
    '3. low': '21.1400',
    '4. close': '24.3267',
    '5. volume': '550524'
  },
  '2013-09-30': {
    '1. open': '22.6800',
    '2. high': '23.2967',
    '3. low': '20.6333',
    '4. close': '22.6667',
    '5. volume': '362613'
  },
  '2013-08-30': {
    '1. open': '23.1800',
    '2. high': '23.3667',
    '3. low': '21.0900',
    '4. close': '22.1900',
    '5. volume': '304278'
  },
  '2013-07-31': {
    '1. open': '21.9667',
    '2. high': '24.2333',
    '3. low': '21.3433',
    '4. close': '23.0733',
    '5. volume': '587994'
  },
  '2013-06-28': {
    '1. open': '20.0667',
    '2. high': '22.6667',
    '3. low': '19.8400',
    '4. close': '22.0000',
    '5. volume': '381327'
  },
  '2013-05-31': {
    '1. open': '20.3333',
    '2. high': '20.6633',
    '3. low': '19.4733',
    '4. close': '20.0667',
    '5. volume': '270258'
  },
  '2013-04-30': {
    '1. open': '18.7433',
    '2. high': '21.1267',
    '3. low': '18.5867',
    '4. close': '20.3000',
    '5. volume': '463941'
  },
  '2013-03-28': {
    '1. open': '18.8667',
    '2. high': '19.9633',
    '3. low': '18.4800',
    '4. close': '18.4800',
    '5. volume': '326826'
  },
  '2013-02-28': {
    '1. open': '18.1533',
    '2. high': '19.1767',
    '3. low': '17.3067',
    '4. close': '18.9833',
    '5. volume': '665544'
  },
  '2013-01-31': {
    '1. open': '17.0000',
    '2. high': '18.7500',
    '3. low': '16.7500',
    '4. close': '18.1300',
    '5. volume': '391095'
  },
  '2012-12-28': {
    '1. open': '17.4133',
    '2. high': '18.1533',
    '3. low': '16.6667',
    '4. close': '16.8700',
    '5. volume': '453210'
  },
  '2012-11-30': {
    '1. open': '17.3333',
    '2. high': '17.8267',
    '3. low': '16.7333',
    '4. close': '17.3233',
    '5. volume': '311529'
  },
  '2012-10-31': {
    '1. open': '16.1833',
    '2. high': '17.8800',
    '3. low': '16.1833',
    '4. close': '17.3467',
    '5. volume': '573459'
  },
  '2012-09-28': {
    '1. open': '16.8833',
    '2. high': '16.8967',
    '3. low': '15.3333',
    '4. close': '16.6667',
    '5. volume': '222414'
  },
  '2012-08-31': {
    '1. open': '16.1667',
    '2. high': '17.2500',
    '3. low': '15.7217',
    '4. close': '16.7467',
    '5. volume': '301125'
  },
  '2012-07-31': {
    '1. open': '14.6667',
    '2. high': '16.5050',
    '3. low': '14.6317',
    '4. close': '16.1667',
    '5. volume': '485580'
  },
  '2012-06-29': {
    '1. open': '14.0167',
    '2. high': '15.7167',
    '3. low': '13.1683',
    '4. close': '14.5167',
    '5. volume': '328308'
  },
  '2012-05-31': {
    '1. open': '16.8333',
    '2. high': '16.8333',
    '3. low': '13.7000',
    '4. close': '14.0867',
    '5. volume': '332247'
  },
  '2012-04-30': {
    '1. open': '15.0467',
    '2. high': '17.0000',
    '3. low': '14.9650',
    '4. close': '16.8000',
    '5. volume': '347673'
  },
  '2012-03-30': {
    '1. open': '15.9667',
    '2. high': '15.9667',
    '3. low': '14.3333',
    '4. close': '15.0967',
    '5. volume': '354288'
  },
  '2012-02-29': {
    '1. open': '12.8683',
    '2. high': '16.4983',
    '3. low': '12.7933',
    '4. close': '15.9333',
    '5. volume': '651123'
  },
  '2012-01-31': {
    '1. open': '12.9233',
    '2. high': '13.1350',
    '3. low': '12.4817',
    '4. close': '12.8850',
    '5. volume': '308931'
  },
  '2011-12-30': {
    '1. open': '11.6300',
    '2. high': '13.1333',
    '3. low': '10.8500',
    '4. close': '13.0000',
    '5. volume': '430944'
  },
  '2011-11-30': {
    '1. open': '13.1567',
    '2. high': '13.3650',
    '3. low': '11.1733',
    '4. close': '11.6300',
    '5. volume': '938679'
  },
  '2011-10-31': {
    '1. open': '12.3000',
    '2. high': '13.2717',
    '3. low': '11.7600',
    '4. close': '13.2717',
    '5. volume': '648750'
  },
  '2011-09-30': {
    '1. open': '12.1667',
    '2. high': '12.8933',
    '3. low': '11.1983',
    '4. close': '12.3333',
    '5. volume': '369240'
  },
  '2011-08-31': {
    '1. open': '14.2667',
    '2. high': '14.5250',
    '3. low': '11.0000',
    '4. close': '12.1183',
    '5. volume': '684948'
  },
  '2011-07-29': {
    '1. open': '14.7167',
    '2. high': '15.3333',
    '3. low': '13.7333',
    '4. close': '13.9000',
    '5. volume': '319692'
  },
  '2011-06-30': {
    '1. open': '13.8667',
    '2. high': '14.6000',
    '3. low': '13.1833',
    '4. close': '14.6000',
    '5. volume': '214974'
  },
  '2011-05-31': {
    '1. open': '13.5200',
    '2. high': '14.1333',
    '3. low': '13.1833',
    '4. close': '13.8550',
    '5. volume': '251316'
  },
  '2011-04-29': {
    '1. open': '13.8983',
    '2. high': '14.3167',
    '3. low': '13.1333',
    '4. close': '13.4633',
    '5. volume': '278658'
  },
  '2011-03-31': {
    '1. open': '13.4533',
    '2. high': '14.4167',
    '3. low': '13.2933',
    '4. close': '14.0833',
    '5. volume': '417912'
  },
  '2011-02-28': {
    '1. open': '13.1667',
    '2. high': '14.0000',
    '3. low': '12.8667',
    '4. close': '13.3833',
    '5. volume': '285597'
  },
  '2011-01-31': {
    '1. open': '12.8500',
    '2. high': '13.8683',
    '3. low': '12.7700',
    '4. close': '13.1667',
    '5. volume': '384435'
  },
  '2010-12-30': {
    '1. open': '12.2500',
    '2. high': '12.8833',
    '3. low': '12.1000',
    '4. close': '12.6633',
    '5. volume': '366288'
  },
  '2010-11-30': {
    '1. open': '12.5500',
    '2. high': '12.8333',
    '3. low': '11.9500',
    '4. close': '12.4333',
    '5. volume': '265101'
  },
  '2010-10-29': {
    '1. open': '11.8333',
    '2. high': '12.8500',
    '3. low': '11.8333',
    '4. close': '12.7500',
    '5. volume': '344385'
  },
  '2010-09-30': {
    '1. open': '11.9600',
    '2. high': '12.0783',
    '3. low': '11.5367',
    '4. close': '12.0000',
    '5. volume': '230169'
  },
  '2010-08-31': {
    '1. open': '11.6467',
    '2. high': '12.0833',
    '3. low': '11.6250',
    '4. close': '12.0833',
    '5. volume': '236865'
  },
  '2010-07-30': {
    '1. open': '10.2600',
    '2. high': '12.0450',
    '3. low': '10.1433',
    '4. close': '11.6333',
    '5. volume': '698703'
  },
  '2010-06-30': {
    '1. open': '10.5067',
    '2. high': '10.7767',
    '3. low': '9.6700',
    '4. close': '10.1750',
    '5. volume': '526356'
  },
  '2010-05-31': {
    '1. open': '10.8767',
    '2. high': '11.1667',
    '3. low': '9.6000',
    '4. close': '10.3883',
    '5. volume': '653343'
  },
  '2010-04-30': {
    '1. open': '10.4783',
    '2. high': '11.2500',
    '3. low': '10.4033',
    '4. close': '10.8500',
    '5. volume': '455928'
  },
  '2010-03-31': {
    '1. open': '9.7000',
    '2. high': '10.9000',
    '3. low': '9.7000',
    '4. close': '10.5333',
    '5. volume': '653592'
  },
  '2010-02-26': {
    '1. open': '10.4733',
    '2. high': '10.5667',
    '3. low': '9.5000',
    '4. close': '9.7000',
    '5. volume': '680292'
  },
  '2010-01-29': {
    '1. open': '10.0233',
    '2. high': '10.7033',
    '3. low': '9.8333',
    '4. close': '10.5100',
    '5. volume': '665304'
  },
  '2009-12-30': {
    '1. open': '8.8367',
    '2. high': '10.0733',
    '3. low': '8.8333',
    '4. close': '9.8333',
    '5. volume': '292683'
  },
  '2009-11-30': {
    '1. open': '8.7333',
    '2. high': '9.0000',
    '3. low': '8.4167',
    '4. close': '8.9167',
    '5. volume': '340032'
  },
  '2009-10-30': {
    '1. open': '9.0000',
    '2. high': '9.5767',
    '3. low': '8.7533',
    '4. close': '8.7700',
    '5. volume': '391398'
  },
  '2009-09-30': {
    '1. open': '8.4333',
    '2. high': '9.6800',
    '3. low': '8.2633',
    '4. close': '9.0067',
    '5. volume': '308034'
  },
  '2009-08-31': {
    '1. open': '8.5167',
    '2. high': '9.2133',
    '3. low': '8.3033',
    '4. close': '8.4333',
    '5. volume': '446556'
  },
  '2009-07-31': {
    '1. open': '8.9000',
    '2. high': '9.2600',
    '3. low': '8.1867',
    '4. close': '8.3333',
    '5. volume': '586170'
  },
  '2009-06-30': {
    '1. open': '8.9167',
    '2. high': '9.3000',
    '3. low': '8.3333',
    '4. close': '8.8367',
    '5. volume': '242985'
  },
  '2009-05-29': {
    '1. open': '7.8333',
    '2. high': '8.9167',
    '3. low': '7.8333',
    '4. close': '8.9167',
    '5. volume': '227802'
  },
  '2009-04-30': {
    '1. open': '7.0500',
    '2. high': '8.4000',
    '3. low': '6.9000',
    '4. close': '7.8333',
    '5. volume': '318426'
  },
  '2009-03-31': {
    '1. open': '7.0000',
    '2. high': '19.9000',
    '3. low': '6.5600',
    '4. close': '7.0000',
    '5. volume': '365985'
  },
  '2009-02-27': {
    '1. open': '6.9967',
    '2. high': '7.2567',
    '3. low': '6.5533',
    '4. close': '7.1667',
    '5. volume': '561252'
  },
  '2009-01-30': {
    '1. open': '5.9400',
    '2. high': '7.0100',
    '3. low': '5.9400',
    '4. close': '7.0100',
    '5. volume': '431022'
  },
  '2008-12-30': {
    '1. open': '6.7533',
    '2. high': '6.8000',
    '3. low': '5.8367',
    '4. close': '5.9400',
    '5. volume': '482769'
  },
  '2008-11-28': {
    '1. open': '7.3333',
    '2. high': '7.4700',
    '3. low': '6.4000',
    '4. close': '6.6667',
    '5. volume': '449163'
  },
  '2008-10-31': {
    '1. open': '7.3000',
    '2. high': '8.3000',
    '3. low': '5.8000',
    '4. close': '7.2500',
    '5. volume': '999306'
  },
  '2008-09-30': {
    '1. open': '7.5033',
    '2. high': '8.3000',
    '3. low': '7.0333',
    '4. close': '7.2033',
    '5. volume': '767412'
  },
  '2008-08-29': {
    '1. open': '8.7800',
    '2. high': '8.8333',
    '3. low': '7.5000',
    '4. close': '7.6667',
    '5. volume': '1314705'
  },
  '2008-07-31': {
    '1. open': '6.8967',
    '2. high': '9.0000',
    '3. low': '6.7200',
    '4. close': '8.8300',
    '5. volume': '1606887'
  },
  '2008-06-30': {
    '1. open': '8.5333',
    '2. high': '8.6667',
    '3. low': '6.7167',
    '4. close': '7.0367',
    '5. volume': '887526'
  },
  '2008-05-30': {
    '1. open': '8.5000',
    '2. high': '9.4000',
    '3. low': '8.3467',
    '4. close': '8.6000',
    '5. volume': '651771'
  },
  '2008-04-30': {
    '1. open': '7.3400',
    '2. high': '8.5667',
    '3. low': '6.9667',
    '4. close': '8.5000',
    '5. volume': '747891'
  },
  '2008-03-31': {
    '1. open': '8.0000',
    '2. high': '8.0000',
    '3. low': '6.6167',
    '4. close': '7.3333',
    '5. volume': '684501'
  },
  '2008-02-29': {
    '1. open': '7.1667',
    '2. high': '8.3133',
    '3. low': '6.2267',
    '4. close': '8.1333',
    '5. volume': '1556250'
  },
  '2008-01-31': {
    '1. open': '7.7900',
    '2. high': '8.1633',
    '3. low': '6.0133',
    '4. close': '6.9500',
    '5. volume': '1897635'
  },
  '2007-12-28': {
    '1. open': '7.8033',
    '2. high': '8.0500',
    '3. low': '6.7433',
    '4. close': '7.6333',
    '5. volume': '1832733'
  },
  '2007-11-30': {
    '1. open': '9.9300',
    '2. high': '10.0000',
    '3. low': '6.8467',
    '4. close': '7.6667',
    '5. volume': '3257889'
  },
  '2007-10-31': {
    '1. open': '9.1000',
    '2. high': '10.6667',
    '3. low': '9.0700',
    '4. close': '9.9300',
    '5. volume': '2516091'
  },
  '2007-09-28': {
    '1. open': '9.4967',
    '2. high': '9.9067',
    '3. low': '9.0067',
    '4. close': '9.1000',
    '5. volume': '1388673'
  },
  '2007-08-31': {
    '1. open': '10.1933',
    '2. high': '10.2867',
    '3. low': '8.5600',
    '4. close': '9.4133',
    '5. volume': '2314155'
  },
  '2007-07-31': {
    '1. open': '11.5933',
    '2. high': '12.2333',
    '3. low': '10.1233',
    '4. close': '10.3867',
    '5. volume': '1573614'
  },
  '2007-06-29': {
    '1. open': '11.7733',
    '2. high': '11.9033',
    '3. low': '10.6667',
    '4. close': '11.4333',
    '5. volume': '1227426'
  },
  '2007-05-31': {
    '1. open': '12.3167',
    '2. high': '12.3300',
    '3. low': '11.2767',
    '4. close': '11.8333',
    '5. volume': '1071294'
  },
  '2007-04-30': {
    '1. open': '10.6733',
    '2. high': '12.3333',
    '3. low': '10.4733',
    '4. close': '12.3333',
    '5. volume': '1656009'
  },
  '2007-03-30': {
    '1. open': '10.3333',
    '2. high': '10.7500',
    '3. low': '9.3233',
    '4. close': '10.7400',
    '5. volume': '2838555'
  },
  '2007-02-28': {
    '1. open': '11.6567',
    '2. high': '11.6567',
    '3. low': '9.8333',
    '4. close': '10.2500',
    '5. volume': '3230925'
  },
  '2007-01-31': {
    '1. open': '12.1267',
    '2. high': '14.5333',
    '3. low': '11.1333',
    '4. close': '11.6600',
    '5. volume': '4714188'
  },
  '2006-12-29': {
    '1. open': '10.9000',
    '2. high': '12.5567',
    '3. low': '10.8067',
    '4. close': '12.0200',
    '5. volume': '2592513'
  },
  '2006-11-30': {
    '1. open': '10.9333',
    '2. high': '11.6967',
    '3. low': '10.6000',
    '4. close': '10.9000',
    '5. volume': '4340583'
  },
  '2006-10-31': {
    '1. open': '15.2433',
    '2. high': '15.4100',
    '3. low': '10.0333',
    '4. close': '10.7667',
    '5. volume': '5125266'
  },
  '2006-09-29': {
    '1. open': '15.8067',
    '2. high': '17.9667',
    '3. low': '14.5100',
    '4. close': '15.1000',
    '5. volume': '1376352'
  },
  '2006-08-31': {
    '1. open': '14.5467',
    '2. high': '16.1333',
    '3. low': '14.3700',
    '4. close': '15.6700',
    '5. volume': '953961'
  },
  '2006-07-31': {
    '1. open': '17.3333',
    '2. high': '17.3333',
    '3. low': '14.1467',
    '4. close': '14.5467',
    '5. volume': '866535'
  },
  '2006-06-30': {
    '1. open': '18.0167',
    '2. high': '19.2067',
    '3. low': '16.5000',
    '4. close': '17.3333',
    '5. volume': '517437'
  },
  '2006-05-31': {
    '1. open': '19.9533',
    '2. high': '21.1767',
    '3. low': '17.2667',
    '4. close': '18.1800',
    '5. volume': '1050627'
  },
  '2006-04-28': {
    '1. open': '18.6000',
    '2. high': '20.1667',
    '3. low': '18.4167',
    '4. close': '20.1667',
    '5. volume': '671715'
  },
  '2006-03-31': {
    '1. open': '16.6700',
    '2. high': '18.5800',
    '3. low': '16.6667',
    '4. close': '18.5800',
    '5. volume': '428907'
  },
  '2006-02-28': {
    '1. open': '15.3400',
    '2. high': '17.0300',
    '3. low': '15.0833',
    '4. close': '16.6733',
    '5. volume': '898119'
  },
  '2006-01-31': {
    '1. open': '16.0000',
    '2. high': '16.7300',
    '3. low': '15.5333',
    '4. close': '15.5333',
    '5. volume': '713760'
  },
  '2005-12-30': {
    '1. open': '15.6333',
    '2. high': '16.4400',
    '3. low': '15.3167',
    '4. close': '16.1000',
    '5. volume': '390288'
  },
  '2005-11-30': {
    '1. open': '14.5000',
    '2. high': '16.1400',
    '3. low': '14.1667',
    '4. close': '15.6300',
    '5. volume': '1103703'
  },
  '2005-10-31': {
    '1. open': '14.1000',
    '2. high': '14.6000',
    '3. low': '13.7100',
    '4. close': '14.5000',
    '5. volume': '691500'
  },
  '2005-09-30': {
    '1. open': '14.1667',
    '2. high': '14.5333',
    '3. low': '13.7933',
    '4. close': '14.1667',
    '5. volume': '477930'
  },
  '2005-08-31': {
    '1. open': '13.6400',
    '2. high': '14.4500',
    '3. low': '13.3667',
    '4. close': '14.2500',
    '5. volume': '673920'
  },
  '2005-07-29': {
    '1. open': '11.6667',
    '2. high': '13.5667',
    '3. low': '11.6667',
    '4. close': '13.5667',
    '5. volume': '856323'
  },
  '2005-06-30': {
    '1. open': '10.8333',
    '2. high': '11.9367',
    '3. low': '10.7000',
    '4. close': '11.7000',
    '5. volume': '505086'
  },
  '2005-05-31': {
    '1. open': '10.6100',
    '2. high': '11.2000',
    '3. low': '9.9000',
    '4. close': '10.8000',
    '5. volume': '911550'
  },
  '2005-04-29': {
    '1. open': '11.5667',
    '2. high': '11.7233',
    '3. low': '10.5367',
    '4. close': '10.5567',
    '5. volume': '827568'
  },
  '2005-03-31': {
    '1. open': '12.0333',
    '2. high': '12.0967',
    '3. low': '11.5000',
    '4. close': '11.6667',
    '5. volume': '312858'
  },
  '2005-02-28': {
    '1. open': '11.5000',
    '2. high': '12.3133',
    '3. low': '11.1667',
    '4. close': '12.0667',
    '5. volume': '582147'
  },
  '2005-01-31': {
    '1. open': '11.6333',
    '2. high': '12.5167',
    '3. low': '11.4167',
    '4. close': '11.4967',
    '5. volume': '812667'
  },
  '2004-12-30': {
    '1. open': '10.8100',
    '2. high': '11.8667',
    '3. low': '10.6700',
    '4. close': '11.6167',
    '5. volume': '433047'
  },
  '2004-11-30': {
    '1. open': '9.8333',
    '2. high': '10.9700',
    '3. low': '9.6667',
    '4. close': '10.8167',
    '5. volume': '495156'
  },
  '2004-10-29': {
    '1. open': '10.7233',
    '2. high': '10.7233',
    '3. low': '8.9733',
    '4. close': '9.8833',
    '5. volume': '1075020'
  },
  '2004-09-30': {
    '1. open': '10.6800',
    '2. high': '10.9033',
    '3. low': '10.0400',
    '4. close': '10.6667',
    '5. volume': '512781'
  },
  '2004-08-31': {
    '1. open': '10.9667',
    '2. high': '11.0000',
    '3. low': '10.1200',
    '4. close': '10.8333',
    '5. volume': '652266'
  },
  '2004-07-30': {
    '1. open': '11.0000',
    '2. high': '11.3300',
    '3. low': '10.5133',
    '4. close': '10.8333',
    '5. volume': '497388'
  },
  '2004-06-30': {
    '1. open': '10.5000',
    '2. high': '11.2533',
    '3. low': '9.8667',
    '4. close': '10.9500',
    '5. volume': '454236'
  },
  '2004-05-31': {
    '1. open': '10.7667',
    '2. high': '11.5333',
    '3. low': '9.6367',
    '4. close': '10.5167',
    '5. volume': '980613'
  },
  '2004-04-30': {
    '1. open': '9.3333',
    '2. high': '11.0000',
    '3. low': '9.3333',
    '4. close': '10.6800',
    '5. volume': '982167'
  },
  '2004-03-31': {
    '1. open': '8.3667',
    '2. high': '9.6667',
    '3. low': '8.0633',
    '4. close': '9.3367',
    '5. volume': '1605423'
  },
  '2004-02-27': {
    '1. open': '7.2667',
    '2. high': '9.0633',
    '3. low': '7.2667',
    '4. close': '8.5733',
    '5. volume': '790509'
  },
  '2004-01-30': {
    '1. open': '5.9300',
    '2. high': '7.2833',
    '3. low': '5.6400',
    '4. close': '7.0967',
    '5. volume': '540579'
  },
  '2003-12-30': {
    '1. open': '6.3733',
    '2. high': '6.3833',
    '3. low': '5.7367',
    '4. close': '5.8467',
    '5. volume': '392094'
  },
  '2003-11-28': {
    '1. open': '6.0000',
    '2. high': '6.6667',
    '3. low': '6.0000',
    '4. close': '6.2833',
    '5. volume': '249138'
  },
  '2003-10-31': {
    '1. open': '5.6833',
    '2. high': '6.1900',
    '3. low': '5.5000',
    '4. close': '6.0667',
    '5. volume': '318306'
  },
  '2003-09-30': {
    '1. open': '5.6000',
    '2. high': '6.1433',
    '3. low': '5.3733',
    '4. close': '5.7433',
    '5. volume': '361032'
  },
  '2003-08-29': {
    '1. open': '5.8500',
    '2. high': '6.1000',
    '3. low': '5.1833',
    '4. close': '5.5467',
    '5. volume': '538506'
  },
  '2003-07-31': {
    '1. open': '5.5000',
    '2. high': '5.9167',
    '3. low': '5.1000',
    '4. close': '5.8333',
    '5. volume': '618342'
  },
  '2003-06-30': {
    '1. open': '4.2167',
    '2. high': '5.7833',
    '3. low': '4.2167',
    '4. close': '5.5333',
    '5. volume': '663294'
  },
  '2003-05-30': {
    '1. open': '4.3333',
    '2. high': '12.5700',
    '3. low': '3.8333',
    '4. close': '4.1967',
    '5. volume': '314229'
  },
  '2003-04-30': {
    '1. open': '3.7333',
    '2. high': '4.5833',
    '3. low': '3.6167',
    '4. close': '4.3000',
    '5. volume': '674862'
  },
  '2003-03-31': {
    '1. open': '3.1200',
    '2. high': '3.7333',
    '3. low': '3.0833',
    '4. close': '3.6667',
    '5. volume': '297000'
  },
  '2003-02-28': {
    '1. open': '3.0667',
    '2. high': '3.3333',
    '3. low': '2.7333',
    '4. close': '3.1000',
    '5. volume': '292635'
  },
  '2003-01-31': {
    '1. open': '3.4633',
    '2. high': '3.8300',
    '3. low': '2.8000',
    '4. close': '3.0667',
    '5. volume': '300132'
  },
  '2002-12-30': {
    '1. open': '3.6800',
    '2. high': '3.7300',
    '3. low': '3.0733',
    '4. close': '3.4000',
    '5. volume': '256692'
  },
  '2002-11-29': {
    '1. open': '4.0167',
    '2. high': '4.6000',
    '3. low': '3.5167',
    '4. close': '3.5167',
    '5. volume': '506355'
  },
  '2002-10-31': {
    '1. open': '3.4933',
    '2. high': '4.4333',
    '3. low': '2.7167',
    '4. close': '4.0167',
    '5. volume': '478326'
  },
  '2002-09-30': {
    '1. open': '3.9933',
    '2. high': '4.0000',
    '3. low': '3.1167',
    '4. close': '3.4300',
    '5. volume': '241266'
  },
  '2002-08-30': {
    '1. open': '4.4633',
    '2. high': '4.5667',
    '3. low': '3.6000',
    '4. close': '4.0667',
    '5. volume': '621219'
  },
  '2002-07-31': {
    '1. open': '4.8667',
    '2. high': '5.5000',
    '3. low': '4.2567',
    '4. close': '4.5767',
    '5. volume': '356442'
  },
  '2002-06-28': {
    '1. open': '6.3333',
    '2. high': '6.3333',
    '3. low': '3.8667',
    '4. close': '4.9167',
    '5. volume': '490107'
  },
  '2002-05-31': {
    '1. open': '6.2433',
    '2. high': '6.9667',
    '3. low': '6.0000',
    '4. close': '6.3833',
    '5. volume': '441306'
  },
  '2002-04-30': {
    '1. open': '6.6667',
    '2. high': '7.6100',
    '3. low': '5.8833',
    '4. close': '6.1333',
    '5. volume': '346218'
  },
  '2002-03-28': {
    '1. open': '7.0000',
    '2. high': '8.3333',
    '3. low': '6.5667',
    '4. close': '6.7000',
    '5. volume': '387432'
  },
  '2002-02-28': {
    '1. open': '7.2167',
    '2. high': '21.4000',
    '3. low': '6.0533',
    '4. close': '21.2200',
    '5. volume': '174717'
  },
  '2002-01-31': {
    '1. open': '6.5767',
    '2. high': '7.3500',
    '3. low': '6.4233',
    '4. close': '7.0667',
    '5. volume': '275868'
  },
  '2001-12-28': {
    '1. open': '6.5233',
    '2. high': '6.7600',
    '3. low': '5.5000',
    '4. close': '6.4833',
    '5. volume': '399369'
  },
  '2001-11-30': {
    '1. open': '6.5000',
    '2. high': '7.4833',
    '3. low': '6.0000',
    '4. close': '6.4333',
    '5. volume': '424662'
  },
  '2001-10-31': {
    '1. open': '3.8100',
    '2. high': '7.8933',
    '3. low': '3.8100',
    '4. close': '6.6000',
    '5. volume': '1079580'
  },
  '2001-09-28': {
    '1. open': '6.3133',
    '2. high': '6.3200',
    '3. low': '3.2333',
    '4. close': '3.7667',
    '5. volume': '621087'
  },
  '2001-08-31': {
    '1. open': '7.7333',
    '2. high': '8.5133',
    '3. low': '6.0000',
    '4. close': '6.2333',
    '5. volume': '463377'
  },
  '2001-07-31': {
    '1. open': '9.8667',
    '2. high': '10.1000',
    '3. low': '6.7333',
    '4. close': '7.7333',
    '5. volume': '660702'
  },
  '2001-06-29': {
    '1. open': '11.6333',
    '2. high': '12.0000',
    '3. low': '8.3000',
    '4. close': '9.9333',
    '5. volume': '272931'
  },
  '2001-05-31': {
    '1. open': '11.6633',
    '2. high': '12.2667',
    '3. low': '11.1000',
    '4. close': '11.6667',
    '5. volume': '229542'
  },
  '2001-04-30': {
    '1. open': '11.1333',
    '2. high': '11.5833',
    '3. low': '9.9000',
    '4. close': '11.5833',
    '5. volume': '216471'
  },
  '2001-03-30': {
    '1. open': '11.5000',
    '2. high': '12.3333',
    '3. low': '10.0333',
    '4. close': '11.4000',
    '5. volume': '185700'
  },
  '2001-02-28': {
    '1. open': '10.8333',
    '2. high': '12.0000',
    '3. low': '10.7500',
    '4. close': '11.4000',
    '5. volume': '267681'
  },
  '2001-01-31': {
    '1. open': '10.0000',
    '2. high': '11.4000',
    '3. low': '9.6333',
    '4. close': '10.8333',
    '5. volume': '645144'
  },
  '2000-12-29': {
    '1. open': '9.6000',
    '2. high': '10.6833',
    '3. low': '8.6667',
    '4. close': '10.0833',
    '5. volume': '269472'
  },
  '2000-11-30': {
    '1. open': '10.1667',
    '2. high': '28.1000',
    '3. low': '8.9333',
    '4. close': '9.6667',
    '5. volume': '408624'
  },
  '2000-10-31': {
    '1. open': '9.8867',
    '2. high': '32.0000',
    '3. low': '9.2667',
    '4. close': '31.0000',
    '5. volume': '355491'
  },
  '2000-09-29': {
    '1. open': '11.2133',
    '2. high': '36.5500',
    '3. low': '9.8333',
    '4. close': '10.2000',
    '5. volume': '371286'
  },
  '2000-08-31': {
    '1. open': '8.6500',
    '2. high': '11.9667',
    '3. low': '7.9667',
    '4. close': '11.0033',
    '5. volume': '951234'
  },
  '2000-07-31': {
    '1. open': '11.7667',
    '2. high': '36.3100',
    '3. low': '8.6367',
    '4. close': '8.7667',
    '5. volume': '857745'
  },
  '2000-06-30': {
    '1. open': '8.3367',
    '2. high': '15.4000',
    '3. low': '8.3367',
    '4. close': '11.6633',
    '5. volume': '2240664'
  },
  '2000-05-31': {
    '1. open': '19.7000',
    '2. high': '24.3700',
    '3. low': '6.9167',
    '4. close': '8.5000',
    '5. volume': '1196118'
  }
};

// tslint:disable:max-line-length
export const grenkeCompany: Company = {
  id: 1057,
  name: 'Grenke AG',
  country: Country.Deutschland,
  city: 'Baden-Baden',
  url: 'http://www.grenke.de/',
  description: 'Die Grenke AG (bis 2016 Grenkeleasing AG; Eigenschreibweise GRENKE) ist ein deutscher Finanzdienstleister mit Sitz in Baden-Baden. Das Kerngeschäft der im MDAX notierten Aktiengesellschaft ist Leasing von Produkten der Bürokommunikation. Daneben ist Grenke im Bereich Factoring tätig und verfügt über eine Banklizenz. Grenke ist Mitglied im Bundesverband Deutscher Leasing-Unternehmen.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Grenke',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Grenke_Logo.jpg',
  products: [],
  industries: [141018],
  currency: Currency.EUR,
  securityType: SecurityType.Namensaktie,
  isin: 'DE000A161N30',
  wkn: 'A161N3',
  symbol: 'GLJ.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Leasing']
};
// tslint:enable:max-line-length

