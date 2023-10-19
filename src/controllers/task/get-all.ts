import { conn } from '@/db/mongo'
import { Task } from '@/models/task'
import type { NextFunction, Request, Response } from 'express'

export async function getAll(_req: Request, res: Response, next: NextFunction) {
  try {
    await conn()
    const tasks = await Task.find()
    res.json({ error: false, tasks })
  } catch (error) {
    next(error)
  }
}
