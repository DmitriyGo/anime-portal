import { IApiError } from '@/models/apiError.model';
import { IUser } from '@/models/user.model';

export const AUTH_SLICE_NAME = 'auth';

export interface AuthState {
  accessToken: string | null;
  user: IUser | null;
  isLoading: boolean;
  error: IApiError | null;
}

export const initialState: AuthState = {
  accessToken: null,
  user: null,
  isLoading: false,
  error: null,
};
