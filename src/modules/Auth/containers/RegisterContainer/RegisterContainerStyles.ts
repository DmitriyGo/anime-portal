import styled from 'styled-components';

import { Button } from '@/components';
import { COLORS, DEVICES } from '@/theme';

export const RegisterContainerStyled = styled.div`
  width: 100%;
  min-height: calc(100vh - 4.5rem);
  padding-top: -4.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  background-color: ${COLORS.DARK_GREY[450]};
  padding: 2rem;

  border-radius: 5px;

  width: 35rem;

  @media ${DEVICES.SM} {
    width: 80%;
  }
`;

export const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledButton = styled(Button)`
  width: calc(100% - 3rem);
`;

export const StyledLabel = styled.label`
  font-size: 1.25rem;
  color: ${COLORS.GREY[300]};
`;

export const StyledInput = styled.input`
  width: 100%;

  font-size: 1rem;
  padding: 0.5rem;
`;

export const StyledError = styled.p`
  font-size: 0.9rem;
  margin: 0 0 1.25rem;
  color: ${COLORS.RED};
`;

export const StyledIntroduction = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin: 0 0 2rem;
`;
