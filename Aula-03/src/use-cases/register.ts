import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

interface RegisterUserRequest {
	username: string;
	email: string;
	password: string;
	first_name: string;
	last_name: string;
	role?: string;
	phone?: string;
}

export class RegisterUseCase {
	async create({
		username,
		email,
		password,
		first_name,
		last_name,
		role,
		phone,
	}: RegisterUserRequest) {
		const passwordHash = await hash(password, 6);

		const user = await prisma.user.create({
			data: {
				username,
				email,
				password: passwordHash,
				first_name,
				last_name,
				phone,
				role,
			},
		});
		return user;
	}
}
