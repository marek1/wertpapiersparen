import { Component } from '@angular/core';
import { Industry } from '../../../interfaces/industry';
import { Industries } from '../../../data/industries';
import { SelectedIndustry } from '../../../interfaces/selectedIndustry';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { SearchActions } from '../../../actions';
import { IndustryService } from '../../../services/industry.service';

@Component({
  selector: 'app-companies-by-industry',
  templateUrl: './companies-by-industry.component.html',
  styleUrls: ['./companies-by-industry.component.scss']
})
export class CompaniesByIndustryComponent {

  // holding the level of selected industries
  public industriesInThisLevel: Industry[];
  public selectedIndustries$: Observable<SelectedIndustry[]>;
  private lastId: number;

  constructor(private industryService: IndustryService, private store: Store<fromRoot.AppState>) {
    this.industriesInThisLevel = [];
    this.selectedIndustries$ = this.store.pipe(select(fromRoot.getCompaniesSelectedIndustries));
    this.selectedIndustries$.subscribe((selectedIndustries: SelectedIndustry[]) => {
      this.lastId = selectedIndustries[selectedIndustries.length - 1].id;
      this.setIndustries();
    });
  }

  setIndustries() {
    if (this.lastId === 0) {
      this.industriesInThisLevel = Industries;
    } else {
      this.industriesInThisLevel = this.industryService.iterateThroughChildren(Industries, this.lastId).subIndustries;
    }
  }

  openIndustry(selectedIndustry: Industry) {
    this.store.dispatch(SearchActions.addToSelectedIndustries({selectedIndustries:
      {
        id: selectedIndustry.id,
        name: selectedIndustry.description
      }
    }));
  }

  goToBreadcrumb(i: number) {
    this.store.dispatch(SearchActions.removeFromSelectedIndustries({endPosition: i}));
  }

}
