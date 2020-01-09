import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromCompanies from './companies.reducer';
import * as fromEtfs from './etfs.reducer';
import * as fromBasket from './basket.reducer';
import { InjectionToken } from '@angular/core';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface AppState {
  [fromCompanies.featureKey]: fromCompanies.State;
  [fromEtfs.featureKey]: fromEtfs.State;
  [fromBasket.featureKey]: fromBasket.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
  factory: () => ({
    [fromCompanies.featureKey]: fromCompanies.reducer,
    [fromEtfs.featureKey]: fromEtfs.reducer,
    [fromBasket.featureKey]: fromBasket.reducer
  })
});

// console.log all actions
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();
    return result;
  };
}


/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];

/**
 * Companies Reducers
 */

export const selectCompaniesState = createFeatureSelector<AppState, fromCompanies.State>(
  fromCompanies.featureKey
);

export const getCompaniesSelectedSearchMethod = createSelector(
  selectCompaniesState,
  fromCompanies.getCompaniesSelectedSearchMethod
);

export const getCompaniesSelectedIndustries = createSelector(
  selectCompaniesState,
  fromCompanies.getCompaniesSelectedIndustries
);

export const getCompaniesSearchTerm = createSelector(
  selectCompaniesState,
  fromCompanies.getCompaniesSearchTerm
);

export const getCompaniesProductFilter = createSelector(
  selectCompaniesState,
  fromCompanies.getCompaniesProductFilter
);

/**
 * Etfs Reducers
 */

export const selectEtfsState = createFeatureSelector<AppState, fromCompanies.State>(
  fromEtfs.featureKey
);

export const getEtfsSelectedSearchMethod = createSelector(
  selectEtfsState,
  fromEtfs.getEtfsSelectedSearchMethod
);

export const getEtfsSearchTerm = createSelector(
  selectEtfsState,
  fromEtfs.getEtfsSearchTerm
);

/**
 * Basket Reducers
 */

export const selectBasketState = createFeatureSelector<AppState, fromBasket.State>(
  fromBasket.featureKey
);

export const getFavouredSecurities = createSelector(
  selectBasketState,
  fromBasket.getFavourites
);

export const getFavouredSecuritiesAsList = createSelector(
  selectBasketState,
  fromBasket.getFavouritesAsList
);

export const getSelectedTab = createSelector(
  selectBasketState,
  fromBasket.getSelectedTab
);

export const getSparplanSum = createSelector(
  selectBasketState,
  fromBasket.getSparplanSum
);
