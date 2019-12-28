import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { AllCompanies } from '../../data/companies';
import { Company } from '../../interfaces/company';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { BasketActions } from '../../actions';

@Component({
  selector: 'app-securities-list-in-industry',
  templateUrl: './securities-list-in-industry.component.html',
  styleUrls: ['./securities-list-in-industry.component.scss']
})
export class SecuritiesListInIndustryComponent implements OnInit, OnChanges {

  @Input() industryId: number;

  public foundSecurities: Company[];

  constructor(private store: Store<fromRoot.AppState>) {
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
    this.foundSecurities = AllCompanies.filter((company: Company) => company.industries.includes(industryId));
  }

}
