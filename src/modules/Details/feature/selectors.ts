import { createSelector } from '@reduxjs/toolkit';

import { DetailsState, DETAILS_SLICE_NAME } from './models';

import { RootState } from '@/store';

const animeSelector = (state: RootState): DetailsState =>
  state[DETAILS_SLICE_NAME];

export const selectDetails = createSelector(
  animeSelector,
  (state) => state.details,
);

export const selectDetailsIsLoading = createSelector(
  animeSelector,
  (state) => state.isLoading,
);

export const selectDetailsError = createSelector(
  animeSelector,
  (state) => state.error,
);
