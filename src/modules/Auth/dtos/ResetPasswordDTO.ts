import { AuthFieldsNames, TResetPasswordFormValues } from '../helpers/types';

import { IResetPasswordDTO } from '@/models/auth.model';

class ResetPasswordDTO implements IResetPasswordDTO {
  email: string;
  token: string;
  password: string;
  password_confirmed: string;

  constructor(
    values: TResetPasswordFormValues & { email: string; token: string },
  ) {
    this.email = values.email;
    this.token = values.token;
    this.password = values[AuthFieldsNames.CREATE_PASSWORD];
    this.password_confirmed = values[AuthFieldsNames.CONFIRM_PASSWORD];
  }
}

export default ResetPasswordDTO;
