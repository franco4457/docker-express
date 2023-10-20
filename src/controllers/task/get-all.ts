import { conn } from '@/db/mongo'
import { Task } from '@/models/task'
import type { Handler } from 'express'

export const getAll: Handler = async (_req, res, next) => {
  try {
    await conn()
    const tasks = await Task.find()
    res.json({ error: false, tasks })
  } catch (error) {
    next(error)
  }
}
