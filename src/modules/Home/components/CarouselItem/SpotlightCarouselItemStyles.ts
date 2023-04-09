import styled from 'styled-components';

import { Button } from '@/components';

export const StyledCarouselItem = styled.div<{ imageUrl: string }>`
  position: relative;
  height: 100%;
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

export const Series = styled.div`
  font-size: 18px;
  line-height: 1.3em;
  font-weight: 400;
  margin-bottom: 20px;
  color: #cae962;
`;

export const Title = styled.div`
  > p {
    font-size: 30px;
    line-height: 1.1em;
    margin-bottom: 20px;
    //width: 70vw;
  }
`;

export const Description = styled.p`
  > p {
    font-size: 14px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    //width: 50vw;
    margin-bottom: 30px;
    -webkit-box-orient: vertical;
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const WatchNow = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #cae962;
  color: #111 !important;
  border-color: #cae962;
  border-radius: 30px;
  padding: 0.5rem 2rem;

  svg {
    width: 1rem;
  }

  :hover {
    color: #fff !important;
  }
`;

export const Detail = styled(Button)`
  background: #4a4b51;
  border-color: #4a4b51;
  color: #fff;
  display: flex;
  align-items: center;

  border-radius: 30px;
  padding: 0.5rem 2rem;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.5rem;

    svg {
      width: 0.8rem;
    }
  }

  margin-bottom: 20px;
`;

export const Tag = styled.div<{ name: string }>`
  padding: 3px 4px;
  background: ${({ name }) => (name === 'HD' ? '#cae962' : '#fff')};
  color: #111;
  border-radius: 5px;
  font-weight: 600;
  font-size: 12px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
`;
