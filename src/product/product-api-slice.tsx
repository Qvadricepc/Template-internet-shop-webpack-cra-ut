import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApiSlice = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (id: string) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductQuery } = productApiSlice;
