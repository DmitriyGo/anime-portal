import styled from 'styled-components';

import { COLORS } from '@/theme';

export const StyledToDoItem = styled.li`
  display: flex;
  padding: 6px;
  gap: 1rem;
  border: 3px solid ${COLORS.PRIMARY};
  border-radius: 5px;
  align-items: center;
  width: 100%;
`;
