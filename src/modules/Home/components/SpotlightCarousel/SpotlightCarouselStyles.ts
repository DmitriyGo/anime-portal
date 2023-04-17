import styled from 'styled-components';

import { Button } from '@/components';
import { DEVICES } from '@/theme';

export const StyledSpotlightsCarousel = styled.div`
  display: flex;
  overflow: hidden;
  width: 100vw;
  height: calc(100vh - 4.5rem);

  z-index: 0;

  @media ${DEVICES.SM} {
    height: calc(60vh - 4.5rem);
  }
`;

export const StyledButton = styled(Button)`
  aspect-ratio: 1;
  padding: 0;
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledControlButtons = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 3rem;
  width: 2.5rem;
  height: auto;
  z-index: 15;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media ${DEVICES.SM} {
    display: none;
  }
`;

export const StyledSlices = styled.div`
  z-index: 1;
  height: 100%;

  user-select: none;

  display: flex;
  width: 100vw;

  transition: transform 0.25s ease-in-out;
`;
