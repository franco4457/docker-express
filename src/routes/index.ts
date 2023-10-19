import { Router } from 'express'
import taskRouter from './task.routes'
const mainRouter = Router()

mainRouter.get('/', (_req, res) => {
  res.json({ message: 'Hello World!' })
})

mainRouter.use('/task', taskRouter)

export default mainRouter
