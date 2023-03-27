import { combineReducers } from '@reduxjs/toolkit';

import { THEMING_SLICE_NAME } from '@/modules/Theme/feature/models';
import themingReducer from '@/modules/Theme/feature/themingSlice';
import { TODO_SLICE_NAME, todoReducer } from '@/modules/ToDo';
import {
  TRANSLATION_SLICE_NAME,
  translationReducer,
} from '@/modules/Translation';

export const rootReducer = combineReducers({
  [TODO_SLICE_NAME]: todoReducer,
  [THEMING_SLICE_NAME]: themingReducer,
  [TRANSLATION_SLICE_NAME]: translationReducer,
});
