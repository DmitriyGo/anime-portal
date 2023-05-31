import styled from 'styled-components';

import { COLORS } from '@/theme';

export const Styled404 = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 4.5rem);
  justify-content: center;
  align-items: center;
`;

export const StyledErrorText = styled.p`
  font-size: 2rem;
  color: ${COLORS.FONT};
`;
