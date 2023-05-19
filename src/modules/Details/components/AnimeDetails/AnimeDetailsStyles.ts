import styled from 'styled-components';

import { COLORS, DEVICES } from '@/theme';

export const StyledAnimeDetails = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  padding: 2rem;
  background-color: ${COLORS.DARK_GREY[400]};

  @media ${DEVICES.MD} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const StyledMainPart = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;

  @media ${DEVICES.XS} {
    flex-direction: column;
  }
`;

export const StyledDetailsPart = styled.div`
  padding: 2rem;
`;

export const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const StyledPoster = styled.img`
  width: 12rem;
  height: fit-content;

  object-fit: contain;
`;
