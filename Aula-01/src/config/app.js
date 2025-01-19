import fastify from 'fastify'

const app = fastify()

app.get('/', async (request, reply) => {
    return reply.send({ hello: 'GET da pasta Config!!' })
})

export default app
