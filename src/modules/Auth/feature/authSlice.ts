import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from '@reduxjs/toolkit';

import {
  forgotPassword,
  signInUser,
  signUpUser,
  resetPassword,
  logout,
  checkAuth,
} from './actionCreators';
import { AuthState, AUTH_SLICE_NAME, initialState } from './models';

import {
  AUTHORIZATION_STORAGE_KEY,
  ResponseStatusCode,
} from '@/constants/common';
import { IApiError } from '@/models/apiError.model';
import { showApiErrors } from '@/utils';

export const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isFulfilled(signInUser, signUpUser, checkAuth),
        (state: AuthState, { payload }) => {
          if (!payload?.token) {
            return;
          }

          localStorage.setItem(AUTHORIZATION_STORAGE_KEY, 'true');

          state.isLoading = false;
          state.accessToken = payload.token;
        },
      )
      .addMatcher(isFulfilled(logout), () => {
        return initialState;
      })
      .addMatcher(
        isFulfilled(forgotPassword, resetPassword, logout),
        (state: AuthState) => {
          state.isLoading = false;
        },
      )
      .addMatcher(
        isPending(
          signUpUser,
          signInUser,
          forgotPassword,
          resetPassword,
          logout,
        ),
        (state: AuthState) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addMatcher(
        isRejected(
          signUpUser,
          signInUser,
          forgotPassword,
          resetPassword,
          logout,
        ),
        (state: AuthState, action) => {
          const { error } = action;
          state.isLoading = false;
          state.error = error;

          localStorage.removeItem(AUTHORIZATION_STORAGE_KEY);

          showApiErrors(error);
        },
      )
      .addMatcher(isRejected(logout), () => {
        return initialState;
      })
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

export const { setAccessToken } = authSlice.actions;

export default authSlice.reducer;
