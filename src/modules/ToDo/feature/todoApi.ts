import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TODO_API_NAME, ToDo, ToDoResponce } from './models';

export const todoApi = createApi({
  reducerPath: TODO_API_NAME,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/todos/' }),
  endpoints: (builder) => ({
    getToDos: builder.query<ToDo[], void>({
      query: () => '',
      transformResponse: (res: ToDoResponce) => {
        return res.todos;
      },
    }),
  }),
});

export default todoApi.reducer;
