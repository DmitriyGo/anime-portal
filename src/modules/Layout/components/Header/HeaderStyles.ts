import styled from 'styled-components';

import { DEVICES } from '@/theme';

export const StyledHeader = styled.header`
  @media ${DEVICES.LG} {
    position: inherit;
  }
  z-index: 2;
  top: 0;
  width: 100%;
  height: 4.5rem;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2.5rem;
  background-color: ${({ theme }) => theme.backGroundColor};
`;

export const StyledHeaderBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
