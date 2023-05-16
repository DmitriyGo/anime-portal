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
import { secureClient, ApiResponse, httpClient } from '@/utils';

class AuthAPI {
  static login(data: ILoginDTO): ApiResponse<IAuthResponse> {
    return secureClient.post<IAuthResponse>(AuthEndpoints.LOGIN, data);
  }

  static register(data: IRegistrationDTO): ApiResponse<IRegistrationResponse> {
    return secureClient.post<IRegistrationResponse>(AuthEndpoints.REGISTER, {
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
    return secureClient.post<IAuthResponse>(
      AuthEndpoints.REGISTER_VERIFY,
      data,
    );
  }

  static verifyNewEmail(
    data: IVerifyEmailDTO,
  ): ApiResponse<IVerifyEmailResponse> {
    return secureClient.post<IVerifyEmailResponse>(
      AuthEndpoints.NEW_EMAIL_VERIFY,
      data,
    );
  }

  static forgotPassword(data: IForgotPasswordDTO): ApiResponse<unknown> {
    return secureClient.post<unknown>(AuthEndpoints.FORGOT_PASSWORD, data);
  }

  static resetPassword(data: IResetPasswordDTO): ApiResponse<unknown> {
    return secureClient.post<unknown>(AuthEndpoints.RESET_PASSWORD, data);
  }

  static checkAuth() {
    return secureClient.get(AuthEndpoints.REFRESH);
  }
}

export default AuthAPI;
