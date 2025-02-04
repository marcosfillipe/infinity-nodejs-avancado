import { RegisterAddressUseCase } from "@/use-cases/registerAddress";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function address(req: FastifyRequest, reply: FastifyReply) {
	const registerAddressBodySchema = z.object({
		street: z.string(),
		city: z.string(),
		neighborhood: z.string(),
		uf: z.string(),
		user_id: z.string().uuid(),
	});

	const { city, neighborhood, street, uf, user_id } =
		registerAddressBodySchema.parse(req.body);

	try {
		const registerAddressUseCase = new RegisterAddressUseCase();
		const address = await registerAddressUseCase.execute({
			city,
			neighborhood,
			street,
			uf,
			user_id,
		});

		return reply.status(201).send();
	} catch (e) {
		console.log(e);
		return;
	}
}
