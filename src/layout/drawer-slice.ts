import { createSlice } from '@reduxjs/toolkit';
import { TCategory } from './drawer-types';
import { RootState } from '../app/store';

const initialState = { category: 'All products' } as TCategory;

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    menupick: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { menupick } = drawerSlice.actions;

export const selectCategory = (state: RootState) => state.drawer.category;

export default drawerSlice.reducer;
