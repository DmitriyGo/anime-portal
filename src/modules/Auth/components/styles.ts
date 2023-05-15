import styled, { keyframes } from 'styled-components';

export const UsernameWrapper = styled.div`
  position: relative;
`;

const spinAnimation = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

export const Spinner = styled.div<{ shown: boolean }>`
  ${({ shown }) => `
  display: ${shown ? 'block' : 'none'}
  `};
  position: absolute;
  top: 50%;
  right: 20px;
  translate: 0 -50%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid rgb(255 255 255 / 10%);
  border-top-color: #68e1fd;
  animation: ${spinAnimation} 0.6s infinite linear;
  transition: all 0.3s;
`;

export const ValidationMessage = styled.div`
  display: flex;
  align-items: center;
  height: 0;
  overflow: hidden;
  color: #b13950;
  transition: all 0.3s;
  padding-left: 0.25rem;

  &.invalid {
    height: 30px;
  }
`;
