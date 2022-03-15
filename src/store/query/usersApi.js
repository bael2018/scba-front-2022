import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootContant, rootTagType } from "../../constants";
import { configApi } from "../../constants/api";

export const userApi = createApi({
    reducerPath: "userApi",
    tagTypes: [rootTagType.USER_TAG],
    baseQuery: fetchBaseQuery({
        baseUrl: configApi.REACT_APP_FIREBASE_DATABASE_URL,
    }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () =>
                `users/${JSON.parse(
                    sessionStorage.getItem(rootContant.userToken)
                )}/about${rootContant.dotJson}`,
            providesTags: () => [rootTagType.USER_TAG],
        }),
        addUser: builder.mutation({
            query: ({ body, uid }) => ({
                url: `users/${uid}/about${rootContant.dotJson}`,
                method: rootContant.post,
                body,
            }),
            invalidatesTags: [rootTagType.USER_TAG],
        }),
    }),
});

export const { useGetUserQuery, useAddUserMutation } = userApi;
