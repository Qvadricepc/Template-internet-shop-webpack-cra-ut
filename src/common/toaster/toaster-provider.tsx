import { ToasterContext } from './toaster-context';
import { CustomSnackbar } from '../snackbar';
import React, { useCallback, useRef, useState } from 'react';

type TVariant = 'info' | 'warning' | 'success' | 'error';

export const ToasterProvider: React.FC = (props) => {
  const { children } = props;
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState<TVariant>();
  const [isOpened, toggleOpened] = useState(false);
  const timer = useRef<any>();
  const stopTimer = useCallback(() => {
    setVariant(undefined);
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }, []);
  const success = useCallback(
    (message = 'Success!') => {
      stopTimer();
      setVariant('success');
      toggleOpened(true);
      setMessage(message);
    },
    [stopTimer]
  );
  const error = useCallback(
    (message = 'Error!') => {
      stopTimer();
      setVariant('error');
      toggleOpened(true);
      setMessage(message);
    },
    [stopTimer]
  );
  const warning = useCallback(
    (message = 'Warning!') => {
      stopTimer();
      setVariant('warning');
      toggleOpened(true);
      setMessage(message);
    },
    [stopTimer]
  );
  const info = useCallback(
    (message = 'Info!') => {
      stopTimer();
      setVariant('info');
      toggleOpened(true);
      setMessage(message);
    },
    [stopTimer]
  );
  const close = useCallback(() => {
    toggleOpened(false);
    timer.current = setTimeout(() => {
      setVariant(undefined);
    }, 300);
  }, [toggleOpened, setVariant]);

  return (
    <ToasterContext.Provider
      value={{
        success,
        error,
        info,
        warning,
      }}
    >
      <>
        {children}
        <CustomSnackbar
          isOpened={isOpened}
          close={close}
          variant={variant as TVariant}
          message={message}
        />
      </>
    </ToasterContext.Provider>
  );
};
