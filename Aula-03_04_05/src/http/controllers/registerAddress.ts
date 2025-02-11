import { PrismaAddressRepositorie } from '@/repositories/prisma/prisma-address-repository'
import { RegisterAddressUseCase } from '@/use-cases/registerAddress'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function registerAddress(req: FastifyRequest, reply: FastifyReply) {
    const registerAddressBodySchema = z.object({
        street: z.string(),
        city: z.string(),
        uf: z.string(),
        neighborhood: z.string(),
        user_id: z.string().uuid()
    })

    const { street, city, neighborhood, uf, user_id } = registerAddressBodySchema.parse(req.body)

    try {
        const addressRepository = new PrismaAddressRepositorie()
        const registerAddressUseCase = new RegisterAddressUseCase(addressRepository)
        await registerAddressUseCase.execute({street, city, neighborhood, uf, user_id})

        return reply.status(201).send()
    } catch (error) {
        console.log(error)
        
    }
}