import { rootActionTypes } from "../action-types"

export const rootActionCreator = {
    currencyChangeAction: () => {
        return {
            type: rootActionTypes.CURRENCY_TYPE
        }
    },
    productMaxPriceAction: payload => {
        return {
            type: rootActionTypes.MAX_PRICE,
            payload
        }
    },
    productMinPriceAction: payload => {
        return {
            type: rootActionTypes.MIN_PRICE,
            payload
        }
    },
    productViewLargeAction: () => {
        return {
            type: rootActionTypes.PRODUCT_VIEW_LARGE,
        }
    },
    productViewSmollAction: () => {
        return {
            type: rootActionTypes.PRODUCT_VIEW_SMOLL,
        }
    },
    priceTypeAction: payload => {
        return {
            type: rootActionTypes.PRICE_TYPE,
            payload
        }
    },
    zoomImageAction: () => {
        return {
            type: rootActionTypes.ZOOM_IMAGE
        }
    }
}