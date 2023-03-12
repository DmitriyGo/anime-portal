import { TODO_API_URL } from '@/constants/common';
import { ITodoResponse, TodoEndpoint } from '@/models/todo.model';
import { ApiResponse, httpClient } from '@/utils';

class TodoAPI {
  static getTodos(): ApiResponse<ITodoResponse> {
    return httpClient.get<ITodoResponse>(TodoEndpoint.ROOT, {
      baseURL: `${TODO_API_URL}`,
    });
  }
}

export default TodoAPI;
