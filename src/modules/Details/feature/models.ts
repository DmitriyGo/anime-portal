import { IAnimeDetails } from '@/models/anime.model';
import { IApiError } from '@/models/apiError.model';

export const DETAILS_SLICE_NAME = 'details';

export interface DetailsState {
  details: IAnimeDetails | null;
  isLoading: boolean;
  error: IApiError | null;
}

export const initialState: DetailsState = {
  details: null,
  isLoading: false,
  error: null,
};
