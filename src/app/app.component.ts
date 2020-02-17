import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { BasketActions } from './actions';
import { Route, Router, RouterEvent, NavigationEnd } from '@angular/router';

declare global {
  interface Window { ga: any; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'wertpapiersparen';
  constructor(private store: Store<fromRoot.AppState>,
              public router: Router) {
      this.router.events.subscribe((event) => {
        console.log('event : ', event);
        if (event instanceof NavigationEnd) {
          console.log('YESSSSS!');
          if (window.ga !== undefined) {
            window.ga('set', 'page', event.urlAfterRedirects);
            window.ga('send', 'pageview');
          }
        }
      });
  }

  ngOnInit(): void {
    this.store.dispatch(BasketActions.getFavourites({}));
    this.store.dispatch(BasketActions.getSparplanSum({}));
  }
}
