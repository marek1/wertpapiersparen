import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../../interfaces/company';
import { IndustryService } from '../../../services/industry.service';

@Component({
  selector: 'app-company-industries',
  templateUrl: './company-industries.component.html',
  styleUrls: ['./company-industries.component.scss']
})
export class CompanyIndustriesComponent implements OnInit {

  @Input() company: Company;
  public showResults: number;
  public initialNumber: number;

  constructor(private industryService: IndustryService) {
    this.showResults = 0;
    this.initialNumber = 3;
  }

  ngOnInit() {
    this.showResults = this.company.industries.length > this.initialNumber ? this.initialNumber : this.company.industries.length;
  }

  getIndustryName(industryId: number) {
    return this.industryService.getIndustryName(industryId);
  }

}
