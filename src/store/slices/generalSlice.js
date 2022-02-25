import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currency: false,
    search: false,
    isCart: false,
    totalQuantity: 0,
    totalPrice: 0,
    totalDiscountPrice: 0,
    isCartModal: false
}

const generalSlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCartModalActive: state => {
            state.isCartModal = !state.isCartModal
        },
        changeCurrency: state => {
            state.currency = !state.currency
        },
        setSearchModal: state => {
            state.search = !state.search
        },
        setCartActive: state => {
            state.isCart = true
        },
        incrementTotalQuantity: state => {
            state.totalQuantity = state.totalQuantity + 1
        },
        decrementTotalQuantity: state => {
            state.totalQuantity = state.totalQuantity - 1
        },
        incrementTotalPrice: (state , action) => {
            state.totalPrice = state.totalPrice + action.payload
        },
        decrementTotalPrice: (state , action) => {
            state.totalPrice = state.totalPrice - action.payload
        },
        setTotalQuantity: (state , action) => {
            state.totalQuantity = state.totalQuantity + action.payload
        },
        setTotalPrice: (state , action) => {
            state.totalPrice = state.totalPrice + action.payload
        },
        setTotalDiscountPrice: (state , action) => {
            state.totalDiscountPrice = state.totalDiscountPrice + action.payload
        }
    }
})

export const { 
    setCartModalActive,
    incrementTotalPrice,
    decrementTotalPrice,
    incrementTotalQuantity,
    decrementTotalQuantity,
    setTotalDiscountPrice,
    setTotalPrice,
    setTotalQuantity,
    setCartActive,
    changeCurrency, 
    setSearchModal 
} = generalSlice.actions
export default generalSlice.reducer