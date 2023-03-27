import { createSelector } from '@reduxjs/toolkit';

import { TRANSLATION_SLICE_NAME, TranslationState } from './models';

type RootState = {
  [TRANSLATION_SLICE_NAME]: TranslationState;
};

const ThemingSelector = (state: RootState): TranslationState =>
  state[TRANSLATION_SLICE_NAME];

export const selectLang = createSelector(
  ThemingSelector,
  (state: TranslationState) => state.lang,
);
