import {
  AuthEndpoints,
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
    return httpClient.post<IAuthResponse>(AuthEndpoints.LOGIN, {
      NameOrEmail: data.email_or_login,
      password: data.password,
    });
  }

  static register(data: IRegistrationDTO): ApiResponse<IRegistrationResponse> {
    return httpClient.post<IRegistrationResponse>(AuthEndpoints.REGISTER, {
      //TODO replace back to data
      name: data.login,
      email: data.email,
      password: data.password,
    });
  }

  static checkUserExists(loginOrEmail: string) {
    return httpClient.post<IUserExistsResponse>('jwt-auth/user-exists', {
      nameOrEmail: loginOrEmail,
    });
  }

  static verifyEmail(data: IVerifyEmailDTO): ApiResponse<IAuthResponse> {
    return httpClient.post<IAuthResponse>(AuthEndpoints.REGISTER_VERIFY, data);
  }

  static verifyNewEmail(
    data: IVerifyEmailDTO,
  ): ApiResponse<IVerifyEmailResponse> {
    return httpClient.post<IVerifyEmailResponse>(
      AuthEndpoints.NEW_EMAIL_VERIFY,
      data,
    );
  }

  static forgotPassword(data: IForgotPasswordDTO): ApiResponse<unknown> {
    return httpClient.post<unknown>(AuthEndpoints.FORGOT_PASSWORD, data);
  }

  static resetPassword(data: IResetPasswordDTO): ApiResponse<unknown> {
    return httpClient.post<unknown>(AuthEndpoints.RESET_PASSWORD, data);
  }

  static checkAuth() {
    return httpClient.get(AuthEndpoints.REFRESH);
  }
}

export default AuthAPI;
