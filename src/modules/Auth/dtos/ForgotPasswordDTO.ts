import { AuthFieldsNames, TForgotPasswordFormValues } from '../helpers/types';

import { IForgotPasswordDTO } from '@/models/auth.model';

class ForgotPasswordDTO implements IForgotPasswordDTO {
  email;

  constructor(values: TForgotPasswordFormValues) {
    this.email = values[AuthFieldsNames.EMAIL];
  }
}

export default ForgotPasswordDTO;
