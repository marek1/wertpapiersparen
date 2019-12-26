import { createAction, props } from '@ngrx/store';
import { SelectedIndustry } from '../interfaces/selectedIndustry';

export const setSelectedSearchMethodAction = createAction(
  '[Home Component] Set Selected SearchMethod',
  props<{selectedSearchMethod: number}>()
);

export const addToSelectedIndustries = createAction(
  '[By-Industry Component] Add To Selected Industry',
  props<{selectedIndustries: SelectedIndustry}>()
);

export const removeFromSelectedIndustries = createAction(
  '[By-Industry Component] Remove from Selected Industries',
  props<{endPosition: number}>()
);

export const updateSearchTerm = createAction(
  '[By-SearchTerm Component] Update SearchTerm',
  props<{searchTerm: string}>()
);

export const updateProductFilter = createAction(
  '[By-Product Component] Update ProductFilter',
  props<{productFilter: string}>()
);
