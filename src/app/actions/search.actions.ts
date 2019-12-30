import { createAction, props } from '@ngrx/store';
import { SelectedIndustry } from '../interfaces/selectedIndustry';

export const setSelectedSearchMethodAction = createAction(
  '[Companies-Home Component] Set Selected SearchMethod',
  props<{selectedSearchMethod: number}>()
);

export const addToSelectedIndustries = createAction(
  '[Companies-By-Industry Component] Add To Selected Industry',
  props<{selectedIndustries: SelectedIndustry}>()
);

export const removeFromSelectedIndustries = createAction(
  '[Companies-By-Industry Component] Remove from Selected Industries',
  props<{endPosition: number}>()
);

export const updateCompaniesSearchTerm = createAction(
  '[Companies-By-SearchTerm Component] Update SearchTerm',
  props<{searchTerm: string}>()
);

export const updateProductFilter = createAction(
  '[Companies-By-Product Component] Update ProductFilter',
  props<{productFilter: string}>()
);

export const updateEtfsSearchTerm = createAction(
  '[Etfs-By-SearchTerm Component] Update SearchTerm',
  props<{searchTerm: string}>()
);
