
import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { rootPath } from '../../utilities/paths';

export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['userApiTag'],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_FIREBASE_DATABASE_URL
    }),
    endpoints: builder => ({
        addUser: builder.mutation({
            query: ({ body , uid }) => ({
                url: `users/${uid}${rootPath.dotJson}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['userApiTag']
        })
    })
})

export const {
    useAddUserMutation
} = userApi