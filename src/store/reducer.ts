import { Action } from "@ngrx/store";
import * as AppActions from "./actions";

export type Action = AppActions.All;

export const selectorSettings = state =>
  <AppState>(state.settings || { theme: '', scale: ''});

export interface AppState {
  theme: string,
  scale: string,
}

export const initialState: AppState = {
  theme: 'primary',
  scale: 'fibonacci'
}

export function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case AppActions.UPDATE_THEME: {
      const newState = {
        ...state, ...action.payload
      }
      return newState;
    }
    case AppActions.UPDATE_SCALE: {
      const newState = {
        ...state, ...action.payload
      }
    return newState;
    }
    case AppActions.RESET:
      return {};
    default:
      return state;
  }
}