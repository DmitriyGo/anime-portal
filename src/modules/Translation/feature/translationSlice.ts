import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  initialState,
  SupportedLanguage,
  TRANSLATION_SLICE_NAME,
} from './models';

const translationSlice = createSlice({
  name: TRANSLATION_SLICE_NAME,
  initialState,
  reducers: {
    setLang: (state, { payload }: PayloadAction<SupportedLanguage>) => {
      state.lang = payload;
    },
  },
});

export const { setLang } = translationSlice.actions;

export default translationSlice.reducer;
