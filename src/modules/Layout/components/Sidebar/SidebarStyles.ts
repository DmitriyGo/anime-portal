import styled from 'styled-components';

import { Button as DefaultButton } from '@/components';
import { COLORS } from '@/theme';

export const SidebarLayout = styled.div`
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;

  width: 16.5rem;
  padding: 1rem;

  background: ${COLORS.BACKGROUND};

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Block = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Button = styled(DefaultButton)`
  display: flex;
  flex-grow: 1;
`;
