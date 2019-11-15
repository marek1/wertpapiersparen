import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 1.11, yield: 3.24}, {year: 2017, rate: 1.11}, {year: 2016, rate: 1.00}, {
    year: 2015,
    rate: 0.90,
    yield: 1.95
  }, {year: 2014, rate: 0.90, yield: 3.05}, {year: 2013, rate: 0.00, yield: 0.00}
];
const prices = {
  '2019-11-15': {
    '1. open': '40.1900',
    '2. high': '40.4000',
    '3. low': '40.0300',
    '4. close': '40.1500',
    '5. volume': '3549839'
  },
  '2019-10-31': {
    '1. open': '40.0200',
    '2. high': '41.0800',
    '3. low': '37.8000',
    '4. close': '40.0000',
    '5. volume': '22732379'
  },
  '2019-09-30': {
    '1. open': '36.4700',
    '2. high': '41.0200',
    '3. low': '36.2500',
    '4. close': '40.3500',
    '5. volume': '32255992'
  },
  '2019-08-30': {
    '1. open': '34.2100',
    '2. high': '37.0000',
    '3. low': '30.6800',
    '4. close': '36.5000',
    '5. volume': '18338101'
  },
  '2019-07-31': {
    '1. open': '29.2600',
    '2. high': '34.4300',
    '3. low': '28.5000',
    '4. close': '34.4000',
    '5. volume': '27111974'
  },
  '2019-06-28': {
    '1. open': '26.4800',
    '2. high': '31.5000',
    '3. low': '24.6000',
    '4. close': '28.9600',
    '5. volume': '18816768'
  },
  '2019-05-31': {
    '1. open': '30.2500',
    '2. high': '31.3000',
    '3. low': '26.2900',
    '4. close': '26.7100',
    '5. volume': '29571670'
  },
  '2019-04-30': {
    '1. open': '32.6000',
    '2. high': '33.9000',
    '3. low': '30.0100',
    '4. close': '30.4900',
    '5. volume': '12757229'
  },
  '2019-03-29': {
    '1. open': '38.2300',
    '2. high': '38.4800',
    '3. low': '29.2600',
    '4. close': '30.6800',
    '5. volume': '14309953'
  },
  '2019-02-28': {
    '1. open': '37.1400',
    '2. high': '41.3000',
    '3. low': '34.1500',
    '4. close': '38.1000',
    '5. volume': '14888303'
  },
  '2019-01-31': {
    '1. open': '37.9000',
    '2. high': '39.5700',
    '3. low': '33.9500',
    '4. close': '37.1100',
    '5. volume': '15061870'
  },
  '2018-12-28': {
    '1. open': '40.5300',
    '2. high': '41.2000',
    '3. low': '37.2500',
    '4. close': '37.9200',
    '5. volume': '10002477'
  },
  '2018-11-30': {
    '1. open': '35.6300',
    '2. high': '41.9200',
    '3. low': '31.8900',
    '4. close': '40.4700',
    '5. volume': '20132840'
  },
  '2018-10-31': {
    '1. open': '34.3200',
    '2. high': '36.5700',
    '3. low': '29.7100',
    '4. close': '35.8200',
    '5. volume': '17547131'
  },
  '2018-09-28': {
    '1. open': '38.7100',
    '2. high': '39.9400',
    '3. low': '33.6100',
    '4. close': '34.2600',
    '5. volume': '12036300'
  },
  '2018-08-31': {
    '1. open': '39.9000',
    '2. high': '41.7700',
    '3. low': '36.8200',
    '4. close': '38.6800',
    '5. volume': '15303136'
  },
  '2018-07-31': {
    '1. open': '34.5500',
    '2. high': '39.0000',
    '3. low': '31.5400',
    '4. close': '38.1800',
    '5. volume': '20478582'
  },
  '2018-06-29': {
    '1. open': '50.3400',
    '2. high': '53.6400',
    '3. low': '32.5000',
    '4. close': '35.0000',
    '5. volume': '21273532'
  },
  '2018-05-31': {
    '1. open': '47.9400',
    '2. high': '54.8600',
    '3. low': '47.5300',
    '4. close': '50.4800',
    '5. volume': '11605576'
  },
  '2018-04-30': {
    '1. open': '59.1000',
    '2. high': '61.5000',
    '3. low': '47.1000',
    '4. close': '47.7700',
    '5. volume': '13477426'
  },
  '2018-03-29': {
    '1. open': '65.0200',
    '2. high': '66.0800',
    '3. low': '58.6600',
    '4. close': '59.7600',
    '5. volume': '7571903'
  },
  '2018-02-28': {
    '1. open': '70.5600',
    '2. high': '71.0400',
    '3. low': '65.0200',
    '4. close': '65.2800',
    '5. volume': '9780138'
  },
  '2018-01-31': {
    '1. open': '74.9800',
    '2. high': '79.5800',
    '3. low': '69.4000',
    '4. close': '70.3600',
    '5. volume': '7943651'
  },
  '2017-12-29': {
    '1. open': '72.1300',
    '2. high': '75.6500',
    '3. low': '68.2600',
    '4. close': '74.9300',
    '5. volume': '5823093'
  },
  '2017-11-30': {
    '1. open': '66.9200',
    '2. high': '73.8700',
    '3. low': '63.2000',
    '4. close': '71.9900',
    '5. volume': '10043711'
  },
  '2017-10-31': {
    '1. open': '68.0000',
    '2. high': '68.1500',
    '3. low': '61.9800',
    '4. close': '65.6800',
    '5. volume': '12707387'
  },
  '2017-09-29': {
    '1. open': '69.4500',
    '2. high': '72.3200',
    '3. low': '63.0700',
    '4. close': '67.5100',
    '5. volume': '5901506'
  },
  '2017-08-31': {
    '1. open': '70.1900',
    '2. high': '71.7600',
    '3. low': '66.4200',
    '4. close': '68.9800',
    '5. volume': '4139322'
  },
  '2017-07-31': {
    '1. open': '69.8500',
    '2. high': '72.9900',
    '3. low': '67.4300',
    '4. close': '70.5100',
    '5. volume': '5650054'
  },
  '2017-06-30': {
    '1. open': '68.2000',
    '2. high': '73.5100',
    '3. low': '68.1200',
    '4. close': '69.7500',
    '5. volume': '6373566'
  },
  '2017-05-31': {
    '1. open': '61.5000',
    '2. high': '69.0000',
    '3. low': '60.7000',
    '4. close': '68.1700',
    '5. volume': '6737788'
  },
  '2017-04-28': {
    '1. open': '58.9100',
    '2. high': '61.7300',
    '3. low': '57.8100',
    '4. close': '61.4900',
    '5. volume': '4435727'
  },
  '2017-03-31': {
    '1. open': '56.1000',
    '2. high': '58.8800',
    '3. low': '54.8000',
    '4. close': '58.7500',
    '5. volume': '6000117'
  },
  '2017-02-28': {
    '1. open': '54.0000',
    '2. high': '58.5000',
    '3. low': '53.9700',
    '4. close': '56.1000',
    '5. volume': '7084266'
  },
  '2017-01-31': {
    '1. open': '49.7500',
    '2. high': '54.1200',
    '3. low': '48.9950',
    '4. close': '53.6300',
    '5. volume': '5950448'
  },
  '2016-12-30': {
    '1. open': '47.9700',
    '2. high': '50.3200',
    '3. low': '46.8600',
    '4. close': '49.8250',
    '5. volume': '6374378'
  },
  '2016-11-30': {
    '1. open': '51.9500',
    '2. high': '51.9500',
    '3. low': '46.6550',
    '4. close': '48.0350',
    '5. volume': '7589489'
  },
  '2016-10-31': {
    '1. open': '52.9900',
    '2. high': '61.7500',
    '3. low': '50.2500',
    '4. close': '51.6500',
    '5. volume': '8944076'
  },
  '2016-09-30': {
    '1. open': '46.9250',
    '2. high': '52.2900',
    '3. low': '43.2300',
    '4. close': '52.2600',
    '5. volume': '8225627'
  },
  '2016-08-31': {
    '1. open': '46.7900',
    '2. high': '47.7250',
    '3. low': '44.9900',
    '4. close': '46.9400',
    '5. volume': '5634568'
  },
  '2016-07-29': {
    '1. open': '46.6350',
    '2. high': '51.0000',
    '3. low': '44.2900',
    '4. close': '46.4900',
    '5. volume': '6690277'
  },
  '2016-06-30': {
    '1. open': '48.8950',
    '2. high': '48.8950',
    '3. low': '42.5850',
    '4. close': '46.5400',
    '5. volume': '7677669'
  },
  '2016-05-31': {
    '1. open': '45.1600',
    '2. high': '48.2700',
    '3. low': '44.0400',
    '4. close': '47.8300',
    '5. volume': '4882542'
  },
  '2016-04-29': {
    '1. open': '44.1000',
    '2. high': '49.0000',
    '3. low': '43.0500',
    '4. close': '45.5750',
    '5. volume': '8720683'
  },
  '2016-03-31': {
    '1. open': '43.2250',
    '2. high': '45.7600',
    '3. low': '42.7350',
    '4. close': '45.3050',
    '5. volume': '7234971'
  },
  '2016-02-29': {
    '1. open': '41.2500',
    '2. high': '43.2350',
    '3. low': '36.7700',
    '4. close': '43.1600',
    '5. volume': '12597951'
  },
  '2016-01-29': {
    '1. open': '38.3900',
    '2. high': '41.0750',
    '3. low': '34.2500',
    '4. close': '41.0500',
    '5. volume': '13610297'
  },
  '2015-12-30': {
    '1. open': '40.0800',
    '2. high': '40.4750',
    '3. low': '36.1700',
    '4. close': '38.7900',
    '5. volume': '10182350'
  },
  '2015-11-30': {
    '1. open': '52.9900',
    '2. high': '54.9800',
    '3. low': '35.8000',
    '4. close': '39.9600',
    '5. volume': '13882834'
  },
  '2015-10-30': {
    '1. open': '46.8250',
    '2. high': '54.4000',
    '3. low': '46.3350',
    '4. close': '53.5100',
    '5. volume': '5955532'
  },
  '2015-09-30': {
    '1. open': '46.4000',
    '2. high': '50.1900',
    '3. low': '43.7050',
    '4. close': '46.2150',
    '5. volume': '7334615'
  },
  '2015-08-31': {
    '1. open': '51.8200',
    '2. high': '55.3800',
    '3. low': '42.2200',
    '4. close': '47.1600',
    '5. volume': '6374752'
  },
  '2015-07-31': {
    '1. open': '43.6000',
    '2. high': '51.8700',
    '3. low': '41.7750',
    '4. close': '51.8400',
    '5. volume': '7883745'
  },
  '2015-06-30': {
    '1. open': '48.2150',
    '2. high': '48.9250',
    '3. low': '41.2100',
    '4. close': '42.9550',
    '5. volume': '9356483'
  },
  '2015-05-29': {
    '1. open': '47.3300',
    '2. high': '50.8500',
    '3. low': '44.2250',
    '4. close': '47.9900',
    '5. volume': '5713617'
  },
  '2015-04-30': {
    '1. open': '46.2000',
    '2. high': '52.7400',
    '3. low': '45.8200',
    '4. close': '47.1600',
    '5. volume': '8130680'
  },
  '2015-03-31': {
    '1. open': '40.7800',
    '2. high': '47.1000',
    '3. low': '38.5750',
    '4. close': '46.3000',
    '5. volume': '9241129'
  },
  '2015-02-27': {
    '1. open': '41.0000',
    '2. high': '44.6900',
    '3. low': '39.0700',
    '4. close': '40.9800',
    '5. volume': '7285070'
  },
  '2015-01-30': {
    '1. open': '32.8050',
    '2. high': '41.5400',
    '3. low': '31.4300',
    '4. close': '40.8800',
    '5. volume': '9090595'
  },
  '2014-12-30': {
    '1. open': '33.2300',
    '2. high': '34.0000',
    '3. low': '30.4200',
    '4. close': '32.7600',
    '5. volume': '5931031'
  },
  '2014-11-28': {
    '1. open': '28.0500',
    '2. high': '34.2050',
    '3. low': '27.4150',
    '4. close': '33.4000',
    '5. volume': '7516313'
  },
  '2014-10-31': {
    '1. open': '29.5000',
    '2. high': '29.6450',
    '3. low': '25.3100',
    '4. close': '27.9600',
    '5. volume': '8329475'
  },
  '2014-09-30': {
    '1. open': '31.7950',
    '2. high': '33.5000',
    '3. low': '29.3800',
    '4. close': '29.4950',
    '5. volume': '5248678'
  },
  '2014-08-29': {
    '1. open': '30.1750',
    '2. high': '32.9050',
    '3. low': '28.8000',
    '4. close': '31.8200',
    '5. volume': '7382422'
  },
  '2014-07-31': {
    '1. open': '36.8850',
    '2. high': '37.0550',
    '3. low': '29.9200',
    '4. close': '30.3300',
    '5. volume': '8222172'
  },
  '2014-06-30': {
    '1. open': '37.2900',
    '2. high': '37.7250',
    '3. low': '32.2500',
    '4. close': '36.8350',
    '5. volume': '7232048'
  },
  '2014-05-30': {
    '1. open': '38.8700',
    '2. high': '40.7450',
    '3. low': '36.0200',
    '4. close': '37.2250',
    '5. volume': '10393147'
  },
  '2014-04-30': {
    '1. open': '47.3750',
    '2. high': '48.2650',
    '3. low': '37.3300',
    '4. close': '37.7300',
    '5. volume': '10762370'
  },
  '2014-03-31': {
    '1. open': '48.7700',
    '2. high': '50.7500',
    '3. low': '44.3800',
    '4. close': '47.0650',
    '5. volume': '7102596'
  },
  '2014-02-28': {
    '1. open': '43.5350',
    '2. high': '49.9000',
    '3. low': '42.4100',
    '4. close': '49.2550',
    '5. volume': '7088812'
  },
  '2014-01-31': {
    '1. open': '41.4650',
    '2. high': '49.7150',
    '3. low': '40.3050',
    '4. close': '43.4450',
    '5. volume': '10990728'
  },
  '2013-12-30': {
    '1. open': '43.7000',
    '2. high': '43.7450',
    '3. low': '39.6300',
    '4. close': '41.0000',
    '5. volume': '5558449'
  },
  '2013-11-29': {
    '1. open': '38.2700',
    '2. high': '44.9800',
    '3. low': '37.3850',
    '4. close': '43.5900',
    '5. volume': '6862706'
  },
  '2013-10-31': {
    '1. open': '34.8200',
    '2. high': '38.6900',
    '3. low': '33.5200',
    '4. close': '38.1650',
    '5. volume': '7122919'
  },
  '2013-09-30': {
    '1. open': '30.4500',
    '2. high': '35.7450',
    '3. low': '30.2150',
    '4. close': '34.7000',
    '5. volume': '8031404'
  },
  '2013-08-30': {
    '1. open': '29.4400',
    '2. high': '32.2900',
    '3. low': '28.1600',
    '4. close': '30.2900',
    '5. volume': '8496300'
  }
};

// tslint:disable:max-line-length
export const osramCompany: Company = {
  id: 1071,
  name: 'Osram Licht AG',
  country: Country.Deutschland,
  city: 'München',
  url: 'http://www.osram-group.com/',
  description: 'Die Osram Licht AG (Eigenschreibweise: OSRAM) ist ein weltweit tätiges deutsches Unternehmen mit Sitz in München,[2] das Leuchtmittel und -systeme für Spezialanwendungen, halbleiterbasierte Lichtprodukte (LED) sowie professionelle Leuchten und Lösungen herstellt. Das Geschäft mit traditionellen Leuchtmitteln und LED-Retrofit-Lampen gehört hingegen nach dem im Juli 2016 bekanntgegebenen Verkauf an ein chinesisches Konsortium inzwischen nicht mehr zum Konzern.[3] Osram war von 1978 bis 2013 ein hundertprozentiges Tochterunternehmen der Siemens AG und wurde 2013 abgespalten. Die Aktie des Unternehmens wurde am 23. September 2013 in den MDAX der Frankfurter Wertpapierbörse aufgenommen.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Osram',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Osram_Logo.svg/500px-Osram_Logo.svg.png',
  products: [
    {
      id: 1071,
      name: 'Osram Glühbirnen (LEDs)',
      logo: 'https://media.osram.info/media/img/osram-dam-4993856/s,x,244,y,0/f,p/osram-dam-4884000_OSRAMCorpLogo-RGB_pos_2016-01_without-bounding-box.png'
    }
  ],
  industries: [111212, 121110],
  currency: Currency.EUR,
  isin: 'DE000LED4000',
  wkn: 'LED400',
  symbol: 'OSR.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Lichthersteller', 'Beleuchtungsprodukte', 'Lichtwertschöpfungskette', 'Lichtquellen', 'Glühlampen', 'Halogenlampen', 'Leuchtstofflampen', 'Hochdruckentladungslampen', 'LED', 'OLED']
};
// tslint:enable:max-line-length

