export async function registerController(req, res) {
	/* const informacoes = req.body; */

	const { user, senha, status } = req.body;
	const data = {
		user,
		senha,
		status,
	};

	return res.status(200).send({ data });
}
