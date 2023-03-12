import { StyledToDoItem } from './ToDoContainerStyles';

import { ToDo } from '@/modules/ToDo';

interface IToDoContainer {
  todo: ToDo;
}

const ToDoContainer = ({ todo }: IToDoContainer) => {
  return (
    <StyledToDoItem>
      <p>{todo.id}</p>
      <h4>{todo.todo}</h4>
    </StyledToDoItem>
  );
};

export default ToDoContainer;
