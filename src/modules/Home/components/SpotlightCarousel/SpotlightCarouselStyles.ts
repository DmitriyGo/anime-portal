import styled from 'styled-components';

import { DEVICES } from '@/theme';

export const StyledSpotlightsCarousel = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh; /* set your desired height */
  margin-top: -4rem;
  z-index: 0;

  @media ${DEVICES.LG} {
    margin-top: 0;
  }
`;

export const StyledSpotlightsContent = styled.div<{
  total: number;
  current: number;
}>`
  z-index: 1;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(${({ total }) => total}, 100%);
  width: ${({ total }) => total * 100}%;
  transform: translateX(-${({ current }) => current * 100}%);
  transition: transform 1s ease-in-out;
`;
