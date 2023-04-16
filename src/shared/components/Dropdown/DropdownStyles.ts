import styled from 'styled-components';

import { COLORS } from '@/theme';

export const StyledDropdown = styled.div<{ zIndex?: number }>`
  position: relative;
  display: flex;
  padding: 0;
  z-index: ${({ zIndex }) => zIndex ?? 0};
`;

export const StyledDropdownContent = styled.div<{ top: string; left: string }>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  background-color: ${({ theme }) => theme.backGroundColor};
  border: 1px solid ${COLORS.GREY[800]};
  box-shadow: 5px 5px 10px ${COLORS.BACKGROUND.DARK};
  transform: translateX(-45%);
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.25rem;
`;
