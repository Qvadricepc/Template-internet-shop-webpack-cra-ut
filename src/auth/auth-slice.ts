import { TState } from './auth-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import localForage from 'localforage';
import { persistReducer } from 'redux-persist';
import { fetchUpgrade } from '../services/api';

export const initialState: TState = {
  user: {
    isLoading: false,
    isError: false,
  },
};

export const getUserAsync = createAsyncThunk(
  'auth/fetchUser',
  async ({ login, password }: { login: string; password: string }) => {
    const asJson = await fetchUpgrade(`/api/users?login=${login}&password=${password}`);
    const user = asJson[0];

    if (!user) {
      console.log('No user found');
      throw new Error('No user found');
    }

    // move items from anonymous user's cart to current user's cart
    try {
      const anonymousCartAsJson = await fetchUpgrade(`/api/cart/0`);
      let currentUserCartAsJson;
      try {
        currentUserCartAsJson = await fetchUpgrade(`/api/cart/${user.id}`);
      } catch (e) {
        // @ts-ignore
        console.log(e.message);
        await fetchUpgrade(`/api/cart`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: user.id,
            productsId: [],
          }),
        });
        currentUserCartAsJson = {
          productsId: [],
        };
      }
      const set = new Set();
      anonymousCartAsJson.productsId.forEach((id: string) => set.add(id));
      currentUserCartAsJson.productsId.forEach((id: string) => set.add(id));
      const productsId = [...set];
      await fetchUpgrade(`/api/cart/0`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productsId: [],
        }),
      });
      await fetchUpgrade(`/api/cart/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productsId,
        }),
      });
    } catch (e) {
      // @ts-ignore
      console.log(e.message);
    }

    return user;
  }
);

export const updateUserAsync = createAsyncThunk(
  'auth/updateUser',
  async (params: {
    id: string;
    login: string;
    password: string;
    name?: string;
    surname?: string;
    birthday?: string | undefined;
    language?: string;
    email?: string;
    phoneNumber?: string;
  }) => {
    await fetchUpgrade(`/api/users/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
  }
);

export const createUserAsync = createAsyncThunk(
  'auth/createUser',
  async (params: { login: string; password: string; email?: string; phoneNumber?: string }) => {
    const asJson = await fetchUpgrade(
      `/api/users?login=${params.login}&password=${params.password}`
    );
    const user = asJson[0];
    if (user) {
      throw new Error('Such user exists');
    }
    await fetchUpgrade(`/api/users`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(params),
    });
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = initialState.user;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.pending, (state) => {
        state.user.isLoading = true;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.user.isLoading = false;
        state.user.isError = false;
        state.user.data = action.payload;
      })
      .addCase(getUserAsync.rejected, (state) => {
        state.user.isLoading = false;
        state.user.isError = true;
        state.user.data = undefined;
      })
      .addCase(createUserAsync.pending, (state) => {
        state.user.isLoading = true;
      })
      .addCase(createUserAsync.fulfilled, (state) => {
        state.user.isLoading = false;
        state.user.isError = false;
      })
      .addCase(createUserAsync.rejected, (state) => {
        state.user.isLoading = false;
        state.user.isError = true;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage: localForage,
  // whitelist: ['todos'],
};

export const { logout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => selectAuth(state).user;

export default persistReducer(persistConfig, authSlice.reducer);
