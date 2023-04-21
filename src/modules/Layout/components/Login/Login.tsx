import { FC, FormEvent, MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBackdrop } from 'src/shared/hooks/useBackdrop';
import { useTheme } from 'styled-components';

import {
  StyledBlock,
  StyledInput,
  StyledLabel,
  StyledLoginLayout,
} from './LoginStyles';

import { Backdrop, Button } from '@/components';
import { loginUser } from '@/modules/Auth/feature/actionCreators';
import { useDispatch } from '@/store';

interface LoginLayoutProps {
  onClose: () => void;
}

const LoginLayout: FC<LoginLayoutProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { t } = useTranslation('auth');
  const dispatch = useDispatch();
  const theme = useTheme();

  useBackdrop(onClose);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(loginUser({ email, password }));

    console.log('submit');
  };

  return (
    <Backdrop onClick={onClose}>
      <div onClick={handleClick}>
        <StyledLoginLayout onSubmit={handleSubmit}>
          <StyledBlock>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </StyledBlock>

          <StyledBlock>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledInput
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </StyledBlock>

          <Button type="submit" color={theme.colorSecondary}>
            {t('login')}
          </Button>
        </StyledLoginLayout>
      </div>
    </Backdrop>
  );
};

export default LoginLayout;
