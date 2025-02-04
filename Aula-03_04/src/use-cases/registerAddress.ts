import { prisma } from "@/lib/prisma";
import { string } from "zod";

interface RegisterAddressCaseRequest {
	street: string;
	city: string;
	neighborhood: string;
	uf: string;
	user_id: string;
}

export class RegisterAddressUseCase {
	async execute({
		street,
		city,
		neighborhood,
		uf,
		user_id,
	}: RegisterAddressCaseRequest) {
		if (!user_id) {
			throw new Error("User id required");
		}

		const user = await prisma.user.findUnique({
			where: {
				id: user_id,
			},
		});
		if (!user) {
			throw new Error("User not found");
		}

		await prisma.address.create({
			data: {
				street,
				city,
				neighborhood,
				uf,
				user_id,
			},
		});
	}
}
