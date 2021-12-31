import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate();
  return (
    <Grid container direction="column">
      <Paper
        elevation={10}
        sx={{
          padding: '20px',
          height: '450px',
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
            onChange={() => console.log('Password')}
            fullWidth
            required
          />
        </Grid>
        <Grid item sx={{ paddingTop: '20px' }}>
          <TextField
            label="email"
            type="E-mail"
            placeholder="E-mail"
            onChange={() => console.log('Email')}
            fullWidth
            required
          />
        </Grid>
        <Grid item sx={{ paddingTop: '20px' }}>
          <TextField
            label="Phone number"
            type="phone-number"
            placeholder="Phone number"
            onChange={() => console.log('Phone number')}
            fullWidth
            required
          />
        </Grid>
        <Grid item sx={{ paddingTop: '20px' }}>
          <Button variant="contained" fullWidth onClick={() => navigate('/signin')}>
            Sign up
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};
