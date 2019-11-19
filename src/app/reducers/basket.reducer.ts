import { ChosenSecurity } from '../interfaces/chosenSecurity';
import { createReducer } from '@ngrx/store';

export const featureKey = 'basket';

export interface State {
  isLoading: boolean;
  errorMessage: string|null;
  items: ChosenSecurity[]|null;
}

const initialState: State = {
  isLoading: false,
  errorMessage: null,
  items: null
};

export const reducer = createReducer(
  initialState,
  // Actions to go here
  // i.e. on(action.actionName,,,,)
);
