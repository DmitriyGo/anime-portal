import { createSelector } from '@reduxjs/toolkit';

import { TODO_SLICE_NAME, ToDoState } from './models';
import {} from './todoSlice';

type RootState = {
  [TODO_SLICE_NAME]: ToDoState;
};

const ThemingSelector = (state: RootState): ToDoState => state[TODO_SLICE_NAME];

export const selectTodos = createSelector(
  ThemingSelector,
  (state) => state.todos,
);
