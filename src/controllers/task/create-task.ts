import { conn } from '@/db/mongo'
import { Task } from '@/models/task'
import { validateTask } from '@/schemas/task'
import type { Handler } from 'express'

export const createTask: Handler = async (req, res, next) => {
  try {
    const data = await validateTask(req.body)
    await conn()
    const task = await Task.create(data)
    res.status(201).json({ error: false, task })
  } catch (error) {
    next(error)
  }
}
