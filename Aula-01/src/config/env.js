import dotenv from 'dotenv'

dotenv.config()

export default {
  proxy: process.env.PROXY,
  host: process.env.HOST,
  port: process.env.PORT
}