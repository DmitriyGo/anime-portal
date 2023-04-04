import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import { getTodos } from './actionCreators';
import { TODO_SLICE_NAME, ToDoState, initialState } from './models';

export const todoSlice = createSlice({
  name: TODO_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isFulfilled(getTodos), (state: ToDoState, action) => {
        state.isLoading = false;
        state.todos = action.payload.todos;
      })
      .addMatcher(isPending(getTodos), (state: ToDoState) => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isRejected(getTodos), (state: ToDoState, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default todoSlice.reducer;
