import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import {
  LoginContainerStyled,
  StyledBlock,
  StyledButton,
  StyledError,
  StyledForm,
  StyledInput,
  StyledIntroduction,
  StyledLabel,
} from './LoginContainerStyles';
import { TLoginFormValues } from '../../helpers/types';

import { FullPageLoader } from '@/components';
import { loginUser } from '@/modules/Auth';
import { selectAuthIsLoading } from '@/modules/Auth';
import { useDispatch, useSelector } from '@/store';
import { COLORS } from '@/theme';

const schema = yup
  .object({
    login: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const LoginContainer = () => {
  const { t } = useTranslation('auth');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector(selectAuthIsLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<TLoginFormValues> = async (data) => {
    await dispatch(loginUser(data));

    navigate('/', { replace: true });
  };

  const onRegister = () => {
    navigate('/register');
  };

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <LoginContainerStyled>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledIntroduction>{t('login_greeting')}</StyledIntroduction>

        <StyledBlock>
          <StyledLabel htmlFor="login">{t('login_label')}</StyledLabel>
          <StyledInput {...register('login')} />
          <StyledError>{errors.login?.message}</StyledError>
        </StyledBlock>

        <StyledBlock>
          <StyledLabel htmlFor="password">{t('password')}</StyledLabel>
          <StyledInput {...register('password')} />
          <StyledError>{errors.password?.message}</StyledError>
        </StyledBlock>

        <StyledBlock>
          <StyledButton type="submit" color={COLORS.SECONDARY}>
            {t('login')}
          </StyledButton>

          <StyledButton onClick={onRegister} color={COLORS.PRIMARY}>
            {t('do_not_have_account')}
          </StyledButton>
        </StyledBlock>
      </StyledForm>
    </LoginContainerStyled>
  );
};

export default LoginContainer;
