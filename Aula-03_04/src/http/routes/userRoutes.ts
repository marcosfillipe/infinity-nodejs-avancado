import { FastifyInstance } from "fastify";
import { register } from "../controllers/registerUser";

export async function userRoutes(app: FastifyInstance) {
	app.post("/user/save", register);
}
