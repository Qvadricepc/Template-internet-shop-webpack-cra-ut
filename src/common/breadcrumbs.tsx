import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useSearchParams } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import { TProduct } from '../products/types';
import AllOutIcon from '@mui/icons-material/AllOut';

export const Breadcrumb: React.FC<TProduct> = (data) => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('category'));
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          to="/"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'black' }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> All products
        </Link>
        {searchParams.get('category') !== 'null' && (
          <Link
            to={`/?category=${searchParams.get('category')}`}
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              color: 'black',
            }}
          >
            <AllOutIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {searchParams.get('category')}
          </Link>
        )}
        {data.name && (
          <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">
            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {data.name}
          </Typography>
        )}
      </Breadcrumbs>
    </div>
  );
};
