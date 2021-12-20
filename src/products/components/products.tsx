import React from 'react';
import { useGetProductsQuery } from '../products-api-slice';
import { TProduct } from '../types';
import { Grid } from '@mui/material';
import { ProductCard } from './product-card';
import { Loader } from '../../common/loader';

export const Products: React.FC = () => {
  const { data, isLoading, isError } = useGetProductsQuery({});

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  if (!data) {
    return null;
  }

  return (
    <Grid container spacing={3}>
      {data
        //.filter((category: TProduct) => category.category === 'electronics')
        .map((product: TProduct) => {
          return <ProductCard product={product} key={product.id} />;
        })}
    </Grid>
  );
};
