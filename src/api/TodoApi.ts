import { TODO_API_URL } from '@/constants/common';
import { TodoResponse, TodoEndpoint } from '@/models/todo.model';
import { ApiResponse, httpClient } from '@/utils';

class TodoAPI {
  getTodos(): ApiResponse<TodoResponse> {
    return httpClient.get<TodoResponse>(TodoEndpoint.ROOT, {
      baseURL: TODO_API_URL,
    });
  }
}

const todoApi = new TodoAPI();

export default todoApi;
