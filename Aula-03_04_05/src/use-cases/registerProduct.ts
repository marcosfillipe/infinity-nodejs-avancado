import { prisma } from "@/lib/prisma";
import { ProductRepositorie } from "@/repositories/product-repository";

interface RegisterProductUseCaseRequest {
	name: string;
	price: GLfloat;
}

export class RegisterProductUseCase {
	constructor(private productRepository: ProductRepositorie) {}

	async execute({ name, price }: RegisterProductUseCaseRequest) {
		const product = await prisma.product.create({ data: { name, price } });
		return product;
	}
}
