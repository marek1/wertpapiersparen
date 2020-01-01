import { createAction, props } from '@ngrx/store';
import { Company } from '../interfaces/company';
import { CompanyStocks } from '../reducers/basket.reducer';

export const getFavourites = createAction(
  '[Detail Component] Retrieve Favourites (from Localstorage)',
  props<{}>()
);

export const addToFavourites = createAction(
  '[Detail Component] Add To Favourites',
  props<{company: Company}>()
);

export const removeFromFavourites = createAction(
  '[Detail Component] Remove from Favourites',
  props<{company: Company}>()
);

export const updateFavourites = createAction(
  '[Basket Component] Update a Favourite',
  props<{amount: number, company: Company}>()
);

export const setSelectedTabAction = createAction(
  '[Basket Component] Set Selected Tab',
  props<{selectedTab: number}>()
);

export const getFromLocalStorage = createAction(
  '[Basket Component] Retrieve From LocalStorage',
  props<{}>()
);

export const getFromLocalStorageSuccess = createAction(
  '[Basket Component] Retrieve From LocalStorage SUCCESS',
  props<{items: CompanyStocks[]}>()
);

export const getFromLocalStorageFailed = createAction(
  '[Basket Component] Retrieve From LocalStorage FAILED',
  props<{}>()
);

export const savedToLocalStorageSuccess = createAction(
  '[Basket Component] Saved To LocalStorage',
  props<{items: CompanyStocks[]}>()
);

export const savedToLocalStorageFailed = createAction(
  '[Basket Component] Saved To LocalStorage FAILED',
  props<{error: string}>()
);

