import { useContext } from 'react';
import { CartContext } from '../cart-context';

export const useCart = () => {
  const data = useContext(CartContext);
  return data;
};
