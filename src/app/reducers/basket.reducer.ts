import { createReducer, on } from '@ngrx/store';
import { BasketActions, SearchActions } from '../actions';
import { Company } from '../interfaces/company';

export const featureKey = 'basket';

export interface State {
  isLoading: boolean;
  errorMessage: string|null;
  items: Company[];
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
  on(BasketActions.addToFavourites, (state, {company}) => ({
    ...state,
    items: [...state.items, company]
  })),
  on(BasketActions.removeFromFavourites, (state, {company}) =>  ({
    ...state,
    items: [...state.items.filter(com => com.id !== company.id)]
  }))
);

export const getFavourites = (state: State) => state.items;
export const getFavouritesAsList = (state: State) => {
  const x = [];
  state.items.map((item) => x.push(item.id));
  return x;
};
