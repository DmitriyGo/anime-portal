import { yupResolver } from '@hookform/resolvers/yup';
import { ArrowLeft } from '@styled-icons/material-rounded';
import React, { useEffect, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { GoogleSignButton } from '../../components';
import {
  CopyrightText,
  ForgotPasswordButton,
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

import signInImage from '@/assets/sign/signin.jpg';
import { ROUTES } from '@/constants/routes';
import {
  LoginDTO,
  selectAccessToken,
  signInUser,
  TLoginFormValues,
} from '@/modules/Auth';
import { useDispatch, useSelector } from '@/store';

const SignInContainer = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation('auth');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);

  const schema = useMemo(() => {
    return yup.object().shape({
      email_or_login: yup.string().required(`${t('validate_field_required')}`),
      password: yup
        .string()
        .min(6, `${t('validate_password_min')}`)
        .required(`${t('validate_password_required')}`),
    });
  }, [language]);

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
  } = useForm<TLoginFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TLoginFormValues> = (data) => {
    dispatch(signInUser(new LoginDTO(data)));
    reset();
  };

  const handleBackButtonClick = () => {
    navigate(ROUTES.HOME);
  };

  const handleSignUpButtonClick = () => {
    navigate(ROUTES.SIGN_UP);
  };

  return (
    <SignPageWrapper>
      <PictureSection>
        <Picture src={signInImage} alt="Profile Picture" />
      </PictureSection>

      <FormSection>
        <BackButton onClick={handleBackButtonClick}>
          <ArrowLeft size="3rem" />
        </BackButton>

        <FormContentWrapper>
          <Heading>{t('sign_in_heading')}</Heading>
          <Subheading>{t('sign_in_subheading')}</Subheading>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <GoogleSignButton>{t('sign_in_with_google')}</GoogleSignButton>

            <OrText>{t('or')}</OrText>

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

              <ForgotPasswordButton type="button">
                {t('forgot_password')}
              </ForgotPasswordButton>
            </FormFooter>
          </Form>
          <CopyrightText>© PZPI-21-5 PseudoTeam</CopyrightText>
        </FormContentWrapper>
      </FormSection>
    </SignPageWrapper>
  );
};

export default SignInContainer;
