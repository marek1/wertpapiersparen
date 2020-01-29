import { Etf } from '../../../interfaces/etf';
import { isharesMsciEuropeSriThesaurierend } from './isharesMsciEuropeSriThesaurierend';

const prices = {
  '2020-12-30': {'1. open': '5.95', '4. close': '5.97'},
  '2019-12-30': {'1. open': '5.04', '4. close': '5.98'},
};
// tslint:disable:max-line-length
export const isharesMsciEuropeSriAusschuettend: Etf = {
  id: 5006,
  ...isharesMsciEuropeSriThesaurierend,
  name: 'iShares MSCI Europe SRI UCITS (ausschüttend) - Währung: EURO',
  url: 'https://www.ishares.com/de/privatanleger/de/produkte/306549/',
  isin: 'IE00BGDPWW94',
  symbol: '36B3.DE',
  gewinn: 'ausschüttend',
  ter: 0.3,
  end_of_month_prices: null,
  yields: [ // kumulativ
    // no data yet
  ]
};
// tslint:enable:max-line-length

