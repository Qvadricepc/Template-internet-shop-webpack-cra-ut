import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/auth-provider';
import { CartProvider } from './cart/cart-provider';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
