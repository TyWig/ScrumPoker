import { ActionReducer, Action } from "@ngrx/store";
import * as AppActions from "./actions";

export type Action = AppActions.All;

export const selectorSettings = state =>
  <AppState>(state.settings || { theme: '' });

export interface AppState {
  theme: string
}

export const initialState: AppState = {
  theme: 'primary'
}

export function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case AppActions.UPDATE_SETTINGS:
      const newState = {
        ...state, ...action.payload
      }
      return newState;
    case AppActions.RESET:
      return {};
    default:
      return state;
  }
}