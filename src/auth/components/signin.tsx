import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { Link } from 'react-router-dom';

export const Signin = () => {
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
            value="Login"
            onChange={() => console.log('Login')}
            fullWidth
            required
          />
        </Grid>
        <Grid item sx={{ paddingTop: '20px' }}>
          <TextField
            label="Password"
            type="password"
            placeholder="Password"
            value="Password"
            onChange={() => console.log('Password')}
            fullWidth
            required
          />
        </Grid>
        <Grid item sx={{ paddingTop: '20px' }}>
          <Button variant="contained" fullWidth onChange={() => console.log('Sign in')}>
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
