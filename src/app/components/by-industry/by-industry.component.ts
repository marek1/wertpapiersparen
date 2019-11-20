import { Component } from '@angular/core';
import { Industry } from '../../interfaces/industry';
import { industries } from '../../data/industries';
import { SelectedIndustry } from '../../interfaces/selectedIndustry';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { SearchActions } from '../../actions';

@Component({
  selector: 'app-by-industry',
  templateUrl: './by-industry.component.html',
  styleUrls: ['./by-industry.component.scss']
})
export class ByIndustryComponent {

  // holding the level of selected industries
  public industriesInThisLevel: Industry[];
  public selectedIndustries$: Observable<SelectedIndustry[]>;
  private lastId: number;

  constructor(private store: Store<fromRoot.AppState>) {
    this.industriesInThisLevel = [];
    this.selectedIndustries$ = this.store.pipe(select(fromRoot.getSelectedIndustries));
    this.selectedIndustries$.subscribe((selectedIndustries: SelectedIndustry[]) => {
      this.lastId = selectedIndustries[selectedIndustries.length - 1].id;
      this.setIndustries();
    });
  }

  setIndustries() {
    if (this.lastId === 0) {
      this.industriesInThisLevel = industries;
    } else {
      this.industriesInThisLevel = this.iterateThroughChildren(industries);
    }
  }

  iterateThroughChildren(dataArray: Industry[]): Industry[] {
    for (const dataItem of dataArray) {
      if (dataItem.id === this.lastId) {
        return dataItem.subIndustries;
        break;
      }
    }
    let concatSubs = [];
    for (const dataItem1 of dataArray) {
      if (dataItem1.subIndustries) {
        concatSubs = concatSubs.concat(dataItem1.subIndustries);
      }
    }
    return this.iterateThroughChildren(concatSubs);
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
