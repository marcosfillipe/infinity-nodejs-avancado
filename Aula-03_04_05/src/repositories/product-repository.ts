import { Product, Prisma } from "@prisma/client";

export interface ProductRepositorie {
	create(data: Prisma.ProductCreateInput): Promise<Product>;
}
