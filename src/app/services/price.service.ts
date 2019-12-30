import { CompanyStocks } from '../reducers/basket.reducer';

export class PriceService {
  constructor() {}

  getLatestPrice(fav: CompanyStocks): number {
    const latestPriceEntry = this.getLatestPriceEntry(fav);
    if (!latestPriceEntry || latestPriceEntry.length < 2 || latestPriceEntry[1]['4. close'] === undefined) {
      return 0;
    }
    const closePrice = latestPriceEntry[1]['4. close'];
    if (isNaN(parseFloat(closePrice))) {
      return 0;
    }
    return parseFloat(closePrice) * fav.amount;
  }

  getLatestPriceEntry(fav: CompanyStocks): any[] {
    if (Object.entries(fav.company.end_of_month_prices).length === 0) {
      return [];
    }
    return Object.entries(fav.company.end_of_month_prices)[0];
  }

  getDateOfLastPriceEntry(fav: CompanyStocks) {
    const latestPriceEntry = this.getLatestPriceEntry(fav);
    if (!latestPriceEntry || latestPriceEntry.length < 2) {
      return 'nicht bekannt';
    }
    return latestPriceEntry[0];
  }

  getPerformanceFor(prices: any, yearDiff: number) {
    const thisYear = 2019; // TODO: new Date().getFullYear();
    let result = null;
    let newestPrice = null;
    // take last price we have
    Object.entries(prices).forEach((price: any, counter: number) => {
      if (counter === 0) {
        newestPrice = parseFloat(price[1]['4. close']);
      } else {
        const priceYear = parseInt(price[0].toString().substr(0, 4), 10);
        if (!isNaN(priceYear) && thisYear - priceYear === yearDiff && !result) {
          const oldPrice = parseFloat(price[1]['4. close']);
          result = !isNaN(oldPrice) ? ((newestPrice * 100 / oldPrice) - 100) : 0;
        }
      }
    });
    return result;
  }


}
