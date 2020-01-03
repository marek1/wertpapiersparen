import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [];
const prices = {
  '2019-11-29': {
    '1. open': '13.6080',
    '2. high': '14.3100',
    '3. low': '13.5560',
    '4. close': '13.7180',
    '5. volume': '372631'
  },
  '2019-10-31': {
    '1. open': '14.0800',
    '2. high': '14.1900',
    '3. low': '13.4320',
    '4. close': '13.5760',
    '5. volume': '482454'
  },
  '2019-09-30': {
    '1. open': '13.7280',
    '2. high': '14.5920',
    '3. low': '13.5560',
    '4. close': '14.0400',
    '5. volume': '523447'
  },
  '2019-08-30': {
    '1. open': '14.0800',
    '2. high': '14.2040',
    '3. low': '12.8020',
    '4. close': '13.6860',
    '5. volume': '839434'
  },
  '2019-07-31': {
    '1. open': '14.7380',
    '2. high': '14.9200',
    '3. low': '14.0520',
    '4. close': '14.2040',
    '5. volume': '335468'
  },
  '2019-06-28': {
    '1. open': '13.4220',
    '2. high': '14.7080',
    '3. low': '13.4220',
    '4. close': '14.6000',
    '5. volume': '285636'
  },
  '2019-05-31': {
    '1. open': '15.2640',
    '2. high': '15.2640',
    '3. low': '13.5100',
    '4. close': '13.5780',
    '5. volume': '419447'
  },
  '2019-04-30': {
    '1. open': '15.7720',
    '2. high': '16.0200',
    '3. low': '15.0740',
    '4. close': '15.2180',
    '5. volume': '205662'
  },
  '2019-03-29': {
    '1. open': '15.2000',
    '2. high': '15.9180',
    '3. low': '14.9500',
    '4. close': '15.7420',
    '5. volume': '194154'
  },
  '2019-02-28': {
    '1. open': '14.7960',
    '2. high': '15.3100',
    '3. low': '14.4440',
    '4. close': '15.1680',
    '5. volume': '203237'
  },
  '2019-01-31': {
    '1. open': '13.5860',
    '2. high': '14.8500',
    '3. low': '13.4800',
    '4. close': '14.8040',
    '5. volume': '319735'
  },
  '2018-12-28': {
    '1. open': '14.6300',
    '2. high': '14.6300',
    '3. low': '13.4880',
    '4. close': '13.6940',
    '5. volume': '270460'
  },
  '2018-11-30': {
    '1. open': '15.5940',
    '2. high': '15.6920',
    '3. low': '13.9060',
    '4. close': '14.2500',
    '5. volume': '213863'
  },
  '2018-10-31': {
    '1. open': '16.3840',
    '2. high': '16.6500',
    '3. low': '14.7240',
    '4. close': '15.6820',
    '5. volume': '309627'
  },
  '2018-09-28': {
    '1. open': '16.0060',
    '2. high': '16.7000',
    '3. low': '15.6680',
    '4. close': '16.3520',
    '5. volume': '232807'
  },
  '2018-08-31': {
    '1. open': '16.3840',
    '2. high': '16.6740',
    '3. low': '15.7260',
    '4. close': '15.9700',
    '5. volume': '138345'
  },
  '2018-07-31': {
    '1. open': '15.7560',
    '2. high': '16.6160',
    '3. low': '15.6700',
    '4. close': '16.4540',
    '5. volume': '266549'
  },
  '2018-06-29': {
    '1. open': '15.8280',
    '2. high': '16.0340',
    '3. low': '15.1100',
    '4. close': '15.9380',
    '5. volume': '314630'
  },
  '2018-05-31': {
    '1. open': '16.1720',
    '2. high': '16.8980',
    '3. low': '14.6580',
    '4. close': '15.4960',
    '5. volume': '668015'
  },
  '2018-04-30': {
    '1. open': '14.2900',
    '2. high': '16.1920',
    '3. low': '14.2900',
    '4. close': '16.1920',
    '5. volume': '509605'
  },
  '2018-03-29': {
    '1. open': '13.6600',
    '2. high': '14.3580',
    '3. low': '13.2500',
    '4. close': '14.2940',
    '5. volume': '456448'
  },
  '2018-02-28': {
    '1. open': '14.6040',
    '2. high': '14.7580',
    '3. low': '13.2700',
    '4. close': '13.7180',
    '5. volume': '620468'
  },
  '2018-01-31': {
    '1. open': '13.8520',
    '2. high': '15.0500',
    '3. low': '13.7440',
    '4. close': '14.5160',
    '5. volume': '638078'
  },
  '2017-12-29': {
    '1. open': '13.9200',
    '2. high': '14.2650',
    '3. low': '13.8050',
    '4. close': '13.8900',
    '5. volume': '338362'
  },
  '2017-11-30': {
    '1. open': '14.1500',
    '2. high': '14.7500',
    '3. low': '13.6650',
    '4. close': '13.8100',
    '5. volume': '1033102'
  },
  '2017-10-31': {
    '1. open': '13.9950',
    '2. high': '14.0450',
    '3. low': '13.6650',
    '4. close': '13.8150',
    '5. volume': '354472'
  },
  '2017-09-29': {
    '1. open': '13.2450',
    '2. high': '14.0500',
    '3. low': '13.2450',
    '4. close': '14.0000',
    '5. volume': '218167'
  },
  '2017-08-31': {
    '1. open': '13.5150',
    '2. high': '13.6500',
    '3. low': '13.0000',
    '4. close': '13.1650',
    '5. volume': '230146'
  },
  '2017-07-31': {
    '1. open': '13.1000',
    '2. high': '13.5500',
    '3. low': '12.9450',
    '4. close': '13.3850',
    '5. volume': '345974'
  },
  '2017-06-30': {
    '1. open': '14.1400',
    '2. high': '14.2900',
    '3. low': '13.1000',
    '4. close': '13.1000',
    '5. volume': '303161'
  },
  '2017-05-31': {
    '1. open': '14.2550',
    '2. high': '15.1450',
    '3. low': '14.1050',
    '4. close': '14.1600',
    '5. volume': '307480'
  },
  '2017-04-28': {
    '1. open': '15.3800',
    '2. high': '15.4400',
    '3. low': '14.2700',
    '4. close': '14.3250',
    '5. volume': '258470'
  },
  '2017-03-31': {
    '1. open': '14.7400',
    '2. high': '15.3900',
    '3. low': '14.3450',
    '4. close': '15.3850',
    '5. volume': '541632'
  },
  '2017-02-28': {
    '1. open': '14.3100',
    '2. high': '14.7650',
    '3. low': '13.8700',
    '4. close': '14.5700',
    '5. volume': '1184008'
  },
  '2017-01-31': {
    '1. open': '15.4500',
    '2. high': '15.9200',
    '3. low': '14.2500',
    '4. close': '14.2750',
    '5. volume': '614932'
  },
  '2016-12-30': {
    '1. open': '13.3550',
    '2. high': '15.4650',
    '3. low': '13.3550',
    '4. close': '15.4400',
    '5. volume': '1050198'
  },
  '2016-11-30': {
    '1. open': '13.3400',
    '2. high': '13.3400',
    '3. low': '12.2650',
    '4. close': '13.2650',
    '5. volume': '512067'
  },
  '2016-10-31': {
    '1. open': '12.9300',
    '2. high': '13.8500',
    '3. low': '12.9000',
    '4. close': '13.2400',
    '5. volume': '194552'
  },
  '2016-09-30': {
    '1. open': '13.6000',
    '2. high': '14.0000',
    '3. low': '12.2150',
    '4. close': '12.8200',
    '5. volume': '488763'
  },
  '2016-08-31': {
    '1. open': '13.7750',
    '2. high': '13.9000',
    '3. low': '13.0850',
    '4. close': '13.6750',
    '5. volume': '195180'
  },
  '2016-07-29': {
    '1. open': '14.5700',
    '2. high': '14.9200',
    '3. low': '13.4050',
    '4. close': '13.6150',
    '5. volume': '214677'
  },
  '2016-06-30': {
    '1. open': '13.6950',
    '2. high': '14.5500',
    '3. low': '13.0500',
    '4. close': '14.3900',
    '5. volume': '437161'
  },
  '2016-05-31': {
    '1. open': '14.1200',
    '2. high': '14.1500',
    '3. low': '12.9300',
    '4. close': '13.7700',
    '5. volume': '218333'
  },
  '2016-04-29': {
    '1. open': '13.0550',
    '2. high': '14.4500',
    '3. low': '12.2600',
    '4. close': '14.3650',
    '5. volume': '321240'
  },
  '2016-03-31': {
    '1. open': '13.0600',
    '2. high': '13.8800',
    '3. low': '12.9650',
    '4. close': '13.3050',
    '5. volume': '266600'
  },
  '2016-02-29': {
    '1. open': '13.2550',
    '2. high': '13.3300',
    '3. low': '10.9150',
    '4. close': '13.0000',
    '5. volume': '1201637'
  },
  '2016-01-29': {
    '1. open': '13.6350',
    '2. high': '13.7300',
    '3. low': '12.0200',
    '4. close': '13.3000',
    '5. volume': '804399'
  },
  '2015-12-30': {
    '1. open': '15.4050',
    '2. high': '15.5200',
    '3. low': '13.2650',
    '4. close': '13.9250',
    '5. volume': '524423'
  },
  '2015-11-30': {
    '1. open': '14.6900',
    '2. high': '15.4800',
    '3. low': '14.2850',
    '4. close': '15.4800',
    '5. volume': '293274'
  },
  '2015-10-30': {
    '1. open': '14.2400',
    '2. high': '15.8550',
    '3. low': '14.0500',
    '4. close': '14.9150',
    '5. volume': '657666'
  },
  '2015-09-30': {
    '1. open': '14.7050',
    '2. high': '15.1350',
    '3. low': '13.4200',
    '4. close': '14.0300',
    '5. volume': '634851'
  },
  '2015-08-31': {
    '1. open': '15.9000',
    '2. high': '16.3100',
    '3. low': '12.7700',
    '4. close': '14.6650',
    '5. volume': '1048761'
  },
  '2015-07-31': {
    '1. open': '16.0150',
    '2. high': '16.2850',
    '3. low': '14.6500',
    '4. close': '15.8400',
    '5. volume': '732911'
  },
  '2015-06-30': {
    '1. open': '16.4400',
    '2. high': '16.9750',
    '3. low': '15.5150',
    '4. close': '15.9600',
    '5. volume': '710108'
  },
  '2015-05-29': {
    '1. open': '17.2300',
    '2. high': '17.5700',
    '3. low': '16.3400',
    '4. close': '16.3950',
    '5. volume': '836337'
  },
  '2015-04-30': {
    '1. open': '16.1150',
    '2. high': '17.6400',
    '3. low': '16.0900',
    '4. close': '17.1100',
    '5. volume': '771624'
  },
  '2015-03-31': {
    '1. open': '16.6100',
    '2. high': '16.6550',
    '3. low': '15.1750',
    '4. close': '16.1550',
    '5. volume': '1270127'
  },
  '2015-02-27': {
    '1. open': '15.1400',
    '2. high': '16.7050',
    '3. low': '15.0200',
    '4. close': '16.7050',
    '5. volume': '1018100'
  },
  '2015-01-30': {
    '1. open': '14.7250',
    '2. high': '15.5000',
    '3. low': '13.1550',
    '4. close': '14.9100',
    '5. volume': '1313318'
  },
  '2014-12-30': {
    '1. open': '15.7000',
    '2. high': '15.9700',
    '3. low': '13.0000',
    '4. close': '14.5600',
    '5. volume': '1676991'
  },
  '2014-11-28': {
    '1. open': '17.0200',
    '2. high': '17.4100',
    '3. low': '15.9000',
    '4. close': '16.0650',
    '5. volume': '516449'
  },
  '2014-10-31': {
    '1. open': '18.7300',
    '2. high': '18.7800',
    '3. low': '15.3500',
    '4. close': '16.9950',
    '5. volume': '825350'
  },
  '2014-09-30': {
    '1. open': '19.0650',
    '2. high': '19.6400',
    '3. low': '18.0800',
    '4. close': '18.9350',
    '5. volume': '409643'
  },
  '2014-08-29': {
    '1. open': '19.0800',
    '2. high': '19.1850',
    '3. low': '18.0600',
    '4. close': '19.1000',
    '5. volume': '592158'
  },
  '2014-07-31': {
    '1. open': '19.9900',
    '2. high': '20.4900',
    '3. low': '18.9800',
    '4. close': '19.1100',
    '5. volume': '425017'
  },
  '2014-06-30': {
    '1. open': '18.8100',
    '2. high': '20.1900',
    '3. low': '18.5900',
    '4. close': '19.8950',
    '5. volume': '666854'
  },
  '2014-05-30': {
    '1. open': '18.7400',
    '2. high': '19.0400',
    '3. low': '17.8850',
    '4. close': '18.8000',
    '5. volume': '448632'
  },
  '2014-04-30': {
    '1. open': '18.2000',
    '2. high': '18.8800',
    '3. low': '18.0300',
    '4. close': '18.7700',
    '5. volume': '493662'
  },
  '2014-03-31': {
    '1. open': '17.3000',
    '2. high': '18.2200',
    '3. low': '17.0100',
    '4. close': '18.2000',
    '5. volume': '497414'
  },
  '2014-02-28': {
    '1. open': '16.9100',
    '2. high': '17.5000',
    '3. low': '16.2150',
    '4. close': '17.4650',
    '5. volume': '489377'
  },
  '2014-01-31': {
    '1. open': '17.5950',
    '2. high': '17.7050',
    '3. low': '16.6400',
    '4. close': '16.9150',
    '5. volume': '592459'
  },
  '2013-12-30': {
    '1. open': '17.7500',
    '2. high': '17.7550',
    '3. low': '16.2250',
    '4. close': '17.5600',
    '5. volume': '510130'
  },
  '2013-11-29': {
    '1. open': '18.5700',
    '2. high': '18.6000',
    '3. low': '17.6850',
    '4. close': '17.7800',
    '5. volume': '386441'
  },
  '2013-10-31': {
    '1. open': '17.0600',
    '2. high': '18.8450',
    '3. low': '17.0000',
    '4. close': '18.7500',
    '5. volume': '449704'
  },
  '2013-09-30': {
    '1. open': '17.3700',
    '2. high': '17.9700',
    '3. low': '16.8300',
    '4. close': '16.9300',
    '5. volume': '335243'
  },
  '2013-08-30': {
    '1. open': '16.7350',
    '2. high': '17.7650',
    '3. low': '16.6450',
    '4. close': '17.3050',
    '5. volume': '363223'
  },
  '2013-07-31': {
    '1. open': '15.9500',
    '2. high': '16.9450',
    '3. low': '15.5000',
    '4. close': '16.5650',
    '5. volume': '428265'
  },
  '2013-06-28': {
    '1. open': '17.5250',
    '2. high': '17.7850',
    '3. low': '15.1950',
    '4. close': '15.8000',
    '5. volume': '692841'
  },
  '2013-05-31': {
    '1. open': '18.1200',
    '2. high': '19.1000',
    '3. low': '17.3550',
    '4. close': '17.3550',
    '5. volume': '466643'
  },
  '2013-04-30': {
    '1. open': '17.5850',
    '2. high': '18.2550',
    '3. low': '17.0100',
    '4. close': '18.1000',
    '5. volume': '313954'
  },
  '2013-03-28': {
    '1. open': '17.4100',
    '2. high': '18.6100',
    '3. low': '17.0500',
    '4. close': '17.5000',
    '5. volume': '289466'
  },
  '2013-02-28': {
    '1. open': '18.4500',
    '2. high': '18.5300',
    '3. low': '17.0000',
    '4. close': '17.3800',
    '5. volume': '716359'
  },
  '2013-01-31': {
    '1. open': '18.6700',
    '2. high': '19.5500',
    '3. low': '18.0100',
    '4. close': '18.5000',
    '5. volume': '947191'
  },
  '2012-12-28': {
    '1. open': '18.2600',
    '2. high': '18.6900',
    '3. low': '17.4700',
    '4. close': '18.4400',
    '5. volume': '292121'
  },
  '2012-11-30': {
    '1. open': '17.5800',
    '2. high': '18.3550',
    '3. low': '17.0300',
    '4. close': '18.1950',
    '5. volume': '370233'
  },
  '2012-10-31': {
    '1. open': '17.0000',
    '2. high': '18.1100',
    '3. low': '16.9500',
    '4. close': '17.7000',
    '5. volume': '444865'
  },
  '2012-09-28': {
    '1. open': '17.4800',
    '2. high': '18.7100',
    '3. low': '17.0100',
    '4. close': '17.0100',
    '5. volume': '482716'
  },
  '2012-08-31': {
    '1. open': '16.7400',
    '2. high': '18.1200',
    '3. low': '16.3900',
    '4. close': '17.7000',
    '5. volume': '588116'
  },
  '2012-07-31': {
    '1. open': '16.7400',
    '2. high': '17.5850',
    '3. low': '14.9800',
    '4. close': '16.8150',
    '5. volume': '494383'
  },
  '2012-06-29': {
    '1. open': '15.6300',
    '2. high': '16.7700',
    '3. low': '15.2600',
    '4. close': '16.7700',
    '5. volume': '356209'
  },
  '2012-05-31': {
    '1. open': '17.0200',
    '2. high': '17.0300',
    '3. low': '15.2500',
    '4. close': '15.5550',
    '5. volume': '458009'
  },
  '2012-04-30': {
    '1. open': '17.4750',
    '2. high': '17.7600',
    '3. low': '15.9800',
    '4. close': '16.7800',
    '5. volume': '313614'
  },
  '2012-03-30': {
    '1. open': '17.3000',
    '2. high': '18.7050',
    '3. low': '17.1400',
    '4. close': '17.5800',
    '5. volume': '446848'
  },
  '2012-02-29': {
    '1. open': '17.0550',
    '2. high': '17.5400',
    '3. low': '17.0300',
    '4. close': '17.4100',
    '5. volume': '532109'
  },
  '2012-01-31': {
    '1. open': '16.0500',
    '2. high': '17.3750',
    '3. low': '16.0000',
    '4. close': '17.0000',
    '5. volume': '236568'
  },
  '2011-12-30': {
    '1. open': '15.6200',
    '2. high': '16.4250',
    '3. low': '15.0000',
    '4. close': '15.9250',
    '5. volume': '314937'
  },
  '2011-11-30': {
    '1. open': '15.4400',
    '2. high': '16.2900',
    '3. low': '14.3950',
    '4. close': '15.5750',
    '5. volume': '604764'
  },
  '2011-10-31': {
    '1. open': '12.8550',
    '2. high': '16.7800',
    '3. low': '12.6950',
    '4. close': '16.0750',
    '5. volume': '907600'
  },
  '2011-09-30': {
    '1. open': '14.0200',
    '2. high': '14.2100',
    '3. low': '11.9000',
    '4. close': '13.2900',
    '5. volume': '673621'
  },
  '2011-08-31': {
    '1. open': '15.2950',
    '2. high': '15.2950',
    '3. low': '11.8400',
    '4. close': '13.9650',
    '5. volume': '1380724'
  },
  '2011-07-29': {
    '1. open': '16.3300',
    '2. high': '16.5900',
    '3. low': '14.9750',
    '4. close': '15.1400',
    '5. volume': '442757'
  },
  '2011-06-30': {
    '1. open': '16.6750',
    '2. high': '16.6800',
    '3. low': '15.4550',
    '4. close': '16.3900',
    '5. volume': '416179'
  },
  '2011-05-31': {
    '1. open': '18.1450',
    '2. high': '18.1450',
    '3. low': '16.1800',
    '4. close': '16.6800',
    '5. volume': '377783'
  },
  '2011-04-29': {
    '1. open': '17.4550',
    '2. high': '18.0400',
    '3. low': '16.7800',
    '4. close': '18.0400',
    '5. volume': '330013'
  },
  '2011-03-31': {
    '1. open': '17.7500',
    '2. high': '18.0300',
    '3. low': '16.5000',
    '4. close': '17.4150',
    '5. volume': '800698'
  },
  '2011-02-28': {
    '1. open': '17.3850',
    '2. high': '18.6000',
    '3. low': '16.8200',
    '4. close': '17.6850',
    '5. volume': '1160524'
  },
  '2011-01-31': {
    '1. open': '16.4650',
    '2. high': '17.8350',
    '3. low': '16.4200',
    '4. close': '17.2850',
    '5. volume': '523938'
  },
  '2010-12-30': {
    '1. open': '15.5000',
    '2. high': '16.7400',
    '3. low': '15.4450',
    '4. close': '16.4100',
    '5. volume': '374065'
  },
  '2010-11-30': {
    '1. open': '16.3000',
    '2. high': '16.7500',
    '3. low': '15.3000',
    '4. close': '15.5900',
    '5. volume': '391404'
  },
  '2010-10-29': {
    '1. open': '15.8500',
    '2. high': '16.3850',
    '3. low': '15.7200',
    '4. close': '16.2100',
    '5. volume': '343195'
  },
  '2010-09-30': {
    '1. open': '15.6300',
    '2. high': '16.6950',
    '3. low': '15.5100',
    '4. close': '15.9050',
    '5. volume': '413476'
  },
  '2010-08-31': {
    '1. open': '15.7350',
    '2. high': '16.6000',
    '3. low': '15.2900',
    '4. close': '15.4100',
    '5. volume': '264178'
  },
  '2010-07-30': {
    '1. open': '14.9600',
    '2. high': '15.9500',
    '3. low': '14.6500',
    '4. close': '15.7450',
    '5. volume': '343370'
  },
  '2010-06-30': {
    '1. open': '15.1000',
    '2. high': '16.5700',
    '3. low': '14.6300',
    '4. close': '15.1650',
    '5. volume': '440690'
  },
  '2010-05-31': {
    '1. open': '16.7600',
    '2. high': '16.9000',
    '3. low': '14.3750',
    '4. close': '15.3000',
    '5. volume': '779021'
  },
  '2010-04-30': {
    '1. open': '17.4650',
    '2. high': '17.9750',
    '3. low': '16.7500',
    '4. close': '16.7750',
    '5. volume': '356343'
  },
  '2010-03-31': {
    '1. open': '16.7100',
    '2. high': '17.8500',
    '3. low': '16.6700',
    '4. close': '17.4350',
    '5. volume': '352250'
  },
  '2010-02-26': {
    '1. open': '16.8300',
    '2. high': '17.2700',
    '3. low': '15.9850',
    '4. close': '16.4650',
    '5. volume': '347970'
  },
  '2010-01-29': {
    '1. open': '18.0000',
    '2. high': '18.7500',
    '3. low': '16.6750',
    '4. close': '16.9300',
    '5. volume': '346907'
  },
  '2009-12-30': {
    '1. open': '16.7200',
    '2. high': '17.9500',
    '3. low': '16.6300',
    '4. close': '17.7600',
    '5. volume': '379348'
  },
  '2009-11-30': {
    '1. open': '17.0100',
    '2. high': '17.6800',
    '3. low': '16.3100',
    '4. close': '16.5000',
    '5. volume': '360902'
  },
  '2009-10-30': {
    '1. open': '17.0900',
    '2. high': '18.4400',
    '3. low': '16.6900',
    '4. close': '16.9900',
    '5. volume': '457660'
  },
  '2009-09-30': {
    '1. open': '16.7000',
    '2. high': '17.7500',
    '3. low': '16.3000',
    '4. close': '17.0800',
    '5. volume': '361523'
  },
  '2009-08-31': {
    '1. open': '16.4000',
    '2. high': '16.7200',
    '3. low': '15.7500',
    '4. close': '16.4500',
    '5. volume': '628840'
  },
  '2009-07-31': {
    '1. open': '17.1900',
    '2. high': '17.7500',
    '3. low': '15.6100',
    '4. close': '16.2500',
    '5. volume': '615739'
  },
  '2009-06-30': {
    '1. open': '17.2300',
    '2. high': '18.4000',
    '3. low': '16.5100',
    '4. close': '16.8200',
    '5. volume': '405262'
  },
  '2009-05-29': {
    '1. open': '16.8500',
    '2. high': '17.5500',
    '3. low': '16.1200',
    '4. close': '17.1500',
    '5. volume': '442978'
  },
  '2009-04-30': {
    '1. open': '14.7500',
    '2. high': '16.6500',
    '3. low': '14.3000',
    '4. close': '16.4800',
    '5. volume': '704130'
  },
  '2009-03-31': {
    '1. open': '15.6700',
    '2. high': '15.6700',
    '3. low': '11.9900',
    '4. close': '14.5300',
    '5. volume': '588145'
  },
  '2009-02-27': {
    '1. open': '16.5900',
    '2. high': '17.7000',
    '3. low': '15.5100',
    '4. close': '15.9300',
    '5. volume': '202396'
  },
  '2009-01-30': {
    '1. open': '17.0500',
    '2. high': '18.1000',
    '3. low': '15.8800',
    '4. close': '16.6600',
    '5. volume': '263477'
  },
  '2008-12-30': {
    '1. open': '18.0000',
    '2. high': '18.4000',
    '3. low': '15.3500',
    '4. close': '16.6100',
    '5. volume': '821562'
  },
  '2008-11-28': {
    '1. open': '18.8200',
    '2. high': '19.4000',
    '3. low': '15.6400',
    '4. close': '17.7100',
    '5. volume': '704144'
  },
  '2008-10-31': {
    '1. open': '18.9300',
    '2. high': '18.9300',
    '3. low': '13.3600',
    '4. close': '18.6800',
    '5. volume': '1098438'
  },
  '2008-09-30': {
    '1. open': '22.3800',
    '2. high': '22.3800',
    '3. low': '18.0000',
    '4. close': '18.7500',
    '5. volume': '532940'
  },
  '2008-08-29': {
    '1. open': '21.5100',
    '2. high': '22.2700',
    '3. low': '20.7500',
    '4. close': '22.2500',
    '5. volume': '661310'
  },
  '2008-07-31': {
    '1. open': '23.7400',
    '2. high': '23.8600',
    '3. low': '21.2300',
    '4. close': '21.8300',
    '5. volume': '582550'
  },
  '2008-06-30': {
    '1. open': '26.3000',
    '2. high': '26.3000',
    '3. low': '23.1700',
    '4. close': '23.6000',
    '5. volume': '523267'
  },
  '2008-05-30': {
    '1. open': '24.8600',
    '2. high': '27.3000',
    '3. low': '24.7500',
    '4. close': '26.2800',
    '5. volume': '412677'
  },
  '2008-04-30': {
    '1. open': '21.5100',
    '2. high': '24.9800',
    '3. low': '21.4500',
    '4. close': '24.7500',
    '5. volume': '616971'
  },
  '2008-03-31': {
    '1. open': '22.8000',
    '2. high': '23.5200',
    '3. low': '20.7500',
    '4. close': '21.5200',
    '5. volume': '472170'
  },
  '2008-02-29': {
    '1. open': '21.7800',
    '2. high': '23.3400',
    '3. low': '21.0100',
    '4. close': '22.8000',
    '5. volume': '558086'
  },
  '2008-01-31': {
    '1. open': '25.0800',
    '2. high': '25.8300',
    '3. low': '20.8000',
    '4. close': '21.4100',
    '5. volume': '1060202'
  },
  '2007-12-28': {
    '1. open': '24.4400',
    '2. high': '25.2500',
    '3. low': '24.0000',
    '4. close': '25.2500',
    '5. volume': '333705'
  },
  '2007-11-30': {
    '1. open': '25.0500',
    '2. high': '25.3400',
    '3. low': '22.9100',
    '4. close': '24.5000',
    '5. volume': '372898'
  },
  '2007-10-31': {
    '1. open': '26.0500',
    '2. high': '26.8100',
    '3. low': '24.5100',
    '4. close': '25.2600',
    '5. volume': '543794'
  },
  '2007-09-28': {
    '1. open': '25.1600',
    '2. high': '26.4600',
    '3. low': '24.7000',
    '4. close': '25.9300',
    '5. volume': '292319'
  },
  '2007-08-31': {
    '1. open': '25.4000',
    '2. high': '25.6500',
    '3. low': '22.9600',
    '4. close': '25.4400',
    '5. volume': '723657'
  },
  '2007-07-31': {
    '1. open': '26.8900',
    '2. high': '28.8600',
    '3. low': '25.3100',
    '4. close': '25.7300',
    '5. volume': '911656'
  },
  '2007-06-29': {
    '1. open': '26.4300',
    '2. high': '27.3100',
    '3. low': '26.0400',
    '4. close': '26.7500',
    '5. volume': '636417'
  },
  '2007-05-31': {
    '1. open': '24.5400',
    '2. high': '26.5500',
    '3. low': '24.4400',
    '4. close': '26.3800',
    '5. volume': '776878'
  },
  '2007-04-30': {
    '1. open': '24.3000',
    '2. high': '24.8300',
    '3. low': '24.0500',
    '4. close': '24.4900',
    '5. volume': '556611'
  },
  '2007-03-30': {
    '1. open': '23.1500',
    '2. high': '24.4000',
    '3. low': '22.5100',
    '4. close': '24.4000',
    '5. volume': '1300257'
  },
  '2007-02-28': {
    '1. open': '24.8600',
    '2. high': '24.9900',
    '3. low': '19.9000',
    '4. close': '23.3200',
    '5. volume': '925551'
  },
  '2007-01-31': {
    '1. open': '25.5600',
    '2. high': '26.0000',
    '3. low': '24.2700',
    '4. close': '24.7100',
    '5. volume': '815273'
  },
  '2006-12-29': {
    '1. open': '24.8500',
    '2. high': '25.8600',
    '3. low': '24.3900',
    '4. close': '25.5700',
    '5. volume': '525085'
  },
  '2006-11-30': {
    '1. open': '23.7000',
    '2. high': '25.2000',
    '3. low': '23.3000',
    '4. close': '24.7000',
    '5. volume': '799706'
  },
  '2006-10-31': {
    '1. open': '23.4800',
    '2. high': '24.4400',
    '3. low': '22.8900',
    '4. close': '23.6100',
    '5. volume': '541043'
  },
  '2006-09-29': {
    '1. open': '23.8700',
    '2. high': '23.9900',
    '3. low': '22.4400',
    '4. close': '23.3700',
    '5. volume': '491483'
  },
  '2006-08-31': {
    '1. open': '24.1400',
    '2. high': '24.5000',
    '3. low': '23.6900',
    '4. close': '23.9500',
    '5. volume': '373042'
  },
  '2006-07-31': {
    '1. open': '23.1200',
    '2. high': '24.1300',
    '3. low': '22.6100',
    '4. close': '23.9500',
    '5. volume': '579204'
  },
  '2006-06-30': {
    '1. open': '23.4800',
    '2. high': '23.7700',
    '3. low': '21.6100',
    '4. close': '22.9400',
    '5. volume': '633826'
  },
  '2006-05-31': {
    '1. open': '24.3500',
    '2. high': '24.7000',
    '3. low': '22.4500',
    '4. close': '23.4600',
    '5. volume': '1025889'
  },
  '2006-04-28': {
    '1. open': '23.5100',
    '2. high': '25.0000',
    '3. low': '23.2600',
    '4. close': '24.2500',
    '5. volume': '506219'
  },
  '2006-03-31': {
    '1. open': '24.2000',
    '2. high': '24.2100',
    '3. low': '22.8500',
    '4. close': '23.4800',
    '5. volume': '723721'
  },
  '2006-02-28': {
    '1. open': '24.8200',
    '2. high': '24.9000',
    '3. low': '23.7800',
    '4. close': '23.9600',
    '5. volume': '538357'
  },
  '2006-01-31': {
    '1. open': '23.5900',
    '2. high': '25.1700',
    '3. low': '23.4200',
    '4. close': '24.9700',
    '5. volume': '719220'
  },
  '2005-12-30': {
    '1. open': '23.2400',
    '2. high': '24.0000',
    '3. low': '23.2000',
    '4. close': '23.4900',
    '5. volume': '381119'
  },
  '2005-11-30': {
    '1. open': '22.3800',
    '2. high': '23.7500',
    '3. low': '22.0000',
    '4. close': '23.0300',
    '5. volume': '833141'
  },
  '2005-10-31': {
    '1. open': '24.8400',
    '2. high': '24.8400',
    '3. low': '21.4300',
    '4. close': '22.2400',
    '5. volume': '1471710'
  },
  '2005-09-30': {
    '1. open': '24.0500',
    '2. high': '25.2000',
    '3. low': '23.7000',
    '4. close': '24.7500',
    '5. volume': '763048'
  },
  '2005-08-31': {
    '1. open': '23.5300',
    '2. high': '24.4900',
    '3. low': '23.1100',
    '4. close': '23.9500',
    '5. volume': '549486'
  },
  '2005-07-29': {
    '1. open': '21.3500',
    '2. high': '23.7500',
    '3. low': '21.2900',
    '4. close': '23.4800',
    '5. volume': '694519'
  },
  '2005-06-30': {
    '1. open': '20.9600',
    '2. high': '22.1800',
    '3. low': '20.9600',
    '4. close': '21.2700',
    '5. volume': '900739'
  },
  '2005-05-31': {
    '1. open': '19.7300',
    '2. high': '20.9500',
    '3. low': '19.2700',
    '4. close': '20.7100',
    '5. volume': '525889'
  },
  '2005-04-29': {
    '1. open': '20.2500',
    '2. high': '20.8000',
    '3. low': '18.9000',
    '4. close': '19.4300',
    '5. volume': '713839'
  },
  '2005-03-31': {
    '1. open': '19.7000',
    '2. high': '20.6000',
    '3. low': '19.6000',
    '4. close': '20.1000',
    '5. volume': '578880'
  },
  '2005-02-28': {
    '1. open': '18.5000',
    '2. high': '19.6900',
    '3. low': '18.5000',
    '4. close': '19.6900',
    '5. volume': '573628'
  },
  '2005-01-31': {
    '1. open': '18.3300',
    '2. high': '18.7200',
    '3. low': '17.8600',
    '4. close': '18.6000',
    '5. volume': '574109'
  },
  '2004-12-30': {
    '1. open': '18.5200',
    '2. high': '18.7000',
    '3. low': '17.9000',
    '4. close': '18.4800',
    '5. volume': '409645'
  },
  '2004-11-30': {
    '1. open': '17.7000',
    '2. high': '18.7800',
    '3. low': '17.7000',
    '4. close': '18.4300',
    '5. volume': '553864'
  },
  '2004-10-29': {
    '1. open': '18.0500',
    '2. high': '18.8900',
    '3. low': '17.5700',
    '4. close': '17.9000',
    '5. volume': '486714'
  },
  '2004-09-30': {
    '1. open': '16.9000',
    '2. high': '18.6700',
    '3. low': '16.9000',
    '4. close': '18.0100',
    '5. volume': '431041'
  },
  '2004-08-31': {
    '1. open': '17.0200',
    '2. high': '17.1600',
    '3. low': '16.3700',
    '4. close': '16.8000',
    '5. volume': '493401'
  },
  '2004-07-30': {
    '1. open': '16.3000',
    '2. high': '17.1500',
    '3. low': '16.2000',
    '4. close': '17.1500',
    '5. volume': '432450'
  },
  '2004-06-30': {
    '1. open': '16.8000',
    '2. high': '17.9100',
    '3. low': '16.3100',
    '4. close': '16.3300',
    '5. volume': '569378'
  },
  '2004-05-31': {
    '1. open': '16.9500',
    '2. high': '17.4200',
    '3. low': '16.2700',
    '4. close': '16.8200',
    '5. volume': '408058'
  },
  '2004-04-30': {
    '1. open': '16.5000',
    '2. high': '17.5000',
    '3. low': '16.2000',
    '4. close': '16.9300',
    '5. volume': '493925'
  },
  '2004-03-31': {
    '1. open': '15.9000',
    '2. high': '16.8000',
    '3. low': '15.6400',
    '4. close': '16.4500',
    '5. volume': '1137541'
  },
  '2004-02-27': {
    '1. open': '15.4900',
    '2. high': '16.0000',
    '3. low': '14.8800',
    '4. close': '15.9000',
    '5. volume': '383025'
  },
  '2004-01-30': {
    '1. open': '15.1500',
    '2. high': '15.5700',
    '3. low': '14.6100',
    '4. close': '14.9800',
    '5. volume': '395974'
  }
};

// tslint:disable:max-line-length
export const eniCompany: Company = {
  id: 1182,
  name: 'Eni S.p.A.',
  country: Country.Italien,
  city: 'Rom',
  url: 'https://www.eni.com/',
  description: 'Die Eni S.p.A. ist ein italienischer Mineralöl- und Energiekonzern mit Sitz in Rom, der in den Bereichen Erdöl, Erdgas, Stromerzeugung, Petrochemie, Ingenieurwesen und Services auf Ölfeldern tätig ist.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Eni_(Unternehmen)',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/8/8a/Logo_ENI.svg/204px-Logo_ENI.svg.png',
  products: [
    {
      id: 118210,
      name: 'Agip',
      logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/9/99/Agip_logo.svg/246px-Agip_logo.svg.png'
    }
  ],
  industries: [171310, 171311, 171312, 1510, 111310],
  securityType: SecurityType.AzioniNom,
  currency: Currency.EUR,
  isin: 'IT0003132476',
  wkn: '897791',
  symbol: 'ENI.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.MSCIWorld],
  end_of_month_prices: prices,
  dividends,
  tags: ['Ölproduzent', 'Erdgasproduzent', 'Petrochemiekalien', 'Treibstoffe', 'Benzin', 'Tankstellen']
};
// tslint:enable:max-line-length

