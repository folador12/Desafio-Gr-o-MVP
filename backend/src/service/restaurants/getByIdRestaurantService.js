import prismaClient from "../../prisma/index.js";

async function getByIdRestaurantService(id) {
  const restaurant = await prismaClient.restaurant.findMany({
    where: {
      id,
    },
    include: {
      products: {
        select: {
          id: true,
          name: true,
          price: true,
          category: true,
          avatar: true,
          description: true,
        },
      },
    },
  });

  return restaurant;
}

export default getByIdRestaurantService;
