import { createSelector } from '@reduxjs/toolkit';

import { THEMING_SLICE_NAME, ThemingState } from './models';

import { RootState } from '@/store';

const themeSelector = (state: RootState): ThemingState =>
  state[THEMING_SLICE_NAME];

export const selectTheme = createSelector(
  themeSelector,
  (state: ThemingState) => state.theme,
);
