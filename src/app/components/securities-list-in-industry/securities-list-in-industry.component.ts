import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { AllCompanies } from '../../data/companies';
import { Company } from '../../interfaces/company';

@Component({
  selector: 'app-securities-list-in-industry',
  templateUrl: './securities-list-in-industry.component.html',
  styleUrls: ['./securities-list-in-industry.component.scss']
})
export class SecuritiesListInIndustryComponent implements OnInit, OnChanges {

  @Input() industryId: number;

  public foundSecurities: Company[];

  constructor() {
    this.foundSecurities = [];
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.industryId  && changes.industryId.currentValue) {
      console.log('industryId : ', changes.industryId.currentValue);
      this.retrieveSecurities(changes.industryId.currentValue);
    }
  }

  retrieveSecurities(industryId: number) {
    this.foundSecurities = AllCompanies.filter((company: Company) => company.industries.indexOf(industryId) > -1);
  }
}
