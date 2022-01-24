import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { productsApiSlice } from '../products/products-api-slice';
import { productApiSlice } from '../product/product-api-slice';
import searchReducer from '../layout/search-slice';
import { cartApiSlice } from '../cart/cart-api-slice';
import authReducer from '../auth/auth-slice';
import * as localForage from 'localforage';
import { persistStore } from 'redux-persist';

let enhancers;

// keep in localStorage, by default it uses indexedDB
// https://localforage.github.io/localForage/#localforage
localForage.config({
  driver: localForage.LOCALSTORAGE,
  name: 'internship intellectsoft',
});

// @ts-ignore
if (process.env.NODE_ENV === 'development') {
  const {
    reactotron,
    // eslint-disable-next-line global-require
  } = require('./reactotron-config');
  enhancers = [reactotron.createEnhancer()];
}

export const store = configureStore({
  reducer: {
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
    [cartApiSlice.reducerPath]: cartApiSlice.reducer,
    search: searchReducer,
    auth: authReducer,
  },
  enhancers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApiSlice.middleware)
      .concat(productApiSlice.middleware)
      .concat(cartApiSlice.middleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
