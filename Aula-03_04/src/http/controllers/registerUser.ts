import { RegisterUseCase } from "@/use-cases/registerUser";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
export async function register(req: FastifyRequest, reply: FastifyReply) {
	const registerBodySchema = z.object({
		firstName: z.string().min(2),
		lastname: z.string(),
		phone: z.string(),
		username: z.string(),
		password: z.string(),
		email: z.string().email(),
	});

	const { firstName, lastname, phone, email, password, username } =
		registerBodySchema.parse(req.body);

	try {
		const registerUseCase = new RegisterUseCase();
		const user = await registerUseCase.execute({
			firstName,
			lastname,
			phone,
			email,
			password,
			username,
		});
		return reply.status(201).send();
	} catch (error) {
		console.log(error);
		return;
	}
}
