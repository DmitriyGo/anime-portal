import { createSlice } from '@reduxjs/toolkit';

import { initialState, Theme } from './models';

import { RootState } from '@/store';

// import themingApi from './themingApi';
// import type { AppState, AppThunk } from '../../store'
// import { fetchCount } from './counterAPI'

export const themingSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setDark: (state) => {
      state.theme = Theme.DARK;
    },
    setLight: (state) => {
      state.theme = Theme.LIGHT;
    },
  },
});

export const { setDark, setLight } = themingSlice.actions;

export const selectTheme = (state: RootState) => state.theming.theme;
export default themingSlice.reducer;
