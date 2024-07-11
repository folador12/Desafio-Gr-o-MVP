import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prismaClient from "../../prisma/index.js";

async function loginUserService({ email, password }) {
  const user = await prismaClient.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Usuário não encontrado.");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Email ou senha incorretos.");
  }

  const secret = process.env.SECRET;

  const token = jwt.sign({ id: user.id }, secret, {
    expiresIn: "1d",
  });

  const { id, name, email: userEmail, cpf } = user;

  return { user: { id, name, email: userEmail, cpf }, token };
}

export default loginUserService;
