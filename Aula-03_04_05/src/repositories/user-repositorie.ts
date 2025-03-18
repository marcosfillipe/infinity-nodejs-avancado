import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export class UserRepositorie {
	async create(data: Prisma.UserCreateInput) {
		const user = await prisma.user.create({ data });
		return user;
	}

	async findOne(data: Prisma.UserCreateInput) {
		const user = await prisma.user.findUnique({ where: { id: data.id } });
		return user;
	}

	async getAll(data: Prisma.UserFindManyArgs) {
		const users = await prisma.user.findMany(data);
		return users;
	}
}
