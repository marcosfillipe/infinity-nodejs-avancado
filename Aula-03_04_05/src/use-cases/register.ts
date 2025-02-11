import { UsersRepositorie } from "@/repositories/user-repository";
import { hash } from "bcryptjs";
import { UsersAlreadyExistsError } from "./errors/users-already-exists-error";

interface RegisterUseCaseRequest {
	firstName: string;
	lastname: string;
	phone: string;
	email: string;
	password: string;
	username: string;
}

export class RegisterUseCase {
	constructor(private usersRepository: UsersRepositorie) {}

	async execute({
		email,
		firstName,
		lastname,
		password,
		phone,
		username,
	}: RegisterUseCaseRequest) {
		const userWithSameEmailOrUsername = await this.usersRepository.findOne(
			email,
			username
		);

		if (userWithSameEmailOrUsername) {
			throw new UsersAlreadyExistsError();
		}

		const password_hash = await hash(password, 6);

		await this.usersRepository.create({
			email,
			firstName,
			lastname,
			password_hash,
			phone,
			username,
		});
	}
}
