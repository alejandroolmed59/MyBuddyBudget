import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const walletSlice = createApi({
  reducerPath: 'walletSlice',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BACKEND_BASE_URL}` }),
  endpoints: (builder) => ({
    getWalletsByName: builder.query({
      query: (displayName) => `/account/${displayName}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWalletsByName } = walletSlice