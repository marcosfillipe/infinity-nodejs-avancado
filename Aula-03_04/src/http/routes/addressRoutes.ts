import { FastifyInstance } from "fastify";
import { address } from "../controllers/registerAddress";

export async function adressRoutes(app: FastifyInstance) {
	app.post("/address/save", address);
}
