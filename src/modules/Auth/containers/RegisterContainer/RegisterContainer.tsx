import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import {
  ProfilePicture,
  PictureSection,
  RegistrationFormWrapper,
  FormSection,
  Form,
  Heading,
  SubmitButton,
} from './RegisterContainerStyles';
import signupImage from '../../../../assets/sign/signup.jpg';
import { Control, ValidationControl } from '../../components';

import { registerUser } from '@/modules/Auth';
import RegistrationDTO from '@/modules/Auth/dtos/RegistrationDTO';
import { TRegisterFormValues } from '@/modules/Auth/helpers/types';
import { useDispatch } from '@/store';

//TODO add translations to validation
const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required'),
  login: yup.string().required('Login is required'),
  password: yup
    .string()
    .min(6, 'Min length 6 characters')
    .required('Password is required'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

const RegisterContainer = () => {
  const { t } = useTranslation('auth');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TRegisterFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TRegisterFormValues> = (data) => {
    dispatch(registerUser(new RegistrationDTO(data)));
    reset();
  };

  const handleLoginCheck = () => {
    // const response = await httpClient.post('/auth/check-login', {
    //   login: getValues().login,
    // });
    // return response.data
    return false;
  };

  return (
    <RegistrationFormWrapper>
      <PictureSection>
        <ProfilePicture src={signupImage} alt="Profile Picture" />
      </PictureSection>
      <FormSection>
        <Heading>Sign Up</Heading>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ValidationControl
            id="email"
            type="string"
            placeholder={t('email_placeholder')}
            takenMessage={t('email_taken')}
            errorMessage={errors.email?.message}
            onCheck={handleLoginCheck}
            {...formRegister('email')}
          />

          <ValidationControl
            id="login"
            type="string"
            placeholder={t('login_placeholder')}
            takenMessage={t('login_taken')}
            errorMessage={errors.login?.message}
            onCheck={handleLoginCheck}
            {...formRegister('login')}
          />

          <Control
            id="password"
            type="password"
            placeholder={t('password_placeholder')}
            errorMessage={errors?.password?.message}
            {...formRegister('password')}
          />

          <Control
            id="confirm_password"
            type="password"
            placeholder={t('confirm_password_placeholder')}
            errorMessage={errors?.confirm_password?.message}
            {...formRegister('confirm_password')}
          />

          <SubmitButton type="submit">{t('register')}</SubmitButton>
        </Form>
      </FormSection>
    </RegistrationFormWrapper>
  );
};

export default RegisterContainer;
