import { combineReducers } from '@reduxjs/toolkit';

import { themingReducer } from '@/modules/_Theme';

export const rootReducer = combineReducers({
  theming: themingReducer,
});
