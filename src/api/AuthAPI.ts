import {
  AuthEndpoints,
  IAuthResponse,
  IForgotPasswordDTO,
  ILoginDTO,
  IRegistrationDTO,
  IRegistrationResponse,
  IResetPasswordDTO,
  IVerifyEmailDTO,
  IVerifyEmailResponse,
} from '@/models/auth.model';
import { httpClientAuth, ApiResponse } from '@/utils';

class AuthAPI {
  static login(data: ILoginDTO): ApiResponse<IAuthResponse> {
    return httpClientAuth.post<IAuthResponse>(AuthEndpoints.LOGIN, data);
  }

  static register(data: IRegistrationDTO): ApiResponse<IRegistrationResponse> {
    return httpClientAuth.post<IRegistrationResponse>(
      AuthEndpoints.REGISTER,
      data,
    );
  }

  static verifyEmail(data: IVerifyEmailDTO): ApiResponse<IAuthResponse> {
    return httpClientAuth.post<IAuthResponse>(
      AuthEndpoints.REGISTER_VERIFY,
      data,
    );
  }

  static verifyNewEmail(
    data: IVerifyEmailDTO,
  ): ApiResponse<IVerifyEmailResponse> {
    return httpClientAuth.post<IVerifyEmailResponse>(
      AuthEndpoints.NEW_EMAIL_VERIFY,
      data,
    );
  }

  static forgotPassword(data: IForgotPasswordDTO): ApiResponse<unknown> {
    return httpClientAuth.post<unknown>(AuthEndpoints.FORGOT_PASSWORD, data);
  }

  static resetPassword(data: IResetPasswordDTO): ApiResponse<unknown> {
    return httpClientAuth.post<unknown>(AuthEndpoints.RESET_PASSWORD, data);
  }
}

export default AuthAPI;
