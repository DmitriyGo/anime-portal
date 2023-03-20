import styled from 'styled-components';

export const StyledToDoItem = styled.li`
  display: flex;
  padding: 5px;
  gap: 10px;
  border: 5px solid ${({ theme }) => theme.colorPrimary};
  border-radius: 5px;
  align-items: center;
  width: 600px;
`;
