import { useContext } from 'react';
import { ToasterContext } from '../toaster-context';

export const useToaster = () => {
  return useContext(ToasterContext);
};
