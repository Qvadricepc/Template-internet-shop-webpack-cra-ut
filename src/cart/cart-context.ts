import { createContext } from 'react';
import { TCartContext } from './cart-types';

export const CartContext = createContext<TCartContext>({
  items: undefined,
  invalidateCache: () => {},
});
