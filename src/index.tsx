import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { persistor, store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/auth-provider';
import { CartProvider } from './cart/cart-provider';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
