import styled from 'styled-components';

import { Button } from '@/components';
import { COLORS, FONT_SIZES } from '@/theme';

export const StyledForm = styled.form`
  height: 40px;
  width: 360px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${COLORS.BLACK};
  background-color: ${COLORS.WHITE};
  padding: 5px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      color: ${COLORS.BLACK};
      height: 100%;
    }
  }
`;

export const StyledInput = styled.input`
  all: unset;
  margin-left: 0.75rem;
  font-weight: 400;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
`;

export const StyledInputButton = styled(Button)`
  padding: 0.25rem;
  border-radius: 0.1rem;
  font-size: ${FONT_SIZES['10']};
`;
