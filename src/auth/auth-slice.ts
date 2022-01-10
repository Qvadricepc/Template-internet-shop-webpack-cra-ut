import { TState } from './auth-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import * as localForage from 'localforage';
import { persistReducer } from 'redux-persist';

export const initialState: TState = {
  user: {
    isLoading: false,
    isError: false,
  },
};

export const getUserAsync = createAsyncThunk(
  'auth/fetchUser',
  async ({ login, password }: { login: string; password: string }) => {
    const response = await fetch(`/users?login=${login}&password=${password}`);
    const asJson = await response.json();
    const user = asJson[0];

    if (!user) {
      throw new Error('No user found');
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
    await fetch(`/users/${params.id}`, {
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
    await fetch(`/users`, {
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
      .addCase(getUserAsync.rejected, (state, action) => {
        state.user.isLoading = false;
        state.user.isError = true;
        state.user.data = undefined;
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
