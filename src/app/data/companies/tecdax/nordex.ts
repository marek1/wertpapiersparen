import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.00, yield: 0.00}, {year: 2017, rate: 0.00}, {year: 2016, rate: 0.00}, {
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
  }, {year: 2006, rate: 0.00, yield: 0.00}, {year: 2005, rate: 0.00, yield: 0.00}, {year: 2004, rate: 0.00, yield: 0.00}, {
    year: 2003,
    rate: 0.00,
    yield: 0.00
  }
];
const prices = {
  '2019-11-21': {
    '1. open': '11.8400',
    '2. high': '13.1000',
    '3. low': '11.1500',
    '4. close': '12.0700',
    '5. volume': '7965986'
  },
  '2019-10-31': {
    '1. open': '9.9950',
    '2. high': '11.9900',
    '3. low': '9.9400',
    '4. close': '11.7400',
    '5. volume': '17242599'
  },
  '2019-09-30': {
    '1. open': '9.1800',
    '2. high': '11.1600',
    '3. low': '8.5500',
    '4. close': '10.0000',
    '5. volume': '21068685'
  },
  '2019-08-30': {
    '1. open': '10.5600',
    '2. high': '11.3000',
    '3. low': '8.7450',
    '4. close': '9.1850',
    '5. volume': '21397629'
  },
  '2019-07-31': {
    '1. open': '12.3000',
    '2. high': '14.9500',
    '3. low': '10.5500',
    '4. close': '10.6600',
    '5. volume': '15972193'
  },
  '2019-06-28': {
    '1. open': '12.5100',
    '2. high': '13.3300',
    '3. low': '12.0200',
    '4. close': '12.1200',
    '5. volume': '8102477'
  },
  '2019-05-31': {
    '1. open': '14.4900',
    '2. high': '14.5600',
    '3. low': '11.8200',
    '4. close': '12.7200',
    '5. volume': '9934778'
  },
  '2019-04-30': {
    '1. open': '14.9200',
    '2. high': '15.7500',
    '3. low': '14.0400',
    '4. close': '14.4400',
    '5. volume': '12128340'
  },
  '2019-03-29': {
    '1. open': '11.2800',
    '2. high': '14.7200',
    '3. low': '11.0600',
    '4. close': '14.5800',
    '5. volume': '17488538'
  },
  '2019-02-28': {
    '1. open': '9.9940',
    '2. high': '11.4000',
    '3. low': '9.4040',
    '4. close': '11.2500',
    '5. volume': '11042787'
  },
  '2019-01-31': {
    '1. open': '7.8220',
    '2. high': '10.1500',
    '3. low': '7.5120',
    '4. close': '9.9500',
    '5. volume': '12473523'
  },
  '2018-12-28': {
    '1. open': '9.0800',
    '2. high': '9.4220',
    '3. low': '7.3000',
    '4. close': '7.5860',
    '5. volume': '9865005'
  },
  '2018-11-30': {
    '1. open': '8.4420',
    '2. high': '9.6200',
    '3. low': '7.1100',
    '4. close': '8.6700',
    '5. volume': '18853537'
  },
  '2018-10-31': {
    '1. open': '9.2340',
    '2. high': '9.2880',
    '3. low': '7.6100',
    '4. close': '8.2400',
    '5. volume': '12753542'
  },
  '2018-09-28': {
    '1. open': '8.9520',
    '2. high': '9.6000',
    '3. low': '8.8580',
    '4. close': '9.2660',
    '5. volume': '8030987'
  },
  '2018-08-31': {
    '1. open': '9.6720',
    '2. high': '9.8700',
    '3. low': '8.3100',
    '4. close': '8.9160',
    '5. volume': '9019527'
  },
  '2018-07-31': {
    '1. open': '8.5000',
    '2. high': '10.6800',
    '3. low': '8.3960',
    '4. close': '9.5980',
    '5. volume': '8233100'
  },
  '2018-06-29': {
    '1. open': '10.5550',
    '2. high': '11.4450',
    '3. low': '8.1700',
    '4. close': '8.6980',
    '5. volume': '9919862'
  },
  '2018-05-31': {
    '1. open': '9.5740',
    '2. high': '11.0900',
    '3. low': '8.7940',
    '4. close': '10.4800',
    '5. volume': '11200632'
  },
  '2018-04-30': {
    '1. open': '7.0020',
    '2. high': '9.9100',
    '3. low': '7.0020',
    '4. close': '9.5200',
    '5. volume': '11214947'
  },
  '2018-03-29': {
    '1. open': '9.3700',
    '2. high': '9.5500',
    '3. low': '6.8600',
    '4. close': '7.0700',
    '5. volume': '10284116'
  },
  '2018-02-28': {
    '1. open': '10.6600',
    '2. high': '10.6600',
    '3. low': '9.0320',
    '4. close': '9.4760',
    '5. volume': '10867001'
  },
  '2018-01-31': {
    '1. open': '8.9500',
    '2. high': '11.6950',
    '3. low': '8.7300',
    '4. close': '10.6250',
    '5. volume': '19999745'
  },
  '2017-12-29': {
    '1. open': '8.5750',
    '2. high': '8.9100',
    '3. low': '7.4900',
    '4. close': '8.8740',
    '5. volume': '9903950'
  },
  '2017-11-30': {
    '1. open': '8.9490',
    '2. high': '9.0900',
    '3. low': '7.0900',
    '4. close': '8.5340',
    '5. volume': '20634990'
  },
  '2017-10-31': {
    '1. open': '9.6830',
    '2. high': '10.9500',
    '3. low': '8.7190',
    '4. close': '8.8740',
    '5. volume': '16935257'
  },
  '2017-09-29': {
    '1. open': '11.7500',
    '2. high': '11.7600',
    '3. low': '9.3620',
    '4. close': '9.6580',
    '5. volume': '19955311'
  },
  '2017-08-31': {
    '1. open': '11.6100',
    '2. high': '12.7500',
    '3. low': '11.0500',
    '4. close': '11.6700',
    '5. volume': '14794084'
  },
  '2017-07-31': {
    '1. open': '10.9600',
    '2. high': '12.5050',
    '3. low': '10.8900',
    '4. close': '11.5400',
    '5. volume': '15931630'
  },
  '2017-06-30': {
    '1. open': '12.7700',
    '2. high': '12.9850',
    '3. low': '10.2150',
    '4. close': '10.7550',
    '5. volume': '18958722'
  },
  '2017-05-31': {
    '1. open': '13.8500',
    '2. high': '14.3500',
    '3. low': '12.5600',
    '4. close': '12.7400',
    '5. volume': '17660743'
  },
  '2017-04-28': {
    '1. open': '13.1200',
    '2. high': '14.3500',
    '3. low': '12.9500',
    '4. close': '13.8400',
    '5. volume': '10907053'
  },
  '2017-03-31': {
    '1. open': '14.3450',
    '2. high': '14.8500',
    '3. low': '12.6500',
    '4. close': '13.0900',
    '5. volume': '22872432'
  },
  '2017-02-28': {
    '1. open': '19.6700',
    '2. high': '20.4050',
    '3. low': '12.4100',
    '4. close': '13.8900',
    '5. volume': '31470454'
  },
  '2017-01-31': {
    '1. open': '20.4500',
    '2. high': '21.6550',
    '3. low': '19.3300',
    '4. close': '19.4700',
    '5. volume': '16106425'
  },
  '2016-12-30': {
    '1. open': '19.3750',
    '2. high': '20.8100',
    '3. low': '18.5450',
    '4. close': '20.3900',
    '5. volume': '16508067'
  },
  '2016-11-30': {
    '1. open': '24.1500',
    '2. high': '24.2550',
    '3. low': '17.2300',
    '4. close': '19.4250',
    '5. volume': '31460573'
  },
  '2016-10-31': {
    '1. open': '27.0400',
    '2. high': '27.2750',
    '3. low': '23.2000',
    '4. close': '23.9550',
    '5. volume': '12619097'
  },
  '2016-09-30': {
    '1. open': '24.9000',
    '2. high': '27.5800',
    '3. low': '24.6450',
    '4. close': '27.0400',
    '5. volume': '15380668'
  },
  '2016-08-31': {
    '1. open': '24.9750',
    '2. high': '25.4050',
    '3. low': '22.6700',
    '4. close': '24.8050',
    '5. volume': '18106364'
  },
  '2016-07-29': {
    '1. open': '25.6000',
    '2. high': '27.9000',
    '3. low': '23.8250',
    '4. close': '24.7200',
    '5. volume': '12511575'
  },
  '2016-06-30': {
    '1. open': '26.3800',
    '2. high': '28.4500',
    '3. low': '22.0450',
    '4. close': '25.4250',
    '5. volume': '17442927'
  },
  '2016-05-31': {
    '1. open': '24.5100',
    '2. high': '26.2500',
    '3. low': '22.9000',
    '4. close': '25.5500',
    '5. volume': '10591939'
  },
  '2016-04-29': {
    '1. open': '23.8900',
    '2. high': '24.9950',
    '3. low': '21.6650',
    '4. close': '24.4500',
    '5. volume': '13774673'
  },
  '2016-03-31': {
    '1. open': '26.8600',
    '2. high': '27.9500',
    '3. low': '22.3400',
    '4. close': '24.1150',
    '5. volume': '18041376'
  },
  '2016-02-29': {
    '1. open': '29.8600',
    '2. high': '29.9100',
    '3. low': '22.0300',
    '4. close': '26.8950',
    '5. volume': '21729665'
  },
  '2016-01-29': {
    '1. open': '32.2400',
    '2. high': '33.7500',
    '3. low': '26.1000',
    '4. close': '29.7200',
    '5. volume': '16700928'
  },
  '2015-12-30': {
    '1. open': '31.9700',
    '2. high': '33.9000',
    '3. low': '30.4000',
    '4. close': '32.7500',
    '5. volume': '12991057'
  },
  '2015-11-30': {
    '1. open': '29.6350',
    '2. high': '31.9000',
    '3. low': '28.0250',
    '4. close': '31.8000',
    '5. volume': '14680846'
  },
  '2015-10-30': {
    '1. open': '24.7700',
    '2. high': '30.3900',
    '3. low': '24.3050',
    '4. close': '29.7400',
    '5. volume': '14913807'
  },
  '2015-09-30': {
    '1. open': '25.0900',
    '2. high': '26.0500',
    '3. low': '22.6100',
    '4. close': '24.4300',
    '5. volume': '12697972'
  },
  '2015-08-31': {
    '1. open': '25.7300',
    '2. high': '27.8450',
    '3. low': '20.7000',
    '4. close': '25.7100',
    '5. volume': '22908540'
  },
  '2015-07-31': {
    '1. open': '21.8300',
    '2. high': '27.4800',
    '3. low': '21.0600',
    '4. close': '25.8450',
    '5. volume': '18713192'
  },
  '2015-06-30': {
    '1. open': '21.9900',
    '2. high': '22.6300',
    '3. low': '19.6750',
    '4. close': '21.4950',
    '5. volume': '17084383'
  },
  '2015-05-29': {
    '1. open': '19.7300',
    '2. high': '23.2600',
    '3. low': '19.3100',
    '4. close': '21.8100',
    '5. volume': '21881556'
  },
  '2015-04-30': {
    '1. open': '18.8400',
    '2. high': '20.6350',
    '3. low': '18.1850',
    '4. close': '19.3950',
    '5. volume': '17645662'
  },
  '2015-03-31': {
    '1. open': '18.8500',
    '2. high': '19.6450',
    '3. low': '17.8500',
    '4. close': '18.9400',
    '5. volume': '19766734'
  },
  '2015-02-27': {
    '1. open': '17.3900',
    '2. high': '18.7650',
    '3. low': '16.9250',
    '4. close': '18.7050',
    '5. volume': '18320552'
  },
  '2015-01-30': {
    '1. open': '15.1400',
    '2. high': '17.4800',
    '3. low': '15.0400',
    '4. close': '17.3150',
    '5. volume': '24875797'
  },
  '2014-12-30': {
    '1. open': '15.7000',
    '2. high': '16.3200',
    '3. low': '13.8200',
    '4. close': '15.0050',
    '5. volume': '21489928'
  },
  '2014-11-28': {
    '1. open': '13.4800',
    '2. high': '16.5300',
    '3. low': '13.4150',
    '4. close': '15.6300',
    '5. volume': '27088824'
  },
  '2014-10-31': {
    '1. open': '14.5750',
    '2. high': '14.8850',
    '3. low': '10.6850',
    '4. close': '13.4800',
    '5. volume': '36429964'
  },
  '2014-09-30': {
    '1. open': '13.8200',
    '2. high': '14.7950',
    '3. low': '13.2000',
    '4. close': '14.6050',
    '5. volume': '21587379'
  },
  '2014-08-29': {
    '1. open': '13.6500',
    '2. high': '15.0900',
    '3. low': '12.5500',
    '4. close': '13.7500',
    '5. volume': '34902816'
  },
  '2014-07-31': {
    '1. open': '16.1800',
    '2. high': '16.4250',
    '3. low': '13.6450',
    '4. close': '13.7150',
    '5. volume': '21033697'
  },
  '2014-06-30': {
    '1. open': '16.1850',
    '2. high': '17.0000',
    '3. low': '15.3450',
    '4. close': '16.2300',
    '5. volume': '24480213'
  },
  '2014-05-30': {
    '1. open': '11.5000',
    '2. high': '16.2500',
    '3. low': '11.3250',
    '4. close': '16.0400',
    '5. volume': '35049236'
  },
  '2014-04-30': {
    '1. open': '11.8250',
    '2. high': '13.1700',
    '3. low': '9.9650',
    '4. close': '11.4850',
    '5. volume': '28149446'
  },
  '2014-03-31': {
    '1. open': '11.1000',
    '2. high': '12.3250',
    '3. low': '10.5200',
    '4. close': '11.7200',
    '5. volume': '24330305'
  },
  '2014-02-28': {
    '1. open': '9.6480',
    '2. high': '11.8000',
    '3. low': '9.1500',
    '4. close': '11.7950',
    '5. volume': '20713869'
  },
  '2014-01-31': {
    '1. open': '9.6990',
    '2. high': '12.2800',
    '3. low': '9.2000',
    '4. close': '9.9050',
    '5. volume': '26638898'
  },
  '2013-12-30': {
    '1. open': '10.7500',
    '2. high': '10.8900',
    '3. low': '8.8500',
    '4. close': '9.6020',
    '5. volume': '22035702'
  },
  '2013-11-29': {
    '1. open': '13.1400',
    '2. high': '14.4200',
    '3. low': '9.9200',
    '4. close': '10.6950',
    '5. volume': '33495115'
  },
  '2013-10-31': {
    '1. open': '10.8300',
    '2. high': '13.9750',
    '3. low': '10.8150',
    '4. close': '12.9500',
    '5. volume': '20999677'
  },
  '2013-09-30': {
    '1. open': '9.0800',
    '2. high': '10.9200',
    '3. low': '8.8120',
    '4. close': '10.8100',
    '5. volume': '16941779'
  },
  '2013-08-30': {
    '1. open': '6.2840',
    '2. high': '9.3500',
    '3. low': '6.1870',
    '4. close': '8.8170',
    '5. volume': '28111846'
  },
  '2013-07-31': {
    '1. open': '5.3990',
    '2. high': '6.4000',
    '3. low': '5.0650',
    '4. close': '6.2990',
    '5. volume': '9198636'
  },
  '2013-06-28': {
    '1. open': '5.8200',
    '2. high': '5.9090',
    '3. low': '4.5100',
    '4. close': '5.3700',
    '5. volume': '12997928'
  },
  '2013-05-31': {
    '1. open': '5.7330',
    '2. high': '6.6400',
    '3. low': '5.5250',
    '4. close': '5.9600',
    '5. volume': '17075834'
  },
  '2013-04-30': {
    '1. open': '4.8700',
    '2. high': '5.7900',
    '3. low': '4.8030',
    '4. close': '5.7090',
    '5. volume': '10126302'
  },
  '2013-03-28': {
    '1. open': '4.0380',
    '2. high': '4.9940',
    '3. low': '3.8020',
    '4. close': '4.8450',
    '5. volume': '11504303'
  },
  '2013-02-28': {
    '1. open': '3.9190',
    '2. high': '4.1520',
    '3. low': '3.6420',
    '4. close': '4.0000',
    '5. volume': '5527868'
  },
  '2013-01-31': {
    '1. open': '3.0900',
    '2. high': '4.2000',
    '3. low': '3.0600',
    '4. close': '3.9500',
    '5. volume': '10805878'
  },
  '2012-12-28': {
    '1. open': '2.9350',
    '2. high': '3.2480',
    '3. low': '2.8010',
    '4. close': '2.9930',
    '5. volume': '4198370'
  },
  '2012-11-30': {
    '1. open': '2.6790',
    '2. high': '3.1980',
    '3. low': '2.6790',
    '4. close': '2.9340',
    '5. volume': '6051933'
  },
  '2012-10-31': {
    '1. open': '3.1600',
    '2. high': '3.2560',
    '3. low': '2.5730',
    '4. close': '2.6930',
    '5. volume': '3574501'
  },
  '2012-09-28': {
    '1. open': '3.1450',
    '2. high': '3.4990',
    '3. low': '3.1200',
    '4. close': '3.1600',
    '5. volume': '3609688'
  },
  '2012-08-31': {
    '1. open': '3.0210',
    '2. high': '3.4800',
    '3. low': '2.9800',
    '4. close': '3.1410',
    '5. volume': '2834367'
  },
  '2012-07-31': {
    '1. open': '3.0100',
    '2. high': '3.2620',
    '3. low': '2.8410',
    '4. close': '3.0500',
    '5. volume': '3341607'
  },
  '2012-06-29': {
    '1. open': '3.2860',
    '2. high': '3.2860',
    '3. low': '2.6160',
    '4. close': '2.9670',
    '5. volume': '4179127'
  },
  '2012-05-31': {
    '1. open': '3.3350',
    '2. high': '3.4500',
    '3. low': '2.9170',
    '4. close': '3.2650',
    '5. volume': '4501003'
  },
  '2012-04-30': {
    '1. open': '4.4950',
    '2. high': '4.6700',
    '3. low': '3.2340',
    '4. close': '3.3640',
    '5. volume': '7715271'
  },
  '2012-03-30': {
    '1. open': '4.5000',
    '2. high': '4.6530',
    '3. low': '3.9300',
    '4. close': '4.5340',
    '5. volume': '7353335'
  },
  '2012-02-29': {
    '1. open': '4.6490',
    '2. high': '5.4980',
    '3. low': '4.3650',
    '4. close': '4.5410',
    '5. volume': '10009046'
  },
  '2012-01-31': {
    '1. open': '3.9700',
    '2. high': '4.9880',
    '3. low': '3.8010',
    '4. close': '4.6120',
    '5. volume': '8205304'
  },
  '2011-12-30': {
    '1. open': '4.2050',
    '2. high': '4.2050',
    '3. low': '3.6800',
    '4. close': '3.9500',
    '5. volume': '3367592'
  },
  '2011-11-30': {
    '1. open': '4.2800',
    '2. high': '4.3500',
    '3. low': '3.4500',
    '4. close': '4.1840',
    '5. volume': '4203951'
  },
  '2011-10-31': {
    '1. open': '3.7000',
    '2. high': '4.5970',
    '3. low': '3.4280',
    '4. close': '4.4900',
    '5. volume': '5955709'
  },
  '2011-09-30': {
    '1. open': '4.4690',
    '2. high': '4.5300',
    '3. low': '3.5000',
    '4. close': '3.7220',
    '5. volume': '5778670'
  },
  '2011-08-31': {
    '1. open': '5.2700',
    '2. high': '5.2700',
    '3. low': '3.7100',
    '4. close': '4.4430',
    '5. volume': '14509324'
  },
  '2011-07-29': {
    '1. open': '6.2380',
    '2. high': '6.3370',
    '3. low': '4.8420',
    '4. close': '5.0230',
    '5. volume': '7088065'
  },
  '2011-06-30': {
    '1. open': '7.2090',
    '2. high': '7.2360',
    '3. low': '5.9500',
    '4. close': '6.2100',
    '5. volume': '8586025'
  },
  '2011-05-31': {
    '1. open': '6.8200',
    '2. high': '7.5000',
    '3. low': '5.9500',
    '4. close': '7.1260',
    '5. volume': '12857707'
  },
  '2011-04-29': {
    '1. open': '7.7260',
    '2. high': '8.6500',
    '3. low': '6.5300',
    '4. close': '6.7880',
    '5. volume': '15856491'
  },
  '2011-03-31': {
    '1. open': '6.4670',
    '2. high': '9.6500',
    '3. low': '5.5620',
    '4. close': '7.7200',
    '5. volume': '47042237'
  },
  '2011-02-28': {
    '1. open': '5.5000',
    '2. high': '6.8390',
    '3. low': '5.3790',
    '4. close': '6.5190',
    '5. volume': '11022767'
  },
  '2011-01-31': {
    '1. open': '5.5450',
    '2. high': '5.9000',
    '3. low': '5.2200',
    '4. close': '5.4370',
    '5. volume': '6581388'
  },
  '2010-12-30': {
    '1. open': '4.7450',
    '2. high': '5.9500',
    '3. low': '4.6510',
    '4. close': '5.5050',
    '5. volume': '13646557'
  },
  '2010-11-30': {
    '1. open': '6.8750',
    '2. high': '6.8960',
    '3. low': '4.2460',
    '4. close': '4.6170',
    '5. volume': '18453866'
  },
  '2010-10-29': {
    '1. open': '6.8400',
    '2. high': '7.3700',
    '3. low': '6.6800',
    '4. close': '6.9290',
    '5. volume': '7153789'
  },
  '2010-09-30': {
    '1. open': '7.3990',
    '2. high': '7.9490',
    '3. low': '6.5000',
    '4. close': '6.7500',
    '5. volume': '9599517'
  },
  '2010-08-31': {
    '1. open': '7.8500',
    '2. high': '8.2100',
    '3. low': '6.7190',
    '4. close': '7.3190',
    '5. volume': '7868875'
  },
  '2010-07-30': {
    '1. open': '7.3500',
    '2. high': '8.1000',
    '3. low': '7.2720',
    '4. close': '7.8430',
    '5. volume': '5613151'
  },
  '2010-06-30': {
    '1. open': '7.7880',
    '2. high': '8.3800',
    '3. low': '7.1320',
    '4. close': '7.4940',
    '5. volume': '10986781'
  },
  '2010-05-31': {
    '1. open': '7.8790',
    '2. high': '7.8900',
    '3. low': '6.6120',
    '4. close': '7.7000',
    '5. volume': '15751184'
  },
  '2010-04-30': {
    '1. open': '8.4670',
    '2. high': '9.6900',
    '3. low': '7.3310',
    '4. close': '7.8250',
    '5. volume': '17351520'
  },
  '2010-03-31': {
    '1. open': '9.1400',
    '2. high': '9.5500',
    '3. low': '8.2600',
    '4. close': '8.4500',
    '5. volume': '11533946'
  },
  '2010-02-26': {
    '1. open': '9.8060',
    '2. high': '9.9380',
    '3. low': '8.5110',
    '4. close': '8.9500',
    '5. volume': '6230535'
  },
  '2010-01-29': {
    '1. open': '10.3650',
    '2. high': '11.7650',
    '3. low': '9.6100',
    '4. close': '9.7640',
    '5. volume': '6239963'
  },
  '2009-12-30': {
    '1. open': '10.8400',
    '2. high': '10.9600',
    '3. low': '9.7800',
    '4. close': '10.4800',
    '5. volume': '5733315'
  },
  '2009-11-30': {
    '1. open': '11.1600',
    '2. high': '11.7500',
    '3. low': '10.2300',
    '4. close': '10.5900',
    '5. volume': '4561454'
  },
  '2009-10-30': {
    '1. open': '11.8300',
    '2. high': '12.3800',
    '3. low': '10.6800',
    '4. close': '11.0900',
    '5. volume': '7868717'
  },
  '2009-09-30': {
    '1. open': '12.8100',
    '2. high': '13.4700',
    '3. low': '11.6200',
    '4. close': '11.9200',
    '5. volume': '6341710'
  },
  '2009-08-31': {
    '1. open': '11.5000',
    '2. high': '13.7500',
    '3. low': '11.4400',
    '4. close': '12.7700',
    '5. volume': '5597846'
  },
  '2009-07-31': {
    '1. open': '11.3100',
    '2. high': '12.0000',
    '3. low': '10.4200',
    '4. close': '11.3300',
    '5. volume': '5993950'
  },
  '2009-06-30': {
    '1. open': '12.5700',
    '2. high': '13.8900',
    '3. low': '9.9700',
    '4. close': '11.1800',
    '5. volume': '6449073'
  },
  '2009-05-29': {
    '1. open': '13.4200',
    '2. high': '14.7600',
    '3. low': '12.2800',
    '4. close': '12.2800',
    '5. volume': '6608607'
  },
  '2009-04-30': {
    '1. open': '9.7600',
    '2. high': '13.4500',
    '3. low': '9.4600',
    '4. close': '13.0700',
    '5. volume': '6291494'
  },
  '2009-03-31': {
    '1. open': '7.6300',
    '2. high': '10.7500',
    '3. low': '7.1500',
    '4. close': '9.7000',
    '5. volume': '5853479'
  },
  '2009-02-27': {
    '1. open': '8.9500',
    '2. high': '9.9800',
    '3. low': '7.5500',
    '4. close': '7.8100',
    '5. volume': '4439325'
  },
  '2009-01-30': {
    '1. open': '10.2400',
    '2. high': '11.3400',
    '3. low': '7.5700',
    '4. close': '8.9900',
    '5. volume': '6468830'
  },
  '2008-12-30': {
    '1. open': '9.9900',
    '2. high': '10.2500',
    '3. low': '8.0000',
    '4. close': '10.0000',
    '5. volume': '8878767'
  },
  '2008-11-28': {
    '1. open': '10.7500',
    '2. high': '15.4500',
    '3. low': '8.1100',
    '4. close': '10.4900',
    '5. volume': '14394691'
  },
  '2008-10-31': {
    '1. open': '19.6000',
    '2. high': '20.5000',
    '3. low': '8.0000',
    '4. close': '10.4000',
    '5. volume': '19918084'
  },
  '2008-09-30': {
    '1. open': '24.7900',
    '2. high': '25.6800',
    '3. low': '17.3800',
    '4. close': '19.1700',
    '5. volume': '13898035'
  },
  '2008-08-29': {
    '1. open': '21.2000',
    '2. high': '24.9300',
    '3. low': '20.6100',
    '4. close': '24.8100',
    '5. volume': '7755006'
  },
  '2008-07-31': {
    '1. open': '26.5700',
    '2. high': '28.0500',
    '3. low': '17.5000',
    '4. close': '21.1700',
    '5. volume': '23013157'
  },
  '2008-06-30': {
    '1. open': '29.6100',
    '2. high': '32.0500',
    '3. low': '25.0500',
    '4. close': '26.4600',
    '5. volume': '9566289'
  },
  '2008-05-30': {
    '1. open': '27.9000',
    '2. high': '32.7300',
    '3. low': '26.8200',
    '4. close': '29.2400',
    '5. volume': '8552624'
  },
  '2008-04-30': {
    '1. open': '24.1000',
    '2. high': '28.0000',
    '3. low': '24.0000',
    '4. close': '27.6300',
    '5. volume': '6748515'
  },
  '2008-03-31': {
    '1. open': '23.3000',
    '2. high': '24.9800',
    '3. low': '20.6200',
    '4. close': '24.3800',
    '5. volume': '9521555'
  },
  '2008-02-29': {
    '1. open': '27.4900',
    '2. high': '29.0500',
    '3. low': '23.3000',
    '4. close': '23.8600',
    '5. volume': '10882886'
  },
  '2008-01-31': {
    '1. open': '31.5500',
    '2. high': '33.3500',
    '3. low': '20.1200',
    '4. close': '26.9300',
    '5. volume': '17272999'
  },
  '2007-12-28': {
    '1. open': '33.6800',
    '2. high': '37.2700',
    '3. low': '29.7100',
    '4. close': '31.5500',
    '5. volume': '7201857'
  },
  '2007-11-30': {
    '1. open': '35.7000',
    '2. high': '39.6000',
    '3. low': '26.6300',
    '4. close': '33.5500',
    '5. volume': '13065232'
  },
  '2007-10-31': {
    '1. open': '34.5700',
    '2. high': '38.1500',
    '3. low': '33.4000',
    '4. close': '35.4800',
    '5. volume': '7382759'
  },
  '2007-09-28': {
    '1. open': '35.0000',
    '2. high': '35.3000',
    '3. low': '31.0500',
    '4. close': '34.6000',
    '5. volume': '7663412'
  },
  '2007-08-31': {
    '1. open': '29.9100',
    '2. high': '38.3200',
    '3. low': '21.2100',
    '4. close': '34.7100',
    '5. volume': '26083795'
  },
  '2007-07-31': {
    '1. open': '28.7900',
    '2. high': '35.0900',
    '3. low': '28.0000',
    '4. close': '31.5000',
    '5. volume': '13863317'
  },
  '2007-06-29': {
    '1. open': '28.6000',
    '2. high': '29.6400',
    '3. low': '25.2200',
    '4. close': '28.8600',
    '5. volume': '9218529'
  },
  '2007-05-31': {
    '1. open': '29.2000',
    '2. high': '29.6000',
    '3. low': '25.0500',
    '4. close': '27.9400',
    '5. volume': '10614206'
  },
  '2007-04-30': {
    '1. open': '24.1500',
    '2. high': '31.2200',
    '3. low': '23.2500',
    '4. close': '29.1900',
    '5. volume': '12262755'
  },
  '2007-03-30': {
    '1. open': '23.5100',
    '2. high': '26.1000',
    '3. low': '19.7800',
    '4. close': '24.1100',
    '5. volume': '16868859'
  },
  '2007-02-28': {
    '1. open': '16.9700',
    '2. high': '26.4700',
    '3. low': '16.8500',
    '4. close': '23.2500',
    '5. volume': '20939182'
  },
  '2007-01-31': {
    '1. open': '13.9900',
    '2. high': '17.9000',
    '3. low': '13.8900',
    '4. close': '16.8500',
    '5. volume': '10314874'
  },
  '2006-12-29': {
    '1. open': '12.7800',
    '2. high': '13.9900',
    '3. low': '12.4000',
    '4. close': '13.7500',
    '5. volume': '3973249'
  },
  '2006-11-30': {
    '1. open': '11.2100',
    '2. high': '13.4500',
    '3. low': '11.0300',
    '4. close': '12.6500',
    '5. volume': '4706516'
  },
  '2006-10-31': {
    '1. open': '11.4900',
    '2. high': '12.3400',
    '3. low': '10.2600',
    '4. close': '11.1800',
    '5. volume': '4146304'
  },
  '2006-09-29': {
    '1. open': '13.1500',
    '2. high': '13.3300',
    '3. low': '10.0000',
    '4. close': '11.3300',
    '5. volume': '5731617'
  },
  '2006-08-31': {
    '1. open': '11.4700',
    '2. high': '14.2300',
    '3. low': '11.3300',
    '4. close': '13.1500',
    '5. volume': '5611542'
  },
  '2006-07-31': {
    '1. open': '11.4400',
    '2. high': '12.6000',
    '3. low': '9.8100',
    '4. close': '11.4700',
    '5. volume': '4402116'
  },
  '2006-06-30': {
    '1. open': '14.1000',
    '2. high': '14.3300',
    '3. low': '9.7600',
    '4. close': '11.3200',
    '5. volume': '8250343'
  },
  '2006-05-31': {
    '1. open': '15.9900',
    '2. high': '23.1000',
    '3. low': '9.6000',
    '4. close': '13.6200',
    '5. volume': '11961316'
  },
  '2006-04-28': {
    '1. open': '8.7500',
    '2. high': '16.1800',
    '3. low': '8.6000',
    '4. close': '15.4700',
    '5. volume': '3686864'
  },
  '2006-03-31': {
    '1. open': '8.8000',
    '2. high': '9.2300',
    '3. low': '6.9500',
    '4. close': '8.7000',
    '5. volume': '2005098'
  },
  '2006-02-28': {
    '1. open': '6.7600',
    '2. high': '9.6000',
    '3. low': '6.7600',
    '4. close': '9.0100',
    '5. volume': '2768994'
  },
  '2006-01-31': {
    '1. open': '5.0700',
    '2. high': '6.7500',
    '3. low': '4.9500',
    '4. close': '6.5900',
    '5. volume': '2456466'
  },
  '2005-12-30': {
    '1. open': '4.0900',
    '2. high': '5.0000',
    '3. low': '3.8500',
    '4. close': '5.0000',
    '5. volume': '1208422'
  },
  '2005-11-30': {
    '1. open': '4.1800',
    '2. high': '4.5000',
    '3. low': '3.8600',
    '4. close': '4.0800',
    '5. volume': '1150537'
  },
  '2005-10-31': {
    '1. open': '4.1900',
    '2. high': '4.1900',
    '3. low': '3.5400',
    '4. close': '4.0700',
    '5. volume': '975141'
  },
  '2005-09-30': {
    '1. open': '2.8000',
    '2. high': '4.5700',
    '3. low': '2.6700',
    '4. close': '4.0900',
    '5. volume': '2963644'
  },
  '2005-08-31': {
    '1. open': '2.7600',
    '2. high': '3.0000',
    '3. low': '2.6300',
    '4. close': '2.7900',
    '5. volume': '1075497'
  },
  '2005-07-29': {
    '1. open': '2.6800',
    '2. high': '2.9100',
    '3. low': '2.6000',
    '4. close': '2.7600',
    '5. volume': '459859'
  },
  '2005-06-30': {
    '1. open': '2.2000',
    '2. high': '3.5500',
    '3. low': '2.1400',
    '4. close': '2.6900',
    '5. volume': '3487842'
  },
  '2005-05-31': {
    '1. open': '1.7200',
    '2. high': '2.3300',
    '3. low': '1.5200',
    '4. close': '2.1700',
    '5. volume': '2105946'
  },
  '2005-04-29': {
    '1. open': '4.4000',
    '2. high': '4.6000',
    '3. low': '1.4400',
    '4. close': '1.7300',
    '5. volume': '1651726'
  },
  '2005-03-31': {
    '1. open': '5.1000',
    '2. high': '5.4000',
    '3. low': '3.5000',
    '4. close': '4.5000',
    '5. volume': '1397477'
  },
  '2005-02-28': {
    '1. open': '5.3000',
    '2. high': '6.4000',
    '3. low': '4.8000',
    '4. close': '5.1000',
    '5. volume': '469680'
  },
  '2005-01-31': {
    '1. open': '6.6000',
    '2. high': '6.8000',
    '3. low': '5.2000',
    '4. close': '5.4000',
    '5. volume': '277995'
  },
  '2004-12-30': {
    '1. open': '7.1000',
    '2. high': '8.7000',
    '3. low': '6.0000',
    '4. close': '6.4000',
    '5. volume': '349872'
  },
  '2004-11-30': {
    '1. open': '6.8000',
    '2. high': '7.5000',
    '3. low': '6.6000',
    '4. close': '7.1000',
    '5. volume': '254842'
  },
  '2004-10-29': {
    '1. open': '6.3000',
    '2. high': '7.7000',
    '3. low': '6.1000',
    '4. close': '6.7000',
    '5. volume': '296526'
  },
  '2004-09-30': {
    '1. open': '7.4000',
    '2. high': '7.4000',
    '3. low': '5.8000',
    '4. close': '6.3000',
    '5. volume': '263349'
  },
  '2004-08-31': {
    '1. open': '8.5000',
    '2. high': '8.7000',
    '3. low': '7.5000',
    '4. close': '7.6000',
    '5. volume': '58348'
  },
  '2004-07-30': {
    '1. open': '8.0000',
    '2. high': '9.6000',
    '3. low': '7.9000',
    '4. close': '8.3000',
    '5. volume': '223966'
  },
  '2004-06-30': {
    '1. open': '8.0000',
    '2. high': '10.0000',
    '3. low': '7.5000',
    '4. close': '8.2000',
    '5. volume': '309002'
  },
  '2004-05-31': {
    '1. open': '7.5000',
    '2. high': '8.3000',
    '3. low': '6.9000',
    '4. close': '7.9000',
    '5. volume': '157713'
  },
  '2004-04-30': {
    '1. open': '9.5000',
    '2. high': '10.2000',
    '3. low': '6.7000',
    '4. close': '7.3000',
    '5. volume': '310667'
  },
  '2004-03-31': {
    '1. open': '10.6000',
    '2. high': '11.5000',
    '3. low': '8.7000',
    '4. close': '9.7000',
    '5. volume': '450905'
  },
  '2004-02-27': {
    '1. open': '10.4000',
    '2. high': '11.4000',
    '3. low': '9.7000',
    '4. close': '10.4000',
    '5. volume': '398181'
  },
  '2004-01-30': {
    '1. open': '6.6000',
    '2. high': '11.7000',
    '3. low': '6.0000',
    '4. close': '10.2000',
    '5. volume': '950440'
  },
  '2003-12-30': {
    '1. open': '7.0000',
    '2. high': '7.9000',
    '3. low': '6.5000',
    '4. close': '6.8000',
    '5. volume': '230923'
  },
  '2003-11-28': {
    '1. open': '7.7000',
    '2. high': '7.9000',
    '3. low': '6.1000',
    '4. close': '6.7000',
    '5. volume': '213661'
  },
  '2003-10-31': {
    '1. open': '8.2000',
    '2. high': '8.3000',
    '3. low': '7.4000',
    '4. close': '7.8000',
    '5. volume': '255490'
  },
  '2003-09-30': {
    '1. open': '9.2000',
    '2. high': '10.7000',
    '3. low': '6.9000',
    '4. close': '7.9000',
    '5. volume': '976037'
  },
  '2003-08-29': {
    '1. open': '10.8000',
    '2. high': '10.9000',
    '3. low': '9.0000',
    '4. close': '9.3000',
    '5. volume': '518541'
  },
  '2003-07-31': {
    '1. open': '10.2000',
    '2. high': '11.6000',
    '3. low': '9.3000',
    '4. close': '10.6000',
    '5. volume': '758319'
  },
  '2003-06-30': {
    '1. open': '10.4000',
    '2. high': '12.2000',
    '3. low': '9.4000',
    '4. close': '10.3000',
    '5. volume': '993074'
  },
  '2003-05-30': {
    '1. open': '11.4000',
    '2. high': '14.8000',
    '3. low': '9.9000',
    '4. close': '10.3000',
    '5. volume': '1268649'
  },
  '2003-04-30': {
    '1. open': '10.4000',
    '2. high': '14.7000',
    '3. low': '9.7000',
    '4. close': '11.2000',
    '5. volume': '1617979'
  },
  '2003-03-31': {
    '1. open': '8.0000',
    '2. high': '15.3000',
    '3. low': '5.6000',
    '4. close': '10.9000',
    '5. volume': '2099454'
  },
  '2003-02-28': {
    '1. open': '22.0000',
    '2. high': '22.0000',
    '3. low': '7.5000',
    '4. close': '8.0000',
    '5. volume': '789294'
  },
  '2003-01-31': {
    '1. open': '26.2000',
    '2. high': '30.0000',
    '3. low': '21.1000',
    '4. close': '22.0000',
    '5. volume': '109470'
  },
  '2002-12-30': {
    '1. open': '31.0000',
    '2. high': '31.0000',
    '3. low': '25.0000',
    '4. close': '25.8000',
    '5. volume': '172594'
  },
  '2002-11-29': {
    '1. open': '36.1000',
    '2. high': '37.5000',
    '3. low': '28.9000',
    '4. close': '29.1000',
    '5. volume': '158179'
  },
  '2002-10-31': {
    '1. open': '34.0000',
    '2. high': '37.4000',
    '3. low': '29.0000',
    '4. close': '36.2000',
    '5. volume': '254406'
  },
  '2002-09-30': {
    '1. open': '42.0000',
    '2. high': '47.0000',
    '3. low': '32.1000',
    '4. close': '34.4000',
    '5. volume': '216098'
  },
  '2002-08-30': {
    '1. open': '28.5000',
    '2. high': '41.3000',
    '3. low': '25.0000',
    '4. close': '40.7000',
    '5. volume': '334567'
  },
  '2002-07-31': {
    '1. open': '38.5000',
    '2. high': '38.5000',
    '3. low': '25.0000',
    '4. close': '28.5000',
    '5. volume': '269846'
  },
  '2002-06-28': {
    '1. open': '51.5000',
    '2. high': '52.0000',
    '3. low': '35.1000',
    '4. close': '37.5000',
    '5. volume': '180398'
  },
  '2002-05-31': {
    '1. open': '62.9000',
    '2. high': '63.0000',
    '3. low': '50.0000',
    '4. close': '51.4000',
    '5. volume': '96472'
  },
  '2002-04-30': {
    '1. open': '65.1000',
    '2. high': '69.0000',
    '3. low': '59.5000',
    '4. close': '63.5000',
    '5. volume': '168848'
  },
  '2002-03-28': {
    '1. open': '71.0000',
    '2. high': '71.5000',
    '3. low': '58.1000',
    '4. close': '64.5000',
    '5. volume': '486307'
  },
  '2002-02-28': {
    '1. open': '74.5000',
    '2. high': '75.9000',
    '3. low': '62.4000',
    '4. close': '70.6000',
    '5. volume': '183987'
  },
  '2002-01-31': {
    '1. open': '71.0000',
    '2. high': '84.8000',
    '3. low': '67.0000',
    '4. close': '73.8000',
    '5. volume': '73205'
  },
  '2001-12-28': {
    '1. open': '70.0000',
    '2. high': '75.0000',
    '3. low': '64.0000',
    '4. close': '66.5000',
    '5. volume': '57923'
  },
  '2001-11-30': {
    '1. open': '73.7000',
    '2. high': '84.9000',
    '3. low': '65.5000',
    '4. close': '70.0000',
    '5. volume': '80932'
  },
  '2001-10-31': {
    '1. open': '86.0000',
    '2. high': '87.5000',
    '3. low': '64.5000',
    '4. close': '74.0000',
    '5. volume': '111709'
  },
  '2001-09-28': {
    '1. open': '87.2000',
    '2. high': '87.4000',
    '3. low': '59.0000',
    '4. close': '84.4000',
    '5. volume': '77446'
  },
  '2001-08-31': {
    '1. open': '107.0000',
    '2. high': '108.0000',
    '3. low': '81.0000',
    '4. close': '86.0000',
    '5. volume': '74330'
  },
  '2001-07-31': {
    '1. open': '97.3000',
    '2. high': '111.1000',
    '3. low': '87.9000',
    '4. close': '104.5000',
    '5. volume': '122773'
  },
  '2001-06-29': {
    '1. open': '86.0000',
    '2. high': '108.0000',
    '3. low': '84.0000',
    '4. close': '98.0000',
    '5. volume': '140593'
  },
  '2001-05-31': {
    '1. open': '88.0000',
    '2. high': '89.0000',
    '3. low': '78.1000',
    '4. close': '85.3000',
    '5. volume': '168838'
  }
};

// tslint:disable:max-line-length
export const nordexCompany: Company = {
  id: 1105,
  name: 'Nordex SE',
  country: Country.Deutschland,
  city: 'Rostock',
  url: 'http://www.nordex-online.com/de',
  description: 'Die Nordex SE mit Sitz in Rostock und Verwaltung in Hamburg-Langenhorn ist ein börsennotierter Hersteller von Windkraftanlagen. Kerngeschäft des Unternehmens ist die Fertigung, Errichtung und Wartung von Windkraftanlagen; in manchen Märkten ist Nordex ebenfalls in der Planung von Windparks bis hin zu deren schlüsselfertiger Errichtung tätig. Das Unternehmen baut ausschließlich Windkraftanlagen für Landstandorte, im Offshore-Bereich ist es hingegen nicht tätig. Hauptprodukt sind „Schwachwindanlagen“, die speziell für die Erschließung von Standorten mit vergleichsweise niedrigen durchschnittlichen Windgeschwindigkeiten im Landesinneren ausgelegt sind.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Nordex_SE',
  logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/7/74/Nordex_Logo.svg/500px-Nordex_Logo.svg.png',
  products: [],
  industries: [111313],
  currency: Currency.EUR,
  isin: 'DE000A0D6554',
  wkn: 'A0D655',
  symbol: 'NDX1.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.TecDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Windkraft', 'Windenergieanlagen', 'Onshore-Anlagen', 'Windkraftanlagen']
};
// tslint:enable:max-line-length

