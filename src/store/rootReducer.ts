import { combineReducers } from '@reduxjs/toolkit';

import { AUTH_SLICE_NAME, authReducer } from '@/modules/Auth';
import { TODO_SLICE_NAME, todoReducer } from '@/modules/ToDo';

export const rootReducer = combineReducers({
  [TODO_SLICE_NAME]: todoReducer,
  [AUTH_SLICE_NAME]: authReducer,
});
