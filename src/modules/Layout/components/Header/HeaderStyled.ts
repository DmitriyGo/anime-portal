import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 0 30px 0;
  padding: 25px 20px 25px 20px;

  border-bottom: 2px ${({ theme }) => theme.dividerColor} solid;
`;
