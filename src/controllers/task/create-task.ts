import { conn } from '@/db/mongo'
import { Task } from '@/models/task'
import type { NextFunction, Request, Response } from 'express'

export async function createTask(_req: Request, res: Response, next: NextFunction) {
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
