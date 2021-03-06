import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.46, yield: 3.11}, {year: 2017, rate: 0.46}, {
    year: 2016,
    rate: 0.70
  }, {year: 2015, rate: 0.70, yield: 2.63}, {year: 2014, rate: 0.68, yield: 2.69}, {year: 2013, rate: 0.62, yield: 2.15}, {
    year: 2012,
    rate: 0.58,
    yield: 3.00
  }, {year: 2011, rate: 0.52, yield: 2.95}, {year: 2010, rate: 1.08, yield: 3.50}, {year: 2009, rate: 1.08, yield: 3.21}, {
    year: 2008,
    rate: 1.08,
    yield: 3.92
  }, {year: 2007, rate: 1.08, yield: 2.03}, {year: 2006, rate: 1.03, yield: 2.24}, {year: 2005, rate: 1.00, yield: 2.53}, {
    year: 2004,
    rate: 0.94,
    yield: 2.68
  }, {year: 2003, rate: 0.74, yield: 1.70}, {year: 2002, rate: 0.64, yield: 1.51}, {year: 2001, rate: 0.56, yield: 0.96}, {
    year: 2000,
    rate: 0.50,
    yield: 0.75
  }, {year: 1999, rate: 0.90, yield: 0.98}
];
const prices = {
  '2019-12-04': {
    '1. open': '14.8400',
    '2. high': '14.8600',
    '3. low': '14.7500',
    '4. close': '14.7800',
    '5. volume': '4862'
  },
  '2019-11-29': {
    '1. open': '15.2300',
    '2. high': '15.8600',
    '3. low': '14.9800',
    '4. close': '14.9800',
    '5. volume': '86040'
  },
  '2019-10-31': {
    '1. open': '16.0800',
    '2. high': '16.1100',
    '3. low': '14.8950',
    '4. close': '15.2650',
    '5. volume': '118508'
  },
  '2019-09-30': {
    '1. open': '15.6500',
    '2. high': '17.1550',
    '3. low': '15.4600',
    '4. close': '16.0600',
    '5. volume': '52201'
  },
  '2019-08-30': {
    '1. open': '17.3300',
    '2. high': '17.3500',
    '3. low': '15.1450',
    '4. close': '15.4000',
    '5. volume': '75270'
  },
  '2019-07-31': {
    '1. open': '17.0050',
    '2. high': '18.1050',
    '3. low': '16.9550',
    '4. close': '17.4100',
    '5. volume': '21284'
  },
  '2019-06-28': {
    '1. open': '16.8350',
    '2. high': '17.3500',
    '3. low': '16.4100',
    '4. close': '16.9800',
    '5. volume': '64964'
  },
  '2019-05-31': {
    '1. open': '17.4250',
    '2. high': '17.9000',
    '3. low': '16.5900',
    '4. close': '16.8350',
    '5. volume': '38574'
  },
  '2019-04-30': {
    '1. open': '16.7050',
    '2. high': '17.5350',
    '3. low': '15.9700',
    '4. close': '17.3700',
    '5. volume': '42193'
  },
  '2019-03-29': {
    '1. open': '17.7400',
    '2. high': '18.1150',
    '3. low': '16.1450',
    '4. close': '16.6500',
    '5. volume': '49978'
  },
  '2019-02-28': {
    '1. open': '17.2600',
    '2. high': '18.1550',
    '3. low': '17.0500',
    '4. close': '18.0000',
    '5. volume': '58674'
  },
  '2019-01-31': {
    '1. open': '14.7450',
    '2. high': '17.5350',
    '3. low': '14.6550',
    '4. close': '17.2750',
    '5. volume': '102897'
  },
  '2018-12-28': {
    '1. open': '15.9350',
    '2. high': '15.9350',
    '3. low': '14.2900',
    '4. close': '14.9400',
    '5. volume': '84456'
  },
  '2018-11-30': {
    '1. open': '17.2750',
    '2. high': '17.8250',
    '3. low': '16.3800',
    '4. close': '16.4150',
    '5. volume': '97340'
  },
  '2018-10-31': {
    '1. open': '16.6000',
    '2. high': '17.3200',
    '3. low': '15.3300',
    '4. close': '17.1500',
    '5. volume': '130937'
  },
  '2018-09-28': {
    '1. open': '15.4150',
    '2. high': '16.9550',
    '3. low': '15.0600',
    '4. close': '16.5250',
    '5. volume': '677774'
  },
  '2018-08-31': {
    '1. open': '15.3150',
    '2. high': '15.8950',
    '3. low': '14.8750',
    '4. close': '15.3700',
    '5. volume': '150644'
  },
  '2018-07-31': {
    '1. open': '13.8000',
    '2. high': '15.7100',
    '3. low': '13.0000',
    '4. close': '15.3650',
    '5. volume': '390944'
  },
  '2018-06-29': {
    '1. open': '15.4600',
    '2. high': '15.6750',
    '3. low': '13.8725',
    '4. close': '13.8725',
    '5. volume': '185845'
  },
  '2018-05-31': {
    '1. open': '16.9600',
    '2. high': '17.0550',
    '3. low': '15.4250',
    '4. close': '15.4450',
    '5. volume': '112311'
  },
  '2018-04-30': {
    '1. open': '16.7900',
    '2. high': '17.1550',
    '3. low': '15.5400',
    '4. close': '17.0100',
    '5. volume': '276969'
  },
  '2018-03-29': {
    '1. open': '18.1450',
    '2. high': '18.1450',
    '3. low': '16.4800',
    '4. close': '16.8750',
    '5. volume': '168776'
  },
  '2018-02-28': {
    '1. open': '19.2100',
    '2. high': '19.7100',
    '3. low': '18.0150',
    '4. close': '18.9750',
    '5. volume': '84534'
  },
  '2018-01-31': {
    '1. open': '17.7200',
    '2. high': '19.6700',
    '3. low': '17.3500',
    '4. close': '19.0900',
    '5. volume': '182869'
  },
  '2017-12-29': {
    '1. open': '17.7200',
    '2. high': '17.7200',
    '3. low': '17.7200',
    '4. close': '17.7200',
    '5. volume': '0'
  },
  '2017-11-30': {
    '1. open': '17.3800',
    '2. high': '17.7700',
    '3. low': '16.3800',
    '4. close': '17.7200',
    '5. volume': '140435'
  },
  '2017-10-31': {
    '1. open': '17.1300',
    '2. high': '17.9650',
    '3. low': '16.8650',
    '4. close': '17.5100',
    '5. volume': '100789'
  },
  '2017-09-29': {
    '1. open': '16.9100',
    '2. high': '17.2600',
    '3. low': '16.3450',
    '4. close': '16.8950',
    '5. volume': '223127'
  },
  '2017-08-31': {
    '1. open': '20.4350',
    '2. high': '21.0500',
    '3. low': '16.4500',
    '4. close': '16.7550',
    '5. volume': '95073'
  },
  '2017-07-31': {
    '1. open': '22.4700',
    '2. high': '22.8200',
    '3. low': '20.1450',
    '4. close': '20.1450',
    '5. volume': '134206'
  },
  '2017-06-30': {
    '1. open': '23.3100',
    '2. high': '23.6900',
    '3. low': '21.6000',
    '4. close': '22.1800',
    '5. volume': '495352'
  },
  '2017-05-31': {
    '1. open': '21.6950',
    '2. high': '23.6700',
    '3. low': '21.4000',
    '4. close': '23.2650',
    '5. volume': '233912'
  },
  '2017-04-28': {
    '1. open': '22.1150',
    '2. high': '22.3300',
    '3. low': '20.1600',
    '4. close': '21.6500',
    '5. volume': '180130'
  },
  '2017-03-31': {
    '1. open': '22.7150',
    '2. high': '23.0400',
    '3. low': '21.3500',
    '4. close': '22.0200',
    '5. volume': '101427'
  },
  '2017-02-28': {
    '1. open': '22.8150',
    '2. high': '23.0400',
    '3. low': '22.1700',
    '4. close': '22.5800',
    '5. volume': '105719'
  },
  '2017-01-31': {
    '1. open': '22.9850',
    '2. high': '24.0400',
    '3. low': '22.2900',
    '4. close': '22.7450',
    '5. volume': '97520'
  },
  '2016-12-30': {
    '1. open': '22.0150',
    '2. high': '23.4100',
    '3. low': '21.3600',
    '4. close': '22.8400',
    '5. volume': '54027'
  },
  '2016-11-30': {
    '1. open': '23.9600',
    '2. high': '24.1700',
    '3. low': '21.9900',
    '4. close': '22.0950',
    '5. volume': '50261'
  },
  '2016-10-31': {
    '1. open': '23.0750',
    '2. high': '24.8200',
    '3. low': '22.7600',
    '4. close': '23.8550',
    '5. volume': '72870'
  },
  '2016-09-30': {
    '1. open': '22.7600',
    '2. high': '23.6750',
    '3. low': '21.8400',
    '4. close': '22.8700',
    '5. volume': '69006'
  },
  '2016-08-31': {
    '1. open': '22.2450',
    '2. high': '22.9400',
    '3. low': '21.4500',
    '4. close': '22.7400',
    '5. volume': '70165'
  },
  '2016-07-29': {
    '1. open': '22.4700',
    '2. high': '24.1500',
    '3. low': '21.2100',
    '4. close': '22.4000',
    '5. volume': '68192'
  },
  '2016-06-30': {
    '1. open': '24.3300',
    '2. high': '24.6150',
    '3. low': '21.0350',
    '4. close': '21.8650',
    '5. volume': '59526'
  },
  '2016-05-31': {
    '1. open': '24.6850',
    '2. high': '24.7900',
    '3. low': '23.4800',
    '4. close': '24.4150',
    '5. volume': '44644'
  },
  '2016-04-29': {
    '1. open': '23.8800',
    '2. high': '26.5800',
    '3. low': '23.0800',
    '4. close': '25.0650',
    '5. volume': '34008'
  },
  '2016-03-31': {
    '1. open': '24.8600',
    '2. high': '26.6300',
    '3. low': '23.4300',
    '4. close': '24.3750',
    '5. volume': '41903'
  },
  '2016-02-29': {
    '1. open': '26.2750',
    '2. high': '26.5700',
    '3. low': '22.3600',
    '4. close': '24.1150',
    '5. volume': '65616'
  },
  '2016-01-29': {
    '1. open': '26.1400',
    '2. high': '26.2100',
    '3. low': '23.3850',
    '4. close': '26.0200',
    '5. volume': '85775'
  },
  '2015-12-30': {
    '1. open': '28.6750',
    '2. high': '28.8300',
    '3. low': '25.9900',
    '4. close': '27.2250',
    '5. volume': '57516'
  },
  '2015-11-30': {
    '1. open': '29.7550',
    '2. high': '30.7300',
    '3. low': '27.8300',
    '4. close': '29.2250',
    '5. volume': '31310'
  },
  '2015-10-30': {
    '1. open': '26.6900',
    '2. high': '30.4700',
    '3. low': '26.1800',
    '4. close': '29.4800',
    '5. volume': '53804'
  },
  '2015-09-30': {
    '1. open': '28.6800',
    '2. high': '28.8100',
    '3. low': '24.9100',
    '4. close': '26.4500',
    '5. volume': '60756'
  },
  '2015-08-31': {
    '1. open': '31.6100',
    '2. high': '32.2200',
    '3. low': '26.0900',
    '4. close': '28.9500',
    '5. volume': '45012'
  },
  '2015-07-31': {
    '1. open': '28.9850',
    '2. high': '31.5700',
    '3. low': '27.5000',
    '4. close': '31.2300',
    '5. volume': '31060'
  },
  '2015-06-30': {
    '1. open': '30.9200',
    '2. high': '31.0100',
    '3. low': '28.3900',
    '4. close': '28.8000',
    '5. volume': '81574'
  },
  '2015-05-29': {
    '1. open': '30.7600',
    '2. high': '31.9800',
    '3. low': '30.1800',
    '4. close': '31.9550',
    '5. volume': '58663'
  },
  '2015-04-30': {
    '1. open': '31.4150',
    '2. high': '33.1950',
    '3. low': '30.8300',
    '4. close': '30.8600',
    '5. volume': '41394'
  },
  '2015-03-31': {
    '1. open': '29.6350',
    '2. high': '31.9000',
    '3. low': '29.3350',
    '4. close': '31.0950',
    '5. volume': '88211'
  },
  '2015-02-27': {
    '1. open': '27.9100',
    '2. high': '29.6900',
    '3. low': '27.9100',
    '4. close': '29.5200',
    '5. volume': '30747'
  },
  '2015-01-30': {
    '1. open': '24.9250',
    '2. high': '28.6050',
    '3. low': '23.6000',
    '4. close': '28.2950',
    '5. volume': '55832'
  },
  '2014-12-30': {
    '1. open': '25.3000',
    '2. high': '25.4500',
    '3. low': '22.3100',
    '4. close': '25.0950',
    '5. volume': '65532'
  },
  '2014-11-28': {
    '1. open': '23.3750',
    '2. high': '25.8200',
    '3. low': '23.2800',
    '4. close': '25.3350',
    '5. volume': '23511'
  },
  '2014-10-31': {
    '1. open': '24.1900',
    '2. high': '24.1900',
    '3. low': '22.0500',
    '4. close': '22.7350',
    '5. volume': '30171'
  },
  '2014-09-30': {
    '1. open': '26.2700',
    '2. high': '26.7600',
    '3. low': '24.5750',
    '4. close': '24.6500',
    '5. volume': '6709'
  },
  '2014-08-29': {
    '1. open': '25.9400',
    '2. high': '26.7000',
    '3. low': '25.4000',
    '4. close': '26.3750',
    '5. volume': '13686'
  },
  '2014-07-31': {
    '1. open': '26.6700',
    '2. high': '28.0150',
    '3. low': '25.7250',
    '4. close': '25.8750',
    '5. volume': '20111'
  },
  '2014-06-30': {
    '1. open': '26.7350',
    '2. high': '27.2400',
    '3. low': '25.9950',
    '4. close': '27.0500',
    '5. volume': '10314'
  },
  '2014-05-30': {
    '1. open': '26.9150',
    '2. high': '27.0250',
    '3. low': '26.0000',
    '4. close': '26.6950',
    '5. volume': '18949'
  },
  '2014-04-30': {
    '1. open': '28.1000',
    '2. high': '29.4300',
    '3. low': '27.7000',
    '4. close': '27.9000',
    '5. volume': '43833'
  },
  '2014-03-31': {
    '1. open': '26.4300',
    '2. high': '28.4100',
    '3. low': '26.0000',
    '4. close': '28.2900',
    '5. volume': '23192'
  },
  '2014-02-28': {
    '1. open': '25.7500',
    '2. high': '27.0100',
    '3. low': '25.1800',
    '4. close': '26.5800',
    '5. volume': '19151'
  },
  '2014-01-31': {
    '1. open': '28.4300',
    '2. high': '28.6000',
    '3. low': '24.7850',
    '4. close': '25.0500',
    '5. volume': '62139'
  },
  '2013-12-30': {
    '1. open': '29.0250',
    '2. high': '29.1000',
    '3. low': '26.9200',
    '4. close': '28.5400',
    '5. volume': '37050'
  },
  '2013-11-29': {
    '1. open': '26.9500',
    '2. high': '29.0000',
    '3. low': '26.5000',
    '4. close': '29.0000',
    '5. volume': '40169'
  },
  '2013-10-31': {
    '1. open': '25.5600',
    '2. high': '27.6950',
    '3. low': '25.5600',
    '4. close': '26.9600',
    '5. volume': '42271'
  },
  '2013-09-30': {
    '1. open': '24.1400',
    '2. high': '25.9500',
    '3. low': '23.7450',
    '4. close': '25.2800',
    '5. volume': '42198'
  },
  '2013-08-30': {
    '1. open': '23.6600',
    '2. high': '24.5450',
    '3. low': '22.7650',
    '4. close': '23.6550',
    '5. volume': '52446'
  },
  '2013-07-31': {
    '1. open': '21.4600',
    '2. high': '23.5750',
    '3. low': '20.5000',
    '4. close': '23.0400',
    '5. volume': '45882'
  },
  '2013-06-28': {
    '1. open': '22.6050',
    '2. high': '22.9450',
    '3. low': '19.4900',
    '4. close': '21.1750',
    '5. volume': '71521'
  },
  '2013-05-31': {
    '1. open': '22.4450',
    '2. high': '24.2050',
    '3. low': '22.3500',
    '4. close': '23.0000',
    '5. volume': '48446'
  },
  '2013-04-30': {
    '1. open': '21.7450',
    '2. high': '22.8000',
    '3. low': '20.2850',
    '4. close': '22.2800',
    '5. volume': '87949'
  },
  '2013-03-28': {
    '1. open': '20.8900',
    '2. high': '23.0100',
    '3. low': '20.3650',
    '4. close': '21.3100',
    '5. volume': '89929'
  },
  '2013-02-28': {
    '1. open': '21.0500',
    '2. high': '21.3400',
    '3. low': '19.9900',
    '4. close': '20.8900',
    '5. volume': '36482'
  },
  '2013-01-31': {
    '1. open': '19.7000',
    '2. high': '21.5500',
    '3. low': '18.8950',
    '4. close': '21.0500',
    '5. volume': '55046'
  },
  '2012-12-28': {
    '1. open': '18.9050',
    '2. high': '19.8750',
    '3. low': '18.7350',
    '4. close': '19.4550',
    '5. volume': '46594'
  },
  '2012-11-30': {
    '1. open': '18.7100',
    '2. high': '19.3350',
    '3. low': '17.6950',
    '4. close': '19.1500',
    '5. volume': '27716'
  },
  '2012-10-31': {
    '1. open': '16.3450',
    '2. high': '18.8950',
    '3. low': '15.7300',
    '4. close': '18.6000',
    '5. volume': '109404'
  },
  '2012-09-28': {
    '1. open': '16.7800',
    '2. high': '17.4050',
    '3. low': '16.1750',
    '4. close': '16.2100',
    '5. volume': '50132'
  },
  '2012-08-31': {
    '1. open': '14.5700',
    '2. high': '17.6000',
    '3. low': '14.5650',
    '4. close': '16.6650',
    '5. volume': '95440'
  },
  '2012-07-31': {
    '1. open': '14.4700',
    '2. high': '15.0000',
    '3. low': '12.8600',
    '4. close': '14.6100',
    '5. volume': '204622'
  },
  '2012-06-29': {
    '1. open': '13.8300',
    '2. high': '14.7200',
    '3. low': '13.4550',
    '4. close': '14.4900',
    '5. volume': '170541'
  },
  '2012-05-31': {
    '1. open': '15.3950',
    '2. high': '15.3950',
    '3. low': '13.5400',
    '4. close': '13.8750',
    '5. volume': '161710'
  },
  '2012-04-30': {
    '1. open': '17.9250',
    '2. high': '18.3450',
    '3. low': '14.5800',
    '4. close': '15.2100',
    '5. volume': '115169'
  },
  '2012-03-30': {
    '1. open': '18.7150',
    '2. high': '19.3850',
    '3. low': '17.2000',
    '4. close': '18.0800',
    '5. volume': '133582'
  },
  '2012-02-29': {
    '1. open': '17.8700',
    '2. high': '19.0300',
    '3. low': '17.1950',
    '4. close': '18.9000',
    '5. volume': '104287'
  },
  '2012-01-31': {
    '1. open': '17.5800',
    '2. high': '18.5700',
    '3. low': '16.3200',
    '4. close': '17.3500',
    '5. volume': '166686'
  },
  '2011-12-30': {
    '1. open': '19.6900',
    '2. high': '20.4000',
    '3. low': '15.9050',
    '4. close': '17.2400',
    '5. volume': '95933'
  },
  '2011-11-30': {
    '1. open': '18.5850',
    '2. high': '20.4750',
    '3. low': '16.9700',
    '4. close': '19.5000',
    '5. volume': '72122'
  },
  '2011-10-31': {
    '1. open': '16.7950',
    '2. high': '20.0800',
    '3. low': '16.7150',
    '4. close': '19.3700',
    '5. volume': '83135'
  },
  '2011-09-30': {
    '1. open': '18.4400',
    '2. high': '18.4400',
    '3. low': '14.7200',
    '4. close': '17.0750',
    '5. volume': '97726'
  },
  '2011-08-31': {
    '1. open': '20.7000',
    '2. high': '20.7900',
    '3. low': '16.7000',
    '4. close': '18.5000',
    '5. volume': '206550'
  },
  '2011-07-29': {
    '1. open': '28.4600',
    '2. high': '28.4600',
    '3. low': '20.3500',
    '4. close': '20.6900',
    '5. volume': '202370'
  },
  '2011-06-30': {
    '1. open': '30.7250',
    '2. high': '30.8300',
    '3. low': '26.1300',
    '4. close': '28.5000',
    '5. volume': '212079'
  },
  '2011-05-31': {
    '1. open': '32.1500',
    '2. high': '32.1800',
    '3. low': '30.1100',
    '4. close': '30.9000',
    '5. volume': '113485'
  },
  '2011-04-29': {
    '1. open': '31.4600',
    '2. high': '32.4100',
    '3. low': '29.9000',
    '4. close': '32.0700',
    '5. volume': '111486'
  },
  '2011-03-31': {
    '1. open': '35.7400',
    '2. high': '35.8700',
    '3. low': '29.8000',
    '4. close': '31.4600',
    '5. volume': '170700'
  },
  '2011-02-28': {
    '1. open': '36.2000',
    '2. high': '36.2000',
    '3. low': '34.4400',
    '4. close': '35.6900',
    '5. volume': '107528'
  },
  '2011-01-31': {
    '1. open': '31.2000',
    '2. high': '36.0200',
    '3. low': '31.1750',
    '4. close': '35.9000',
    '5. volume': '305649'
  },
  '2010-12-30': {
    '1. open': '32.5100',
    '2. high': '33.7300',
    '3. low': '31.4000',
    '4. close': '31.8900',
    '5. volume': '298767'
  },
  '2010-11-30': {
    '1. open': '38.8950',
    '2. high': '39.1200',
    '3. low': '35.0300',
    '4. close': '35.0850',
    '5. volume': '41304'
  },
  '2010-10-29': {
    '1. open': '39.4200',
    '2. high': '40.3600',
    '3. low': '37.6800',
    '4. close': '38.9300',
    '5. volume': '46728'
  },
  '2010-09-29': {
    '1. open': '37.0900',
    '2. high': '41.0100',
    '3. low': '36.8900',
    '4. close': '39.4500',
    '5. volume': '86478'
  },
  '2010-08-31': {
    '1. open': '35.4600',
    '2. high': '37.1000',
    '3. low': '34.4250',
    '4. close': '35.6600',
    '5. volume': '29797'
  },
  '2010-07-30': {
    '1. open': '32.1100',
    '2. high': '36.0000',
    '3. low': '31.9000',
    '4. close': '34.6700',
    '5. volume': '49707'
  },
  '2010-06-30': {
    '1. open': '33.1600',
    '2. high': '35.4800',
    '3. low': '32.6900',
    '4. close': '32.7200',
    '5. volume': '30945'
  },
  '2010-05-31': {
    '1. open': '33.8200',
    '2. high': '33.9200',
    '3. low': '33.8200',
    '4. close': '33.8500',
    '5. volume': '5506'
  },
  '2009-01-19': {
    '1. open': '28.4800',
    '2. high': '29.4000',
    '3. low': '25.6900',
    '4. close': '26.3600',
    '5. volume': '22276'
  },
  '2008-12-30': {
    '1. open': '29.9000',
    '2. high': '30.3000',
    '3. low': '26.7000',
    '4. close': '27.2200',
    '5. volume': '75163'
  },
  '2008-11-28': {
    '1. open': '33.1800',
    '2. high': '33.9100',
    '3. low': '28.3200',
    '4. close': '29.6900',
    '5. volume': '49138'
  },
  '2008-10-31': {
    '1. open': '33.0000',
    '2. high': '33.9400',
    '3. low': '24.5000',
    '4. close': '32.9000',
    '5. volume': '77375'
  },
  '2008-09-30': {
    '1. open': '35.9000',
    '2. high': '37.0000',
    '3. low': '31.7900',
    '4. close': '33.2800',
    '5. volume': '73779'
  },
  '2008-08-29': {
    '1. open': '36.7700',
    '2. high': '36.7700',
    '3. low': '33.5900',
    '4. close': '35.8800',
    '5. volume': '25516'
  },
  '2008-07-28': {
    '1. open': '35.1400',
    '2. high': '35.3000',
    '3. low': '30.3100',
    '4. close': '35.1100',
    '5. volume': '58612'
  },
  '2008-06-30': {
    '1. open': '44.7000',
    '2. high': '46.0600',
    '3. low': '34.5000',
    '4. close': '35.6300',
    '5. volume': '55852'
  },
  '2008-05-30': {
    '1. open': '45.6500',
    '2. high': '46.7600',
    '3. low': '43.9500',
    '4. close': '45.0500',
    '5. volume': '38122'
  },
  '2008-04-30': {
    '1. open': '49.8200',
    '2. high': '50.3000',
    '3. low': '44.1000',
    '4. close': '45.1500',
    '5. volume': '52546'
  },
  '2008-03-31': {
    '1. open': '46.1400',
    '2. high': '48.8500',
    '3. low': '45.9000',
    '4. close': '48.4900',
    '5. volume': '36741'
  },
  '2008-02-29': {
    '1. open': '47.6100',
    '2. high': '48.4400',
    '3. low': '44.5500',
    '4. close': '46.7700',
    '5. volume': '58352'
  },
  '2008-01-31': {
    '1. open': '53.4600',
    '2. high': '53.4600',
    '3. low': '44.7000',
    '4. close': '46.7000',
    '5. volume': '110642'
  }
};

// tslint:disable:max-line-length
export const carrefourCompany: Company = {
  id: 1209,
  name: 'Carrefour S.A.',
  country: Country.Frankreich,
  city: 'Boulogne-Billancourt',
  url: 'http://www.carrefour.com/',
  description: 'Die Carrefour S.A. ist ein international tätiges französisches Unternehmen im Einzelhandel und Großhandel. Es ist nach der Schwarz-Gruppe das zweitgrößte Einzelhandelsunternehmen Europas. Weitere bedeutende Wettbewerber von Carrefour sind Wal-Mart, Aldi und Tesco. Im Bereich Selbstbedienungsgroßmärkte ist die deutsche Metro Cash & Carry der Hauptkonkurrent.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Carrefour_(Unternehmen)',
  logo: 'http://www.carrefour.com/sites/all/themes/carrefourcom_v2/img_v2/logo.png',
  products: [
    {
      id: 120910,
      name: 'Carrefour',
      logo: 'http://www.carrefour.com/sites/all/themes/carrefourcom_v2/img_v2/logo.png'
    }
  ],
  industries: [2010],
  securityType: SecurityType.Aktie,
  currency: Currency.EUR,
  isin: 'FR0000120172',
  wkn: '852362',
  symbol: 'CAR.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.CAC40, Indices.DowJonesSustainabilityEurozone],
  end_of_month_prices: prices,
  dividends,
  tags: ['Einzelhandelskonzern']
};
// tslint:enable:max-line-length

