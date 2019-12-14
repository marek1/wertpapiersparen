import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CompanyStocks } from '../../reducers/basket.reducer';
import { PriceService } from '../../services/price.service';
import { IndustryService } from '../../services/industry.service';
import { industries } from '../../data/industries';

interface AmountByIndustry {
  amount: number;
  industryIds: number[];
}

@Component({
  selector: 'app-industry-chart',
  templateUrl: './industry-chart.component.html',
  styleUrls: ['./industry-chart.component.scss']
})
export class IndustryChartComponent implements OnInit, OnChanges {

  @Input() companyStocks: CompanyStocks[];
  // produce an array where you can see a
  public amountByIndustry: AmountByIndustry[];

  constructor(private priceService: PriceService, private industryService: IndustryService) { }

  ngOnInit() {
    console.log('ÖÖÖÖÖ : ', this.industryService.iterateThroughChildren(industries, 1410));
    console.log('LLLL : ', this.industryService.getTopLevelIndustry([141010, 141011, 141016, 141017], 2));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.amountByIndustry = [];
    this.goThroughData();
  }

  goThroughData() {
    this.companyStocks.map((companyStock: CompanyStocks) => {
      this.manageData(companyStock);
    });
  }

  manageData(companyStock: CompanyStocks) {
    // go through array and check if industry already exists
    // if yes, add amount
    // if not, then add the object
    const foundItems: AmountByIndustry[] = this.amountByIndustry.filter(x => x.industryIds === companyStock.company.industries);
    console.log('foundItems : ', foundItems);
    if (foundItems.length === 0) {
      this.amountByIndustry.push({
        amount: this.priceService.getLatestPrice(companyStock),
        industryIds: this.industryService.getTopLevelIndustry(companyStock.company.industries, 2)
      });
    } else {
      foundItems[0].amount += this.priceService.getLatestPrice(companyStock);
    }
    console.log('this.amountByIndustry : ', this.amountByIndustry);
  }

}
