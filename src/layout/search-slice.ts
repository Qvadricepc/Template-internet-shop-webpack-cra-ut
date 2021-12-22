import { createSlice } from '@reduxjs/toolkit';
import { TSearch } from './drawer-types';
import { RootState } from '../app/store';

const initialState = { name: '' } as TSearch;

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchpick: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { searchpick } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.name;

export default searchSlice.reducer;
