import { createAction, props } from '@ngrx/store';

export const setSelectedSearchMethod = createAction(
  '[Etfs-Home Component] Set Selected SearchMethod',
  props<{selectedSearchMethod: number}>()
);

export const updateEtfsSearchTerm = createAction(
  '[Etfs-By-SearchTerm Component] Update SearchTerm',
  props<{searchTerm: string}>()
);
