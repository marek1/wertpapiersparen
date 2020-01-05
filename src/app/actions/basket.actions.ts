import { createAction, props } from '@ngrx/store';
import { Company } from '../interfaces/company';
import { AmountOfItem } from '../reducers/basket.reducer';
import { Etf } from '../interfaces/etf';

export const getFavourites = createAction(
  '[Detail Component] Retrieve Favourites (from Localstorage)',
  props<{}>()
);

export const addToFavourites = createAction(
  '[Detail Component] Add To Favourites',
  props<{item: Company|Etf}>()
);

export const removeFromFavourites = createAction(
  '[Detail Component] Remove from Favourites',
  props<{item: Company|Etf}>()
);

export const updateFavourites = createAction(
  '[Basket Component] Update a Favourite',
  props<{amount: number, item: Company|Etf}>()
);

export const setSelectedTab = createAction(
  '[Basket Component] Set Selected Tab',
  props<{selectedTab: number}>()
);

export const getFromLocalStorageSuccess = createAction(
  '[Basket Component] Retrieve From LocalStorage SUCCESS',
  props<{items: AmountOfItem[]}>()
);

export const getFromLocalStorageFailed = createAction(
  '[Basket Component] Retrieve From LocalStorage FAILED',
  props<{}>()
);

export const savedToLocalStorageSuccess = createAction(
  '[Basket Component] Saved To LocalStorage',
  props<{items: AmountOfItem[]}>()
);

export const savedToLocalStorageFailed = createAction(
  '[Basket Component] Saved To LocalStorage FAILED',
  props<{error: string}>()
);

