import { combineReducers } from '@reduxjs/toolkit';

import { themingSlice } from '@/modules/_Theme/feature/themingSlice';

export const rootReducer = combineReducers({
  [themingSlice.name]: themingSlice.reducer,
});
