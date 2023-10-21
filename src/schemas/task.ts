import { StateTask } from '@/entity/task.d'
import { z } from 'zod'

export const taskSchema = z.object({
  state: z.nativeEnum(StateTask),
  title: z.string().trim(),
  description: z.string()
})

export const validateTask = async (input: any) => {
  return await taskSchema.parseAsync(input)
}
