import { createAction, props } from '@ngrx/store';
import { SearchMethods } from '../enums/searchMethods';

export const setSelectedSearchMethodAction = createAction(
  '[Home Component] Set Selected SearchMethod',
  props<{selectedSearchMethod: string}>()
);
