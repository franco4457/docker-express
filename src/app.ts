import express, { type ErrorRequestHandler } from 'express'
import mainRouter from '@/routes'
import { logger } from '@/middleware/logger'
const app = express()

app.use(express.json())
app.use(logger)

app.use(mainRouter)
app.use(((err, _req, res, _next) => {
  console.log(err)
  res.status(500).json({ error: true, message: err.message })
}) as ErrorRequestHandler)

export default app
