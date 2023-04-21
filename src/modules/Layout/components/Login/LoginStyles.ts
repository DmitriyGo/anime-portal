import styled from 'styled-components';

import { Button } from '@/components';
import { COLORS, DEVICES } from '@/theme';

export const StyledLoginLayout = styled.form`
  position: fixed;
  z-index: 20;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 35rem;
  padding: 1rem;

  background: ${({ theme }) => theme.backGroundColor};

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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
  display: flex;
  flex-grow: 1;
`;

export const StyledLabel = styled.label`
  font-size: 1rem;
  color: ${COLORS.GREY[300]};
`;

export const StyledInput = styled.input`
  width: 100%;

  font-size: 1rem;
  padding: 0.5rem;
`;
