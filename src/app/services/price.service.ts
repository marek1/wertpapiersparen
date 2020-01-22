import { AmountOfItem } from '../reducers/basket.reducer';

export class PriceService {
  thisYear: number;
  constructor() {
    this.thisYear = 2019; // TODO: new Date().getFullYear();
  }

  getLatestPrice(fav: AmountOfItem): number {
    const latestPriceEntry = this.getLatestPriceEntry(fav);
    if (!latestPriceEntry || latestPriceEntry.length < 2 || latestPriceEntry[1]['4. close'] === undefined) {
      return 0;
    }
    const closePrice = latestPriceEntry[1]['4. close'];
    if (isNaN(parseFloat(closePrice))) {
      return 0;
    }
    return parseFloat(closePrice);
  }

  getLatestTotalPrice(fav: AmountOfItem): number {
    return this.getLatestPrice(fav) * fav.amount;
  }

  getLatestPriceEntry(fav: AmountOfItem): any[] {
    if (Object.entries(fav.item.end_of_month_prices).length === 0) {
      return [];
    }
    return Object.entries(fav.item.end_of_month_prices)[0];
  }

  getDateOfLastPriceEntry(fav: AmountOfItem) {
    const latestPriceEntry = this.getLatestPriceEntry(fav);
    if (!latestPriceEntry || latestPriceEntry.length < 2) {
      return 'nicht bekannt';
    }
    return latestPriceEntry[0];
  }

  getPerformanceFor(prices: any, yearDiff: number) {
    const pricePair = this.getPriceAt(prices, yearDiff);
    return !isNaN(pricePair[1]) && !isNaN(pricePair[0]) ? ((pricePair[0] - pricePair[1]) / pricePair[1]) * 100 : 0;
  }

  getPriceAt(prices: any, yearDiff: number) {
    let newestPrice = 0;
    let priceInYear = 0;
    // take last price we have
    Object.entries(prices).forEach((price: any, counter: number) => {
      if (counter === 0) {
        newestPrice = parseFloat(price[1]['4. close']);
      } else {
        const priceYear = parseInt(price[0].toString().substr(0, 4), 10);
        if (!isNaN(priceYear) && this.thisYear - priceYear === yearDiff && !priceInYear) {
          priceInYear = parseFloat(price[1]['4. close']);
        }
      }
    });
    return [newestPrice, priceInYear];
  }

  getNetSum(items: AmountOfItem[], currency: string) {
    let returnValue = 0;
    items.map((item) => {
      if (item.item.currency === currency) {
        returnValue += this.getLatestTotalPrice(item);
      }
    });
    return returnValue;
  }


}
