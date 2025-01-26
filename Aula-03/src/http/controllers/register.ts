import { RegisterUseCase } from "@/use-cases/register";
import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {
	const registerBodySchema = z.object({
		username: z.string().min(4),
		password: z.string().min(6),
		email: z.string().email("Email Invalido!"),
		role: z.enum(["client", "employer"]).default("client"),
		first_name: z.string(),
		last_name: z.string(),
		phone: z.string().optional(),
	});

	const { username, email, first_name, last_name, password, role, phone } =
		registerBodySchema.parse(request.body);

	const registerUseCase = new RegisterUseCase();
	const user = await registerUseCase.create({
		username,
		email,
		password,
		first_name,
		last_name,
		role,
		phone,
	});

	return reply.status(201).send(`Usuário ${user.username} criado com sucesso!`);
}
