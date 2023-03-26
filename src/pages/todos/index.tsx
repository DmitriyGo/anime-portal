import { useEffect, useState } from 'react';

import { selectTodos, ToDoContainer } from '@/modules/ToDo';
import { getTodos } from '@/modules/ToDo';
import { useDispatch, useSelector } from '@/store';

const ToDo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return <ToDoContainer todos={todos} />;
};

export default ToDo;
