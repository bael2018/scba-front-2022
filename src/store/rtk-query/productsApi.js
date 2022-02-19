import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { rootContant, rootTagType } from '../../constants'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    tagTypes: [rootTagType.PRODUCTS_TAG],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FIREBASE_DATABASE_URL
    }),
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => `products${rootContant.dotJson}`,
            providesTags: () => [rootTagType.PRODUCTS_TAG]
        }),
    })
})

export const {
    useGetProductsQuery
} = productsApi