import React from 'react';
import { useGetProductsQuery } from '../products-api-slice';
import { TProduct } from '../types';
import { Grid } from '@mui/material';
import { ProductCard } from './product-card';
import { Loader } from '../../common/loader';
import { useAppSelector } from '../../app/hooks';
import { selectCategory } from '../../layout/drawer-slice';
import { selectSearch } from '../../layout/search-slice';

export const Products: React.FC = () => {
  const pickedCategory = useAppSelector(selectCategory);
  const search = useAppSelector(selectSearch);
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
        .filter((cat: TProduct) =>
          pickedCategory === 'All products' ? true : cat.category === pickedCategory.toLowerCase()
        )
        .filter((searchName: TProduct) => searchName.name.toLowerCase().includes(search))
        .map((product: TProduct) => {
          return <ProductCard product={product} key={product.id} />;
        })}
    </Grid>
  );
};
