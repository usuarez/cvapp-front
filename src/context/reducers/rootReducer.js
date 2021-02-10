import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { templateReducer } from "./templateReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    templates: templateReducer
})