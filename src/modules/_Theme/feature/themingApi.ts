import { createApi } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { IThemeResponse, THEMING_SLICE_NAME, Theme } from './models';

import { httpClient } from '@/shared';

const themingApi = createApi({
  reducerPath: THEMING_SLICE_NAME,
  baseQuery: httpClient(),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getTheme: builder.query<IThemeResponse, void>({
      query: () => ({ url: '/theme', method: 'get' }),
    }),
    setTheme: builder.mutation<IThemeResponse, Theme>({
      query: (theme) => ({ url: '/theme', method: 'post', data: { theme } }),
    }),
  }),
});

export default themingApi;
