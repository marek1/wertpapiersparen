import { Company } from '../../../interfaces/company';
import { Country } from '../../../enums/country';
import { Currency } from '../../../enums/currencies';
import { Indices } from '../../../enums/indices';

const dividends = [
  {year: 2018, rate: 0.70, yield: 1.85}, {year: 2017, rate: 0.00}, {
    year: 2016,
    rate: 0.16
  }, {year: 2015, rate: 0.05, yield: 1.17}
];
const prices = {
  '2019-11-20': {
    '1. open': '38.0000',
    '2. high': '43.7950',
    '3. low': '37.6250',
    '4. close': '43.4350',
    '5. volume': '9785185'
  },
  '2019-10-31': {
    '1. open': '36.1400',
    '2. high': '38.1100',
    '3. low': '34.1800',
    '4. close': '38.0950',
    '5. volume': '12800203'
  },
  '2019-09-30': {
    '1. open': '35.8050',
    '2. high': '36.5400',
    '3. low': '34.8000',
    '4. close': '36.0950',
    '5. volume': '9091554'
  },
  '2019-08-30': {
    '1. open': '37.9900',
    '2. high': '38.7500',
    '3. low': '34.4000',
    '4. close': '35.7100',
    '5. volume': '9206347'
  },
  '2019-07-31': {
    '1. open': '37.3300',
    '2. high': '38.6300',
    '3. low': '34.7050',
    '4. close': '37.8150',
    '5. volume': '11125729'
  },
  '2019-06-28': {
    '1. open': '34.7100',
    '2. high': '38.2200',
    '3. low': '34.5800',
    '4. close': '37.1100',
    '5. volume': '8602957'
  },
  '2019-05-31': {
    '1. open': '38.0000',
    '2. high': '38.7300',
    '3. low': '34.5600',
    '4. close': '34.8500',
    '5. volume': '9273644'
  },
  '2019-04-30': {
    '1. open': '37.0300',
    '2. high': '38.8500',
    '3. low': '36.2000',
    '4. close': '38.0200',
    '5. volume': '10475820'
  },
  '2019-03-29': {
    '1. open': '35.7250',
    '2. high': '38.6300',
    '3. low': '35.6750',
    '4. close': '37.1500',
    '5. volume': '10542923'
  },
  '2019-02-28': {
    '1. open': '34.4000',
    '2. high': '36.4950',
    '3. low': '33.7650',
    '4. close': '35.6200',
    '5. volume': '11892433'
  },
  '2019-01-31': {
    '1. open': '36.5050',
    '2. high': '37.0900',
    '3. low': '33.0450',
    '4. close': '34.4250',
    '5. volume': '16228514'
  },
  '2018-12-28': {
    '1. open': '38.9500',
    '2. high': '39.1100',
    '3. low': '35.5800',
    '4. close': '36.5450',
    '5. volume': '10851001'
  },
  '2018-11-30': {
    '1. open': '36.6150',
    '2. high': '39.2100',
    '3. low': '35.8950',
    '4. close': '38.2350',
    '5. volume': '14806185'
  },
  '2018-10-31': {
    '1. open': '37.9200',
    '2. high': '38.2350',
    '3. low': '31.9000',
    '4. close': '36.5900',
    '5. volume': '20624212'
  },
  '2018-09-28': {
    '1. open': '39.1500',
    '2. high': '39.6750',
    '3. low': '37.3650',
    '4. close': '37.8750',
    '5. volume': '12171036'
  },
  '2018-08-31': {
    '1. open': '38.2000',
    '2. high': '39.9450',
    '3. low': '37.5000',
    '4. close': '39.1550',
    '5. volume': '12873428'
  },
  '2018-07-31': {
    '1. open': '35.1550',
    '2. high': '39.4900',
    '3. low': '34.5200',
    '4. close': '38.0950',
    '5. volume': '16905386'
  },
  '2018-06-29': {
    '1. open': '34.0050',
    '2. high': '37.2850',
    '3. low': '33.3300',
    '4. close': '35.3550',
    '5. volume': '19783868'
  },
  '2018-05-31': {
    '1. open': '32.2700',
    '2. high': '34.3750',
    '3. low': '32.0100',
    '4. close': '34.0050',
    '5. volume': '12254332'
  },
  '2018-04-30': {
    '1. open': '32.8200',
    '2. high': '33.6500',
    '3. low': '31.1000',
    '4. close': '32.2850',
    '5. volume': '9225115'
  },
  '2012-09-20': {
    '1. open': '0.1010',
    '2. high': '0.1010',
    '3. low': '0.1010',
    '4. close': '0.1010',
    '5. volume': '0'
  },
  '2012-08-31': {
    '1. open': '0.1010',
    '2. high': '0.1010',
    '3. low': '0.1010',
    '4. close': '0.1010',
    '5. volume': '0'
  },
  '2012-07-31': {
    '1. open': '0.0600',
    '2. high': '0.1170',
    '3. low': '0.0440',
    '4. close': '0.1010',
    '5. volume': '3174956'
  },
  '2012-06-29': {
    '1. open': '0.2090',
    '2. high': '0.2380',
    '3. low': '0.0550',
    '4. close': '0.0560',
    '5. volume': '2513635'
  },
  '2012-05-31': {
    '1. open': '0.1450',
    '2. high': '0.2290',
    '3. low': '0.1350',
    '4. close': '0.1650',
    '5. volume': '1042232'
  },
  '2012-04-30': {
    '1. open': '0.1820',
    '2. high': '0.1900',
    '3. low': '0.1230',
    '4. close': '0.1520',
    '5. volume': '1237844'
  },
  '2012-03-30': {
    '1. open': '4.2000',
    '2. high': '4.7000',
    '3. low': '0.1640',
    '4. close': '0.1940',
    '5. volume': '10485351'
  },
  '2012-02-29': {
    '1. open': '5.8000',
    '2. high': '7.5000',
    '3. low': '3.5600',
    '4. close': '4.2080',
    '5. volume': '314272'
  },
  '2012-01-31': {
    '1. open': '5.5550',
    '2. high': '6.5000',
    '3. low': '5.0500',
    '4. close': '5.6430',
    '5. volume': '123300'
  },
  '2011-12-30': {
    '1. open': '7.4900',
    '2. high': '8.2990',
    '3. low': '4.8200',
    '4. close': '5.5000',
    '5. volume': '237558'
  },
  '2011-11-30': {
    '1. open': '8.3900',
    '2. high': '9.4900',
    '3. low': '7.2500',
    '4. close': '7.5000',
    '5. volume': '298616'
  },
  '2011-10-31': {
    '1. open': '5.8800',
    '2. high': '8.8000',
    '3. low': '5.8800',
    '4. close': '8.4200',
    '5. volume': '292084'
  },
  '2011-09-30': {
    '1. open': '5.3200',
    '2. high': '6.7390',
    '3. low': '4.7000',
    '4. close': '5.5000',
    '5. volume': '206467'
  },
  '2011-08-31': {
    '1. open': '6.3490',
    '2. high': '6.4990',
    '3. low': '4.3210',
    '4. close': '5.1400',
    '5. volume': '203851'
  },
  '2011-07-29': {
    '1. open': '7.0000',
    '2. high': '7.3700',
    '3. low': '5.8520',
    '4. close': '6.3500',
    '5. volume': '193844'
  },
  '2011-06-30': {
    '1. open': '8.1000',
    '2. high': '8.2000',
    '3. low': '5.7700',
    '4. close': '6.7500',
    '5. volume': '193683'
  },
  '2011-05-31': {
    '1. open': '7.2100',
    '2. high': '9.0000',
    '3. low': '6.2500',
    '4. close': '8.2480',
    '5. volume': '412880'
  },
  '2011-04-29': {
    '1. open': '5.1490',
    '2. high': '7.6000',
    '3. low': '5.1000',
    '4. close': '7.2000',
    '5. volume': '400339'
  },
  '2011-03-31': {
    '1. open': '6.2100',
    '2. high': '6.4000',
    '3. low': '4.1510',
    '4. close': '5.0950',
    '5. volume': '357072'
  },
  '2011-02-28': {
    '1. open': '7.3500',
    '2. high': '7.9000',
    '3. low': '6.2100',
    '4. close': '6.4400',
    '5. volume': '135298'
  },
  '2011-01-31': {
    '1. open': '5.8000',
    '2. high': '7.7680',
    '3. low': '5.8000',
    '4. close': '7.1500',
    '5. volume': '126606'
  },
  '2010-12-30': {
    '1. open': '6.5800',
    '2. high': '6.9200',
    '3. low': '5.0000',
    '4. close': '5.8000',
    '5. volume': '212080'
  },
  '2010-11-30': {
    '1. open': '9.3000',
    '2. high': '9.3000',
    '3. low': '6.3000',
    '4. close': '6.8000',
    '5. volume': '246490'
  },
  '2010-10-29': {
    '1. open': '8.3000',
    '2. high': '10.5400',
    '3. low': '7.6730',
    '4. close': '9.1000',
    '5. volume': '211282'
  },
  '2010-09-29': {
    '1. open': '12.9750',
    '2. high': '13.1000',
    '3. low': '8.1210',
    '4. close': '8.4450',
    '5. volume': '226414'
  },
  '2010-08-31': {
    '1. open': '10.1000',
    '2. high': '14.6000',
    '3. low': '9.7200',
    '4. close': '12.9450',
    '5. volume': '349855'
  },
  '2010-07-30': {
    '1. open': '7.2500',
    '2. high': '9.9000',
    '3. low': '6.8000',
    '4. close': '9.7400',
    '5. volume': '187517'
  },
  '2010-06-30': {
    '1. open': '6.0000',
    '2. high': '7.6500',
    '3. low': '5.9000',
    '4. close': '7.3500',
    '5. volume': '70879'
  },
  '2010-05-31': {
    '1. open': '7.7000',
    '2. high': '7.7500',
    '3. low': '4.5600',
    '4. close': '6.4500',
    '5. volume': '153118'
  },
  '2010-04-30': {
    '1. open': '7.5000',
    '2. high': '8.5000',
    '3. low': '6.7010',
    '4. close': '7.7000',
    '5. volume': '71625'
  },
  '2010-03-31': {
    '1. open': '4.6000',
    '2. high': '6.9000',
    '3. low': '4.2000',
    '4. close': '6.9000',
    '5. volume': '22962'
  },
  '2010-02-26': {
    '1. open': '3.7000',
    '2. high': '3.9000',
    '3. low': '3.6000',
    '4. close': '3.9000',
    '5. volume': '7008'
  },
  '2010-01-29': {
    '1. open': '4.1700',
    '2. high': '5.0500',
    '3. low': '3.5000',
    '4. close': '3.5000',
    '5. volume': '20645'
  },
  '2009-12-30': {
    '1. open': '1.9000',
    '2. high': '4.0800',
    '3. low': '1.9000',
    '4. close': '3.8500',
    '5. volume': '11752'
  },
  '2009-11-30': {
    '1. open': '1.9800',
    '2. high': '2.0800',
    '3. low': '1.8700',
    '4. close': '1.9000',
    '5. volume': '4600'
  },
  '2008-12-19': {
    '1. open': '2.4000',
    '2. high': '2.4000',
    '3. low': '2.4000',
    '4. close': '2.4000',
    '5. volume': '400'
  },
  '2008-11-27': {
    '1. open': '4.2000',
    '2. high': '4.2000',
    '3. low': '4.0000',
    '4. close': '4.0000',
    '5. volume': '419'
  },
  '2008-10-27': {
    '1. open': '4.5500',
    '2. high': '4.5500',
    '3. low': '3.7500',
    '4. close': '3.7500',
    '5. volume': '260'
  }
};

// tslint:disable:max-line-length
export const siemensHealthineersCompany: Company = {
  id: 1082,
  name: 'Siemens Healthineers AG',
  country: Country.Deutschland,
  city: 'München',
  url: 'http://www.healthcare.siemens.de/',
  description: 'Die Siemens Healthineers AG ist die Muttergesellschaft, unter der die Tochtergesellschaften für die medizintechnischen Aktivitäten der Siemens AG zusammengefasst sind. Der Name „Healthineers“ ist ein Kofferwort aus „healthcare“, „engineer“ und „pioneer“.',
  link_wikipedia: 'https://de.wikipedia.org/wiki/Siemens_Healthineers',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Siemens_Healthineers_logo.svg/500px-Siemens_Healthineers_logo.svg.png',
  products: [
    {
      id: 108210,
      name: 'Magnetom Vida',
    },
    {
      id: 108211,
      name: 'Acuson Sequoia',
    },
    {
      id: 108212,
      name: 'Somatom Drive',
    },
    {
      id: 108213,
      name: 'Multitom Rax',
    },
    {
      id: 108214,
      name: 'Artis pheno',
    },
    {
      id: 108215,
      name: 'epoc Blood Analysis System',
    },
    {
      id: 108216,
      name: 'RAPIDLab 1200',
    },
    {
      id: 108217,
      name: 'RapidLab 348EX',
    },
    {
      id: 108218,
      name: 'RapidPoint 500',
    },
    {
      id: 108219,
      name: 'RapidPoint 400/405 Analysesysteme',
    },
    {
      id: 108220,
      name: 'RapidLyte',
    },
    {
      id: 108221,
      name: 'Status CS 200 Acute Diagnostik System',
      logo: ''
    },
    {
      id: 108222,
      name: 'DCA Vantage Analysesystem',
    },
    {
      id: 108223,
      name: 'CLINITEK Status+',
    },
    {
      id: 108224,
      name: 'CLINITEK Status Connect',
    },
    {
      id: 108225,
      name: 'CLINITEK Advantages Analyzer',
      logo: ''
    },
    {
      id: 108226,
      name: 'Multistix',
      logo: ''
    },
    {
      id: 108227,
      name: 'CLINITEK Microalbumin 2 Harnteststreifen',
    },
    {
      id: 108228,
      name: 'CLINITEK Microalbumin 9 Harnteststreifen',
      logo: ''
    },
    {
      id: 108229,
      name: 'CLINITEST hCG Schwangerschaftstest',
    },
    {
      id: 108230,
      name: 'CLINITEK Novus',
    }
  ],
  industries: [161210],
  currency: Currency.EUR,
  isin: 'DE000SHL1006',
  wkn: 'SHL100',
  symbol: 'SHL.DE',
  smallestTradeableUnit: 1,
  otherTradeableProducts: [],
  current_indices: [Indices.MDAX, Indices.TecDAX],
  end_of_month_prices: prices,
  dividends,
  tags: ['Healthcare', 'Diagnostik', 'Therapie', 'Labordiagnostik', 'Krankenhausmanagement']
};
// tslint:enable:max-line-length

