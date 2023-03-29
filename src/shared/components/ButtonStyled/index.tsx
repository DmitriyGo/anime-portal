import { Link } from 'react-router-dom';
import styled, { DefaultTheme } from 'styled-components';

import { FONT_SIZES } from '../../theme/theme';

interface ButtonStyledProps {
  theme?: DefaultTheme;
  bg?: string;
  bgactive?: string;
  bghover?: string;
  br?: string;
  fsize?: string;
  p?: string;
}

export const StyledButton = styled(Link)<ButtonStyledProps>`
  display: inline-block;
  padding: ${({ p }) => p ?? '6px 20px 6px 20px'};
  border-radius: ${({ br }) => br ?? '30px'};

  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  line-height: 1.5;
  font-size: ${({ fsize }) => fsize ?? FONT_SIZES[16]};

  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ bg, theme }) => bg ?? theme.colorPrimary};

  transition: all 0.15s ease;

  :hover {
    background-color: ${({ bghover, theme }) => bghover ?? theme.colorPrimary};
  }

  :active {
    background-color: ${({ bgactive, theme }) =>
      bgactive ?? theme.colorPrimary};
  }
`;
