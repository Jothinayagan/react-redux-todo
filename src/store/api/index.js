import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const testApi = createApi({
    reducerPath: 'testApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getTestData: builder.query({
            query: () => `todos`,
        }),
    }),
})

export const { useGetTestDataQuery, useLazyGetTestDataQuery } = testApi