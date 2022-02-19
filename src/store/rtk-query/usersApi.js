import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { rootContant, rootTagType } from '../../constants';

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: [rootTagType.USER_TAG],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FIREBASE_DATABASE_URL
    }),
    endpoints: builder => ({
        addUser: builder.mutation({
            query: ({ body , uid }) => ({
                url: `users/${uid}${rootContant.dotJson}`,
                method: rootContant.post,
                body
            }),
            invalidatesTags: [rootTagType.USER_TAG]
        })
    })
})

export const {
    useAddUserMutation
} = userApi