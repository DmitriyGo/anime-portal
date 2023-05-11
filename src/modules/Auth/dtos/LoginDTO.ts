import { AuthFieldsNames, TLoginFormValues } from '../helpers/types';

import { ILoginDTO } from '@/models/auth.model';

class LoginDTO implements ILoginDTO {
  login: string;
  password: string;

  constructor(values: TLoginFormValues) {
    this.login = values[AuthFieldsNames.LOGIN];
    this.password = values[AuthFieldsNames.PASSWORD];
  }
}

export default LoginDTO;
