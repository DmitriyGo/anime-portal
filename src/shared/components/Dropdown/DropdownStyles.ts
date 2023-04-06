import styled from 'styled-components';

import { COLORS } from '@/theme';

export const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  padding: 0;
`;

export const StyledDropdownContent = styled.div`
  position: absolute;
  top: 32px;
  left: -40px;
  background-color: ${({ theme }) => theme.backGroundColor};
  border: 1px solid #4a4a50;
  box-shadow: 5px 5px 10px ${COLORS.BACKGROUND.DARK};
  transform: translateX(-45%);
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.25rem;
`;
