import * as React from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { useUser } from '../../auth/hooks/use-user';

export interface State extends SnackbarOrigin {
  open: boolean;
}

export const PositionedSnackbar = () => {
  const user = useUser();
  const [state, setState] = React.useState<State>({
    open: user?.isLoading,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Success"
        key={vertical + horizontal}
      />
    </div>
  );
};
