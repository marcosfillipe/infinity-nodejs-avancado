import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export class AddressRepositorie {
	async create(data: Prisma.AddressCreateInput) {
		const address = await prisma.address.create({ data });
		return address;
	}

	async findOne(data: Prisma.AddressCreateInput) {
		const address = await prisma.address.findUnique({ where: { id: data.id } });
		return address;
	}
}
