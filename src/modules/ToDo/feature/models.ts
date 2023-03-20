import { IApiError } from '@/models/apiError.model';
import { ITodo } from '@/models/todo.model';

export const TODO_SLICE_NAME = 'todos';

export interface ToDoState {
  todos: ITodo[];
  isLoading: boolean;
  error: IApiError | null;
}

export const initialState: ToDoState = {
  todos: [],
  isLoading: false,
  error: null,
};
