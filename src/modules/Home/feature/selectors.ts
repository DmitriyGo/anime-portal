import { createSelector } from '@reduxjs/toolkit';

import { PreviewState, PREVIEW_SLICE_NAME } from './models';

import { RootState } from '@/store';

const animeSelector = (state: RootState): PreviewState =>
  state[PREVIEW_SLICE_NAME];

export const selectPreviews = createSelector(
  animeSelector,
  (state) => state.previews,
);

export const selectPreviewsIsLoading = createSelector(
  animeSelector,
  (state) => state.isLoading,
);

export const selectPreviewsError = createSelector(
  animeSelector,
  (state) => state.error,
);
