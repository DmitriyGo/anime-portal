import { Link } from 'react-router-dom';
import styled, { DefaultTheme } from 'styled-components';

import { FONT_SIZES } from '../../theme/theme';

interface ButtonStyledProps {
  theme?: DefaultTheme;
  color?: string;
}

export const ButtonStyled = styled(Link)`
  display: inline-block;
  padding: 6px 20px 6px 20px;
  border-radius: 30px;

  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  line-height: 1.5;
  font-size: ${FONT_SIZES[16]};

  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ color, theme }: ButtonStyledProps) =>
    color ?? theme?.colorPrimary};

  :hover {
    -webkit-filter: brightness(90%);
    transition: all 0.15s ease;
  }
`;
