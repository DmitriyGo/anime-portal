import { createAsyncThunk } from '@reduxjs/toolkit';

import { AUTH_SLICE_NAME } from './models';
import formatApiError from '../../../shared/utils/formatApiError';

import AuthAPI from '@/api/AuthAPI';
import { IApiError } from '@/models/apiError.model';
import {
  IAuthResponse,
  IForgotPasswordDTO,
  ILoginDTO,
  IRegistrationDTO,
  IRegistrationResponse,
  IResetPasswordDTO,
} from '@/models/auth.model';

export const registerUser = createAsyncThunk<
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

export const loginUser = createAsyncThunk<
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
  unknown,
  never,
  { serializedErrorType: IApiError }
>(
  `${AUTH_SLICE_NAME}/checkAuth`,
  async () => {
    const response = await AuthAPI.checkAuth();
    return response.data;
  },
  { serializeError: formatApiError },
);
