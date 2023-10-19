import mongoose from 'mongoose'

export const Task = mongoose.model(
  'Task',
  new mongoose.Schema({
    state: String,
    description: String,
    title: String
  })
)
