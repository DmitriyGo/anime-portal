import styled from 'styled-components';

import { DEVICES } from '@/theme';

export const HeaderStyled = styled.header`
  @media ${DEVICES.LG} {
    margin-bottom: 0.75rem;
    position: inherit;
  }

  position: fixed;
  top: 0;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px;

  background-color: ${({ theme }) => theme.backGroundColor};

  border-bottom: 2px ${({ theme }) => theme.dividerColor} solid;

  section {
    align-items: center;
    display: flex;
    gap: 1.5rem;

    div {
      display: flex;
      gap: 0.75rem;
    }
  }

  svg {
    cursor: pointer;
  }
`;
