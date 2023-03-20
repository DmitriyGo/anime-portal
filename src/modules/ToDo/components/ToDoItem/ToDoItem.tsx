import { StyledToDoItem } from './ToDoItemStyles';

import { ITodo } from '@/models/todo.model';

interface IToDoItemProps {
  todo: ITodo;
}

const ToDoItem = ({ todo }: IToDoItemProps) => {
  return (
    <StyledToDoItem>
      <p>{todo.id}</p>
      <h4>{todo.todo}</h4>
    </StyledToDoItem>
  );
};

export default ToDoItem;
