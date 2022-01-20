import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error } from './common/error';
import { Product } from './product/components/product';
import { Products } from './products/components/products';
import { Layout } from './layout/components/layout';
import { Cart } from './cart/components/cart';
import { Profile } from './auth/components/profile';
import { Signin } from './auth/components/signin';
import { Signup } from './auth/components/signup';
import { AuthOnly } from './auth/components/auth-only';
import { NotAuthOnly } from './auth/components/noauth-only';
import { ToasterProvider } from './common/toaster/toaster-provider';

function App() {
  return (
    <Layout>
      <ToasterProvider>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:category" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<AuthOnly component={Profile} />} />
          <Route path="/signin" element={<NotAuthOnly component={Signin} />} />
          <Route path="/signup" element={<NotAuthOnly component={Signup} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ToasterProvider>
    </Layout>
  );
}

export default App;
