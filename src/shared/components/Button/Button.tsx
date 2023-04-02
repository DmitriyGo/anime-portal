import { ButtonHTMLAttributes, FC } from 'react';

import { StyledButton } from './ButtonStyles';
import useBackgroundColor from '../../utils/useBackgroundColor';

import { COLORS } from '@/theme';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: 'none' | 'light' | 'strong';
  color?: string;
}

const Button: FC<ButtonProps> = ({
  color = COLORS.DARK_GREY[300],
  rounded = 'light',
  children,
  ...rest
}) => {
  const [bgColor, bgHover, bgActive] = useBackgroundColor(color, -10, -15);

  const radiusValues = {
    none: '0',
    light: '5px',
    strong: '50%',
  };

  return (
    <StyledButton
      bg={bgColor}
      bgHover={bgHover}
      bgActive={bgActive}
      bRadius={radiusValues[rounded]}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
