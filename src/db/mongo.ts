import { dbUrl } from '@/config'
import mongoose from 'mongoose'

export const conn = async () => {
  try {
    return await mongoose.connect(dbUrl)
  } catch (error) {
    console.log(error)
    throw new Error('Unable to connect to database')
  }
}
