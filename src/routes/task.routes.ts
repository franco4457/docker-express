import { getAll, createTask } from '@/controllers/task'
import { Router } from 'express'

const taskRouter = Router()

taskRouter.get('/', getAll)

taskRouter.post('/', createTask)

export default taskRouter
