import { FastifyInstance } from "fastify";
import { registerAddress } from "../controllers/registerAddress";

export async function adressRoutes(app: FastifyInstance) {
	app.post("/address/save", registerAddress);
}
