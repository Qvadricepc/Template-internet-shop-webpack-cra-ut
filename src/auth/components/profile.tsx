import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/use-user';
import { TUser } from '../auth-types';
import { getUserAsync, updateUserAsync } from '../auth-slice';
import { useAppDispatch } from '../../app/hooks';

export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useUser();
  const [form, setForm] = useState<TUser>(user.data! || {});
  const [edit, setEdit] = useState(true);

  return (
    <Container maxWidth="xl">
      <Paper elevation={10} sx={{ padding: '20px', margin: '30px auto' }}>
        <Typography variant="h5" borderBottom={'2px solid black'}>
          My profile
        </Typography>
        <Grid display="flex" justifyContent="space-between">
          <Grid display="flex" alignItems="center">
            <AccountCircleRoundedIcon />
            <Typography alignItems="center" marginLeft="10px">
              Personal data
            </Typography>
          </Grid>
          <Grid>
            <Button variant="text" onClick={() => setEdit(false)}>
              Edit
            </Button>
          </Grid>
        </Grid>
        <Grid>
          <Grid justifyContent="space-around" display="flex" marginTop="5px">
            <Grid>
              <TextField
                type="text"
                disabled={edit}
                label="Name"
                value={form.name}
                placeholder="Name"
                onChange={(e) => {
                  setForm({ ...form, name: e.currentTarget.value });
                }}
              />
            </Grid>
            <Grid>
              <TextField
                type="text"
                disabled={edit}
                label="Surname"
                value={form.surname}
                placeholder="Surname"
                onChange={(e) => {
                  setForm({ ...form, surname: e.currentTarget.value });
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid justifyContent="space-around" display="flex" sx={{ marginTop: '20px' }}>
          <Grid>
            <TextField
              id="date"
              label="Birthday"
              disabled={edit}
              type="date"
              value={form.birthday}
              onChange={(e) => {
                setForm({ ...form, birthday: e.currentTarget.value });
              }}
            />
          </Grid>
          <Grid width="208px">
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select
                disabled={edit}
                label="Language"
                value={form.language}
                onChange={(e: SelectChangeEvent) => {
                  setForm({ ...form, language: e.target.value });
                }}
              >
                <MenuItem value={1}>Ukraine</MenuItem>
                <MenuItem value={2}>English</MenuItem>
                <MenuItem value={3}>Jedi</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          display="flex"
          justifyContent="space-between"
          borderTop={'2px solid black'}
          marginTop={'10px'}
        >
          <Grid display="flex" alignItems="center">
            <AccountCircleRoundedIcon />
            <Typography alignItems="center" marginLeft="10px" marginTop="10px">
              Contact data
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <Grid justifyContent="space-around" display="flex" marginTop="5px">
            <Grid>
              <TextField
                type="text"
                disabled={edit}
                label="Email"
                value={form.email}
                placeholder="Email"
                onChange={(e) => {
                  setForm({ ...form, email: e.currentTarget.value });
                }}
              />
            </Grid>
            <Grid>
              <TextField
                type="text"
                disabled={edit}
                label="Phone number"
                placeholder="Phone number"
                value={form.phoneNumber}
                onChange={(e) => {
                  setForm({ ...form, phoneNumber: e.currentTarget.value });
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          display="flex"
          justifyContent="space-between"
          marginTop={'10px'}
          borderTop={'2px solid black'}
        >
          <Grid display="flex" alignItems="center">
            <AccountCircleRoundedIcon />
            <Typography alignItems="center" marginLeft="10px" marginTop="10px">
              Registration info
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <Grid justifyContent="space-around" display="flex" marginTop="5px">
            <Grid>
              <TextField
                type="text"
                disabled={edit}
                label="Login"
                value={form.login}
                placeholder="Login"
                onChange={() => {
                  console.log('enter login');
                }}
              />
            </Grid>
            <Grid>
              <TextField
                type="Password"
                disabled={edit}
                label="Password"
                value={form.password}
                placeholder="Password"
                onChange={() => {
                  console.log('enter password');
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ marginTop: '35px' }} justifyContent="space-between" display="flex">
          <Button
            variant="outlined"
            onClick={() => {
              navigate('/');
            }}
          >
            Back to store
          </Button>
          <Button
            variant="contained"
            onClick={async () => {
              await dispatch(updateUserAsync(form));
              setEdit(true);
              await dispatch(getUserAsync(user.data!));
            }}
          >
            Update
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};
