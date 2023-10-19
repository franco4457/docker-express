import { conn } from '@/db/mongo'
import { Task } from '@/models/task'
import { Router } from 'express'

const taskRouter = Router()

taskRouter.get('/', async (_req, res, next) => {
  try {
    await conn()
    const tasks = await Task.find()
    res.json({ error: false, tasks })
  } catch (error) {
    next(error)
  }
})

taskRouter.post('/', async (_req, res, next) => {
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
})

export default taskRouter
