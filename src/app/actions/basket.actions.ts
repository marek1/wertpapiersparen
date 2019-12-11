import { createAction, props } from '@ngrx/store';
import { Company } from '../interfaces/company';

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
