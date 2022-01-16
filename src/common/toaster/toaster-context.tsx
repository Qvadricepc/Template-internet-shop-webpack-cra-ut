import { createContext } from 'react';
import { TToasterContext } from './toaster-types';

export const ToasterContext = createContext<TToasterContext>({
  error(message?: string): void {},
  info(message?: string): void {},
  success(message?: string): void {},
  warning(message?: string): void {},
});
