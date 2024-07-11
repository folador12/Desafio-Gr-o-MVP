import prismaClient from "../../prisma/index.js";

async function getAllRCategoryService() {
  const categories = await prismaClient.category.findMany();

  return categories;
}

export default getAllRCategoryService;
