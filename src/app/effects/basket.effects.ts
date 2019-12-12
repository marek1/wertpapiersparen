import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BasketActions } from '../actions';
import { exhaustMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { BasketService } from '../services/basket.service';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { CompanyStocks } from '../reducers/basket.reducer';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BasketEffects {

  getItems$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(BasketActions.getFavourites.type),
        exhaustMap(() => {
          console.log('effect fro gettonng from ….. ');
          return this.basketService.getBasket()
            .pipe(
              map(items => BasketActions.getFromLocalStorageSuccess({items})),
              catchError(error => of(BasketActions.getFromLocalStorageFailed({ error })))
            );
        })
      );
    }
  );

  pushItems$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(BasketActions.addToFavourites.type),
        withLatestFrom(
          this.store.pipe(select(fromRoot.getFavouredSecurities))
        ),
        exhaustMap(([company, itemList]) => {
          return this.basketService.setBasket(itemList)
            .pipe(
              map(items => BasketActions.savedToLocalStorageSuccess({items})),
              catchError(error => of(BasketActions.savedToLocalStorageFailed({ error })))
            );
        })
      );
    }
  );

  updateItems$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(BasketActions.updateFavourites.type),
        withLatestFrom(
          this.store.pipe(select(fromRoot.getFavouredSecurities))
        ),
        exhaustMap(([company, itemList]) => {
          return this.basketService.setBasket(itemList)
            .pipe(
              map(items => BasketActions.savedToLocalStorageSuccess({items})),
              catchError(error => of(BasketActions.savedToLocalStorageFailed({ error })))
            );
        })
      );
    }
  );


  constructor(
    private actions$: Actions,
    private store: Store<fromRoot.AppState>,
    private basketService: BasketService
  ) {}
}
