import { createSelector } from '@reduxjs/toolkit';

import { THEMING_SLICE_NAME, ThemingState } from './models';

type RootState = {
  [THEMING_SLICE_NAME]: ThemingState;
};

const ThemingSelector = (state: RootState): ThemingState =>
  state[THEMING_SLICE_NAME];

export const selectTheme = createSelector(
  ThemingSelector,
  (state: ThemingState) => state.theme,
);
