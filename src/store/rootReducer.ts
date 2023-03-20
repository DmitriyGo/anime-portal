import { combineReducers } from '@reduxjs/toolkit';

import { THEMING_SLICE_NAME } from '@/modules/Theme/feature/models';
import themingReducer from '@/modules/Theme/feature/themingSlice';
import { TODO_SLICE_NAME, todoReducer } from '@/modules/ToDo';

export const rootReducer = combineReducers({
  [TODO_SLICE_NAME]: todoReducer,
  [THEMING_SLICE_NAME]: themingReducer,
});
