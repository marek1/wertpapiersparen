import { createReducer, on } from '@ngrx/store';
import { BasketActions } from '../actions';
import { Company } from '../interfaces/company';
import { Etf } from '../interfaces/etf';
import { standardSparplanSum } from '../data/etfs';

export interface AmountOfItem {
  amount: number;
  savingRate: number;
  item: Company|Etf;
}
export const featureKey = 'basket';

export interface State {
  isLoading: boolean;
  errorMessage: string|null;
  items: AmountOfItem[];
  selectedTab: number;
  sparplanSum: number;
}

const initialState: State = {
  isLoading: false,
  errorMessage: null,
  items: [],
  selectedTab: 0,
  sparplanSum: standardSparplanSum
};

export const reducer = createReducer(
  initialState,
  // Actions to go here
  // i.e. on(action.actionName,,,,)
  on(BasketActions.getFavouritesFromLocalStorageSuccess, (state, {items}) => ({
      ...state,
      items
  })),
  on(BasketActions.addToFavourites, (state, {item}) => ({
    ...state,
    // only if the items isnt already in the array!
    items: state.items.filter((i: AmountOfItem) => i.item.id === item.id).length === 0 ? [...state.items, {
      amount: item.smallestTradeableUnit,
      savingRate: state.sparplanSum,
      item
    }] : [...state.items],
  })),
  on(BasketActions.removeFromFavourites, (state, {item}) =>  ({
    ...state,
    items: [...state.items.filter(com => com.item.id !== item.id)]
  })),
  on(BasketActions.updateFavourites, (state, {amount, savingRate, item}) =>  ({
    ...state,
    items: [...state.items.map((com: AmountOfItem) => {
      // overwrite the amount for the given company
      if (com.item.id === item.id) {
        com = {...com,
          savingRate: savingRate !== null ? savingRate : com.savingRate,
          amount: amount !== null ? amount : com.amount};
      }
      return com;
    })],
  })),
  on(BasketActions.setSelectedTab, (state, {selectedTab}) =>  ({
    ...state,
    selectedTab
  })),
  on(BasketActions.getSparplansumFromLocalStorageSuccess, (state, {sum}) => ({
    ...state,
    sparplanSum: sum
  })),
  on(BasketActions.updateSparplanSum, (state, {sum}) =>  ({
    ...state,
    sparplanSum: sum
  })),
);

export const getFavourites = (state: State) => state.items;
export const getFavouritesAsList = (state: State) => {
  const x = [];
  state.items.map((item) => x.push(item.item.id));
  return x;
};
export const getSelectedTab = (state: State) => state.selectedTab;
export const getSparplanSum = (state: State) => state.sparplanSum;
