import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosAPI = createApi({
  reducerPath: "todosAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodosByTitle: builder.query({
      query: ({start, limit} : {start: number, limit: number}) => `todos?_start=${start}&_limit=${limit}`,
    }),
  }),
});

export const { useGetTodosByTitleQuery } = todosAPI;
