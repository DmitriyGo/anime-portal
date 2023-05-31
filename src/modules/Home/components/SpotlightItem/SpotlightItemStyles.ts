import { ArrowRight } from '@styled-icons/material-rounded';
import styled from 'styled-components';

import { Button } from '@/components';
import { COLORS, DEVICES } from '@/theme';

export const StyledSpotlightItem = styled.div<{ imageUrl: string }>`
  position: relative;
  height: 100%;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1 0 100%;

  padding: 0 4rem 4rem;
  z-index: 0;

  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      #202125 0,
      rgba(32, 33, 37, 0.6) 20%,
      rgba(32, 33, 37, 0.3) 30%,
      rgba(32, 33, 37, 0.1) 80%,
      #202125 100%
    );
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      #202125 0,
      rgba(32, 33, 37, 0.15) 50%,
      #202125 100%
    );
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media ${DEVICES.SM} {
    padding: 0 2.5rem 2.5rem;
  }
`;

export const StyledSeries = styled.div`
  font-size: 1.2rem;
  line-height: 1.3em;
  margin-bottom: 0.5rem;
  color: ${COLORS.LIGHT_GREEN};

  @media ${DEVICES.SM} {
    font-size: 0.8rem;
  }
`;

export const StyledTitle = styled.div`
  font-size: 2rem;
  line-height: 1.1em;
  margin-bottom: 1rem;
  width: 70%;

  @media ${DEVICES.SM} {
    font-size: 1.5rem;
  }
`;

export const StyledDescription = styled.p`
  overflow: hidden;
  display: -webkit-box;
  text-align: justify;
  -webkit-box-orient: vertical;

  width: 75%;

  -webkit-line-clamp: 3;
  margin-bottom: 2.5rem;
  font-size: 1.25rem;

  @media ${DEVICES.SM} {
    font-size: 1rem;
    -webkit-line-clamp: 4;
    width: 80%;
    margin-bottom: 1.25rem;
  }
`;

export const StyledButtonsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  margin: 1rem 0 1rem;
`;

export const StyledWatchNow = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${COLORS.LIGHT_GREEN};
  color: ${COLORS.BLACK} !important;
  border-color: ${COLORS.LIGHT_GREEN};
  border-radius: 2.5rem;
  padding: 0.5rem 2rem;

  @media ${DEVICES.SM} {
    font-size: 0.7rem;
    padding: 0.5rem 1.5rem;
  }

  :hover {
    color: ${COLORS.WHITE} !important;
  }
`;

export const StyledDetail = styled(Button)`
  background: ${COLORS.GREY[900]};
  border-color: ${COLORS.GREY[900]};
  color: ${COLORS.WHITE};
  display: flex;
  align-items: center;

  border-radius: 2rem;
  padding: 0.5rem 2rem;

  @media ${DEVICES.SM} {
    font-size: 0.7rem;
    padding: 0.5rem 1.5rem;
  }
`;

export const StyledArrowIcon = styled(ArrowRight)`
  margin-top: -1rem;
  margin-bottom: -1rem;
  margin-right: -1rem;
`;

export const StyledAdditionalInfo = styled.div`
  display: flex;
  gap: 1rem;

  margin-bottom: 1.5rem;
`;

export const StyledAdditionalInfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
