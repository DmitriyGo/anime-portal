import { IUser, UserRole } from './user.model';

import { AUTHORIZATION_TOKEN_STORAGE_KEY } from '@/constants/common';

export enum AuthForms {
  LOG_IN = 'login',
  REGISTER = 'register',
  FORGOT_PASSWORD = 'forgot',
  RESET_PASSWORD = 'reset',
}

export enum AuthEndpoints {
  REGISTER = '/auth/register',
  REGISTER_VERIFY = '/auth/verification/register',
  NEW_EMAIL_VERIFY = '/auth/verification/profile',
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
  FORGOT_PASSWORD = '/auth/reset_password/send',
  RESET_PASSWORD = '/auth/reset_password/reset',
}

// ============== DTO ==============

export interface IAuthorizedRequestDTO {
  [AUTHORIZATION_TOKEN_STORAGE_KEY]?: string;
}

export interface ILoginDTO {
  email: string;
  password: string;
}

export interface IRegistrationDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  role: UserRole;
  emailSubscription: boolean;
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
  data: {
    email: string;
  };
}

export interface IAuthResponse {
  // data: {
  token: string;
  user: IUser;
  // };
}

export interface IVerifyEmailResponse {
  data: IUser;
}
