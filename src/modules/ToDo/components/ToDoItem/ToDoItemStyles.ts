import styled from 'styled-components';

export const StyledToDoItem = styled.li`
  display: flex;
  padding: 0.4rem;
  gap: 1rem;
  border: 3px solid ${({ theme }) => theme.colorPrimary};
  border-radius: 5px;
  align-items: center;
  width: 100%;
`;
