export {
  AuthFieldsNames,
  type TLoginFormValues,
  type TUpdateUserDataFormValues,
  type TRegisterFormValues,
  type TChangePasswordFormValues,
  type TForgotPasswordFormValues,
  type TResetPasswordFormValues,
} from './helpers/types';
export { AUTH_SLICE_NAME } from './feature/models';

export { default as RegistrationDTO } from './dtos/RegistrationDTO';
export { default as LoginDTO } from './dtos/LoginDTO';
export { default as ResetPasswordDTO } from './dtos/ResetPasswordDTO';
export { default as ForgotPasswordDTO } from './dtos/ForgotPasswordDTO';

export { default as authReducer, setAccessToken } from './feature/authSlice';
export {
  selectAccessToken,
  selectAuthIsLoading,
  selectAuthError,
  selectUserId,
  selectUserData,
  selectUserRole,
} from './feature/selectors';
export {
  checkAuth,
  resetPassword,
  forgotPassword,
  signInUser,
  signUpUser,
  logout,
} from './feature/actionCreators';
