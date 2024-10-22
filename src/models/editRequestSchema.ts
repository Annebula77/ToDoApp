import { z } from 'zod';

export const editTodoSchema = z.object({
  title: z.string().nullable(),
  description: z.string().nullable(),
  isCompleted: z.boolean().nullable(),
  dueDate: z.string().datetime().nullable(),
});

export type EditTodoModel = z.infer<typeof editTodoSchema>;