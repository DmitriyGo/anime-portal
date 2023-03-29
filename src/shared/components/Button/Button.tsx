import { ButtonHTMLAttributes, ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

import { StyledButton } from './ButtonStyles';
import useBackgroundColor from '../../utils/useBackgroundColor';

import { COLORS } from '@/theme';

type ButtonProps =
  | {
      children?: ReactNode;
      theme?: DefaultTheme;
      variant?: 'default' | 'rounded';
      size?: 'small' | 'medium' | 'large';
      color?: string;
    }
  | ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  color = COLORS.DARK_GREY[300],
  ...rest
}: ButtonProps) => {
  const [bgColor, bgHover, bgActive] = useBackgroundColor(color, -10, -15);
  return (
    <StyledButton {...rest} bg={bgColor} bgHover={bgHover} bgActive={bgActive}>
      {children}
    </StyledButton>
  );
};

export default Button;
