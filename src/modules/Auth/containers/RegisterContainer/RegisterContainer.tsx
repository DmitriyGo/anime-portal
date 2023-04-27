import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import {
  RegisterContainerStyled,
  StyledBlock,
  StyledButton,
  StyledError,
  StyledForm,
  StyledInput,
  StyledIntroduction,
  StyledLabel,
} from './RegisterContainerStyles';
import { registerUser } from '../../feature/actionCreators';

import { useDispatch } from '@/store';
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

const RegisterContainer = () => {
  const { t } = useTranslation('auth');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const res = await dispatch(registerUser(data));
    console.log(res);

    // navigate('/', { replace: true });
  };

  return (
    <RegisterContainerStyled>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledIntroduction>{t('register_greeting')}</StyledIntroduction>
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

        <StyledButton type="submit" color={COLORS.SECONDARY}>
          {t('register')}
        </StyledButton>
      </StyledForm>
    </RegisterContainerStyled>
  );
};

export default RegisterContainer;
