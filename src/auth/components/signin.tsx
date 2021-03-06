import React, { useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getUserAsync, selectUser } from '../auth-slice';
import { useToaster } from '../../common/toaster/hook/use-toast';

export const Signin = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [formData, setFormData] = useState<{ login?: string; password?: string }>({
    login: '',
    password: '',
  });
  const { success, error } = useToaster();

  return (
    <Grid container direction="column">
      <Paper
        elevation={10}
        sx={{ padding: '20px', height: '350px', width: '280px', margin: '30px auto' }}
      >
        <Grid container display="flex" direction="column" alignItems="center">
          <Avatar sx={{ backgroundColor: 'green' }}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <Typography variant="h4" sx={{ paddingTop: '10px' }}>
            Sign in
          </Typography>
        </Grid>
        <Grid item sx={{ paddingTop: '20px' }}>
          <TextField
            type="text"
            label="Login"
            placeholder="Login"
            value={formData.login}
            onChange={(e) =>
              setFormData({
                ...formData,
                login: e.currentTarget.value,
              })
            }
            fullWidth
            required
          />
        </Grid>
        <Grid item sx={{ paddingTop: '20px' }}>
          <TextField
            label="Password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.currentTarget.value,
              })
            }
            fullWidth
            required
          />
        </Grid>
        <Grid item sx={{ paddingTop: '20px' }}>
          <Button
            disabled={!formData.login || !formData.password}
            variant="contained"
            fullWidth
            onClick={async () => {
              const getUser = await dispatch(
                getUserAsync({
                  login: formData.login!,
                  password: formData.password!,
                })
              );
              // @ts-ignore
              if (getUser.error) {
                return error('No such user founded');
              } else return success();
            }}
          >
            Sign in
          </Button>
        </Grid>
        <Typography align="center" marginTop="5px">
          Don't have an account?
          <Link
            to={'/signup'}
            style={{ textDecoration: 'none', color: '#2196f3', marginLeft: '5px' }}
          >
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
