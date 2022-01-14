import { rootActionTypes } from "../action-types";

const initialState = {
    currency: false
}

export const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case rootActionTypes.CURRENCY_TYPE:
            return {
                ...state , 
                currency: !state.currency
            }
        default:
            return state;
    }
}