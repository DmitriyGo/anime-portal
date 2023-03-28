import styled from 'styled-components';

interface StyledAppProps {
  active: boolean;
}

export const StyledApp = styled.div<StyledAppProps>`
  main {
    margin-top: 4.5rem;
  }

  position: ${({ active }) => (active ? 'fixed' : 'inherit')};
`;
