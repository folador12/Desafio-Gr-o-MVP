import prismaClient from "../../prisma/index.js";

async function getAllRestaurantService(filter) {
  const whereClause = filter
    ? {
        OR: [
          {
            name: {
              contains: filter,
              mode: "insensitive",
            },
          },
          {
            products: {
              some: {
                OR: [
                  {
                    name: {
                      contains: filter,
                      mode: "insensitive",
                    },
                  },
                  {
                    description: {
                      contains: filter,
                      mode: "insensitive",
                    },
                  },
                ],
              },
            },
          },
        ],
      }
    : {};

  const restaurants = await prismaClient.restaurant.findMany({
    where: whereClause,
    include: {
      products: true,
    },
  });

  return restaurants;
}

export default getAllRestaurantService;
