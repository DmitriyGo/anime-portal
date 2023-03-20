import { createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import {
  initialState,
  Theme,
  THEMING_SLICE_NAME,
  ThemingState,
} from './models';

const hydrate = createAction<{
  [THEMING_SLICE_NAME]: ThemingState;
}>(HYDRATE);

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
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state: ThemingState, action) => ({
      ...state,
      ...action.payload,
    }));
  },
});

export const { setDark, setLight } = themingSlice.actions;

export default themingSlice.reducer;
