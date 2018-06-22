import { Action } from "@ngrx/store";
import { Settings } from "./reducer";

export const UPDATE_SETTINGS = "UPDATE_SETTINGS";
export const RESET = "RESET";

export class UpdateSettings implements Action {
  readonly type = UPDATE_SETTINGS;
  constructor(public payload: Settings) {}
}
export class ResetSettings implements Action {
  readonly type = RESET;
  constructor(public payload: any) {}
}
export type All = UpdateSettings | ResetSettings;