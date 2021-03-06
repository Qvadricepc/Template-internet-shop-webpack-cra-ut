import { selectUser, logout } from './auth-slice';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { AuthContext } from './auth-context';

export const AuthProvider: React.FC = ({ children }) => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const logoutAction = () => dispatch(logout());

  return (
    <AuthContext.Provider value={{ user, logout: logoutAction }}>{children}</AuthContext.Provider>
  );
};
