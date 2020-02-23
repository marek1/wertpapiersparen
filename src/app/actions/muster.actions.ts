import { createAction, props } from '@ngrx/store';

export const setSelectedInvestmentOption = createAction(
  '[Muster-Sparplan] Set Investment Option',
  props<{selectedInvestmentOption: string|null}>()
);

export const setSelectedRiskProfile = createAction(
  '[Muster-Sparplan] Set Risk Profile',
  props<{selectedRiskProfile: number}>()
);
