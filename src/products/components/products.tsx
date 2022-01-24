import React, { useEffect, useState } from 'react';
import { useGetAllProductsQuery, useGetProductsQuery } from '../products-api-slice';
import { TProduct } from '../types';
import { Grid } from '@mui/material';
import { ProductCard } from './product-card';
import { Loader } from '../../common/loader';
import { useAppSelector } from '../../app/hooks';
import { selectSearch } from '../../layout/search-slice';

import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { Breadcrumb } from '../../common/breadcrumbs';
import { useSearchParams } from 'react-router-dom';

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pickedCategory = searchParams.get('category') || '';
  const [page, setPage] = useState(1);
  const search = useAppSelector(selectSearch) || undefined;
  const category = pickedCategory.toLowerCase() !== '' ? pickedCategory.toLowerCase() : undefined;

  const { data, isLoading, isError } = useGetProductsQuery({
    page: page,
    category: category,
    name: search,
  });
  const { data: allData } = useGetAllProductsQuery({
    category: category,
    name: search,
  });

  const handleChange = (e: any, p: number) => {
    setPage(p);
  };

  useEffect(() => {
    setPage(1);
  }, [category, search]);

  const totalPages = Math.ceil(allData?.length / 12);

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
      <Grid item display="flex" justifyContent="start" lg={12} md={12} xs={12}>
        {category && <Breadcrumb {...data} />}
      </Grid>
      {data.map((product: TProduct) => {
        return <ProductCard product={product} key={product.id} />;
      })}

      {totalPages > 1 && (
        <Grid item display="flex" justifyContent="center" lg={12} md={12} xs={12}>
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              color="primary"
              onChange={handleChange}
              defaultPage={1}
            />
          </Stack>
        </Grid>
      )}
    </Grid>
  );
};
