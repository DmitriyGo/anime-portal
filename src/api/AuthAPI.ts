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
import { ApiResponse, secureClient } from '@/utils';

class AuthAPI {
  static login(data: ILoginDTO): ApiResponse<IAuthResponse> {
    return secureClient.post<IAuthResponse>(AuthEndpoint.LOGIN, {
      NameOrEmail: data.emailOrLogin,
      password: data.password,
    });
  }

  static register(data: IRegistrationDTO): ApiResponse<IRegistrationResponse> {
    return secureClient.post<IRegistrationResponse>(
      AuthEndpoint.REGISTER,
      data,
    );
  }

  static checkUserExists(nameOrEmail: string) {
    return secureClient.post<IUserExistsResponse>(AuthEndpoint.USER_EXISTS, {
      nameOrEmail,
    });
  }

  static verifyEmail(data: IVerifyEmailDTO): ApiResponse<IAuthResponse> {
    return secureClient.post<IAuthResponse>(AuthEndpoint.REGISTER_VERIFY, data);
  }

  static verifyNewEmail(
    data: IVerifyEmailDTO,
  ): ApiResponse<IVerifyEmailResponse> {
    return secureClient.post<IVerifyEmailResponse>(
      AuthEndpoint.NEW_EMAIL_VERIFY,
      data,
    );
  }

  static forgotPassword(data: IForgotPasswordDTO): ApiResponse<unknown> {
    return secureClient.post<unknown>(AuthEndpoint.FORGOT_PASSWORD, data);
  }

  static resetPassword(data: IResetPasswordDTO): ApiResponse<unknown> {
    return secureClient.post<unknown>(AuthEndpoint.RESET_PASSWORD, data);
  }

  static checkAuth(): ApiResponse<IAuthResponse> {
    return secureClient.post(AuthEndpoint.REFRESH);
  }

  static logout(): ApiResponse<unknown> {
    return secureClient.post(AuthEndpoint.LOGOUT);
  }
}

export default AuthAPI;
