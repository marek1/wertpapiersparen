import { createReducer, on } from '@ngrx/store';
import { CompaniesActions, EtfsActions } from '../actions';
import { SelectedIndustry } from '../interfaces/selectedIndustry';
import { SearchMethods } from '../enums/searchMethods';
import { ProductFilters } from '../data/product-filters';

export const featureKey = 'companies';

export interface State {
  isLoading: boolean;
  errorMessage: string|null;
  selectedSearchMethod: number|null;
  selectedIndustries: SelectedIndustry[];
  searchTerm: string;
  productFilter: string;
}

const initialState: State = {
  isLoading: false,
  errorMessage: null,
  selectedSearchMethod: SearchMethods.Suchbegriff,
  selectedIndustries: [
    {
      id: 0,
      name: 'Alle Industrien'
    }
  ],
  searchTerm: '',
  productFilter: ProductFilters[0]
};

export const reducer = createReducer(
  initialState,
  // Actions to go here
  // i.e. on(action.actionName,,,,)
  on(CompaniesActions.setSelectedSearchMethod, (state, {selectedSearchMethod}) => ({
    ...state,
    selectedSearchMethod
  })),
  on(CompaniesActions.addToSelectedIndustries, (state, {selectedIndustries}) => ({
    ...state,
    selectedIndustries: [...state.selectedIndustries, selectedIndustries]
  })),
  on(CompaniesActions.removeFromSelectedIndustries, (state, {endPosition}) =>  ({
    ...state,
    selectedIndustries: state.selectedIndustries.slice(0, endPosition + 1)
  })),
  on(CompaniesActions.updateCompaniesSearchTerm, (state, {searchTerm}) =>  ({
    ...state,
    searchTerm
  })),
  on(CompaniesActions.updateProductFilter, (state, {productFilter}) =>  ({
    ...state,
    productFilter
  }))
);

export const getCompaniesSelectedSearchMethod = (state: State) => state.selectedSearchMethod;
export const getCompaniesSelectedIndustries = (state: State) => state.selectedIndustries;
export const getCompaniesSearchTerm = (state: State) => state.searchTerm;
export const getCompaniesProductFilter = (state: State) => state.productFilter;
