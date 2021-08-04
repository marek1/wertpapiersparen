import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Company } from '../../../interfaces/company';
import { Companies } from '../../../data/companies';
import { ROUTE_COMPANIES } from '../../../routes';

@Component({
  selector: 'app-companies-list-in-industry',
  templateUrl: './companies-list-in-industry.component.html',
  styleUrls: ['./companies-list-in-industry.component.scss']
})
export class CompaniesListInIndustryComponent implements OnInit, OnChanges {

  @Input() industryId: number;

  public foundSecurities: Company[];

  public ROUTE_COMPANIES = ROUTE_COMPANIES;

  constructor() {
    this.foundSecurities = [];
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.industryId  && changes.industryId.currentValue) {
      this.retrieveSecurities(changes.industryId.currentValue);
    }
  }

  retrieveSecurities(industryId: number) {
    this.foundSecurities = Companies.filter((company: Company) => company.industries.includes(industryId));
  }

}
