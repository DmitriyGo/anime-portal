import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.colorLink};

  :active {
    color: ${({ theme }) => theme.colorLinkActive};
  }

  :hover {
    color: ${({ theme }) => theme.colorLinkHover};
  }
`;
