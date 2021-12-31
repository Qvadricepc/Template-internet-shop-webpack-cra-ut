import React from 'react';
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const navigate = useNavigate();
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
            <Button variant="text" onClick={() => console.log('Edit')}>
              Edit
            </Button>
          </Grid>
        </Grid>
        <Grid>
          <Grid justifyContent="space-around" display="flex" marginTop="5px">
            <Grid>
              <TextField type="text" label="Name" value="User Name" placeholder="Name" />
            </Grid>
            <Grid>
              <TextField type="text" label="Surname" value="Surname" placeholder="Surname" />
            </Grid>
          </Grid>
        </Grid>
        <Grid justifyContent="space-around" display="flex" sx={{ marginTop: '20px' }}>
          <Grid>
            <TextField id="date" label="Birthday" type="date" defaultValue="2017-05-24" />
          </Grid>
          <Grid width="208px">
            <FormControl fullWidth>
              <InputLabel>Language</InputLabel>
              <Select label="Language" defaultValue={3}>
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
              <TextField type="text" label="Email" value="email" placeholder="Email" />
            </Grid>
            <Grid>
              <TextField
                type="text"
                label="Phone number"
                placeholder="Phone number"
                value="Phone number"
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
                label="Login"
                value="login"
                placeholder="Login"
                onChange={() => {
                  console.log('enter login');
                }}
              />
            </Grid>
            <Grid>
              <TextField
                type="Password"
                label="Password"
                value="password"
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
          <Button variant="contained" onClick={() => console.log('Update')}>
            Update
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};
