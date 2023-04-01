import { FC } from 'react';

import { StyledToDoItem } from './ToDoItemStyles';

import { TodoItem } from '@/models/todo.model';

interface ToDoItemProps {
  todo: TodoItem;
}

const ToDoItem: FC<ToDoItemProps> = ({ todo }) => {
  return (
    <StyledToDoItem>
      <p>{todo.id}</p>
      <h4>{todo.todo}</h4>
    </StyledToDoItem>
  );
};

export default ToDoItem;
