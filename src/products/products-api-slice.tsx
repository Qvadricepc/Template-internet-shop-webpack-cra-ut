import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TProduct } from './types';

export const productsApiSlice = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['products'],
  endpoints: (builder) => ({
    getProducts: builder.query<TProduct[], number>({
      query: (page) => `products?_page=${page}&_limit=12`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;
