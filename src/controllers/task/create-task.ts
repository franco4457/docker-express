import { conn } from '@/db/mongo'
import { Task } from '@/models/task'
import type { Handler } from 'express'

export const createTask: Handler = async (req, res, next) => {
  try {
    const { state = 'TODO', description = '', title = '' } = req.body
    await conn()
    const task = await Task.create({
      state,
      description,
      title
    })
    res.status(201).json({ error: false, task })
  } catch (error) {
    next(error)
  }
}
