import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { Country } from '../../../enums/country';
import { Indices } from '../../../enums/indices';
import { findCompaniesInIndex } from '../../companies';
import { IsharesIndustryNames } from '../../../enums/isharesIndustryNames';
import { SecurityType } from '../../../enums/securityType';

const prices = {
  '2020-01-03': {
    '1. open': '44.9000',
    '2. high': '45.0580',
    '3. low': '44.7340',
    '4. close': '44.9920',
    '5. volume': '51571'
  },
  '2019-12-30': {
    '1. open': '44.5110',
    '2. high': '45.2660',
    '3. low': '43.2080',
    '4. close': '44.9210',
    '5. volume': '976388'
  },
  '2019-11-29': {
    '1. open': '43.4440',
    '2. high': '44.5900',
    '3. low': '43.3680',
    '4. close': '44.4020',
    '5. volume': '355859'
  },
  '2019-10-31': {
    '1. open': '42.0140',
    '2. high': '42.9140',
    '3. low': '41.0720',
    '4. close': '42.5350',
    '5. volume': '818955'
  },
  '2019-09-26': {
    '1. open': '41.3960',
    '2. high': '42.6440',
    '3. low': '41.2190',
    '4. close': '42.4220',
    '5. volume': '854883'
  },
  '2019-08-27': {
    '1. open': '39.9960',
    '2. high': '41.2150',
    '3. low': '39.4000',
    '4. close': '40.5660',
    '5. volume': '1023878'
  },
  '2019-07-31': {
    '1. open': '41.4040',
    '2. high': '42.5990',
    '3. low': '41.2000',
    '4. close': '42.1350',
    '5. volume': '788268'
  },
  '2019-06-28': {
    '1. open': '40.0870',
    '2. high': '41.2220',
    '3. low': '39.9640',
    '4. close': '40.6590',
    '5. volume': '453432'
  },
  '2019-05-30': {
    '1. open': '40.8070',
    '2. high': '41.2020',
    '3. low': '39.5820',
    '4. close': '39.7160',
    '5. volume': '715067'
  },
  '2018-09-13': {
    '1. open': '39.9690',
    '2. high': '40.0890',
    '3. low': '39.1960',
    '4. close': '39.3310',
    '5. volume': '401024'
  },
  '2018-08-31': {
    '1. open': '39.2870',
    '2. high': '40.1300',
    '3. low': '39.0000',
    '4. close': '39.8930',
    '5. volume': '1261296'
  },
  '2018-07-31': {
    '1. open': '37.8010',
    '2. high': '39.7020',
    '3. low': '37.8010',
    '4. close': '39.1910',
    '5. volume': '829085'
  },
  '2018-06-29': {
    '1. open': '38.4820',
    '2. high': '39.3590',
    '3. low': '37.8525',
    '4. close': '38.2640',
    '5. volume': '1399298'
  },
  '2018-05-30': {
    '1. open': '37.0670',
    '2. high': '38.8530',
    '3. low': '36.6460',
    '4. close': '38.5870',
    '5. volume': '1474078'
  },
  '2018-04-30': {
    '1. open': '35.9110',
    '2. high': '37.1500',
    '3. low': '35.6630',
    '4. close': '37.0930',
    '5. volume': '498490'
  },
  '2013-08-23': {
    '1. open': '24.3400',
    '2. high': '24.5900',
    '3. low': '23.5900',
    '4. close': '23.8800',
    '5. volume': '1562562'
  },
  '2013-07-31': {
    '1. open': '23.5400',
    '2. high': '24.5800',
    '3. low': '23.3600',
    '4. close': '24.2300',
    '5. volume': '4741739'
  },
  '2013-06-28': {
    '1. open': '23.9000',
    '2. high': '24.0500',
    '3. low': '22.5200',
    '4. close': '23.4700',
    '5. volume': '8050711'
  },
  '2013-05-31': {
    '1. open': '23.7100',
    '2. high': '25.3100',
    '3. low': '23.6500',
    '4. close': '24.2200',
    '5. volume': '4665901'
  },
  '2013-04-30': {
    '1. open': '23.5600',
    '2. high': '23.9300',
    '3. low': '22.9100',
    '4. close': '23.7700',
    '5. volume': '2717704'
  },
  '2013-03-28': {
    '1. open': '22.6400',
    '2. high': '23.7100',
    '3. low': '22.5900',
    '4. close': '23.6700',
    '5. volume': '5934593'
  },
  '2013-02-28': {
    '1. open': '21.9200',
    '2. high': '22.7100',
    '3. low': '21.8900',
    '4. close': '22.7100',
    '5. volume': '3241892'
  },
  '2013-01-31': {
    '1. open': '21.7100',
    '2. high': '22.2400',
    '3. low': '21.6000',
    '4. close': '21.9200',
    '5. volume': '2969237'
  },
  '2012-12-28': {
    '1. open': '21.4200',
    '2. high': '21.7300',
    '3. low': '21.1800',
    '4. close': '21.3400',
    '5. volume': '3109367'
  },
  '2012-11-30': {
    '1. open': '21.3000',
    '2. high': '21.8300',
    '3. low': '20.8000',
    '4. close': '21.3700',
    '5. volume': '4444654'
  },
  '2012-10-31': {
    '1. open': '21.6600',
    '2. high': '21.8200',
    '3. low': '21.1700',
    '4. close': '21.2600',
    '5. volume': '2902812'
  },
  '2012-09-28': {
    '1. open': '21.5400',
    '2. high': '21.9400',
    '3. low': '21.3600',
    '4. close': '21.6000',
    '5. volume': '4372754'
  },
  '2012-08-31': {
    '1. open': '21.6300',
    '2. high': '22.3400',
    '3. low': '21.4100',
    '4. close': '21.5800',
    '5. volume': '6119483'
  },
  '2012-07-31': {
    '1. open': '20.7900',
    '2. high': '21.8300',
    '3. low': '20.7500',
    '4. close': '21.6900',
    '5. volume': '3962275'
  },
  '2012-06-29': {
    '1. open': '20.1000',
    '2. high': '20.7000',
    '3. low': '19.5100',
    '4. close': '20.7000',
    '5. volume': '4939241'
  },
  '2012-05-31': {
    '1. open': '20.9500',
    '2. high': '20.9700',
    '3. low': '19.7400',
    '4. close': '20.1200',
    '5. volume': '4380074'
  },
  '2012-04-30': {
    '1. open': '20.9500',
    '2. high': '21.1200',
    '3. low': '20.3600',
    '4. close': '20.7400',
    '5. volume': '2996217'
  },
  '2012-03-30': {
    '1. open': '20.5500',
    '2. high': '21.3700',
    '3. low': '20.3900',
    '4. close': '20.9200',
    '5. volume': '2810572'
  },
  '2012-02-29': {
    '1. open': '20.1300',
    '2. high': '20.8900',
    '3. low': '20.1300',
    '4. close': '20.5900',
    '5. volume': '2904261'
  },
  '2012-01-31': {
    '1. open': '19.7000',
    '2. high': '20.3000',
    '3. low': '19.4000',
    '4. close': '20.0800',
    '5. volume': '4066634'
  },
  '2011-12-30': {
    '1. open': '18.6800',
    '2. high': '19.3900',
    '3. low': '18.4600',
    '4. close': '19.3900',
    '5. volume': '4541321'
  },
  '2011-11-30': {
    '1. open': '18.4200',
    '2. high': '18.7700',
    '3. low': '17.3800',
    '4. close': '18.6400',
    '5. volume': '4162024'
  },
  '2011-10-31': {
    '1. open': '17.0700',
    '2. high': '18.8600',
    '3. low': '16.7600',
    '4. close': '18.6300',
    '5. volume': '3583762'
  },
  '2011-09-30': {
    '1. open': '17.9400',
    '2. high': '18.1000',
    '3. low': '16.7800',
    '4. close': '17.5700',
    '5. volume': '3927972'
  },
  '2011-08-31': {
    '1. open': '19.5900',
    '2. high': '19.5900',
    '3. low': '16.5000',
    '4. close': '17.8400',
    '5. volume': '5934528'
  },
  '2011-07-29': {
    '1. open': '19.5400',
    '2. high': '20.1800',
    '3. low': '19.2000',
    '4. close': '19.4000',
    '5. volume': '3592787'
  },
  '2011-06-30': {
    '1. open': '19.9500',
    '2. high': '19.9900',
    '3. low': '18.8900',
    '4. close': '19.5400',
    '5. volume': '1353122'
  },
  '2011-05-31': {
    '1. open': '20.0800',
    '2. high': '20.3700',
    '3. low': '19.5800',
    '4. close': '19.9300',
    '5. volume': '2272579'
  },
  '2011-04-29': {
    '1. open': '20.1100',
    '2. high': '20.2400',
    '3. low': '19.5500',
    '4. close': '19.9300',
    '5. volume': '2304539'
  },
  '2011-03-31': {
    '1. open': '20.8700',
    '2. high': '20.9400',
    '3. low': '19.0200',
    '4. close': '20.0000',
    '5. volume': '1620577'
  },
  '2011-02-28': {
    '1. open': '20.3900',
    '2. high': '21.3800',
    '3. low': '20.3200',
    '4. close': '20.7900',
    '5. volume': '1906809'
  },
  '2011-01-31': {
    '1. open': '20.5500',
    '2. high': '21.2300',
    '3. low': '20.2300',
    '4. close': '20.3100',
    '5. volume': '2188298'
  },
  '2010-12-30': {
    '1. open': '19.5900',
    '2. high': '20.7300',
    '3. low': '19.5500',
    '4. close': '20.4800',
    '5. volume': '2532244'
  },
  '2010-11-30': {
    '1. open': '18.7600',
    '2. high': '19.5700',
    '3. low': '18.6900',
    '4. close': '19.4500',
    '5. volume': '1774315'
  },
  '2010-10-29': {
    '1. open': '18.4000',
    '2. high': '18.8200',
    '3. low': '18.2000',
    '4. close': '18.6900',
    '5. volume': '1840908'
  },
  '2010-09-30': {
    '1. open': '18.1800',
    '2. high': '19.1200',
    '3. low': '18.1200',
    '4. close': '18.4100',
    '5. volume': '2608516'
  },
  '2010-08-31': {
    '1. open': '18.5800',
    '2. high': '18.7900',
    '3. low': '17.9000',
    '4. close': '18.1000',
    '5. volume': '2995703'
  },
  '2010-07-30': {
    '1. open': '18.0000',
    '2. high': '18.7800',
    '3. low': '17.5500',
    '4. close': '18.4100',
    '5. volume': '2544311'
  },
  '2010-06-30': {
    '1. open': '18.8000',
    '2. high': '19.5300',
    '3. low': '18.2000',
    '4. close': '18.2500',
    '5. volume': '1651377'
  },
  '2010-05-31': {
    '1. open': '19.4700',
    '2. high': '19.8500',
    '3. low': '17.9600',
    '4. close': '18.8400',
    '5. volume': '2159386'
  },
  '2010-04-30': {
    '1. open': '19.2100',
    '2. high': '19.8600',
    '3. low': '19.0500',
    '4. close': '19.4800',
    '5. volume': '2218831'
  },
  '2010-03-31': {
    '1. open': '17.9300',
    '2. high': '19.5000',
    '3. low': '17.8600',
    '4. close': '19.0800',
    '5. volume': '6133554'
  },
  '2010-02-26': {
    '1. open': '17.3100',
    '2. high': '18.0600',
    '3. low': '17.0200',
    '4. close': '17.7400',
    '5. volume': '2867256'
  },
  '2010-01-29': {
    '1. open': '17.6300',
    '2. high': '18.1000',
    '3. low': '17.2600',
    '4. close': '17.4100',
    '5. volume': '1809157'
  },
  '2009-12-30': {
    '1. open': '16.6000',
    '2. high': '17.6500',
    '3. low': '16.6000',
    '4. close': '17.5300',
    '5. volume': '1066716'
  },
  '2009-11-30': {
    '1. open': '16.1200',
    '2. high': '16.9700',
    '3. low': '15.9800',
    '4. close': '16.3800',
    '5. volume': '1121148'
  },
  '2009-10-30': {
    '1. open': '16.5300',
    '2. high': '16.8900',
    '3. low': '15.9400',
    '4. close': '16.1400',
    '5. volume': '1609782'
  },
  '2009-09-30': {
    '1. open': '16.1700',
    '2. high': '16.7200',
    '3. low': '15.9400',
    '4. close': '16.4700',
    '5. volume': '2152285'
  },
  '2009-08-31': {
    '1. open': '15.9300',
    '2. high': '16.5400',
    '3. low': '15.8200',
    '4. close': '16.2400',
    '5. volume': '1375050'
  },
  '2009-07-31': {
    '1. open': '14.8800',
    '2. high': '16.1000',
    '3. low': '14.1600',
    '4. close': '15.8900',
    '5. volume': '1992629'
  },
  '2009-06-30': {
    '1. open': '15.0100',
    '2. high': '15.3700',
    '3. low': '14.3600',
    '4. close': '14.7800',
    '5. volume': '1001589'
  },
  '2009-05-29': {
    '1. open': '14.7700',
    '2. high': '15.5100',
    '3. low': '14.5100',
    '4. close': '14.7000',
    '5. volume': '3688596'
  },
  '2009-04-30': {
    '1. open': '13.1800',
    '2. high': '14.8000',
    '3. low': '12.9900',
    '4. close': '14.7500',
    '5. volume': '1213291'
  },
  '2009-03-31': {
    '1. open': '12.5700',
    '2. high': '13.5100',
    '3. low': '11.6300',
    '4. close': '13.1400',
    '5. volume': '2882656'
  },
  '2009-02-27': {
    '1. open': '14.0000',
    '2. high': '14.6500',
    '3. low': '12.6300',
    '4. close': '12.7500',
    '5. volume': '1717653'
  },
  '2009-01-30': {
    '1. open': '14.4400',
    '2. high': '15.5500',
    '3. low': '13.6300',
    '4. close': '14.1500',
    '5. volume': '1542274'
  }
};

// tslint:disable:max-line-length
export const isharesMsciWorldUsd: Etf = {
  id: 5007,
  name: 'iShares MSCI World UCITS ETF',
  description: 'Der Fonds strebt die Nachbildung der Wertentwicklung eines Index an, der aus Unternehmen aus Industrieländern besteht.',
  tracks: Indices.MSCIWorld,
  securityType: SecurityType.ETF,
  url: 'https://www.ishares.com/de/privatanleger/de/produkte/251881/',
  isin: 'IE00B0M62Q58',
  symbol: 'IQQW.DE',
  smallestTradeableUnit: 1,
  currency: Currency.EUR,
  manager: 'BlackRock Asset Management Ireland Limited',
  issuer: 'iShares plc',
  logo: 'https://www.ishares.com/uk-retail-assets/cache-1564149267000/images/media-bin/web/global/logos/logo-ishares.svg',
  country: Country.Irland,
  gewinn: 'ausschüttend',
  ter: 0.5,
  end_of_month_prices: prices,
  yields: [
    27.35, 41.85, 50.94, 140.02
  ],
  lastUpdate: '2019-12-31',
  contains: SecurityType.Aktie,
  shares: findCompaniesInIndex(Indices.MSCIWorld), // ignores shares with weight <= 0.3 %
  countries: [
    {name: Country[Country.USA], portion: 63.2},
    {name: Country[Country.Japan], portion: 8.09},
    {name: Country[Country.UK], portion: 5.43},
    {name: Country[Country.Frankreich], portion: 3.77},
    {name: Country[Country.Kanada], portion: 3.36},
    {name: Country[Country.Schweiz], portion: 3.07},
    {name: Country[Country.Deutschland], portion: 2.88},
    {name: Country[Country.Australien], portion: 2.24},
    {name: Country[Country.Niederlande], portion: 1.33},
    {name: Country[Country.Hongkong], portion: 1.15}
  ],
  sectors: [
    {name: IsharesIndustryNames.IT, portion: 17.44},
    {name: IsharesIndustryNames.Financials, portion: 15.68},
    {name: IsharesIndustryNames.Gesundheitsversorgung, portion: 12.89},
    {name: IsharesIndustryNames.Industrie, portion: 10.99},
    {name: IsharesIndustryNames.ZyklischeKonsumgueter, portion: 10.27},
    {name: IsharesIndustryNames.Kommunikation, portion: 8.4},
    {name: IsharesIndustryNames.NichtzyklischeKonsumgueter, portion: 8.17},
    {name: IsharesIndustryNames.Energie, portion: 4.91},
    {name: IsharesIndustryNames.Materialien, portion: 4.34},
    {name: IsharesIndustryNames.Versorger, portion: 3.37},
  ],
  industries: [],
  savingPlans: [
    {
      broker: 'Trade Republic',
      minInvestment: 25,
      costs: 0
    }
  ]
};
// tslint:enable:max-line-length
