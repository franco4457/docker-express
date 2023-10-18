import 'dotenv/config'
export const { PORT: port = 3000, DB_MONGO_URL: dbUrl = '' } = process.env
