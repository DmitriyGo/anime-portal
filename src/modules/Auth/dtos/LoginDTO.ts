import { AuthFieldsNames, TLoginFormValues } from '../helpers/types';

import { ILoginDTO } from '@/models/auth.model';

class LoginDTO implements ILoginDTO {
  email_or_login: string;
  password: string;

  constructor(values: TLoginFormValues) {
    this.email_or_login = values[AuthFieldsNames.EMAIL_OR_LOGIN];
    this.password = values[AuthFieldsNames.PASSWORD];
  }
}

export default LoginDTO;
