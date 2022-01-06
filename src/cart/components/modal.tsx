import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useRemoveCartMutation } from '../cart-api-slice';
import { useUser } from '../../auth/hooks/use-user';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type TProps = {
  disabled?: boolean;
};

export const BasicModal: React.FC<TProps> = ({ disabled }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const user = useUser();
  const [removeCart] = useRemoveCartMutation();

  return (
    <>
      <Button variant="contained" color="success" onClick={handleOpen} disabled={disabled}>
        Purchase order
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container sx={style} display="flex" direction="column" alignItems="center">
          <Grid>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Thank you for your order
            </Typography>
          </Grid>
          <Grid>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Our manager will contact you as soon as possible
            </Typography>
          </Grid>
          <Grid>
            <Button
              variant="outlined"
              onClick={() => {
                removeCart({
                  userId: user.data?.id || '0',
                });
                navigate('/');
              }}
            >
              Back to store
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};
