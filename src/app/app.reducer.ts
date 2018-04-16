import * as fromUI from './shared/ui.reducer';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface AppState {
  ui: fromUI.State;
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUI.uiReducer
};

export const getUiState = createFeatureSelector<fromUI.State>('ui');
export const getIsLoading = createSelector(getUiState, fromUI.getIsLoading);

// import { Entry } from 'contentful';
// import { AppActionTypes, AppActionsUnion } from './app.actions';

// export interface AppState {
//   isLoading: boolean;
//   currentPost?: Entry<any>;
// }
// export const initialState: AppState = {
//   isLoading: false
// };

// export function appReducer(state: AppState = initialState, action) {
//   switch (action.type) {
//     case AppActionTypes.START_LOADING:
//       return {
//         ...state,
//         isLoading: true
//       };
//     case AppActionTypes.STOP_LOADING:
//       return {
//         ...state,
//         isLoading: false
//       };
//     case AppActionTypes.SHOW_POST_DETAILS:
//       return {
//         ...state,
//         currentPost: action.payload
//       };
//     default:
//       return state;
//   }
// }
