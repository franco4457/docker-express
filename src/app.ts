import express from 'express'
import mainRouter from '@/routes'
import { logger } from '@/middleware/logger'
import { mainErrorHanlder } from '@/utils/errors'
const app = express()

app.use(express.json())
app.use(logger)

app.use(mainRouter)
app.use(mainErrorHanlder)

export default app
