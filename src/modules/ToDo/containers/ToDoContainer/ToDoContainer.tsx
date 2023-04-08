import { FC } from 'react';

import { StyledToDoContainer } from './ToDoContainerStyles';
import { ToDoItem } from '../../components';

import { TodoItem } from '@/models/todo.model';

interface ToDoContainerProps {
  todos: TodoItem[];
}

const ToDoContainer: FC<ToDoContainerProps> = ({ todos }) => {
  const content = todos.map((todo) => <ToDoItem key={todo.id} todo={todo} />);
  return (
    <StyledToDoContainer>
      <ul>{content}</ul>
    </StyledToDoContainer>
  );
};

export default ToDoContainer;
