import { SearchMethods } from '../enums/searchMethods';
import { createReducer, on } from '@ngrx/store';
import { EtfsActions } from '../actions';

export const featureKey = 'etfs';

export interface State {
  isLoading: boolean;
  errorMessage: string|null;
  selectedSearchMethod: number|null;
  searchTerm: string;
}

const initialState: State = {
  isLoading: false,
  errorMessage: null,
  selectedSearchMethod: SearchMethods.Suchbegriff,
  searchTerm: '',
};

export const reducer = createReducer(
  initialState,
  // Actions to go here
  // i.e. on(action.actionName,,,,)
  on(EtfsActions.setSelectedSearchMethod, (state, {selectedSearchMethod}) => ({
    ...state,
    selectedSearchMethod
  })),
  on(EtfsActions.updateEtfsSearchTerm, (state, {searchTerm}) =>  ({
    ...state,
    searchTerm
  }))
);

export const getEtfsSelectedSearchMethod = (state: State) => state.selectedSearchMethod;
export const getEtfsSearchTerm = (state: State) => state.searchTerm;
