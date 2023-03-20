export enum TodoEndpoint {
  ROOT = '/',
}

export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface ITodoResponse {
  todos: ITodo[];
  total: number;
  skip: number;
  limit: number;
}
