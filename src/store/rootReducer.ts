import { combineReducers } from '@reduxjs/toolkit';

import { AUTH_SLICE_NAME, authReducer } from '@/modules/Auth';
import { DETAILS_SLICE_NAME, detailsSlice } from '@/modules/Details';
import { PREVIEW_SLICE_NAME, previewSlice } from '@/modules/Home';

export const rootReducer = combineReducers({
  [AUTH_SLICE_NAME]: authReducer,
  [PREVIEW_SLICE_NAME]: previewSlice,
  [DETAILS_SLICE_NAME]: detailsSlice,
});
