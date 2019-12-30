import { createReducer, on } from '@ngrx/store';
import { SearchActions } from '../actions';
import { SelectedIndustry } from '../interfaces/selectedIndustry';
import { SearchMethods } from '../enums/searchMethods';
import { ProductFilters } from '../data/product-filters';

export const featureKey = 'search';

export interface State {
  isLoading: boolean;
  errorMessage: string|null;
  companies: {
    selectedSearchMethod: number|null
    selectedIndustries: SelectedIndustry[];
    searchTerm: string;
    productFilter: string;
  };
  etfs: {
    searchTerm: string;
  };
}

const initialState: State = {
  isLoading: false,
  errorMessage: null,
  companies: {
    selectedSearchMethod: SearchMethods.Industrie,
    selectedIndustries: [
      {
        id: 0,
        name: 'Alle Industrien'
      }
    ],
    searchTerm: '',
    productFilter: ProductFilters[0]
  },
  etfs: {
    searchTerm: ''
  }
};

export const reducer = createReducer(
  initialState,
  // Actions to go here
  // i.e. on(action.actionName,,,,)
  on(SearchActions.setSelectedSearchMethodAction, (state, {selectedSearchMethod}) => ({
    ...state,
    companies: {
      ...state.companies,
      selectedSearchMethod
    }
  })),
  on(SearchActions.addToSelectedIndustries, (state, {selectedIndustries}) => ({
    ...state,
    companies: {
      ...state.companies,
      selectedIndustries: [...state.companies.selectedIndustries, selectedIndustries]
    }
  })),
  on(SearchActions.removeFromSelectedIndustries, (state, {endPosition}) =>  ({
    ...state,
    companies: {
      ...state.companies,
      selectedIndustries: state.companies.selectedIndustries.slice(0, endPosition + 1)
    }
  })),
  on(SearchActions.updateCompaniesSearchTerm, (state, {searchTerm}) =>  ({
    ...state,
    companies: {
      ...state.companies,
      searchTerm
    }
  })),
  on(SearchActions.updateProductFilter, (state, {productFilter}) =>  ({
    ...state,
    companies: {
      ...state.companies,
      productFilter
    }
  })),
  on(SearchActions.updateEtfsSearchTerm, (state, {searchTerm}) =>  ({
    ...state,
    etfs: {
      ...state.etfs,
      searchTerm
    }
  }))
);

export const getCompaniesSelectedSearchMethod = (state: State) => state.companies.selectedSearchMethod;
export const getCompaniesSelectedIndustries = (state: State) => state.companies.selectedIndustries;
export const getCompaniesSearchTerm = (state: State) => state.companies.searchTerm;
export const getCompaniesProductFilter = (state: State) => state.companies.productFilter;
export const getEtfsSearchTerm = (state: State) => state.etfs.searchTerm;
