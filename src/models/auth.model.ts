import { IUser, UserRole } from './user.model';

import { AUTHORIZATION_TOKEN_STORAGE_KEY } from '@/constants/common';

export enum AuthForms {
  LOG_IN = 'login',
  REGISTER = 'register',
  FORGOT_PASSWORD = 'forgot',
  RESET_PASSWORD = 'reset',
}

export enum AuthEndpoints {
  REGISTER = '/jwt-auth/register',
  REGISTER_VERIFY = '/jwt-auth/verification/register',
  NEW_EMAIL_VERIFY = '/jwt-auth/verification/profile',
  LOGIN = '/jwt-auth/login',
  LOGOUT = '/jwt-auth/logout',
  FORGOT_PASSWORD = '/jwt-auth/reset_password/send',
  RESET_PASSWORD = '/jwt-auth/reset_password/reset',
}

// ============== DTO ==============

export interface IAuthorizedRequestDTO {
  [AUTHORIZATION_TOKEN_STORAGE_KEY]?: string;
}

export interface ILoginDTO {
  login: string;
  password: string;
}

export interface IRegistrationDTO {
  email: string;
  name: string;
  password: string;
}

export interface IForgotPasswordDTO {
  email: string;
}

export interface IResetPasswordDTO {
  token: string;
  email: string;
  password: string;
}

export interface IVerifyEmailDTO {
  id: string;
  expires: string;
  signature: string;
}

// ============== Response ==============

export interface IRegistrationResponse {
  token: string;
}

export interface IAuthResponse {
  token: string;
}

export interface IVerifyEmailResponse {
  data: IUser;
}
