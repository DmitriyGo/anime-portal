import styled from 'styled-components';

import { Button } from '@/components';

export const StyledSidebarLayout = styled.div`
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;

  width: 16.5rem;
  padding: 1rem;

  background: ${({ theme }) => theme.backGroundColor};

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StyledBlock = styled.div`
  display: flex;
  gap: 2rem;
`;

export const StyledButton = styled(Button)`
  display: flex;
  flex-grow: 1;
`;
