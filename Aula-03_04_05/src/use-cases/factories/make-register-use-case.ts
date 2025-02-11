import { PrismaUsersRepositorie } from "@/repositories/prisma/prisma-user-repository";
import { RegisterUseCase } from "../register";

export async function makeRegisterUseCase() {
	const usersRepository = new PrismaUsersRepositorie();
	const registerUseCase = new RegisterUseCase(usersRepository);

	return registerUseCase;
}
