import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export class ProductRepositorie {
	async create(data: Prisma.ProductCreateInput) {
		const product = await prisma.product.create({ data });
		return product;
	}

	/* async findOne(data: Prisma.AddressCreateInput) {
    const address = await prisma.address.findUnique({ where: { id: data.id } });
    return address;
  } */
}
