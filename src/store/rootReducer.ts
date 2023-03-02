import { combineReducers } from '@reduxjs/toolkit';

import { themingApi } from '@/modules/_Theme';

export const rootReducer = combineReducers({
  [themingApi.reducerPath]: themingApi.reducer,
});
