import { combineReducers } from "redux";
import { clockReducer } from "./clockReducer";

export const rootReducer = combineReducers({
    clock: clockReducer
})