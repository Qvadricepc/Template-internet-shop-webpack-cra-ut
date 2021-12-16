import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';
import { TProduct } from '../products/types';

export const Breadcrumb: React.FC<TProduct> = (data) => {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          to="/"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'black' }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> Home
        </Link>
        <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {data.name}
        </Typography>
      </Breadcrumbs>
    </div>
  );
};
