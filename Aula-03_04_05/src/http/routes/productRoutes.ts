import { FastifyInstance } from "fastify";
import { registerProduct } from "../controllers/registerProduct";

export async function productRoutes(app: FastifyInstance) {
	app.post("/product/save", registerProduct);
}
