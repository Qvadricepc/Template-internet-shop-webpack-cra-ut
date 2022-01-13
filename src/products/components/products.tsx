import React, { useState } from 'react';
import { useGetProductsQuery } from '../products-api-slice';
import { TProduct } from '../types';
import { Grid } from '@mui/material';
import { ProductCard } from './product-card';
import { Loader } from '../../common/loader';
import { useAppSelector } from '../../app/hooks';
import { selectCategory } from '../../layout/drawer-slice';
import { selectSearch } from '../../layout/search-slice';

import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

export const Products: React.FC = () => {
  const pickedCategory = useAppSelector(selectCategory);
  const [page, setPage] = useState(1);
  const search = useAppSelector(selectSearch);
  const { data, isLoading, isError } = useGetProductsQuery(page);

  const handleChange = (e: any, p: number) => {
    setPage(p);
  };

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
    <Grid container spacing={3} bgcolor="#e8eaf6" display="flex" justifyContent="center">
      {data
        .filter((cat: TProduct) =>
          pickedCategory === 'All products' ? true : cat.category === pickedCategory.toLowerCase()
        )
        .filter((searchName: TProduct) => searchName.name.toLowerCase().includes(search))
        .map((product: TProduct) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      <Grid item display="flex" justifyContent="center">
        <Stack spacing={2}>
          <Pagination count={8} color="primary" onChange={handleChange} />
        </Stack>
      </Grid>
    </Grid>
  );
};
