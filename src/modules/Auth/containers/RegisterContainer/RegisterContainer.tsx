import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import {
  CopyrightText,
  ForgotPasswordButton,
  Form,
  FormFooter,
  FormSection,
  HaveAccountText,
  Heading,
  PictureSection,
  ProfilePicture,
  RegistrationFormWrapper,
  SignInButton,
  Subheading,
  SubmitButton,
  OrText,
  GoogleSignInButton,
  GoogleSignInButtonText,
  GoogleLogo,
} from './RegisterContainerStyles';
import signupImage from '../../../../assets/sign/signup.jpg';
import { Control, ValidationControl } from '../../components';

import AuthAPI from '@/api/AuthAPI';
import googleSvg from '@/assets/sign/google.svg';
import {
  registerUser,
  RegistrationDTO,
  TRegisterFormValues,
} from '@/modules/Auth';
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
    getValues,
  } = useForm<TRegisterFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TRegisterFormValues> = (data) => {
    dispatch(registerUser(new RegistrationDTO(data)));

    reset();
  };

  const handleLoginCheck = async (loginOrEmail: string) => {
    const response = await AuthAPI.checkUserExists(loginOrEmail);

    return response.data.checkStatus;
  };

  const handleSignInButtonClick = () => {
    navigate('/login');
  };

  return (
    <RegistrationFormWrapper>
      <PictureSection>
        <ProfilePicture src={signupImage} alt="Profile Picture" />
      </PictureSection>
      <FormSection>
        <Heading>{t('sign_up_heading')}</Heading>
        <Subheading>{t('sign_up_subheading')}</Subheading>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <GoogleSignInButton href="#">
            <GoogleLogo src={googleSvg} alt="" />
            <GoogleSignInButtonText>Sign in with Google</GoogleSignInButtonText>
          </GoogleSignInButton>

          <OrText>or</OrText>

          <ValidationControl
            id="email"
            type="string"
            placeholder={t('email_placeholder')}
            takenMessage={t('email_taken')}
            errorMessage={errors.email?.message}
            onCheck={() => handleLoginCheck(getValues().email)}
            {...formRegister('email')}
          />
          <ValidationControl
            id="login"
            type="string"
            placeholder={t('login_placeholder')}
            takenMessage={t('login_taken')}
            errorMessage={errors.login?.message}
            onCheck={() => handleLoginCheck(getValues().login)}
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
          <FormFooter>
            <HaveAccountText>
              {t('already_have_account')}{' '}
              <SignInButton onClick={handleSignInButtonClick}>
                {t('sign_in')}
              </SignInButton>
            </HaveAccountText>
            <ForgotPasswordButton>{t('forgot_password')}</ForgotPasswordButton>
          </FormFooter>
        </Form>
        <CopyrightText>© PZPI-21-5 PseudoTeam</CopyrightText>
      </FormSection>
    </RegistrationFormWrapper>
  );
};

export default RegisterContainer;
