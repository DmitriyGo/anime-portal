import { ArrowRight } from '@styled-icons/material-rounded';
import styled from 'styled-components';

import { Button } from '@/components';
import { COLORS } from '@/theme';

export const StyledCarouselItem = styled.div<{ imageUrl: string }>`
  position: relative;
  height: 100%;
  width: 100vw;
  flex: 1 0 100%;

  padding: 6rem 4rem;
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
      rgba(32, 33, 37, 0.6) 10%,
      rgba(32, 33, 37, 0) 30%,
      rgba(32, 33, 37, 0) 80%,
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
      rgba(32, 33, 37, 0) 50%,
      #202125 100%
    );
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const StyledSeries = styled.div`
  font-size: 1.2rem;
  line-height: 1.3em;
  margin-bottom: 1.5rem;
  color: ${COLORS.LIGHT_GREEN};
`;

export const StyledTitle = styled.div`
  font-size: 2rem;
  line-height: 1.1em;
  margin-bottom: 1.5rem;
  width: 70%;
`;

export const StyledDescription = styled.p<{ lines: number }>`
  display: -webkit-box;
  text-align: justify;
  -webkit-box-orient: vertical;
  overflow: hidden;

  width: 75%;

  -webkit-line-clamp: ${({ lines }) => lines};
  font-size: 1rem;
  margin-bottom: 2.5rem;
`;

export const StyledButtonsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
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

  border-radius: 30px;
  padding: 0.5rem 2rem;
`;

export const StyledArrowIcon = styled(ArrowRight)`
  margin-top: -1rem;
  margin-bottom: -1rem;
  margin-right: -1rem;
`;

export const StyledAdditionalInfo = styled.div`
  display: flex;
  gap: 1rem;

  margin-bottom: 20px;
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
  border-radius: 5px;
  font-weight: 600;
  font-size: 12px;
`;

export const StyledTags = styled.div`
  display: flex;
  gap: 0.5rem;
`;
