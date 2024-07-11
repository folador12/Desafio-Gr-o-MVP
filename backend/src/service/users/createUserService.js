import bcrypt from "bcryptjs";
import prismaClient from "../../prisma/index.js";

async function createUserService({ email, name, cpf, password }) {
  // Verifica se já existe um usuário com o mesmo e-mail
  const existingEmail = await prismaClient.user.findUnique({
    where: {
      email,
    },
  });

  if (existingEmail) {
    throw new Error("E-mail já está em uso.");
  }

  // Verifica se já existe um usuário com o mesmo CPF
  const existingCpf = await prismaClient.user.findUnique({
    where: {
      cpf,
    },
  });

  if (existingCpf) {
    throw new Error("CPF já está em uso.");
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  await prismaClient.user.create({
    data: {
      email,
      name,
      cpf,
      password: hashedPassword,
    },
  });
}

export default createUserService;
