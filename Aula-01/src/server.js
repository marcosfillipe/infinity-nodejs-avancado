import app from './config/app.js'
import env from './config/env.js'

app.listen({
    host: '0.0.0.0',
    port: env.port,
})
    .then(() => {
        console.log(`Server run is ${env.proxy}${env.host}:${env.port}`)
    })
    .catch()
