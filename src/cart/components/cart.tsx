import React from 'react';
import { useGetCartQuery } from '../cart-api-slice';

export const Cart = () => {
  const cart = useGetCartQuery('1');

  return <div>{cart.data}</div>;
};
