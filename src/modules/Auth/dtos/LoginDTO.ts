import { AuthFieldsNames, TLoginFormValues } from '../helpers/types';

import { ILoginDTO } from '@/models/auth.model';

class LoginDTO implements ILoginDTO {
  email: string;
  password: string;

  constructor(values: TLoginFormValues) {
    this.email = values[AuthFieldsNames.EMAIL];
    this.password = values[AuthFieldsNames.PASSWORD];
  }
}

export default LoginDTO;
