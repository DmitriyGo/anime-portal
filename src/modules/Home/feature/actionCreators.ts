import { createAsyncThunk } from '@reduxjs/toolkit';

import { PREVIEW_SLICE_NAME } from './models';

import AnimeAPI from '@/api/AnimeAPI';
import { IAnimePreview } from '@/models/anime.model';
import { IApiError } from '@/models/apiError.model';
import { formatApiError } from '@/utils';

export const fetchPreviews = createAsyncThunk<
  IAnimePreview[],
  string,
  { serializedErrorType: IApiError }
>(
  `${PREVIEW_SLICE_NAME}/previews`,
  async (lang: string) => {
    const response = await AnimeAPI.getPreviews(lang);
    return response.data;
  },
  { serializeError: formatApiError },
);
