import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import qs from 'qs';

export const productsApiSlice = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: ['products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page, name, category }: { page: number; name?: string; category?: string }) => {
        return `products?` + qs.stringify({ _page: page, _limit: 12, name_like: name, category });
      },
    }),
    getAllProducts: builder.query({
      query: ({ name, category }: { name?: string; category?: string }) => {
        return `products?` + qs.stringify({ name_like: name, category });
      },
    }),
  }),
});

export const { useGetProductsQuery, useGetAllProductsQuery } = productsApiSlice;
