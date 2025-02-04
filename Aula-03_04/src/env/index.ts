import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
	NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
	PORT: z.coerce.number().default(3000),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
	console.error(_env.error.format());
	throw new Error("Environment Invalid");
}

export const env = _env.data;
