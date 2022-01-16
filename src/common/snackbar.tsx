import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React from 'react';

type TProps = {
  isOpened: boolean;
  close: () => void;
  variant: 'success' | 'error' | 'warning' | 'info';
  message: string;
};

export const CustomSnackbar: React.FC<TProps> = (props) => {
  const { isOpened, close, variant, message } = props;

  return (
    <Snackbar
      open={isOpened}
      autoHideDuration={6000}
      onClose={close}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Alert onClose={close} severity={variant} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
