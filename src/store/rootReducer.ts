import { combineReducers } from '@reduxjs/toolkit';

import { THEMING_SLICE_NAME } from '@/modules/_Theme/feature/models';
import themingReducer from '@/modules/_Theme/feature/themingSlice';
import { TODO_API_NAME } from '@/modules/ToDo';
import { todoApiReducer } from '@/modules/ToDo';

export const rootReducer = combineReducers({
  [THEMING_SLICE_NAME]: themingReducer,
  [TODO_API_NAME]: todoApiReducer,
});
