import {
  AuthEndpoint,
  IAuthResponse,
  IForgotPasswordDTO,
  ILoginDTO,
  IRegistrationDTO,
  IRegistrationResponse,
  IResetPasswordDTO,
  IUserExistsResponse,
  IVerifyEmailDTO,
  IVerifyEmailResponse,
} from '@/models/auth.model';
import { ApiResponse, httpClient } from '@/utils';

class AuthAPI {
  static login(data: ILoginDTO): ApiResponse<IAuthResponse> {
    return httpClient.post<IAuthResponse>(AuthEndpoint.LOGIN, {
      NameOrEmail: data.email_or_login,
      password: data.password,
    });
  }

  static register(data: IRegistrationDTO): ApiResponse<IRegistrationResponse> {
    return httpClient.post<IRegistrationResponse>(AuthEndpoint.REGISTER, {
      //TODO replace back to data
      name: data.login,
      email: data.email,
      password: data.password,
    });
  }

  static checkUserExists(loginOrEmail: string) {
    return httpClient.post<IUserExistsResponse>(AuthEndpoint.USER_EXISTS, {
      nameOrEmail: loginOrEmail,
    });
  }

  static verifyEmail(data: IVerifyEmailDTO): ApiResponse<IAuthResponse> {
    return httpClient.post<IAuthResponse>(AuthEndpoint.REGISTER_VERIFY, data);
  }

  static verifyNewEmail(
    data: IVerifyEmailDTO,
  ): ApiResponse<IVerifyEmailResponse> {
    return httpClient.post<IVerifyEmailResponse>(
      AuthEndpoint.NEW_EMAIL_VERIFY,
      data,
    );
  }

  static forgotPassword(data: IForgotPasswordDTO): ApiResponse<unknown> {
    return httpClient.post<unknown>(AuthEndpoint.FORGOT_PASSWORD, data);
  }

  static resetPassword(data: IResetPasswordDTO): ApiResponse<unknown> {
    return httpClient.post<unknown>(AuthEndpoint.RESET_PASSWORD, data);
  }

  static checkAuth(): ApiResponse<IAuthResponse> {
    return httpClient.post(AuthEndpoint.REFRESH);
  }

  static logout(): ApiResponse<unknown> {
    return httpClient.post(AuthEndpoint.LOGOUT);
  }
}

export default AuthAPI;
