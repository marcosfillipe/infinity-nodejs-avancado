import { RegisterProductUseCase } from "@/use-cases/registerProduct";
import { PrismaProductRepositorie } from "@/repositories/prisma/prisma-product-repository";

export async function makeProductUseCase() {
	const productRepository = new PrismaProductRepositorie();
	const productUseCase = new RegisterProductUseCase(productRepository);

	return productUseCase;
}
