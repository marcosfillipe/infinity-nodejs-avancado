import fastify from "fastify";
import { userRoutes } from "./http/routes/userRoutes";
import { adressRoutes } from "./http/routes/addressRoutes";

export const app = fastify();

app.register(userRoutes);
app.register(adressRoutes);
