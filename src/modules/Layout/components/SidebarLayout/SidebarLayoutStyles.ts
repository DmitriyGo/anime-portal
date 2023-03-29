import styled from 'styled-components';

export const StyledSidebarLayout = styled.div`
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  width: 260px;
  padding: 20px 0;
  background: ${({ theme }) => theme.backGroundColor};
`;
