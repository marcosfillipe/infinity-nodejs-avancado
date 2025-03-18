import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { makeFetchUsersUseCase } from '@/use-cases/factories/make-fetch-ursers-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function fetchUsers(req: FastifyRequest, reply: FastifyReply) {  
    try {
        const getUserProfileUseCase = makeFetchUsersUseCase()
        const { user } = await getUserProfileUseCase.execute()
        return reply.status(200).send(user)
    } catch (error) {
        if(error instanceof ResourceNotFoundError) {
            return reply.status(400).send({ message: error.message })
        }
    }
}