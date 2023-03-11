export interface ToDo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface ToDoResponce {
  todos: ToDo[];
  total: number;
  skip: number;
  limit: number;
}

export const TODO_API_NAME = 'todoApi';

export interface ToDoState {
  todos: ToDo[];
}

export const initialState: ToDoState = {
  todos: [],
};
