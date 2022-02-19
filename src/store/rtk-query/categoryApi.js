import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { rootContant, rootTagType } from '../../constants'

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    tagTypes: [rootTagType.CATEGORY_TAG],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FIREBASE_DATABASE_URL
    }),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => `categories${rootContant.dotJson}`,
            providesTags: () => [rootTagType.CATEGORY_TAG]
        })
    })
})

export const {
    useGetCategoriesQuery
} = categoryApi