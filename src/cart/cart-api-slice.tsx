import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCart } from './cart-types';
import { TProduct } from '../products/types';

export const cartApiSlice = createApi({
  reducerPath: 'cart',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Cart', 'Product'],
  endpoints: (builder) => ({
    getCart: builder.query<string[], string>({
      async queryFn(_arg, _queriApi, _extraOptions, fetchWithBQ) {
        const cart = await fetchWithBQ(`/cart/${_arg}`);

        if (cart.error && cart.error.status === 404) {
          throw cart.error;
        }

        return {
          data: (cart.data as TCart).productsId || [],
        };
      },
      providesTags: (result, error, userId) => [{ type: 'Cart', id: userId }],
    }),

    getCartProducts: builder.query({
      async queryFn(_arg, _queriApi, _extraOptions, fetchWithBQ) {
        const { productsId } = _arg;

        if (productsId && productsId.length === 0) {
          return {
            data: [],
          };
        }

        const products = await fetchWithBQ(
          `/products/?${productsId.map((id: string) => `id=${id}`).join('&')}`
        );

        if (products.error) {
          throw products.error;
        }

        return {
          data: (products.data as TProduct[]) || [],
        };
      },
      providesTags: (result, error, userId) => [{ type: 'Product', id: userId }],
    }),

    addToCart: builder.mutation({
      query: ({ userId, productsId }: { userId: string; productsId: string[] }) => ({
        url: `/cart/${userId}`,
        method: 'PUT',
        body: {
          productsId,
        },
      }),

      invalidatesTags: (result, error, { userId }) => [
        { type: 'Cart', id: userId },
        { type: 'Product', id: userId },
      ],
    }),

    removeFromCart: builder.mutation({
      query: ({ userId, productsId }: { userId: string; productsId: string[] }) => ({
        url: `/cart/${userId}`,
        method: 'PUT',
        body: {
          productsId,
        },
      }),

      invalidatesTags: (result, error, { userId }) => [{ type: 'Cart', id: userId }, 'Product'],
    }),

    removeCart: builder.mutation({
      query: ({ userId }: { userId: string }) => ({
        url: `/cart/${userId}`,
        method: 'PUT',
        body: {
          productsIds: [],
        },
      }),
      invalidatesTags: (result, error, { userId }) => [
        { type: 'Cart', id: userId },
        { type: 'Product', id: userId },
      ],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useGetCartProductsQuery,
  useRemoveFromCartMutation,
  useRemoveCartMutation,
} = cartApiSlice;
