import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootContant, rootTagType } from "../../constants";
import { configApi } from "../../constants/api";

export const productCartApi = createApi({
    reducerPath: "productCartApi",
    tagTypes: [rootTagType.PRODUCT_CART_TAG],
    baseQuery: fetchBaseQuery({
        baseUrl: configApi.REACT_APP_FIREBASE_DATABASE_URL,
    }),
    endpoints: (builder) => ({
        getProductCart: builder.query({
            query: (userToken) =>
                `users/${userToken}/cart${rootContant.dotJson}`,
            providesTags: () => [rootTagType.PRODUCT_CART_TAG],
        }),
        postProductCart: builder.mutation({
            query: ({ body, id, endpoint }) => ({
                url: `users/${id}/${endpoint}${rootContant.dotJson}`,
                method: "POST",
                body,
            }),
            invalidatesTags: [rootTagType.PRODUCT_CART_TAG],
        }),
        deleteProductCart: builder.mutation({
            query: ({ id, endpoint, cartId }) => ({
                url: `users/${id}/${endpoint}/${cartId}${rootContant.dotJson}`,
                method: "DELETE",
            }),
            invalidatesTags: [rootTagType.PRODUCT_CART_TAG],
        }),
    }),
});

export const {
    useGetProductCartQuery,
    usePostProductCartMutation,
    useDeleteProductCartMutation,
} = productCartApi;
