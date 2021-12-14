import { Grid, Paper } from '@mui/material';

export const Error: React.FC = () => {
  return (
    <Grid>
      <Paper
        sx={{
          backgroundImage:
            'url(https://cdn.pixabay.com/photo/2017/04/09/12/45/error-2215702_960_720.png)',
          height: '100vh',
          backgroundRepeat: 'repeat',
        }}
      >
        Error
      </Paper>
    </Grid>
  );
};
