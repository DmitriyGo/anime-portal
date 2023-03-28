import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 0 30px 0;
  padding: 15px;

  border-bottom: 2px ${({ theme }) => theme.dividerColor} solid;
`;
