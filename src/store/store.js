import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./slices/generalSlice";
import productItemReducer from "./slices/productItemSlice";
import authReducer from "./slices/authSlice";
import modalReducer from "./slices/modalSlice";
import { userApi } from "./query/usersApi";
import { categoryApi } from "./query/categoryApi";
import { productsApi } from "./query/productsApi";
import { productCartApi } from "./query/productCartApi";
import { productWishlist } from "./query/productWishlist";

export const store = configureStore({
    reducer: {
        general: generalReducer,
        product_item: productItemReducer,
        auth: authReducer,
        modal: modalReducer,
        [userApi.reducerPath]: userApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [productCartApi.reducerPath]: productCartApi.reducer,
        [productWishlist.reducerPath]: productWishlist.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApi.middleware,
            categoryApi.middleware,
            productsApi.middleware,
            productCartApi.middleware,
            productWishlist.middleware
        ),
});
