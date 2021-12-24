import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCart } from './cart-types';

export const cartApiSlice = createApi({
  reducerPath: 'cart',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getCart: builder.query<string[], string>({
      async queryFn(_arq, _qyeriApi, _extraOptions, fetchWithBQ) {
        const cart = await fetchWithBQ(`/cart/${_arq}`);
        return {
          data: (cart.data as TCart).productsId || [],
        };
      },
      providesTags: (result, error, userId) => [{ type: 'Cart', id: userId }],
    }),

    addToCart: builder.mutation({
      query: ({ userId, productsId }: { userId: string; productsId: string[] }) => ({
        url: `/cart/${userId}`,
        method: 'PUT',
        body: {
          productsId,
        },
      }),
      invalidatesTags: (result, error, { userId }) => [{ type: 'Cart', id: userId }],
    }),
  }),
});

export const { useAddToCartMutation, useGetCartQuery } = cartApiSlice;
