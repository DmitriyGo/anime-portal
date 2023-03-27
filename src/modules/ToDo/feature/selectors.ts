import { createSelector } from '@reduxjs/toolkit';

import { TODO_SLICE_NAME, ToDoState } from './models';

type RootState = {
  [TODO_SLICE_NAME]: ToDoState;
};

const TodoSelector = (state: RootState): ToDoState => state[TODO_SLICE_NAME];

export const selectTodos = createSelector(TodoSelector, (state) => state.todos);
