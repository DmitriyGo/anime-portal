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
  AUTHORIZATION_TOKEN_EXPIRES,
  AUTHORIZATION_TOKEN_STORAGE_KEY,
  ResponseStatusCode,
} from '@/constants/common';
import { IApiError } from '@/models/apiError.model';
import { IAuthResponse } from '@/models/auth.model';
import { appCookiesStorage, showApiErrors } from '@/utils';

export const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    setIsAuthorized(state, { payload }: PayloadAction<boolean>) {
      state.isAuthorized = payload;
    },
    resetAuthState() {
      return initialState;
    },
    logIn(state, { payload }: PayloadAction<string>) {
      state.isAuthorized = true;
      state.authToken = payload;
    },
    logOut() {
      appCookiesStorage.removeItem(AUTHORIZATION_TOKEN_STORAGE_KEY);

      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isFulfilled(loginUser), (state: AuthState, { payload }) => {
        if (!payload.token) {
          return;
        }

        state.isLoading = false;
        state.isAuthorized = true;
        state.authToken = payload.token;

        appCookiesStorage.setItem(
          AUTHORIZATION_TOKEN_STORAGE_KEY,
          payload.token,
          { expires: AUTHORIZATION_TOKEN_EXPIRES },
        );
      })
      .addMatcher(
        isFulfilled(registerUser),
        (state: AuthState, { payload }) => {
          if (!payload.token) {
            return;
          }

          state.isLoading = false;
          state.isAuthorized = true;
          state.authToken = payload.token;

          appCookiesStorage.setItem(
            AUTHORIZATION_TOKEN_STORAGE_KEY,
            payload.token,
            { expires: AUTHORIZATION_TOKEN_EXPIRES },
          );
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

          showApiErrors(error);
        },
      )
      .addMatcher(isRejected(), (state: AuthState, action) => {
        const { error } = action;
        if (
          (error as IApiError)?.status === ResponseStatusCode.NOT_AUTHORIZED
        ) {
          state.user = null;
          state.isAuthorized = false;
          state.authToken = null;
          appCookiesStorage.removeItem(AUTHORIZATION_TOKEN_STORAGE_KEY);
        }
      });
  },
});

export const { setIsAuthorized, logOut, resetAuthState, logIn } =
  authSlice.actions;

export default authSlice.reducer;
