import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { rootContant, rootTagType } from '../../constants'

export const productWishlist = createApi({
    reducerPath: 'productWishlist',
    tagTypes: [rootTagType.PRODUCT_WISHLIST_TAG],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FIREBASE_DATABASE_URL
    }),
    endpoints: builder => ({
        getProductWishlist: builder.query({
            query: () => `users/${JSON.parse(localStorage.getItem(rootContant.authToken))}/wishlist${rootContant.dotJson}`,
            providesTags: () => [rootTagType.PRODUCT_WISHLIST_TAG]
        }),
        postProductWishlist: builder.mutation({
            query: ({ body , id , endpoint }) => ({
                url: `users/${id}/${endpoint}${rootContant.dotJson}`,
                method: 'POST',
                body
            }),
            invalidatesTags: [rootTagType.PRODUCT_WISHLIST_TAG]
        }),
        deleteProductWishlist: builder.mutation({
            query: ({ id , endpoint , cartId }) => ({
                url: `users/${id}/${endpoint}/${cartId}${rootContant.dotJson}`,
                method: 'DELETE',
            }),
            invalidatesTags: [rootTagType.PRODUCT_WISHLIST_TAG]
        })
    })
})

export const {
    useGetProductWishlistQuery,
    usePostProductWishlistMutation,
    useDeleteProductWishlistMutation
} = productWishlist