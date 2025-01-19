import fastify from "fastify";
import { routeUser } from "../http/routes/routes-user.js";
/* import { registerController } from "../http/controllers/register.js";
import { consultaDadosBanco } from "../http/controllers/consulta.js"; */

const app = fastify();

/* app.get("/", consultaDadosBanco);
app.post("/", registerController); */

app.register(routeUser);

export default app;
