import { ButtonHTMLAttributes, FC } from 'react';

import { StyledButton } from './ButtonStyles';

import { COLORS } from '@/theme';
import { calculateBackgroundColor } from '@/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: 'none' | 'light' | 'strong';
  color?: string;
  fontColor?: string;
}

const Button: FC<ButtonProps> = ({
  color = COLORS.DARK_GREY[300],
  fontColor = COLORS.BACKGROUND.LIGHT,
  rounded = 'light',
  children,
  ...rest
}) => {
  const [bgColor, bgHover, bgActive] = calculateBackgroundColor(
    color,
    -10,
    -15,
  );

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
      color={fontColor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
