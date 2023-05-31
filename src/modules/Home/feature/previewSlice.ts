import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import { fetchPreviews } from './actionCreators';
import { PREVIEW_SLICE_NAME, PreviewState, initialState } from './models';

import { showApiErrors } from '@/utils';

export const previewSlice = createSlice({
  name: PREVIEW_SLICE_NAME,
  initialState,
  reducers: {
    resetState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isFulfilled(fetchPreviews),
        (state: PreviewState, { payload }) => {
          state.previews = payload;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addMatcher(isPending(fetchPreviews), (state: PreviewState) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isRejected(fetchPreviews), (state: PreviewState, action) => {
        const { error } = action;
        state.isLoading = false;
        state.error = error;

        showApiErrors(error);
      });
  },
});

export const { resetState } = previewSlice.actions;

export default previewSlice.reducer;
