import { registerController } from "../controllers/register.js";

export async function routeUser(fastify) {
	fastify.post("/", registerController);
}
