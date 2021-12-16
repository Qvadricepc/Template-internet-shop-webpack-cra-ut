import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { TProduct } from '../types';
import { Link } from 'react-router-dom';

type TProps = {
  product: TProduct;
};

export const ProductCard: React.FC<TProps> = ({ product }) => {
  const price = Math.round(product.price - product.price * (product.discount / 100));

  const hrivna = (
    <>
      <span style={{ marginLeft: '5px' }}>&#8372;</span>
    </>
  );

  const discount = (
    <>
      <s>{product.price}</s>
      {hrivna}
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
            sx={{ height: '18vh', width: '8vw', margin: 'auto' }}
          />
          <CardContent>
            <Typography variant="h4" align="center" color="black">
              {product.name}
            </Typography>
            <Typography color="#bdbdbd">{product.discount !== 0 ? discount : null}</Typography>
            <Typography color="black" align="center">
              <b>{price !== product.price ? price : product.price}</b>
              {hrivna}
            </Typography>
            <Typography color="#ffd54f">{product.bestSeller ? 'Bestseller' : <br />}</Typography>
            <Typography color="#bdbdbd">
              {product.available ? 'Available' : 'Not available'}
            </Typography>
            <Typography align="center" color="#ff8a65">
              {product.runningOut && product.available ? 'Running out' : <br />}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
};
