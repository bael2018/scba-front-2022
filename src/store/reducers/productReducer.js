import { rootActionTypes } from "../action-types";

const initState = {
    maxPrice: '',
    minPrice: '',
    price: 'recommended',
    view: false,
    zoomImage: false
}

export const productReducer = (state = initState , action) => {
    switch (action.type) {
        case rootActionTypes.MAX_PRICE:
            return {
                ...state,
                maxPrice: action.payload
            }
        case rootActionTypes.MIN_PRICE:
            return {
                ...state,
                MIN_PRICE: action.payload
            }
        case rootActionTypes.PRODUCT_VIEW_SMOLL:
            return {
                ...state,
                view: true
            }
        case rootActionTypes.PRODUCT_VIEW_LARGE:
            return {
                ...state,
                view: false
            }
        case rootActionTypes.PRICE_TYPE:
            return {
                ...state,
                price: action.payload
            }
        case rootActionTypes.ZOOM_IMAGE:
            return {
                ...state,
                zoomImage: !state.zoomImage
            }
        default:
            return state;
    }
}