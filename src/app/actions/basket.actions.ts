import { createAction, props } from '@ngrx/store';
import { Company } from '../interfaces/company';
import { AmountOfItem } from '../reducers/basket.reducer';
import { Etf } from '../interfaces/etf';

export const ADD_TO_FAVOURITIES = 'Detail Component] Add To Favourites';

export const getFavourites = createAction(
  '[Detail Component] Retrieve Favourites (from Localstorage)',
  props<{}>()
);

export const getFavouritesFromLocalStorageSuccess = createAction(
  '[Basket Component] Retrieve Favourites From LocalStorage SUCCESS',
  props<{items: AmountOfItem[]}>()
);

export const addToFavourites = createAction(
  ADD_TO_FAVOURITIES,
  props<{item: Company|Etf}>()
);

export const removeFromFavourites = createAction(
  '[Detail Component] Remove from Favourites',
  props<{item: Company|Etf}>()
);

export const updateFavourites = createAction(
  '[Basket Component] Update a Favourite',
  props<{amount: number|null, savingRate: number|null, item: Company|Etf}>()
);

export const setSelectedTab = createAction(
  '[Basket Component] Set Selected Tab',
  props<{selectedTab: number}>()
);


export const getFromLocalStorageFailed = createAction(
  '[Basket Component] Retrieve From LocalStorage FAILED',
  props<{error: string}>()
);

export const savedToLocalStorageSuccess = createAction(
  '[Basket Component] Saved To LocalStorage',
  props<{success: string}>()
);

export const savedToLocalStorageFailed = createAction(
  '[Basket Component] Saved To LocalStorage FAILED',
  props<{error: string}>()
);

export const getSparplanSum = createAction(
  '[Basket Component] Retrieve Sparplan Sum (from Localstorage)',
  props<{}>()
);

export const getSparplansumFromLocalStorageSuccess = createAction(
  '[Basket Component] Retrieve Sparplan Sum From LocalStorage SUCCESS',
  props<{sum: number}>()
);

export const updateSparplanSum = createAction(
  '[Basket Component] Update Sparplan Sum',
  props<{sum: number}>()
);
