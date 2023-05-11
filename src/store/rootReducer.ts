import { combineReducers } from '@reduxjs/toolkit';

import { AUTH_SLICE_NAME, authReducer } from '@/modules/Auth';

export const rootReducer = combineReducers({
  [AUTH_SLICE_NAME]: authReducer,
});
