import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import signinImage from '../../../../assets/sign/signin.jpg';
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
  StyledControl,
} from '../styles';

import googleSvg from '@/assets/sign/google.svg';
import {
  LoginDTO,
  loginUser,
  selectAccessToken,
  TLoginFormValues,
} from '@/modules/Auth';
import { useDispatch, useSelector } from '@/store';

//TODO add translations to validation
const schema = yup.object().shape({
  email_or_login: yup.string().required('This field is required'),
  password: yup
    .string()
    .min(6, 'Min length 6 characters')
    .required('Password is required'),
});

const RegisterContainer = () => {
  const { t } = useTranslation('auth');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [navigate, accessToken]);

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TLoginFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TLoginFormValues> = (data) => {
    dispatch(loginUser(new LoginDTO(data)));

    reset();
  };

  const handleSignUpButtonClick = () => {
    navigate('/register');
  };

  return (
    <RegistrationFormWrapper>
      <PictureSection>
        <ProfilePicture src={signinImage} alt="Profile Picture" />
      </PictureSection>
      <FormSection>
        <Heading>{t('sign_in_heading')}</Heading>
        <Subheading>{t('sign_in_subheading')}</Subheading>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <GoogleSignInButton href="#">
            <GoogleLogo src={googleSvg} alt="" />
            <GoogleSignInButtonText>Sign in with Google</GoogleSignInButtonText>
          </GoogleSignInButton>

          <OrText>or</OrText>

          <StyledControl
            id="email_or_login"
            type="string"
            placeholder={t('email_login_placeholder')}
            errorMessage={errors?.email_or_login?.message}
            {...formRegister('email_or_login')}
          />

          <StyledControl
            id="password"
            type="password"
            placeholder={t('password_placeholder')}
            errorMessage={errors?.password?.message}
            {...formRegister('password')}
          />

          <SubmitButton bgtype="signin" type="submit">
            {t('login')}
          </SubmitButton>
          <FormFooter>
            <HaveAccountText>
              {t('do_not_have_account')}{' '}
              <SignInButton onClick={handleSignUpButtonClick}>
                {t('sign_up')}
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
