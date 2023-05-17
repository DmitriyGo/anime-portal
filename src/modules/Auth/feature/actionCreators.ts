import { createAsyncThunk } from '@reduxjs/toolkit';

import { AUTH_SLICE_NAME } from './models';
import formatApiError from '../../../shared/utils/formatApiError';

import AuthAPI from '@/api/AuthAPI';
import { AUTHORIZATION_STORAGE_KEY } from '@/constants/common';
import { IApiError } from '@/models/apiError.model';
import {
  IAuthResponse,
  IForgotPasswordDTO,
  ILoginDTO,
  IRegistrationDTO,
  IRegistrationResponse,
  IResetPasswordDTO,
} from '@/models/auth.model';

export const signUpUser = createAsyncThunk<
  IRegistrationResponse,
  IRegistrationDTO,
  { serializedErrorType: IApiError }
>(
  `${AUTH_SLICE_NAME}/register`,
  async (data: IRegistrationDTO) => {
    const response = await AuthAPI.register(data);
    return response.data;
  },
  { serializeError: formatApiError },
);

export const signInUser = createAsyncThunk<
  IAuthResponse,
  ILoginDTO,
  { serializedErrorType: IApiError }
>(
  `${AUTH_SLICE_NAME}/login`,
  async (data: ILoginDTO) => {
    const response = await AuthAPI.login(data);
    return response.data;
  },
  { serializeError: formatApiError },
);

export const forgotPassword = createAsyncThunk<
  unknown,
  IForgotPasswordDTO,
  { serializedErrorType: IApiError }
>(
  `${AUTH_SLICE_NAME}/forgotPassword`,
  async (data: IForgotPasswordDTO) => {
    const response = await AuthAPI.forgotPassword(data);
    return response.data;
  },
  { serializeError: formatApiError },
);

export const resetPassword = createAsyncThunk<
  unknown,
  IResetPasswordDTO,
  { serializedErrorType: IApiError }
>(
  `${AUTH_SLICE_NAME}/resetPassword`,
  async (data: IResetPasswordDTO) => {
    const response = await AuthAPI.resetPassword(data);
    return response.data;
  },
  { serializeError: formatApiError },
);

export const checkAuth = createAsyncThunk<
  IAuthResponse | null,
  never,
  { serializedErrorType: IApiError }
>(
  `${AUTH_SLICE_NAME}/checkAuth`,
  async () => {
    const authorized = localStorage.getItem(AUTHORIZATION_STORAGE_KEY);

    if (authorized) {
      const response = await AuthAPI.checkAuth();
      return response.data;
    }

    return null;
  },
  { serializeError: formatApiError },
);

export const logout = createAsyncThunk<
  unknown,
  never,
  { serializedErrorType: IApiError }
>(
  `${AUTH_SLICE_NAME}/logout`,
  async () => {
    const response = await AuthAPI.logout();

    localStorage.removeItem(AUTHORIZATION_STORAGE_KEY);

    return response.data;
  },
  { serializeError: formatApiError },
);
