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

}
