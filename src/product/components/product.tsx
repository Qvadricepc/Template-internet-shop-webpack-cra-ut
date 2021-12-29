import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../product-api-slice';
import { Loader } from '../../common/loader';
import { Button, Container, Grid, Paper, styled, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Comments } from '../../common/comments';
import { Breadcrumb } from '../../common/breadcrumbs';
import { useAddToCartMutation, useGetCartQuery } from '../../cart/cart-api-slice';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Hrivna = styled('span')({
  marginLeft: '5px',
});

export const Product: React.FC = () => {
  const params = useParams();
  const userId = '1';
  const productId = params.id as string;
  const { data, isLoading, isError } = useGetProductQuery(productId);
  const [addToCart] = useAddToCartMutation();
  const cart = useGetCartQuery(userId);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const discount: number = Math.round(data.price - data.price * (data.discount / 100));

  return (
    <Container maxWidth={'xl'}>
      <Breadcrumb {...data} />
      <Typography variant="h3" align="center">
        {data.name}
      </Typography>
      <Grid container spacing={2} display="flex">
        <Grid item sx={{ marginTop: '3vh' }} alignItems="center">
          <Item>
            <img src={data.image_url} alt="Product" height={'400px'} width={'400px'} />
          </Item>
        </Grid>
        <Grid item sx={{ marginTop: '3vh', flexGrow: 1 }}>
          <Grid item>
            <Button
              variant="outlined"
              size="large"
              startIcon={<ShoppingBasketIcon />}
              onClick={() => {
                console.log('ADD to cart');
                addToCart({
                  userId,
                  productsId: [...(cart.data || []), productId],
                });
              }}
              disabled={!data.available}
            >
              BUY
            </Button>
          </Grid>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            {data.available ? 'Availabe' : 'Not available'}
          </Typography>
          <Grid item sx={{ marginTop: '15vh' }}>
            <Item>
              <Grid display="flex" justifyContent="space-between">
                <Typography color="black" align="center">
                  <b>{discount !== data.price ? discount : data.price}</b>
                  <Hrivna>&#8372;</Hrivna>
                </Typography>
                <Typography color="black" align="center">
                  {data.runningOut && data.available ? 'Running Out' : null}
                </Typography>
                <Typography color="#ffd54f">{data.bestSeller ? 'Bestseller' : null}</Typography>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Grid>
      <Grid container display="flex" sx={{ marginTop: '4vh' }}>
        <Grid item xs={12} lg={6}>
          <Paper style={{ padding: '40px 20px' }}>
            <Typography>
              <b>Description: </b>
              {data.description}
            </Typography>
            <Typography>
              <b>Varanty: </b>
              {data.varanty}
            </Typography>
            <Typography>
              <b>Country: </b>
              {data.country}
            </Typography>
            <Typography>
              <b>Trader: </b>
              {data.trader}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant={'h2'} align="center">
            <Comments />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
