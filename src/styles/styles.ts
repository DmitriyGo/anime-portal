import styled from 'styled-components';

import { DEVICES } from '@/theme';

interface StyledAppProps {
  active: boolean;
}

export const StyledApp = styled.div<StyledAppProps>`
  @media ${DEVICES.LG} {
    main {
      margin-top: 0rem !important;
    }
  }

  main {
    margin-top: 5rem;
  }

  position: ${({ active }) => (active ? 'fixed' : 'inherit')};
`;
