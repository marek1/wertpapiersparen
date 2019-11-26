import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {year: 2018, rate: 1.00, yield: 11.48}, {year: 2017, rate: 1.07}, {year: 2016, rate: 1.05}, {
    year: 2015,
    rate: 0.43,
    yield: 2.53
  }, {year: 2014, rate: 0.00}, {year: 2013, rate: 0.00}
];
const prices = {
  '2019-11-15': {
    '1. open': '12.3500',
    '2. high': '13.6900',
    '3. low': '12.2000',
    '4. close': '13.4100',
    '5. volume': '7756608'
  },
  '2019-10-31': {
    '1. open': '11.2000',
    '2. high': '12.5000',
    '3. low': '10.7000',
    '4. close': '12.2500',
    '5. volume': '12282157'
  },
  '2019-09-30': {
    '1. open': '10.8100',
    '2. high': '11.4600',
    '3. low': '10.5800',
    '4. close': '11.1900',
    '5. volume': '10533965'
  },
  '2019-08-30': {
    '1. open': '10.2600',
    '2. high': '10.9300',
    '3. low': '10.0200',
    '4. close': '10.7800',
    '5. volume': '10713852'
  },
  '2019-07-31': {
    '1. open': '10.6500',
    '2. high': '11.0400',
    '3. low': '10.0600',
    '4. close': '10.3100',
    '5. volume': '11268098'
  },
  '2019-06-28': {
    '1. open': '12.3600',
    '2. high': '12.4800',
    '3. low': '10.1500',
    '4. close': '10.5800',
    '5. volume': '16712465'
  },
  '2019-05-31': {
    '1. open': '12.4400',
    '2. high': '12.6600',
    '3. low': '11.9300',
    '4. close': '12.3400',
    '5. volume': '15307577'
  },
  '2019-04-30': {
    '1. open': '11.0800',
    '2. high': '12.4600',
    '3. low': '10.7100',
    '4. close': '12.4100',
    '5. volume': '11289461'
  },
  '2019-03-29': {
    '1. open': '10.9800',
    '2. high': '11.3000',
    '3. low': '10.3600',
    '4. close': '10.9200',
    '5. volume': '12401677'
  },
  '2019-02-28': {
    '1. open': '9.9200',
    '2. high': '11.0100',
    '3. low': '9.3900',
    '4. close': '10.8400',
    '5. volume': '10020229'
  },
  '2019-01-31': {
    '1. open': '8.7500',
    '2. high': '10.3700',
    '3. low': '8.4200',
    '4. close': '9.8450',
    '5. volume': '10799400'
  },
  '2018-12-28': {
    '1. open': '10.7100',
    '2. high': '10.8400',
    '3. low': '8.3250',
    '4. close': '8.7400',
    '5. volume': '11331635'
  },
  '2018-11-30': {
    '1. open': '11.7700',
    '2. high': '12.9900',
    '3. low': '10.4100',
    '4. close': '10.5200',
    '5. volume': '8098585'
  },
  '2018-10-31': {
    '1. open': '12.8200',
    '2. high': '13.3300',
    '3. low': '11.2800',
    '4. close': '11.7500',
    '5. volume': '8490584'
  },
  '2018-09-28': {
    '1. open': '12.6600',
    '2. high': '13.1300',
    '3. low': '12.3700',
    '4. close': '12.9000',
    '5. volume': '5825220'
  },
  '2018-08-31': {
    '1. open': '13.4400',
    '2. high': '13.5900',
    '3. low': '12.5400',
    '4. close': '12.6000',
    '5. volume': '6861280'
  },
  '2018-07-31': {
    '1. open': '11.9100',
    '2. high': '13.6700',
    '3. low': '11.6500',
    '4. close': '13.4000',
    '5. volume': '11347625'
  },
  '2018-06-29': {
    '1. open': '13.2100',
    '2. high': '13.9200',
    '3. low': '11.6700',
    '4. close': '12.0100',
    '5. volume': '14158804'
  },
  '2018-05-31': {
    '1. open': '13.4800',
    '2. high': '13.8000',
    '3. low': '12.7700',
    '4. close': '13.0500',
    '5. volume': '14596415'
  },
  '2018-04-30': {
    '1. open': '12.7100',
    '2. high': '13.5300',
    '3. low': '12.1100',
    '4. close': '13.4400',
    '5. volume': '7907057'
  },
  '2018-03-29': {
    '1. open': '14.2600',
    '2. high': '14.4800',
    '3. low': '12.2700',
    '4. close': '12.8000',
    '5. volume': '10257871'
  },
  '2018-02-28': {
    '1. open': '15.0000',
    '2. high': '15.1300',
    '3. low': '13.3800',
    '4. close': '14.3300',
    '5. volume': '6891427'
  },
  '2018-01-31': {
    '1. open': '13.4900',
    '2. high': '15.5000',
    '3. low': '13.1400',
    '4. close': '14.8700',
    '5. volume': '7472807'
  },
  '2017-12-29': {
    '1. open': '12.9850',
    '2. high': '13.9400',
    '3. low': '12.5950',
    '4. close': '13.3600',
    '5. volume': '6141753'
  },
  '2017-11-30': {
    '1. open': '12.3300',
    '2. high': '13.3800',
    '3. low': '11.7200',
    '4. close': '12.9850',
    '5. volume': '8666040'
  },
  '2017-10-31': {
    '1. open': '12.7500',
    '2. high': '13.0000',
    '3. low': '12.2450',
    '4. close': '12.3250',
    '5. volume': '5029921'
  },
  '2017-09-29': {
    '1. open': '11.8650',
    '2. high': '12.7000',
    '3. low': '11.6250',
    '4. close': '12.6600',
    '5. volume': '7850144'
  },
  '2017-08-31': {
    '1. open': '11.1900',
    '2. high': '12.1900',
    '3. low': '10.9000',
    '4. close': '11.8400',
    '5. volume': '8862488'
  },
  '2017-07-31': {
    '1. open': '10.9800',
    '2. high': '11.4950',
    '3. low': '10.8150',
    '4. close': '11.1450',
    '5. volume': '6599255'
  },
  '2017-06-30': {
    '1. open': '11.4500',
    '2. high': '11.7250',
    '3. low': '10.3500',
    '4. close': '10.7950',
    '5. volume': '9805330'
  },
  '2017-05-31': {
    '1. open': '12.3650',
    '2. high': '12.9400',
    '3. low': '11.3100',
    '4. close': '11.3450',
    '5. volume': '14774052'
  },
  '2017-04-28': {
    '1. open': '11.7800',
    '2. high': '12.3450',
    '3. low': '11.5000',
    '4. close': '12.3000',
    '5. volume': '7178085'
  },
  '2017-03-31': {
    '1. open': '10.0700',
    '2. high': '11.8700',
    '3. low': '10.0400',
    '4. close': '11.6550',
    '5. volume': '10550665'
  },
  '2017-02-28': {
    '1. open': '9.5150',
    '2. high': '10.1850',
    '3. low': '9.2530',
    '4. close': '10.0000',
    '5. volume': '5336462'
  },
  '2017-01-31': {
    '1. open': '9.1200',
    '2. high': '9.8780',
    '3. low': '9.0470',
    '4. close': '9.4110',
    '5. volume': '5917279'
  },
  '2016-12-30': {
    '1. open': '9.7830',
    '2. high': '10.2450',
    '3. low': '8.5360',
    '4. close': '9.1200',
    '5. volume': '9571431'
  },
  '2016-11-30': {
    '1. open': '9.3680',
    '2. high': '10.5400',
    '3. low': '8.8630',
    '4. close': '9.7900',
    '5. volume': '7684381'
  },
  '2016-10-31': {
    '1. open': '8.3470',
    '2. high': '9.6400',
    '3. low': '8.3340',
    '4. close': '9.3580',
    '5. volume': '5423348'
  },
  '2016-09-30': {
    '1. open': '8.7290',
    '2. high': '9.0550',
    '3. low': '7.8790',
    '4. close': '8.3200',
    '5. volume': '5733483'
  },
  '2016-08-31': {
    '1. open': '8.6300',
    '2. high': '9.0000',
    '3. low': '8.0110',
    '4. close': '8.7150',
    '5. volume': '8899638'
  },
  '2016-07-29': {
    '1. open': '8.9600',
    '2. high': '9.1770',
    '3. low': '7.8700',
    '4. close': '8.5800',
    '5. volume': '7357299'
  },
  '2016-06-30': {
    '1. open': '10.3450',
    '2. high': '10.3450',
    '3. low': '8.3110',
    '4. close': '8.8500',
    '5. volume': '10121988'
  },
  '2016-05-31': {
    '1. open': '9.3000',
    '2. high': '10.8650',
    '3. low': '8.5210',
    '4. close': '10.2600',
    '5. volume': '8722153'
  },
  '2016-04-29': {
    '1. open': '8.8900',
    '2. high': '9.3190',
    '3. low': '8.5450',
    '4. close': '9.2000',
    '5. volume': '6289922'
  },
  '2016-03-31': {
    '1. open': '8.4210',
    '2. high': '9.9000',
    '3. low': '8.3200',
    '4. close': '9.0000',
    '5. volume': '6408931'
  },
  '2016-02-29': {
    '1. open': '9.6280',
    '2. high': '9.6390',
    '3. low': '7.2900',
    '4. close': '8.3470',
    '5. volume': '7334246'
  },
  '2016-01-29': {
    '1. open': '11.1900',
    '2. high': '11.1900',
    '3. low': '9.3750',
    '4. close': '9.5430',
    '5. volume': '3750394'
  },
  '2015-12-30': {
    '1. open': '10.8600',
    '2. high': '11.3000',
    '3. low': '10.2500',
    '4. close': '11.2000',
    '5. volume': '6336904'
  },
  '2015-11-30': {
    '1. open': '11.2000',
    '2. high': '11.2500',
    '3. low': '10.3450',
    '4. close': '10.9500',
    '5. volume': '5791634'
  },
  '2015-10-30': {
    '1. open': '10.4500',
    '2. high': '11.3300',
    '3. low': '10.2300',
    '4. close': '11.2000',
    '5. volume': '2848426'
  },
  '2015-09-30': {
    '1. open': '11.8700',
    '2. high': '11.9000',
    '3. low': '10.2200',
    '4. close': '10.4000',
    '5. volume': '5772176'
  },
  '2015-08-31': {
    '1. open': '11.9550',
    '2. high': '12.3500',
    '3. low': '10.7550',
    '4. close': '11.8800',
    '5. volume': '4687004'
  }
};

// tslint:disable:max-line-length
export const pbbCompany: Company = {
  id: 1072,
  name: 'Deutsche Pfandbriefbank AG',
  country: Country.Deutschland,
  city: 'Garching',
  url: 'http://www.pfandbriefbank.com/',
  description: 'Die Deutsche Pfandbriefbank AG (werbliche Kurzbezeichnung pbb) ist ein deutsches Kreditinstitut mit Sitz in Garching bei München. Es ist aus der Fusion verschiedener Handelsbanken und Hypothekenbanken hervorgegangen. Gründungsinstitut war am 12. April 1869 die Bayerische Handelsbank AG (später umfirmiert zuerst in HVB Real Estate Bank AG, später in Hypo Real Estate Bank AG) auf welche ab 2001 die Nürnberger Hypothekenbank AG und die Süddeutsche Bodencreditbank AG verschmolzen wurden.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Deutsche_Pfandbriefbank',
  logo: 'https://www.pfandbriefbank.com/typo3conf/ext/pbb_distribution/Resources/Public/Images/pbb.svg',
  products: [],
  industries: [141011],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE0008019001',
  wkn: '801900',
  symbol: 'PBB.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Spezialbank', 'Finanzierung', 'Immobilienfinanzierung', 'Baufinanzierung', 'öffentlichen Investitionen']
};
// tslint:enable:max-line-length

