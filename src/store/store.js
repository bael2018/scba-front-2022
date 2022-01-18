import { configureStore } from '@reduxjs/toolkit'
import generalSlice from './slices/generalSlice'
import productItemReducer from './slices/productItemSlice'

export const store = configureStore({
    reducer: {
        general: generalSlice,
        product_item: productItemReducer
    },
    middleware: middleware => middleware().concat()
})