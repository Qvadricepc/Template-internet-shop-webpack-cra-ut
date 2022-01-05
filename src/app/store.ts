import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { productsApiSlice } from '../products/products-api-slice';
import { productApiSlice } from '../product/product-api-slice';
import drawerReducer from '../layout/drawer-slice';
import searchReducer from '../layout/search-slice';
import { cartApiSlice } from '../cart/cart-api-slice';
import authReducer from '../auth/auth-slice';

let enhancers;

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
    drawer: drawerReducer,
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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
