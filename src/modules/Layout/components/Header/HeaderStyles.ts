import styled from 'styled-components';

import { DEVICES } from '@/theme';

export const StyledHeader = styled.header`
  @media ${DEVICES.LG} {
    position: relative;
  }

  position: sticky;

  z-index: 2;
  top: 0;
  width: 100%;
  display: flex;
  height: 4.5rem;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  padding: 0.75rem 2.5rem;
  background-color: ${({ theme }) => theme.backGroundColor};
`;

export const StyledHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`;
