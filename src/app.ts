import express, { type ErrorRequestHandler } from 'express'
import mainRouter from './routes'
const app = express()

app.use(express.json())
app.use((req, _res, next) => {
  console.log('\x1b[36m%s\x1b[0m', `${req.method} ${req.path}`)
  next()
})

app.use(mainRouter)
app.use(((err, _req, res, _next) => {
  console.log(err)
  res.status(500).json({ error: true, message: err.message })
}) as ErrorRequestHandler)

export default app
