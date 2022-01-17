import React, { useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { useAppDispatch } from '../../app/hooks';
import { createUserAsync, getUserAsync } from '../auth-slice';
import { useUser } from '../hooks/use-user';
import { useToaster } from '../../common/toaster/hook/use-toast';

export const Signup = () => {
  const dispatch = useAppDispatch();
  const user = useUser();
  const { success, error } = useToaster();
  const [form, setForm] = useState<{
    login: string;
    password: string;
    email?: string;
    phoneNumber?: string;
  }>({
    login: '',
    password: '',
  });

  return (
    <Grid container direction="column">
      <Paper
        elevation={10}
        sx={{
          padding: '20px',
          height: '460px',
          width: '280px',
          margin: '30px auto',
        }}
      >
        <Grid container display="flex" direction="column" alignItems="center">
          <Avatar sx={{ backgroundColor: 'green' }}>
            <AssignmentTurnedInOutlinedIcon />
          </Avatar>
          <Typography variant="h4" sx={{ paddingTop: '10px' }}>
            Sign up
          </Typography>
        </Grid>
        <Grid item sx={{ paddingTop: '20px' }}>
          <TextField
            type="text"
            label="Login"
            placeholder="Login"
            onChange={(e) => {
              setForm({ ...form, login: e.currentTarget.value });
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid item sx={{ paddingTop: '20px' }}>
          <TextField
            label="Password"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setForm({ ...form, password: e.currentTarget.value });
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid item sx={{ paddingTop: '20px' }}>
          <TextField
            label="email"
            type="E-mail"
            placeholder="E-mail"
            onChange={(e) => {
              setForm({ ...form, email: e.currentTarget.value });
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid item sx={{ paddingTop: '20px' }}>
          <TextField
            label="Phone number"
            type="phone-number"
            placeholder="Phone number"
            onChange={(e) => {
              setForm({ ...form, phoneNumber: e.currentTarget.value });
            }}
            fullWidth
            required
          />
        </Grid>
        <Grid item sx={{ paddingTop: '20px' }}>
          <Button
            variant="contained"
            disabled={!form.login && !form.password}
            fullWidth
            onClick={async () => {
              const createUser = await dispatch(createUserAsync(form));
              // @ts-ignore
              if (createUser.error) {
                return error('User already exists!!');
              } else {
                await dispatch(
                  getUserAsync({
                    login: form.login!,
                    password: form.password!,
                  })
                );
                success();
              }
            }}
          >
            Sign up
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};
