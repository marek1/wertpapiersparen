import { createAction, props } from '@ngrx/store';
import { SelectedIndustry } from '../interfaces/selectedIndustry';

export const setSelectedSearchMethodAction = createAction(
  '[Home Component] Set Selected SearchMethod',
  props<{selectedSearchMethod: string}>()
);

export const addToSelectedIndustries = createAction(
  '[By-Industry Component] Add To Selected Industry',
  props<{selectedIndustries: SelectedIndustry}>()
);

export const removeFromSelectedIndustries = createAction(
  '[By-Industry Component] Remove from Selected Industries',
  props<{endPosition: number}>()
);
