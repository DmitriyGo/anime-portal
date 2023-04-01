import { FC } from 'react';
import { Link } from 'react-router-dom';

import { StyledToDoContainer } from './ToDoContainerStyles';
import { ToDoItem } from '../../components';

import { Button } from '@/components';
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
