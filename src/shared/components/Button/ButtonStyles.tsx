import styled, { DefaultTheme } from 'styled-components';

interface StyledButtonProps {
  theme?: DefaultTheme;
  variant?: 'default' | 'rounded';
  size?: 'small' | 'medium' | 'large';
  bg?: string;
  bgHover?: string;
  bgActive?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  all: unset;
  display: flex;
  padding: 6px 20px;

  background: ${({ bg }) => bg};

  :hover {
    background: ${({ bgHover }) => bgHover};
  }

  :active {
    background: ${({ bgActive }) => bgActive};
  }
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  line-height: 1.5;
  font-size: 1rem;

  color: ${({ theme }) => theme.fontColor};
  cursor: pointer;
  transition: all 0.15s ease;
`;
