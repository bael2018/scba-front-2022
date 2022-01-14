import { combineReducers } from "redux";
import { currencyReducer } from "./currencyReducer";
import { productReducer } from "./productReducer";

export const rootReducer = combineReducers({
    bill: currencyReducer,
    product: productReducer
})