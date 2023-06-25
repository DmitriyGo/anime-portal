import styled from 'styled-components';

interface ContentWrapperProps {
  blurred: boolean;
}

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${({ blurred }) => (blurred ? 'filter: blur(2px)' : '')};
`;
