import { z } from 'zod';

export const createTodoSchema = z.object({
  id: z.string().uuid().nullable(),
  title: z.string().max(200),
  description: z.string().nullable(),
  isCompleted: z.boolean(),
  dueDate: z.string().datetime().nullable(),
  createdAt: z.string().datetime().nullable(),
  updatedAt: z.string().datetime().nullable(),
});

export type CreateTodoModel = z.infer<typeof createTodoSchema>;