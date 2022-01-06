import React from 'react';
import { useUser } from '../auth/hooks/use-user';
import { cartApiSlice, useGetCartQuery } from './cart-api-slice';
import { useAppDispatch } from '../app/hooks';
import { CartContext } from './cart-context';
import { QueryStatus } from '@reduxjs/toolkit/query';
import { TCartContext } from './cart-types';

export const CartProvider: React.FC = ({ children }) => {
  const user = useUser();
  const useQueryStateResult = cartApiSlice.endpoints.getCart.useQueryState(user.data?.id!, {});
  const { data } = useGetCartQuery(user.data?.id as string, { skip: !user.data });
  const dispatch = useAppDispatch();
  const invalidateCache = () => {
    dispatch(cartApiSlice.util.resetApiState);
  };

  return (
    <CartContext.Provider
      value={{
        items:
          useQueryStateResult.status !== QueryStatus.uninitialized
            ? (data as TCartContext['items'])
            : undefined,
        invalidateCache,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
