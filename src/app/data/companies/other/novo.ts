import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [];
const prices = {
  '2019-12-27': {
    '1. open': '51.2800',
    '2. high': '52.7500',
    '3. low': '50.2200',
    '4. close': '52.0500',
    '5. volume': '257918'
  },
  '2019-11-29': {
    '1. open': '49.4450',
    '2. high': '52.6900',
    '3. low': '48.3000',
    '4. close': '50.7100',
    '5. volume': '468976'
  },
  '2019-10-31': {
    '1. open': '47.4600',
    '2. high': '50.0000',
    '3. low': '45.2650',
    '4. close': '49.1700',
    '5. volume': '271064'
  },
  '2019-09-30': {
    '1. open': '47.3800',
    '2. high': '49.0250',
    '3. low': '44.1450',
    '4. close': '47.5000',
    '5. volume': '294561'
  },
  '2019-08-30': {
    '1. open': '43.3850',
    '2. high': '47.9000',
    '3. low': '42.7450',
    '4. close': '47.4750',
    '5. volume': '394651'
  },
  '2019-07-31': {
    '1. open': '45.2550',
    '2. high': '46.7400',
    '3. low': '41.8300',
    '4. close': '43.4550',
    '5. volume': '276919'
  },
  '2019-06-28': {
    '1. open': '41.7400',
    '2. high': '46.7300',
    '3. low': '41.5950',
    '4. close': '44.9350',
    '5. volume': '249502'
  },
  '2019-05-31': {
    '1. open': '44.0050',
    '2. high': '44.2400',
    '3. low': '41.5300',
    '4. close': '42.4350',
    '5. volume': '283566'
  },
  '2019-04-30': {
    '1. open': '46.6900',
    '2. high': '46.8250',
    '3. low': '42.4450',
    '4. close': '43.7250',
    '5. volume': '314518'
  },
  '2019-03-29': {
    '1. open': '43.2550',
    '2. high': '46.8000',
    '3. low': '42.4100',
    '4. close': '46.7250',
    '5. volume': '466600'
  },
  '2019-02-28': {
    '1. open': '42.0250',
    '2. high': '44.6800',
    '3. low': '41.8500',
    '4. close': '42.9950',
    '5. volume': '433748'
  },
  '2019-01-31': {
    '1. open': '39.7800',
    '2. high': '42.8500',
    '3. low': '39.7800',
    '4. close': '41.0000',
    '5. volume': '355391'
  },
  '2018-12-28': {
    '1. open': '41.2600',
    '2. high': '41.5000',
    '3. low': '39.1000',
    '4. close': '39.5300',
    '5. volume': '298311'
  },
  '2018-11-30': {
    '1. open': '38.7550',
    '2. high': '41.1300',
    '3. low': '37.2600',
    '4. close': '40.8800',
    '5. volume': '345844'
  },
  '2018-10-31': {
    '1. open': '40.8250',
    '2. high': '40.8250',
    '3. low': '35.7500',
    '4. close': '38.2200',
    '5. volume': '615971'
  },
  '2018-09-28': {
    '1. open': '42.2100',
    '2. high': '42.4850',
    '3. low': '39.3200',
    '4. close': '40.6150',
    '5. volume': '230540'
  },
  '2018-08-31': {
    '1. open': '42.8150',
    '2. high': '43.3850',
    '3. low': '40.6000',
    '4. close': '42.2400',
    '5. volume': '398216'
  },
  '2018-07-31': {
    '1. open': '39.8700',
    '2. high': '44.2800',
    '3. low': '39.5150',
    '4. close': '42.8500',
    '5. volume': '336530'
  },
  '2018-06-29': {
    '1. open': '40.5800',
    '2. high': '41.3450',
    '3. low': '37.4450',
    '4. close': '39.6650',
    '5. volume': '405897'
  },
  '2018-05-31': {
    '1. open': '40.8250',
    '2. high': '42.1300',
    '3. low': '39.5150',
    '4. close': '40.5800',
    '5. volume': '281501'
  },
  '2018-04-30': {
    '1. open': '39.9600',
    '2. high': '41.1850',
    '3. low': '38.1000',
    '4. close': '39.1350',
    '5. volume': '347975'
  },
  '2018-03-29': {
    '1. open': '42.3000',
    '2. high': '42.3000',
    '3. low': '39.1100',
    '4. close': '40.0300',
    '5. volume': '356328'
  },
  '2018-02-28': {
    '1. open': '42.8000',
    '2. high': '44.2000',
    '3. low': '39.0000',
    '4. close': '42.5100',
    '5. volume': '1017570'
  },
  '2018-01-31': {
    '1. open': '44.9800',
    '2. high': '47.6250',
    '3. low': '44.0000',
    '4. close': '44.6650',
    '5. volume': '537181'
  },
  '2017-12-29': {
    '1. open': '44.3200',
    '2. high': '45.5000',
    '3. low': '42.6450',
    '4. close': '44.8300',
    '5. volume': '646748'
  },
  '2017-11-30': {
    '1. open': '42.3200',
    '2. high': '44.5700',
    '3. low': '41.1700',
    '4. close': '43.1550',
    '5. volume': '740365'
  },
  '2017-10-31': {
    '1. open': '40.6300',
    '2. high': '43.3500',
    '3. low': '39.8150',
    '4. close': '42.7400',
    '5. volume': '734352'
  },
  '2017-09-29': {
    '1. open': '40.0250',
    '2. high': '41.5950',
    '3. low': '39.4850',
    '4. close': '40.5850',
    '5. volume': '588410'
  },
  '2017-08-31': {
    '1. open': '35.9400',
    '2. high': '40.1000',
    '3. low': '34.9800',
    '4. close': '39.9300',
    '5. volume': '1150821'
  },
  '2017-07-31': {
    '1. open': '37.6350',
    '2. high': '37.8350',
    '3. low': '35.2800',
    '4. close': '36.0400',
    '5. volume': '659212'
  },
  '2017-06-30': {
    '1. open': '38.0000',
    '2. high': '39.9250',
    '3. low': '36.7800',
    '4. close': '37.4000',
    '5. volume': '1197555'
  },
  '2017-05-31': {
    '1. open': '35.2850',
    '2. high': '38.6900',
    '3. low': '35.1050',
    '4. close': '37.7050',
    '5. volume': '1413929'
  },
  '2017-04-28': {
    '1. open': '32.5100',
    '2. high': '35.9450',
    '3. low': '32.0400',
    '4. close': '35.7000',
    '5. volume': '1185381'
  },
  '2017-03-31': {
    '1. open': '33.0350',
    '2. high': '33.4000',
    '3. low': '31.0000',
    '4. close': '32.2000',
    '5. volume': '1236298'
  },
  '2017-02-28': {
    '1. open': '33.7300',
    '2. high': '33.9550',
    '3. low': '30.3600',
    '4. close': '33.5700',
    '5. volume': '1723527'
  },
  '2017-01-31': {
    '1. open': '34.3650',
    '2. high': '35.2000',
    '3. low': '32.0600',
    '4. close': '33.1750',
    '5. volume': '1323539'
  },
  '2016-12-30': {
    '1. open': '32.4150',
    '2. high': '34.7100',
    '3. low': '31.4550',
    '4. close': '34.2400',
    '5. volume': '1663222'
  },
  '2016-11-30': {
    '1. open': '32.5700',
    '2. high': '32.6800',
    '3. low': '29.4000',
    '4. close': '31.8900',
    '5. volume': '1814561'
  },
  '2016-10-31': {
    '1. open': '36.5000',
    '2. high': '38.8100',
    '3. low': '30.5000',
    '4. close': '32.5650',
    '5. volume': '2288001'
  },
  '2016-09-30': {
    '1. open': '42.5000',
    '2. high': '42.5000',
    '3. low': '36.8400',
    '4. close': '37.1000',
    '5. volume': '1262337'
  },
  '2016-08-31': {
    '1. open': '51.7800',
    '2. high': '51.7800',
    '3. low': '40.9700',
    '4. close': '41.9000',
    '5. volume': '1984035'
  },
  '2016-07-29': {
    '1. open': '48.5900',
    '2. high': '51.6200',
    '3. low': '47.8750',
    '4. close': '51.0900',
    '5. volume': '193992'
  },
  '2016-06-30': {
    '1. open': '50.1900',
    '2. high': '50.6500',
    '3. low': '43.4300',
    '4. close': '48.3000',
    '5. volume': '292250'
  },
  '2016-05-31': {
    '1. open': '48.8850',
    '2. high': '50.8400',
    '3. low': '46.0000',
    '4. close': '50.1400',
    '5. volume': '140819'
  },
  '2016-04-29': {
    '1. open': '47.3800',
    '2. high': '51.0900',
    '3. low': '47.2700',
    '4. close': '48.7500',
    '5. volume': '192901'
  },
  '2016-03-31': {
    '1. open': '47.3200',
    '2. high': '52.1000',
    '3. low': '46.7000',
    '4. close': '47.6800',
    '5. volume': '224561'
  },
  '2016-02-29': {
    '1. open': '52.0100',
    '2. high': '52.0100',
    '3. low': '40.8000',
    '4. close': '47.9800',
    '5. volume': '442130'
  },
  '2016-01-29': {
    '1. open': '53.0400',
    '2. high': '54.4000',
    '3. low': '47.1450',
    '4. close': '51.1900',
    '5. volume': '298757'
  },
  '2015-12-30': {
    '1. open': '52.4000',
    '2. high': '54.0000',
    '3. low': '50.1500',
    '4. close': '53.6700',
    '5. volume': '154688'
  },
  '2015-11-30': {
    '1. open': '48.3400',
    '2. high': '52.2700',
    '3. low': '48.2300',
    '4. close': '52.2700',
    '5. volume': '206467'
  },
  '2015-10-30': {
    '1. open': '49.0000',
    '2. high': '51.5500',
    '3. low': '46.3450',
    '4. close': '48.7500',
    '5. volume': '238573'
  },
  '2015-09-30': {
    '1. open': '48.7800',
    '2. high': '52.0600',
    '3. low': '46.7000',
    '4. close': '48.3300',
    '5. volume': '216045'
  },
  '2015-08-31': {
    '1. open': '53.8600',
    '2. high': '55.2600',
    '3. low': '45.4100',
    '4. close': '49.5000',
    '5. volume': '461719'
  },
  '2015-07-31': {
    '1. open': '49.5400',
    '2. high': '54.9900',
    '3. low': '48.4000',
    '4. close': '53.6600',
    '5. volume': '257092'
  },
  '2015-06-30': {
    '1. open': '51.3600',
    '2. high': '52.4200',
    '3. low': '47.4650',
    '4. close': '49.5050',
    '5. volume': '255568'
  },
  '2015-05-29': {
    '1. open': '51.5600',
    '2. high': '52.9900',
    '3. low': '48.2250',
    '4. close': '51.3300',
    '5. volume': '199447'
  },
  '2015-04-30': {
    '1. open': '49.7000',
    '2. high': '53.5000',
    '3. low': '48.6600',
    '4. close': '50.3700',
    '5. volume': '347098'
  },
  '2015-03-31': {
    '1. open': '42.7200',
    '2. high': '50.7700',
    '3. low': '41.8600',
    '4. close': '49.7000',
    '5. volume': '335768'
  },
  '2015-02-27': {
    '1. open': '40.1550',
    '2. high': '42.8700',
    '3. low': '36.7100',
    '4. close': '42.5200',
    '5. volume': '440328'
  },
  '2015-01-30': {
    '1. open': '35.6550',
    '2. high': '41.0100',
    '3. low': '35.0900',
    '4. close': '39.7700',
    '5. volume': '346087'
  },
  '2014-12-30': {
    '1. open': '36.9450',
    '2. high': '38.2200',
    '3. low': '34.4400',
    '4. close': '35.5900',
    '5. volume': '299809'
  },
  '2014-11-28': {
    '1. open': '36.1550',
    '2. high': '36.9050',
    '3. low': '34.4700',
    '4. close': '36.4950',
    '5. volume': '301015'
  },
  '2014-10-31': {
    '1. open': '38.0050',
    '2. high': '38.4950',
    '3. low': '32.8400',
    '4. close': '36.1500',
    '5. volume': '385191'
  },
  '2014-09-30': {
    '1. open': '35.0150',
    '2. high': '38.3450',
    '3. low': '34.1300',
    '4. close': '38.1950',
    '5. volume': '272028'
  },
  '2014-08-29': {
    '1. open': '34.0550',
    '2. high': '35.0450',
    '3. low': '32.0050',
    '4. close': '34.8000',
    '5. volume': '171966'
  },
  '2014-07-31': {
    '1. open': '33.7050',
    '2. high': '35.0200',
    '3. low': '33.0050',
    '4. close': '34.3950',
    '5. volume': '107915'
  },
  '2014-06-30': {
    '1. open': '31.1300',
    '2. high': '34.5000',
    '3. low': '30.8100',
    '4. close': '33.5900',
    '5. volume': '178903'
  },
  '2014-05-30': {
    '1. open': '32.0400',
    '2. high': '32.4900',
    '3. low': '30.6550',
    '4. close': '31.0500',
    '5. volume': '123609'
  },
  '2014-04-30': {
    '1. open': '32.9500',
    '2. high': '33.3550',
    '3. low': '30.1250',
    '4. close': '32.3100',
    '5. volume': '140617'
  },
  '2014-03-31': {
    '1. open': '34.1250',
    '2. high': '35.0000',
    '3. low': '31.7300',
    '4. close': '32.9500',
    '5. volume': '221414'
  },
  '2014-02-28': {
    '1. open': '29.5050',
    '2. high': '35.5950',
    '3. low': '29.0100',
    '4. close': '34.8000',
    '5. volume': '287334'
  },
  '2014-01-31': {
    '1. open': '26.6000',
    '2. high': '29.4000',
    '3. low': '26.4000',
    '4. close': '29.4000',
    '5. volume': '239378'
  },
  '2013-12-30': {
    '1. open': '26.4000',
    '2. high': '26.7600',
    '3. low': '25.2700',
    '4. close': '26.6000',
    '5. volume': '252165'
  },
  '2013-11-29': {
    '1. open': '24.8300',
    '2. high': '26.4000',
    '3. low': '24.5900',
    '4. close': '26.4000',
    '5. volume': '271745'
  },
  '2013-10-31': {
    '1. open': '24.9600',
    '2. high': '26.7100',
    '3. low': '24.1100',
    '4. close': '24.6100',
    '5. volume': '282075'
  },
  '2013-09-30': {
    '1. open': '25.3300',
    '2. high': '25.8500',
    '3. low': '24.4000',
    '4. close': '25.0100',
    '5. volume': '204060'
  },
  '2013-08-30': {
    '1. open': '25.6900',
    '2. high': '26.6300',
    '3. low': '25.1000',
    '4. close': '25.1000',
    '5. volume': '227995'
  },
  '2013-07-31': {
    '1. open': '24.2200',
    '2. high': '25.5100',
    '3. low': '24.0800',
    '4. close': '25.5100',
    '5. volume': '144910'
  },
  '2013-06-28': {
    '1. open': '24.8000',
    '2. high': '25.4200',
    '3. low': '22.7600',
    '4. close': '24.5000',
    '5. volume': '450735'
  },
  '2013-05-31': {
    '1. open': '25.9300',
    '2. high': '27.4100',
    '3. low': '24.8000',
    '4. close': '25.0000',
    '5. volume': '317475'
  },
  '2013-04-30': {
    '1. open': '25.5000',
    '2. high': '26.9200',
    '3. low': '25.0000',
    '4. close': '26.6100',
    '5. volume': '338040'
  },
  '2013-03-28': {
    '1. open': '26.9000',
    '2. high': '28.1400',
    '3. low': '24.6600',
    '4. close': '25.2300',
    '5. volume': '560435'
  },
  '2013-02-28': {
    '1. open': '27.4500',
    '2. high': '29.3400',
    '3. low': '23.9000',
    '4. close': '26.9600',
    '5. volume': '967395'
  },
  '2013-01-31': {
    '1. open': '24.6100',
    '2. high': '27.8000',
    '3. low': '24.6100',
    '4. close': '27.1400',
    '5. volume': '349905'
  },
  '2012-12-28': {
    '1. open': '24.4700',
    '2. high': '25.3000',
    '3. low': '24.2100',
    '4. close': '24.5900',
    '5. volume': '175930'
  },
  '2012-11-30': {
    '1. open': '24.8300',
    '2. high': '25.5300',
    '3. low': '22.7500',
    '4. close': '24.4200',
    '5. volume': '431860'
  },
  '2012-10-31': {
    '1. open': '24.5900',
    '2. high': '26.2800',
    '3. low': '24.5900',
    '4. close': '24.8000',
    '5. volume': '305460'
  },
  '2012-09-28': {
    '1. open': '25.2300',
    '2. high': '25.4500',
    '3. low': '23.3300',
    '4. close': '24.5400',
    '5. volume': '291275'
  },
  '2012-08-31': {
    '1. open': '25.1600',
    '2. high': '26.2900',
    '3. low': '24.6300',
    '4. close': '25.1800',
    '5. volume': '231445'
  },
  '2012-07-31': {
    '1. open': '22.8500',
    '2. high': '25.3300',
    '3. low': '22.7000',
    '4. close': '25.1600',
    '5. volume': '220420'
  },
  '2012-06-29': {
    '1. open': '21.5200',
    '2. high': '22.9700',
    '3. low': '20.3000',
    '4. close': '22.9600',
    '5. volume': '190225'
  },
  '2012-05-31': {
    '1. open': '22.3300',
    '2. high': '23.3000',
    '3. low': '21.4600',
    '4. close': '21.5100',
    '5. volume': '163805'
  },
  '2012-04-30': {
    '1. open': '21.0600',
    '2. high': '23.2400',
    '3. low': '20.9900',
    '4. close': '22.4800',
    '5. volume': '205125'
  },
  '2012-03-30': {
    '1. open': '21.0500',
    '2. high': '21.9900',
    '3. low': '20.5500',
    '4. close': '20.9000',
    '5. volume': '227645'
  },
  '2012-02-29': {
    '1. open': '18.2480',
    '2. high': '21.7300',
    '3. low': '18.0540',
    '4. close': '20.9600',
    '5. volume': '237080'
  },
  '2012-01-31': {
    '1. open': '17.9540',
    '2. high': '18.8400',
    '3. low': '17.5700',
    '4. close': '18.1140',
    '5. volume': '334865'
  },
  '2011-12-30': {
    '1. open': '16.9560',
    '2. high': '18.0000',
    '3. low': '16.4960',
    '4. close': '18.0000',
    '5. volume': '173525'
  },
  '2011-11-30': {
    '1. open': '15.2000',
    '2. high': '16.8900',
    '3. low': '14.8440',
    '4. close': '16.7880',
    '5. volume': '190375'
  },
  '2011-10-31': {
    '1. open': '14.8100',
    '2. high': '15.8460',
    '3. low': '13.7900',
    '4. close': '15.4720',
    '5. volume': '249595'
  },
  '2011-09-30': {
    '1. open': '14.9480',
    '2. high': '15.5820',
    '3. low': '13.9800',
    '4. close': '14.9420',
    '5. volume': '163340'
  },
  '2011-08-31': {
    '1. open': '17.2520',
    '2. high': '17.2520',
    '3. low': '13.6220',
    '4. close': '14.8700',
    '5. volume': '473150'
  },
  '2011-07-29': {
    '1. open': '17.3180',
    '2. high': '18.0000',
    '3. low': '16.9800',
    '4. close': '16.9800',
    '5. volume': '77990'
  },
  '2011-06-30': {
    '1. open': '17.4200',
    '2. high': '17.5040',
    '3. low': '16.3500',
    '4. close': '17.3000',
    '5. volume': '140255'
  },
  '2011-05-31': {
    '1. open': '17.2120',
    '2. high': '17.6920',
    '3. low': '16.7600',
    '4. close': '17.5440',
    '5. volume': '108115'
  },
  '2011-04-29': {
    '1. open': '17.7200',
    '2. high': '18.0360',
    '3. low': '16.8900',
    '4. close': '17.0880',
    '5. volume': '119535'
  },
  '2011-03-31': {
    '1. open': '18.3360',
    '2. high': '18.8020',
    '3. low': '16.9220',
    '4. close': '17.7360',
    '5. volume': '153040'
  },
  '2011-02-28': {
    '1. open': '16.5200',
    '2. high': '18.4800',
    '3. low': '16.1620',
    '4. close': '18.1980',
    '5. volume': '148205'
  },
  '2011-01-31': {
    '1. open': '17.0600',
    '2. high': '17.8100',
    '3. low': '16.1820',
    '4. close': '16.4080',
    '5. volume': '254520'
  },
  '2010-12-30': {
    '1. open': '15.3620',
    '2. high': '17.2840',
    '3. low': '15.2020',
    '4. close': '17.0000',
    '5. volume': '219355'
  },
  '2010-11-30': {
    '1. open': '14.8940',
    '2. high': '15.5960',
    '3. low': '14.6780',
    '4. close': '15.4000',
    '5. volume': '106385'
  },
  '2010-10-29': {
    '1. open': '14.4020',
    '2. high': '15.2500',
    '3. low': '12.9280',
    '4. close': '15.0580',
    '5. volume': '268360'
  },
  '2010-09-30': {
    '1. open': '13.7860',
    '2. high': '14.6920',
    '3. low': '13.6140',
    '4. close': '14.4800',
    '5. volume': '112170'
  },
  '2010-08-31': {
    '1. open': '13.2600',
    '2. high': '13.7500',
    '3. low': '12.8340',
    '4. close': '13.5360',
    '5. volume': '99415'
  },
  '2010-07-30': {
    '1. open': '13.1020',
    '2. high': '13.7600',
    '3. low': '12.9420',
    '4. close': '13.2100',
    '5. volume': '86640'
  },
  '2010-06-30': {
    '1. open': '12.5800',
    '2. high': '13.9300',
    '3. low': '12.4800',
    '4. close': '13.2100',
    '5. volume': '121280'
  },
  '2010-05-31': {
    '1. open': '12.4360',
    '2. high': '12.9980',
    '3. low': '11.6420',
    '4. close': '12.5740',
    '5. volume': '161805'
  },
  '2010-04-30': {
    '1. open': '11.8020',
    '2. high': '12.3600',
    '3. low': '11.4000',
    '4. close': '12.3600',
    '5. volume': '103580'
  },
  '2010-03-31': {
    '1. open': '10.5580',
    '2. high': '12.1640',
    '3. low': '10.4200',
    '4. close': '11.5320',
    '5. volume': '173800'
  },
  '2010-02-26': {
    '1. open': '9.7930',
    '2. high': '10.8600',
    '3. low': '9.7930',
    '4. close': '10.3800',
    '5. volume': '117220'
  },
  '2010-01-29': {
    '1. open': '9.1950',
    '2. high': '10.1100',
    '3. low': '8.8900',
    '4. close': '9.8490',
    '5. volume': '114985'
  },
  '2009-12-30': {
    '1. open': '8.9000',
    '2. high': '9.3800',
    '3. low': '8.8420',
    '4. close': '9.1100',
    '5. volume': '44525'
  },
  '2009-11-30': {
    '1. open': '8.4660',
    '2. high': '8.9300',
    '3. low': '8.4000',
    '4. close': '8.8560',
    '5. volume': '141895'
  },
  '2009-10-30': {
    '1. open': '8.4760',
    '2. high': '8.8140',
    '3. low': '8.3700',
    '4. close': '8.4260',
    '5. volume': '32995'
  },
  '2009-09-30': {
    '1. open': '8.4900',
    '2. high': '8.9220',
    '3. low': '8.2360',
    '4. close': '8.4840',
    '5. volume': '64390'
  },
  '2009-08-31': {
    '1. open': '8.2220',
    '2. high': '8.6340',
    '3. low': '8.1400',
    '4. close': '8.5400',
    '5. volume': '86900'
  },
  '2009-07-31': {
    '1. open': '7.6600',
    '2. high': '8.4980',
    '3. low': '7.6560',
    '4. close': '8.2400',
    '5. volume': '100305'
  },
  '2009-06-30': {
    '1. open': '7.5660',
    '2. high': '7.8000',
    '3. low': '7.0020',
    '4. close': '7.6600',
    '5. volume': '34810'
  },
  '2009-05-29': {
    '1. open': '7.3860',
    '2. high': '7.7980',
    '3. low': '7.0800',
    '4. close': '7.2000',
    '5. volume': '27845'
  },
  '2009-04-30': {
    '1. open': '7.4600',
    '2. high': '7.4860',
    '3. low': '6.3240',
    '4. close': '7.1840',
    '5. volume': '53855'
  },
  '2009-03-31': {
    '1. open': '7.5000',
    '2. high': '7.7040',
    '3. low': '6.7600',
    '4. close': '7.1700',
    '5. volume': '62080'
  },
  '2009-02-27': {
    '1. open': '8.3740',
    '2. high': '8.5980',
    '3. low': '7.7000',
    '4. close': '7.7000',
    '5. volume': '11920'
  },
  '2009-01-30': {
    '1. open': '7.5480',
    '2. high': '8.2560',
    '3. low': '7.5000',
    '4. close': '8.1380',
    '5. volume': '10015'
  },
  '2008-12-30': {
    '1. open': '7.7640',
    '2. high': '8.2420',
    '3. low': '7.3000',
    '4. close': '7.9980',
    '5. volume': '96905'
  },
  '2008-11-28': {
    '1. open': '8.2720',
    '2. high': '8.7440',
    '3. low': '6.9300',
    '4. close': '7.9400',
    '5. volume': '55390'
  },
  '2008-10-31': {
    '1. open': '7.1560',
    '2. high': '8.5060',
    '3. low': '6.4900',
    '4. close': '8.0700',
    '5. volume': '40995'
  },
  '2008-09-30': {
    '1. open': '7.4060',
    '2. high': '7.7360',
    '3. low': '7.0540',
    '4. close': '7.3600',
    '5. volume': '26660'
  },
  '2008-08-27': {
    '1. open': '8.1600',
    '2. high': '8.2160',
    '3. low': '7.6200',
    '4. close': '7.9420',
    '5. volume': '10480'
  },
  '2008-07-28': {
    '1. open': '8.7620',
    '2. high': '8.7620',
    '3. low': '7.6000',
    '4. close': '7.6920',
    '5. volume': '21295'
  },
  '2008-06-30': {
    '1. open': '9.2040',
    '2. high': '9.2040',
    '3. low': '7.8320',
    '4. close': '8.4000',
    '5. volume': '71645'
  },
  '2008-05-30': {
    '1. open': '8.9980',
    '2. high': '8.9980',
    '3. low': '8.3380',
    '4. close': '8.4220',
    '5. volume': '7905'
  },
  '2008-04-30': {
    '1. open': '8.9720',
    '2. high': '9.4240',
    '3. low': '8.0800',
    '4. close': '8.7420',
    '5. volume': '14515'
  },
  '2008-03-31': {
    '1. open': '8.8800',
    '2. high': '9.2940',
    '3. low': '8.2360',
    '4. close': '8.3420',
    '5. volume': '9240'
  },
  '2008-02-29': {
    '1. open': '8.6000',
    '2. high': '9.3920',
    '3. low': '8.1400',
    '4. close': '8.8920',
    '5. volume': '12430'
  },
  '2008-01-31': {
    '1. open': '8.9580',
    '2. high': '9.1660',
    '3. low': '7.4860',
    '4. close': '8.4700',
    '5. volume': '53130'
  },
  '2007-12-28': {
    '1. open': '9.4000',
    '2. high': '9.4000',
    '3. low': '8.6140',
    '4. close': '9.1420',
    '5. volume': '22230'
  },
  '2007-11-30': {
    '1. open': '8.5990',
    '2. high': '8.6720',
    '3. low': '8.1510',
    '4. close': '8.6720',
    '5. volume': '55620'
  },
  '2007-10-31': {
    '1. open': '8.4800',
    '2. high': '8.8490',
    '3. low': '7.9000',
    '4. close': '8.6000',
    '5. volume': '27210'
  },
  '2007-09-28': {
    '1. open': '8.2390',
    '2. high': '8.8180',
    '3. low': '8.1870',
    '4. close': '8.4500',
    '5. volume': '22240'
  },
  '2007-08-31': {
    '1. open': '7.8280',
    '2. high': '8.4430',
    '3. low': '7.4270',
    '4. close': '8.0190',
    '5. volume': '90040'
  },
  '2007-07-31': {
    '1. open': '8.1130',
    '2. high': '8.3150',
    '3. low': '7.4230',
    '4. close': '7.9070',
    '5. volume': '52810'
  },
  '2007-06-29': {
    '1. open': '7.9310',
    '2. high': '8.1390',
    '3. low': '7.4450',
    '4. close': '7.9250',
    '5. volume': '73760'
  },
  '2007-05-31': {
    '1. open': '7.9020',
    '2. high': '7.9020',
    '3. low': '7.3620',
    '4. close': '7.7230',
    '5. volume': '76080'
  },
  '2007-04-30': {
    '1. open': '6.9100',
    '2. high': '7.6430',
    '3. low': '6.6810',
    '4. close': '7.2500',
    '5. volume': '40370'
  },
  '2007-03-30': {
    '1. open': '6.3600',
    '2. high': '6.9410',
    '3. low': '6.2140',
    '4. close': '6.9220',
    '5. volume': '44720'
  },
  '2007-02-28': {
    '1. open': '6.7980',
    '2. high': '7.1800',
    '3. low': '6.2170',
    '4. close': '6.5630',
    '5. volume': '75340'
  },
  '2007-01-31': {
    '1. open': '6.3370',
    '2. high': '6.7190',
    '3. low': '6.1700',
    '4. close': '6.6010',
    '5. volume': '42400'
  },
  '2006-12-29': {
    '1. open': '5.9150',
    '2. high': '6.6850',
    '3. low': '5.7150',
    '4. close': '6.6850',
    '5. volume': '27350'
  },
  '2006-11-30': {
    '1. open': '5.9900',
    '2. high': '6.1700',
    '3. low': '5.7000',
    '4. close': '5.9390',
    '5. volume': '3780'
  },
  '2006-10-31': {
    '1. open': '5.9450',
    '2. high': '6.3400',
    '3. low': '5.6220',
    '4. close': '5.8260',
    '5. volume': '8890'
  },
  '2006-09-29': {
    '1. open': '5.6470',
    '2. high': '5.9520',
    '3. low': '5.5270',
    '4. close': '5.7520',
    '5. volume': '21600'
  },
  '2006-08-31': {
    '1. open': '4.9990',
    '2. high': '5.8960',
    '3. low': '4.7010',
    '4. close': '5.6390',
    '5. volume': '11780'
  },
  '2006-07-31': {
    '1. open': '5.1900',
    '2. high': '5.1900',
    '3. low': '4.7090',
    '4. close': '4.7590',
    '5. volume': '2730'
  },
  '2006-06-30': {
    '1. open': '5.0690',
    '2. high': '5.1440',
    '3. low': '4.5000',
    '4. close': '4.8510',
    '5. volume': '12600'
  },
  '2006-05-31': {
    '1. open': '5.2690',
    '2. high': '5.4210',
    '3. low': '4.6000',
    '4. close': '4.9990',
    '5. volume': '10330'
  },
  '2006-04-28': {
    '1. open': '5.2740',
    '2. high': '5.3980',
    '3. low': '5.0480',
    '4. close': '5.0590',
    '5. volume': '12900'
  },
  '2006-03-31': {
    '1. open': '5.0000',
    '2. high': '5.3100',
    '3. low': '4.8510',
    '4. close': '5.0430',
    '5. volume': '20610'
  },
  '2006-02-28': {
    '1. open': '4.6850',
    '2. high': '5.0500',
    '3. low': '4.6010',
    '4. close': '4.8470',
    '5. volume': '16950'
  },
  '2006-01-31': {
    '1. open': '4.8320',
    '2. high': '4.8950',
    '3. low': '4.4960',
    '4. close': '4.5700',
    '5. volume': '15780'
  },
  '2005-12-30': {
    '1. open': '4.5310',
    '2. high': '4.8890',
    '3. low': '4.4210',
    '4. close': '4.8450',
    '5. volume': '21110'
  },
  '2005-11-30': {
    '1. open': '4.3570',
    '2. high': '4.7040',
    '3. low': '4.1780',
    '4. close': '4.6300',
    '5. volume': '13970'
  },
  '2005-10-31': {
    '1. open': '4.1600',
    '2. high': '4.4390',
    '3. low': '3.9540',
    '4. close': '4.1020',
    '5. volume': '15350'
  },
  '2005-09-30': {
    '1. open': '4.1240',
    '2. high': '4.3650',
    '3. low': '3.9770',
    '4. close': '4.0500',
    '5. volume': '10550'
  },
  '2005-08-31': {
    '1. open': '4.3450',
    '2. high': '4.4990',
    '3. low': '4.1060',
    '4. close': '4.1060',
    '5. volume': '4500'
  },
  '2005-07-29': {
    '1. open': '4.2300',
    '2. high': '4.3490',
    '3. low': '4.1160',
    '4. close': '4.2880',
    '5. volume': '13930'
  },
  '2005-06-30': {
    '1. open': '4.3250',
    '2. high': '4.3590',
    '3. low': '4.0280',
    '4. close': '4.1360',
    '5. volume': '18700'
  },
  '2005-05-31': {
    '1. open': '3.8420',
    '2. high': '4.2990',
    '3. low': '3.8420',
    '4. close': '4.1250',
    '5. volume': '5400'
  },
  '2005-04-29': {
    '1. open': '4.4370',
    '2. high': '4.6450',
    '3. low': '3.7880',
    '4. close': '3.7880',
    '5. volume': '19220'
  },
  '2005-03-09': {
    '1. open': '4.2710',
    '2. high': '4.3200',
    '3. low': '4.2710',
    '4. close': '4.2710',
    '5. volume': '0'
  },
  '2005-02-28': {
    '1. open': '4.0500',
    '2. high': '4.5900',
    '3. low': '4.0420',
    '4. close': '4.1500',
    '5. volume': '26920'
  },
  '2005-01-31': {
    '1. open': '4.0000',
    '2. high': '4.0000',
    '3. low': '3.8670',
    '4. close': '4.0000',
    '5. volume': '7280'
  },
  '2004-12-15': {
    '1. open': '3.9880',
    '2. high': '3.9880',
    '3. low': '3.9880',
    '4. close': '3.9880',
    '5. volume': '3000'
  },
  '2004-11-17': {
    '1. open': '4.0000',
    '2. high': '4.1190',
    '3. low': '3.5000',
    '4. close': '3.9700',
    '5. volume': '26820'
  },
  '2004-10-29': {
    '1. open': '4.3600',
    '2. high': '4.3600',
    '3. low': '3.9000',
    '4. close': '3.9000',
    '5. volume': '13000'
  },
  '2004-09-28': {
    '1. open': '4.3300',
    '2. high': '4.4300',
    '3. low': '4.3300',
    '4. close': '4.4300',
    '5. volume': '6800'
  },
  '2004-08-18': {
    '1. open': '4.0500',
    '2. high': '4.5120',
    '3. low': '4.0500',
    '4. close': '4.5120',
    '5. volume': '400'
  },
  '2004-07-30': {
    '1. open': '4.5120',
    '2. high': '4.5120',
    '3. low': '4.0000',
    '4. close': '4.1500',
    '5. volume': '4500'
  },
  '2004-06-24': {
    '1. open': '3.9300',
    '2. high': '4.3320',
    '3. low': '3.5000',
    '4. close': '4.3320',
    '5. volume': '28900'
  },
  '2004-05-31': {
    '1. open': '4.3000',
    '2. high': '4.3000',
    '3. low': '3.5000',
    '4. close': '3.5000',
    '5. volume': '5000'
  },
  '2004-04-30': {
    '1. open': '3.7300',
    '2. high': '4.3000',
    '3. low': '3.7000',
    '4. close': '3.7000',
    '5. volume': '1540'
  },
  '2004-03-31': {
    '1. open': '3.7000',
    '2. high': '4.3000',
    '3. low': '3.7000',
    '4. close': '4.3000',
    '5. volume': '20400'
  },
  '2004-02-27': {
    '1. open': '3.2100',
    '2. high': '3.5990',
    '3. low': '3.0400',
    '4. close': '3.3500',
    '5. volume': '1100'
  },
  '2004-01-30': {
    '1. open': '3.2590',
    '2. high': '3.2740',
    '3. low': '3.1800',
    '4. close': '3.1800',
    '5. volume': '15200'
  },
  '2003-12-19': {
    '1. open': '3.6000',
    '2. high': '3.9290',
    '3. low': '3.0990',
    '4. close': '3.1500',
    '5. volume': '14600'
  },
  '2003-11-28': {
    '1. open': '3.2000',
    '2. high': '3.6000',
    '3. low': '2.8000',
    '4. close': '3.2000',
    '5. volume': '25700'
  },
  '2003-10-31': {
    '1. open': '3.6000',
    '2. high': '3.6000',
    '3. low': '2.8000',
    '4. close': '2.8000',
    '5. volume': '2380'
  },
  '2003-09-30': {
    '1. open': '3.4000',
    '2. high': '3.6000',
    '3. low': '2.8000',
    '4. close': '2.8000',
    '5. volume': '3000'
  },
  '2003-08-29': {
    '1. open': '3.4000',
    '2. high': '3.4000',
    '3. low': '2.8000',
    '4. close': '2.8000',
    '5. volume': '5450'
  },
  '2003-07-31': {
    '1. open': '3.4000',
    '2. high': '3.4000',
    '3. low': '2.9350',
    '4. close': '2.9350',
    '5. volume': '0'
  },
  '2003-06-30': {
    '1. open': '2.5000',
    '2. high': '3.2500',
    '3. low': '2.5000',
    '4. close': '2.5000',
    '5. volume': '2790'
  },
  '2003-05-30': {
    '1. open': '3.3000',
    '2. high': '3.3000',
    '3. low': '2.5000',
    '4. close': '2.5000',
    '5. volume': '10370'
  },
  '2003-04-30': {
    '1. open': '2.9830',
    '2. high': '3.2970',
    '3. low': '2.9830',
    '4. close': '3.2400',
    '5. volume': '6200'
  },
  '2003-03-31': {
    '1. open': '2.7510',
    '2. high': '3.1410',
    '3. low': '2.5000',
    '4. close': '3.0230',
    '5. volume': '190'
  },
  '2003-02-28': {
    '1. open': '2.2000',
    '2. high': '2.6910',
    '3. low': '2.2000',
    '4. close': '2.2000',
    '5. volume': '100'
  },
  '2003-01-31': {
    '1. open': '2.8100',
    '2. high': '2.9500',
    '3. low': '2.2000',
    '4. close': '2.2000',
    '5. volume': '7240'
  },
  '2002-12-20': {
    '1. open': '2.8000',
    '2. high': '2.8000',
    '3. low': '2.8000',
    '4. close': '2.8000',
    '5. volume': '1350'
  },
  '2002-11-27': {
    '1. open': '2.7660',
    '2. high': '3.1000',
    '3. low': '2.7000',
    '4. close': '3.1000',
    '5. volume': '3530'
  },
  '2002-10-28': {
    '1. open': '2.6600',
    '2. high': '3.0100',
    '3. low': '2.6000',
    '4. close': '3.0100',
    '5. volume': '2300'
  },
  '2002-09-20': {
    '1. open': '3.0700',
    '2. high': '3.0700',
    '3. low': '2.7130',
    '4. close': '2.7130',
    '5. volume': '3000'
  },
  '2002-08-30': {
    '1. open': '2.2700',
    '2. high': '3.1930',
    '3. low': '2.2700',
    '4. close': '2.2700',
    '5. volume': '520'
  },
  '2002-06-25': {
    '1. open': '3.3000',
    '2. high': '3.3000',
    '3. low': '3.0900',
    '4. close': '3.0900',
    '5. volume': '3600'
  },
  '2002-05-31': {
    '1. open': '3.3000',
    '2. high': '3.3000',
    '3. low': '3.1800',
    '4. close': '3.1800',
    '5. volume': '50'
  },
  '2002-04-30': {
    '1. open': '3.5300',
    '2. high': '3.6300',
    '3. low': '3.1600',
    '4. close': '3.1800',
    '5. volume': '9460'
  },
  '2002-03-07': {
    '1. open': '4.4550',
    '2. high': '4.4550',
    '3. low': '4.4550',
    '4. close': '4.4550',
    '5. volume': '20'
  },
  '2002-02-28': {
    '1. open': '4.2300',
    '2. high': '4.5750',
    '3. low': '4.2000',
    '4. close': '4.5250',
    '5. volume': '6290'
  },
  '2002-01-29': {
    '1. open': '3.9290',
    '2. high': '3.9290',
    '3. low': '3.9290',
    '4. close': '3.9290',
    '5. volume': '800'
  },
  '2001-12-21': {
    '1. open': '4.4100',
    '2. high': '4.4440',
    '3. low': '4.4100',
    '4. close': '4.4440',
    '5. volume': '2230'
  },
  '2001-11-14': {
    '1. open': '4.5000',
    '2. high': '4.5000',
    '3. low': '4.0200',
    '4. close': '4.0200',
    '5. volume': '3000'
  },
  '2001-10-19': {
    '1. open': '4.5000',
    '2. high': '4.5000',
    '3. low': '4.5000',
    '4. close': '4.5000',
    '5. volume': '5150'
  },
  '2001-09-12': {
    '1. open': '4.4350',
    '2. high': '4.5000',
    '3. low': '4.4100',
    '4. close': '4.4100',
    '5. volume': '3800'
  },
  '2001-08-20': {
    '1. open': '4.8150',
    '2. high': '4.8150',
    '3. low': '4.8150',
    '4. close': '4.8150',
    '5. volume': '200'
  },
  '2001-07-09': {
    '1. open': '5.2300',
    '2. high': '5.2300',
    '3. low': '5.2300',
    '4. close': '5.2300',
    '5. volume': '150'
  }
};

// tslint:disable:max-line-length
export const novoNordiskCompany: Company = {
  id: 1231,
  name: 'Novo Nordisk A/S',
  country: Country.Dänemark,
  city: 'Bagsværd',
  url: 'https://www.novonordisk.com/',
  description: 'Novo Nordisk A/S produziert und vermarktet pharmazeutische Produkte und Dienstleistungen. Seit der Gründung in Dänemark im Jahr 1923 hat sich das Unternehmen zu einem Weltmarktführer im Sektor Diabetes-Pharmazie entwickelt. In diesem Bereich hat das Unternehmen auch die breiteste Produktpalette der gesamten Industrie. Auch in den Bereichen Blutgerinnungsmedikamente, Wachstumshormontherapie und Hormonersatztherapie ist das Unternehmen vertreten.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Novo_Nordisk',
  logo: 'https://www.novonordisk.com/content/dam/Denmark/HQ/Commons/images/novo-logo-dhpx.image.136.0.png',
  products: [
    {
      id: 123110,
      name: 'NovoPen Echo®',
      logo: ''
    },
    {
      id: 123111,
      name: 'NovoPen® 5',
      logo: ''
    },
    {
      id: 123112,
      name: 'NovoPen® 4',
      logo: ''
    },
    {
      id: 123113,
      name: 'FlexTouch®',
      logo: ''
    },
    {
      id: 123114,
      name: 'FlexPen®',
      logo: ''
    },
    {
      id: 123115,
      name: 'InnoLet®',
      logo: ''
    },
    {
      id: 123116,
      name: 'NovoFine Plus®',
      logo: ''
    },
    {
      id: 123117,
      name: 'NovoFine®',
      logo: ''
    },
    {
      id: 123118,
      name: 'NovoTwist®',
      logo: ''
    },
    {
      id: 123119,
      name: 'NovoFine®  AutoCover®',
      logo: ''
    },
    {
      id: 123120,
      name: 'Tresiba®',
      logo: ''
    },
    {
      id: 123121,
      name: 'Xultophy®',
      logo: ''
    },
    {
      id: 123122,
      name: 'Levemir®',
      logo: ''
    },
    {
      id: 123123,
      name: 'Ryzodeg®',
      logo: ''
    },
    {
      id: 123124,
      name: 'NovoMix®',
      logo: ''
    },
    {
      id: 123125,
      name: 'Fiasp®',
      logo: ''
    },
    {
      id: 123126,
      name: 'NovoRapid®',
      logo: ''
    },
    {
      id: 123127,
      name: 'Insulatard®',
      logo: ''
    },
    {
      id: 123128,
      name: 'Actrapid®',
      logo: ''
    },
    {
      id: 123129,
      name: 'Mixtard®',
      logo: ''
    },
    {
      id: 123130,
      name: 'Victoza®',
      logo: ''
    },
    {
      id: 123131,
      name: 'Ozempic®',
      logo: ''
    },
    {
      id: 123132,
      name: 'NovoNorm®',
      logo: ''
    },
    {
      id: 123133,
      name: 'Saxenda®',
      logo: ''
    },
    {
      id: 123134,
      name: 'NovoSeven®',
      logo: ''
    },
    {
      id: 123135,
      name: 'NovoEight®',
      logo: ''
    },
    {
      id: 123136,
      name: 'NovoThirteen®',
      logo: ''
    },
    {
      id: 123137,
      name: 'Refixia®',
      logo: ''
    },
    {
      id: 123138,
      name: 'Esperoct®',
      logo: ''
    },
    {
      id: 123139,
      name: 'Norditropin®',
      logo: ''
    },
    {
      id: 123140,
      name: 'NordiPen®',
      logo: ''
    },
    {
      id: 123141,
      name: 'PenMate®',
      logo: ''
    },
    {
      id: 123142,
      name: 'Macrilen™',
      logo: ''
    },
    {
      id: 123143,
      name: 'Vagifem®',
      logo: ''
    },
    {
      id: 123144,
      name: 'Activelle®',
      logo: ''
    },
    {
      id: 123145,
      name: 'Kliogest®',
      logo: ''
    },
    {
      id: 123146,
      name: 'Novofem®',
      logo: ''
    },
    {
      id: 123147,
      name: 'Trisequens®',
      logo: ''
    },
    {
      id: 123148,
      name: 'Estrofem®',
      logo: ''
    }
  ],
  industries: [1610],
  isharesIndustryName: IsharesIndustryNames.Gesundheitsversorgung,
  securityType: SecurityType.NavneAktierB,
  currency: Currency.EUR,
  isin: 'DK0060534915',
  wkn: 'A1XA8R',
  symbol: 'NOVC.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.MSCIEuropeSRI, Indices.MSCIWorld],
  end_of_month_prices: prices,
  dividends,
  tags: ['Pharmaunternehmen', 'Diabetes', 'Hämophilie', 'Wachstumshormontherapie', 'Hormonersatztherapie', 'Insulin']
};
// tslint:enable:max-line-length

