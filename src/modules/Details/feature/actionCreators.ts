import { createAsyncThunk } from '@reduxjs/toolkit';

import { DETAILS_SLICE_NAME } from './models';

import AnimeAPI from '@/api/AnimeAPI';
import { IAnimeDetails } from '@/models/anime.model';
import { IApiError } from '@/models/apiError.model';
import { formatApiError } from '@/utils';

export const fetchDetails = createAsyncThunk<
  IAnimeDetails,
  { lang: string; id: number },
  { serializedErrorType: IApiError }
>(
  `${DETAILS_SLICE_NAME}/details`,
  async ({ lang, id }) => {
    const response = await AnimeAPI.getAnimeDetailsById(lang, id);
    return response.data;
  },
  { serializeError: formatApiError },
);
