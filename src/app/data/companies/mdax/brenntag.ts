import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 1.20, yield: 3.19}, {year: 2017, rate: 1.10,}, {year: 2016, rate: 1.05,}, {
    year: 2015,
    rate: 1.00,
    yield: 2.07
  }, {year: 2014, rate: 0.90, yield: 1.94}, {year: 2013, rate: 0.87, yield: 1.93}, {year: 2012, rate: 0.80, yield: 2.41}, {
    year: 2011,
    rate: 0.67,
    yield: 2.78
  }, {year: 2010, rate: 0.47, yield: 1.84}
];
const prices = {
  '2019-11-13': {
    '1. open': '45.0400',
    '2. high': '48.8700',
    '3. low': '44.8300',
    '4. close': '48.3100',
    '5. volume': '6083312'
  },
  '2019-10-31': {
    '1. open': '44.8000',
    '2. high': '46.1200',
    '3. low': '42.4400',
    '4. close': '45.0000',
    '5. volume': '8112016'
  },
  '2019-09-30': {
    '1. open': '43.5200',
    '2. high': '48.1700',
    '3. low': '43.4800',
    '4. close': '44.4000',
    '5. volume': '7141363'
  },
  '2019-08-30': {
    '1. open': '44.0100',
    '2. high': '45.1000',
    '3. low': '39.5100',
    '4. close': '43.8300',
    '5. volume': '6232013'
  },
  '2019-07-31': {
    '1. open': '43.6700',
    '2. high': '47.1600',
    '3. low': '41.8700',
    '4. close': '44.3900',
    '5. volume': '8397807'
  },
  '2019-06-28': {
    '1. open': '41.4100',
    '2. high': '44.2600',
    '3. low': '39.7000',
    '4. close': '43.3100',
    '5. volume': '8163336'
  },
  '2019-05-31': {
    '1. open': '48.1800',
    '2. high': '48.3300',
    '3. low': '41.2700',
    '4. close': '41.5800',
    '5. volume': '7284965'
  },
  '2019-04-30': {
    '1. open': '46.3600',
    '2. high': '49.4800',
    '3. low': '46.3600',
    '4. close': '48.0600',
    '5. volume': '5440939'
  },
  '2019-03-29': {
    '1. open': '44.1300',
    '2. high': '47.6900',
    '3. low': '43.7700',
    '4. close': '45.9000',
    '5. volume': '8048336'
  },
  '2019-02-28': {
    '1. open': '41.7500',
    '2. high': '44.5800',
    '3. low': '40.1400',
    '4. close': '43.6000',
    '5. volume': '6276958'
  },
  '2019-01-31': {
    '1. open': '37.6200',
    '2. high': '42.7000',
    '3. low': '36.4900',
    '4. close': '41.2500',
    '5. volume': '8257558'
  },
  '2018-12-28': {
    '1. open': '42.4000',
    '2. high': '42.5200',
    '3. low': '36.6100',
    '4. close': '37.7000',
    '5. volume': '8987753'
  },
  '2018-11-30': {
    '1. open': '46.0000',
    '2. high': '47.4500',
    '3. low': '40.0300',
    '4. close': '40.8300',
    '5. volume': '9782632'
  },
  '2018-10-31': {
    '1. open': '53.0800',
    '2. high': '54.8200',
    '3. low': '44.5200',
    '4. close': '46.1700',
    '5. volume': '9883267'
  },
  '2018-09-28': {
    '1. open': '53.1600',
    '2. high': '54.7400',
    '3. low': '51.6200',
    '4. close': '53.1600',
    '5. volume': '6715158'
  },
  '2018-08-31': {
    '1. open': '51.4400',
    '2. high': '53.2400',
    '3. low': '50.4000',
    '4. close': '51.9400',
    '5. volume': '5350844'
  },
  '2018-07-31': {
    '1. open': '47.3300',
    '2. high': '52.4400',
    '3. low': '47.1400',
    '4. close': '51.2800',
    '5. volume': '5119393'
  },
  '2018-06-29': {
    '1. open': '49.6200',
    '2. high': '50.8200',
    '3. low': '46.7300',
    '4. close': '47.7200',
    '5. volume': '6245171'
  },
  '2018-05-31': {
    '1. open': '47.6800',
    '2. high': '52.3400',
    '3. low': '47.6600',
    '4. close': '49.3400',
    '5. volume': '7098898'
  },
  '2018-04-30': {
    '1. open': '48.0300',
    '2. high': '49.2400',
    '3. low': '46.8200',
    '4. close': '47.5200',
    '5. volume': '5483989'
  },
  '2018-03-29': {
    '1. open': '51.4000',
    '2. high': '53.1200',
    '3. low': '47.2600',
    '4. close': '48.3000',
    '5. volume': '6302880'
  },
  '2018-02-28': {
    '1. open': '52.3000',
    '2. high': '53.0600',
    '3. low': '48.3300',
    '4. close': '51.4800',
    '5. volume': '4894950'
  },
  '2018-01-31': {
    '1. open': '53.0800',
    '2. high': '55.0600',
    '3. low': '51.3400',
    '4. close': '52.2200',
    '5. volume': '5800212'
  },
  '2017-12-29': {
    '1. open': '52.5900',
    '2. high': '55.1400',
    '3. low': '51.4500',
    '4. close': '52.7700',
    '5. volume': '5716121'
  },
  '2017-11-30': {
    '1. open': '51.4100',
    '2. high': '54.2800',
    '3. low': '49.0700',
    '4. close': '52.3000',
    '5. volume': '8883214'
  },
  '2017-10-31': {
    '1. open': '47.2250',
    '2. high': '49.3550',
    '3. low': '46.8050',
    '4. close': '48.6150',
    '5. volume': '5164774'
  },
  '2017-09-29': {
    '1. open': '44.7650',
    '2. high': '47.9050',
    '3. low': '43.0200',
    '4. close': '47.1150',
    '5. volume': '6279383'
  },
  '2017-08-31': {
    '1. open': '48.1950',
    '2. high': '48.9450',
    '3. low': '43.9600',
    '4. close': '44.5150',
    '5. volume': '8413857'
  },
  '2017-07-31': {
    '1. open': '50.8500',
    '2. high': '51.8100',
    '3. low': '47.5000',
    '4. close': '47.9450',
    '5. volume': '5004605'
  },
  '2017-06-30': {
    '1. open': '51.6000',
    '2. high': '53.2500',
    '3. low': '50.0700',
    '4. close': '50.6800',
    '5. volume': '5648828'
  },
  '2017-05-31': {
    '1. open': '54.5400',
    '2. high': '56.3200',
    '3. low': '50.6000',
    '4. close': '51.5000',
    '5. volume': '7285179'
  },
  '2017-04-28': {
    '1. open': '52.6100',
    '2. high': '55.5600',
    '3. low': '51.7300',
    '4. close': '54.4400',
    '5. volume': '4528572'
  },
  '2017-03-31': {
    '1. open': '54.4000',
    '2. high': '55.3600',
    '3. low': '51.1800',
    '4. close': '52.5500',
    '5. volume': '6280032'
  },
  '2017-02-28': {
    '1. open': '53.9700',
    '2. high': '56.3200',
    '3. low': '53.6200',
    '4. close': '54.1200',
    '5. volume': '5198228'
  },
  '2017-01-31': {
    '1. open': '52.8400',
    '2. high': '55.6700',
    '3. low': '50.7300',
    '4. close': '53.7400',
    '5. volume': '6109960'
  },
  '2016-12-30': {
    '1. open': '50.0400',
    '2. high': '53.1200',
    '3. low': '48.3050',
    '4. close': '52.8000',
    '5. volume': '4693681'
  },
  '2016-11-30': {
    '1. open': '49.0650',
    '2. high': '49.8150',
    '3. low': '43.7050',
    '4. close': '49.6650',
    '5. volume': '7751114'
  },
  '2016-10-31': {
    '1. open': '48.5850',
    '2. high': '51.7200',
    '3. low': '47.7000',
    '4. close': '48.6950',
    '5. volume': '4855888'
  },
  '2016-09-30': {
    '1. open': '48.8750',
    '2. high': '49.9800',
    '3. low': '46.3800',
    '4. close': '48.6050',
    '5. volume': '4867323'
  },
  '2016-08-31': {
    '1. open': '44.9350',
    '2. high': '49.5300',
    '3. low': '44.1600',
    '4. close': '48.7900',
    '5. volume': '6199586'
  },
  '2016-07-29': {
    '1. open': '43.5100',
    '2. high': '47.3700',
    '3. low': '41.4600',
    '4. close': '44.4100',
    '5. volume': '5678814'
  },
  '2016-06-30': {
    '1. open': '48.1600',
    '2. high': '48.3300',
    '3. low': '41.0750',
    '4. close': '43.4300',
    '5. volume': '7272367'
  },
  '2016-05-31': {
    '1. open': '51.3200',
    '2. high': '52.9900',
    '3. low': '46.5550',
    '4. close': '48.1100',
    '5. volume': '6127258'
  },
  '2016-04-29': {
    '1. open': '49.9000',
    '2. high': '52.7300',
    '3. low': '49.8500',
    '4. close': '51.2100',
    '5. volume': '5093109'
  },
  '2016-03-31': {
    '1. open': '44.7350',
    '2. high': '50.4300',
    '3. low': '44.5800',
    '4. close': '50.2000',
    '5. volume': '7423490'
  },
  '2016-02-29': {
    '1. open': '45.1900',
    '2. high': '45.3850',
    '3. low': '39.8600',
    '4. close': '44.7500',
    '5. volume': '6715536'
  },
  '2016-01-29': {
    '1. open': '48.0000',
    '2. high': '48.7550',
    '3. low': '40.9100',
    '4. close': '44.9550',
    '5. volume': '7681739'
  },
  '2015-12-30': {
    '1. open': '51.7600',
    '2. high': '52.5700',
    '3. low': '46.4950',
    '4. close': '48.2800',
    '5. volume': '5743615'
  },
  '2015-11-30': {
    '1. open': '54.8700',
    '2. high': '55.6400',
    '3. low': '47.6700',
    '4. close': '51.7100',
    '5. volume': '7534004'
  },
  '2015-10-30': {
    '1. open': '48.9300',
    '2. high': '54.9900',
    '3. low': '47.4850',
    '4. close': '54.9500',
    '5. volume': '5568730'
  },
  '2015-09-30': {
    '1. open': '49.1450',
    '2. high': '50.6100',
    '3. low': '46.3600',
    '4. close': '48.1650',
    '5. volume': '6272114'
  },
  '2015-08-31': {
    '1. open': '50.6300',
    '2. high': '56.9100',
    '3. low': '46.3000',
    '4. close': '49.5800',
    '5. volume': '6638176'
  },
  '2015-07-31': {
    '1. open': '52.0000',
    '2. high': '53.7700',
    '3. low': '49.9000',
    '4. close': '50.6300',
    '5. volume': '5080041'
  },
  '2015-06-30': {
    '1. open': '55.4000',
    '2. high': '55.8200',
    '3. low': '50.0200',
    '4. close': '51.4300',
    '5. volume': '6763452'
  },
  '2015-05-29': {
    '1. open': '54.0800',
    '2. high': '57.8900',
    '3. low': '53.1300',
    '4. close': '54.9900',
    '5. volume': '5509900'
  },
  '2015-04-30': {
    '1. open': '55.4100',
    '2. high': '59.3900',
    '3. low': '52.5500',
    '4. close': '53.8500',
    '5. volume': '5176963'
  },
  '2015-03-31': {
    '1. open': '52.1700',
    '2. high': '56.8900',
    '3. low': '51.1500',
    '4. close': '55.7600',
    '5. volume': '7290423'
  },
  '2015-02-27': {
    '1. open': '48.2800',
    '2. high': '52.6300',
    '3. low': '47.8800',
    '4. close': '52.2500',
    '5. volume': '4379341'
  },
  '2015-01-30': {
    '1. open': '46.9000',
    '2. high': '48.4550',
    '3. low': '43.9500',
    '4. close': '48.3200',
    '5. volume': '6189544'
  },
  '2014-12-30': {
    '1. open': '44.0000',
    '2. high': '46.9400',
    '3. low': '42.2600',
    '4. close': '46.5100',
    '5. volume': '5100211'
  },
  '2014-11-28': {
    '1. open': '38.6200',
    '2. high': '44.9900',
    '3. low': '38.4500',
    '4. close': '44.2900',
    '5. volume': '6188188'
  },
  '2014-10-31': {
    '1. open': '38.9100',
    '2. high': '39.3850',
    '3. low': '34.4350',
    '4. close': '38.6000',
    '5. volume': '7948605'
  },
  '2014-09-30': {
    '1. open': '40.2350',
    '2. high': '41.0400',
    '3. low': '38.0900',
    '4. close': '38.9100',
    '5. volume': '5452705'
  },
  '2014-08-29': {
    '1. open': '40.0000',
    '2. high': '41.2750',
    '3. low': '36.1600',
    '4. close': '40.2750',
    '5. volume': '8278992'
  },
  '2014-07-31': {
    '1. open': '43.7500',
    '2. high': '45.0667',
    '3. low': '40.0333',
    '4. close': '40.0833',
    '5. volume': '6462534'
  },
  '2014-06-30': {
    '1. open': '45.9667',
    '2. high': '47.2667',
    '3. low': '42.7833',
    '4. close': '43.5000',
    '5. volume': '4724517'
  },
  '2014-05-30': {
    '1. open': '43.4500',
    '2. high': '46.8500',
    '3. low': '42.2500',
    '4. close': '45.6833',
    '5. volume': '4056594'
  },
  '2014-04-30': {
    '1. open': '45.0000',
    '2. high': '45.5500',
    '3. low': '42.1333',
    '4. close': '43.4500',
    '5. volume': '4319283'
  },
  '2014-03-31': {
    '1. open': '44.0333',
    '2. high': '45.4167',
    '3. low': '41.4500',
    '4. close': '44.8833',
    '5. volume': '5331792'
  },
  '2014-02-28': {
    '1. open': '42.7833',
    '2. high': '45.6167',
    '3. low': '41.5000',
    '4. close': '44.9167',
    '5. volume': '3699492'
  },
  '2014-01-31': {
    '1. open': '45.0333',
    '2. high': '45.1667',
    '3. low': '41.2167',
    '4. close': '42.6667',
    '5. volume': '6447843'
  },
  '2013-12-30': {
    '1. open': '43.5333',
    '2. high': '44.9500',
    '3. low': '41.6167',
    '4. close': '44.9167',
    '5. volume': '3662562'
  },
  '2013-11-29': {
    '1. open': '41.6500',
    '2. high': '44.3833',
    '3. low': '39.9333',
    '4. close': '43.5667',
    '5. volume': '5013960'
  },
  '2013-10-31': {
    '1. open': '41.2167',
    '2. high': '41.8833',
    '3. low': '38.9000',
    '4. close': '41.6000',
    '5. volume': '4720425'
  },
  '2013-09-30': {
    '1. open': '38.6000',
    '2. high': '42.0000',
    '3. low': '38.5333',
    '4. close': '41.0167',
    '5. volume': '4803153'
  },
  '2013-08-30': {
    '1. open': '40.6000',
    '2. high': '41.3333',
    '3. low': '37.7667',
    '4. close': '38.3333',
    '5. volume': '7408854'
  },
  '2013-07-31': {
    '1. open': '39.1333',
    '2. high': '41.9000',
    '3. low': '38.2333',
    '4. close': '41.1667',
    '5. volume': '5523165'
  },
  '2013-06-28': {
    '1. open': '38.9333',
    '2. high': '40.8667',
    '3. low': '36.0833',
    '4. close': '38.9000',
    '5. volume': '7718844'
  },
  '2013-05-31': {
    '1. open': '43.2500',
    '2. high': '44.1000',
    '3. low': '38.8833',
    '4. close': '39.1667',
    '5. volume': '9701811'
  },
  '2013-04-30': {
    '1. open': '41.3167',
    '2. high': '43.1500',
    '3. low': '40.0167',
    '4. close': '43.1500',
    '5. volume': '7409880'
  },
  '2013-03-28': {
    '1. open': '36.4000',
    '2. high': '41.2500',
    '3. low': '36.0667',
    '4. close': '40.6000',
    '5. volume': '7523238'
  },
  '2013-02-28': {
    '1. open': '34.9333',
    '2. high': '37.3000',
    '3. low': '34.9333',
    '4. close': '36.4000',
    '5. volume': '5132604'
  },
  '2013-01-31': {
    '1. open': '33.5167',
    '2. high': '35.8167',
    '3. low': '32.8400',
    '4. close': '34.9833',
    '5. volume': '6681453'
  },
  '2012-12-28': {
    '1. open': '33.1033',
    '2. high': '34.2667',
    '3. low': '32.6333',
    '4. close': '33.1433',
    '5. volume': '5804904'
  },
  '2012-11-30': {
    '1. open': '32.5500',
    '2. high': '33.4167',
    '3. low': '30.0867',
    '4. close': '33.1333',
    '5. volume': '8657253'
  },
  '2012-10-31': {
    '1. open': '33.2700',
    '2. high': '34.2000',
    '3. low': '31.5933',
    '4. close': '32.4133',
    '5. volume': '7631511'
  },
  '2012-09-28': {
    '1. open': '31.7367',
    '2. high': '33.6500',
    '3. low': '31.6000',
    '4. close': '33.2000',
    '5. volume': '6415437'
  },
  '2012-08-31': {
    '1. open': '29.8767',
    '2. high': '31.7500',
    '3. low': '29.2067',
    '4. close': '31.5833',
    '5. volume': '8706201'
  },
  '2012-07-31': {
    '1. open': '29.1333',
    '2. high': '31.1600',
    '3. low': '28.9400',
    '4. close': '29.7400',
    '5. volume': '10098732'
  },
  '2012-06-29': {
    '1. open': '30.5567',
    '2. high': '30.6667',
    '3. low': '27.2167',
    '4. close': '29.0600',
    '5. volume': '8539878'
  },
  '2012-05-31': {
    '1. open': '31.7667',
    '2. high': '32.1300',
    '3. low': '28.8667',
    '4. close': '30.3700',
    '5. volume': '8560563'
  },
  '2012-04-30': {
    '1. open': '30.8000',
    '2. high': '31.6667',
    '3. low': '29.5300',
    '4. close': '31.3667',
    '5. volume': '8368590'
  },
  '2012-03-30': {
    '1. open': '29.1600',
    '2. high': '30.8667',
    '3. low': '27.6867',
    '4. close': '30.6067',
    '5. volume': '11317323'
  },
  '2012-02-29': {
    '1. open': '27.1300',
    '2. high': '29.5000',
    '3. low': '27.0033',
    '4. close': '29.1667',
    '5. volume': '13709391'
  },
  '2012-01-31': {
    '1. open': '24.1333',
    '2. high': '26.7000',
    '3. low': '23.2933',
    '4. close': '26.6467',
    '5. volume': '9751464'
  },
  '2011-12-30': {
    '1. open': '23.5033',
    '2. high': '24.2133',
    '3. low': '22.9133',
    '4. close': '23.9833',
    '5. volume': '6771132'
  },
  '2011-11-30': {
    '1. open': '23.7933',
    '2. high': '25.0500',
    '3. low': '21.7833',
    '4. close': '23.7200',
    '5. volume': '7796289'
  },
  '2011-10-31': {
    '1. open': '22.1267',
    '2. high': '25.1600',
    '3. low': '21.1867',
    '4. close': '24.3333',
    '5. volume': '6962601'
  },
  '2011-09-30': {
    '1. open': '23.7500',
    '2. high': '25.3167',
    '3. low': '21.2533',
    '4. close': '21.8333',
    '5. volume': '11453802'
  },
  '2011-08-31': {
    '1. open': '23.9633',
    '2. high': '24.7467',
    '3. low': '20.3133',
    '4. close': '23.8967',
    '5. volume': '14067969'
  },
  '2011-07-29': {
    '1. open': '27.0000',
    '2. high': '27.5000',
    '3. low': '23.1100',
    '4. close': '23.7100',
    '5. volume': '7757430'
  },
  '2011-06-30': {
    '1. open': '27.7333',
    '2. high': '28.4000',
    '3. low': '25.1033',
    '4. close': '26.7200',
    '5. volume': '6923427'
  },
  '2011-05-31': {
    '1. open': '28.0000',
    '2. high': '28.5633',
    '3. low': '26.0200',
    '4. close': '27.6000',
    '5. volume': '6949149'
  },
  '2011-04-29': {
    '1. open': '26.1333',
    '2. high': '28.3333',
    '3. low': '26.0833',
    '4. close': '27.6667',
    '5. volume': '4821429'
  },
  '2011-03-31': {
    '1. open': '25.4867',
    '2. high': '26.3133',
    '3. low': '22.5133',
    '4. close': '26.1200',
    '5. volume': '7532589'
  },
  '2011-02-28': {
    '1. open': '23.1933',
    '2. high': '25.8667',
    '3. low': '22.7900',
    '4. close': '25.2500',
    '5. volume': '7319919'
  },
  '2011-01-31': {
    '1. open': '25.3833',
    '2. high': '25.4900',
    '3. low': '22.7167',
    '4. close': '23.0733',
    '5. volume': '8221404'
  },
  '2010-12-30': {
    '1. open': '22.6367',
    '2. high': '25.4800',
    '3. low': '22.4000',
    '4. close': '25.4333',
    '5. volume': '5216916'
  },
  '2010-11-30': {
    '1. open': '22.7700',
    '2. high': '23.0367',
    '3. low': '20.8233',
    '4. close': '22.6333',
    '5. volume': '12967200'
  },
  '2010-10-29': {
    '1. open': '20.5000',
    '2. high': '22.7300',
    '3. low': '20.4033',
    '4. close': '22.4500',
    '5. volume': '8335590'
  },
  '2010-09-30': {
    '1. open': '19.8867',
    '2. high': '21.5967',
    '3. low': '19.7467',
    '4. close': '20.3333',
    '5. volume': '3140529'
  },
  '2010-08-31': {
    '1. open': '19.4400',
    '2. high': '21.5000',
    '3. low': '19.4333',
    '4. close': '20.0233',
    '5. volume': '2887959'
  },
  '2010-07-30': {
    '1. open': '17.1800',
    '2. high': '20.3800',
    '3. low': '17.1667',
    '4. close': '19.5000',
    '5. volume': '2528358'
  },
  '2010-06-30': {
    '1. open': '17.5167',
    '2. high': '19.1667',
    '3. low': '16.5667',
    '4. close': '17.3400',
    '5. volume': '3491502'
  },
  '2010-05-31': {
    '1. open': '18.1833',
    '2. high': '19.5333',
    '3. low': '16.0400',
    '4. close': '17.5833',
    '5. volume': '4016724'
  },
  '2010-04-30': {
    '1. open': '17.7000',
    '2. high': '18.9833',
    '3. low': '17.5000',
    '4. close': '18.2000',
    '5. volume': '4123338'
  }
};

// tslint:disable:max-line-length
export const brenntagCompany: Company = {
  id: 1038,
  name: 'Brenntag AG',
  country: Country.Deutschland,
  city: 'Essen',
  url: 'http://www.brenntag.com/',
  description: 'Die Brenntag AG ist die Dachgesellschaft für die Brenntag Gruppe, die Weltmarktführer[2] im Chemiehandel ist. Sitz des Unternehmens ist Essen.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Brenntag',
  logo: 'https://de.wikipedia.org/w/index.php?title=Datei:Brenntag.svg&filetimestamp=20091015170150&',
  products: [],
  industries: [1510],
  currency: Currency.EUR,
  isin: 'DE000A1DAHH0',
  wkn: 'A1DAHH',
  symbol: 'BNR.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Chemiedistribution', 'Chemieproduzenten', 'Industriechemikalien', 'Spezialchemikalien']
};
// tslint:enable:max-line-length

