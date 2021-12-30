import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error } from './common/error';
import { Product } from './product/components/product';
import { Products } from './products/components/products';
import { Layout } from './layout/components/layout';
import { Cart } from './cart/components/cart';
import { Profile } from './auth/components/profile';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  );
}

export default App;
