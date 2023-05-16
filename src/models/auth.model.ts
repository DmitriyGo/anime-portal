import { IUser } from './user.model';

import { AUTHORIZATION_TOKEN_STORAGE_KEY } from '@/constants/common';

export enum AuthForms {
  LOG_IN = 'login',
  REGISTER = 'register',
  FORGOT_PASSWORD = 'forgot',
  RESET_PASSWORD = 'reset',
}

const JWT_AUTH_PREFIX = '/jwt-auth';

export const AuthEndpoints = {
  REGISTER: `${JWT_AUTH_PREFIX}/register`,
  REGISTER_VERIFY: `${JWT_AUTH_PREFIX}/verification/register`,
  NEW_EMAIL_VERIFY: `${JWT_AUTH_PREFIX}/verification/profile`,
  LOGIN: `${JWT_AUTH_PREFIX}/login`,
  LOGOUT: `${JWT_AUTH_PREFIX}/logout`,
  FORGOT_PASSWORD: `${JWT_AUTH_PREFIX}/reset_password/send`,
  RESET_PASSWORD: `${JWT_AUTH_PREFIX}/reset_password/reset`,
  REFRESH: `${JWT_AUTH_PREFIX}/refresh`,
} as const;

// ============== DTO ==============

export interface IAuthorizedRequestDTO {
  [AUTHORIZATION_TOKEN_STORAGE_KEY]?: string;
}

export interface ILoginDTO {
  email_or_login: string;
  password: string;
}

export interface IRegistrationDTO {
  email: string;
  login: string;
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

export interface IUserExistsResponse {
  checkStatus: boolean;
}

export interface IAuthResponse {
  token: string;
}

export interface IVerifyEmailResponse {
  data: IUser;
}
