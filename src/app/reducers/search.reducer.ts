import { createReducer, on } from '@ngrx/store';
import { SearchActions } from '../actions';
import { SelectedIndustry } from '../interfaces/selectedIndustry';
import { SearchMethods } from '../enums/searchMethods';

export const featureKey = 'search';

export interface State {
  isLoading: boolean;
  errorMessage: string|null;
  selectedSearchMethod: number|null;
  selectedIndustries: SelectedIndustry[];
}

const initialState: State = {
  isLoading: false,
  errorMessage: null,
  selectedSearchMethod: SearchMethods.Industrie,
  selectedIndustries: [
    {
      id: 0,
      name: 'Alle Industrien'
    }
  ]
};

export const reducer = createReducer(
  initialState,
  // Actions to go here
  // i.e. on(action.actionName,,,,)
  on(SearchActions.setSelectedSearchMethodAction, (state, {selectedSearchMethod}) => ({
    ...state,
    selectedSearchMethod
  })),
  on(SearchActions.addToSelectedIndustries, (state, {selectedIndustries}) => ({
    ...state,
    selectedIndustries: [...state.selectedIndustries, selectedIndustries]
  })),
  on(SearchActions.removeFromSelectedIndustries, (state, {endPosition}) =>  ({
    ...state,
    selectedIndustries: state.selectedIndustries.slice(0, endPosition + 1)
  }))
);

export const getSelectedSearchMethod = (state: State) => state.selectedSearchMethod;
export const getSelectedIndustries = (state: State) => state.selectedIndustries;
