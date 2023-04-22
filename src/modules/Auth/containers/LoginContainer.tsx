import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import * as yup from 'yup';

import {
  LoginContainerStyles,
  StyledBlock,
  StyledButton,
  StyledError,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './LoginContainerStyles';

type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const LoginContainer = () => {
  const { t } = useTranslation('auth');
  const theme = useTheme();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    navigate('/', { replace: true });

    // e?.target.reset();
  };

  return (
    <LoginContainerStyles>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledBlock>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput {...register('email')} />
          <StyledError>{errors.email?.message}</StyledError>
        </StyledBlock>

        <StyledBlock>
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput {...register('password')} />
          <StyledError>{errors.password?.message}</StyledError>
        </StyledBlock>

        <StyledButton type="submit" color={theme.colorSecondary}>
          {t('login')}
        </StyledButton>
      </StyledForm>
    </LoginContainerStyles>
  );
};

export default LoginContainer;
