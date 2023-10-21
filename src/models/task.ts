import { type ITask } from '@/entity/task'
import mongoose from 'mongoose'

const taskModel = new mongoose.Schema<ITask>({
  state: String,
  description: String,
  title: String
})

export const Task = mongoose.model('Task', taskModel)
