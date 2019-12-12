import { createReducer, on } from '@ngrx/store';
import { BasketActions } from '../actions';
import { Company } from '../interfaces/company';

export interface CompanyStocks {
  amount: number;
  company: Company;
}
export const featureKey = 'basket';

export interface State {
  isLoading: boolean;
  errorMessage: string|null;
  items: CompanyStocks[];
}

// TODO : add noOfStocks ^ to items

const initialState: State = {
  isLoading: false,
  errorMessage: null,
  items: []
};

export const reducer = createReducer(
  initialState,
  // Actions to go here
  // i.e. on(action.actionName,,,,)
  on(BasketActions.getFromLocalStorageSuccess, (state, {items}) => ({
      ...state,
      items
  })),
  on(BasketActions.addToFavourites, (state, {company}) => ({
    ...state,
    items: [...state.items, {
      amount: company.smallestTradeableUnit,
      company
    }]
  })),
  on(BasketActions.removeFromFavourites, (state, {company}) =>  ({
    ...state,
    items: [...state.items.filter(com => com.company.id !== company.id)]
  })),
  on(BasketActions.updateFavourites, (state, {amount, company}) =>  ({
    ...state,
    items: [...state.items.filter(com => com.company.id !== company.id), {
      amount,
      company
    }]
  }))
);

export const getFavourites = (state: State) => state.items;
export const getFavouritesAsList = (state: State) => {
  const x = [];
  state.items.map((item) => x.push(item.company.id));
  return x;
};
