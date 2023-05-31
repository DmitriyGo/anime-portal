import styled from 'styled-components';

import { Button } from '@/components';
import { COLORS, DEVICES } from '@/theme';

export const StyledAnimeDetails = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
  padding: 2rem;
  background-color: ${COLORS.DARK_GREY[400]};

  height: fit-content;

  @media ${DEVICES.MD} {
    grid-template-columns: 1fr;
  }
`;

export const StyledMainPart = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 2rem 0 2rem;

  border-right: 1px ${COLORS.GREY[500]} solid;

  @media ${DEVICES.SM} {
    flex-direction: column;
  }

  @media ${DEVICES.MD} {
    border-right: none;
  }
`;

export const StyledDetailsPart = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

export const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${DEVICES.SM} {
    align-items: center;
  }
`;

export const StyledButton = styled(Button)`
  width: fit-content;
`;

export const StyledTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;

  @media ${DEVICES.SM} {
    text-align: center;
  }
`;

export const StyledPoster = styled.img`
  width: 12rem;
  height: fit-content;

  object-fit: contain;
`;

export const StyledPosterBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledTag = styled.div<{ name: string }>`
  padding: 3px 4px;
  background: ${({ name }) =>
    name === 'HD' ? COLORS.LIGHT_GREEN : COLORS.WHITE};
  color: ${COLORS.BLACK};
  border-radius: 0.5px;
  font-weight: 600;
  font-size: 0.8rem;
`;

export const StyledTags = styled.div`
  display: flex;
  gap: 0.5rem;
`;
