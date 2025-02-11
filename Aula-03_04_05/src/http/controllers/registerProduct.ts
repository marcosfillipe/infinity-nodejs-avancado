import { makeProductUseCase } from "@/use-cases/factories/make-product-use-case";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function registerProduct(
	req: FastifyRequest,
	reply: FastifyReply
) {
	const registerProductBodySchema = z.object({
		name: z.string().min(2),
		price: z.number(),
	});

	const { name, price } = registerProductBodySchema.parse(req.body);

	try {
		const registerProductUseCase = await makeProductUseCase();
		await registerProductUseCase.execute({ name, price });
		return reply.status(201).send();
	} catch (error) {
		console.log(error);
	}
}
