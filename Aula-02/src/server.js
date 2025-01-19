import app from './config/app.js'
import env from './env/env.js'

app.listen({
  host: env.host,
  port: env.port,
})
.then(() => {
  console.log(`Server run is ${env.proxy}${env.host}:${env.port}`)
})
.catch((err) => {
  console.log(err)
})