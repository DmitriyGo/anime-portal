import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from '@reduxjs/toolkit';

import {
  forgotPassword,
  loginUser,
  registerUser,
  resetPassword,
} from './actionCreators';
import { AuthState, AUTH_SLICE_NAME, initialState } from './models';

import {
  AUTHORIZATION_TOKEN_STORAGE_KEY,
  ResponseStatusCode,
} from '@/constants/common';
import { IApiError } from '@/models/apiError.model';
import { IUser } from '@/models/user.model';
import { showApiErrors } from '@/utils';

export const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    logIn(
      state,
      { payload }: PayloadAction<{ user: IUser; accessToken: string }>,
    ) {
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    },
    logOut() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isFulfilled(loginUser, registerUser),
        (state: AuthState, { payload }) => {
          if (!payload.token) {
            return;
          }

          localStorage.setItem(AUTHORIZATION_TOKEN_STORAGE_KEY, 'true');

          state.isLoading = false;
          state.accessToken = payload.token;
        },
      )
      .addMatcher(
        isFulfilled(forgotPassword, registerUser, resetPassword),
        (state: AuthState) => {
          state.isLoading = false;
        },
      )
      .addMatcher(
        isPending(registerUser, loginUser, forgotPassword, resetPassword),
        (state: AuthState) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isRejected(registerUser, loginUser, forgotPassword, resetPassword),
        (state: AuthState, action) => {
          const { error } = action;
          state.isLoading = false;
          state.error = error;

          localStorage.removeItem(AUTHORIZATION_TOKEN_STORAGE_KEY);

          showApiErrors(error);
        },
      )
      .addMatcher(isRejected(), (state: AuthState, action) => {
        const { error } = action;
        if (
          (error as IApiError)?.status === ResponseStatusCode.NOT_AUTHORIZED
        ) {
          state.user = null;
          state.accessToken = null;
        }
      });
  },
});

export const { setAccessToken, logOut, logIn } = authSlice.actions;

export default authSlice.reducer;
