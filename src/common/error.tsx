import { Container, Grid, Typography } from '@mui/material';

export const Error: React.FC = () => {
  return (
    <Container maxWidth={'xl'}>
      <Grid marginTop={'20%'}>
        <Typography variant={'h2'} align="center">
          Oops...... Something went wrong!!!
        </Typography>
      </Grid>
    </Container>
  );
};
