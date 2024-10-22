import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = '/.netlify/functions/proxy';
const ACCESS_TOKEN = import.meta.env.VITE_API_TOKEN;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${ACCESS_TOKEN}`);
      return headers;
    },
  }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/api/Todos',
      providesTags: ['Todo'],
    }),
    getTodoById: builder.query({
      query: (id) => `/api/Todos/${id}`,
      providesTags: (id) => [{ type: 'Todo', id }],
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: '/api/Todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
    }),
    updateTodo: builder.mutation({
      query: ({ id, ...todo }) => ({
        url: `/api/Todos/${id}`,
        method: 'PUT',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/api/Todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoByIdQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = apiSlice;