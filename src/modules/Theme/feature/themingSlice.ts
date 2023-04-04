import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState, Theme, THEMING_SLICE_NAME } from './models';

const themingSlice = createSlice({
  name: THEMING_SLICE_NAME,
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.theme = payload;
    },
  },
});

export const { setTheme } = themingSlice.actions;

export default themingSlice.reducer;
