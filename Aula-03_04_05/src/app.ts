import fastify from "fastify";
import { userRoutes } from "./http/routes/userRoutes";
import { ZodError } from "zod";
import { env } from "./env";
import fastifyJwt from "@fastify/jwt";
import cors from "@fastify/cors";

export const app = fastify();

app.register(cors, {
	origin: "*",
});

app.register(fastifyJwt, {
	secret: env.JWT_SECRET,
	sign: {
		expiresIn: "1d",
	},
});

app.register(userRoutes);

app.setErrorHandler((error, _request, reply) => {
	if (error instanceof ZodError) {
		return reply
			.status(400)
			.send({ message: "Validation error.", issues: error.format });
	}
	if (env.NODE_ENV !== "production") {
		console.error(error);
	}

	return reply.status(500).send({ message: "Internal server error." });
});
