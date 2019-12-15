import { Component, OnInit } from '@angular/core';
import { AllCompanies } from '../../data/companies';
import { Company } from '../../interfaces/company';
import { Industry } from '../../interfaces/industry';
import { IndustryService } from '../../services/industry.service';
import { industries } from '../../data/industries';
import { FormControl } from '@angular/forms';
import { Country } from '../../enums/country';

@Component({
  selector: 'app-by-searchterm',
  templateUrl: './by-searchterm.component.html',
  styleUrls: ['./by-searchterm.component.scss']
})
export class BySearchtermComponent implements OnInit {

  public submitted: boolean;
  public results: Company[];
  public searchTermFormControl: FormControl;

  public Countries = Country;

  constructor(private industryService: IndustryService) {
    this.submitted = false;
    this.results = [];

    this.searchTermFormControl = new FormControl();
    this.searchTermFormControl.valueChanges.subscribe((val) => {
      if (val && val.length > 0) {
        this.results = this.searchWithinCompanies(val);
      } else {
        this.results = [];
      }
    });
  }

  ngOnInit() {
  }

  searchWithinCompanies(val: string) {
    return AllCompanies.filter((comp: Company) => {
      return comp.name.toLowerCase().indexOf(val.toLowerCase()) > -1
      || comp.description.toLowerCase().indexOf(val.toLowerCase()) > -1
      || comp.tags.map(tag => tag.toLowerCase()).indexOf(val.toLowerCase()) > -1
      || comp.city.toLowerCase().indexOf(val.toLowerCase()) > -1
      || comp.wkn.toLowerCase().indexOf(val.toLowerCase()) > -1
      || comp.isin.toLowerCase().indexOf(val.toLowerCase()) > -1
      || comp.symbol.toLowerCase().indexOf(val.toLowerCase()) > -1
      || this.getIndustryName(comp.industries, val).length > 0;
    });
  }

  getIndustryName(industryIds: number[], val: string) {
    return industryIds.filter((industryId) => {
      const foundIndustry = this.industryService.iterateThroughChildren(industries, industryId);
      return foundIndustry.description.toLowerCase().indexOf(val.toLowerCase()) > -1;
    });
  }

}
