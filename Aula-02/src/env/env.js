import dotenv from "dotenv";

dotenv.config();

export default{
  proxy: process.env.PROXY,
  host: process.env.URL_HOST,
  port: process.env.URL_PORT
}