import { prisma } from "../../lib/prisma.js";

export async function registerController(req, res) {
	const { username, email } = req.body;

	const userExists = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (userExists) {
		return res.status(400).send("Usuário já cadastrado!");
	}

	await prisma.user.create({
		data: {
			name: username,
			email,
		},
	});

	return res.status(201).send("Usuário criado com sucesso!");
}
