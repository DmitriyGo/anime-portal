import { IAnimePreview } from '@/models/anime.model';
import { IApiError } from '@/models/apiError.model';

export const PREVIEW_SLICE_NAME = 'preview';

export interface PreviewState {
  previews: IAnimePreview[];
  isLoading: boolean;
  error: IApiError | null;
}

export const initialState: PreviewState = {
  previews: [],
  isLoading: false,
  error: null,
};
