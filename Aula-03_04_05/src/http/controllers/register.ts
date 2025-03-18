import { UsersAlreadyExistsError } from '@/use-cases/errors/users-already-exists-error'
import { makeRegisterUseCase } from '@/use-cases/factories/make-register-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
export async function register(req: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        firstname: z.string().min(2),
        lastname: z.string(),
        phone: z.string(),
        username: z.string(),
        password: z.string(),
        email: z.string().email()
    })

    const { firstname, lastname, phone, email, password, username } = registerBodySchema.parse(req.body)
    
    try {
        const registerUseCase = makeRegisterUseCase()
        await registerUseCase.execute({ firstname, lastname, phone, email, password, username })

    } catch (error) {
        if(error instanceof UsersAlreadyExistsError) {
            return reply.status(409).send({ message: error.message })
        }

        return reply.status(500).send()
    }

    return reply.status(201).send()
}