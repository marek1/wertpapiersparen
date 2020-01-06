import { Component, OnInit } from '@angular/core';
import { Company } from '../../../interfaces/company';
import { IndustryService } from '../../../services/industry.service';
import { Industries } from '../../../data/industries';
import { FormControl } from '@angular/forms';
import { Country } from '../../../enums/country';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { Observable } from 'rxjs';
import { CompaniesActions } from '../../../actions';
import { Product } from '../../../interfaces/product';
import { Companies } from '../../../data/companies';

@Component({
  selector: 'app-companies-by-searchterm',
  templateUrl: './companies-by-searchterm.component.html',
  styleUrls: ['./companies-by-searchterm.component.scss']
})
export class CompaniesBySearchtermComponent implements OnInit {

  public searchTerm$: Observable<string>;
  public submitted: boolean;
  public results: Company[];
  public searchTermFormControl: FormControl;
  public Countries: typeof Country;

  constructor(private industryService: IndustryService, private store: Store<fromRoot.AppState>) {
    this.submitted = false;
    this.results = [];
    this.searchTermFormControl = new FormControl();
    this.searchTermFormControl.valueChanges.subscribe((val) => {
      this.store.dispatch(CompaniesActions.updateCompaniesSearchTerm({searchTerm: val}));
    });
    this.Countries = Country;
  }

  ngOnInit() {
    this.searchTerm$ = this.store.pipe(select(fromRoot.getCompaniesSearchTerm));
    this.searchTerm$.subscribe((val) => {
      this.searchTermFormControl.setValue(val);
      if (val && val.length > 0) {
        this.results = this.searchWithinCompanies(val);
      } else {
        this.results = [];
      }
    });
  }

  searchWithinCompanies(val: string) {
    return Companies.filter((comp: Company) => {
      return comp.name.toLowerCase().indexOf(val.toLowerCase()) > -1
      || comp.description.toLowerCase().indexOf(val.toLowerCase()) > -1
      || comp.tags.map(tag => tag.toLowerCase()).indexOf(val.toLowerCase()) > -1
      || comp.city.toLowerCase().indexOf(val.toLowerCase()) > -1
      || comp.wkn.toLowerCase().indexOf(val.toLowerCase()) > -1
      || comp.isin.toLowerCase().indexOf(val.toLowerCase()) > -1
      || comp.symbol.toLowerCase().indexOf(val.toLowerCase()) > -1
      || this.getIndustryName(comp.industries, val).length > 0
      || this.getProductName(comp.products, val).length > 0;
    });
  }

  getIndustryName(industryIds: number[], val: string) {
    return industryIds.filter((industryId) => {
      const foundIndustry = this.industryService.iterateThroughChildren(Industries, industryId);
      return foundIndustry.description.toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
    });
  }

  getProductName(products: Product[], val: string) {
    return products.filter((product) => product.name.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
  }
}
