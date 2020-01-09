import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BasketActions } from '../actions';
import { exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { BasketService } from '../services/basket.service';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BasketEffects {

  getItems$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(BasketActions.getFavourites.type),
        exhaustMap(() => {
          return this.basketService.getBasket()
            .pipe(
              map(items => BasketActions.getFavouritesFromLocalStorageSuccess({items})),
              catchError(error => of(BasketActions.getFromLocalStorageFailed({ error })))
            );
        })
      );
    }
  );

  pushItems$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(
          BasketActions.addToFavourites.type,
          BasketActions.removeFromFavourites.type,
          BasketActions.updateFavourites.type,
        ),
        withLatestFrom(
          this.store.pipe(select(fromRoot.getFavouredSecurities))
        ),
        exhaustMap(([company, itemList]) => {
          return this.basketService.setBasket(itemList)
            .pipe(
              map(items => BasketActions.savedToLocalStorageSuccess({success: items.toString()})),
              catchError(error => of(BasketActions.savedToLocalStorageFailed({ error })))
            );
        })
      );
    }
  );

  getSparplanSum$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(BasketActions.getSparplanSum.type),
        exhaustMap(() => {
          return this.basketService.getSparplanSum()
            .pipe(
              map(sum => BasketActions.getSparplansumFromLocalStorageSuccess({sum})),
              catchError(error => of(BasketActions.getFromLocalStorageFailed({ error })))
            );
        })
      );
    }
  );

  pushSparplanSum$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(
          BasketActions.updateSparplanSum.type,
        ),
        withLatestFrom(
          this.store.pipe(select(fromRoot.getSparplanSum))
        ),
        exhaustMap(([company, sum]) => {
          return this.basketService.setSparplanSum(sum)
            .pipe(
              map(items => BasketActions.savedToLocalStorageSuccess({success: sum.toString()})),
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
