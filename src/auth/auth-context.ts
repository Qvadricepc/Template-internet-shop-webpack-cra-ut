import { createContext } from 'react';
import { initialState } from './auth-slice';
import { TUserContext } from './auth-types';

export const AuthContext = createContext<TUserContext>({
  user: initialState.user,
  logout: () => {},
});
