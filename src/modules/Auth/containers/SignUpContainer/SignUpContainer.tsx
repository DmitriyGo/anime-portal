import { yupResolver } from '@hookform/resolvers/yup';
import { ArrowLeft } from '@styled-icons/material-rounded';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { GoogleSignButton, ValidationControl } from '../../components';
import {
  CopyrightText,
  Form,
  FormFooter,
  FormSection,
  HaveAccountText,
  Heading,
  PictureSection,
  Picture,
  SignPageWrapper,
  SignInButton,
  Subheading,
  SubmitButton,
  OrText,
  StyledControl,
  BackButton,
  FormContentWrapper,
} from '../styles';

import AuthAPI from '@/api/AuthAPI';
import signUpImage from '@/assets/sign/signup.jpg';
import { ROUTES } from '@/constants/routes';
import {
  RegistrationDTO,
  selectAccessToken,
  signUpUser,
  TRegisterFormValues,
} from '@/modules/Auth';
import { useDispatch, useSelector } from '@/store';

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

const SignUpContainer = () => {
  const { t } = useTranslation('auth');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (accessToken) {
      navigate(ROUTES.HOME);
    }
  }, [navigate, accessToken]);

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
    dispatch(signUpUser(new RegistrationDTO(data)));
    reset();
  };

  const handleLoginEmailCheck = async (loginOrEmail: string) => {
    if (!loginOrEmail.trim()) return false;

    const response = await AuthAPI.checkUserExists(loginOrEmail);

    return response.data.checkStatus;
  };

  const handleBackButtonClick = () => {
    navigate(ROUTES.HOME);
  };

  const handleSignInButtonClick = () => {
    navigate(ROUTES.SIGN_IN);
  };

  return (
    <SignPageWrapper>
      <PictureSection>
        <Picture src={signUpImage} alt="Profile Picture" />
      </PictureSection>

      <FormSection>
        <BackButton onClick={handleBackButtonClick}>
          <ArrowLeft size="3rem" />
        </BackButton>

        <FormContentWrapper>
          <Heading>{t('sign_up_heading')}</Heading>
          <Subheading>{t('sign_up_subheading')}</Subheading>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <GoogleSignButton>{t('sign_up_with_google')}</GoogleSignButton>

            <OrText>{t('or')}</OrText>

            <ValidationControl
              id="email"
              type="string"
              placeholder={t('email_placeholder')}
              takenMessage={t('email_taken')}
              errorMessage={errors.email?.message}
              onCheck={() => handleLoginEmailCheck(getValues().email)}
              {...formRegister('email')}
            />

            <ValidationControl
              id="login"
              type="string"
              placeholder={t('login_placeholder')}
              takenMessage={t('login_taken')}
              errorMessage={errors.login?.message}
              onCheck={() => handleLoginEmailCheck(getValues().login)}
              {...formRegister('login')}
            />

            <StyledControl
              id="password"
              type="password"
              placeholder={t('password_placeholder')}
              errorMessage={errors?.password?.message}
              {...formRegister('password')}
            />

            <StyledControl
              id="confirm_password"
              type="password"
              placeholder={t('confirm_password_placeholder')}
              errorMessage={errors?.confirm_password?.message}
              {...formRegister('confirm_password')}
            />

            <SubmitButton bgtype="signup" type="submit">
              {t('register')}
            </SubmitButton>

            <FormFooter>
              <HaveAccountText>
                {t('already_have_account')}{' '}
                <SignInButton onClick={handleSignInButtonClick}>
                  {t('sign_in')}
                </SignInButton>
              </HaveAccountText>
            </FormFooter>
          </Form>
          <CopyrightText>© PZPI-21-5 PseudoTeam</CopyrightText>
        </FormContentWrapper>
      </FormSection>
    </SignPageWrapper>
  );
};

export default SignUpContainer;
