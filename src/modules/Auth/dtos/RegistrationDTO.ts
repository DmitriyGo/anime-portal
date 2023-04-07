import { AuthFieldsNames, TRegisterFormValues } from '../helpers/types';

import { IRegistrationDTO } from '@/models/auth.model';
import { UserRole } from '@/models/user.model';

class RegistrationDTO implements IRegistrationDTO {
  role;
  firstName;
  lastName;
  email;
  password;
  passwordConfirmation;
  emailSubscription;

  constructor(values: TRegisterFormValues & { role: UserRole }) {
    this.role = values.role;
    this.firstName = values[AuthFieldsNames.FIRST_NAME];
    this.lastName = values[AuthFieldsNames.LAST_NAME];
    this.email = values[AuthFieldsNames.EMAIL];
    this.password = values[AuthFieldsNames.CREATE_PASSWORD];
    this.passwordConfirmation = values[AuthFieldsNames.CONFIRM_PASSWORD];
    this.emailSubscription = values[AuthFieldsNames.SUBSCRIPTION];
  }
}

export default RegistrationDTO;
