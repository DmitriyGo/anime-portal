import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
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
import { loginUser } from '../../feature/actionCreators';
import { selectAuthIsLoading } from '../../feature/selectors';

import { FullPageLoader } from '@/components';
import { useDispatch, useSelector } from '@/store';
import { COLORS } from '@/theme';

type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required(),
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
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // console.log(data);
    await dispatch(loginUser(data));
    // console.log(res);

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
          <StyledLabel htmlFor="email">{t('email')}</StyledLabel>
          <StyledInput {...register('email')} />
          <StyledError>{errors.email?.message}</StyledError>
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
