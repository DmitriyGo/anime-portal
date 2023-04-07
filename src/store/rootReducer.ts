import { combineReducers } from '@reduxjs/toolkit';

import { AUTH_SLICE_NAME, authReducer } from '@/modules/Auth';
import { THEMING_SLICE_NAME } from '@/modules/Theme';
import themingReducer from '@/modules/Theme/feature/themingSlice';
import { TODO_SLICE_NAME, todoReducer } from '@/modules/ToDo';

export const rootReducer = combineReducers({
  [TODO_SLICE_NAME]: todoReducer,
  [AUTH_SLICE_NAME]: authReducer,
  [THEMING_SLICE_NAME]: themingReducer,
});
