export enum TodoEndpoint {
  ROOT = '/',
}

export interface TodoItem {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface TodoResponse {
  todos: TodoItem[];
  total: number;
  skip: number;
  limit: number;
}
