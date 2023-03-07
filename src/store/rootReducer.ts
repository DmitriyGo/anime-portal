import { combineReducers } from '@reduxjs/toolkit';

import themingSlice from '@/modules/_Theme/feature/themingSlice';

// import { themingApi } from '@/modules/_Theme';

export const rootReducer = combineReducers({
  theming: themingSlice,
  // [themingApi.reducerPath]: themingApi.reducer,
});
