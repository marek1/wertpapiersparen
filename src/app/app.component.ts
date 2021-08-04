import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { BasketActions } from './actions';
import { Route, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { AmountOfItem } from './reducers/basket.reducer';

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
        if (event instanceof NavigationEnd) {
          if (window.ga !== undefined) {
            window.ga('set', 'page', event.urlAfterRedirects);
            window.ga('send', 'pageview');
            if (event.urlAfterRedirects === '/mein-sparplan') {
              this.store.pipe(select(fromRoot.getFavouredSecurities)).subscribe((fav: AmountOfItem[]) => {
                window.ga('send', 'event', 'sparplan', 'sparplan_created_and_viewed', '', fav.length);
              });
            }
          }
        }
      });
  }

  ngOnInit(): void {
    this.store.dispatch(BasketActions.getFavourites());
    this.store.dispatch(BasketActions.getSparplanSum());
  }
}
