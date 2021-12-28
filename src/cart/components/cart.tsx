import React from 'react';
import { useGetCartProductsQuery, useGetCartQuery } from '../cart-api-slice';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { TProduct } from '../../products/types';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const navigate = useNavigate();
  const cart = useGetCartQuery('1');
  const products = useGetCartProductsQuery({
    productsId: cart.data,
  });

  return (
    <Container maxWidth="xl">
      <Paper elevation={10} sx={{ padding: '20px', margin: '30px auto' }}>
        <Typography variant="h5" align="center" borderBottom={'2px solid black'}>
          Shopping cart
        </Typography>

        {products.data &&
          products.data!.map((product: TProduct, index: number) => {
            return (
              <Grid
                display="flex"
                alignItems={'center'}
                justifyContent={'space-between'}
                key={product.id}
                marginTop={'20px'}
                marginBottom={'20px'}
              >
                <Grid width={'25%'}>
                  <Typography align={'center'}>{index + 1}</Typography>
                </Grid>
                <Grid width={'25%'}>
                  <img src={product.image_url} alt="Product" height={'60px'} width={'60px'} />
                </Grid>
                <Grid width={'25%'}>
                  <Typography>{product.name}</Typography>
                </Grid>
                <Grid width={'25%'}>
                  <Button variant="contained" color="error" onClick={() => console.log('Delete')}>
                    DELETE
                  </Button>
                </Grid>
              </Grid>
            );
          })}
        <Grid container justifyContent="space-between" borderTop={'2px solid black'}>
          <Grid sx={{ marginTop: '35px' }}>
            <Button
              variant="outlined"
              onClick={() => {
                navigate('/');
              }}
            >
              Back to store
            </Button>
          </Grid>
          <Grid
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              backgroundColor: '#b9f6ca',
              height: '60px',
              width: '220px',
              border: '1px solid black',
              marginTop: '20px',
            }}
          >
            <Grid>
              <Typography>Price </Typography>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  console.log('Purchase order');
                }}
              >
                Purchase order
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
