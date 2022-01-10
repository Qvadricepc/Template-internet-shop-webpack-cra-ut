import React from 'react';
import { useGetCartProductsQuery, useRemoveFromCartMutation } from '../cart-api-slice';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { TProduct } from '../../products/types';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../common/loader';
import { Error } from '../../common/error';
import { BasicModal } from './modal';
import { useUser } from '../../auth/hooks/use-user';
import { useCart } from '../hooks/use-cart';

export const Cart = () => {
  const navigate = useNavigate();
  const user = useUser();
  const { items } = useCart();
  const userId = user.data?.id || '0';
  const products = useGetCartProductsQuery(
    {
      userId,
      productsId: items,
    },
    {
      skip: !items,
    }
  );
  const [deleteItem, { isLoading, isError }] = useRemoveFromCartMutation();

  const totalSum =
    products.data?.length !== 0
      ? products.data &&
        products
          .data!.map((product: TProduct) => {
            return product.price;
          })
          .reduce((prev: number, next: number) => {
            return prev + next;
          })
      : 0;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }
  console.log(products.data);
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
                  <Typography>{product.price} &#8372;</Typography>
                </Grid>
                <Grid width={'25%'}>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      deleteItem({
                        userId,
                        productsId: items!.filter((id) => {
                          return String(id) !== String(product.id);
                        }),
                      });
                    }}
                  >
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
              width: '300px',
              border: '1px solid black',
              marginTop: '20px',
            }}
          >
            <Grid>
              <Typography>
                Total: {totalSum}
                &#8372;
              </Typography>
            </Grid>
            <Grid>
              <BasicModal disabled={!products.data || products.data?.length === 0} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};
