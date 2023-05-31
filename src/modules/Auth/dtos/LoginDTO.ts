import { AuthFieldsNames, TLoginFormValues } from '../helpers/types';

import { ILoginDTO } from '@/models/auth.model';

class LoginDTO implements ILoginDTO {
  emailOrLogin: string;
  password: string;

  constructor(values: TLoginFormValues) {
    this.emailOrLogin = values[AuthFieldsNames.EMAIL_OR_LOGIN];
    this.password = values[AuthFieldsNames.PASSWORD];
  }
}

export default LoginDTO;
