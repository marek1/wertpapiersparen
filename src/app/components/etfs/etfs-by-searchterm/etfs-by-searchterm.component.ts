import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Country } from '../../../enums/country';
import { IndustryService } from '../../../services/industry.service';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { SearchActions } from '../../../actions';
import { Etfs } from '../../../data/etfs';
import { CompanyShort, Etf } from '../../../interfaces/etf';

@Component({
  selector: 'app-etfs-by-searchterm',
  templateUrl: './etfs-by-searchterm.component.html',
  styleUrls: ['./etfs-by-searchterm.component.scss']
})
export class EtfsBySearchtermComponent implements OnInit {

  public searchTerm$: Observable<string>;
  public submitted: boolean;
  public results: Etf[];
  public searchTermFormControl: FormControl;
  public Countries: typeof Country;

  constructor(private industryService: IndustryService, private store: Store<fromRoot.AppState>) {
    this.submitted = false;
    this.results = [];
    this.searchTermFormControl = new FormControl();
    this.searchTermFormControl.valueChanges.subscribe((val) => {
      this.store.dispatch(SearchActions.updateEtfsSearchTerm({searchTerm: val}));
    });
    this.Countries = Country;
  }

  ngOnInit() {
    this.searchTerm$ = this.store.pipe(select(fromRoot.getEtfsSearchTerm));
    this.searchTerm$.subscribe((val) => {
      console.log('val : ', val);
      this.searchTermFormControl.setValue(val);
      if (val && val.length > 0) {
        this.results = this.searchWithinEtfs(val);
      } else {
        this.results = [];
      }
    });
  }

  searchWithinEtfs(val: string) {
    console.log('val #2 : ', val);
    let x = Etfs.filter((etf: Etf) => {
      return etf.name.toLowerCase().indexOf(val.toLowerCase()) > -1
        || etf.description.toLowerCase().indexOf(val.toLowerCase()) > -1
        || etf.isin.toLowerCase().indexOf(val.toLowerCase()) > -1
        || etf.manager.toLowerCase().indexOf(val.toLowerCase()) > -1
        || etf.issuer.toLowerCase().indexOf(val.toLowerCase()) > -1
        || this.isInCompanies(etf.shares, val).length > 0;
    });
    console.log('xx : ', x);
    return x;
  }

  isInCompanies(comps: CompanyShort[], val: string) {
    return comps.filter((compShort: CompanyShort) => {
      return compShort.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
    });
  }

}
