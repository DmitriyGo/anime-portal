import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import {
  initialState,
  Theme,
  THEMING_COOKIE_NAME,
  THEMING_SLICE_NAME,
  ThemingState,
} from './models';

import appCookiesStorage from 'src/shared/utils/appCookies';

const hydrate = createAction<{
  [THEMING_SLICE_NAME]: ThemingState;
}>(HYDRATE);

const themingSlice = createSlice({
  name: THEMING_SLICE_NAME,
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<Theme>) => {
      appCookiesStorage.setItem(THEMING_COOKIE_NAME, payload);

      state.theme = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state: ThemingState, action) => ({
      ...state,
      ...action.payload,
    }));
  },
});

export const { setTheme } = themingSlice.actions;

export default themingSlice.reducer;
