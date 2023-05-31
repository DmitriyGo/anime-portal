import { Search } from '@styled-icons/boxicons-regular';
import styled from 'styled-components';

import { Button } from '@/components';
import { COLORS, FONT_SIZES } from '@/theme';

export const StyledSearchFormSmall = styled.form`
  z-index: 5;
  display: flex;

  height: 2.5rem;
  width: 25rem;

  align-items: center;

  background-color: ${COLORS.WHITE};
  border: 2px solid ${COLORS.GREY[100]};

  padding: 5px;
`;

export const StyledSearchFormExtended = styled.form`
  z-index: 5;
  position: absolute;
  top: 4.5rem;
  left: 0;
  width: 100%;

  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 2px solid ${COLORS.BLACK};
  border-bottom: 2px solid ${COLORS.BLACK};
  background-color: ${COLORS.WHITE};
  padding: 0.5px;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
`;

export const StyledSearchIcon = styled(Search)`
  color: ${COLORS.BLACK};
  height: 100%;
`;

export const StyledInput = styled.input`
  all: unset;
  margin-left: 0.75rem;
  width: 100%;
  font-weight: 400;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
`;

export const StyledInputButton = styled(Button)`
  padding: 0.25rem;
  border-radius: 0.1rem;
  font-size: ${FONT_SIZES['10']};
`;
