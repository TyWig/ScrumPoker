import { Action } from "@ngrx/store";
import { AppState } from "./reducer";

export const UPDATE_THEME = "UPDATE_THEME";
export const UPDATE_SCALE = "UPDATE_SCALE";
export const RESET = "RESET";

export class UpdateTheme implements Action {
  readonly type = UPDATE_THEME;
  constructor(public payload: {theme: string}) {}
}
export class UpdateScale implements Action {
  readonly type = UPDATE_SCALE;
  constructor(public payload: {scale: string}){}
}
export class ResetSettings implements Action {
  readonly type = RESET;
  constructor(public payload: any) {}
}
export type All = UpdateTheme | UpdateScale | ResetSettings;