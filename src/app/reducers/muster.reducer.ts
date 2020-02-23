import { createReducer, on } from '@ngrx/store';
import { MusterActions } from '../actions';

export const featureKey = 'muster';

export interface State {
  isLoading: boolean;
  errorMessage: string|null;
  selectedInvestmentOption: string|null;
  selectedRiskProfile: number|null;
}

const initialState: State = {
  isLoading: false,
  errorMessage: null,
  selectedInvestmentOption: null,
  selectedRiskProfile: null
};
export const reducer = createReducer(
  initialState,
  // Actions to go here
  // i.e. on(action.actionName,,,,)
  on(MusterActions.setSelectedInvestmentOption, (state, {selectedInvestmentOption}) => ({
    ...state,
    selectedInvestmentOption,
    selectedRiskProfile: null // <- this is important, as the choice of the investmentoption resets the risk profile
  })),
  on(MusterActions.setSelectedRiskProfile, (state, {selectedRiskProfile}) => ({
    ...state,
    selectedRiskProfile
  }))
);

export const getSelectedInvestmentOption = (state: State) => state.selectedInvestmentOption;
export const getSelectedRiskProfile = (state: State) => state.selectedRiskProfile;
