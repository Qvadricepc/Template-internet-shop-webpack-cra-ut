import { useContext } from 'react';
import { AuthContext } from '../auth-context';

export const useUser = () => {
  const data = useContext(AuthContext);
  return data.user;
};
