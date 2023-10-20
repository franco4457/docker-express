import { conn } from '@/db/mongo'
import { Task } from '@/models/task'
import type { Handler } from 'express'

export const createTask: Handler = async (_req, res, next) => {
  try {
    await conn()
    const task = await Task.create({
      state: 'TODO',
      description: 'Create a new task',
      title: 'Create task'
    })
    res.status(201).json({ error: false, task })
  } catch (error) {
    next(error)
  }
}
