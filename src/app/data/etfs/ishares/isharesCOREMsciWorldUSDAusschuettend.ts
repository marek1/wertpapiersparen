import { Etf } from '../../../interfaces/etf';
import { Currency } from '../../../enums/currencies';
import { Country } from '../../../enums/country';
import { SecurityType } from '../../../enums/securityType';
import { isharesCOREMsciWorldUSDThesaurierend } from './isharesCOREMsciWorldUSDThesaurierend';
import { RiskClasses } from '../../../enums/riskClasses';

const prices = {
  '2020-01-29': {
    '1. open': '5.6280',
    '2. high': '5.7548',
    '3. low': '5.5628',
    '4. close': '5.6600',
    '5. volume': '556479'
  },
  '2019-12-30': {
    '1. open': '5.5188',
    '2. high': '5.6874',
    '3. low': '5.3794',
    '4. close': '5.6248',
    '5. volume': '1306314'
  },
  '2019-11-29': {
    '1. open': '5.3462',
    '2. high': '5.5230',
    '3. low': '5.3414',
    '4. close': '5.5020',
    '5. volume': '410024'
  },
  '2019-10-31': {
    '1. open': '5.3060',
    '2. high': '5.3554',
    '3. low': '5.1178',
    '4. close': '5.3174',
    '5. volume': '465745'
  },
  '2019-09-30': {
    '1. open': '5.1540',
    '2. high': '5.3426',
    '3. low': '5.1300',
    '4. close': '5.2830',
    '5. volume': '147788'
  },
  '2019-08-30': {
    '1. open': '5.1604',
    '2. high': '5.1934',
    '3. low': '4.9903',
    '4. close': '5.1554',
    '5. volume': '133151'
  },
  '2019-07-31': {
    '1. open': '5.2162',
    '2. high': '5.3514',
    '3. low': '5.2162',
    '4. close': '5.3112',
    '5. volume': '49512'
  }
};

// tslint:disable:max-line-length
export const isharesCOREMsciWorldUSDAusschuettend: Etf = {
  id: 5012,
  ...isharesCOREMsciWorldUSDThesaurierend,
  name: 'iShares MSCI Europe SRI UCITS (thesaurierend) - Währung: USD',
  url: 'https://www.ishares.com/de/privatanleger/de/produkte/309035/ishares-core-msci-world-ucits-etf-eur-hedged-dist-fund',
  isin: 'IE00BKBF6H24',
  symbol: 'IWLE',
  gewinn: 'thesaurierend',
  ter: 0.3,
  end_of_month_prices: prices,
  yields: [ // kumulativ
    // no data yet
  ]
};
// tslint:enable:max-line-length
