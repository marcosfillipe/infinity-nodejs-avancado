import fastify from "fastify";
import { useRoutes } from "./http/routes";

export const app = fastify();

app.register(useRoutes);
