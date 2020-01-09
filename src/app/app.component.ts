import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { BasketActions } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stockpicking';
  constructor(private store: Store<fromRoot.AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(BasketActions.getFavourites({}));
    this.store.dispatch(BasketActions.getSparplanSum({}));
  }
}
