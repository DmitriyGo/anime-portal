import styled from 'styled-components';

import { Button } from '@/components';

export const StyledSpotlightsCarousel = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 4.5rem); /* set your desired height */
  z-index: 0;
`;

export const StyledSpotlightButton = styled(Button)`
  aspect-ratio: 1;
  padding: 0;
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSpotlightControlButtons = styled.div`
  position: absolute;
  bottom: 1.5rem;
  right: 3rem;
  width: 2.5rem;
  height: auto;
  z-index: 15;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledSpotlightsSlices = styled.div<{
  total: number;
  current: number;
  showAnimtion: boolean;
}>`
  z-index: 1;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(${({ total }) => total}, 100%);
  width: ${({ total }) => total * 100}%;
  transform: translateX(-${({ current }) => current * 100}%);

  ${({ showAnimtion }) =>
    showAnimtion && 'transition: transform 0.25s ease-in-out;'}
`;
