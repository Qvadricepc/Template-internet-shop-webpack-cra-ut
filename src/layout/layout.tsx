import React, { ReactElement } from 'react';
import { Appbar } from './appbar';

type TProps = {
  children: ReactElement;
};

export const Layout: React.FC<TProps> = ({ children }) => {
  return (
    <>
      <Appbar />
      <div>{children}</div>
    </>
  );
};
