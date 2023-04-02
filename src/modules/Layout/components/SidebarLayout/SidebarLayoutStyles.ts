import styled from 'styled-components';

export const StyledSidebarLayout = styled.div`
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;

  width: 260px;
  padding: 1rem;

  background: ${({ theme }) => theme.backGroundColor};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledSidebarBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
