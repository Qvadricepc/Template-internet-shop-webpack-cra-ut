import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { TProduct } from '../types';
import { Link } from 'react-router-dom';

type TProps = {
  product: TProduct;
};

export const ProductCard: React.FC<TProps> = ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <Card elevation={4}>
        <CardHeader align="center" />
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'primary' }}>
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
            {product.discount !== 0 ? (
              <Typography color="#bdbdbd">
                <s>{product.price} </s>
                <span>&#8372;</span>
              </Typography>
            ) : (
              <br />
            )}
            <Typography color="black" align="center">
              <b>
                {product.price - product.price * (product.discount / 100) !== product.price
                  ? product.price - product.price * (product.discount / 100)
                  : product.price}
              </b>
              <span style={{ marginLeft: '5px' }}>&#8372;</span>
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
