export enum AuthFieldsNames {
  AVATAR = 'avatar',
  FIRST_NAME = 'first_name',
  LAST_NAME = 'last_name',
  EMAIL = 'email',
  PASSWORD = 'password',
  CREATE_PASSWORD = 'create_password',
  CONFIRM_PASSWORD = 'confirm_password',
  CURRENT_PASSWORD = 'current_password',
}

export type TLogInFormValues = {
  [AuthFieldsNames.EMAIL]: string;
  [AuthFieldsNames.PASSWORD]: string;
};

export type TSignUpFormValues = {
  [AuthFieldsNames.FIRST_NAME]: string;
  [AuthFieldsNames.LAST_NAME]: string;
  [AuthFieldsNames.EMAIL]: string;
  [AuthFieldsNames.CREATE_PASSWORD]: string;
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
