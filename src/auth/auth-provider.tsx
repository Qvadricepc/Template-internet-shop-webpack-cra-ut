import { selectUser, logout, getUserAsync } from './auth-slice';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { AuthContext } from './auth-context';

export const AuthProvider: React.FC = ({ children }) => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const logoutAction = () => dispatch(logout());

  useEffect(() => {
    if (user.data) {
      dispatch(getUserAsync(user.data));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout: logoutAction }}>{children}</AuthContext.Provider>
  );
};
