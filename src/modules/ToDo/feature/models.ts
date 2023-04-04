import { IApiError } from '@/models/apiError.model';
import { TodoItem } from '@/models/todo.model';

export const TODO_SLICE_NAME = 'todos';

export interface ToDoState {
  todos: TodoItem[];
  isLoading: boolean;
  error: IApiError | null;
}

export const initialState: ToDoState = {
  todos: [],
  isLoading: false,
  error: null,
};
