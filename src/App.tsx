import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error } from './common/error';
import { Product } from './product/components/product';
import { Products } from './products/components/products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
