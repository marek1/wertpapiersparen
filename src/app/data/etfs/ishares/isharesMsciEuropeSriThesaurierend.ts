import { Country } from '../../../enums/country';
import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { findCompaniesInIndex } from '../../companies';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';
import { SecurityType } from '../../../enums/securityType';

const prices = {
  '2020-01-03': {
    '1. open': '49.3500',
    '2. high': '49.3500',
    '3. low': '48.9950',
    '4. close': '49.2100',
    '5. volume': '72179'
  },
  '2018-09-13': {
    '1. open': '41.9300',
    '2. high': '42.1350',
    '3. low': '40.9200',
    '4. close': '41.4550',
    '5. volume': '28388'
  },
  '2018-08-31': {
    '1. open': '42.5550',
    '2. high': '42.5550',
    '3. low': '41.3800',
    '4. close': '41.9350',
    '5. volume': '78995'
  },
  '2018-07-31': {
    '1. open': '40.8200',
    '2. high': '42.5250',
    '3. low': '40.7400',
    '4. close': '42.4850',
    '5. volume': '61834'
  },
  '2018-06-29': {
    '1. open': '41.4700',
    '2. high': '42.4150',
    '3. low': '40.7800',
    '4. close': '41.1875',
    '5. volume': '137396'
  },
  '2018-05-30': {
    '1. open': '41.3200',
    '2. high': '42.7200',
    '3. low': '41.1300',
    '4. close': '41.4800',
    '5. volume': '98527'
  },
  '2018-04-30': {
    '1. open': '39.1650',
    '2. high': '41.2350',
    '3. low': '38.7300',
    '4. close': '41.1700',
    '5. volume': '97262'
  },
  '2018-03-29': {
    '1. open': '39.7600',
    '2. high': '39.9150',
    '3. low': '38.3150',
    '4. close': '39.2600',
    '5. volume': '154565'
  },
  '2018-02-28': {
    '1. open': '41.5550',
    '2. high': '41.5550',
    '3. low': '38.5500',
    '4. close': '39.8700',
    '5. volume': '145964'
  },
  '2018-01-31': {
    '1. open': '41.1400',
    '2. high': '42.0600',
    '3. low': '40.5950',
    '4. close': '41.3550',
    '5. volume': '69401'
  },
  '2017-12-29': {
    '1. open': '40.9000',
    '2. high': '41.4500',
    '3. low': '40.4200',
    '4. close': '40.9000',
    '5. volume': '61444'
  },
  '2017-11-30': {
    '1. open': '41.7300',
    '2. high': '41.7300',
    '3. low': '40.1000',
    '4. close': '40.7800',
    '5. volume': '35947'
  },
  '2017-10-31': {
    '1. open': '40.7800',
    '2. high': '41.3800',
    '3. low': '40.4400',
    '4. close': '41.3200',
    '5. volume': '74654'
  },
  '2017-09-29': {
    '1. open': '39.5700',
    '2. high': '40.6900',
    '3. low': '39.1600',
    '4. close': '40.6900',
    '5. volume': '68007'
  },
  '2017-08-31': {
    '1. open': '39.8100',
    '2. high': '40.1200',
    '3. low': '38.9200',
    '4. close': '39.3600',
    '5. volume': '40712'
  },
  '2017-07-31': {
    '1. open': '39.8200',
    '2. high': '40.3100',
    '3. low': '39.4000',
    '4. close': '39.5000',
    '5. volume': '30087'
  },
  '2017-06-30': {
    '1. open': '40.7500',
    '2. high': '46.0000',
    '3. low': '39.4800',
    '4. close': '39.4800',
    '5. volume': '50571'
  },
  '2017-05-31': {
    '1. open': '40.2900',
    '2. high': '41.0500',
    '3. low': '40.2900',
    '4. close': '40.6300',
    '5. volume': '77196'
  },
  '2017-04-28': {
    '1. open': '39.3500',
    '2. high': '40.1600',
    '3. low': '38.9500',
    '4. close': '40.0200',
    '5. volume': '37710'
  },
  '2017-03-31': {
    '1. open': '38.0700',
    '2. high': '39.2100',
    '3. low': '37.9000',
    '4. close': '39.2100',
    '5. volume': '69683'
  },
  '2017-02-28': {
    '1. open': '36.5900',
    '2. high': '37.9600',
    '3. low': '36.3600',
    '4. close': '37.5900',
    '5. volume': '18475'
  },
  '2017-01-31': {
    '1. open': '36.6800',
    '2. high': '37.0700',
    '3. low': '36.3000',
    '4. close': '36.3000',
    '5. volume': '77133'
  },
  '2016-12-30': {
    '1. open': '34.6900',
    '2. high': '36.7100',
    '3. low': '34.4000',
    '4. close': '36.7100',
    '5. volume': '50415'
  },
  '2016-11-30': {
    '1. open': '34.7100',
    '2. high': '34.9700',
    '3. low': '33.7100',
    '4. close': '34.9500',
    '5. volume': '32747'
  },
  '2016-10-31': {
    '1. open': '35.9600',
    '2. high': '35.9600',
    '3. low': '34.5100',
    '4. close': '34.8400',
    '5. volume': '19399'
  },
  '2016-09-30': {
    '1. open': '35.9400',
    '2. high': '36.7900',
    '3. low': '35.2400',
    '4. close': '35.8300',
    '5. volume': '75285'
  },
  '2016-08-31': {
    '1. open': '35.2500',
    '2. high': '36.1800',
    '3. low': '34.7300',
    '4. close': '35.8600',
    '5. volume': '69686'
  },
  '2016-07-29': {
    '1. open': '33.5200',
    '2. high': '35.5200',
    '3. low': '33.3000',
    '4. close': '35.5000',
    '5. volume': '92843'
  },
  '2016-06-27': {
    '1. open': '35.3800',
    '2. high': '35.6800',
    '3. low': '31.9000',
    '4. close': '31.9000',
    '5. volume': '28947'
  },
  '2016-05-31': {
    '1. open': '34.5400',
    '2. high': '36.0700',
    '3. low': '33.6000',
    '4. close': '35.7100',
    '5. volume': '2088'
  },
  '2016-04-29': {
    '1. open': '35.2100',
    '2. high': '35.4600',
    '3. low': '34.6000',
    '4. close': '34.6000',
    '5. volume': '400'
  },
  '2016-03-16': {
    '1. open': '34.2200',
    '2. high': '34.3000',
    '3. low': '34.1100',
    '4. close': '34.1700',
    '5. volume': '1314'
  },
  '2016-02-29': {
    '1. open': '34.3800',
    '2. high': '34.3800',
    '3. low': '31.1100',
    '4. close': '33.4800',
    '5. volume': '8989'
  },
  '2016-01-27': {
    '1. open': '36.2400',
    '2. high': '36.2400',
    '3. low': '32.2100',
    '4. close': '34.1400',
    '5. volume': '18054'
  },
  '2015-12-30': {
    '1. open': '35.4700',
    '2. high': '37.1200',
    '3. low': '35.4700',
    '4. close': '36.9400',
    '5. volume': '14338'
  },
  '2015-11-23': {
    '1. open': '38.4600',
    '2. high': '38.7000',
    '3. low': '37.2300',
    '4. close': '38.3500',
    '5. volume': '1936'
  },
  '2015-10-23': {
    '1. open': '35.4000',
    '2. high': '38.3700',
    '3. low': '35.0700',
    '4. close': '38.3700',
    '5. volume': '675'
  },
  '2015-09-29': {
    '1. open': '35.7500',
    '2. high': '36.6400',
    '3. low': '34.2800',
    '4. close': '34.2800',
    '5. volume': '16281'
  },
  '2015-08-31': {
    '1. open': '39.2200',
    '2. high': '39.4000',
    '3. low': '35.3600',
    '4. close': '36.5900',
    '5. volume': '103030'
  },
  '2015-07-30': {
    '1. open': '39.1400',
    '2. high': '41.0500',
    '3. low': '37.5100',
    '4. close': '39.9700',
    '5. volume': '75453'
  },
  '2015-06-26': {
    '1. open': '40.3800',
    '2. high': '40.4700',
    '3. low': '38.6300',
    '4. close': '40.0600',
    '5. volume': '16543'
  },
  '2015-05-29': {
    '1. open': '40.2200',
    '2. high': '41.2100',
    '3. low': '39.9100',
    '4. close': '40.3500',
    '5. volume': '7010'
  },
  '2015-04-27': {
    '1. open': '41.3400',
    '2. high': '41.4400',
    '3. low': '40.6000',
    '4. close': '41.4400',
    '5. volume': '191'
  },
  '2015-03-27': {
    '1. open': '38.6500',
    '2. high': '40.3000',
    '3. low': '38.6100',
    '4. close': '39.6500',
    '5. volume': '19731'
  },
  '2015-02-26': {
    '1. open': '35.8100',
    '2. high': '38.5600',
    '3. low': '35.8100',
    '4. close': '38.5600',
    '5. volume': '12366'
  },
  '2015-01-30': {
    '1. open': '33.0200',
    '2. high': '36.7000',
    '3. low': '32.7400',
    '4. close': '36.2100',
    '5. volume': '550'
  },
  '2014-12-09': {
    '1. open': '34.3400',
    '2. high': '34.6800',
    '3. low': '33.8200',
    '4. close': '33.8200',
    '5. volume': '0'
  },
  '2014-11-26': {
    '1. open': '33.5500',
    '2. high': '34.6000',
    '3. low': '33.3000',
    '4. close': '34.4500',
    '5. volume': '28446'
  },
  '2014-10-31': {
    '1. open': '32.5600',
    '2. high': '33.6100',
    '3. low': '30.9200',
    '4. close': '33.6100',
    '5. volume': '9454'
  },
  '2014-09-18': {
    '1. open': '34.4500',
    '2. high': '34.7400',
    '3. low': '34.4500',
    '4. close': '34.7400',
    '5. volume': '0'
  },
  '2014-08-29': {
    '1. open': '32.9900',
    '2. high': '34.0800',
    '3. low': '32.4800',
    '4. close': '34.0000',
    '5. volume': '35520'
  },
  '2014-07-30': {
    '1. open': '34.1300',
    '2. high': '34.5800',
    '3. low': '33.3100',
    '4. close': '33.8900',
    '5. volume': '24414'
  },
  '2014-06-27': {
    '1. open': '34.1600',
    '2. high': '34.4800',
    '3. low': '33.8200',
    '4. close': '33.8200',
    '5. volume': '5716'
  },
  '2014-05-05': {
    '1. open': '33.0600',
    '2. high': '33.0600',
    '3. low': '32.9200',
    '4. close': '32.9200',
    '5. volume': '100'
  },
  '2014-04-10': {
    '1. open': '32.6800',
    '2. high': '33.3000',
    '3. low': '32.3400',
    '4. close': '32.3400',
    '5. volume': '4955'
  },
  '2014-03-31': {
    '1. open': '32.3500',
    '2. high': '32.5100',
    '3. low': '31.2600',
    '4. close': '32.4100',
    '5. volume': '212'
  },
  '2014-02-28': {
    '1. open': '31.2700',
    '2. high': '32.3800',
    '3. low': '31.2700',
    '4. close': '32.3800',
    '5. volume': '410'
  },
  '2014-01-27': {
    '1. open': '31.1000',
    '2. high': '31.8900',
    '3. low': '30.6600',
    '4. close': '30.6600',
    '5. volume': '65'
  },
  '2013-12-30': {
    '1. open': '30.3100',
    '2. high': '31.1400',
    '3. low': '30.3100',
    '4. close': '31.1400',
    '5. volume': '1'
  },
  '2013-11-21': {
    '1. open': '30.7500',
    '2. high': '30.7800',
    '3. low': '30.6500',
    '4. close': '30.7600',
    '5. volume': '463'
  },
  '2013-09-26': {
    '1. open': '29.7200',
    '2. high': '29.8600',
    '3. low': '29.7200',
    '4. close': '29.8400',
    '5. volume': '0'
  },
  '2013-08-19': {
    '1. open': '28.9100',
    '2. high': '28.9600',
    '3. low': '28.8400',
    '4. close': '28.9300',
    '5. volume': '11055'
  },
  '2013-07-25': {
    '1. open': '27.4200',
    '2. high': '28.3800',
    '3. low': '27.3000',
    '4. close': '28.3700',
    '5. volume': '0'
  },
  '2013-06-21': {
    '1. open': '27.7800',
    '2. high': '27.9400',
    '3. low': '26.7000',
    '4. close': '26.7000',
    '5. volume': '1000'
  },
  '2013-05-30': {
    '1. open': '28.5000',
    '2. high': '29.3100',
    '3. low': '28.5000',
    '4. close': '28.9200',
    '5. volume': '154'
  },
  '2013-04-26': {
    '1. open': '28.0400',
    '2. high': '28.0400',
    '3. low': '26.8800',
    '4. close': '27.9800',
    '5. volume': '0'
  },
  '2013-03-27': {
    '1. open': '27.9300',
    '2. high': '27.9700',
    '3. low': '27.5700',
    '4. close': '27.5700',
    '5. volume': '1850'
  },
  '2013-02-27': {
    '1. open': '27.2000',
    '2. high': '27.3700',
    '3. low': '26.7900',
    '4. close': '27.1600',
    '5. volume': '740'
  },
  '2013-01-28': {
    '1. open': '26.9300',
    '2. high': '27.5100',
    '3. low': '26.9300',
    '4. close': '27.2400',
    '5. volume': '14143'
  },
  '2012-12-13': {
    '1. open': '26.3000',
    '2. high': '26.3000',
    '3. low': '26.2700',
    '4. close': '26.2700',
    '5. volume': '1500'
  },
  '2012-11-30': {
    '1. open': '25.4100',
    '2. high': '25.7800',
    '3. low': '24.5100',
    '4. close': '25.7800',
    '5. volume': '0'
  },
  '2012-10-22': {
    '1. open': '25.2800',
    '2. high': '25.8200',
    '3. low': '25.2800',
    '4. close': '25.5600',
    '5. volume': '0'
  },
  '2012-09-26': {
    '1. open': '25.1400',
    '2. high': '25.4000',
    '3. low': '25.0800',
    '4. close': '25.0800',
    '5. volume': '0'
  },
  '2012-08-31': {
    '1. open': '24.4700',
    '2. high': '25.0700',
    '3. low': '24.4400',
    '4. close': '24.4400',
    '5. volume': '0'
  },
  '2012-07-27': {
    '1. open': '23.3500',
    '2. high': '23.6500',
    '3. low': '22.9200',
    '4. close': '23.6500',
    '5. volume': '107'
  },
  '2012-06-11': {
    '1. open': '21.3000',
    '2. high': '22.0200',
    '3. low': '21.3000',
    '4. close': '21.9100',
    '5. volume': '107'
  },
  '2012-05-28': {
    '1. open': '22.7400',
    '2. high': '22.7400',
    '3. low': '21.8800',
    '4. close': '21.8800',
    '5. volume': '0'
  },
  '2012-04-25': {
    '1. open': '23.8200',
    '2. high': '23.8200',
    '3. low': '22.9500',
    '4. close': '23.2100',
    '5. volume': '0'
  },
  '2012-03-09': {
    '1. open': '24.0500',
    '2. high': '24.2600',
    '3. low': '24.0500',
    '4. close': '24.2600',
    '5. volume': '2278'
  },
  '2012-02-22': {
    '1. open': '23.4100',
    '2. high': '23.9500',
    '3. low': '23.4100',
    '4. close': '23.8000',
    '5. volume': '0'
  },
  '2012-01-26': {
    '1. open': '22.1200',
    '2. high': '23.2300',
    '3. low': '22.0300',
    '4. close': '23.2300',
    '5. volume': '50'
  },
  '2011-12-13': {
    '1. open': '21.2500',
    '2. high': '21.2500',
    '3. low': '21.2500',
    '4. close': '21.2500',
    '5. volume': '0'
  },
  '2011-11-17': {
    '1. open': '21.3000',
    '2. high': '21.3000',
    '3. low': '20.9300',
    '4. close': '20.9300',
    '5. volume': '0'
  },
  '2011-10-28': {
    '1. open': '21.4000',
    '2. high': '22.4800',
    '3. low': '21.4000',
    '4. close': '22.4700',
    '5. volume': '1650'
  }
};
// tslint:disable:max-line-length
export const isharesMsciEuropeSriThesaurierend: Etf = {
  id: 5005,
  name: 'iShares MSCI Europe SRI UCITS (thesaurierend)',
  description: 'Der Fonds ist bestrebt, die Performance eines Index nachzubilden, der sich aus europäischen ESG (umweltverträglich, sozial und staatlich)-überprüften Unternehmensanleihen zusammensetzt.',
  tracks: Indices.MSCIEuropeSRI,
  securityType: SecurityType.ETF,
  url: 'https://www.ishares.com/de/privatanleger/de/produkte/251767/',
  isin: 'IE00B52VJ196',
  symbol: 'IUSK.DE',
  smallestTradeableUnit: 1,
  currency: Currency.EUR,
  manager: 'BlackRock Asset Management Ireland Limited',
  issuer: 'iShares II plc',
  logo: 'https://www.ishares.com/uk-retail-assets/cache-1564149267000/images/media-bin/web/global/logos/logo-ishares.svg',
  country: Country.Irland,
  gewinn: 'thesaurierend',
  ter: 0.3,
  end_of_month_prices: prices,
  yields: [ // kumulativ
    20.57, 38.18, 40.19
  ],
  lastUpdate: '2019-12-26',
  shares: findCompaniesInIndex(Indices.MSCIEuropeSRI),
  sectors: [
    {name: IsharesIndustryNames.Financials, portion: 19.41},
    {name: IsharesIndustryNames.NichtzyklischeKonsumgueter, portion: 15.37},
    {name: IsharesIndustryNames.Industrie, portion: 14.87},
    {name: IsharesIndustryNames.Gesundheitsversorgung, portion: 13.41},
    {name: IsharesIndustryNames.ZyklischeKonsumgueter, portion: 10.12},
    {name: IsharesIndustryNames.IT, portion: 9.17},
    {name: IsharesIndustryNames.Materialien, portion: 8},
    {name: IsharesIndustryNames.Kommunikation, portion: 4.47},
    {name: IsharesIndustryNames.Versorger, portion: 2.06},
    {name: IsharesIndustryNames.Immobilien, portion: 1.87},
  ],
  countries: [
    {name: Country[Country.Deutschland], portion: 23.45},
    {name: Country[Country.Frankreich], portion: 16.63},
    {name: Country[Country.UK], portion: 13.91},
    {name: Country[Country.Niederlande], portion: 11.2},
    {name: Country[Country.Schweiz], portion: 10.9},
    {name: Country[Country.Dänemark], portion: 6.8},
    {name: Country[Country.Spanien], portion: 3.71},
    {name: Country[Country.Schweden], portion: 3.29},
    {name: Country[Country.Italien], portion: 2.62},
    {name: Country[Country.Irland], portion: 2.28}
  ],
  industries: [],
  tags: ['Anleihen', 'ESG', 'geprüft', 'umweltverträglich', 'sozial', 'staatlich'],
  savingPlans: [
    {
      broker: 'Trade Republic',
      minInvestment: 25,
      costs: 0
    }
  ]
};
// tslint:enable:max-line-length

