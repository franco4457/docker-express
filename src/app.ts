import express, { type ErrorRequestHandler } from 'express'
import mongoose from 'mongoose'
import { conn } from '@/db/mongo'
const app = express()

const Task = mongoose.model(
  'Task',
  new mongoose.Schema({
    state: String,
    description: String,
    title: String
  })
)

app.use(express.json())
app.use((req, _res, next) => {
  console.log('\x1b[36m%s\x1b[0m', `${req.method} ${req.path}`)
  next()
})

app.get('/', (_req, res) => {
  res.json({ message: 'Hello World!' })
})
app.get('/task', async (_req, res, next) => {
  try {
    await conn()
    const tasks = await Task.find()
    res.json({ tasks })
  } catch (error) {
    next(error)
  }
})
app.get('/create', async (_req, res, next) => {
  try {
    await conn()
    const task = await Task.create({
      state: 'TODO',
      description: 'Create a new task',
      title: 'Create task'
    })
    res.status(201).json({ task })
  } catch (error) {
    next(error)
  }
})

app.use(((err, _req, res, _next) => {
  console.log(err)
  res.status(500).json({ error: err.message })
}) as ErrorRequestHandler)

export default app
