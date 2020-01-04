import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';

const dividends = [
  {year: 2018, rate: 1.55, yield: 3.30}, {year: 2017, rate: 1.40}, {
    year: 2016,
    rate: 1.26
  }, {year: 2015, rate: 1.19, yield: 2.97}, {year: 2014, rate: 1.12, yield: 3.43}, {year: 2013, rate: 1.05, yield: 3.59}, {
    year: 2012,
    rate: 0.97,
    yield: 3.36
  }, {year: 2011, rate: 0.90, yield: 3.39}, {year: 2010, rate: 0.83, yield: 3.56}, {year: 2009, rate: 0.46, yield: 2.03}, {
    year: 2008,
    rate: 0.77,
    yield: 4.44
  }, {year: 2007, rate: 0.75, yield: 2.98}, {year: 2006, rate: 0.96, yield: 4.60}, {year: 2005, rate: 0.66, yield: 3.42}, {
    year: 2004,
    rate: 0.63,
    yield: 3.83
  }, {year: 2003, rate: 0.58, yield: 3.36}, {year: 2002, rate: 0.57, yield: 2.93}, {year: 2001, rate: 0.52, yield: 2.37}, {
    year: 2000,
    rate: 0.48,
    yield: 2.13
  }, {year: 1999, rate: 0.42, yield: 2.26}
];
const prices = {
  '2019-07-03': {
    '1. open': '53.4700',
    '2. high': '53.4700',
    '3. low': '53.4700',
    '4. close': '53.4700',
    '5. volume': '0'
  },
  '2019-06-28': {
    '1. open': '53.7400',
    '2. high': '55.2700',
    '3. low': '52.7200',
    '4. close': '53.4700',
    '5. volume': '199773'
  },
  '2019-05-31': {
    '1. open': '53.2200',
    '2. high': '54.8800',
    '3. low': '52.6800',
    '4. close': '54.0000',
    '5. volume': '202303'
  },
  '2019-04-30': {
    '1. open': '51.9200',
    '2. high': '53.9600',
    '3. low': '50.0900',
    '4. close': '53.9600',
    '5. volume': '221953'
  },
  '2019-03-29': {
    '1. open': '47.7750',
    '2. high': '52.1000',
    '3. low': '46.9350',
    '4. close': '51.6000',
    '5. volume': '15400321'
  },
  '2019-02-28': {
    '1. open': '47.0350',
    '2. high': '49.7150',
    '3. low': '46.8200',
    '4. close': '47.5650',
    '5. volume': '325313'
  },
  '2019-01-31': {
    '1. open': '46.8500',
    '2. high': '47.6450',
    '3. low': '45.5900',
    '4. close': '46.6650',
    '5. volume': '356249'
  },
  '2018-12-28': {
    '1. open': '49.1000',
    '2. high': '50.0100',
    '3. low': '46.2400',
    '4. close': '46.9800',
    '5. volume': '176164'
  },
  '2018-11-30': {
    '1. open': '47.4550',
    '2. high': '49.4500',
    '3. low': '47.0000',
    '4. close': '48.9050',
    '5. volume': '296644'
  },
  '2018-10-31': {
    '1. open': '47.9950',
    '2. high': '48.5000',
    '3. low': '45.3400',
    '4. close': '48.0500',
    '5. volume': '318403'
  },
  '2018-09-28': {
    '1. open': '49.4650',
    '2. high': '49.6900',
    '3. low': '47.1000',
    '4. close': '47.9800',
    '5. volume': '211062'
  },
  '2018-08-31': {
    '1. open': '49.2600',
    '2. high': '50.2000',
    '3. low': '48.9500',
    '4. close': '49.6050',
    '5. volume': '165512'
  },
  '2018-07-31': {
    '1. open': '47.8600',
    '2. high': '49.8400',
    '3. low': '47.4000',
    '4. close': '49.2400',
    '5. volume': '280215'
  },
  '2018-06-29': {
    '1. open': '48.0900',
    '2. high': '48.4000',
    '3. low': '45.4700',
    '4. close': '47.8250',
    '5. volume': '288937'
  },
  '2018-05-31': {
    '1. open': '47.0600',
    '2. high': '48.5350',
    '3. low': '45.6700',
    '4. close': '47.7850',
    '5. volume': '278958'
  },
  '2018-04-30': {
    '1. open': '45.5800',
    '2. high': '47.6250',
    '3. low': '44.7300',
    '4. close': '47.5650',
    '5. volume': '245993'
  },
  '2018-03-29': {
    '1. open': '42.8500',
    '2. high': '46.2250',
    '3. low': '42.1900',
    '4. close': '45.8950',
    '5. volume': '324393'
  },
  '2018-02-28': {
    '1. open': '47.2650',
    '2. high': '47.2650',
    '3. low': '42.7300',
    '4. close': '42.9300',
    '5. volume': '614558'
  },
  '2018-01-31': {
    '1. open': '48.9800',
    '2. high': '48.9800',
    '3. low': '45.2500',
    '4. close': '46.7000',
    '5. volume': '429575'
  },
  '2017-12-29': {
    '1. open': '48.9800',
    '2. high': '48.9800',
    '3. low': '48.9800',
    '4. close': '48.9800',
    '5. volume': '0'
  },
  '2017-11-30': {
    '1. open': '49.8500',
    '2. high': '50.0100',
    '3. low': '47.5000',
    '4. close': '48.9800',
    '5. volume': '246687'
  },
  '2017-10-31': {
    '1. open': '50.1200',
    '2. high': '52.3000',
    '3. low': '46.4550',
    '4. close': '48.8250',
    '5. volume': '351130'
  },
  '2017-09-29': {
    '1. open': '50.1200',
    '2. high': '50.8400',
    '3. low': '48.9400',
    '4. close': '50.0700',
    '5. volume': '219824'
  },
  '2017-08-31': {
    '1. open': '49.4200',
    '2. high': '50.3600',
    '3. low': '48.7100',
    '4. close': '49.9000',
    '5. volume': '405110'
  },
  '2017-07-31': {
    '1. open': '48.3700',
    '2. high': '50.2800',
    '3. low': '47.4450',
    '4. close': '49.4250',
    '5. volume': '230287'
  },
  '2017-06-30': {
    '1. open': '50.6000',
    '2. high': '51.3300',
    '3. low': '47.2000',
    '4. close': '48.4400',
    '5. volume': '325600'
  },
  '2017-05-31': {
    '1. open': '48.2400',
    '2. high': '50.9200',
    '3. low': '48.0000',
    '4. close': '50.8300',
    '5. volume': '327193'
  },
  '2017-04-28': {
    '1. open': '46.6150',
    '2. high': '48.5900',
    '3. low': '46.0500',
    '4. close': '48.0950',
    '5. volume': '456778'
  },
  '2017-03-31': {
    '1. open': '44.9500',
    '2. high': '46.9000',
    '3. low': '44.2950',
    '4. close': '46.5850',
    '5. volume': '862372'
  },
  '2017-02-28': {
    '1. open': '37.6800',
    '2. high': '45.0600',
    '3. low': '37.2750',
    '4. close': '44.7100',
    '5. volume': '1774029'
  },
  '2017-01-31': {
    '1. open': '39.0550',
    '2. high': '39.5400',
    '3. low': '37.4200',
    '4. close': '37.5450',
    '5. volume': '713695'
  },
  '2016-12-30': {
    '1. open': '37.3200',
    '2. high': '39.3250',
    '3. low': '36.4900',
    '4. close': '39.1900',
    '5. volume': '557266'
  },
  '2016-11-30': {
    '1. open': '38.3500',
    '2. high': '38.5900',
    '3. low': '36.2400',
    '4. close': '37.8450',
    '5. volume': '771476'
  },
  '2016-10-31': {
    '1. open': '41.4400',
    '2. high': '42.0000',
    '3. low': '37.9000',
    '4. close': '38.1500',
    '5. volume': '596236'
  },
  '2016-09-30': {
    '1. open': '41.5450',
    '2. high': '43.0200',
    '3. low': '40.1900',
    '4. close': '41.1000',
    '5. volume': '344578'
  },
  '2016-08-31': {
    '1. open': '41.4300',
    '2. high': '41.8850',
    '3. low': '40.0450',
    '4. close': '41.1900',
    '5. volume': '337329'
  },
  '2016-07-29': {
    '1. open': '42.0400',
    '2. high': '42.7200',
    '3. low': '40.8150',
    '4. close': '41.2800',
    '5. volume': '401248'
  },
  '2016-06-30': {
    '1. open': '40.3750',
    '2. high': '41.8900',
    '3. low': '37.8600',
    '4. close': '41.8650',
    '5. volume': '525488'
  },
  '2016-05-31': {
    '1. open': '38.5350',
    '2. high': '40.9400',
    '3. low': '37.9300',
    '4. close': '40.3250',
    '5. volume': '283836'
  },
  '2016-04-29': {
    '1. open': '38.7050',
    '2. high': '41.5400',
    '3. low': '38.2700',
    '4. close': '38.4500',
    '5. volume': '433165'
  },
  '2016-03-31': {
    '1. open': '39.3750',
    '2. high': '41.4500',
    '3. low': '38.6100',
    '4. close': '39.4000',
    '5. volume': '392706'
  },
  '2016-02-29': {
    '1. open': '40.9700',
    '2. high': '41.0800',
    '3. low': '36.3000',
    '4. close': '39.4950',
    '5. volume': '518274'
  },
  '2016-01-29': {
    '1. open': '39.0000',
    '2. high': '40.7200',
    '3. low': '36.5000',
    '4. close': '40.7200',
    '5. volume': '723138'
  },
  '2015-12-30': {
    '1. open': '41.5300',
    '2. high': '42.7500',
    '3. low': '38.0750',
    '4. close': '40.5600',
    '5. volume': '584065'
  },
  '2015-11-30': {
    '1. open': '40.8050',
    '2. high': '42.7900',
    '3. low': '39.5750',
    '4. close': '41.5900',
    '5. volume': '474299'
  },
  '2015-10-30': {
    '1. open': '36.3800',
    '2. high': '42.1000',
    '3. low': '35.5250',
    '4. close': '41.2150',
    '5. volume': '675623'
  },
  '2015-09-30': {
    '1. open': '35.3900',
    '2. high': '36.4400',
    '3. low': '33.6100',
    '4. close': '35.9250',
    '5. volume': '1118192'
  },
  '2015-08-31': {
    '1. open': '40.9600',
    '2. high': '42.4600',
    '3. low': '32.8850',
    '4. close': '35.6550',
    '5. volume': '1282755'
  },
  '2015-07-31': {
    '1. open': '37.4300',
    '2. high': '41.8000',
    '3. low': '36.7700',
    '4. close': '40.7050',
    '5. volume': '579392'
  },
  '2015-06-30': {
    '1. open': '39.0750',
    '2. high': '39.4900',
    '3. low': '36.4900',
    '4. close': '37.6500',
    '5. volume': '697810'
  },
  '2015-05-29': {
    '1. open': '38.8700',
    '2. high': '39.7900',
    '3. low': '37.3650',
    '4. close': '38.7550',
    '5. volume': '521816'
  },
  '2015-04-30': {
    '1. open': '38.3850',
    '2. high': '42.7250',
    '3. low': '38.3850',
    '4. close': '39.0600',
    '5. volume': '483095'
  },
  '2015-03-31': {
    '1. open': '38.9000',
    '2. high': '40.7000',
    '3. low': '38.2100',
    '4. close': '39.0250',
    '5. volume': '541570'
  },
  '2015-02-27': {
    '1. open': '38.3500',
    '2. high': '38.8200',
    '3. low': '36.2500',
    '4. close': '38.8150',
    '5. volume': '549021'
  },
  '2015-01-30': {
    '1. open': '32.7150',
    '2. high': '38.7200',
    '3. low': '31.3800',
    '4. close': '38.5950',
    '5. volume': '711175'
  },
  '2014-12-30': {
    '1. open': '32.7550',
    '2. high': '34.0600',
    '3. low': '30.3200',
    '4. close': '32.4950',
    '5. volume': '514313'
  },
  '2014-11-28': {
    '1. open': '30.9750',
    '2. high': '32.8000',
    '3. low': '30.5500',
    '4. close': '32.7850',
    '5. volume': '365775'
  },
  '2014-10-31': {
    '1. open': '31.3500',
    '2. high': '31.4050',
    '3. low': '28.8100',
    '4. close': '31.0050',
    '5. volume': '453898'
  },
  '2014-09-30': {
    '1. open': '31.5750',
    '2. high': '32.7650',
    '3. low': '30.7000',
    '4. close': '31.6250',
    '5. volume': '432152'
  },
  '2014-08-29': {
    '1. open': '30.7550',
    '2. high': '31.6500',
    '3. low': '29.8450',
    '4. close': '31.6500',
    '5. volume': '363166'
  },
  '2014-07-31': {
    '1. open': '31.9850',
    '2. high': '32.5600',
    '3. low': '30.7200',
    '4. close': '30.7200',
    '5. volume': '421988'
  },
  '2014-06-30': {
    '1. open': '31.9450',
    '2. high': '32.7050',
    '3. low': '31.4750',
    '4. close': '31.8550',
    '5. volume': '337197'
  },
  '2014-05-30': {
    '1. open': '30.6600',
    '2. high': '32.3450',
    '3. low': '30.0300',
    '4. close': '31.9050',
    '5. volume': '405740'
  },
  '2014-04-30': {
    '1. open': '29.7700',
    '2. high': '31.1000',
    '3. low': '29.4900',
    '4. close': '30.8050',
    '5. volume': '504662'
  },
  '2014-03-31': {
    '1. open': '28.4650',
    '2. high': '30.1150',
    '3. low': '27.4500',
    '4. close': '29.8500',
    '5. volume': '533210'
  },
  '2014-02-28': {
    '1. open': '27.7150',
    '2. high': '28.9250',
    '3. low': '26.9900',
    '4. close': '28.6550',
    '5. volume': '681595'
  },
  '2014-01-31': {
    '1. open': '29.4000',
    '2. high': '30.2150',
    '3. low': '27.2500',
    '4. close': '27.6500',
    '5. volume': '736333'
  },
  '2013-12-30': {
    '1. open': '29.1700',
    '2. high': '29.3550',
    '3. low': '27.6250',
    '4. close': '29.0550',
    '5. volume': '364008'
  },
  '2013-11-29': {
    '1. open': '29.2650',
    '2. high': '29.4450',
    '3. low': '28.4850',
    '4. close': '29.0050',
    '5. volume': '510297'
  },
  '2013-10-31': {
    '1. open': '27.7250',
    '2. high': '29.3500',
    '3. low': '27.2350',
    '4. close': '29.1850',
    '5. volume': '842380'
  },
  '2013-09-30': {
    '1. open': '28.7050',
    '2. high': '30.2700',
    '3. low': '28.1350',
    '4. close': '28.8000',
    '5. volume': '473229'
  },
  '2013-08-30': {
    '1. open': '30.5150',
    '2. high': '30.7800',
    '3. low': '28.3600',
    '4. close': '28.4500',
    '5. volume': '393754'
  },
  '2013-07-31': {
    '1. open': '30.5300',
    '2. high': '32.0000',
    '3. low': '29.9100',
    '4. close': '30.2800',
    '5. volume': '443712'
  },
  '2013-06-28': {
    '1. open': '31.3300',
    '2. high': '31.7350',
    '3. low': '28.5500',
    '4. close': '30.4000',
    '5. volume': '509306'
  },
  '2013-05-31': {
    '1. open': '32.3350',
    '2. high': '33.0350',
    '3. low': '31.4000',
    '4. close': '31.8000',
    '5. volume': '444484'
  },
  '2013-04-30': {
    '1. open': '32.0250',
    '2. high': '32.7750',
    '3. low': '30.8350',
    '4. close': '32.2750',
    '5. volume': '415001'
  },
  '2013-03-28': {
    '1. open': '29.8800',
    '2. high': '32.2150',
    '3. low': '29.8050',
    '4. close': '31.8950',
    '5. volume': '378848'
  },
  '2013-02-28': {
    '1. open': '29.9350',
    '2. high': '30.1800',
    '3. low': '28.9800',
    '4. close': '29.7800',
    '5. volume': '564778'
  },
  '2013-01-31': {
    '1. open': '29.4450',
    '2. high': '30.1950',
    '3. low': '28.5300',
    '4. close': '29.7850',
    '5. volume': '460506'
  },
  '2012-12-28': {
    '1. open': '29.2750',
    '2. high': '29.6500',
    '3. low': '28.6800',
    '4. close': '28.8650',
    '5. volume': '261453'
  },
  '2012-11-30': {
    '1. open': '28.2600',
    '2. high': '29.5400',
    '3. low': '27.8050',
    '4. close': '29.2300',
    '5. volume': '256933'
  },
  '2012-10-31': {
    '1. open': '27.5800',
    '2. high': '28.8500',
    '3. low': '27.3650',
    '4. close': '28.4150',
    '5. volume': '359101'
  },
  '2012-09-28': {
    '1. open': '27.7250',
    '2. high': '28.3500',
    '3. low': '26.9800',
    '4. close': '27.6100',
    '5. volume': '299949'
  },
  '2012-08-31': {
    '1. open': '28.4200',
    '2. high': '28.8650',
    '3. low': '27.4450',
    '4. close': '27.7100',
    '5. volume': '452280'
  },
  '2012-07-31': {
    '1. open': '26.3800',
    '2. high': '28.4300',
    '3. low': '26.3300',
    '4. close': '28.3800',
    '5. volume': '318766'
  },
  '2012-06-29': {
    '1. open': '25.2000',
    '2. high': '26.4700',
    '3. low': '24.6000',
    '4. close': '26.4200',
    '5. volume': '311679'
  },
  '2012-05-31': {
    '1. open': '26.1800',
    '2. high': '26.5400',
    '3. low': '25.0400',
    '4. close': '25.2850',
    '5. volume': '336334'
  },
  '2012-04-30': {
    '1. open': '25.6000',
    '2. high': '26.7600',
    '3. low': '24.5200',
    '4. close': '25.9500',
    '5. volume': '201402'
  },
  '2012-03-30': {
    '1. open': '25.0300',
    '2. high': '26.1400',
    '3. low': '24.9100',
    '4. close': '25.5700',
    '5. volume': '222975'
  },
  '2012-02-29': {
    '1. open': '25.6350',
    '2. high': '25.9400',
    '3. low': '24.6800',
    '4. close': '24.9000',
    '5. volume': '442082'
  },
  '2012-01-31': {
    '1. open': '26.6100',
    '2. high': '27.1100',
    '3. low': '25.0700',
    '4. close': '25.4350',
    '5. volume': '331473'
  },
  '2011-12-30': {
    '1. open': '25.2950',
    '2. high': '26.5500',
    '3. low': '24.6000',
    '4. close': '26.4150',
    '5. volume': '195889'
  },
  '2011-11-30': {
    '1. open': '24.9050',
    '2. high': '25.3300',
    '3. low': '23.2300',
    '4. close': '25.2600',
    '5. volume': '309983'
  },
  '2011-10-31': {
    '1. open': '23.4450',
    '2. high': '25.0500',
    '3. low': '23.0950',
    '4. close': '24.9900',
    '5. volume': '225897'
  },
  '2011-09-30': {
    '1. open': '23.7150',
    '2. high': '23.9200',
    '3. low': '21.9700',
    '4. close': '23.7650',
    '5. volume': '120039'
  },
  '2011-08-31': {
    '1. open': '22.6950',
    '2. high': '23.6900',
    '3. low': '20.9900',
    '4. close': '23.4900',
    '5. volume': '403013'
  },
  '2011-07-29': {
    '1. open': '22.6200',
    '2. high': '23.5400',
    '3. low': '22.3950',
    '4. close': '22.6800',
    '5. volume': '294675'
  },
  '2011-06-30': {
    '1. open': '23.0050',
    '2. high': '23.0050',
    '3. low': '22.0000',
    '4. close': '22.6600',
    '5. volume': '156585'
  },
  '2011-05-31': {
    '1. open': '22.3350',
    '2. high': '23.2000',
    '3. low': '21.9250',
    '4. close': '22.7100',
    '5. volume': '187084'
  },
  '2011-04-29': {
    '1. open': '22.1550',
    '2. high': '22.9950',
    '3. low': '21.9000',
    '4. close': '22.2550',
    '5. volume': '161284'
  },
  '2011-03-31': {
    '1. open': '21.9300',
    '2. high': '22.2700',
    '3. low': '20.9050',
    '4. close': '22.2350',
    '5. volume': '380639'
  },
  '2011-02-28': {
    '1. open': '21.7200',
    '2. high': '22.3500',
    '3. low': '21.5100',
    '4. close': '21.8800',
    '5. volume': '342542'
  },
  '2011-01-31': {
    '1. open': '23.4000',
    '2. high': '24.0100',
    '3. low': '21.4700',
    '4. close': '21.6650',
    '5. volume': '277663'
  },
  '2010-12-30': {
    '1. open': '21.8400',
    '2. high': '24.0950',
    '3. low': '21.8400',
    '4. close': '23.5850',
    '5. volume': '172702'
  },
  '2010-11-30': {
    '1. open': '21.3600',
    '2. high': '22.8350',
    '3. low': '21.2650',
    '4. close': '21.8450',
    '5. volume': '233339'
  },
  '2010-10-29': {
    '1. open': '21.8300',
    '2. high': '22.0600',
    '3. low': '20.8350',
    '4. close': '21.3400',
    '5. volume': '210364'
  },
  '2010-09-30': {
    '1. open': '21.1300',
    '2. high': '22.3800',
    '3. low': '21.1000',
    '4. close': '22.1400',
    '5. volume': '129751'
  },
  '2010-08-31': {
    '1. open': '22.7250',
    '2. high': '22.8500',
    '3. low': '20.7000',
    '4. close': '21.0850',
    '5. volume': '290584'
  },
  '2010-07-30': {
    '1. open': '22.4700',
    '2. high': '24.0300',
    '3. low': '21.7500',
    '4. close': '22.5950',
    '5. volume': '169917'
  },
  '2010-06-30': {
    '1. open': '22.4000',
    '2. high': '23.8500',
    '3. low': '22.1600',
    '4. close': '22.5050',
    '5. volume': '170922'
  },
  '2010-05-31': {
    '1. open': '22.6682',
    '2. high': '23.0850',
    '3. low': '21.1447',
    '4. close': '22.5000',
    '5. volume': '164787'
  },
  '2010-04-30': {
    '1. open': '22.6185',
    '2. high': '23.3232',
    '3. low': '22.1223',
    '4. close': '22.8766',
    '5. volume': '303109'
  },
  '2010-03-31': {
    '1. open': '22.1918',
    '2. high': '22.7525',
    '3. low': '21.5566',
    '4. close': '22.2216',
    '5. volume': '147800'
  },
  '2010-02-26': {
    '1. open': '21.9635',
    '2. high': '22.5788',
    '3. low': '20.7229',
    '4. close': '21.8345',
    '5. volume': '185793'
  },
  '2010-01-29': {
    '1. open': '22.7376',
    '2. high': '22.8071',
    '3. low': '21.5765',
    '4. close': '21.9635',
    '5. volume': '139157'
  },
  '2009-12-30': {
    '1. open': '20.7130',
    '2. high': '22.8270',
    '3. low': '20.7130',
    '4. close': '22.5292',
    '5. volume': '137989'
  },
  '2009-11-30': {
    '1. open': '21.0405',
    '2. high': '21.5864',
    '3. low': '19.9190',
    '4. close': '20.3557',
    '5. volume': '60827'
  },
  '2009-01-19': {
    '1. open': '17.4081',
    '2. high': '18.2120',
    '3. low': '16.9416',
    '4. close': '17.7951',
    '5. volume': '158570'
  },
  '2008-12-30': {
    '1. open': '18.8571',
    '2. high': '18.8571',
    '3. low': '16.6438',
    '4. close': '17.0508',
    '5. volume': '892145'
  },
  '2008-11-28': {
    '1. open': '18.4898',
    '2. high': '19.8098',
    '3. low': '17.3286',
    '4. close': '18.2219',
    '5. volume': '874420'
  },
  '2008-10-31': {
    '1. open': '19.6808',
    '2. high': '20.3656',
    '3. low': '16.3362',
    '4. close': '18.7975',
    '5. volume': '807430'
  },
  '2008-09-30': {
    '1. open': '18.4998',
    '2. high': '20.5443',
    '3. low': '18.4998',
    '4. close': '19.6113',
    '5. volume': '615737'
  },
  '2008-08-29': {
    '1. open': '19.1846',
    '2. high': '19.5022',
    '3. low': '18.4601',
    '4. close': '18.5692',
    '5. volume': '166536'
  },
  '2008-07-28': {
    '1. open': '17.8745',
    '2. high': '18.9563',
    '3. low': '17.0408',
    '4. close': '18.7280',
    '5. volume': '342319'
  },
  '2008-06-30': {
    '1. open': '20.8321',
    '2. high': '21.1199',
    '3. low': '17.5371',
    '4. close': '17.9241',
    '5. volume': '467905'
  },
  '2008-05-30': {
    '1. open': '21.5368',
    '2. high': '22.0925',
    '3. low': '20.1374',
    '4. close': '20.8222',
    '5. volume': '348046'
  },
  '2008-04-30': {
    '1. open': '21.5963',
    '2. high': '21.8345',
    '3. low': '20.4252',
    '4. close': '21.4177',
    '5. volume': '181952'
  },
  '2008-03-31': {
    '1. open': '20.2366',
    '2. high': '21.4673',
    '3. low': '19.7205',
    '4. close': '21.0107',
    '5. volume': '235976'
  },
  '2008-02-29': {
    '1. open': '21.8643',
    '2. high': '22.2116',
    '3. low': '20.2962',
    '4. close': '20.4550',
    '5. volume': '482470'
  },
  '2008-01-31': {
    '1. open': '24.9707',
    '2. high': '25.3776',
    '3. low': '20.1671',
    '4. close': '21.5268',
    '5. volume': '818430'
  }
};

// tslint:disable:max-line-length
export const unileverCompany: Company = {
  id: 1201,
  name: 'Unilever N.V.',
  country: Country.Niederlande,
  city: 'Rotterdam',
  url: 'http://www.unilever.com/',
  description: 'Unilever ist ein niederländisch-britischer Konzern. Das Unternehmen ist weltweit einer der größten Hersteller von Verbrauchsgütern. Die Hauptgeschäftsbereiche umfassen die Produktion von Nahrungsmitteln, Kosmetika, Körperpflege- sowie Haushalts- und Textilpflegeprodukten. Unilever beschäftigte 2016 weltweit 168.000 Mitarbeiter in über 100 Ländern (1990 noch 304.000). In Deutschland waren 2013 rund 5.000 Mitarbeiter tätig (1962 waren es 36.000, 27.400 Beschäftigte 1990 und 8.000 Ende 2005). Die 2008 gebildete Unilever-Organisation für die Länder Deutschland, Österreich und Schweiz (D-A-CH) hat ihren Sitz in Hamburg.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Unilever',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/8/8f/Unilever_Logo.svg/227px-Unilever_Logo.svg.png',
  products: [
    {
      id: 120110,
      name: 'Axe',
      logo: 'https://www.unilever.com/Images/axe_tcm244-408738_w198.jpg',
      segment: 101010
    },
    {
      id: 120111,
      name: 'Breyers',
      logo: 'https://www.unilever.com/Images/breyers-white_tcm244-523647_w198.jpg',
      segment: 2411
    },
    {
      id: 120112,
      name: 'Cif',
      logo: 'https://www.unilever.com/Images/cif_tcm244-408746_w198.png',
      segment: 101010
    },
    {
      id: 120113,
      name: 'CLEAR',
      logo: 'https://www.unilever.com/Images/global-clear-logo_tcm244-521204_w198.jpg',
      segment: 101010
    },
    {
      id: 120114,
      name: 'Cornetto',
      logo: 'https://www.unilever.com/Images/cornetto-logo-280x280_tcm244-476191_w198.jpg',
      segment: 2411
    },
    {
      id: 120115,
      name: 'Day 2',
      logo: 'https://www.unilever.com/Images/Day2-Logo_tcm244-536589_w198.jpg',
      segment: 111211
    },
    {
      id: 120116,
      name: 'Domestos',
      logo: 'https://www.unilever.com/Images/domestos_tcm244-408750_w198.png',
      segment: 111211
    },
    {
      id: 120117,
      name: 'Dove',
      logo: 'https://www.unilever.com/Images/dove_tcm244-408752_w198.png',
      segment: 101010
    },
    {
      id: 120118,
      name: 'Dove Men Care',
      logo: 'https://www.unilever.com/Images/dove-men-care-dark_tcm244-460359.gif',
      segment: 101010
    },
    {
      id: 120119,
      name: 'Fair&Lovely',
      logo: 'https://www.unilever.com/Images/fair-lovely_tcm244-408989_1_w198.png',
      segment: 101010
    },
    {
      id: 120120,
      name: 'Langnese',
      logo: 'https://www.unilever.com/Images/heartbrand_tcm244-408761.gif',
      segment: 2411
    },
    {
      id: 120121,
      name: 'Hellmann´s',
      logo: 'https://www.unilever.com/Images/hellmans-logo_new_280x280px_tcm244-504094_w198.jpg',
      segment: 2411
    },
    {
      id: 120122,
      name: 'Knorr',
      logo: 'https://www.unilever.com/Images/knorr_tcm244-408767_w198.png',
      segment: 2411
    },
    {
      id: 120123,
      name: 'Lifebuoy',
      logo: 'https://www.unilever.com/Images/lifebuoy-logo-2016-280x280_tcm244-408770_1_w198.jpg',
      segment: 101010
    },
    {
      id: 120124,
      name: 'Lipton',
      logo: 'https://www.unilever.com/Images/LIPTON_OPTIMUM_RGB_STANDARD_tcm244-408771_w198.png',
      segment: 101010
    },
    {
      id: 120125,
      name: 'LUX',
      logo: 'https://www.unilever.com/Images/lux_tcm244-408773_w198.png',
      segment: 101010
    },
    {
      id: 120126,
      name: 'Magnum',
      logo: 'https://www.unilever.com/Images/Magnum_280x280_tcm244-408775_w198.jpg',
      segment: 2411
    },
    {
      id: 120127,
      name: 'OMO',
      logo: 'https://www.unilever.com/Images/omo-logo_280x280px_tcm244-508214_1_w198.jpg',
      segment: 111211
    },
    {
      id: 120128,
      name: 'Pure Leaf',
      logo: 'https://www.unilever.com/Images/Pure_leaf_logo_tcm244-509913_w198.jpg',
      segment: 2411
    },
    {
      id: 120129,
      name: 'Rexona',
      logo: 'https://www.unilever.com/Images/rexona_tcm244-408784.gif',
      segment: 101010
    },
    {
      id: 120130,
      name: 'Smile',
      logo: 'https://www.unilever.com/Images/Smile-280-280_tcm244-521904_w198.png',
      segment: 101010
    },
    {
      id: 120131,
      name: 'Sunsilk',
      logo: 'https://www.unilever.com/Images/sunsilk_tcm244-408794_w198.jpg',
      segment: 101010
    },
    {
      id: 120132,
      name: 'Surf',
      logo: 'https://www.unilever.com/Images/surf_tcm244-408796_w198.png',
      segment: 111211
    },
    {
      id: 120133,
      name: 'ala',
      logo: 'https://www.unilever.com/Images/ala_tcm244-408957.gif',
      segment: 111211
    },
    {
      id: 120134,
      name: 'Alberto Balsam',
      logo: 'https://www.unilever.com/Images/UK-Alberto-Balsam-brand-logo_tcm244-498506_w198.jpg',
      segment: 101010
    },
    {
      id: 120135,
      name: 'Arisco',
      logo: 'https://www.unilever.com/Images/arisco_tcm244-408960_w198.png',
      segment: 2411
    },
    {
      id: 120136,
      name: 'aviance',
      logo: 'https://www.unilever.com/Images/aviance_tcm244-408961_w198.png',
      segment: 101010
    },
    {
      id: 120137,
      name: 'Breeze',
      logo: 'https://www.unilever.com/Images/breeze_tcm244-408966_w198.png',
      segment: 101010
    },
    {
      id: 120138,
      name: 'Brut',
      logo: 'https://www.unilever.com/Images/brut_tcm244-408970_w198.png',
      segment: 101010
    },
    {
      id: 120139,
      name: 'Citra',
      logo: 'https://www.unilever.com/Images/citra-logo_tcm244-507915_w198.jpg',
      segment: 101010
    },
    {
      id: 120140,
      name: 'closeup',
      logo: 'https://www.unilever.com/Images/closeup_tcm244-408748_w198.png',
      segment: 101010
    },
    {
      id: 120141,
      name: 'dusch das',
      logo: 'https://www.unilever.com/Images/duschdas_tcm244-408987_w198.png',
      segment: 101010
    },
    {
      id: 120142,
      name: 'Eskinol',
      logo: 'https://www.unilever.com/Images/eskinol_tcm244-408988_w198.png',
      segment: 101010
    },
    {
      id: 120143,
      name: 'Fissan',
      logo: 'https://www.unilever.com/Images/fissan_tcm244-408990_w198.png',
      segment: 101010
    },
    {
      id: 120144,
      name: 'Hazeline',
      logo: 'https://www.unilever.com/Images/hazeline_tcm244-408995_w198.png',
      segment: 101010
    },
    {
      id: 120145,
      name: 'Impulse',
      logo: 'https://www.unilever.com/Images/hazeline_tcm244-408995_w198.png',
      segment: 101010
    },
    {
      id: 120146,
      name: 'Lakme',
      logo: 'https://www.unilever.com/Images/lakme_tcm244-409003.gif',
      segment: 101010
    },
    {
      id: 120147,
      name: 'Lever2000',
      logo: 'https://www.unilever.com/Images/lever1000_tcm244-409005_w198.png',
      segment: 101010
    },
    {
      id: 120148,
      name: 'mod´s hair',
      logo: 'https://www.unilever.com/Images/mods_tcm244-409014_w198.png',
      segment: 101010
    },
    {
      id: 120149,
      name: 'Noxzema',
      logo: 'https://www.unilever.com/Images/noxzema_tcm244-409018_w198.png',
      segment: 101010
    },
    {
      id: 120150,
      name: 'Pears',
      logo: 'https://www.unilever.com/Images/pears_tcm244-409019_w198.png',
      segment: 101010
    },
    {
      id: 120151,
      name: 'Pond´s',
      logo: 'https://www.unilever.com/Images/ponds_tcm244-408782_w198.png',
      segment: 101010
    },
    {
      id: 120152,
      name: 'Q-Tips',
      logo: 'https://www.unilever.com/Images/qtips_tcm244-409025_w198.png',
      segment: 101010
    },
    {
      id: 120153,
      name: 'simple',
      logo: 'https://www.unilever.com/Images/simple_tcm244-409033_w198.png',
      segment: 101010
    },
    {
      id: 120154,
      name: 'St.Ives',
      logo: 'https://www.unilever.com/Images/stives_tcm244-409035_w198.png',
      segment: 101010
    },
    {
      id: 120155,
      name: 'Suave',
      logo: 'https://www.unilever.com/Images/suave_tcm244-409037_w198.png',
      segment: 101010
    },
    {
      id: 120156,
      name: 'TIGI',
      logo: 'https://www.unilever.com/Images/tigi_tcm244-409042_w198.png',
      segment: 101010
    },
    {
      id: 120157,
      name: 'TreSemme',
      logo: 'https://www.unilever.com/Images/tresemme_tcm244-408798_w198.png',
      segment: 101010
    },
    {
      id: 120158,
      name: 'Timotei',
      logo: 'https://www.unilever.com/Images/tresemme_tcm244-408798_w198.png',
      segment: 101010
    },
    {
      id: 120159,
      name: 'Toni&Guy',
      logo: 'https://www.unilever.com/Images/ToniandGuy-logo_tcm244-409045.gif',
      segment: 101010
    },
    {
      id: 120160,
      name: 'vo5',
      logo: 'https://www.unilever.com/Images/vo5_tcm244-409052_w198.png',
      segment: 101010
    },
    {
      id: 120161,
      name: 'Vaseline',
      logo: 'https://www.unilever.com/Images/vaseline_tcm244-408800_w198.png',
      segment: 101010
    },
    {
      id: 120162,
      name: 'Zwitsal',
      logo: 'https://www.unilever.com/Images/zwitsal_tcm244-409056.gif',
      segment: 101010
    },
    {
      id: 120163,
      name: 'Andrelon',
      logo: 'https://www.unilever.com/Images/andrelon_tcm244-408811_w198.png',
      segment: 101010
    },
    {
      id: 120164,
      name: 'Block&White',
      logo: 'https://www.unilever.com/Images/block-white_tcm244-408822_1_w198.png',
      segment: 101010
    },
    {
      id: 120165,
      name: 'Clinic Plus',
      logo: 'https://www.unilever.com/Images/clinicplus_tcm244-408833_w198.png',
      segment: 101010
    },
    {
      id: 120166,
      name: 'Cream Silk',
      logo: 'https://www.unilever.com/Images/creamsilk_tcm244-408838_w198.png',
      segment: 101010
    },
    {
      id: 120167,
      name: 'dawn',
      logo: 'https://www.unilever.com/Images/dawn_tcm244-408842_w198.png',
      segment: 101010
    },
    {
      id: 120168,
      name: 'elle 18',
      logo: 'https://www.unilever.com/Images/elle18_tcm244-408853.gif',
      segment: 101010
    },
    {
      id: 120169,
      name: 'Folicure',
      logo: 'https://www.unilever.com/Images/folicure_tcm244-408858_w198.png',
      segment: 101010
    },
    {
      id: 120170,
      name: 'Hamam',
      logo: 'https://www.unilever.com/Images/hamam_tcm244-408871_w198.png',
      segment: 101010
    },
    {
      id: 120171,
      name: 'indulekha',
      logo: 'https://www.unilever.com/Images/Indulekha-Logo-280x280_tcm244-484783_w198.jpg',
      segment: 101010
    },
    {
      id: 120172,
      name: 'kalina',
      logo: 'https://www.unilever.com/Images/kalina_tcm244-408878_w198.png',
      segment: 101010
    },
    {
      id: 120173,
      name: 'Le Sancy',
      logo: 'https://www.unilever.com/Images/lesancy_tcm244-408887_w198.png',
      segment: 101010
    },
    {
      id: 120174,
      name: 'ayush theraphy',
      logo: 'https://www.unilever.com/Images/leverayushtherapy_tcm244-408888_w198.png',
      segment: 101010
    },
    {
      id: 120175,
      name: 'Liril',
      logo: 'https://www.unilever.com/Images/liril-logo_tcm244-409512_w198.jpg',
      segment: 101010
    },
    {
      id: 120176,
      name: 'Matey',
      logo: 'https://www.unilever.com/Images/global-matey-Logo-090217_tcm244-498305_w198.jpg',
      segment: 101010
    },
    {
      id: 120177,
      name: 'Organics',
      logo: 'https://www.unilever.com/Images/organics_tcm244-408910.gif',
      segment: 101010
    },
    {
      id: 120178,
      name: 'P/S',
      logo: 'https://www.unilever.com/Images/ps_tcm244-408911.gif',
      segment: 101010
    },
    {
      id: 120179,
      name: 'Signal',
      logo: 'https://www.unilever.de/Images/Signal_logo_208_tcm1350-408790.jpg',
      segment: 101010
    },
    {
      id: 120180,
      name: 'Pure Derm',
      logo: 'https://www.unilever.com/Images/purederm-logo_tcm244-521897_w198.jpg',
      segment: 101010
    },
    {
      id: 120181,
      name: 'Zhonghua',
      logo: 'https://www.unilever.com/Images/zhonghua_tcm244-408955_w198.png',
      segment: 101010
    },
    {
      id: 120182,
      name: 'Ben&Jerry´s',
      logo: 'https://www.unilever.com/Images/bennjerrys_tcm244-408741_w198.png',
      segment: 2411
    },
    {
      id: 120183,
      name: 'Bru Instant',
      logo: 'https://www.unilever.com/Images/bru_tcm244-408969_w198.png',
      segment: 2411
    },
    {
      id: 120184,
      name: 'Carte D´or',
      logo: 'https://www.unilever.com/Images/cartedor_tcm244-408972_w198.png',
      segment: 2411
    },
    {
      id: 120185,
      name: 'Continental',
      logo: 'https://www.unilever.com/Images/continental_tcm244-408976_w198.png',
      segment: 2411
    },
    {
      id: 120186,
      name: 'Cremissimo',
      logo: 'https://www.unilever.com/Images/cremissimo_tcm244-408979.gif',
      segment: 2411
    },
    {
      id: 120187,
      name: 'Cup a soup',
      logo: 'https://www.unilever.com/Images/cupasoup_tcm244-408980.gif',
      segment: 2411
    },
    {
      id: 120188,
      name: 'Fruttare',
      logo: 'https://www.unilever.com/Images/fruttare_tcm244-408991_w198.png',
      segment: 2411
    },
    {
      id: 120189,
      name: 'Klondike',
      logo: 'https://www.unilever.com/Images/klondike_tcm244-409000_w198.png',
      segment: 2411
    },
    {
      id: 120190,
      name: 'Maille',
      logo: 'https://www.unilever.com/Images/maille_tcm244-409008_w198.png',
      segment: 2411
    },
    {
      id: 120191,
      name: 'Maizena',
      logo: 'https://www.unilever.com/Images/Maizena-Logo_tcm244-530326_w198.jpg',
      segment: 2411
    },
    {
      id: 120192,
      name: 'Marmite',
      logo: 'https://www.unilever.com/Images/marmite_tcm244-409010_w198.png',
      segment: 2411
    },
    {
      id: 120193,
      name: 'Pfanni',
      logo: 'https://www.unilever.com/Images/pfanni_tcm244-409021_w198.png',
      segment: 2411
    },
    {
      id: 120194,
      name: 'Popsicle',
      logo: 'https://www.unilever.com/Images/popsicle_tcm244-409023_w198.png',
      segment: 2411
    },
    {
      id: 120195,
      name: 'Savora',
      logo: 'https://www.unilever.com/Images/savora_tcm244-409032_w198.png',
      segment: 2411
    },
    {
      id: 120196,
      name: 'Solero',
      logo: 'https://www.unilever.com/Images/solero_tcm244-409034_w198.png',
      segment: 2411
    },
    {
      id: 120197,
      name: 'Unox',
      logo: 'https://www.unilever.com/Images/unox_tcm244-409048_w198.png',
      segment: 2411
    },
    {
      id: 120198,
      name: 'Viennetta',
      logo: 'https://www.unilever.com/Images/viennetta_tcm244-409050_w198.png',
      segment: 2411
    },
    {
      id: 120199,
      name: 'Walls',
      logo: 'https://www.unilever.com/Images/walls_tcm244-408803.gif',
      segment: 2411
    },
    {
      id: 1201100,
      name: 'Annapurna',
      logo: 'https://www.unilever.com/Images/annapurna_tcm244-408813_w198.png',
      segment: 2411
    },
    {
      id: 1201101,
      name: 'Baltimor',
      logo: 'https://www.unilever.com/Images/baltimor_tcm244-408816_w198.png',
      segment: 2411
    },
    {
      id: 1201102,
      name: 'Bango',
      logo: 'https://www.unilever.com/Images/bango_tcm244-408818.gif',
      segment: 2411
    },
    {
      id: 1201103,
      name: 'Beseda',
      logo: 'https://www.unilever.com/Images/beseda_tcm244-408820_w198.png',
      segment: 2411
    },
    {
      id: 1201104,
      name: 'Bovril',
      logo: 'https://www.unilever.com/Images/bovril_tcm244-408826_w198.png',
      segment: 2411
    },
    {
      id: 1201105,
      name: '3roses',
      logo: 'https://www.unilever.com/Images/3roses_tcm244-408806.gif',
      segment: 2411
    },
    {
      id: 1201106,
      name: 'Taaza',
      logo: 'https://www.unilever.com/Images/taaza_tcm244-424734_w198.jpg',
      segment: 2411
    },
    {
      id: 1201107,
      name: 'Taj Mahal',
      logo: 'https://www.unilever.com/Images/tajmahal_tcm244-424735_w198.jpg',
      segment: 2411
    },
    {
      id: 1201108,
      name: 'Buavita',
      logo: 'https://www.unilever.com/Images/buavita_tcm244-408827_w198.png',
      segment: 2411
    },
    {
      id: 1201109,
      name: 'Bushells',
      logo: 'https://www.unilever.com/Images/bushells_tcm244-408828_w198.png',
      segment: 2411
    },
    {
      id: 1201110,
      name: 'chirat',
      logo: 'https://www.unilever.com/Images/global-chirat-logo-updated_tcm244-408830_w198.png',
      segment: 2411
    },
    {
      id: 1201111,
      name: 'Choysa',
      logo: 'https://www.unilever.com/Images/choysa_tcm244-408831_w198.jpg',
      segment: 2411
    },
    {
      id: 1201112,
      name: 'Colman´s',
      logo: 'https://www.unilever.com/Images/colmans_tcm244-408835_w198.png',
      segment: 2411
    },
    {
      id: 1201113,
      name: 'Conimex',
      logo: 'https://www.unilever.com/Images/Conimex-Logo-280x280_tcm244-408836_w198.png',
      segment: 2411
    },
    {
      id: 1201114,
      name: 'Glaxose-D',
      logo: 'https://www.unilever.com/Images/glaxosed_tcm244-408865_w198.png',
      segment: 2411
    },
    {
      id: 1201115,
      name: 'Glen',
      logo: 'https://www.unilever.com/Images/glen_tcm244-408866_w198.png',
      segment: 2411
    },
    {
      id: 1201116,
      name: 'Hertog',
      logo: 'https://www.unilever.com/Images/hertog_tcm244-408873_w198.png',
      segment: 2411
    },
    {
      id: 1201117,
      name: 'Inmarko',
      logo: 'https://www.unilever.com/Images/inmarko_tcm244-408875_w198.jpg',
      segment: 2411
    },
    {
      id: 1201118,
      name: 'Joko',
      logo: 'https://www.unilever.com/Images/jokotea_tcm244-408876.gif',
      segment: 2411
    },
    {
      id: 1201119,
      name: 'Kibon',
      logo: 'https://www.unilever.com/Images/kibon_tcm244-439600_w198.jpg',
      segment: 2411
    },
    {
      id: 1201120,
      name: 'kissan',
      logo: 'https://www.unilever.com/Images/kissan_tcm244-408880_w198.png',
      segment: 2411
    },
    {
      id: 1201121,
      name: 'Knorrox',
      logo: 'https://www.unilever.com/Images/knorrox_tcm244-408881_w198.png',
      segment: 2411
    },
    {
      id: 1201122,
      name: 'Kuner',
      logo: 'https://www.unilever.com/Images/kuner_tcm244-408882_w198.png',
      segment: 2411
    },
    {
      id: 1201123,
      name: 'Lan-Choo',
      logo: 'https://www.unilever.com/Images/lanchoo_tcm244-408884_w198.png',
      segment: 2411
    },
    {
      id: 1201124,
      name: 'Lyons',
      logo: 'https://www.unilever.com/Images/lyons_tcm244-408895_w198.png',
      segment: 2411
    },
    {
      id: 1201125,
      name: 'malloa',
      logo: 'https://www.unilever.com/Images/malloa_tcm244-408897_w198.png',
      segment: 2411
    },
    {
      id: 1201126,
      name: 'McCollins',
      logo: 'https://www.unilever.com/Images/mccolins_tcm244-408898_w198.png',
      segment: 2411
    },
    {
      id: 1201127,
      name: 'Mondamin',
      logo: 'https://www.unilever.com/Images/mondamin_tcm244-408905_w198.png',
      segment: 2411
    },
    {
      id: 1201128,
      name: 'PG Tips',
      logo: 'https://www.unilever.com/Images/pgtips_tcm244-408913_w198.png',
      segment: 2411
    },
    {
      id: 1201129,
      name: 'Pearl Dust',
      logo: 'https://www.unilever.com/Images/pearldust_tcm244-408912.gif',
      segment: 2411
    },
    {
      id: 1201130,
      name: 'Pot Noodle',
      logo: 'https://www.unilever.com/Images/potnoodle_tcm244-408914_w198.jpg',
      segment: 2411
    },
    {
      id: 1201131,
      name: 'Rafhan',
      logo: 'https://www.unilever.com/Images/rafhan_tcm244-408924_w198.png',
      segment: 2411
    },
    {
      id: 1201132,
      name: 'Rik',
      logo: 'https://www.unilever.com/Images/ri-k_logo_tcm244-408926_w198.png',
      segment: 2411
    },
    {
      id: 1201133,
      name: 'Robertsons',
      logo: 'https://www.unilever.com/Images/robertsons_tcm244-408927_w198.png',
      segment: 2411
    },
    {
      id: 1201134,
      name: 'SariWangi',
      logo: 'https://www.unilever.com/Images/sariwangi_tcm244-408931_w198.png',
      segment: 2411
    },
    {
      id: 1201135,
      name: 'té club',
      logo: 'https://www.unilever.com/Images/teclub_tcm244-408939_w198.jpg',
      segment: 2411
    },
    {
      id: 1201136,
      name: 'Biotex',
      logo: 'https://www.unilever.com/Images/biotex_tcm244-408964_w198.jpg',
      segment: 111211
    },
    {
      id: 1201137,
      name: 'Blueair',
      logo: 'https://www.unilever.com/Images/global-BlueAir-logo-280-230517_tcm244-506936_w198.jpg',
      segment: 111211
    },
    {
      id: 1201138,
      name: 'Brilhante',
      logo: 'https://www.unilever.com/Images/brilhante_tcm244-408967.gif',
      segment: 2411
    },
    {
      id: 1201139,
      name: 'Comfort',
      logo: 'https://www.unilever.com/Images/comfort_tcm244-408749_w198.png',
      segment: 2411
    },
    {
      id: 1201140,
      name: 'Coral',
      logo: 'https://www.unilever.com/Images/coral_tcm244-408977_w198.jpg',
      segment: 2411
    },
    {
      id: 1201141,
      name: 'Drive',
      logo: 'https://www.unilever.com/Images/drive_tcm244-408986.gif',
      segment: 2411
    },
    {
      id: 1201142,
      name: 'Jif',
      logo: 'https://www.unilever.com/Images/jif_tcm244-408765.gif',
      segment: 2411
    },
    {
      id: 1201143,
      name: 'Persil',
      logo: 'https://www.unilever.com/Images/persil_tcm244-408780.gif',
      segment: 2411
    },
    {
      id: 1201144,
      name: 'Rin',
      logo: 'https://www.unilever.com/Images/rin_tcm244-409027_w198.png',
      segment: 2411
    },
    {
      id: 1201145,
      name: 'Rinso',
      logo: 'https://www.unilever.com/Images/rinso_tcm244-409028.gif',
      segment: 2411
    },
    {
      id: 1201146,
      name: 'Robijn',
      logo: 'https://www.unilever.com/Images/robijn_tcm244-409029.gif',
      segment: 2411
    },
    {
      id: 1201147,
      name: 'Skip',
      logo: 'https://www.unilever.com/Images/skip_tcm244-427238.gif',
      segment: 2411
    },
    {
      id: 1201148,
      name: 'Sunlight',
      logo: 'https://www.unilever.com/Images/sunlight_tcm244-409039_w198.png',
      segment: 2411
    },
    {
      id: 1201149,
      name: 'Surf excel',
      logo: 'https://www.unilever.com/Images/surfexcel_tcm244-408797.gif',
      segment: 2411
    },
    {
      id: 1201150,
      name: 'Viss',
      logo: 'https://www.unilever.com/Images/viss_tcm244-408802.gif',
      segment: 2411
    },
    {
      id: 1201151,
      name: 'Vivere',
      logo: 'https://www.unilever.com/Images/vivere_tcm244-409051_w198.png',
      segment: 2411
    },
    {
      id: 1201152,
      name: 'Wheel',
      logo: 'https://www.unilever.com/Images/wheel_tcm244-409053_w198.png',
      segment: 2411
    },
    {
      id: 1201153,
      name: 'Andy',
      logo: 'https://www.unilever.com/Images/andy_tcm244-408812_w198.png',
      segment: 2411
    },
    {
      id: 1201154,
      name: 'Cunatai',
      logo: 'https://www.unilever.com/Images/cunatai_tcm244-408841_w198.png',
      segment: 2411
    },
    {
      id: 1201155,
      name: 'fofo',
      logo: 'https://www.unilever.com/Images/fofo_tcm244-408857.gif',
      segment: 2411
    },
    {
      id: 1201156,
      name: 'Nevex',
      logo: 'https://www.unilever.com/Images/nevex_tcm244-408909.gif',
      segment: 2411
    },
    {
      id: 1201157,
      name: 'Sunil',
      logo: 'https://www.unilever.com/Images/sunil_tcm244-408793.gif',
      segment: 2411
    },
    {
      id: 1201158,
      name: 'Sunlight',
      logo: 'https://www.unilever.com/Images/sunlight_tcm244-422923_w198.jpg',
      segment: 2411
    },
    {
      id: 1201159,
      name: 'Super Pell',
      logo: 'https://www.unilever.com/Images/superpell_tcm244-408937_w198.png',
      segment: 2411
    },
    {
      id: 1201160,
      name: 'Viso',
      logo: 'https://www.unilever.com/Images/viso_tcm244-408945_w198.png',
      segment: 2411
    },
    {
      id: 1201161,
      name: 'Vixal',
      logo: 'https://www.unilever.com/Images/vixal_tcm244-408947_w198.png',
      segment: 2411
    },
    {
      id: 1201162,
      name: 'Wipot',
      logo: 'https://www.unilever.com/Images/wipol_tcm244-408949_w198.png',
      segment: 2411
    }
  ],
  industries: [2411, 101010, 111211],
  isharesIndustryName: IsharesIndustryNames.NichtzyklischeKonsumgueter,
  securityType: SecurityType.AandelenOopNaam,
  currency: Currency.EUR,
  isin: 'NL0000009355',
  wkn: 'A0JMZB',
  symbol: 'UNI3.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.EuroStoxx50, Indices.MSCIEuropeSRI, Indices.MSCIWorld, Indices.DowJonesSustainabilityEurozone],
  end_of_month_prices: prices,
  dividends,
  tags: ['Ernährung', 'Körperpflege', 'Parfum', 'Kosmetik', 'Waschmittel', 'Reinigungsmittel']
};
// tslint:enable:max-line-length

