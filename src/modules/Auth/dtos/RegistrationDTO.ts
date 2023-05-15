import { AuthFieldsNames, TRegisterFormValues } from '../helpers/types';

import { IRegistrationDTO } from '@/models/auth.model';

class RegistrationDTO implements IRegistrationDTO {
  email: string;
  login: string;
  password: string;

  constructor(values: TRegisterFormValues) {
    this.email = values[AuthFieldsNames.EMAIL];
    this.login = values[AuthFieldsNames.LOGIN];
    this.password = values[AuthFieldsNames.PASSWORD];
  }
}

export default RegistrationDTO;
