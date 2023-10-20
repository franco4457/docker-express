import { type Handler } from 'express'

export const logger: Handler = (req, _res, next) => {
  console.log('\x1b[36m%s\x1b[0m', `${req.method} ${req.path}`)
  next()
}
