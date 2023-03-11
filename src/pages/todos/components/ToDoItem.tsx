import styled from 'styled-components';

import { ToDo } from '@/modules/ToDo';

interface IToDoItem {
  todo: ToDo;
}

const ToDoItem = ({ todo }: IToDoItem) => {
  return (
    <ToDoItemStyled>
      <p>{todo.id}</p>
      <h4>{todo.todo}</h4>
    </ToDoItemStyled>
  );
};

const ToDoItemStyled = styled.li`
  display: flex;
  padding: 5px;
  gap: 10px;
  border: 5px solid ${(props) => props.theme.colorPrimary};
  border-radius: 5px;
  align-items: center;
  width: 600px;
`;

export default ToDoItem;
