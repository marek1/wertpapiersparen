import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import { BasketActions } from '../../../actions';

@Component({
  selector: 'app-sparplan-sum',
  templateUrl: './sparplan-sum.component.html',
  styleUrls: ['./sparplan-sum.component.scss']
})
export class SparplanSumComponent implements OnInit {

  public sparplanSum$: Observable<number>;

  constructor(private store: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.sparplanSum$ = this.store.pipe(select(fromRoot.getSparplanSum));
  }

  updateSparplanTotal(x) {
    this.store.dispatch(BasketActions.updateSparplanSum({sum: x}));
  }

}
