import styled from 'styled-components';

import { COLORS, DEVICES } from '@/theme';

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
  padding: 0.75rem 2rem;
  background-color: ${COLORS.BACKGROUND};
`;

export const StyledBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1.5rem;

  @media ${DEVICES.XS} {
    gap: 1rem;
  }
`;

export const StyledListBlock = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1.5rem;

  @media ${DEVICES.XS} {
    gap: 1rem;
  }
`;

export const StyledListItem = styled.li`
  list-style-type: none;
`;
