import { createAsyncThunk } from '@reduxjs/toolkit';

import { TODO_SLICE_NAME } from './models';

import TodoAPI from '@/api/TodoApi';
import { IApiError } from '@/models/apiError.model';
import { TodoResponse } from '@/models/todo.model';
import { formatApiError } from '@/utils';

export const getTodos = createAsyncThunk<
  TodoResponse,
  void,
  { serializedErrorType: IApiError }
>(
  `${TODO_SLICE_NAME}/getTodos`,
  async () => {
    const response = await TodoAPI.getTodos();
    return response.data;
  },
  { serializeError: formatApiError },
);
