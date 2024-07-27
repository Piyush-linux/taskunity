import { z } from 'zod';

export const CreateTaskSchema = z.object({
  todo: z.string(),
  status: z.boolean(),
//   date: z.coerce.date(),
//   category,tags: z.string(),
});

