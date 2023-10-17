import express from 'express'
const app = express()
const { PORT = 3000 } = process.env

app.get('/', (_req, res) => {
  res.json({ message: 'Hello World!' })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
