import { createSlice } from '@reduxjs/toolkit';

import { initialState, Theme, THEMING_SLICE_NAME } from './models';

const themingSlice = createSlice({
  name: THEMING_SLICE_NAME,
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

export default themingSlice.reducer;
