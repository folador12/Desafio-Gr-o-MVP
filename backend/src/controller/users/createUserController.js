import createUserService from "../../service/users/createUserService.js";

async function createUserController(req, res) {
  try {
    const { email, name, cpf, password } = req.body;
    await createUserService({ email, name, cpf, password });

    return res.status(201).json({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}

export default createUserController;
