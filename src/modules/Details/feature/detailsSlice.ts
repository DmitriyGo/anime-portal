import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import { fetchDetails } from './actionCreators';
import { DETAILS_SLICE_NAME, DetailsState, initialState } from './models';

import { showApiErrors } from '@/utils';

export const detailsSlice = createSlice({
  name: DETAILS_SLICE_NAME,
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isFulfilled(fetchDetails),
        (state: DetailsState, { payload }) => {
          state.details = payload;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addMatcher(isPending(fetchDetails), (state: DetailsState) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isRejected(fetchDetails), (state: DetailsState, action) => {
        const { error } = action;
        state.isLoading = false;
        state.error = error;

        console.error(error);

        showApiErrors(error);
      });
  },
});

export const { resetState } = detailsSlice.actions;

export default detailsSlice.reducer;
