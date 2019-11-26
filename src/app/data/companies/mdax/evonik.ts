import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';
import { SecurityType } from '../../../enums/securityType';

const dividends = [
  {year: 2018, rate: 1.15, yield: 5.24}, {year: 2017, rate: 1.15}, {year: 2016, rate: 1.15}, {
    year: 2015,
    rate: 1.15,
    yield: 3.76
  }, {year: 2014, rate: 1.00, yield: 3.69}, {year: 2013, rate: 1.00, yield: 3.37}, {year: 2012, rate: 0.92}, {
    year: 2011,
    rate: 0.91
  }, {year: 2010, rate: 0.86}];
const prices = {
  '2019-11-14': {
    '1. open': '23.7400',
    '2. high': '27.1500',
    '3. low': '23.5900',
    '4. close': '25.8200',
    '5. volume': '11998227'
  },
  '2019-10-31': {
    '1. open': '22.7700',
    '2. high': '24.8900',
    '3. low': '21.2900',
    '4. close': '23.6500',
    '5. volume': '15909397'
  },
  '2019-09-30': {
    '1. open': '23.2500',
    '2. high': '24.6500',
    '3. low': '21.6700',
    '4. close': '22.6500',
    '5. volume': '15477678'
  },
  '2019-08-30': {
    '1. open': '25.4400',
    '2. high': '25.4400',
    '3. low': '21.0300',
    '4. close': '23.1800',
    '5. volume': '17872722'
  },
  '2019-07-31': {
    '1. open': '25.9500',
    '2. high': '27.1700',
    '3. low': '24.4100',
    '4. close': '25.9600',
    '5. volume': '15146870'
  },
  '2019-06-28': {
    '1. open': '23.3800',
    '2. high': '25.6800',
    '3. low': '23.2200',
    '4. close': '25.6100',
    '5. volume': '12432009'
  },
  '2019-05-31': {
    '1. open': '26.6000',
    '2. high': '26.7500',
    '3. low': '23.1900',
    '4. close': '23.5200',
    '5. volume': '20234328'
  },
  '2019-04-30': {
    '1. open': '24.6300',
    '2. high': '27.5300',
    '3. low': '24.6300',
    '4. close': '26.5600',
    '5. volume': '14238554'
  },
  '2019-03-29': {
    '1. open': '24.9700',
    '2. high': '27.1500',
    '3. low': '23.7800',
    '4. close': '24.2800',
    '5. volume': '19192303'
  },
  '2019-02-28': {
    '1. open': '23.8300',
    '2. high': '25.3500',
    '3. low': '23.5400',
    '4. close': '24.7500',
    '5. volume': '14784666'
  },
  '2019-01-31': {
    '1. open': '21.8500',
    '2. high': '24.3700',
    '3. low': '21.5500',
    '4. close': '23.8600',
    '5. volume': '15664615'
  },
  '2018-12-28': {
    '1. open': '24.2600',
    '2. high': '24.5800',
    '3. low': '21.4500',
    '4. close': '21.8000',
    '5. volume': '17045156'
  },
  '2018-11-30': {
    '1. open': '27.3600',
    '2. high': '28.8400',
    '3. low': '23.7000',
    '4. close': '23.7500',
    '5. volume': '22700156'
  },
  '2018-10-31': {
    '1. open': '31.0600',
    '2. high': '31.3200',
    '3. low': '25.5200',
    '4. close': '27.4000',
    '5. volume': '21544883'
  },
  '2018-09-28': {
    '1. open': '31.9900',
    '2. high': '32.7700',
    '3. low': '30.4200',
    '4. close': '30.8500',
    '5. volume': '15993864'
  },
  '2018-08-31': {
    '1. open': '31.8500',
    '2. high': '32.7400',
    '3. low': '31.2500',
    '4. close': '32.1100',
    '5. volume': '11700106'
  },
  '2018-07-31': {
    '1. open': '29.0300',
    '2. high': '32.0200',
    '3. low': '28.6600',
    '4. close': '31.6500',
    '5. volume': '13865798'
  },
  '2018-06-29': {
    '1. open': '30.0800',
    '2. high': '31.1200',
    '3. low': '28.8800',
    '4. close': '29.3300',
    '5. volume': '13908405'
  },
  '2018-05-31': {
    '1. open': '29.5400',
    '2. high': '32.1000',
    '3. low': '29.3700',
    '4. close': '29.9800',
    '5. volume': '15000115'
  },
  '2018-04-30': {
    '1. open': '28.5800',
    '2. high': '30.3600',
    '3. low': '27.9900',
    '4. close': '29.4800',
    '5. volume': '11235247'
  },
  '2018-03-29': {
    '1. open': '30.4000',
    '2. high': '30.4100',
    '3. low': '27.6700',
    '4. close': '28.6400',
    '5. volume': '18154222'
  },
  '2018-02-28': {
    '1. open': '31.9900',
    '2. high': '32.0300',
    '3. low': '29.1500',
    '4. close': '30.4300',
    '5. volume': '12371832'
  },
  '2018-01-31': {
    '1. open': '31.5100',
    '2. high': '32.9400',
    '3. low': '30.3300',
    '4. close': '31.8000',
    '5. volume': '13821984'
  },
  '2017-12-29': {
    '1. open': '31.2600',
    '2. high': '32.8800',
    '3. low': '30.7800',
    '4. close': '31.3700',
    '5. volume': '13772742'
  },
  '2017-11-30': {
    '1. open': '31.6700',
    '2. high': '32.9850',
    '3. low': '30.6300',
    '4. close': '31.3400',
    '5. volume': '17723919'
  },
  '2017-10-31': {
    '1. open': '30.4300',
    '2. high': '31.2800',
    '3. low': '29.7000',
    '4. close': '31.2800',
    '5. volume': '9054837'
  },
  '2017-09-29': {
    '1. open': '27.5000',
    '2. high': '30.6350',
    '3. low': '27.5000',
    '4. close': '30.2200',
    '5. volume': '11426475'
  },
  '2017-08-31': {
    '1. open': '28.8500',
    '2. high': '29.2850',
    '3. low': '26.7600',
    '4. close': '27.2300',
    '5. volume': '14987511'
  },
  '2017-07-31': {
    '1. open': '28.8000',
    '2. high': '29.9300',
    '3. low': '27.9700',
    '4. close': '28.8000',
    '5. volume': '13230442'
  },
  '2017-06-30': {
    '1. open': '30.8000',
    '2. high': '31.5800',
    '3. low': '27.6700',
    '4. close': '27.9850',
    '5. volume': '15436147'
  },
  '2017-05-31': {
    '1. open': '30.7050',
    '2. high': '32.2500',
    '3. low': '30.1350',
    '4. close': '30.6550',
    '5. volume': '16128858'
  },
  '2017-04-28': {
    '1. open': '30.6500',
    '2. high': '31.1000',
    '3. low': '29.3350',
    '4. close': '30.6550',
    '5. volume': '10427685'
  },
  '2017-03-31': {
    '1. open': '30.5600',
    '2. high': '31.7200',
    '3. low': '28.8400',
    '4. close': '30.5650',
    '5. volume': '18458258'
  },
  '2017-02-28': {
    '1. open': '30.0500',
    '2. high': '31.1200',
    '3. low': '29.2550',
    '4. close': '30.3100',
    '5. volume': '11341527'
  },
  '2017-01-31': {
    '1. open': '28.4000',
    '2. high': '31.1100',
    '3. low': '27.1600',
    '4. close': '29.9800',
    '5. volume': '18254296'
  },
  '2016-12-30': {
    '1. open': '26.2050',
    '2. high': '28.7900',
    '3. low': '25.6600',
    '4. close': '28.3800',
    '5. volume': '13815181'
  },
  '2016-11-30': {
    '1. open': '28.6000',
    '2. high': '28.6400',
    '3. low': '25.6100',
    '4. close': '26.3100',
    '5. volume': '21896641'
  },
  '2016-10-31': {
    '1. open': '30.6950',
    '2. high': '31.0200',
    '3. low': '27.4000',
    '4. close': '28.4600',
    '5. volume': '21545334'
  },
  '2016-09-30': {
    '1. open': '30.0500',
    '2. high': '30.7400',
    '3. low': '28.9000',
    '4. close': '30.0950',
    '5. volume': '15617097'
  },
  '2016-08-31': {
    '1. open': '27.9550',
    '2. high': '30.7700',
    '3. low': '27.1900',
    '4. close': '30.1350',
    '5. volume': '16869618'
  },
  '2016-07-29': {
    '1. open': '26.9600',
    '2. high': '28.2500',
    '3. low': '25.7200',
    '4. close': '27.8800',
    '5. volume': '13173917'
  },
  '2016-06-30': {
    '1. open': '26.5600',
    '2. high': '27.8950',
    '3. low': '25.0250',
    '4. close': '26.7400',
    '5. volume': '23092593'
  },
  '2016-05-31': {
    '1. open': '27.9350',
    '2. high': '29.4000',
    '3. low': '25.2100',
    '4. close': '26.5000',
    '5. volume': '23627025'
  },
  '2016-04-29': {
    '1. open': '26.2500',
    '2. high': '28.3550',
    '3. low': '25.1100',
    '4. close': '27.6650',
    '5. volume': '13960740'
  },
  '2016-03-31': {
    '1. open': '27.9400',
    '2. high': '28.9400',
    '3. low': '24.3500',
    '4. close': '26.3650',
    '5. volume': '25962600'
  },
  '2016-02-29': {
    '1. open': '28.5550',
    '2. high': '28.7350',
    '3. low': '25.0150',
    '4. close': '27.8200',
    '5. volume': '11366419'
  },
  '2016-01-29': {
    '1. open': '30.5900',
    '2. high': '30.5900',
    '3. low': '26.7550',
    '4. close': '28.3950',
    '5. volume': '14299116'
  },
  '2015-12-30': {
    '1. open': '32.2600',
    '2. high': '32.4200',
    '3. low': '28.9600',
    '4. close': '30.6150',
    '5. volume': '10695633'
  },
  '2015-11-30': {
    '1. open': '32.7000',
    '2. high': '34.4000',
    '3. low': '31.5400',
    '4. close': '32.3400',
    '5. volume': '14928115'
  },
  '2015-10-30': {
    '1. open': '30.1200',
    '2. high': '33.2900',
    '3. low': '29.4500',
    '4. close': '33.0500',
    '5. volume': '11050369'
  },
  '2015-09-30': {
    '1. open': '32.7800',
    '2. high': '32.9550',
    '3. low': '28.7250',
    '4. close': '29.9150',
    '5. volume': '16837691'
  },
  '2015-08-31': {
    '1. open': '36.3050',
    '2. high': '37.7450',
    '3. low': '30.0500',
    '4. close': '33.2050',
    '5. volume': '14626461'
  },
  '2015-07-31': {
    '1. open': '34.5000',
    '2. high': '37.0450',
    '3. low': '34.1200',
    '4. close': '36.4350',
    '5. volume': '21554556'
  },
  '2015-06-30': {
    '1. open': '34.1500',
    '2. high': '35.7350',
    '3. low': '32.7400',
    '4. close': '34.2250',
    '5. volume': '12278489'
  },
  '2015-05-29': {
    '1. open': '34.6500',
    '2. high': '35.4900',
    '3. low': '31.6500',
    '4. close': '34.0000',
    '5. volume': '26265239'
  },
  '2015-04-30': {
    '1. open': '33.1350',
    '2. high': '36.1000',
    '3. low': '33.0500',
    '4. close': '34.4350',
    '5. volume': '9565955'
  },
  '2015-03-31': {
    '1. open': '30.5300',
    '2. high': '33.3550',
    '3. low': '29.5000',
    '4. close': '33.2000',
    '5. volume': '16957254'
  },
  '2015-02-27': {
    '1. open': '28.3100',
    '2. high': '30.4900',
    '3. low': '27.8250',
    '4. close': '30.4550',
    '5. volume': '5069778'
  },
  '2015-01-30': {
    '1. open': '27.3850',
    '2. high': '28.3950',
    '3. low': '25.9400',
    '4. close': '28.1550',
    '5. volume': '4239793'
  },
  '2014-12-30': {
    '1. open': '26.3450',
    '2. high': '27.4200',
    '3. low': '25.2700',
    '4. close': '27.1250',
    '5. volume': '3233578'
  },
  '2014-11-28': {
    '1. open': '26.6700',
    '2. high': '27.0300',
    '3. low': '24.7150',
    '4. close': '26.5250',
    '5. volume': '4182427'
  },
  '2014-10-31': {
    '1. open': '27.5000',
    '2. high': '28.0500',
    '3. low': '24.1800',
    '4. close': '26.6400',
    '5. volume': '5719226'
  },
  '2014-09-30': {
    '1. open': '27.3900',
    '2. high': '28.2800',
    '3. low': '26.3000',
    '4. close': '27.4400',
    '5. volume': '3521081'
  },
  '2014-08-29': {
    '1. open': '27.7000',
    '2. high': '27.9200',
    '3. low': '25.9250',
    '4. close': '27.4400',
    '5. volume': '3296607'
  },
  '2014-07-31': {
    '1. open': '29.0800',
    '2. high': '30.1250',
    '3. low': '27.1750',
    '4. close': '27.5850',
    '5. volume': '3441734'
  },
  '2014-06-30': {
    '1. open': '28.8850',
    '2. high': '29.9050',
    '3. low': '27.8000',
    '4. close': '29.0500',
    '5. volume': '4387615'
  },
  '2014-05-30': {
    '1. open': '28.5000',
    '2. high': '29.3500',
    '3. low': '26.5450',
    '4. close': '28.9200',
    '5. volume': '4136841'
  },
  '2014-04-30': {
    '1. open': '28.5000',
    '2. high': '29.2600',
    '3. low': '27.6400',
    '4. close': '28.4350',
    '5. volume': '3094285'
  },
  '2014-03-31': {
    '1. open': '28.5000',
    '2. high': '29.2000',
    '3. low': '26.0200',
    '4. close': '28.2800',
    '5. volume': '4934668'
  },
  '2014-02-28': {
    '1. open': '28.2500',
    '2. high': '29.6900',
    '3. low': '27.8100',
    '4. close': '28.9800',
    '5. volume': '2777176'
  },
  '2014-01-31': {
    '1. open': '29.9500',
    '2. high': '30.9550',
    '3. low': '27.5950',
    '4. close': '28.0000',
    '5. volume': '3854278'
  },
  '2013-12-30': {
    '1. open': '29.2700',
    '2. high': '29.9050',
    '3. low': '27.6000',
    '4. close': '29.6300',
    '5. volume': '2435506'
  },
  '2013-11-29': {
    '1. open': '28.0000',
    '2. high': '29.3650',
    '3. low': '26.9000',
    '4. close': '29.1950',
    '5. volume': '3034947'
  },
  '2013-10-31': {
    '1. open': '27.2500',
    '2. high': '28.2950',
    '3. low': '25.3550',
    '4. close': '28.0000',
    '5. volume': '3612536'
  },
  '2013-09-30': {
    '1. open': '28.1500',
    '2. high': '29.1700',
    '3. low': '27.1100',
    '4. close': '27.3050',
    '5. volume': '5956017'
  },
  '2013-08-30': {
    '1. open': '26.2000',
    '2. high': '28.9300',
    '3. low': '25.5000',
    '4. close': '27.8400',
    '5. volume': '2579713'
  }
};

// tslint:disable:max-line-length
export const evonikCompany: Company = {
  id: 1048,
  name: 'Evonik Industries AG',
  country: Country.Deutschland,
  city: 'Essen',
  url: 'https://corporate.evonik.de/de',
  description: 'Die Evonik Industries AG [eˈvɔnɪk] mit Sitz in Essen ist ein börsennotiertes Unternehmen. Es wurde ursprünglich als Mischkonzern konzipiert, fokussiert sich jedoch heute auf Spezialchemie und Hochleistungsmaterialien, Bereiche, die im Wesentlichen auf die Degussa zurückgehen. Der größte Evonik-Standort befindet sich in Marl, Hauptaktionär ist die RAG-Stiftung.[2] Mit einem Umsatz von 14,4 Mrd. Euro im Geschäftsjahr 2017 und mehr als 36.000 Mitarbeitern ist Evonik das zweitgrößte deutsche Chemieunternehmen und gehört damit zu den weltweit führenden Unternehmen der Spezialchemie.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Evonik_Industries',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Evonik.svg/500px-Evonik.svg.png',
  products: [],
  industries: [1510],
  currency: Currency.EUR,
  securityType: SecurityType.Namensaktie,
  isin: 'DE000EVNK013',
  wkn: 'EVNK01',
  symbol: 'EVK.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Chemie', 'Spezialchemie', 'chemische Produkte', 'Systemlösungen']
};
// tslint:enable:max-line-length

