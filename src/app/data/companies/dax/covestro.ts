import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { Company } from '../../../interfaces/company';
import { SecurityType } from '../../../enums/securityType';

const covestroDividends = [
  {year: 2018, rate: 2.40, yield: 5.56}, {year: 2017, rate: 2.20}, {year: 2016, rate: 1.35}, {
    year: 2015,
    rate: 0.70,
    yield: 2.06
  }
];

const covestroPrices = {
  '2019-11-08': {
    '1. open': '43.2100',
    '2. high': '47.1700',
    '3. low': '43.1400',
    '4. close': '46.6900',
    '5. volume': '8779784'
  },
  '2019-10-31': {
    '1. open': '45.6600',
    '2. high': '48.1800',
    '3. low': '41.7800',
    '4. close': '43.0500',
    '5. volume': '28219225'
  },
  '2019-09-30': {
    '1. open': '41.2200',
    '2. high': '46.0700',
    '3. low': '39.9700',
    '4. close': '45.4000',
    '5. volume': '25609521'
  },
  '2019-08-30': {
    '1. open': '40.6000',
    '2. high': '41.6100',
    '3. low': '37.3000',
    '4. close': '41.1900',
    '5. volume': '25809580'
  },
  '2019-07-31': {
    '1. open': '45.9300',
    '2. high': '46.3600',
    '3. low': '40.0200',
    '4. close': '41.1100',
    '5. volume': '30443105'
  },
  '2019-06-28': {
    '1. open': '38.5300',
    '2. high': '44.9200',
    '3. low': '38.4300',
    '4. close': '44.7100',
    '5. volume': '26349097'
  },
  '2019-05-31': {
    '1. open': '48.9000',
    '2. high': '48.9000',
    '3. low': '38.9200',
    '4. close': '39.2300',
    '5. volume': '34808149'
  },
  '2019-04-30': {
    '1. open': '49.6100',
    '2. high': '55.7800',
    '3. low': '48.5800',
    '4. close': '48.7500',
    '5. volume': '26028227'
  },
  '2019-03-29': {
    '1. open': '50.7000',
    '2. high': '51.9400',
    '3. low': '45.9500',
    '4. close': '49.0200',
    '5. volume': '31041691'
  },
  '2019-02-28': {
    '1. open': '48.3600',
    '2. high': '52.0800',
    '3. low': '46.8600',
    '4. close': '50.1400',
    '5. volume': '27530647'
  },
  '2019-01-31': {
    '1. open': '43.1500',
    '2. high': '52.0800',
    '3. low': '41.4900',
    '4. close': '48.1800',
    '5. volume': '31004703'
  },
  '2018-12-28': {
    '1. open': '53.0000',
    '2. high': '53.1400',
    '3. low': '41.4200',
    '4. close': '43.1800',
    '5. volume': '26523820'
  },
  '2018-11-30': {
    '1. open': '57.1000',
    '2. high': '61.4800',
    '3. low': '46.7600',
    '4. close': '50.8600',
    '5. volume': '39180575'
  },
  '2018-10-31': {
    '1. open': '70.2000',
    '2. high': '71.7400',
    '3. low': '50.6000',
    '4. close': '57.1200',
    '5. volume': '35607316'
  },
  '2018-09-28': {
    '1. open': '73.1200',
    '2. high': '74.0000',
    '3. low': '67.9200',
    '4. close': '69.8600',
    '5. volume': '20129503'
  },
  '2018-08-31': {
    '1. open': '82.3800',
    '2. high': '82.4800',
    '3. low': '73.1800',
    '4. close': '73.3800',
    '5. volume': '16124476'
  },
  '2018-07-31': {
    '1. open': '75.2600',
    '2. high': '83.9800',
    '3. low': '73.2400',
    '4. close': '82.1000',
    '5. volume': '17577227'
  },
  '2018-06-29': {
    '1. open': '78.0800',
    '2. high': '80.2400',
    '3. low': '71.4200',
    '4. close': '76.4200',
    '5. volume': '26757518'
  },
  '2018-05-31': {
    '1. open': '75.2600',
    '2. high': '80.7400',
    '3. low': '74.3800',
    '4. close': '77.9400',
    '5. volume': '31355476'
  },
  '2018-04-30': {
    '1. open': '79.0000',
    '2. high': '82.8000',
    '3. low': '73.5000',
    '4. close': '75.5600',
    '5. volume': '19939891'
  },
  '2018-03-29': {
    '1. open': '94.1200',
    '2. high': '94.2400',
    '3. low': '78.8200',
    '4. close': '79.8600',
    '5. volume': '25287149'
  },
  '2018-02-28': {
    '1. open': '93.2000',
    '2. high': '95.7600',
    '3. low': '81.3800',
    '4. close': '93.3400',
    '5. volume': '18425933'
  },
  '2018-01-31': {
    '1. open': '86.1400',
    '2. high': '95.7800',
    '3. low': '84.6200',
    '4. close': '92.5800',
    '5. volume': '22174169'
  },
  '2017-12-29': {
    '1. open': '87.7400',
    '2. high': '88.6700',
    '3. low': '81.9500',
    '4. close': '86.0300',
    '5. volume': '10454075'
  },
  '2017-11-30': {
    '1. open': '83.4100',
    '2. high': '88.4100',
    '3. low': '79.3900',
    '4. close': '87.5000',
    '5. volume': '12303529'
  },
  '2017-10-31': {
    '1. open': '72.8900',
    '2. high': '83.5000',
    '3. low': '70.3000',
    '4. close': '82.3600',
    '5. volume': '9113711'
  },
  '2017-09-29': {
    '1. open': '66.0800',
    '2. high': '75.7100',
    '3. low': '63.1700',
    '4. close': '72.7500',
    '5. volume': '15558328'
  },
  '2017-08-31': {
    '1. open': '65.8700',
    '2. high': '70.0000',
    '3. low': '64.4400',
    '4. close': '66.0100',
    '5. volume': '8318711'
  },
  '2017-07-31': {
    '1. open': '63.3000',
    '2. high': '67.7400',
    '3. low': '62.6100',
    '4. close': '65.6200',
    '5. volume': '10709545'
  },
  '2017-06-30': {
    '1. open': '66.5700',
    '2. high': '68.3800',
    '3. low': '61.9500',
    '4. close': '63.2100',
    '5. volume': '18103211'
  },
  '2017-05-31': {
    '1. open': '72.0900',
    '2. high': '72.8100',
    '3. low': '64.5100',
    '4. close': '66.5800',
    '5. volume': '11054363'
  },
  '2017-04-28': {
    '1. open': '72.3000',
    '2. high': '76.4600',
    '3. low': '70.0700',
    '4. close': '71.5600',
    '5. volume': '8310126'
  },
  '2017-03-31': {
    '1. open': '65.0000',
    '2. high': '73.1600',
    '3. low': '65.0000',
    '4. close': '72.1600',
    '5. volume': '19949234'
  },
  '2017-02-28': {
    '1. open': '69.6300',
    '2. high': '73.2700',
    '3. low': '67.8200',
    '4. close': '71.0700',
    '5. volume': '8137807'
  },
  '2017-01-31': {
    '1. open': '64.8800',
    '2. high': '71.1900',
    '3. low': '61.0700',
    '4. close': '69.4900',
    '5. volume': '9338182'
  },
  '2016-12-30': {
    '1. open': '60.9800',
    '2. high': '67.9100',
    '3. low': '59.2500',
    '4. close': '65.1800',
    '5. volume': '8863985'
  },
  '2016-11-30': {
    '1. open': '54.2700',
    '2. high': '60.9100',
    '3. low': '53.4100',
    '4. close': '60.6300',
    '5. volume': '9933457'
  },
  '2016-10-31': {
    '1. open': '54.0000',
    '2. high': '55.6500',
    '3. low': '50.5600',
    '4. close': '53.8400',
    '5. volume': '11381338'
  },
  '2016-09-30': {
    '1. open': '46.8500',
    '2. high': '52.8000',
    '3. low': '41.7250',
    '4. close': '52.6300',
    '5. volume': '11758437'
  },
  '2016-08-31': {
    '1. open': '41.9450',
    '2. high': '48.1500',
    '3. low': '41.5850',
    '4. close': '46.6800',
    '5. volume': '7072310'
  },
  '2016-07-29': {
    '1. open': '40.0000',
    '2. high': '42.7400',
    '3. low': '38.2900',
    '4. close': '41.7800',
    '5. volume': '10473409'
  },
  '2016-06-30': {
    '1. open': '38.2000',
    '2. high': '43.2400',
    '3. low': '36.7350',
    '4. close': '39.9450',
    '5. volume': '18525960'
  },
  '2016-05-31': {
    '1. open': '34.8250',
    '2. high': '38.1500',
    '3. low': '33.6300',
    '4. close': '38.1100',
    '5. volume': '17765794'
  },
  '2016-04-29': {
    '1. open': '32.8750',
    '2. high': '35.6900',
    '3. low': '30.7600',
    '4. close': '34.5200',
    '5. volume': '8861399'
  },
  '2016-03-31': {
    '1. open': '29.3850',
    '2. high': '33.9300',
    '3. low': '28.5900',
    '4. close': '32.9600',
    '5. volume': '5967319'
  },
  '2016-02-29': {
    '1. open': '30.3000',
    '2. high': '31.1100',
    '3. low': '24.5050',
    '4. close': '29.5000',
    '5. volume': '6624378'
  },
  '2016-01-29': {
    '1. open': '33.5000',
    '2. high': '34.1300',
    '3. low': '28.7800',
    '4. close': '30.4000',
    '5. volume': '5145395'
  },
  '2015-12-30': {
    '1. open': '34.9700',
    '2. high': '35.5500',
    '3. low': '32.0500',
    '4. close': '33.6350',
    '5. volume': '5009411'
  },
  '2015-11-30': {
    '1. open': '27.8750',
    '2. high': '35.6500',
    '3. low': '27.2700',
    '4. close': '34.7350',
    '5. volume': '6130372'
  }
};

// tslint:disable:max-line-length
export const covestroCompany: Company = {
  id: 1007,
  name: 'Covestro',
  country: Country.Deutschland,
  city: 'Leverkusen',
  url: 'https://www.covestro.com/',
  description: 'Die Covestro AG ist ein börsennotierter Werkstoffhersteller mit Sitz in Leverkusen. Das Unternehmen ist 2015 aus der ehemaligen Kunststoffsparte der Bayer AG hervorgegangen und firmierte bis dahin unter Bayer MaterialScience; es entwickelt, produziert und vertreibt Polymer-Werkstoffe an etwa 30 Standorten in Europa, Asien und Amerika. 2018 erzielte das Unternehmen einen Jahresumsatz von 14,6 Milliarden Euro',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Covestro',
  logo: 'https://www.covestro.com/-/media/covestro/shared-library/logo/covestro-logo.png?la=de&hash=07D75E282471081C7E0E2D1CE0EC9B5B651EE665',
  products: [
    {
      id: 100710,
      name: 'Makrolon'
    }
  ],
  industries: [171011, 171012],
  securityType: SecurityType.Inhaberaktie,
  currency: Currency.EUR,
  isin: 'DE0006062144',
  wkn: '606214',
  symbol: '1COV.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [
    {
      name: 'COVESTRO AG SP.ADR 1/2',
      isin: 'US22304D2071',
      securityType: SecurityType.ADR
    }
  ],
  current_indices: [Indices.DAX],
  end_of_month_prices: covestroPrices,
  dividends: covestroDividends,
  tags: ['Polymerwerkstoffe', 'Polycarbonat', 'Klebstoffe', 'Lacke', 'Bindemittel']
};
// tslint:enable:max-line-length
