import { configureStore } from '@reduxjs/toolkit'
import generalSlice from './slices/generalSlice'
import productItemReducer from './slices/productItemSlice'
import authReducer from './slices/authSlice'
import modalReducer from './slices/modalSlice';
import { userApi } from './rtk-query/usersApi';

export const store = configureStore({
    reducer: {
        general: generalSlice,
        product_item: productItemReducer,
        auth: authReducer,
        modal: modalReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
        userApi.middleware
    )
})