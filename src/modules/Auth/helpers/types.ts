export enum AuthFieldsNames {
  AVATAR = 'avatar',
  FIRST_NAME = 'first_name',
  LAST_NAME = 'last_name',
  LOGIN = 'login',
  EMAIL = 'email',
  EMAIL_OR_LOGIN = 'email_or_login',
  PASSWORD = 'password',
  CREATE_PASSWORD = 'create_password',
  CONFIRM_PASSWORD = 'confirm_password',
  CURRENT_PASSWORD = 'current_password',
  SUBSCRIPTION = 'subscription',
}

export type TLoginFormValues = {
  [AuthFieldsNames.EMAIL_OR_LOGIN]: string;
  [AuthFieldsNames.PASSWORD]: string;
};

export type TRegisterFormValues = {
  [AuthFieldsNames.LOGIN]: string;
  [AuthFieldsNames.EMAIL]: string;
  [AuthFieldsNames.PASSWORD]: string;
  [AuthFieldsNames.CONFIRM_PASSWORD]: string;
};

export type TForgotPasswordFormValues = {
  [AuthFieldsNames.EMAIL]: string;
};

export type TResetPasswordFormValues = {
  [AuthFieldsNames.CREATE_PASSWORD]: string;
  [AuthFieldsNames.CONFIRM_PASSWORD]: string;
};

export type TUpdateUserDataFormValues = {
  [AuthFieldsNames.AVATAR]: File | string;
  [AuthFieldsNames.FIRST_NAME]: string;
  [AuthFieldsNames.LAST_NAME]: string;
  [AuthFieldsNames.EMAIL]: string;
};

export type TChangePasswordFormValues = {
  [AuthFieldsNames.CURRENT_PASSWORD]: string;
  [AuthFieldsNames.CREATE_PASSWORD]: string;
  [AuthFieldsNames.CONFIRM_PASSWORD]: string;
};
