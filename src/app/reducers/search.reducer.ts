import { ChosenSecurity } from '../interfaces/chosenSecurity';
import { createReducer, on } from '@ngrx/store';
import { SearchMethods } from '../enums/searchMethods';
import { SearchActions } from '../actions';

export const featureKey = 'search';

export interface State {
  isLoading: boolean;
  errorMessage: string|null;
  selectedSearchMethod: string|null;
}

const initialState: State = {
  isLoading: false,
  errorMessage: null,
  selectedSearchMethod: null
};

export const reducer = createReducer(
  initialState,
  // Actions to go here
  // i.e. on(action.actionName,,,,)
  on(SearchActions.setSelectedSearchMethodAction, (state, {selectedSearchMethod}) => ({
    ...state,
    selectedSearchMethod
  })),
);

export const getSelectedSearchMethod = (state: State) => state.selectedSearchMethod;


