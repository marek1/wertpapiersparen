import { createReducer, on } from '@ngrx/store';
import { BasketActions } from '../actions';
import { Company } from '../interfaces/company';
import { Etf } from '../interfaces/etf';

export interface AmountOfItem {
  amount: number;
  item: Company|Etf;
}
export const featureKey = 'basket';

export interface State {
  isLoading: boolean;
  errorMessage: string|null;
  items: AmountOfItem[];
  selectedTab: number;
}

const initialState: State = {
  isLoading: false,
  errorMessage: null,
  items: [],
  selectedTab: 0
};

export const reducer = createReducer(
  initialState,
  // Actions to go here
  // i.e. on(action.actionName,,,,)
  on(BasketActions.getFromLocalStorageSuccess, (state, {items}) => ({
      ...state,
      items
  })),
  on(BasketActions.addToFavourites, (state, {item}) => ({
    ...state,
    items: [...state.items, {
      amount: item.smallestTradeableUnit,
      item
    }]
  })),
  on(BasketActions.removeFromFavourites, (state, {item}) =>  ({
    ...state,
    items: [...state.items.filter(com => com.item.id !== item.id)]
  })),
  on(BasketActions.updateFavourites, (state, {amount, item}) =>  ({
    ...state,
    items: [...state.items.map((com) => {
      // overwrite the amount for the given company
      if (com.item.id === item.id) {
        com = {...com, amount};
      }
      return com;
    })]
  })),
  on(BasketActions.setSelectedTab, (state, {selectedTab}) =>  ({
    ...state,
    selectedTab
  })),
);

export const getFavourites = (state: State) => state.items;
export const getFavouritesAsList = (state: State) => {
  const x = [];
  state.items.map((item) => x.push(item.item.id));
  return x;
};
export const getSelectedTab = (state: State) => state.selectedTab;
