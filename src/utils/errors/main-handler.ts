import { type ErrorRequestHandler } from 'express'

export const mainErrorHanlder: ErrorRequestHandler = (err, _req, res, _next) => {
  console.log(err)
  res.status(500).json({ error: true, message: err.message })
}
