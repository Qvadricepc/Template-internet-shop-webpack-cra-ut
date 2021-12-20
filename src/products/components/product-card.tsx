import { Card, CardContent, CardHeader, CardMedia, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import { TProduct } from '../types';
import { Link } from 'react-router-dom';

type TProps = {
  product: TProduct;
};

const Hrivna = styled('span')({
  marginLeft: '5px',
});

const Empty = styled('span')({
  color: '#ffffff',
});

export const ProductCard: React.FC<TProps> = ({ product }) => {
  const price = Math.round(product.price - product.price * (product.discount / 100));

  const discount = (
    <>
      <s>{product.price}</s>
      <Hrivna>&#8372;</Hrivna>
    </>
  );

  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <Card elevation={4}>
        <CardHeader align="center" />
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'primary' }}>
          <CardMedia
            component="img"
            image={product.thumbnail_url}
            alt="Product picture"
            sx={{ height: 'max(50%, 500px)', width: 'max(50%, 200px)', margin: 'auto' }}
          />
          <CardContent>
            <Typography variant="h4" align="center" color="black">
              {product.name}
            </Typography>
            <Typography color="primary">Category: {product.category}</Typography>
            <Typography color="#bdbdbd">
              {product.discount !== 0 ? discount : <Empty>discount</Empty>}
            </Typography>
            <Typography color="black" align="center">
              <b>{price !== product.price ? price : product.price}</b>
              <Hrivna>&#8372;</Hrivna>
            </Typography>
            <Typography color="#ffd54f">
              {product.bestSeller ? 'Bestseller' : <Empty>Bestseller</Empty>}
            </Typography>
            <Typography color="#bdbdbd">
              {product.available ? 'Available' : 'Not available'}
            </Typography>
            <Typography align="center" color="#ff8a65">
              {product.runningOut && product.available ? 'Running out' : <Empty>Running out</Empty>}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
};
