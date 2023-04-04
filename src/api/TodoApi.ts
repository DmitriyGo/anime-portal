import { TODO_API_URL } from '@/constants/common';
import { TodoResponse, TodoEndpoint } from '@/models/todo.model';
import { ApiResponse, httpClient } from '@/utils';

class TodoAPI {
  static getTodos(): ApiResponse<TodoResponse> {
    return httpClient.get<TodoResponse>(TodoEndpoint.ROOT, {
      baseURL: `${TODO_API_URL}`,
    });
  }
}

export default TodoAPI;
