import { FastifyInstance } from "fastify";
import { register } from "./controllers/register";

export async function useRoutes(app: FastifyInstance) {
	app.post("/", register);
}
