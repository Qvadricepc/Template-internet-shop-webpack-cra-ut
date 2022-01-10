import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../product-api-slice';
import { Loader } from '../../common/loader';
import { Button, Container, Grid, Paper, styled, Typography } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Comments } from '../../common/comments';
import { Breadcrumb } from '../../common/breadcrumbs';
import { useAddToCartMutation } from '../../cart/cart-api-slice';
import { useUser } from '../../auth/hooks/use-user';
import { useCart } from '../../cart/hooks/use-cart';

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
  const user = useUser();
  const userId = user.data?.id || '0';
  const productId = params.id as string;
  const { data, isLoading, isError } = useGetProductQuery(productId);
  const [addToCart, { isLoading: addLoading, isError: addError }] = useAddToCartMutation();
  const { items: cardItems } = useCart();

  if (isLoading || addLoading) {
    return <Loader />;
  }

  if (isError || addError) {
    return <div>Error</div>;
  }

  const discount: number = Math.round(data.price - data.price * (data.discount / 100));

  return (
    <Container maxWidth={'xl'} sx={{ backgroundColor: '#e8eaf6' }}>
      <Breadcrumb {...data} />
      <Typography variant="h3" align="center">
        {data.name}
      </Typography>
      <Grid container spacing={2} display="flex">
        <Grid item sx={{ marginTop: '3vh' }}>
          <Item>
            <img src={data.image_url} alt="Product" height={'400px'} width={'400px'} />
          </Item>
        </Grid>
        <Grid item sx={{ marginTop: '3vh', flexGrow: 1 }}>
          <Grid item>
            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingBasketIcon />}
              onClick={() => {
                addToCart({
                  userId,
                  productsId: [...(cardItems || []), productId],
                });
              }}
              disabled={!data.available}
            >
              BUY
            </Button>
          </Grid>
          <Typography
            variant="h5"
            sx={{ textAlign: 'center', marginTop: { md: '5vh', xs: '2vh' } }}
          >
            {data.available ? 'Available' : 'Not available'}
          </Typography>
          <Grid item sx={{ marginTop: { md: '15vh', xs: '3vh' } }}>
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
      <Grid container display="flex" sx={{ marginTop: '4vh' }} spacing={1}>
        <Grid item xs={12} lg={6}>
          <Item sx={{ textAlign: 'left' }}>
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
          </Item>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Item>
            <Typography variant={'h2'} align="center">
              <Comments />
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};
