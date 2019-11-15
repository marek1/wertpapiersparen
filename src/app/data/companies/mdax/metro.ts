import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.70, yield: 5.21}, {year: 2017, rate: 0.70}, {year: 2016, rate: 1.00}, {
    year: 2015,
    rate: 1.00,
    yield: 4.05
  }, {year: 2014, rate: 0.90, yield: 3.45}, {year: 2013, rate: 0.00, yield: 0.00}, {year: 2012, rate: 1.00, yield: 4.76}, {
    year: 2011,
    rate: 1.35,
    yield: 4.79
  }, {year: 2010, rate: 1.35, yield: 2.51}, {year: 2009, rate: 1.18, yield: 2.77}, {year: 2008, rate: 1.18, yield: 4.13}, {
    year: 2007,
    rate: 1.18,
    yield: 2.05
  }, {year: 2006, rate: 1.12, yield: 2.32}, {year: 2005, rate: 1.02, yield: 2.50}, {year: 2004, rate: 1.02, yield: 2.52}, {
    year: 2003,
    rate: 1.02,
    yield: 2.92
  }, {year: 2002, rate: 1.02, yield: 4.43}, {year: 2001, rate: 1.02, yield: 2.58}, {year: 2000, rate: 1.02, yield: 2.05}, {
    year: 1999,
    rate: 1.02,
    yield: 1.91
  }
];
const prices = {
  '2019-11-15': {
    '1. open': '14.7200',
    '2. high': '15.2800',
    '3. low': '14.6650',
    '4. close': '14.7200',
    '5. volume': '7113645'
  },
  '2019-10-31': {
    '1. open': '14.4800',
    '2. high': '14.8150',
    '3. low': '13.8600',
    '4. close': '14.6000',
    '5. volume': '12236872'
  },
  '2019-09-30': {
    '1. open': '13.9500',
    '2. high': '14.8550',
    '3. low': '13.9500',
    '4. close': '14.4800',
    '5. volume': '13428485'
  },
  '2019-08-30': {
    '1. open': '13.9250',
    '2. high': '15.6050',
    '3. low': '13.6900',
    '4. close': '14.0800',
    '5. volume': '23080305'
  },
  '2019-07-31': {
    '1. open': '16.0750',
    '2. high': '16.1450',
    '3. low': '14.0000',
    '4. close': '14.0000',
    '5. volume': '23767168'
  },
  '2019-06-28': {
    '1. open': '14.0550',
    '2. high': '16.3500',
    '3. low': '13.9550',
    '4. close': '16.0750',
    '5. volume': '23919826'
  },
  '2019-05-31': {
    '1. open': '15.0600',
    '2. high': '15.2300',
    '3. low': '13.5550',
    '4. close': '14.1100',
    '5. volume': '22599530'
  },
  '2019-04-30': {
    '1. open': '14.8350',
    '2. high': '15.1900',
    '3. low': '14.5300',
    '4. close': '15.1000',
    '5. volume': '11810391'
  },
  '2019-03-29': {
    '1. open': '14.8300',
    '2. high': '14.9900',
    '3. low': '13.8800',
    '4. close': '14.7900',
    '5. volume': '12060826'
  },
  '2019-02-28': {
    '1. open': '14.8350',
    '2. high': '15.8000',
    '3. low': '14.1550',
    '4. close': '14.7650',
    '5. volume': '15248076'
  },
  '2019-01-31': {
    '1. open': '13.3700',
    '2. high': '15.7400',
    '3. low': '12.8750',
    '4. close': '14.7650',
    '5. volume': '20462146'
  },
  '2018-12-28': {
    '1. open': '13.6900',
    '2. high': '13.8000',
    '3. low': '11.5000',
    '4. close': '13.3950',
    '5. volume': '19813423'
  },
  '2018-11-30': {
    '1. open': '13.3000',
    '2. high': '14.7500',
    '3. low': '13.3000',
    '4. close': '13.5550',
    '5. volume': '18654410'
  },
  '2018-10-31': {
    '1. open': '13.4800',
    '2. high': '13.8900',
    '3. low': '12.4550',
    '4. close': '13.3000',
    '5. volume': '17620392'
  },
  '2018-09-28': {
    '1. open': '13.4800',
    '2. high': '14.2950',
    '3. low': '13.2150',
    '4. close': '13.5000',
    '5. volume': '17137685'
  },
  '2018-08-31': {
    '1. open': '10.5150',
    '2. high': '14.0500',
    '3. low': '10.4950',
    '4. close': '13.4550',
    '5. volume': '37044043'
  },
  '2018-07-31': {
    '1. open': '10.5450',
    '2. high': '10.7650',
    '3. low': '10.0200',
    '4. close': '10.5600',
    '5. volume': '21057949'
  },
  '2018-06-29': {
    '1. open': '11.5600',
    '2. high': '11.7700',
    '3. low': '10.5850',
    '4. close': '10.5850',
    '5. volume': '20543027'
  },
  '2018-05-31': {
    '1. open': '12.0500',
    '2. high': '12.0950',
    '3. low': '10.9300',
    '4. close': '11.5200',
    '5. volume': '26258541'
  },
  '2018-04-30': {
    '1. open': '14.3450',
    '2. high': '15.1550',
    '3. low': '11.5850',
    '4. close': '12.0150',
    '5. volume': '32116078'
  },
  '2018-03-29': {
    '1. open': '16.0000',
    '2. high': '16.0900',
    '3. low': '13.8550',
    '4. close': '14.3900',
    '5. volume': '20457106'
  },
  '2018-02-28': {
    '1. open': '17.6000',
    '2. high': '18.2200',
    '3. low': '15.4450',
    '4. close': '16.0450',
    '5. volume': '22094998'
  },
  '2018-01-31': {
    '1. open': '16.6500',
    '2. high': '17.6100',
    '3. low': '16.3200',
    '4. close': '17.5000',
    '5. volume': '19286152'
  },
  '2017-12-29': {
    '1. open': '16.4500',
    '2. high': '17.9500',
    '3. low': '15.9000',
    '4. close': '16.6500',
    '5. volume': '21230612'
  },
  '2017-11-30': {
    '1. open': '16.8850',
    '2. high': '16.8850',
    '3. low': '15.5900',
    '4. close': '16.4000',
    '5. volume': '18905659'
  },
  '2017-10-31': {
    '1. open': '17.9400',
    '2. high': '18.1000',
    '3. low': '16.2150',
    '4. close': '16.3950',
    '5. volume': '17558331'
  },
  '2017-09-29': {
    '1. open': '16.1000',
    '2. high': '17.9800',
    '3. low': '16.1000',
    '4. close': '17.8850',
    '5. volume': '25791460'
  },
  '2017-08-31': {
    '1. open': '17.1550',
    '2. high': '17.4950',
    '3. low': '15.9950',
    '4. close': '16.4200',
    '5. volume': '19240584'
  }
};

// tslint:disable:max-line-length
export const metroCompany: Company = {
  id: 1067,
  name: 'METRO AG',
  country: Country.Deutschland,
  city: 'Düsseldorf',
  url: 'http://www.metroag.de/',
  description: 'Die Metro AG ist ein börsennotierter Konzern von Großhandels- und Einzelhandelsunternehmen. Der Konzern mit Hauptsitz in Düsseldorf beschäftigt in 760 Märkten weltweit rund 150.000 Mitarbeiter, die meisten davon in Deutschland. In Deutschland betreibt das Unternehmen vor allem die Metro-Cash-&-Carry-Märkte und die Real-Handelskette.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Metro_AG',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Metro_Wholesale_%26_Food_Specialist_logo.svg/500px-Metro_Wholesale_%26_Food_Specialist_logo.svg.png',
  products: [
    {
      id: 106710,
      name: 'Metro Cash&Carry',
      logo: 'https://www.metro-cc.com/~/assets/metro-cc/images/logos/metro-wholesale-logo.svg'
    },
    {
      id: 106711,
      name: 'Real Supermärkte',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Real_Logo_Clean.svg/500px-Real_Logo_Clean.svg.png'
    }

  ],
  industries: [2010, 2011],
  currency: Currency.EUR,
  isin: 'DE000BFB0019',
  wkn: 'BFB001',
  symbol: 'B4B.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [
    {
      name: 'Metro Vz. (Vorzugsaktien)',
      isin: 'DE000BFB0027'
    }
  ],
  current_indices: [Indices.MDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Einzelhandel', 'Großhandel', 'Cash&Carry']
};
// tslint:enable:max-line-length

