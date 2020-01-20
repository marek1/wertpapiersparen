import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {year: 2018, rate: 0.16, yield: 1.00}, {year: 2017, rate: 0.13}, {year: 2016, rate: 0.10}, {
    year: 2015,
    rate: 0.08,
    yield: 1.34
  }, {year: 2014, rate: 0.07, yield: 2.17}, {year: 2013, rate: 0.06, yield: 2.21}, {year: 2012, rate: 0.00, yield: 0.00}, {
    year: 2011,
    rate: 0.00,
    yield: 0.00
  }, {year: 2010, rate: 0.00, yield: 0.00}, {year: 2009, rate: 0.00, yield: 0.00}, {year: 2008, rate: 0.00, yield: 0.00}, {
    year: 2007,
    rate: 0.00,
    yield: 0.00
  }, {year: 2006, rate: 0.00, yield: 0.00}, {year: 2005, rate: 0.00, yield: 0.00}, {year: 2004, rate: 0.00, yield: 0.00}, {
    year: 2003,
    rate: 0.00,
    yield: 0.00
  }, {year: 2002, rate: 0.00, yield: 0.00}, {year: 2001, rate: 0.65, yield: 2.12}, {year: 2000, rate: 0.42, yield: 1.86}
];
const prices = {
  '2019-11-22': {
    '1. open': '19.1200',
    '2. high': '21.7800',
    '3. low': '19.1100',
    '4. close': '20.5400',
    '5. volume': '3908936'
  },
  '2019-10-31': {
    '1. open': '18.2100',
    '2. high': '20.2400',
    '3. low': '17.1700',
    '4. close': '19.1400',
    '5. volume': '4852271'
  },
  '2019-09-30': {
    '1. open': '19.0400',
    '2. high': '20.5800',
    '3. low': '17.8400',
    '4. close': '18.2500',
    '5. volume': '4104599'
  },
  '2019-08-30': {
    '1. open': '21.1000',
    '2. high': '21.3200',
    '3. low': '16.6900',
    '4. close': '19.0400',
    '5. volume': '5547565'
  },
  '2019-07-31': {
    '1. open': '20.9600',
    '2. high': '21.8800',
    '3. low': '18.8600',
    '4. close': '21.2600',
    '5. volume': '3265570'
  },
  '2019-06-28': {
    '1. open': '19.7000',
    '2. high': '21.5200',
    '3. low': '18.7600',
    '4. close': '20.4800',
    '5. volume': '4440793'
  },
  '2019-05-31': {
    '1. open': '24.2800',
    '2. high': '24.2800',
    '3. low': '19.1700',
    '4. close': '19.8100',
    '5. volume': '5410113'
  },
  '2019-04-30': {
    '1. open': '22.3800',
    '2. high': '25.1600',
    '3. low': '22.2400',
    '4. close': '24.0400',
    '5. volume': '2820582'
  },
  '2019-03-29': {
    '1. open': '21.1800',
    '2. high': '23.0000',
    '3. low': '20.6600',
    '4. close': '22.3000',
    '5. volume': '2880492'
  },
  '2019-02-28': {
    '1. open': '19.8900',
    '2. high': '22.1800',
    '3. low': '19.3200',
    '4. close': '21.1800',
    '5. volume': '3515314'
  },
  '2019-01-31': {
    '1. open': '16.0000',
    '2. high': '20.5800',
    '3. low': '15.4500',
    '4. close': '19.9100',
    '5. volume': '4689752'
  },
  '2018-12-28': {
    '1. open': '20.2200',
    '2. high': '20.3400',
    '3. low': '15.2000',
    '4. close': '15.8100',
    '5. volume': '4401076'
  },
  '2018-11-30': {
    '1. open': '21.8000',
    '2. high': '23.0000',
    '3. low': '16.2700',
    '4. close': '19.4700',
    '5. volume': '8350636'
  },
  '2018-10-31': {
    '1. open': '25.3400',
    '2. high': '25.4800',
    '3. low': '20.2400',
    '4. close': '21.9800',
    '5. volume': '5520348'
  },
  '2018-09-28': {
    '1. open': '25.2800',
    '2. high': '28.0600',
    '3. low': '23.6600',
    '4. close': '25.2200',
    '5. volume': '3723557'
  },
  '2018-08-31': {
    '1. open': '24.4400',
    '2. high': '26.9000',
    '3. low': '23.3200',
    '4. close': '25.3600',
    '5. volume': '4543424'
  },
  '2018-07-31': {
    '1. open': '21.8200',
    '2. high': '24.9000',
    '3. low': '21.4800',
    '4. close': '24.3000',
    '5. volume': '4131791'
  },
  '2018-06-29': {
    '1. open': '20.5000',
    '2. high': '22.6600',
    '3. low': '19.2000',
    '4. close': '22.0800',
    '5. volume': '3494979'
  },
  '2018-05-31': {
    '1. open': '21.1200',
    '2. high': '23.8000',
    '3. low': '19.3000',
    '4. close': '20.4000',
    '5. volume': '5150197'
  },
  '2018-04-30': {
    '1. open': '18.0100',
    '2. high': '21.5800',
    '3. low': '17.3900',
    '4. close': '21.4000',
    '5. volume': '8124043'
  },
  '2018-03-29': {
    '1. open': '20.7600',
    '2. high': '21.9600',
    '3. low': '17.2500',
    '4. close': '17.9700',
    '5. volume': '7635139'
  },
  '2018-02-28': {
    '1. open': '22.2200',
    '2. high': '22.9800',
    '3. low': '19.0000',
    '4. close': '20.7200',
    '5. volume': '4759603'
  },
  '2018-01-31': {
    '1. open': '18.1300',
    '2. high': '22.7600',
    '3. low': '17.9800',
    '4. close': '22.1600',
    '5. volume': '5050059'
  },
  '2017-12-29': {
    '1. open': '17.8050',
    '2. high': '18.1350',
    '3. low': '16.3000',
    '4. close': '17.9850',
    '5. volume': '3109302'
  },
  '2017-11-30': {
    '1. open': '17.0400',
    '2. high': '18.6000',
    '3. low': '15.3450',
    '4. close': '17.7100',
    '5. volume': '6934620'
  },
  '2017-10-31': {
    '1. open': '18.6250',
    '2. high': '19.2450',
    '3. low': '15.5500',
    '4. close': '16.5900',
    '5. volume': '4681366'
  },
  '2017-09-29': {
    '1. open': '17.1000',
    '2. high': '19.2950',
    '3. low': '16.5650',
    '4. close': '18.6200',
    '5. volume': '3640890'
  },
  '2017-08-31': {
    '1. open': '14.7750',
    '2. high': '17.4250',
    '3. low': '14.1850',
    '4. close': '16.9950',
    '5. volume': '7019003'
  },
  '2017-07-31': {
    '1. open': '13.4000',
    '2. high': '15.3600',
    '3. low': '13.2100',
    '4. close': '14.7650',
    '5. volume': '4628636'
  },
  '2017-06-30': {
    '1. open': '12.8250',
    '2. high': '14.2850',
    '3. low': '12.2100',
    '4. close': '13.1750',
    '5. volume': '4627078'
  },
  '2017-05-31': {
    '1. open': '13.0800',
    '2. high': '13.8350',
    '3. low': '11.9800',
    '4. close': '12.8400',
    '5. volume': '3926500'
  },
  '2017-04-28': {
    '1. open': '10.3450',
    '2. high': '13.1300',
    '3. low': '10.2800',
    '4. close': '12.9850',
    '5. volume': '3684808'
  },
  '2017-03-31': {
    '1. open': '9.3830',
    '2. high': '10.7850',
    '3. low': '9.1520',
    '4. close': '10.2950',
    '5. volume': '2969525'
  },
  '2017-02-28': {
    '1. open': '8.5390',
    '2. high': '9.9550',
    '3. low': '8.4640',
    '4. close': '9.3400',
    '5. volume': '3422455'
  },
  '2017-01-31': {
    '1. open': '8.7000',
    '2. high': '9.0830',
    '3. low': '8.4610',
    '4. close': '8.5000',
    '5. volume': '3921082'
  },
  '2016-12-30': {
    '1. open': '9.5110',
    '2. high': '9.6000',
    '3. low': '8.1510',
    '4. close': '8.7000',
    '5. volume': '3959550'
  },
  '2016-11-30': {
    '1. open': '9.0200',
    '2. high': '9.9990',
    '3. low': '8.4810',
    '4. close': '9.4770',
    '5. volume': '4056956'
  },
  '2016-10-31': {
    '1. open': '10.2400',
    '2. high': '11.2800',
    '3. low': '8.5370',
    '4. close': '8.9890',
    '5. volume': '7226379'
  },
  '2016-09-30': {
    '1. open': '8.7100',
    '2. high': '10.3900',
    '3. low': '8.4000',
    '4. close': '10.1250',
    '5. volume': '4019051'
  },
  '2016-08-31': {
    '1. open': '7.8400',
    '2. high': '8.9000',
    '3. low': '7.7780',
    '4. close': '8.7000',
    '5. volume': '2164571'
  },
  '2016-07-29': {
    '1. open': '7.2600',
    '2. high': '7.8700',
    '3. low': '6.8610',
    '4. close': '7.8500',
    '5. volume': '1956784'
  },
  '2016-06-30': {
    '1. open': '7.0800',
    '2. high': '7.4980',
    '3. low': '6.4000',
    '4. close': '7.2820',
    '5. volume': '1695195'
  },
  '2016-05-31': {
    '1. open': '7.0000',
    '2. high': '7.2560',
    '3. low': '6.4500',
    '4. close': '7.0800',
    '5. volume': '1504344'
  },
  '2016-04-29': {
    '1. open': '6.5000',
    '2. high': '7.1190',
    '3. low': '6.3320',
    '4. close': '6.9450',
    '5. volume': '1434536'
  },
  '2016-03-31': {
    '1. open': '5.6000',
    '2. high': '6.5910',
    '3. low': '5.4940',
    '4. close': '6.5060',
    '5. volume': '1477194'
  },
  '2016-02-29': {
    '1. open': '5.4800',
    '2. high': '5.7880',
    '3. low': '4.5600',
    '4. close': '5.5300',
    '5. volume': '1761594'
  },
  '2016-01-29': {
    '1. open': '5.8800',
    '2. high': '5.8800',
    '3. low': '5.1820',
    '4. close': '5.5470',
    '5. volume': '1610885'
  },
  '2015-12-30': {
    '1. open': '5.3430',
    '2. high': '6.0390',
    '3. low': '5.2180',
    '4. close': '5.9500',
    '5. volume': '2199802'
  },
  '2015-11-30': {
    '1. open': '4.7800',
    '2. high': '5.3730',
    '3. low': '4.7800',
    '4. close': '5.3540',
    '5. volume': '2187257'
  },
  '2015-10-30': {
    '1. open': '4.4700',
    '2. high': '4.9000',
    '3. low': '4.4410',
    '4. close': '4.7800',
    '5. volume': '776980'
  },
  '2015-09-30': {
    '1. open': '4.6490',
    '2. high': '4.8400',
    '3. low': '4.3900',
    '4. close': '4.5730',
    '5. volume': '627907'
  },
  '2015-08-31': {
    '1. open': '4.7300',
    '2. high': '5.0000',
    '3. low': '4.1400',
    '4. close': '4.7200',
    '5. volume': '936684'
  },
  '2015-07-31': {
    '1. open': '4.4000',
    '2. high': '4.9800',
    '3. low': '4.2700',
    '4. close': '4.7700',
    '5. volume': '1022906'
  },
  '2015-06-30': {
    '1. open': '4.8790',
    '2. high': '5.1190',
    '3. low': '4.2730',
    '4. close': '4.3800',
    '5. volume': '1248254'
  },
  '2015-05-29': {
    '1. open': '4.1110',
    '2. high': '4.8800',
    '3. low': '4.1110',
    '4. close': '4.8740',
    '5. volume': '748707'
  },
  '2015-04-30': {
    '1. open': '4.2010',
    '2. high': '4.4450',
    '3. low': '4.0320',
    '4. close': '4.2000',
    '5. volume': '1854914'
  },
  '2015-03-31': {
    '1. open': '3.6030',
    '2. high': '4.1140',
    '3. low': '3.4270',
    '4. close': '4.1140',
    '5. volume': '775312'
  },
  '2015-02-27': {
    '1. open': '3.3120',
    '2. high': '3.7700',
    '3. low': '3.2530',
    '4. close': '3.7100',
    '5. volume': '836881'
  },
  '2015-01-30': {
    '1. open': '3.2000',
    '2. high': '3.5100',
    '3. low': '3.1000',
    '4. close': '3.3090',
    '5. volume': '1134067'
  },
  '2014-12-30': {
    '1. open': '3.2680',
    '2. high': '3.5200',
    '3. low': '3.1110',
    '4. close': '3.2200',
    '5. volume': '2235916'
  },
  '2014-11-28': {
    '1. open': '2.7400',
    '2. high': '3.1890',
    '3. low': '2.6700',
    '4. close': '3.1590',
    '5. volume': '970956'
  },
  '2014-10-31': {
    '1. open': '2.7690',
    '2. high': '2.9070',
    '3. low': '2.4600',
    '4. close': '2.7380',
    '5. volume': '859177'
  },
  '2014-09-30': {
    '1. open': '2.8780',
    '2. high': '2.9030',
    '3. low': '2.6800',
    '4. close': '2.7300',
    '5. volume': '833550'
  },
  '2014-08-29': {
    '1. open': '2.8000',
    '2. high': '2.9200',
    '3. low': '2.6500',
    '4. close': '2.8840',
    '5. volume': '657663'
  },
  '2014-07-31': {
    '1. open': '2.8300',
    '2. high': '3.0760',
    '3. low': '2.7700',
    '4. close': '2.8020',
    '5. volume': '1043998'
  },
  '2014-06-30': {
    '1. open': '2.8500',
    '2. high': '3.1510',
    '3. low': '2.7710',
    '4. close': '2.8400',
    '5. volume': '632499'
  },
  '2014-05-30': {
    '1. open': '2.7800',
    '2. high': '2.9300',
    '3. low': '2.7200',
    '4. close': '2.8800',
    '5. volume': '392051'
  },
  '2014-04-30': {
    '1. open': '2.6780',
    '2. high': '2.8650',
    '3. low': '2.6500',
    '4. close': '2.7600',
    '5. volume': '439642'
  },
  '2014-03-31': {
    '1. open': '2.7200',
    '2. high': '2.8190',
    '3. low': '2.5360',
    '4. close': '2.6760',
    '5. volume': '771763'
  },
  '2014-02-28': {
    '1. open': '2.8470',
    '2. high': '2.9400',
    '3. low': '2.6000',
    '4. close': '2.8000',
    '5. volume': '700604'
  },
  '2014-01-31': {
    '1. open': '2.7900',
    '2. high': '3.0000',
    '3. low': '2.6500',
    '4. close': '2.9000',
    '5. volume': '757818'
  },
  '2013-12-30': {
    '1. open': '2.9950',
    '2. high': '3.0300',
    '3. low': '2.4100',
    '4. close': '2.7200',
    '5. volume': '1166692'
  },
  '2013-11-29': {
    '1. open': '2.9000',
    '2. high': '3.0990',
    '3. low': '2.6000',
    '4. close': '3.0000',
    '5. volume': '2265444'
  },
  '2013-10-31': {
    '1. open': '2.6000',
    '2. high': '2.9700',
    '3. low': '2.5500',
    '4. close': '2.9010',
    '5. volume': '913097'
  },
  '2013-09-30': {
    '1. open': '2.2800',
    '2. high': '2.6300',
    '3. low': '2.2200',
    '4. close': '2.5940',
    '5. volume': '474418'
  },
  '2013-08-30': {
    '1. open': '2.1900',
    '2. high': '2.3500',
    '3. low': '2.1100',
    '4. close': '2.2770',
    '5. volume': '937524'
  },
  '2013-07-31': {
    '1. open': '2.2000',
    '2. high': '2.3810',
    '3. low': '2.1200',
    '4. close': '2.2000',
    '5. volume': '758189'
  },
  '2013-06-28': {
    '1. open': '2.2950',
    '2. high': '2.4190',
    '3. low': '2.1700',
    '4. close': '2.2000',
    '5. volume': '937423'
  },
  '2013-05-31': {
    '1. open': '2.0500',
    '2. high': '2.3300',
    '3. low': '2.0450',
    '4. close': '2.2900',
    '5. volume': '720548'
  },
  '2013-04-30': {
    '1. open': '2.2500',
    '2. high': '2.3000',
    '3. low': '1.8800',
    '4. close': '2.1100',
    '5. volume': '680679'
  },
  '2013-03-28': {
    '1. open': '2.1100',
    '2. high': '2.3700',
    '3. low': '2.0600',
    '4. close': '2.3000',
    '5. volume': '985207'
  },
  '2013-02-28': {
    '1. open': '2.2300',
    '2. high': '2.4500',
    '3. low': '2.1000',
    '4. close': '2.1550',
    '5. volume': '809029'
  },
  '2013-01-31': {
    '1. open': '2.2600',
    '2. high': '2.3300',
    '3. low': '2.1410',
    '4. close': '2.2300',
    '5. volume': '900289'
  },
  '2012-12-28': {
    '1. open': '2.3550',
    '2. high': '2.5390',
    '3. low': '2.2020',
    '4. close': '2.2970',
    '5. volume': '409796'
  },
  '2012-11-30': {
    '1. open': '2.5300',
    '2. high': '2.6000',
    '3. low': '2.3330',
    '4. close': '2.3830',
    '5. volume': '354719'
  },
  '2012-10-31': {
    '1. open': '2.5000',
    '2. high': '2.7500',
    '3. low': '2.4210',
    '4. close': '2.5300',
    '5. volume': '498827'
  },
  '2012-09-28': {
    '1. open': '2.3050',
    '2. high': '2.5400',
    '3. low': '2.2500',
    '4. close': '2.4970',
    '5. volume': '436059'
  },
  '2012-08-31': {
    '1. open': '2.2890',
    '2. high': '2.5400',
    '3. low': '2.2750',
    '4. close': '2.3100',
    '5. volume': '697329'
  },
  '2012-07-31': {
    '1. open': '2.2290',
    '2. high': '2.4600',
    '3. low': '2.1750',
    '4. close': '2.2900',
    '5. volume': '618753'
  },
  '2012-06-29': {
    '1. open': '2.4310',
    '2. high': '2.4310',
    '3. low': '2.0650',
    '4. close': '2.2080',
    '5. volume': '809092'
  },
  '2012-05-31': {
    '1. open': '2.3100',
    '2. high': '2.6000',
    '3. low': '2.2840',
    '4. close': '2.4300',
    '5. volume': '1398692'
  },
  '2012-04-30': {
    '1. open': '1.9500',
    '2. high': '2.4490',
    '3. low': '1.9500',
    '4. close': '2.2800',
    '5. volume': '1593022'
  },
  '2012-03-30': {
    '1. open': '2.0300',
    '2. high': '2.1500',
    '3. low': '1.8700',
    '4. close': '1.9590',
    '5. volume': '1366161'
  },
  '2012-02-29': {
    '1. open': '2.1380',
    '2. high': '2.3000',
    '3. low': '1.9030',
    '4. close': '2.0280',
    '5. volume': '808250'
  },
  '2012-01-31': {
    '1. open': '1.8600',
    '2. high': '2.1800',
    '3. low': '1.7400',
    '4. close': '2.1290',
    '5. volume': '1383423'
  },
  '2011-12-30': {
    '1. open': '1.9700',
    '2. high': '2.0685',
    '3. low': '1.7300',
    '4. close': '1.8100',
    '5. volume': '254182'
  },
  '2011-11-30': {
    '1. open': '2.1867',
    '2. high': '2.2655',
    '3. low': '1.8971',
    '4. close': '2.0192',
    '5. volume': '228869'
  },
  '2011-10-31': {
    '1. open': '1.8922',
    '2. high': '2.3118',
    '3. low': '1.7740',
    '4. close': '2.2950',
    '5. volume': '214448'
  },
  '2011-09-30': {
    '1. open': '2.1572',
    '2. high': '2.1572',
    '3. low': '1.6942',
    '4. close': '1.9208',
    '5. volume': '295951'
  },
  '2011-08-31': {
    '1. open': '2.5807',
    '2. high': '2.5905',
    '3. low': '1.9109',
    '4. close': '2.1572',
    '5. volume': '419915'
  },
  '2011-07-29': {
    '1. open': '2.5925',
    '2. high': '2.7974',
    '3. low': '2.4625',
    '4. close': '2.5610',
    '5. volume': '250774'
  },
  '2011-06-30': {
    '1. open': '2.6595',
    '2. high': '2.7176',
    '3. low': '2.3049',
    '4. close': '2.5413',
    '5. volume': '370446'
  },
  '2011-05-31': {
    '1. open': '2.7580',
    '2. high': '3.0043',
    '3. low': '2.5905',
    '4. close': '2.6812',
    '5. volume': '355497'
  },
  '2011-04-29': {
    '1. open': '2.6890',
    '2. high': '2.8516',
    '3. low': '2.4132',
    '4. close': '2.7580',
    '5. volume': '265490'
  },
  '2011-03-31': {
    '1. open': '2.7777',
    '2. high': '2.8466',
    '3. low': '1.9306',
    '4. close': '2.6890',
    '5. volume': '558504'
  },
  '2011-02-28': {
    '1. open': '2.8181',
    '2. high': '3.1028',
    '3. low': '2.5117',
    '4. close': '2.7777',
    '5. volume': '642972'
  },
  '2011-01-31': {
    '1. open': '2.5315',
    '2. high': '2.9550',
    '3. low': '2.3650',
    '4. close': '2.8762',
    '5. volume': '431109'
  },
  '2010-12-30': {
    '1. open': '2.7186',
    '2. high': '2.7373',
    '3. low': '2.2901',
    '4. close': '2.5512',
    '5. volume': '213706'
  },
  '2010-11-30': {
    '1. open': '2.6398',
    '2. high': '2.8762',
    '3. low': '2.2950',
    '4. close': '2.6733',
    '5. volume': '541795'
  },
  '2010-10-29': {
    '1. open': '2.6595',
    '2. high': '2.7925',
    '3. low': '2.1965',
    '4. close': '2.6398',
    '5. volume': '731019'
  },
  '2010-09-30': {
    '1. open': '3.0978',
    '2. high': '3.2209',
    '3. low': '2.6004',
    '4. close': '2.6693',
    '5. volume': '982620'
  },
  '2010-08-31': {
    '1. open': '2.1670',
    '2. high': '3.1520',
    '3. low': '2.0882',
    '4. close': '3.0436',
    '5. volume': '1378913'
  },
  '2010-07-30': {
    '1. open': '2.2458',
    '2. high': '2.2645',
    '3. low': '2.0488',
    '4. close': '2.1542',
    '5. volume': '198011'
  },
  '2010-06-30': {
    '1. open': '1.6646',
    '2. high': '2.3394',
    '3. low': '1.5760',
    '4. close': '2.2241',
    '5. volume': '710407'
  },
  '2010-05-31': {
    '1. open': '1.8902',
    '2. high': '1.8902',
    '3. low': '1.5366',
    '4. close': '1.7237',
    '5. volume': '538565'
  },
  '2010-04-30': {
    '1. open': '1.5809',
    '2. high': '2.1769',
    '3. low': '1.5169',
    '4. close': '1.8715',
    '5. volume': '785799'
  },
  '2010-03-31': {
    '1. open': '1.8715',
    '2. high': '1.9700',
    '3. low': '1.4873',
    '4. close': '1.5760',
    '5. volume': '401914'
  },
  '2010-02-26': {
    '1. open': '1.6942',
    '2. high': '2.2655',
    '3. low': '1.6844',
    '4. close': '1.9700',
    '5. volume': '232139'
  },
  '2010-01-29': {
    '1. open': '1.5760',
    '2. high': '1.7435',
    '3. low': '1.5573',
    '4. close': '1.5573',
    '5. volume': '37330'
  },
  '2009-12-30': {
    '1. open': '1.7435',
    '2. high': '1.8616',
    '3. low': '1.5859',
    '4. close': '1.6351',
    '5. volume': '118704'
  },
  '2009-11-30': {
    '1. open': '1.3297',
    '2. high': '1.9404',
    '3. low': '1.2313',
    '4. close': '1.8025',
    '5. volume': '128560'
  },
  '2009-10-30': {
    '1. open': '1.2509',
    '2. high': '1.4184',
    '3. low': '1.2214',
    '4. close': '1.4184',
    '5. volume': '26673'
  },
  '2009-09-30': {
    '1. open': '1.2017',
    '2. high': '1.3101',
    '3. low': '1.1722',
    '4. close': '1.2509',
    '5. volume': '56980'
  },
  '2009-08-31': {
    '1. open': '0.8964',
    '2. high': '1.4775',
    '3. low': '0.8964',
    '4. close': '1.2017',
    '5. volume': '36454'
  },
  '2009-07-31': {
    '1. open': '0.6600',
    '2. high': '0.9948',
    '3. low': '0.5221',
    '4. close': '0.8964',
    '5. volume': '21136'
  },
  '2009-06-30': {
    '1. open': '0.7387',
    '2. high': '0.7387',
    '3. low': '0.5811',
    '4. close': '0.6600',
    '5. volume': '14634'
  },
  '2009-05-29': {
    '1. open': '0.6993',
    '2. high': '0.7880',
    '3. low': '0.6993',
    '4. close': '0.7387',
    '5. volume': '41965'
  },
  '2009-04-30': {
    '1. open': '0.7190',
    '2. high': '0.7584',
    '3. low': '0.6304',
    '4. close': '0.7387',
    '5. volume': '39070'
  },
  '2009-03-31': {
    '1. open': '0.6895',
    '2. high': '0.7782',
    '3. low': '0.6403',
    '4. close': '0.7584',
    '5. volume': '39903'
  },
  '2009-02-27': {
    '1. open': '0.6895',
    '2. high': '0.7387',
    '3. low': '0.6797',
    '4. close': '0.6895',
    '5. volume': '17149'
  },
  '2009-01-30': {
    '1. open': '0.6797',
    '2. high': '0.7190',
    '3. low': '0.6107',
    '4. close': '0.6895',
    '5. volume': '19850'
  },
  '2008-12-30': {
    '1. open': '0.7486',
    '2. high': '0.7486',
    '3. low': '0.4925',
    '4. close': '0.6107',
    '5. volume': '44570'
  },
  '2008-11-28': {
    '1. open': '0.6993',
    '2. high': '0.8668',
    '3. low': '0.6993',
    '4. close': '0.7486',
    '5. volume': '15616'
  },
  '2008-10-31': {
    '1. open': '0.7683',
    '2. high': '0.8176',
    '3. low': '0.6895',
    '4. close': '0.6993',
    '5. volume': '126762'
  },
  '2008-09-30': {
    '1. open': '0.9456',
    '2. high': '0.9554',
    '3. low': '0.7092',
    '4. close': '0.7190',
    '5. volume': '105072'
  },
  '2008-08-29': {
    '1. open': '0.9948',
    '2. high': '1.1328',
    '3. low': '0.8569',
    '4. close': '1.0145',
    '5. volume': '265831'
  },
  '2008-07-28': {
    '1. open': '0.7190',
    '2. high': '0.7683',
    '3. low': '0.5516',
    '4. close': '0.6403',
    '5. volume': '77559'
  },
  '2008-06-30': {
    '1. open': '0.6895',
    '2. high': '0.7880',
    '3. low': '0.6698',
    '4. close': '0.7584',
    '5. volume': '62516'
  },
  '2008-05-30': {
    '1. open': '0.7486',
    '2. high': '0.7979',
    '3. low': '0.6304',
    '4. close': '0.7190',
    '5. volume': '55222'
  },
  '2008-04-29': {
    '1. open': '0.6698',
    '2. high': '0.8865',
    '3. low': '0.6304',
    '4. close': '0.7782',
    '5. volume': '90002'
  },
  '2008-03-31': {
    '1. open': '0.6895',
    '2. high': '0.7387',
    '3. low': '0.5516',
    '4. close': '0.6600',
    '5. volume': '64196'
  },
  '2008-02-29': {
    '1. open': '0.7387',
    '2. high': '0.7584',
    '3. low': '0.5811',
    '4. close': '0.6895',
    '5. volume': '40290'
  },
  '2008-01-31': {
    '1. open': '0.7387',
    '2. high': '0.8471',
    '3. low': '0.5811',
    '4. close': '0.7092',
    '5. volume': '65550'
  },
  '2007-12-28': {
    '1. open': '0.7683',
    '2. high': '0.8766',
    '3. low': '0.7387',
    '4. close': '0.7782',
    '5. volume': '35983'
  },
  '2007-11-30': {
    '1. open': '0.9653',
    '2. high': '0.9850',
    '3. low': '0.6993',
    '4. close': '0.8372',
    '5. volume': '106610'
  },
  '2007-10-31': {
    '1. open': '0.9850',
    '2. high': '1.0737',
    '3. low': '0.9161',
    '4. close': '0.9850',
    '5. volume': '125751'
  },
  '2007-09-28': {
    '1. open': '1.0441',
    '2. high': '1.0835',
    '3. low': '0.8865',
    '4. close': '0.9456',
    '5. volume': '77877'
  },
  '2007-08-31': {
    '1. open': '1.1623',
    '2. high': '1.2115',
    '3. low': '0.9948',
    '4. close': '1.0441',
    '5. volume': '150122'
  },
  '2007-07-31': {
    '1. open': '1.4480',
    '2. high': '1.4480',
    '3. low': '1.1820',
    '4. close': '1.1820',
    '5. volume': '131846'
  },
  '2007-06-29': {
    '1. open': '1.2214',
    '2. high': '1.8814',
    '3. low': '1.1820',
    '4. close': '1.4480',
    '5. volume': '713771'
  },
  '2007-05-31': {
    '1. open': '1.0343',
    '2. high': '1.2313',
    '3. low': '1.0244',
    '4. close': '1.1918',
    '5. volume': '132584'
  },
  '2007-04-30': {
    '1. open': '1.0638',
    '2. high': '1.2805',
    '3. low': '1.0244',
    '4. close': '1.0737',
    '5. volume': '211363'
  },
  '2007-03-30': {
    '1. open': '1.0934',
    '2. high': '1.1328',
    '3. low': '0.9850',
    '4. close': '1.0737',
    '5. volume': '195634'
  },
  '2007-02-28': {
    '1. open': '1.0737',
    '2. high': '1.1426',
    '3. low': '1.0441',
    '4. close': '1.0835',
    '5. volume': '104665'
  },
  '2007-01-31': {
    '1. open': '0.9751',
    '2. high': '1.2411',
    '3. low': '0.9259',
    '4. close': '1.1426',
    '5. volume': '215025'
  },
  '2006-12-29': {
    '1. open': '1.0835',
    '2. high': '1.0835',
    '3. low': '0.8569',
    '4. close': '1.0441',
    '5. volume': '153929'
  },
  '2006-11-30': {
    '1. open': '1.1130',
    '2. high': '1.1918',
    '3. low': '0.7387',
    '4. close': '1.0343',
    '5. volume': '518762'
  },
  '2006-10-31': {
    '1. open': '1.2805',
    '2. high': '1.3692',
    '3. low': '0.9948',
    '4. close': '1.1032',
    '5. volume': '162588'
  },
  '2006-09-29': {
    '1. open': '1.3790',
    '2. high': '1.4282',
    '3. low': '1.2805',
    '4. close': '1.2903',
    '5. volume': '97321'
  },
  '2006-08-31': {
    '1. open': '1.7927',
    '2. high': '1.8616',
    '3. low': '1.3593',
    '4. close': '1.3987',
    '5. volume': '170091'
  },
  '2006-07-31': {
    '1. open': '1.5859',
    '2. high': '1.8025',
    '3. low': '1.5760',
    '4. close': '1.8025',
    '5. volume': '89153'
  },
  '2006-06-30': {
    '1. open': '1.9208',
    '2. high': '1.9700',
    '3. low': '1.6056',
    '4. close': '1.6351',
    '5. volume': '109593'
  },
  '2006-05-31': {
    '1. open': '2.2162',
    '2. high': '2.3147',
    '3. low': '1.8715',
    '4. close': '1.9799',
    '5. volume': '201536'
  },
  '2006-04-28': {
    '1. open': '2.7285',
    '2. high': '2.9255',
    '3. low': '2.0784',
    '4. close': '2.2557',
    '5. volume': '231324'
  },
  '2006-03-31': {
    '1. open': '2.1670',
    '2. high': '3.4475',
    '3. low': '1.9897',
    '4. close': '2.8171',
    '5. volume': '895706'
  },
  '2006-02-28': {
    '1. open': '2.0192',
    '2. high': '2.3147',
    '3. low': '1.9404',
    '4. close': '2.2162',
    '5. volume': '305282'
  },
  '2006-01-31': {
    '1. open': '2.2359',
    '2. high': '2.3345',
    '3. low': '1.8912',
    '4. close': '2.0094',
    '5. volume': '440684'
  },
  '2005-12-30': {
    '1. open': '2.3147',
    '2. high': '2.5807',
    '3. low': '2.1276',
    '4. close': '2.3147',
    '5. volume': '372205'
  },
  '2005-11-30': {
    '1. open': '1.8518',
    '2. high': '2.5610',
    '3. low': '1.8025',
    '4. close': '2.3147',
    '5. volume': '414260'
  },
  '2005-10-31': {
    '1. open': '2.6201',
    '2. high': '2.6300',
    '3. low': '1.8223',
    '4. close': '1.8912',
    '5. volume': '194758'
  },
  '2005-09-30': {
    '1. open': '2.6595',
    '2. high': '2.8073',
    '3. low': '2.4822',
    '4. close': '2.6595',
    '5. volume': '114285'
  },
  '2005-08-31': {
    '1. open': '2.8565',
    '2. high': '3.0929',
    '3. low': '2.6595',
    '4. close': '2.7482',
    '5. volume': '188038'
  },
  '2005-07-29': {
    '1. open': '2.8073',
    '2. high': '3.2997',
    '3. low': '2.5610',
    '4. close': '2.8270',
    '5. volume': '241102'
  },
  '2005-06-30': {
    '1. open': '2.9156',
    '2. high': '2.9550',
    '3. low': '2.5117',
    '4. close': '2.6693',
    '5. volume': '188373'
  },
  '2005-05-31': {
    '1. open': '3.2013',
    '2. high': '3.6248',
    '3. low': '2.8565',
    '4. close': '2.9550',
    '5. volume': '167768'
  },
  '2005-04-29': {
    '1. open': '3.9104',
    '2. high': '4.0385',
    '3. low': '3.2013',
    '4. close': '3.3194',
    '5. volume': '163596'
  },
  '2005-03-31': {
    '1. open': '3.7824',
    '2. high': '4.0385',
    '3. low': '3.5952',
    '4. close': '3.8907',
    '5. volume': '141623'
  },
  '2005-02-28': {
    '1. open': '3.6445',
    '2. high': '4.5310',
    '3. low': '3.5460',
    '4. close': '3.7331',
    '5. volume': '389484'
  },
  '2005-01-31': {
    '1. open': '3.4967',
    '2. high': '3.8316',
    '3. low': '3.4475',
    '4. close': '3.5952',
    '5. volume': '87552'
  },
  '2004-12-31': {
    '1. open': '3.8809',
    '2. high': '4.3044',
    '3. low': '3.4475',
    '4. close': '3.4475',
    '5. volume': '111433'
  },
  '2004-11-30': {
    '1. open': '3.3391',
    '2. high': '4.5211',
    '3. low': '2.9255',
    '4. close': '3.7627',
    '5. volume': '301890'
  },
  '2004-10-29': {
    '1. open': '3.2013',
    '2. high': '3.4376',
    '3. low': '2.9550',
    '4. close': '3.2505',
    '5. volume': '167557'
  },
  '2004-09-30': {
    '1. open': '3.4475',
    '2. high': '3.5854',
    '3. low': '3.1520',
    '4. close': '3.2997',
    '5. volume': '124552'
  },
  '2004-08-31': {
    '1. open': '4.7280',
    '2. high': '4.7772',
    '3. low': '3.2505',
    '4. close': '3.3982',
    '5. volume': '365878'
  },
  '2004-07-30': {
    '1. open': '5.3091',
    '2. high': '5.4667',
    '3. low': '4.3438',
    '4. close': '4.6295',
    '5. volume': '221925'
  },
  '2004-06-30': {
    '1. open': '6.0085',
    '2. high': '6.1070',
    '3. low': '4.7772',
    '4. close': '5.1318',
    '5. volume': '272527'
  },
  '2004-05-31': {
    '1. open': '6.8950',
    '2. high': '7.0427',
    '3. low': '5.9395',
    '4. close': '6.2055',
    '5. volume': '221448'
  },
  '2004-04-30': {
    '1. open': '7.0132',
    '2. high': '7.1905',
    '3. low': '6.6290',
    '4. close': '7.0033',
    '5. volume': '226209'
  },
  '2004-03-31': {
    '1. open': '6.7472',
    '2. high': '8.2740',
    '3. low': '5.0727',
    '4. close': '7.0427',
    '5. volume': '1219707'
  },
  '2004-02-27': {
    '1. open': '7.2003',
    '2. high': '7.3382',
    '3. low': '6.4123',
    '4. close': '6.6980',
    '5. volume': '272626'
  },
  '2004-01-30': {
    '1. open': '6.3040',
    '2. high': '7.5845',
    '3. low': '6.1070',
    '4. close': '7.1609',
    '5. volume': '412147'
  },
  '2003-12-31': {
    '1. open': '6.6980',
    '2. high': '6.8359',
    '3. low': '6.1267',
    '4. close': '6.3040',
    '5. volume': '385967'
  },
  '2003-11-28': {
    '1. open': '8.8256',
    '2. high': '9.2984',
    '3. low': '6.2646',
    '4. close': '6.6290',
    '5. volume': '802983'
  },
  '2003-10-31': {
    '1. open': '8.8650',
    '2. high': '8.9635',
    '3. low': '7.9785',
    '4. close': '8.8157',
    '5. volume': '480839'
  },
  '2003-09-30': {
    '1. open': '9.0620',
    '2. high': '10.2932',
    '3. low': '8.7665',
    '4. close': '8.9635',
    '5. volume': '485593'
  },
  '2003-08-29': {
    '1. open': '10.3917',
    '2. high': '10.3917',
    '3. low': '8.9044',
    '4. close': '8.9635',
    '5. volume': '169833'
  },
  '2003-07-31': {
    '1. open': '10.3917',
    '2. high': '10.3917',
    '3. low': '10.3917',
    '4. close': '10.3917',
    '5. volume': '0'
  },
  '2003-06-30': {
    '1. open': '10.3917',
    '2. high': '10.3917',
    '3. low': '10.3917',
    '4. close': '10.3917',
    '5. volume': '0'
  },
  '2003-05-30': {
    '1. open': '10.3917',
    '2. high': '10.3917',
    '3. low': '10.3917',
    '4. close': '10.3917',
    '5. volume': '0'
  },
  '2003-04-30': {
    '1. open': '10.3917',
    '2. high': '10.3917',
    '3. low': '10.3917',
    '4. close': '10.3917',
    '5. volume': '0'
  },
  '2003-03-31': {
    '1. open': '10.3917',
    '2. high': '10.3917',
    '3. low': '10.3917',
    '4. close': '10.3917',
    '5. volume': '0'
  },
  '2003-02-28': {
    '1. open': '10.3917',
    '2. high': '10.3917',
    '3. low': '10.3917',
    '4. close': '10.3917',
    '5. volume': '0'
  },
  '2003-01-31': {
    '1. open': '9.9485',
    '2. high': '10.9236',
    '3. low': '9.8500',
    '4. close': '10.3917',
    '5. volume': '74728'
  },
  '2002-12-31': {
    '1. open': '10.3425',
    '2. high': '11.3275',
    '3. low': '9.3673',
    '4. close': '9.9485',
    '5. volume': '492225'
  },
  '2002-11-29': {
    '1. open': '11.3669',
    '2. high': '12.3125',
    '3. low': '9.8992',
    '4. close': '10.3031',
    '5. volume': '447073'
  },
  '2002-10-31': {
    '1. open': '7.4860',
    '2. high': '11.7609',
    '3. low': '7.2890',
    '4. close': '11.4260',
    '5. volume': '678927'
  },
  '2002-09-30': {
    '1. open': '11.5737',
    '2. high': '11.5737',
    '3. low': '7.0427',
    '4. close': '7.5352',
    '5. volume': '336132'
  },
  '2002-08-30': {
    '1. open': '11.6821',
    '2. high': '12.4110',
    '3. low': '10.6380',
    '4. close': '11.7116',
    '5. volume': '171223'
  },
  '2002-07-31': {
    '1. open': '10.6380',
    '2. high': '12.9035',
    '3. low': '10.0470',
    '4. close': '11.9579',
    '5. volume': '542347'
  },
  '2002-06-28': {
    '1. open': '11.8101',
    '2. high': '12.6375',
    '3. low': '9.8401',
    '4. close': '10.5395',
    '5. volume': '524682'
  },
  '2002-05-31': {
    '1. open': '20.6850',
    '2. high': '20.6850',
    '3. low': '10.5395',
    '4. close': '11.6328',
    '5. volume': '1183651'
  },
  '2002-04-30': {
    '1. open': '22.9012',
    '2. high': '23.2460',
    '3. low': '17.8383',
    '4. close': '20.0940',
    '5. volume': '751482'
  },
  '2002-03-28': {
    '1. open': '21.5715',
    '2. high': '24.0241',
    '3. low': '18.7642',
    '4. close': '22.9505',
    '5. volume': '559810'
  },
  '2002-02-28': {
    '1. open': '27.7770',
    '2. high': '27.7770',
    '3. low': '18.0452',
    '4. close': '21.1282',
    '5. volume': '719583'
  },
  '2002-01-31': {
    '1. open': '30.6334',
    '2. high': '32.4754',
    '3. low': '26.1123',
    '4. close': '27.5800',
    '5. volume': '301344'
  },
  '2001-12-28': {
    '1. open': '29.2544',
    '2. high': '33.4899',
    '3. low': '28.4665',
    '4. close': '30.2395',
    '5. volume': '223385'
  },
  '2001-11-30': {
    '1. open': '24.6250',
    '2. high': '34.6720',
    '3. low': '24.4280',
    '4. close': '28.5650',
    '5. volume': '336460'
  },
  '2001-10-31': {
    '1. open': '22.1625',
    '2. high': '28.5650',
    '3. low': '21.4730',
    '4. close': '25.3637',
    '5. volume': '285681'
  },
  '2001-09-28': {
    '1. open': '22.6550',
    '2. high': '23.1475',
    '3. low': '16.7450',
    '4. close': '21.6700',
    '5. volume': '259507'
  },
  '2001-08-31': {
    '1. open': '30.5350',
    '2. high': '31.0176',
    '3. low': '20.6850',
    '4. close': '22.5565',
    '5. volume': '238362'
  },
  '2001-07-31': {
    '1. open': '34.4749',
    '2. high': '35.5092',
    '3. low': '25.1175',
    '4. close': '31.1259',
    '5. volume': '211801'
  },
  '2001-06-29': {
    '1. open': '33.1452',
    '2. high': '36.3464',
    '3. low': '29.7765',
    '4. close': '34.4749',
    '5. volume': '205734'
  },
  '2001-05-31': {
    '1. open': '30.5350',
    '2. high': '41.3699',
    '3. low': '27.6292',
    '4. close': '33.4899',
    '5. volume': '202634'
  },
  '2001-04-30': {
    '1. open': '25.6100',
    '2. high': '29.7272',
    '3. low': '24.4772',
    '4. close': '29.5499',
    '5. volume': '117424'
  },
  '2001-03-30': {
    '1. open': '21.9655',
    '2. high': '28.3384',
    '3. low': '17.8383',
    '4. close': '26.1025',
    '5. volume': '232170'
  },
  '2001-02-28': {
    '1. open': '27.9346',
    '2. high': '30.5350',
    '3. low': '21.1775',
    '4. close': '22.6550',
    '5. volume': '113867'
  },
  '2001-01-31': {
    '1. open': '21.6700',
    '2. high': '30.0424',
    '3. low': '19.7985',
    '4. close': '28.2695',
    '5. volume': '227948'
  },
  '2000-12-29': {
    '1. open': '17.2375',
    '2. high': '27.5800',
    '3. low': '17.0011',
    '4. close': '22.2610',
    '5. volume': '250394'
  }
};

// tslint:disable:max-line-length
export const sundTCompany: Company = {
  id: 1108,
  name: 'S&T AG',
  country: Country.Oesterreich,
  city: 'Linz',
  url: 'http://www.snt.at/',
  description: 'Die S&T AG (ehemals Quanmax AG) ist ein IT-Technologiekonzern mit Sitz im oberösterreichischen Linz. Das Unternehmen ist aus der ehemaligen Gericom AG und dem Systemhaus S&T System Integration & Technology Distribution hervorgegangen und befand sich anfangs mehrheitlich im Besitz der taiwanischen Quanmax Inc.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/S%26T',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/S%26T_logo.svg/494px-S%26T_logo.svg.png',
  products: [],
  industries: [1812],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'AT0000A0E9W5',
  wkn: 'A0X9EJ',
  symbol: 'SANT.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.TecDAX, Indices.SDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Systemhaus', 'IT-Dienstleistungen', 'Consulting', 'Integration', 'Outsourcing', 'SAP-Betrieb', 'Softwareentwicklung']
};
// tslint:enable:max-line-length

