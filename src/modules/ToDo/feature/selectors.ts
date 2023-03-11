import { createSelector } from '@reduxjs/toolkit';

import { TODO_API_NAME, ToDoState } from './models';
import { todoApi } from './todoApi';

type RootState = {
  [TODO_API_NAME]: ToDoState;
};

const ThemingSelector = (state: RootState): ToDoState => state[TODO_API_NAME];

export const selectToDos = createSelector(
  todoApi.endpoints.getToDos.select(),
  (state) => state.data,
);

export const { useGetToDosQuery } = todoApi;
